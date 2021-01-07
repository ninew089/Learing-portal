"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(_ref) {
  var palette = _ref.palette;
  return {
    overline: {
      fontSize: '0.75rem',
      letterSpacing: 0.5,
      textTransform: 'uppercase',
      color: palette.text.secondary
    },
    heading: {
      fontSize: '1.3rem',
      fontWeight: 'bold',
      lineHeight: 2
    },
    body: {
      color: 'rgba(0, 0, 0, 0.7)'
    }
  };
};

exports["default"] = _default;