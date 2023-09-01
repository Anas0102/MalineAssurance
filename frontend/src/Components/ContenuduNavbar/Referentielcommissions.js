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
    <th>Gamme</th>
    <th>Taux de commissionnement</th>
  </tr>
  </thead>
  <tbody className={"table-center table-border bg-info.bg-gradient"}>
  <tr>
    <td rowspan="8">NEOLIANE</td>
    <td>Néoliane Optima</td>
    <td>43%</td>
  </tr>
  <tr>
    <td>Néoliane Tonik</td>
    <td>25%</td>
  </tr>
  <tr>
    <td>NEOLIANE QUIETUDE</td>
    <td>43%</td>
  </tr>
  <tr>
    <td>NEOLIANE DYNAMIQUE</td>
    <td>43%</td>
  </tr>
  <tr>
    <td>Néoliane Performance</td>
    <td>43%</td>
  </tr>
  <tr>
    <td>Néoliane Plénitude</td>
    <td>30%</td>
  </tr>
  <tr>
    <td>Néoliane Innov'Santé</td>
    <td>43%</td>
  </tr>
  <tr>
    <td>Néoliane Hospi'Santé</td>
    <td>43%</td>
  </tr>
  <tr>
    <td>ALPTIS</td>
    <td>Santé Protect</td>
    <td>30%</td>
  </tr>
  <tr>
    <td rowSpan={3}>WAZARI</td>
    <td>ECO</td>
    <td>37%</td>
  </tr>
  <tr>
    <td>FIDELITY</td>
    <td>37%</td>
  </tr>
  <tr>
    <td>LIBERTY</td>
    <td>37%</td>
  </tr>
  <tr>
    <td rowSpan={2}>2MA</td>
    <td>3CAO</td>
    <td>20%</td>
  </tr>
  <tr>
    <td>2MAltitude</td>
    <td>28%</td>
  </tr>
<tr>
  <td>COVERITY</td>
  <td>TOUT PRODUIT CONFONDU</td>
  <td>27%</td>
</tr>
</tbody>
      </table>
    </div></>
  )
}

export default Referentielcommissions;
