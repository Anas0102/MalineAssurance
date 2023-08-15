const assureservice=require("../services/assureServices")

const GetALLassure=async(req,res)=>{
    try {
        const assure = await assureservice.GetALLassure()
        res.status(200).json(assure)
    } catch (error) {
        res.status(500).json(error)
    }
   
}
const GetassureByid=async(req,res)=>{
    try {
        const assure = await assureservice.GetassureById(req.params.id)
        res.status(200).json(assure)
    } catch (error) {
        res.status(500).json(error)
    }
   
}
const Createassure=async(req,res)=>{
    try {
         await assureservice.Ajouterassure(req.body)
        res.status(201).json("Assuré  ajouté avec succès")
    } catch (error) {
        res.status(500).json(error)
    }
   
}
const Deleteassure=async(req,res)=>{
    try {
         await assureservice.Deleteassure(req.params.id)
        res.status(200).json("Assuré supprimé avec succès")
    } catch (error) {
        res.status(500).json(console.log(error))
    }
   
}
const Updateassure=async(req,res)=>{
    try {
         await assureservice.Updateassure(req.body)
        res.status(200).json("Update Assuré  avec succès")
    } catch (error) {
        res.status(500).json(error)
    }
   
}
module.exports={
    GetALLassure,
    GetassureByid,
    Createassure,
    Deleteassure,
    Updateassure
}