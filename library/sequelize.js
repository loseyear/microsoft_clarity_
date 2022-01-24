const Sequelize = require('sequelize')
const db = require('../config/mysql')

const sequelize = new Sequelize(
  db.master.database,
  db.master.username,
  db.master.password,
  {
    host: db.master.host,
    dialect: db.master.dialect,
    operatorsAliases: db.master.operatorsAliases,
    pool: db.master.pool,
    define: db.master.define,
    port: db.master.port,
  },
)

module.exports = sequelize
