const { Schema, model } = require('mongoose');

const todoSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      trim: true,
      default: ''
    },
    done: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

module.exports = model('Todo', todoSchema);

