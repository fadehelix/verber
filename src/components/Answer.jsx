import React, { useState } from 'react';

const Answer = (props) => {

  const {children, verb} = props;

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

  const isAnswerCorrect = (verb, inputValue) => {
    const possibleAnswers = verb.split('/');
    return !!possibleAnswers.find(option => option.toLowerCase() === inputValue.toLowerCase());
  }

  const handleVerbCheck = (event) => {
    const {value} = event.target;
    if(value.length > 1) {
      setshowAnswer(true);
      setAnswerCssClass(isAnswerCorrect(verb, value) ? 'answer--isCorrect' : 'answer--isIncorrect')
    }
  }

  return (
    <div className={`answer ${answerCssClass}`}>
      <label htmlFor={props.id}>{children}</label>
      <input
        id={props.id}
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