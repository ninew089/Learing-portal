"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var titleFontSize = '1.25rem';
var subtitleFontSize = '1rem';
var captionFontSize = '0.875rem';
var subtitleFamily = "'Spartan', sans-serif";
var family = "'Montserrat', sans-serif";

var galaxyInfoStyles = function galaxyInfoStyles() {
  return {
    title: {
      fontFamily: family,
      color: '#fff',
      fontSize: titleFontSize,
      fontWeight: 'bold',
      lineHeight: 1.2
    },
    subtitle: {
      fontFamily: subtitleFamily,
      color: 'rgba(255, 255, 255, 0.92)',
      fontSize: subtitleFontSize,
      lineHeight: 1.4,
      letterSpacing: '1px',
      fontWeight: 200
    },
    caption: {
      fontFamily: family,
      color: 'rgba(255, 255, 255, 0.72)',
      fontSize: captionFontSize,
      lineHeight: 1.5,
      '&:last-child': {
        marginTop: '1rem'
      }
    }
  };
};

var _default = galaxyInfoStyles;
exports["default"] = _default;