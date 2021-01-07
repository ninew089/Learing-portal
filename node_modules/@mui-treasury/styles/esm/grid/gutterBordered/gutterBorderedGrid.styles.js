import Color from 'color';
import getThemeColor from '@mui-treasury/utils/getThemeColor';
export default (function (_ref) {
  var palette = _ref.palette;
  var defaultColor = Color(palette.primary.main).fade(0.9).toString();
  return {
    item: function item(_ref2) {
      var _ref2$borderColor = _ref2.borderColor,
          borderColor = _ref2$borderColor === void 0 ? defaultColor : _ref2$borderColor,
          _ref2$height = _ref2.height,
          height = _ref2$height === void 0 ? '88%' : _ref2$height;
      var color = getThemeColor(palette, borderColor);
      return {
        position: 'relative',
        '&:not(:last-of-type)': {
          '&:after': {
            content: '" "',
            display: 'block',
            position: 'absolute',
            height: height,
            width: 1,
            backgroundColor: color,
            top: '50%',
            right: 0,
            transform: 'translateY(-50%)'
          }
        }
      };
    }
  };
});