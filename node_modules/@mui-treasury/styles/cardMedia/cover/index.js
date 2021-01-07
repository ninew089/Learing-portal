"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "coverCardMediaStyles", {
  enumerable: true,
  get: function get() {
    return _coverCardMedia["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _coverCardMedia["default"];
  }
});
exports.useCoverCardMediaStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@material-ui/core/styles/makeStyles"));

var _coverCardMedia = _interopRequireDefault(require("./coverCardMedia.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useCoverCardMediaStyles = (0, _makeStyles["default"])(_coverCardMedia["default"]);
exports.useCoverCardMediaStyles = useCoverCardMediaStyles;