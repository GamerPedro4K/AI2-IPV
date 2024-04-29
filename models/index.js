'use strict';

const fs = require('fs');
const path = require('path');
const process = require('process');
const basename = path.basename(__filename);
const Sequelize = require('sequelize');

const db = {};

const sequelize = new Sequelize({
  dialect: PostgresDialect,
  database: 'postgres',
  user: 'postgres',
  password: process.env.PASSWORD,
  host: '192.168.1.140',
  port: 5432,
  ssl: false,
  clientMinMessages: 'notice',
});

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
