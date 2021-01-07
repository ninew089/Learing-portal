import React from 'react';
import { render } from '@testing-library/react';
import GmailButton from './GmailButton';
describe('GmailButton', function () {
  it('render without clashes', function () {
    expect(function () {
      render( /*#__PURE__*/React.createElement(GmailButton, null));
    }).not.toThrow();
  });
});