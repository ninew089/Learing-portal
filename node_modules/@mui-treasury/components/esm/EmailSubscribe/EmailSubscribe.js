function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import cx from 'clsx';
import { StylesProvider, StylesConsumer } from './StylesContext';
import { useDefaultStyles } from './defaultStyles';
export function EmailSubscribe(_ref) {
  var onSubmit = _ref.onSubmit,
      children = _ref.children,
      className = _ref.className,
      _ref$useStyles = _ref.useStyles,
      useStyles = _ref$useStyles === void 0 ? useDefaultStyles : _ref$useStyles,
      inputClearedAfterSubmit = _ref.inputClearedAfterSubmit,
      props = _objectWithoutProperties(_ref, ["onSubmit", "children", "className", "useStyles", "inputClearedAfterSubmit"]);

  function handleSubmit(e) {
    e.preventDefault();
    var target = e.target;

    if (onSubmit) {
      onSubmit(target.email.value);

      if (inputClearedAfterSubmit) {
        target.email.value = '';
      }
    }
  }

  var styles = useStyles();
  return /*#__PURE__*/React.createElement(StylesProvider, {
    styles: styles
  }, /*#__PURE__*/React.createElement(StylesConsumer, null, function (styles) {
    return /*#__PURE__*/React.createElement("form", _extends({
      onSubmit: handleSubmit
    }, props, {
      className: cx(styles.form, className)
    }), children);
  }));
}