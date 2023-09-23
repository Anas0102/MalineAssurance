import React, { useState } from 'react';
import '../../css/AddProfil.css'
import '../../css/Navbar.css'
import '../../css/Footer.css';
import * as FaIcons from "react-icons/fa"
import { useNavigate } from 'react-router-dom';
import FixedchargesServices from '../../services/FixedChargesServices';
function AddFixedCharge() { 
  const navigate=useNavigate()
  // Notez que nous utilisons les props ici
    const [TypeFixedCharges, SetTypeFixedCharges] = useState({
        Type: '',
        Montant: '',
       
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        SetTypeFixedCharges({ ...TypeFixedCharges, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await FixedchargesServices.CreateChargeFixe(TypeFixedCharges);
            navigate('/FixedChargesList') // Naviguer vers la liste des profils
        } catch (error) {
            console.error('Error adding TypeFixedCharges:', error);
        }
    };

    return (
        
        <div className="container">
        <div className="form-container">
        <br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <h2 className='retro1 titre'>Referentiel des charges fixes</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Type :</label>
              <input className="form-control" type="text" name="Type" value={TypeFixedCharges.Type} onChange={handleInputChange} required />
            </div>
  
            <div className="form-group">
              <label>Montant:</label>
              <input className="form-control" type="text" name="Montant" value={TypeFixedCharges.Montant} onChange={handleInputChange} required />
            </div>
  
           
  
  
            <div className="button-container">
             <button className="save" type="submit"><FaIcons.FaSave className="icon"/>Enregistrer</button>  
            </div>
          </form>
         
        </div>
        
      </div>
    );
}

export default AddFixedCharge;
