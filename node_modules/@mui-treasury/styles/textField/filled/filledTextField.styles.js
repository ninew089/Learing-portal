"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filledInputStyles = exports.filledHelperTextStyles = void 0;

var filledHelperTextStyles = function filledHelperTextStyles(_ref) {
  var spacing = _ref.spacing;
  var space = spacing(1); // default = 8;

  return {
    root: {
      lineHeight: '2em'
    },
    contained: {
      marginTop: space / 4
    }
  };
};

exports.filledHelperTextStyles = filledHelperTextStyles;

var filledInputStyles = function filledInputStyles(_ref2) {
  var spacing = _ref2.spacing;
  var space = spacing(1); // default = 8;

  return {
    root: {
      fontSize: 16,
      borderRadius: space / 2,
      backgroundColor: 'rgba(0,0,0,0.04)',
      '&:hover': {
        backgroundColor: 'rgba(0,0,0,0.08)'
      }
    },
    error: {
      backgroundColor: '#fff5f5',
      '&:hover': {
        backgroundColor: '#ffecec'
      },
      '&$focused': {
        backgroundColor: '#ffecec'
      }
    },
    focused: {}
  };
};

exports.filledInputStyles = filledInputStyles;