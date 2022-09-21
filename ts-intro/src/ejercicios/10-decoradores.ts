/*
    ===== Código de TypeScript =====
*/

function reportableClassDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        reportingURL = "http://www...";
    };
}

@reportableClassDecorator
class MiSuperclase {
    public miPropiedad: string = 'ABC123'

    imprimir() {
        console.log('Hola Mundo')
    }
}
console.log(MiSuperclase)

const miClase = new MiSuperclase();

console.log(miClase.miPropiedad)