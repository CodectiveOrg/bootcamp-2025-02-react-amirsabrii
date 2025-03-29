import {PropsWithChildren, ReactNode, useState} from "react";

import {FiltersContext} from "../context/FilterContext.ts";
import {FiltersType} from "../type/filter.type.ts";
import {AttractionTag} from "../type/attraction-tag.ts";

type  Props = PropsWithChildren;


function FilterProvider({children} : Props) : ReactNode{
    const [filter , setFilter] = useState<FiltersType>({tags : []})


    const toggleTags = (tag : AttractionTag): void => {

        setFilter((old) => {
            const index = old.tags.findIndex((x) => x.id === tag.id);

            if (index === -1) {
                return {...old, tags : [...old.tags , tag]};
            }

            const clone = [...old.tags]
            clone.splice(index , 1)
            return {...old , tags : clone}
        });
    };

    return (
        <FiltersContext.Provider value={{filter, toggleTags}}>
            {children}
        </FiltersContext.Provider>
    )
}

export default FilterProvider;