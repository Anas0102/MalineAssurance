import http from "./http-common";

async function getAssurés(){
    return await http.get('/Assures')
}
async function getassureById(idA){
    return await http.get(`/Assures/${idA}`)
}
async function addAssuré(assure){
    return await http.post("/Assures",assure)
}
async function deleteassuré(idA){
    return await http.delete(`/Assures/${idA}`)
}
async function updateassure(assure){
    return await http.put(`/Assures/${assure._idA}`,assure)
}
const AssurésServices={
    getAssurés,
    getassureById,
    addAssuré,
    deleteassuré,
    updateassure
}
export default AssurésServices