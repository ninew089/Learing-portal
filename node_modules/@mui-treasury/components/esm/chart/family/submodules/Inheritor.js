function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import { Twig, useTreeStyles } from '../../tree';

var Inheritor = function Inheritor(_ref) {
  var className = _ref.className,
      hasOneSpouse = _ref.hasOneSpouse,
      props = _objectWithoutProperties(_ref, ["className", "hasOneSpouse"]);

  var classes = useTreeStyles();
  return /*#__PURE__*/React.createElement(Twig, _extends({
    className: cx(hasOneSpouse && classes.hasOneSpouse, className)
  }, props));
};

Inheritor.propTypes = {
  className: PropTypes.string,
  hasOneSpouse: PropTypes.bool
};
Inheritor.defaultProps = {
  className: undefined,
  hasOneSpouse: false
};
export default Inheritor;