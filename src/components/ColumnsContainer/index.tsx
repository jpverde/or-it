import type { ReactNode } from "react";

interface IColumnsContainer {
  columnsNumber: string;
  children: ReactNode;
}
export const ColumnsContainer = ({
  columnsNumber,
  children,
}: IColumnsContainer) => {
  return <div className={`grid grid-cols-${columnsNumber}`}>{children}</div>;
};
