const pc = require('picocolors')

function info (req, res, next) {
  console.log(pc.bgBlue(' New Connection '))
  console.log(`${pc.green(req.method)} ${pc.cyan(req.originalUrl)} ${pc.magenta('content-type:' + req.headers['content-type'])}`)
  console.log(`Origin: ${pc.cyan(req.headers.origin)}`)
  next()
}

module.exports = {
  info
}
