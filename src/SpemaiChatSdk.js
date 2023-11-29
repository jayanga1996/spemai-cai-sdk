import React, { useState,useEffect } from "react";
import exampleImage from "./images/Frame 5172.png";
import exampleImage2 from "./images/Frame 5182.png";
import exampleImage3 from "./images/Group 3178.png";
import "./style.css";
import ChatContainer from "./ChatContainer";
 import axios from 'axios';

const SpemaiChatSdk = () => {
  const chat_sdk_baseurl = axios.create({
    baseURL: "https://api-cai-dev.spemai.com/",
  });
  const [isOpen, setIsOpen] = useState(false);
  const text = "Hello from MyComponent!";

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };
 const createChatSession = async()=>{
  const url = "api/v1/sdk/session/";
  const method = "POST";
  const headers = {
    "x-api-key": "LJn_mkBriEStcCMrb7XjL-7bx_OSXBZQuPAE4Ak1IwE",
    // Authorization: `Bearer ${token}`,

  };
  const data ={
    "client_id":1,
    "client_name":"Dinal Fernando",
    "agent_id":"cedfb2be-e8c8-43c7-89e8-6f730482749b"
}
  // Simulated API call or WebSocket to send the message
  const response = await chat_sdk_baseurl.request({
    url,
    method,
    data,
    headers,
  });
  if(response.status === 100){
    console.log("Responce data :".response.data)
  }
 }
  useEffect(()=>{
    createChatSession()
  },[])

  // Define CSS styles as JavaScript objects
  const styles = {
    chatPopup: {
      position: "fixed",
      bottom: "20px",
      right: "50px",
      zIndex: "999",
      // Add other styles as needed
    },
    iconSet: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      // Add other styles as needed
    },
    chatIcon: {
      width: "130px",
      height: "64px",
      cursor: "pointer",
      // Add other styles as needed
    },
    chatCloseIcon: {
      width: "74px",
      height: "74px",
      cursor: "pointer",
      // Add other styles as needed
    },
    chatWindow: {
      position: "absolute",
      bottom: "80px",
      right: "0",
      width: "25vw",
      height: "70vh",
      flexShrink: "0",
      margin: "0 auto",
      borderRadius: "30px",
      background: "#fff",
      boxShadow: "0px 4px 14px 0px rgba(0, 0, 0, 0.15)",
      overflow: "hidden",
      // Add other styles as needed
    },
  };

  return React.createElement(
    "div",
    { style: styles.chatPopup },
    React.createElement(
      "div",
      { style: styles.iconSet },
      !isOpen && React.createElement("img", { style: styles.chatIcon, src: exampleImage2, alt: "Example",onClick: () => toggleChat() }),
      isOpen && React.createElement("img", { style: styles.chatCloseIcon, src: exampleImage3, alt: "Example",onClick: () => toggleChat()  })
    ),
    isOpen && React.createElement(
      "div",
      { style: styles.chatWindow },
      React.createElement(
        ChatContainer,
        null,
      )
    )
  );
};

export default SpemaiChatSdk;
