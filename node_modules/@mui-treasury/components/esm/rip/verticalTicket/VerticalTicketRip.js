import React from 'react';
import PropTypes from 'prop-types';

var VerticalTicketRip = function VerticalTicketRip(_ref) {
  var classes = _ref.classes;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: classes.left
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.sheet
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.tear
  }))), /*#__PURE__*/React.createElement("div", {
    className: classes.right
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.sheet
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.tear
  }))));
};

VerticalTicketRip.propTypes = {
  classes: PropTypes.shape({
    left: PropTypes.string,
    sheet: PropTypes.string,
    right: PropTypes.string,
    tear: PropTypes.string
  })
};
VerticalTicketRip.defaultProps = {
  classes: {}
};
export default VerticalTicketRip;