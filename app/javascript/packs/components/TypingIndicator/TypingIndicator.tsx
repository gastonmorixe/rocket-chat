import * as React from "react"
import styled from "styled-components"
import { useSubscription, useMutation } from "@apollo/client"

import UserInChannelTypingMutation from "./UserInChannelTypingMutation.graphql"
import UserTypingForChannelSubscription from "./UserTypingForChannelSubscription.graphql"

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
  onSubscriptionData: (subscriptionData: unknown) => unknown
}

const SubscriptionCall = React.memo<ISubscriptionCall>((props) => {
  const { onSubscriptionData, channelName } = props
  useSubscription(UserTypingForChannelSubscription, {
    variables: { channelName },
    onSubscriptionData: (options) => {
      const { client, subscriptionData } = options
      console.log("[SubscriptionCall] [onSubscriptionData]", {
        client,
        subscriptionData,
      })
      onSubscriptionData(subscriptionData)
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

  const onSubscriptionData = React.useCallback(
    (subscriptionData) => {
      console.log("[TypingIndicator] [onSubscriptionData]", {
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
      <SubscriptionCall {...{ onSubscriptionData, channelName }} />
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
