export default (function (_ref) {
  var spacing = _ref.spacing;
  var space = spacing(1); // default = 8;

  var backgroundColor = '#F1F3F4';
  var borderRadius = 100; // rounded

  var inputPadding = space / 4;
  return {
    root: {
      backgroundColor: backgroundColor,
      borderRadius: borderRadius,
      padding: inputPadding
    },
    icon: {
      padding: "".concat(space / 2, "px ").concat(space, "px"),
      borderRadius: borderRadius
    }
  };
});