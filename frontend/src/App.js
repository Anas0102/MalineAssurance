
import { BrowserRouter as Router,Route, Routes, Navigate } from 'react-router-dom';
import './css/App.css';
import Navbar from './Components/Navbar';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import RefChargesVariables from './Components/ContenuduNavbar/RefChargesVariables';
import AddProfil from './Components/Profil/AddProfil';
import EditProfil from './Components/Profil/EditProfil';
import Referentielcommissions from './Components/ContenuduNavbar/Referentielcommissions';
import FixedChargesList from './Components/ChargeFixe/FixedChargesList';
import AddFixedCharge from './Components/ChargeFixe/AddFixedCharge';
import CalculCommission from './Components/Com/CalculCommission';

import Landing from './Components/layout/Landing';
import EditFixedCharge from './Components/ChargeFixe/EditFixedCharge';
import Login from './Components/Login/index';
import Signup from './Components/Signup';
import Main from './Components/Main';



const user = localStorage.getItem("token");
function App() {
  
  return (
    <>

     <Router>
       <Navbar/>
       
        <Routes>
        {user ? (
            <>
              <Route path="/" element={<Landing />} />
              <Route path='/FixedChargesList' element={<FixedChargesList/>}/>
              <Route path="/ReferentielChargesvariables" element={<RefChargesVariables />} />
              <Route path="/ReferentielCharges" element={<Referentielcommissions />} />
              <Route path='/CalculCommission' element={<CalculCommission/>}/>
              
             {/*Les routes après authentification*/}
            </>
          ) : (
            <Route path="/" element={<Navigate replace to="/Login" />} />
          )}
        {user && <Route path="/" exact element={<Landing />} />}
        
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/Login" exact element={<Login />} />

			
        <Route  path="/AddProfil" Component={AddProfil} />
        <Route path='/EditProfil/:id' Component={EditProfil}/>
        
        <Route path='/AddFixedCharge' Component={AddFixedCharge}/>
        <Route path='/EditChargeFixe/:id' Component={EditFixedCharge}/>
        {/*Poser tous les routes avec accès publique*/}
        </Routes> 
        
      </Router>

     
    </>
  );
  
}

export default App;
