import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'
import * as MdIcons from "react-icons/md"
import * as FaIcons from "react-icons/fa"
import '../../../src/Navbar.css'
import { Link, useNavigate } from 'react-router-dom';
import AssurésServices from '../../services/assurés.services';

import '../../../src/App.css'



function AddAssuré() {
    

  const [prénom_assuré, setprénom_assuré] = useState("")
  const [nom_assuré, setnom_assuré] = useState("")
  const [Date_Naissance, setDate_Naissance] = useState("")
  const [Type_assuré, setType_assuré] = useState("")
  const [Civilité, setCivilité] = useState('');
  const [adresse_assuré,setadresse_assuré]=useState('');
  const [numTelAssurance,setnumTelAssurance]=useState('')
  const [email_assuré,setemail_assuré]=useState('')
 
  const navigate = useNavigate()
  async function handleForm(event) {
    event.preventDefault()
    const Assuré = {
      
      "prénom_assuré": prénom_assuré,
      "nom_assuré": nom_assuré,
      "Date_Naissance": Date_Naissance,
      "Type_assuré": Type_assuré,
      "Civilité": Civilité,
      "adresse_assuré":adresse_assuré,
      "numTelAssurance":numTelAssurance,
      "email_assuré":email_assuré
    };
   
      await AssurésServices.addAssuré(Assuré)
     navigate(`/Listdesassurés`)}
  
  return (
    <div className='Assurés'>
      <br/><br/><br/> <br/>
      <br/><br/><br/>
      <h1 className='text-center' ><MdIcons.MdPersonAdd/> Ajout d'un nouveau Assuré </h1>
      <br/>
     
      <br />
      <Form className='form ' onSubmit={(event) => handleForm(event)} >
       
      <h3 className='retro text-center' >Veuillez saisir les informations d'Assuré:</h3>
        <Form.Label className={"form-label"} htmlFor={"Type_assuré"}>Type d'assuré:</Form.Label>
        
        <br /> <div className='form-row'>
        <div className='form-group col-md-14'>
        <Form.Select className='retro' id={"  Type_assuré"} onChange={(e) => setType_assuré(e.target.value)}>
          <option className='retro'>Choisir le type d'assuré</option>
          <option className='retro' value="Assuré principal" >Assuré principal</option>
          <option className='retro' value="Conjoint"  >Conjoint</option>
        </Form.Select>
        <br />
        <br />
          </div>     
                  <div className='form-group col-md-14' >
        <Form.Label className={"form-label"} htmlFor={"prénom_assuré"} >Prènom d'Assuré:</Form.Label>
        <br></br>
        <Form.Control  className={"retro form-control"} type="text" id={"prénom_assuré"} onChange={(e) => setprénom_assuré(e.target.value)} />
                   </div> 
        <br /><br />
       
        <div >
        <Form.Label className={"form-label"} htmlFor={"nom_assuré"}>Nom d'assuré:</Form.Label>
        <br></br>
         <Form.Control className={"retro form-control"} type="text" id={"nom_assuré"} onChange={(e) => setnom_assuré(e.target.value)} /><br /><br/>
         </div>    </div>
         <div className='form-group col-md-14'>
       <Form.Label className='fom-label' htmlFor={"Date_Naissance"}>Date de Naissance</Form.Label>
       <br /><br/>
       <Form.Control className='retro form-control' type='date' id={"Date_Naissance"} onChange={(e)=>setDate_Naissance(e.target.value)} />
       <br /><br/></div>
       <div className='form-group col-md-14'>
       <Form.Label className='form-label' htmlFor={"Civilité"} >Civilité</Form.Label>
       <Form.Select className='retro form-select' id={"Civilité"} onChange={(e)=>setCivilité(e.target.value)} >
        <option selected disabled hidden>Choisissez votre civilité</option>
        <option value={"M"}>M</option>
        <option value={"Mme"}>Mme</option>
       </Form.Select>
       </div>
       <br/><br/>
       <div className='form-group col-md-14'>
       <Form.Label className={" form-label"} htmlFor={"adresse_assuré"}>Adresse d'assuré:</Form.Label>
        <br></br>
        <Form.Control className={"retro form-control"} type="text" id={"adresse_assuré"} onChange={(e) => setadresse_assuré(e.target.value)} /><br /><br/>
        </div>
        <div className='form-group col-md-14'>
        <Form.Label className={"form-label"} htmlFor={"numTelAssurance"}>Numéro Tel:</Form.Label>
        <br></br>
         <Form.Control className={"retro form-control"} 
        type="num" 
        id={"numTelAssurance"} 
        onChange={(e) => setnumTelAssurance(e.target.value)} /> <br /><br/>
        </div>
        <div className='form-group col-md-14'>
        <Form.Label className={"form-label"} htmlFor={"email_assuré"}>Adresse Email:</Form.Label>
        <br></br>
       
        <Form.Control className={"retro form-control"} type="email" id={"email_assuré"} onChange={(e) => setemail_assuré(e.target.value)} /><br /><br/>
      </div>
      <Stack  direction="horizontal" gap={2}>
        <Button className='retro' onClick={handleForm} as="a" variant="success" >
         <FaIcons.FaSave/>Enregistrer
        </Button>

<Link className='retro btn btn-secondary'  to="/Listdesassurés">
  <MdIcons.MdCancelPresentation/> Annuler 
</Link>
       

      </Stack>;
      </Form>
      
        
   
      
        




    </div>
  )
}

export default AddAssuré
