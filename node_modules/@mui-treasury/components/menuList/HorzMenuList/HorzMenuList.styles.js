"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _color = _interopRequireDefault(require("color"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(_ref) {
  var palette = _ref.palette,
      spacing = _ref.spacing;
  return {
    navRoot: {
      display: 'flex',
      alignSelf: 'stretch',
      margin: 0
    },
    navItem: {
      display: 'flex',
      alignItems: 'center',
      color: palette.text.primary,
      fontSize: 16,
      padding: spacing(0, 0.25),
      margin: spacing(0, 2),
      borderBottom: '2px solid',
      borderBottomColor: 'transparent',
      cursor: 'pointer',
      '&:hover': {
        borderBottom: '2px solid',
        color: palette.primary.main,
        borderBottomColor: (0, _color["default"])(palette.primary.main).fade(0.9).toString()
      },
      '&[disabled]': {
        pointerEvents: 'none',
        color: palette.text.disabled
      },
      '& > a': {
        display: 'flex',
        alignItems: 'center',
        alignSelf: 'stretch',
        borderBottom: 'none !important'
      }
    },
    navSelected: {
      '&$navItem': {
        color: palette.primary.main,
        borderBottomColor: palette.primary.main
      },
      '&[disabled]': {
        color: palette.text.disabled,
        borderBottomColor: palette.text.disabled
      }
    }
  };
};

exports["default"] = _default;