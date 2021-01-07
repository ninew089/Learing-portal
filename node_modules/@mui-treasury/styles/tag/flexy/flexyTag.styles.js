"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _color = _interopRequireDefault(require("color"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(_ref) {
  var spacing = _ref.spacing,
      palette = _ref.palette;
  var initialBgColor = palette.grey[100];
  var shade = palette.primary;
  var hoveredBgColor = (0, _color["default"])(shade.light).lighten(0.5).toString();
  var hoveredTextColor = shade.dark;
  return {
    root: {
      backgroundColor: initialBgColor,
      '&:hover, &.Mui-focusVisible': {
        backgroundColor: hoveredBgColor,
        color: hoveredTextColor,
        '& $icon': {
          color: hoveredTextColor,
          marginLeft: spacing(1),
          visibility: 'visible',
          opacity: 1
        },
        '& $overline': {
          color: (0, _color["default"])(hoveredTextColor).fade(0.3).toString()
        }
      }
    },
    label: {
      transition: '0.2s',
      textTransform: 'initial'
    },
    icon: {
      fontSize: 18,
      visibility: 'hidden',
      opacity: 0,
      transition: '0.3s',
      color: palette.common.white,
      marginLeft: -spacing(1.5),
      '& .MuiIcon--fa': {
        padding: 0
      }
    },
    overline: {
      display: 'block',
      lineHeight: 1,
      fontSize: 10,
      textAlign: 'left',
      textTransform: 'uppercase',
      marginTop: 4,
      color: palette.text.secondary
    }
  };
};

exports["default"] = _default;