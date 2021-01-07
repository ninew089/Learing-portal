import React from 'react';
import { render } from '@testing-library/react';
import TreeChart from './TreeChart';
describe('TreeChart', function () {
  it('render without clashes', function () {
    expect(function () {
      render( /*#__PURE__*/React.createElement(TreeChart, null));
    }).not.toThrow();
  });
});