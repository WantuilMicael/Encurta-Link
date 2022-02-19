
import Swal from 'sweetalert2';

//Buscar os links salvos
export async function getLinksSave(key){
    const myLinks = await localStorage.getItem(key)

let linksSaves = JSON.parse(myLinks) || [];

return linksSaves;

}

//Salvar um link no local stogere
export async function saveLink(key, newLink){
    let linksStored = await getLinksSave(key);

//Se já tiver um link salvo com algum ID eu não vou deixar duplicar
const hastLink = linksStored.some( link => link.id === newLink.id)

if(hastLink){
    Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 2000,
      }).fire({
        icon: 'warning',
        title: 'Este link já está na sua lista!'
      })
    return;
}

//Adicionar esse novo link na lista
linksStored.push(newLink)
await localStorage.setItem(key, JSON.stringify(linksStored))
Swal.mixin({
    toast: true,
    position: 'top',
    showConfirmButton: false,
    timer: 2000,
  }).fire({
    icon: 'success',
    title: 'Link salvo na lista!'
  })
}

//Deletar algum link salvo
export function deleteLink(links, id){

    let myLinks = links.filter( item => {
       return (item.id !== id)
    })

    localStorage.setItem('@encurtaLink', JSON.stringify(myLinks))
    console.log("LINK DELETADO COM SUCESSO!")

    return myLinks;
}