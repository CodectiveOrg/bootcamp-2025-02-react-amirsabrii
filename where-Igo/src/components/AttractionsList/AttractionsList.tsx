import { ReactNode, useContext } from "react";

import AttractionListItem from "../AttractionsListItem/AttractionListItem.tsx";

import { fetchAttractions } from "../../api/fetch-attractions.ts";

import { FiltersContext } from "../../context/FilterContext.ts";

import { useQuery } from "@tanstack/react-query";

import styles from "./AttractionsList.module.css";
import Loading from "../Loading/Loading.tsx";

function AttractionsList(): ReactNode {
  const { filter } = useContext(FiltersContext);

  const { data , isPending , isError } = useQuery({
    queryKey: ["attractions", filter],
    queryFn: () => fetchAttractions(filter),
    staleTime : 70 * 1000
  });

  if (isPending){
    return <Loading/>
  }

  if (isError){
    return <h1>Error</h1>
  }

  return (
    <ul className={styles["acttraction-list"]}>
      {data.map((item) => (
        <AttractionListItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default AttractionsList;
