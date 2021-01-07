"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var titleFontSize = '1rem';
var subtitleFontSize = '0.75rem';
var family = "'Open Sans', sans-serif";

var tutorInfoStyles = function tutorInfoStyles() {
  return {
    title: {
      fontFamily: family,
      color: '#4d4b5f',
      fontSize: titleFontSize,
      lineHeight: 1.2,
      fontWeight: 700,
      marginBottom: '0.125rem'
    },
    subtitle: {
      fontFamily: family,
      color: '#949698',
      fontWeight: 500,
      fontSize: subtitleFontSize,
      lineHeight: 1.4
    }
  };
};

var _default = tutorInfoStyles;
exports["default"] = _default;