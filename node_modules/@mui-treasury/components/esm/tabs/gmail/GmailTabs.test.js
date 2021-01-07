import React from 'react';
import { render } from '@testing-library/react';
import GmailTabs from './GmailTabs';
describe('GmailTabs', function () {
  it('render without clashes', function () {
    expect(function () {
      render( /*#__PURE__*/React.createElement(GmailTabs, null));
    }).not.toThrow();
  });
});