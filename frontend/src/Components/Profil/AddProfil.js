import React, { useState } from 'react';
import ProfilServices from '../../services/Profiles.sServices';
import '../../css/AddProfil.css'
import '../../css/Navbar.css'
import * as FaIcons from "react-icons/fa"
import { useNavigate } from 'react-router-dom';
function AddProfil() { 
  const navigate=useNavigate()
  // Notez que nous utilisons les props ici
    const [profilData, setProfilData] = useState({
        Type_Profil: '',
        ChiffreAffaires: '',
        Commission: '',
        DataPrix: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfilData({ ...profilData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await ProfilServices.createProfil(profilData);
            navigate('/ReferentielChargesvariables') // Naviguer vers la liste des profils
        } catch (error) {
            console.error('Error adding profile:', error);
        }
    };

    return (
        
        <div className="container">
        <div className="form-container">
        <br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <h2 className='retro1 titre'>Veuillez saisir les informations du Profil</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Type de Profil:</label>
              <input className="form-control" type="text" name="Type_Profil" value={profilData.Type_Profil} onChange={handleInputChange} required />
            </div>
  
            <div className="form-group">
              <label>Ses Chiffres d'Affaires:</label>
              <input className="form-control" type="text" name="ChiffreAffaires" value={profilData.ChiffreAffaires} onChange={handleInputChange} required />
            </div>
  
            <div className="form-group">
              <label>Son Commission:</label>
              <input className="form-control" type="text" name="Commission" value={profilData.Commission} onChange={handleInputChange} required />
            </div>
  
            <div className="form-group">
              <label>Data:</label>
              <input className="form-control" type="text" name="DataPrix" value={profilData.DataPrix} onChange={handleInputChange} required />
            </div>
  
  
            <div className="button-container">
             <button className="save-button" type="submit"><FaIcons.FaSave className="icon"/>Enregistrer</button>  
            </div>
          </form>
        </div>
      </div>
    );
}

export default AddProfil;
