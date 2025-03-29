import {ReactNode, useContext} from "react";

import AttractionListItem from "../AttractionsListItem/AttractionListItem.tsx";

import {AtractiosContext} from "../../context/AttractionsContext.ts";

import styles from "./AttractionsList.module.css";

function AttractionsList(): ReactNode {

  const {filterActraction} = useContext(AtractiosContext)

  return (
    <ul className={styles["acttraction-list"]}>
      {filterActraction.map((item) => (
        <AttractionListItem key={item.id} item={item}/>
      ))}
    </ul>
  );
}

export default AttractionsList;
