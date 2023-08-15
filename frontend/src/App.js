
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Projets from './Components/ContenuduNavbar/Projets'
import Navbar from './Components/Navbar';

import Dashboard from './Components/ContenuduNavbar/Dashboard';
 import Catalogue from "./Components/ContenuduNavbar/Catalogue";
 import Setting from './Components/ContenuduNavbar/Setting';
 import Déconnexion from './Components/ContenuduNavbar/Déconnexion'
import Tasks from './Components/ContenuduNavbar/Tasks';
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import ListofContracts from './Components/Contrat/ListofContracts';
import AddContract from './Components/Contrat/AddContract';
import EditContract from './Components/Contrat/EditContract';
import Listdesassurés from './Components/Assuré/Listdesassurés';
import AddAssuré from './Components/Assuré/AddAssuré';
import EditAssuré from './Components/Assuré/EditAssuré';


function App() {
  return (
    <>


     <Router>
       <Navbar/>
      
        <Routes>
        <Route  path='/'  Component={Home} />

        <Route  path='/Projets'  Component={Projets} />
        <Route  path='/Dashboard' Component={Dashboard} />
        <Route  path='/Catalogue' Component={Catalogue} />
        <Route  path='/Taches' Component={Tasks} />
        <Route path='/Setting' Component={Setting}/>
        <Route path='/Déconnexion' Component={Déconnexion}/>

        <Route path='/listdesContrats' Component={ListofContracts}/>
        <Route  path='/AddContrat' Component={AddContract} />
        <Route path='/EditContract/:id' Component={EditContract}/>

        <Route path='/Listdesassurés' Component={Listdesassurés}/>
        <Route path='/AddAssuré' Component={AddAssuré}/>
        <Route path='/EditAssuré/:id' Component={EditAssuré}></Route>
        </Routes> 
      </Router>

      
    </>
  );
  
}

export default App;
