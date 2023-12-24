// Header.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons"; // Import the settings icon

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.leftSection}>
        <h1 style={styles.title}>English Express </h1>
      </div>
      <div style={styles.centerSection}>
        {/* <img src={profilePicture} alt="Profile" style={styles.profilePicture} />
        <span style={styles.name}>Ibrahim Dbee</span> */}
      </div>
      <div style={styles.rightSection}>
        {/* Add your icon or any content for the right section */}
        <span>
          <FontAwesomeIcon icon={faCog} />
        </span>
      </div>
    </header>
  );
};

const styles = {
  header: {
    background: "rgb(123,58,237)",
    color: "white",
    padding: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },

  leftSection: {
    flex: 1,
    marginLeft: "45px",
  },
  title: {
    margin: 0,
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 500,
  },
  centerSection: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  profilePicture: {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    marginRight: "10px",
  },
  name: {
    fontSize: "16px",
    fontWeight: "bold",
  },
  rightSection: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",
    marginRight: "45px",
  },
};

export default Header;
