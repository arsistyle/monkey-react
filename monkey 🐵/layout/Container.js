import { spreadClasses } from 'monkey 🐵/utilities';

export const Container = ({ children, fluid }) => {
  const options = [
    'container',
    `${fluid ? `container--fluid` : ''}`
  ];
  return (
    <div className={spreadClasses(options)}>{children}</div>
  );
};
