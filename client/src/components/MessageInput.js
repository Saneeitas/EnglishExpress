// MessageInput.js
import React, { useState } from "react";
import axios from "axios";

const MessageInput = ({ onSendMessage }) => {
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = async () => {
    if (newMessage.trim() === "") return;

    // Call the parent component's onSendMessage function
    onSendMessage(newMessage);

    setNewMessage("");
  };

  return (
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
  );
};

const styles = {
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
};

export default MessageInput;
