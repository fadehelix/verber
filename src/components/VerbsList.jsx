import React from 'react';
import PropTypes from 'prop-types';

const VerbsList = ({ verbs }) => {
  return (
    <div className="verbList">
      <table>
        <thead>
          <tr>
            <th>Infinitive</th>
            <th>Past</th>
            <th>Past Participle</th>
          </tr>
        </thead>
        <tbody>
          {verbs.map((verb) => (
            <tr key={verb._id}>
              <td>{verb.infinitive}</td>
              <td>{verb.past}</td>
              <td>{verb.pastParticiple}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

VerbsList.propTypes = {
  verbs: PropTypes.shape.isRequired,
};

export default VerbsList;
