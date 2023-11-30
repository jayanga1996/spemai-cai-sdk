// MyComponent.js
import React from 'react';
import SpemaiChatSdk from './SpemaiChatSdk';

const MyComponent = ({ chatName,apikey }) => {
  return React.createElement(SpemaiChatSdk, { chatName,apikey });
};

export default MyComponent;
