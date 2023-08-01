// importaciones
const express = require('express')
const { info } = require('./middlewares/info.middleware')
const apiRouter = require('./api/api.router')
const cors = require('cors')

// inicio procesamiento
// Cargar Variables de entorno
require('dotenv').config()

// Modo Dev
const DEV = process.env.DEVMODE === 'true'

// Modo info
const INFO = process.env.INFO === 'true'

// config server
const app = express()
const port = process.env.PORT ?? 0

// Whitelist
const WHITELIST = process.env.WHITELIST ?? []
const optionsCors = {
  origin: (origin, callback) => {
    if (origin !== undefined && WHITELIST.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error('no permitido'))
    }
  }
}

// use
// middleware info
if (INFO) app.use(info)

// cors
if (WHITELIST.includes('0.0.0.0')) {
  if (INFO) console.log('Mode: public')
  app.use(cors())
} else {
  if (INFO) console.log('Mode: whitelist')
  app.use(cors(optionsCors))
}

// json
app.use(express.json())

// api routing
apiRouter(app)

// other response
app.get('/', (req, res) => {
  res.send('Hello World 🐣')
})

// listen server
const server = app.listen(port, () => {
  if (INFO) console.log(`Server Init: http://localhost:${server.address().port}`)
})
