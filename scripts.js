/**
 * Crea elementos dinámicos y modifica un enlace existente en el documento.
 */
function crearBody_modificarEnlace() {
    // Crear elementos
    var nuevoH1 = document.createElement("h1");
    nuevoH1.textContent = "Encabezado dinámico";

    var nuevaHR = document.createElement("hr");

    var nuevoDiv = document.createElement("div");
    var nuevoParrafo = document.createElement("p");
    nuevoParrafo.textContent = "Párrafo dinámico";
    nuevoDiv.appendChild(nuevoParrafo);

    // Modificar enlace existente
    var enlaceExistente = document.getElementById('enlace');
    enlaceExistente.href = "http://www.wikipedia.org";
    enlaceExistente.textContent = "Ir a Wikipedia";

    // Insertar elementos en el body
    var body = document.body;
    body.insertBefore(nuevoDiv, body.lastChild); // Inserta el nuevoDiv antes del último hijo del body
    body.insertBefore(nuevaHR, nuevoDiv); // Inserta la nuevaHR antes de nuevoDiv
    body.insertBefore(nuevoH1, nuevaHR); // Inserta el nuevoH1 antes de la nuevaHR
}
