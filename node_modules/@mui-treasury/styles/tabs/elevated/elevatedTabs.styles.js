"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tabItemStyles = exports.tabsStyles = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var tabsStyles = function tabsStyles(_ref) {
  var spacing = _ref.spacing;
  var tabsBackground = 'linear-gradient(60deg, #ab47bc, #8e24aa)';
  var indicatorBackground = 'rgba(255, 255, 255, .2)';
  var borderRadius = spacing(1);
  return {
    root: {
      width: '100%',
      borderRadius: spacing(1),
      background: tabsBackground,
      padding: 10,
      boxShadow: '0px 3px 15px rgba(34, 35, 58, 0.5)'
    },
    indicator: {
      height: '100%',
      borderRadius: borderRadius,
      backgroundColor: indicatorBackground
    }
  };
};

exports.tabsStyles = tabsStyles;

var tabItemStyles = function tabItemStyles(_ref2) {
  var breakpoints = _ref2.breakpoints,
      spacing = _ref2.spacing;
  var tabsGutter = spacing(2);
  var labelColor = '#ffffff';
  return {
    root: _defineProperty({
      textTransform: 'initial',
      margin: "0 ".concat(tabsGutter, "px"),
      minWidth: 0
    }, breakpoints.up('md'), {
      minWidth: 0
    }),
    wrapper: {
      fontWeight: 'normal',
      letterSpacing: 0.5,
      color: labelColor
    }
  };
};

exports.tabItemStyles = tabItemStyles;