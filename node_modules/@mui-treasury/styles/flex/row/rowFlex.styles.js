"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  parent: {
    display: 'flex',
    alignItems: 'center'
  },
  relativeParent: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative'
  },
  centeredChild: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)'
  },
  rightChild: {
    marginLeft: 'auto'
  },
  autoChild: {
    flex: 'auto'
  }
};
exports["default"] = _default;