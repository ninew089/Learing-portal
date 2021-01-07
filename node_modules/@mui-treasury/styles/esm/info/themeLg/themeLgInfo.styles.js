var titleFontSize = '1.25rem';
var subtitleFontSize = '1.125rem';
var captionFontSize = '0.875rem';
var captionMarginBottom = '0.25rem';

var themeLgInfoStyles = function themeLgInfoStyles(_ref) {
  var palette = _ref.palette;
  return {
    title: {
      fontWeight: 500,
      fontSize: titleFontSize,
      lineHeight: 1.66
    },
    subtitle: {
      color: 'rgba(0,0,0,0.72)',
      fontSize: subtitleFontSize,
      lineHeight: 1.7
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

export default themeLgInfoStyles;