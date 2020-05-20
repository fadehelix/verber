import React, { useState } from 'react';

const Answer = (props) => {

  const {children, verb} = props;

  const [isCorrect, setIsCorrect] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [showAnswer, setshowAnswer] = useState(false);
  const [answerCssClass, setAnswerCssClass] = useState(null)

  const handleVerbChange = (event) => {
    setInputValue(event.target.value);
  }
  const handleVerbFocus = (event) => {
    setshowAnswer(false);
    setAnswerCssClass(null);
  }

  const handleVerbCheck = (event) => {
    const {value} = event.target;
    setIsCorrect(value.length > 1 && value === verb);
    if(value.length > 1) {
      setshowAnswer(true);
      setAnswerCssClass(value === verb ? 'answer--isCorrect' : 'answer--isInCorrect')
    }
  }

  return (
    <div className={`answer ${answerCssClass}`}>
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