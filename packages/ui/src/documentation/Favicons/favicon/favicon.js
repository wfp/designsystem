/* eslint-disable */
!(function(t, e) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = e())
    : 'function' == typeof define && define.amd
    ? define([], e)
    : 'object' == typeof exports
    ? (exports.Favicon = e())
    : (t.Favicon = e());
})(window, function() {
  return (function(t) {
    var e = {};
    function n(r) {
      if (e[r]) return e[r].exports;
      var a = (e[r] = { i: r, l: !1, exports: {} });
      return t[r].call(a.exports, a, a.exports, n), (a.l = !0), a.exports;
    }
    return (
      (n.m = t),
      (n.c = e),
      (n.d = function(t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
      }),
      (n.r = function(t) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(t, '__esModule', { value: !0 });
      }),
      (n.t = function(t, e) {
        if ((1 & e && (t = n(t)), 8 & e)) return t;
        if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (
          (n.r(r),
          Object.defineProperty(r, 'default', { enumerable: !0, value: t }),
          2 & e && 'string' != typeof t)
        )
          for (var a in t)
            n.d(
              r,
              a,
              function(e) {
                return t[e];
              }.bind(null, a)
            );
        return r;
      }),
      (n.n = function(t) {
        var e =
          t && t.__esModule
            ? function() {
                return t.default;
              }
            : function() {
                return t;
              };
        return n.d(e, 'a', e), e;
      }),
      (n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (n.p = ''),
      n((n.s = 0))
    );
  })([
    function(t, e, n) {
      'use strict';
      n.r(e);
      const r = {
        resizeCanvasOptimal: (t, e, n) => {
          let a,
            i = t,
            o = t.width,
            s = t.height;
          for (; o / 2 >= e; )
            (o /= 2), (s /= 2), (i = a = r.resizeCanvas(i, o, s));
          return o > e && (i = a = r.resizeCanvas(i, e, n)), i;
        },
        resizeCanvas: (t, e, n) => {
          let r = document.createElement('canvas'),
            a = r.getContext('2d');
          return (r.width = e), (r.height = n), a.drawImage(t, 0, 0, e, n), r;
        },
      };
      var a = r;
      class i {
        constructor(t, e = [16, 32, 48]) {
          (this.canvas = t), (this.sizes = e);
        }
        generate() {
          const t = a.resizeCanvasOptimal(canvas, 128, 128),
            e = this.createIconDirectoryHeader(this.sizes.length);
          let n = '',
            r = '';
          for (let e = 0; e < this.sizes.length; e++) {
            const i = this.sizes[e],
              o = a.resizeCanvasOptimal(t, i, i),
              s = o.getContext('2d'),
              c = o.width,
              f = o.height,
              u =
                (s.getImageData(0, 0, c, f), this.createBitmapInfoHeader(c, f)),
              l = this.createBitmapImageData(o),
              g = u.length + l.length,
              h = this.calculateBitmapOffset(this.sizes, e);
            (n += this.createIconDirectoryEntry(c, f, g, h)), (r += u + l);
          }
          return 'data:image/x-icon;base64,' + btoa(e + n + r);
        }
        calculateBitmapOffset(t, e) {
          let n = 6;
          n += 16 * t.length;
          for (let r = 0; r < e; r++) {
            const e = t[r];
            (n += 40), (n += 4 * e * e), (n += (2 * e * e) / 8);
          }
          return n;
        }
        createBitmapImageData(t) {
          const e = t.getContext('2d').getImageData(0, 0, t.width, t.height),
            n =
              (new Uint32Array(e.data.buffer).reverse().buffer,
              new Uint8Array((t.width * t.height * 2) / 8));
          n.fill(0);
          let r = this.arrayBufferToBinary(this.canvasToBitmap(t));
          return (r += this.Uint8ArrayToBinary(n));
        }
        canvasToBitmap(t) {
          const e = t.getContext('2d').getImageData(0, 0, t.width, t.height),
            n = e.data,
            r = new Uint8ClampedArray(e.data.length);
          for (let t = 0; t < n.length; t += 4) {
            const e = n[t],
              a = n[t + 1],
              i = n[t + 2],
              o = n[t + 3];
            (r[t] = i), (r[t + 1] = a), (r[t + 2] = e), (r[t + 3] = o);
          }
          const a = new Uint32Array(r.buffer),
            i = new Uint32Array(a.length);
          for (let e = 0; e < a.length; e++) {
            const n = e % t.width,
              r = Math.floor(e / t.width),
              o = n,
              s = (t.height - 1 - r) * t.width + o,
              c = a[e];
            i[s] = c;
          }
          return i.buffer;
        }
        createIconDirectoryHeader(t) {
          const e = new ArrayBuffer(6),
            n = new DataView(e);
          return (
            n.setUint16(0, 0, !0),
            n.setUint16(2, 1, !0),
            n.setUint16(4, t, !0),
            this.arrayBufferToBinary(e)
          );
        }
        createIconDirectoryEntry(t, e, n, r) {
          const a = new ArrayBuffer(16),
            i = new DataView(a);
          return (
            i.setUint8(0, t),
            i.setUint8(1, e),
            i.setUint8(2, 0),
            i.setUint8(3, 0),
            i.setUint16(4, 1, !0),
            i.setUint16(6, 32, !0),
            i.setUint32(8, n, !0),
            i.setUint32(12, r, !0),
            this.arrayBufferToBinary(a)
          );
        }
        createBitmapInfoHeader(t, e) {
          const n = new ArrayBuffer(40),
            r = new DataView(n);
          return (
            r.setUint32(0, 40, !0),
            r.setInt32(4, t, !0),
            r.setInt32(8, 2 * e, !0),
            r.setUint16(12, 1, !0),
            r.setUint16(14, 32, !0),
            r.setUint32(16, 0, !0),
            r.setUint32(20, 0, !0),
            r.setUint32(24, 0, !0),
            r.setUint32(28, 0, !0),
            r.setUint32(32, 0, !0),
            r.setUint32(36, 0, !0),
            this.arrayBufferToBinary(n)
          );
        }
        arrayBufferToBinary(t) {
          let e = '';
          const n = new Uint8Array(t),
            r = n.byteLength;
          for (let t = 0; t < r; t++) e += String.fromCharCode(n[t]);
          return e;
        }
        Uint8ArrayToBinary(t) {
          let e = '';
          const n = t,
            r = n.byteLength;
          for (let t = 0; t < r; t++) e += String.fromCharCode(n[t]);
          return e;
        }
      }
      class o {
        constrcutor(t) {
          this.canvas = t;
        }
        generate(t) {
          return a.resizeCanvasOptimal(canvas, t, t).toDataURL();
        }
      }
      const s = {
        generate: t => {
          const e = new i(t),
            n = new o(t);
          return {
            ico: e.generate([16, 32, 48]),
            png16: n.generate(16),
            png32: n.generate(32),
            png150: n.generate(150),
            png180: n.generate(180),
            png192: n.generate(192),
            png512: n.generate(512),
          };
        },
      };
      var c = s;
      n.d(e, 'Ico', function() {
        return i;
      }),
        n.d(e, 'Png', function() {
          return o;
        }),
        n.d(e, 'Package', function() {
          return c;
        });
    },
  ]);
});
