import http from "./http-common";

async function getAllChargesFixes(){
    return await http.get('/chargefixe')
}
async function CreateChargeFixe(CA){
    return await http.post("/chargefixe",CA)
}
const FixedchargesServices={
    getAllChargesFixes,
    CreateChargeFixe,
  }
  export default FixedchargesServices