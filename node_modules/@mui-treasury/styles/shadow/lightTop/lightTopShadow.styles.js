"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _default = {
  root: function root(_ref) {
    var inactive = _ref.inactive;
    return _extends({
      boxShadow: '0 8px 40px -12px rgba(0,0,0,0.3)',
      transition: '0.3s'
    }, !inactive && {
      '&:hover': {
        boxShadow: '0 16px 70px -12.125px rgba(0,0,0,0.3)'
      }
    });
  }
};
exports["default"] = _default;