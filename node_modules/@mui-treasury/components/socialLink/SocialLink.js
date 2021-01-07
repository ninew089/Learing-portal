"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SocialLink = SocialLink;

var _react = _interopRequireDefault(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _SocialIcon = _interopRequireDefault(require("./SocialIcon"));

var _StylesContext = require("./StylesContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function SocialLink(_ref) {
  var children = _ref.children,
      brand = _ref.brand,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["children", "brand", "className"]);

  var styles = (0, _StylesContext.useCtxStyles)();
  return /*#__PURE__*/_react["default"].createElement("a", _extends({
    className: (0, _clsx["default"])(styles.anchor, className),
    target: '_blank',
    rel: 'noopener noreferrer',
    "aria-label": "Link to ".concat((brand || '').replace('Circle', '').replace('Square', ''))
  }, props), /*#__PURE__*/_react["default"].createElement(_SocialIcon["default"], {
    className: styles.icon,
    brand: brand
  }));
}