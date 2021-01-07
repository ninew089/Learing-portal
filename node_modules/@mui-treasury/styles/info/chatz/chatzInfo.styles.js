"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var titleFontSize = '1rem';
var subtitleFontSize = '0.875rem';
var captionFontSize = '0.75rem';
var family = "'Maven Pro', sans-serif";

var chatzInfoStyles = function chatzInfoStyles(_ref) {
  var palette = _ref.palette;
  return {
    title: {
      fontFamily: family,
      fontSize: titleFontSize,
      fontWeight: 500,
      lineHeight: 1.2
    },
    subtitle: {
      fontFamily: family,
      color: palette.grey['600'],
      fontSize: subtitleFontSize,
      lineHeight: 1.6,
      marginBottom: '0.25rem'
    },
    caption: {
      fontFamily: family,
      color: palette.grey['400'],
      fontSize: captionFontSize,
      lineHeight: 1.4
    }
  };
};

var _default = chatzInfoStyles;
exports["default"] = _default;