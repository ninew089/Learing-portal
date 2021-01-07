export default (function () {
  return {
    root: function root(_ref) {
      var _ref$bgColor = _ref.bgColor,
          bgColor = _ref$bgColor === void 0 ? 'rgba(0, 0, 0, 0.08)' : _ref$bgColor,
          _ref$bgPosition = _ref.bgPosition,
          bgPosition = _ref$bgPosition === void 0 ? 'center' : _ref$bgPosition;
      return {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        zIndex: 0,
        backgroundColor: bgColor,
        backgroundPosition: bgPosition
      };
    }
  };
});