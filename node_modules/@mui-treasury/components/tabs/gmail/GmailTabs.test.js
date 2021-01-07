"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _GmailTabs = _interopRequireDefault(require("./GmailTabs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('GmailTabs', function () {
  it('render without clashes', function () {
    expect(function () {
      (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_GmailTabs["default"], null));
    }).not.toThrow();
  });
});