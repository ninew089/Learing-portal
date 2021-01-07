"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var titleFontSize = '1.25rem';
var subtitleFontSize = '1.25rem';
var captionFontSize = '1rem';
var family = "'Spartan', sans-serif";

var beatsInfoStyles = function beatsInfoStyles() {
  return {
    title: {
      fontFamily: family,
      fontSize: titleFontSize,
      fontWeight: 600,
      lineHeight: 1.4
    },
    subtitle: {
      fontFamily: family,
      fontSize: subtitleFontSize,
      lineHeight: 1.6,
      letterSpacing: '0.0075em'
    },
    caption: {
      fontFamily: '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji',
      color: '#d57b7b',
      fontSize: captionFontSize,
      lineHeight: 1.5,
      '&:last-child': {
        marginTop: '0.5rem'
      }
    }
  };
};

var _default = beatsInfoStyles;
exports["default"] = _default;