import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import color from '../../colors/colors.js'
import Message from './Message.js'
import SearchBar from './SearchBar.js'

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
    padding: 2rem;
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

    let temp = {
        userId: '',
        userName: 'Simon',
        date: '8/5/2022',
        message: 'yo, I\'m such a gamer aaaaa aaaa aaa aaaaaa aaaa aaaaa aaaa aaa aaaaaa aaaa aaaaa aaaa aaa aaaaaa aaaa aaaaa aaaa aaa aaaaaa aaaa aaaaa aaaa aaa aaaaaa aaaa aaaaa aaaa aaa aaaaaa aaaa aaaaa aaaa aaa aaaaaa aaaa aaaaa aaaa aaa aaaaaa aaaa aaaaa aaaa aaa aaaaaa aaaa'
    }

    let a = []

    for(let i = 0; i < 50; i++) {
        a.push(temp)
    }
    const [messages, setMessages] = useState(a)

    const lastMessage = useRef(null)

    useEffect(() => {
        lastMessage.current.scrollIntoView();
    },[])

    return (
        <Container>
            <SearchBar></SearchBar>

            <MessageContainer>
                {
                    messages.map((message, index) => {   
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