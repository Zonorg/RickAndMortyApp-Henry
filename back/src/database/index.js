require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_URL } = process.env;
const { characterModel } = require("./models/Character");

const sequelize = new Sequelize(DB_URL, {
  logging: false,
  dialect: "postgres",
});

characterModel(sequelize);

module.exports = {
  ...sequelize.models,
  sequelize,
};
