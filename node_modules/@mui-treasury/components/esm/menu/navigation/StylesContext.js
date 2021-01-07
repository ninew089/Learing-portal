function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
var defaultNavMenuStyles = {
  menu: '',
  item: '',
  itemActive: ''
};
var StylesContext = React.createContext(defaultNavMenuStyles);
export var useCtxStyles = function useCtxStyles() {
  return React.useContext(StylesContext);
};
export var useNavItemStyles = function useNavItemStyles() {
  var styles = useCtxStyles();
  return _extends(_extends({}, styles), {}, {
    active: styles.itemActive
  });
};
export function StylesProvider(_ref) {
  var styles = _ref.styles,
      children = _ref.children;
  return /*#__PURE__*/React.createElement(StylesContext.Provider, {
    value: styles
  }, children);
}