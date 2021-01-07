"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmailSubscribe = EmailSubscribe;

var _react = _interopRequireDefault(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _StylesContext = require("./StylesContext");

var _defaultStyles = require("./defaultStyles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function EmailSubscribe(_ref) {
  var onSubmit = _ref.onSubmit,
      children = _ref.children,
      className = _ref.className,
      _ref$useStyles = _ref.useStyles,
      useStyles = _ref$useStyles === void 0 ? _defaultStyles.useDefaultStyles : _ref$useStyles,
      inputClearedAfterSubmit = _ref.inputClearedAfterSubmit,
      props = _objectWithoutProperties(_ref, ["onSubmit", "children", "className", "useStyles", "inputClearedAfterSubmit"]);

  function handleSubmit(e) {
    e.preventDefault();
    var target = e.target;

    if (onSubmit) {
      onSubmit(target.email.value);

      if (inputClearedAfterSubmit) {
        target.email.value = '';
      }
    }
  }

  var styles = useStyles();
  return /*#__PURE__*/_react["default"].createElement(_StylesContext.StylesProvider, {
    styles: styles
  }, /*#__PURE__*/_react["default"].createElement(_StylesContext.StylesConsumer, null, function (styles) {
    return /*#__PURE__*/_react["default"].createElement("form", _extends({
      onSubmit: handleSubmit
    }, props, {
      className: (0, _clsx["default"])(styles.form, className)
    }), children);
  }));
}