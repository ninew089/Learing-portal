import React from 'react';
var defaultSocialLinkStyles = {
  anchor: '',
  icon: ''
};
var StylesContext = React.createContext(defaultSocialLinkStyles);
export var useCtxStyles = function useCtxStyles() {
  return React.useContext(StylesContext);
};
export function StylesProvider(_ref) {
  var styles = _ref.styles,
      children = _ref.children;
  return /*#__PURE__*/React.createElement(StylesContext.Provider, {
    value: styles
  }, children);
}