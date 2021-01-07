import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import { useTreeStyles } from '../TreeContext';

var Stem = function Stem(_ref) {
  var className = _ref.className,
      children = _ref.children;
  var classes = useTreeStyles();
  return /*#__PURE__*/React.createElement("div", {
    className: cx(classes.stem, className)
  }, children);
};

Stem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};
Stem.defaultProps = {
  className: undefined,
  children: null
};
export default Stem;