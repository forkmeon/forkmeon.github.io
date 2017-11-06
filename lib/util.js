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
