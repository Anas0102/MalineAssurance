const mongoose=require("mongoose")

const ChargeFixeSchema=new mongoose.Schema({
    Type:String,
    Montant:String
})

const ChargeFixe=mongoose.model("ChargeFixe",ChargeFixeSchema)


module.exports=ChargeFixe