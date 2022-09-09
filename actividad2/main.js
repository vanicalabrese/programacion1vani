import Pitagoras from "./pitagoras.js";



const mostrarhipotenusa = () => {

    // intancia. 
    let hipotenusa = new Pitagoras()

    hipotenusa.cateto_adyacente = document.getElementById("inp_ca").value;
    hipotenusa.cateto_opuesto = document.getElementById("inp_co").value;


    hipotenusa.calcular_hipotenusa()
}
document.getElementById("btn_calcular").addEventListener("click", mostrarhipotenusa)