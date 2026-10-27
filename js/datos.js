/* Canelones Cultura · datos de la portada
   ---------------------------------------------------------------------------
   Este es el ÚNICO archivo que hay que tocar para actualizar la portada
   mientras no exista el CMS. La agenda replica la planilla AGENDA CANELONES
   CULTURA: una fila completa = una actividad.

   Campos de cada actividad (los marcados * son obligatorios, como en el
   protocolo de carga: sin ellos la actividad no se muestra):
     fecha*      "AAAA-MM-DD"
     fechaFin    "AAAA-MM-DD"  (ciclos y fiestas de varios días)
     hora        "20 h", "10 a 22 h"
     titulo*     sin hora ni lugar dentro del nombre
     lugar*      espacio y dirección
     localidad*  tal cual figura en la lista de localidades de abajo
     tipo*       escena | centro | fiesta | conv | memoria  (define el color)
     etiqueta    Música, Teatro, Cine, Fiesta popular…
     entrada     "Entrada libre", "Con reserva", "$ 300"…
     publico     "Todas las edades", "Para gurises"…
     instagram   enlace a la publicación; el nombre de la actividad lo abre
     foto        { src:'img/fotos/nombre', alt, credito }  (genera -480/-960 .webp y .jpg)
     instagram   enlace a la publicación; el nombre de la actividad lo abre
     foto        { src:'img/fotos/nombre', alt, credito }  (genera -480/-960 .webp y .jpg)
     instagram   enlace a la publicación; el nombre de la actividad lo abre
     foto        { src:'img/fotos/nombre', alt, credito }  (genera -480/-960 .webp y .jpg)
     instagram   enlace a la publicación; el nombre de la actividad lo abre
     foto        { src:'img/fotos/nombre', alt, credito }  (genera -480/-960 .webp y .jpg)
     instagram   enlace a la publicación; el nombre de la actividad lo abre
     foto        { src:'img/fotos/nombre', alt, credito }  (genera -480/-960 .webp y .jpg)
     instagram   enlace a la publicación; el nombre de la actividad lo abre
     foto        { src:'img/fotos/nombre', alt, credito }  (genera -480/-960 .webp y .jpg)
     instagram   enlace a la publicación; el nombre de la actividad lo abre
     foto        { src:'img/fotos/nombre', alt, credito }  (genera -480/-960 .webp y .jpg)
     instagram   enlace a la publicación; el nombre de la actividad lo abre
     foto        { src:'img/fotos/nombre', alt, credito }  (genera -480/-960 .webp y .jpg)
     instagram   enlace a la publicación; el nombre de la actividad lo abre
     foto        { src:'img/fotos/nombre', alt, credito }  (genera -480/-960 .webp y .jpg)
     instagram   enlace a la publicación; el nombre de la actividad lo abre
     foto        { src:'img/fotos/nombre', alt, credito }  (genera -480/-960 .webp y .jpg)
     instagram   enlace a la publicación; el nombre de la actividad lo abre
     foto        { src:'img/fotos/nombre', alt, credito }  (genera -480/-960 .webp y .jpg)
     instagram   enlace a la publicación; el nombre de la actividad lo abre
     foto        { src:'img/fotos/nombre', alt, credito }  (genera -480/-960 .webp y .jpg)
     instagram   enlace a la publicación; el nombre de la actividad lo abre
     foto        { src:'img/fotos/nombre', alt, credito }  (genera -480/-960 .webp y .jpg)
     estado      "cambio" (se marca en la agenda) o "suspendida"
   Las actividades pasadas se ocultan solas.
   --------------------------------------------------------------------------- */

