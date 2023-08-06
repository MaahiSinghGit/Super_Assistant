import React from 'react';

const TextQuestion = ({ content, onChange }) => {
  return (
    <div>
      <label>{content}</label>
      <input type="text" onChange={(e) => onChange(e.target.value)} />
    </div>
  );
};

export default TextQuestion;
