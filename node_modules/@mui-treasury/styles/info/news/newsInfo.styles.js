"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var titleFontSize = '1rem';
var subtitleFontSize = '0.875rem';
var family = "'Sen', sans-serif";

var newsInfoStyles = function newsInfoStyles(_ref) {
  var palette = _ref.palette;
  return {
    title: {
      fontFamily: family,
      fontSize: titleFontSize,
      lineHeight: 1.2
    },
    subtitle: {
      fontFamily: family,
      color: palette.grey['500'],
      fontSize: subtitleFontSize,
      lineHeight: 1.75
    }
  };
};

var _default = newsInfoStyles;
exports["default"] = _default;