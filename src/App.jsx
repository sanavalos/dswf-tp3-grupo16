import { Outlet } from "react-router";
import Sidebar from "./components/sidebar";
import Footer from "./components/footer";
import styles from "./App.module.css";

function App() {
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

export default App;
