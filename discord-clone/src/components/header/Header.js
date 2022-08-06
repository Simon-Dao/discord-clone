import React from 'react'
import styled from 'styled-components'
import color from '../../colors/colors.js'

const HeaderElement = styled.header`
    width: 100%;
    height: 1.5rem;
    background-color: ${color.backgroundTertiary};
    color: ${color.textPrimary};
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding-left: 2rem;
    font-size: 0.7rem;
    font-weight: bold;
`

function Header() {

    return (
        <HeaderElement>
            Discord
        </HeaderElement>
    )
}

export default Header