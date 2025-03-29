import { ReactNode } from "react";

import MingcuteLinkedinLine from "../../icons/MingcuteLinkedinLine.tsx";
import MingcuteTelegramLine from "../../icons/MingcuteTelegramLine.tsx";
import MingcuteInstagramLine from "../../icons/MingcuteInstagramLine.tsx";

import kojaberam from '../../icons/kojaberam.jpeg'

import styles from "./Footer.module.css";

function Footer(): ReactNode {
  return (

    <footer className={styles.footer}>

      <div className={styles.writings}>
        <div className={styles.logo}>کجا؛ برم</div>
        <p className={styles.description}>
     بهترین راهنمایی مکان های گردشگری شهر تهران
        </p>
      </div>

      <div className={styles.visuals}>
          <div className={styles.certificates}>
          <img src={kojaberam}/>
          </div>
        <ul className={styles.socials}>
          <li>
            <MingcuteTelegramLine />
          </li>
          <li>
            <MingcuteLinkedinLine />
          </li>
          <li>
            <MingcuteInstagramLine />
          </li>
        </ul>
      </div>
      <p className={styles.copy}>
        تمامی حقوق مادی و معنوی این وب‌سایت، خدمات و محتوای مربوط به آن متعلق به
        امیر صبری می‌باشد!
      </p>
    </footer>
  );
}

export default Footer;
