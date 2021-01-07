import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import { useTreeStyles } from '../TreeContext';

var Branches = function Branches(_ref) {
  var className = _ref.className,
      children = _ref.children;
  var classes = useTreeStyles();
  return /*#__PURE__*/React.createElement("ul", {
    className: cx(classes.branches, className)
  }, children);
};

Branches.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};
Branches.defaultProps = {
  className: undefined,
  children: null
};
export default Branches;