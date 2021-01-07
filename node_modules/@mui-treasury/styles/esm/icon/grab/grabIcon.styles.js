var grabIconStyles = function grabIconStyles() {
  return {
    root: function root(_ref) {
      var activeColor = _ref.activeColor;
      return {
        cursor: 'grab',
        '&:active': {
          cursor: 'grabbing',
          color: activeColor
        }
      };
    }
  };
};

export default grabIconStyles;