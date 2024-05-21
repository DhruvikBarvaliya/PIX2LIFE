const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const BusinessSchema = new mongoose.Schema({
  businessName: {
    type: String,
    required: true,
  },
  businessType: {
    type: String,
    required: true,
  },
  ownerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  projects: [{ type: Schema.Types.ObjectId, ref: 'Project' }],

});

module.exports = mongoose.model('Business', BusinessSchema);
