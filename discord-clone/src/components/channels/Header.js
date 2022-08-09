import React from 'react'
import styled from 'styled-components'
import color, { backgroundPrimary } from '../../colors/colors.js'
import TextChannel from './TextChannel'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

const Container = styled.section`
    border-radius: 10px 0 0 0;
    width: 17rem;
    max-width: 17rem;
    height: 4rem;
    background-color: ${color.backgroundSecondary};
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px;
    z-index: 2000;
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
    padding: 0.5rem;
`

const B = styled.div`
    padding: 0.5rem;
    
    &:hover {
        border-radius: 0.5rem;

        background-color: ${color.backgroundQuaterniary};
    }
`

const FontContainer = styled.div`
    cursor: pointer;
    border-radius: 0.5rem;

    &:hover {
        background-color: ${color.backgroundQuaterniary};
    }
`

function Header() {
    return (
        <Container>
            TopNav
        </Container>
    )
}

export default Header