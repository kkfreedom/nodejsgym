const lionDateFormat = require('./lionDateFormat')
const express = require('express')

const dt = lionDateFormat.dateFormat(new Date())
console.log(dt)

const app = express()

app.get('/', function (req, res) {
  res.send('<h1>Hello World! why</h1>')
})

app.get('/getUser', (req, res) => {
  console.log(req.query)
  res.send(`<div>name=${req.query.name}, age=${req.query.age}</div>`)
//   res.send(`<h1>name=${req.query.name}, age=${req.query.age}</h1>`)
})

app.post('/users/:id', (req, res) => {
  console.log(req.params)
  res.send(`Post users called, id = ${req.params}`)
})

app.listen(3000, () => {
  console.log('App running at http://localhost:3000')
})
