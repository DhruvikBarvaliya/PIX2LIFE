const Project = require('../models/Project');
const logger = require('../config/logger');
const fs = require('fs');
const path = require('path');

exports.scanImage = async (req, res) => {
  try {
    const scannedImage = req.file.path;

    // This is a placeholder for the image matching logic.
    // Replace this with actual image matching logic to find the related project.
    let matchedProject = null;

    const projects = await Project.find();
    for (const project of projects) {
      // Here you would implement the logic to match the scanned image with project images
      if (project.images.some(image => fs.existsSync(image) && path.basename(image) === path.basename(scannedImage))) {
        matchedProject = project;
        break;
      }
    }

    if (!matchedProject) {
      return res.status(404).json({ msg: 'No matching project found' });
    }

    res.json({
      projectId: matchedProject.id,
      projectName: matchedProject.projectName,
      projectType: matchedProject.projectType,
      images: matchedProject.images,
      videos: matchedProject.videos,
      audios: matchedProject.audios,
    });
  } catch (err) {
    console.error(err.message);
    logger.error(`Server error during image scan: ${err.message}`);
    res.status(500).send('Server error');
  }
};
