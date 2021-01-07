"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _index = _interopRequireWildcard(require("./index"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('BirthdayTextField', function () {
  it('render without clashes', function () {
    expect(function () {
      (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_index["default"], null, /*#__PURE__*/_react["default"].createElement(_index["default"].Day, null), /*#__PURE__*/_react["default"].createElement(_index["default"].Month, null), /*#__PURE__*/_react["default"].createElement(_index["default"].Year, null)));
    }).not.toThrow();
  });
  it('able to find inputs', function () {
    var _render = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_index["default"], {
      id: 'dob',
      label: 'Date of birth'
    }, /*#__PURE__*/_react["default"].createElement(_index["default"].Day, {
      placeholder: 'DD'
    }), /*#__PURE__*/_react["default"].createElement(_index["default"].Month, {
      placeholder: 'MM'
    }), /*#__PURE__*/_react["default"].createElement(_index["default"].Year, {
      placeholder: 'YYYY'
    }))),
        getByPlaceholderText = _render.getByPlaceholderText,
        getByLabelText = _render.getByLabelText;

    expect(getByLabelText('Date of birth')).toHaveValue('');
    expect(getByPlaceholderText('DD')).toHaveValue('');
    expect(getByPlaceholderText('MM')).toHaveValue('');
    expect(getByPlaceholderText('YYYY')).toHaveValue('');
  });
  it('update value when day changes', function () {
    var _render2 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_index["default"], {
      id: 'dob',
      label: 'Date of birth'
    }, /*#__PURE__*/_react["default"].createElement(_index["default"].Day, {
      placeholder: 'DD'
    }))),
        getByPlaceholderText = _render2.getByPlaceholderText,
        getByLabelText = _render2.getByLabelText;

    var input = getByPlaceholderText('DD');

    _react2.fireEvent.change(input, {
      target: {
        value: '09'
      }
    });

    expect(input).toHaveValue('09');
    expect(getByLabelText('Date of birth')).toHaveValue('09');
  });
  it('update value when only month changes', function () {
    var _render3 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_index["default"], {
      id: 'dob',
      label: 'Date of birth'
    }, /*#__PURE__*/_react["default"].createElement(_index["default"].Month, {
      placeholder: 'MM'
    }))),
        getByPlaceholderText = _render3.getByPlaceholderText,
        getByLabelText = _render3.getByLabelText;

    var input = getByPlaceholderText('MM');

    _react2.fireEvent.change(input, {
      target: {
        value: '12'
      }
    });

    expect(input).toHaveValue('12');
    expect(getByLabelText('Date of birth')).toHaveValue('12');
  });
  it('update value when only year changes', function () {
    var _render4 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_index["default"], {
      id: 'dob',
      label: 'Date of birth'
    }, /*#__PURE__*/_react["default"].createElement(_index["default"].Year, {
      placeholder: 'YYYY'
    }))),
        getByPlaceholderText = _render4.getByPlaceholderText,
        getByLabelText = _render4.getByLabelText;

    var input = getByPlaceholderText('YYYY');

    _react2.fireEvent.change(input, {
      target: {
        value: '1994'
      }
    });

    expect(input).toHaveValue('1994');
    expect(getByLabelText('Date of birth')).toHaveValue('1994');
  });
  it('update value when day & month change (ISO-8601)', function () {
    var _render5 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_index["default"], {
      id: 'dob',
      label: 'Date of birth'
    }, /*#__PURE__*/_react["default"].createElement(_index["default"].Day, {
      placeholder: 'DD'
    }), /*#__PURE__*/_react["default"].createElement(_index["default"].Month, {
      placeholder: 'MM'
    }))),
        getByPlaceholderText = _render5.getByPlaceholderText,
        getByLabelText = _render5.getByLabelText;

    var dayInput = getByPlaceholderText('DD');
    var monthInput = getByPlaceholderText('MM');

    _react2.fireEvent.change(dayInput, {
      target: {
        value: '29'
      }
    });

    _react2.fireEvent.change(monthInput, {
      target: {
        value: '04'
      }
    });

    expect(getByLabelText('Date of birth')).toHaveValue('--04-29');
  });
  it('update value when all change (ISO-8601)', function () {
    var _render6 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_index["default"], {
      id: 'dob',
      label: 'Date of birth'
    }, /*#__PURE__*/_react["default"].createElement(_index["default"].Day, {
      placeholder: 'DD'
    }), /*#__PURE__*/_react["default"].createElement(_index["default"].Month, {
      placeholder: 'MM'
    }), /*#__PURE__*/_react["default"].createElement(_index["default"].Year, {
      placeholder: 'YYYY'
    }))),
        getByPlaceholderText = _render6.getByPlaceholderText,
        getByLabelText = _render6.getByLabelText;

    var dayInput = getByPlaceholderText('DD');
    var monthInput = getByPlaceholderText('MM');
    var yearInput = getByPlaceholderText('YYYY');

    _react2.fireEvent.change(dayInput, {
      target: {
        value: '29'
      }
    });

    _react2.fireEvent.change(monthInput, {
      target: {
        value: '04'
      }
    });

    _react2.fireEvent.change(yearInput, {
      target: {
        value: '2000'
      }
    });

    expect(getByLabelText('Date of birth')).toHaveValue('2000-04-29');
  });
  it('attach zero to day or month if user type only 1 char', function () {
    var _render7 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_index["default"], {
      id: 'dob',
      label: 'Date of birth'
    }, /*#__PURE__*/_react["default"].createElement(_index["default"].Day, {
      placeholder: 'DD'
    }), /*#__PURE__*/_react["default"].createElement(_index["default"].Month, {
      placeholder: 'MM'
    }))),
        getByPlaceholderText = _render7.getByPlaceholderText;

    var dayInput = getByPlaceholderText('DD');

    _react2.fireEvent.change(dayInput, {
      target: {
        value: '2'
      }
    });

    _react2.fireEvent.blur(dayInput);

    expect(dayInput).toHaveValue('02');
    var monthInput = getByPlaceholderText('MM');

    _react2.fireEvent.change(monthInput, {
      target: {
        value: '6'
      }
    });

    _react2.fireEvent.blur(monthInput);

    expect(monthInput).toHaveValue('06');
  });
  it('able to disable prefix zero', function () {
    var _render8 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_index["default"], {
      id: 'dob',
      label: 'Date of birth'
    }, /*#__PURE__*/_react["default"].createElement(_index["default"].Day, {
      placeholder: 'DD',
      zeroPrefixDisabled: true
    }), /*#__PURE__*/_react["default"].createElement(_index["default"].Month, {
      placeholder: 'MM',
      zeroPrefixDisabled: true
    }))),
        getByPlaceholderText = _render8.getByPlaceholderText;

    var dayInput = getByPlaceholderText('DD');

    _react2.fireEvent.change(dayInput, {
      target: {
        value: '2'
      }
    });

    _react2.fireEvent.blur(dayInput);

    expect(dayInput).toHaveValue('2');
    var monthInput = getByPlaceholderText('MM');

    _react2.fireEvent.change(monthInput, {
      target: {
        value: '6'
      }
    });

    _react2.fireEvent.blur(monthInput);

    expect(monthInput).toHaveValue('6');
  });
  it('auto focus at next input when fill info complete', function () {
    var _render9 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_index["default"], {
      id: 'dob',
      label: 'Date of birth'
    }, /*#__PURE__*/_react["default"].createElement(_index["default"].Day, {
      placeholder: 'DD',
      nextFocus: 'birthday.month'
    }), /*#__PURE__*/_react["default"].createElement(_index["default"].Month, {
      name: 'birthday.month',
      nextFocus: 'birthday.year'
    }), /*#__PURE__*/_react["default"].createElement(_index["default"].Year, {
      name: 'birthday.year'
    }))),
        getByPlaceholderText = _render9.getByPlaceholderText,
        container = _render9.container;

    var dayInput = getByPlaceholderText('DD');

    _react2.fireEvent.focus(dayInput);

    _react2.fireEvent.change(dayInput, {
      target: {
        value: '02'
      }
    });

    var monthInput = container.querySelector('input[name="birthday.month"]');
    expect(document.activeElement === monthInput).toBeTruthy();

    _react2.fireEvent.change(monthInput, {
      target: {
        value: '12'
      }
    });

    var yearInput = container.querySelector('input[name="birthday.year"]');
    expect(document.activeElement === yearInput).toBeTruthy();
  });
  it('able to reset to initialValue', function () {
    var _render10 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_index["default"], {
      id: 'dob',
      label: 'Date of birth',
      display: {
        day: '29',
        month: '04',
        year: '2000'
      },
      value: '2000-04-29'
    }, /*#__PURE__*/_react["default"].createElement(_index["default"].Day, {
      placeholder: 'DD'
    }), /*#__PURE__*/_react["default"].createElement(_index["default"].Month, {
      placeholder: 'MM'
    }), /*#__PURE__*/_react["default"].createElement(_index["default"].Year, {
      placeholder: 'YYYY'
    }), /*#__PURE__*/_react["default"].createElement(_index.BirthdayConsumer, null, function (_ref) {
      var reset = _ref.reset,
          clear = _ref.clear;
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("button", {
        "data-testid": 'reset-btn',
        onClick: function onClick() {
          return reset();
        }
      }), /*#__PURE__*/_react["default"].createElement("button", {
        "data-testid": 'clear-btn',
        onClick: function onClick() {
          return clear();
        }
      }));
    }))),
        getByTestId = _render10.getByTestId,
        getByPlaceholderText = _render10.getByPlaceholderText,
        getByLabelText = _render10.getByLabelText;

    expect(getByLabelText('Date of birth')).toHaveValue('2000-04-29');
    var dayInput = getByPlaceholderText('DD');
    var monthInput = getByPlaceholderText('MM');
    var yearInput = getByPlaceholderText('YYYY');

    _react2.fireEvent.change(dayInput, {
      target: {
        value: '12'
      }
    });

    _react2.fireEvent.change(monthInput, {
      target: {
        value: '12'
      }
    });

    _react2.fireEvent.change(yearInput, {
      target: {
        value: '1999'
      }
    });

    expect(getByLabelText('Date of birth')).toHaveValue('1999-12-12');

    _react2.fireEvent.click(getByTestId('reset-btn'));

    expect(getByLabelText('Date of birth')).toHaveValue('2000-04-29');

    _react2.fireEvent.click(getByTestId('clear-btn'));

    expect(getByLabelText('Date of birth')).toHaveValue('');
  });
  it('able to pass custom toValue fn', function () {
    var _render11 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_index["default"], {
      id: 'dob',
      label: 'Date of birth',
      display: {
        day: '29',
        month: '04',
        year: '2000'
      },
      value: '2000-04-29',
      toValue: function toValue(_ref2) {
        var day = _ref2.day,
            month = _ref2.month,
            year = _ref2.year;
        return "".concat(day, "/").concat(month, "/").concat(year);
      }
    }, /*#__PURE__*/_react["default"].createElement(_index["default"].Day, {
      placeholder: 'DD'
    }), /*#__PURE__*/_react["default"].createElement(_index["default"].Month, {
      placeholder: 'MM'
    }), /*#__PURE__*/_react["default"].createElement(_index["default"].Year, {
      placeholder: 'YYYY'
    }))),
        getByPlaceholderText = _render11.getByPlaceholderText,
        getByLabelText = _render11.getByLabelText;

    expect(getByLabelText('Date of birth')).toHaveValue('2000-04-29');
    var monthInput = getByPlaceholderText('MM');

    _react2.fireEvent.change(monthInput, {
      target: {
        value: '7'
      }
    });

    _react2.fireEvent.blur(monthInput);

    expect(getByLabelText('Date of birth')).toHaveValue('29/07/2000');
  });
});