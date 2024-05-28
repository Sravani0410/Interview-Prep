// var data=fs.readFile("app.txt",function(err,data){
//    if(err){
//     throw err
//    }
//    console.log(data)
// })

// var myCallback=function(err,data){
//     if(err){
//         console.log(err);
//     }
//     console.log(data)
// }

// var usingItNow=function(callback){
//     callback(new Error("error occured"),"got it")
// }
// usingItNow(myCallback)
const express=require("express");

const mongoose = require('mongoose');
const app=express();

// middleware

const authenticate=(req,res,next)=>{
  console.log("middleware response")
  next()
}
app.get("/",authenticate,(req,res)=>{
  console.log("get the app")
})

const connectDb =()=>{
  mongoose.connect('mongodb://127.0.0.1:27017/inspekt', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
}

app.listen(2025,async ()=>{
  try{
      await connectDb();
      console.log("lisenting on port 2025")
  }
  catch(err){
      console.log(err.message);
  }
});
