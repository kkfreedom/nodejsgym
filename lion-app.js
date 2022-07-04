const express = require('express')
const router = require('./lion-router')
const parseReqBody = require('./lion-middleware')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: false }))

app.use((req, res, next) => {
  console.log('called this middleware prior to each api')
  next()
})

app.use(parseReqBody)

app.use('/lion', router)

app.listen(3000, () => {
  console.log('http://localhost:3000')
})
