import React, { useState } from 'react';
import TextQuestion from '../components/TextQuestion';
import ImageQuestion from '../components/ImageQuestion';
import axios from 'axios';

const FormRenderer = () => {
  const [responses, setResponses] = useState({});

  const handleResponseChange = (questionIndex, response) => {
    setResponses({ ...responses, [questionIndex]: response });
  };

  const submitForm = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/responses', { responses });
      console.log('Form submitted successfully:', response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div>
      {/* Render the form questions here */}
      <TextQuestion
        content="Sample Text Question"
        onChange={(response) => handleResponseChange(0, response)}
      />

      <ImageQuestion
        content="Sample Image Question"
        image="sample_image_url.jpg"
        onChange={(response) => handleResponseChange(1, response)}
      />

      {/* Other question types can be added here */}

      <button onClick={submitForm}>Submit Form</button>
    </div>
  );
};

export default FormRenderer;
