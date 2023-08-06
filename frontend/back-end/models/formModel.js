const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  questions: [{ type: Object, required: true }],
});

const Form = mongoose.model('Form', formSchema);

module.exports = Form;
