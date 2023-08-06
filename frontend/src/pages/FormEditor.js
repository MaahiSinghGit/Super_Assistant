import React, { useState } from 'react';
import TextQuestion from '../components/TextQuestion';
import ImageQuestion from '../components/ImageQuestion';
import axios from 'axios';
import app from '../App';

const FormEditor = () => {
  const [questions, setQuestions] = useState([
    { type: 'text', content: 'Sample Text Question' },
    { type: 'image', content: 'Sample Image Question', image: 'sample_image_url.jpg' },
  ]);

  const saveForm = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/forms', { questions });
      console.log('Form saved successfully:', response.data);
    } catch (error) {
      console.error('Error saving form:', error);
    }
  };

  const handleQuestionChange = (index, updatedQuestion) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index] = updatedQuestion;
    setQuestions(updatedQuestions);
  };

  return (
    <div>
      {questions.map((question, index) => {
        if (question.type === 'text') {
          return (
            <TextQuestion
              key={index}
              content={question.content}
              onChange={(content) => handleQuestionChange(index, { ...question, content })}
            />
          );
        } else if (question.type === 'image') {
          return (
            <ImageQuestion
              key={index}
              content={question.content}
              image={question.image}
              onChange={(content) => handleQuestionChange(index, { ...question, content })}
            />
          );
        } else {
          return null; // Add more question types here if needed
        }
      })}

      <button onClick={saveForm}>Save Form</button>
    </div>
  );
};

export default FormEditor;
