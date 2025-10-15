import React from 'react'
import ComicPage from './ComicPage.jsx'
import ButtonsSection from './ButtonsSection.jsx'
import styles from './Avalos.module.css'
function Avalos() {
  return (
   <div className={styles.pageContainer}>
    <ButtonsSection buttonsText={['portada']}/>
    <ComicPage/>
    <ButtonsSection buttonsText={['anterior', 'siguiente']}/>
    </div>
  )
}

export default Avalos