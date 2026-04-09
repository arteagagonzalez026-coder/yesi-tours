document.addEventListener('DOMContentLoaded', function () {
    // 1. Buscamos el modal por su ID
    const modalViaje = document.getElementById('modalViaje');

    if (modalViaje) {
        // 2. Escuchamos cuando el modal se está por abrir
        modalViaje.addEventListener('show.bs.modal', function (event) {
            
            // 3. Identificamos qué botón exacto se presionó
            const boton = event.relatedTarget;
            
            // 4. Extraemos la info de los atributos "data-" del botón
            const titulo = boton.getAttribute('data-titulo');
            const imagen = boton.getAttribute('data-img');
            const info = boton.getAttribute('data-info');
            const duracion = boton.getAttribute('data-duracion');
            const salida = boton.getAttribute('data-salida');

            // 5. Inyectamos los datos en tu HTML
            document.getElementById('tituloModal').textContent = titulo;
            document.getElementById('imgModal').src = imagen;
            document.getElementById('infoModal').textContent = info;
            
            // Aquí llenamos los <li> que tenías vacíos
            document.getElementById('duracionModal').textContent = duracion;
            document.getElementById('salidaModal').textContent = salida;

            const mensaje = encodeURIComponent(`Hola Yesi Tours, me interesa el viaje a ${titulo} que sale el ${salida}. ¿Me dan más información?`);
            document.getElementById('btnWhatsapp').href = `https://wa.me/528334288206?text=${mensaje}`;
        });
    }
});