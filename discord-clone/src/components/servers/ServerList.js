import React, { useState } from 'react'
import styled from 'styled-components'
import color from '../../colors/colors.js'
import Server from './Server.js'

const Container = styled.section`
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    width: 4.5rem;
    max-width: 4.5rem;
    min-width: 4.5rem;
    height: calc(100vh - 2rem);
    overflow-y: scroll;
    background-color: ${color.backgroundTertiary};
    scrollbar-color: ${color.backgroundTertiary};
    align-items: center;

    &::-webkit-scrollbar-thumb {
      display: none;
    }
`

function ServerList() {

  let user = {
    userId: '',
    userName: 'Simon'
  }

  let message = {
    userId: '',
    userName: 'Simon',
    date: '8/5/2022',
    message: 'yo, I\'m such a gamer aaaaa aaaa aaa aaaaaa aaaa aaaaa aaaa aaa aaaaaa aaaa aaaaa aaaa aaa aaaaaa aaaa aaaaa aaaa aaa aaaaaa aaaa aaaaa aaaa aaa aaaaaa aaaa aaaaa aaaa aaa aaaaaa aaaa aaaaa aaaa aaa aaaaaa aaaa aaaaa aaaa aaa aaaaaa aaaa aaaaa aaaa aaa aaaaaa aaaa'
  }

  let channel = {
    messages: [message]
  }

  let temp = {
    name: 'serber',
    users: [user],
    channels: [channel],
  }

  let a = []

  for (let i = 0; i < 35; i++) {
    a.push(temp)
  }

  const [servers, setServers] = useState(a)

  return (
    <Container>
        {
          servers.map((server, index) => {

            return (
              <Server key={index} serverObj={server}></Server>
            )
          })
        }
    </Container>
  )
}

export default ServerList