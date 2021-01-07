"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _appleTabs = require("./appleTabs.styles");

Object.keys(_appleTabs).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _appleTabs[key];
    }
  });
});