
const ChargeFixe=require("../models/ChargeFixe")

// Créer une nouvelle charge fixe
const createFixedCharge = async (req, res) => {
    try {

        const { Type, Montant } = req.body;
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
  
  module.exports = {
    createFixedCharge,
    getAllFixedCharges
  };