var dynamicAvatarStyles = function dynamicAvatarStyles() {
  return {
    root: function root(_ref) {
      var _ref$size = _ref.size,
          size = _ref$size === void 0 ? 48 : _ref$size,
          width = _ref.width,
          height = _ref.height,
          radius = _ref.radius;
      return {
        width: width || size,
        height: height || size,
        borderRadius: radius
      };
    }
  };
};

export default dynamicAvatarStyles;