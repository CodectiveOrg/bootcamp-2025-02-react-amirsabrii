import { AttractionWorkHours } from "./attraction-work-hours.ts";
import { AttractionTag } from "./attraction-tag.ts";

export type Attraction = {
    id: number;
    title: string;
    description: string;
    thumbnail: string;
    averageRating: number;
    reviewsCount: number;
    ratingCount: number;
    workHours: AttractionWorkHours[];
    tags: AttractionTag[];
    phone: string;
    address: string;
    url: string;
    carousel: string[];
    body: string;
};