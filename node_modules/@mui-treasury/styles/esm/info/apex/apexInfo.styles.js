var titleFontSize = '0.875rem';
var subtitleFontSize = '0.75rem';
var family = "'Ubuntu', sans-serif";

var apexInfoStyles = function apexInfoStyles(_ref) {
  var palette = _ref.palette;
  return {
    title: {
      fontFamily: family,
      color: '#4d4b5f',
      fontSize: titleFontSize,
      lineHeight: 1.66,
      fontWeight: 700,
      letterSpacing: '0.5px'
    },
    subtitle: {
      fontFamily: family,
      color: palette.grey['600'],
      fontSize: subtitleFontSize,
      lineHeight: 1.4,
      letterSpacing: 0
    }
  };
};

export default apexInfoStyles;