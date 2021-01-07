"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _color = _interopRequireDefault(require("color"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var mainColor = '#137cbd';
var lightColor = (0, _color["default"])(mainColor).fade(0.8).toString();

var _default = function _default() {
  return {
    root: {
      '& + *': {
        marginTop: '2px',
        fontSize: '0.875rem'
      },
      '&:hover, &.Mui-focusVisible': {
        backgroundColor: 'transparent !important'
      },
      '& input + *': {
        borderRadius: '50%',
        width: 16,
        height: 16
      },
      '& input:disabled + *': {
        boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.3) !important',
        background: 'rgba(206,217,224,.5) !important'
      },
      '&:not($checked)': {
        '& input + *': {
          boxShadow: '0 1px 3px 0 rgba(0,0,0,0.12), inset 0 0 0 1px rgba(16,22,26,.5)',
          backgroundColor: '#fff'
        },
        '& input:hover ~ *, & input:focus + *': {
          boxShadow: "inset 0 0 0 1px ".concat(mainColor, ", inset 0 -1px 0 ").concat(mainColor),
          backgroundColor: lightColor
        }
      }
    },
    checked: {
      '& input + *': {
        boxShadow: "inset 0 0 0 1px ".concat(mainColor),
        backgroundColor: '#fff',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
        '&:before': {
          display: 'block',
          width: 16,
          height: 16,
          backgroundImage: "radial-gradient(".concat(mainColor, ",").concat(mainColor, " 28%,rgba(0,0,0,0) 32%)"),
          content: '""'
        }
      },
      '& input:focus + *': {
        backgroundColor: lightColor
      }
    }
  };
};

exports["default"] = _default;