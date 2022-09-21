/*
    ===== Código de TypeScript =====
*/

function sumar(a: number, b:number): number{
    return a+b;
}

const sumarFlecha = (a:number, b:number):number => {
    return a +b;
}

function multiplicar(numero: number, otroNUmero?:number, base:number = 2): number {
    return numero * base;
}

const resultado = multiplicar(5, 0 ,10);

console.log(resultado)

interface PersonajePaladins{
    nombre: string;
    pv:number;
    mostrarPV: () => void;

}

function curar(personaje: PersonajePaladins, curarX: number): void{
    
    personaje.pv += curarX;

}

const nuevoPersonaje:PersonajePaladins = {
    nombre:'Pip',
    pv:2000,
    mostrarPV(){
        console.log('Puntos de vida', this.pv);
    }
}

curar(nuevoPersonaje, 1200);
nuevoPersonaje.mostrarPV();