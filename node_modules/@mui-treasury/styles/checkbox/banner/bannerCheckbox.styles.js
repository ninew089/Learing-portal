"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bannerSubtitleStyles = exports.bannerCheckboxStyles = exports.bannerFormControlLabelStyles = void 0;

var _color = _interopRequireDefault(require("color"));

var _utils = require("@mui-treasury/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var bannerFormControlLabelStyles = function bannerFormControlLabelStyles(_ref) {
  var palette = _ref.palette;
  return {
    root: function root(_ref2) {
      var _ref2$color = _ref2.color,
          color = _ref2$color === void 0 ? palette.primary.main : _ref2$color;
      return {
        padding: '1rem 1rem 1rem 0.5rem',
        margin: 0,
        transition: '0.3s',
        borderRadius: 3,
        width: '100%',
        '&:hover': {
          backgroundColor: (0, _color["default"])((0, _utils.getThemeColor)(palette, color)).rotate(-6).fade(0.9).toString()
        }
      };
    },
    label: {
      marginLeft: '0.25rem'
    },
    disabled: {
      '&&:hover': {
        backgroundColor: 'unset'
      }
    }
  };
};

exports.bannerFormControlLabelStyles = bannerFormControlLabelStyles;

var bannerCheckboxStyles = function bannerCheckboxStyles() {
  return {
    root: {
      marginTop: -9,
      alignSelf: 'flex-start'
    }
  };
};

exports.bannerCheckboxStyles = bannerCheckboxStyles;

var bannerSubtitleStyles = function bannerSubtitleStyles(_ref3) {
  var palette = _ref3.palette;
  return {
    root: {
      display: 'block',
      color: palette.text.hint,
      fontSize: '0.875rem'
    }
  };
};

exports.bannerSubtitleStyles = bannerSubtitleStyles;