import '../../css/CommissionCalculator.css';
import React, { useState } from 'react';
import * as FcIcons from 'react-icons/fc'

const CommissionCalculator = () => {
    const [totalCommission, setTotalCommission] = useState('');
    const [neolianeCommission, setNeolianeCommission] = useState();
    const [wazarieCommission, setWazarieCommission] = useState();
    const [alptisCommission, setAlptisCommission] = useState();
    const [Commission2AM,set2AMCommisson]=useState();
    const [COVERITYCommission,setCOVERITYCommission]=useState();

    const [neolianeRevenue, setNeolianeRevenue] = useState(0);
    const [wazarieRevenue, setWazarieRevenue] = useState(0);
    const [alptisRevenue, setAlptisRevenue] = useState(0);
    const [Revenue2AM,set2AMRevenue]=useState();
    const [COVERITYRevenue,setCOVERITYRevenue]=useState();
    const [totalRevenue, setTotalRevenue] = useState(0);
  

    
    const handleCalculateCommissions = () => {
      const neolianeAmount = neolianeCommission / (25 / 100);
      const wazarieAmount = wazarieCommission / (35 / 100);
      const alptisAmount = alptisCommission / (30 / 100);
      const Amount2AM= Commission2AM / (20/100)
      const COVERTYAmount=COVERITYCommission  / (27/100)
  
      setNeolianeRevenue(neolianeAmount);
      setWazarieRevenue(wazarieAmount);
      setAlptisRevenue(alptisAmount);
      set2AMRevenue(Amount2AM)
      setCOVERITYRevenue(COVERTYAmount)
      handleCalculateTotalRevenue(neolianeAmount, wazarieAmount, alptisAmount,Amount2AM,COVERTYAmount);
      
    };
  
    const handleCalculateTotalRevenue = (neolianeAmount, wazarieAmount, alptisAmount,Amount2AM,COVERTYAmount) => {
      const totalRevenue = neolianeAmount + wazarieAmount + alptisAmount+Amount2AM+COVERTYAmount;
      setTotalRevenue(totalRevenue);
    };
  
    return (
      <div className="commission-calculator">
        <h1>Calculateur de Commission d'Assurance</h1>
        <div className="commission-inputs">
          <div className="commission-input">
            <label>Montant de commission Neoliane (en euros):</label>
            <input
              type="number"
              value={neolianeCommission}
              onChange={(e) => setNeolianeCommission(e.target.value)}
            />
          </div>
          <div className="commission-input">
            <label>Montant de commission Wazarie (en euros):</label>
            <input
              type="number"
              value={wazarieCommission}
              onChange={(e) => setWazarieCommission(e.target.value)}
            />
          </div>
          <div className="commission-input">
            <label>Montant de commission Alptis (en euros):</label>
            <input
              type="number"
              value={alptisCommission}
              onChange={(e) => setAlptisCommission(e.target.value)}
            />
          </div>
          <div className="commission-input">
            <label>Montant de commission 2AM (en euros):</label>
            <input
              type="number"
              value={Commission2AM}
              onChange={(e) => set2AMCommisson(e.target.value)}
            />
          </div>
          <div className="commission-input">
            <label>Montant de commission COVERTY (en euros):</label>
            <input
              type="number"
              value={COVERITYCommission}
              onChange={(e) => setCOVERITYCommission(e.target.value)}
            />
          </div>
        </div>
        <button onClick={handleCalculateCommissions}>Calculer les Commissions</button>
        <div className="commission-results">
          <div className="company">
            <h3>Neoliane</h3>
            <p>Montant : {neolianeRevenue}€</p>
          </div>
          <div className="company">
            <h3>Wazarie</h3>
            <p>Montant : {wazarieRevenue}€</p>
          </div>
          <div className="company">
            <h3>Alptis</h3>
            <p>Montant : {alptisRevenue}€</p>
          </div>
          <div className="company">
            <h3>2AM</h3>
            <p>Montant : {Revenue2AM}€</p>
          </div>
          <div className="company">
            <h3>COVERTY</h3>
            <p>Montant : {COVERITYRevenue}€</p>
          </div>
          <p className="total-revenue"><FcIcons.FcSalesPerformance style={{ fontSize: '45px' }}/> Chiffres d'affaires total: {totalRevenue}€</p>
        </div>
        
      </div>
    );
  };
  
  export default CommissionCalculator;
