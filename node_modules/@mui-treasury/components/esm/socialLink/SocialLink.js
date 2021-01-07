function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import cx from 'clsx';
import SocialIcon from './SocialIcon';
import { useCtxStyles } from './StylesContext';
export function SocialLink(_ref) {
  var children = _ref.children,
      brand = _ref.brand,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["children", "brand", "className"]);

  var styles = useCtxStyles();
  return /*#__PURE__*/React.createElement("a", _extends({
    className: cx(styles.anchor, className),
    target: '_blank',
    rel: 'noopener noreferrer',
    "aria-label": "Link to ".concat((brand || '').replace('Circle', '').replace('Square', ''))
  }, props), /*#__PURE__*/React.createElement(SocialIcon, {
    className: styles.icon,
    brand: brand
  }));
}