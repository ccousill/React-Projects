import React, { useState, useCallback } from 'react';
import Button from './components/UI/Button/Button';
import './App.css';
import DemoOutput from './components/Demo/DemoOutput';
function App() {

  const [showPara, setShowPara] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false)
  //using useCallback allows you to use react.memo for optimization- this esentially is telling react that this function will never change
  const handleClick = useCallback(() => {
    if (allowToggle) {
      setShowPara((prevShowPara) => !prevShowPara);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true)
  }

  console.log("app running")
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showPara} />
      <Button onClick={allowToggleHandler}>Allow Toggle</Button>
      <Button onClick={handleClick}>Click me!</Button>
    </div>
  );
}

export default App;
