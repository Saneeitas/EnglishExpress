import React from "react";
import Speech from "react-speech";



const MyComponent = () => {
    
  return (
    <div>
      <Speech
        stop={true}
        pause={true}
        resume={true}
        text="Hello, how are you?, Engineer Muhammad Sani Ibrahim"
        voice="Google UK English Female"
      />
    </div>
  );
};


export default MyComponent;
