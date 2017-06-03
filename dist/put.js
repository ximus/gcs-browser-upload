'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (url, data) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      headers = _ref.headers;

  return fetch(url, {
    method: 'PUT',
    body: data,
    headers: headers
  });
};