const ChargeFixe=require("../models/ChargeFixe")

const UpdateChargeFixe=async(id, updatedData)=>{
    return await ChargeFixe.findByIdAndUpdate(id, updatedData, {
        new: true,
        runValidators: true
    })
}
const GetChargeFixeByid=async(id)=>{
    return await ChargeFixe.findById(id)
}
module.exports={
    UpdateChargeFixe,
    GetChargeFixeByid
}