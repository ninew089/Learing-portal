"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var titleFontSize = '0.875rem';
var subtitleFontSize = '0.75rem';
var family = "'Manrope', sans-serif";

var trendInfoStyles = function trendInfoStyles(_ref) {
  var palette = _ref.palette;
  return {
    title: {
      fontFamily: family,
      fontSize: titleFontSize,
      fontWeight: 700,
      lineHeight: 1.4,
      color: palette.text.primary,
      marginBottom: '0.25rem'
    },
    subtitle: {
      fontFamily: family,
      fontSize: subtitleFontSize,
      fontWeight: 500,
      lineHeight: 1.6,
      letterSpacing: '0.01em',
      color: palette.text.primary
    }
  };
};

var _default = trendInfoStyles;
exports["default"] = _default;