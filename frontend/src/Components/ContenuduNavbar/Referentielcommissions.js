import React from 'react'
import '../../css/Navbar.css'

import '../../css/AddProfil.css'
function Referentielcommissions() {
  return (<>
  <br/><br/><br/> <br/>
  <h1  className='titre1'>Référentiel des commissions </h1>
    
    
    <br/><br/><br/> <br/>
    <div className='table-container'>
        
      

      <table className='mb-5 border border-dark table  table-bordered table-hover table-striped  '>
        <thead className={"bg-light "}>
      <tr>
    <th>Compagnie d'assurance</th>
    
    <th>Taux de commissionnement</th>
  </tr>
  </thead>
  <tbody className={"table-center table-border bg-info.bg-gradient"}>
  <tr>
    <td>NEOLIANE</td>
    <td>25%</td>
  </tr>
  
 
  <tr>
    <td>ALPTIS</td>
    <td>30%</td>
  </tr>
  <tr>
    <td>WAZARI</td>
    <td>35%</td>
  </tr>
  
  <tr>
    <td>2MA</td>
    <td>20%</td>
    
  </tr>
 
<tr>
  <td>COVERITY</td>
  <td>27%</td>
</tr>
</tbody>
      </table>
    </div></>
  )
}

export default Referentielcommissions;
