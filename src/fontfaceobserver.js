/* eslint-disable no-redeclare */
/* eslint-disable no-empty */
/* eslint-disable no-return-assign */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-sequences */
/* eslint-disable no-shadow */
/* eslint-disable new-cap */
/* eslint-disable func-names */
/* eslint-disable max-len */
/* eslint-disable no-void */
/* eslint-disable no-mixed-operators */
/* eslint-disable eqeqeq */
/* eslint-disable vars-on-top */
/* eslint-disable no-var */
/* eslint-disable no-cond-assign */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-expressions */
/* Font Face Observer v2.0.13 - © Bram Stein. License: BSD-3-Clause */(function () {
  let f; const g = []; function l(a) { g.push(a); g.length == 1 && f(); } function m() { for (;g.length;)g[0](), g.shift(); }f = function () { setTimeout(m); }; function n(a) { this.a = p; this.b = void 0; this.f = []; const b = this; try { a((a) => { q(b, a); }, (a) => { r(b, a); }); } catch (c) { r(b, c); } } var p = 2; function t(a) { return new n(((b, c) => { c(a); })); } function u(a) { return new n(((b) => { b(a); })); } function q(a, b) { if (a.a == p) { if (b == a) throw new TypeError(); let c = !1; try { const d = b && b.then; if (b != null && typeof b === 'object' && typeof d === 'function') { d.call(b, (b) => { c || q(a, b); c = !0; }, (b) => { c || r(a, b); c = !0; }); return; } } catch (e) { c || r(a, e); return; }a.a = 0; a.b = b; v(a); } }
  function r(a, b) { if (a.a == p) { if (b == a) throw new TypeError(); a.a = 1; a.b = b; v(a); } } function v(a) { l(() => { if (a.a != p) for (;a.f.length;) { var b = a.f.shift(); const c = b[0]; const d = b[1]; const e = b[2]; var b = b[3]; try { a.a == 0 ? typeof c === 'function' ? e(c.call(void 0, a.b)) : e(a.b) : a.a == 1 && (typeof d === 'function' ? e(d.call(void 0, a.b)) : b(a.b)); } catch (h) { b(h); } } }); }n.prototype.g = function (a) { return this.c(void 0, a); }; n.prototype.c = function (a, b) { const c = this; return new n(((d, e) => { c.f.push([a, b, d, e]); v(c); })); };
  function w(a) { return new n(((b, c) => { function d(c) { return function (d) { h[c] = d; e += 1; e == a.length && b(h); }; } var e = 0; var h = []; a.length == 0 && b(h); for (let k = 0; k < a.length; k += 1)u(a[k]).c(d(k), c); })); } function x(a) { return new n(((b, c) => { for (let d = 0; d < a.length; d += 1)u(a[d]).c(b, c); })); }window.Promise || (window.Promise = n, window.Promise.resolve = u, window.Promise.reject = t, window.Promise.race = x, window.Promise.all = w, window.Promise.prototype.then = n.prototype.c, window.Promise.prototype.catch = n.prototype.g);
}());

