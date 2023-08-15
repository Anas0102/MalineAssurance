const mongoose=require("mongoose")
const ContratSchema=new mongoose.Schema({
    id:Number,
    Date_Signature:{type:Date,default:Date.now()},
    Date_Echeance:{type:Date,default:Date.now()},
    Montant_Prime:Number,
    TypeduContrat:String,
    DescriptionduContrat:String
})
const Contrat=mongoose.model("Contrat",ContratSchema)
module.exports =Contrat;