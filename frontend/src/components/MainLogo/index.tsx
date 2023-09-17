interface IMainLogo {
  styles: string;
  tittle: string;
  tittleStyles: string;
}
export const MainLogo = ({
  styles,
  tittle,
  tittleStyles,
}: IMainLogo): JSX.Element => {
  return (
    <div className={`Logo ${styles}`}>
      <h1 className={`${tittleStyles}`}>{tittle}</h1>
    </div>
  );
};
