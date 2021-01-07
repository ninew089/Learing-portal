"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _TreeChart = _interopRequireDefault(require("./TreeChart"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('TreeChart', function () {
  it('render without clashes', function () {
    expect(function () {
      (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_TreeChart["default"], null));
    }).not.toThrow();
  });
});