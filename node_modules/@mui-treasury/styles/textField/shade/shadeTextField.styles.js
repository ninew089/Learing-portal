"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shadeInputLabelStyles = exports.shadeInputBaseStyles = void 0;

var _shadeInputBase = _interopRequireDefault(require("../../inputBase/shade/shadeInputBase.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var shadeInputBaseStyles = function shadeInputBaseStyles(theme) {
  return _extends(_extends({}, (0, _shadeInputBase["default"])(theme)), {}, {
    formControl: {
      'label + &': {
        marginTop: 24
      }
    }
  });
};

exports.shadeInputBaseStyles = shadeInputBaseStyles;

var shadeInputLabelStyles = function shadeInputLabelStyles(_ref) {
  var palette = _ref.palette;
  return {
    root: {
      color: palette.text.primary,
      '&$focused:not($error)': {
        color: palette.text.primary
      }
    },
    error: {},
    focused: {},
    shrink: {
      transform: 'translate(0, 1.5px) scale(0.8)',
      letterSpacing: 1
    }
  };
};

exports.shadeInputLabelStyles = shadeInputLabelStyles;