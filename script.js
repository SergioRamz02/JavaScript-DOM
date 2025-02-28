/* */
document.addEventListener("DOMContentLoaded",()=>{
    //Obtención de elementos de DOM por su ID
    const inicio = document.getElementById("inicio");
    const productos = document.getElementById("productos");
    const contactos = document.getElementById("contactos");

    //Obtención por su menu
    const menuInicio = document.getElementById("menu-inicio");
    const menuProductos = document.getElementById("menu-productos");
    const menuContactos = document.getElementById("menu-contactos");

    //Obtencion de elementos del carrito
    const listaCarrito = document.getElementById("lista-carrito");
    const totalCarrito = document.getElementById("total-carrito");
    let total =0;

    //Obtención de los elementos del DOM para el formulario
    const formularioContacto = document.getElementById("Form-contacto");
    const mensajeEnviado = document.getElementById("mensaje-enviado");

    //Evento para mostrar la sección de inicio y ocultar las demás
    menuInicio.addEventListener("click",(e) =>{
        e.preventDefault(); //Evita un comportamiento por defecto
        inicio.style.display = "block"; //Mostrar
        productos.style.display = "none"; //Ocultar
        contactos.style.display = "none"; //Ocultar
    });

    //Evento para mostrar la sección de productos y ocultar las demás
    menuProductos.addEventListener("click",(e) =>{
        e.preventDefault(); //Evita un comportamiento por defecto
        inicio.style.display = "none";
        productos.style.display = "block";
        contactos.style.display = "none";
    });

    //Evento para mostrar la sección de contactos y ocultar las demás
    menuContactos.addEventListener("click",(e) =>{
        e.preventDefault(); //Evita un comportamiento por defecto
        inicio.style.display = "none";
        productos.style.display = "none";
        contactos.style.display = "block";
    });

    //Evento para agregar prodcutos al carrito
    productos.addEventListener("click", (e) =>{
        if(e.target.classList.contains("agregar-carrito")){ //Verificar si el click fue en el boton agregar carrito
            const nombre = e.target.dataset.nombre; //Contiene el nombre del producto
            const precio = parseInt(e.target.dataset.precio); //Contiene el precio del producto

            const nuevoItem = document.createElement("li");
            nuevoItem.textContent = `${nombre} - $${precio}`;
            listaCarrito.appendChild(nuevoItem);

            total += precio; //Suma el precio de los productos
            console.log(total);
            actualizarTotalCarrito();
        }

    });

//Ejemplo de querySelector para manipular el total del carrito
const totalElemento = document.querySelector("#total-carrito");

function actualizarTotalCarrito (){
    totalElemento.textContent = total;
}
//Usando querySelector para cambiar el texto de carrito 
const tituloCarrito = document.querySelector("#carrito h2");
tituloCarrito.textContent = "Compra realizada";

//Simular envío de nuestro formulario
formularioContacto.addEventListener("submit", (e) =>{
    e.preventDefault();
    formularioContacto.style.display = "none";
    mensajeEnviado.style.display = "block";
});

//Usar el querySelector para mostrar el precio de los productos
productos.addEventListener("mouseover", (e) =>{
    if(e.target.classList.contains("producto")){
        const precio = e.target.querySelector(".agregar-carrito").dataset.precio;
        e.target.setAttribute("title", `Precio: $${precio}`);
    }
});

});
//Target ->Es una propiedad que despliega el elemento que desencadenó
//classList ->Nos permite acceder a las clases de un elemento
