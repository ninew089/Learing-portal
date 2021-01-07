"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var titleFontSize = '1rem';
var subtitleFontSize = '0.75rem';
var captionFontSize = '0.875rem';
var family = "'Poppins', sans-serif";

var popularInfoStyles = function popularInfoStyles() {
  return {
    title: {
      fontFamily: family,
      fontSize: titleFontSize,
      lineHeight: 1.4,
      fontWeight: 'bold'
    },
    subtitle: {
      fontFamily: family,
      color: '#b13731',
      fontSize: subtitleFontSize,
      textTransform: 'uppercase',
      lineHeight: 1.2,
      letterSpacing: '1px',
      marginBottom: '0.25rem'
    },
    caption: {
      fontFamily: family,
      color: '#95a0a1',
      fontSize: captionFontSize,
      lineHeight: 1.5,
      '&:last-child': {
        marginTop: '0.5rem'
      }
    }
  };
};

var _default = popularInfoStyles;
exports["default"] = _default;