import express from 'express'
import projectConfig from 'config/project.config'
import { functionDeleteData, functionGetData, functionGetDataById, functionInsertData, functionUpdateData } from 'controllers/table/tableController'

const { api_prefix } = projectConfig

const route = express.Router()

const apiRoute = `${api_prefix}/table`

const apiRouter = {
  api: apiRoute,
  apiById: `${apiRoute}/:id`
}

route.get(apiRouter.api, functionGetData)
route.get(apiRouter.apiById, functionGetDataById)
route.post(apiRouter.api, functionInsertData)
route.put(apiRouter.apiById, functionUpdateData)
route.delete(apiRouter.apiById, functionDeleteData)

export default route
