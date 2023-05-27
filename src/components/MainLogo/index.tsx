interface IMainLogo {
  styles: string;
  title: string;
  text: string;
  titleStyles: string;
  textStyles: string;
}
export const MainLogo = ({
  styles,
  title,
  text,
  titleStyles,
  textStyles,
}: IMainLogo) => {
  return (
    <div className={`Logo ${styles}`}>
      <h1 className={`${titleStyles}`}>{title}</h1>
      <p className={`${textStyles}`}>{text}</p>
    </div>
  );
};
