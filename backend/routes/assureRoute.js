const express=require("express")
const router=express.Router()
const assureController=require("../controllers/assureController")

router.get("/Assures",assureController.GetALLassure)
router.get("/Assures/:id",assureController.GetassureByid)
router.post("/Assures",assureController.Createassure)
router.delete("/Assures/:id",assureController.Deleteassure)
router.put("/Assures/:id",assureController.Updateassure)
module.exports = router;