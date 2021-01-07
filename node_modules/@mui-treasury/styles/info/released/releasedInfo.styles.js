"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var titleFontSize = '0.875rem';
var subtitleFontSize = '0.75rem';
var family = "'DM Sans', sans-serif";

var releasedInfoStyles = function releasedInfoStyles() {
  return {
    title: {
      fontFamily: family,
      fontSize: titleFontSize,
      lineHeight: 2,
      fontWeight: 600
    },
    subtitle: {
      fontFamily: family,
      fontSize: subtitleFontSize,
      lineHeight: 1.6,
      fontWeight: 500
    }
  };
};

var _default = releasedInfoStyles;
exports["default"] = _default;