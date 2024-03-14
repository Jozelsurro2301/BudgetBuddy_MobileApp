const { Sequelize } = require('sequelize');
 
const connect = () => {
  const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'budgetbuddy.db', // Replace with the path to your SQLite DB file
  });
 
  return sequelize;
};

module.exports = { connect };