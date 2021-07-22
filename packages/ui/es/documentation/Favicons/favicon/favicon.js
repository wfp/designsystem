function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* eslint-disable */
!function (t, e) {
  'object' == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && 'object' == (typeof module === "undefined" ? "undefined" : _typeof(module)) ? module.exports = e() : 'function' == typeof define && define.amd ? define([], e) : 'object' == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports.Favicon = e() : t.Favicon = e();
}(window, function () {
  return function (t) {
    var e = {};

    function n(r) {
      if (e[r]) return e[r].exports;
      var a = e[r] = {
        i: r,
        l: !1,
        exports: {}
      };
      return t[r].call(a.exports, a, a.exports, n), a.l = !0, a.exports;
    }

    return n.m = t, n.c = e, n.d = function (t, e, r) {
      n.o(t, e) || Object.defineProperty(t, e, {
        enumerable: !0,
        get: r
      });
    }, n.r = function (t) {
      'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
        value: 'Module'
      }), Object.defineProperty(t, '__esModule', {
        value: !0
      });
    }, n.t = function (t, e) {
      if (1 & e && (t = n(t)), 8 & e) return t;
      if (4 & e && 'object' == _typeof(t) && t && t.__esModule) return t;
      var r = Object.create(null);
      if (n.r(r), Object.defineProperty(r, 'default', {
        enumerable: !0,
        value: t
      }), 2 & e && 'string' != typeof t) for (var a in t) {
        n.d(r, a, function (e) {
          return t[e];
        }.bind(null, a));
      }
      return r;
    }, n.n = function (t) {
      var e = t && t.__esModule ? function () {
        return t.default;
      } : function () {
        return t;
      };
      return n.d(e, 'a', e), e;
    }, n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }, n.p = '', n(n.s = 0);
  }([function (t, e, n) {
    'use strict';

    n.r(e);
    var r = {
      resizeCanvasOptimal: function resizeCanvasOptimal(t, e, n) {
        var a,
            i = t,
            o = t.width,
            s = t.height;

        for (; o / 2 >= e;) {
          o /= 2, s /= 2, i = a = r.resizeCanvas(i, o, s);
        }

        return o > e && (i = a = r.resizeCanvas(i, e, n)), i;
      },
      resizeCanvas: function resizeCanvas(t, e, n) {
        var r = document.createElement('canvas'),
            a = r.getContext('2d');
        return r.width = e, r.height = n, a.drawImage(t, 0, 0, e, n), r;
      }
    };
    var a = r;

    var i = /*#__PURE__*/function () {
      function i(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [16, 32, 48];

        _classCallCheck(this, i);

        this.canvas = t, this.sizes = e;
      }

      _createClass(i, [{
        key: "generate",
        value: function generate() {
          var t = a.resizeCanvasOptimal(canvas, 128, 128),
              e = this.createIconDirectoryHeader(this.sizes.length);
          var n = '',
              r = '';

          for (var _e = 0; _e < this.sizes.length; _e++) {
            var _i5 = this.sizes[_e],
                _o = a.resizeCanvasOptimal(t, _i5, _i5),
                _s = _o.getContext('2d'),
                _c = _o.width,
                f = _o.height,
                u = (_s.getImageData(0, 0, _c, f), this.createBitmapInfoHeader(_c, f)),
                l = this.createBitmapImageData(_o),
                g = u.length + l.length,
                h = this.calculateBitmapOffset(this.sizes, _e);

            n += this.createIconDirectoryEntry(_c, f, g, h), r += u + l;
          }

          return 'data:image/x-icon;base64,' + btoa(e + n + r);
        }
      }, {
        key: "calculateBitmapOffset",
        value: function calculateBitmapOffset(t, e) {
          var n = 6;
          n += 16 * t.length;

          for (var _r = 0; _r < e; _r++) {
            var _e2 = t[_r];
            n += 40, n += 4 * _e2 * _e2, n += 2 * _e2 * _e2 / 8;
          }

          return n;
        }
      }, {
        key: "createBitmapImageData",
        value: function createBitmapImageData(t) {
          var e = t.getContext('2d').getImageData(0, 0, t.width, t.height),
              n = (new Uint32Array(e.data.buffer).reverse().buffer, new Uint8Array(t.width * t.height * 2 / 8));
          n.fill(0);
          var r = this.arrayBufferToBinary(this.canvasToBitmap(t));
          return r += this.Uint8ArrayToBinary(n);
        }
      }, {
        key: "canvasToBitmap",
        value: function canvasToBitmap(t) {
          var e = t.getContext('2d').getImageData(0, 0, t.width, t.height),
              n = e.data,
              r = new Uint8ClampedArray(e.data.length);

          for (var _t = 0; _t < n.length; _t += 4) {
            var _e3 = n[_t],
                _a = n[_t + 1],
                _i6 = n[_t + 2],
                _o2 = n[_t + 3];
            r[_t] = _i6, r[_t + 1] = _a, r[_t + 2] = _e3, r[_t + 3] = _o2;
          }

          var a = new Uint32Array(r.buffer),
              _i2 = new Uint32Array(a.length);

          for (var _e4 = 0; _e4 < a.length; _e4++) {
            var _n = _e4 % t.width,
                _r2 = Math.floor(_e4 / t.width),
                _o3 = _n,
                _s2 = (t.height - 1 - _r2) * t.width + _o3,
                _c2 = a[_e4];

            _i2[_s2] = _c2;
          }

          return _i2.buffer;
        }
      }, {
        key: "createIconDirectoryHeader",
        value: function createIconDirectoryHeader(t) {
          var e = new ArrayBuffer(6),
              n = new DataView(e);
          return n.setUint16(0, 0, !0), n.setUint16(2, 1, !0), n.setUint16(4, t, !0), this.arrayBufferToBinary(e);
        }
      }, {
        key: "createIconDirectoryEntry",
        value: function createIconDirectoryEntry(t, e, n, r) {
          var a = new ArrayBuffer(16),
              _i4 = new DataView(a);

          return _i4.setUint8(0, t), _i4.setUint8(1, e), _i4.setUint8(2, 0), _i4.setUint8(3, 0), _i4.setUint16(4, 1, !0), _i4.setUint16(6, 32, !0), _i4.setUint32(8, n, !0), _i4.setUint32(12, r, !0), this.arrayBufferToBinary(a);
        }
      }, {
        key: "createBitmapInfoHeader",
        value: function createBitmapInfoHeader(t, e) {
          var n = new ArrayBuffer(40),
              r = new DataView(n);
          return r.setUint32(0, 40, !0), r.setInt32(4, t, !0), r.setInt32(8, 2 * e, !0), r.setUint16(12, 1, !0), r.setUint16(14, 32, !0), r.setUint32(16, 0, !0), r.setUint32(20, 0, !0), r.setUint32(24, 0, !0), r.setUint32(28, 0, !0), r.setUint32(32, 0, !0), r.setUint32(36, 0, !0), this.arrayBufferToBinary(n);
        }
      }, {
        key: "arrayBufferToBinary",
        value: function arrayBufferToBinary(t) {
          var e = '';
          var n = new Uint8Array(t),
              r = n.byteLength;

          for (var _t2 = 0; _t2 < r; _t2++) {
            e += String.fromCharCode(n[_t2]);
          }

          return e;
        }
      }, {
        key: "Uint8ArrayToBinary",
        value: function Uint8ArrayToBinary(t) {
          var e = '';
          var n = t,
              r = n.byteLength;

          for (var _t3 = 0; _t3 < r; _t3++) {
            e += String.fromCharCode(n[_t3]);
          }

          return e;
        }
      }]);

      return i;
    }();

    var o = /*#__PURE__*/function () {
      function o() {
        _classCallCheck(this, o);
      }

      _createClass(o, [{
        key: "constrcutor",
        value: function constrcutor(t) {
          this.canvas = t;
        }
      }, {
        key: "generate",
        value: function generate(t) {
          return a.resizeCanvasOptimal(canvas, t, t).toDataURL();
        }
      }]);

      return o;
    }();

    var s = {
      generate: function generate(t) {
        var e = new i(t),
            n = new o(t);
        return {
          ico: e.generate([16, 32, 48]),
          png16: n.generate(16),
          png32: n.generate(32),
          png150: n.generate(150),
          png180: n.generate(180),
          png192: n.generate(192),
          png512: n.generate(512)
        };
      }
    };
    var c = s;
    n.d(e, 'Ico', function () {
      return i;
    }), n.d(e, 'Png', function () {
      return o;
    }), n.d(e, 'Package', function () {
      return c;
    });
  }]);
});