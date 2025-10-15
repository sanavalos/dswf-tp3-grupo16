import React from 'react'
import Button from './Button.jsx'
import styles from './ButtonsSection.module.css'

function ButtonsSection({ buttonsText }) {
  return (
    <div className={styles.buttonsWrapper}>
      {buttonsText.map((text, index) => (
      <div className={styles.prevWrapper}>
        <Button key={index} text={text} pointForward={text == 'siguiente'} />
      </div>
      ))}
    </div>

  )
}

export default ButtonsSection
