import React from 'react';
import styled from 'styled-components';

const ChatContainer = styled.div`
  flex: 1;
  background-color: #1e1e1e;
  display: flex;
  flex-direction: column;
`;

const ChatHeader = styled.div`
  height: 60px;
  background-color: #252525;
  display: flex;
  align-items: center;
  padding: 0 20px;
  border-bottom: 1px solid #333;
`;

const ChannelName = styled.h1`
  font-size: 18px;
  font-weight: 600;
  color: #fff;
`;

const UserList = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`;

const UserAvatar = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #7c5295;
  margin-left: -10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: bold;
  font-size: 12px;
`;

const MessageList = styled.div`
  flex: 1;
  padding: 30px;
  overflow-y: auto;
`;

const MessageItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: flex-start;
`;

const MessageAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #7c5295;
  margin-right: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
`;

const MessageContent = styled.div`
  flex: 1;
  background-color: #2a2a2a;
  padding: 10px 15px;
  border-radius: 18px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;

const MessageAuthor = styled.span`
  font-weight: 600;
  color: #7c5295;
  margin-right: 10px;
`;

const MessageText = styled.p`
  color: #e0e0e0;
`;

const MessageInput = styled.input`
  background-color: #252525;
  border: none;
  color: #e0e0e0;
  padding: 15px;
  margin: 20px;
  border-radius: 25px;
  font-size: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &::placeholder {
    color: #777;
  }
`;

const Chat = ({ currentServer, currentChannel }) => {
  const messages = {
    'M': {
      'general': [
        { author: 'CatLover', text: 'Welcome to MurChat! How is everyone doing?' },
        { author: 'Whiskers', text: 'Purrrfect! Just lounging around.' },
      ],
      'random': [
        { author: 'MeowMaster', text: 'Did you hear about the cat who swallowed a ball of yarn? She had mittens!' },
        { author: 'PurrProgrammer', text: 'Why do programmers prefer cats? Because they have purrfect logic!' },
      ],
      'support': [
        { author: 'Helper', text: 'How can I assist you today?' },
        { author: 'NewUser', text: 'I\'m having trouble changing my avatar. Can you help?' },
      ],
    },
    'G': {
      'gaming': [
        { author: 'Gamer123', text: 'Anyone up for some Rocket League?' },
        { author: 'ProGamer', text: 'Just finished a 12-hour stream. Time for a cat nap!' },
      ],
      'esports': [
        { author: 'ESportsFan', text: 'Did you catch the LCS finals last night?' },
        { author: 'TeamCaptain', text: 'Looking for players for our amateur CSGO team. Any takers?' },
      ],
      'tabletop': [
        { author: 'DiceMaster', text: 'Starting a new D&D campaign next week. Still have 2 spots open!' },
        { author: 'BoardGameGeek', text: 'Has anyone played the new Catan expansion?' },
      ],
    },
    'C': {
      'music': [
        { author: 'MelodyMaker', text: 'What\'s everyone listening to today?' },
        { author: 'RockStar', text: 'Just released my new single! Check it out: [link]' },
      ],
      'movies': [
        { author: 'FilmBuff', text: 'Movie night poll: Action, Comedy, or Sci-Fi?' },
        { author: 'CriticsChoice', text: 'Just watched Inception for the 10th time. Still amazing!' },
      ],
      'books': [
        { author: 'Bookworm', text: 'Current read: "The Hitchhiker\'s Guide to the Galaxy". Loving it so far!' },
        { author: 'AuthorWannabe', text: 'Any tips for overcoming writer\'s block?' },
      ],
    },
  };

  const channelMessages = messages[currentServer][currentChannel] || [];

  return (
    <ChatContainer>
      <ChatHeader>
        <ChannelName>{currentChannel}</ChannelName>
        <UserList>
          <UserAvatar>🐱</UserAvatar>
          <UserAvatar>🎮</UserAvatar>
          <UserAvatar>📚</UserAvatar>
        </UserList>
      </ChatHeader>
      <MessageList>
        {channelMessages.map((message, index) => (
          <MessageItem key={index}>
            <MessageAvatar>{message.author[0]}</MessageAvatar>
            <MessageContent>
              <MessageAuthor>{message.author}</MessageAuthor>
              <MessageText>{message.text}</MessageText>
            </MessageContent>
          </MessageItem>
        ))}
      </MessageList>
      <MessageInput placeholder="Type your message..." />
    </ChatContainer>
  );
};

export default Chat;