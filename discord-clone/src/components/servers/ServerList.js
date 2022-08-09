import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import ServerListState from '../../state/ServerListState.js'
import CurrentElementState from '../../state/CurrentElementState.js'

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

  const [serversState, setServersState] = useRecoilState(ServerListState)
  const [indexes, setIndexes] = useRecoilState(CurrentElementState)

  return (
    <Container>
        {
          serversState.map((server, index) => {
            
            let selected = server.name === serversState.name

            return (
              <Server key={index} index={index} serverObj={server}></Server>
            )
          })
        }
    </Container>
  )
}

export default ServerList