function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { getThemeColor } from '@mui-treasury/utils';
var initialSize = 20;

var createRip = function createRip(size, bgcolor) {
  return {
    width: size / 2,
    position: 'relative',
    margin: "".concat(size / 2, "px 0"),
    backgroundColor: bgcolor
  };
};

var createPseudoElm = function createPseudoElm(size) {
  return {
    boxSizing: 'content-box',
    display: 'block',
    content: '" "',
    width: size,
    height: size,
    borderRadius: '50%',
    position: 'absolute',
    zIndex: 1,
    borderWidth: size / 4,
    borderStyle: 'solid',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent'
  };
};

var min = function min(val) {
  var number = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;
  return val < number ? number : val;
};

export default (function (_ref) {
  var palette = _ref.palette;
  return {
    left: function left(_ref2) {
      var _ref2$size = _ref2.size,
          size = _ref2$size === void 0 ? initialSize : _ref2$size,
          _ref2$leftColor = _ref2.leftColor,
          leftColor = _ref2$leftColor === void 0 ? '#fff' : _ref2$leftColor;
      return _extends(_extends({}, createRip(size, getThemeColor(palette, leftColor))), {}, {
        '&:before, &:after': _extends({
          left: size / 2
        }, createPseudoElm(size)),
        '&:before': {
          top: -size / 2,
          transform: 'translate(-50%, -50%) rotate(45deg)',
          borderBottomColor: getThemeColor(palette, leftColor),
          borderTopColor: 'transparent'
        },
        '&:after': {
          bottom: -size / 2,
          transform: 'translate(-50%, 50%) rotate(-45deg)',
          borderTopColor: getThemeColor(palette, leftColor),
          borderBottomColor: 'transparent'
        },
        '& $sheet': {
          right: 0,
          backgroundColor: leftColor
        },
        '& $tear': {
          right: 0,
          transform: 'translateX(50%)'
        }
      });
    },
    right: function right(_ref3) {
      var _ref3$size = _ref3.size,
          size = _ref3$size === void 0 ? initialSize : _ref3$size,
          _ref3$rightColor = _ref3.rightColor,
          rightColor = _ref3$rightColor === void 0 ? '#fff' : _ref3$rightColor;
      return _extends(_extends({}, createRip(size, getThemeColor(palette, rightColor))), {}, {
        '&:before, &:after': _extends(_extends({}, createPseudoElm(size)), {}, {
          left: 0
        }),
        '&:before': {
          top: -size / 2,
          transform: 'translate(-50%, -50%) rotate(-45deg)',
          borderBottomColor: getThemeColor(palette, rightColor),
          borderTopColor: 'transparent'
        },
        '&:after': {
          bottom: -size / 2,
          transform: 'translate(-50%, 50%) rotate(45deg)',
          borderTopColor: getThemeColor(palette, rightColor),
          borderBottomColor: 'transparent'
        },
        '& $sheet': {
          left: 0,
          backgroundColor: rightColor
        },
        '& $tear': {
          left: 0,
          transform: 'translateX(-50%)'
        }
      });
    },
    sheet: function sheet(_ref4) {
      var _ref4$size = _ref4.size,
          size = _ref4$size === void 0 ? initialSize : _ref4$size;
      return {
        width: size,
        height: '100%',
        position: 'absolute',
        overflow: 'hidden'
      };
    },
    tear: function tear(_ref5) {
      var _ref5$size = _ref5.size,
          size = _ref5$size === void 0 ? initialSize : _ref5$size,
          _ref5$tearColor = _ref5.tearColor,
          tearColor = _ref5$tearColor === void 0 ? '#000' : _ref5$tearColor;
      return {
        position: 'absolute',
        borderRight: "".concat(min(size / 6), "px dotted ").concat(getThemeColor(palette, tearColor)),
        top: 0,
        height: '100%'
      };
    }
  };
});