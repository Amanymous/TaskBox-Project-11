import React from 'react';

export const Button = ({ value, style, className, onClick }) => (
  <button style={style} className={className} onClick={onClick}>
    {value}
  </button>
);