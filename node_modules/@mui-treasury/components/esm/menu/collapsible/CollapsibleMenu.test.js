import React from 'react';
import { render } from '@testing-library/react';
import CollapsibleMenu from './CollapsibleMenu';
describe('CollapsibleMenu', function () {
  var renderComponent = function renderComponent() {
    return render( /*#__PURE__*/React.createElement(CollapsibleMenu, {
      renderWrapper: function renderWrapper(_ref) {
        var children = _ref.children,
            collapsed = _ref.collapsed;
        return /*#__PURE__*/React.createElement("div", {
          collapsed: "".concat(collapsed)
        }, children);
      },
      renderToggle: function renderToggle(_ref2) {
        var collapsed = _ref2.collapsed,
            onClick = _ref2.onClick;
        return /*#__PURE__*/React.createElement(CollapsibleMenu.Row, {
          "data-testid": "row"
        }, /*#__PURE__*/React.createElement(CollapsibleMenu.RowItem, {
          "data-testid": "row-item"
        }, "Category"), /*#__PURE__*/React.createElement(CollapsibleMenu.Action, {
          "data-testid": "action",
          toggled: collapsed,
          onClick: onClick
        }));
      }
    }, /*#__PURE__*/React.createElement(CollapsibleMenu.ListItem, null, "List item"), /*#__PURE__*/React.createElement(CollapsibleMenu.ListItem, null, "List item")));
  };

  it('render without clashes', function () {
    expect(function () {
      renderComponent();
    }).not.toThrow();
  });
});