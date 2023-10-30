import sequelize from 'utils/sequelize'
import { DataTypes } from 'sequelize'

const User = sequelize.define('tbl_table', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: true,
    autoIncrement: true
  },

  name: { type: DataTypes.STRING(255), allowNull: false },

  createdBy: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE
  },
  updatedBy: {
    type: DataTypes.INTEGER
  },
  updatedAt: {
    type: DataTypes.DATE
  },
  deletedBy: {
    type: DataTypes.INTEGER
  },
  deletedAt: {
    type: DataTypes.DATE
  }
}, {
  paranoid: true,
  tableName: 'tbl_table'
})

export default User
