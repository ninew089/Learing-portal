import { gatsbyRowToggleStyles } from '../../rowToggle/gatsby';
var s = gatsbyRowToggleStyles();
export default (function () {
  return {
    action: s.action,
    actionToggled: s.actionToggled,
    actionButton: s.actionButton,
    row: s.root,
    rowSelected: s.rootSelected,
    rowItem: s.listItem,
    rowItemSelected: s.listItemSelected,
    listItem: s.listItem,
    listItemSelected: s.listItemSelected
  };
});