import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import { useTreeStyles } from '../../tree';

var Spouse = function Spouse(_ref) {
  var hasChildren = _ref.hasChildren,
      children = _ref.children;
  var classes = useTreeStyles();
  return /*#__PURE__*/React.createElement("div", {
    className: cx(classes.spouse, hasChildren && classes.spouseWithChildren)
  }, children);
};

Spouse.propTypes = {
  hasChildren: PropTypes.bool,
  children: PropTypes.node
};
Spouse.defaultProps = {
  hasChildren: false,
  children: null
};
export default Spouse;