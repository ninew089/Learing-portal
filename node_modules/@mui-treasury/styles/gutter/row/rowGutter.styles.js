"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var rowGutterStyles = function rowGutterStyles() {
  return {
    parent: function parent(_ref) {
      var before = _ref.before,
          after = _ref.after,
          _ref$size = _ref.size,
          size = _ref$size === void 0 ? '0.5rem' : _ref$size;
      return {
        '& > *:not(:first-child)': {
          marginLeft: size
        },
        '& > *:first-child': {
          marginLeft: before
        },
        '& > *:last-child': {
          marginRight: after
        }
      };
    },
    adjacent: function adjacent(_ref2) {
      var before = _ref2.before,
          after = _ref2.after,
          _ref2$size = _ref2.size,
          size = _ref2$size === void 0 ? '0.5rem' : _ref2$size;
      return {
        marginLeft: before,
        marginRight: after,
        '& + *': {
          marginLeft: size
        }
      };
    }
  };
};

var _default = rowGutterStyles;
exports["default"] = _default;