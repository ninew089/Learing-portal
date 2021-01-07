"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tabItemStyles = exports.tabsStyles = void 0;

var tabsStyles = function tabsStyles() {
  return {
    indicator: {
      display: 'none'
    }
  };
};

exports.tabsStyles = tabsStyles;

var tabItemStyles = function tabItemStyles(_ref) {
  var palette = _ref.palette;
  var defaultLabelColor = palette.common.white;
  var defaultBgColor = palette.primary.main;
  return {
    root: function root(_ref2) {
      var _ref2$bgColor = _ref2.bgColor,
          bgColor = _ref2$bgColor === void 0 ? defaultBgColor : _ref2$bgColor;
      return {
        textTransform: 'initial',
        height: 80,
        width: 150,
        '&:before': {
          position: 'absolute',
          top: 65,
          left: 75,
          content: '" "',
          height: 30,
          width: 30,
          background: 'transparent',
          transformOrigin: '0% 0%',
          transform: 'rotate(45deg)',
          boxShadow: "0 0 0 150px ".concat(bgColor),
          zIndex: -1
        }
      };
    },
    selected: {
      '&$root': {
        opacity: 0.99
      }
    },
    wrapper: function wrapper(_ref3) {
      var _ref3$labelColor = _ref3.labelColor,
          labelColor = _ref3$labelColor === void 0 ? defaultLabelColor : _ref3$labelColor;
      return {
        color: labelColor
      };
    }
  };
};

exports.tabItemStyles = tabItemStyles;