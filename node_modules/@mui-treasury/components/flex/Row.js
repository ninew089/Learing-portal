"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _Item = _interopRequireDefault(require("./Item"));

var _core = require("./core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Row = function Row(_ref) {
  var className = _ref.className,
      children = _ref.children,
      gap = _ref.gap,
      wrap = _ref.wrap,
      props = _objectWithoutProperties(_ref, ["className", "children", "gap", "wrap"]);

  var _useGapLookup = (0, _core.useGapLookup)(gap),
      calculatedGap = _useGapLookup.calculatedGap,
      itemProps = _useGapLookup.itemProps;

  return /*#__PURE__*/_react["default"].createElement(_Item["default"], _extends({
    className: (0, _clsx["default"])('FlexRow', className),
    display: 'flex'
  }, wrap && {
    flexWrap: 'wrap'
  }, itemProps, props, {
    gapDisabled: true
  }), /*#__PURE__*/_react["default"].createElement(_core.Provider, {
    flexDirection: 'row',
    gap: calculatedGap
  }, children));
};

var _default = Row;
exports["default"] = _default;