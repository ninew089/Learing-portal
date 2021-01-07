"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _color = _interopRequireDefault(require("color"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default() {
  return {
    root: function root(_ref) {
      var collapsed = _ref.collapsed;
      return {
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        minHeight: 32,
        '-webkit-font-smoothing': 'antialiased',
        padding: collapsed ? '0px 6px' : '0 12px 0 26px',
        width: collapsed ? 32 : 'auto',
        borderRadius: collapsed ? 20 : 0,
        overflow: collapsed ? 'hidden' : 'visible',
        marginLeft: collapsed ? 20 : '',
        fontSize: 14,
        '& > svg:first-child': {
          marginRight: 18,
          fontSize: 20,
          opacity: 0.54
        },
        '& .MuiLabel-amount': {
          fontSize: '0.75rem',
          letterSpacing: 0.3,
          marginLeft: 'auto',
          paddingLeft: 16
        }
      };
    },
    selected: function selected(_ref2) {
      var _ref2$color = _ref2.color,
          color = _ref2$color === void 0 ? '#202124' : _ref2$color;
      return {
        fontWeight: 'bold',
        color: color,
        backgroundColor: "".concat((0, _color["default"])(color).saturate(0.5).lighten(0.9).toString(), " !important"),
        '& > svg:first-child': {
          opacity: 1
        }
      };
    }
  };
};

exports["default"] = _default;