"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BirthdayProvider = exports.BirthdayConsumer = exports.useNextFocus = exports.useBirthday = exports.prefixZero = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _useDeepCompareEffect = _interopRequireDefault(require("use-deep-compare-effect"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var BirthdayContext = _react["default"].createContext();

var TYPES = {
  CHANGE_DAY: 'CHANGE_DAY',
  CHANGE_MONTH: 'CHANGE_MONTH',
  CHANGE_YEAR: 'CHANGE_YEAR',
  RESET: 'RESET',
  CLEAR: 'CLEAR'
};

var defaultToValue = function defaultToValue() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      day = _ref.day,
      month = _ref.month,
      year = _ref.year;

  if (!day && !month && !year) return '';
  if (day && !month && !year) return day;
  if (!day && month && !year) return month;
  if (!day && !month && year) return year;
  if (day && month && !year) return "--".concat(month, "-").concat(day);
  return "".concat(year, "-").concat(month, "-").concat(day);
};

var prefixZero = function prefixZero() {
  var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return val.length === 1 ? "0".concat(val) : val;
};

exports.prefixZero = prefixZero;

var useBirthday = function useBirthday() {
  var ctx = _react["default"].useContext(BirthdayContext);

  if (!ctx) {
    throw new Error('useBirthday must be used under BirthdayProvider');
  }

  return ctx;
};

exports.useBirthday = useBirthday;

var useNextFocus = function useNextFocus(isValid, nextInputName) {
  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      focused = _useState2[0],
      setFocused = _useState2[1];

  (0, _react.useEffect)(function () {
    if (isValid && focused) {
      var input = document.querySelector("input[name=\"".concat(nextInputName, "\"]"));

      if (input) {
        input.focus();
        input.select();
      }
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [isValid]);
  return setFocused;
};

exports.useNextFocus = useNextFocus;
var BirthdayConsumer = BirthdayContext.Consumer;
exports.BirthdayConsumer = BirthdayConsumer;

var BirthdayProvider = function BirthdayProvider(_ref2) {
  var _display$day, _display$month, _display$year;

  var display = _ref2.display,
      _ref2$value = _ref2.value,
      value = _ref2$value === void 0 ? '' : _ref2$value,
      _ref2$toValue = _ref2.toValue,
      toValue = _ref2$toValue === void 0 ? defaultToValue : _ref2$toValue,
      onChange = _ref2.onChange,
      props = _objectWithoutProperties(_ref2, ["display", "value", "toValue", "onChange"]);

  var initialState = {
    day: (_display$day = display === null || display === void 0 ? void 0 : display.day) !== null && _display$day !== void 0 ? _display$day : '',
    month: (_display$month = display === null || display === void 0 ? void 0 : display.month) !== null && _display$month !== void 0 ? _display$month : '',
    year: (_display$year = display === null || display === void 0 ? void 0 : display.year) !== null && _display$year !== void 0 ? _display$year : '',
    value: value
  };

  var reducer = function reducer(state, action) {
    switch (action.type) {
      case TYPES.CHANGE_DAY:
        return _extends(_extends({}, state), {}, {
          day: action.value,
          value: toValue(_extends(_extends({}, state), {}, {
            day: action.value
          }))
        });

      case TYPES.CHANGE_MONTH:
        return _extends(_extends({}, state), {}, {
          month: action.value,
          value: toValue(_extends(_extends({}, state), {}, {
            month: action.value
          }))
        });

      case TYPES.CHANGE_YEAR:
        return _extends(_extends({}, state), {}, {
          year: action.value,
          value: toValue(_extends(_extends({}, state), {}, {
            year: action.value
          }))
        });

      case TYPES.RESET:
        return initialState;

      case TYPES.CLEAR:
        return {
          day: '',
          month: '',
          year: '',
          value: ''
        };

      default:
        return state;
    }
  };

  var _useReducer = (0, _react.useReducer)(reducer, initialState),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  var changeDay = function changeDay(day) {
    return dispatch({
      type: TYPES.CHANGE_DAY,
      value: day
    });
  };

  var changeMonth = function changeMonth(month) {
    return dispatch({
      type: TYPES.CHANGE_MONTH,
      value: month
    });
  };

  var changeYear = function changeYear(year) {
    return dispatch({
      type: TYPES.CHANGE_YEAR,
      value: year
    });
  };

  var reset = (0, _react.useCallback)(function () {
    return dispatch({
      type: TYPES.RESET
    });
  }, []);
  var clear = (0, _react.useCallback)(function () {
    return dispatch({
      type: TYPES.CLEAR
    });
  }, []);
  (0, _useDeepCompareEffect["default"])(function () {
    // eslint-disable-next-line no-unused-expressions
    onChange === null || onChange === void 0 ? void 0 : onChange(state.value, state);
  }, [state, onChange]);
  return /*#__PURE__*/_react["default"].createElement(BirthdayContext.Provider, _extends({
    value: _extends(_extends({}, state), {}, {
      TYPES: TYPES,
      dispatch: dispatch,
      changeDay: changeDay,
      changeMonth: changeMonth,
      changeYear: changeYear,
      reset: reset,
      clear: clear
    })
  }, props));
};

exports.BirthdayProvider = BirthdayProvider;
BirthdayProvider.propTypes = {
  display: _propTypes["default"].shape({
    day: _propTypes["default"].string,
    month: _propTypes["default"].string,
    year: _propTypes["default"].string
  }),
  onChange: _propTypes["default"].func,
  value: _propTypes["default"].string,
  toValue: _propTypes["default"].func
};
BirthdayProvider.defaultProps = {
  onChange: undefined,
  display: undefined,
  value: undefined,
  toValue: undefined
};