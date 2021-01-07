"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.roundHelperTextStyles = exports.roundInputLabelStyles = exports.roundInputBaseStyles = void 0;

var _roundInputBase = _interopRequireDefault(require("../../inputBase/round/roundInputBase.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var roundInputBaseStyles = function roundInputBaseStyles(theme) {
  return _extends(_extends({}, (0, _roundInputBase["default"])(theme)), {}, {
    formControl: {
      'label + &': {
        marginTop: 24
      }
    }
  });
};

exports.roundInputBaseStyles = roundInputBaseStyles;

var roundInputLabelStyles = function roundInputLabelStyles(_ref) {
  var palette = _ref.palette;
  return {
    root: {
      color: palette.grey[700],
      marginLeft: '0.75rem'
    },
    error: {},
    focused: {},
    shrink: {
      transform: 'translate(0, 1.5px) scale(1)'
    }
  };
};

exports.roundInputLabelStyles = roundInputLabelStyles;

var roundHelperTextStyles = function roundHelperTextStyles() {
  return {
    root: {
      marginLeft: '0.75rem'
    }
  };
};

exports.roundHelperTextStyles = roundHelperTextStyles;