"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tabItemStyles = exports.tabsStyles = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var tabsStyles = function tabsStyles() {
  return {
    root: {
      width: '100%',
      backgroundColor: '#fff',
      boxShadow: 'inset 0 -1px 0 rgba(100,121,143,0.122)'
    },
    indicator: function indicator(_ref) {
      var _ref$indicatorColors = _ref.indicatorColors,
          indicatorColors = _ref$indicatorColors === void 0 ? [] : _ref$indicatorColors;
      return {
        height: 3,
        backgroundColor: 'rgba(0,0,0,0)',
        '& > div': _extends({
          backgroundColor: 'rgba(0,0,0,0.6)',
          borderTopLeftRadius: 3,
          borderTopRightRadius: 3,
          height: 3,
          margin: '0 8px'
        }, indicatorColors.reduce(function (result, color, index) {
          return _extends(_extends({}, result), {}, _defineProperty({}, "&.MuiIndicator-".concat(index), {
            backgroundColor: color
          }));
        }, {}))
      };
    }
  };
};

exports.tabsStyles = tabsStyles;

var tabItemStyles = function tabItemStyles(_ref2) {
  var palette = _ref2.palette;
  return {
    root: {
      opacity: 1,
      '&:hover': {
        backgroundColor: 'rgba(32,33,36,0.059)'
      },
      '&:hover,&:focus': {
        '& $wrapper': {
          color: 'rgba(0,0,0,0.87)'
        }
      },
      minHeight: 56,
      flex: 1,
      maxWidth: 253,
      padding: '6px 16px'
    },
    labelIcon: {
      '& $wrapper > *:first-child': {
        marginBottom: 0,
        marginRight: 16,
        fontSize: 20
      }
    },
    wrapper: function wrapper(_ref3) {
      var _ref3$color = _ref3.color,
          color = _ref3$color === void 0 ? palette.primary.main : _ref3$color;
      return {
        color: 'rgba(0,0,0,0.6)',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        fontSize: 14,
        fontFamily: "'Google Sans', Roboto,RobotoDraft,Helvetica,Arial,sans-serif",
        textTransform: 'initial',
        '& .MuiTabItem-labelGroup': {
          minWidth: 0
        },
        '& .MuiTabItem-label': {
          display: 'flex',
          alignItems: 'center'
        },
        '& .MuiTabItem-subLabel': {
          color: 'rgba(0,0,0,0.38)',
          fontSize: '0.75rem',
          textAlign: 'left',
          fontWeight: 'normal',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        },
        '& .MuiTabItem-tag': {
          backgroundColor: color,
          color: '#fff',
          fontSize: '0.75rem',
          borderRadius: 2,
          lineHeight: '16px',
          padding: '1px 4px',
          letterSpacing: 0.3,
          marginLeft: 8,
          whiteSpace: 'nowrap'
        }
      };
    },
    selected: function selected(_ref4) {
      var color = _ref4.color;
      return {
        '& $wrapper': {
          color: "".concat(color, " !important")
        }
      };
    }
  };
};

exports.tabItemStyles = tabItemStyles;