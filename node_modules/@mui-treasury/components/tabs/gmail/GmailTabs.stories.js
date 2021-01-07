"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _GmailTabs = _interopRequireDefault(require("./GmailTabs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _react2.storiesOf)('mui-components|Tabs', module).add('gmail', function () {
  return /*#__PURE__*/_react["default"].createElement(_GmailTabs["default"], null);
});