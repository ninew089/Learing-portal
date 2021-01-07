function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

export default (function (_ref) {
  var _root;

  var palette = _ref.palette,
      breakpoints = _ref.breakpoints;
  return {
    root: (_root = {
      borderRadius: '50%',
      border: '1px solid',
      borderColor: 'rgba(255, 255, 255, 0.6)',
      width: 40,
      minWidth: 40,
      height: 40,
      '& $label': {
        transition: '0.3s cubic-bezier(.47,1.64,.41,.8)'
      },
      '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.38)',
        borderColor: palette.common.white,
        '& $label': _defineProperty({
          transform: 'scale(1.3)'
        }, breakpoints.up('md'), {
          transform: 'scale(1.7)'
        })
      }
    }, _defineProperty(_root, breakpoints.up('sm'), {
      width: 48,
      minWidth: 48,
      height: 48
    }), _defineProperty(_root, breakpoints.up('md'), {
      width: 64,
      minWidth: 64,
      height: 64
    }), _root),
    label: {
      color: palette.common.white
    }
  };
});