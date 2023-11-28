import React, { useState } from 'react';
import send from ".image/Frame 5172.png";

const SendMessageForm = ({ sendMessage }) => {
  const sendMessageFormStyles = {
    sendMessageForm: {
      width: '100%',
      height: '55px',
      flexShrink: 0,
      borderRadius: '32px',
      border: '1px solid #EBEBEB',
      background: '#F4F4F4',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '5px',
    },
    inputText: {
      width: '80%',
      background: '#F4F4F4',
      border: 'none',
    },
    button: {
      border: 'none',
      background: '#F4F4F4',
      cursor: 'pointer',
    },
    // Uncomment the following code block if you wish to include the hover style
    // buttonHover: {
    //   backgroundColor: '#0056b3',
    // },
  };
  
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() !== '') {
      sendMessage(message);
      setMessage('');
    }
  };

  return React.createElement(
    'form',
    { style:sendMessageFormStyles.sendMessageForm, onSubmit: handleSubmit },
    React.createElement('input', {
      type: 'text',
      placeholder: 'Type a message...',
      value: message,
      onChange: (e) => setMessage(e.target.value),
    }),
    React.createElement(
      'button',
      { type: 'submit' },
      React.createElement('img', { src: send, width: 31, height: 31 }) 
    )
  );
};

export default SendMessageForm;
