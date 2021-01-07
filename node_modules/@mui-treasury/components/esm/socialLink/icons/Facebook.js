function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

function SvgComponent(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 320 512",
    width: "1em",
    height: "1em"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
  }));
}

export default SvgComponent;