// vamos a crear un objeto

let datos_personales = {
    nombre: 'pepito' ,
    apellido: 'Rodriguez' , 
    dni: 44985434, 
    correos: {
        gmail: 'ndsfsdjfsdojf.com' ,
        yahoo: 'djnfsdjfnsdfjsndf.com'
    },
    edad: 25
}

//forma 1
/* const gmail= datos_personales.correos.gmail
const outlook= datos_personales.correos.outlook
const yahoo = datos_personales.correos.yahoo */

// forma 2 
const {gmail, yahoo, outlook} = datos_personales.correos
console.log(`
   gmail: ${gmail}
   outlook: ${outlook}
   yahoo: ${yahoo}
`)

// consumo de API 

async function consumir_api(){
    // realiza por defecto una solicitud HTTP a traves del metodo GET
    let publicaciones = await fetch('https://jsonplaceholder.typicode.com/posts')

    let publicaciones_definitivas = await publicaciones.json()

    publicaciones_definitivas.forEach(element => {
        console.log(element.title)
    });
}
consumir_api()



