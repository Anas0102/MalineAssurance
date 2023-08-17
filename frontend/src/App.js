
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Projets from './Components/ContenuduNavbar/Projets'
import Navbar from './Components/Navbar';

import Dashboard from './Components/ContenuduNavbar/Dashboard';
 import Déconnexion from './Components/ContenuduNavbar/Déconnexion'
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import ListofContracts from './Components/Contrat/ListofContracts';
import AddContract from './Components/Contrat/AddContract';
import EditContract from './Components/Contrat/EditContract';
import Listdesassurés from './Components/Assuré/Listdesassurés';
import AddAssuré from './Components/Assuré/AddAssuré';
import EditAssuré from './Components/Assuré/EditAssuré';
import Ref from './Components/ContenuduNavbar/Refcharge';
import RefBenefice from './Components/ContenuduNavbar/RefBenefice';
import SimulerEquipe from './Components/ContenuduNavbar/SimulerEquipe';
import CommissionCalculatorSenior from './Components/Salarié/CommissionCalculatorSenior';
import CommissionCalculatorJenior from './Components/Salarié/CommissionCalculatorJenior';




function App() {
  
  return (
    <>


     <Router>
       <Navbar/>
      
        <Routes>
          
        <Route  path='/'  Component={Home} />
        <Route  path='/Projets'  Component={Projets} />
        <Route  path='/Dashboard' Component={Dashboard} />
        <Route  path='/ReferentielCharges' Component={Ref} />
        <Route  path='/ReferentielBénéfices' Component={RefBenefice} />
        <Route path='/SimulerEquipe' Component={SimulerEquipe}/>
        <Route path='/Déconnexion' Component={Déconnexion}/>

        <Route path='/listdesContrats' Component={ListofContracts}/>
        <Route  path='/AddContrat' Component={AddContract} />
        <Route path='/EditContract/:id' Component={EditContract}/>

        <Route path='/Listdesassurés' Component={Listdesassurés}/>
        <Route path='/AddAssuré' Component={AddAssuré}/>
        <Route path='/EditAssuré/:id' Component={EditAssuré}></Route>

        <Route path='/CommissionCalculatorSenior' Component={CommissionCalculatorSenior}></Route>
        <Route path='/CommissionCalculatorJenior' Component={CommissionCalculatorJenior}></Route>
        </Routes> 
      </Router>

      
    </>
  );
  
}

export default App;
