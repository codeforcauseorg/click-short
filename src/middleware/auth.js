const admin = require('../firebase')

const getAuthToken = (req, res, next) => {
  const authHeader = req.headers.authorization
  if (authHeader && authHeader.split(' ')[0] === 'Bearer') {
    req.authToken = authHeader.split(' ')[1]
    console.log(req.authToken)
  } else {
    req.authToken = null
  }
  next()
}

const auth = (req, res, next) => {
  console.log('Inside the auth middleware')
  getAuthToken(req, res, async () => {
    try {
      const { authToken } = req
      const userInfo = await admin.auth().verifyIdToken(authToken)
      req.authId = userInfo.uid
      return next()
    } catch (e) {
      return res
        .status(401)
        .send({ error: 'You are not authorized to make this request' })
    }
  })
}

module.exports = auth
