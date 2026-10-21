# Canelones Cultura Web

Portada de la Dirección de Cultura del Gobierno de Canelones. Sitio estático: solo HTML, CSS y JavaScript, sin compilación ni dependencias, pensado para subirse tal cual al servidor de la Intendencia (subdominio canelonescultura).

## Estructura

- `index.html`: la página.
- `css/estilos.css`: estilos.
- `js/datos.js`: **todo el contenido** (agenda, crónicas, red de centros, convocatoria, cifras, contacto, formulario). Es el único archivo que hay que tocar para actualizar la web.
- `js/app.js`: la lógica (menú, «Lo que viene», filtros, mapa de localidades, cifras).
- `img/`: logos del Gobierno de Canelones, isotipo y fotos (`img/fotos/`, cada una en 480 y 960 px, WebP y JPEG). Los créditos y derechos de cada foto están en `img/fotos/CREDITOS.md`.

## Ver la página

Abrir `index.html` en el navegador. Para verla online: Settings → Pages → rama `main`, carpeta raíz.

## Pendientes

Faltan datos que no se inventan y quedan vacíos hasta confirmarlos (enlaces a Instagram de algunas actividades, algunos teléfonos y direcciones, nombres de fotógrafos). Las fuentes de cada cifra figuran en el propio sitio.
