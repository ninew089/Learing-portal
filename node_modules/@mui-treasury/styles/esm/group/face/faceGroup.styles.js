export default (function () {
  return {
    item: function item(_ref) {
      var size = _ref.size,
          _ref$offset = _ref.offset,
          offset = _ref$offset === void 0 ? -8 : _ref$offset;
      return {
        width: size,
        height: size,
        display: 'inline-block',
        border: '2px solid white',
        '&:not(:first-of-type)': {
          marginLeft: offset
        }
      };
    }
  };
});