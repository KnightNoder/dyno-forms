export const button = ({ classname, style, id, children }) => {
  return (
    <button id={id} className={classname} style={style}>
      {children}
    </button>
  );
};
