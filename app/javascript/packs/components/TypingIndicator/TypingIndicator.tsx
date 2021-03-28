import * as React from "react"
import styled from "styled-components"
import { useSubscription, useMutation } from "@apollo/client"

import UserInChannelTypingMutation from "./UserInChannelTypingMutation.graphql"
import UserTypingForChannelSubscription from "./UserTypingForChannelSubscription.graphql"
import NewMessageSubscription from "../MessagesList/NewMessageSubscription.graphql"

interface ITypingIndicator {
  nickname: string
  channelName: string
}

export const useSetUserIsTyping = (options: {
  channelName: string
  nickname: string
}) => {
  const { channelName, nickname } = options
  const [send, data] = useMutation(UserInChannelTypingMutation, {
    variables: { channelName, nickname },
  })
  return send
}

interface ISubscriptionCall {
  channelName: string
  onUserTyping: (subscriptionData: unknown) => unknown
  onNewMessage: (subscriptionData: unknown) => unknown
}

const SubscriptionCall = React.memo<ISubscriptionCall>((props) => {
  const { onUserTyping, onNewMessage, channelName } = props

  useSubscription(NewMessageSubscription, {
    variables: { channelName },
    onSubscriptionData: (options) => {
      const { client, subscriptionData } = options
      console.log(
        "[SubscriptionCall] #NewMessageSubscription #onSubscriptionData",
        {
          client,
          subscriptionData,
        }
      )
      onNewMessage(subscriptionData)
    },
  })

  useSubscription(UserTypingForChannelSubscription, {
    variables: { channelName },
    onSubscriptionData: (options) => {
      const { client, subscriptionData } = options
      console.log(
        "[SubscriptionCall] #UserTypingForChannelSubscription #onSubscriptionData",
        {
          client,
          subscriptionData,
        }
      )
      onUserTyping(subscriptionData)
    },
  })
  return null
})

SubscriptionCall.displayName = "SubscriptionCall"

export const TypingIndicator = React.memo<ITypingIndicator>((props) => {
  console.log(`[TypingIndicator render]`, { props })

  const { nickname, channelName } = props

  const [participants, setParticipants] = React.useState(() => {
    return {} as Record<string, ReturnType<typeof setTimeout>>
  })

  const onNewMessage = React.useCallback((subscriptionData) => {
    console.log("[TypingIndicator] [onNewMessage]", {
      subscriptionData,
    })
    const newMessage = subscriptionData?.data?.newMessage
    const newMessageCreatedByNickname = newMessage?.createdBy?.nickname

    if (!newMessageCreatedByNickname) {
      console.log("[TypingIndicator] #onNewMessage skipping missing nickname")
      return
    }

    // Remove nickname from typing list when new message from them arrives.
    setTimeout(() => {
      setParticipants((list) => {
        if (Object.keys(list).includes(newMessageCreatedByNickname)) {
          clearTimeout(list[newMessageCreatedByNickname])
          delete list[newMessageCreatedByNickname]
          console.log("[Typingindicator] #onNewMessage delete participant", {
            newMessageCreatedByNickname,
            list,
          })
          return { ...list }
        }
        return list
      })
    }, 100) // delay a bit to account for network delays
  }, [])

  const onUserTyping = React.useCallback(
    (subscriptionData) => {
      console.log("[TypingIndicator] [onUserTyping]", {
        subscriptionData,
      })

      const typingNickname =
        subscriptionData?.data?.userTypingForChannel?.createdBy?.nickname

      if (!typingNickname) {
        console.log(
          "[TypingIndicator] #onSubscriptionData missing typingNickname"
        )
        return
      }

      // Skip current user
      if (typingNickname === nickname) {
        return
      }

      const generateNewTimout = () => {
        return setTimeout(() => {
          setParticipants((list) => {
            if (Object.keys(list).includes(typingNickname)) {
              return Object.entries(list).reduce((acc, [k, v]) => {
                if (k === typingNickname) {
                  return acc
                }
                return { ...acc, [k]: v }
              }, {})
            } else {
              return list
            }
          })
        }, 2000)
      }

      setParticipants((list: typeof participants) => {
        if (Object.keys(list).includes(typingNickname)) {
          const oldTimeout = list[typingNickname]
          clearTimeout(oldTimeout)
        }

        const newTimeout = generateNewTimout()
        list[typingNickname] = newTimeout
        return { ...list }
      })
    },
    [setParticipants]
  )

  const show = !!Object.keys(participants)?.length
  const participantsNames = show && Object.keys(participants)

  return (
    <>
      <SubscriptionCall {...{ onUserTyping, onNewMessage, channelName }} />
      {show && (
        <TypingIndicatorWrapper>
          <TypingIndicatorContentWrapper>
            {`${participantsNames?.join(", ")} ${
              participantsNames?.length > 1 ? "are" : "is"
            } typing...`}
          </TypingIndicatorContentWrapper>
        </TypingIndicatorWrapper>
      )}
    </>
  )
})

TypingIndicator.displayName = "TypingIndicator"

const TypingIndicatorWrapper = styled.div`
  display: flex;
  line-height: 0;
  font-size: 0.8rem;
  height: 0;
  position: relative;
  width: 100%;
  color: #888;
`

const TypingIndicatorContentWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 0.25rem 1.5rem 0.3rem;
  position: absolute;
  bottom: 0;
  line-height: 1;
  background: white;
`
