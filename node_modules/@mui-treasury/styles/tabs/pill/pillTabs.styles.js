"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tabItemStyles = exports.tabsStyles = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var tabsStyles = function tabsStyles() {
  return {
    root: {
      width: '100%'
    },
    indicator: {
      display: 'none'
    },
    centered: {
      alignItems: 'center',
      justifyContent: 'center'
    }
  };
};

exports.tabsStyles = tabsStyles;

var tabItemStyles = function tabItemStyles(_ref) {
  var _root;

  var breakpoints = _ref.breakpoints;
  return {
    root: (_root = {
      position: 'relative',
      display: 'block',
      borderRadius: '30px',
      textAlign: 'center',
      transition: 'all .5s',
      padding: '10px 15px',
      color: '#555555',
      height: 'auto',
      opacity: '1',
      margin: '10px 0',
      "float": 'none'
    }, _defineProperty(_root, breakpoints.up('md'), {
      minWidth: 120
    }), _defineProperty(_root, '& + button', {
      margin: '10px 0'
    }), _defineProperty(_root, '&$selected', {
      '&, &:hover': {
        color: '#FFFFFF',
        backgroundColor: '#00acc1',
        boxShadow: '0 7px 10px -5px rgba(76, 175, 80, 0.4)'
      }
    }), _root),
    selected: {},
    wrapper: {
      lineHeight: '24px',
      textTransform: 'uppercase',
      fontSize: '12px',
      fontWeight: '500',
      position: 'relative',
      display: 'block',
      color: 'inherit'
    }
  };
};

exports.tabItemStyles = tabItemStyles;