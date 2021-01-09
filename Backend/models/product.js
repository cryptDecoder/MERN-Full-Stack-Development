const mongoose = require("mongoose");
const { objectId } = mongoose.Schema;
const productSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
    maxlength: 32,
    required: true,
  },
  description: {
    type: String,
    trim: true,
    maxlength: 2000,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    maxlength: 32,
    trim: true,
  },
  category: {},
});
