const Sequelize = require('sequelize')
const sequelize = require('../../library/sequelize')

// 管理员
const track = sequelize.define(
  'track',
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: Sequelize.INTEGER,
    },
    userid: Sequelize.STRING(128),
    username: Sequelize.STRING(128),
    timestamp: Sequelize.DATE(),
    data: Sequelize.STRING(),
  },
  {
    timestamps: false,
  },
)

module.exports = track
