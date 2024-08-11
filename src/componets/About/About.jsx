import React from 'react'
import styles from "./About.module.css";
import { getImageUrl } from '../../utlis'

export const About = () => {
  return (
    <section className={styles.container} id='about'>
        <h2 className={styles.title}>
            About
        </h2>
        <div className={styles.content}> <img src = {getImageUrl("about/aboutImgblack.png")}
         alt="Me sitting with my laptop" className={styles.aboutImage}/>
         <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
                < img src = {getImageUrl("about/cursor.png")} alt= "cursor icon" className={styles.cursor1} />
        <div className={styles.aboutItemText}>
            <h3>Frontend Developer</h3>
            <p>
             I'm a frontend developer proficient in building responsive and optimized sites.
            </p>
        </div>
        </li>
        <li className={styles.aboutItem}>
            < img src = {getImageUrl("about/cursor.png")} alt= "cursor icon" className={styles.cursor2}/> 
            <div className={styles.aboutItemText}>
            <h3>Software Programmer</h3>
            <p>
            I am skilled in designing, building, and maintaining software applications using Java, with a focus on functionality, reliability, and meeting specifications </p>
        </div>
        </li>
        </ul>
         </div>
    </section>
  );
}; 
