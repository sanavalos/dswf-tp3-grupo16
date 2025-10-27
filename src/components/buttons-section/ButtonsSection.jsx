import React from "react";
import Button from "../button";
import styles from "./ButtonsSection.module.css";

function ButtonsSection({ buttonData }) {
  return (
    <div className={styles.buttonsWrapper}>
      {buttonData.map((bt, index) => (
        <div className={styles.prevWrapper}>
          <Button
            key={index}
            text={bt.text}
            url={bt.url}
            pointForward={bt.text == "siguiente"}
          />
        </div>
      ))}
    </div>
  );
}

export default ButtonsSection;
