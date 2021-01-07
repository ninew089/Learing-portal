var gradientAvatarStyles = function gradientAvatarStyles() {
  return {
    root: function root(_ref) {
      var _ref$color = _ref.color,
          color = _ref$color === void 0 ? 'linear-gradient(to right, #833ab4, #fd1d1d, #fcb045)' : _ref$color,
          _ref$size = _ref.size,
          size = _ref$size === void 0 ? 40 : _ref$size,
          _ref$gap = _ref.gap,
          gap = _ref$gap === void 0 ? 2 : _ref$gap,
          _ref$gapColor = _ref.gapColor,
          gapColor = _ref$gapColor === void 0 ? '#fff' : _ref$gapColor,
          _ref$thickness = _ref.thickness,
          thickness = _ref$thickness === void 0 ? 2 : _ref$thickness;
      return {
        position: 'relative',
        display: 'inline-block',
        zIndex: 0,
        '& > *': {
          width: size + gap * 2,
          height: size + gap * 2,
          border: "".concat(gap, "px solid"),
          borderColor: gapColor
        },
        '&:before': {
          content: '""',
          display: 'block',
          position: 'absolute',
          borderRadius: '50%',
          zIndex: -1,
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          margin: -thickness,
          background: color
        }
      };
    }
  };
};

export default gradientAvatarStyles;