const express=require("express")
const router=express.Router()
const ContratController=require("../controllers/ContratController")

router.get("/Contrats",ContratController.GetContracts)
router.get("/Contrat/:id",ContratController.GetContractById)
router.post("/Contrats",ContratController.CreateContract)
router.delete("/Contrats/:id",ContratController.DeleteContract)
router.put("/Contrats/:id",ContratController.UpdateContract)

module.exports=router