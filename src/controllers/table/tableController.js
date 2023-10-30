import { ApiError } from 'middleware/errorHandler'
import {
  deleteData,
  getData,
  getDataById,
  getDataCount,
  insertData,
  updateData
} from 'services/table/tableService'

export const functionGetData = async (req, res, next) => {
  console.log(`Requesting-auth-functionGetData: ${req.url}`)
  const { page = 1, pageSize = 10, ...other } = req.query
  const pagination = {
    page,
    pageSize
  }
  try {
    const data = await getData(pagination, {}, other)
    const count = await getDataCount({}, other)
    if (data) {
      res.status(200).json({
        success: true,
        message: 'Success',
        data,
        page: page || 1,
        pageSize: pageSize || 10,
        total: count
      })
    } else {
      throw new Error('Failed to get data')
    }
  } catch (error) {
    next(new ApiError(
        404,
        error,
        `${error.message || 'Something went wrong'} - Failed to get data`
    ))
  }
}

export const functionGetDataById = async (req, res, next) => {
  console.log(`Requesting-auth-functionGetDataById: ${req.url}`)
  const { id } = req.params
  try {
    const data = await getDataById(id)
    if (data) {
      res.status(200).json({
        success: true,
        message: 'Success',
        data,
      })
    } else {
      throw new Error('Failed to get data by id')
    }
  } catch (error) {
    next(new ApiError(
        404,
        error,
        `${error.message || 'Something went wrong'} - Failed to get data by id`
    ))
  }
}

export const functionInsertData = async (req, res, next) => {
  console.log(`Requesting-auth-functionInsertData: ${req.url}`)
  const userLogin = 1
  try {
    const response = await insertData(req.body, userLogin)
    if (response) {
      res.status(200).json({
        success: true,
        message: 'Success',
        data: response
      })
    } else {
      throw new Error('Failed to insertData')
    }
  } catch (error) {
    next(new ApiError(
        404,
        error,
        `${error.message || 'Something went wrong'} - Failed to insert data`
    ))
  }
}

export const functionUpdateData = async (req, res, next) => {
  console.log(`Requesting-auth-functionUpdateData: ${req.url}`)
  const { id } = req.params
  const userLogin = 1
  try {
    const response = await updateData(id, req.body, userLogin)
    if (response) {
      res.status(200).json({
        success: true,
        message: 'Success',
        data: response
      })
    } else {
      throw new Error('Failed to insertData')
    }
  } catch (error) {
    next(new ApiError(
        404,
        error,
        `${error.message || 'Something went wrong'} - Failed to insert data`
    ))
  }
}

export const functionDeleteData = async (req, res, next) => {
  console.log(`Requesting-auth-functionDeleteData: ${req.url}`)
  const { id } = req.params
  const userLogin = 1
  try {
    const response = await deleteData(id, userLogin)
    if (response) {
      res.status(200).json({
        success: true,
        message: 'Success',
        data: response
      })
    } else {
      throw new Error('Failed to insertData')
    }
  } catch (error) {
    next(new ApiError(
        404,
        error,
        `${error.message || 'Something went wrong'} - Failed to insert data`
    ))
  }
}
