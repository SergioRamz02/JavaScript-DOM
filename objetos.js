/*1. Abstracción: Construcción de la clase libro */

class Libro{
    constructor(titulo, autor, año, estado){
        this.titulo = titulo;
        this.autor = autor;
        this.año = año;
        this.estado = estado;
    }
    describirLibro(){
        return `Libro titulado ${this.titulo}, escrito por ${this.autor} en el año ${this.año}, el estado es ${this.estado}`;
    }
}

//Inicialización

const libro1 = new Libro("Introducción a la mecánica cuántica", "Luis de la Peña",2006, "Disponible");

console.log("1. ", libro1.describirLibro());
