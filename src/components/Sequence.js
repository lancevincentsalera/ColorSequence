import React from "react";
import "../styles/Sequence.css";

const Sequence = ({ colors, sequenceChecker, indexHandler, correctIndex }) => {
  const showColor = (index) => {
    indexHandler(index);
    sequenceChecker(index);
  };
  return (
    <div className="grid">
      {colors.map((color, index) => (
        <button
          key={index}
          className="button"
          style={{
            backgroundColor: correctIndex.includes(index) ? color : "gray",
          }}
          onClick={() => showColor(index)}
        />
      ))}
    </div>
  );
};

export default Sequence;
