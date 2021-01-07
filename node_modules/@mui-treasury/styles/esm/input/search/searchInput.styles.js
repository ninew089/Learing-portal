export default (function (_ref) {
  var spacing = _ref.spacing,
      palette = _ref.palette;
  // ATTENTION!
  // you can customize some important variables here!!
  var backgroundColor = palette.grey[100];
  var space = spacing(1); // default = 8;

  var borderRadius = 0;
  var iconColor = palette.grey[500]; // end of variables

  return {
    root: {
      backgroundColor: backgroundColor,
      borderRadius: borderRadius,
      padding: "".concat(space, "px ").concat(space * 2, "px")
    },
    input: {
      fontSize: 16
    },
    adornedStart: {
      '& > *:first-child': {
        // * is the icon at the beginning of input
        fontSize: 20,
        color: iconColor,
        marginRight: space
      }
    }
  };
});