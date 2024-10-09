import React from 'react';
import styled from 'styled-components';

const UserPanelContainer = styled.div`
  width: 240px;
  background-color: #1e1f23;
  padding: 20px;
`;

const UserItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 8px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #2a2b30;
  }
`;

const UserAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #7289da;
  margin-right: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled.span`
  color: #ffffff;
  font-weight: 600;
`;

const UserStatus = styled.span`
  color: #a0a0a0;
  font-size: 12px;
  margin-top: 3px;
`;

const UserPanel = () => {
  return (
    <UserPanelContainer>
      <UserItem>
        <UserAvatar>P1</UserAvatar>
        <UserInfo>
          <UserName>Player1</UserName>
          <UserStatus>Online</UserStatus>
        </UserInfo>
      </UserItem>
      <UserItem>
        <UserAvatar>G4</UserAvatar>
        <UserInfo>
          <UserName>GamerGirl42</UserName>
          <UserStatus>In Game</UserStatus>
        </UserInfo>
      </UserItem>
      <UserItem>
        <UserAvatar>N3</UserAvatar>
        <UserInfo>
          <UserName>Noob3000</UserName>
          <UserStatus>Idle</UserStatus>
        </UserInfo>
      </UserItem>
    </UserPanelContainer>
  );
};

export default UserPanel;