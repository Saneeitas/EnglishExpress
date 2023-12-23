const ChatHeader = ({ title, logo, settingsLink }) => (
  <header className="chat-header">
    <img src={logo} alt="Chat logo" />
    <h1>{title}</h1>
    <a href={settingsLink}>Settings</a>
  </header>
);

export default ChatHeader;
