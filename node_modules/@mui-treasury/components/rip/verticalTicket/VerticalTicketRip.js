"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var VerticalTicketRip = function VerticalTicketRip(_ref) {
  var classes = _ref.classes;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.left
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.sheet
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.tear
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.right
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.sheet
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.tear
  }))));
};

VerticalTicketRip.propTypes = {
  classes: _propTypes["default"].shape({
    left: _propTypes["default"].string,
    sheet: _propTypes["default"].string,
    right: _propTypes["default"].string,
    tear: _propTypes["default"].string
  })
};
VerticalTicketRip.defaultProps = {
  classes: {}
};
var _default = VerticalTicketRip;
exports["default"] = _default;