"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "galaxyInfoStyles", {
  enumerable: true,
  get: function get() {
    return _galaxyInfo["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _galaxyInfo["default"];
  }
});
exports.useGalaxyInfoStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@material-ui/core/styles/makeStyles"));

var _galaxyInfo = _interopRequireDefault(require("./galaxyInfo.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useGalaxyInfoStyles = (0, _makeStyles["default"])(_galaxyInfo["default"], {
  name: 'GalaxyInfo'
});
exports.useGalaxyInfoStyles = useGalaxyInfoStyles;