"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _gatsby = require("../../collapsibleMenu/gatsby");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var s = (0, _gatsby.gatsbyCollapsibleMenuStyles)();

var _default = function _default() {
  return _extends(_extends({}, s), {}, {
    list: {
      padding: 0
    },
    parent: {
      position: 'relative'
    },
    lv1Parent: {
      '&:before': {
        content: '" "',
        position: 'absolute',
        borderTop: '1px solid #f0f0f2',
        left: '1.5rem',
        right: 0,
        top: 0
      },
      '& > $row > $rowItem, & > $row > $listItem': {
        textTransform: 'uppercase',
        letterSpacing: '0.075em',
        fontSize: '0.75rem',
        fontFamily: 'Fira sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji'
      }
    },
    lv1ParentActive: {
      background: 'rgba(241,222,250,0.15)',
      '&:before': {
        borderTop: '1px solid rgb(246, 237, 250)'
      },
      '& > $row > $rowItem, & > $row > $listItem': {
        color: 'rgb(138, 75, 175)',
        fontWeight: 'bold'
      },
      '&$lv1ParentCollapsed': {
        '&:before': {
          left: 0
        }
      }
    },
    lv1ParentCollapsed: {},
    lv2ParentActive: {
      '& > $row > $rowItem, & > $row > $listItem': {
        color: 'rgb(138, 75, 175)',
        fontWeight: 500
      }
    },
    lv2Item: {
      paddingLeft: '1.5rem'
    },
    lv3Item: {
      paddingLeft: 48,
      '&:before': {
        left: '1.5rem'
      }
    },
    lv3ItemSelected: {
      '&:after': {
        width: 'calc(1.5rem + 8px)'
      }
    }
  });
};

exports["default"] = _default;