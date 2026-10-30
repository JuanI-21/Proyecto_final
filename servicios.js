function cargarServicios() {
    fetch('servicios.json')
        .then(respuesta => respuesta.json())
        .then(listaServicios => {
            const contenedor = document.getElementById('contenedor-servicios');
            if (!contenedor) return;

            let htmlServicios = '';

            listaServicios.forEach(servicio => {
                htmlServicios += `
                    <div class="card-servicio">
                        <img src="${servicio.imagen}" alt="${servicio.titulo}" class="img-servicio">
                        <div class="info-servicio">
                            <span class="badge-categoria">${servicio.categoria}</span>
                            <h3>${servicio.icono} ${servicio.titulo}</h3>
                            <p>${servicio.descripcion}</p>
                        </div>
                    </div>
                `;
            });

            contenedor.innerHTML = htmlServicios;
        })
        .catch(error => console.error('Error al cargar los servicios:', error));
}

window.onload = cargarServicios;