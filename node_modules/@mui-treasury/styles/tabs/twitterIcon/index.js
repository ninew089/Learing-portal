"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _twitterIconTabs = require("./twitterIconTabs.styles");

Object.keys(_twitterIconTabs).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _twitterIconTabs[key];
    }
  });
});