import React from 'react';
import { render } from '@testing-library/react';
import GmailSidebarItem from './GmailSidebarItem';
describe('GmailSidebarItem', function () {
  it('render without clashes', function () {
    expect(function () {
      render( /*#__PURE__*/React.createElement(GmailSidebarItem, null));
    }).not.toThrow();
  });
});