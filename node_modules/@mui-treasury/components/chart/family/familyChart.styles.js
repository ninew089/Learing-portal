"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _tree = require("../tree");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var defaultAvatarSize = 48;
var defaultPersonHeight = 72;

var getStretchLength = function getStretchLength(_ref) {
  var _ref$personHeight = _ref.personHeight,
      personHeight = _ref$personHeight === void 0 ? defaultPersonHeight : _ref$personHeight,
      _ref$length = _ref.length,
      length = _ref$length === void 0 ? _tree.DEFAULT_VAR.length : _ref$length;
  return personHeight + 3 * length;
};

var _default = function _default(_ref2) {
  var palette = _ref2.palette;
  return _extends(_extends({}, (0, _tree.treeChartStyles)()), {}, {
    spouse: {
      display: 'inline-flex',
      position: 'relative',
      marginLeft: function marginLeft(_ref3) {
        var _ref3$gutter = _ref3.gutter,
            gutter = _ref3$gutter === void 0 ? _tree.DEFAULT_VAR.gap : _ref3$gutter;
        return gutter * 2;
      },
      '&:before': {
        content: '""',
        position: 'absolute',
        width: function width(_ref4) {
          var _ref4$gutter = _ref4.gutter,
              gutter = _ref4$gutter === void 0 ? _tree.DEFAULT_VAR.gap : _ref4$gutter;
          return gutter * 2;
        },
        outline: _tree.DEFAULT_VAR.outline,
        top: '50%',
        left: function left(_ref5) {
          var _ref5$gutter = _ref5.gutter,
              gutter = _ref5$gutter === void 0 ? _tree.DEFAULT_VAR.gap : _ref5$gutter;
          return -gutter * 2;
        }
      }
    },
    spouseWithChildren: {
      '&:after': {
        content: '""',
        position: 'absolute',
        height: '50%',
        outline: function outline(_ref6) {
          var _ref6$outline = _ref6.outline,
              _outline = _ref6$outline === void 0 ? _tree.DEFAULT_VAR.outline : _ref6$outline;

          return _outline;
        },
        top: '50%',
        left: function left(_ref7) {
          var _ref7$gutter = _ref7.gutter,
              gutter = _ref7$gutter === void 0 ? _tree.DEFAULT_VAR.gap : _ref7$gutter;
          return -gutter;
        }
      }
    },
    hasOneSpouse: {
      '&:first-child:before': {
        left: function left(_ref8) {
          var _ref8$avatarSize = _ref8.avatarSize,
              avatarSize = _ref8$avatarSize === void 0 ? defaultAvatarSize : _ref8$avatarSize,
              _ref8$gutter = _ref8.gutter,
              gutter = _ref8$gutter === void 0 ? _tree.DEFAULT_VAR.gap : _ref8$gutter;
          return "calc(50% - ".concat(avatarSize / 2, "px - ").concat(gutter, "px)");
        }
      },
      '&:last-child:not(:first-child):before': {
        right: function right(_ref9) {
          var _ref9$avatarSize = _ref9.avatarSize,
              avatarSize = _ref9$avatarSize === void 0 ? defaultAvatarSize : _ref9$avatarSize,
              _ref9$gutter = _ref9.gutter,
              gutter = _ref9$gutter === void 0 ? _tree.DEFAULT_VAR.gap : _ref9$gutter;
          return "calc(50% + ".concat(avatarSize / 2, "px + ").concat(gutter, "px)");
        }
      }
    },
    stretch: {
      marginTop: getStretchLength,
      '&:before': {
        height: getStretchLength,
        top: function top(props) {
          return -getStretchLength(props);
        }
      }
    },
    personName: {
      fontSize: 12,
      color: palette.primary.main,
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      whiteSpace: 'pre-wrap',
      lineHeight: 1.2,
      margin: 0,
      width: 72,
      wordBreak: 'break-word'
    },
    personAvatar: {
      width: function width(_ref10) {
        var _ref10$avatarSize = _ref10.avatarSize,
            avatarSize = _ref10$avatarSize === void 0 ? defaultAvatarSize : _ref10$avatarSize;
        return avatarSize;
      },
      height: function height(_ref11) {
        var _ref11$avatarSize = _ref11.avatarSize,
            avatarSize = _ref11$avatarSize === void 0 ? defaultAvatarSize : _ref11$avatarSize;
        return avatarSize;
      },
      boxShadow: '0 2px 8px 0 rgba(0,0,0,0.1)'
    }
  });
};

exports["default"] = _default;