const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// @route   POST api/register
// @desc    Register a user
// @access  Public
router.post('/register', authController.register);

// @route   POST api/login
// @desc    Login user and get token
// @access  Public
router.post('/login', authController.login);

module.exports = router;
