"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tabItemStyles = exports.tabsStyles = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var tabsStyles = function tabsStyles() {
  return {
    root: {
      width: '100%',
      boxShadow: 'inset 0 -1px 0 0 #E6ECF0'
    },
    indicator: {
      backgroundColor: '#1da1f2'
    }
  };
};

exports.tabsStyles = tabsStyles;

var tabItemStyles = function tabItemStyles(_ref) {
  var _root;

  var breakpoints = _ref.breakpoints;
  return {
    root: (_root = {
      minHeight: 53,
      minWidth: 80
    }, _defineProperty(_root, breakpoints.up('md'), {
      minWidth: 120
    }), _defineProperty(_root, '&:hover', {
      backgroundColor: 'rgba(29, 161, 242, 0.1)',
      '& $wrapper': {
        color: '#1da1f2'
      }
    }), _defineProperty(_root, '&$selected', {
      '& *': {
        color: '#1da1f2'
      }
    }), _root),
    selected: {},
    textColorInherit: {
      opacity: 1
    },
    wrapper: {
      textTransform: 'none',
      fontSize: 15,
      fontWeight: 700,
      color: '#657786'
    }
  };
};

exports.tabItemStyles = tabItemStyles;