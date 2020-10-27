import React, { Component, useEffect, useState } from "react";
import "../styles/App.css";

const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [ballPosition, setBallPosition] = useState({
    left: "0px",
    top: "0px"
  });

  const reset = () => {
    let curX = 0;
    let curY = 0;
    setX(curX);
    setY(curY);
    setBallPosition({ left: `${curX}px`, top: `${curY}px` });
  };

  const buttonClickHandler = () => {
    if (renderBall === false) {
      setRenderBall(true);
    }
  };

  const renderChoice = () => {
    if (renderBall) {
      return <div className="ball" style={ballPosition}></div>;
    } else {
      return (
        <button onClick={buttonClickHandler} className="start">
          Click For One Ball
        </button>
      );
    }
  };

  const handleKey = (e) => {
    let prevX = Number(x);
    let prevY = Number(y);
    let currXLeft = prevX + 5;
    let currYTop = prevY + 5;
    let currXRight = prevX - 5;
    let currYDown = prevY - 5;
    if (e.keyCode === 39) {
      setX(currXLeft);
      setBallPosition({ left: `${currXLeft}px`, top: `${y}px` });
    }
    if (e.keyCode === 37) {
      setX(currXRight);
      setBallPosition({ left: `${currXRight}px`, top: `${y}px` });
    }
    if (e.keyCode === 38) {
      setY(currYDown);
      setBallPosition({ left: `${x}px`, top: `${currYDown}px` });
    }
    if (e.keyCode === 40) {
      setY(currYTop);
      setBallPosition({ left: `${x}px`, top: `${currYTop}px` });
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKey);

    return () => {
      document.removeEventListener("keydown", handleKey);
    };
  });

  return (
    <div className="playground">
      <button onClick={reset} className="reset">
        Reset
      </button>
      {renderChoice()}
    </div>
  );
};

export default App;
