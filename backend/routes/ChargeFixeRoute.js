const express = require('express');
const router = express.Router();
const fixedChargeController = require('../controllers/ChargeFixeController');

// Créer une nouvelle charge fixe
router.post('/chargefixe', fixedChargeController.createFixedCharge);

// Obtenir toutes les charges fixes
router.get('/chargefixe', fixedChargeController.getAllFixedCharges);
router.get('/chargefixe/:id',fixedChargeController.GetChargeFixeById)
router.put("/chargefixe/:id",fixedChargeController.UpdateChargeFixe)
module.exports = router;
