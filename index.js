// //import cors for integration
const cors = require('cors')

// import .env
require('dotenv').config()

//create server (import express)
const express=require('express')
//create server using express
const server=express()
const router = require('./routes/router')
// //use cors after impor
server.use(cors())

// // covert all json to js data
server.use(express.json())
server.use(router)





//  import connection .js file
require('./database/connection')

//create server port (it should be different from front end)
const port=5001 || process.env.PORT
 
//run serever
server.listen(port,()=>{
    console.log(`server started ${port}`);      //to check server running
})





