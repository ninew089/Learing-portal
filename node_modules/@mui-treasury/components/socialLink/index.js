"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SocialLink = require("./SocialLink");

Object.keys(_SocialLink).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _SocialLink[key];
    }
  });
});

var _SocialProvider = require("./SocialProvider");

Object.keys(_SocialProvider).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _SocialProvider[key];
    }
  });
});

var _icons = require("./icons");

Object.keys(_icons).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _icons[key];
    }
  });
});