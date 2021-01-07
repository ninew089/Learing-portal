"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var _collapsible = _interopRequireDefault(require("../../collapsible"));

var _StylesContext = require("../StylesContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Collapse = function Collapse(_ref) {
  var _ref$useStyles = _ref.useStyles,
      useStyles = _ref$useStyles === void 0 ? _StylesContext.useCtxStyles : _ref$useStyles,
      level = _ref.level,
      props = _objectWithoutProperties(_ref, ["useStyles", "level"]);

  var styles = useStyles(props);
  return /*#__PURE__*/_react["default"].createElement(_collapsible["default"], _extends({
    useStyles: function useStyles() {
      return _extends(_extends({}, styles), {}, {
        row: (0, _clsx["default"])(styles.row, styles["lv".concat(level, "Row")]),
        rowSelected: (0, _clsx["default"])(styles.rowSelected, styles["lv".concat(level, "RowSelected")]),
        rowItem: (0, _clsx["default"])(styles.rowItem, styles["lv".concat(level, "RowItem")]),
        rowItemSelected: (0, _clsx["default"])(styles.rowItemSelected, styles["lv".concat(level, "RowItemSelected")]),
        list: (0, _clsx["default"])(styles.list, styles["lv".concat(level + 1, "List")]),
        listItem: (0, _clsx["default"])(styles.listItem, styles["lv".concat(level + 1, "ListItem")]),
        listItemSelected: (0, _clsx["default"])(styles.listItemSelected, styles["lv".concat(level + 1, "ListItemSelected")])
      });
    }
  }, props));
};

Collapse.Row = _collapsible["default"].Row;
Collapse.RowItem = _collapsible["default"].RowItem;
Collapse.Action = _collapsible["default"].Action;
Collapse.List = _collapsible["default"].List;
Collapse.ListItem = _collapsible["default"].ListItem;
Collapse.propTypes = {
  useStyles: _propTypes["default"].func,
  level: _propTypes["default"].number
};
Collapse.defaultProps = {};
var _default = Collapse;
exports["default"] = _default;