const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({
    project: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
    url: { type: String, required: true },
    description: { type: String },
    audio_url: { type: String },
    metadata: { type: Object },
    created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Image', ImageSchema);
