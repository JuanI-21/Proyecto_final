function cargarFooter() {
    fetch('footer.json')
        .then(respuesta => respuesta.json())
        .then(data => {
            const contenedor = document.getElementById('footer-container');
            if (!contenedor) return;

            // Renderizado de Secciones (Información, Legal, etc.)
            let htmlSecciones = '';
            data.secciones.forEach(sec => {
                let htmlLinks = '';
                sec.links.forEach(link => {
                    htmlLinks += `<li><a href="${link.url}">${link.texto}</a></li>`;
                });

                htmlSecciones += `
                    <div class="footer-col">
                        <h3 class="col-title">${sec.titulo}</h3>
                        <ul class="col-links">${htmlLinks}</ul>
                    </div>
                `;
            });

            // SVG Icons ultra nítidos
            const iconLocation = `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>`;
            const iconPhone = `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>`;
            const iconPaw = `<svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M12 11.5c-2.5 0-4.5 1.8-4.5 4 0 2.8 2.8 5.5 4.5 6.5 1.7-1 4.5-3.7 4.5-6.5 0-2.2-2-4-4.5-4zm-6-2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm12 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-9.5-4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/></svg>`;

            contenedor.innerHTML = `
                <div class="footer-wrapper">
                    <div class="footer-grid">
                        
                        <!-- Columna Marca & Contacto -->
                        <div class="footer-col brand-col">
                            <div class="brand-header">
                                ${iconPaw}
                                <h2>${data.marca.nombre}</h2>
                            </div>
                            <p class="brand-slogan">${data.marca.slogan}</p>
                            
                            <div class="contact-info">
                                <div class="contact-item">
                                    ${iconLocation}
                                    <span>${data.marca.direccion}</span>
                                </div>
                                <div class="contact-item">
                                    ${iconPhone}
                                    <span>${data.marca.telefono}</span>
                                </div>
                            </div>

                            <div class="social-links">
                                <a href="#" aria-label="TikTok">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-5.2-1.74 2.89 2.89 0 0 1 2.31-1.39V9.06a6.34 6.34 0 1 0 6.34 6.34V8.62a8.3 8.3 0 0 0 4.77 1.52V6.69z"/></svg>
                                </a>
                                <a href="#" aria-label="LinkedIn">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
                                </a>
                                <a href="#" aria-label="Instagram">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                                </a>
                            </div>
                        </div>

                        <!-- Columnas Dinámicas -->
                        ${htmlSecciones}

                    </div>

                    <div class="footer-bottom">
                        <p>${data.copyright}</p>
                    </div>
                </div>
            `;
        })
        .catch(error => console.error('Error al cargar el footer:', error));
}

window.addEventListener('DOMContentLoaded', cargarFooter);