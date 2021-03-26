import React from 'react';
import './styles.scss';

const Error = ({ message }) => message && (
  <div className="error">
    {message}
  </div>
);
export default Error;
