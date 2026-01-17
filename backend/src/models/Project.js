const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");
const User = require("./User");

const Project = sequelize.define("Project", {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  UserId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

User.hasMany(Project, { foreignKey: "UserId" });
Project.belongsTo(User, { foreignKey: "UserId" });

module.exports = Project;
