import http from "./http-common";

async function getAllChargesFixes(){
    return await http.get('/chargefixe')
}
async function getChargeFixebyId(idC){
    return await http.get(`/chargefixe/${idC}`)
}
async function CreateChargeFixe(CA){
    return await http.post("/chargefixe",CA)
}
async function updateChargeFixe (id,ChargeFixe) {
    return await http.put(`/chargefixe/${id}`,ChargeFixe)
}
const FixedchargesServices={
    getAllChargesFixes,
    CreateChargeFixe,
    updateChargeFixe,
    getChargeFixebyId
  }
  export default FixedchargesServices