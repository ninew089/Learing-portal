import React from 'react';
import { render } from '@testing-library/react';
import SwitchToggle from './SwitchToggle';
describe('SwitchToggle', function () {
  it('render without clashes', function () {
    expect(function () {
      render( /*#__PURE__*/React.createElement(SwitchToggle, null));
    }).not.toThrow();
  });
});