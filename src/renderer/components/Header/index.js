import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  background-color: #1e1f23;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  box-shadow: 0 1px 0 rgba(4,4,5,0.2);
`;

const ChannelName = styled.h1`
  color: #ffffff;
  font-size: 18px;
  font-weight: 600;
`;

const OnlineStatus = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`;

const StatusDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #43b581;
  margin-right: 8px;
`;

const StatusText = styled.span`
  color: #a0a0a0;
  font-size: 14px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <ChannelName># gaming-chat</ChannelName>
      <OnlineStatus>
        <StatusDot />
        <StatusText>3 online</StatusText>
      </OnlineStatus>
    </HeaderContainer>
  );
};

export default Header;