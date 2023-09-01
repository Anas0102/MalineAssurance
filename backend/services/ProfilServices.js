const Profil=require("../models/Profil")

const GetallProfils=async()=>{
return await Profil.find()
}

const GetProfilsByid=async(id)=>{
    return await Profil.findById(id)
}
const CreateProfil=async(P)=>{
    return await Profil.create(P)
}
const DeleteProfil=async(id)=>{
    return await Profil.findByIdAndDelete(id)
}
const UpdateProfil=async(id, updatedData)=>{
    return await Profil.findByIdAndUpdate(id, updatedData, {
        new: true,
        runValidators: true
    })
}
module.exports={
    GetallProfils,
    GetProfilsByid,
    CreateProfil,
    DeleteProfil,
    UpdateProfil
}