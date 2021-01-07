"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _elevatedTabs = require("./elevatedTabs.styles");

Object.keys(_elevatedTabs).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _elevatedTabs[key];
    }
  });
});