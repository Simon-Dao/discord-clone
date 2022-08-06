
import styled from 'styled-components'
import '../src/index.css'
import ChannelList from './components/channels/ChannelList'
import UserList from './components/users/UserList'
import ServerList from './components/servers/ServerList'
import TextArea from './components/text/TextArea'
import Header from './components/header/Header'
import TopNav from './components/TopNav'
import React from 'react'

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 100vw;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
`

const SubContainer = styled.main`
  display: flex;
  flex-grow: 1;
`

const Container = styled.section`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`

function App() {
  return (
    <MainContainer>
      <Header></Header>
      <SubContainer>
        <ServerList></ServerList>
        <ChannelList></ChannelList>
        <Container>
          <TopNav></TopNav>
          <SubContainer>
            <TextArea></TextArea>
            <UserList></UserList>
          </SubContainer>
        </Container>
      </SubContainer>
    </MainContainer>
  );
}

export default App;