const ContratService = require("../services/ContratServices")


const GetContracts = async (req, res) => {
    try {
        const contracts = await ContratService.GetAllContracts()
        res.status(200).json(contracts)
    } catch (error) {
        console.log(error)
        res.status(500).json(error);
    }

}
const GetContractById = async (req, res) => {
    try {
        const contracts = await ContratService.GetContractById(req.params.id)
        res.status(200).json(contracts)
    } catch (error) {
        console.log(error)
        res.status(500).json(error);
    }
}

const CreateContract=async(req,res)=>{
    try {
        await ContratService.CreateContract(req.body)
        res.status(201).json("Contrat ajouté avec succès")
        
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}

const DeleteContract=async(req,res)=>{
    try {
        await ContratService.DeleteContract(req.params.id)
        res.status(200).json("Contrat supprimé avec succés")
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}
const UpdateContract=async(req,res)=>{
    try {
        await ContratService.UpdateContract(req.body )
        res.status(200).json("Contrat bien modifié")
        
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}
module.exports={
    GetContracts,
    GetContractById,
    CreateContract,
    DeleteContract,
    UpdateContract

}