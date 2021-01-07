import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Birthday, { BirthdayConsumer } from './index';
describe('BirthdayTextField', function () {
  it('render without clashes', function () {
    expect(function () {
      render( /*#__PURE__*/React.createElement(Birthday, null, /*#__PURE__*/React.createElement(Birthday.Day, null), /*#__PURE__*/React.createElement(Birthday.Month, null), /*#__PURE__*/React.createElement(Birthday.Year, null)));
    }).not.toThrow();
  });
  it('able to find inputs', function () {
    var _render = render( /*#__PURE__*/React.createElement(Birthday, {
      id: 'dob',
      label: 'Date of birth'
    }, /*#__PURE__*/React.createElement(Birthday.Day, {
      placeholder: 'DD'
    }), /*#__PURE__*/React.createElement(Birthday.Month, {
      placeholder: 'MM'
    }), /*#__PURE__*/React.createElement(Birthday.Year, {
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
    var _render2 = render( /*#__PURE__*/React.createElement(Birthday, {
      id: 'dob',
      label: 'Date of birth'
    }, /*#__PURE__*/React.createElement(Birthday.Day, {
      placeholder: 'DD'
    }))),
        getByPlaceholderText = _render2.getByPlaceholderText,
        getByLabelText = _render2.getByLabelText;

    var input = getByPlaceholderText('DD');
    fireEvent.change(input, {
      target: {
        value: '09'
      }
    });
    expect(input).toHaveValue('09');
    expect(getByLabelText('Date of birth')).toHaveValue('09');
  });
  it('update value when only month changes', function () {
    var _render3 = render( /*#__PURE__*/React.createElement(Birthday, {
      id: 'dob',
      label: 'Date of birth'
    }, /*#__PURE__*/React.createElement(Birthday.Month, {
      placeholder: 'MM'
    }))),
        getByPlaceholderText = _render3.getByPlaceholderText,
        getByLabelText = _render3.getByLabelText;

    var input = getByPlaceholderText('MM');
    fireEvent.change(input, {
      target: {
        value: '12'
      }
    });
    expect(input).toHaveValue('12');
    expect(getByLabelText('Date of birth')).toHaveValue('12');
  });
  it('update value when only year changes', function () {
    var _render4 = render( /*#__PURE__*/React.createElement(Birthday, {
      id: 'dob',
      label: 'Date of birth'
    }, /*#__PURE__*/React.createElement(Birthday.Year, {
      placeholder: 'YYYY'
    }))),
        getByPlaceholderText = _render4.getByPlaceholderText,
        getByLabelText = _render4.getByLabelText;

    var input = getByPlaceholderText('YYYY');
    fireEvent.change(input, {
      target: {
        value: '1994'
      }
    });
    expect(input).toHaveValue('1994');
    expect(getByLabelText('Date of birth')).toHaveValue('1994');
  });
  it('update value when day & month change (ISO-8601)', function () {
    var _render5 = render( /*#__PURE__*/React.createElement(Birthday, {
      id: 'dob',
      label: 'Date of birth'
    }, /*#__PURE__*/React.createElement(Birthday.Day, {
      placeholder: 'DD'
    }), /*#__PURE__*/React.createElement(Birthday.Month, {
      placeholder: 'MM'
    }))),
        getByPlaceholderText = _render5.getByPlaceholderText,
        getByLabelText = _render5.getByLabelText;

    var dayInput = getByPlaceholderText('DD');
    var monthInput = getByPlaceholderText('MM');
    fireEvent.change(dayInput, {
      target: {
        value: '29'
      }
    });
    fireEvent.change(monthInput, {
      target: {
        value: '04'
      }
    });
    expect(getByLabelText('Date of birth')).toHaveValue('--04-29');
  });
  it('update value when all change (ISO-8601)', function () {
    var _render6 = render( /*#__PURE__*/React.createElement(Birthday, {
      id: 'dob',
      label: 'Date of birth'
    }, /*#__PURE__*/React.createElement(Birthday.Day, {
      placeholder: 'DD'
    }), /*#__PURE__*/React.createElement(Birthday.Month, {
      placeholder: 'MM'
    }), /*#__PURE__*/React.createElement(Birthday.Year, {
      placeholder: 'YYYY'
    }))),
        getByPlaceholderText = _render6.getByPlaceholderText,
        getByLabelText = _render6.getByLabelText;

    var dayInput = getByPlaceholderText('DD');
    var monthInput = getByPlaceholderText('MM');
    var yearInput = getByPlaceholderText('YYYY');
    fireEvent.change(dayInput, {
      target: {
        value: '29'
      }
    });
    fireEvent.change(monthInput, {
      target: {
        value: '04'
      }
    });
    fireEvent.change(yearInput, {
      target: {
        value: '2000'
      }
    });
    expect(getByLabelText('Date of birth')).toHaveValue('2000-04-29');
  });
  it('attach zero to day or month if user type only 1 char', function () {
    var _render7 = render( /*#__PURE__*/React.createElement(Birthday, {
      id: 'dob',
      label: 'Date of birth'
    }, /*#__PURE__*/React.createElement(Birthday.Day, {
      placeholder: 'DD'
    }), /*#__PURE__*/React.createElement(Birthday.Month, {
      placeholder: 'MM'
    }))),
        getByPlaceholderText = _render7.getByPlaceholderText;

    var dayInput = getByPlaceholderText('DD');
    fireEvent.change(dayInput, {
      target: {
        value: '2'
      }
    });
    fireEvent.blur(dayInput);
    expect(dayInput).toHaveValue('02');
    var monthInput = getByPlaceholderText('MM');
    fireEvent.change(monthInput, {
      target: {
        value: '6'
      }
    });
    fireEvent.blur(monthInput);
    expect(monthInput).toHaveValue('06');
  });
  it('able to disable prefix zero', function () {
    var _render8 = render( /*#__PURE__*/React.createElement(Birthday, {
      id: 'dob',
      label: 'Date of birth'
    }, /*#__PURE__*/React.createElement(Birthday.Day, {
      placeholder: 'DD',
      zeroPrefixDisabled: true
    }), /*#__PURE__*/React.createElement(Birthday.Month, {
      placeholder: 'MM',
      zeroPrefixDisabled: true
    }))),
        getByPlaceholderText = _render8.getByPlaceholderText;

    var dayInput = getByPlaceholderText('DD');
    fireEvent.change(dayInput, {
      target: {
        value: '2'
      }
    });
    fireEvent.blur(dayInput);
    expect(dayInput).toHaveValue('2');
    var monthInput = getByPlaceholderText('MM');
    fireEvent.change(monthInput, {
      target: {
        value: '6'
      }
    });
    fireEvent.blur(monthInput);
    expect(monthInput).toHaveValue('6');
  });
  it('auto focus at next input when fill info complete', function () {
    var _render9 = render( /*#__PURE__*/React.createElement(Birthday, {
      id: 'dob',
      label: 'Date of birth'
    }, /*#__PURE__*/React.createElement(Birthday.Day, {
      placeholder: 'DD',
      nextFocus: 'birthday.month'
    }), /*#__PURE__*/React.createElement(Birthday.Month, {
      name: 'birthday.month',
      nextFocus: 'birthday.year'
    }), /*#__PURE__*/React.createElement(Birthday.Year, {
      name: 'birthday.year'
    }))),
        getByPlaceholderText = _render9.getByPlaceholderText,
        container = _render9.container;

    var dayInput = getByPlaceholderText('DD');
    fireEvent.focus(dayInput);
    fireEvent.change(dayInput, {
      target: {
        value: '02'
      }
    });
    var monthInput = container.querySelector('input[name="birthday.month"]');
    expect(document.activeElement === monthInput).toBeTruthy();
    fireEvent.change(monthInput, {
      target: {
        value: '12'
      }
    });
    var yearInput = container.querySelector('input[name="birthday.year"]');
    expect(document.activeElement === yearInput).toBeTruthy();
  });
  it('able to reset to initialValue', function () {
    var _render10 = render( /*#__PURE__*/React.createElement(Birthday, {
      id: 'dob',
      label: 'Date of birth',
      display: {
        day: '29',
        month: '04',
        year: '2000'
      },
      value: '2000-04-29'
    }, /*#__PURE__*/React.createElement(Birthday.Day, {
      placeholder: 'DD'
    }), /*#__PURE__*/React.createElement(Birthday.Month, {
      placeholder: 'MM'
    }), /*#__PURE__*/React.createElement(Birthday.Year, {
      placeholder: 'YYYY'
    }), /*#__PURE__*/React.createElement(BirthdayConsumer, null, function (_ref) {
      var reset = _ref.reset,
          clear = _ref.clear;
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
        "data-testid": 'reset-btn',
        onClick: function onClick() {
          return reset();
        }
      }), /*#__PURE__*/React.createElement("button", {
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
    fireEvent.change(dayInput, {
      target: {
        value: '12'
      }
    });
    fireEvent.change(monthInput, {
      target: {
        value: '12'
      }
    });
    fireEvent.change(yearInput, {
      target: {
        value: '1999'
      }
    });
    expect(getByLabelText('Date of birth')).toHaveValue('1999-12-12');
    fireEvent.click(getByTestId('reset-btn'));
    expect(getByLabelText('Date of birth')).toHaveValue('2000-04-29');
    fireEvent.click(getByTestId('clear-btn'));
    expect(getByLabelText('Date of birth')).toHaveValue('');
  });
  it('able to pass custom toValue fn', function () {
    var _render11 = render( /*#__PURE__*/React.createElement(Birthday, {
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
    }, /*#__PURE__*/React.createElement(Birthday.Day, {
      placeholder: 'DD'
    }), /*#__PURE__*/React.createElement(Birthday.Month, {
      placeholder: 'MM'
    }), /*#__PURE__*/React.createElement(Birthday.Year, {
      placeholder: 'YYYY'
    }))),
        getByPlaceholderText = _render11.getByPlaceholderText,
        getByLabelText = _render11.getByLabelText;

    expect(getByLabelText('Date of birth')).toHaveValue('2000-04-29');
    var monthInput = getByPlaceholderText('MM');
    fireEvent.change(monthInput, {
      target: {
        value: '7'
      }
    });
    fireEvent.blur(monthInput);
    expect(getByLabelText('Date of birth')).toHaveValue('29/07/2000');
  });
});