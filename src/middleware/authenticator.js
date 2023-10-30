import jwt from 'jsonwebtoken'
import projectConfig from 'config/project.config'

const { token_key: secretKey } = projectConfig

export const extractTokenProfile = (req) => {
  const header = req.headers['authorization']
  const token = header && header.split(' ')[1]
  return jwt.decode(token)
}

export const generateToken = (user) => {
  return jwt.sign(user, secretKey, { expiresIn: '1d' })
}

export const authenticateUser = (req, res, next) => {
  const header = req.headers['authorization']
  const token = header && header.split(' ')[1]

  if (token == null) return res.sendStatus(401)

  jwt.verify(token, secretKey, (err, user) => {
    if (err) return res.sendStatus(403)

    req.user = user

    next()
  })
}
