import { ComponentProps, ReactNode } from "react";

import styles from "./DatetimeLocal.module.css";

type Props = ComponentProps<"input">;

function DatetimeLocl({ ...otherProps }: Props): ReactNode {
  return (
    <div className={styles["datetime-local"]}>
      <input type="date" defaultValue="2025-01-13" {...otherProps} />
      <input type="time" defaultValue="09:21" {...otherProps} />
    </div>
  );
}

export default DatetimeLocl;
