const router = require("express").Router();
const auth = require("../middleware/auth.middleware");
const {
  createProject,
  getProjects,
} = require("../controllers/project.controller");


router.post("/", auth, createProject);


router.get("/", auth, getProjects);

module.exports = router;
