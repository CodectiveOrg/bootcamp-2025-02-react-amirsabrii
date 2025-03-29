
import {createContext} from "react";
import {Attraction} from "../type/attraction.ts";

type AtractiosContextValue = {
    filterActraction : Attraction[];
};

export const AtractiosContext = createContext<AtractiosContextValue>({
    filterActraction : []
});