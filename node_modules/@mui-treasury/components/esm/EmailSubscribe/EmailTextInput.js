function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import cx from 'clsx';
import { useCtxStyles } from './StylesContext';
export var EmailTextInput = forwardRef(function (props, ref) {
  var styles = useCtxStyles();
  return /*#__PURE__*/React.createElement("input", _extends({
    placeholder: "Type your email",
    name: "email"
  }, props, {
    className: cx(styles.input, props.className),
    ref: ref,
    type: "email",
    required: true
  }));
});