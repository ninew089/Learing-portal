import React from 'react';
import { StylesProvider } from './StylesContext';
import { useDefaultStyles } from './defaultStyles';

function CategoryProvider(_ref) {
  var children = _ref.children,
      _ref$useStyles = _ref.useStyles,
      useStyles = _ref$useStyles === void 0 ? useDefaultStyles : _ref$useStyles;
  var styles = useStyles();
  return /*#__PURE__*/React.createElement(StylesProvider, {
    styles: styles
  }, children);
}

export default CategoryProvider;