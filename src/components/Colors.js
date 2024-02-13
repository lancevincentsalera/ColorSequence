import React from "react";
import "../styles/Colors.css";

const Colors = ({ colors }) => {
  return (
    <div className="colors">
      {colors.map((color, index) => (
        <div className="color" key={index} style={{ backgroundColor: color }} />
      ))}
    </div>
  );
};

export default Colors;
