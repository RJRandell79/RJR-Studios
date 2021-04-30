!(function(n) {
  var i = {};
  function o(t) {
    if (i[t]) return i[t].exports;
    var e = (i[t] = { i: t, l: !1, exports: {} });
    return n[t].call(e.exports, e, e.exports, o), (e.l = !0), e.exports;
  }
  (o.m = n),
    (o.c = i),
    (o.d = function(t, e, n) {
      o.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (o.r = function(t) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 });
    }),
    (o.t = function(e, t) {
      if ((1 & t && (e = o(e)), 8 & t)) return e;
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (o.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var i in e)
          o.d(
            n,
            i,
            function(t) {
              return e[t];
            }.bind(null, i)
          );
      return n;
    }),
    (o.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t.default;
            }
          : function() {
              return t;
            };
      return o.d(e, 'a', e), e;
    }),
    (o.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (o.p = ''),
    o((o.s = 2));
})({
  2: function(t, e, n) {
    'use strict';
    n.r(e);
    var e = window,
      wi =
        e.requestAnimationFrame ||
        e.webkitRequestAnimationFrame ||
        e.mozRequestAnimationFrame ||
        e.msRequestAnimationFrame ||
        function(t) {
          return setTimeout(t, 16);
        },
      e = window,
      Mi =
        e.cancelAnimationFrame ||
        e.mozCancelAnimationFrame ||
        function(t) {
          clearTimeout(t);
        };
    function Ci(t) {
      for (var e, n, i, o = t || {}, r = 1, a = arguments.length; r < a; r++)
        if (null !== (e = arguments[r]))
          for (n in e) o !== (i = e[n]) && void 0 !== i && (o[n] = i);
      return o;
    }
    function Ti(t) {
      return 0 <= ['true', 'false'].indexOf(t) ? JSON.parse(t) : t;
    }
    function Ei(t, e, n, i) {
      if (i)
        try {
          t.setItem(e, n);
        } catch (t) {}
      return n;
    }
    function Ai() {
      var t = document,
        e = t.body;
      return e || ((e = t.createElement('body')).fake = !0), e;
    }
    var i = document.documentElement;
    function Li(t) {
      var e = '';
      return (
        t.fake &&
          ((e = i.style.overflow),
          (t.style.background = ''),
          (t.style.overflow = i.style.overflow = 'hidden'),
          i.appendChild(t)),
        e
      );
    }
    function Ni(t, e) {
      t.fake && (t.remove(), (i.style.overflow = e), i.offsetHeight);
    }
    function Si(t, e, n, i) {
      'insertRule' in t
        ? t.insertRule(e + '{' + n + '}', i)
        : t.addRule(e, n, i);
    }
    function Bi(t) {
      return ('insertRule' in t ? t.cssRules : t.rules).length;
    }
    function Oi(t, e, n) {
      for (var i = 0, o = t.length; i < o; i++) e.call(n, t[i], i);
    }
    var e = 'classList' in document.createElement('_'),
      Hi = e
        ? function(t, e) {
            return t.classList.contains(e);
          }
        : function(t, e) {
            return 0 <= t.className.indexOf(e);
          },
      Di = e
        ? function(t, e) {
            Hi(t, e) || t.classList.add(e);
          }
        : function(t, e) {
            Hi(t, e) || (t.className += ' ' + e);
          },
      Pi = e
        ? function(t, e) {
            Hi(t, e) && t.classList.remove(e);
          }
        : function(t, e) {
            Hi(t, e) && (t.className = t.className.replace(e, ''));
          };
    function ki(t, e) {
      return t.hasAttribute(e);
    }
    function Ri(t, e) {
      return t.getAttribute(e);
    }
    function r(t) {
      return void 0 !== t.item;
    }
    function Ii(t, e) {
      if (
        ((t = r(t) || t instanceof Array ? t : [t]),
        '[object Object]' === Object.prototype.toString.call(e))
      )
        for (var n = t.length; n--; )
          for (var i in e) t[n].setAttribute(i, e[i]);
    }
    function ji(t, e) {
      t = r(t) || t instanceof Array ? t : [t];
      for (
        var n = (e = e instanceof Array ? e : [e]).length, i = t.length;
        i--;

      )
        for (var o = n; o--; ) t[i].removeAttribute(e[o]);
    }
    function zi(t) {
      for (var e = [], n = 0, i = t.length; n < i; n++) e.push(t[n]);
      return e;
    }
    function Wi(t, e) {
      'none' !== t.style.display && (t.style.display = 'none');
    }
    function qi(t, e) {
      'none' === t.style.display && (t.style.display = '');
    }
    function Fi(t) {
      return 'none' !== window.getComputedStyle(t).display;
    }
    function _i(e) {
      var n, i;
      'string' == typeof e &&
        ((n = [e]),
        (i = e.charAt(0).toUpperCase() + e.substr(1)),
        ['Webkit', 'Moz', 'ms', 'O'].forEach(function(t) {
          ('ms' === t && 'transform' !== e) || n.push(t + i);
        }),
        (e = n));
      for (
        var t = document.createElement('fakeelement'), o = (e.length, 0);
        o < e.length;
        o++
      ) {
        var r = e[o];
        if (void 0 !== t.style[r]) return r;
      }
      return !1;
    }
    function Vi(t, e) {
      var n = !1;
      return (
        /^Webkit/.test(t)
          ? (n = 'webkit' + e + 'End')
          : /^O/.test(t)
          ? (n = 'o' + e + 'End')
          : t && (n = e.toLowerCase() + 'end'),
        n
      );
    }
    var o = !1;
    try {
      var a = Object.defineProperty({}, 'passive', {
        get: function() {
          o = !0;
        }
      });
      window.addEventListener('test', null, a);
    } catch (t) {}
    var u = !!o && { passive: !0 };
    function Gi(t, e, n) {
      for (var i in e) {
        var o = 0 <= ['touchstart', 'touchmove'].indexOf(i) && !n && u;
        t.addEventListener(i, e[i], o);
      }
    }
    function Qi(t, e) {
      for (var n in e) {
        var i = 0 <= ['touchstart', 'touchmove'].indexOf(n) && u;
        t.removeEventListener(n, e[n], i);
      }
    }
    function Xi() {
      return {
        topics: {},
        on: function(t, e) {
          (this.topics[t] = this.topics[t] || []), this.topics[t].push(e);
        },
        off: function(t, e) {
          if (this.topics[t])
            for (var n = 0; n < this.topics[t].length; n++)
              if (this.topics[t][n] === e) {
                this.topics[t].splice(n, 1);
                break;
              }
        },
        emit: function(e, n) {
          (n.type = e),
            this.topics[e] &&
              this.topics[e].forEach(function(t) {
                t(n, e);
              });
        }
      };
    }
    Object.keys ||
      (Object.keys = function(t) {
        var e,
          n = [];
        for (e in t) Object.prototype.hasOwnProperty.call(t, e) && n.push(e);
        return n;
      }),
      'remove' in Element.prototype ||
        (Element.prototype.remove = function() {
          this.parentNode && this.parentNode.removeChild(this);
        });
    var Yi = function(C) {
        C = Ci(
          {
            container: '.slider',
            mode: 'carousel',
            axis: 'horizontal',
            items: 1,
            gutter: 0,
            edgePadding: 0,
            fixedWidth: !1,
            autoWidth: !1,
            viewportMax: !1,
            slideBy: 1,
            center: !1,
            controls: !0,
            controlsPosition: 'top',
            controlsText: ['prev', 'next'],
            controlsContainer: !1,
            prevButton: !1,
            nextButton: !1,
            nav: !0,
            navPosition: 'top',
            navContainer: !1,
            navAsThumbnails: !1,
            arrowKeys: !1,
            speed: 300,
            autoplay: !1,
            autoplayPosition: 'top',
            autoplayTimeout: 5e3,
            autoplayDirection: 'forward',
            autoplayText: ['start', 'stop'],
            autoplayHoverPause: !1,
            autoplayButton: !1,
            autoplayButtonOutput: !0,
            autoplayResetOnVisibility: !0,
            animateIn: 'tns-fadeIn',
            animateOut: 'tns-fadeOut',
            animateNormal: 'tns-normal',
            animateDelay: !1,
            loop: !0,
            rewind: !1,
            autoHeight: !1,
            responsive: !1,
            lazyload: !1,
            lazyloadSelector: '.tns-lazy-img',
            touch: !0,
            mouseDrag: !1,
            swipeAngle: 15,
            nested: !1,
            preventActionWhenRunning: !1,
            preventScrollOnTouch: !1,
            freezable: !0,
            onInit: !1,
            useLocalStorage: !0,
            nonce: !1
          },
          C || {}
        );
        var T = document,
          h = window,
          i = { ENTER: 13, SPACE: 32, LEFT: 37, RIGHT: 39 },
          e = {},
          n = C.useLocalStorage;
        if (n) {
          var t = navigator.userAgent,
            o = new Date();
          try {
            (e = h.localStorage)
              ? (e.setItem(o, o), (n = e.getItem(o) == o), e.removeItem(o))
              : (n = !1),
              n || (e = {});
          } catch (t) {
            n = !1;
          }
          n &&
            (e.tnsApp &&
              e.tnsApp !== t &&
              [
                'tC',
                'tPL',
                'tMQ',
                'tTf',
                't3D',
                'tTDu',
                'tTDe',
                'tADu',
                'tADe',
                'tTE',
                'tAE'
              ].forEach(function(t) {
                e.removeItem(t);
              }),
            (localStorage.tnsApp = t));
        }
        var y = e.tC
            ? Ti(e.tC)
            : Ei(
                e,
                'tC',
                (function() {
                  var t = document,
                    e = Ai(),
                    n = Li(e),
                    i = t.createElement('div'),
                    o = !1;
                  e.appendChild(i);
                  try {
                    for (
                      var r,
                        a = '(10px * 10)',
                        u = ['calc' + a, '-moz-calc' + a, '-webkit-calc' + a],
                        l = 0;
                      l < 3;
                      l++
                    )
                      if (
                        ((r = u[l]), (i.style.width = r), 100 === i.offsetWidth)
                      ) {
                        o = r.replace(a, '');
                        break;
                      }
                  } catch (t) {}
                  return e.fake ? Ni(e, n) : i.remove(), o;
                })(),
                n
              ),
          g = e.tPL
            ? Ti(e.tPL)
            : Ei(
                e,
                'tPL',
                (function() {
                  var t = document,
                    e = Ai(),
                    n = Li(e),
                    i = t.createElement('div'),
                    o = t.createElement('div'),
                    r = '',
                    t = !1;
                  (i.className = 'tns-t-subp2'), (o.className = 'tns-t-ct');
                  for (var a = 0; a < 70; a++) r += '<div></div>';
                  return (
                    (o.innerHTML = r),
                    i.appendChild(o),
                    e.appendChild(i),
                    (t =
                      Math.abs(
                        i.getBoundingClientRect().left -
                          o.children[67].getBoundingClientRect().left
                      ) < 2),
                    e.fake ? Ni(e, n) : i.remove(),
                    t
                  );
                })(),
                n
              ),
          E = e.tMQ
            ? Ti(e.tMQ)
            : Ei(
                e,
                'tMQ',
                (function() {
                  if (window.matchMedia || window.msMatchMedia) return !0;
                  var t = document,
                    e = Ai(),
                    n = Li(e),
                    i = t.createElement('div'),
                    o = t.createElement('style'),
                    r =
                      '@media all and (min-width:1px){.tns-mq-test{position:absolute}}';
                  return (
                    (o.type = 'text/css'),
                    (i.className = 'tns-mq-test'),
                    e.appendChild(o),
                    e.appendChild(i),
                    o.styleSheet
                      ? (o.styleSheet.cssText = r)
                      : o.appendChild(t.createTextNode(r)),
                    (r = (window.getComputedStyle
                      ? window.getComputedStyle(i)
                      : i.currentStyle
                    ).position),
                    e.fake ? Ni(e, n) : i.remove(),
                    'absolute' === r
                  );
                })(),
                n
              ),
          r = e.tTf ? Ti(e.tTf) : Ei(e, 'tTf', _i('transform'), n),
          a = e.t3D
            ? Ti(e.t3D)
            : Ei(
                e,
                't3D',
                (function(t) {
                  if (!t) return !1;
                  if (!window.getComputedStyle) return !1;
                  var e = document,
                    n = Ai(),
                    i = Li(n),
                    o = e.createElement('p'),
                    e =
                      9 < t.length
                        ? '-' + t.slice(0, -9).toLowerCase() + '-'
                        : '';
                  return (
                    (e += 'transform'),
                    n.insertBefore(o, null),
                    (o.style[t] = 'translate3d(1px,1px,1px)'),
                    (e = window.getComputedStyle(o).getPropertyValue(e)),
                    n.fake ? Ni(n, i) : o.remove(),
                    void 0 !== e && 0 < e.length && 'none' !== e
                  );
                })(r),
                n
              ),
          b = e.tTDu ? Ti(e.tTDu) : Ei(e, 'tTDu', _i('transitionDuration'), n),
          u = e.tTDe ? Ti(e.tTDe) : Ei(e, 'tTDe', _i('transitionDelay'), n),
          x = e.tADu ? Ti(e.tADu) : Ei(e, 'tADu', _i('animationDuration'), n),
          l = e.tADe ? Ti(e.tADe) : Ei(e, 'tADe', _i('animationDelay'), n),
          s = e.tTE ? Ti(e.tTE) : Ei(e, 'tTE', Vi(b, 'Transition'), n),
          c = e.tAE ? Ti(e.tAE) : Ei(e, 'tAE', Vi(x, 'Animation'), n),
          f =
            (h.console && h.console.warn,
            [
              'container',
              'controlsContainer',
              'prevButton',
              'nextButton',
              'navContainer',
              'autoplayButton'
            ]),
          d = {};
        if (
          (f.forEach(function(t) {
            var e, n;
            'string' == typeof C[t] &&
              ((e = C[t]),
              (n = T.querySelector(e)),
              (d[t] = e),
              n && n.nodeName && (C[t] = n));
          }),
          !(C.container.children.length < 1))
        ) {
          var A,
            L,
            p,
            N,
            S = C.responsive,
            B = C.nested,
            O = 'carousel' === C.mode;
          if (S) {
            0 in S && ((C = Ci(C, S[0])), delete S[0]);
            var v,
              m = {};
            for (v in S) {
              var w = S[v];
              m[v] = w = 'number' == typeof w ? { items: w } : w;
            }
            (S = m), (m = null);
          }
          O ||
            !(function t(e) {
              for (var n in e)
                O ||
                  ('slideBy' === n && (e[n] = 'page'),
                  'edgePadding' === n && (e[n] = !1),
                  'autoHeight' === n && (e[n] = !1)),
                  'responsive' === n && t(e[n]);
            })(C),
            O ||
              ((C.axis = 'horizontal'),
              (C.slideBy = 'page'),
              (C.edgePadding = !1),
              (A = C.animateIn),
              (L = C.animateOut),
              (p = C.animateDelay),
              (N = C.animateNormal));
          var M,
            H,
            D = 'horizontal' === C.axis,
            P = T.createElement('div'),
            k = T.createElement('div'),
            R = C.container,
            I = R.parentNode,
            j = R.outerHTML,
            z = R.children,
            W = z.length,
            q = $e(),
            F = !1;
          S && xn(), O && (R.className += ' tns-vpfix');
          var _,
            V,
            G,
            Q,
            X,
            Y,
            K,
            J,
            U,
            Z,
            $,
            tt,
            et,
            nt,
            it,
            ot,
            rt,
            at,
            ut,
            lt,
            st,
            ct,
            ft,
            dt,
            pt,
            vt,
            mt,
            ht,
            yt,
            gt,
            bt,
            xt,
            wt,
            Mt,
            Ct,
            Tt,
            Et,
            At,
            Lt,
            Nt = C.autoWidth,
            St = on('fixedWidth'),
            Bt = on('edgePadding'),
            Ot = on('gutter'),
            Ht = en(),
            Dt = on('center'),
            Pt = Nt ? 1 : Math.floor(on('items')),
            kt = on('slideBy'),
            Rt = C.viewportMax || C.fixedWidthViewportWidth,
            It = on('arrowKeys'),
            jt = on('speed'),
            zt = C.rewind,
            Wt = !zt && C.loop,
            qt = on('autoHeight'),
            Ft = on('controls'),
            _t = on('controlsText'),
            Vt = on('nav'),
            Gt = on('touch'),
            Qt = on('mouseDrag'),
            Xt = on('autoplay'),
            Yt = on('autoplayTimeout'),
            Kt = on('autoplayText'),
            Jt = on('autoplayHoverPause'),
            Ut = on('autoplayResetOnVisibility'),
            Zt =
              ((o = null),
              (t = on('nonce')),
              (n = document.createElement('style')),
              o && n.setAttribute('media', o),
              t && n.setAttribute('nonce', t),
              document.querySelector('head').appendChild(n),
              n.sheet || n.styleSheet),
            $t = C.lazyload,
            te = C.lazyloadSelector,
            ee = [],
            ne = Wt
              ? ((Q = (function() {
                  {
                    if (Nt || (St && !Rt)) return W - 1;
                    var t = St ? 'fixedWidth' : 'items',
                      e = [];
                    if (((St || C[t] < W) && e.push(C[t]), S))
                      for (var n in S) {
                        n = S[n][t];
                        n && (St || n < W) && e.push(n);
                      }
                    return (
                      e.length || e.push(0),
                      Math.ceil(
                        St
                          ? Rt / Math.min.apply(null, e)
                          : Math.max.apply(null, e)
                      )
                    );
                  }
                })()),
                (X = O ? Math.ceil((5 * Q - W) / 2) : 4 * Q - W),
                (X = Math.max(Q, X)),
                nn('edgePadding') ? X + 1 : X)
              : 0,
            ie = O ? W + 2 * ne : W + ne,
            oe = !((!St && !Nt) || Wt),
            re = St ? Qn() : null,
            ae = !O || !Wt,
            ue = D ? 'left' : 'top',
            le = '',
            se = '',
            ce = St
              ? function() {
                  return Dt && !Wt ? W - 1 : Math.ceil(-re / (St + Ot));
                }
              : Nt
              ? function() {
                  for (var t = 0; t < ie; t++) if (_[t] >= -re) return t;
                }
              : function() {
                  return Dt && O && !Wt
                    ? W - 1
                    : Wt || O
                    ? Math.max(0, ie - Math.ceil(Pt))
                    : ie - 1;
                },
            fe = Je(on('startIndex')),
            de = fe,
            pe = (Ke(), 0),
            ve = Nt ? null : ce(),
            me = C.preventActionWhenRunning,
            he = C.swipeAngle,
            ye = !he || '?',
            ge = !1,
            be = C.onInit,
            xe = new Xi(),
            we = ' tns-slider tns-' + C.mode,
            Me =
              R.id ||
              ((n = window.tnsId),
              (window.tnsId = n ? n + 1 : 1),
              'tns' + window.tnsId),
            Ce = on('disable'),
            Te = !1,
            Ee = C.freezable,
            Ae = !(!Ee || Nt) && bn(),
            Le = !1,
            Ne = {
              click: ei,
              keydown: function(t) {
                t = si(t);
                var e = [i.LEFT, i.RIGHT].indexOf(t.keyCode);
                0 <= e &&
                  (0 === e ? J.disabled || ei(t, -1) : U.disabled || ei(t, 1));
              }
            },
            Se = {
              click: function(t) {
                if (ge) {
                  if (me) return;
                  $n();
                }
                var e = ci((t = si(t)));
                for (; e !== nt && !ki(e, 'data-nav'); ) e = e.parentNode;
                {
                  var n, i;
                  ki(e, 'data-nav') &&
                    ((n = ut = Number(Ri(e, 'data-nav'))),
                    (i = St || Nt ? (n * W) / rt : n * Pt),
                    ti(Ie ? n : Math.min(Math.ceil(i), W - 1), t),
                    lt === n && (gt && ai(), (ut = -1)));
                }
              },
              keydown: function(t) {
                t = si(t);
                var e,
                  n = T.activeElement;
                ki(n, 'data-nav') &&
                  ((e = [i.LEFT, i.RIGHT, i.ENTER, i.SPACE].indexOf(t.keyCode)),
                  (n = Number(Ri(n, 'data-nav'))),
                  0 <= e &&
                    (0 === e
                      ? 0 < n && li(ot[n - 1])
                      : 1 === e
                      ? n < rt - 1 && li(ot[n + 1])
                      : ti((ut = n), t)));
              }
            },
            Be = {
              mouseover: function() {
                gt && (ii(), (bt = !0));
              },
              mouseout: function() {
                bt && (ni(), (bt = !1));
              }
            },
            Oe = {
              visibilitychange: function() {
                T.hidden ? gt && (ii(), (wt = !0)) : wt && (ni(), (wt = !1));
              }
            },
            He = {
              keydown: function(t) {
                t = si(t);
                var e = [i.LEFT, i.RIGHT].indexOf(t.keyCode);
                0 <= e && ei(t, 0 === e ? -1 : 1);
              }
            },
            De = {
              touchstart: vi,
              touchmove: mi,
              touchend: hi,
              touchcancel: hi
            },
            Pe = { mousedown: vi, mousemove: mi, mouseup: hi, mouseleave: hi },
            ke = nn('controls'),
            Re = nn('nav'),
            Ie = !!Nt || C.navAsThumbnails,
            je = nn('autoplay'),
            ze = nn('touch'),
            We = nn('mouseDrag'),
            qe = 'tns-slide-active',
            Fe = 'tns-slide-cloned',
            _e = 'tns-complete',
            Ve = {
              load: function(t) {
                Sn(ci(t));
              },
              error: function(t) {
                !(function(t) {
                  Di(t, 'failed'), Bn(t);
                })(ci(t));
              }
            },
            Ge = 'force' === C.preventScrollOnTouch;
          ke &&
            ((Y = C.controlsContainer),
            (K = C.controlsContainer ? C.controlsContainer.outerHTML : ''),
            (J = C.prevButton),
            (U = C.nextButton),
            (Z = C.prevButton ? C.prevButton.outerHTML : ''),
            ($ = C.nextButton ? C.nextButton.outerHTML : '')),
            Re &&
              ((nt = C.navContainer),
              (it = C.navContainer ? C.navContainer.outerHTML : ''),
              (rt = Nt ? W : gi()),
              (at = 0),
              (ut = -1),
              (lt = Ze()),
              (st = lt),
              (ct = 'tns-nav-active'),
              (ft = 'Carousel Page '),
              (dt = ' (Current Slide)')),
            je &&
              ((pt = 'forward' === C.autoplayDirection ? 1 : -1),
              (vt = C.autoplayButton),
              (mt = C.autoplayButton ? C.autoplayButton.outerHTML : ''),
              (ht = [
                "<span class='tns-visually-hidden'>",
                ' animation</span>'
              ])),
            (ze || We) &&
              ((Mt = {}),
              (Et = !(Ct = {})),
              (Lt = D
                ? function(t, e) {
                    return t.x - e.x;
                  }
                : function(t, e) {
                    return t.y - e.y;
                  })),
            Nt || Ye(Ce || Ae),
            r &&
              ((ue = r),
              (le = 'translate'),
              (se = a
                ? ((le += D ? '3d(' : '3d(0px, '), D ? ', 0px, 0px)' : ', 0px)')
                : ((le += D ? 'X(' : 'Y('), ')'))),
            O && (R.className = R.className.replace('tns-vpfix', '')),
            (function() {
              nn('gutter');
              (P.className = 'tns-outer'),
                (k.className = 'tns-inner'),
                (P.id = Me + '-ow'),
                (k.id = Me + '-iw'),
                '' === R.id && (R.id = Me);
              (we += g || Nt ? ' tns-subpixel' : ' tns-no-subpixel'),
                (we += y ? ' tns-calc' : ' tns-no-calc'),
                Nt && (we += ' tns-autowidth');
              (we += ' tns-' + C.axis),
                (R.className += we),
                O
                  ? (((M = T.createElement('div')).id = Me + '-mw'),
                    (M.className = 'tns-ovh'),
                    P.appendChild(M),
                    M.appendChild(k))
                  : P.appendChild(k);
              qt && ((M || k).className += ' tns-ah');
              if (
                (I.insertBefore(P, R),
                k.appendChild(R),
                Oi(z, function(t, e) {
                  Di(t, 'tns-item'),
                    t.id || (t.id = Me + '-item' + e),
                    !O && N && Di(t, N),
                    Ii(t, { 'aria-hidden': 'true', tabindex: '-1' });
                }),
                ne)
              ) {
                for (
                  var t = T.createDocumentFragment(),
                    e = T.createDocumentFragment(),
                    n = ne;
                  n--;

                ) {
                  var i = n % W,
                    o = z[i].cloneNode(!0);
                  Di(o, Fe),
                    ji(o, 'id'),
                    e.insertBefore(o, e.firstChild),
                    O &&
                      ((i = z[W - 1 - i].cloneNode(!0)),
                      Di(i, Fe),
                      ji(i, 'id'),
                      t.appendChild(i));
                }
                R.insertBefore(t, R.firstChild),
                  R.appendChild(e),
                  (z = R.children);
              }
            })(),
            (function() {
              if (!O)
                for (var t = fe, e = fe + Math.min(W, Pt); t < e; t++) {
                  var n = z[t];
                  (n.style.left = (100 * (t - fe)) / Pt + '%'),
                    Di(n, A),
                    Pi(n, N);
                }
              D &&
                (g || Nt
                  ? (Si(
                      Zt,
                      '#' + Me + ' > .tns-item',
                      'font-size:' + h.getComputedStyle(z[0]).fontSize + ';',
                      Bi(Zt)
                    ),
                    Si(Zt, '#' + Me, 'font-size:0;', Bi(Zt)))
                  : O &&
                    Oi(z, function(t, e) {
                      t.style.marginLeft =
                        ((e = e),
                        y
                          ? y + '(' + 100 * e + '% / ' + ie + ')'
                          : (100 * e) / ie + '%');
                    }));
              E
                ? (b &&
                    ((r = M && C.autoHeight ? cn(C.speed) : ''),
                    Si(Zt, '#' + Me + '-mw', r, Bi(Zt))),
                  (r = rn(
                    C.edgePadding,
                    C.gutter,
                    C.fixedWidth,
                    C.speed,
                    C.autoHeight
                  )),
                  Si(Zt, '#' + Me + '-iw', r, Bi(Zt)),
                  O &&
                    ((r =
                      D && !Nt
                        ? 'width:' + an(C.fixedWidth, C.gutter, C.items) + ';'
                        : ''),
                    b && (r += cn(jt)),
                    Si(Zt, '#' + Me, r, Bi(Zt))),
                  (r = D && !Nt ? un(C.fixedWidth, C.gutter, C.items) : ''),
                  C.gutter && (r += ln(C.gutter)),
                  O || (b && (r += cn(jt)), x && (r += fn(jt))))
                : (O && qt && (M.style[b] = jt / 1e3 + 's'),
                  (k.style.cssText = rn(Bt, Ot, St, qt)),
                  O && D && !Nt && (R.style.width = an(St, Ot, Pt)),
                  (r = D && !Nt ? un(St, Ot, Pt) : ''),
                  Ot && (r += ln(Ot))),
                r && Si(Zt, '#' + Me + ' > .tns-item', r, Bi(Zt));
              if (S && E)
                for (var i in S) {
                  i = parseInt(i);
                  var o = S[i],
                    r = '',
                    a = '',
                    u = '',
                    l = '',
                    s = '',
                    c = Nt ? null : on('items', i),
                    f = on('fixedWidth', i),
                    d = on('speed', i),
                    p = on('edgePadding', i),
                    v = on('autoHeight', i),
                    m = on('gutter', i);
                  b &&
                    M &&
                    on('autoHeight', i) &&
                    'speed' in o &&
                    (a = '#' + Me + '-mw{' + cn(d) + '}'),
                    ('edgePadding' in o || 'gutter' in o) &&
                      (u = '#' + Me + '-iw{' + rn(p, m, f, d, v) + '}'),
                    O &&
                      D &&
                      !Nt &&
                      ('fixedWidth' in o ||
                        'items' in o ||
                        (St && 'gutter' in o)) &&
                      (l = 'width:' + an(f, m, c) + ';'),
                    b && 'speed' in o && (l += cn(d)),
                    (l = l && '#' + Me + '{' + l + '}'),
                    ('fixedWidth' in o ||
                      (St && 'gutter' in o) ||
                      (!O && 'items' in o)) &&
                      (s += un(f, m, c)),
                    'gutter' in o && (s += ln(m)),
                    !O &&
                      'speed' in o &&
                      (b && (s += cn(d)), x && (s += fn(d))),
                    (r =
                      a +
                      u +
                      l +
                      (s = s && '#' + Me + ' > .tns-item{' + s + '}')) &&
                      Zt.insertRule(
                        '@media (min-width: ' + i / 16 + 'em) {' + r + '}',
                        Zt.cssRules.length
                      );
                }
            })(),
            dn();
          var Qe = Wt
              ? O
                ? function() {
                    var t = pe,
                      e = ve;
                    (t += kt),
                      (e -= kt),
                      Bt ? ((t += 1), --e) : St && (Ht + Ot) % (St + Ot) && --e,
                      ne && (e < fe ? (fe -= W) : fe < t && (fe += W));
                  }
                : function() {
                    if (ve < fe) for (; pe + W <= fe; ) fe -= W;
                    else if (fe < pe) for (; fe <= ve - W; ) fe += W;
                  }
              : function() {
                  fe = Math.max(pe, Math.min(ve, fe));
                },
            Xe = O
              ? function() {
                  var e, n, i, o, t, r, a, u, l, s, c;
                  Vn(R, ''),
                    b || !jt
                      ? (Kn(), (jt && Fi(R)) || $n())
                      : ((e = R),
                        (n = ue),
                        (i = le),
                        (o = se),
                        (t = Xn()),
                        (r = jt),
                        (a = $n),
                        (u = Math.min(r, 10)),
                        (l = 0 <= t.indexOf('%') ? '%' : 'px'),
                        (t = t.replace(l, '')),
                        (s = Number(
                          e.style[n]
                            .replace(i, '')
                            .replace(o, '')
                            .replace(l, '')
                        )),
                        (c = ((t - s) / r) * u),
                        setTimeout(function t() {
                          r -= u;
                          s += c;
                          e.style[n] = i + s + l + o;
                          0 < r ? setTimeout(t, u) : a();
                        }, u)),
                    D || yi();
                }
              : function() {
                  ee = [];
                  var t = {};
                  (t[s] = t[c] = $n),
                    Qi(z[de], t),
                    Gi(z[fe], t),
                    Jn(de, A, L, !0),
                    Jn(fe, N, A),
                    (s && c && jt && Fi(R)) || $n();
                };
          return {
            version: '2.9.3',
            getInfo: xi,
            events: xe,
            goTo: ti,
            play: function() {
              Xt && !gt && (ri(), (xt = !1));
            },
            pause: function() {
              gt && (ai(), (xt = !0));
            },
            isOn: F,
            updateSliderHeight: Rn,
            refresh: dn,
            destroy: function() {
              var t;
              (Zt.disabled = !0),
                Zt.ownerNode && Zt.ownerNode.remove(),
                Qi(h, { resize: yn }),
                It && Qi(T, He),
                Y && Qi(Y, Ne),
                nt && Qi(nt, Se),
                Qi(R, Be),
                Qi(R, Oe),
                vt && Qi(vt, { click: ui }),
                Xt && clearInterval(yt),
                O && s && (((t = {})[s] = $n), Qi(R, t)),
                Gt && Qi(R, De),
                Qt && Qi(R, Pe);
              var e,
                r = [j, K, Z, $, it, mt];
              for (e in (f.forEach(function(t, e) {
                var n,
                  i,
                  o = 'container' === t ? P : C[t];
                'object' == typeof o &&
                  o &&
                  ((n = o.previousElementSibling || !1),
                  (i = o.parentNode),
                  (o.outerHTML = r[e]),
                  (C[t] = n ? n.nextElementSibling : i.firstElementChild));
              }),
              (f = A = L = p = N = D = P = k = R = I = j = z = W = H = q = Nt = St = Bt = Ot = Ht = Pt = kt = Rt = It = jt = zt = Wt = qt = Zt = $t = _ = ee = ne = ie = oe = re = ae = ue = le = se = ce = fe = de = pe = ve = he = ye = ge = be = xe = we = Me = Ce = Te = Ee = Ae = Le = Ne = Se = Be = Oe = He = De = Pe = ke = Re = Ie = je = We = qe = _e = Ve = V = Ft = _t = Y = K = J = U = tt = et = Vt = nt = it = ot = rt = at = ut = lt = st = ct = ft = dt = Xt = Yt = pt = Kt = Jt = vt = mt = Ut = ht = yt = gt = bt = xt = wt = Mt = Ct = Tt = Et = At = Lt = Gt = Qt = null),
              this))
                'rebuild' !== e && (this[e] = null);
              F = !1;
            },
            rebuild: function() {
              return Yi(Ci(C, d));
            }
          };
        }
        function Ye(t) {
          t && (Ft = Vt = Gt = Qt = It = Xt = Jt = Ut = !1);
        }
        function Ke() {
          for (var t = O ? fe - ne : fe; t < 0; ) t += W;
          return (t % W) + 1;
        }
        function Je(t) {
          return (
            (t = t ? Math.max(0, Math.min(Wt ? W - 1 : W - Pt, t)) : 0),
            O ? t + ne : t
          );
        }
        function Ue(t) {
          for (null == t && (t = fe), O && (t -= ne); t < 0; ) t += W;
          return Math.floor(t % W);
        }
        function Ze() {
          var t = Ue(),
            t = Ie
              ? t
              : St || Nt
              ? Math.ceil(((t + 1) * rt) / W - 1)
              : Math.floor(t / Pt);
          return (t = !Wt && O && fe === ve ? rt - 1 : t);
        }
        function $e() {
          return (
            h.innerWidth || T.documentElement.clientWidth || T.body.clientWidth
          );
        }
        function tn(t) {
          return 'top' === t ? 'afterbegin' : 'beforeend';
        }
        function en() {
          var t = Bt ? 2 * Bt - Ot : 0;
          return (
            (function t(e) {
              if (null != e) {
                var n,
                  i = T.createElement('div');
                return (
                  e.appendChild(i),
                  (n = (n = i.getBoundingClientRect()).right - n.left),
                  i.remove(),
                  n || t(e.parentNode)
                );
              }
            })(I) - t
          );
        }
        function nn(t) {
          if (C[t]) return !0;
          if (S) for (var e in S) if (S[e][t]) return !0;
          return !1;
        }
        function on(t, e) {
          if ((null == e && (e = q), 'items' === t && St))
            return Math.floor((Ht + Ot) / (St + Ot)) || 1;
          var n = C[t];
          if (S)
            for (var i in S) e >= parseInt(i) && t in S[i] && (n = S[i][t]);
          return (
            'slideBy' === t && 'page' === n && (n = on('items')),
            (n = !(O || ('slideBy' !== t && 'items' !== t)) ? Math.floor(n) : n)
          );
        }
        function rn(t, e, n, i, o) {
          var r,
            a = '';
          return (
            void 0 !== t
              ? ((r = t),
                e && (r -= e),
                (a = D
                  ? 'margin: 0 ' + r + 'px 0 ' + t + 'px;'
                  : 'margin: ' + t + 'px 0 ' + r + 'px 0;'))
              : e &&
                !n &&
                ((e = '-' + e + 'px'),
                (a = 'margin: 0 ' + (D ? e + ' 0 0' : '0 ' + e + ' 0') + ';')),
            !O && o && b && i && (a += cn(i)),
            a
          );
        }
        function an(t, e, n) {
          return t
            ? (t + e) * ie + 'px'
            : y
            ? y + '(' + 100 * ie + '% / ' + n + ')'
            : (100 * ie) / n + '%';
        }
        function un(t, e, n) {
          var i;
          return (
            (i =
              'width:' +
              (i = t
                ? t + e + 'px'
                : (O || (n = Math.floor(n)),
                  (i = O ? ie : n),
                  y ? y + '(100% / ' + i + ')' : 100 / i + '%'))),
            'inner' !== B ? i + ';' : i + ' !important;'
          );
        }
        function ln(t) {
          return !1 !== t
            ? (D ? 'padding-' : 'margin-') +
                (D ? 'right' : 'bottom') +
                ': ' +
                t +
                'px;'
            : '';
        }
        function sn(t, e) {
          e = t.substring(0, t.length - e).toLowerCase();
          return (e = e && '-' + e + '-');
        }
        function cn(t) {
          return sn(b, 18) + 'transition-duration:' + t / 1e3 + 's;';
        }
        function fn(t) {
          return sn(x, 17) + 'animation-duration:' + t / 1e3 + 's;';
        }
        function dn() {
          var t;
          nn('autoHeight') || Nt || !D
            ? (Oi((t = R.querySelectorAll('img')), function(t) {
                var e = t.src;
                $t ||
                  (e && e.indexOf('data:image') < 0
                    ? ((t.src = ''), Gi(t, Ve), Di(t, 'loading'), (t.src = e))
                    : Sn(t));
              }),
              wi(function() {
                Dn(zi(t), function() {
                  V = !0;
                });
              }),
              nn('autoHeight') && (t = On(fe, Math.min(fe + Pt - 1, ie - 1))),
              $t
                ? pn()
                : wi(function() {
                    Dn(zi(t), pn);
                  }))
            : (O && Yn(), mn(), hn());
        }
        function pn() {
          var i;
          Nt && 1 < W
            ? ((i = Wt ? fe : W - 1),
              (function t() {
                var e = z[i].getBoundingClientRect().left,
                  n = z[i - 1].getBoundingClientRect().right;
                Math.abs(e - n) <= 1
                  ? vn()
                  : setTimeout(function() {
                      t();
                    }, 16);
              })())
            : vn();
        }
        function vn() {
          (D && !Nt) ||
            (In(),
            Nt
              ? ((re = Qn()), Ee && (Ae = bn()), (ve = ce()), Ye(Ce || Ae))
              : yi()),
            O && Yn(),
            mn(),
            hn();
        }
        function mn() {
          if (
            (jn(),
            P.insertAdjacentHTML(
              'afterbegin',
              '<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">' +
                An() +
                '</span>  of ' +
                W +
                '</div>'
            ),
            (G = P.querySelector('.tns-liveregion .current')),
            je &&
              ((e = Xt ? 'stop' : 'start'),
              vt
                ? Ii(vt, { 'data-action': e })
                : C.autoplayButtonOutput &&
                  (P.insertAdjacentHTML(
                    tn(C.autoplayPosition),
                    '<button type="button" data-action="' +
                      e +
                      '">' +
                      ht[0] +
                      e +
                      ht[1] +
                      Kt[0] +
                      '</button>'
                  ),
                  (vt = P.querySelector('[data-action]'))),
              vt && Gi(vt, { click: ui }),
              Xt && (ri(), Jt && Gi(R, Be), Ut && Gi(R, Oe))),
            Re)
          ) {
            var t, e;
            if (nt)
              Ii(nt, { 'aria-label': 'Carousel Pagination' }),
                Oi((ot = nt.children), function(t, e) {
                  Ii(t, {
                    'data-nav': e,
                    tabindex: '-1',
                    'aria-label': ft + (e + 1),
                    'aria-controls': Me
                  });
                });
            else {
              for (
                var n = '', i = Ie ? '' : 'style="display:none"', o = 0;
                o < W;
                o++
              )
                n +=
                  '<button type="button" data-nav="' +
                  o +
                  '" tabindex="-1" aria-controls="' +
                  Me +
                  '" ' +
                  i +
                  ' aria-label="' +
                  ft +
                  (o + 1) +
                  '"></button>';
              P.insertAdjacentHTML(
                tn(C.navPosition),
                (n =
                  '<div class="tns-nav" aria-label="Carousel Pagination">' +
                  n +
                  '</div>')
              ),
                (nt = P.querySelector('.tns-nav')),
                (ot = nt.children);
            }
            bi(),
              b &&
                ((t = b.substring(0, b.length - 18).toLowerCase()),
                (e = 'transition: all ' + jt / 1e3 + 's'),
                Si(
                  Zt,
                  '[aria-controls^=' + Me + '-item]',
                  (e = t ? '-' + t + '-' + e : e),
                  Bi(Zt)
                )),
              Ii(ot[lt], { 'aria-label': ft + (lt + 1) + dt }),
              ji(ot[lt], 'tabindex'),
              Di(ot[lt], ct),
              Gi(nt, Se);
          }
          ke &&
            (Y ||
              (J && U) ||
              (P.insertAdjacentHTML(
                tn(C.controlsPosition),
                '<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="' +
                  Me +
                  '">' +
                  _t[0] +
                  '</button><button type="button" data-controls="next" tabindex="-1" aria-controls="' +
                  Me +
                  '">' +
                  _t[1] +
                  '</button></div>'
              ),
              (Y = P.querySelector('.tns-controls'))),
            (J && U) || ((J = Y.children[0]), (U = Y.children[1])),
            C.controlsContainer &&
              Ii(Y, { 'aria-label': 'Carousel Navigation', tabindex: '0' }),
            (C.controlsContainer || (C.prevButton && C.nextButton)) &&
              Ii([J, U], { 'aria-controls': Me, tabindex: '-1' }),
            (C.controlsContainer || (C.prevButton && C.nextButton)) &&
              (Ii(J, { 'data-controls': 'prev' }),
              Ii(U, { 'data-controls': 'next' })),
            (tt = Wn(J)),
            (et = Wn(U)),
            _n(),
            Y ? Gi(Y, Ne) : (Gi(J, Ne), Gi(U, Ne))),
            wn();
        }
        function hn() {
          var t;
          O && s && (((t = {})[s] = $n), Gi(R, t)),
            Gt && Gi(R, De, C.preventScrollOnTouch),
            Qt && Gi(R, Pe),
            It && Gi(T, He),
            'inner' === B
              ? xe.on('outerResized', function() {
                  gn(), xe.emit('innerLoaded', xi());
                })
              : (S || St || Nt || qt || !D) && Gi(h, { resize: yn }),
            qt && ('outer' === B ? xe.on('innerLoaded', Hn) : Ce || Hn()),
            Nn(),
            Ce ? Tn() : Ae && Cn(),
            xe.on('indexChanged', Pn),
            'inner' === B && xe.emit('innerLoaded', xi()),
            'function' == typeof be && be(xi()),
            (F = !0);
        }
        function yn(t) {
          wi(function() {
            gn(si(t));
          });
        }
        function gn(t) {
          var e, n, i, o, r, a, u, l, s, c, f, d, p, v, m, h, y, g, b, x, w, M;
          F &&
            ('outer' === B && xe.emit('outerResized', xi(t)),
            (q = $e()),
            (v = H),
            (n = !1),
            S && (xn(), (e = v !== H) && xe.emit('newBreakpointStart', xi(t))),
            (i = Pt),
            (o = Ce),
            (r = Ae),
            (a = It),
            (u = Ft),
            (l = Vt),
            (s = Gt),
            (c = Qt),
            (f = Xt),
            (d = Jt),
            (p = Ut),
            (v = fe),
            e &&
              ((m = St),
              (y = qt),
              (b = _t),
              (g = Dt),
              (h = Kt),
              E || ((M = Ot), (w = Bt))),
            (It = on('arrowKeys')),
            (Ft = on('controls')),
            (Vt = on('nav')),
            (Gt = on('touch')),
            (Dt = on('center')),
            (Qt = on('mouseDrag')),
            (Xt = on('autoplay')),
            (Jt = on('autoplayHoverPause')),
            (Ut = on('autoplayResetOnVisibility')),
            e &&
              ((Ce = on('disable')),
              (St = on('fixedWidth')),
              (jt = on('speed')),
              (qt = on('autoHeight')),
              (_t = on('controlsText')),
              (Kt = on('autoplayText')),
              (Yt = on('autoplayTimeout')),
              E || ((Bt = on('edgePadding')), (Ot = on('gutter')))),
            Ye(Ce),
            (Ht = en()),
            (D && !Nt) || Ce || (In(), D || (yi(), (n = !0))),
            (St || Nt) && ((re = Qn()), (ve = ce())),
            (e || St) &&
              ((Pt = on('items')),
              (kt = on('slideBy')),
              (x = Pt !== i) && (St || Nt || (ve = ce()), Qe())),
            e &&
              Ce !== o &&
              (Ce
                ? Tn
                : function() {
                    if (Te) {
                      if (((Zt.disabled = !1), (R.className += we), Yn(), Wt))
                        for (var t = ne; t--; )
                          O && qi(z[t]), qi(z[ie - t - 1]);
                      if (!O)
                        for (var e = fe, n = fe + W; e < n; e++) {
                          var i = z[e],
                            o = e < fe + Pt ? A : N;
                          (i.style.left = (100 * (e - fe)) / Pt + '%'),
                            Di(i, o);
                        }
                      Mn(), (Te = !1);
                    }
                  })(),
            Ee &&
              (e || St || Nt) &&
              (Ae = bn()) !== r &&
              (Ae
                ? (Kn(Xn(Je(0))), Cn())
                : ((function() {
                    if (Le) {
                      if ((Bt && E && (k.style.margin = ''), ne))
                        for (var t = 'tns-transparent', e = ne; e--; )
                          O && Pi(z[e], t), Pi(z[ie - e - 1], t);
                      Mn(), (Le = !1);
                    }
                  })(),
                  (n = !0))),
            Ye(Ce || Ae),
            Xt || (Jt = Ut = !1),
            It !== a && (It ? Gi : Qi)(T, He),
            Ft !== u &&
              (Ft
                ? Y
                  ? qi(Y)
                  : (J && qi(J), U && qi(U))
                : Y
                ? Wi(Y)
                : (J && Wi(J), U && Wi(U))),
            Vt !== l && (Vt ? (qi(nt), bi()) : Wi(nt)),
            Gt !== s && (Gt ? Gi(R, De, C.preventScrollOnTouch) : Qi(R, De)),
            Qt !== c && (Qt ? Gi : Qi)(R, Pe),
            Xt !== f &&
              (Xt
                ? (vt && qi(vt), gt || xt || ri())
                : (vt && Wi(vt), gt && ai())),
            Jt !== d && (Jt ? Gi : Qi)(R, Be),
            Ut !== p && (Ut ? Gi : Qi)(T, Oe),
            e
              ? ((St === m && Dt === g) || (n = !0),
                qt !== y && (qt || (k.style.height = '')),
                Ft &&
                  _t !== b &&
                  ((J.innerHTML = _t[0]), (U.innerHTML = _t[1])),
                vt &&
                  Kt !== h &&
                  ((b = (g = vt.innerHTML).length - h[(y = Xt ? 1 : 0)].length),
                  g.substring(b) === h[y] &&
                    (vt.innerHTML = g.substring(0, b) + Kt[y])))
              : Dt && (St || Nt) && (n = !0),
            (x || (St && !Nt)) && ((rt = gi()), bi()),
            (v = fe !== v)
              ? (xe.emit('indexChanged', xi()), (n = !0))
              : x
              ? v || Pn()
              : (St || Nt) && (Nn(), jn(), En()),
            x &&
              !O &&
              (function() {
                for (var t = fe + Math.min(W, Pt), e = ie; e--; ) {
                  var n = z[e];
                  fe <= e && e < t
                    ? (Di(n, 'tns-moving'),
                      (n.style.left = (100 * (e - fe)) / Pt + '%'),
                      Di(n, A),
                      Pi(n, N))
                    : n.style.left && ((n.style.left = ''), Di(n, N), Pi(n, A)),
                    Pi(n, L);
                }
                setTimeout(function() {
                  Oi(z, function(t) {
                    Pi(t, 'tns-moving');
                  });
                }, 300);
              })(),
            Ce ||
              Ae ||
              (e &&
                !E &&
                ((Bt === w && Ot === M) ||
                  (k.style.cssText = rn(Bt, Ot, St, jt, qt)),
                D &&
                  (O && (R.style.width = an(St, Ot, Pt)),
                  (x = un(St, Ot, Pt) + ln(Ot)),
                  (M = Bi((w = Zt)) - 1),
                  'deleteRule' in w ? w.deleteRule(M) : w.removeRule(M),
                  Si(Zt, '#' + Me + ' > .tns-item', x, Bi(Zt)))),
              qt && Hn(),
              n && (Yn(), (de = fe))),
            e && xe.emit('newBreakpointEnd', xi(t)));
        }
        function bn() {
          if (!St && !Nt) return W <= (Dt ? Pt - (Pt - 1) / 2 : Pt);
          var t = St ? (St + Ot) * W : _[W],
            e = Bt ? Ht + 2 * Bt : Ht + Ot;
          return (
            Dt &&
              (e -= St ? (Ht - St) / 2 : (Ht - (_[fe + 1] - _[fe] - Ot)) / 2),
            t <= e
          );
        }
        function xn() {
          for (var t in ((H = 0), S)) (t = parseInt(t)) <= q && (H = t);
        }
        function wn() {
          !Xt && vt && Wi(vt),
            !Vt && nt && Wi(nt),
            Ft || (Y ? Wi(Y) : (J && Wi(J), U && Wi(U)));
        }
        function Mn() {
          Xt && vt && qi(vt),
            Vt && nt && qi(nt),
            Ft && (Y ? qi(Y) : (J && qi(J), U && qi(U)));
        }
        function Cn() {
          if (!Le) {
            if ((Bt && (k.style.margin = '0px'), ne))
              for (var t = 'tns-transparent', e = ne; e--; )
                O && Di(z[e], t), Di(z[ie - e - 1], t);
            wn(), (Le = !0);
          }
        }
        function Tn() {
          if (!Te) {
            if (
              ((Zt.disabled = !0),
              (R.className = R.className.replace(we.substring(1), '')),
              ji(R, ['style']),
              Wt)
            )
              for (var t = ne; t--; ) O && Wi(z[t]), Wi(z[ie - t - 1]);
            if (((D && O) || ji(k, ['style']), !O))
              for (var e = fe, n = fe + W; e < n; e++) {
                var i = z[e];
                ji(i, ['style']), Pi(i, A), Pi(i, N);
              }
            wn(), (Te = !0);
          }
        }
        function En() {
          var t = An();
          G.innerHTML !== t && (G.innerHTML = t);
        }
        function An() {
          var t = Ln(),
            e = t[0] + 1,
            t = t[1] + 1;
          return e === t ? e + '' : e + ' to ' + t;
        }
        function Ln(t) {
          null == t && (t = Xn());
          var n,
            i,
            o,
            e,
            r = fe;
          return (
            Dt || Bt
              ? (Nt || St) &&
                ((n = -(parseFloat(t) + Bt)), (i = n + Ht + 2 * Bt))
              : Nt && ((n = _[fe]), (i = n + Ht)),
            Nt
              ? _.forEach(function(t, e) {
                  e < ie &&
                    ((Dt || Bt) && t <= n + 0.5 && (r = e),
                    0.5 <= i - t && (o = e));
                })
              : ((o = St
                  ? ((e = St + Ot),
                    Dt || Bt
                      ? ((r = Math.floor(n / e)), Math.ceil(i / e - 1))
                      : r + Math.ceil(Ht / e) - 1)
                  : Dt || Bt
                  ? ((e = Pt - 1),
                    (o = Dt ? ((r -= e / 2), fe + e / 2) : fe + e),
                    Bt && ((r -= e = (Bt * Pt) / Ht), (o += e)),
                    (r = Math.floor(r)),
                    Math.ceil(o))
                  : r + Pt - 1),
                (r = Math.max(r, 0)),
                (o = Math.min(o, ie - 1))),
            [r, o]
          );
        }
        function Nn() {
          var t;
          $t &&
            !Ce &&
            ((t = Ln()).push(te),
            On.apply(null, t).forEach(function(t) {
              var e;
              Hi(t, _e) ||
                (((e = {})[s] = function(t) {
                  t.stopPropagation();
                }),
                Gi(t, e),
                Gi(t, Ve),
                (t.src = Ri(t, 'data-src')),
                (e = Ri(t, 'data-srcset')) && (t.srcset = e),
                Di(t, 'loading'));
            }));
        }
        function Sn(t) {
          Di(t, 'loaded'), Bn(t);
        }
        function Bn(t) {
          Di(t, _e), Pi(t, 'loading'), Qi(t, Ve);
        }
        function On(t, e, n) {
          var i = [];
          for (n = n || 'img'; t <= e; )
            Oi(z[t].querySelectorAll(n), function(t) {
              i.push(t);
            }),
              t++;
          return i;
        }
        function Hn() {
          var t = On.apply(null, Ln());
          wi(function() {
            Dn(t, Rn);
          });
        }
        function Dn(n, t) {
          return V
            ? t()
            : (n.forEach(function(t, e) {
                !$t && t.complete && Bn(t), Hi(t, _e) && n.splice(e, 1);
              }),
              n.length
                ? void wi(function() {
                    Dn(n, t);
                  })
                : t());
        }
        function Pn() {
          Nn(),
            jn(),
            En(),
            _n(),
            (function() {
              {
                var t, e;
                Vt &&
                  ((lt = 0 <= ut ? ut : Ze()),
                  (ut = -1),
                  lt !== st &&
                    ((t = ot[st]),
                    (e = ot[lt]),
                    Ii(t, { tabindex: '-1', 'aria-label': ft + (st + 1) }),
                    Pi(t, ct),
                    Ii(e, { 'aria-label': ft + (lt + 1) + dt }),
                    ji(e, 'tabindex'),
                    Di(e, ct),
                    (st = lt)));
              }
            })();
        }
        function kn(t, e) {
          for (var n = [], i = t, o = Math.min(t + e, ie); i < o; i++)
            n.push(z[i].offsetHeight);
          return Math.max.apply(null, n);
        }
        function Rn() {
          var t = qt ? kn(fe, Pt) : kn(ne, W),
            e = M || k;
          e.style.height !== t && (e.style.height = t + 'px');
        }
        function In() {
          _ = [0];
          var n = D ? 'left' : 'top',
            i = D ? 'right' : 'bottom',
            o = z[0].getBoundingClientRect()[n];
          Oi(z, function(t, e) {
            e && _.push(t.getBoundingClientRect()[n] - o),
              e === ie - 1 && _.push(t.getBoundingClientRect()[i] - o);
          });
        }
        function jn() {
          var t = Ln(),
            n = t[0],
            i = t[1];
          Oi(z, function(t, e) {
            n <= e && e <= i
              ? ki(t, 'aria-hidden') &&
                (ji(t, ['aria-hidden', 'tabindex']), Di(t, qe))
              : ki(t, 'aria-hidden') ||
                (Ii(t, { 'aria-hidden': 'true', tabindex: '-1' }), Pi(t, qe));
          });
        }
        function zn(t) {
          return t.nodeName.toLowerCase();
        }
        function Wn(t) {
          return 'button' === zn(t);
        }
        function qn(t) {
          return 'true' === t.getAttribute('aria-disabled');
        }
        function Fn(t, e, n) {
          t ? (e.disabled = n) : e.setAttribute('aria-disabled', n.toString());
        }
        function _n() {
          var t, e, n, i;
          !Ft ||
            zt ||
            Wt ||
            ((t = tt ? J.disabled : qn(J)),
            (e = et ? U.disabled : qn(U)),
            (i = !zt && ve <= fe),
            (n = fe <= pe) && !t && Fn(tt, J, !0),
            !n && t && Fn(tt, J, !1),
            i && !e && Fn(et, U, !0),
            !i && e && Fn(et, U, !1));
        }
        function Vn(t, e) {
          b && (t.style[b] = e);
        }
        function Gn(t) {
          return (
            null == t && (t = fe),
            Nt
              ? (Ht - (Bt ? Ot : 0) - (_[t + 1] - _[t] - Ot)) / 2
              : St
              ? (Ht - St) / 2
              : (Pt - 1) / 2
          );
        }
        function Qn() {
          var t = Ht + (Bt ? Ot : 0) - (St ? (St + Ot) * ie : _[ie]);
          return (t =
            0 <
            (t =
              Dt && !Wt
                ? St
                  ? -(St + Ot) * (ie - 1) - Gn()
                  : Gn(ie - 1) - _[ie - 1]
                : t)
              ? 0
              : t);
        }
        function Xn(t) {
          var e;
          return (
            null == t && (t = fe),
            D && !Nt
              ? St
                ? ((e = -(St + Ot) * t), Dt && (e += Gn()))
                : (Dt && (t -= Gn()), (e = (100 * -t) / (r ? ie : Pt)))
              : ((e = -_[t]), Dt && Nt && (e += Gn())),
            oe && (e = Math.max(e, re)),
            (e += !D || Nt || St ? 'px' : '%')
          );
        }
        function Yn(t) {
          Vn(R, '0s'), Kn(t);
        }
        function Kn(t) {
          null == t && (t = Xn()), (R.style[ue] = le + t + se);
        }
        function Jn(t, e, n, i) {
          var o = t + Pt;
          Wt || (o = Math.min(o, ie));
          for (var r = t; r < o; r++) {
            var a = z[r];
            i || (a.style.left = (100 * (r - fe)) / Pt + '%'),
              p && u && (a.style[u] = a.style[l] = (p * (r - t)) / 1e3 + 's'),
              Pi(a, e),
              Di(a, n),
              i && ee.push(a);
          }
        }
        function Un(t, e) {
          ae && Qe(),
            (fe === de && !e) ||
              (xe.emit('indexChanged', xi()),
              xe.emit('transitionStart', xi()),
              qt && Hn(),
              gt && t && 0 <= ['click', 'keydown'].indexOf(t.type) && ai(),
              (ge = !0),
              Xe());
        }
        function Zn(t) {
          return t.toLowerCase().replace(/-/g, '');
        }
        function $n(t) {
          if (O || ge) {
            if ((xe.emit('transitionEnd', xi(t)), !O && 0 < ee.length))
              for (var e = 0; e < ee.length; e++) {
                var n = ee[e];
                (n.style.left = ''),
                  l && u && ((n.style[l] = ''), (n.style[u] = '')),
                  Pi(n, L),
                  Di(n, N);
              }
            (!t ||
              (!O && t.target.parentNode === R) ||
              (t.target === R && Zn(t.propertyName) === Zn(ue))) &&
              (ae ||
                ((t = fe),
                Qe(),
                fe !== t && (xe.emit('indexChanged', xi()), Yn())),
              'inner' === B && xe.emit('innerLoaded', xi()),
              (ge = !1),
              (de = fe));
          }
        }
        function ti(t, e) {
          if (!Ae)
            if ('prev' === t) ei(e, -1);
            else if ('next' === t) ei(e, 1);
            else {
              if (ge) {
                if (me) return;
                $n();
              }
              var n = Ue(),
                i = 0;
              'first' === t
                ? (i = -n)
                : 'last' === t
                ? (i = O ? W - Pt - n : W - 1 - n)
                : ('number' != typeof t && (t = parseInt(t)),
                  isNaN(t) ||
                    (i = (t = !e ? Math.max(0, Math.min(W - 1, t)) : t) - n)),
                !O &&
                  i &&
                  Math.abs(i) < Pt &&
                  ((n = 0 < i ? 1 : -1),
                  (i += pe <= fe + i - W ? W * n : 2 * W * n * -1)),
                (fe += i),
                O && Wt && (fe < pe && (fe += W), ve < fe && (fe -= W)),
                Ue(fe) !== Ue(de) && Un(e);
            }
        }
        function ei(t, e) {
          if (ge) {
            if (me) return;
            $n();
          }
          var n;
          if (!e) {
            for (var i = ci((t = si(t))); i !== Y && [J, U].indexOf(i) < 0; )
              i = i.parentNode;
            var o = [J, U].indexOf(i);
            0 <= o && ((n = !0), (e = 0 === o ? -1 : 1));
          }
          if (zt) {
            if (fe === pe && -1 === e) return void ti('last', t);
            if (fe === ve && 1 === e) return void ti('first', t);
          }
          e &&
            ((fe += kt * e),
            Nt && (fe = Math.floor(fe)),
            Un(n || (t && 'keydown' === t.type) ? t : null));
        }
        function ni() {
          (yt = setInterval(function() {
            ei(null, pt);
          }, Yt)),
            (gt = !0);
        }
        function ii() {
          clearInterval(yt), (gt = !1);
        }
        function oi(t, e) {
          Ii(vt, { 'data-action': t }), (vt.innerHTML = ht[0] + t + ht[1] + e);
        }
        function ri() {
          ni(), vt && oi('stop', Kt[1]);
        }
        function ai() {
          ii(), vt && oi('start', Kt[0]);
        }
        function ui() {
          xt = gt ? (ai(), !0) : (ri(), !1);
        }
        function li(t) {
          t.focus();
        }
        function si(t) {
          return fi((t = t || h.event)) ? t.changedTouches[0] : t;
        }
        function ci(t) {
          return t.target || h.event.srcElement;
        }
        function fi(t) {
          return 0 <= t.type.indexOf('touch');
        }
        function di(t) {
          t.preventDefault ? t.preventDefault() : (t.returnValue = !1);
        }
        function pi() {
          return (
            (e = Ct.y - Mt.y),
            (n = Ct.x - Mt.x),
            (t = Math.atan2(e, n) * (180 / Math.PI)),
            (e = he),
            (n = !1),
            (t = Math.abs(90 - Math.abs(t))),
            90 - e <= t ? (n = 'horizontal') : t <= e && (n = 'vertical'),
            n === C.axis
          );
          var t, e, n;
        }
        function vi(t) {
          if (ge) {
            if (me) return;
            $n();
          }
          Xt && gt && ii(), (Et = !0), At && (Mi(At), (At = null));
          var e = si(t);
          xe.emit(fi(t) ? 'touchStart' : 'dragStart', xi(t)),
            !fi(t) && 0 <= ['img', 'a'].indexOf(zn(ci(t))) && di(t),
            (Ct.x = Mt.x = e.clientX),
            (Ct.y = Mt.y = e.clientY),
            O && ((Tt = parseFloat(R.style[ue].replace(le, ''))), Vn(R, '0s'));
        }
        function mi(t) {
          var e;
          Et &&
            ((e = si(t)),
            (Ct.x = e.clientX),
            (Ct.y = e.clientY),
            O
              ? (At =
                  At ||
                  wi(function() {
                    !(function t(e) {
                      if (!ye) return void (Et = !1);
                      Mi(At);
                      Et &&
                        (At = wi(function() {
                          t(e);
                        }));
                      '?' === ye && (ye = pi());
                      if (ye) {
                        !Ge && fi(e) && (Ge = !0);
                        try {
                          e.type &&
                            xe.emit(fi(e) ? 'touchMove' : 'dragMove', xi(e));
                        } catch (t) {}
                        var n = Tt,
                          i = Lt(Ct, Mt);
                        !D || St || Nt
                          ? ((n += i), (n += 'px'))
                          : ((n += r
                              ? (i * Pt * 100) / ((Ht + Ot) * ie)
                              : (100 * i) / (Ht + Ot)),
                            (n += '%')),
                          (R.style[ue] = le + n + se);
                      }
                    })(t);
                  }))
              : (ye = '?' === ye ? pi() : ye) && (Ge = !0),
            ('boolean' != typeof t.cancelable || t.cancelable) &&
              Ge &&
              t.preventDefault());
        }
        function hi(i) {
          var t, o, n;
          Et &&
            (At && (Mi(At), (At = null)),
            O && Vn(R, ''),
            (Et = !1),
            (t = si(i)),
            (Ct.x = t.clientX),
            (Ct.y = t.clientY),
            (o = Lt(Ct, Mt)),
            Math.abs(o) &&
              (fi(i) ||
                Gi((n = ci(i)), {
                  click: function t(e) {
                    di(e), Qi(n, { click: t });
                  }
                }),
              O
                ? (At = wi(function() {
                    if (D && !Nt) {
                      var t = (-o * Pt) / (Ht + Ot),
                        t = 0 < o ? Math.floor(t) : Math.ceil(t);
                      fe += t;
                    } else {
                      var e = -(Tt + o);
                      if (e <= 0) fe = pe;
                      else if (e >= _[ie - 1]) fe = ve;
                      else
                        for (var n = 0; n < ie && e >= _[n]; )
                          e > _[(fe = n)] && o < 0 && (fe += 1), n++;
                    }
                    Un(i, o), xe.emit(fi(i) ? 'touchEnd' : 'dragEnd', xi(i));
                  }))
                : ye && ei(i, 0 < o ? -1 : 1))),
            'auto' === C.preventScrollOnTouch && (Ge = !1),
            he && (ye = '?'),
            Xt && !gt && ni();
        }
        function yi() {
          (M || k).style.height = _[fe + Pt] - _[fe] + 'px';
        }
        function gi() {
          return Math.min(Math.ceil(St ? ((St + Ot) * W) / Ht : W / Pt), W);
        }
        function bi() {
          if (Vt && !Ie && rt !== at) {
            var t = at,
              e = rt,
              n = qi;
            for (rt < at && ((t = rt), (e = at), (n = Wi)); t < e; )
              n(ot[t]), t++;
            at = rt;
          }
        }
        function xi(t) {
          return {
            container: R,
            slideItems: z,
            navContainer: nt,
            navItems: ot,
            controlsContainer: Y,
            hasControls: ke,
            prevButton: J,
            nextButton: U,
            items: Pt,
            slideBy: kt,
            cloneCount: ne,
            slideCount: W,
            slideCountNew: ie,
            index: fe,
            indexCached: de,
            displayIndex: Ke(),
            navCurrentIndex: lt,
            navCurrentIndexCached: st,
            pages: rt,
            pagesCached: at,
            sheet: Zt,
            isOn: F,
            event: t || {}
          };
        }
      },
      l = document.getElementsByClassName('project-carousel');
    if (l)
      for (var s = 0; s < l.length; s++)
        Yi({
          container: l[s],
          items: 1,
          gutter: 0,
          center: !0,
          loop: !0,
          nav: !1,
          slideBy: 1,
          autoplay: !1,
          controlsText: [
            '<img src="/wp-content/themes/rjrstudios-2018/dist/assets/icons/ionic-ios-arrow-left-slider-arrow.svg" alt="Left" />',
            '<img src="/wp-content/themes/rjrstudios-2018/dist/assets/icons/ionic-ios-arrow-right-slider-arrow.svg" alt="Right" />'
          ]
        });
  }
});
