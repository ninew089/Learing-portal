export default (function () {
  return {
    root: function root(_ref) {
      var _ref$bgColor = _ref.bgColor,
          bgColor = _ref$bgColor === void 0 ? 'rgba(0, 0, 0, 0.08)' : _ref$bgColor;
      return {
        width: '100%',
        paddingBottom: '56.25%',
        clipPath: 'polygon(0 0, 100% 0%, 100% 84%, 0% 100%)',
        backgroundColor: bgColor
      };
    }
  };
});