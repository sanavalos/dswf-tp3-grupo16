import ComicPage from "./ComicPage.jsx";
import ButtonsSection from "../../components/buttons-section";
import styles from "./Avalos.module.css";

function Avalos() {
  return (
    <div className={styles.pageContainer}>
      <ButtonsSection buttonData={[{ text: "portada", url: "/" }]} />
      <ComicPage />
      <ButtonsSection
        buttonData={[
          { text: "anterior", url: "/paguaga" },
          { text: "siguiente", url: "/paguaga" }
        ]}
      />
    </div>
  );
}

export default Avalos;
