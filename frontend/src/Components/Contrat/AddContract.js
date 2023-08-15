import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'
import InputGroup from 'react-bootstrap/InputGroup';
import * as MdIcons from "react-icons/md"
import * as FaIcons from "react-icons/fa"
import '../../../src/Navbar.css'
import ContratServices from '../../services/contrat.services';
import { Link, useNavigate } from 'react-router-dom';



function AddContract() {

  const [TypeduContrat, setTypeduContrat] = useState("")
  const [Date_Signature, setDate_Signature] = useState("")
  const [Date_Echeance, setDate_Echeance] = useState("")
  const [Montant_Prime, setMontant_Prime] = useState("")
  const [DescriptionduContrat, setDescriptionduContrat] = useState('');

 
  const navigate = useNavigate()
  async function handleForm(event) {
    event.preventDefault()
    const Contrat = {
      
      "TypeduContrat": TypeduContrat,
      "Date_Signature": Date_Signature,
      "Date_Echeance": Date_Echeance,
      "Montant_Prime": Montant_Prime,
      "DescriptionduContrat": DescriptionduContrat
    };
   
      await ContratServices.createContrat(Contrat)
     navigate(`/listdesContrats`)}
  
  return (
    <div className='Contrats'>
      <h1 >Création de la contrat </h1>
      <p>Veuillez saisir les informations du contrat:</p>
      <br />
      <Form className='form' onSubmit={(event) => handleForm(event)} >
       
        <Form.Label className={"form-label"} htmlFor={"TypeduContrat"}>Type du Contrat:</Form.Label>
        <br />
        <br />
        <Form.Select  id={"TypeduContrat"} onChange={(e) => setTypeduContrat(e.target.value)}>
          <option>Choisir le type du contrat</option>
          <option value="IARD" >IARD</option>
          <option value="en vie"  >en vie</option>
        </Form.Select>
        <br />
        <br />
        <Form.Label className={"form-label"} htmlFor={"Date_Signature"}>Date de Signature:</Form.Label>
        <br></br>
        <Form.Control  className={"form-control"} type="date" id={"Date_Signature"} onChange={(e) => setDate_Signature(e.target.value)} />

        <br /><br />
        <Form.Label className={"form-label"} htmlFor={"Date_Echeance"}>Date d'Echeance:</Form.Label>
        <br></br>
        <Form.Control className={"form-control"} type="date" id={"Date_Echeance"} onChange={(e) => setDate_Echeance(e.target.value)} /><br /><br />
        <Form.Label className={"form-label"} htmlFor={"Montant_Prime"}>Montant Total:</Form.Label>
        <br />
        <InputGroup><input type="number" step=".01" min="500 " max="
        999,999,999,999,999
        " placeholder="34876.50 Dhs" id={"Montant_Prime"} onChange={(e) => setMontant_Prime(e.target.value)} /></InputGroup>

        <br /><br />
        <InputGroup className="mb-3" >
          <InputGroup.Text >Description du Contrat: </InputGroup.Text>
          <Form.Control className={"form-control"} rows="3" as="textarea" aria-label="Small"
            id={"DescriptionduContrat"} onChange={(e) => setDescriptionduContrat(e.target.value)} />
        </InputGroup>

        <br />
      <Stack className=' mt-5 Button' direction="horizontal" gap={2}>
        <Button  onClick={handleForm} as="a" variant="success" >
         <FaIcons.FaSave/>Enregistrer
        </Button>

<Link className={"  btn btn-secondary"} to="/listdesContrats">
  <MdIcons.MdCancelPresentation/> Annuler 
</Link>
       

      </Stack>;

      </Form>
      


    </div>
  )
}

export default AddContract
