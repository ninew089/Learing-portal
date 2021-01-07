function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import getThemeColor from '@mui-treasury/utils/getThemeColor';
export default (function (_ref) {
  var palette = _ref.palette,
      spacing = _ref.spacing;
  return {
    root: function root(_ref2) {
      var _ref2$bgColor = _ref2.bgColor,
          bgColor = _ref2$bgColor === void 0 ? 'primary.main' : _ref2$bgColor,
          _ref2$offset = _ref2.offset,
          offset = _ref2$offset === void 0 ? '-40px' : _ref2$offset,
          styles = _objectWithoutProperties(_ref2, ["bgColor", "offset"]);

      return _extends({
        backgroundColor: getThemeColor(palette, bgColor),
        borderRadius: spacing(2),
        margin: "".concat(offset, " auto 0"),
        width: '88%'
      }, styles);
    },
    title: {
      color: palette.common.white,
      fontWeight: 'bold'
    },
    subheader: {
      color: 'rgba(255, 255, 255, 0.76)'
    }
  };
});