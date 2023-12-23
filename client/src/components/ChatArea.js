const ChatArea = ({ messages }) => (
  <ul className="chat-messages">
    {messages.map((message) => (
      <li
        key={message.id}
        className={message.sender === "user" ? "user-message" : "bot-message"}
      >
        {message.content}
        <span className="timestamp">{message.timestamp}</span>
      </li>
    ))}
  </ul>
);

export default ChatArea;
