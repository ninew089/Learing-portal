"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(_ref) {
  var palette = _ref.palette;
  return {
    root: {
      display: 'inline-flex',
      verticalAlign: 'middle',
      minWidth: 28,
      minHeight: 28,
      justifyContent: 'center',
      alignItems: 'center',
      color: palette.text.secondary,
      '& svg': {
        fontSize: '1.25rem'
      }
    },
    button: {},
    toggled: {
      color: palette.text.primary
    }
  };
};

exports["default"] = _default;