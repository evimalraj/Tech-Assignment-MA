import React from 'react';
import PropTypes from 'prop-types';

const StepGroup = ({ children }) => {
    return (
      <ul>
        {
          children.map((e, i) => {
            return <li>{i}{e}</li>
          })
        }
      </ul>
    );
}

StepGroup.propTypes = {
  children: PropTypes.array
};

export default StepGroup;