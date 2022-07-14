export const div = ({ className, style, id, children }) => {
  return (
    <div id={id} className={className} style={style}>
      {children}
    </div>
  );
};
