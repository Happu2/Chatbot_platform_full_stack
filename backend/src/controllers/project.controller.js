const Project = require("../models/Project");
const Prompt = require("../models/Prompt");


exports.createProject = async (req, res) => {
  try {
    const { name } = req.body;

    const project = await Project.create({
      name,
      UserId: req.user.userId, // ✅ FIXED
    });

    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.addPrompt = async (req, res) => {
  try {
    const { content } = req.body;
    const { projectId } = req.params;

    const prompt = await Prompt.create({
      content,
      ProjectId: projectId,
    });

    res.status(201).json(prompt);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.findAll({
      where: { UserId: req.user.userId },
      order: [["createdAt", "DESC"]],
    });

    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
