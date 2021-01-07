"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _color = _interopRequireDefault(require("color"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(_ref) {
  var palette = _ref.palette;
  var accentColor = (0, _color["default"])(palette.primary.main).lighten(1.75).fade(0.6).toString();
  return {
    root: {
      borderRadius: 6,
      color: palette.text.secondary,
      padding: '0.5rem 1rem',
      '&:hover': {
        color: palette.text.primary,
        backgroundColor: palette.grey[100]
      }
    },
    selected: {
      '&.Mui-selected': {
        fontWeight: 500,
        backgroundColor: accentColor,
        color: palette.primary.main,
        '&:hover': {
          color: palette.primary.main,
          backgroundColor: accentColor
        }
      }
    },
    getAccentColor: function getAccentColor() {
      return accentColor;
    }
  };
};

exports["default"] = _default;