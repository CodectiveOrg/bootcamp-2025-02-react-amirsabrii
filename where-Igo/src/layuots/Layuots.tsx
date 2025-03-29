import {ReactNode} from "react";

import {Outlet} from "react-router";

import Header from "../components/Header/Header.tsx";
import Footer from "../components/Footer/Footer.tsx";

import styles from "./Layuots.module.css"

function RootLayuots() : ReactNode{
    return (<div className={styles["root-layoute"]} >
    <Header/>
        <main>
            <Outlet/>
        </main>

     <Footer/>

    </div>
    )
}
export default RootLayuots