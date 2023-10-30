require('dotenv').config()
const projectConfig = {
  db_host: process.env.DB_HOST,
  db_name: process.env.DB_NAME,
  db_user: process.env.DB_USER,
  db_password: process.env.DB_PASSWORD,

  api_prefix: process.env.API_PREFIX,

  token_key: process.env.TOKEN_KEY
}

export default projectConfig
