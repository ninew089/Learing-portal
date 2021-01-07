"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var onlineAvatarStyles = function onlineAvatarStyles() {
  return {
    root: function root(_ref) {
      var color = _ref.color,
          _ref$size = _ref.size,
          size = _ref$size === void 0 ? 40 : _ref$size,
          _ref$thickness = _ref.thickness,
          thickness = _ref$thickness === void 0 ? 2 : _ref$thickness,
          _ref$gap = _ref.gap,
          gap = _ref$gap === void 0 ? 2 : _ref$gap;
      return {
        position: 'relative',
        display: 'inline-block',
        '& > *': {
          width: size,
          height: size
        },
        '&:before': {
          content: '""',
          display: 'block',
          position: 'absolute',
          width: size + thickness * 2 + gap * 2,
          height: size + thickness * 2 + gap * 2,
          left: '50%',
          top: '50%',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          border: "".concat(thickness, "px solid"),
          borderColor: color
        }
      };
    }
  };
};

var _default = onlineAvatarStyles;
exports["default"] = _default;