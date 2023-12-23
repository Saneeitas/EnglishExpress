import React, { useState} from "react";
import { useSpeechRecognition } from "react-speech-kit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faMicrophone,
  faStopCircle,
} from "@fortawesome/free-solid-svg-icons";


const MessageInput = ({ onSendMessage }) => {
const [newMessage, setNewMessage] = useState("");
const [isRecording, setIsRecording] = useState(false);




  const handleSendMessage = async () => {
    if (newMessage.trim() === "") return;

    // Call the parent component's onSendMessage function
    onSendMessage(newMessage);

    setNewMessage("");
  };

  const handleStartRecording = () => {
    setIsRecording(true);
    listen();
  };

  const handleStopRecording = () => {
    setIsRecording(false);
    stop();
   
  };
  
  const { listen, stop } = useSpeechRecognition({
    onResult: (result) => {
      setNewMessage(result);
    },
  });


  return (
    <div style={styles.inputContainer}>
      {!isRecording ? (
        <button
          onClick={handleStartRecording}
          style={{ ...styles.recordButton, background: "rgb(123,58,237)" }}
        >
          <FontAwesomeIcon icon={faMicrophone} style={styles.icon} />
        </button>
      ) : (
        <button
          onClick={handleStopRecording}
          style={{ ...styles.recordButton, background: "darkred" }}
        >
          <FontAwesomeIcon icon={faStopCircle} style={styles.icon} />
        </button>
      )}
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
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 500,
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
  recordButton: {
    padding: "15px",
    borderRadius: "10px",
    cursor: "pointer",
    border: "1px solid #ccc",
    margin: "7px",
  },
};

export default MessageInput;
