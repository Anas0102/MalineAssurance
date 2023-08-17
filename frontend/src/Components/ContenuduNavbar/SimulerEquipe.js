import React, { useState } from 'react';

function SimulerEquipe() {
  const [targetRevenue, setTargetRevenue] = useState('');
  const [seniorPercentage, setSeniorPercentage] = useState(20);
  const [juniorPercentage, setJuniorPercentage] = useState(10);
  const [seniorRevenue, setSeniorRevenue] = useState(0);
  const [juniorRevenue, setJuniorRevenue] = useState(0);
  const [seniorCount, setSeniorCount] = useState(0);
  const [juniorCount, setJuniorCount] = useState(0);
  const [simulatedSeniorTeam, setSimulatedSeniorTeam] = useState([]);
  const [simulatedJuniorTeam, setSimulatedJuniorTeam] = useState([]);

  const calculateRevenuesAndCounts = () => {
    const totalRevenue = targetRevenue;
    
    // Calculate senior and junior revenues based on percentages
    const seniorContribution = (seniorPercentage / 100) * totalRevenue;
    const juniorContribution = (juniorPercentage / 100) * totalRevenue;

    // Distribute the remaining revenue proportionally
    const totalContribution = seniorContribution + juniorContribution;
    const remainingRevenue = totalRevenue - totalContribution;

    const seniorShare = (seniorContribution / totalContribution) * remainingRevenue;
    const juniorShare = (juniorContribution / totalContribution) * remainingRevenue;

    setSeniorRevenue(seniorContribution + seniorShare);
    setJuniorRevenue(juniorContribution + juniorShare);

    // Calculate the number of seniors and juniors needed
    const totalSeniorCount = Math.ceil(seniorRevenue / seniorContribution);
    const totalJuniorCount = Math.ceil(juniorRevenue / juniorContribution);

    // Distribute the total counts based on senior/junior percentages
    setSeniorCount(Math.ceil((seniorPercentage / 100) * (totalSeniorCount + totalJuniorCount)));
    setJuniorCount(Math.ceil((juniorPercentage / 100) * (totalSeniorCount + totalJuniorCount)));
  };

  const simulateTeamAllocation = () => {
    const simulatedSeniorTeam = [];
  const simulatedJuniorTeam = [];

  for (let i = 0; i < seniorCount; i++) {
    simulatedSeniorTeam.push(`Salarié Senior ${i + 1}`);
  }

  for (let i = 0; i < juniorCount; i++) {
    simulatedJuniorTeam.push(`Salarié Junior ${i + 1}`);
  }

  // You can update state to indicate simulation completion and store simulated teams
  setSimulatedSeniorTeam(simulatedSeniorTeam);
  setSimulatedJuniorTeam(simulatedJuniorTeam);
  };

  return (
    <div>
      <br/><br/><br/><br/><br/><br/><br/>
      <h2>Calculateur de Répartition de Chiffre d'Affaires</h2>
      <div>
        <label>Chiffre d'affaires souhaité : </label>
        <input
          type="number"
          value={targetRevenue}
          onChange={(e) => setTargetRevenue(parseInt(e.target.value))}
        />
        <button onClick={calculateRevenuesAndCounts}>Calculer</button>
      </div>
      <div>
        <h3>Répartition du Chiffre d'Affaires :</h3>
        <p>Chiffre d'affaires pour les salariés seniors :  {seniorRevenue}</p>
        <p>Chiffre d'affaires pour les salariés juniors : {juniorRevenue}</p>
      </div>
      <div>
        <h3>Répartition du salarié :</h3>
        <button onClick={simulateTeamAllocation}>Simuler Allocation</button>
        <p>Salariés seniors nécessaires : {seniorCount}</p>
        <p>Salariés juniors nécessaires : {juniorCount}</p>
        
      </div>
    </div>
  );
}

export default SimulerEquipe;
