const port=4003;
const express=require("express")
const app=express();
const mongoose=require("mongoose")
const jwt=require("jsonwebtoken")  
const multer=require("multer")
const path=require("path")
const cors=require("cors")

app.use(express.json())
app.use(cors());

mongoose.connect("mongodb+srv://efty3222:nj3PG6GvAdRrqsYW@cluster0.nzlkviu.mongodb.net/SPL-2")


app.get("/",(req,res)=>{
    res.send("Express app is running")
})


const Users=mongoose.model('Users',{
    name:{
        type:String,
    },

   email:{
        type:String,
        unique:true,
    },

    password:{
        type:String,
    },

   cartData:{
        type:Object,
    },

    number:{
        type:String,
    },
    professionalPosition:{
        type:String,
    },

    date:{
        type:Date,
        default:Date.now,
    },
    category:{
        type:String,
    },
    dob: {
        type: Date, // Date of Birth
    },
    registrationNumber:{
        type:String,
    }

})

//creating endpoint for registering the user

app.post('/register',async(req,res)=>{
    console.log('Request body:', req.body);
    let check=await Users.findOne({email:req.body.email});
    if(check){
        return  res.status(400).json({success:false,errors:"existing user found with same email id"})
    }
    let cart={}
    for (let i = 0; i < 300; i++) {
       cart[i]=0;    
    }
    const user=new Users({
        name:req.body.username,
        email:req.body.email,
        password:req.body.password,
        number:req.body.number,
        professionalPosition:req.body.professionalPosition,
        cartData:cart,
        category:req.body.category,
        dob:req.body.dob,
        registrationNumber:req.body.registrationNumber,
    })

    await user.save();

    const data={
        user:{
            id:user.id
        }
    }

    const token=jwt.sign(data,'secret_ecom');
    res.json({success:true,token})
})

app.post('/login',async(req,res)=>{
    let user=await Users.findOne({email:req.body.email})

    if(user){
        const passCompare=req.body.password === user.password;

        if(passCompare){
            const data={
                user:{
                    id:user.id
                }
            }
            const token=jwt.sign(data,'secret_ecom');
            res.json({success:true,token});
        }
        else{
            res.json({success:false,errors:"Wrong Password"})
        }
    }

    else{
        res.json({success:false,errors:"Wrong Email Id"})
    }
})


app.listen(port,(error)=>{
    if(!error){
        console.log("Server running on port:"+port)
    }
    else{
        console.log("Error :"+error)
    }
})