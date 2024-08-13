const mongoose = require('mongoose');
const { productoSchema } = require('./schemas');

const productoModel = mongoose.model('producto', productoSchema);

module.exports = {productoModel };