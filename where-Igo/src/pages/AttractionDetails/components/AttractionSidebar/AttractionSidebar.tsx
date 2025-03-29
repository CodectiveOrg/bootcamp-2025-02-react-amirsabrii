import { ReactNode } from "react";

import styles from "./AttractionSidebar.module.css";
import { Attraction } from "../../../../type/attraction.ts";
import MingcutePhoneCallLine from "../../../../icons/MingcutePhoneCallLine (1).tsx";
import MingcuteLocation3Line from "../../../../icons/MingcuteLocation3Line.tsx";

type Props = {
  attraction: Attraction;
};

function AttractionSidebar({ attraction }: Props): ReactNode {
  return (
    <aside className={styles["attraction-sidebar"]}>
      <div className={styles.title}>اطلاعات {attraction.title}</div>
      <div className={styles.addres}>
        <MingcuteLocation3Line />
        {attraction.address}
      </div>
        {
            attraction.phone ? <div className={styles.phone}>
                <MingcutePhoneCallLine/>
                {attraction.phone}
            </div>  : ''
        }

    </aside>
  );
}

export default AttractionSidebar;
