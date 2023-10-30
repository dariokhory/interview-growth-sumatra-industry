export class ApiError {
  constructor(statusCode, error, message) {
    this.statusCode = statusCode
    this.detail = error
    this.message = message
  }
}

export const errorHandler = (error, req, res, next) => {
  const { statusCode, detail, message } = error
  console.error(`\n${detail}`)
  res.status(statusCode).json({
    success: false,
    message
  })
}
