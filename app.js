const express = require('express')
const mongoose = require("mongoose")
const PORT = 4100
const url = 'mongodb://localhost/bukkyDB'
const CodeLab = require('./Router/router')
const app = express()

mongoose.connect(url, {useNewUrlParser: true}, { useUnifiedTopology: true } )
const con = mongoose.connection

con.on("open",()=>{
  console.log('Are we Live?')
})

app.use(express.json())
app.use('/', CodeLab)


app.listen(PORT, ()=>{
  console.log(`${PORT}`)
})






