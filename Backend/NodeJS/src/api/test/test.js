const router = require('express').Router()
module.exports = router
router.get('/test', test)

function test (req, res) {
  res.json({ info: 'test page' })
}
