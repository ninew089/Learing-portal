"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _color = _interopRequireDefault(require("color"));

var _getThemeColor = _interopRequireDefault(require("@mui-treasury/utils/getThemeColor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(_ref) {
  var palette = _ref.palette;
  var defaultColor = (0, _color["default"])(palette.primary.main).fade(0.9).toString();
  return {
    container: function container(_ref2) {
      var _ref2$borderColor = _ref2.borderColor,
          borderColor = _ref2$borderColor === void 0 ? defaultColor : _ref2$borderColor;
      var color = (0, _getThemeColor["default"])(palette, borderColor);
      return {
        border: "1px solid ".concat(color),
        borderRight: 'none',
        borderBottom: 'none'
      };
    },
    item: function item(_ref3) {
      var _ref3$borderColor = _ref3.borderColor,
          borderColor = _ref3$borderColor === void 0 ? defaultColor : _ref3$borderColor;
      var color = (0, _getThemeColor["default"])(palette, borderColor);
      return {
        border: "1px solid ".concat(color),
        borderTop: 'none',
        borderLeft: 'none'
      };
    }
  };
};

exports["default"] = _default;