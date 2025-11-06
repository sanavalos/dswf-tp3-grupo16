import React, { useState } from "react";
import BitacoraItems from "./BitacoraItems.jsx";
import Title from "../../components/title";
import styles from "./Bitacora.module.css";

const entradasTp1 = [
  {
    titulo: "Etapa 1: Conociendo el equipo y las herramientas",
    descripcion:
      "Nos familiarizamos con los miembros del equipo de desarrollo y exploramos las tecnologías, frameworks y herramientas que utilizaremos durante todo el proyecto.",
    fecha: "05/09/2025",
  },
  {
    titulo: "Etapa 2: Estructuracion de archivos",
    descripcion:
      "Organizamos la arquitectura del proyecto creando una estructura de carpetas clara y definiendo la jerarquía de archivos que facilitará la mantenibilidad.",
    fecha: "10/09/2025",
  },
  {
    titulo: "Etapa 3: Desarrollo de tarjetas personalizadas",
    descripcion:
      "Implementamos la funcionalidad principal diseñando y programando las tarjetas personalizadas con sus respectivas características, estilos y comportamientos interactivos.",
    fecha: "14/09/2025",
  },
  {
    titulo: "Etapa 4: Revisión de errores y mejoras",
    descripcion:
      "Realizamos pruebas exhaustivas, identificamos y corregimos bugs, optimizamos el rendimiento y pulimos detalles para garantizar la calidad del producto.",
    fecha: "22/09/2025",
  },
  {
    titulo: "Etapa 5: Entrega de proyecto",
    descripcion:
      "Preparamos la documentación completa, implementamos en producción y entregamos el proyecto terminado al cliente con instrucciones de uso.",
    fecha: "26/09/2025",
  },
];

const entradasTp2 = [
  {
    titulo: "Etapa 1: Planificación y Revisión TP1",
    descripcion:
      "Revisamos el TP1 y definimos los objetivos y alcance del TP2. Se asignaron roles dentro del equipo y se planificó la migración del sitio estático a React.",
    fecha: "28/09/2025",
  },
  {
    titulo: "Etapa 2: Configuración del proyecto React",
    descripcion:
      "Se creó un nuevo repositorio en GitHub y se inicializó el proyecto utilizando Vite en lugar de Create React App, seleccionando React + JSX. Se estableció la estructura básica de carpetas y se integraron dependencias iniciales necesarias para el desarrollo del TP2.",
    fecha: "01/10/2025",
  },
  {
    titulo: "Etapa 3: Componentización y Sidebar",
    descripcion:
      "Diseñamos componentes reutilizables para la barra lateral (Sidebar), tarjetas y secciones. Implementamos navegación SPA mediante React Router.",
    fecha: "05/10/2025",
  },
  {
    titulo: "Etapa 4: Migración de contenido TP1",
    descripcion:
      "Migramos secciones del TP1 a React: Portada, Bitácora e Integrantes. Se adaptaron estilos y se implementó el cambio dinámico de contenido mediante props y estado.",
    fecha: "10/10/2025",
  },
  {
    titulo: "Etapa 5: Integración de datos desde archivo JSON",
    descripcion:
      "Creamos un archivo JSON y se desarrolló una sección que los muestra en tarjetas dinámicas, practicando manejo de datos locales y renderizado dinámico.",
    fecha: "15/10/2025",
  },
  {
    titulo: "Etapa 6: Consumo de API pública",
    descripcion:
      "Seleccionamos una API pública y mostramos los resultados en tarjetas, implementando fetch, manejo de promesas y estados para datos asíncronos.",
    fecha: "17/10/2025",
  },
  {
    titulo: "Etapa 7: Diagramas y documentación",
    descripcion:
      "Elaboramos diagramas de árbol de renderizado y de organización de carpetas. Se generaron archivos PNG para incluir en la entrega, asegurando claridad y legibilidad.",
    fecha: "18/10/2025",
  },
  {
    titulo: "Etapa 8: Pruebas finales y entrega",
    descripcion:
      "Se realizaron pruebas de funcionalidad y responsividad. Se actualizó el README, se verificó el deploy en Vercel y se subieron todos los archivos al repositorio de GitHub para la entrega final.",
    fecha: "20/10/2025",
  },
];

const entradasTp3 = [
  {
    titulo: "Etapa 1: Planificación y organización inicial",
    descripcion:
      "Nos reunimos para revisar los objetivos del TP3, definir las nuevas tareas y seleccionar las 5 mejoras obligatorias a implementar. Se creó un nuevo repositorio exclusivo para esta entrega, así como el entorno de despliegue en Vercel.",
    fecha: "26/10/2025",
  },
  {
    titulo: "Etapa 2: División de tareas y creación del Trello",
    descripcion:
      "Creamos un tablero de Trello para organizar las tareas y trabajar de manera asincrónica. Cada integrante tomó responsabilidad sobre una o más mejoras, garantizando la distribución equitativa del trabajo.",
    fecha: "27/10/2025",
  },
  {
    titulo: "Etapa 3: Implementación de mejoras seleccionadas",
    descripcion:
      "Cada integrante trabajó en su parte: se agregaron animaciones suaves en transiciones, búsqueda y filtrado en JSON, paginación para la API, una galería interactiva con lightbox y barras de progreso en los perfiles.",
    fecha: "02/11/2025",
  },
  {
    titulo: "Etapa 4: Revisión de código y pruebas colaborativas",
    descripcion:
      "Realizamos una code review grupal para revisar la coherencia del código, la consistencia visual y la adaptabilidad en distintos dispositivos. Se corrigieron detalles y se mejoró la responsividad del sitio.",
    fecha: "05/11/2025",
  },
  {
    titulo: "Etapa 5: Documentación y entrega final",
    descripcion:
      "Actualizamos el archivo README.md documentando las mejoras implementadas con capturas de antes y después. Finalmente, realizamos la entrega oficial subiendo los enlaces de GitHub y Vercel en la planilla de entrega.",
    fecha: "06/11/2025",
  },
];

export default function Bitacora() {
  const [activeTP, setActiveTP] = useState("tp3");

  const entradas =
    activeTP === "tp1"
      ? entradasTp1
      : activeTP === "tp2"
      ? entradasTp2
      : entradasTp3;

  return (
    <section className={styles.bitacoraContainer}>
      <Title title="BITÁCORA" />

      <div className={styles.tpButtons}>
        <button
          className={activeTP === "tp1" ? styles.active : ""}
          onClick={() => setActiveTP("tp1")}
        >
          TP1
        </button>
        <button
          className={activeTP === "tp2" ? styles.active : ""}
          onClick={() => setActiveTP("tp2")}
        >
          TP2
        </button>
        <button
          className={activeTP === "tp3" ? styles.active : ""}
          onClick={() => setActiveTP("tp3")}
        >
          TP3
        </button>
      </div>

      <BitacoraItems key={activeTP} entradas={entradas} />
    </section>
  );
}
