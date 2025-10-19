# Trabajo Práctico Obligatorio 2

## DESCRIPCION

Somos un grupo de cinco desarrolladores web apasionados por la tecnología y en constante formación. Actualmente nos encontramos cursando la carrera de Desarrollo de Software, lo que nos permite combinar la práctica profesional con una base académica sólida.

El enfoque de este proyecto es darnos a conocer con nuestros compañeros y crecer como profesionales mientras participamos durante el proyecto, fomentando la colaboración, la innovación y la mejora continua.

Incluye una SPA (Single Page Application) con paginación y componentes que permiten el acceso a una portada con información sobre el proyecto, a las tarjetas de los integrantes, secciones donde se consume un archivo JSON y una API, y a la bitácora.

## TECNOLOGIAS UTILIZADAS

- JSX
- CSS
- JavaScript
- React.js
- React Router
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
│   package-lock.json
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
    │       ifts.jpeg
    │       ivanna.png
    │       joker.jpg
    │       matrix.jpg
    │       paguaga.png
    │       sanchez.jpeg
    │
    └───components
        ├───avalos
        │       Avalos.module.css
        │       Button.jsx
        │       Button.module.css
        │       ButtonsSection.jsx
        │       ButtonsSection.module.css
        │       ComicPage.jsx
        │       ComicPage.module.css
        │       index.jsx
        │
        ├───bitacora
        │       Bitacora.module.css
        │       BitacoraItems.jsx
        │       index.jsx
        │
        ├───footer
        │       Footer.module.css
        │       index.jsx
        │
        ├───homepage
        │       Homepage.module.css
        │       index.jsx
        │
        ├───paguaga
        │       BotonNavegacion.jsx
        │       BotonNavegacion.module.css
        │       Habilidad.jsx
        │       Habilidad.module.css
        │       index.jsx
        │       index.module.css
        │       ModalTrailer.jsx
        │       ModalTrailer.module.css
        │       Slide.jsx
        │       Slider.jsx
        │       Slider.module.css
        │       Spotify.jsx
        │       Spotify.module.css
        │       Tarjeta.jsx
        │       Tarjeta.module.css
        │
        ├───scroll-to-top
        │       index.jsx
        │
        ├───seccion-api
        │       index.jsx
        │       MovieCard.jsx
        │       MovieCard.module.css
        │       MovieCardList.jsx
        │       MovieCardList.module.css
        │       MovieModal.jsx
        │       MovieModal.module.css
        │       MovieSection.module.css
        │
        ├───seccion-json
        │       DirectorCard.jsx
        │       DirectorCard.module.css
        │       index.jsx
        │       MovieDirectorList.module.css
        │
        └───sidebar
                index.jsx
                Sidebar.module.css
                SidebarItem.jsx
                SidebarItem.module.css
```

## LINKS

Deploy: [dswf-tp2-grupo16.vercel.app](https://dswf-tp2-grupo16.vercel.app)

GitHub: [dswf-tp2-grupo16](https://github.com/sanavalos/dswf-tp2-grupo16)

