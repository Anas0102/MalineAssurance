// import React from 'react'

import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'
import InputGroup from 'react-bootstrap/InputGroup';
import '../../../src/Navbar.css'
import ContratServices from '../../services/contrat.services';
import { Link, useNavigate, useParams } from 'react-router-dom';



function EditContract() {

  const [TypeduContrat, setTypeduContrat] = useState("")
  const [Date_Signature, setDate_Signature] = useState("")
  const [Date_Echeance, setDate_Echeance] = useState("")
  const [Montant_Prime, setMontant_Prime] = useState(0)
  const [DescriptionduContrat, setDescriptionduContrat] = useState('');

 
  const navigate = useNavigate()
  const {id}=useParams()
  useEffect(()=>{
    getContrats();
  },[])
  
  
   async function getContrats(){
   const c= await ContratServices.getcontratbyId(id)
   console.log(c);
   setTypeduContrat(c.data.TypeduContrat)
   setDate_Signature(c.data.Date_Signature)
   setDate_Echeance(c.data.Date_Echeance)
   setMontant_Prime(c.data.Montant_Prime)
   setDescriptionduContrat(c.data.DescriptionduContrat)

   }
      
   async function submitContract(e){
      try {
    e.preventDefault()
    const c={
    "TypeduContrat": TypeduContrat,
    "Date_Signature": Date_Signature,
    "Date_Echeance": Date_Echeance,
    "Montant_Prime": Montant_Prime,
    "DescriptionduContrat": DescriptionduContrat}
    await ContratServices.updateContrat(c)
    navigate("/listdesContrats")
   } catch (error) {
    console.log(error);
    
   }
   }
 
  
  return (
    <div className='Contrats'>
      <h1 className='m-5'>Edit and update of contract of id{id}{DescriptionduContrat} </h1>
      <p>modifier  les informations du contrat:</p>
      <br />
      <Form className='form' onSubmit={(e)=>submitContract(e)}  >
       
        <Form.Label className={"form-label"} htmlFor={"TypeduContrat"}>Type du Contrat:</Form.Label>
        <br />
        <br />
        <Form.Select className={"form-select"} aria-label="Default select example" htmlFor={"TypeduContrat"}
          id={"TypeduContrat"} value={TypeduContrat} onChange={(e) => setTypeduContrat(e.target.value)} >
          
          <option value="1">IARD</option>
          <option value="2">en vie</option>
        </Form.Select>
        <br />
        <br />
        <Form.Label className={"form-label"} htmlFor={"Date_Signature"}>Date de Signature:</Form.Label>
        <br></br>
        <Form.Control  className={"form-control"} type="date" id={"Date_Signature"} value={Date_Signature} onChange={(e) => setDate_Signature(e.target.value)} />

        <br /><br />
        <Form.Label className={"form-label"} htmlFor={"Date_Echeance"} >Date d'Echeance:</Form.Label>
        <br></br>
        <Form.Control className={"form-control"} type="date" id={"Date_Echeance"} value={Date_Echeance} onChange={(e) => setDate_Echeance(e.target.value)} /><br /><br />
        <Form.Label className={"form-label"} htmlFor={"Montant_Prime"}>Montant Total:</Form.Label>
        <br />
        <InputGroup><input type="number" step=".01" min="500 " max="
        999,999,999,999,999
        " placeholder="34876.50 Dhs" id={"Montant_Prime"} value={Montant_Prime} onChange={(e) => setMontant_Prime(e.target.value)} /></InputGroup>

        <br /><br />
        <InputGroup className="mb-3" >
          <InputGroup.Text >Description du Contrat: </InputGroup.Text>
          <Form.Control className={"form-control"} rows="3" as="textarea" aria-label="Small"
            id={"DescriptionduContrat"} value={DescriptionduContrat} onChange={(e) => setDescriptionduContrat(e.target.value)} />
        </InputGroup>

        <br />
      <Stack className='Button' direction="horizontal" gap={2}>
        <Button onClick={submitContract}  as="a" variant="success" >
         Enregistrer les modifs
        </Button>

<Link className={"btn btn-secondary"} to="/listdesContrats"> Annuler 
</Link>
       

      </Stack>;

      </Form>
      


    </div>
  )
}

export default EditContract

