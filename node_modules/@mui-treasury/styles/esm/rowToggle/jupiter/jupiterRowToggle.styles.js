function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { jupiterListItemStyles } from '../../listItem/jupiter';
export default (function (theme) {
  var s = jupiterListItemStyles(theme);
  var palette = theme.palette;
  return {
    root: {
      display: 'flex',
      position: 'relative',
      margin: 0
    },
    action: {
      marginLeft: 'auto',
      lineHeight: 0,
      marginRight: -4,
      color: palette.text.secondary,
      '& svg': {
        fontSize: '1.25rem'
      }
    },
    actionButton: {
      minWidth: 44,
      marginLeft: '0.5rem',
      marginRight: 0,
      borderRadius: 6,
      '&:hover': {
        backgroundColor: s.getAccentColor(),
        color: palette.primary.main
      }
    },
    actionToggled: {
      backgroundColor: s.getAccentColor(),
      color: palette.primary.main
    },
    listItem: _extends(_extends({}, s.root), {}, {
      '& $actionToggled': {
        background: 'none'
      }
    }),
    listItemSelected: s.selected['&.Mui-selected'],
    getAccentColor: function getAccentColor() {
      return s.getAccentColor();
    }
  };
});