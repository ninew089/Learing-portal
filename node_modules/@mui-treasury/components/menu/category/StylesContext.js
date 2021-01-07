"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StylesProvider = StylesProvider;
exports.useCategoryItemStyles = exports.useCtxStyles = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var defaultCategoryMenuStyles = {
  title: '',
  item: '',
  itemActive: ''
};

var StylesContext = _react["default"].createContext(defaultCategoryMenuStyles);

var useCtxStyles = function useCtxStyles() {
  return _react["default"].useContext(StylesContext);
};

exports.useCtxStyles = useCtxStyles;

var useCategoryItemStyles = function useCategoryItemStyles() {
  var styles = useCtxStyles();
  return _extends(_extends({}, styles), {}, {
    active: styles.itemActive
  });
};

exports.useCategoryItemStyles = useCategoryItemStyles;

function StylesProvider(_ref) {
  var styles = _ref.styles,
      children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(StylesContext.Provider, {
    value: styles
  }, children);
}