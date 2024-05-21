const express = require('express');
const { check } = require('express-validator');
const router = express.Router();
const businessController = require('../controllers/businessController');
const authMiddleware = require('../middleware/authMiddleware');

/**
 * @swagger
 * tags:
 *   name: Business
 *   description: Business management
 */

/**
 * @swagger
 * /business/register:
 *   post:
 *     summary: Register a business
 *     tags: [Business]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               businessName:
 *                 type: string
 *               businessType:
 *                 type: string
 *               ownerId:
 *                 type: string
 *             required:
 *               - businessName
 *               - businessType
 *               - ownerId
 *     responses:
 *       200:
 *         description: Business successfully registered
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */
router.post('/register', [
  check('businessName', 'Business name is required').not().isEmpty(),
  check('businessType', 'Business type is required').not().isEmpty(),
  check('ownerId', 'Owner ID is required').isMongoId(),
], businessController.register);

/**
 * @swagger
 * /business/{businessId}/projects:
 *   get:
 *     summary: Get all projects for a business
 *     tags: [Business]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: businessId
 *         schema:
 *           type: string
 *         required: true
 *         description: The business ID
 *     responses:
 *       200:
 *         description: A list of projects
 *       404:
 *         description: Business not found
 *       500:
 *         description: Server error
 */
router.get('/:businessId/projects', authMiddleware, businessController.getBusinessProjects);

module.exports = router;
