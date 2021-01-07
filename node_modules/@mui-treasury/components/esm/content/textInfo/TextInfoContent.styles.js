export default (function (_ref) {
  var palette = _ref.palette;
  return {
    overline: {
      fontSize: '0.75rem',
      letterSpacing: 0.5,
      textTransform: 'uppercase',
      color: palette.text.secondary
    },
    heading: {
      fontSize: '1.3rem',
      fontWeight: 'bold',
      lineHeight: 2
    },
    body: {
      color: 'rgba(0, 0, 0, 0.7)'
    }
  };
});