import { Outlet } from 'react-router';
import Sidebar from '../sidebar'
import styles from "./Layout.module.css"

function Layout() {
  return (
   <>
    <div className={styles.layoutBackground}>
      <Sidebar />

      <main className={styles.mainWrapper}>
        {/* Render route child component */}
        <Outlet />
      </main>
      
    </div>
    <footer>
    </footer>
   </>
  );
}

export default Layout;