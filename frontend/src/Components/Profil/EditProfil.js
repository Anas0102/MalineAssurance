// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate, useParams } from 'react-router-dom';
// import ProfilServices from '../../services/Profiles.sServices';
// import '../../css/AddProfil.css'
// function EditProfil() {
//   const navigate = useNavigate();
//   const { id } = useParams();
//   const [profil, setProfil] = useState({});
//   const [formData, setFormData] = useState({
//     Type_Profil: '',
//     ChiffreAffaires: '',
//     Commission: '',
//     DataPrix: ''
//   });

//   useEffect(() => {
//     fetchProfil();
//   }, []);

//   async function fetchProfil() {
//     try {
//       const response = await ProfilServices.getProfilbyId(id);
//       setProfil(response.data);
//       setFormData({
//         Type_Profil: response.data.Type_Profil,
//         ChiffreAffaires: response.data.ChiffreAffaires,
//         Commission: response.data.Commission,
//         DataPrix: response.data.DataPrix
//       });
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   async function handleSubmit(event) {
//     event.preventDefault();
//     try {
//       await ProfilServices.updateProfil(id, formData);
//      navigate("/ReferentielChargesvariables") // Rediriger après la mise à jour
//     } catch (error) {
//       console.error("Error updating profile:", error.message);
//     }
//   }

//   function handleInputChange(event) {
//     const { name, value } = event.target;
//     setFormData(prevData => ({
//       ...prevData,
//       [name]: value
//     }));
//   }  

//   return (
//     <div className="container">
//         <div className="form-container">
//         <br/><br/><br/><br/><br/><br/><br/><br/>
//       <h2 className='retro1 titre'>Modifier les coordonnées du profil</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Type de Profil:</label>
//           <input
//             type="text"
//             name="Type_Profil"
//             value={formData.Type_Profil}
//             onChange={handleInputChange}
//             className="form-control"
//           />
//         </div>
//         <div className="form-group">
//           <label>Chiffre d'Affaires:</label>
//           <input
//             type="text"
//             name="ChiffreAffaires"
//             value={formData.ChiffreAffaires}
//             onChange={handleInputChange}
//             className="form-control"
//           />
//         </div>
//         <div className="form-group">
//           <label>Commission:</label>
//           <input
//             type="text"
//             name="Commission"
//             value={formData.Commission}
//             onChange={handleInputChange}
//             className="form-control"
//           />
//         </div>
//         <div className="form-group">
//           <label>Data:</label>
//           <input
//             type="text"
//             name="DataPrix"
//             value={formData.DataPrix}
//             onChange={handleInputChange}
//             className="form-control"
//           />
//         </div>
//       <Link to={"/ReferentielChargesvariables"}> <button type="submit" className="btn btn-primary">Enregistrer</button></Link> 
//       </form>
//     </div>
//     </div>
//   );
// }

// export default EditProfil;
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ProfilServices from '../../services/Profiles.sServices'; // Your service to interact with the backend
import '../../css/AddProfil.css'
function EditProfil() {
  const { id } = useParams();
  const [formData, setFormData] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate=useNavigate();
  useEffect(() => {
    // Fetch the existing data for the profile
    ProfilServices.getProfilbyId(id)
      .then((response) => {
        setFormData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching profile data:', error);
      });
  }, [id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    ProfilServices.updateProfil(id, formData)
      .then(() => {
        setSuccessMessage('Profile updated successfully');
        navigate("/ReferentielChargesvariables") 
      })
      .catch((error) => {
        setErrorMessage('Error updating profile: ' + error.message);
      });
  };

  return (
    <div className="container">
      <div className="form-container">
      <br/><br/><br/><br/><br/><br/><br/><br/>
      <h2 className='retro1 titre'>Modifier les coordonnées du profil</h2>
      {successMessage && <div className="success">{successMessage}</div>}
      {errorMessage && <div className="error">{errorMessage}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Type de  Profile:</label>
          <input
            type="text"
            name="Type_Profil"
            value={formData.Type_Profil || ''}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
         <label>Chiffre d'Affaires:</label>
         <input
            type="text"
            name="ChiffreAffaires"
            value={formData.ChiffreAffaires}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Commission:</label>
          <input
            type="text"
            name="Commission"
            value={formData.Commission}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Data:</label>
          <input
            type="text"
            name="DataPrix"
            value={formData.DataPrix}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        {/* Add similar input fields for other profile attributes */}
        <button type="submit"  className="btn btn-primary">Enregistrer les changements</button>
      </form>
    </div></div>
  );
}

export default EditProfil;

