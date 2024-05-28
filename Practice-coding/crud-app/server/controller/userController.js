import User from "../models/userModel.js"

export const create=async(req,res)=>{
    try{
      const userData=new User(req.body);
       if(!userData){
        return res.status(401).json({msg:"User data not found"});
       }
       const savedData=await userData.save()
       res.status(200).json(savedData)
    }
    catch(err){
        res.status(500).json({err:err});    
    }
}


export const getAll=async(req,res)=>{
   try{
     const userData= await User.find();
     if(!userData){
        return res.status(401).json({msg:"User data not found"})
     }
     res.status(200).json(userData)
   }
   catch(error){
    res.status(500).json({err:err});    
}
}

export const getOne=async(req,res)=>{
    try{
       const id=req.params.id;
       const userExist=await User.findById(id);
       if(!userExist){
          return res.status(401).json({msg:"User not found"})
       }
       res.status(200).json(userExist)
    }
    catch(err){
        res.status(404).json({err:err})
    }
}

export const update= async(req,res)=>{
    try{
       const id=req.params.id;
       const userExist=await User.findById(id);
        if(!userExist){
            return res.status(401).json({msg:"User not found"})
        }
        const updatedData=await User.findByIdAndUpdate(id,req.body,{new:true})
        res.status(200).json(updatedData)
    }
    catch(err){
        res.status(404).json({err:err})
    }
}

export const deleteUser=async(req,res)=>{
    try{
       const id=req.params.id;
       const userExist=await User.findById(id);
       if(!userExist){
          res.status(401).json({msg:"User not exists"})
       }
       await User.findByIdAndDelete(id);
       res.status(200).json({msg:"User deleted successfully"}) 
    }
    catch(err){
        res.status(404).json({err:err})
    }
}