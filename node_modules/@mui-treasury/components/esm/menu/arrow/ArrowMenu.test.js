import React from 'react';
import { render } from '@testing-library/react';
import ArrowMenu from './ArrowMenu';
describe('ArrowMenu', function () {
  it('render without clashes', function () {
    expect(function () {
      render( /*#__PURE__*/React.createElement(ArrowMenu, null));
    }).not.toThrow();
  });
});