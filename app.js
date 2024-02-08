const express =require("express")
const cors=require("cors")
const mongoose=require("mongoose")


const covidrouter=require("./controllers/covidrouter")


const app=express()

app.use(express.json())
app.use(cors())



mongoose.connect("mongodb+srv://basil123:basil123@cluster0.6cdda2k.mongodb.net/covidDB?retryWrites=true&w=majority",

{
  useNewUrlParser:true
}
)
app.use("/api/covid",covidrouter)


app.listen(3001,()=>{
    console.log("server running")
})