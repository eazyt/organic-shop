const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema({
  order: {
    type: String
  },
  total: {
    type: String
  }
})

module.exports = mongoose.model('Order', orderSchema);