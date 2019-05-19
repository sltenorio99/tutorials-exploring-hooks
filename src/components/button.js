import React, { useState } from "react";

const Button = props => {
  const [buttonText, setButtonText] = useState("Click me, please");

  const handleClick = () => {
    return setButtonText("I have been clicked!");
  };

  return <button onClick={handleClick}>{buttonText}</button>;
};

export default Button;
