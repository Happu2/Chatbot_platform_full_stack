const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");
const Project = require("./Project");

const Prompt = sequelize.define("Prompt", {
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  }
});

Project.hasMany(Prompt);
Prompt.belongsTo(Project);

module.exports = Prompt;
