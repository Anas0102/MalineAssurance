const mongoose=require("mongoose")
const assureSchema=new mongoose.Schema({
    id:{type:Number},
    prénom_assuré:{type:String},
    nom_assuré:{type:String},
    Date_Naissance: {type:String},
    Type_assuré:{type:String},
    Civilité:{type:String},
    adresse_assuré:{type:String},
    numTelAssurance:{type:Number},
    email_assuré:{type:String},
})

const assure=mongoose.model("assure",assureSchema)

module.exports=assure