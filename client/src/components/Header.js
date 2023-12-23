import React from "react";

const Header = () => {
  return (
    <header style={styles.header}>
      <h1>English Express Bot</h1>
    </header>
  );
};

const styles = {
  header: {
    background: "#4caf50",
    color: "white",
    padding: "20px",
    textAlign: "center",
    width: "100%",
  },
};

export default Header;
