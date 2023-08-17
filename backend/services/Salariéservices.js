const Salariés=require("../models/Salariés")


const GetAllSalriés=async()=>{
    return await Salariés.find()
}
const CreateSalarié=async(S)=>{
    return await Salariés.create(S)
}

const DeleteSalarié=async(id)=>{
    return await Salariés.findByIdAndDelete(id)
}
const GetSalariéById=async(id)=>{
return await Salariés.findById(id)
}
const UpdateSalarié=async(S)=>{
    return await Salariés.findByIdAndUpdate(S._id,S)
}
module.exports={
    GetAllSalriés,
    CreateSalarié,
    DeleteSalarié,
    GetSalariéById,
    UpdateSalarié
}