import express from 'express'
import router from 'routes'
import helmet from 'helmet'
import bodyParser from 'body-parser'
import sequelize from 'utils/sequelize'
import { errorHandler } from 'middleware/errorHandler'

const app = express()
const port = 3000

// body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// this app router
router(app)

// error handler
app.use(errorHandler)

// Helmet
app.use(helmet())

// check sequelize connection
try {
  sequelize.authenticate()
  console.log('Sequelize connection established!')
} catch (error) {
  console.log('Unable to connect to database', error)
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
