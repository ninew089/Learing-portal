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
    item: function item(_ref2) {
      var _ref2$borderColor = _ref2.borderColor,
          borderColor = _ref2$borderColor === void 0 ? defaultColor : _ref2$borderColor,
          _ref2$height = _ref2.height,
          height = _ref2$height === void 0 ? '88%' : _ref2$height;
      var color = (0, _getThemeColor["default"])(palette, borderColor);
      return {
        position: 'relative',
        '&:not(:last-of-type)': {
          '&:after': {
            content: '" "',
            display: 'block',
            position: 'absolute',
            height: height,
            width: 1,
            backgroundColor: color,
            top: '50%',
            right: 0,
            transform: 'translateY(-50%)'
          }
        }
      };
    }
  };
};

exports["default"] = _default;