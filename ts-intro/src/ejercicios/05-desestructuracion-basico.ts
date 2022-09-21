/*
    ===== Código de TypeScript =====
*/

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Dont Panic',
    detalles: {
        autor:'coldplay',
        anio: 2005
    }
}

const { volumen, segundo, cancion, detalles } = reproductor;
const { autor } = detalles


console.log('El volumen actual es: ', volumen);
console.log('El segundo actual es: ', segundo);
console.log('La cancion actual es: ', cancion);
console.log('El autor es: ', autor);

// Desestructuracion de arreglos

const snk: string[] = ['Eren', 'Mikasa', 'Levi', 'Armin', 'Annie'];
const [ , , p3 ] = snk;

console.log('Personake 3:', p3)
