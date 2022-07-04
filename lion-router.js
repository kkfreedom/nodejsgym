const express = require('express')
const qs = require('querystringify')

const router = express.Router()

router.get('/getUserList', (req, res) => {
  res.send('ok')
})

router.post('/users', (req, res) => {
  // console.log(req.body);
  // res.setHeader('content-type', 'application/json')
  const body = req.body
  res.send({ status: 0, msg: 'POST /users', data: body })
})

module.exports = router
