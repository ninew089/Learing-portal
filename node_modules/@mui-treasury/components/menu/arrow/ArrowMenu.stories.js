"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ArrowMenu = _interopRequireDefault(require("./ArrowMenu"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _react2.storiesOf)('mui-components|Menu', module).add('arrow', function () {
  return /*#__PURE__*/_react["default"].createElement(_ArrowMenu["default"], null);
});