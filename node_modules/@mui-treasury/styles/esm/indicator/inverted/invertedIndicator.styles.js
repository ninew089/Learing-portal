function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

export default (function (_ref) {
  var _$root, _after, _root;

  var palette = _ref.palette,
      transitions = _ref.transitions,
      breakpoints = _ref.breakpoints;
  var SIZES = {
    xs: 8,
    sm: 10,
    lg: 12
  };
  return {
    root: (_root = {
      display: 'inline-block',
      border: 0,
      background: 'none',
      padding: SIZES.xs,
      lineHeight: 0,
      cursor: 'pointer'
    }, _defineProperty(_root, breakpoints.up('sm'), {
      padding: SIZES.sm
    }), _defineProperty(_root, breakpoints.up('lg'), {
      padding: SIZES.lg
    }), _defineProperty(_root, '& + $root', (_$root = {
      marginLeft: SIZES.xs
    }, _defineProperty(_$root, breakpoints.up('sm'), {
      marginLeft: SIZES.sm
    }), _defineProperty(_$root, breakpoints.up('sm'), {
      marginLeft: SIZES.lg
    }), _$root)), _defineProperty(_root, '&:hover', {
      '&:after': {
        transform: 'scale(1.2)'
      }
    }), _defineProperty(_root, '&:after', (_after = {
      content: '""',
      display: 'inline-block',
      width: SIZES.xs,
      height: SIZES.xs,
      borderRadius: '50%',
      backgroundColor: 'rgba(255,255,255,0.38)',
      transition: transitions.create()
    }, _defineProperty(_after, breakpoints.up('sm'), {
      width: SIZES.sm,
      height: SIZES.sm
    }), _defineProperty(_after, breakpoints.up('lg'), {
      width: SIZES.lg,
      height: SIZES.lg
    }), _after)), _root),
    active: {
      '&:after': {
        backgroundColor: palette.common.white
      }
    }
  };
});