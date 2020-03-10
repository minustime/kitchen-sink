const mongoose = require('mongoose');
const FileUpload = require('./models/upload');

mongoose.connection.once('open', () => {
  console.log('connected!');
});

mongoose.connection.once('error', err => {
  console.log('connection error!', err);
});

const connect = async connectionString => {
  await mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = {
  FileUpload,
  connect,
};
