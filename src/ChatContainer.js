import React, { useState, useEffect } from "react";
import MessageList from "./MessageList";
import SendMessageForm from "./SendMessageForm";

import full_exit from "./images/fullscreen-exit-fill.png";
import arrow_left from "./images/arrow-left-s-line.png";

 import axios from 'axios';

const ChatContainer = () => {
  const chat_sdk_baseurl = axios.create({
    baseURL: "https://api-cai-dev.spemai.com/",
  });
  
  const [messages, setMessages] = useState([]);
  const currentUser = "User123"; // Simulated current user
  const chatContainerStyles = {
    chatContainer: {
      width: '25vw',
      height: '70vh',
      flexShrink: 0,
      fontFamily: 'Arial, sans-serif',
      /* Additional properties can be added here */
    },
    chatContainerHead: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '9vh',
      width: '100%',
      borderBottom: '1px solid #F0F0F0',
      padding: '20px',
    },
    chatContainerBody: {
      padding: '20px',
      overflowY: 'scroll',
      height: '50vh',
    },
    chatContainerFooter: {
      borderTop: '1px solid #F0F0F0',
      padding: '20px',
      height: '10vh',
    },
    chatTopicText: {
      color: '#000',
      textAlign: 'center',
      fontSize: '18px',
      fontStyle: 'normal',
      fontWeight: 500,
      lineHeight: 'normal',
      letterSpacing: '-0.3px',
      display: 'flex',
      justifyContent: 'start',
      alignItems: 'center',
      gap: '10px',
    },
    scrollbar: {
      width: '0px',
    },
  };
  
  useEffect(() => {
    // Simulated messages from an API call or WebSocket
    const initialMessages = [
      { text: "Hello!", user: "User123" },
      { text: "An employee loan is the amount of money sanctioned by the organization to help the employee in need. It is a form of financial assistance provided by the business to the employee. By lending the money to its employees, the organization lightens the financial burden on the employees.", user: "OtherUser" },
      { text: "Hello!", user: "User123" },
      { text: "Hi there!", user: "OtherUser" },
      { text: "Hello!", user: "User123" },
      { text: "An employee loan is the amount of money sanctioned by the organization to help the employee in need. It is a form of financial assistance provided by the business to the employee. By lending the money to its employees, the organization lightens the financial burden on the employees.!", user: "OtherUser" },
    ];
    setMessages(initialMessages);
  }, []);

  const sendMessage = async(message) => {
    const url = "api/v1/sdk/session/";
    const method = "POST";
    const newMessage = { text: message, user: currentUser };
    const headers = {
      "x-api-key": "LJn_mkBriEStcCMrb7XjL-7bx_OSXBZQuPAE4Ak1IwE",
      // Authorization: `Bearer ${token}`,
  
    };
    const send_data ={
      "chat_id":"418285f6-7043-455e-a9e9-ef0e04ea3bfb",
      "agent_id":"c07586718d5a4cafb6801836576ebed0",
      "client_id":1,
      "message":newMessage
  }
    setMessages([...messages, newMessage]);
    // Simulated API call or WebSocket to send the message
    const response = await chat_sdk_baseurl.request({
      url,
      method,
      send_data,
      headers,
    });
    if(response.status === 100){
      const responseMessage = { text: response.data.response_msg, user: "OtherUser" };
      setMessages([...messages, responseMessage]);
    }
  };
  

  return  React.createElement(
    'div',
    { style: chatContainerStyles.chatContainer },
    React.createElement(
      'div',
      { style: chatContainerStyles.chatContainerHead },
      React.createElement(
        'div',
        { style: chatContainerStyles.chatTopicText },
        React.createElement('span', null /* You can add attributes here if needed */,
          React.createElement('img', { src: arrow_left, width: 24, height: 24 }) 
        ),
        'Personals loan policy 2023'
      ),
      React.createElement('img', { src: full_exit, width: 24, height: 24 })
    ),
    React.createElement(
      'div',
      { style: chatContainerStyles.chatContainerBody },
      React.createElement(MessageList, { messages: messages, currentUser: currentUser })
    ),
    React.createElement(
      'div',
      { style: chatContainerStyles.chatContainerFooter },
      React.createElement(SendMessageForm, { sendMessage: sendMessage })
    )
  );
  
};

export default ChatContainer;
