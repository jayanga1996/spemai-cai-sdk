import React from 'react';
import exampleImage from './images/Frame 5172.png';

const SpemaiChatSdk = () => {
  const text = 'Hello from MyComponent!';

  return React.createElement('div', { className: 'custom-component' },
    text,
    React.createElement('img', { src: exampleImage, alt: 'Example' })
  );
};

export default SpemaiChatSdk;
