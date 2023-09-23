
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import * as FiIcons from 'react-icons/fi';
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
            <br/>
        <h1 className='text-center'>Referentiel des charges fixes </h1>
        <div className='table-container'>
      <br/><br/>
      
            <table className='mb-5 border border-dark table  table-bordered table-hover table-striped'>
                <thead className={"bg-light "}>
                    <tr><th >Type</th>
                      <th >Montant</th>
                      <th>Modifier un élément</th>

                    </tr>
                </thead>
                <tbody className={"table-center table-border bg-info.bg-gradient"}>
                    {

                            fixedCharges.map((elem, index) => {
                            return (
                                <tr key={index} >

                                   
                                    <td>{elem.Type}</td>
                                    <td>{elem.Montant}</td>
                                    <td className='text-center'>
                                        
                                    <Link to={`/EditChargeFixe/${elem._id}`} className={" btn btn-primary"}>
                                    <FiIcons.FiEdit /> </Link></td>

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
