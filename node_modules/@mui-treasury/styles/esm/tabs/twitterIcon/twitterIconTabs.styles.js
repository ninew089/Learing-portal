function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

export var tabsStyles = function tabsStyles() {
  return {
    root: {
      width: '100%',
      boxShadow: 'inset 0 -1px 0 0 #E6ECF0'
    },
    indicator: {
      backgroundColor: '#1da1f2'
    }
  };
};
export var tabItemStyles = function tabItemStyles(_ref) {
  var _root;

  var breakpoints = _ref.breakpoints;
  return {
    root: (_root = {
      minHeight: 53,
      minWidth: 80
    }, _defineProperty(_root, breakpoints.up('md'), {
      minWidth: 120
    }), _defineProperty(_root, '&:hover', {
      '& .MuiTab-label': {
        color: '#1da1f2'
      }
    }), _defineProperty(_root, '&$selected', {
      '& *': {
        color: '#1da1f2'
      }
    }), _defineProperty(_root, '&.MuiTab--iconOnly', {
      '& .MuiTab-wrapper': {
        width: 'auto',
        padding: 8,
        borderRadius: 25,
        color: '#657786',
        '&:hover': {
          color: '#1da1f2',
          backgroundColor: 'rgba(29, 161, 242, 0.1)'
        }
      }
    }), _root),
    textColorInherit: {
      opacity: 1
    },
    wrapper: {
      textTransform: 'none',
      fontSize: 15,
      fontWeight: 700,
      color: '#657786',
      '& svg, .material-icons': {
        fontSize: 26.25
      }
    }
  };
};
export var badgeStyles = function badgeStyles(_ref2) {
  var _root2;

  var palette = _ref2.palette;
  return {
    root: (_root2 = {}, _defineProperty(_root2, "&.MuiBadge--dotted, &.MuiBadge--number", {
      '& .MuiBadge-badge': {
        color: palette.common.white,
        backgroundColor: '#1da1f2'
      }
    }), _defineProperty(_root2, "&.MuiBadge--dotted .MuiBadge-badge", {
      minWidth: 6,
      height: 6,
      top: 0,
      right: 4,
      padding: 0
    }), _defineProperty(_root2, "&.MuiBadge--number .MuiBadge-badge", {
      top: -4,
      right: 0,
      boxShadow: 'rgb(255, 255, 255) 0px 0px 0px 0.14rem',
      minWidth: 16,
      height: 16,
      fontSize: 10.7,
      fontWeight: 'bold'
    }), _root2),
    colorPrimary: {
      color: palette.common.white
    }
  };
};