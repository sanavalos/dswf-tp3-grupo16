import React from "react";
import styles from "./Sidebar.module.css";
import SidebarItem from "./SidebarItem";
import ifts from "../../assets/ifts.jpeg";

function Sidebar() {
  const sidebarItems = [
    { id: "1", name: "Portada", path: "/" },
    { id: "2", name: "Bitácora", path: "/bitacora" },
    { id: "3", name: "Sobre Nosotros", path: "/sobre-nosotros" },
    { id: "4", name: "Integrantes", path: "/integrantes" },
    { id: "5", name: "Sección JSON", path: "/seccion-json" },
    { id: "6", name: "Sección API", path: "/seccion-api" }
  ];
  return (
    <div className={styles.sidebarSection}>
      <img src={ifts} className={styles.logo} />
      <ul>
        {sidebarItems.map((item) => (
          <SidebarItem data={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
