function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import Color from 'color';
export var tabsStyles = function tabsStyles() {
  return {
    root: {
      overflow: 'visible'
    },
    scroller: {
      overflow: 'visible!important'
    },
    indicator: {
      display: 'none'
    }
  };
};
export var tabItemStyles = function tabItemStyles(_ref) {
  var palette = _ref.palette,
      spacing = _ref.spacing,
      breakpoints = _ref.breakpoints;
  var defaultBgColor = palette.grey[500];
  var defaultSelectedBgColor = '#ffffff';
  var defaultMinWidth = {
    md: 120
  };

  var getTextColor = function getTextColor(color) {
    if (Color(color).isLight()) return palette.text.primary;
    return palette.common.white;
  };

  return {
    root: function root(_ref2) {
      var _ref3;

      var _ref2$bgColor = _ref2.bgColor,
          bgColor = _ref2$bgColor === void 0 ? defaultBgColor : _ref2$bgColor,
          _ref2$minWidth = _ref2.minWidth,
          minWidth = _ref2$minWidth === void 0 ? defaultMinWidth : _ref2$minWidth;
      return _ref3 = {
        opacity: 1,
        overflow: 'initial',
        minHeight: spacing(7),
        color: getTextColor(bgColor),
        background: 'rbga(0,0,0,0)',
        transition: '0.2s'
      }, _defineProperty(_ref3, breakpoints.up('md'), {
        minWidth: minWidth.md
      }), _defineProperty(_ref3, '&:before', {
        content: '" "',
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: bgColor,
        transform: 'skewY(-6deg)',
        transformOrigin: '100%'
      }), _defineProperty(_ref3, '&:after', {
        pointerEvents: 'none',
        transition: '0.2s',
        content: '" "',
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        transform: 'translateX(100%)',
        display: 'block',
        width: 8,
        zIndex: 2,
        background: // eslint-disable-next-line max-len
        'linear-gradient(to top right, rgba(0,0,0,0.2), rgba(0,0,0,0.2) 45%, transparent, transparent 64%)'
      }), _ref3;
    },
    selected: function selected(_ref4) {
      var _ref4$selectedBgColor = _ref4.selectedBgColor,
          selectedBgColor = _ref4$selectedBgColor === void 0 ? defaultSelectedBgColor : _ref4$selectedBgColor;
      return {
        color: getTextColor(selectedBgColor),
        zIndex: 3,
        '&:before': {
          backgroundColor: selectedBgColor,
          boxShadow: '3px 3px 8px 0 rgba(0,0,0,0.38)'
        },
        '&:after': {
          width: spacing(3.5)
        }
      };
    },
    wrapper: {
      zIndex: 2,
      marginTop: spacing(1),
      textTransform: 'initial'
    }
  };
};