const mongoose = require('mongoose');

const responseSchema = new mongoose.Schema({
  responses: { type: Object, required: true },
});

const Response = mongoose.model('Response', responseSchema);

module.exports = Response;
