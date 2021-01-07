"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var getSpacing = function getSpacing(fn, space) {
  return Array.isArray(space) ? fn.apply(void 0, _toConsumableArray(space)) : fn(space);
};

var createTargetStyle = function createTargetStyle(_ref, spacing) {
  var selector = _ref.selector,
      target = _ref.target,
      cssProp = _ref.cssProp,
      space = _ref.space,
      _ref$firstExcluded = _ref.firstExcluded,
      firstExcluded = _ref$firstExcluded === void 0 ? false : _ref$firstExcluded,
      _ref$lastExcluded = _ref.lastExcluded,
      lastExcluded = _ref$lastExcluded === void 0 ? false : _ref$lastExcluded;
  return _extends(_extends(_defineProperty({}, "& ".concat(selector, " ").concat(target), _defineProperty({}, cssProp, getSpacing(spacing, space))), firstExcluded && _defineProperty({}, "& ".concat(selector, " ").concat(target, ":first-child"), _defineProperty({}, cssProp, 'unset'))), lastExcluded && _defineProperty({}, "& ".concat(selector, " ").concat(target, ":last-child"), _defineProperty({}, cssProp, 'unset')));
};

var reduceTargets = function reduceTargets(_ref4, spacing) {
  var targets = _ref4.targets,
      props = _objectWithoutProperties(_ref4, ["targets"]);

  return targets ? targets.reduce(function (result, curr) {
    return _extends(_extends({}, result), createTargetStyle(_extends(_extends({}, props), {}, {
      target: curr
    }), spacing));
  }, {}) : {};
};

var _default = function _default(_ref5) {
  var spacing = _ref5.spacing;
  return {
    parent: function parent(props) {
      var _props$target = props.target,
          target = _props$target === void 0 ? '*' : _props$target,
          _props$selector = props.selector,
          selector = _props$selector === void 0 ? '>' : _props$selector,
          _props$space = props.space,
          space = _props$space === void 0 ? 1 : _props$space,
          _props$cssProp = props.cssProp,
          cssProp = _props$cssProp === void 0 ? 'marginLeft' : _props$cssProp;

      var parsedProps = _extends(_extends({}, props), {}, {
        selector: selector,
        target: target,
        cssProp: cssProp,
        space: space
      });

      return _extends(_extends({}, createTargetStyle(parsedProps, spacing)), reduceTargets(parsedProps, spacing));
    },
    child: function child(props) {
      var _props$target2 = props.target,
          target = _props$target2 === void 0 ? '*' : _props$target2,
          _props$selector2 = props.selector,
          selector = _props$selector2 === void 0 ? '~' : _props$selector2,
          _props$space2 = props.space,
          space = _props$space2 === void 0 ? 1 : _props$space2,
          _props$cssProp2 = props.cssProp,
          cssProp = _props$cssProp2 === void 0 ? 'marginLeft' : _props$cssProp2;

      var parsedProps = _extends(_extends({}, props), {}, {
        selector: selector,
        target: target,
        cssProp: cssProp,
        space: space
      });

      return _extends(_extends({}, createTargetStyle(parsedProps, spacing)), reduceTargets(parsedProps, spacing));
    }
  };
};

exports["default"] = _default;