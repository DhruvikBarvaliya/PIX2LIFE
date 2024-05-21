const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');
const authMiddleware = require('../middleware/authMiddleware');
const upload = require('../middleware/multerConfig');

/**
 * @swagger
 * tags:
 *   name: Projects
 *   description: Project management
 */

/**
 * @swagger
 * /projects:
 *   post:
 *     summary: Create a new project
 *     tags: [Projects]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               projectName:
 *                 type: string
 *               projectType:
 *                 type: string
 *             required:
 *               - projectName
 *               - projectType
 *     responses:
 *       200:
 *         description: The project was successfully created
 *       500:
 *         description: Some server error
 */

// @route   POST api/projects
// @desc    Create a new project
// @access  Private
router.post('/', authMiddleware, projectController.createProject);

/**
 * @swagger
 * /projects:
 *   get:
 *     summary: Get all projects for a user
 *     tags: [Projects]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of projects
 *       500:
 *         description: Some server error
 */

// @route   GET api/projects
// @desc    Get all projects for a user
// @access  Private

router.get('/', authMiddleware, projectController.getProjects);

/**
 * @swagger
 * /projects/{projectId}:
 *   put:
 *     summary: Update a project
 *     tags: [Projects]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: projectId
 *         schema:
 *           type: string
 *         required: true
 *         description: The project ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               projectName:
 *                 type: string
 *               projectType:
 *                 type: string
 *     responses:
 *       200:
 *         description: The project was successfully updated
 *       404:
 *         description: The project was not found
 *       500:
 *         description: Some server error
 */

// @route   PUT api/projects/:projectId
// @desc    Update a project
// @access  Private
router.put('/:projectId', authMiddleware, projectController.updateProject);

/**
 * @swagger
 * /projects/{projectId}:
 *   delete:
 *     summary: Delete a project
 *     tags: [Projects]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: projectId
 *         schema:
 *           type: string
 *         required: true
 *         description: The project ID
 *     responses:
 *       200:
 *         description: The project was successfully deleted
 *       404:
 *         description: The project was not found
 *       500:
 *         description: Some server error
 */

// @route   DELETE api/projects/:projectId
// @desc    Delete a project
// @access  Private
router.delete('/:projectId', authMiddleware, projectController.deleteProject);

/**
 * @swagger
 * /projects/{projectId}/images:
 *   post:
 *     summary: Upload images for a project
 *     tags: [Projects]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: projectId
 *         schema:
 *           type: string
 *         required: true
 *         description: The project ID
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               images:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: binary
 *     responses:
 *       200:
 *         description: The images were successfully uploaded
 *       404:
 *         description: The project was not found
 *       500:
 *         description: Some server error
 */

// @route   POST api/projects/:projectId/images
// @desc    Upload images for a project
// @access  Private
router.post('/:projectId/images', authMiddleware, upload.array('images', 10), projectController.uploadImages);

// @route   POST api/projects/:projectId/videos
// @desc    Upload videos for a project
// @access  Private
router.post('/:projectId/videos', authMiddleware, upload.array('videos', 10), projectController.uploadVideos);

module.exports = router;
