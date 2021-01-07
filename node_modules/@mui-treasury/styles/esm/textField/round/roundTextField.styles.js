function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import styles from '../../inputBase/round/roundInputBase.styles';
export var roundInputBaseStyles = function roundInputBaseStyles(theme) {
  return _extends(_extends({}, styles(theme)), {}, {
    formControl: {
      'label + &': {
        marginTop: 24
      }
    }
  });
};
export var roundInputLabelStyles = function roundInputLabelStyles(_ref) {
  var palette = _ref.palette;
  return {
    root: {
      color: palette.grey[700],
      marginLeft: '0.75rem'
    },
    error: {},
    focused: {},
    shrink: {
      transform: 'translate(0, 1.5px) scale(1)'
    }
  };
};
export var roundHelperTextStyles = function roundHelperTextStyles() {
  return {
    root: {
      marginLeft: '0.75rem'
    }
  };
};