
import React, { useState } from 'react';
const Button = ({ text, backgroundColour, textColor, hoverBackgroundColour, hoverTextColor }) => {
  const [isHovered, setIsHovered] = useState(false);
  const baseClasses = `${backgroundColour} ${textColor} py-2 px-8 rounded-3xl transition duration-300 ease-in-out`;
  const hoverClasses = `${isHovered ? hoverBackgroundColour : ''} ${isHovered ? hoverTextColor : ''}`;
  return (
    <button
      className={`${baseClasses} ${hoverClasses}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {text}
    </button>
  );
};
export default Button;
