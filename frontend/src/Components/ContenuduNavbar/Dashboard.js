import React from 'react'
import ListofContracts from '../Contrat/ListofContracts'
import Listdesassurés from '../Assuré/Listdesassurés'
import '../../../src/Navbar.css'
function Dashboard() {
  return (
   <>
      
      
    <h1  className='text-center' >Dashboard of admin page</h1>
      <h2 className=' text-center'>Suivre et Gestion des contrats</h2>
      <ListofContracts/>
       <Listdesassurés/>
      <h2>Gestion des offresAssurance</h2>
    
    <div>
      <h2>Gestion des projets</h2>
    </div>
    </> 
  )
}

export default Dashboard
