"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pillTabs = require("./pillTabs.styles");

Object.keys(_pillTabs).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _pillTabs[key];
    }
  });
});