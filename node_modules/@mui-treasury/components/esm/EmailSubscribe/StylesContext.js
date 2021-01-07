import React from 'react';
var defaultEmailSubscribeStyles = {
  form: '',
  input: '',
  submit: ''
};
var StylesContext = React.createContext(defaultEmailSubscribeStyles);
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
export var StylesConsumer = StylesContext.Consumer;