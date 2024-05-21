const express = require('express');
const router = express.Router();
const scanController = require('../controllers/scanController');
const upload = require('../middleware/multerConfig');

// @route   POST api/scan
// @desc    Scan an image and retrieve related content
// @access  Public
router.post('/', upload.single('image'), scanController.scanImage);

module.exports = router;
