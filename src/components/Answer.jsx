import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const getRandomNumber = () => Math.ceil(Math.random() * 10000);

const Answer = (props) => {
  const { children, value, htmlId } = props;

  const [inputValue, setInputValue] = useState('');
  const [showAnswer, setshowAnswer] = useState(false);
  const [answerCssClass, setAnswerCssClass] = useState(null);
  const [randomIdSuffix, setRandomIdSuffix] = useState(0);

  useEffect(() => {
    setRandomIdSuffix(getRandomNumber());
  }, []);

  const handleVerbChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleVerbFocus = () => {
    setshowAnswer(false);
    setAnswerCssClass(null);
  };

  const isAnswerCorrect = (verb, answer) => {
    const possibleAnswers = verb.split('/');
    return !!possibleAnswers.find(
      (option) => option.toLowerCase() === answer.toLowerCase()
    );
  };

  const handleVerbCheck = (event) => {
    if (event.target.value.length > 1) {
      setshowAnswer(true);
      setAnswerCssClass(
        isAnswerCorrect(value, event.target.value)
          ? 'answer--isCorrect'
          : 'answer--isIncorrect'
      );
    }
  };

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
      {showAnswer && <span className="answer__definition">{value}</span>}
    </div>
  );
};

Answer.propTypes = {
  value: PropTypes.string.isRequired,
  htmlId: PropTypes.string,
  children: PropTypes.string.isRequired,
};

Answer.defaultProps = {
  htmlId: 'answer',
};

export default Answer;
