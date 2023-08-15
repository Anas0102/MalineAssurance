
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/esm/Button'
import { Link } from 'react-router-dom'
import Stack from 'react-bootstrap/esm/Stack'
import * as FiIcons from 'react-icons/fi';
import * as AiIcons from "react-icons/ai"
import * as BsIcons from "react-icons/bs"
import '../../../src/Navbar.css'
import AssurésServices from '../../services/assurés.services'
function Listdesassurés() {

    
    const [Assuré, SetAssuré] = useState([])
    useEffect(() => {
        getAssurés()
    }, [])

    async function getAssurés() {
        const result = await AssurésServices.getAssurés()
        SetAssuré(result.data)
    }
    async function delAssuré(id) {
        await AssurésServices.deleteassuré(id)
        getAssurés() //Recharger les modifications après la suupression
    }
    return (

        <div className='container-fluid  row justify-content-center mt-5  '>
<h1 className='text-center'> Gestion des assurés</h1>
            <table className='  border border-dark table  table-bordered table-hover table-striped col-md-4  '>
                <thead className={"bg-light "}>
                    <tr><th className='align-items-center'>identificateur</th><th>Prénom </th>
                        <th>Nom:</th><th>Date de Naissance:</th><th>Type d'assuré</th>
                        <th className='justify-content-center'>Civilité:</th>
                        <th>Adresse d'assuré</th>
                        <th>NumTel</th>
                        <th>Adresse-Email</th>
                        <th>Actions</th>

                    </tr>
                </thead>
                <tbody className={"table-center table-border bg-info.bg-gradient"}>
                    {

                        Assuré.map((elem, index) => {
                            return (
                                <tr key={index}>

                                    <td>{index + 1}</td>
                                    <td>{elem.prénom_assuré}</td>
                                    <td>{elem.nom_assuré}</td>
                                    <td>{elem.Date_Naissance}</td>
                                    <td>{elem.Type_assuré}</td>
                                    <td>{elem.Civilité}</td>
                                    <td>{elem.adresse_assuré}</td>
                                    <td>{elem.numTelAssurance}</td>
                                    <td>{elem.email_assuré}</td>

                                    <td>
                                        <Stack gap={2} direction='horizontal'>
                                            <Link to={`/EditAssuré/${elem._id}`} className={" btn btn-primary"}>
                                                <FiIcons.FiEdit /> </Link>

                                            <Button onClick={(e) => delAssuré(elem._id)} as="a" variant="danger">
                                                <AiIcons.AiFillDelete />

                                            </Button>
                                        </Stack>

                                    </td>

                                </tr>)


                        })}

                </tbody>
            </table>
            <div className='addcontractButton'>
                <Link to="/AddAssuré" className={" w-20 m-5 p-1 btn btn-success"}>
                    <BsIcons.BsPersonFillAdd className='m-3' /> Ajouter un  nouveau Assuré</Link></div>
                    
        </div>
        
    )

}

export default Listdesassurés
