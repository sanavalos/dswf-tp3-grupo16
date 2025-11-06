# Trabajo Práctico Obligatorio 2

## DESCRIPCION

Somos un grupo de tres desarrolladores web apasionados por la tecnología y en constante formación. Actualmente nos encontramos cursando la carrera de Desarrollo de Software, lo que nos permite combinar la práctica profesional con una base académica sólida.

El enfoque de este proyecto es darnos a conocer con nuestros compañeros y crecer como profesionales mientras participamos durante el proyecto, fomentando la colaboración, la innovación y la mejora continua.

Incluye una SPA (Single Page Application) con paginación y componentes que permiten el acceso a una portada con información sobre el proyecto, a las tarjetas de los integrantes, secciones donde se consume un archivo JSON y una API, y a la bitácora.

## TECNOLOGIAS UTILIZADAS

- JSX
- CSS
- JavaScript
- React.js
- React Router
- Animate.css
- Vite
- Vercel

## ESTRUCTURA DE ARCHIVOS

Los archivos en la raíz como package.json, vite.config.js, index.html y eslint.config.js son esenciales para la configuración del proyecto, dependencias, build y linteo de código, mientras que la carpeta public contiene como activo estático un archivo de datos (directors-data.json) accesible directamente.

La lógica principal reside en el directorio src, con main.jsx como punto de entrada que renderiza la aplicación definida en App.jsx. Dentro de src, la carpeta assets almacena recursos multimedia, y components es el corazón de la aplicación, agrupando la interfaz en módulos reutilizables (como avalos, paguaga, seccion-api, homepage, etc.), cada uno con sus propios archivos de lógica (.jsx) y estilos modulares (.module.css), facilitando un desarrollo escalable, mantenible y basado en componentes.

```bash
.
│   .gitignore
│   eslint.config.js
│   index.html
│   package.json
│   README.md
│   vercel.json
│   vite.config.js
│
├───public
│       directors-data.json      
│
└───src
    │   App.jsx
    │   App.module.css
    │   index.css
    │   main.jsx
    │
    ├───assets
    │       avalos.png
    │       el_origen.jpg
    │       halftone_bg.avif
    │       joker.jpg
    │       matrix.jpg
    │       paguaga.png
    │       reactivos.jpeg
    │       structure_diagram.png
    │       tree_diagram.png
    │
    ├───components
    │   ├───boton-navegacion
    │   │       BotonNavegacion.module.css
    │   │       index.jsx
    │   │
    │   ├───button
    │   │       Button.module.css
    │   │       index.jsx
    │   │       
    │   ├───buttons-section
    │   │       ButtonsSection.module.css
    │   │       index.jsx
    │   │
    │   ├───director-card
    │   │       DirectorCard.module.css
    │   │       index.jsx
    │   │
    │   ├───footer
    │   │       Footer.module.css
    │   │       index.jsx
    │   │
    │   ├───habilidad
    │   │       Habilidad.module.css
    │   │       index.jsx
    │   │
    │   ├───image-gallery
    │   │       ImageGallery.module.css
    │   │       index.jsx
    │   │
    │   ├───lightbox
    │   │       index.jsx
    │   │       Lightbox.module.css
    │   │
    │   ├───modal-trailer
    │   │       index.jsx
    │   │       ModalTrailer.module.css
    │   │
    │   ├───movie-card
    │   │       index.jsx
    │   │       MovieCard.module.css
    │   │
    │   ├───scroll-to-top
    │   │       index.jsx
    │   │
    │   ├───sidebar
    │   │       index.jsx
    │   │       Sidebar.module.css
    │   │       SidebarItem.jsx
    │   │       SidebarItem.module.css
    │   │
    │   ├───slider
    │   │       index.jsx
    │   │       Slide.jsx
    │   │       Slider.module.css
    │   │
    │   ├───spotify
    │   │       index.jsx
    │   │       Spotify.module.css
    │   │
    │   └───title
    │           index.jsx
    │           Title.module.css
    │
    └───pages
        ├───avalos
        │       Avalos.module.css
        │       ComicPage.jsx
        │       ComicPage.module.css
        │       index.jsx
        │
        ├───bitacora
        │       Bitacora.module.css
        │       BitacoraItems.jsx
        │       index.jsx
        │
        ├───diagramas
        │       DiagramItems.jsx
        │       Diagrams.module.css
        │       index.jsx
        │
        ├───directores
        │       index.jsx
        │       MovieDirectorList.module.css
        │
        ├───estrenos
        │       index.jsx
        │
        ├───homepage
        │       Homepage.module.css
        │       index.jsx
        │
        ├───not-found
        │       index.jsx
        │       NotFound.module.css
        │
        ├───paguaga
        │       index.jsx
        │       index.module.css
        │       Tarjeta.jsx
        │       Tarjeta.module.css
        │
        └───peliculas
                index.jsx
                MovieCardList.jsx
                MovieCardList.module.css
                MovieModal.jsx
                MovieModal.module.css
                MovieSection.module.css
```

## LINKS

Deploy: [dswf-tp2-grupo16.vercel.app](https://dswf-tp2-grupo16.vercel.app)

GitHub: [dswf-tp2-grupo16](https://github.com/sanavalos/dswf-tp2-grupo16)

