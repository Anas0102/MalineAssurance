const ProfilServices=require("../services/ProfilServices")

const GetAllProfiles=async(req,res)=>{
    try {
        const   Profiles=await ProfilServices.GetallProfils(req.body)
        res.status(200).json(Profiles)
    } catch (error) {
         console.log(error);
        res.status(500).json(error)
       
    }
}

const GetProfilesById=async(req,res)=>{
    try {
        const Profiles=await ProfilServices.GetProfilsByid(req.params.id)
        res.status(200).json(Profiles)
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}

const CreateProfile=async(req,res)=>{
    try {
        await ProfilServices.CreateProfil(req.body)
        res.status(201).json("Profil est créé avec succès")
        
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}
const DeleteProfile=async(req,res)=>{
    try {
        await ProfilServices.DeleteProfil(req.params.id)
        res.status(200).json("Profile supprimé avec succès")
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}
const UpdateProfile=async(req,res)=>{
    try {
        await ProfilServices.UpdateProfil(req.params.id,req.body)
        res.status(200).json("mis a jour et modification du profil avec succès")
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}

module.exports={
    GetAllProfiles,
    GetProfilesById,
    CreateProfile,
    DeleteProfile,
    UpdateProfile
}