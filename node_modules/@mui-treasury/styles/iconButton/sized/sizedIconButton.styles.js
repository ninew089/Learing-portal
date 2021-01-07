"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _color = _interopRequireDefault(require("color"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sizedIconButtonStyles = function sizedIconButtonStyles() {
  return {
    root: function root(_ref) {
      var _ref$padding = _ref.padding,
          padding = _ref$padding === void 0 ? 8 : _ref$padding,
          _ref$color = _ref.color,
          color = _ref$color === void 0 ? '' : _ref$color,
          _ref$radius = _ref.radius,
          radius = _ref$radius === void 0 ? 100 : _ref$radius;
      return {
        color: color,
        padding: padding,
        borderRadius: radius,
        '&:hover': {
          backgroundColor: color ? (0, _color["default"])(color).rotate(-6).fade(0.92).toString() : ''
        }
      };
    },
    label: function label(_ref2) {
      var childSize = _ref2.childSize;
      return {
        '& > *': {
          fontSize: childSize,
          width: childSize,
          height: childSize
        }
      };
    }
  };
};

var _default = sizedIconButtonStyles;
exports["default"] = _default;