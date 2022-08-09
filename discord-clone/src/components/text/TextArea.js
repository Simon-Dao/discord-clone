import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import color from '../../colors/colors.js'
import Message from './Message.js'
import TextInput from './TextInput'
import { useRecoilState } from 'recoil'
import ServerListState from '../../state/ServerListState.js'
import CurrentElementState from '../../state/CurrentElementState.js'

//please fix this css it is so fucked on so many levels

const Container = styled.section`
    width: 100%;
    background-color: ${color.backgroundPrimary};
    min-width: 25rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column-reverse;
    overflow: hidden;
`

const MessageContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    box-sizing: border-box;
    padding: 0 2rem;
    overflow-y: scroll;
    height: 300px;
    margin-right: 0.5rem;
    margin-top: 0.5rem;
    &::-webkit-scrollbar-thumb {
        border-radius: 1rem;
        background: ${color.backgroundTertiary};
    }
    &::-webkit-scrollbar-track {
        background-color: ${color.backgroundSecondary};
        border-radius: 1rem;
    }
`

function TextArea() {

    const [serversState, setServersState] = useRecoilState(ServerListState)
    const [indexes, setIndexes] = useRecoilState(CurrentElementState)

    const lastMessage = useRef(null)

    useEffect(() => {
        lastMessage.current.scrollIntoView();//{behavior:'smooth'});
    },[indexes, serversState])

    return (
        <Container>
            <TextInput></TextInput>

            <MessageContainer>
                {
                    serversState[indexes.serverIndex].channels[indexes.channelIndex].messages.map((message, index) => {   
                        return (
                            <Message key={index} message={message}></Message>
                        )
                    })
                }
                <div ref={lastMessage}></div>
            </MessageContainer>
        </Container>
    )
}

export default TextArea