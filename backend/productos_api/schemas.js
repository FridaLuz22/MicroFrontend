const mongoose = require('mongoose');
const productoSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price:{
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
  });
  module.exports = {productoSchema}