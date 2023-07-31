const router = require('express').Router()

function test (req, res) {
  res.send('test page')
}

router.get('/test', test)

module.exports = router
