import React from 'react'
import styled from 'styled-components'
import color from '../../colors/colors.js'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

const Container = styled.div`
box-sizing: border-box;
  display: flex;
  align-items: center;
  overflow: visible;
  padding-left: .8rem;

  &:hover {
      border-radius: 0.5rem;
      background-color: ${color.backgroundQuaterniary};
    }
`

const Icon = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 5rem;
  background-color: aliceblue;
`

const Name = styled.h1`
  box-sizing: border-box;
  border-radius: 4px;
  margin: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  font-size: 15px;
  left: 5rem;
  display: ${props => props.show};
`

function User({userObj}) {
  return (
    <Container>
      <Icon></Icon>
      <Name>{userObj.userName}</Name>
    </Container>
  )
}

export default User