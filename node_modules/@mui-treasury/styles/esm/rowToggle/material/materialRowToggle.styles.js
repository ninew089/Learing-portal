import { materialListItemStyles } from '../../listItem/material';
export default (function (_ref) {
  var palette = _ref.palette;
  return {
    root: {
      display: 'flex',
      position: 'relative',
      margin: 0
    },
    listItem: materialListItemStyles({
      palette: palette
    }).root,
    listItemSelected: {
      color: palette.text.primary,
      fontWeight: 500
    },
    action: {
      minWidth: 48,
      color: palette.text.secondary,
      '&:hover': {
        color: palette.text.primary,
        backgroundColor: palette.grey[100]
      },
      '& svg': {
        fontSize: '1.25rem'
      },
      '&:not($actionButton)': {
        marginLeft: 'auto',
        marginRight: -4,
        minWidth: 'auto',
        lineHeight: 1
      }
    },
    actionToggled: {
      color: palette.text.primary
    },
    actionButton: {}
  };
});