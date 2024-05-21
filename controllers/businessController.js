const logger = require('../config/logger');
const Business = require('../models/Business');
const Project = require('../models/Project');
const { validationResult } = require('express-validator');

exports.register = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    logger.error('Validation error during business registration');
    return res.status(400).json({ errors: errors.array() });
  }

  const { businessName, businessType, ownerId } = req.body;

  try {
    let business = new Business({
      businessName,
      businessType,
      ownerId,
    });

    await business.save();
    res.json(business);

    logger.info(`Business registered: ${businessName}`);
  } catch (err) {
    logger.error(`Server error during business registration: ${err.message}`);
    res.status(500).send('Server error');
  }
};

// @desc    Get all projects for a business
// @route   GET /api/business/:businessId/projects
// @access  Private
exports.getBusinessProjects = async (req, res) => {
  try {
    const { businessId } = req.params;

    const business = await Business.findById(businessId);
    if (!business) {
      logger.warn(`Business not found: ${businessId}`);
      return res.status(404).json({ msg: 'Business not found' });
    }

    const projects = await Project.find({ businessId: businessId });
    res.json(projects);

    logger.info(`Projects retrieved for business: ${businessId}`);
  } catch (err) {
    logger.error(`Server error during retrieving business projects: ${err.message}`);
    res.status(500).send('Server error');
  }
};
