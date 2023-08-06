const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Form = require('./models/formModel');
const Response = require('./models/responseModel');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27018/project', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.post('/api/forms', async (req, res) => {
  try {
    const { questions } = req.body;
    const newForm = await Form.create({ questions });
    res.status(201).json(newForm);
  } catch (error) {
    res.status(500).json({ error: 'Error creating form' });
  }
});

app.post('/api/responses', async (req, res) => {
  try {
    const { responses } = req.body;
    const newResponse = await Response.create({ responses });
    res.status(201).json(newResponse);
  } catch (error) {
    res.status(500).json({ error: 'Error submitting response' });
  }
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
