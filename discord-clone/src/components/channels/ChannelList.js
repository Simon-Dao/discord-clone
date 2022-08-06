import React, { useState } from 'react'
import styled from 'styled-components'
import color from '../../colors/colors.js'
import TextChannel from './TextChannel'
import OptionMenu from './OptionMenu.js'

const Container = styled.section`
    display: flex;
    flex-direction: column;
    width: 17rem;
    min-width: 17rem;
    height: calc(100vh - 2rem);
    background-color: ${color.backgroundSecondary};
    overflow-y: scroll;
    border-radius: 10px 0 0 0;
    box-sizing: border-box;
    &::-webkit-scrollbar-thumb {
      background-color: ${color.backgroundTertiary};
      border-radius: 100px;
    }
    &::-webkit-scrollbar-track {
      width: 5px;
    }
    &::-webkit-scrollbar {
      width: 5px;
    }
`

function ChannelList() {

  let message = {
    userId: '',
    userName: 'Simon',
    date: '8/5/2022',
    message: 'yo, I\'m such a gamer aaaaa aaaa aaa aaaaaa aaaa aaaaa aaaa aaa aaaaaa aaaa aaaaa aaaa aaa aaaaaa aaaa aaaaa aaaa aaa aaaaaa aaaa aaaaa aaaa aaa aaaaaa aaaa aaaaa aaaa aaa aaaaaa aaaa aaaaa aaaa aaa aaaaaa aaaa aaaaa aaaa aaa aaaaaa aaaa aaaaa aaaa aaa aaaaaa aaaa'
  }

  let channel = {
    messages: [message]
  }

  let temp = []

  for (let i = 0; i < 30; i++) {
    temp.push(channel)
  }

  const [channels, setChannels] = useState(temp)

  return (
      <Container>
        {
          channels.map((channel, index) => {
            return (
              <TextChannel key={index} channelObj={channel}></TextChannel>
            )
          })
        }
        <OptionMenu></OptionMenu>
      </Container>

  )
}

export default ChannelList