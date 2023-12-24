// ChatUI.js

import React, { useState } from "react";
import Header from "../components/Header";
import MessageList from "../components/MessageList";
import MessageInput from "../components/MessageInput";
import axios from "axios";

const Chat = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = async (message) => {
    // Add user message to the chat
    setMessages([...messages, { role: "user", content: message }]);

    try {
      // Call the ChatGPT API to get the bot's response
    
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [
            { role: "system", content: "You are a helpful assistant." },
            { role: "user", content: message },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_OPENAI_KEY}`,
          },
        }
      );

      // Add the bot's response to the chat
      const botResponse = response.data.choices[0].message.content;
      setMessages([...messages, { role: "bot", content: botResponse }]);
       
      
    } catch (error) {
      console.error("Error sending message to ChatGPT:", error.response || error);
      // Handle error (e.g., display an error message to the user)
       
     
    }
  };

  return (
    <div style={styles.appContainer}>
      <Header />
      <div style={styles.chatContainer}>
        <div style={styles.container}>
          <MessageList messages={messages} />
          <MessageInput onSendMessage={handleSendMessage} />
        </div>
      </div>
    </div>
  );
};


const styles = {
  appContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "100vh",
  },
  chatContainer: { 
    margin: "10px",
  },
  container: {
    width: "600px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    overflow: "hidden",
  },
};

export default Chat;