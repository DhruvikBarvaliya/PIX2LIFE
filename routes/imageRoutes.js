const express = require('express');
const router = express.Router();
const imageController = require('../controllers/imageController');
// const { uploadImage, getImages } = require('../controllers/imageController');

const upload = require('../middleware/multerConfig');
const auth = require('../middleware/authMiddleware');


/**
 * @swagger
 * tags:
 *   name: Images
 *   description: Image management
 */

/**
 * @swagger
 * /images/upload:
 *   post:
 *     summary: Upload an image
 *     tags: [Images]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: The image was successfully uploaded
 *       400:
 *         description: No file uploaded
 *       500:
 *         description: Some server error
 */

// @route   POST api/images/upload
// @desc    Upload an image
// @access  Public
router.post('/upload',auth, upload.single('image'), imageController.uploadImage);

// // Get all images for a specific project
// router.get('/:projectId', auth, getImages);

module.exports = router;
