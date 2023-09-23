import '../../css/CommissionCalculator.css';
import '../../css/Footer.css'; 
import React, { useEffect, useState } from 'react';
import * as FcIcons from 'react-icons/fc'
import person from '../../images/person.png'
import Senior from '../../images/Senior.png'
import employee from '../../images/employee.png'

const CommissionCalculator = () => {
  
    const [totalCommission, setTotalCommission] = useState('');
    const [neolianeCommission, setNeolianeCommission] = useState();
    const [wazarieCommission, setWazarieCommission] = useState();
    const [alptisCommission, setAlptisCommission] = useState();
    const [Commission2AM, set2AMCommisson] = useState();
    const [COVERITYCommission, setCOVERITYCommission] = useState();

    const [neolianeRevenue, setNeolianeRevenue] = useState(0);
    const [wazarieRevenue, setWazarieRevenue] = useState(0);
    const [alptisRevenue, setAlptisRevenue] = useState(0);
    const [Revenue2AM, set2AMRevenue] = useState();
    const [COVERITYRevenue, setCOVERITYRevenue] = useState();
    const [totalRevenue, setTotalRevenue] = useState(0);

    const handleCalculateCommissions = () => {
        const neolianeAmount = parseFloat(neolianeCommission) / (25 / 100);
        const wazarieAmount = parseFloat(wazarieCommission) / (35 / 100);
        const alptisAmount = parseFloat(alptisCommission) / (30 / 100);
        const Amount2AM = parseFloat(Commission2AM) / (20 / 100)
        const COVERTYAmount = parseFloat(COVERITYCommission) / (27 / 100)

        setNeolianeRevenue(neolianeAmount.toFixed(2));
        setWazarieRevenue(wazarieAmount.toFixed(2));
        setAlptisRevenue(alptisAmount.toFixed(2));
        set2AMRevenue(Amount2AM.toFixed(2));
        setCOVERITYRevenue(COVERTYAmount.toFixed(2));

        handleCalculateTotalRevenue(neolianeAmount, wazarieAmount, alptisAmount, Amount2AM, COVERTYAmount);

    };

    const handleCalculateTotalRevenue = (neolianeAmount, wazarieAmount, alptisAmount, Amount2AM, COVERTYAmount) => {
        const chiffreAffairesTotal = neolianeAmount + wazarieAmount + alptisAmount + Amount2AM + COVERTYAmount;
        setChiffreAffairesTotal(chiffreAffairesTotal);

    };
    const handleCalculateTotalCommission = (neolianeCommission, wazarieCommission, alptisCommission, Commission2AM, COVERITYCommission) => {
        const totalCommission = neolianeCommission + wazarieCommission + alptisCommission + Commission2AM + COVERITYCommission;
        setTotalCommission(totalCommission);
    };

    const [senior, setSenior] = useState(30000);
    const [junior, setJunior] = useState(18000);
    const [intermediaire, setIntermediaire] = useState(10000);
    const [chiffreAffairesTotal, setChiffreAffairesTotal] = useState(300000);
    const [combinations, setCombinations] = useState([]);
    const [optimalCombination, setOptimalCombination] = useState(null);

    useEffect(() => {
        trouverCombinations();
    }, []);

    const trouverCombinations = () => {
        let currentChiffreAffaires = chiffreAffairesTotal;
        let validCombinations = [];

        while (validCombinations.length === 0 && currentChiffreAffaires > 0) {
            validCombinations = calculateCombinations(currentChiffreAffaires);
            currentChiffreAffaires--;
        }

        if (validCombinations.length > 0) {
            setCombinations(validCombinations);
            const optimal = findOptimalCombination(validCombinations);
            setOptimalCombination(optimal);
        } else {
            alert("Pas de combinaison trouvée pour un chiffre d'affaires inférieur.");
        }
    };

    const calculateCombinations = (chiffreAffairesTotal) => {
        const validCombinations = [];

        for (let s = 0; s <= Math.floor(chiffreAffairesTotal / senior); s++) {
            for (let j = 0; j <= Math.floor((chiffreAffairesTotal - s * senior) / junior); j++) {
                const reste = chiffreAffairesTotal - s * senior - j * junior;
                if (reste % intermediaire === 0) {
                    const i = reste / intermediaire;
                    validCombinations.push({ senior: s, junior: j, intermediaire: i });
                }
            }
        }

        return validCombinations;
    };

    const findOptimalCombination = (combinations) => {
        let maxRevenue = 0;
        let optimalCombination = null;

        for (const combination of combinations) {
            const revenue = combination.senior * 30000 + combination.junior * 18000 + combination.intermediaire * 10000;
            if (revenue > maxRevenue) {
                maxRevenue = revenue;
                optimalCombination = combination;
            }
        }

        return optimalCombination;
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
           
            <button onClick={handleCalculateCommissions}>Calculer les Chiffres d'affaires</button>
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
                <p className="total-revenue"><FcIcons.FcSalesPerformance style={{ fontSize: '45px' }} /> Chiffres d'affaires total: {Math.floor(chiffreAffairesTotal)}€</p>
            </div>

            <div>
                <h3>Equipe convenable pour obtenue ce chiffres d'affaires </h3>
                <div>
                    <label>Senior: </label>
                    <input className='inputequipe' type="number" value={senior} onChange={(e) => setSenior(Number(e.target.value))} />
                </div>
                <div>
                    <label>Junior: </label>
                    <input className='inputequipe' type="number" value={junior} onChange={(e) => setJunior(Number(e.target.value))} />
                </div>
                <div>
                    <label>Intermédiaire: </label>
                    <input className='inputequipe' type="number" value={intermediaire} onChange={(e) => setIntermediaire(Number(e.target.value))} />
                </div>
                
                <button onClick={trouverCombinations}>Simuler Equipe</button>
                {combinations.length > 0 && (
                    <div>
                        <h2>Combinaisons trouvées:</h2>
                        <ul className='combination-list'>
                            {combinations.map((combination, index) => (
                                <li key={index}>
                                     Senior: {combination.senior}, Junior: {combination.junior},  Intermédiaire: {combination.intermediaire}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                {optimalCombination && (
                    <div>
                        <h2>Combinaison optimale:</h2>
                        <p >
                            <img className='imgprofiles' src={Senior} /> Senior: {optimalCombination.senior}, <img className='imgprofiles' src={person} /> Junior: {optimalCombination.junior}, <img className='imgprofiles' src={employee} /> Intermédiaire: {optimalCombination.intermediaire}
                        </p>
                    </div>
                )}
            </div>
            
        </div>
        
    );
};

export default CommissionCalculator;
