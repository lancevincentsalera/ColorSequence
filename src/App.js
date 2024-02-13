import "./App.css";
import Colors from "./components/Colors";
import Sequence from "./components/Sequence";
import { useState, useEffect } from "react";

const App = () => {
  const initialColors = [
    "#ef33e7",
    "#4363d6",
    "#e7184b",
    "#f68331",
    "#42d2f4",
    "#3db34a",
    "#bfef45",
    "#ffe019",
    "#921eb3",
  ];

  const shuffleColors = (colors) => {
    return [...colors].sort(() => Math.random() - 0.5);
  };

  const [patternColors, setPatternColors] = useState(() =>
    shuffleColors(initialColors)
  );
  const [buttonColors, setButtonColors] = useState(() =>
    shuffleColors(patternColors)
  );

  const [correctIndex, setCorrectIndex] = useState([]);

  const indexHandler = (index) => {
    setCorrectIndex((prevIndexes) => [...prevIndexes, index]);
  };

  const [patternCurrIndex, setPatterCurrIndex] = useState(0);

  const sequenceChecker = (index) => {
    if (buttonColors[index] === patternColors[patternCurrIndex]) {
      setPatterCurrIndex((prev) => prev + 1);
    } else {
      setPatterCurrIndex(0);
      setCorrectIndex([]);
    }
  };

  useEffect(() => {
    if (correctIndex.length === initialColors.length) {
      setTimeout(() => {
        alert("Great memory!");
        setPatterCurrIndex(0);
        setCorrectIndex([]);
        setPatternColors(() => shuffleColors(patternColors));
        setButtonColors(() => shuffleColors(buttonColors));
      }, 100);
    }
  }, [correctIndex.length, initialColors.length, patternColors, buttonColors]);

  return (
    <div className="App">
      <Colors colors={patternColors} />
      <Sequence
        colors={buttonColors}
        sequenceChecker={sequenceChecker}
        indexHandler={indexHandler}
        correctIndex={correctIndex}
      />
    </div>
  );
};

export default App;
