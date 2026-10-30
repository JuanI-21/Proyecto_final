function cargarQuienesSomos() {
    fetch('quienes.json')
        .then(respuesta => respuesta.json())
        .then(data => {
            const contenedor = document.getElementById('contenedor-quienes');
            if (!contenedor) return;

            contenedor.innerHTML = `
                <div class="card-mv card-mision">
                    <div class="card-icon">🎯</div>
                    <div class="card-content">
                        <h2>Nuestra Misión</h2>
                        <p>${data.mision}</p>
                    </div>
                </div>

                <div class="card-mv card-vision">
                    <div class="card-icon">🚀</div>
                    <div class="card-content">
                        <h2>Nuestra Visión</h2>
                        <p>${data.vision}</p>
                    </div>
                </div>
            `;
        })
        .catch(error => console.error('Error al cargar la sección Quiénes Somos:', error));
}

window.onload = cargarQuienesSomos;