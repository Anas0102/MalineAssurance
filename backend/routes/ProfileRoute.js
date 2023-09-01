const express=require("express")
const route=express.Router()
const ProfilController=require("../controllers/ProfilController")

route.get("/Profiles",ProfilController.GetAllProfiles)
route.get("/Profiles/:id",ProfilController.GetProfilesById)
route.post("/Profiles",ProfilController.CreateProfile)
route.delete("/Profiles/:id",ProfilController.DeleteProfile)
route.put("/Profiles/:id",ProfilController.UpdateProfile)

module.exports=route