window.CULTURA = {

  /* Localidades con su ubicación (lat, lon) para el mapa. Las que dicen aprox:true
     tienen ubicación estimada y falta confirmarla. */
  localidades: [
    {"n": "Ciudad de la Costa", "lat": -34.82, "lon": -55.97, "aprox": true},
    {"n": "Las Piedras", "lat": -34.7302, "lon": -56.2192},
    {"n": "Pando", "lat": -34.7172, "lon": -55.9584},
    {"n": "La Paz", "lat": -34.7603, "lon": -56.2259},
    {"n": "Progreso", "lat": -34.6674, "lon": -56.2176},
    {"n": "Canelones", "lat": -34.5238, "lon": -56.2822},
    {"n": "Santa Lucía", "lat": -34.4533, "lon": -56.3906},
    {"n": "Atlántida", "lat": -34.7719, "lon": -55.7584},
    {"n": "Parque del Plata", "lat": -34.77, "lon": -55.715, "aprox": true},
    {"n": "La Floresta", "lat": -34.7557, "lon": -55.6814},
    {"n": "Salinas", "lat": -34.7773, "lon": -55.8395},
    {"n": "Colonia Nicolich", "lat": -34.8152, "lon": -56.0244},
    {"n": "Paso Carrasco", "lat": -34.8603, "lon": -56.0522},
    {"n": "Barros Blancos", "lat": -34.7524, "lon": -56.0026},
    {"n": "Suárez", "lat": -34.735, "lon": -56.0347},
    {"n": "Toledo", "lat": -34.7381, "lon": -56.0947},
    {"n": "Sauce", "lat": -34.6519, "lon": -56.0643},
    {"n": "Empalme Olmos", "lat": -34.6975, "lon": -55.8927},
    {"n": "Tala", "lat": -34.3435, "lon": -55.7638},
    {"n": "San Ramón", "lat": -34.2916, "lon": -55.9557},
    {"n": "San Jacinto", "lat": -34.5447, "lon": -55.8715},
    {"n": "San Bautista", "lat": -34.4402, "lon": -55.9586},
    {"n": "Santa Rosa", "lat": -34.4982, "lon": -56.038},
    {"n": "Migues", "lat": -34.4876, "lon": -55.6279},
    {"n": "Montes", "lat": -34.4934, "lon": -55.5622},
    {"n": "Soca", "lat": -34.6843, "lon": -55.702},
    {"n": "Los Cerrillos", "lat": -34.605, "lon": -56.3564},
    {"n": "Aguas Corrientes", "lat": -34.5219, "lon": -56.3936},
    {"n": "Juanicó", "lat": -34.5945, "lon": -56.2533},
    {"n": "18 de Mayo", "lat": -34.74, "lon": -56.17, "aprox": true},
  ],

  agenda: [
    {"fecha": "2026-10-22", "hora": "20 h", "titulo": "Ave Fénix Cuarteto de Cuerdas", "lugar": "Teatro Politeama, Tomás Berreta 312", "localidad": "Canelones", "tipo": "escena", "etiqueta": "Música"},
    {"fecha": "2026-10-22", "hora": "19 h", "titulo": "Semillas de Ansina", "lugar": "Espacio Colón, Tomás Berreta 323", "localidad": "Canelones", "instagram": "https://www.instagram.com/p/DeHvor4GxdA/", "tipo": "memoria", "etiqueta": "Documental"},
    {"fecha": "2026-10-23", "hora": "20 h", "titulo": "Rada, la película", "lugar": "Centro Cultural Parque del Plata, Calle 13 esq. Mario Ferreira", "localidad": "Parque del Plata", "instagram": "https://www.instagram.com/p/DdKWMsAG6wN/", "tipo": "centro", "etiqueta": "Cine"},
    {"fecha": "2026-10-23", "hora": "20 h", "titulo": "Reikiavik, de Juan Mayorga", "lugar": "Teatro Politeama, Tomás Berreta 312", "localidad": "Canelones", "tipo": "escena", "etiqueta": "Teatro"},
    {"fecha": "2026-10-24", "hora": "15 a 20 h", "titulo": "Día Internacional de las Bibliotecas", "lugar": "Centro Cultural Salinas y Municipio de Salinas", "localidad": "Salinas", "tipo": "centro", "etiqueta": "Lectura"},
    {"fecha": "2026-10-24", "hora": "20 h", "titulo": "Maia Castro, 20 años de trayectoria", "lugar": "Centro Cultural Pando, Teresa Gaitán y Laurnaga · Circuito Canario", "localidad": "Pando", "instagram": "https://www.instagram.com/p/Dd_15BjkXNn/", "tipo": "centro", "etiqueta": "Música"},
    {"fecha": "2026-10-24", "hora": "16 h", "titulo": "Día y Noche de las Bibliotecas", "lugar": "Centro Cultural Parque del Plata · cierra con «Morosoli», grupo Bancarte, 20 h", "localidad": "Parque del Plata", "tipo": "centro", "etiqueta": "Lectura"},
    {"fecha": "2026-10-24", "hora": "20 h", "titulo": "Tributo a Paco de Lucía: la guitarra infinita", "lugar": "Teatro Politeama, Tomás Berreta 312", "localidad": "Canelones", "tipo": "escena", "etiqueta": "Música"},
    {"fecha": "2026-10-24", "titulo": "Patrimonio Rock", "lugar": "Cancha de Ferrocarrilero", "localidad": "Empalme Olmos", "instagram": "https://www.instagram.com/p/Dd46gQ2jXcc/", "foto": "img/fotos/rock-cdlc", "tipo": "fiesta", "etiqueta": "Música"},
    {"fecha": "2026-10-29", "fechaFin": "2026-10-31", "hora": "10 a 22 h", "titulo": "Encuentro de teatro China Zorrilla", "lugar": "Centro Cultural Carlitos, Av. Artigas esq. Lavalleja", "localidad": "Las Piedras", "tipo": "centro", "etiqueta": "Teatro"},
    {"fecha": "2026-10-30", "titulo": "Cierre de inscripciones: Canelones Suena Bien 2027", "lugar": "Bases y formulario en imcanelones.gub.uy", "localidad": "Todo el departamento", "instagram": "https://www.instagram.com/p/DeaGHCVmxgh/", "foto": "img/fotos/csb-escenario", "tipo": "conv", "etiqueta": "Convocatoria"},
    {"fecha": "2026-10-30", "hora": "20 h", "titulo": "Aniversario 2 del Centro Cultural MIM, con La Papayera Sintrópica", "lugar": "Centro Cultural MIM, Av. Zenón Burgueño esq. Artigas", "localidad": "Soca", "tipo": "centro", "etiqueta": "Aniversario"},
    {"fecha": "2026-10-31", "hora": "20 h", "titulo": "Coro Departamental de Canelones", "lugar": "Teatro Politeama, Tomás Berreta 312", "localidad": "Canelones", "tipo": "escena", "etiqueta": "Música"},
    {"fecha": "2026-10-31", "fechaFin": "2026-11-01", "hora": "9 h", "titulo": "Fiesta de la Chacra", "lugar": "Ruta 7 km 57,600", "localidad": "San Jacinto", "instagram": "https://www.instagram.com/p/Ddmq5e2xZgl/", "foto": "img/fotos/fiesta-chacra", "tipo": "fiesta", "etiqueta": "Fiesta popular"},
    {"fecha": "2026-10-31", "hora": "20 h", "titulo": "Maia Castro, 20 años de trayectoria", "lugar": "Centro Cultural Ciudad de la Costa, Elías Regules esq. Viejo Pancho · Circuito Canario", "localidad": "Ciudad de la Costa", "instagram": "https://www.instagram.com/p/Dd_15BjkXNn/", "tipo": "centro", "etiqueta": "Música"},
    {"fecha": "2026-11-04", "hora": "18 h", "titulo": "Muestra de talleres de danza de Formación Cultural", "lugar": "Teatro Politeama, Tomás Berreta 312", "localidad": "Canelones", "foto": "img/fotos/talleres-formacion", "tipo": "conv", "etiqueta": "Formación"},
    {"fecha": "2026-11-07", "hora": "20 h", "titulo": "Fiesta Patria, dirigida por Mariana Percovich", "lugar": "Centro Cultural Salinas, Yaguareté y del Campanario · Circuito Canario", "localidad": "Salinas", "instagram": "https://www.instagram.com/p/DeMbik4mzaI/", "tipo": "escena", "etiqueta": "Teatro"},
    {"fecha": "2026-11-07", "titulo": "Patrimonio Rock", "lugar": "Plaza de deportes", "localidad": "Suárez", "instagram": "https://www.instagram.com/p/Dd46gQ2jXcc/", "foto": "img/fotos/rock-cdlc", "tipo": "fiesta", "etiqueta": "Música"},
    {"fecha": "2026-11-07", "fechaFin": "2026-11-08", "hora": "13 a 18 h", "titulo": "Talleres de Artista, primera edición", "lugar": "Talleres de artistas visuales en todo el departamento", "localidad": "Todo el departamento", "instagram": "https://www.instagram.com/p/DePkWksG1Pc/", "foto": "img/fotos/talleres-formacion", "tipo": "conv", "etiqueta": "Artes visuales"},
    {"fecha": "2026-11-12", "fechaFin": "2026-11-15", "titulo": "Festival del Reencuentro, edición 25", "lugar": "Montes", "localidad": "Montes", "tipo": "fiesta", "etiqueta": "Fiesta popular"},
    {"fecha": "2026-11-14", "hora": "18:30 h", "titulo": "Fiesta Patria, dirigida por Mariana Percovich", "lugar": "Espacio Colón, Tomás Berreta 323", "localidad": "Canelones", "instagram": "https://www.instagram.com/p/DeMbik4mzaI/", "tipo": "escena", "etiqueta": "Teatro"},
    {"fecha": "2026-11-14", "titulo": "Patrimonio Rock: escenario final", "lugar": "Av. Artigas y Treinta y Tres", "localidad": "Pando", "instagram": "https://www.instagram.com/p/Dd46gQ2jXcc/", "foto": "img/fotos/rock-cdlc", "tipo": "fiesta", "etiqueta": "Música"},
    {"fecha": "2026-11-19", "hora": "20 h", "titulo": "La Orquesta Departamental de Canelones presenta: Brasil", "lugar": "Plaza Argentina (skate park)", "localidad": "Salinas", "foto": "img/fotos/orquesta-atlantida", "tipo": "escena", "etiqueta": "Música"},
    {"fecha": "2026-11-21", "hora": "16 h", "titulo": "Prueba de Admisión Llamadas 2027", "lugar": "Francisco de Menezes, de Solís a Ituzaingó · nueve comparsas", "localidad": "Pando", "instagram": "https://www.instagram.com/p/DeU6nPZm6IJ/", "foto": "img/fotos/carnaval-candombe", "tipo": "fiesta", "etiqueta": "Carnaval"},
    {"fecha": "2026-11-21", "hora": "20 h", "titulo": "Orquesta Juvenil: homenaje a Julio Sosa", "lugar": "Teatro Politeama, Tomás Berreta 312", "localidad": "Canelones", "tipo": "escena", "etiqueta": "Música"},
    {"fecha": "2026-12-05", "fechaFin": "2026-12-06", "titulo": "Fiesta del Agua", "lugar": "Aguas Corrientes", "localidad": "Aguas Corrientes", "tipo": "fiesta", "etiqueta": "Fiesta popular"},
    {"fecha": "2026-12-11", "fechaFin": "2026-12-13", "titulo": "Fiesta del Pollo y la Gallina", "lugar": "San Bautista", "localidad": "San Bautista", "instagram": "https://www.instagram.com/reel/DehO_5jxkMl/", "tipo": "fiesta", "etiqueta": "Fiesta popular"},
    {"fecha": "2026-12-11", "titulo": "150 años de San Jacinto: festejo aniversario", "lugar": "Plaza María Vera · escenario, bandas y feria de artesanos", "localidad": "San Jacinto", "tipo": "fiesta", "etiqueta": "Aniversario"},
    {"fecha": "2026-12-12", "titulo": "Llamada por el Día Nacional del Candombe", "lugar": "Las Piedras", "localidad": "Las Piedras", "foto": "img/fotos/carnaval-candombe", "tipo": "memoria", "etiqueta": "Candombe"},
    {"fecha": "2027-01-28", "titulo": "Canelones Suena Bien 2027", "lugar": "Segunda noche el sábado 30 · grilla completa en diciembre", "localidad": "Todo el departamento", "instagram": "https://www.instagram.com/reel/DdXKM43R6pd/", "foto": "img/fotos/csb-escenario", "tipo": "fiesta", "etiqueta": "Festival"},
  ],

  cronicas: [
    {"fecha": "2026-10-20", "titulo": "Atlántida cumple años en la escuela", "texto": "Una ciudad también cumple años en el patio de la escuela. Este año la Orquesta Departamental trajo un concierto didáctico, y con la música llegó el circo.", "localidad": "Atlántida", "tipo": "escena", "url": "https://www.instagram.com/p/DeuttlUm6hw/", "foto": {"src": "img/fotos/orquesta-atlantida", "alt": "La directora de la Orquesta Departamental dirigiendo al aire libre frente al público escolar, en el aniversario de Atlántida", "credito": "Comunicación Cultural"}},
    {"fecha": "2026-10-16", "titulo": "Patrimonio Rock 2026, primera semifinal", "texto": "Repasamos cómo se vio la primera semifinal en Ciudad de la Costa. La segunda siguió en Barros Blancos, con cuatro bandas emergentes en busca de la final.", "localidad": "Ciudad de la Costa", "tipo": "fiesta", "url": "https://www.instagram.com/p/DekDGYXm7zW/", "foto": {"src": "img/fotos/rock-cdlc", "alt": "Guitarrista frente a la pantalla de Patrimonio Rock en la primera semifinal, en Ciudad de la Costa", "credito": "Comunicación Cultural"}},
    {"fecha": "2026-10-14", "titulo": "188 proyectos a Fondos PRENDE", "texto": "Postularon 188 proyectos completos a Canelones PRENDE, Fondos culturales 2026. Gracias a gestores culturales y artistas por la confianza.", "localidad": "", "tipo": "conv", "url": "https://www.instagram.com/p/DefNqAum-va/", "foto": {"src": "img/fotos/prende-certificados", "alt": "Personas de proyectos de Canelones PRENDE posan con sus certificados frente al cartel de Canelones Cultura", "credito": "Comunicación Cultural"}},
    {"fecha": "2026-10-07", "titulo": "Hugo Fattoruso y la Jam de la Costa", "texto": "Hugo Fattoruso llegó al Centro Cultural Ciudad de la Costa y el piano dejó de ser un mueble.", "localidad": "Ciudad de la Costa", "tipo": "centro", "url": "https://www.instagram.com/p/DeNfAV7jSU8/", "foto": {"src": "img/fotos/fattoruso-jam", "alt": "Hugo Fattoruso con auriculares, tocando los teclados junto a la Jam de la Costa", "credito": "Comunicación Cultural"}},
  ],

  /* Fotos de la sección «Avanzamos con la gente». tipo define el color del duotono.
     etiqueta: texto del botón. enlace: página a la que lleva el botón, que habla de lo que muestra la foto. */
  gente: [
    {"src": "img/fotos/csb-escenario", "tipo": "escena", "etiqueta": "Canelones Suena Bien", "alt": "Vista aérea del escenario y el público de Canelones Suena Bien, de noche", "enlace": "https://www.imcanelones.gub.uy/noticias/convocatoria-abierta-artistas-canarios-que-quieran-participar-del-canelones-suena-bien"},
    {"src": "img/fotos/fiesta-chacra", "tipo": "centro", "etiqueta": "Fiesta de la Chacra", "alt": "Mujeres con pañuelo blanco aplauden en la Fiesta de la Chacra", "enlace": "https://www.instagram.com/p/Ddmq5e2xZgl/"},
    {"src": "img/fotos/talleres-formacion", "tipo": "fiesta", "etiqueta": "Talleres de formación cultural", "alt": "Una joven inclinada sobre una mesa arma un mosaico de piezas de colores en un taller de formación cultural, con otras personas trabajando detrás", "enlace": "https://www.imcanelones.gub.uy/node/26321"},
    {"src": "img/fotos/carnaval-comparsa", "tipo": "conv", "etiqueta": "Carnaval de Canelones", "alt": "Integrante de una comparsa con sombrero y traje dorado bajo las luces del escenario", "enlace": "https://www.instagram.com/p/DVxBG_ejblA/"},
  ],

  /* Fotos de respaldo para actividades sin foto propia, así ninguna queda sin foto.
     Clave: la etiqueta de la actividad en minúsculas y sin tildes (ej. 'musica', 'teatro'), o 'tipo:escena',
     'tipo:centro', 'tipo:fiesta', 'tipo:conv', 'tipo:memoria'. Valor: 'img/fotos/nombre'. */
  fotosGenericas: {},

  /* Red de centros culturales, espacios culturales y bibliotecas públicas.
     Datos de las fichas de imcanelones.gub.uy y de la planilla. instagram: enlace a la
     cuenta si existe (hoy ninguno está confirmado). Lo vacío se muestra como «por confirmar». */
  espacios: [
    {"nombre": "Centro Cultural Casa Artigas", "tipo": "centro", "localidad": "Sauce", "direccion": "Av. Artigas s/n esq. Carmelo René González", "telefono": "2294 4710", "instagram": "https://www.instagram.com/cc_casa_de_artigas/"},
    {"nombre": "Centro Cultural Carlitos", "tipo": "centro", "localidad": "Las Piedras", "direccion": "Av. Artigas esq. Lavalleja", "telefono": "2364 2820", "instagram": "https://www.instagram.com/cclp_carlitos/"},
    {"nombre": "Centro Cultural Ciudad de la Costa", "tipo": "centro", "localidad": "Ciudad de la Costa", "direccion": "Elías Regules esq. Viejo Pancho", "telefono": "2684 8231", "instagram": ""},
    {"nombre": "Centro Cultural Pando", "tipo": "centro", "localidad": "Pando", "direccion": "Teresa Gaytán esq. Laurnaga", "telefono": "2291 9588", "instagram": "https://www.instagram.com/ccppando/"},
    {"nombre": "Centro Cultural Parque del Plata", "tipo": "centro", "localidad": "Parque del Plata", "direccion": "Calle 13 esq. Mario Ferreira", "telefono": "4375 5859", "instagram": "https://www.instagram.com/centroculturalparquedelplata/"},
    {"nombre": "Centro Cultural Salinas", "tipo": "centro", "localidad": "Salinas", "direccion": "Yaguareté entre Del Campanario y De la Fe", "telefono": "4376 9858 int. 4161", "instagram": "https://www.instagram.com/centroculturalsalinas/"},
    {"nombre": "Centro Cultural MIM", "tipo": "centro", "localidad": "Soca", "direccion": "Av. Zenón Burgueño esq. Artigas", "telefono": "093 955 220 / 094 136 640", "instagram": ""},
    {"nombre": "Centro Cultural Río y Palmas", "tipo": "centro", "localidad": "San Ramón", "direccion": "Baltasar Brum entre Guernica y Natalio López", "telefono": "4312 3445", "instagram": ""},
    {"nombre": "Centro Cultural Suárez", "tipo": "centro", "localidad": "Suárez", "direccion": "José Pedro Varela esq. Pérez Castellano", "telefono": "", "instagram": ""},
    {"nombre": "Espacio Cultural de Canelones", "tipo": "espacio", "localidad": "Canelones", "direccion": "Batlle y Ordóñez 368", "telefono": "4332 3125", "instagram": ""},
    {"nombre": "Espacio Cultural de Las Piedras", "tipo": "espacio", "localidad": "Las Piedras", "direccion": "Lavalleja entre Av. Artigas y Batlle y Ordóñez", "telefono": "2364 2820", "instagram": ""},
    {"nombre": "Espacio Cultural de La Paz", "tipo": "espacio", "localidad": "La Paz", "direccion": "Pedro Rosa Giffuni 328", "telefono": "2362 2159", "instagram": ""},
    {"nombre": "Espacio Cultural de Empalme Olmos", "tipo": "espacio", "localidad": "Empalme Olmos", "direccion": "Luis Alberto de Herrera y Lavalleja", "telefono": "2295 5105", "instagram": ""},
    {"nombre": "Espacio Cultural de Migues", "tipo": "espacio", "localidad": "Migues", "direccion": "Eugenio Migues esq. 25 de Agosto", "telefono": "4317 3064", "instagram": ""},
    {"nombre": "Espacio Cultural de Atlántida", "tipo": "espacio", "localidad": "Atlántida", "direccion": "Roger Ballet y Rambla", "telefono": "4372 7258", "instagram": ""},
    {"nombre": "Espacio Cultural de Montes", "tipo": "espacio", "localidad": "Montes", "direccion": "Av. Centenario s/n esq. Ceibal", "telefono": "4317 5817", "instagram": ""},
    {"nombre": "Espacio Cultural de Tala", "tipo": "espacio", "localidad": "Tala", "direccion": "José Alonso y Trelles esq. 18 de Julio", "telefono": "4315 4730", "instagram": ""},
    {"nombre": "Espacio Cultural de San Jacinto", "tipo": "espacio", "localidad": "San Jacinto", "direccion": "Av. General José Artigas esq. María Vera", "telefono": "4399 3061", "instagram": ""},
    {"nombre": "Espacio Cultural de Aguas Corrientes", "tipo": "espacio", "localidad": "Aguas Corrientes", "direccion": "18 de Julio s/n", "telefono": "4337 3030", "instagram": ""},
    {"nombre": "Espacio Cultural de Santa Lucía", "tipo": "espacio", "localidad": "Santa Lucía", "direccion": "Rivera 262", "telefono": "4334 6782", "instagram": ""},
    {"nombre": "Espacio Cultural de Los Cerrillos", "tipo": "espacio", "localidad": "Los Cerrillos", "direccion": "Zorrilla de San Martín casi Máximo Tajes", "telefono": "4336 2903", "instagram": ""},
    {"nombre": "Biblioteca Pública «Froilán Vázquez Ledesma»", "tipo": "biblioteca", "localidad": "Canelones", "direccion": "Tomás Berreta 239", "telefono": "4332 2288 int. 1231", "instagram": ""},
    {"nombre": "Biblioteca Pública «Clemente Estable»", "tipo": "biblioteca", "localidad": "Santa Lucía", "direccion": "Rivera 260 entre Chile y Rodó", "telefono": "4334 6782", "instagram": ""},
    {"nombre": "Biblioteca Pública de La Paz", "tipo": "biblioteca", "localidad": "La Paz", "direccion": "Rosa Giffuni s/n esq. José Enrique Rodó", "telefono": "2362 2159", "instagram": ""},
    {"nombre": "Biblioteca Pública «Zorrilla de San Martín»", "tipo": "biblioteca", "localidad": "Los Cerrillos", "direccion": "Zorrilla de San Martín s/n, frente a la plaza", "telefono": "4336 2903", "instagram": ""},
    {"nombre": "Biblioteca Pública de San Ramón", "tipo": "biblioteca", "localidad": "San Ramón", "direccion": "Av. José Batlle y Ordóñez 1291", "telefono": "4312 3065", "instagram": ""},
    {"nombre": "Biblioteca Pública «Juana de Ibarbourou»", "tipo": "biblioteca", "localidad": "Progreso", "direccion": "Estados Unidos del Brasil y Av. Artigas", "telefono": "2369 2707", "instagram": ""},
    {"nombre": "Biblioteca Pública «José Enrique Rodó»", "tipo": "biblioteca", "localidad": "Parque del Plata", "direccion": "Av. Mario Ferreira y Calle 13", "telefono": "4375 4266", "instagram": ""},
    {"nombre": "Biblioteca Pública de San Bautista", "tipo": "biblioteca", "localidad": "San Bautista", "direccion": "Pedro Marabotto y Luis Alberto de Herrera", "telefono": "4313 6014 / 4313 6833", "instagram": ""},
    {"nombre": "Biblioteca Pública «Eudoro Melo»", "tipo": "biblioteca", "localidad": "Aguas Corrientes", "direccion": "18 de Julio s/n entre Lezica y predio de OSE", "telefono": "4337 3672", "instagram": ""},
    {"nombre": "Biblioteca Pública de Salinas", "tipo": "biblioteca", "localidad": "Salinas", "direccion": "Yaguareté entre Del Campanario y De la Fe", "telefono": "4376 6326", "instagram": ""},
    {"nombre": "Biblioteca Pública de Atlántida", "tipo": "biblioteca", "localidad": "Atlántida", "direccion": "Roger Ballet y Calle 1", "telefono": "4372 4050 int. 1247", "instagram": ""},
    {"nombre": "Biblioteca Pública «Elio A. Zinola»", "tipo": "biblioteca", "localidad": "Pando", "direccion": "General Artigas 933", "telefono": "2292 2190", "instagram": ""},
    {"nombre": "Biblioteca Pública de San Jacinto", "tipo": "biblioteca", "localidad": "San Jacinto", "direccion": "Canelones casi González s/n", "telefono": "4399 2621", "instagram": ""},
    {"nombre": "Biblioteca Pública «Cesar Walter Lasa»", "tipo": "biblioteca", "localidad": "Santa Rosa", "direccion": "Av. Tomás Berreta s/n", "telefono": "4313 3857", "instagram": ""},
    {"nombre": "Biblioteca Pública «José G. Artigas»", "tipo": "biblioteca", "localidad": "Sauce", "direccion": "Av. Artigas 1456 y Vicente Ponce de León", "telefono": "2294 0837", "instagram": ""},
    {"nombre": "Biblioteca Pública de Barros Blancos", "tipo": "biblioteca", "localidad": "Barros Blancos", "direccion": "Ruta 8 km 23,800", "telefono": "2288 2036", "instagram": ""},
    {"nombre": "Biblioteca Pública «Rosaura Tejera Vera»", "tipo": "biblioteca", "localidad": "San Antonio", "direccion": "Rogelio Martínez s/n", "telefono": "4313 9431 / 4313 9018", "instagram": ""},
    {"nombre": "Biblioteca Pública «Conrado Villegas»", "tipo": "biblioteca", "localidad": "Tala", "direccion": "José Alonso y Trelles s/n esq. 18 de Julio", "telefono": "4315 4730", "instagram": ""},
    {"nombre": "Espacio Cultural de Santa Rosa «César Walter Lasa»", "tipo": "espacio", "localidad": "Santa Rosa", "direccion": "Av. Tomás Berreta entre Baltasar Brum y José Pedro Varela", "telefono": "4313 3857", "instagram": ""},
    {"nombre": "Espacio Cultural de San Antonio", "tipo": "espacio", "localidad": "San Antonio", "direccion": "Ruta 33 km 54 (ex edificio de UTE)", "telefono": "4310 4393", "instagram": ""},
    {"nombre": "Centro Cultural Chalet Rovira Molins", "tipo": "centro", "localidad": "Barros Blancos", "direccion": "Canelones y camino Ventura, ruta 8 km 6", "telefono": "2297 1409", "instagram": ""},
    {"nombre": "Centro Cultural Virginia Brindis de Salas", "tipo": "centro", "localidad": "Vista Linda", "direccion": "Miguel de la Riera y Américo Vespucio", "telefono": "092 891 426", "instagram": ""},
    {"nombre": "La Casona", "tipo": "espacio", "localidad": "Paso Carrasco", "direccion": "García Lagos 9", "telefono": "095 165 926", "instagram": ""},
    {"nombre": "Espacio Cultural de Barros Blancos", "tipo": "espacio", "localidad": "Barros Blancos", "direccion": "Centro Cívico Salvador Allende, ruta 8 km 23,600", "telefono": "2288 2298", "instagram": ""},
    {"nombre": "Espacio Cultural de Ciudad de la Costa", "tipo": "espacio", "localidad": "Ciudad de la Costa", "direccion": "", "telefono": "2682 1882 int. 247", "instagram": ""},
    {"nombre": "Biblioteca Pública «Manuel Rosé»", "tipo": "biblioteca", "localidad": "Las Piedras", "direccion": "Lavalleja entre Av. Artigas y Batlle y Ordóñez", "telefono": "2364 2150 int. 3123", "instagram": ""},
    {"nombre": "Biblioteca Pública «Mario Benedetti»", "tipo": "biblioteca", "localidad": "Toledo", "direccion": "Plaza Baltasar Brum", "telefono": "2296 4702", "instagram": ""},
    {"nombre": "Biblioteca Pública «Virginia Bintz»", "tipo": "biblioteca", "localidad": "Nicolich", "direccion": "Empalme de las rutas 101 y 102", "telefono": "2682 9626", "instagram": ""},
    {"nombre": "Biblioteca Pública «Eduardo Acevedo»", "tipo": "biblioteca", "localidad": "Suárez", "direccion": "Pérez Castellanos casi José Pedro Varela", "telefono": "2297 1733", "instagram": ""},
    {"nombre": "Biblioteca Pública «Delia Konkle»", "tipo": "biblioteca", "localidad": "Paso Carrasco", "direccion": "Av. Wilson Ferreira Aldunate 70", "telefono": "2601 1029", "instagram": ""},
    {"nombre": "Biblioteca Pública «Susana Soca»", "tipo": "biblioteca", "localidad": "Soca", "direccion": "Av. Zenón Burgueño s/n", "telefono": "4374 0407", "instagram": ""},
    {"nombre": "Biblioteca Pública «Juan Carlos Martínez»", "tipo": "biblioteca", "localidad": "Montes", "direccion": "Calle 18 entre 9 y 10", "telefono": "4317 5025", "instagram": ""},
  ],

  /* Cuentas de Instagram de los lugares, para el botón «Instagram del lugar» cuando una
     actividad no tiene todavía su propio posteo. clave: texto que aparece en el campo lugar. */
  cuentas: [
    { clave: 'Politeama', instagram: 'https://www.instagram.com/ccpoliteama/' },
    { clave: 'Espacio Colón', instagram: 'https://www.instagram.com/espaciocoloncanelones/' },
    { clave: 'Parque del Plata', instagram: 'https://www.instagram.com/centroculturalparquedelplata/' },
    { clave: 'Carlitos', instagram: 'https://www.instagram.com/cclp_carlitos/' },
    { clave: 'Centro Cultural Pando', instagram: 'https://www.instagram.com/ccppando/' },
    { clave: 'Salinas', instagram: 'https://www.instagram.com/centroculturalsalinas/' },
    { clave: 'Casa Artigas', instagram: 'https://www.instagram.com/cc_casa_de_artigas/' }
  ],

  /* Franja de contacto de la Dirección de Cultura, arriba de todo. tipo: instagram, facebook,
     x, telefono, direccion, mail. Dato: lo que se lee; enlace: adonde lleva. */
  contacto: [
    { tipo: 'instagram', dato: '@canelonescultura', enlace: 'https://www.instagram.com/canelonescultura/' },
    { tipo: 'facebook', dato: 'CanelonesCultura', enlace: 'https://www.facebook.com/CanelonesCultura' },
    { tipo: 'x', dato: '@IdCanelones', enlace: 'https://twitter.com/IdCanelones' },
    { tipo: 'telefono', dato: '4332 3934 int. 1456', enlace: 'tel:+59843323934,1456' },
    { tipo: 'direccion', dato: 'Florencio Sánchez 635, Canelones', enlace: 'https://www.google.com/maps/search/?api=1&query=Florencio+S%C3%A1nchez+635%2C+Canelones%2C+Uruguay' },
    { tipo: 'mail', dato: 'mesa.cultura@imcanelones.gub.uy', enlace: 'mailto:mesa.cultura@imcanelones.gub.uy' }
  ],

  /* Convocatoria destacada (banda rosa). */
  convocatoria: {
    programa: 'Canelones Suena Bien 2027',
    titulo: 'Subite al escenario',
    cierre: '2026-10-30',
    fechas: [
      ['Inscripciones', 'hasta el viernes 30 de octubre'],
      ['Selección de artistas', 'noviembre'],
      ['Grilla completa', 'diciembre'],
      ['Festival', 'jueves 28 y sábado 30 de enero']
    ],
    pregunta: '¿Tenés banda?',
    boton: 'Bases e inscripción',
    link: 'https://www.imcanelones.gub.uy/noticias/convocatoria-abierta-artistas-canarios-que-quieran-participar-del-canelones-suena-bien'
  },

  memoria: [
    ['Julio Sosa, 100 años', 'Las Piedras'],
    ['Semillas de Ansina', 'Gira por el departamento'],
    ['Llamadas Canarias', 'Carnaval de Canelones'],
    ['Día Nacional del Candombe', '3 de diciembre']
  ],

  /* Avanzamos con la gente. Se muestran solo las cifras con validada distinto de false.
     Para publicar una pendiente: confirmarla con la Dirección y borrarle «validada:false».
     n: 'auto' cuenta las localidades encendidas; 'auto-act' cuenta las actividades. */
  cifras: [
    {"n": "90.000+", "texto": "personas en Canelones Suena Bien 2026, dos noches de entrada libre en Atlántida (29 y 31 de enero)", "fuente": "Montevideo Portal, 1 de febrero de 2026", "area": "Canelones Suena Bien", "enlace": "https://www.montevideo.com.uy/Tiempo-libre/Mas-de-90-000-personas-asistieron-al-festival-Canelones-Suena-Bien-FOTOS-uc951697"},
    {"n": "50.000+", "texto": "personas siguieron en vivo la transmisión de Canelones Suena Bien 2026 por YouTube y Antel TV", "fuente": "Montevideo Portal, 1 de febrero de 2026", "area": "Canelones Suena Bien", "enlace": "https://www.montevideo.com.uy/Tiempo-libre/Mas-de-90-000-personas-asistieron-al-festival-Canelones-Suena-Bien-FOTOS-uc951697"},
    {"n": "120.000+", "texto": "personas en la edición 2023 de Canelones Suena Bien, cinco fechas con entrada gratuita (balance previo al cierre)", "fuente": "Montevideo Portal, 1 de abril de 2023", "area": "Canelones Suena Bien", "enlace": "https://www.montevideo.com.uy/Noticias/Se-termina-el-Canelones-Suena-Bien--de-cuanto-fue-la-inversion-y-que-asistencia-tuvo--uc849959"},
    {"n": "6", "texto": "artistas en las dos noches de Canelones Suena Bien 2026: La Vela Puerca, Buitres, Las Cobras, Daniela Mercury, Rubén Rada y Røcio", "fuente": "@canelonescultura, 16 de enero de 2026", "area": "Canelones Suena Bien", "enlace": "https://www.instagram.com/p/DTlgV8sEe8r/"},
    {"n": "300+", "texto": "talleres activos de formación cultural en todo el departamento", "fuente": "Dirección de Cultura (dato de Comunicación Cultural; falta enlazar el posteo)", "area": "Formación"},
    {"n": "7000", "texto": "personas participando en los talleres", "fuente": "Dirección de Cultura (dato de Comunicación Cultural; falta enlazar el posteo)", "area": "Formación"},
    {"n": "20", "texto": "años de Formación Cultural, cumplidos este 2026", "fuente": "Gobierno de Canelones, 15 de septiembre de 2026", "area": "Formación", "enlace": "https://www.imcanelones.gub.uy/node/26321"},
    {"n": "40", "texto": "referentes y gestores culturales que se forman cada año en Gestión Cultural con la Udelar", "fuente": "@canelonescultura, 24 de julio de 2026", "area": "Formación", "enlace": "https://www.instagram.com/p/DbLh-6SkSrK/"},
    {"n": "159", "texto": "personas postularon a la Formación en Gestión Cultural «Proyectar la Cultura» 2026", "fuente": "Correo de la División Proyectos, 20 de marzo de 2026", "area": "Formación"},
    {"n": "188", "texto": "proyectos completos postulados a Canelones PRENDE, Fondos culturales 2026", "fuente": "@canelonescultura, 14 de octubre de 2026", "area": "Fondos", "enlace": "https://www.instagram.com/p/DefNqAum-va/"},
    {"n": "40", "texto": "funciones de cine en la gira de Canelones Audiovisual de febrero", "fuente": "@canelonescultura, 2 de mayo de 2026", "area": "Audiovisual", "enlace": "https://www.instagram.com/p/DX10eIwDfjS/"},
    {"n": "32", "texto": "municipios alcanzados por esa gira de cine, de punta a punta del departamento", "fuente": "@canelonescultura, 2 de mayo de 2026", "area": "Audiovisual", "enlace": "https://www.instagram.com/p/DX10eIwDfjS/"},
    {"n": "3500+", "texto": "espectadores en esas noches de cine", "fuente": "@canelonescultura, 2 de mayo de 2026", "area": "Audiovisual", "enlace": "https://www.instagram.com/p/DX10eIwDfjS/"},
    {"n": "9", "texto": "funciones del Festival Cinematográfico Internacional del Uruguay en el departamento", "fuente": "@canelonescultura, 24 de marzo de 2026", "area": "Audiovisual", "enlace": "https://www.instagram.com/p/DWSJYCjjfUj/"},
    {"n": "5000+", "texto": "artistas en el Carnaval canario", "fuente": "@canelonescultura, 1 de noviembre de 2025", "area": "Carnaval", "enlace": "https://www.instagram.com/p/DQiFL9MDUx7/"},
    {"n": "200000", "texto": "espectadores en las calles y escenarios del Carnaval", "fuente": "@canelonescultura, 1 de noviembre de 2025", "area": "Carnaval", "enlace": "https://www.instagram.com/p/DQiFL9MDUx7/"},
    {"n": "120+", "texto": "actividades de Carnaval 2026 entre tablados, desfiles y concursos", "fuente": "@canelonescultura, 12 de marzo de 2026", "area": "Carnaval", "enlace": "https://www.instagram.com/p/DVxBG_ejblA/"},
    {"n": "280", "texto": "proyectos al llamado de la Fiesta de la Chacra: 245 musicales y 35 de artes escénicas", "fuente": "@canelonescultura, 22 de septiembre de 2026", "area": "Música", "enlace": "https://www.instagram.com/p/Ddmq5e2xZgl/"},
    {"n": "16", "texto": "bandas en las semifinales intermunicipales de Patrimonio Rock 2026", "fuente": "@canelonescultura, 29 de septiembre de 2026", "area": "Música", "enlace": "https://www.instagram.com/p/Dd46gQ2jXcc/"},
    {"n": "2000", "texto": "estudiantes de doce departamentos en el audiovisual coral Ola Celeste", "fuente": "@canelonescultura, 5 de junio de 2026", "area": "Música", "enlace": "https://www.instagram.com/p/DZNrUlhm3j4/"},
    {"n": "100+", "texto": "años de la Orquesta Departamental de Canelones", "fuente": "@canelonescultura, 1 de junio de 2026", "area": "Música", "enlace": "https://www.instagram.com/reel/DZDpDkPBNPT/"},
    {"n": "340", "texto": "niñas y niños de escuelas rurales en una sola jornada en el Complejo Cultural Politeama", "fuente": "Gobierno de Canelones, 30 de septiembre de 2026", "area": "Escena", "enlace": "https://www.imcanelones.gub.uy/node/26479"},
    {"n": "70", "texto": "artistas canarios entre los nominados a los Premios Graffiti, entregados en el Politeama", "fuente": "@canelonescultura, 20 de octubre de 2025", "area": "Escena", "enlace": "https://www.instagram.com/p/DQDI6AoDc0h/"},
    {"n": "70+", "texto": "estudiantes en la primera edición del concurso de teatro Qué Pasa LP!", "fuente": "@canelonescultura, 2 de septiembre de 2026", "area": "Escena", "enlace": "https://www.instagram.com/p/Dcyg2oWEZ89/"},
    {"n": "auto-red", "texto": "lugares en la red de centros culturales, espacios culturales y bibliotecas públicas", "fuente": "Se calcula solo desde la red de centros", "area": "Red"},
    {"n": "auto-centros", "texto": "centros culturales en la red de la Dirección de Cultura", "fuente": "Se calcula solo desde la red de centros", "area": "Red"},
    {"n": "auto", "texto": "localidades con actividad publicada en la agenda de las próximas semanas", "fuente": "Se calcula solo desde la agenda", "area": "Agenda"},
    {"n": "auto-act", "texto": "actividades publicadas en la agenda departamental de aquí a enero", "fuente": "Se calcula solo desde la agenda", "area": "Agenda"},
  ],

  /* Formulario de pedidos a Comunicación Cultural. Sin endpoint, el formulario arma el
     correo (mailto) y muestra el texto para copiar. Con endpoint, envía los datos por POST (JSON). */
  formulario: {
    correo: 'cultura.comunicaciones@imcanelones.gub.uy',
    endpoint: '',
    oficial: ''
  },

  actualizado: '21 de octubre de 2026'
};
