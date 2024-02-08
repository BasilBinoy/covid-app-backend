const express=require("express")
const router=express.Router()
const covidmodels=require("../models/covidmodels")

router.post("/add",async(req,res)=>{
    let data=req.body
    let covid =new covidmodels(data)
    let result=await covid.save()
    res.json({
        status:"success"
    })
})

// router.get("/viewall",async(req,res)=>{
//     let data =await covidmodels.find()
//     res.json(data)
// })
module.exports=router