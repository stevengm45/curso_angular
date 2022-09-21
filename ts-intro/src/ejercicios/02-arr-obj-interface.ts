/*
    ===== Código de TypeScript =====
*/
// let habilidades : (boolean | string | number)[] = ['Bash', 'Counter', 'Healing'];
let habilidades: string[] = ['Bash', 'Counter', 'Healing'];

interface Personaje {
    nombre: string;
    hp:number;
    habilidades: string[]
    puebloNatal?:string // ? es para especificar que es opcional
}

const personaje: Personaje = {
    nombre: 'Rei',
    hp: 2100,
    habilidades: ['Bash', 'Counter', 'Healing']
}

personaje.puebloNatal = 'Casa Aico';

console.table(personaje);