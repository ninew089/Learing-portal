function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

export var tabsStyles = function tabsStyles(_ref) {
  var spacing = _ref.spacing,
      palette = _ref.palette;
  return {
    root: {
      marginLeft: spacing(1)
    },
    indicator: {
      height: 3,
      borderTopLeftRadius: 3,
      borderTopRightRadius: 3,
      backgroundColor: palette.common.white
    }
  };
};
export var tabItemStyles = function tabItemStyles(_ref2) {
  var breakpoints = _ref2.breakpoints,
      spacing = _ref2.spacing;
  return {
    root: _defineProperty({
      textTransform: 'initial',
      margin: spacing(0, 2),
      minWidth: 0
    }, breakpoints.up('md'), {
      minWidth: 0
    }),
    wrapper: {
      fontWeight: 'normal',
      letterSpacing: 0.5
    }
  };
};