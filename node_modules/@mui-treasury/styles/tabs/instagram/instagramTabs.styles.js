"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tabItemStyles = exports.tabsStyles = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var tabsStyles = function tabsStyles() {
  return {
    root: {
      boxShadow: 'inset 0 1px 0 0 #efefef',
      overflow: 'visible'
    },
    fixed: {
      overflow: 'visible !important'
    },
    indicator: {
      height: 1,
      transform: 'translateY(-52px)',
      backgroundColor: '#262626'
    }
  };
};

exports.tabsStyles = tabsStyles;

var tabItemStyles = function tabItemStyles(_ref) {
  var breakpoints = _ref.breakpoints;
  return {
    root: _defineProperty({
      lineHeight: 'inherit',
      minWidth: 0,
      '&:not(:last-child)': _defineProperty({
        marginRight: 24
      }, breakpoints.up('sm'), {
        marginRight: 60
      })
    }, breakpoints.up('md'), {
      minWidth: 0
    }),
    labelIcon: {
      minHeight: 53,
      '& $wrapper > *:first-child': {
        marginBottom: 0
      }
    },
    textColorInherit: {
      opacity: 0.4
    },
    wrapper: {
      flexDirection: 'row',
      letterSpacing: '1px',
      textTransform: 'uppercase',
      '& svg, .material-icons': {
        fontSize: 16,
        marginRight: 8
      }
    }
  };
};

exports.tabItemStyles = tabItemStyles;