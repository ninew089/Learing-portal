"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var pxToRem = function pxToRem(px) {
  var oneRemPx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 17;
  return "".concat(px / oneRemPx, "rem");
};

var _default = function _default(theme) {
  var borderWidth = 2;
  var width = pxToRem(56);
  var height = pxToRem(34);
  var size = pxToRem(22);
  var gap = (34 - 22) / 2;
  return {
    root: {
      width: width,
      height: height,
      padding: 0,
      margin: theme.spacing(1),
      overflow: 'unset'
    },
    switchBase: {
      padding: pxToRem(gap),
      '&$checked': {
        color: '#fff',
        transform: "translateX(calc(".concat(width, " - ").concat(size, " - ").concat(pxToRem(2 * gap), "))"),
        '& + $track': {
          backgroundColor: theme.palette.primary.main,
          opacity: 1,
          border: 'none'
        },
        '& $thumb': {
          backgroundColor: '#fff'
        }
      }
    },
    track: {
      borderRadius: 40,
      border: "solid ".concat(theme.palette.grey[400]),
      borderWidth: borderWidth,
      backgroundColor: theme.palette.grey[50],
      opacity: 1,
      transition: theme.transitions.create(['background-color', 'border']),
      boxSizing: 'border-box'
    },
    thumb: {
      boxShadow: 'none',
      backgroundColor: theme.palette.grey[400],
      width: size,
      height: size
    },
    checked: {}
  };
};

exports["default"] = _default;