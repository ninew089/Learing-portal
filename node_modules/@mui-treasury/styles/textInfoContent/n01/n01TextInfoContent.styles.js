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
      letterSpacing: '1px',
      fontSize: 12,
      marginBottom: '0.875em',
      display: 'inline-block'
    },
    heading: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: '0.4em'
    },
    body: {
      fontSize: 16,
      color: 'rgba(0,0,0,0.72)'
    }
  };
};

exports["default"] = _default;