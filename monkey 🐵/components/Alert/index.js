import { useEffect, useState } from 'react';
import { spreadClasses } from 'monkey 🐵/utilities';

export const Alert = ({ children, type, close }) => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    setOptions(['alert', `${type ? `alert--${type}` : ''}`]);
  }, [type]);

  return (
    <div className={spreadClasses(options)}>
      <span className='alert__content'>{children}</span>
      {close && <span className='alert__close'>x</span>}
    </div>
  );
};
