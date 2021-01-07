import React from 'react';
import { render } from '@testing-library/react';
import RowToggle from './RowToggle';
describe('RowToggle', function () {
  it('render without clashes', function () {
    expect(function () {
      render( /*#__PURE__*/React.createElement(RowToggle, null));
    }).not.toThrow();
  });
});