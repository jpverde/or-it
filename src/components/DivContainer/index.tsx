import type { ReactNode } from "react";

export const DivContainer = ({
  styles = "",
  children,
}: {
  styles?: string;
  children: ReactNode;
}): JSX.Element => {
  return <div className={`${styles} DivBox`}>{children}</div>;
};
