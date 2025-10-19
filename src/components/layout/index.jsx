import { Outlet } from "react-router";
import Sidebar from "../sidebar";
import Footer from "../footer";
import styles from "./Layout.module.css";

function Layout() {
  return (
    <div className={styles.layoutContainer}>
      <div className={styles.layoutBackground}>
        <Sidebar />

        <main className={styles.mainWrapper}>
          {/* Render route child component */}
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
