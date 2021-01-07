"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = function _default(_ref) {
  var _root;

  var breakpoints = _ref.breakpoints;
  return {
    root: (_root = {
      borderRadius: '50%',
      border: '1px solid',
      width: 40,
      minWidth: 40,
      height: 40,
      '& $label': {
        transition: '0.3s cubic-bezier(.47,1.64,.41,.8)'
      },
      '&:hover': {
        '& $label': _defineProperty({
          transform: 'scale(1.3)'
        }, breakpoints.up('md'), {
          transform: 'scale(1.7)'
        })
      }
    }, _defineProperty(_root, breakpoints.up('sm'), {
      width: 48,
      minWidth: 48,
      height: 48
    }), _defineProperty(_root, breakpoints.up('md'), {
      width: 64,
      minWidth: 64,
      height: 64
    }), _root),
    label: {}
  };
};

exports["default"] = _default;