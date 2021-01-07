var pxToRem = function pxToRem(px) {
  var oneRemPx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 16;
  return "".concat(px / oneRemPx, "rem");
};

export default (function (theme) {
  var spacing = 8;
  var size = pxToRem(28);
  var width = pxToRem(52 + 2 * spacing);
  var borderWidth = 2;
  var height = "calc(".concat(size, " + ").concat(borderWidth * 2, "px + ").concat(pxToRem(2 * spacing), ")");
  return {
    root: {
      width: width,
      height: height,
      padding: pxToRem(spacing),
      margin: 0
    },
    switchBase: {
      padding: borderWidth,
      top: pxToRem(spacing),
      left: pxToRem(spacing),
      '&$checked': {
        transform: "translateX(calc(".concat(width, " - ").concat(size, " - ").concat(borderWidth * 2, "px - ").concat(pxToRem(2 * spacing), "))"),
        color: theme.palette.common.white,
        '& + $track': {
          backgroundColor: '#52d869',
          opacity: 1,
          border: 'none'
        }
      },
      '&$focusVisible $thumb': {
        color: '#52d869',
        border: '6px solid #fff'
      }
    },
    thumb: {
      width: size,
      height: size,
      boxShadow: '0 3px 8px 0 rgba(0,0,0,0.15), 0 1px 1px 0 rgba(0,0,0,0.16), 0 3px 1px 0 rgba(0,0,0,0.1)'
    },
    track: {
      borderRadius: 40,
      border: "solid ".concat(theme.palette.grey[300]),
      borderWidth: borderWidth,
      backgroundColor: theme.palette.grey[50],
      opacity: 1,
      transition: theme.transitions.create(['background-color', 'border'])
    },
    checked: {},
    focusVisible: {}
  };
});