
const ChargeFixe=require("../models/ChargeFixe")
const ChargeFixeServices=require("../services/ChargeFixeServices")
// Créer une nouvelle charge fixe
const createFixedCharge = async (req, res) => {
  try {
    const { Type, Montant } = req.body;

    // Vérifiez si une charge fixe similaire existe déjà
    const existingCharge = await ChargeFixe.findOne({ Type, Montant });

    if (existingCharge) {
      // Une charge fixe similaire existe déjà, renvoyez une erreur
      return res.status(400).json({ error: 'Cet élément existe déjà.' });
    }

    const chargefixe = new ChargeFixe({ Type, Montant });
    await chargefixe.save();
    res.status(201).json("Ref of fixed Charges created with success");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

  
  // Obtenir toutes les charges fixes
  const getAllFixedCharges = async (req, res) => {
    try {
      const chargefixe = await ChargeFixe.find();
      res.json(chargefixe);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  const UpdateChargeFixe=async(req,res)=>{
    try {
        await ChargeFixeServices.UpdateChargeFixe(req.params.id,req.body)
        res.status(200).json("mis a jour et modification du Charge Fixe avec succès")
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}
const GetChargeFixeById=async(req,res)=>{
  try {
      const chargefixe=await ChargeFixeServices.GetChargeFixeByid(req.params.id)
      res.status(200).json(chargefixe)
  } catch (error) {
      console.log(error);
      res.status(500).json(error)
  }
}
  module.exports = {
    createFixedCharge,
    getAllFixedCharges,
    UpdateChargeFixe,
    GetChargeFixeById
  };