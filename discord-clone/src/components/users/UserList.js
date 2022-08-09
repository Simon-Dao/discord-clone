import React, { useState } from 'react'
import styled from 'styled-components'
import color from '../../colors/colors.js'
import User from './User.js'
import { useRecoilState } from 'recoil'
import ServerListState from '../../state/ServerListState.js'
import CurrentElementState from '../../state/CurrentElementState.js'

const Container = styled.section`
    display: flex;
    flex-direction: column;
    width: 17rem;
    min-width: 17rem;
    max-width: 17rem;
    height: calc(100vh - 5rem);
    background-color: ${color.backgroundSecondary};
    overflow-y: scroll;
    scrollbar-color: ${color.backgroundTertiary};
    box-sizing: border-box;
    padding: 1rem;

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

function UserList() {

  const [serversState, setServersState] = useRecoilState(ServerListState)
  const [indexes, setIndexes] = useRecoilState(CurrentElementState)

  return (
    <Container>
      {
        serversState[indexes.serverIndex].users.map((user, index) => {
          return (
            <User key={index} userObj={user}></User>
          )
        })
      }
    </Container>
  )
}

export default UserList