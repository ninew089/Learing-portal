var titleFontSize = '1rem';
var subtitleFontSize = '1rem';
var captionFontSize = '0.875rem';
var captionMarginBottom = '0.25rem';

var themeMdInfoStyles = function themeMdInfoStyles(_ref) {
  var palette = _ref.palette;
  return {
    title: {
      fontWeight: 500,
      fontSize: titleFontSize,
      lineHeight: 1.4
    },
    subtitle: {
      color: 'rgba(0,0,0,0.72)',
      fontSize: subtitleFontSize,
      lineHeight: 1.6
    },
    caption: {
      color: palette.text.secondary,
      fontSize: captionFontSize,
      lineHeight: 1.5,
      '&:not(:last-child)': {
        marginBottom: captionMarginBottom
      }
    }
  };
};

export default themeMdInfoStyles;