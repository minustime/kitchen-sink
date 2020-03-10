const { Schema, model } = require('mongoose');

const fileUploadSchema = new Schema({
  size: Number,
  name: String,
});

module.exports = model('FileUpload', fileUploadSchema);
