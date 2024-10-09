import React from 'react';
import styled from 'styled-components';

const TopBarContainer = styled.div`
  height: 60px;
  background-color: #252525;
  display: flex;
  align-items: center;
  padding: 0 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
`;

const ServerIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background-color: ${props => props.active ? '#7c5295' : '#333'};
  margin-right: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #7c5295;
    transform: translateY(-2px);
  }
`;

const TopBar = ({ currentServer, onServerChange }) => {
  const servers = [
    { id: 'M', name: 'MurChat' },
    { id: 'G', name: 'Gaming' },
    { id: 'C', name: 'Chill Zone' },
  ];

  return (
    <TopBarContainer>
      {servers.map(server => (
        <ServerIcon
          key={server.id}
          active={currentServer === server.id}
          onClick={() => onServerChange(server.id)}
        >
          {server.id}
        </ServerIcon>
      ))}
    </TopBarContainer>
  );
};

export default TopBar;