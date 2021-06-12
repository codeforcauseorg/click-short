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
  getAuthToken(req, res, async () => {
    try {
      const { authToken } = req
      const userInfo = await admin.auth().verifyIdToken(authToken)
      req.userId = userInfo.uid
      if (req.headers.newuser) {
      }
      return next()
    } catch (e) {
      return res
        .status(401)
        .send({ error: 'You are not authorized to make this request', e : e })
    }
  })
}

module.exports = auth
