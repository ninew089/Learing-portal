"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _CollapsibleMenu = _interopRequireDefault(require("./CollapsibleMenu"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('CollapsibleMenu', function () {
  var renderComponent = function renderComponent() {
    return (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_CollapsibleMenu["default"], {
      renderWrapper: function renderWrapper(_ref) {
        var children = _ref.children,
            collapsed = _ref.collapsed;
        return /*#__PURE__*/_react["default"].createElement("div", {
          collapsed: "".concat(collapsed)
        }, children);
      },
      renderToggle: function renderToggle(_ref2) {
        var collapsed = _ref2.collapsed,
            onClick = _ref2.onClick;
        return /*#__PURE__*/_react["default"].createElement(_CollapsibleMenu["default"].Row, {
          "data-testid": "row"
        }, /*#__PURE__*/_react["default"].createElement(_CollapsibleMenu["default"].RowItem, {
          "data-testid": "row-item"
        }, "Category"), /*#__PURE__*/_react["default"].createElement(_CollapsibleMenu["default"].Action, {
          "data-testid": "action",
          toggled: collapsed,
          onClick: onClick
        }));
      }
    }, /*#__PURE__*/_react["default"].createElement(_CollapsibleMenu["default"].ListItem, null, "List item"), /*#__PURE__*/_react["default"].createElement(_CollapsibleMenu["default"].ListItem, null, "List item")));
  };

  it('render without clashes', function () {
    expect(function () {
      renderComponent();
    }).not.toThrow();
  });
});