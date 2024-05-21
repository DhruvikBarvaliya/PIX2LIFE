const path = require('path');

exports.uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ msg: 'No file uploaded' });
    }

    const imageUrl = req.file.path;
    res.json({ imageUrl });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};



// const Image = require('../models/Image');
// const multer = require('multer');
// const path = require('path');

// // Set up storage engine for multer
// const storage = multer.diskStorage({
//     destination: './uploads/',
//     filename: (req, file, cb) => {
//         cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
//     }
// });

// // Initialize upload variable with storage engine
// const upload = multer({ storage }).single('image');

// // Upload an image
// exports.uploadImage = (req, res) => {
//     upload(req, res, (err) => {
//         if (err) {
//             return res.status(500).json({ msg: err.message });
//         }
//         const { project, description, audio_url, metadata } = req.body;
//         const newImage = new Image({
//             project,
//             url: req.file.path,
//             description,
//             audio_url,
//             metadata: JSON.parse(metadata)
//         });
//         newImage.save()
//             .then(image => res.json(image))
//             .catch(err => res.status(500).json({ msg: 'Server error' }));
//     });
// };

// // Get all images for a specific project
// exports.getImages = async (req, res) => {
//     try {
//         const images = await Image.find({ project: req.params.projectId });
//         res.json(images);
//     } catch (err) {
//         res.status(500).json({ msg: 'Server error' });
//     }
// };
