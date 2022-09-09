// funcion flecha (funcion anonima porque no tiene nombre, es anonima)
import vehiculo from "./vehiculojs";
const mostrar = () => {
    const km = document.getElementById("inp.km").value;
    console.log(`el kilometros de mi vehiculo es igual a ${km}km`)
    // comilla backtick ``````` se utiliza para que sea todo mucho mas comodo escribiendo, por ej; 
   let vehiculo= new vehiculo(km)
   vehiculo.mostrarkilometraje()
}

document.getElementById("btn_mostrar").addEventListener("click",mostrar)

// forma dos de enviar datos a la clase 
const mostrar_forma2 = () => {

    const mod = document.getElementById("inp_modelo").value;

    let vehiculo = new vehiculo()
    vehiculo.modelo = mod
    vehiculo.mostrar_modelo()
}
document.getElementById("bnt_modelo").addEventListener("click", mostrar_forma2)
