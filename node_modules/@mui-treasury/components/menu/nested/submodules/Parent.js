"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var _StylesContext = require("../StylesContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Parent = function Parent(_ref) {
  var _ref$useStyles = _ref.useStyles,
      useStyles = _ref$useStyles === void 0 ? _StylesContext.useCtxStyles : _ref$useStyles,
      className = _ref.className,
      level = _ref.level,
      active = _ref.active,
      collapsed = _ref.collapsed,
      props = _objectWithoutProperties(_ref, ["useStyles", "className", "level", "active", "collapsed"]);

  var classes = useStyles();
  return /*#__PURE__*/_react["default"].createElement("div", _extends({
    className: (0, _clsx["default"])(classes.parent, active && classes["parentActive"], collapsed && classes["parentCollapsed"], level && classes["lv".concat(level, "Parent")], active && classes["lv".concat(level, "ParentActive")], collapsed && classes["lv".concat(level, "ParentCollapsed")], className)
  }, props));
};

Parent.propTypes = {
  level: _propTypes["default"].number,
  className: _propTypes["default"].string,
  useStyles: _propTypes["default"].func,
  active: _propTypes["default"].bool,
  collapsed: _propTypes["default"].bool
};
var _default = Parent;
exports["default"] = _default;