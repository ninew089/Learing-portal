"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var _TreeContext = require("../TreeContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Trunk = function Trunk(_ref) {
  var className = _ref.className,
      children = _ref.children;
  var classes = (0, _TreeContext.useTreeStyles)();
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _clsx["default"])(classes.trunk, className)
  }, children);
};

Trunk.propTypes = {
  className: _propTypes["default"].string,
  children: _propTypes["default"].node
};
Trunk.defaultProps = {
  className: undefined,
  children: null
};
var _default = Trunk;
exports["default"] = _default;