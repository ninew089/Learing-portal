"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default() {
  return {
    root: function root(_ref) {
      var _ref$bgColor = _ref.bgColor,
          bgColor = _ref$bgColor === void 0 ? 'rgba(0, 0, 0, 0.08)' : _ref$bgColor;
      return {
        width: '100%',
        height: 0,
        paddingBottom: '56.25%',
        backgroundColor: bgColor
      };
    }
  };
};

exports["default"] = _default;