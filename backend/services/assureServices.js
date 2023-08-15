const assure=require("../models/assure")
 

const GetALLassure=async()=>{
    return await assure.find()
}
const GetassureById=async(id)=>{
    return await assure.findById(id)
}
const Ajouterassure=async(O)=>{
    return await assure.create(O)
}
const Deleteassure=async(id)=>{
    return await assure.findByIdAndDelete(id)
}
const Updateassure=async(O)=>{
    return await assure.findByIdAndUpdate(O._id,O)
}
module.exports={
    GetALLassure,
    GetassureById,
    Ajouterassure,
    Deleteassure,
    Updateassure
}