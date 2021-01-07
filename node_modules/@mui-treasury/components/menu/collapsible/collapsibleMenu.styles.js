"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _rowToggle = _interopRequireDefault(require("../../toggle/row/rowToggle.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(theme) {
  var s = (0, _rowToggle["default"])(theme);
  return {
    action: s.action,
    actionToggled: s.actionToggled,
    actionButton: s.actionButton,
    row: s.root,
    rowSelected: s.rootSelected,
    rowItem: s.listItem,
    rowItemSelected: s.listItemSelected,
    list: {
      padding: 0
    },
    listItem: s.listItem,
    listItemSelected: s.listItemSelected
  };
};

exports["default"] = _default;