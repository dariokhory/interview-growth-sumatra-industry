import db from 'models'
import { paginate, count } from 'utils/query'
import sequelize from 'utils/sequelize'

const Table = db.tbl_table

const Fields = [
  'id',
  'name',
  'createdBy',
  'createdAt',
  'updatedBy',
  'updatedAt',
  'deletedBy',
  'deletedAt'
]

export const getData = (pagination, where, other) => {
  return User.paginate({
    table: Table,
    fields: Fields,
    pagination,
    where,
    other
  })
}

export const getDataCount = (where, other) => {
  return User.count({
    table: Table,
    fields: Fields,
    where,
    other
  })
}

export const getDataById = (id) => {
  return User.findOne({
    where: {
      id
    }
  })
}

export const insertData = (data, createdBy) => {
  return User.create({
    name: data.name,
    createdBy
  })
}

export const updateData = (id, data, updatedBy) =>{ 
  return User.update({
    name: data.name,
    updatedBy,
    updatedAt: sequelize.literal('NOW()')
  }, {
    where: {
      id
    }
  })
}

export const deleteData = (id, deletedBy) => {
  return User.update({
    deletedBy,
    deletedAt: sequelize.literal('NOW()')
  }, {
    where: {
      id
    }
  })
}