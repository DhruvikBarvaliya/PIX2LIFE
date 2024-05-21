const Project = require('../models/Project');

exports.createProject = async (req, res) => {
  const { projectName, projectType } = req.body;
  const userId = req.user.id;

  try {
    const newProject = new Project({
      userId,
      projectName,
      projectType,
    });

    const project = await newProject.save();
    res.json(project);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find({ userId: req.user.id });
    res.json(projects);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.updateProject = async (req, res) => {
  const { projectName, projectType } = req.body;

  try {
    let project = await Project.findById(req.params.projectId);
    if (!project) return res.status(404).json({ msg: 'Project not found' });

    project = await Project.findByIdAndUpdate(req.params.projectId, { projectName, projectType }, { new: true });
    res.json(project);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.deleteProject = async (req, res) => {
  try {
    let project = await Project.findById(req.params.projectId);
    if (!project) return res.status(404).json({ msg: 'Project not found' });

    await Project.findByIdAndRemove(req.params.projectId);
    res.json({ msg: 'Project removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.uploadImages = async (req, res) => {
  try {
    let project = await Project.findById(req.params.projectId);
    if (!project) return res.status(404).json({ msg: 'Project not found' });

    const fileUrls = req.files.map(file => file.path);
    project.images.push(...fileUrls);
    await project.save();

    res.json(project);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.uploadVideos = async (req, res) => {
  try {
    let project = await Project.findById(req.params.projectId);
    if (!project) return res.status(404).json({ msg: 'Project not found' });

    const fileUrls = req.files.map(file => file.path);
    project.videos.push(...fileUrls);
    await project.save();

    res.json(project);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.uploadAudios = async (req, res) => {
  try {
    let project = await Project.findById(req.params.projectId);
    if (!project) return res.status(404).json({ msg: 'Project not found' });

    const fileUrls = req.files.map(file => file.path);
    project.audios.push(...fileUrls);
    await project.save();

    res.json(project);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
