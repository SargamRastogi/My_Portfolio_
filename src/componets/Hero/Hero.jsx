import React from 'react';
import styles from "./Hero.module.css";
import { getImageUrl } from '../../utlis'

export const Hero = () => {
  return (
    < section className={styles.container}>
<div className={styles.content}>
    <h1 className={styles.title}>
        Hi, I'm Sargam Rastogi
    </h1>
    <p className={styles.description}>
    I'm front-end developer skilled in HTML, CSS, JavaScript, React, and Node.js and with good knowledge of Java and Data Structures & Algorithms. I am eager to learn and create outstanding websites.
    </p>
    <a href = "mailto: sargamrastogi8@gmail.com" className={styles.contactBtn}>Contact Me</a>
</div>
<img src={getImageUrl("hero/heroImage.png")} alt = "Hero Image of me" className={styles.heroImg}/>
   <div className={styles.topBlur}/>
   <div className={styles.BottomBlur}/>
    </section>
    
  );
};

