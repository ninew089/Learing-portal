"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StylesProvider = StylesProvider;
exports.StylesConsumer = exports.useCtxStyles = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var defaultEmailSubscribeStyles = {
  form: '',
  input: '',
  submit: ''
};

var StylesContext = _react["default"].createContext(defaultEmailSubscribeStyles);

var useCtxStyles = function useCtxStyles() {
  return _react["default"].useContext(StylesContext);
};

exports.useCtxStyles = useCtxStyles;

function StylesProvider(_ref) {
  var styles = _ref.styles,
      children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(StylesContext.Provider, {
    value: styles
  }, children);
}

var StylesConsumer = StylesContext.Consumer;
exports.StylesConsumer = StylesConsumer;