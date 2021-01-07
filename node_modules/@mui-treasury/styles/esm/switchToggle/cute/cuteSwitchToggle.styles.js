import Color from 'color';
import getThemeColor from '@mui-treasury/utils/getThemeColor';
export default (function (_ref) {
  var palette = _ref.palette;
  return {
    root: function root(_ref2) {
      var _ref2$color = _ref2.color,
          color = _ref2$color === void 0 ? palette.primary.main : _ref2$color;
      var result = getThemeColor(palette, color);
      var lightBg = Color(result).rotate(-10).alpha(0.08).string();
      var lightColor = Color(result).fade(0.32).string();
      return {
        borderRadius: 8,
        backgroundColor: lightBg,
        color: lightColor,
        padding: '0.25rem'
      };
    },
    toggled: function toggled(_ref3) {
      var _ref3$color = _ref3.color,
          color = _ref3$color === void 0 ? palette.primary.main : _ref3$color;
      var result = getThemeColor(palette, color);
      return {
        color: result
      };
    }
  };
});