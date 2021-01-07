"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _twitterTabs = require("./twitterTabs.styles");

Object.keys(_twitterTabs).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _twitterTabs[key];
    }
  });
});