const Contrat = require("../models/Contrat")



const GetAllContracts=async()=>{
    return  await Contrat.find()
}

const CreateContract=async(C)=>{
    return await Contrat.create(C)
}

const DeleteContract=async(id)=>{
    return await Contrat.findByIdAndDelete(id)
}
const GetContractById=async(id)=>{
return await Contrat.findById(id)
}
const UpdateContract=async(C)=>{
    return await Contrat.findByIdAndUpdate(C._id,C)
}

module.exports={
    GetAllContracts,CreateContract,GetContractById,UpdateContract,DeleteContract
}