import Color from 'color';
import getThemeColor from '@mui-treasury/utils/getThemeColor';
export default (function (_ref) {
  var palette = _ref.palette;
  var defaultColor = Color(palette.primary.main).fade(0.9).toString();
  return {
    container: function container(_ref2) {
      var _ref2$borderColor = _ref2.borderColor,
          borderColor = _ref2$borderColor === void 0 ? defaultColor : _ref2$borderColor;
      var color = getThemeColor(palette, borderColor);
      return {
        border: "1px solid ".concat(color),
        borderRight: 'none',
        borderBottom: 'none'
      };
    },
    item: function item(_ref3) {
      var _ref3$borderColor = _ref3.borderColor,
          borderColor = _ref3$borderColor === void 0 ? defaultColor : _ref3$borderColor;
      var color = getThemeColor(palette, borderColor);
      return {
        border: "1px solid ".concat(color),
        borderTop: 'none',
        borderLeft: 'none'
      };
    }
  };
});