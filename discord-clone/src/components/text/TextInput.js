import React, { useState } from 'react'
import styled from 'styled-components'
import color from '../../colors/colors.js'

import { useRecoilState } from 'recoil'
import ServerListState from '../../state/ServerListState.js'
import CurrentElementState from '../../state/CurrentElementState.js'

import { getDateString } from '../utils/Date'

const Container = styled.div`
    box-sizing: border-box;
    height: 5rem;
    width: 100%;
    background-color: ${color.backgroundPrimary};
    display: flex;
    align-items: center;
`
const TextInputContainer = styled.div`
    box-sizing: border-box;
    flex-grow: 1;
    height: 3rem;
    margin: 0px 2rem;
    border-radius: 6px;
    padding: 0 1rem;
    background-color: ${color.backgroundQuaterniary};
    display: flex;
    align-items: center;
`

const TextInputElement = styled.input`
    background-color: ${color.backgroundQuaterniary};
    border: none;
    outline: none;
    color: ${color.textPrimary};
    font-size: 1.5rem;
    width: 100%;
`

function TextInput() {

    const [text, setText] = useState('')
    const [serversState, setServersState] = useRecoilState(ServerListState)
    const [indexes, setIndexes] = useRecoilState(CurrentElementState)

    function onEnter(e) {
        if (e.key !== "Enter") return

        setText("")

        let newServers = JSON.parse(JSON.stringify(serversState))

        let currentChannel = newServers[indexes.serverIndex].channels[indexes.channelIndex]

        console.log(currentChannel)

        currentChannel.messages.push({
            userId: '',
            userName: 'Simon',
            date: getDateString(),
            message: text
        })

        setServersState(newServers)
    }

    function onChange(e) {
        setText(e.target.value)
    }

    return (
        <Container>
            <TextInputContainer>
                <TextInputElement value={text} onChange={onChange} onKeyDown={onEnter} placeholder='Message' ></TextInputElement>
            </TextInputContainer>
        </Container>
    )
}

export default TextInput