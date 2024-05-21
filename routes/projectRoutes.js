const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');
const authMiddleware = require('../middleware/authMiddleware');
const upload = require('../middleware/multerConfig');

// @route   POST api/projects
// @desc    Create a new project
// @access  Private
router.post('/', authMiddleware, projectController.createProject);

// @route   GET api/projects
// @desc    Get all projects for a user
// @access  Private
router.get('/', authMiddleware, projectController.getProjects);

// @route   PUT api/projects/:projectId
// @desc    Update a project
// @access  Private
router.put('/:projectId', authMiddleware, projectController.updateProject);

// @route   DELETE api/projects/:projectId
// @desc    Delete a project
// @access  Private
router.delete('/:projectId', authMiddleware, projectController.deleteProject);

// @route   POST api/projects/:projectId/images
// @desc    Upload images for a project
// @access  Private
router.post('/:projectId/images', authMiddleware, upload.array('images', 10), projectController.uploadImages);

// @route   POST api/projects/:projectId/videos
// @desc    Upload videos for a project
// @access  Private
router.post('/:projectId/videos', authMiddleware, upload.array('videos', 10), projectController.uploadVideos);

// @route  
