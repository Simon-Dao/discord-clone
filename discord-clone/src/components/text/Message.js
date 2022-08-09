import React from 'react'
import styled from 'styled-components'
import color from '../../colors/colors.js'
import SearchBar from './TextInput'
import ServerListState from '../../state/ServerListState.js'

const Container = styled.div`
    box-sizing: border-box;
    padding: 1rem;
    &:hover {
      background-color: ${color.backgroundSecondary};
      border-radius: 1rem;
    }
`

const Vert = styled.div`
`

const Horiz = styled.div`
  display: flex;
  align-items: center;
`

const InfoText = styled.h1`
  color: ${color.blue};
  margin-right: 30px;
`

const MessageText =styled.p`
  font-size: 1.3rem;
  padding: 0;
`


function Message({ message }) {

  return (
    <Container>
      <Horiz>
        <Vert>
          <Horiz>
            <InfoText>{message.userName}</InfoText>
            <InfoText>{message.date}</InfoText>
          </Horiz>
          <MessageText>{message.message}</MessageText>
        </Vert>
      </Horiz>
    </Container>
  )
}

export default Message