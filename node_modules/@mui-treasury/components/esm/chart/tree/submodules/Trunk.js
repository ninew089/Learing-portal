import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import { useTreeStyles } from '../TreeContext';

var Trunk = function Trunk(_ref) {
  var className = _ref.className,
      children = _ref.children;
  var classes = useTreeStyles();
  return /*#__PURE__*/React.createElement("div", {
    className: cx(classes.trunk, className)
  }, children);
};

Trunk.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};
Trunk.defaultProps = {
  className: undefined,
  children: null
};
export default Trunk;