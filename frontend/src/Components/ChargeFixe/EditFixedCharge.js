
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../../css/AddProfil.css'
import FixedchargesServices from '../../services/FixedChargesServices';
function EditFixedCharge() {
  const { id } = useParams();
  const [formData, setFormData] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate=useNavigate();
  useEffect(() => {
    // Fetch the existing data for the profile
    FixedchargesServices.getChargeFixebyId(id)
      .then((response) => {
        setFormData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching Charge Fixe data:', error);
      });
  }, [id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    FixedchargesServices.updateChargeFixe(id, formData)
      .then(() => {
        setSuccessMessage('Charge Fixe updated successfully');
        navigate("/FixedChargesList") 
      })
      .catch((error) => {
        setErrorMessage('Error updating profile: ' + error.message);
      });
  };

  return (
    <div className="container">
      <div className="form-container">
      <br/><br/><br/><br/><br/><br/><br/><br/>
      <h2 className='retro1 titre'>Modifier les coordonnées du Charge Fixe</h2>
      {successMessage && <div className="success">{successMessage}</div>}
      {errorMessage && <div className="error">{errorMessage}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Type de Charge Fixe:</label>
          <input
            type="text"
            name="Type"
            value={formData.Type || ''}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
         <label>Montant:</label>
         <input
            type="text"
            name="Montant"
            value={formData.Montant }
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        
        <button type="submit"  className="btn btn-primary">Enregistrer les changements</button>
      </form>
    </div></div>
  );
}

export default EditFixedCharge;

