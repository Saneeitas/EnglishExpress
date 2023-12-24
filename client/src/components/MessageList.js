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
    background: "#f4f7ff",
    borderRadius: "8px",
  },
  userMessage: {
    textAlign: "right",
    padding: "8px",
    background: "rgb(123,58,237)",
    color: "white",
    borderRadius: "8px",
    margin: "8px 0",
    marginLeft: "auto",
    width: "60%",
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 500,
  },
  botMessage: {
    textAlign: "left",
    padding: "18px",
    background: "#f2f2f2",
    color: "black",
    borderRadius: "8px",
    margin: "8px 0",
    marginRight: "auto",
    width: "60%",
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 500,
  },
};

export default MessageList;
