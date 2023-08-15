const mongoose=require("mongoose")
const CourtierSchema=new mongoose.Schema({
    id:int,
    name:String,
    email: String,
    password:String
})

const Courtier=mongoose.model("Courtier",CourtierSchema);
module.exports = Courtier;