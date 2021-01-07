function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import { useCtxStyles } from '../StylesContext';

var Parent = function Parent(_ref) {
  var _ref$useStyles = _ref.useStyles,
      useStyles = _ref$useStyles === void 0 ? useCtxStyles : _ref$useStyles,
      className = _ref.className,
      level = _ref.level,
      active = _ref.active,
      collapsed = _ref.collapsed,
      props = _objectWithoutProperties(_ref, ["useStyles", "className", "level", "active", "collapsed"]);

  var classes = useStyles();
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cx(classes.parent, active && classes["parentActive"], collapsed && classes["parentCollapsed"], level && classes["lv".concat(level, "Parent")], active && classes["lv".concat(level, "ParentActive")], collapsed && classes["lv".concat(level, "ParentCollapsed")], className)
  }, props));
};

Parent.propTypes = {
  level: PropTypes.number,
  className: PropTypes.string,
  useStyles: PropTypes.func,
  active: PropTypes.bool,
  collapsed: PropTypes.bool
};
export default Parent;