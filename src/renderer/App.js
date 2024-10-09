import React, { useState } from 'react';
import styled from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import TopBar from './components/TopBar';
import ChannelList from './components/ChannelList';
import Chat from './components/Chat';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const MainContent = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`;

const App = () => {
  const [currentServer, setCurrentServer] = useState('M');
  const [currentChannel, setCurrentChannel] = useState('general');

  const handleServerChange = (server) => {
    setCurrentServer(server);
    setCurrentChannel(server === 'M' ? 'general' : server === 'G' ? 'gaming' : 'music');
  };

  const handleChannelChange = (channel) => {
    setCurrentChannel(channel);
  };

  return (
    <>
      <GlobalStyles />
      <AppContainer>
        <TopBar currentServer={currentServer} onServerChange={handleServerChange} />
        <MainContent>
          <ChannelList 
            currentServer={currentServer} 
            currentChannel={currentChannel} 
            onChannelChange={handleChannelChange} 
          />
          <Chat currentServer={currentServer} currentChannel={currentChannel} />
        </MainContent>
      </AppContainer>
    </>
  );
};

export default App;