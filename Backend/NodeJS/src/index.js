// importaciones
const express = require('express')
const { info } = require('./middlewares/info.middleware')
const apiRouter = require('./api/api.router')
const cors = require('cors')

// inicio procesamiento
// Cargar Variables de entorno
require('dotenv').config()

// Modo Dev
const dev = process.env.DEVMODE === 'true'

// config server
const app = express()
const port = process.env.PORT ?? 0

// Whitelist
const whitelist = process.env.WHITELIST ?? []
const optionsCors = {
  origin: (origin, callback) => {
    console.log(origin)
    if (origin !== undefined && whitelist.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error('no permitido'))
    }
  }
}

// use
// middleware info
app.use(info)

// cors
if (dev) {
  app.use(cors())
} else {
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
  console.log(`Server Init: http://localhost:${server.address().port}`)
})
