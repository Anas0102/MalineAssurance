
import React, { useState } from 'react';

function CommissionCalculatorJenior() {
  const [salesAmountJenior, setSalesAmountJenior] = useState('');
  const [commissionJenior, setCommissionJenior] = useState('');

  const calculateCommissionJenior = (amount) => {
    // Mettez ici votre logique de calcul de commission en fonction du montant de vente
    // Par exemple, vous pouvez avoir des taux de commission prédéfinis
    const commissionRateJenior = 0.1; // Exemple de taux de commission de 10%
    const calculatedCommissionJenior = amount * commissionRateJenior;
    return calculatedCommissionJenior;
  };

  const handleSalesAmountChangeJenior= (event) => {
    const amount = parseFloat(event.target.value);
    setSalesAmountJenior(amount);
    const calculatedCommissionJenior = calculateCommissionJenior(amount);
    setCommissionJenior(calculatedCommissionJenior);
  };

  return (
    
    <div className='mt-5 text-center'>
         <br/><br/><br/> <br/>
      <br/><br/><br/>
      <h2>Calculateur de Commission pour les Jéniors:</h2>
      <br/>
      <div>
        <label>Chiffres d'affaires réalisé par le jénior: </label>
        <input
          type="number"
          value={salesAmountJenior}
          onChange={handleSalesAmountChangeJenior}
        />
      </div>
      <div>
        <p>Sa Commission (Prime) : {commissionJenior} </p>
      
          
      </div>
    </div>
  );
}

export default CommissionCalculatorJenior;
