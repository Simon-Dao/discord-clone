import React from 'react'
import styled from 'styled-components'
import color from '../../colors/colors.js'
import SearchBar from './SearchBar.js'

const Container = styled.div`
    flex-grow: 1;
    box-sizing: border-box;
    padding-right: 3rem;
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
  margin-top: 3rem;
`

const MessageText =styled.p`
  font-size: 1.3rem;
  padding: 0;
  margin: .2rem;
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