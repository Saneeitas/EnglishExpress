import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

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
        <FontAwesomeIcon icon={faPaperPlane} style={styles.icon} />
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
    padding: "15px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    marginRight: "8px",
  },
  sendButton: {
    padding: "15px",
    borderRadius: "10px",
    background: "rgb(123,58,237)",
    cursor: "pointer",
    border: "1px solid #ccc",
  },
  icon: {
    color: "white",
  },
};

export default MessageInput;
