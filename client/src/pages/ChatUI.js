// ChatUI.js

import React, { useState } from "react";
import axios from "axios";

const ChatUI = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  

  const handleSendMessage = async () => {
    if (newMessage.trim() === '') return;

    // Add user message to the chat
    setMessages([...messages, { role: 'user', content: newMessage }]);
    setNewMessage('');

    try {
      // Call the ChatGPT API to get the bot's response
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [
            { role: "system", content: "You are a helpful assistant." },
            { role: "user", content: newMessage },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer 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`,
          },
        }
      );

      // Add the bot's response to the chat
      const botResponse = response.data.choices[0].message.content;
      setMessages([...messages, { role: 'bot', content: botResponse }]);
    } catch (error) {
       console.error(
         "Error sending message to ChatGPT:",
         error.response || error
       );
      // Handle error (e.g., display an error message to the user)
    }
  
  };
  return (
    <div style={styles.appContainer}>
      <header style={styles.header}>
        <h1>English Express Bot</h1>
      </header>
      <div style={styles.chatContainer}>
        <div style={styles.container}>
          <div style={styles.chatCon}>
            {messages.map((message, index) => (
              <div
                key={index}
                style={
                  message.role === "user"
                    ? styles.userMessage
                    : styles.botMessage
                }
              >
                {message.content}
              </div>
            ))}
          </div>
          <div style={styles.inputContainer}>
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
              style={styles.input}
            />
            <button onClick={handleSendMessage} style={styles.sendButton}>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: "300px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    overflow: "hidden",
  },
  chatCon: {
    minHeight: "200px",
    padding: "10px",
    overflowY: "auto",
  },
  userMessage: {
    textAlign: "right",
    padding: "8px",
    background: "#e0e0e0",
    borderRadius: "8px",
    margin: "8px 0",
  },
  botMessage: {
    textAlign: "left",
    padding: "8px",
    background: "#d3ffd3",
    borderRadius: "8px",
    margin: "8px 0",
  },
  inputContainer: {
    display: "flex",
    alignItems: "center",
    padding: "10px",
  },
  input: {
    flex: 1,
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  sendButton: {
    marginLeft: "10px",
    padding: "8px",
    borderRadius: "4px",
    background: "#4caf50",
    color: "white",
    cursor: "pointer",
  },
  appContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "100vh",
  },
  header: {
    background: "#4caf50",
    color: "white",
    padding: "20px",
    textAlign: "center",
    width: "100%",
  },
  chatContainer: {
    width: "300px",
    margin: "20px",
  },
};

export default ChatUI;
