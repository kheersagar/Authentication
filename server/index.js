const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();
const jwt = require('jsonwebtoken');
app.use(cookieParser());
app.use(express.json());
app.use(cors({
  credentials:true,
  origin:'*',
}))
// app.use(express.urlencoded({ extended: false }));
app.post("/login",(req,res)=>{
  const user = {userName: req.body.userName,password:req.body.password};
  const accessToken = jwt.sign(user,'SECRET');
  res.cookie('accessToken',accessToken,{maxAge:3000000000000000,httpOnly:true});
  res.json({accessToken:accessToken})
})

app.get("/verify",(req,res)=>{
  const accessToken = req.cookies ;
  console.log(accessToken)
  if(accessToken){
    // res.sendStatus(200);
  }else{
    // res.sendStatus(401);
  }
  res.sendStatus(200);
})


app.get("/test",(req,res)=>{
  const accessToken = req.cookies ;
  console.log(accessToken)
  if(accessToken){
    // res.sendStatus(200);
  }else{
    // res.sendStatus(401);
  }
  res.sendStatus(200);
})
app.listen(8080,()=>{
  console.log('server running on port 8080');
})