import {ReactNode} from "react";
import {Link} from "react-router";
import OpenmojiStar from "../../icons/OpenmojiStar.tsx";
import Button from "../Button/Button.tsx";
import {Attraction} from "../../type/attraction.ts";

import styles from "../AttractionsList/AttractionsList.module.css";

type Props = {
    item : Attraction;
}

function AttractionListItem({item}:Props):ReactNode{
    return (

        <li  className={styles["acttraction-list-item"]}>
            <div className={styles.visuals}>
                <img
                    className={styles.img}
                    src={`${import.meta.env.VITE_CDN_BASE_URL}/${item.thumbnail}`}
                />
            </div>

            <div className={styles.writings}>
                <Link to="#" className={styles.title}>
                    {item.title}
                </Link>

                <div className={styles.info}>
                    <div className={styles.rating}>
                        {item.averageRating} <OpenmojiStar/>
                    </div>

                    <div className={styles["more-info-button"]}>
                        <Button>اطلاعات بیشتر</Button>
                    </div>
                </div>

                <p className={styles.description} dangerouslySetInnerHTML={{__html: item.description}}></p>
            </div>
        </li>
    )
}

export default AttractionListItem;