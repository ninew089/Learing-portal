"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "n01SwitchStyles", {
  enumerable: true,
  get: function get() {
    return _n01Switch["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _n01Switch["default"];
  }
});
exports.useN01SwitchStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@material-ui/core/styles/makeStyles"));

var _n01Switch = _interopRequireDefault(require("./n01Switch.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useN01SwitchStyles = (0, _makeStyles["default"])(_n01Switch["default"], {
  name: "N01Switch"
});
exports.useN01SwitchStyles = useN01SwitchStyles;