import { ReactNode } from "react";
import { Capsule } from "../../types/capsule.ts";

import styles from "./Result.module.css";
import Button from "../Button/button.tsx";
import MingcuteDeleteLine from "../../icons/MingcuteDeleteLine.tsx";
import IconParkSolidPencil from "../../icons/IconParkSolidPencil.tsx";

function Result(): ReactNode {
  const capsule: Capsule[] = [
    {
      id: 1,
      title: "gym",
      describtion: "going to the gym",
      date: new Date(2025, 4, 15),
      vibe: "good",
    },
    {
      id: 1,
      title: "school",
      describtion: "going to the gym",
      date: new Date(2025, 4, 15),
      vibe: "good",
    },
  ];
  return (
    <ul className={styles.result}>
      {capsule.map((capsule) => (
        <li key={capsule.id}>
          <div className={styles.title}>{capsule.title}</div>

          <div className={styles.action}>
            <Button hoverColor={"danger"} size={"small"} variant={"ghost"}>
              <MingcuteDeleteLine />{" "}
            </Button>

            <Button hoverColor={"golden"} size={"small"} variant={"ghost"}>
              <IconParkSolidPencil />{" "}
            </Button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Result;
