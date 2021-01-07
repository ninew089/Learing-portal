function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import { StylesProvider } from './StylesContext';
import { useDefaultStyles } from './defaultStyles';
import { SocialLink } from './SocialLink';
export function SocialProvider(_ref) {
  var _ref$useStyles = _ref.useStyles,
      useStyles = _ref$useStyles === void 0 ? useDefaultStyles : _ref$useStyles,
      props = _objectWithoutProperties(_ref, ["useStyles"]);

  var styles = useStyles();

  if ('data' in props) {
    return /*#__PURE__*/React.createElement(StylesProvider, {
      styles: styles
    }, props.data.map(function (item) {
      return /*#__PURE__*/React.createElement(SocialLink, _extends({
        key: item.brand
      }, item));
    }));
  }

  return /*#__PURE__*/React.createElement(StylesProvider, {
    styles: styles
  }, props.children);
}