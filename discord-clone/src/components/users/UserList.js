import React, { useState } from 'react'
import styled from 'styled-components'
import color from '../../colors/colors.js'
import User from './User.js'

const Container = styled.section`
    display: flex;
    flex-direction: column;
    width: 17rem;
    min-width: 17rem;
    max-width: 17rem;
    height: calc(100vh - 6rem);
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

  let temp = {
    userId: '',
    userName: 'Simon'
  }

  let a = []

  for (let i = 0; i < 35; i++) {
    a.push(temp)
  }

  const [users, setUsers] = useState(a)

  return (
    <Container>
      {
        users.map((user, index) => {
          return (
            <User key={index} userObj={user}></User>
          )
        })
      }
    </Container>
  )
}

export default UserList