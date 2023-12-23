// MessageList.js
import React from "react";

const MessageList = ({ messages }) => {
  return (
    <div style={styles.chatCon}>
      {messages.map((message, index) => (
        <div
          key={index}
          style={
            message.role === "user" ? styles.userMessage : styles.botMessage
          }
        >
          {message.content}
        </div>
      ))}
    </div>
  );
};

const styles = {
  chatCon: {
    minHeight: "500px",
    padding: "10px",
    overflowY: "auto",
    background: "#f2f2f2", // Change the background color of the message container to gray
    borderRadius: "8px",
    width: "100%", // Expand the width of the message container
  },
  userMessage: {
    textAlign: "right",
    padding: "8px",
    background: "rgb(123,58,237)", // Change the background color of user messages
    color: "white", // Change the text color to white
    borderRadius: "8px",
    margin: "8px 0",
  },
  botMessage: {
    textAlign: "left",
    padding: "8px",
    background: "#404040", // Change the background color of bot messages to dark gray
    color: "black", // Change the text color to black
    borderRadius: "8px",
    margin: "8px 0",
  },
};

export default MessageList;
