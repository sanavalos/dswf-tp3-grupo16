import { Outlet } from "react-router";
import Sidebar from "../sidebar";
import styles from "./Layout.module.css";

function Layout() {
  return (
    <>
      <div className={styles.layoutBackground}>
        <Sidebar />

        <main>
          {/* Render route child component */}
          <Outlet />
        </main>
      </div>
      <footer></footer>
    </>
  );
}

export default Layout;
