"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(_ref) {
  var palette = _ref.palette;
  return {
    overline: {
      textTransform: 'uppercase',
      color: palette.text.secondary,
      fontWeight: 'bold',
      letterSpacing: '1px',
      fontSize: 14,
      display: 'inline-block'
    },
    heading: {
      fontSize: 24,
      fontWeight: 900,
      marginBottom: '0.4em'
    },
    body: {
      fontSize: 18,
      color: palette.text.secondary
    }
  };
};

exports["default"] = _default;