export default class vehiculo {

modelo = ''

    constructor() {
        this.vehiculokm=km
    }
    mostrarkilometraje(){
        console.log(`el kilomnetraje de mi vehiculo es  igual a ${this.vehiculoskm}km`)
    }
}
// forma dos SIN CONSTRUCTOR Y MAS FACIL.
mostrar_modelo()
{
    console.log(this.modelo)
}