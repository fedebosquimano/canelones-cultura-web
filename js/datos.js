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
    {"fecha": "2026-10-01", "fechaFin": "2026-10-31", "hora": "10 a 16 h", "titulo": "Muestra Tecnologías Ancestrales", "lugar": "Quinta Capurro, Av. Federico Capurro 555", "localidad": "Santa Lucía", "tipo": "centro", "etiqueta": "Muestra"},
    {"fecha": "2026-10-14", "fechaFin": "2026-10-31", "titulo": "Ancestralidades, exposición de Pintores del Solís", "lugar": "Centro Cultural Parque del Plata, Calle 13 esq. Mario Ferreira · lun a vie 10 a 19 h, sáb 14 a 19 h", "localidad": "Parque del Plata", "tipo": "centro", "etiqueta": "Artes visuales"},
    {"fecha": "2026-10-15", "fechaFin": "2026-11-15", "titulo": "Iluminá: muestra fotográfica Mujeres Rurales", "lugar": "Espacio Colón, Tomás Berreta 323 · mié a vie 13 a 20 h, sáb y dom 16 a 20 h", "localidad": "Canelones", "tipo": "escena", "etiqueta": "Fotografía"},
    {"fecha": "2026-10-29", "hora": "14 h", "titulo": "Encuentro de coros de liceos de Pando", "lugar": "Centro Cultural Pando, Teresa Gaitán y Laurnaga", "localidad": "Pando", "tipo": "centro", "etiqueta": "Música"},
    {"fecha": "2026-10-29", "hora": "13:30 h", "titulo": "Iluminá: charla «Grupalidad y liderazgo de la mujer rural»", "lugar": "Espacio Colón, Tomás Berreta 323", "localidad": "Canelones", "tipo": "escena", "etiqueta": "Charla"},
    {"fecha": "2026-10-29", "hora": "20 h", "titulo": "Matrimonio en escabeche, con Carmen Morán y Hugo Giachino", "lugar": "Teatro Politeama, Tomás Berreta 312", "localidad": "Canelones", "tipo": "escena", "etiqueta": "Teatro"},
    {"fecha": "2026-10-29", "hora": "19 h", "titulo": "Semillas de Ansina", "lugar": "Centro Cultural y Museo Casa de Artigas, Av. Artigas esq. Carmelo René González", "localidad": "Sauce", "tipo": "memoria", "etiqueta": "Documental"},
    {"fecha": "2026-10-29", "fechaFin": "2026-10-31", "hora": "10 a 22 h", "titulo": "Encuentro de teatro China Zorrilla", "lugar": "Centro Cultural Carlitos, Av. Artigas esq. Lavalleja", "localidad": "Las Piedras", "tipo": "centro", "etiqueta": "Teatro", "foto": "img/fotos/act-09-encuentro-teatro-china-zorrilla"},
    {"fecha": "2026-10-30", "hora": "19 h", "titulo": "Adiós mundo cruel", "lugar": "Centro Cultural Ciudad de la Costa, Elías Regules esq. Viejo Pancho", "localidad": "Ciudad de la Costa", "tipo": "centro", "etiqueta": "Teatro"},
    {"fecha": "2026-10-30", "hora": "20 h", "titulo": "Alquimia: Spuntone, Mendaro y Martínez", "lugar": "Teatro Politeama, Tomás Berreta 312", "localidad": "Canelones", "tipo": "escena", "etiqueta": "Música"},
    {"fecha": "2026-10-30", "hora": "20 h", "titulo": "Aniversario 2 del Centro Cultural MIM, con La Papayera Sintrópica", "lugar": "Centro Cultural MIM, Av. Zenón Burgueño esq. Artigas", "localidad": "Soca", "tipo": "centro", "etiqueta": "Aniversario", "foto": "img/fotos/act-10-aniversario-mim-papayera"},
    {"fecha": "2026-10-30", "hora": "20 h", "titulo": "Atlantidoc 20 años: Alarma Inminente y Susurros del agua", "lugar": "Centro Cultural Parque del Plata, Calle 13 esq. Mario Ferreira", "localidad": "Parque del Plata", "tipo": "centro", "etiqueta": "Cine"},
    {"fecha": "2026-10-30", "titulo": "Cierre de inscripciones: Canelones Suena Bien 2027", "lugar": "Bases y formulario en imcanelones.gub.uy", "localidad": "Todo el departamento", "instagram": "https://www.instagram.com/p/DeaGHCVmxgh/", "tipo": "conv", "etiqueta": "Convocatoria", "foto": "img/fotos/csb-escenario"},
    {"fecha": "2026-10-30", "hora": "10 h", "titulo": "Lucrecia rompe todo, por Teatro del Arca", "lugar": "Municipio de Tala, Ildefonso De León entre 18 de Julio y Av. Artigas", "localidad": "Tala", "tipo": "escena", "etiqueta": "Teatro"},
    {"fecha": "2026-10-30", "hora": "20 h", "titulo": "Rada, la película", "lugar": "Centro Cultural Pando, Teresa Gaitán y Laurnaga", "localidad": "Pando", "tipo": "centro", "etiqueta": "Cine"},
    {"fecha": "2026-10-30", "hora": "20 h", "titulo": "Recital de Mateo Delfino, con Emi Bellone", "lugar": "Centro Cultural Salinas, Yaguareté y Del Campanario", "localidad": "Salinas", "tipo": "centro", "etiqueta": "Música"},
    {"fecha": "2026-10-30", "titulo": "Viernes de canto colectivo", "lugar": "Montes", "localidad": "Montes", "tipo": "fiesta", "etiqueta": "Música"},
    {"fecha": "2026-10-31", "hora": "20 h", "titulo": "Cine de Halloween: Viernes 13 (1980), versión remasterizada", "lugar": "Centro Cultural MIM, Av. Zenón Burgueño esq. Artigas", "localidad": "Soca", "tipo": "centro", "etiqueta": "Cine"},
    {"fecha": "2026-10-31", "hora": "20 h", "titulo": "Coro Departamental de Canelones", "lugar": "Teatro Politeama, Tomás Berreta 312", "localidad": "Canelones", "tipo": "escena", "etiqueta": "Música", "foto": "img/fotos/act-11-coro-departamental"},
    {"fecha": "2026-10-31", "hora": "20 h", "titulo": "Encuentro Coral: invita Coro Cantaviva", "lugar": "Centro Cultural Parque del Plata, Calle 13 esq. Mario Ferreira", "localidad": "Parque del Plata", "tipo": "centro", "etiqueta": "Música"},
    {"fecha": "2026-10-31", "hora": "20 h", "titulo": "Maia Castro, 20 años de trayectoria", "lugar": "Centro Cultural Ciudad de la Costa, Elías Regules esq. Viejo Pancho · Circuito Canario", "localidad": "Ciudad de la Costa", "instagram": "https://www.instagram.com/p/Dd_15BjkXNn/", "tipo": "centro", "etiqueta": "Música", "foto": "img/fotos/act-06-maia-castro-20-anos"},
    {"fecha": "2026-10-31", "hora": "14 h", "titulo": "Taller de cactus y suculentas", "lugar": "Casona principal de Quinta Capurro, Av. Federico Capurro 555", "localidad": "Santa Lucía", "tipo": "conv", "etiqueta": "Taller"},
    {"fecha": "2026-10-31", "fechaFin": "2026-11-01", "hora": "9 h", "titulo": "Fiesta de la Chacra", "lugar": "Ruta 7 km 57,600", "localidad": "San Jacinto", "instagram": "https://www.instagram.com/p/Ddmq5e2xZgl/", "tipo": "fiesta", "etiqueta": "Fiesta popular", "foto": "img/fotos/fiesta-chacra"},
    {"fecha": "2026-11-01", "hora": "18 h", "titulo": "Milonga", "lugar": "Centro Cultural Carlitos, Av. Artigas esq. Lavalleja", "localidad": "Las Piedras", "tipo": "centro", "etiqueta": "Tango"},
    {"fecha": "2026-11-01", "hora": "15 h", "titulo": "Pato Duki: freestyle, música y competencia", "lugar": "Centro Cultural Carlitos, Av. Artigas esq. Lavalleja", "localidad": "Las Piedras", "tipo": "centro", "etiqueta": "Música"},
    {"fecha": "2026-11-04", "hora": "18 h", "titulo": "Muestra de talleres de danza de Formación Cultural", "lugar": "Teatro Politeama, Tomás Berreta 312", "localidad": "Canelones", "tipo": "conv", "etiqueta": "Formación", "foto": "img/fotos/talleres-formacion"},
    {"fecha": "2026-11-04", "hora": "19 h", "titulo": "Taller de capoeira, a cargo de Malé", "lugar": "Centro Cultural Carlitos, Av. Artigas esq. Lavalleja", "localidad": "Las Piedras", "tipo": "conv", "etiqueta": "Taller"},
    {"fecha": "2026-11-04", "fechaFin": "2026-11-21", "titulo": "Latido de arcilla, madera y eco de pigmentos", "lugar": "Centro Cultural Parque del Plata, Calle 13 esq. Mario Ferreira · lun a vie 10 a 19 h, sáb 14 a 19 h", "localidad": "Parque del Plata", "tipo": "centro", "etiqueta": "Artes visuales"},
    {"fecha": "2026-11-05", "hora": "20 h", "titulo": "Atlantidoc", "lugar": "Centro Cultural Salinas, Yaguareté y Del Campanario", "localidad": "Salinas", "tipo": "centro", "etiqueta": "Cine"},
    {"fecha": "2026-11-05", "hora": "18 h", "titulo": "Inauguración de muestra de pintura de Clara Gobbi", "lugar": "Centro Cultural Salinas, Yaguareté y Del Campanario", "localidad": "Salinas", "tipo": "centro", "etiqueta": "Artes visuales"},
    {"fecha": "2026-11-05", "hora": "18 h", "titulo": "Muestra de talleres de teatro de Formación Cultural", "lugar": "Teatro Politeama, Tomás Berreta 312", "localidad": "Canelones", "tipo": "conv", "etiqueta": "Formación"},
    {"fecha": "2026-11-05", "hora": "17:30 h", "titulo": "Rutas en Juego, ludoteca itinerante", "lugar": "Centro Cultural MIM, Av. Zenón Burgueño esq. Artigas", "localidad": "Soca", "tipo": "centro", "etiqueta": "Juego"},
    {"fecha": "2026-11-05", "fechaFin": "2026-11-08", "titulo": "Convención de Malabares y Circo", "lugar": "Canelones", "localidad": "Canelones", "tipo": "fiesta", "etiqueta": "Circo"},
    {"fecha": "2026-11-05", "fechaFin": "2026-11-18", "hora": "18 h", "titulo": "Tapices de EMAO", "lugar": "Espacio Colón, Tomás Berreta 323", "localidad": "Canelones", "tipo": "escena", "etiqueta": "Artes visuales"},
    {"fecha": "2026-11-06", "hora": "20 h", "titulo": "Camino a Ítaca", "lugar": "Teatro Politeama, Tomás Berreta 312", "localidad": "Canelones", "tipo": "escena", "etiqueta": "Espectáculo"},
    {"fecha": "2026-11-06", "hora": "20 h", "titulo": "Hasta aquí llegó mi amor", "lugar": "Centro Cultural Ciudad de la Costa, Elías Regules esq. Viejo Pancho", "localidad": "Ciudad de la Costa", "tipo": "centro", "etiqueta": "Teatro"},
    {"fecha": "2026-11-06", "hora": "19 h", "titulo": "Jugamos Catan", "lugar": "Centro Cultural MIM, Av. Zenón Burgueño esq. Artigas", "localidad": "Soca", "tipo": "centro", "etiqueta": "Juego"},
    {"fecha": "2026-11-06", "hora": "20 h", "titulo": "Maia Castro, 20 años de trayectoria", "lugar": "Centro Cultural Parque del Plata, Calle 13 esq. Mario Ferreira · Circuito Canario", "localidad": "Parque del Plata", "tipo": "centro", "etiqueta": "Música"},
    {"fecha": "2026-11-06", "hora": "18 h", "titulo": "Presentación del libro «Elefantín», de Samantha Navarro", "lugar": "Centro Cultural Parque del Plata, Calle 13 esq. Mario Ferreira", "localidad": "Parque del Plata", "tipo": "centro", "etiqueta": "Libros"},
    {"fecha": "2026-11-07", "hora": "20 h", "titulo": "Fede Cyrulnik, stand-up", "lugar": "Teatro Politeama, Tomás Berreta 312", "localidad": "Canelones", "tipo": "escena", "etiqueta": "Humor"},
    {"fecha": "2026-11-07", "hora": "20 h", "titulo": "Fiesta Patria, dirigida por Mariana Percovich", "lugar": "Centro Cultural Salinas, Yaguareté y del Campanario · Circuito Canario", "localidad": "Salinas", "instagram": "https://www.instagram.com/p/DeMbik4mzaI/", "tipo": "escena", "etiqueta": "Teatro", "foto": "img/fotos/act-12-fiesta-patria-percovich"},
    {"fecha": "2026-11-07", "hora": "16 h", "titulo": "Mujeres Autoconvocadas: crianza y salud mental", "lugar": "Espacio Colón, Tomás Berreta 323", "localidad": "Canelones", "tipo": "escena", "etiqueta": "Encuentro"},
    {"fecha": "2026-11-07", "titulo": "Patrimonio Rock", "lugar": "Plaza de deportes", "localidad": "Suárez", "instagram": "https://www.instagram.com/p/Dd46gQ2jXcc/", "tipo": "fiesta", "etiqueta": "Música", "foto": "img/fotos/rock-cdlc"},
    {"fecha": "2026-11-07", "hora": "18 h", "titulo": "Presentación del cancionero «Nuestro repertorio», de Mayra Martínez (TUMP)", "lugar": "Centro Cultural Parque del Plata, Calle 13 esq. Mario Ferreira", "localidad": "Parque del Plata", "tipo": "centro", "etiqueta": "Música"},
    {"fecha": "2026-11-07", "fechaFin": "2026-11-08", "hora": "13 a 18 h", "titulo": "Talleres de Artista, primera edición", "lugar": "Talleres de artistas visuales en todo el departamento", "localidad": "Todo el departamento", "instagram": "https://www.instagram.com/p/DePkWksG1Pc/", "tipo": "conv", "etiqueta": "Artes visuales", "foto": "img/fotos/talleres-formacion"},
    {"fecha": "2026-11-12", "hora": "20 h", "titulo": "Canelón Folk", "lugar": "Teatro Politeama, Tomás Berreta 312", "localidad": "Canelones", "tipo": "escena", "etiqueta": "Música"},
    {"fecha": "2026-11-12", "hora": "13 h", "titulo": "Cierre de Extensión Cultural 2026: Marcha por los Derechos y Canciones para Avanzar", "lugar": "Centro Cultural Parque del Plata, Calle 13 esq. Mario Ferreira", "localidad": "Parque del Plata", "tipo": "centro", "etiqueta": "Música"},
    {"fecha": "2026-11-12", "hora": "20 h", "titulo": "Cine Accesible: 10 años del ciclo", "lugar": "Centro Cultural Parque del Plata, Calle 13 esq. Mario Ferreira", "localidad": "Parque del Plata", "tipo": "centro", "etiqueta": "Cine"},
    {"fecha": "2026-11-12", "hora": "20 h", "titulo": "Cine: El baño del Papa", "lugar": "Centro Cultural MIM, Av. Zenón Burgueño esq. Artigas", "localidad": "Soca", "tipo": "centro", "etiqueta": "Cine"},
    {"fecha": "2026-11-12", "hora": "18 h", "titulo": "El presente acechando el pasado, Club de Arte del Liceo Los Cerrillos", "lugar": "Espacio Colón, Tomás Berreta 323", "localidad": "Canelones", "tipo": "escena", "etiqueta": "Artes visuales"},
    {"fecha": "2026-11-12", "hora": "19 h", "titulo": "Semillas de Ansina: documental y taller", "lugar": "Centro Cultural Salinas, Yaguareté y Del Campanario", "localidad": "Salinas", "tipo": "memoria", "etiqueta": "Documental"},
    {"fecha": "2026-11-12", "hora": "19 h", "titulo": "Ser humanos en tiempos de IA", "lugar": "Centro Cultural Ciudad de la Costa, Elías Regules esq. Viejo Pancho", "localidad": "Ciudad de la Costa", "tipo": "centro", "etiqueta": "Charla"},
    {"fecha": "2026-11-12", "hora": "18:30 h", "titulo": "Silencio roto: los fusilados de Soca, un crimen de lesa humanidad, con Mariana Mota", "lugar": "Centro Cultural Carlitos, Av. Artigas esq. Lavalleja", "localidad": "Las Piedras", "tipo": "memoria", "etiqueta": "Charla"},
    {"fecha": "2026-11-12", "fechaFin": "2026-11-15", "titulo": "Festival del Reencuentro, edición 25", "lugar": "Montes", "localidad": "Montes", "tipo": "fiesta", "etiqueta": "Fiesta popular", "foto": "img/fotos/act-13-festival-del-reencuentro"},
    {"fecha": "2026-11-13", "hora": "17 h", "titulo": "Aniversario de los Desayunos Literarios", "lugar": "Centro Cultural Carlitos, Av. Artigas esq. Lavalleja", "localidad": "Las Piedras", "tipo": "centro", "etiqueta": "Libros"},
    {"fecha": "2026-11-13", "hora": "20 h", "titulo": "La Tabaré", "lugar": "Teatro Politeama, Tomás Berreta 312", "localidad": "Canelones", "tipo": "escena", "etiqueta": "Música"},
    {"fecha": "2026-11-13", "hora": "20 h", "titulo": "Rada, la película", "lugar": "Centro Cultural Ciudad de la Costa, Elías Regules esq. Viejo Pancho", "localidad": "Ciudad de la Costa", "tipo": "centro", "etiqueta": "Cine"},
    {"fecha": "2026-11-13", "fechaFin": "2026-11-15", "titulo": "Hacelo Tuyo", "lugar": "Santa Lucía", "localidad": "Santa Lucía", "tipo": "fiesta", "etiqueta": "Festival"},
    {"fecha": "2026-11-14", "hora": "14 h", "titulo": "FERIARTE, feria de emprendedoras y encuentro de artistas", "lugar": "Centro Cultural Parque del Plata, Calle 13 esq. Mario Ferreira", "localidad": "Parque del Plata", "tipo": "centro", "etiqueta": "Feria"},
    {"fecha": "2026-11-14", "hora": "18:30 h", "titulo": "Fiesta Patria, dirigida por Mariana Percovich", "lugar": "Espacio Colón, Tomás Berreta 323", "localidad": "Canelones", "instagram": "https://www.instagram.com/p/DeMbik4mzaI/", "tipo": "escena", "etiqueta": "Teatro", "foto": "img/fotos/act-12-fiesta-patria-percovich"},
    {"fecha": "2026-11-14", "titulo": "Patrimonio Rock: escenario final", "lugar": "Av. Artigas y Treinta y Tres", "localidad": "Pando", "instagram": "https://www.instagram.com/p/Dd46gQ2jXcc/", "tipo": "fiesta", "etiqueta": "Música", "foto": "img/fotos/rock-cdlc"},
    {"fecha": "2026-11-14", "hora": "11 h", "titulo": "Taller de plena para mujeres y disidencias, con Plena Comunera", "lugar": "Centro Cultural Parque del Plata, Calle 13 esq. Mario Ferreira", "localidad": "Parque del Plata", "tipo": "conv", "etiqueta": "Taller"},
    {"fecha": "2026-11-14", "hora": "16 h", "titulo": "Trapos, teatro de objetos para infancias", "lugar": "Centro Cultural Ciudad de la Costa, Elías Regules esq. Viejo Pancho", "localidad": "Ciudad de la Costa", "tipo": "centro", "etiqueta": "Teatro"},
    {"fecha": "2026-11-14", "hora": "20 h", "titulo": "Una noche con Queen-Voices", "lugar": "Teatro Politeama, Tomás Berreta 312", "localidad": "Canelones", "tipo": "escena", "etiqueta": "Música"},
    {"fecha": "2026-11-15", "hora": "16 h", "titulo": "Desafíos actuales frente a la explotación sexual y la trata de personas", "lugar": "Espacio Colón, Tomás Berreta 323 · organiza la Colectiva de Mujeres Autoconvocadas", "localidad": "Canelones", "tipo": "memoria", "etiqueta": "Charla"},
    {"fecha": "2026-11-16", "fechaFin": "2026-12-14", "titulo": "Muestras de Formación Cultural en los municipios", "lugar": "Todos los municipios", "localidad": "Todo el departamento", "tipo": "conv", "etiqueta": "Formación"},
    {"fecha": "2026-11-19", "hora": "20 h", "titulo": "Concierto de estudiantes del Conservatorio de Música", "lugar": "Teatro Politeama, Tomás Berreta 312", "localidad": "Canelones", "tipo": "escena", "etiqueta": "Música"},
    {"fecha": "2026-11-19", "hora": "18 h", "titulo": "Reconocimiento vecinal del grupo de vecinos de la Zona Centro", "lugar": "Centro Cultural Carlitos, Av. Artigas esq. Lavalleja", "localidad": "Las Piedras", "tipo": "centro", "etiqueta": "Reconocimiento"},
    {"fecha": "2026-11-19", "hora": "17:30 h", "titulo": "Rutas en Juego, ludoteca itinerante", "lugar": "Centro Cultural MIM, Av. Zenón Burgueño esq. Artigas", "localidad": "Soca", "tipo": "centro", "etiqueta": "Juego"},
    {"fecha": "2026-11-20", "hora": "18:30 h", "titulo": "5.º aniversario del Centro Cultural Salinas: Dora la Cumbiadora y La Rikotera", "lugar": "Centro Cultural Salinas, Yaguareté y Del Campanario", "localidad": "Salinas", "tipo": "centro", "etiqueta": "Aniversario"},
    {"fecha": "2026-11-20", "hora": "18 h", "titulo": "Apertura de Pulso Sur, festival de danza y percusión de origen africano", "lugar": "Centro Cultural Ciudad de la Costa, Elías Regules esq. Viejo Pancho", "localidad": "Ciudad de la Costa", "tipo": "centro", "etiqueta": "Danza"},
    {"fecha": "2026-11-20", "hora": "20 h", "titulo": "Festival de cine Puentes al Sur", "lugar": "Centro Cultural Parque del Plata, Calle 13 esq. Mario Ferreira", "localidad": "Parque del Plata", "tipo": "centro", "etiqueta": "Cine"},
    {"fecha": "2026-11-20", "hora": "20 h", "titulo": "Juana y los Heladeros del Tango", "lugar": "Centro Cultural MIM, Av. Zenón Burgueño esq. Artigas", "localidad": "Soca", "tipo": "centro", "etiqueta": "Tango"},
    {"fecha": "2026-11-20", "hora": "20 h", "titulo": "La soltería está de moda, con Graciela Rodríguez", "lugar": "Teatro Politeama, Tomás Berreta 312", "localidad": "Canelones", "tipo": "escena", "etiqueta": "Teatro"},
    {"fecha": "2026-11-20", "hora": "18 h", "titulo": "Presentación del libro «Partes de información», de Elina Gómez", "lugar": "Centro Cultural Parque del Plata, Calle 13 esq. Mario Ferreira", "localidad": "Parque del Plata", "tipo": "centro", "etiqueta": "Libros"},
    {"fecha": "2026-11-20", "fechaFin": "2026-11-21", "hora": "17 h", "titulo": "Exporobot, tercera edición", "lugar": "Espacio Colón, Tomás Berreta 323", "localidad": "Canelones", "tipo": "escena", "etiqueta": "Ciencia"},
    {"fecha": "2026-11-21", "hora": "20 h", "titulo": "Orquesta Juvenil: homenaje a Julio Sosa", "lugar": "Teatro Politeama, Tomás Berreta 312", "localidad": "Canelones", "tipo": "escena", "etiqueta": "Música", "foto": "img/fotos/act-14-orquesta-juvenil-julio-sosa"},
    {"fecha": "2026-11-21", "hora": "18 h", "titulo": "Plena Comunera: concierto para adolescentes y familias", "lugar": "Centro Cultural Parque del Plata, Calle 13 esq. Mario Ferreira", "localidad": "Parque del Plata", "tipo": "centro", "etiqueta": "Música"},
    {"fecha": "2026-11-21", "hora": "16 h", "titulo": "Prueba de Admisión Llamadas 2027", "lugar": "Francisco de Menezes, de Solís a Ituzaingó · nueve comparsas", "localidad": "Pando", "instagram": "https://www.instagram.com/p/DeU6nPZm6IJ/", "tipo": "fiesta", "etiqueta": "Carnaval", "foto": "img/fotos/carnaval-candombe"},
    {"fecha": "2026-11-23", "fechaFin": "2026-11-24", "titulo": "Muestras finales de Formación Cultural", "lugar": "Centro Cultural Carlitos, Av. Artigas esq. Lavalleja", "localidad": "Las Piedras", "tipo": "conv", "etiqueta": "Formación"},
    {"fecha": "2026-11-24", "hora": "14 h", "titulo": "Recital de violín y bandoneón del Conservatorio Departamental", "lugar": "Espacio Colón, Tomás Berreta 323", "localidad": "Canelones", "tipo": "escena", "etiqueta": "Música"},
    {"fecha": "2026-11-25", "hora": "19 h", "titulo": "Presentación del libro «Julio Sosa: la voz herida del Varón del Tango», de Adriana Acosta", "lugar": "Centro Cultural Carlitos, Av. Artigas esq. Lavalleja · presenta M. Carámbula", "localidad": "Las Piedras", "tipo": "centro", "etiqueta": "Libros"},
    {"fecha": "2026-11-25", "fechaFin": "2026-11-28", "titulo": "Prueba de Admisión de Murgas y Humoristas", "lugar": "Ciudad de la Costa", "localidad": "Ciudad de la Costa", "tipo": "fiesta", "etiqueta": "Carnaval"},
    {"fecha": "2026-11-26", "hora": "20 h", "titulo": "Banda de Tala", "lugar": "Teatro Politeama, Tomás Berreta 312", "localidad": "Canelones", "tipo": "escena", "etiqueta": "Música"},
    {"fecha": "2026-11-26", "hora": "19 h", "titulo": "Cine: Semillas de Ansina", "lugar": "Centro Cultural Carlitos, Av. Artigas esq. Lavalleja", "localidad": "Las Piedras", "tipo": "memoria", "etiqueta": "Documental"},
    {"fecha": "2026-11-26", "hora": "19 h", "titulo": "Muestra de fin de cursos de Formación Cultural", "lugar": "Centro Cultural MIM, Av. Zenón Burgueño esq. Artigas", "localidad": "Soca", "tipo": "conv", "etiqueta": "Formación"},
    {"fecha": "2026-11-26", "hora": "18:30 h", "titulo": "Recital de guitarra del Conservatorio Departamental", "lugar": "Espacio Colón, Tomás Berreta 323", "localidad": "Canelones", "tipo": "escena", "etiqueta": "Música"},
    {"fecha": "2026-11-26", "fechaFin": "2026-11-27", "hora": "15 h", "titulo": "Muestra de fin de cursos de Formación Cultural", "lugar": "Centro Cultural Salinas, Yaguareté y Del Campanario", "localidad": "Salinas", "tipo": "conv", "etiqueta": "Formación"},
    {"fecha": "2026-11-27", "titulo": "Lobizones y migrantes", "lugar": "Centro Cultural MIM, Av. Zenón Burgueño esq. Artigas", "localidad": "Soca", "tipo": "centro", "etiqueta": "Teatro"},
    {"fecha": "2026-12-03", "hora": "17:30 h", "titulo": "Rutas en Juego, ludoteca itinerante", "lugar": "Centro Cultural MIM, Av. Zenón Burgueño esq. Artigas", "localidad": "Soca", "tipo": "centro", "etiqueta": "Juego"},
    {"fecha": "2026-12-04", "hora": "20 h", "titulo": "Dúo Mesones - Pastrana", "lugar": "Centro Cultural Salinas, Yaguareté y Del Campanario", "localidad": "Salinas", "tipo": "centro", "etiqueta": "Música"},
    {"fecha": "2026-12-05", "hora": "19 h", "titulo": "Coro Hispania", "lugar": "Espacio Colón, Tomás Berreta 323", "localidad": "Canelones", "tipo": "escena", "etiqueta": "Música"},
    {"fecha": "2026-12-05", "titulo": "Fiesta migrante", "lugar": "Dínamo", "localidad": "Atlántida", "tipo": "fiesta", "etiqueta": "Fiesta popular"},
    {"fecha": "2026-12-05", "hora": "20 h", "titulo": "Mediumnidad, con Noelia Pace", "lugar": "Teatro Politeama, Tomás Berreta 312", "localidad": "Canelones", "tipo": "escena", "etiqueta": "Espectáculo"},
    {"fecha": "2026-12-05", "fechaFin": "2026-12-06", "titulo": "Fiesta Frizona", "lugar": "Castellanos", "localidad": "San Bautista", "tipo": "fiesta", "etiqueta": "Fiesta popular"},
    {"fecha": "2026-12-05", "fechaFin": "2026-12-06", "titulo": "Fiesta del Agua", "lugar": "Aguas Corrientes", "localidad": "Aguas Corrientes", "tipo": "fiesta", "etiqueta": "Fiesta popular", "foto": "img/fotos/act-15-fiesta-del-agua"},
    {"fecha": "2026-12-08", "hora": "20 h", "titulo": "El cascanueces", "lugar": "Teatro Politeama, Tomás Berreta 312", "localidad": "Canelones", "tipo": "escena", "etiqueta": "Danza"},
    {"fecha": "2026-12-09", "titulo": "150 años de San Jacinto: acto protocolar, desfile escolar y chasques", "lugar": "Frente a Plaza María Vera", "localidad": "San Jacinto", "tipo": "fiesta", "etiqueta": "Aniversario"},
    {"fecha": "2026-12-10", "hora": "19 h", "titulo": "Inauguración de «Pájaro libre, de libre vuelo», de Alejandro Fernández", "lugar": "Centro Cultural Salinas, Yaguareté y Del Campanario", "localidad": "Salinas", "tipo": "centro", "etiqueta": "Artes visuales"},
    {"fecha": "2026-12-10", "hora": "20 h", "titulo": "Pa' Bailar, Orquesta Departamental de Canelones", "lugar": "Teatro Politeama, Tomás Berreta 312", "localidad": "Canelones", "tipo": "escena", "etiqueta": "Música"},
    {"fecha": "2026-12-11", "titulo": "150 años de San Jacinto: festejo aniversario", "lugar": "Plaza María Vera · escenario, bandas y feria de artesanos", "localidad": "San Jacinto", "tipo": "fiesta", "etiqueta": "Aniversario", "foto": "img/fotos/act-17-150-anos-san-jacinto"},
    {"fecha": "2026-12-11", "hora": "20 h", "titulo": "El Godzillazo, Las Antenas", "lugar": "Teatro Politeama, Tomás Berreta 312", "localidad": "Canelones", "tipo": "escena", "etiqueta": "Espectáculo"},
    {"fecha": "2026-12-11", "titulo": "Jam de la Costa + Julieta Rada", "lugar": "Centro Cultural Ciudad de la Costa, Elías Regules esq. Viejo Pancho", "localidad": "Ciudad de la Costa", "tipo": "centro", "etiqueta": "Música"},
    {"fecha": "2026-12-11", "hora": "20 h", "titulo": "Recital: Un mismo latir", "lugar": "Centro Cultural Salinas, Yaguareté y Del Campanario", "localidad": "Salinas", "tipo": "centro", "etiqueta": "Música"},
    {"fecha": "2026-12-11", "fechaFin": "2026-12-13", "titulo": "Fiesta del Pollo y la Gallina", "lugar": "San Bautista", "localidad": "San Bautista", "instagram": "https://www.instagram.com/reel/DehO_5jxkMl/", "tipo": "fiesta", "etiqueta": "Fiesta popular", "foto": "img/fotos/act-16-fiesta-pollo-y-gallina"},
    {"fecha": "2026-12-12", "hora": "20 h", "titulo": "Cierre anual del Centro Cultural Parque del Plata: Pitufo Lombardo, Rossana Taddei y La Papayera Sintrópica", "lugar": "Centro Cultural Parque del Plata, Calle 13 esq. Mario Ferreira", "localidad": "Parque del Plata", "tipo": "centro", "etiqueta": "Música"},
    {"fecha": "2026-12-12", "hora": "20 h", "titulo": "Liquidación por cierre, Masones", "lugar": "Teatro Politeama, Tomás Berreta 312", "localidad": "Canelones", "tipo": "escena", "etiqueta": "Espectáculo"},
    {"fecha": "2026-12-12", "titulo": "Llamada por el Día Nacional del Candombe", "lugar": "Las Piedras", "localidad": "Las Piedras", "tipo": "memoria", "etiqueta": "Candombe", "foto": "img/fotos/carnaval-candombe"},
    {"fecha": "2026-12-19", "fechaFin": "2026-12-20", "titulo": "Aniversario de Santa Lucía", "lugar": "Santa Lucía", "localidad": "Santa Lucía", "tipo": "fiesta", "etiqueta": "Aniversario"},
    {"fecha": "2027-01-28", "titulo": "Canelones Suena Bien 2027", "lugar": "Segunda noche el sábado 30 · grilla completa en diciembre", "localidad": "Todo el departamento", "instagram": "https://www.instagram.com/reel/DdXKM43R6pd/", "tipo": "fiesta", "etiqueta": "Festival", "foto": "img/fotos/csb-escenario"},
  ],

  cronicas: [
    {"fecha": "2026-10-27", "titulo": "40 egresados de Proyectar la Cultura", "texto": "Cuarenta referentes de Canelones culminaron la formación de Proyectar la Cultura, el espacio público de formación en gestión cultural que sigue creciendo en nuestro departamento.", "localidad": "", "tipo": "conv", "url": "https://www.instagram.com/p/DfAu8RqG5mE/"},
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

  /* Créditos de las fotos tomadas de Wikimedia Commons (licencias libres que piden nombrar al autor).
     Las fotos se muestran en escala de grises y color de programa, y recortadas: son adaptaciones. Aparecen en el pie de la página. */
  creditosFotos: [
    {"actividad": "Ave Fénix Cuarteto de Cuerdas", "autor": "Gerda Arendt", "licencia": "CC BY-SA 4.0", "url": "https://commons.wikimedia.org/wiki/File:Casals_Forum,_Arensky_string_quartet.jpg"},
    {"actividad": "Semillas de Ansina", "autor": "VanesaValdez", "licencia": "CC BY-SA 3.0", "url": "https://commons.wikimedia.org/wiki/File:Ansina_III.JPG"},
    {"actividad": "Rada, la película", "autor": "Bicentenario Uruguay", "licencia": "CC BY-SA 2.0", "url": "https://commons.wikimedia.org/wiki/File:Ruben_Rada_2015-3.jpg"},
    {"actividad": "Reikiavik", "autor": "Charrúa Fever", "licencia": "CC BY-SA 3.0", "url": "https://commons.wikimedia.org/wiki/File:Interior_del_Teatro_Sol%C3%ADs-3.JPG"},
    {"actividad": "Día Internacional de las Bibliotecas", "autor": "Ngostary2k", "licencia": "CC BY-SA 4.0", "url": "https://commons.wikimedia.org/wiki/File:Children%27s_reading_in_Public_Library_05.jpg"},
    {"actividad": "Maia Castro, 20 años de trayectoria", "autor": "Intendencia de Montevideo", "licencia": "CC BY-SA 4.0", "url": "https://commons.wikimedia.org/wiki/File:Maia_Castro_en_la_Semana_Criolla_2022_mzz8160.jpg"},
    {"actividad": "Día y Noche de las Bibliotecas", "autor": "Mariahuarteb", "licencia": "CC BY 4.0", "url": "https://commons.wikimedia.org/wiki/File:Sala_de_Lectura_Silenciosa_-_Biblioteca_P%C3%BAblica_UNLP_1.jpg"},
    {"actividad": "Tributo a Paco de Lucía", "autor": "Antonio from Mijas, España", "licencia": "CC BY-SA 2.0", "url": "https://commons.wikimedia.org/wiki/File:Paco_de_Luc%C3%ADa_M%C3%A1laga.jpg"},
    {"actividad": "Encuentro de teatro China Zorrilla", "autor": "Autor desconocido", "licencia": "Dominio público", "url": "https://commons.wikimedia.org/wiki/File:China_Zorrilla_as_Emily_Dickinson.jpg"},
    {"actividad": "Aniversario del Centro Cultural MIM", "autor": "joergens.mi", "licencia": "CC BY-SA 3.0", "url": "https://commons.wikimedia.org/wiki/File:Maddis%27son_Brass_Band_(ZMF_2023)_jm164442.jpg"},
    {"actividad": "Coro Departamental de Canelones", "autor": "FingerWiki", "licencia": "CC BY 4.0", "url": "https://commons.wikimedia.org/wiki/File:Amadeus_Chamber_Choir_conducted_by_Anna_Kudelkina,_Murmansk_Regional_Philharmonic,_2018.jpg"},
    {"actividad": "Fiesta Patria", "autor": "Ignacio Turell", "licencia": "CC BY-SA 4.0", "url": "https://commons.wikimedia.org/wiki/File:Obra_Carne_Viva_de_la_Comedia_Nacional_-_20250410dicimouyit3013.jpg"},
    {"actividad": "Festival del Reencuentro", "autor": "Shixart1985", "licencia": "CC BY 2.0", "url": "https://commons.wikimedia.org/wiki/File:Musicians_perform_live_on_stage_at_an_outdoor_festival_in_the_evening.jpg"},
    {"actividad": "Orquesta Juvenil", "autor": "Gerda Arendt", "licencia": "CC0", "url": "https://commons.wikimedia.org/wiki/File:Youth_Symphony_Orchestra_of_Ukraine,_Casals_Forum.jpg"},
    {"actividad": "Fiesta del Agua", "autor": "Marcelo Campi", "licencia": "CC BY-SA 3.0", "url": "https://commons.wikimedia.org/wiki/File:Aguas_Corrientes_(169522447).jpeg"},
    {"actividad": "Fiesta del Pollo y la Gallina", "autor": "Fernando Losada Rodríguez", "licencia": "CC BY-SA 4.0", "url": "https://commons.wikimedia.org/wiki/File:Gallus_gallus_domesticus.001_-_Campa%C3%B1%C3%B3.jpg"},
    {"actividad": "150 años de San Jacinto", "autor": "Nathersil", "licencia": "CC BY-SA 4.0", "url": "https://commons.wikimedia.org/wiki/File:San_Jacinto_Canelones.jpg"}
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

  actualizado: '29 de octubre de 2026'
};
