const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ProjectSchema = new mongoose.Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },

  businessId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Business',
    required: true,
  },
  projectName: {
    type: String,
    required: true,
  },
  projectType: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  images: [{ type: String }],
  videos: [{ type: String }],
  audios: [{ type: String }],
});

module.exports = mongoose.model('Project', ProjectSchema);
