import { ReactNode } from "react";

import {Link, NavLink} from "react-router";

import kojaberam from '../../icons/kojaberam.jpeg'

import styles from "./Header.module.css";
import clsx from "clsx";

type NavItem  = {
    title : string,
    href : string
}

const navItem : NavItem[] =  [
    {title : 'خانه' , href : '/'},
    {title : 'درباره ما' , href : '/about'},
    {title : 'تماس با ما' , href : '/contact'},
    {title : 'راهنمای سفر' , href : '/ravel-Guide'}
]

function Header(): ReactNode {
  return (
    <div className={styles["header"]}>
      <Link to={'/'}  className={styles.logo}><img src={kojaberam} /></Link>

        <nav>
            <ul>
                {navItem.map(item => (
                    <li key={item.title}>
                        <NavLink to={item.href} className={({isActive}) => clsx(isActive && styles.active) }  > {item.title} </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    </div>
  )
}

export default Header;
