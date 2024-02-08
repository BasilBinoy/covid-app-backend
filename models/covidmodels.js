const mongoose=require("mongoose")

const modelSchema=new mongoose.Schema(
{
    patientName:String,
     patientPhone:String,
     patientaddress:String,
     Patientsymptoms:String,
     Patientstatus:String,
}

)

module.exports=mongoose.model("covid",modelSchema)