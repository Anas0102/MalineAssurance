const Salariésservices=require("../services/Salariéservices")

const GetSalariés=async(req,res)=>{
    try {
       const Salariés= await  Salariésservices.GetAllSalriés()
       res.status(200).json(Salariés)
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}
const Getsalariésbyid=async(req,res)=>{
    try {
        const Salariés=await Salariésservices.GetSalariéById(req.params.id)
        res.status(200).json(Salariés)
        
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}
const CreateSalarié=async(req,res)=>{
    try {
        await Salariésservices.CreateSalarié(req.body)
        res.status(201).json("Salarié ajouté avec succès")
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}
const DeleteSalarié=async(req,res)=>{
    try {
        await Salariésservices.DeleteSalarié(req.params.id)
        res.status(200).json("Salarié supprimé avec succès")
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}
const UpdateSalarié=async(req,res)=>{
    try {
        await Salariésservices.UpdateSalarié(req.params.id,req.body,{ useFindAndModify: false})
        res.status(200).json("Update Salarié  with success")
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}
module.exports={
    GetSalariés,Getsalariésbyid,CreateSalarié,DeleteSalarié,UpdateSalarié
}