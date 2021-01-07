"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _chromeTabs = require("./chromeTabs.styles");

Object.keys(_chromeTabs).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _chromeTabs[key];
    }
  });
});