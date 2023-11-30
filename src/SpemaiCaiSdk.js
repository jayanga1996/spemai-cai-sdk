// MyComponent.js
import React from 'react';
import SpemaiChatSdk from './SpemaiChatSdk';

const SpemaiCaiSdk = ({ chatName,api_key,agent_id }) => {
  return React.createElement(SpemaiChatSdk, { chatName,api_key,agent_id });
};

export default SpemaiCaiSdk;
