var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})
const port = process.env.PORT;
console.log("port -> " + port );
app.listen(port, '0.0.0.0', function () {
  console.log('Listening on port 3000...')
})
