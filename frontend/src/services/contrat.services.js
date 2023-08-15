import http from'./http-common'
async function  getallContrats(){
    return await http.get('/Contrats')
}
async function getcontratbyId(idC){
    return await http.get(`/Contrats/${idC}`)
}
async function  createContrat(contrat){
    return await http.post("/Contrats",contrat)
}
async function updateContrat (contrat) {
    return await http.put(`/Contrats/${contrat._idC}`,contrat)
}
async function deleteContrat(idC){
    return await http.delete(`/Contrats/${idC}`)
}

const ContratServices={
    getallContrats,
    getcontratbyId,
    createContrat,
    updateContrat,
    deleteContrat
}
export default ContratServices;
