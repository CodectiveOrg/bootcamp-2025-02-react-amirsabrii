import {ReactNode} from "react";

import styles from "./AttractionContent.module.css"
import {Attraction} from "../../../../type/attraction.ts";

type Props = {
    attraction : Attraction;
}

function  AttractionContent({attraction} :  Props) :ReactNode{
    return (
        <div className={styles['attraction-content']}>
            <div dangerouslySetInnerHTML={{__html: attraction.body}}></div>
        </div>
    )
}

export default AttractionContent;