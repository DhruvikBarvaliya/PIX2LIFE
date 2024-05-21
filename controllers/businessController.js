const Business = require('../models/Business');
const Project = require('../models/Project');
const { validationResult } = require('express-validator');

// @desc    Register a new business
// @route   POST /api/business/register
// @access  Public
exports.register = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
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
  } catch (err) {
    console.error(err.message);
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
      return res.status(404).json({ msg: 'Business not found' });
    }

    const projects = await Project.find({ businessId: businessId });
    res.json(projects);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
