import { jupiterRowToggleStyles } from '../../rowToggle/jupiter';
export default (function (theme) {
  var s = jupiterRowToggleStyles(theme);
  return {
    action: s.action,
    actionToggled: s.actionToggled,
    actionButton: s.actionButton,
    row: s.root,
    rowSelected: s.rootSelected,
    rowItem: s.listItem,
    rowItemSelected: s.listItemSelected,
    listItem: s.listItem,
    listItemSelected: s.listItemSelected,
    getAccentColor: function getAccentColor() {
      return s.getAccentColor();
    }
  };
});