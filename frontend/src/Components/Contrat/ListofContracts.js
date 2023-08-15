import React, { useEffect, useState } from 'react'
import ContratServices from '../../services/contrat.services'

import Button from 'react-bootstrap/esm/Button'
import { Link } from 'react-router-dom'
import Stack from 'react-bootstrap/esm/Stack'
import * as FiIcons from 'react-icons/fi';
import * as AiIcons from "react-icons/ai"
import * as BiIcons from "react-icons/bi"
import  '../../../src/Navbar.css'

function ListofContracts() {
    

    const [Contract, SetContrat] = useState([])
    useEffect(() => {
        getContrats()
    }, [])

    async function getContrats() {
        const result = await ContratServices.getallContrats()
        SetContrat(result.data)
    }
    async function delContrat(id) {
        await ContratServices.deleteContrat(id)
        getContrats() //Recharger les modifications après la suupression
    }
    return (
      
        <div className=' container-fluid  row justify-content-center mt-5 table-responsive  '>

            <table className=' border border-dark table  table-bordered table-hover table-striped table-sm  '>
                <thead className={"bg-light "}>
                    <tr><th  scope="col">N° du Contrat</th><th scope="col">Type du Contract </th>
                        <th scope="col">Date de Signature:</th><th >Date d'Echeance:</th><th scope="col">Montant Total:</th>
                        <th scope="col">Description du Contrat:</th>
                        <th scope="col">Actions</th>

                    </tr>
                </thead>
                <tbody className={"table-center table-border bg-info.bg-gradient"}>
                    {

                        Contract.map((elem, index) => {
                            return (
                                <tr key={index} scope="row">

                                    <td>{index + 1}</td>
                                    <td>{elem.TypeduContrat}</td>
                                    <td>{elem.Date_Signature}</td>
                                    <td>{elem.Date_Echeance}</td>
                                    <td>{elem.Montant_Prime}</td>
                                    <td>{elem.DescriptionduContrat}</td>

                                    <td>
                                        <Stack gap={2} direction='horizontal'>
                                        <Link to={`/EditContract/${elem._id}`} className={" btn btn-primary"}>
                                        <FiIcons.FiEdit /> </Link>
                                            
                                            <Button onClick={(e) => delContrat(elem._id)} as="a" variant="danger">
                                                <AiIcons.AiFillDelete />

                                            </Button>
                                        </Stack>

                                    </td>

                                </tr>)


                        })}

                </tbody>
            </table>
            <div className='addcontractButton'>
            <Link to="/AddContrat" className={" w-25 m-5 p-1 btn btn-success"}>
                <BiIcons.BiCommentAdd className='m-3' /> Ajouter un  Contrat</Link></div>
        </div>
    )
}


export default ListofContracts
