"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _StylesContext = require("./StylesContext");

var _defaultStyles = require("./defaultStyles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function CategoryProvider(_ref) {
  var children = _ref.children,
      _ref$useStyles = _ref.useStyles,
      useStyles = _ref$useStyles === void 0 ? _defaultStyles.useDefaultStyles : _ref$useStyles;
  var styles = useStyles();
  return /*#__PURE__*/_react["default"].createElement(_StylesContext.StylesProvider, {
    styles: styles
  }, children);
}

var _default = CategoryProvider;
exports["default"] = _default;