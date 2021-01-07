"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _switch = _interopRequireDefault(require("@mui-treasury/components/toggle/switch"));

var _StylesContext = require("../StylesContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Action = function Action(_ref) {
  var Component = _ref.component,
      _ref$useStyles = _ref.useStyles,
      useStyles = _ref$useStyles === void 0 ? _StylesContext.useCtxStyles : _ref$useStyles,
      props = _objectWithoutProperties(_ref, ["component", "useStyles"]);

  var classes = useStyles(props);

  var useOverrideStyles = function useOverrideStyles() {
    return {
      root: classes.action,
      toggled: classes.actionToggled,
      button: classes.actionButton
    };
  };

  if (Component) return /*#__PURE__*/_react["default"].createElement(Component, _extends({
    useStyles: useOverrideStyles
  }, props));
  return /*#__PURE__*/_react["default"].createElement(_switch["default"], _extends({
    button: true,
    useStyles: useOverrideStyles
  }, props));
};

Action.propTypes = {
  component: _propTypes["default"].elementType,
  useStyles: _propTypes["default"].func
};
var _default = Action;
exports["default"] = _default;