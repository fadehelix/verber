import React from 'react';
import PropTypes from 'prop-types';

import Answer from './Answer';



const Exercise = ({verb, children}) => {
  return(
    <div className="Exercise">
      <div className="question">
        {children}
      </div>
      {
        verb ? <>
          <Answer verb={verb.past} htmlDd="firstAnswer">Past</Answer>
          <Answer verb={verb.pastParticiple} htmlId="secondAnswer">Past Participle</Answer>
        </> : <span className="answers answers--error">"Invalid word :("</span>
      }
    </div>
  );
}


Exercise.propTypes = {
  verb: PropTypes.object
}


export default Exercise;