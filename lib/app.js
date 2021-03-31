// const net = require('net').promise
const express = require('express');
const app = express()
const fs = require('fs').promises

app.use(express.json())

app.get('/test', (req, res) =>{
  res.json('GET request test sucess')
})

app.get('/:filePath', (req, res) =>{
  fs.readFile(`lib/${req.params.filePath}`, "utf-8").then((data) => res.send(data))
    .catch(() => {
      res.send('File Not Found')
    })
})
app.use((req, res) => {
  res.send('Not Valid Endpoint')
})

module.exports = app;