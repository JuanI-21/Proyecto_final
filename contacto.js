// Función principal que lee el archivo contacto.json mediante fetch
function cargarSeccionContacto() {
    fetch('contacto.json')
        .then(respuesta => respuesta.json())
        .then(datosContacto => {
            const contenedor = document.getElementById('contenedor-sedes');
            const titulo = document.getElementById('titulo-seccion');

            if (!contenedor) return;

            // Evaluamos el parámetro relacional del JSON para definir la visualización
            if (!datosContacto.tieneMultiplesSedes) {
                // VISTA: SEDE ÚNICA
                if (titulo) titulo.textContent = "📍 Ubicación y Contacto";
                const sede = datosContacto.sucursales[0];

                contenedor.innerHTML = `
                    <div class="card-unica">
                        <div class="unica-layout">
                            <div class="unica-info">
                                <h3>${datosContacto.nombreVeterinaria}</h3>
                                <p><strong>📍 Domicilio:</strong> ${sede.direccion}</p>
                                <p><strong>📱 Teléfono:</strong> ${sede.telefono}</p>
                                <p><strong>⏰ Horarios:</strong> ${sede.horariosTexto}</p>
                                
                                <a href="https://wa.me/${sede.whatsapp}?text=Hola!%20Quiero%20hacer%20una%20consulta%20para%20mi%20mascota" target="_blank" class="btn-whatsapp">
                                    💬 Enviar WhatsApp
                                </a>
                            </div>
                            <img src="${sede.imagen}" alt="${datosContacto.nombreVeterinaria}" class="unica-img">
                        </div>
                        <iframe src="${sede.mapaUrl}" width="100%" height="220" style="border:0; border-radius: 15px;" allowfullscreen="" loading="lazy"></iframe>
                    </div>
                `;
            } else {
                // VISTA: MULTISEDE (Varias sucursales)
                if (titulo) titulo.textContent = "📍 Nuestras Sedes y Contacto";
                let htmlGrid = '<div class="grid-sedes">';

                datosContacto.sucursales.forEach(sucursal => {
                    htmlGrid += `
                        <div class="card-sede">
                            <img src="${sucursal.imagen}" alt="${sucursal.nombreSede}" class="img-sede">
                            <div class="info-sede">
                                <h3>${sucursal.nombreSede}</h3>
                                <p><strong>📍 Domicilio:</strong> ${sucursal.direccion}</p>
                                <p><strong>📱 Teléfono:</strong> ${sucursal.telefono}</p>
                                <a href="https://wa.me/${sucursal.whatsapp}?text=Hola!%20Consulta%20desde%20la%20web" target="_blank" class="btn-whatsapp" style="width: 100%; justify-content: center;">
                                    💬 WhatsApp
                                </a>
                                <iframe src="${sucursal.mapaUrl}" width="100%" height="140" style="border:0; border-radius: 10px; margin-top: 12px;" allowfullscreen="" loading="lazy"></iframe>
                            </div>
                        </div>
                    `;
                });

                htmlGrid += '</div>';
                contenedor.innerHTML = htmlGrid;
            }
        })
        .catch(error => console.error('Error al cargar el archivo JSON:', error));
}

// Ejecutamos la función al cargar la página
window.onload = cargarSeccionContacto;