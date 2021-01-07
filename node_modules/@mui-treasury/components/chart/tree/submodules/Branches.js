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

var Branches = function Branches(_ref) {
  var className = _ref.className,
      children = _ref.children;
  var classes = (0, _TreeContext.useTreeStyles)();
  return /*#__PURE__*/_react["default"].createElement("ul", {
    className: (0, _clsx["default"])(classes.branches, className)
  }, children);
};

Branches.propTypes = {
  className: _propTypes["default"].string,
  children: _propTypes["default"].node
};
Branches.defaultProps = {
  className: undefined,
  children: null
};
var _default = Branches;
exports["default"] = _default;