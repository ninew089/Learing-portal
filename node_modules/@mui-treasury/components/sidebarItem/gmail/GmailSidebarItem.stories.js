"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _GmailSidebarItem = _interopRequireDefault(require("./GmailSidebarItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _react2.storiesOf)('mui-components|SidebarItem', module).add('gmail', function () {
  return /*#__PURE__*/_react["default"].createElement(_GmailSidebarItem["default"], null);
});