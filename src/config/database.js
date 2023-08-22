const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('express-tdd', 'my-db-user', 'db-password', {
	dialect: 'sqlite',
	storage: './src/config/database.sqlite',
	logging: false,
});

module.exports = sequelize;
