// importaciones
const express = require('express')
const { info } = require('./middlewares/info.middleware')

// inicio procesamiento
require('dotenv').config()
const app = express()
const port = process.env.PORT ?? 0

app.use(info)

app.get('/', (req, res) => {
  res.send('Hello World 🐣')
})

const server = app.listen(port, () => {
  console.log(`Server Init: http://localhost:${server.address().port}`)
})
