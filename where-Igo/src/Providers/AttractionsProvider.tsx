import {PropsWithChildren, ReactNode, useContext, useEffect, useMemo, useState} from "react";

import {AtractiosContext} from "../context/AttractionsContext.ts";
import {FiltersContext} from "../context/FilterContext.ts";

import {Attraction} from "../type/attraction.ts";


type Props = PropsWithChildren

function AttractionsProvider({children} : Props) : ReactNode{

    const { filter } = useContext(FiltersContext)

    const [allAttractions, allSetAttractions] = useState<Attraction[]>([]);

    const filterActraction = useMemo(() => {
        return allAttractions.filter((acttration) => {
            if (filter.tags.length === 0) {
                return true;
            } else {
                return filter.tags.every((tag) =>
                    acttration.tags.find((x) => x.id === tag.id),
                );
            }
        });
    }, [allAttractions, filter]);

    useEffect(() => {
        const fetchAttractions = async (): Promise<void> => {

              const params = new URLSearchParams()
            filter.tags.forEach((tag) => params.append('tag' , tag.id.toString()))


            const responce = await fetch(
                `${import.meta.env.VITE_API_BASE_URL}/attraction?${params.toString()}`,
            );
            const data = await responce.json();
            allSetAttractions(data);
        };
        fetchAttractions().then();
    }, [filter]);
    return (
        <AtractiosContext value={{filterActraction}} >
            {children}
        </AtractiosContext>
    )
}

export default AttractionsProvider;