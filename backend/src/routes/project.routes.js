const router = require("express").Router();
const auth = require("../middleware/auth.middleware");
const {
  createProject,
  getProjects,
} = require("../controllers/project.controller");

// ✅ CREATE project
router.post("/", auth, createProject);

// ✅ GET projects (THIS WAS MISSING)
router.get("/", auth, getProjects);

module.exports = router;
