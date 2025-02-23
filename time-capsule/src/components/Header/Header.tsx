import { ReactNode } from "react";

import styles from "./Header.module.css";

function Header(): ReactNode {
  return (
    <header className={styles.title}>
      <h1>Time Capsules</h1>
    </header>
  );
}

export default Header;
