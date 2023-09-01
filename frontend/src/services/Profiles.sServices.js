import http from'./http-common'

async function  getallProfils(){
    return await http.get('/Profiles')
}
async function getProfilbyId(idC){
    return await http.get(`/Profiles/${idC}`)
}
async function  createProfil(Profil){
    return await http.post("/Profiles",Profil)
}
async function updateProfil (id,Profil) {
    return await http.put(`/Profiles/${id}`,Profil)
}
async function deleteProfil(idC){
    return await http.delete(`/Profiles/${idC}`)
}

const ProfilServices={
    getallProfils,
    getProfilbyId,
    createProfil,
    updateProfil,
    deleteProfil
}
export default ProfilServices;