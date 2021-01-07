"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var titleFontSize = '0.875rem';
var subtitleFontSize = '0.8rem';
var captionFontSize = '0.75rem';
var captionMarginBottom = '0.25rem';

var themeSmInfoStyles = function themeSmInfoStyles(_ref) {
  var palette = _ref.palette;
  return {
    title: {
      fontSize: titleFontSize,
      lineHeight: 1.4
    },
    subtitle: {
      color: 'rgba(0,0,0,0.72)',
      fontSize: subtitleFontSize,
      lineHeight: 1.66
    },
    caption: {
      color: palette.text.secondary,
      fontSize: captionFontSize,
      lineHeight: 1.5,
      '&:not(:last-child)': {
        marginBottom: captionMarginBottom
      }
    }
  };
};

var _default = themeSmInfoStyles;
exports["default"] = _default;