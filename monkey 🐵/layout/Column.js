import { spreadClasses } from 'monkey 🐵/utilities';
import { useEffect, useState } from 'react';

export const Column = ({
  children,
  xs,
  sm,
  md,
  lg,
  xl,
  xxl,
  auto
}) => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    setOptions([
      'row__column',
      `${xs ? `row__column--xs--${xs}` : ''}`,
      `${sm ? `row__column--sm--${sm}` : ''}`,
      `${md ? `row__column--md--${md}` : ''}`,
      `${lg ? `row__column--lg--${lg}` : ''}`,
      `${xl ? `row__column--xl--${xl}` : ''}`,
      `${xxl ? `row__column--xxl--${xxl}` : ''}`,
      `${auto ? `row__column--auto` : ''}`
    ]);
  }, [auto, lg, md, sm, xl, xs, xxl]);

  return (
    <div className={spreadClasses(options)}>{children}</div>
  );
};
