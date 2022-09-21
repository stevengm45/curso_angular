/*
    ===== Código de TypeScript =====
*/

export interface Producto {
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc: 'Samsung Galaxy S10+',
    precio: 1200000
}

const tableta: Producto = {
    desc: 'Samsung Galaxy Tab5',
    precio: 2000000
}

export function calculaISV( productos: Producto[] ):[number, number] {
    let total = 0;

    productos.forEach( ({precio}) => {
        total += precio;
    })

    return [total, total * 0.15];
}



const articulos = [ telefono, tableta];

const [total, isv] = calculaISV(articulos);

console.log('TOTAL:', total)
console.log('IVA:', isv)