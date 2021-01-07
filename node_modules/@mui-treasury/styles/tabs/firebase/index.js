"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _firebaseTabs = require("./firebaseTabs.styles");

Object.keys(_firebaseTabs).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _firebaseTabs[key];
    }
  });
});