const Sequelize = require("sequelize");
const sequelize = require('../util/database')

const Shopuser = sequelize.define('shopuser', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  }
})


module.exports = Shopuser;