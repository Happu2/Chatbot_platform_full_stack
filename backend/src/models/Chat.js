const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");
const Project = require("./Project");

const Chat = sequelize.define("Chat", {
  role: {
    type: DataTypes.ENUM("user", "assistant"),
    allowNull: false
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: false
  }
});

Project.hasMany(Chat);
Chat.belongsTo(Project);

module.exports = Chat;
