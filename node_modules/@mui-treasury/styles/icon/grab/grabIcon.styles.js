"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var grabIconStyles = function grabIconStyles() {
  return {
    root: function root(_ref) {
      var activeColor = _ref.activeColor;
      return {
        cursor: 'grab',
        '&:active': {
          cursor: 'grabbing',
          color: activeColor
        }
      };
    }
  };
};

var _default = grabIconStyles;
exports["default"] = _default;