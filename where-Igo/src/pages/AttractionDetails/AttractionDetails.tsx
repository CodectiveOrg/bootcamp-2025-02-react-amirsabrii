import { ReactNode } from "react";

import AttractionSidebar from "./components/AttractionSidebar/AttractionSidebar.tsx";

import styles from "./AttractionDetails.module.css";
import CaouselThumbnail from "./components/CaouselThumbnail/CaouselThumbnail.tsx";
import AttractionContent from "./components/AttractionContent/AttractionContent.tsx";
import { useQuery } from "@tanstack/react-query";
import { fetchAttraction } from "../../api/fetch-attraction.ts";
import { useParams } from "react-router";

function AttractionDetails(): ReactNode {
  const { id } = useParams();

  const { data : attraction , isFetching  } = useQuery({
    queryKey: ["attraction" , id],
    queryFn: () => fetchAttraction(id),
      staleTime : 70 * 1000
  });
  if (isFetching || !attraction){
      return <>درحال بارگذاری...</>
  }
  return (
    <div className={styles["attraction-details"]}>
      <div className={styles["attraction-sidebar"]}>

        <AttractionSidebar attraction={attraction} />
      </div>

      <div className={styles["carousel-thumbnail"]}>

        <CaouselThumbnail attraction={attraction} />
      </div>

      <div className={styles["attraction-content"]}>

        <AttractionContent attraction={attraction} />
      </div>
    </div>
  );
}

export default AttractionDetails;
