function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import Color from 'color';
import getThemeColor from '@mui-treasury/utils/getThemeColor';
export default (function (_ref) {
  var breakpoints = _ref.breakpoints,
      palette = _ref.palette;
  var defaultColor = Color(palette.primary.main).fade(0.9).toString();
  return {
    container: function container(_ref2) {
      var _ref2$borderColor = _ref2.borderColor,
          borderColor = _ref2$borderColor === void 0 ? defaultColor : _ref2$borderColor;
      var color = getThemeColor(palette, borderColor);
      return {
        borderTop: "1px solid ".concat(color)
      };
    },
    item: function item(_ref3) {
      var _ref3$borderColor = _ref3.borderColor,
          borderColor = _ref3$borderColor === void 0 ? defaultColor : _ref3$borderColor,
          _ref3$colWidth = _ref3.colWidth,
          colWidth = _ref3$colWidth === void 0 ? {
        xs: 12,
        sm: 6,
        md: 4
      } : _ref3$colWidth;
      var color = getThemeColor(palette, borderColor);
      var screens = Object.keys(colWidth);
      return _extends({
        border: "1px solid ".concat(color),
        borderTop: 'none',
        borderLeft: 'none'
      }, screens.reduce(function (result, key, index) {
        var media = {};
        var width = colWidth[key];
        var up = breakpoints.up,
            only = breakpoints.only;
        var creator = index !== screens.length - 1 ? only : up;
        media[creator(key)] = _defineProperty({}, "&:nth-of-type(".concat(12 / width, "n)"), {
          borderRight: 'none'
        });
        return _extends(_extends({}, result), media);
      }, {}));
    }
  };
});