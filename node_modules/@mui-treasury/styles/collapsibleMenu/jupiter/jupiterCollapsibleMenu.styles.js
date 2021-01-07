"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jupiter = require("../../rowToggle/jupiter");

var _default = function _default(theme) {
  var s = (0, _jupiter.jupiterRowToggleStyles)(theme);
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
};

exports["default"] = _default;