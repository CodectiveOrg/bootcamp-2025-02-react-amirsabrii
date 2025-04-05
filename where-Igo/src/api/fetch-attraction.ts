
import {Attraction} from "../type/attraction.ts";

export async function fetchAttraction (id? : string): Promise<Attraction> {

    const responce = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/attraction/${id}`,
    );
    return  await responce.json();
};