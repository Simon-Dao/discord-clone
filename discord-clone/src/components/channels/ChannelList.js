import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import styled from 'styled-components'
import color from '../../colors/colors.js'
import TextChannel from './TextChannel'
import OptionMenu from './OptionMenu.js'
import Header from './Header.js'
import ServerListState from '../../state/ServerListState.js'
import CurrentElementState from '../../state/CurrentElementState.js'

const Container = styled.section`
    display: flex;
    flex-direction: column;
    width: 17rem;
    min-width: 17rem;
    height: calc(100vh - 10rem);
    background-color: ${color.backgroundSecondary};
    overflow-y: scroll;
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

  const [serversState, setServersState] = useRecoilState(ServerListState)
  const [indexes, setIndexes] = useRecoilState(CurrentElementState)

  return (
    <section>
      <Header></Header>
      <Container>
        {
          serversState[indexes.serverIndex].channels.map((channel, index) => {
            let selected = index === indexes.channelIndex

            return (
              <TextChannel selected={selected} index={index} key={index} channelObj={channel}></TextChannel>
            )
          })
        }
      </Container>
        <OptionMenu></OptionMenu>
    </section>
      

  )
}

export default ChannelList