function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import CollapsibleMenu from '../../collapsible';
import { useCtxStyles } from '../StylesContext';

var Collapse = function Collapse(_ref) {
  var _ref$useStyles = _ref.useStyles,
      useStyles = _ref$useStyles === void 0 ? useCtxStyles : _ref$useStyles,
      level = _ref.level,
      props = _objectWithoutProperties(_ref, ["useStyles", "level"]);

  var styles = useStyles(props);
  return /*#__PURE__*/React.createElement(CollapsibleMenu, _extends({
    useStyles: function useStyles() {
      return _extends(_extends({}, styles), {}, {
        row: cx(styles.row, styles["lv".concat(level, "Row")]),
        rowSelected: cx(styles.rowSelected, styles["lv".concat(level, "RowSelected")]),
        rowItem: cx(styles.rowItem, styles["lv".concat(level, "RowItem")]),
        rowItemSelected: cx(styles.rowItemSelected, styles["lv".concat(level, "RowItemSelected")]),
        list: cx(styles.list, styles["lv".concat(level + 1, "List")]),
        listItem: cx(styles.listItem, styles["lv".concat(level + 1, "ListItem")]),
        listItemSelected: cx(styles.listItemSelected, styles["lv".concat(level + 1, "ListItemSelected")])
      });
    }
  }, props));
};

Collapse.Row = CollapsibleMenu.Row;
Collapse.RowItem = CollapsibleMenu.RowItem;
Collapse.Action = CollapsibleMenu.Action;
Collapse.List = CollapsibleMenu.List;
Collapse.ListItem = CollapsibleMenu.ListItem;
Collapse.propTypes = {
  useStyles: PropTypes.func,
  level: PropTypes.number
};
Collapse.defaultProps = {};
export default Collapse;