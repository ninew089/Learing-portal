"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var titleFontSize = '0.75rem';
var subtitleFontSize = '0.625rem';
var captionFontSize = '0.625rem';
var captionMarginBottom = '0.125rem';

var themeXsInfoStyles = function themeXsInfoStyles(_ref) {
  var palette = _ref.palette;
  return {
    title: {
      fontSize: titleFontSize,
      lineHeight: 1.4
    },
    subtitle: {
      color: 'rgba(0,0,0,0.72)',
      fontSize: subtitleFontSize,
      lineHeight: 1.6
    },
    caption: {
      color: palette.text.secondary,
      fontSize: captionFontSize,
      lineHeight: 1.4,
      '&:not(:last-child)': {
        marginBottom: captionMarginBottom
      }
    }
  };
};

var _default = themeXsInfoStyles;
exports["default"] = _default;