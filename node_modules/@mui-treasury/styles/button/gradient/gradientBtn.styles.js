"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _default = function _default(_ref) {
  var palette = _ref.palette,
      shadows = _ref.shadows;
  return {
    root: function root(_ref2) {
      var chubby = _ref2.chubby;
      return _extends({
        minWidth: 200,
        transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
        background:
        /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        'linear-gradient(to right, #FFC371, #FF5F6D)',
        '&:hover': {
          transform: 'scale(1.1)'
        }
      }, chubby && {
        borderRadius: 50
      });
    },
    label: {
      color: palette.common.white,
      textTransform: 'none',
      fontSize: 15,
      fontWeight: 700
    },
    contained: {
      minHeight: 30,
      boxShadow: shadows[0],
      '&:active': {
        boxShadow: shadows[0]
      }
    }
  };
};

exports["default"] = _default;