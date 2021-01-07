"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var _tree = require("../../tree");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Spouse = function Spouse(_ref) {
  var hasChildren = _ref.hasChildren,
      children = _ref.children;
  var classes = (0, _tree.useTreeStyles)();
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _clsx["default"])(classes.spouse, hasChildren && classes.spouseWithChildren)
  }, children);
};

Spouse.propTypes = {
  hasChildren: _propTypes["default"].bool,
  children: _propTypes["default"].node
};
Spouse.defaultProps = {
  hasChildren: false,
  children: null
};
var _default = Spouse;
exports["default"] = _default;