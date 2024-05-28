const express=require("express")
const mongoose=require("mongoose")
const bodyParser=require("body-parser")
const app=express()

app.use(bodyParser.json());
mongoose.connect("mongodb://127.0.0.1:27017/crud")

// schema
const UserSchema=new mongoose.Schema({
    name:String,
    age:Number
})

// model
const UserModel=mongoose.model("users",UserSchema)

// crud operation
app.get("/getUsers",(req,res)=>{
   UserModel.find({}).then(function(users){
    res.json(users)
   }).catch((err)=>{
      console.log(err)
   })
})

app.post ("/adduser",(req,res)=>{
    const {name,age}=req.body;
    const newuser=new UserModel({name,age});
    newuser.save().then(()=>{
        res.status(201).json({message:"USer is created"})
    }).catch((err)=>{
        console.log(err)
    })
})

app.patch("/updateUser/:id", (req, res) => {
    const { id } = req.params;
    const { name, age } = req.body;
    UserModel.findByIdAndUpdate(id, { name, age }).then(() => {
      res.json({ message: "User updated successfully" });
    }).catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Failed to update user" });
    });
  });

  app.delete("/deleteUser/:id", (req, res) => {
    const { id } = req.params;
    UserModel.findByIdAndDelete(id).then(() => {
      res.json({ message: "User deleted successfully" });
    }).catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Failed to delete user" });
    });
  });
  
app.listen(3001,()=>{
    console.log("port is connected 3001")
})