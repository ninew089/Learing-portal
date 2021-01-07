"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = function _default(_ref) {
  var typography = _ref.typography,
      breakpoints = _ref.breakpoints,
      palette = _ref.palette;
  return {
    root: _defineProperty({
      padding: '1.5rem'
    }, breakpoints.up('sm'), {
      padding: '2.5rem'
    }),
    iconWrapper: _defineProperty({
      width: 104,
      height: 104,
      borderRadius: '50%',
      backgroundColor: palette.grey[100],
      margin: '0 auto 1.2rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }, breakpoints.up('sm'), {
      marginBottom: '2rem'
    }),
    icon: {
      fontSize: 40,
      color: palette.grey[500]
    },
    title: {
      fontFamily: typography.fontFamily,
      fontSize: '1.125rem',
      fontWeight: 600,
      textAlign: 'center'
    },
    content: {
      lineHeight: '1.5em',
      textAlign: 'center'
    }
  };
};

exports["default"] = _default;