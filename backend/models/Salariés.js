const mongoose=require("mongoose")

const SalariésSchema=new mongoose.Schema({
    Nom:{type:String},
    Prénom:{type:String},
    Type_Salarié:{type:String},
    Prime:{type:String},
    charges_fixes:{type:String},
    charges_management:{type:String},
    Data:{type:String}

})

const Salariés=mongoose.model("Salariés",SalariésSchema)

module.exports=Salariés;