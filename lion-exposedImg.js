const express = require('express')

const app = express()

app.use(express.static('./public'))

app.get('/', (req, res) => {
    console.log('Get called');
    res.send('Get called')
})




app.listen(3010, () =>{
    console.log('Express service running at http://localhost:3010');
})