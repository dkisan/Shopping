const Sequelize = require('sequelize')

const sequelize = new Sequelize('nodecomplete_dk','root','mysqlroot',{
    dialect:'mysql',
    host:'localhost'
}) 

module.exports = sequelize;