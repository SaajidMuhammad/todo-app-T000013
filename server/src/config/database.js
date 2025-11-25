const mongoose = require('mongoose');

const connectDatabase = async uri => {
  if (!uri) {
    throw new Error('Missing MongoDB connection string');
  }
  await mongoose.connect(uri);
};

module.exports = connectDatabase;

