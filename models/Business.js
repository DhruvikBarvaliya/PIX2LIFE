const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BusinessSchema = new Schema({
  businessName: { type: String, required: true },
  businessType: { type: String, required: true },
  contactInfo: { type: String, required: true },
  projects: [{ type: Schema.Types.ObjectId, ref: 'Project' }],
});

module.exports = mongoose.model('Business', BusinessSchema);
