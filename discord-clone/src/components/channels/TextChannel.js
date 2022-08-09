import React from 'react'
import styled from 'styled-components'
import color from '../../colors/colors.js'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import ServerListState from '../../state/ServerListState.js'
import { useRecoilState } from 'recoil'
import CurrentElementState from '../../state/CurrentElementState.js'

const Container = styled.div`
  display: flex;
  align-items: center;
  overflow: visible;
  padding: 10px 20px;
  cursor: pointer;
  background-color: ${props => props.selected ? color.backgroundQuaterniary: color.backgroundSecondary};
  border-radius: ${props => props.selected ? '0.5rem' : '0px'};
  &:hover {
      border-radius: 0.5rem;
      background-color: ${props => props.selected ? color.backgroundQuaterniary : color.backgroundPrimary};
    }
`

const Icon = styled.div`
  width: 2.7rem;
  height: 2.7rem;
  border-radius: 5rem;
`

const Name = styled.h1`
  box-sizing: border-box;
  border-radius: 4px;
  margin: 8px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  font-size: 15px;
  left: 5rem;
  display: ${props => props.show};
`

function TextChannel({channelObj, selected, index}) {
  
  const [serversState, setServersState] = useRecoilState(ServerListState)
  const [indexes, setIndexes] = useRecoilState(CurrentElementState)

  function onClick() {

    let newIndexes = JSON.parse(JSON.stringify(indexes))
    newIndexes.channelIndex = index

    setIndexes(newIndexes)
  }

  return (
    <Container onClick={onClick} selected={selected}>
      <FontAwesomeIcon icon={solid('hashtag')} />
      <Name>{channelObj.name}</Name>
    </Container>
  )
}

export default TextChannel