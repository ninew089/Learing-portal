import React from 'react';
import { render } from '@testing-library/react';
import OrgChart from './OrgChart';
describe('OrgChart', function () {
  it('render without clashes', function () {
    expect(function () {
      render( /*#__PURE__*/React.createElement(OrgChart, null));
    }).not.toThrow();
  });
});