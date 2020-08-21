import React from 'react';
import PropTypes from 'prop-types';

import Answer from './Answer';

const Exercise = ({ verb, children }) => {
  return (
    <div className="Exercise">
      <div className="question">{children}</div>
      {verb ? (
        <>
          <Answer value={verb.past} htmlDd="firstAnswer">
            Past
          </Answer>
          <Answer value={verb.pastParticiple} htmlId="secondAnswer">
            Past Participle
          </Answer>
        </>
      ) : (
        <span className="answers answers--error">
          &quot;Invalid word :(&quot;
        </span>
      )}
    </div>
  );
};

Exercise.propTypes = {
  verb: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ).isRequired,
  children: PropTypes.node,
};

Exercise.defaultProps = {
  children: <></>,
};
export default Exercise;
