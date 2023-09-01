
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import './css/App.css';

import Navbar from './Components/Navbar';

 import Déconnexion from './Components/ContenuduNavbar/Déconnexion'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



import SimulerEquipe from './Components/ContenuduNavbar/SimulerEquipe';
import CommissionCalculatorSenior from './Components/Salarié/CommissionCalculatorSenior';
import CommissionCalculatorJenior from './Components/Salarié/CommissionCalculatorJenior';
import Login from './Components/auth/Login';
import Register from './Components/auth/Register';
import RefChargesFixes from './Components/ContenuduNavbar/RefChargesFixes';
import RefChargesVariables from './Components/ContenuduNavbar/RefChargesVariables';
import AddProfil from './Components/Profil/AddProfil';
import EditProfil from './Components/Profil/EditProfil';
import Referentielcommissions from './Components/ContenuduNavbar/Referentielcommissions';
import FixedChargesList from './Components/ChargeFixe/FixedChargesList';
import AddFixedCharge from './Components/ChargeFixe/AddFixedCharge';
import CalculCommission from './Components/Com/CalculCommission';
import { Provider } from "react-redux";
import store from "./store";
import Dashboard from './Components/dashboard/Dashboard';
import Landing from './Components/layout/Landing';






function App() {
  
  return (
    <>

<Provider store={store}>
     <Router>
       <Navbar/>
       
        <Routes>
          
        <Route  path="/" Component={Landing} />
        <Route  path="/register" Component={Register} />
        <Route  path="/login" Component={Login} />
        <Route  path='/RefChargesFixes'  Component={RefChargesFixes} />
        
        <Route  path='/ReferentielCharges' Component={Referentielcommissions} />
        <Route  path='/ReferentielChargesvariables' Component={RefChargesVariables} />
        <Route path='/SimulerEquipe' Component={SimulerEquipe}/>
        <Route path='/Déconnexion' Component={Déconnexion}/>

        

        

        <Route  path="/AddProfil" Component={AddProfil} />
        <Route path='/EditProfil/:id' Component={EditProfil}/>
        

        <Route path='/FixedChargesList' Component={FixedChargesList}/>
        <Route path='/AddFixedCharge' Component={AddFixedCharge}/>
        <Route path='/CommissionCalculatorSenior' Component={CommissionCalculatorSenior}></Route>
        <Route path='/CommissionCalculatorJenior' Component={CommissionCalculatorJenior}></Route>

        <Route path='/CalculCommission' Component={CalculCommission}/>
        <Route  path="/Dashboard" Component={Dashboard} />
        </Routes> 
        
      </Router>

      </Provider>
    </>
  );
  
}

export default App;
