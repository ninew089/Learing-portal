function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import styles from '../../inputBase/shade/shadeInputBase.styles';
export var shadeInputBaseStyles = function shadeInputBaseStyles(theme) {
  return _extends(_extends({}, styles(theme)), {}, {
    formControl: {
      'label + &': {
        marginTop: 24
      }
    }
  });
};
export var shadeInputLabelStyles = function shadeInputLabelStyles(_ref) {
  var palette = _ref.palette;
  return {
    root: {
      color: palette.text.primary,
      '&$focused:not($error)': {
        color: palette.text.primary
      }
    },
    error: {},
    focused: {},
    shrink: {
      transform: 'translate(0, 1.5px) scale(0.8)',
      letterSpacing: 1
    }
  };
};