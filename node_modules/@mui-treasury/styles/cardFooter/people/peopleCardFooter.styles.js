"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(_ref) {
  var spacing = _ref.spacing;
  return {
    divider: {
      marginBottom: spacing(3)
    },
    person: {
      display: 'inline-block',
      border: '2px solid white',
      '&:not(:first-of-type)': {
        marginLeft: -spacing(1)
      }
    }
  };
};

exports["default"] = _default;