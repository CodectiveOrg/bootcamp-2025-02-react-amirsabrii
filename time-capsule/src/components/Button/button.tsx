import { ComponentProps, ReactNode } from "react";

import { clsx } from "clsx";

import styles from "./button.module.css";

type Variant = "solid" | "otlined" | "ghost";
type Size = "small" | "medium" | "large";
type Shape = "rectangel" | "circle" | "square";
type HoverColor = "none" | "danger" | "golden";

type Props = ComponentProps<"button"> & {
  variant?: Variant;
  size?: Size;
  shape?: Shape;
  suffixIcon?: ReactNode;
  hoverColor?: HoverColor;
};

function Button({
  children,
  variant = "solid",
  size = "medium",
  shape = "rectangel",
  className,
  suffixIcon,
  hoverColor = "none",
  ...otherProps
}: Props): ReactNode {
  return (
    <button
      className={clsx(
        styles.button,
        styles[variant],
        styles[size],
        styles[shape],
        styles[hoverColor],
        className,
      )}
      {...otherProps}
    >
      <div className={styles.suffixIcon}>{suffixIcon}</div>
      {children}
    </button>
  );
}

export default Button;
