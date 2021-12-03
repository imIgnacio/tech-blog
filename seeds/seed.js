const sequelize = require('../config/connection');

const userData = require('./userData.json');
const blogData = require('./blogData.json');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");

  await userData();
  console.log("\n----- USERS SEEDED -----\n");

  await blogData();
  console.log("\n----- POSTS SEEDED -----\n");

  process.exit(0);
};

seedAll();