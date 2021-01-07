import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import { useTreeStyles } from '../TreeContext';

var Twig = function Twig(_ref) {
  var className = _ref.className,
      children = _ref.children;
  var classes = useTreeStyles();
  return /*#__PURE__*/React.createElement("li", {
    className: cx(classes.twig, className)
  }, children);
};

Twig.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};
Twig.defaultProps = {
  className: undefined,
  children: null
};
export default Twig;