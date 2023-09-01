// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function FixedChargesList() {
//   const [fixedCharges, setFixedCharges] = useState([]);

//   useEffect(() => {
//     fetchFixedCharges();
//   }, []);

//   const fetchFixedCharges = async () => {
//     try {
//       const response = await axios.get('/chargefixe');
//       setFixedCharges(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//         <br/><br/><br/><br/>
//       <h2>Liste des Charges Fixes</h2>
//       <ul>
//         {fixedCharges.map((charge) => (
//           <li key={charge._id}>
//             <strong>Type :</strong> {charge.Type} | <strong>Montant :</strong> {charge.Montant}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default FixedChargesList;
import React, { useEffect, useState } from 'react'



import { Link } from 'react-router-dom'

import * as BiIcons from "react-icons/bi"
import  '../../../src/css/Navbar.css'

import FixedchargesServices from '../../services/FixedChargesServices';

function FixedChargesList() {
    

    const [fixedCharges, SetfixedCharges] = useState([])
    useEffect(() => {
        getfixedcharges()
    }, [])

    async function getfixedcharges() {
        const result = await FixedchargesServices.getAllChargesFixes()
        SetfixedCharges(result.data)
    }
  
    return (<>
            <br/><br/><br/> <br/>
        <h1 className='text-center'>Referentiel des charges fixes </h1>
        <div className='table-container'>
      <br/><br/>
      
            <table className='mb-5 border border-dark table  table-bordered table-hover table-striped'>
                <thead className={"bg-light "}>
                    <tr><th >Type</th>
                      <th >Montant</th>

                    </tr>
                </thead>
                <tbody className={"table-center table-border bg-info.bg-gradient"}>
                    {

                            fixedCharges.map((elem, index) => {
                            return (
                                <tr key={index} >

                                   
                                    <td>{elem.Type}</td>
                                    <td>{elem.Montant}</td>
                                    

                                    

                                </tr>)


                        })}

                </tbody>
            </table>
            <div className='addcontractButton'>
            <Link to="/AddFixedCharge" className={" w-25 m-5 p-1 btn btn-success"}>
                <BiIcons.BiCommentAdd className='m-3' /> Ajouter un  element </Link></div>
        </div>
        </>
    )
}


export default FixedChargesList
