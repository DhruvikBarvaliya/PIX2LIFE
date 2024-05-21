const express = require('express');
const router = express.Router();
const scanController = require('../controllers/scanController');
const upload = require('../middleware/multerConfig');

/**
 * @swagger
 * tags:
 *   name: Scan
 *   description: Image scanning and matching
 */

/**
 * @swagger
 * /scan:
 *   post:
 *     summary: Scan an image and retrieve related content
 *     tags: [Scan]
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
 *         description: Matching project found
 *       404:
 *         description: No matching project found
 *       500:
 *         description: Server error
 */
router.post('/', upload.single('image'), scanController.scanImage);

module.exports = router;
