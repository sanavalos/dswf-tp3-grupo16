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

export default function Bitacora() {
  const [activeTP, setActiveTP] = useState("tp2");

  const entradas = activeTP === "tp1" ? entradasTp1 : entradasTp2;

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
      </div>

      <BitacoraItems entradas={entradas} />
    </section>
  );
}
