const express = require('express');
const router = express.Router();
const imageController = require('../controllers/imageController');
// const { uploadImage, getImages } = require('../controllers/imageController');
const upload = require('../middleware/multerConfig');
const auth = require('../middleware/authMiddleware');

// @route   POST api/images/upload
// @desc    Upload an image
// @access  Public
router.post('/upload',auth, upload.single('image'), imageController.uploadImage);

// // Get all images for a specific project
// router.get('/:projectId', auth, getImages);

module.exports = router;
