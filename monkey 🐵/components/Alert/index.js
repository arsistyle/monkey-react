import { useEffect, useState } from 'react';
import { spreadClasses } from 'monkey 🐵/utilities';

export default function Alerts({ children, content, type, text, close, actions, hide }) {
  const [options, setOptions] = useState([]);

  const [visible, setVisible] = useState(true);
  const [hiding, setHiding] = useState(false);

  const handleHide = () => {
    setHiding(true);
    setTimeout(() => {
      setVisible(false);
    }, 200);
  };

  useEffect(() => {
    setOptions([
      'alert',
      type && `alert--${type}`,
      text && `alert--text`,
      actions && `alert--actions`,
      close && `alert--close`,
      hiding && `alert--hiding`
    ]);
  }, [actions, text, close, hiding, type]);

  useEffect(() => {
    hide && handleHide();
  }, [hide]);

  return (
    visible && (
      <div className={spreadClasses(options)}>
        <span className='alert__content'>{children || content}</span>
        {actions && <div className='alert__actions'>{actions}</div>}
        {close && !actions && (
          <span className='alert__close' onClick={handleHide}>
            x
          </span>
        )}
      </div>
    )
  );
}
