export const Row = ({ children, gap }) => {
  return <div className='row' style={gap && {'--monkey-layout-gap': gap}}>{children}</div>;
};
