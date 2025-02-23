import { ComponentProps, ReactNode } from "react";

import styles from "./Text-input.module.css";

type Props = ComponentProps<"input"> & {
  suffixIcon?: ReactNode;
};

function TextInput({ suffixIcon, ...otherProps }: Props): ReactNode {
  return (
    <div className={styles["text-input"]}>
      <input type="text" {...otherProps} />
      <div className={styles.suffix}>{suffixIcon}</div>
    </div>
  );
}

export default TextInput;
