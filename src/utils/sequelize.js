import { Sequelize } from 'sequelize'
import projectConfig from 'config/project.config'

const { db_host, db_name, db_password, db_user } = projectConfig

const sequelize = new Sequelize(db_name, db_user, db_password, {
  host: db_host,
  dialect: 'mariadb',
  logging: true
})

export default sequelize
