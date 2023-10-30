import { Op } from 'sequelize'

export const count = ({
  table,
  fields,
  where = {},
  other
}) => {
  const { q, type } = other
  let tableProps = {}

  let search
  if (q) {
    search = { [Op.or]: [] }
    for (const field of fields) {
      search[Op.or].push({ [`${field}`]: { [Op.substring]: q } })
    }
  }

  if (type !== 'all') {
    tableProps = {
      ...tableProps
    }
  }

  tableProps = {
    ...tableProps,
    where: { ...where, ...search }
  }

  return table.count(tableProps)
}

export const paginate = ({
  table,
  fields,
  pagination,
  where = {},
  other
}) => {
  const { page = 0, pageSize = 10 } = pagination
  const { q, type } = other
  let tableProps = {}

  let search
  if (q) {
    search = { [Op.or]: [] }
    for (const field of fields) {
      search[Op.or].push({ [`${field}`]: { [Op.substring]: q } })
    }
  }

  if (type !== 'all') {
    tableProps = {
      ...tableProps,
      limit: Number(pageSize || 10),
      offset: (Number(page || 1) - 1) * Number(pageSize || 10)
    }
  }

  tableProps = {
    ...tableProps,
    where: { ...where, ...search }
  }

  return table.findAll(tableProps)
}
