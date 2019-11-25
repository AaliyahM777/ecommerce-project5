 // we require dotenv  to store our password for our sql databse connection on workbench
 // we use express for our local host use in coneection formy sql database and 
// we require  morgan which is a middleware for generating request’s logs in the server.
// use helmet  for sercuirty to save against attacks in http/https protocls
require('dotenv').config()
const express = require('express');
const helmet= require('helmet');
const morgan= require('morgan')
const Product= require('./models/products');
const mongoose= require('mongoose');
const path = require('path');
const fs = require('fs')

const app = express();
const PORT = 3001
let uri=process.env.ATLAS_URI;

if(process.env.NODE_ENV ==="production"){
  app.use(express.static("client/build"));
  uri = proccess.env.ATLAS_URI
 } else{
     uri ="mongodb://localhost/products"
    //uri = process.env.ATLAS_URI
  }

mongoose.connect(uri,{
  useNewUrlParser:true,
  useCreateIndex:true,
  useUnifiedTopology:true
});


const connection= mongoose.connection;
connection.once('open',()=>{
  console.log("MongoDB connection is live");
});




app.use (helmet()); // added security for server
//support express of application/x-www-form-urlencoded post data
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
// support express of application/json type post data
const accessLogStream = fs.createWriteStream(
  path.join(__dirname, "access.log"),
  { flags: "a" }
);
app.use(morgan("dev", { stream: accessLogStream }));



app.use((req, res, next) => {
  res.set('Access-Control-Allow-Origin', 'http://localhost:3000')
  next()
})


// app.get('/api/products', async (req, res)=> {
//  const products = await Product.find();
//  res.status(200).send(products);
// })


const usersRoutes = require('./Routes/usersRouter')
const productsRouter = require('./Routes/products');

// app.get('/api', (req, res) => {
//     res.json({message: "API root"})
// })
app.use('/api/users', usersRoutes)
app.use('/api/products',productsRouter);

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function(){
  console.log(`Server now listening on port ${PORT}`);
});


