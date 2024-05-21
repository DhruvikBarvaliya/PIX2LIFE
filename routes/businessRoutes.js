const express = require('express');
const router = express.Router();
const businessController = require('../controllers/businessController');
const authMiddleware = require('../middleware/authMiddleware');

// @route   POST api/business/register
// @desc    Register a business
// @access  Public
router.post('/register', businessController.register);

// @route   GET api/business/:businessId/projects
// @desc    Get all projects for a business
// @access  Private
router.get('/:businessId/projects', authMiddleware, businessController.getBusinessProjects);

module.exports = router;
