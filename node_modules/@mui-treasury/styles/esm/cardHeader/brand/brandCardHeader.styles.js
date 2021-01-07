function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

export default (function (_ref) {
  var palette = _ref.palette,
      breakpoints = _ref.breakpoints;
  var space = 24;
  return {
    root: {
      minWidth: 256
    },
    header: {
      padding: "4px ".concat(space, "px 0"),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    avatar: _defineProperty({
      width: 48,
      height: 48,
      transform: 'translateY(50%)',
      '& > img': {
        margin: 0,
        backgroundColor: palette.common.white
      }
    }, breakpoints.up('sm'), {
      width: 60,
      height: 60
    }),
    divider: _defineProperty({
      backgroundColor: palette.grey[200],
      marginBottom: 24 - 1
    }, breakpoints.up('sm'), {
      marginBottom: 30 - 1 // minus 1 due to divider height

    }),
    extra: {
      textTransform: 'uppercase',
      fontSize: 14,
      color: palette.grey[500],
      letterSpacing: '1px'
    }
  };
});