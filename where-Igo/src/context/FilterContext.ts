import { createContext } from "react";
import { FiltersType } from "../type/filter.type.ts";
import { AttractionTag } from "../type/attraction-tag.ts";

type FiltersContextValue = {
  filter: FiltersType;
  toggleTags: (tag: AttractionTag) => void;
};

export const FiltersContext = createContext<FiltersContextValue>({
  filter: {
    tags: [],
  },
  toggleTags: () => {},
});
