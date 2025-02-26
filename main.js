function cambiarTexto(){
    let titulo = document.getElementById("titulo");

    titulo.textContent = "Hola, desde el DOM";
}

/*Selecciona todos los elementos con la clase texto y 
despues con un bucle hacemos que recorra a todos los seleccionados */
function cambiarColorClase(){
    let parrafos = document.getElementsByClassName("texto");

    for(i=0; i<parrafos.length; i++){
        parrafos[i].style.color ="blue";
    }
}
/*Seleccionados los elementos con la misma etiqueta
y de acuerdo con la enumeracion del archivo HTML,
empezando desde cero indicamos el que deseamos ocultar 
escribiendolo el número entre []*/
function ocultarParrafo(){
    let parrafo2 = document.getElementsByTagName("p")[4];

    parrafo2.style.display = "none";
}

/*Selecciona el primer párrafo dentro de un div mediante
el queryselector, indicando la estructura div y el contenido
para después, cambiar la información del p*/
function cambiarTextoDiv(){
    let parrafodiv = document.querySelector("div p");

    parrafodiv.textContent = "Texto cambiado dentro del div";
}

/*Seleccionamos todos los elementos con la misma etiqueta y empleando
forEach, la cual nos permite que a cada uno de los items
hacer una modificación */
function marcarItems(){
    let items = document.querySelectorAll("li");
    items.forEach (item => {
        item.style.backgroundColor = "yellow";
    });
}