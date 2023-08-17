const express=require("express")
const router=express.Router()
const SalariésControll=require("../controllers/SalariésController")
router.get("/",SalariésControll.GetSalariés)
router.get("/:id",SalariésControll.Getsalariésbyid)
router.post("/",SalariésControll.CreateSalarié)
router.delete("/:id",SalariésControll.DeleteSalarié)
router.put("/:id",SalariésControll.UpdateSalarié)

module.exports=router