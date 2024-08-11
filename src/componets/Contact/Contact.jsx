import React from 'react'
import styles from "./Contact.module.css";
import { getImageUrl } from '../../utlis';

export const Contact = () => {
  return <footer id = "contact" className={styles.container}>
    <div className={styles.text}><h2>Contact</h2></div>
    <ul className={styles.links}>
        <li className={styles.link}>
            <img src={getImageUrl("contact/email.png")}
             alt="Email icon"/>
            < a href="mailto:sargamrastogi8@gmail.com">
                sargamrastogi8@gmail.com</a>
        </li>
        <li className={styles.link}>
            <img src={getImageUrl("contact/linkedin.png")}
             alt="Email icon"/>
            < a href="https://www.linkedin.com/in/sargam-rastogi15">
                linkedin.com/sargamrastogi</a>
        </li>
        <li className={styles.link}>
            <img src={getImageUrl("contact/github.png")}
             alt="Email icon"/>
            < a href="https://linkedin.com/in/sargam-rastogi15">
                github.com/sargamrastogi</a>
        </li>
    </ul>
  </footer>;
};
