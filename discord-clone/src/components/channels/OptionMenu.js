import React from 'react'
import styled from 'styled-components'
import color from '../../colors/colors.js'
import TextChannel from './TextChannel'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

const Container = styled.section`
    position: absolute;
    bottom: 0;
    width: 17rem;
    max-width: 17rem;
    height: 5rem;
    background-color: #292b2f;
    display: flex;
    align-items: flex-end;
    padding: 1rem;
    box-sizing: border-box;
`
const Name = styled.div`
    font-size: 1.3rem;
    color: antiquewhite;
    margin-right: auto;
`
const Icon = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 5rem;
  background-color: aliceblue;
  margin-right: 1rem;
`

const A = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`

const FontContainer = styled.div`

    border-radius: 0.5rem;

    &:hover {
        background-color: ${color.backgroundQuaterniary};
    }
`

function OptionMenu() {
    return (
        <Container>
            <A>
                <Icon></Icon>
                <Name>simon</Name>

                <FontContainer style={{padding:'10px 10px 10px 10px'}}>
                    <FontAwesomeIcon icon={solid('microphone')} />
                </FontContainer>

                <FontContainer style={{padding:'10px 10px 10px 10px'}}>
                    <FontAwesomeIcon icon={solid('headphones')} />
                </FontContainer>
            </A>
        </Container>
    )
}

export default OptionMenu