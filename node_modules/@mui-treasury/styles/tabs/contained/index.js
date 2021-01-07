"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _containedTabs = require("./containedTabs.styles");

Object.keys(_containedTabs).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _containedTabs[key];
    }
  });
});