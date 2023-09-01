import React, { useEffect, useState } from 'react'


import Button from 'react-bootstrap/esm/Button'
import { Link } from 'react-router-dom'
import Stack from 'react-bootstrap/esm/Stack'
import * as FiIcons from 'react-icons/fi';
import * as AiIcons from "react-icons/ai"
import * as BiIcons from "react-icons/bi"
import  '../../../src/css/Navbar.css'
import ProfilServices from '../../services/Profiles.sServices'

function RefChargesVariables() {
    

    const [Profil, SetProfil] = useState([])
    useEffect(() => {
      getProfiles()
    }, [])

    async function getProfiles() {
        const result = await ProfilServices.getallProfils()
        SetProfil(result.data)
    }
    async function delProfil(id) {
        await ProfilServices.deleteProfil(id)
        getProfiles() //Recharger les modifications après la suupression
    }
    return (<>
            <br/><br/><br/> <br/>
        <h1 className='text-center'>Liste des profils </h1>
        <div className='table-container'>
      <br/><br/>
      
            <table className='mb-5 border border-dark table  table-bordered table-hover table-striped    '>
                <thead className={"bg-light "}>
                    <tr><th >N° Profil</th>
                      <th >Profil</th><th >Ses chiffres d'affaires </th>
                        <th >Sa commission</th><th >Data:</th>
                        <th >Actions</th>

                    </tr>
                </thead>
                <tbody className={"table-center table-border bg-info.bg-gradient"}>
                    {

                            Profil.map((elem, index) => {
                            return (
                                <tr key={index} >

                                    <td>{index+1}</td>
                                    <td>{elem.Type_Profil}</td>
                                    <td>{elem.ChiffreAffaires}</td>
                                    <td>{elem.Commission}</td>
                                    <td>{elem.DataPrix}</td>

                                    <td className='text-center'>
                                        <Stack gap={2} direction='horizontal'>
                                        <Link to={`/EditProfil/${elem._id}`} className={" btn btn-primary"}>
                                        <FiIcons.FiEdit /> </Link>
                                            
                                            <Button onClick={(e) => delProfil(elem._id)} as="a" variant="danger">
                                                <AiIcons.AiFillDelete />

                                            </Button>
                                        </Stack>

                                    </td>

                                </tr>)


                        })}

                </tbody>
            </table>
            <div className='addcontractButton'>
            <Link to="/AddProfil" className={" w-25 m-5 p-1 btn btn-success"}>
                <BiIcons.BiCommentAdd className='m-3' /> Ajouter un  Profil</Link></div>
        </div>
        </>
    )
}


export default RefChargesVariables
