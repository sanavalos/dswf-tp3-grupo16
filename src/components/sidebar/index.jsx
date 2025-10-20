import React, { useState, useEffect } from "react";
import styles from "./Sidebar.module.css";
import SidebarItem from "./SidebarItem";
import ifts from "../../assets/ifts.jpeg";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
  const toggleSidebar = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 600;
      setIsMobile(mobile);
      if (mobile) setIsOpen(false);
      else setIsOpen(true);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sidebarItems = [
    { id: "1", name: "Portada", path: "/#titulo-variable" },
    { id: "2", name: "Bitácora", path: "/bitacora" },
    { id: "3", name: "Diagramas", path: "/diagramas" },
    { id: "4", name: "Sobre Nosotros", path: "/#nosotros" },
    { id: "5", name: "Integrantes", path: "/#integrantes" },
    { id: "6", name: "Sección JSON", path: "/seccion-json" },
    { id: "7", name: "Sección API", path: "/seccion-api" },
  ];

  return (
    <>
      {isMobile && !isOpen && (
        <button className={styles.hamburger} onClick={toggleSidebar}>
          ☰
        </button>
      )}

      <div
        className={`${styles.sidebarSection} ${
          isOpen ? styles.mobileOpen : styles.mobileClosed
        } ${isMobile ? styles.mobile : ""}`}
      >
        {isMobile && (
          <button className={styles.toggleButton} onClick={toggleSidebar}>
            ×
          </button>
        )}

        <div className={styles.sidebarContent}>
          <img src={ifts} className={styles.logo} alt="Logo" />
          <ul>
            {sidebarItems.map((item) => (
              <SidebarItem data={item} key={item.id} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
