export default class Pitagoras {

    cateto_adyacente;
    cateto_opuesto;

    constructor(){

    }


    calcular_hipotenusa()
    {

        let bloque1 =  Math.pow(this.cateto_opuesto,2) + Math.pow(this.cateto_adyacente,2)

        let hipotenusa  = Math.sqrt(bloque1)
        console.log(hipotenusa)

    }
}



