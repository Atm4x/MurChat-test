import React from 'react';
import styled from 'styled-components';

const ChannelListContainer = styled.div`
  width: 240px;
  background-color: #252525;
  height: 100%;
  padding: 20px;
  border-right: 1px solid #333;
`;

const ChannelItem = styled.div`
  padding: 10px 15px;
  cursor: pointer;
  color: ${props => props.active ? '#fff' : '#999'};
  display: flex;
  align-items: center;
  border-radius: 5px;
  transition: all 0.2s;

  &:hover {
    background-color: #333;
    color: #fff;
  }
`;

const ChannelIcon = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #444;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 12px;
`;

const ChannelList = ({ currentServer, currentChannel, onChannelChange }) => {
  const channels = {
    'M': [
      { id: 'general', name: 'General Chat', icon: '🐱' },
      { id: 'random', name: 'Random Meows', icon: '😺' },
      { id: 'support', name: 'Support', icon: '🆘' },
    ],
    'G': [
      { id: 'gaming', name: 'Gaming Hub', icon: '🎮' },
      { id: 'esports', name: 'Esports', icon: '🏆' },
      { id: 'tabletop', name: 'Tabletop Games', icon: '🎲' },
    ],
    'C': [
      { id: 'music', name: 'Music Lounge', icon: '🎵' },
      { id: 'movies', name: 'Movie Night', icon: '🍿' },
      { id: 'books', name: 'Book Club', icon: '📚' },
    ],
  };

  return (
    <ChannelListContainer>
      {channels[currentServer].map(channel => (
        <ChannelItem
          key={channel.id}
          active={currentChannel === channel.id}
          onClick={() => onChannelChange(channel.id)}
        >
          <ChannelIcon>{channel.icon}</ChannelIcon>
          {channel.name}
        </ChannelItem>
      ))}
    </ChannelListContainer>
  );
};

export default ChannelList;