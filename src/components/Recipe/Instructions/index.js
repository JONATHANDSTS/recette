// Import NPM
import React from 'react';
import PropTypes from 'prop-types';

// Imports locaux
import './styles.css';

const Instructions = ({ steps }) => (
  <ol className="steps">
    {steps.map((instruction) => (
      <li key={instruction} className="step">
        {instruction}
      </li>
    ))}
  </ol>
);

// on valide nos props
Instructions.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
};

// Export composant
export default Instructions;
