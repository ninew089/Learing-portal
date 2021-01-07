function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import cx from 'clsx';
import Item from '../flex/Item';
var StyleContext = React.createContext({});
var StyleProvider = StyleContext.Provider;
export var useStyleCtx = function useStyleCtx() {
  return React.useContext(StyleContext);
};

var Info = function Info(_ref) {
  var _ref$useStyles = _ref.useStyles,
      useStyles = _ref$useStyles === void 0 ? function () {
    return {};
  } : _ref$useStyles,
      className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["useStyles", "className", "children"]);

  var styles = useStyles();
  return /*#__PURE__*/React.createElement(Item, _extends({
    className: cx('Info', className)
  }, props), /*#__PURE__*/React.createElement(StyleProvider, {
    value: styles
  }, children));
};

export default Info;