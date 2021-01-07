function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import Color from 'color';
export var tabsStyles = {
  indicator: {
    display: 'none'
  }
};
export var tabItemStyles = function tabItemStyles(_ref) {
  var palette = _ref.palette,
      spacing = _ref.spacing,
      breakpoints = _ref.breakpoints;
  var defaultBgColor = palette.grey[300];
  var defaultSelectedBgColor = '#272C34';
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
        paddingLeft: spacing(2),
        paddingRight: spacing(2),
        borderTopLeftRadius: spacing(1),
        borderTopRightRadius: spacing(1),
        color: getTextColor(bgColor),
        backgroundColor: bgColor,
        transition: '0.2s'
      }, _defineProperty(_ref3, breakpoints.up('md'), {
        minWidth: minWidth.md
      }), _defineProperty(_ref3, '&:before', {
        transition: '0.2s'
      }), _defineProperty(_ref3, '&:not(:first-of-type)', {
        '&:before': {
          content: '" "',
          position: 'absolute',
          left: 0,
          display: 'block',
          height: 20,
          width: 1,
          zIndex: 1,
          marginTop: spacing(0.5),
          backgroundColor: palette.grey[500]
        }
      }), _defineProperty(_ref3, '& + $selected:before', {
        opacity: 0
      }), _defineProperty(_ref3, '&:hover', {
        '&:not($selected)': {
          backgroundColor: Color(bgColor).whiten(0.6).hex()
        },
        '&::before': {
          opacity: 0
        },
        '& + $root:before': {
          opacity: 0
        }
      }), _ref3;
    },
    selected: function selected(_ref4) {
      var _ref4$selectedBgColor = _ref4.selectedBgColor,
          selectedBgColor = _ref4$selectedBgColor === void 0 ? defaultSelectedBgColor : _ref4$selectedBgColor;
      return {
        backgroundColor: selectedBgColor,
        color: getTextColor(selectedBgColor),
        '& + $root': {
          zIndex: 1
        },
        '& + $root:before': {
          opacity: 0
        }
      };
    },
    wrapper: {
      zIndex: 2,
      marginTop: spacing(0.5),
      textTransform: 'initial'
    }
  };
};