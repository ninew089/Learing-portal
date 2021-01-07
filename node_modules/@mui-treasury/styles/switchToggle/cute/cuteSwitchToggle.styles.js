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
  return {
    root: function root(_ref2) {
      var _ref2$color = _ref2.color,
          color = _ref2$color === void 0 ? palette.primary.main : _ref2$color;
      var result = (0, _getThemeColor["default"])(palette, color);
      var lightBg = (0, _color["default"])(result).rotate(-10).alpha(0.08).string();
      var lightColor = (0, _color["default"])(result).fade(0.32).string();
      return {
        borderRadius: 8,
        backgroundColor: lightBg,
        color: lightColor,
        padding: '0.25rem'
      };
    },
    toggled: function toggled(_ref3) {
      var _ref3$color = _ref3.color,
          color = _ref3$color === void 0 ? palette.primary.main : _ref3$color;
      var result = (0, _getThemeColor["default"])(palette, color);
      return {
        color: result
      };
    }
  };
};

exports["default"] = _default;