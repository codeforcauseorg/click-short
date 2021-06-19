const admin = require('../firebase')

const getAuthToken = (req, res, next) => {
  const authHeader = req.headers.authorization
  if (authHeader && authHeader.split(' ')[0] === 'Bearer') {
    req.authToken = authHeader.split(' ')[1]
  } else {
    req.authToken = null
  }
  next()
}

const auth = (req, res, next) => {
  getAuthToken(req, res, async () => {
    try {
      const { authToken } = req
      console.log(authToken)
      const userInfo = await admin.auth().verifyIdToken(authToken)
      req.body.owner = userInfo.uid
      return next()
    } catch (e) {
      return res
        .status(401)
        .send('You are not authorized to make this request')
    }
  })
}

const adminAuth = (req, res, next) => {
  getAuthToken(req, res, async () => {
    try {
      const { authToken } = req
      const userInfo = await admin.auth().verifyIdToken(authToken)
      req.body.owner = userInfo.uid
      req.email = userInfo.email
      return next()
    } catch (e) {
      return res
        .status(401)
        .send({ error: 'You are not authorized to make this request', e: e })
    }
  })
}

module.exports = { auth, adminAuth }
