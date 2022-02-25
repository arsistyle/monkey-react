import { useEffect, useState } from 'react';
import { spreadClasses } from 'monkey 🐵/utilities';

export default function Btn({
  href,
  children,
  color,
  bordered,
  link,
  rounded,
  square,
  size,
  bright,
  ghost,
  ripple = false, // TODO: Desactivado hasta solucionar el bug del padre en relative
  onClick: clickEvent = null
}) {
  const Component = href ? 'a' : 'button';

  const [options, setOptions] = useState([]);

  function createRipple(event) {
    const button = event.currentTarget;
    const ripple = button.getElementsByClassName('btn__ripple')[0];

    if (ripple) {
      ripple.remove();
    }

    let circle = document.createElement('span');
    let d = Math.max(button.clientWidth, button.clientHeight);

    circle.style.width = circle.style.height = d + 'px';
    circle.style.left = event.clientX - button.offsetLeft - d / 2 + 'px';
    circle.style.top = event.clientY - button.offsetTop - d / 2 + 'px';
    circle.classList.add('btn__ripple');

    button.appendChild(circle);
  }

  const handleClick = (event) => {
    ripple && createRipple(event);
    clickEvent && clickEvent(event);
  };

  useEffect(() => {
    setOptions([
      'btn',
      color && `btn--${color}`,
      bright && `btn--bright`,
      bordered && `btn--bordered`,
      link && `btn--link`,
      ghost && `btn--ghost`,
      rounded && `btn--rounded`,
      square && `btn--square`,
      size && `btn--${size}`
    ]);
  }, [bordered, color, bright, link, rounded, size, square, ghost]);

  return (
    <Component href={href} className={spreadClasses(options)} onClick={handleClick}>
      <span className='btn__label'>{children}</span>
      {/* {children} */}
    </Component>
  );
}

export const BtnGroup = ({ children, align, splitted }) => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    setOptions([
      'btn__group',
      `${align ? `btn__group--${align}` : ''}`,
      `${splitted ? `btn__group--splitted` : ''}`
    ]);
  }, [align, splitted]);

  return <div className={spreadClasses(options)}>{children}</div>;
};
