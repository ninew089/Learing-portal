"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.useStyleCtx = void 0;

var _react = _interopRequireDefault(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _Item = _interopRequireDefault(require("../flex/Item"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var StyleContext = _react["default"].createContext({});

var StyleProvider = StyleContext.Provider;

var useStyleCtx = function useStyleCtx() {
  return _react["default"].useContext(StyleContext);
};

exports.useStyleCtx = useStyleCtx;

var Info = function Info(_ref) {
  var _ref$useStyles = _ref.useStyles,
      useStyles = _ref$useStyles === void 0 ? function () {
    return {};
  } : _ref$useStyles,
      className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["useStyles", "className", "children"]);

  var styles = useStyles();
  return /*#__PURE__*/_react["default"].createElement(_Item["default"], _extends({
    className: (0, _clsx["default"])('Info', className)
  }, props), /*#__PURE__*/_react["default"].createElement(StyleProvider, {
    value: styles
  }, children));
};

var _default = Info;
exports["default"] = _default;