"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _color = _interopRequireDefault(require("color"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default() {
  return {
    root: function root(_ref) {
      var _ref$bgColor = _ref.bgColor,
          bgColor = _ref$bgColor === void 0 ? '#efefef' : _ref$bgColor,
          _ref$darken = _ref.darken,
          darken = _ref$darken === void 0 ? 0.2 : _ref$darken,
          _ref$blurLength = _ref.blurLength,
          blurLength = _ref$blurLength === void 0 ? 16 : _ref$blurLength,
          _ref$spread = _ref.spread,
          spread = _ref$spread === void 0 ? 10 : _ref$spread;
      var lightColor = (0, _color["default"])(bgColor).rotate(-6).lighten(0.05).hex();
      var lightBlurColor = (0, _color["default"])(lightColor).alpha(0.3).hex();
      var contrastColor = (0, _color["default"])(bgColor).rotate(4).desaturate(0.1).darken(darken).hex();
      return {
        boxShadow: "-".concat(spread, "px -").concat(spread, "px ").concat(blurLength, "px 0 ").concat(lightColor, ", ").concat(spread, "px ").concat(spread, "px ").concat(blurLength, "px 0 ").concat(contrastColor, ", inset 2px 2px 4px 0 ").concat(lightBlurColor, ", inset -2px -2px 4px 0 ").concat(contrastColor),
        backgroundColor: bgColor
      };
    }
  };
};

exports["default"] = _default;