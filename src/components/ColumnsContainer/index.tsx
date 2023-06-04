import type { ReactNode } from "react";

interface IColumnsContainer {
  columnsNumber: string;
  children: ReactNode;
}
export const ColumnsContainer = ({
  columnsNumber,
  children,
}: IColumnsContainer): JSX.Element => {
  return <div className={`grid grid-cols-${columnsNumber}`}>{children}</div>;
};
