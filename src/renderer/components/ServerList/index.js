import React from 'react';
import styled from 'styled-components';

const ServerListContainer = styled.div`
  width: 80px;
  background-color: #15161a;
  height: 100%;
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ServerIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 15px;
  background-color: #2e3035;
  margin-bottom: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #7289da;
  font-weight: bold;
  font-size: 24px;
  transition: all 0.2s;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
    background-color: #3a3c42;
  }
`;

const ServerList = () => {
  return (
    <ServerListContainer>
      <ServerIcon>M</ServerIcon>
      <ServerIcon>G</ServerIcon>
      <ServerIcon>+</ServerIcon>
    </ServerListContainer>
  );
};

export default ServerList;