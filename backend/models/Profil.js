const mongoose=require("mongoose")
const ProfilSchema=new mongoose.Schema({
    id:Number,
    Type_Profil:String,
    ChiffreAffaires:String,
    Commission:String,
    DataPrix:String
})
const Profil= mongoose.model("Profil",ProfilSchema)

module.exports=Profil