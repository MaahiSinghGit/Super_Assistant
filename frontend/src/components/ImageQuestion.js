import React from 'react';

const ImageQuestion = ({ content, image, onChange }) => {
  return (
    <div>
      {image && <img src={image} alt="Question Image" />}
      <label>{content}</label>
      <input type="text" onChange={(e) => onChange(e.target.value)} />
    </div>
  );
};

export default ImageQuestion;
