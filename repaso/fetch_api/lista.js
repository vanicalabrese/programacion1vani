async function obetener_usuarios(){
    let usuarios = await fetch('https://jsonplaceholder.typicode.com/users')

    let usuarios_definitivos = await usuarios.json()

    let items = []
    usuarios_definitivos.forEach(element => {
        
        let item = `<li class="list-group-item>${element.username}</li>`

        items.push(item)
    });
    document.getElementById("lista_usuarios").innerHTML = items.join("") 
}
obetener_usuarios()