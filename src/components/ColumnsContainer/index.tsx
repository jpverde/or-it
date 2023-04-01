export const ColumnsContainer = ({ columnsNumber, children }) => {
  return <div className={`grid grid-cols-${columnsNumber}`}>{children}</div>;
};
