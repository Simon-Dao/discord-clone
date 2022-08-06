import React from 'react'
import styled from 'styled-components'
import color from '../../colors/colors.js'

const Container = styled.div`
    box-sizing: border-box;
    height: 5rem;
    width: 100%;
    background-color: ${color.backgroundPrimary};
    display: flex;
    align-items: center;
`

const SearchContainer = styled.div`
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

const SearchBarElement = styled.input`
    background-color: ${color.backgroundQuaterniary};
    border: none;
    outline: none;
    color: ${color.textPrimary};
    font-size: 1.5rem;
    width: 100%;
` 

function SearchBar() {
  return (
    <Container>
        <SearchContainer>
            <SearchBarElement placeholder='Message' ></SearchBarElement>
        </SearchContainer>
    </Container>
  )
}

export default SearchBar