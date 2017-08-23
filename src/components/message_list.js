import React from 'react';

const ListItem = ({ message }) => {
  return (
    <div>
      <div>{message.text}</div>
    </div>
  );
};

export const MessageList = ({ messages }) => {
  return (
    <div>
      {messages.map((message) => {
        return (
          <ListItem key={message.id} message={message} />
        );
      })}
    </div>
  );
};

export default MessageList;
