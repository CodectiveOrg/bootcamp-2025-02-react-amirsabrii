import { Vibe } from "./vibe.ts";

export type Capsule = {
  id: string | number;
  title: string;
  date: Date;
  describtion: string;
  vibe: Vibe;
};
