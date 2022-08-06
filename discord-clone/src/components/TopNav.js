import React from 'react'
import styled from 'styled-components'
import color from '../colors/colors'

const HeaderElement = styled.header`
    width: 100%;
    height: 4rem;
    box-sizing: border-box;
    background-color: ${color.backgroundPrimary};
    color: ${color.textPrimary};
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding-left: 2rem;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px;
    z-index: 1000;
`

function TopNav() {

    return (
        <HeaderElement>
            TopNav
        </HeaderElement>
    )
}

export default TopNav