function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import SwitchToggle from '@mui-treasury/components/toggle/switch';
import { useCtxStyles } from '../StylesContext';

var Action = function Action(_ref) {
  var Component = _ref.component,
      _ref$useStyles = _ref.useStyles,
      useStyles = _ref$useStyles === void 0 ? useCtxStyles : _ref$useStyles,
      props = _objectWithoutProperties(_ref, ["component", "useStyles"]);

  var classes = useStyles(props);

  var useOverrideStyles = function useOverrideStyles() {
    return {
      root: classes.action,
      toggled: classes.actionToggled,
      button: classes.actionButton
    };
  };

  if (Component) return /*#__PURE__*/React.createElement(Component, _extends({
    useStyles: useOverrideStyles
  }, props));
  return /*#__PURE__*/React.createElement(SwitchToggle, _extends({
    button: true,
    useStyles: useOverrideStyles
  }, props));
};

Action.propTypes = {
  component: PropTypes.elementType,
  useStyles: PropTypes.func
};
export default Action;