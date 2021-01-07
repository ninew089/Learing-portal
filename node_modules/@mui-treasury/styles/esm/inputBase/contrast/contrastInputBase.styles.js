export default (function (_ref) {
  var palette = _ref.palette,
      spacing = _ref.spacing;
  return {
    root: {
      padding: spacing(0, 1.5),
      borderRadius: 6,
      backgroundColor: palette.grey[100]
    },
    input: {
      fontSize: 16,
      color: palette.text.secondary
    }
  };
});