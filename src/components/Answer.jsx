import React, { useState } from 'react';

const Answer = (props) => {

  const {children, verb} = props;

  const [isCorrect, setIsCorrect] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [showAnswer, setshowAnswer] = useState(false);

  const handleVerbChange = (event) => {
    setInputValue(event.target.value);
  }
  const handleVerbFocus = (event) => {
    setshowAnswer(false);
  }

  const handleVerbCheck = (event) => {
    const {value} = event.target;
    setIsCorrect(value === verb);
    if(value.length > 1) {
      setshowAnswer(true);
    }
  }

  return (
    <div className={`answer answer--${isCorrect ? 'isCorrect' : 'isInCorrect'}`}>
      <label htmlFor="firstAnswerInput">{children}</label>
      <input
        id="firstAnswerInput"
        type="text"
        value={inputValue}
        onFocus={handleVerbFocus}
        onChange={handleVerbChange}
        onBlur={handleVerbCheck}
      />
      {showAnswer && <span className="answer__definition">{verb}</span>}
    </div>
  )
}

export default Answer;