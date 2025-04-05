import {FiltersType} from "../type/filter.type.ts";
import {Attraction} from "../type/attraction.ts";


export  async function fetchAttractions  (filter :FiltersType):Promise<Attraction[]> {

    const params = new URLSearchParams()
    filter.tags.forEach((tag) => params.append('tag' , tag.id.toString()))


    const responce = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/attraction?${params.toString()}`,
    );
    return  await responce.json();
};