import React, { useState } from 'react'
import styled from 'styled-components'
import color from '../../colors/colors.js'
import { useRecoilState } from 'recoil'
import CurrentElementState from '../../state/CurrentElementState.js'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.7rem;
  border-radius: 5rem;
  background-color: ${color.red};
  margin-top: .5rem;
  overflow: visible;
  transition: 100ms ease;
  &:hover {
      border-radius: 1rem;
      transition: 100ms ease;
    }
  `

const Icon = styled.div`
  width: 2.7rem;
  height: 2.7rem;
  border-radius: 5rem;
  cursor: pointer;
  
`

const Name = styled.h1`
  box-sizing: border-box;
  border-radius: 4px;
  margin: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  font-size: 15px;
  position: absolute;
  height: 40px;
  left: 4.5rem;
  background-color: ${color.backgroundTertiary};
  display: ${props => props.show};
`

const NameTriangle = styled.div`
  width: 10px;
  height: 10px;
  transform: rotate(45deg);
  position: absolute;
  left: 4.7rem;
  display: ${props => props.show};
  background-color: ${color.backgroundTertiary};
`

function Server({ serverObj, index }) {

  function mouseEnter() {
    setShowName(true)
  }

  function mouseLeave() {
    setShowName(false)
  }

  
  const [showName, setShowName] = useState(false)
  const [indexes, setIndexes] = useRecoilState(CurrentElementState)

  function onClick() {
    let newIndexes = JSON.parse(JSON.stringify(indexes))
    newIndexes.serverIndex = index

    setIndexes(newIndexes)
  }

  return (
    <Container onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
      <Icon onClick={onClick}></Icon>
      <NameTriangle show={showName ? 'block' : 'none'}></NameTriangle>
      <Name show={showName ? 'block' : 'none'}>{serverObj.name}</Name>
    </Container>
  )
}

export default Server