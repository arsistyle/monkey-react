import PropTypes from 'prop-types';

const Types = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'strong', 'i', 'em'];

export default function Text({ children, type, className }) {
  const Tag = Types.filter((x) => x == type)[0] || 'div';
  return <Tag className={className}>{children}</Tag>;
}

Text.propTypes = {
  type: PropTypes.oneOf(Types)
};
