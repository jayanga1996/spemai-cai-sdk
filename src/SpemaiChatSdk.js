import React from "react";
import exampleImage from "./images/Frame 5172.png";
import exampleImage2 from "./images/Frame 5182.png";
import exampleImage3 from "./images/Group 3178.png";

const SpemaiChatSdk = () => {
  const text = "Hello from MyComponent!";

  return React.createElement(
    "div",
    { className: "chat-popup" },
    React.createElement(
      "div",
      { className: "icon-set" },
      React.createElement(
        "img",
        { className: "chat-icon", src: exampleImage2, alt: "Example" }
      ),
      React.createElement(
        "img",
        { className: "chat-close-icon", src: exampleImage3, alt: "Example" }
      )
    ),
    React.createElement(
      "div",
      { className: "chat-window" },
      text
    )
  );
};

export default SpemaiChatSdk;
