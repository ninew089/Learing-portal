"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _gatsby = require("../../rowToggle/gatsby");

var s = (0, _gatsby.gatsbyRowToggleStyles)();

var _default = function _default() {
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
};

exports["default"] = _default;