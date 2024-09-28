const express = require('express')
const app = express()
const path = require('path')
const url = require('url')

app.use(express.static(path.join(__dirname, 'public')))

app.get("/", (req, res)=>{
  res.sendFile(path.join(__dirname, 'public', 'index.html')) ; 
})

app.get("/about", (req, res)=>{
    
    res.send({data: 'ABOUT US'})
})

app.get("/contact", (req, res)=>{
    
    res.send("Contact")
})

app.use((req, res)=>{
    
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html')) ; 
})


app.listen(3000, ()=>{
    console.log("Server is running @ http://localhost:3000")
})