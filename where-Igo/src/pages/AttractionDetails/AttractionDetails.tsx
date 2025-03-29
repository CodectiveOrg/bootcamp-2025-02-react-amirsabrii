import {ReactNode, useEffect, useState} from "react";

import {Attraction as AttractionType} from "../../type/attraction.ts";

import {useParams} from "react-router";

import AttractionSidebar from "./components/AttractionSidebar/AttractionSidebar.tsx";

import styles from "./AttractionDetails.module.css"
import CaouselThumbnail from "./components/CaouselThumbnail/CaouselThumbnail.tsx";
import AttractionContent from "./components/AttractionContent/AttractionContent.tsx";

function AttractionDetails() :ReactNode{

    const {id} = useParams()

    const [attraction , setAttraction] = useState<AttractionType>()

    useEffect(() => {
        const fetchAttraction = async (): Promise<void> => {
            const responce = await fetch(
                `${import.meta.env.VITE_API_BASE_URL}/attraction/${id}`,
            );
            const data = await responce.json();
            setAttraction(data);
        };
        fetchAttraction().then();
    }, [id]);

    if (!attraction){
        return 'در حال بارگذاری'
    }
    return (
        <div className={styles['attraction-details']}>
            <div className={styles['attraction-sidebar']}> <AttractionSidebar attraction={attraction}/>  </div>

            <div className={styles['carousel-thumbnail']}> <CaouselThumbnail attraction={attraction}/>  </div>

            <div className={styles['attraction-content']}> <AttractionContent attraction={attraction}/>  </div>


        </div>
    )
}

export default AttractionDetails;