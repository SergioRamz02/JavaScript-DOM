//DOMContentLoaded (Cargar el contenido)
 document.addEventListener("DOMContentLoaded", iniciarApp);

//Función para realizar el proceso de agregar y/o quitar comentarios.
function iniciarApp(){
    document.getElementById('agregarComentario').addEventListener('click', agregarComentario);
    document.getElementById('seccionComentario').addEventListener('click', eliminarComentario);
}

// Función para agregar un comentario
function agregarComentario() {
    const textoComentario = document.getElementById('textoComentario').value;
    
    if (textoComentario.trim() === '') {
        alert('Por favor, escribe un comentario.');
        return;
    }

    // Obtener la fecha y hora actual
    const date = new Date();
    const formattedDate = date.toLocaleString(); // Fecha y hora en formato local

    // Crear el nuevo comentario
    const comentarioDiv = document.createElement('div');
    comentarioDiv.classList.add('comentario');
    
    comentarioDiv.innerHTML = 
        `<section id ="nuevoComentario">
        <p>${textoComentario}</p>
        <div class="date">${formattedDate}</div>
        </section>
        <button><span class="delete">Eliminar Comentario</span></button>`;

    // Agregar el comentario al contenedor
    document.getElementById('seccionComentario').appendChild(comentarioDiv);

    // Limpiar el campo de texto
    document.getElementById('textoComentario').value = '';
}

// Función para eliminar un comentario
function eliminarComentario(e) {
    if (e.target && e.target.classList.contains('delete')) {
        e.target.closest('.comentario').remove();
    }
}