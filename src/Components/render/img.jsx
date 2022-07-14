export const img = ({ className, style, id, src }) => {
  console.log(src);
  return <img id={id} src={src} className={className} style={style} />;
};
