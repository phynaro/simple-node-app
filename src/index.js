const express = require('express');

const port = 8080
const app = express()

app.get('/content/123', function(req, res) {
  res.send("content 123")
})

app.get('/', function(_, res) {
  res.send("Hello world")
})

app.listen(port, function(err) {
  if(err) {
    console.error()
  }

  console.log(`App start on port: ${port}`)
})