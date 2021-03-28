import * as React from "react"
import { useHistory } from "react-router-dom"
import styled from "styled-components"

interface IProps {}

export const Join = React.memo<IProps>((props) => {
  const history = useHistory()

  const onSubmit = React.useCallback((ev) => {
    const nickname = ev.target.elements[0].value
    const channel = ev.target.elements[1].value
    history.replace(`/c/${channel}/u/${nickname}`)
  }, [])

  return (
    <JoinWrapper>
      <ContentWrapper>
        <form {...{ onSubmit }}>
          <input autoComplete="off" name="nickname" placeholder="nickname" />
          <input autoComplete="off" name="channel" placeholder="channel" />
          <button>Join</button>
        </form>
      </ContentWrapper>
    </JoinWrapper>
  )
})

Join.displayName = "Join"

const JoinWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 100%;
  width: 100%;
  min-height: 100%;
`
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;

  form {
    display: flex;
    flex-direction: column;

    input {
      display: block;
      padding: 0.75rem 1rem;
      -webkit-appearance: none;
      appearance: none;
      border: 1px solid #999;
      border-radius: 0;

      &:focus {
        outline: 0;
        border-left: 3px solid blue;
      }

      & + input {
        border-top: 0;
      }
    }

    button {
      margin-top: 0.5rem;
      padding: 0.75rem 1.5rem;
      background: blue;
      color: white;
      text-align: center;
      display: block;
      border-radius: 0;
      border: 0;
      -webkit-appearance: none;
      appearance: none;

      &:focus {
        outline: 0;
        background: gray;
      }
    }
  }
`
