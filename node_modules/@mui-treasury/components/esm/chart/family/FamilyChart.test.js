import React from 'react';
import { render } from '@testing-library/react';
import FamilyChart from './FamilyChart';
describe('FamilyChart', function () {
  it('render without clashes', function () {
    expect(function () {
      render( /*#__PURE__*/React.createElement(FamilyChart, null));
    }).not.toThrow();
  });
});