
import React, { useState } from 'react';

function CommissionCalculatorSenior() {
  const [salesAmountSenior, setSalesAmountSenior] = useState('');
  const [commissionSenior, setCommissionSenior] = useState('');

  const calculateCommissionSenior = (amount) => {
    // Mettez ici votre logique de calcul de commission en fonction du montant de vente
    // Par exemple, vous pouvez avoir des taux de commission prédéfinis
    const commissionRateSenior = 0.2; // Exemple de taux de commission de 20%
    const calculatedCommissionSenior = amount * commissionRateSenior;
    return calculatedCommissionSenior;
  };

  const handleSalesAmountChangeSenior= (event) => {
    const amount = parseFloat(event.target.value);
    setSalesAmountSenior(amount);
    const calculatedCommissionSenior = calculateCommissionSenior(amount);
    setCommissionSenior(calculatedCommissionSenior);
  };

  return (
    <div className='text-center'>
      <br/><br/><br/> <br/>
      <br/><br/><br/>
      <h2>Calculateur de Commission pour les Séniors:</h2>
      
      <div>
        <label>Chiffres d'affaires réalisé par le sénior: </label>
        <input
          type="number"
          value={salesAmountSenior}
          onChange={handleSalesAmountChangeSenior}
        />
        <br/>
        <label>Compagnie d'assurances:</label>
        <input
        type='radio'></input>
      </div>
      <div>
        <p>Sa Commission(Prime) : {commissionSenior}</p>
      </div>
    </div>
  );
}

export default CommissionCalculatorSenior;
