/* ================================================================
 * forkmeon by xdf(xudafeng[at]126.com)
 *
 * first created at : Mon Jun 02 2014 20:15:51 GMT+0800 (CST)
 *
 * ================================================================
 * Copyright 2014 xdf
 *
 * Licensed under the MIT License
 * You may not use this file except in compliance with the License.
 *
 * ================================================================ */

let Util = {};

Util.merge = function(r, s) {
  this.each(s, function(v, k) {
    r[k] = v;
  });
  return r;
};

Util.each = function(obj, fn) {
  for (let i in obj) {
    if (obj.hasOwnProperty(i)) {
      fn.call(this, obj[i], i);
    }
  }
  return obj;
};

module.exports = Util;
