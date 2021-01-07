import Color from 'color';

var sizedIconButtonStyles = function sizedIconButtonStyles() {
  return {
    root: function root(_ref) {
      var _ref$padding = _ref.padding,
          padding = _ref$padding === void 0 ? 8 : _ref$padding,
          _ref$color = _ref.color,
          color = _ref$color === void 0 ? '' : _ref$color,
          _ref$radius = _ref.radius,
          radius = _ref$radius === void 0 ? 100 : _ref$radius;
      return {
        color: color,
        padding: padding,
        borderRadius: radius,
        '&:hover': {
          backgroundColor: color ? Color(color).rotate(-6).fade(0.92).toString() : ''
        }
      };
    },
    label: function label(_ref2) {
      var childSize = _ref2.childSize;
      return {
        '& > *': {
          fontSize: childSize,
          width: childSize,
          height: childSize
        }
      };
    }
  };
};

export default sizedIconButtonStyles;