(function () {
  function l(a, b) { document.addEventListener ? a.addEventListener('scroll', b, !1) : a.attachEvent('scroll', b); } function m(a) { document.body ? a() : document.addEventListener ? document.addEventListener('DOMContentLoaded', function c() { document.removeEventListener('DOMContentLoaded', c); a(); }) : document.attachEvent('onreadystatechange', function k() { if (document.readyState == 'interactive' || document.readyState == 'complete')document.detachEvent('onreadystatechange', k), a(); }); } function r(a) {
    this.a = document.createElement('div'); this.a.setAttribute('aria-hidden', 'true'); this.a.appendChild(document.createTextNode(a)); this.b = document.createElement('span'); this.c = document.createElement('span'); this.h = document.createElement('span'); this.f = document.createElement('span'); this.g = -1; this.b.style.cssText = 'max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;'; this.c.style.cssText = 'max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;';
    this.f.style.cssText = 'max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;'; this.h.style.cssText = 'display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;'; this.b.appendChild(this.h); this.c.appendChild(this.f); this.a.appendChild(this.b); this.a.appendChild(this.c);
  }
  function t(a, b) { a.a.style.cssText = `max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:${b};`; } function y(a) { const b = a.a.offsetWidth; const c = b + 100; a.f.style.width = `${c}px`; a.c.scrollLeft = c; a.b.scrollLeft = a.b.scrollWidth + 100; return a.g !== b ? (a.g = b, !0) : !1; } function z(a, b) { function c() { const a = k; y(a) && a.a.parentNode && b(a.g); } var k = a; l(a.b, c); l(a.c, c); y(a); } function A(a, b) { const c = b || {}; this.family = a; this.style = c.style || 'normal'; this.weight = c.weight || 'normal'; this.stretch = c.stretch || 'normal'; } let B = null; let C = null; let E = null; let F = null; function G() { if (C === null) if (J() && /Apple/.test(window.navigator.vendor)) { const a = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent); C = !!a && parseInt(a[1], 10) < 603; } else C = !1; return C; } function J() { F === null && (F = !!document.fonts); return F; }
  function K() { if (E === null) { const a = document.createElement('div'); try { a.style.font = 'condensed 100px sans-serif'; } catch (b) {}E = a.style.font !== ''; } return E; } function L(a, b) { return [a.style, a.weight, K() ? a.stretch : '', '100px', b].join(' '); }
  A.prototype.load = function (a, b) {
    const c = this; const k = a || 'BESbswy'; let q = 0; const D = b || 3E3; const H = (new Date()).getTime(); return new Promise(((a, b) => {
      if (J() && !G()) { const M = new Promise(((a, b) => { function e() { (new Date()).getTime() - H >= D ? b() : document.fonts.load(L(c, `"${c.family}"`), k).then((c) => { c.length >= 1 ? a() : setTimeout(e, 25); }, () => { b(); }); }e(); })); const N = new Promise(((a, c) => { q = setTimeout(c, D); })); Promise.race([N, M]).then(() => { clearTimeout(q); a(c); }, () => { b(c); }); } else {
        m(() => {
          function u() {
            let b; if (b = f
!= -1 && g != -1 || f != -1 && h != -1 || g != -1 && h != -1)(b = f != g && f != h && g != h) || (B === null && (b = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent), B = !!b && (parseInt(b[1], 10) < 536 || parseInt(b[1], 10) === 536 && parseInt(b[2], 10) <= 11)), b = B && (f == v && g == v && h == v || f == w && g == w && h == w || f == x && g == x && h == x)), b = !b; b && (d.parentNode && d.parentNode.removeChild(d), clearTimeout(q), a(c));
          } function I() {
            if ((new Date()).getTime() - H >= D)d.parentNode && d.parentNode.removeChild(d), b(c); else {
              const a = document.hidden; if (!0 === a || void 0 === a) {
                f = e.a.offsetWidth,
                g = n.a.offsetWidth, h = p.a.offsetWidth, u();
              }q = setTimeout(I, 50);
            }
          } var e = new r(k); var n = new r(k); var p = new r(k); var f = -1; var g = -1; var h = -1; var v = -1; var w = -1; var x = -1; var d = document.createElement('div'); d.dir = 'ltr'; t(e, L(c, 'sans-serif')); t(n, L(c, 'serif')); t(p, L(c, 'monospace')); d.appendChild(e.a); d.appendChild(n.a); d.appendChild(p.a); document.body.appendChild(d); v = e.a.offsetWidth; w = n.a.offsetWidth; x = p.a.offsetWidth; I(); z(e, (a) => { f = a; u(); }); t(e, L(c, `"${c.family}",sans-serif`)); z(n, (a) => { g = a; u(); }); t(n, L(c, `"${c.family}",serif`));
          z(p, (a) => { h = a; u(); }); t(p, L(c, `"${c.family}",monospace`));
        });
      }
    }));
  }; typeof module === 'object' ? module.exports = A : (window.FontFaceObserver = A, window.FontFaceObserver.prototype.load = A.prototype.load);
}());
