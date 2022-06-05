var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(8080, '127.0.0.1', function () {
  console.log('Listening on port 3000...')
})
