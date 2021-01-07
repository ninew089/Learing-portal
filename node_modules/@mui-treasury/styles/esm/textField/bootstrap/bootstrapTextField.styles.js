export { default as bootstrapInputStyles } from '../../input/bootstrap';
var fontFamily = ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"'].join(',');
var helperTextColor = '#6c757d';
var validColor = '#28a745';
var errorColor = '#dc3545';
var helperTextFontSize = 12.8;
export var bootstrapLabelStyles = function bootstrapLabelStyles(_ref) {
  var palette = _ref.palette,
      spacing = _ref.spacing;
  var space = spacing(1); // default = 8;

  var labelColor = palette.text.primary;
  return {
    root: {
      position: 'initial',
      textAlign: 'left',
      transform: 'none',
      fontSize: 16,
      color: labelColor,
      fontFamily: fontFamily,
      '&& + *': {
        // override initial styles
        // label + .MuiInput-formControl
        marginTop: space
      }
    },
    focused: {
      '&$root': {
        color: palette.text.primary
      }
    }
  };
};
export var bootstrapHelperTextStyles = function bootstrapHelperTextStyles(_ref2) {
  var spacing = _ref2.spacing;
  var space = spacing(1); // default = 8;

  return {
    root: {
      fontFamily: fontFamily,
      color: helperTextColor,
      lineHeight: '19.2px',
      marginTop: space / 2,
      fontSize: helperTextFontSize,
      '&.-valid': {
        color: validColor
      },
      '&.-error': {
        color: errorColor
      }
    }
  };
};