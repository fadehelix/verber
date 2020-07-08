import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { getByTestId } from '@testing-library/react';

const getRandomNumber = () => Math.ceil(Math.random() * 10000)

const Answer = (props) => {

  const {children, verb, htmlId} = props;


  const [inputValue, setInputValue] = useState("");
  const [showAnswer, setshowAnswer] = useState(false);
  const [answerCssClass, setAnswerCssClass] = useState(null)
  const [randomIdSuffix, setRandomIdSuffix] = useState(0)

  useEffect(() => {
    setRandomIdSuffix(getRandomNumber())
  }, [])

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
      <label htmlFor={htmlId + randomIdSuffix}>{children}</label>
      <input
        id={htmlId + randomIdSuffix}
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

Answer.propTypes = {
  verb: PropTypes.string.isRequired,
  htmlId: PropTypes.string
}

Answer.defaultProps = {
  htmlId: 'answer'
}

export default Answer;