const express = require('express')
const server = express();
const path = __dirname.slice(0,-3) + "public"
const PORT = 5000;

server.use(express.static(path))

server.listen(PORT, ()=>{
    console.log(`server is listening in port ${PORT}`)
})

//this is a change that makes a lot of sense in the original code.
