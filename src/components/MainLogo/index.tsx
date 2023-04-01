export const MainLogo = ({styles, title,text,titleStyles, textStyles}) => {
  return (
    <div className={`Logo ${styles}`}>
      <h1 className={`${titleStyles}`}>{title}</h1>
      <p className={`${textStyles}`}>{text}</p>
    </div>
  );
};
