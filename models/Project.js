const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  projectName: { type: String, required: true },
  projectType: { type: String, required: true },
  images: [{ type: String }],
  videos: [{ type: String }],
  audios: [{ type: String }],
});

module.exports = mongoose.model('Project', ProjectSchema);
