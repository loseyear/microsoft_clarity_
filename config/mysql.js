const env = process.env.MYSQL

const master = {
  username: 'web',
  password: 'WebSTeh#P',
  database: 'web',
  dialect: 'mysql',
  pool: {
    max: 100,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  define: {
    underscored: false,
    timestamps: false,
    freezeTableName: true,
  },
  port: 3306,
}

if (env === 'dev') {
  master.host = '172.16.250.144'
  master.port = 13306
} else if (env === 'qa') {
  master.host = '172.16.8.150'
} else if (env === 'prod') {
  master.host = 'nx-eyesight.c2jeil0ybxmx.rds.cn-northwest-1.amazonaws.com.cn'
}

module.exports = {
  master,
}
