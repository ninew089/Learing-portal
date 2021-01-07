function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import * as Icons from './icons';
export default function SocialIcon(_ref) {
  var brand = _ref.brand,
      props = _objectWithoutProperties(_ref, ["brand"]);

  var Icon = React.useMemo(function () {
    return Icons[brand];
  }, [brand]);

  if (!Icon) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn("brand: '".concat(brand, "' is invalid for SocialIcon"));
    }

    return null;
  }

  return /*#__PURE__*/React.createElement(Icon, props);
}