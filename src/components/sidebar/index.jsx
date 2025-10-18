import React, { useState } from "react";
import styles from "./Sidebar.module.css";
import SidebarItem from "./SidebarItem";
import ifts from "../../assets/ifts.jpeg";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const sidebarItems = [
    { id: "1", name: "Portada", path: "/#titulo-variable" },
    { id: "2", name: "Bitácora", path: "/bitacora" },
    { id: "3", name: "Sobre Nosotros", path: "/#nosotros" },
    { id: "4", name: "Integrantes", path: "/#integrantes" },
    { id: "5", name: "Sección JSON", path: "/seccion-json" },
    { id: "6", name: "Sección API", path: "/seccion-api" },
  ];

  return (
    <div className={`${styles.sidebarSection} ${!isOpen ? styles.closed : ""}`}>
      <button className={styles.toggleButton} onClick={toggleSidebar}>
        {isOpen ? "<<" : ">>"}
      </button>

      <div className={styles.sidebarContent}>
        <img src={ifts} className={styles.logo} alt="Logo" />
        <ul>
          {sidebarItems.map((item) => (
            <SidebarItem data={item} key={item.id} isOpen={isOpen} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
