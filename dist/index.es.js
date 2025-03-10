import eo, { createContext as Tt, useRef as me, useContext as G, useId as no, useEffect as ln, useCallback as Pi, useLayoutEffect as so, useMemo as Se, useInsertionEffect as io, forwardRef as ro, Fragment as Si, createElement as oo, Component as ao, useTransition as lo } from "react";
var ce = { exports: {} }, _t = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var es;
function uo() {
  if (es) return _t;
  es = 1;
  var t = Symbol.for("react.transitional.element"), e = Symbol.for("react.fragment");
  function n(s, i, o) {
    var r = null;
    if (o !== void 0 && (r = "" + o), i.key !== void 0 && (r = "" + i.key), "key" in i) {
      o = {};
      for (var a in i)
        a !== "key" && (o[a] = i[a]);
    } else o = i;
    return i = o.ref, {
      $$typeof: t,
      type: s,
      key: r,
      ref: i !== void 0 ? i : null,
      props: o
    };
  }
  return _t.Fragment = e, _t.jsx = n, _t.jsxs = n, _t;
}
var Ut = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ns;
function co() {
  return ns || (ns = 1, process.env.NODE_ENV !== "production" && function() {
    function t(h) {
      if (h == null) return null;
      if (typeof h == "function")
        return h.$$typeof === q ? null : h.displayName || h.name || null;
      if (typeof h == "string") return h;
      switch (h) {
        case M:
          return "Fragment";
        case S:
          return "Portal";
        case w:
          return "Profiler";
        case B:
          return "StrictMode";
        case bt:
          return "Suspense";
        case Ft:
          return "SuspenseList";
      }
      if (typeof h == "object")
        switch (typeof h.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), h.$$typeof) {
          case K:
            return (h.displayName || "Context") + ".Provider";
          case I:
            return (h._context.displayName || "Context") + ".Consumer";
          case Q:
            var T = h.render;
            return h = h.displayName, h || (h = T.displayName || T.name || "", h = h !== "" ? "ForwardRef(" + h + ")" : "ForwardRef"), h;
          case Pt:
            return T = h.displayName || null, T !== null ? T : t(h.type) || "Memo";
          case le:
            T = h._payload, h = h._init;
            try {
              return t(h(T));
            } catch {
            }
        }
      return null;
    }
    function e(h) {
      return "" + h;
    }
    function n(h) {
      try {
        e(h);
        var T = !1;
      } catch {
        T = !0;
      }
      if (T) {
        T = console;
        var x = T.error, E = typeof Symbol == "function" && Symbol.toStringTag && h[Symbol.toStringTag] || h.constructor.name || "Object";
        return x.call(
          T,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          E
        ), e(h);
      }
    }
    function s() {
    }
    function i() {
      if (It === 0) {
        Kn = console.log, Wn = console.info, Gn = console.warn, Yn = console.error, zn = console.group, Hn = console.groupCollapsed, Xn = console.groupEnd;
        var h = {
          configurable: !0,
          enumerable: !0,
          value: s,
          writable: !0
        };
        Object.defineProperties(console, {
          info: h,
          log: h,
          warn: h,
          error: h,
          group: h,
          groupCollapsed: h,
          groupEnd: h
        });
      }
      It++;
    }
    function o() {
      if (It--, It === 0) {
        var h = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: dt({}, h, { value: Kn }),
          info: dt({}, h, { value: Wn }),
          warn: dt({}, h, { value: Gn }),
          error: dt({}, h, { value: Yn }),
          group: dt({}, h, { value: zn }),
          groupCollapsed: dt({}, h, { value: Hn }),
          groupEnd: dt({}, h, { value: Xn })
        });
      }
      0 > It && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function r(h) {
      if (Re === void 0)
        try {
          throw Error();
        } catch (x) {
          var T = x.stack.trim().match(/\n( *(at )?)/);
          Re = T && T[1] || "", qn = -1 < x.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < x.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + Re + h + qn;
    }
    function a(h, T) {
      if (!h || De) return "";
      var x = ke.get(h);
      if (x !== void 0) return x;
      De = !0, x = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var E = null;
      E = Z.H, Z.H = null, i();
      try {
        var _ = {
          DetermineComponentFrameRoot: function() {
            try {
              if (T) {
                var at = function() {
                  throw Error();
                };
                if (Object.defineProperty(at.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(at, []);
                  } catch (it) {
                    var ue = it;
                  }
                  Reflect.construct(h, [], at);
                } else {
                  try {
                    at.call();
                  } catch (it) {
                    ue = it;
                  }
                  h.call(at.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (it) {
                  ue = it;
                }
                (at = h()) && typeof at.catch == "function" && at.catch(function() {
                });
              }
            } catch (it) {
              if (it && ue && typeof it.stack == "string")
                return [it.stack, ue.stack];
            }
            return [null, null];
          }
        };
        _.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var k = Object.getOwnPropertyDescriptor(
          _.DetermineComponentFrameRoot,
          "name"
        );
        k && k.configurable && Object.defineProperty(
          _.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var V = _.DetermineComponentFrameRoot(), st = V[0], At = V[1];
        if (st && At) {
          var W = st.split(`
`), mt = At.split(`
`);
          for (V = k = 0; k < W.length && !W[k].includes(
            "DetermineComponentFrameRoot"
          ); )
            k++;
          for (; V < mt.length && !mt[V].includes(
            "DetermineComponentFrameRoot"
          ); )
            V++;
          if (k === W.length || V === mt.length)
            for (k = W.length - 1, V = mt.length - 1; 1 <= k && 0 <= V && W[k] !== mt[V]; )
              V--;
          for (; 1 <= k && 0 <= V; k--, V--)
            if (W[k] !== mt[V]) {
              if (k !== 1 || V !== 1)
                do
                  if (k--, V--, 0 > V || W[k] !== mt[V]) {
                    var Nt = `
` + W[k].replace(
                      " at new ",
                      " at "
                    );
                    return h.displayName && Nt.includes("<anonymous>") && (Nt = Nt.replace("<anonymous>", h.displayName)), typeof h == "function" && ke.set(h, Nt), Nt;
                  }
                while (1 <= k && 0 <= V);
              break;
            }
        }
      } finally {
        De = !1, Z.H = E, o(), Error.prepareStackTrace = x;
      }
      return W = (W = h ? h.displayName || h.name : "") ? r(W) : "", typeof h == "function" && ke.set(h, W), W;
    }
    function l(h) {
      if (h == null) return "";
      if (typeof h == "function") {
        var T = h.prototype;
        return a(
          h,
          !(!T || !T.isReactComponent)
        );
      }
      if (typeof h == "string") return r(h);
      switch (h) {
        case bt:
          return r("Suspense");
        case Ft:
          return r("SuspenseList");
      }
      if (typeof h == "object")
        switch (h.$$typeof) {
          case Q:
            return h = a(h.render, !1), h;
          case Pt:
            return l(h.type);
          case le:
            T = h._payload, h = h._init;
            try {
              return l(h(T));
            } catch {
            }
        }
      return "";
    }
    function u() {
      var h = Z.A;
      return h === null ? null : h.getOwner();
    }
    function c(h) {
      if (St.call(h, "key")) {
        var T = Object.getOwnPropertyDescriptor(h, "key").get;
        if (T && T.isReactWarning) return !1;
      }
      return h.key !== void 0;
    }
    function f(h, T) {
      function x() {
        Zn || (Zn = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          T
        ));
      }
      x.isReactWarning = !0, Object.defineProperty(h, "key", {
        get: x,
        configurable: !0
      });
    }
    function d() {
      var h = t(this.type);
      return Jn[h] || (Jn[h] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), h = this.props.ref, h !== void 0 ? h : null;
    }
    function m(h, T, x, E, _, k) {
      return x = k.ref, h = {
        $$typeof: C,
        type: h,
        key: T,
        props: k,
        _owner: _
      }, (x !== void 0 ? x : null) !== null ? Object.defineProperty(h, "ref", {
        enumerable: !1,
        get: d
      }) : Object.defineProperty(h, "ref", { enumerable: !1, value: null }), h._store = {}, Object.defineProperty(h._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(h, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.freeze && (Object.freeze(h.props), Object.freeze(h)), h;
    }
    function p(h, T, x, E, _, k) {
      if (typeof h == "string" || typeof h == "function" || h === M || h === w || h === B || h === bt || h === Ft || h === $n || typeof h == "object" && h !== null && (h.$$typeof === le || h.$$typeof === Pt || h.$$typeof === K || h.$$typeof === I || h.$$typeof === Q || h.$$typeof === Qr || h.getModuleId !== void 0)) {
        var V = T.children;
        if (V !== void 0)
          if (E)
            if (Me(V)) {
              for (E = 0; E < V.length; E++)
                g(V[E], h);
              Object.freeze && Object.freeze(V);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else g(V, h);
      } else
        V = "", (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (V += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), h === null ? E = "null" : Me(h) ? E = "array" : h !== void 0 && h.$$typeof === C ? (E = "<" + (t(h.type) || "Unknown") + " />", V = " Did you accidentally export a JSX literal instead of a component?") : E = typeof h, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          E,
          V
        );
      if (St.call(T, "key")) {
        V = t(h);
        var st = Object.keys(T).filter(function(W) {
          return W !== "key";
        });
        E = 0 < st.length ? "{key: someKey, " + st.join(": ..., ") + ": ...}" : "{key: someKey}", Qn[V + E] || (st = 0 < st.length ? "{" + st.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          E,
          V,
          st,
          V
        ), Qn[V + E] = !0);
      }
      if (V = null, x !== void 0 && (n(x), V = "" + x), c(T) && (n(T.key), V = "" + T.key), "key" in T) {
        x = {};
        for (var At in T)
          At !== "key" && (x[At] = T[At]);
      } else x = T;
      return V && f(
        x,
        typeof h == "function" ? h.displayName || h.name || "Unknown" : h
      ), m(h, V, k, _, u(), x);
    }
    function g(h, T) {
      if (typeof h == "object" && h && h.$$typeof !== to) {
        if (Me(h))
          for (var x = 0; x < h.length; x++) {
            var E = h[x];
            v(E) && y(E, T);
          }
        else if (v(h))
          h._store && (h._store.validated = 1);
        else if (h === null || typeof h != "object" ? x = null : (x = F && h[F] || h["@@iterator"], x = typeof x == "function" ? x : null), typeof x == "function" && x !== h.entries && (x = x.call(h), x !== h))
          for (; !(h = x.next()).done; )
            v(h.value) && y(h.value, T);
      }
    }
    function v(h) {
      return typeof h == "object" && h !== null && h.$$typeof === C;
    }
    function y(h, T) {
      if (h._store && !h._store.validated && h.key == null && (h._store.validated = 1, T = b(T), !ts[T])) {
        ts[T] = !0;
        var x = "";
        h && h._owner != null && h._owner !== u() && (x = null, typeof h._owner.tag == "number" ? x = t(h._owner.type) : typeof h._owner.name == "string" && (x = h._owner.name), x = " It was passed a child from " + x + ".");
        var E = Z.getCurrentStack;
        Z.getCurrentStack = function() {
          var _ = l(h.type);
          return E && (_ += E() || ""), _;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          T,
          x
        ), Z.getCurrentStack = E;
      }
    }
    function b(h) {
      var T = "", x = u();
      return x && (x = t(x.type)) && (T = `

Check the render method of \`` + x + "`."), T || (h = t(h)) && (T = `

Check the top-level render call using <` + h + ">."), T;
    }
    var P = eo, C = Symbol.for("react.transitional.element"), S = Symbol.for("react.portal"), M = Symbol.for("react.fragment"), B = Symbol.for("react.strict_mode"), w = Symbol.for("react.profiler"), I = Symbol.for("react.consumer"), K = Symbol.for("react.context"), Q = Symbol.for("react.forward_ref"), bt = Symbol.for("react.suspense"), Ft = Symbol.for("react.suspense_list"), Pt = Symbol.for("react.memo"), le = Symbol.for("react.lazy"), $n = Symbol.for("react.offscreen"), F = Symbol.iterator, q = Symbol.for("react.client.reference"), Z = P.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, St = Object.prototype.hasOwnProperty, dt = Object.assign, Qr = Symbol.for("react.client.reference"), Me = Array.isArray, It = 0, Kn, Wn, Gn, Yn, zn, Hn, Xn;
    s.__reactDisabledLog = !0;
    var Re, qn, De = !1, ke = new (typeof WeakMap == "function" ? WeakMap : Map)(), to = Symbol.for("react.client.reference"), Zn, Jn = {}, Qn = {}, ts = {};
    Ut.Fragment = M, Ut.jsx = function(h, T, x, E, _) {
      return p(h, T, x, !1, E, _);
    }, Ut.jsxs = function(h, T, x, E, _) {
      return p(h, T, x, !0, E, _);
    };
  }()), Ut;
}
var ss;
function fo() {
  return ss || (ss = 1, process.env.NODE_ENV === "production" ? ce.exports = uo() : ce.exports = co()), ce.exports;
}
var qt = fo();
function Ai(t) {
  var e, n, s = "";
  if (typeof t == "string" || typeof t == "number") s += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var i = t.length;
    for (e = 0; e < i; e++) t[e] && (n = Ai(t[e])) && (s && (s += " "), s += n);
  } else for (n in t) t[n] && (s && (s += " "), s += n);
  return s;
}
function ho() {
  for (var t, e, n = 0, s = "", i = arguments.length; n < i; n++) (t = arguments[n]) && (e = Ai(t)) && (s && (s += " "), s += e);
  return s;
}
const wi = Tt({});
function mo(t) {
  const e = me(null);
  return e.current === null && (e.current = t()), e.current;
}
const un = /* @__PURE__ */ Tt(null), Vi = Tt({
  transformPagePoint: (t) => t,
  isStatic: !1,
  reducedMotion: "never"
});
function po(t = !0) {
  const e = G(un);
  if (e === null)
    return [!0, null];
  const { isPresent: n, onExitComplete: s, register: i } = e, o = no();
  ln(() => {
    if (t)
      return i(o);
  }, [t]);
  const r = Pi(() => t && s && s(o), [o, s, t]);
  return !n && s ? [!1, r] : [!0];
}
const cn = typeof window < "u", go = cn ? so : ln, z = /* @__NO_SIDE_EFFECTS__ */ (t) => t;
let Ot = z, ut = z;
process.env.NODE_ENV !== "production" && (Ot = (t, e) => {
  !t && typeof console < "u" && console.warn(e);
}, ut = (t, e) => {
  if (!t)
    throw new Error(e);
});
// @__NO_SIDE_EFFECTS__
function fn(t) {
  let e;
  return () => (e === void 0 && (e = t()), e);
}
const Dt = /* @__NO_SIDE_EFFECTS__ */ (t, e, n) => {
  const s = e - t;
  return s === 0 ? 1 : (n - t) / s;
}, tt = /* @__NO_SIDE_EFFECTS__ */ (t) => t * 1e3, rt = /* @__NO_SIDE_EFFECTS__ */ (t) => t / 1e3, yo = {
  useManualTiming: !1
}, fe = [
  "read",
  // Read
  "resolveKeyframes",
  // Write/Read/Write/Read
  "update",
  // Compute
  "preRender",
  // Compute
  "render",
  // Write
  "postRender"
  // Compute
], is = {
  value: null
};
function vo(t, e) {
  let n = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Set(), i = !1, o = !1;
  const r = /* @__PURE__ */ new WeakSet();
  let a = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, l = 0;
  function u(f) {
    r.has(f) && (c.schedule(f), t()), l++, f(a);
  }
  const c = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (f, d = !1, m = !1) => {
      const g = m && i ? n : s;
      return d && r.add(f), g.has(f) || g.add(f), f;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (f) => {
      s.delete(f), r.delete(f);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (f) => {
      if (a = f, i) {
        o = !0;
        return;
      }
      i = !0, [n, s] = [s, n], n.forEach(u), e && is.value && is.value.frameloop[e].push(l), l = 0, n.clear(), i = !1, o && (o = !1, c.process(f));
    }
  };
  return c;
}
const To = 40;
function Ei(t, e) {
  let n = !1, s = !0;
  const i = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, o = () => n = !0, r = fe.reduce((y, b) => (y[b] = vo(o, e ? b : void 0), y), {}), { read: a, resolveKeyframes: l, update: u, preRender: c, render: f, postRender: d } = r, m = () => {
    const y = performance.now();
    n = !1, i.delta = s ? 1e3 / 60 : Math.max(Math.min(y - i.timestamp, To), 1), i.timestamp = y, i.isProcessing = !0, a.process(i), l.process(i), u.process(i), c.process(i), f.process(i), d.process(i), i.isProcessing = !1, n && e && (s = !1, t(m));
  }, p = () => {
    n = !0, s = !0, i.isProcessing || t(m);
  };
  return { schedule: fe.reduce((y, b) => {
    const P = r[b];
    return y[b] = (C, S = !1, M = !1) => (n || p(), P.schedule(C, S, M)), y;
  }, {}), cancel: (y) => {
    for (let b = 0; b < fe.length; b++)
      r[fe[b]].cancel(y);
  }, state: i, steps: r };
}
const { schedule: R, cancel: ct, state: N, steps: Le } = Ei(typeof requestAnimationFrame < "u" ? requestAnimationFrame : z, !0), Ci = Tt({ strict: !1 }), rs = {
  animation: [
    "animate",
    "variants",
    "whileHover",
    "whileTap",
    "exit",
    "whileInView",
    "whileFocus",
    "whileDrag"
  ],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
}, kt = {};
for (const t in rs)
  kt[t] = {
    isEnabled: (e) => rs[t].some((n) => !!e[n])
  };
function xo(t) {
  for (const e in t)
    kt[e] = {
      ...kt[e],
      ...t[e]
    };
}
const bo = /* @__PURE__ */ new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport"
]);
function ve(t) {
  return t.startsWith("while") || t.startsWith("drag") && t !== "draggable" || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || bo.has(t);
}
let Mi = (t) => !ve(t);
function Po(t) {
  t && (Mi = (e) => e.startsWith("on") ? !ve(e) : t(e));
}
try {
  Po(require("@emotion/is-prop-valid").default);
} catch {
}
function So(t, e, n) {
  const s = {};
  for (const i in t)
    i === "values" && typeof t.values == "object" || (Mi(i) || n === !0 && ve(i) || !e && !ve(i) || // If trying to use native HTML drag events, forward drag listeners
    t.draggable && i.startsWith("onDrag")) && (s[i] = t[i]);
  return s;
}
const os = /* @__PURE__ */ new Set();
function Ae(t, e, n) {
  t || os.has(e) || (console.warn(e), os.add(e));
}
function Ao(t) {
  if (typeof Proxy > "u")
    return t;
  const e = /* @__PURE__ */ new Map(), n = (...s) => (process.env.NODE_ENV !== "production" && Ae(!1, "motion() is deprecated. Use motion.create() instead."), t(...s));
  return new Proxy(n, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (s, i) => i === "create" ? t : (e.has(i) || e.set(i, t(i)), e.get(i))
  });
}
const we = /* @__PURE__ */ Tt({});
function Ve(t) {
  return t !== null && typeof t == "object" && typeof t.start == "function";
}
function Zt(t) {
  return typeof t == "string" || Array.isArray(t);
}
const hn = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], dn = ["initial", ...hn];
function Ee(t) {
  return Ve(t.animate) || dn.some((e) => Zt(t[e]));
}
function Ri(t) {
  return !!(Ee(t) || t.variants);
}
function wo(t, e) {
  if (Ee(t)) {
    const { initial: n, animate: s } = t;
    return {
      initial: n === !1 || Zt(n) ? n : void 0,
      animate: Zt(s) ? s : void 0
    };
  }
  return t.inherit !== !1 ? e : {};
}
function Vo(t) {
  const { initial: e, animate: n } = wo(t, G(we));
  return Se(() => ({ initial: e, animate: n }), [as(e), as(n)]);
}
function as(t) {
  return Array.isArray(t) ? t.join(" ") : t;
}
const Eo = Symbol.for("motionComponentSymbol");
function wt(t) {
  return t && typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current");
}
function Co(t, e, n) {
  return Pi(
    (s) => {
      s && t.onMount && t.onMount(s), e && (s ? e.mount(s) : e.unmount()), n && (typeof n == "function" ? n(s) : wt(n) && (n.current = s));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [e]
  );
}
const mn = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), Mo = "framerAppearId", Di = "data-" + mn(Mo), { schedule: pn } = Ei(queueMicrotask, !1), ki = Tt({});
function Ro(t, e, n, s, i) {
  var o, r;
  const { visualElement: a } = G(we), l = G(Ci), u = G(un), c = G(Vi).reducedMotion, f = me(null);
  s = s || l.renderer, !f.current && s && (f.current = s(t, {
    visualState: e,
    parent: a,
    props: n,
    presenceContext: u,
    blockInitialAnimation: u ? u.initial === !1 : !1,
    reducedMotionConfig: c
  }));
  const d = f.current, m = G(ki);
  d && !d.projection && i && (d.type === "html" || d.type === "svg") && Do(f.current, n, i, m);
  const p = me(!1);
  io(() => {
    d && p.current && d.update(n, u);
  });
  const g = n[Di], v = me(!!g && !(!((o = window.MotionHandoffIsComplete) === null || o === void 0) && o.call(window, g)) && ((r = window.MotionHasOptimisedAnimation) === null || r === void 0 ? void 0 : r.call(window, g)));
  return go(() => {
    d && (p.current = !0, window.MotionIsMounted = !0, d.updateFeatures(), pn.render(d.render), v.current && d.animationState && d.animationState.animateChanges());
  }), ln(() => {
    d && (!v.current && d.animationState && d.animationState.animateChanges(), v.current && (queueMicrotask(() => {
      var y;
      (y = window.MotionHandoffMarkAsComplete) === null || y === void 0 || y.call(window, g);
    }), v.current = !1));
  }), d;
}
function Do(t, e, n, s) {
  const { layoutId: i, layout: o, drag: r, dragConstraints: a, layoutScroll: l, layoutRoot: u } = e;
  t.projection = new n(t.latestValues, e["data-framer-portal-id"] ? void 0 : Li(t.parent)), t.projection.setOptions({
    layoutId: i,
    layout: o,
    alwaysMeasureLayout: !!r || a && wt(a),
    visualElement: t,
    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof o == "string" ? o : "both",
    initialPromotionConfig: s,
    layoutScroll: l,
    layoutRoot: u
  });
}
function Li(t) {
  if (t)
    return t.options.allowProjection !== !1 ? t.projection : Li(t.parent);
}
function ko({ preloadedFeatures: t, createVisualElement: e, useRender: n, useVisualState: s, Component: i }) {
  var o, r;
  t && xo(t);
  function a(u, c) {
    let f;
    const d = {
      ...G(Vi),
      ...u,
      layoutId: Lo(u)
    }, { isStatic: m } = d, p = Vo(u), g = s(u, m);
    if (!m && cn) {
      Oo(d, t);
      const v = jo(d);
      f = v.MeasureLayout, p.visualElement = Ro(i, g, d, e, v.ProjectionNode);
    }
    return qt.jsxs(we.Provider, { value: p, children: [f && p.visualElement ? qt.jsx(f, { visualElement: p.visualElement, ...d }) : null, n(i, u, Co(g, p.visualElement, c), g, m, p.visualElement)] });
  }
  a.displayName = `motion.${typeof i == "string" ? i : `create(${(r = (o = i.displayName) !== null && o !== void 0 ? o : i.name) !== null && r !== void 0 ? r : ""})`}`;
  const l = ro(a);
  return l[Eo] = i, l;
}
function Lo({ layoutId: t }) {
  const e = G(wi).id;
  return e && t !== void 0 ? e + "-" + t : t;
}
function Oo(t, e) {
  const n = G(Ci).strict;
  if (process.env.NODE_ENV !== "production" && e && n) {
    const s = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
    t.ignoreStrict ? Ot(!1, s) : ut(!1, s);
  }
}
function jo(t) {
  const { drag: e, layout: n } = kt;
  if (!e && !n)
    return {};
  const s = { ...e, ...n };
  return {
    MeasureLayout: e != null && e.isEnabled(t) || n != null && n.isEnabled(t) ? s.MeasureLayout : void 0,
    ProjectionNode: s.ProjectionNode
  };
}
const Oi = (t) => (e) => typeof e == "string" && e.startsWith(t), gn = /* @__PURE__ */ Oi("--"), Bo = /* @__PURE__ */ Oi("var(--"), yn = (t) => Bo(t) ? Fo.test(t.split("/*")[0].trim()) : !1, Fo = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, Jt = {};
function Io(t) {
  for (const e in t)
    Jt[e] = t[e], gn(e) && (Jt[e].isCSSVariable = !0);
}
const jt = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
], xt = new Set(jt);
function ji(t, { layout: e, layoutId: n }) {
  return xt.has(t) || t.startsWith("origin") || (e || n !== void 0) && (!!Jt[t] || t === "opacity");
}
const $ = (t) => !!(t && t.getVelocity), Bi = (t, e) => e && typeof t == "number" ? e.transform(t) : t, ot = (t, e, n) => n > e ? e : n < t ? t : n, Bt = {
  test: (t) => typeof t == "number",
  parse: parseFloat,
  transform: (t) => t
}, Qt = {
  ...Bt,
  transform: (t) => ot(0, 1, t)
}, he = {
  ...Bt,
  default: 1
}, ie = (t) => ({
  test: (e) => typeof e == "string" && e.endsWith(t) && e.split(" ").length === 1,
  parse: parseFloat,
  transform: (e) => `${e}${t}`
}), lt = /* @__PURE__ */ ie("deg"), et = /* @__PURE__ */ ie("%"), A = /* @__PURE__ */ ie("px"), No = /* @__PURE__ */ ie("vh"), _o = /* @__PURE__ */ ie("vw"), ls = {
  ...et,
  parse: (t) => et.parse(t) / 100,
  transform: (t) => et.transform(t * 100)
}, Uo = {
  // Border props
  borderWidth: A,
  borderTopWidth: A,
  borderRightWidth: A,
  borderBottomWidth: A,
  borderLeftWidth: A,
  borderRadius: A,
  radius: A,
  borderTopLeftRadius: A,
  borderTopRightRadius: A,
  borderBottomRightRadius: A,
  borderBottomLeftRadius: A,
  // Positioning props
  width: A,
  maxWidth: A,
  height: A,
  maxHeight: A,
  top: A,
  right: A,
  bottom: A,
  left: A,
  // Spacing props
  padding: A,
  paddingTop: A,
  paddingRight: A,
  paddingBottom: A,
  paddingLeft: A,
  margin: A,
  marginTop: A,
  marginRight: A,
  marginBottom: A,
  marginLeft: A,
  // Misc
  backgroundPositionX: A,
  backgroundPositionY: A
}, $o = {
  rotate: lt,
  rotateX: lt,
  rotateY: lt,
  rotateZ: lt,
  scale: he,
  scaleX: he,
  scaleY: he,
  scaleZ: he,
  skew: lt,
  skewX: lt,
  skewY: lt,
  distance: A,
  translateX: A,
  translateY: A,
  translateZ: A,
  x: A,
  y: A,
  z: A,
  perspective: A,
  transformPerspective: A,
  opacity: Qt,
  originX: ls,
  originY: ls,
  originZ: A
}, us = {
  ...Bt,
  transform: Math.round
}, vn = {
  ...Uo,
  ...$o,
  zIndex: us,
  size: A,
  // SVG
  fillOpacity: Qt,
  strokeOpacity: Qt,
  numOctaves: us
}, Ko = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, Wo = jt.length;
function Go(t, e, n) {
  let s = "", i = !0;
  for (let o = 0; o < Wo; o++) {
    const r = jt[o], a = t[r];
    if (a === void 0)
      continue;
    let l = !0;
    if (typeof a == "number" ? l = a === (r.startsWith("scale") ? 1 : 0) : l = parseFloat(a) === 0, !l || n) {
      const u = Bi(a, vn[r]);
      if (!l) {
        i = !1;
        const c = Ko[r] || r;
        s += `${c}(${u}) `;
      }
      n && (e[r] = u);
    }
  }
  return s = s.trim(), n ? s = n(e, i ? "" : s) : i && (s = "none"), s;
}
function Tn(t, e, n) {
  const { style: s, vars: i, transformOrigin: o } = t;
  let r = !1, a = !1;
  for (const l in e) {
    const u = e[l];
    if (xt.has(l)) {
      r = !0;
      continue;
    } else if (gn(l)) {
      i[l] = u;
      continue;
    } else {
      const c = Bi(u, vn[l]);
      l.startsWith("origin") ? (a = !0, o[l] = c) : s[l] = c;
    }
  }
  if (e.transform || (r || n ? s.transform = Go(e, t.transform, n) : s.transform && (s.transform = "none")), a) {
    const { originX: l = "50%", originY: u = "50%", originZ: c = 0 } = o;
    s.transformOrigin = `${l} ${u} ${c}`;
  }
}
const xn = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function Fi(t, e, n) {
  for (const s in e)
    !$(e[s]) && !ji(s, n) && (t[s] = e[s]);
}
function Yo({ transformTemplate: t }, e) {
  return Se(() => {
    const n = xn();
    return Tn(n, e, t), Object.assign({}, n.vars, n.style);
  }, [e]);
}
function zo(t, e) {
  const n = t.style || {}, s = {};
  return Fi(s, n, t), Object.assign(s, Yo(t, e)), s;
}
function Ho(t, e) {
  const n = {}, s = zo(t, e);
  return t.drag && t.dragListener !== !1 && (n.draggable = !1, s.userSelect = s.WebkitUserSelect = s.WebkitTouchCallout = "none", s.touchAction = t.drag === !0 ? "none" : `pan-${t.drag === "x" ? "y" : "x"}`), t.tabIndex === void 0 && (t.onTap || t.onTapStart || t.whileTap) && (n.tabIndex = 0), n.style = s, n;
}
const Xo = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view"
];
function bn(t) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof t != "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    t.includes("-") ? !1 : (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      !!(Xo.indexOf(t) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(t))
    )
  );
}
const qo = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, Zo = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function Jo(t, e, n = 1, s = 0, i = !0) {
  t.pathLength = 1;
  const o = i ? qo : Zo;
  t[o.offset] = A.transform(-s);
  const r = A.transform(e), a = A.transform(n);
  t[o.array] = `${r} ${a}`;
}
function cs(t, e, n) {
  return typeof t == "string" ? t : A.transform(e + n * t);
}
function Qo(t, e, n) {
  const s = cs(e, t.x, t.width), i = cs(n, t.y, t.height);
  return `${s} ${i}`;
}
function Pn(t, {
  attrX: e,
  attrY: n,
  attrScale: s,
  originX: i,
  originY: o,
  pathLength: r,
  pathSpacing: a = 1,
  pathOffset: l = 0,
  // This is object creation, which we try to avoid per-frame.
  ...u
}, c, f) {
  if (Tn(t, u, f), c) {
    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
    return;
  }
  t.attrs = t.style, t.style = {};
  const { attrs: d, style: m, dimensions: p } = t;
  d.transform && (p && (m.transform = d.transform), delete d.transform), p && (i !== void 0 || o !== void 0 || m.transform) && (m.transformOrigin = Qo(p, i !== void 0 ? i : 0.5, o !== void 0 ? o : 0.5)), e !== void 0 && (d.x = e), n !== void 0 && (d.y = n), s !== void 0 && (d.scale = s), r !== void 0 && Jo(d, r, a, l, !1);
}
const Ii = () => ({
  ...xn(),
  attrs: {}
}), Sn = (t) => typeof t == "string" && t.toLowerCase() === "svg";
function ta(t, e, n, s) {
  const i = Se(() => {
    const o = Ii();
    return Pn(o, e, Sn(s), t.transformTemplate), {
      ...o.attrs,
      style: { ...o.style }
    };
  }, [e]);
  if (t.style) {
    const o = {};
    Fi(o, t.style, t), i.style = { ...o, ...i.style };
  }
  return i;
}
function ea(t = !1) {
  return (n, s, i, { latestValues: o }, r) => {
    const l = (bn(n) ? ta : Ho)(s, o, r, n), u = So(s, typeof n == "string", t), c = n !== Si ? { ...u, ...l, ref: i } : {}, { children: f } = s, d = Se(() => $(f) ? f.get() : f, [f]);
    return oo(n, {
      ...c,
      children: d
    });
  };
}
function fs(t) {
  const e = [{}, {}];
  return t == null || t.values.forEach((n, s) => {
    e[0][s] = n.get(), e[1][s] = n.getVelocity();
  }), e;
}
function An(t, e, n, s) {
  if (typeof e == "function") {
    const [i, o] = fs(s);
    e = e(n !== void 0 ? n : t.custom, i, o);
  }
  if (typeof e == "string" && (e = t.variants && t.variants[e]), typeof e == "function") {
    const [i, o] = fs(s);
    e = e(n !== void 0 ? n : t.custom, i, o);
  }
  return e;
}
const Ge = (t) => Array.isArray(t), na = (t) => !!(t && typeof t == "object" && t.mix && t.toValue), sa = (t) => Ge(t) ? t[t.length - 1] || 0 : t;
function pe(t) {
  const e = $(t) ? t.get() : t;
  return na(e) ? e.toValue() : e;
}
function ia({ scrapeMotionValuesFromProps: t, createRenderState: e, onUpdate: n }, s, i, o) {
  const r = {
    latestValues: ra(s, i, o, t),
    renderState: e()
  };
  return n && (r.onMount = (a) => n({ props: s, current: a, ...r }), r.onUpdate = (a) => n(a)), r;
}
const Ni = (t) => (e, n) => {
  const s = G(we), i = G(un), o = () => ia(t, e, s, i);
  return n ? o() : mo(o);
};
function ra(t, e, n, s) {
  const i = {}, o = s(t, {});
  for (const d in o)
    i[d] = pe(o[d]);
  let { initial: r, animate: a } = t;
  const l = Ee(t), u = Ri(t);
  e && u && !l && t.inherit !== !1 && (r === void 0 && (r = e.initial), a === void 0 && (a = e.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || r === !1;
  const f = c ? a : r;
  if (f && typeof f != "boolean" && !Ve(f)) {
    const d = Array.isArray(f) ? f : [f];
    for (let m = 0; m < d.length; m++) {
      const p = An(t, d[m]);
      if (p) {
        const { transitionEnd: g, transition: v, ...y } = p;
        for (const b in y) {
          let P = y[b];
          if (Array.isArray(P)) {
            const C = c ? P.length - 1 : 0;
            P = P[C];
          }
          P !== null && (i[b] = P);
        }
        for (const b in g)
          i[b] = g[b];
      }
    }
  }
  return i;
}
function wn(t, e, n) {
  var s;
  const { style: i } = t, o = {};
  for (const r in i)
    ($(i[r]) || e.style && $(e.style[r]) || ji(r, t) || ((s = n == null ? void 0 : n.getValue(r)) === null || s === void 0 ? void 0 : s.liveStyle) !== void 0) && (o[r] = i[r]);
  return o;
}
const oa = {
  useVisualState: Ni({
    scrapeMotionValuesFromProps: wn,
    createRenderState: xn
  })
};
function _i(t, e) {
  try {
    e.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect();
  } catch {
    e.dimensions = {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    };
  }
}
function Ui(t, { style: e, vars: n }, s, i) {
  Object.assign(t.style, e, i && i.getProjectionStyles(s));
  for (const o in n)
    t.style.setProperty(o, n[o]);
}
const $i = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust"
]);
function Ki(t, e, n, s) {
  Ui(t, e, void 0, s);
  for (const i in e.attrs)
    t.setAttribute($i.has(i) ? i : mn(i), e.attrs[i]);
}
function Wi(t, e, n) {
  const s = wn(t, e, n);
  for (const i in t)
    if ($(t[i]) || $(e[i])) {
      const o = jt.indexOf(i) !== -1 ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i;
      s[o] = t[i];
    }
  return s;
}
const hs = ["x", "y", "width", "height", "cx", "cy", "r"], aa = {
  useVisualState: Ni({
    scrapeMotionValuesFromProps: Wi,
    createRenderState: Ii,
    onUpdate: ({ props: t, prevProps: e, current: n, renderState: s, latestValues: i }) => {
      if (!n)
        return;
      let o = !!t.drag;
      if (!o) {
        for (const a in i)
          if (xt.has(a)) {
            o = !0;
            break;
          }
      }
      if (!o)
        return;
      let r = !e;
      if (e)
        for (let a = 0; a < hs.length; a++) {
          const l = hs[a];
          t[l] !== e[l] && (r = !0);
        }
      r && R.read(() => {
        _i(n, s), R.render(() => {
          Pn(s, i, Sn(n.tagName), t.transformTemplate), Ki(n, s);
        });
      });
    }
  })
};
function la(t, e) {
  return function(s, { forwardMotionProps: i } = { forwardMotionProps: !1 }) {
    const r = {
      ...bn(s) ? aa : oa,
      preloadedFeatures: t,
      useRender: ea(i),
      createVisualElement: e,
      Component: s
    };
    return ko(r);
  };
}
function te(t, e, n) {
  const s = t.getProps();
  return An(s, e, n !== void 0 ? n : s.custom, t);
}
const ua = /* @__PURE__ */ fn(() => window.ScrollTimeline !== void 0);
class ca {
  constructor(e) {
    this.stop = () => this.runAll("stop"), this.animations = e.filter(Boolean);
  }
  get finished() {
    return Promise.all(this.animations.map((e) => "finished" in e ? e.finished : e));
  }
  /**
   * TODO: Filter out cancelled or stopped animations before returning
   */
  getAll(e) {
    return this.animations[0][e];
  }
  setAll(e, n) {
    for (let s = 0; s < this.animations.length; s++)
      this.animations[s][e] = n;
  }
  attachTimeline(e, n) {
    const s = this.animations.map((i) => {
      if (ua() && i.attachTimeline)
        return i.attachTimeline(e);
      if (typeof n == "function")
        return n(i);
    });
    return () => {
      s.forEach((i, o) => {
        i && i(), this.animations[o].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(e) {
    this.setAll("time", e);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(e) {
    this.setAll("speed", e);
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    let e = 0;
    for (let n = 0; n < this.animations.length; n++)
      e = Math.max(e, this.animations[n].duration);
    return e;
  }
  runAll(e) {
    this.animations.forEach((n) => n[e]());
  }
  flatten() {
    this.runAll("flatten");
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
class fa extends ca {
  then(e, n) {
    return Promise.all(this.animations).then(e).catch(n);
  }
}
function Vn(t, e) {
  return t ? t[e] || t.default || t : void 0;
}
const Ye = 2e4;
function Gi(t) {
  let e = 0;
  const n = 50;
  let s = t.next(e);
  for (; !s.done && e < Ye; )
    e += n, s = t.next(e);
  return e >= Ye ? 1 / 0 : e;
}
function En(t) {
  return typeof t == "function";
}
function ds(t, e) {
  t.timeline = e, t.onfinish = null;
}
const Cn = (t) => Array.isArray(t) && typeof t[0] == "number", ha = {
  linearEasing: void 0
};
function da(t, e) {
  const n = /* @__PURE__ */ fn(t);
  return () => {
    var s;
    return (s = ha[e]) !== null && s !== void 0 ? s : n();
  };
}
const Te = /* @__PURE__ */ da(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), Yi = (t, e, n = 10) => {
  let s = "";
  const i = Math.max(Math.round(e / n), 2);
  for (let o = 0; o < i; o++)
    s += t(/* @__PURE__ */ Dt(0, i - 1, o)) + ", ";
  return `linear(${s.substring(0, s.length - 2)})`;
};
function zi(t) {
  return !!(typeof t == "function" && Te() || !t || typeof t == "string" && (t in ze || Te()) || Cn(t) || Array.isArray(t) && t.every(zi));
}
const Kt = ([t, e, n, s]) => `cubic-bezier(${t}, ${e}, ${n}, ${s})`, ze = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ Kt([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ Kt([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ Kt([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ Kt([0.33, 1.53, 0.69, 0.99])
};
function Hi(t, e) {
  if (t)
    return typeof t == "function" && Te() ? Yi(t, e) : Cn(t) ? Kt(t) : Array.isArray(t) ? t.map((n) => Hi(n, e) || ze.easeOut) : ze[t];
}
const J = {
  x: !1,
  y: !1
};
function Xi() {
  return J.x || J.y;
}
function ma(t, e, n) {
  var s;
  if (t instanceof EventTarget)
    return [t];
  if (typeof t == "string") {
    let i = document;
    const o = (s = void 0) !== null && s !== void 0 ? s : i.querySelectorAll(t);
    return o ? Array.from(o) : [];
  }
  return Array.from(t);
}
function qi(t, e) {
  const n = ma(t), s = new AbortController(), i = {
    passive: !0,
    ...e,
    signal: s.signal
  };
  return [n, i, () => s.abort()];
}
function ms(t) {
  return !(t.pointerType === "touch" || Xi());
}
function pa(t, e, n = {}) {
  const [s, i, o] = qi(t, n), r = (a) => {
    if (!ms(a))
      return;
    const { target: l } = a, u = e(l, a);
    if (typeof u != "function" || !l)
      return;
    const c = (f) => {
      ms(f) && (u(f), l.removeEventListener("pointerleave", c));
    };
    l.addEventListener("pointerleave", c, i);
  };
  return s.forEach((a) => {
    a.addEventListener("pointerenter", r, i);
  }), o;
}
function Gt(t, e) {
  const n = `${e}PointerCapture`;
  if (t.target instanceof Element && n in t.target && t.pointerId !== void 0)
    try {
      t.target[n](t.pointerId);
    } catch {
    }
}
const Zi = (t, e) => e ? t === e ? !0 : Zi(t, e.parentElement) : !1, Mn = (t) => t.pointerType === "mouse" ? typeof t.button != "number" || t.button <= 0 : t.isPrimary !== !1, ga = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function ya(t) {
  return ga.has(t.tagName) || t.tabIndex !== -1;
}
const Wt = /* @__PURE__ */ new WeakSet();
function ps(t) {
  return (e) => {
    e.key === "Enter" && t(e);
  };
}
function Oe(t, e) {
  t.dispatchEvent(new PointerEvent("pointer" + e, { isPrimary: !0, bubbles: !0 }));
}
const va = (t, e) => {
  const n = t.currentTarget;
  if (!n)
    return;
  const s = ps(() => {
    if (Wt.has(n))
      return;
    Oe(n, "down");
    const i = ps(() => {
      Oe(n, "up");
    }), o = () => Oe(n, "cancel");
    n.addEventListener("keyup", i, e), n.addEventListener("blur", o, e);
  });
  n.addEventListener("keydown", s, e), n.addEventListener("blur", () => n.removeEventListener("keydown", s), e);
};
function gs(t) {
  return Mn(t) && !Xi();
}
function Ta(t, e, n = {}) {
  const [s, i, o] = qi(t, n), r = (a) => {
    const l = a.currentTarget;
    if (!l || !gs(a) || Wt.has(l))
      return;
    Wt.add(l), Gt(a, "set");
    const u = e(l, a), c = (m, p) => {
      l.removeEventListener("pointerup", f), l.removeEventListener("pointercancel", d), Gt(m, "release"), !(!gs(m) || !Wt.has(l)) && (Wt.delete(l), typeof u == "function" && u(m, { success: p }));
    }, f = (m) => {
      (m.isTrusted ? xa(m, l instanceof Element ? l.getBoundingClientRect() : {
        left: 0,
        top: 0,
        right: window.innerWidth,
        bottom: window.innerHeight
      }) : !1) ? c(m, !1) : c(m, !(l instanceof Element) || Zi(l, m.target));
    }, d = (m) => {
      c(m, !1);
    };
    l.addEventListener("pointerup", f, i), l.addEventListener("pointercancel", d, i), l.addEventListener("lostpointercapture", d, i);
  };
  return s.forEach((a) => {
    a = n.useGlobalTarget ? window : a;
    let l = !1;
    a instanceof HTMLElement && (l = !0, !ya(a) && a.getAttribute("tabindex") === null && (a.tabIndex = 0)), a.addEventListener("pointerdown", r, i), l && a.addEventListener("focus", (u) => va(u, i), i);
  }), o;
}
function xa(t, e) {
  return t.clientX < e.left || t.clientX > e.right || t.clientY < e.top || t.clientY > e.bottom;
}
function ba(t) {
  return t === "x" || t === "y" ? J[t] ? null : (J[t] = !0, () => {
    J[t] = !1;
  }) : J.x || J.y ? null : (J.x = J.y = !0, () => {
    J.x = J.y = !1;
  });
}
const Ji = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...jt
]);
let ge;
function Pa() {
  ge = void 0;
}
const nt = {
  now: () => (ge === void 0 && nt.set(N.isProcessing || yo.useManualTiming ? N.timestamp : performance.now()), ge),
  set: (t) => {
    ge = t, queueMicrotask(Pa);
  }
};
function Rn(t, e) {
  t.indexOf(e) === -1 && t.push(e);
}
function Dn(t, e) {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}
class kn {
  constructor() {
    this.subscriptions = [];
  }
  add(e) {
    return Rn(this.subscriptions, e), () => Dn(this.subscriptions, e);
  }
  notify(e, n, s) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1)
        this.subscriptions[0](e, n, s);
      else
        for (let o = 0; o < i; o++) {
          const r = this.subscriptions[o];
          r && r(e, n, s);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
function Qi(t, e) {
  return e ? t * (1e3 / e) : 0;
}
const ys = 30, Sa = (t) => !isNaN(parseFloat(t));
class Aa {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   *
   * @internal
   */
  constructor(e, n = {}) {
    this.version = "12.4.10", this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (s, i = !0) => {
      const o = nt.now();
      this.updatedAt !== o && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(s), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), i && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.hasAnimated = !1, this.setCurrent(e), this.owner = n.owner;
  }
  setCurrent(e) {
    this.current = e, this.updatedAt = nt.now(), this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = Sa(this.current));
  }
  setPrevFrameValue(e = this.current) {
    this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt;
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(e) {
    return process.env.NODE_ENV !== "production" && Ae(!1, 'value.onChange(callback) is deprecated. Switch to value.on("change", callback).'), this.on("change", e);
  }
  on(e, n) {
    this.events[e] || (this.events[e] = new kn());
    const s = this.events[e].add(n);
    return e === "change" ? () => {
      s(), R.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : s;
  }
  clearListeners() {
    for (const e in this.events)
      this.events[e].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   *
   * @internal
   */
  attach(e, n) {
    this.passiveEffect = e, this.stopPassiveEffect = n;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(e, n = !0) {
    !n || !this.passiveEffect ? this.updateAndNotify(e, n) : this.passiveEffect(e, this.updateAndNotify);
  }
  setWithVelocity(e, n, s) {
    this.set(n), this.prev = void 0, this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt - s;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(e, n = !0) {
    this.updateAndNotify(e), this.prev = e, this.prevUpdatedAt = this.prevFrameValue = void 0, n && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    return this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    const e = nt.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > ys)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, ys);
    return Qi(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   *
   * @internal
   */
  start(e) {
    return this.stop(), new Promise((n) => {
      this.hasAnimated = !0, this.animation = e(n), this.events.animationStart && this.events.animationStart.notify();
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
    });
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function ee(t, e) {
  return new Aa(t, e);
}
function wa(t, e, n) {
  t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, ee(n));
}
function Va(t, e) {
  const n = te(t, e);
  let { transitionEnd: s = {}, transition: i = {}, ...o } = n || {};
  o = { ...o, ...s };
  for (const r in o) {
    const a = sa(o[r]);
    wa(t, r, a);
  }
}
function Ea(t) {
  return !!($(t) && t.add);
}
function He(t, e) {
  const n = t.getValue("willChange");
  if (Ea(n))
    return n.add(e);
}
function tr(t) {
  return t.props[Di];
}
const er = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t, Ca = 1e-7, Ma = 12;
function Ra(t, e, n, s, i) {
  let o, r, a = 0;
  do
    r = e + (n - e) / 2, o = er(r, s, i) - t, o > 0 ? n = r : e = r;
  while (Math.abs(o) > Ca && ++a < Ma);
  return r;
}
function re(t, e, n, s) {
  if (t === e && n === s)
    return z;
  const i = (o) => Ra(o, 0, 1, t, n);
  return (o) => o === 0 || o === 1 ? o : er(i(o), e, s);
}
const nr = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2, sr = (t) => (e) => 1 - t(1 - e), ir = /* @__PURE__ */ re(0.33, 1.53, 0.69, 0.99), Ln = /* @__PURE__ */ sr(ir), rr = /* @__PURE__ */ nr(Ln), or = (t) => (t *= 2) < 1 ? 0.5 * Ln(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))), On = (t) => 1 - Math.sin(Math.acos(t)), ar = sr(On), lr = nr(On), ur = (t) => /^0[^.\s]+$/u.test(t);
function Da(t) {
  return typeof t == "number" ? t === 0 : t !== null ? t === "none" || t === "0" || ur(t) : !0;
}
const Yt = (t) => Math.round(t * 1e5) / 1e5, jn = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function ka(t) {
  return t == null;
}
const La = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, Bn = (t, e) => (n) => !!(typeof n == "string" && La.test(n) && n.startsWith(t) || e && !ka(n) && Object.prototype.hasOwnProperty.call(n, e)), cr = (t, e, n) => (s) => {
  if (typeof s != "string")
    return s;
  const [i, o, r, a] = s.match(jn);
  return {
    [t]: parseFloat(i),
    [e]: parseFloat(o),
    [n]: parseFloat(r),
    alpha: a !== void 0 ? parseFloat(a) : 1
  };
}, Oa = (t) => ot(0, 255, t), je = {
  ...Bt,
  transform: (t) => Math.round(Oa(t))
}, yt = {
  test: /* @__PURE__ */ Bn("rgb", "red"),
  parse: /* @__PURE__ */ cr("red", "green", "blue"),
  transform: ({ red: t, green: e, blue: n, alpha: s = 1 }) => "rgba(" + je.transform(t) + ", " + je.transform(e) + ", " + je.transform(n) + ", " + Yt(Qt.transform(s)) + ")"
};
function ja(t) {
  let e = "", n = "", s = "", i = "";
  return t.length > 5 ? (e = t.substring(1, 3), n = t.substring(3, 5), s = t.substring(5, 7), i = t.substring(7, 9)) : (e = t.substring(1, 2), n = t.substring(2, 3), s = t.substring(3, 4), i = t.substring(4, 5), e += e, n += n, s += s, i += i), {
    red: parseInt(e, 16),
    green: parseInt(n, 16),
    blue: parseInt(s, 16),
    alpha: i ? parseInt(i, 16) / 255 : 1
  };
}
const Xe = {
  test: /* @__PURE__ */ Bn("#"),
  parse: ja,
  transform: yt.transform
}, Vt = {
  test: /* @__PURE__ */ Bn("hsl", "hue"),
  parse: /* @__PURE__ */ cr("hue", "saturation", "lightness"),
  transform: ({ hue: t, saturation: e, lightness: n, alpha: s = 1 }) => "hsla(" + Math.round(t) + ", " + et.transform(Yt(e)) + ", " + et.transform(Yt(n)) + ", " + Yt(Qt.transform(s)) + ")"
}, U = {
  test: (t) => yt.test(t) || Xe.test(t) || Vt.test(t),
  parse: (t) => yt.test(t) ? yt.parse(t) : Vt.test(t) ? Vt.parse(t) : Xe.parse(t),
  transform: (t) => typeof t == "string" ? t : t.hasOwnProperty("red") ? yt.transform(t) : Vt.transform(t)
}, Ba = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function Fa(t) {
  var e, n;
  return isNaN(t) && typeof t == "string" && (((e = t.match(jn)) === null || e === void 0 ? void 0 : e.length) || 0) + (((n = t.match(Ba)) === null || n === void 0 ? void 0 : n.length) || 0) > 0;
}
const fr = "number", hr = "color", Ia = "var", Na = "var(", vs = "${}", _a = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function ne(t) {
  const e = t.toString(), n = [], s = {
    color: [],
    number: [],
    var: []
  }, i = [];
  let o = 0;
  const a = e.replace(_a, (l) => (U.test(l) ? (s.color.push(o), i.push(hr), n.push(U.parse(l))) : l.startsWith(Na) ? (s.var.push(o), i.push(Ia), n.push(l)) : (s.number.push(o), i.push(fr), n.push(parseFloat(l))), ++o, vs)).split(vs);
  return { values: n, split: a, indexes: s, types: i };
}
function dr(t) {
  return ne(t).values;
}
function mr(t) {
  const { split: e, types: n } = ne(t), s = e.length;
  return (i) => {
    let o = "";
    for (let r = 0; r < s; r++)
      if (o += e[r], i[r] !== void 0) {
        const a = n[r];
        a === fr ? o += Yt(i[r]) : a === hr ? o += U.transform(i[r]) : o += i[r];
      }
    return o;
  };
}
const Ua = (t) => typeof t == "number" ? 0 : t;
function $a(t) {
  const e = dr(t);
  return mr(t)(e.map(Ua));
}
const ft = {
  test: Fa,
  parse: dr,
  createTransformer: mr,
  getAnimatableNone: $a
}, Ka = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function Wa(t) {
  const [e, n] = t.slice(0, -1).split("(");
  if (e === "drop-shadow")
    return t;
  const [s] = n.match(jn) || [];
  if (!s)
    return t;
  const i = n.replace(s, "");
  let o = Ka.has(e) ? 1 : 0;
  return s !== n && (o *= 100), e + "(" + o + i + ")";
}
const Ga = /\b([a-z-]*)\(.*?\)/gu, qe = {
  ...ft,
  getAnimatableNone: (t) => {
    const e = t.match(Ga);
    return e ? e.map(Wa).join(" ") : t;
  }
}, Ya = {
  ...vn,
  // Color props
  color: U,
  backgroundColor: U,
  outlineColor: U,
  fill: U,
  stroke: U,
  // Border props
  borderColor: U,
  borderTopColor: U,
  borderRightColor: U,
  borderBottomColor: U,
  borderLeftColor: U,
  filter: qe,
  WebkitFilter: qe
}, Fn = (t) => Ya[t];
function pr(t, e) {
  let n = Fn(t);
  return n !== qe && (n = ft), n.getAnimatableNone ? n.getAnimatableNone(e) : void 0;
}
const za = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function Ha(t, e, n) {
  let s = 0, i;
  for (; s < t.length && !i; ) {
    const o = t[s];
    typeof o == "string" && !za.has(o) && ne(o).values.length && (i = t[s]), s++;
  }
  if (i && n)
    for (const o of e)
      t[o] = pr(n, i);
}
const Ts = (t) => t === Bt || t === A, xs = (t, e) => parseFloat(t.split(", ")[e]), bs = (t, e) => (n, { transform: s }) => {
  if (s === "none" || !s)
    return 0;
  const i = s.match(/^matrix3d\((.+)\)$/u);
  if (i)
    return xs(i[1], e);
  {
    const o = s.match(/^matrix\((.+)\)$/u);
    return o ? xs(o[1], t) : 0;
  }
}, Xa = /* @__PURE__ */ new Set(["x", "y", "z"]), qa = jt.filter((t) => !Xa.has(t));
function Za(t) {
  const e = [];
  return qa.forEach((n) => {
    const s = t.getValue(n);
    s !== void 0 && (e.push([n, s.get()]), s.set(n.startsWith("scale") ? 1 : 0));
  }), e;
}
const Lt = {
  // Dimensions
  width: ({ x: t }, { paddingLeft: e = "0", paddingRight: n = "0" }) => t.max - t.min - parseFloat(e) - parseFloat(n),
  height: ({ y: t }, { paddingTop: e = "0", paddingBottom: n = "0" }) => t.max - t.min - parseFloat(e) - parseFloat(n),
  top: (t, { top: e }) => parseFloat(e),
  left: (t, { left: e }) => parseFloat(e),
  bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
  right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
  // Transform
  x: bs(4, 13),
  y: bs(5, 14)
};
Lt.translateX = Lt.x;
Lt.translateY = Lt.y;
const vt = /* @__PURE__ */ new Set();
let Ze = !1, Je = !1;
function gr() {
  if (Je) {
    const t = Array.from(vt).filter((s) => s.needsMeasurement), e = new Set(t.map((s) => s.element)), n = /* @__PURE__ */ new Map();
    e.forEach((s) => {
      const i = Za(s);
      i.length && (n.set(s, i), s.render());
    }), t.forEach((s) => s.measureInitialState()), e.forEach((s) => {
      s.render();
      const i = n.get(s);
      i && i.forEach(([o, r]) => {
        var a;
        (a = s.getValue(o)) === null || a === void 0 || a.set(r);
      });
    }), t.forEach((s) => s.measureEndState()), t.forEach((s) => {
      s.suspendedScrollY !== void 0 && window.scrollTo(0, s.suspendedScrollY);
    });
  }
  Je = !1, Ze = !1, vt.forEach((t) => t.complete()), vt.clear();
}
function yr() {
  vt.forEach((t) => {
    t.readKeyframes(), t.needsMeasurement && (Je = !0);
  });
}
function Ja() {
  yr(), gr();
}
class In {
  constructor(e, n, s, i, o, r = !1) {
    this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...e], this.onComplete = n, this.name = s, this.motionValue = i, this.element = o, this.isAsync = r;
  }
  scheduleResolve() {
    this.isScheduled = !0, this.isAsync ? (vt.add(this), Ze || (Ze = !0, R.read(yr), R.resolveKeyframes(gr))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: e, name: n, element: s, motionValue: i } = this;
    for (let o = 0; o < e.length; o++)
      if (e[o] === null)
        if (o === 0) {
          const r = i == null ? void 0 : i.get(), a = e[e.length - 1];
          if (r !== void 0)
            e[0] = r;
          else if (s && n) {
            const l = s.readValue(n, a);
            l != null && (e[0] = l);
          }
          e[0] === void 0 && (e[0] = a), i && r === void 0 && i.set(e[0]);
        } else
          e[o] = e[o - 1];
  }
  setFinalKeyframe() {
  }
  measureInitialState() {
  }
  renderEndStyles() {
  }
  measureEndState() {
  }
  complete() {
    this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), vt.delete(this);
  }
  cancel() {
    this.isComplete || (this.isScheduled = !1, vt.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const vr = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t), Qa = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function tl(t) {
  const e = Qa.exec(t);
  if (!e)
    return [,];
  const [, n, s, i] = e;
  return [`--${n ?? s}`, i];
}
const el = 4;
function Tr(t, e, n = 1) {
  ut(n <= el, `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`);
  const [s, i] = tl(t);
  if (!s)
    return;
  const o = window.getComputedStyle(e).getPropertyValue(s);
  if (o) {
    const r = o.trim();
    return vr(r) ? parseFloat(r) : r;
  }
  return yn(i) ? Tr(i, e, n + 1) : i;
}
const xr = (t) => (e) => e.test(t), nl = {
  test: (t) => t === "auto",
  parse: (t) => t
}, br = [Bt, A, et, lt, _o, No, nl], Ps = (t) => br.find(xr(t));
class Pr extends In {
  constructor(e, n, s, i, o) {
    super(e, n, s, i, o, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: e, element: n, name: s } = this;
    if (!n || !n.current)
      return;
    super.readKeyframes();
    for (let l = 0; l < e.length; l++) {
      let u = e[l];
      if (typeof u == "string" && (u = u.trim(), yn(u))) {
        const c = Tr(u, n.current);
        c !== void 0 && (e[l] = c), l === e.length - 1 && (this.finalKeyframe = u);
      }
    }
    if (this.resolveNoneKeyframes(), !Ji.has(s) || e.length !== 2)
      return;
    const [i, o] = e, r = Ps(i), a = Ps(o);
    if (r !== a)
      if (Ts(r) && Ts(a))
        for (let l = 0; l < e.length; l++) {
          const u = e[l];
          typeof u == "string" && (e[l] = parseFloat(u));
        }
      else
        this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: e, name: n } = this, s = [];
    for (let i = 0; i < e.length; i++)
      Da(e[i]) && s.push(i);
    s.length && Ha(e, s, n);
  }
  measureInitialState() {
    const { element: e, unresolvedKeyframes: n, name: s } = this;
    if (!e || !e.current)
      return;
    s === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = Lt[s](e.measureViewportBox(), window.getComputedStyle(e.current)), n[0] = this.measuredOrigin;
    const i = n[n.length - 1];
    i !== void 0 && e.getValue(s, i).jump(i, !1);
  }
  measureEndState() {
    var e;
    const { element: n, name: s, unresolvedKeyframes: i } = this;
    if (!n || !n.current)
      return;
    const o = n.getValue(s);
    o && o.jump(this.measuredOrigin, !1);
    const r = i.length - 1, a = i[r];
    i[r] = Lt[s](n.measureViewportBox(), window.getComputedStyle(n.current)), a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a), !((e = this.removedTransforms) === null || e === void 0) && e.length && this.removedTransforms.forEach(([l, u]) => {
      n.getValue(l).set(u);
    }), this.resolveNoneKeyframes();
  }
}
const Ss = (t, e) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && // It's animatable if we have a string
(ft.test(t) || t === "0") && // And it contains numbers and/or colors
!t.startsWith("url("));
function sl(t) {
  const e = t[0];
  if (t.length === 1)
    return !0;
  for (let n = 0; n < t.length; n++)
    if (t[n] !== e)
      return !0;
}
function il(t, e, n, s) {
  const i = t[0];
  if (i === null)
    return !1;
  if (e === "display" || e === "visibility")
    return !0;
  const o = t[t.length - 1], r = Ss(i, e), a = Ss(o, e);
  return Ot(r === a, `You are trying to animate ${e} from "${i}" to "${o}". ${i} is not an animatable value - to enable this animation set ${i} to a value animatable to ${o} via the \`style\` property.`), !r || !a ? !1 : sl(t) || (n === "spring" || En(n)) && s;
}
const rl = (t) => t !== null;
function Ce(t, { repeat: e, repeatType: n = "loop" }, s) {
  const i = t.filter(rl), o = e && n !== "loop" && e % 2 === 1 ? 0 : i.length - 1;
  return !o || s === void 0 ? i[o] : s;
}
const ol = 40;
class Sr {
  constructor({ autoplay: e = !0, delay: n = 0, type: s = "keyframes", repeat: i = 0, repeatDelay: o = 0, repeatType: r = "loop", ...a }) {
    this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = nt.now(), this.options = {
      autoplay: e,
      delay: n,
      type: s,
      repeat: i,
      repeatDelay: o,
      repeatType: r,
      ...a
    }, this.updateFinishedPromise();
  }
  /**
   * This method uses the createdAt and resolvedAt to calculate the
   * animation startTime. *Ideally*, we would use the createdAt time as t=0
   * as the following frame would then be the first frame of the animation in
   * progress, which would feel snappier.
   *
   * However, if there's a delay (main thread work) between the creation of
   * the animation and the first commited frame, we prefer to use resolvedAt
   * to avoid a sudden jump into the animation.
   */
  calcStartTime() {
    return this.resolvedAt ? this.resolvedAt - this.createdAt > ol ? this.resolvedAt : this.createdAt : this.createdAt;
  }
  /**
   * A getter for resolved data. If keyframes are not yet resolved, accessing
   * this.resolved will synchronously flush all pending keyframe resolvers.
   * This is a deoptimisation, but at its worst still batches read/writes.
   */
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && Ja(), this._resolved;
  }
  /**
   * A method to be called when the keyframes resolver completes. This method
   * will check if its possible to run the animation and, if not, skip it.
   * Otherwise, it will call initPlayback on the implementing class.
   */
  onKeyframesResolved(e, n) {
    this.resolvedAt = nt.now(), this.hasAttemptedResolve = !0;
    const { name: s, type: i, velocity: o, delay: r, onComplete: a, onUpdate: l, isGenerator: u } = this.options;
    if (!u && !il(e, s, i, o))
      if (r)
        this.options.duration = 0;
      else {
        l && l(Ce(e, this.options, n)), a && a(), this.resolveFinishedPromise();
        return;
      }
    const c = this.initPlayback(e, n);
    c !== !1 && (this._resolved = {
      keyframes: e,
      finalKeyframe: n,
      ...c
    }, this.onPostResolved());
  }
  onPostResolved() {
  }
  /**
   * Allows the returned animation to be awaited or promise-chained. Currently
   * resolves when the animation finishes at all but in a future update could/should
   * reject if its cancels.
   */
  then(e, n) {
    return this.currentFinishedPromise.then(e, n);
  }
  flatten() {
    this.options.type = "keyframes", this.options.ease = "linear";
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((e) => {
      this.resolveFinishedPromise = e;
    });
  }
}
const O = (t, e, n) => t + (e - t) * n;
function Be(t, e, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + (e - t) * 6 * n : n < 1 / 2 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t;
}
function al({ hue: t, saturation: e, lightness: n, alpha: s }) {
  t /= 360, e /= 100, n /= 100;
  let i = 0, o = 0, r = 0;
  if (!e)
    i = o = r = n;
  else {
    const a = n < 0.5 ? n * (1 + e) : n + e - n * e, l = 2 * n - a;
    i = Be(l, a, t + 1 / 3), o = Be(l, a, t), r = Be(l, a, t - 1 / 3);
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(o * 255),
    blue: Math.round(r * 255),
    alpha: s
  };
}
function xe(t, e) {
  return (n) => n > 0 ? e : t;
}
const Fe = (t, e, n) => {
  const s = t * t, i = n * (e * e - s) + s;
  return i < 0 ? 0 : Math.sqrt(i);
}, ll = [Xe, yt, Vt], ul = (t) => ll.find((e) => e.test(t));
function As(t) {
  const e = ul(t);
  if (Ot(!!e, `'${t}' is not an animatable color. Use the equivalent color code instead.`), !e)
    return !1;
  let n = e.parse(t);
  return e === Vt && (n = al(n)), n;
}
const ws = (t, e) => {
  const n = As(t), s = As(e);
  if (!n || !s)
    return xe(t, e);
  const i = { ...n };
  return (o) => (i.red = Fe(n.red, s.red, o), i.green = Fe(n.green, s.green, o), i.blue = Fe(n.blue, s.blue, o), i.alpha = O(n.alpha, s.alpha, o), yt.transform(i));
}, cl = (t, e) => (n) => e(t(n)), oe = (...t) => t.reduce(cl), Qe = /* @__PURE__ */ new Set(["none", "hidden"]);
function fl(t, e) {
  return Qe.has(t) ? (n) => n <= 0 ? t : e : (n) => n >= 1 ? e : t;
}
function hl(t, e) {
  return (n) => O(t, e, n);
}
function Nn(t) {
  return typeof t == "number" ? hl : typeof t == "string" ? yn(t) ? xe : U.test(t) ? ws : pl : Array.isArray(t) ? Ar : typeof t == "object" ? U.test(t) ? ws : dl : xe;
}
function Ar(t, e) {
  const n = [...t], s = n.length, i = t.map((o, r) => Nn(o)(o, e[r]));
  return (o) => {
    for (let r = 0; r < s; r++)
      n[r] = i[r](o);
    return n;
  };
}
function dl(t, e) {
  const n = { ...t, ...e }, s = {};
  for (const i in n)
    t[i] !== void 0 && e[i] !== void 0 && (s[i] = Nn(t[i])(t[i], e[i]));
  return (i) => {
    for (const o in s)
      n[o] = s[o](i);
    return n;
  };
}
function ml(t, e) {
  var n;
  const s = [], i = { color: 0, var: 0, number: 0 };
  for (let o = 0; o < e.values.length; o++) {
    const r = e.types[o], a = t.indexes[r][i[r]], l = (n = t.values[a]) !== null && n !== void 0 ? n : 0;
    s[o] = l, i[r]++;
  }
  return s;
}
const pl = (t, e) => {
  const n = ft.createTransformer(e), s = ne(t), i = ne(e);
  return s.indexes.var.length === i.indexes.var.length && s.indexes.color.length === i.indexes.color.length && s.indexes.number.length >= i.indexes.number.length ? Qe.has(t) && !i.values.length || Qe.has(e) && !s.values.length ? fl(t, e) : oe(Ar(ml(s, i), i.values), n) : (Ot(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), xe(t, e));
};
function wr(t, e, n) {
  return typeof t == "number" && typeof e == "number" && typeof n == "number" ? O(t, e, n) : Nn(t)(t, e);
}
const gl = 5;
function Vr(t, e, n) {
  const s = Math.max(e - gl, 0);
  return Qi(n - t(s), e - s);
}
const L = {
  // Default spring physics
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  // Default duration/bounce-based options
  duration: 800,
  // in ms
  bounce: 0.3,
  visualDuration: 0.3,
  // in seconds
  // Rest thresholds
  restSpeed: {
    granular: 0.01,
    default: 2
  },
  restDelta: {
    granular: 5e-3,
    default: 0.5
  },
  // Limits
  minDuration: 0.01,
  // in seconds
  maxDuration: 10,
  // in seconds
  minDamping: 0.05,
  maxDamping: 1
}, Vs = 1e-3;
function yl({ duration: t = L.duration, bounce: e = L.bounce, velocity: n = L.velocity, mass: s = L.mass }) {
  let i, o;
  Ot(t <= /* @__PURE__ */ tt(L.maxDuration), "Spring duration must be 10 seconds or less");
  let r = 1 - e;
  r = ot(L.minDamping, L.maxDamping, r), t = ot(L.minDuration, L.maxDuration, /* @__PURE__ */ rt(t)), r < 1 ? (i = (u) => {
    const c = u * r, f = c * t, d = c - n, m = tn(u, r), p = Math.exp(-f);
    return Vs - d / m * p;
  }, o = (u) => {
    const f = u * r * t, d = f * n + n, m = Math.pow(r, 2) * Math.pow(u, 2) * t, p = Math.exp(-f), g = tn(Math.pow(u, 2), r);
    return (-i(u) + Vs > 0 ? -1 : 1) * ((d - m) * p) / g;
  }) : (i = (u) => {
    const c = Math.exp(-u * t), f = (u - n) * t + 1;
    return -1e-3 + c * f;
  }, o = (u) => {
    const c = Math.exp(-u * t), f = (n - u) * (t * t);
    return c * f;
  });
  const a = 5 / t, l = Tl(i, o, a);
  if (t = /* @__PURE__ */ tt(t), isNaN(l))
    return {
      stiffness: L.stiffness,
      damping: L.damping,
      duration: t
    };
  {
    const u = Math.pow(l, 2) * s;
    return {
      stiffness: u,
      damping: r * 2 * Math.sqrt(s * u),
      duration: t
    };
  }
}
const vl = 12;
function Tl(t, e, n) {
  let s = n;
  for (let i = 1; i < vl; i++)
    s = s - t(s) / e(s);
  return s;
}
function tn(t, e) {
  return t * Math.sqrt(1 - e * e);
}
const xl = ["duration", "bounce"], bl = ["stiffness", "damping", "mass"];
function Es(t, e) {
  return e.some((n) => t[n] !== void 0);
}
function Pl(t) {
  let e = {
    velocity: L.velocity,
    stiffness: L.stiffness,
    damping: L.damping,
    mass: L.mass,
    isResolvedFromDuration: !1,
    ...t
  };
  if (!Es(t, bl) && Es(t, xl))
    if (t.visualDuration) {
      const n = t.visualDuration, s = 2 * Math.PI / (n * 1.2), i = s * s, o = 2 * ot(0.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(i);
      e = {
        ...e,
        mass: L.mass,
        stiffness: i,
        damping: o
      };
    } else {
      const n = yl(t);
      e = {
        ...e,
        ...n,
        mass: L.mass
      }, e.isResolvedFromDuration = !0;
    }
  return e;
}
function Er(t = L.visualDuration, e = L.bounce) {
  const n = typeof t != "object" ? {
    visualDuration: t,
    keyframes: [0, 1],
    bounce: e
  } : t;
  let { restSpeed: s, restDelta: i } = n;
  const o = n.keyframes[0], r = n.keyframes[n.keyframes.length - 1], a = { done: !1, value: o }, { stiffness: l, damping: u, mass: c, duration: f, velocity: d, isResolvedFromDuration: m } = Pl({
    ...n,
    velocity: -/* @__PURE__ */ rt(n.velocity || 0)
  }), p = d || 0, g = u / (2 * Math.sqrt(l * c)), v = r - o, y = /* @__PURE__ */ rt(Math.sqrt(l / c)), b = Math.abs(v) < 5;
  s || (s = b ? L.restSpeed.granular : L.restSpeed.default), i || (i = b ? L.restDelta.granular : L.restDelta.default);
  let P;
  if (g < 1) {
    const S = tn(y, g);
    P = (M) => {
      const B = Math.exp(-g * y * M);
      return r - B * ((p + g * y * v) / S * Math.sin(S * M) + v * Math.cos(S * M));
    };
  } else if (g === 1)
    P = (S) => r - Math.exp(-y * S) * (v + (p + y * v) * S);
  else {
    const S = y * Math.sqrt(g * g - 1);
    P = (M) => {
      const B = Math.exp(-g * y * M), w = Math.min(S * M, 300);
      return r - B * ((p + g * y * v) * Math.sinh(w) + S * v * Math.cosh(w)) / S;
    };
  }
  const C = {
    calculatedDuration: m && f || null,
    next: (S) => {
      const M = P(S);
      if (m)
        a.done = S >= f;
      else {
        let B = 0;
        g < 1 && (B = S === 0 ? /* @__PURE__ */ tt(p) : Vr(P, S, M));
        const w = Math.abs(B) <= s, I = Math.abs(r - M) <= i;
        a.done = w && I;
      }
      return a.value = a.done ? r : M, a;
    },
    toString: () => {
      const S = Math.min(Gi(C), Ye), M = Yi((B) => C.next(S * B).value, S, 30);
      return S + "ms " + M;
    }
  };
  return C;
}
function Cs({ keyframes: t, velocity: e = 0, power: n = 0.8, timeConstant: s = 325, bounceDamping: i = 10, bounceStiffness: o = 500, modifyTarget: r, min: a, max: l, restDelta: u = 0.5, restSpeed: c }) {
  const f = t[0], d = {
    done: !1,
    value: f
  }, m = (w) => a !== void 0 && w < a || l !== void 0 && w > l, p = (w) => a === void 0 ? l : l === void 0 || Math.abs(a - w) < Math.abs(l - w) ? a : l;
  let g = n * e;
  const v = f + g, y = r === void 0 ? v : r(v);
  y !== v && (g = y - f);
  const b = (w) => -g * Math.exp(-w / s), P = (w) => y + b(w), C = (w) => {
    const I = b(w), K = P(w);
    d.done = Math.abs(I) <= u, d.value = d.done ? y : K;
  };
  let S, M;
  const B = (w) => {
    m(d.value) && (S = w, M = Er({
      keyframes: [d.value, p(d.value)],
      velocity: Vr(P, w, d.value),
      // TODO: This should be passing * 1000
      damping: i,
      stiffness: o,
      restDelta: u,
      restSpeed: c
    }));
  };
  return B(0), {
    calculatedDuration: null,
    next: (w) => {
      let I = !1;
      return !M && S === void 0 && (I = !0, C(w), B(w)), S !== void 0 && w >= S ? M.next(w - S) : (!I && C(w), d);
    }
  };
}
const Sl = /* @__PURE__ */ re(0.42, 0, 1, 1), Al = /* @__PURE__ */ re(0, 0, 0.58, 1), Cr = /* @__PURE__ */ re(0.42, 0, 0.58, 1), wl = (t) => Array.isArray(t) && typeof t[0] != "number", Ms = {
  linear: z,
  easeIn: Sl,
  easeInOut: Cr,
  easeOut: Al,
  circIn: On,
  circInOut: lr,
  circOut: ar,
  backIn: Ln,
  backInOut: rr,
  backOut: ir,
  anticipate: or
}, Rs = (t) => {
  if (Cn(t)) {
    ut(t.length === 4, "Cubic bezier arrays must contain four numerical values.");
    const [e, n, s, i] = t;
    return re(e, n, s, i);
  } else if (typeof t == "string")
    return ut(Ms[t] !== void 0, `Invalid easing type '${t}'`), Ms[t];
  return t;
};
function Vl(t, e, n) {
  const s = [], i = n || wr, o = t.length - 1;
  for (let r = 0; r < o; r++) {
    let a = i(t[r], t[r + 1]);
    if (e) {
      const l = Array.isArray(e) ? e[r] || z : e;
      a = oe(l, a);
    }
    s.push(a);
  }
  return s;
}
function El(t, e, { clamp: n = !0, ease: s, mixer: i } = {}) {
  const o = t.length;
  if (ut(o === e.length, "Both input and output ranges must be the same length"), o === 1)
    return () => e[0];
  if (o === 2 && e[0] === e[1])
    return () => e[1];
  const r = t[0] === t[1];
  t[0] > t[o - 1] && (t = [...t].reverse(), e = [...e].reverse());
  const a = Vl(e, s, i), l = a.length, u = (c) => {
    if (r && c < t[0])
      return e[0];
    let f = 0;
    if (l > 1)
      for (; f < t.length - 2 && !(c < t[f + 1]); f++)
        ;
    const d = /* @__PURE__ */ Dt(t[f], t[f + 1], c);
    return a[f](d);
  };
  return n ? (c) => u(ot(t[0], t[o - 1], c)) : u;
}
function Cl(t, e) {
  const n = t[t.length - 1];
  for (let s = 1; s <= e; s++) {
    const i = /* @__PURE__ */ Dt(0, e, s);
    t.push(O(n, 1, i));
  }
}
function Ml(t) {
  const e = [0];
  return Cl(e, t.length - 1), e;
}
function Rl(t, e) {
  return t.map((n) => n * e);
}
function Dl(t, e) {
  return t.map(() => e || Cr).splice(0, t.length - 1);
}
function zt({ duration: t = 300, keyframes: e, times: n, ease: s = "easeInOut" }) {
  const i = wl(s) ? s.map(Rs) : Rs(s), o = {
    done: !1,
    value: e[0]
  }, r = Rl(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === e.length ? n : Ml(e),
    t
  ), a = El(r, e, {
    ease: Array.isArray(i) ? i : Dl(e, i)
  });
  return {
    calculatedDuration: t,
    next: (l) => (o.value = a(l), o.done = l >= t, o)
  };
}
const kl = (t) => {
  const e = ({ timestamp: n }) => t(n);
  return {
    start: () => R.update(e, !0),
    stop: () => ct(e),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => N.isProcessing ? N.timestamp : nt.now()
  };
}, Ll = {
  decay: Cs,
  inertia: Cs,
  tween: zt,
  keyframes: zt,
  spring: Er
}, Ol = (t) => t / 100;
class _n extends Sr {
  constructor(e) {
    super(e), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
      if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle")
        return;
      this.teardown();
      const { onStop: l } = this.options;
      l && l();
    };
    const { name: n, motionValue: s, element: i, keyframes: o } = this.options, r = (i == null ? void 0 : i.KeyframeResolver) || In, a = (l, u) => this.onKeyframesResolved(l, u);
    this.resolver = new r(o, a, n, s, i), this.resolver.scheduleResolve();
  }
  flatten() {
    super.flatten(), this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes));
  }
  initPlayback(e) {
    const { type: n = "keyframes", repeat: s = 0, repeatDelay: i = 0, repeatType: o, velocity: r = 0 } = this.options, a = En(n) ? n : Ll[n] || zt;
    let l, u;
    process.env.NODE_ENV !== "production" && a !== zt && ut(e.length <= 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${e}`), a !== zt && typeof e[0] != "number" && (l = oe(Ol, wr(e[0], e[1])), e = [0, 100]);
    const c = a({ ...this.options, keyframes: e });
    o === "mirror" && (u = a({
      ...this.options,
      keyframes: [...e].reverse(),
      velocity: -r
    })), c.calculatedDuration === null && (c.calculatedDuration = Gi(c));
    const { calculatedDuration: f } = c, d = f + i, m = d * (s + 1) - i;
    return {
      generator: c,
      mirroredGenerator: u,
      mapPercentToKeyframes: l,
      calculatedDuration: f,
      resolvedDuration: d,
      totalDuration: m
    };
  }
  onPostResolved() {
    const { autoplay: e = !0 } = this.options;
    this.play(), this.pendingPlayState === "paused" || !e ? this.pause() : this.state = this.pendingPlayState;
  }
  tick(e, n = !1) {
    const { resolved: s } = this;
    if (!s) {
      const { keyframes: w } = this.options;
      return { done: !0, value: w[w.length - 1] };
    }
    const { finalKeyframe: i, generator: o, mirroredGenerator: r, mapPercentToKeyframes: a, keyframes: l, calculatedDuration: u, totalDuration: c, resolvedDuration: f } = s;
    if (this.startTime === null)
      return o.next(0);
    const { delay: d, repeat: m, repeatType: p, repeatDelay: g, onUpdate: v } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - c / this.speed, this.startTime)), n ? this.currentTime = e : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(e - this.startTime) * this.speed;
    const y = this.currentTime - d * (this.speed >= 0 ? 1 : -1), b = this.speed >= 0 ? y < 0 : y > c;
    this.currentTime = Math.max(y, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = c);
    let P = this.currentTime, C = o;
    if (m) {
      const w = Math.min(this.currentTime, c) / f;
      let I = Math.floor(w), K = w % 1;
      !K && w >= 1 && (K = 1), K === 1 && I--, I = Math.min(I, m + 1), !!(I % 2) && (p === "reverse" ? (K = 1 - K, g && (K -= g / f)) : p === "mirror" && (C = r)), P = ot(0, 1, K) * f;
    }
    const S = b ? { done: !1, value: l[0] } : C.next(P);
    a && (S.value = a(S.value));
    let { done: M } = S;
    !b && u !== null && (M = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
    const B = this.holdTime === null && (this.state === "finished" || this.state === "running" && M);
    return B && i !== void 0 && (S.value = Ce(l, this.options, i)), v && v(S.value), B && this.finish(), S;
  }
  get duration() {
    const { resolved: e } = this;
    return e ? /* @__PURE__ */ rt(e.calculatedDuration) : 0;
  }
  get time() {
    return /* @__PURE__ */ rt(this.currentTime);
  }
  set time(e) {
    e = /* @__PURE__ */ tt(e), this.currentTime = e, this.holdTime !== null || this.speed === 0 ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(e) {
    const n = this.playbackSpeed !== e;
    this.playbackSpeed = e, n && (this.time = /* @__PURE__ */ rt(this.currentTime));
  }
  play() {
    if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped)
      return;
    const { driver: e = kl, onPlay: n, startTime: s } = this.options;
    this.driver || (this.driver = e((o) => this.tick(o))), n && n();
    const i = this.driver.now();
    this.holdTime !== null ? this.startTime = i - this.holdTime : this.startTime ? this.state === "finished" && (this.startTime = i) : this.startTime = s ?? this.calcStartTime(), this.state === "finished" && this.updateFinishedPromise(), this.cancelTime = this.startTime, this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    var e;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    this.state = "paused", this.holdTime = (e = this.currentTime) !== null && e !== void 0 ? e : 0;
  }
  complete() {
    this.state !== "running" && this.play(), this.pendingPlayState = this.state = "finished", this.holdTime = null;
  }
  finish() {
    this.teardown(), this.state = "finished";
    const { onComplete: e } = this.options;
    e && e();
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime), this.teardown(), this.updateFinishedPromise();
  }
  teardown() {
    this.state = "idle", this.stopDriver(), this.resolveFinishedPromise(), this.updateFinishedPromise(), this.startTime = this.cancelTime = null, this.resolver.cancel();
  }
  stopDriver() {
    this.driver && (this.driver.stop(), this.driver = void 0);
  }
  sample(e) {
    return this.startTime = 0, this.tick(e, !0);
  }
}
const jl = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Can be accelerated but currently disabled until https://issues.chromium.org/issues/41491098 is resolved
  // or until we implement support for linear() easing.
  // "background-color"
]);
function Bl(t, e, n, { delay: s = 0, duration: i = 300, repeat: o = 0, repeatType: r = "loop", ease: a = "easeInOut", times: l } = {}) {
  const u = { [e]: n };
  l && (u.offset = l);
  const c = Hi(a, i);
  return Array.isArray(c) && (u.easing = c), t.animate(u, {
    delay: s,
    duration: i,
    easing: Array.isArray(c) ? "linear" : c,
    fill: "both",
    iterations: o + 1,
    direction: r === "reverse" ? "alternate" : "normal"
  });
}
const Fl = /* @__PURE__ */ fn(() => Object.hasOwnProperty.call(Element.prototype, "animate")), be = 10, Il = 2e4;
function Nl(t) {
  return En(t.type) || t.type === "spring" || !zi(t.ease);
}
function _l(t, e) {
  const n = new _n({
    ...e,
    keyframes: t,
    repeat: 0,
    delay: 0,
    isGenerator: !0
  });
  let s = { done: !1, value: t[0] };
  const i = [];
  let o = 0;
  for (; !s.done && o < Il; )
    s = n.sample(o), i.push(s.value), o += be;
  return {
    times: void 0,
    keyframes: i,
    duration: o - be,
    ease: "linear"
  };
}
const Mr = {
  anticipate: or,
  backInOut: rr,
  circInOut: lr
};
function Ul(t) {
  return t in Mr;
}
class Ds extends Sr {
  constructor(e) {
    super(e);
    const { name: n, motionValue: s, element: i, keyframes: o } = this.options;
    this.resolver = new Pr(o, (r, a) => this.onKeyframesResolved(r, a), n, s, i), this.resolver.scheduleResolve();
  }
  initPlayback(e, n) {
    let { duration: s = 300, times: i, ease: o, type: r, motionValue: a, name: l, startTime: u } = this.options;
    if (!a.owner || !a.owner.current)
      return !1;
    if (typeof o == "string" && Te() && Ul(o) && (o = Mr[o]), Nl(this.options)) {
      const { onComplete: f, onUpdate: d, motionValue: m, element: p, ...g } = this.options, v = _l(e, g);
      e = v.keyframes, e.length === 1 && (e[1] = e[0]), s = v.duration, i = v.times, o = v.ease, r = "keyframes";
    }
    const c = Bl(a.owner.current, l, e, { ...this.options, duration: s, times: i, ease: o });
    return c.startTime = u ?? this.calcStartTime(), this.pendingTimeline ? (ds(c, this.pendingTimeline), this.pendingTimeline = void 0) : c.onfinish = () => {
      const { onComplete: f } = this.options;
      a.set(Ce(e, this.options, n)), f && f(), this.cancel(), this.resolveFinishedPromise();
    }, {
      animation: c,
      duration: s,
      times: i,
      type: r,
      ease: o,
      keyframes: e
    };
  }
  get duration() {
    const { resolved: e } = this;
    if (!e)
      return 0;
    const { duration: n } = e;
    return /* @__PURE__ */ rt(n);
  }
  get time() {
    const { resolved: e } = this;
    if (!e)
      return 0;
    const { animation: n } = e;
    return /* @__PURE__ */ rt(n.currentTime || 0);
  }
  set time(e) {
    const { resolved: n } = this;
    if (!n)
      return;
    const { animation: s } = n;
    s.currentTime = /* @__PURE__ */ tt(e);
  }
  get speed() {
    const { resolved: e } = this;
    if (!e)
      return 1;
    const { animation: n } = e;
    return n.playbackRate;
  }
  set speed(e) {
    const { resolved: n } = this;
    if (!n)
      return;
    const { animation: s } = n;
    s.playbackRate = e;
  }
  get state() {
    const { resolved: e } = this;
    if (!e)
      return "idle";
    const { animation: n } = e;
    return n.playState;
  }
  get startTime() {
    const { resolved: e } = this;
    if (!e)
      return null;
    const { animation: n } = e;
    return n.startTime;
  }
  /**
   * Replace the default DocumentTimeline with another AnimationTimeline.
   * Currently used for scroll animations.
   */
  attachTimeline(e) {
    if (!this._resolved)
      this.pendingTimeline = e;
    else {
      const { resolved: n } = this;
      if (!n)
        return z;
      const { animation: s } = n;
      ds(s, e);
    }
    return z;
  }
  play() {
    if (this.isStopped)
      return;
    const { resolved: e } = this;
    if (!e)
      return;
    const { animation: n } = e;
    n.playState === "finished" && this.updateFinishedPromise(), n.play();
  }
  pause() {
    const { resolved: e } = this;
    if (!e)
      return;
    const { animation: n } = e;
    n.pause();
  }
  stop() {
    if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle")
      return;
    this.resolveFinishedPromise(), this.updateFinishedPromise();
    const { resolved: e } = this;
    if (!e)
      return;
    const { animation: n, keyframes: s, duration: i, type: o, ease: r, times: a } = e;
    if (n.playState === "idle" || n.playState === "finished")
      return;
    if (this.time) {
      const { motionValue: u, onUpdate: c, onComplete: f, element: d, ...m } = this.options, p = new _n({
        ...m,
        keyframes: s,
        duration: i,
        type: o,
        ease: r,
        times: a,
        isGenerator: !0
      }), g = /* @__PURE__ */ tt(this.time);
      u.setWithVelocity(p.sample(g - be).value, p.sample(g).value, be);
    }
    const { onStop: l } = this.options;
    l && l(), this.cancel();
  }
  complete() {
    const { resolved: e } = this;
    e && e.animation.finish();
  }
  cancel() {
    const { resolved: e } = this;
    e && e.animation.cancel();
  }
  static supports(e) {
    const { motionValue: n, name: s, repeatDelay: i, repeatType: o, damping: r, type: a } = e;
    if (!n || !n.owner || !(n.owner.current instanceof HTMLElement))
      return !1;
    const { onUpdate: l, transformTemplate: u } = n.owner.getProps();
    return Fl() && s && jl.has(s) && /**
     * If we're outputting values to onUpdate then we can't use WAAPI as there's
     * no way to read the value from WAAPI every frame.
     */
    !l && !u && !i && o !== "mirror" && r !== 0 && a !== "inertia";
  }
}
const $l = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, Kl = (t) => ({
  type: "spring",
  stiffness: 550,
  damping: t === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), Wl = {
  type: "keyframes",
  duration: 0.8
}, Gl = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, Yl = (t, { keyframes: e }) => e.length > 2 ? Wl : xt.has(t) ? t.startsWith("scale") ? Kl(e[1]) : $l : Gl;
function zl({ when: t, delay: e, delayChildren: n, staggerChildren: s, staggerDirection: i, repeat: o, repeatType: r, repeatDelay: a, from: l, elapsed: u, ...c }) {
  return !!Object.keys(c).length;
}
const Un = (t, e, n, s = {}, i, o) => (r) => {
  const a = Vn(s, t) || {}, l = a.delay || s.delay || 0;
  let { elapsed: u = 0 } = s;
  u = u - /* @__PURE__ */ tt(l);
  let c = {
    keyframes: Array.isArray(n) ? n : [null, n],
    ease: "easeOut",
    velocity: e.getVelocity(),
    ...a,
    delay: -u,
    onUpdate: (d) => {
      e.set(d), a.onUpdate && a.onUpdate(d);
    },
    onComplete: () => {
      r(), a.onComplete && a.onComplete();
    },
    name: t,
    motionValue: e,
    element: o ? void 0 : i
  };
  zl(a) || (c = {
    ...c,
    ...Yl(t, c)
  }), c.duration && (c.duration = /* @__PURE__ */ tt(c.duration)), c.repeatDelay && (c.repeatDelay = /* @__PURE__ */ tt(c.repeatDelay)), c.from !== void 0 && (c.keyframes[0] = c.from);
  let f = !1;
  if ((c.type === !1 || c.duration === 0 && !c.repeatDelay) && (c.duration = 0, c.delay === 0 && (f = !0)), f && !o && e.get() !== void 0) {
    const d = Ce(c.keyframes, a);
    if (d !== void 0)
      return R.update(() => {
        c.onUpdate(d), c.onComplete();
      }), new fa([]);
  }
  return !o && Ds.supports(c) ? new Ds(c) : new _n(c);
};
function Hl({ protectedKeys: t, needsAnimating: e }, n) {
  const s = t.hasOwnProperty(n) && e[n] !== !0;
  return e[n] = !1, s;
}
function Rr(t, e, { delay: n = 0, transitionOverride: s, type: i } = {}) {
  var o;
  let { transition: r = t.getDefaultTransition(), transitionEnd: a, ...l } = e;
  s && (r = s);
  const u = [], c = i && t.animationState && t.animationState.getState()[i];
  for (const f in l) {
    const d = t.getValue(f, (o = t.latestValues[f]) !== null && o !== void 0 ? o : null), m = l[f];
    if (m === void 0 || c && Hl(c, f))
      continue;
    const p = {
      delay: n,
      ...Vn(r || {}, f)
    };
    let g = !1;
    if (window.MotionHandoffAnimation) {
      const y = tr(t);
      if (y) {
        const b = window.MotionHandoffAnimation(y, f, R);
        b !== null && (p.startTime = b, g = !0);
      }
    }
    He(t, f), d.start(Un(f, d, m, t.shouldReduceMotion && Ji.has(f) ? { type: !1 } : p, t, g));
    const v = d.animation;
    v && u.push(v);
  }
  return a && Promise.all(u).then(() => {
    R.update(() => {
      a && Va(t, a);
    });
  }), u;
}
function en(t, e, n = {}) {
  var s;
  const i = te(t, e, n.type === "exit" ? (s = t.presenceContext) === null || s === void 0 ? void 0 : s.custom : void 0);
  let { transition: o = t.getDefaultTransition() || {} } = i || {};
  n.transitionOverride && (o = n.transitionOverride);
  const r = i ? () => Promise.all(Rr(t, i, n)) : () => Promise.resolve(), a = t.variantChildren && t.variantChildren.size ? (u = 0) => {
    const { delayChildren: c = 0, staggerChildren: f, staggerDirection: d } = o;
    return Xl(t, e, c + u, f, d, n);
  } : () => Promise.resolve(), { when: l } = o;
  if (l) {
    const [u, c] = l === "beforeChildren" ? [r, a] : [a, r];
    return u().then(() => c());
  } else
    return Promise.all([r(), a(n.delay)]);
}
function Xl(t, e, n = 0, s = 0, i = 1, o) {
  const r = [], a = (t.variantChildren.size - 1) * s, l = i === 1 ? (u = 0) => u * s : (u = 0) => a - u * s;
  return Array.from(t.variantChildren).sort(ql).forEach((u, c) => {
    u.notify("AnimationStart", e), r.push(en(u, e, {
      ...o,
      delay: n + l(c)
    }).then(() => u.notify("AnimationComplete", e)));
  }), Promise.all(r);
}
function ql(t, e) {
  return t.sortNodePosition(e);
}
function Zl(t, e, n = {}) {
  t.notify("AnimationStart", e);
  let s;
  if (Array.isArray(e)) {
    const i = e.map((o) => en(t, o, n));
    s = Promise.all(i);
  } else if (typeof e == "string")
    s = en(t, e, n);
  else {
    const i = typeof e == "function" ? te(t, e, n.custom) : e;
    s = Promise.all(Rr(t, i, n));
  }
  return s.then(() => {
    t.notify("AnimationComplete", e);
  });
}
function Dr(t, e) {
  if (!Array.isArray(e))
    return !1;
  const n = e.length;
  if (n !== t.length)
    return !1;
  for (let s = 0; s < n; s++)
    if (e[s] !== t[s])
      return !1;
  return !0;
}
const Jl = dn.length;
function kr(t) {
  if (!t)
    return;
  if (!t.isControllingVariants) {
    const n = t.parent ? kr(t.parent) || {} : {};
    return t.props.initial !== void 0 && (n.initial = t.props.initial), n;
  }
  const e = {};
  for (let n = 0; n < Jl; n++) {
    const s = dn[n], i = t.props[s];
    (Zt(i) || i === !1) && (e[s] = i);
  }
  return e;
}
const Ql = [...hn].reverse(), tu = hn.length;
function eu(t) {
  return (e) => Promise.all(e.map(({ animation: n, options: s }) => Zl(t, n, s)));
}
function nu(t) {
  let e = eu(t), n = ks(), s = !0;
  const i = (l) => (u, c) => {
    var f;
    const d = te(t, c, l === "exit" ? (f = t.presenceContext) === null || f === void 0 ? void 0 : f.custom : void 0);
    if (d) {
      const { transition: m, transitionEnd: p, ...g } = d;
      u = { ...u, ...g, ...p };
    }
    return u;
  };
  function o(l) {
    e = l(t);
  }
  function r(l) {
    const { props: u } = t, c = kr(t.parent) || {}, f = [], d = /* @__PURE__ */ new Set();
    let m = {}, p = 1 / 0;
    for (let v = 0; v < tu; v++) {
      const y = Ql[v], b = n[y], P = u[y] !== void 0 ? u[y] : c[y], C = Zt(P), S = y === l ? b.isActive : null;
      S === !1 && (p = v);
      let M = P === c[y] && P !== u[y] && C;
      if (M && s && t.manuallyAnimateOnMount && (M = !1), b.protectedKeys = { ...m }, // If it isn't active and hasn't *just* been set as inactive
      !b.isActive && S === null || // If we didn't and don't have any defined prop for this animation type
      !P && !b.prevProp || // Or if the prop doesn't define an animation
      Ve(P) || typeof P == "boolean")
        continue;
      const B = su(b.prevProp, P);
      let w = B || // If we're making this variant active, we want to always make it active
      y === l && b.isActive && !M && C || // If we removed a higher-priority variant (i is in reverse order)
      v > p && C, I = !1;
      const K = Array.isArray(P) ? P : [P];
      let Q = K.reduce(i(y), {});
      S === !1 && (Q = {});
      const { prevResolvedValues: bt = {} } = b, Ft = {
        ...bt,
        ...Q
      }, Pt = (F) => {
        w = !0, d.has(F) && (I = !0, d.delete(F)), b.needsAnimating[F] = !0;
        const q = t.getValue(F);
        q && (q.liveStyle = !1);
      };
      for (const F in Ft) {
        const q = Q[F], Z = bt[F];
        if (m.hasOwnProperty(F))
          continue;
        let St = !1;
        Ge(q) && Ge(Z) ? St = !Dr(q, Z) : St = q !== Z, St ? q != null ? Pt(F) : d.add(F) : q !== void 0 && d.has(F) ? Pt(F) : b.protectedKeys[F] = !0;
      }
      b.prevProp = P, b.prevResolvedValues = Q, b.isActive && (m = { ...m, ...Q }), s && t.blockInitialAnimation && (w = !1), w && (!(M && B) || I) && f.push(...K.map((F) => ({
        animation: F,
        options: { type: y }
      })));
    }
    if (d.size) {
      const v = {};
      if (typeof u.initial != "boolean") {
        const y = te(t, Array.isArray(u.initial) ? u.initial[0] : u.initial);
        y && y.transition && (v.transition = y.transition);
      }
      d.forEach((y) => {
        const b = t.getBaseTarget(y), P = t.getValue(y);
        P && (P.liveStyle = !0), v[y] = b ?? null;
      }), f.push({ animation: v });
    }
    let g = !!f.length;
    return s && (u.initial === !1 || u.initial === u.animate) && !t.manuallyAnimateOnMount && (g = !1), s = !1, g ? e(f) : Promise.resolve();
  }
  function a(l, u) {
    var c;
    if (n[l].isActive === u)
      return Promise.resolve();
    (c = t.variantChildren) === null || c === void 0 || c.forEach((d) => {
      var m;
      return (m = d.animationState) === null || m === void 0 ? void 0 : m.setActive(l, u);
    }), n[l].isActive = u;
    const f = r(l);
    for (const d in n)
      n[d].protectedKeys = {};
    return f;
  }
  return {
    animateChanges: r,
    setActive: a,
    setAnimateFunction: o,
    getState: () => n,
    reset: () => {
      n = ks(), s = !0;
    }
  };
}
function su(t, e) {
  return typeof e == "string" ? e !== t : Array.isArray(e) ? !Dr(e, t) : !1;
}
function pt(t = !1) {
  return {
    isActive: t,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function ks() {
  return {
    animate: pt(!0),
    whileInView: pt(),
    whileHover: pt(),
    whileTap: pt(),
    whileDrag: pt(),
    whileFocus: pt(),
    exit: pt()
  };
}
class ht {
  constructor(e) {
    this.isMounted = !1, this.node = e;
  }
  update() {
  }
}
class iu extends ht {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(e) {
    super(e), e.animationState || (e.animationState = nu(e));
  }
  updateAnimationControlsSubscription() {
    const { animate: e } = this.node.getProps();
    Ve(e) && (this.unmountControls = e.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: e } = this.node.getProps(), { animate: n } = this.node.prevProps || {};
    e !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var e;
    this.node.animationState.reset(), (e = this.unmountControls) === null || e === void 0 || e.call(this);
  }
}
let ru = 0;
class ou extends ht {
  constructor() {
    super(...arguments), this.id = ru++;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: e, onExitComplete: n } = this.node.presenceContext, { isPresent: s } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || e === s)
      return;
    const i = this.node.animationState.setActive("exit", !e);
    n && !e && i.then(() => {
      n(this.id);
    });
  }
  mount() {
    const { register: e, onExitComplete: n } = this.node.presenceContext || {};
    n && n(this.id), e && (this.unmount = e(this.id));
  }
  unmount() {
  }
}
const au = {
  animation: {
    Feature: iu
  },
  exit: {
    Feature: ou
  }
};
function se(t, e, n, s = { passive: !0 }) {
  return t.addEventListener(e, n, s), () => t.removeEventListener(e, n);
}
function ae(t) {
  return {
    point: {
      x: t.pageX,
      y: t.pageY
    }
  };
}
const lu = (t) => (e) => Mn(e) && t(e, ae(e));
function Et(t, e, n, s) {
  return se(t, e, lu(n), s);
}
function Lr({ top: t, left: e, right: n, bottom: s }) {
  return {
    x: { min: e, max: n },
    y: { min: t, max: s }
  };
}
function uu({ x: t, y: e }) {
  return { top: e.min, right: t.max, bottom: e.max, left: t.min };
}
function cu(t, e) {
  if (!e)
    return t;
  const n = e({ x: t.left, y: t.top }), s = e({ x: t.right, y: t.bottom });
  return {
    top: n.y,
    left: n.x,
    bottom: s.y,
    right: s.x
  };
}
const Or = 1e-4, fu = 1 - Or, hu = 1 + Or, jr = 0.01, du = 0 - jr, mu = 0 + jr;
function Y(t) {
  return t.max - t.min;
}
function pu(t, e, n) {
  return Math.abs(t - e) <= n;
}
function Ls(t, e, n, s = 0.5) {
  t.origin = s, t.originPoint = O(e.min, e.max, t.origin), t.scale = Y(n) / Y(e), t.translate = O(n.min, n.max, t.origin) - t.originPoint, (t.scale >= fu && t.scale <= hu || isNaN(t.scale)) && (t.scale = 1), (t.translate >= du && t.translate <= mu || isNaN(t.translate)) && (t.translate = 0);
}
function Ht(t, e, n, s) {
  Ls(t.x, e.x, n.x, s ? s.originX : void 0), Ls(t.y, e.y, n.y, s ? s.originY : void 0);
}
function Os(t, e, n) {
  t.min = n.min + e.min, t.max = t.min + Y(e);
}
function gu(t, e, n) {
  Os(t.x, e.x, n.x), Os(t.y, e.y, n.y);
}
function js(t, e, n) {
  t.min = e.min - n.min, t.max = t.min + Y(e);
}
function Xt(t, e, n) {
  js(t.x, e.x, n.x), js(t.y, e.y, n.y);
}
const Bs = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), Ct = () => ({
  x: Bs(),
  y: Bs()
}), Fs = () => ({ min: 0, max: 0 }), j = () => ({
  x: Fs(),
  y: Fs()
});
function X(t) {
  return [t("x"), t("y")];
}
function Ie(t) {
  return t === void 0 || t === 1;
}
function nn({ scale: t, scaleX: e, scaleY: n }) {
  return !Ie(t) || !Ie(e) || !Ie(n);
}
function gt(t) {
  return nn(t) || Br(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY;
}
function Br(t) {
  return Is(t.x) || Is(t.y);
}
function Is(t) {
  return t && t !== "0%";
}
function Pe(t, e, n) {
  const s = t - n, i = e * s;
  return n + i;
}
function Ns(t, e, n, s, i) {
  return i !== void 0 && (t = Pe(t, i, s)), Pe(t, n, s) + e;
}
function sn(t, e = 0, n = 1, s, i) {
  t.min = Ns(t.min, e, n, s, i), t.max = Ns(t.max, e, n, s, i);
}
function Fr(t, { x: e, y: n }) {
  sn(t.x, e.translate, e.scale, e.originPoint), sn(t.y, n.translate, n.scale, n.originPoint);
}
const _s = 0.999999999999, Us = 1.0000000000001;
function yu(t, e, n, s = !1) {
  const i = n.length;
  if (!i)
    return;
  e.x = e.y = 1;
  let o, r;
  for (let a = 0; a < i; a++) {
    o = n[a], r = o.projectionDelta;
    const { visualElement: l } = o.options;
    l && l.props.style && l.props.style.display === "contents" || (s && o.options.layoutScroll && o.scroll && o !== o.root && Rt(t, {
      x: -o.scroll.offset.x,
      y: -o.scroll.offset.y
    }), r && (e.x *= r.x.scale, e.y *= r.y.scale, Fr(t, r)), s && gt(o.latestValues) && Rt(t, o.latestValues));
  }
  e.x < Us && e.x > _s && (e.x = 1), e.y < Us && e.y > _s && (e.y = 1);
}
function Mt(t, e) {
  t.min = t.min + e, t.max = t.max + e;
}
function $s(t, e, n, s, i = 0.5) {
  const o = O(t.min, t.max, i);
  sn(t, e, n, o, s);
}
function Rt(t, e) {
  $s(t.x, e.x, e.scaleX, e.scale, e.originX), $s(t.y, e.y, e.scaleY, e.scale, e.originY);
}
function Ir(t, e) {
  return Lr(cu(t.getBoundingClientRect(), e));
}
function vu(t, e, n) {
  const s = Ir(t, n), { scroll: i } = e;
  return i && (Mt(s.x, i.offset.x), Mt(s.y, i.offset.y)), s;
}
const Ks = (t, e) => Math.abs(t - e);
function Tu(t, e) {
  const n = Ks(t.x, e.x), s = Ks(t.y, e.y);
  return Math.sqrt(n ** 2 + s ** 2);
}
class Nr {
  constructor(e, n, { transformPagePoint: s, dragSnapToOrigin: i = !1 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const c = _e(this.lastMoveEventInfo, this.history), f = this.startEvent !== null, d = Tu(c.offset, { x: 0, y: 0 }) >= 3;
      if (!f && !d)
        return;
      const { point: m } = c, { timestamp: p } = N;
      this.history.push({ ...m, timestamp: p });
      const { onStart: g, onMove: v } = this.handlers;
      f || (g && g(this.lastMoveEvent, c), this.startEvent = this.lastMoveEvent), v && v(this.lastMoveEvent, c);
    }, this.handlePointerMove = (c, f) => {
      if (this.index = Gs(c.currentTarget), c.target instanceof Element && c.target.hasPointerCapture && c.pointerId !== void 0)
        try {
          if (!c.target.hasPointerCapture(c.pointerId))
            return;
        } catch {
        }
      this.lastMoveEvent = c, this.lastMoveEventInfo = Ne(f, this.transformPagePoint), R.update(this.updatePoint, !0);
    }, this.handlePointerUp = (c, f) => {
      Gt(c, "release"), this.end();
      const { onEnd: d, onSessionEnd: m, resumeAnimation: p } = this.handlers;
      if (this.dragSnapToOrigin && p && p(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const g = _e(c.type === "pointercancel" || c.type === "lostpointercapture" ? this.lastMoveEventInfo : Ne(f, this.transformPagePoint), this.history);
      this.startEvent && d && d(c, g), m && m(c, g);
    }, !Mn(e))
      return;
    this.dragSnapToOrigin = i, this.handlers = n, this.transformPagePoint = s;
    const o = ae(e), r = Ne(o, this.transformPagePoint), { point: a } = r, { timestamp: l } = N;
    this.history = [{ ...a, timestamp: l }];
    const { onSessionStart: u } = n;
    u && u(e, _e(r, this.history)), Gt(e, "set"), this.removeListeners = oe(Et(e.currentTarget, "pointermove", this.handlePointerMove), Et(e.currentTarget, "pointerup", this.handlePointerUp), Et(e.currentTarget, "pointercancel", this.handlePointerUp), Et(e.currentTarget, "lostpointercapture", (c, f) => {
      Gs(c.currentTarget) !== this.index ? Gt(c, "set") : this.handlePointerUp(c, f);
    }));
  }
  updateHandlers(e) {
    this.handlers = e;
  }
  end() {
    this.removeListeners && this.removeListeners(), ct(this.updatePoint);
  }
}
function Ne(t, e) {
  return e ? { point: e(t.point) } : t;
}
function Ws(t, e) {
  return { x: t.x - e.x, y: t.y - e.y };
}
function _e({ point: t }, e) {
  return {
    point: t,
    delta: Ws(t, _r(e)),
    offset: Ws(t, xu(e)),
    velocity: bu(e, 0.1)
  };
}
function xu(t) {
  return t[0];
}
function _r(t) {
  return t[t.length - 1];
}
function bu(t, e) {
  if (t.length < 2)
    return { x: 0, y: 0 };
  let n = t.length - 1, s = null;
  const i = _r(t);
  for (; n >= 0 && (s = t[n], !(i.timestamp - s.timestamp > /* @__PURE__ */ tt(e))); )
    n--;
  if (!s)
    return { x: 0, y: 0 };
  const o = /* @__PURE__ */ rt(i.timestamp - s.timestamp);
  if (o === 0)
    return { x: 0, y: 0 };
  const r = {
    x: (i.x - s.x) / o,
    y: (i.y - s.y) / o
  };
  return r.x === 1 / 0 && (r.x = 0), r.y === 1 / 0 && (r.y = 0), r;
}
function Gs(t) {
  return t.parentNode ? Array.from(t.parentNode.children).indexOf(t) : -1;
}
function Pu(t, { min: e, max: n }, s) {
  return e !== void 0 && t < e ? t = s ? O(e, t, s.min) : Math.max(t, e) : n !== void 0 && t > n && (t = s ? O(n, t, s.max) : Math.min(t, n)), t;
}
function Ys(t, e, n) {
  return {
    min: e !== void 0 ? t.min + e : void 0,
    max: n !== void 0 ? t.max + n - (t.max - t.min) : void 0
  };
}
function Su(t, { top: e, left: n, bottom: s, right: i }) {
  return {
    x: Ys(t.x, n, i),
    y: Ys(t.y, e, s)
  };
}
function zs(t, e) {
  let n = e.min - t.min, s = e.max - t.max;
  return e.max - e.min < t.max - t.min && ([n, s] = [s, n]), { min: n, max: s };
}
function Au(t, e) {
  return {
    x: zs(t.x, e.x),
    y: zs(t.y, e.y)
  };
}
function wu(t, e) {
  let n = 0.5;
  const s = Y(t), i = Y(e);
  return i > s ? n = /* @__PURE__ */ Dt(e.min, e.max - s, t.min) : s > i && (n = /* @__PURE__ */ Dt(t.min, t.max - i, e.min)), ot(0, 1, n);
}
function Vu(t, e) {
  const n = {};
  return e.min !== void 0 && (n.min = e.min - t.min), e.max !== void 0 && (n.max = e.max - t.min), n;
}
const rn = 0.35;
function Eu(t = rn) {
  return t === !1 ? t = 0 : t === !0 && (t = rn), {
    x: Hs(t, "left", "right"),
    y: Hs(t, "top", "bottom")
  };
}
function Hs(t, e, n) {
  return {
    min: Xs(t, e),
    max: Xs(t, n)
  };
}
function Xs(t, e) {
  return typeof t == "number" ? t : t[e] || 0;
}
const Cu = /* @__PURE__ */ new WeakMap();
class Mu {
  constructor(e) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = j(), this.visualElement = e;
  }
  start(e, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: s } = this.visualElement;
    if (s && s.isPresent === !1)
      return;
    const i = (c) => {
      const { dragSnapToOrigin: f } = this.getProps();
      f ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(ae(c).point);
    }, o = (c, f) => {
      const { drag: d, dragPropagation: m, onDragStart: p } = this.getProps();
      if (d && !m && (this.openDragLock && this.openDragLock(), this.openDragLock = ba(d), !this.openDragLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), X((v) => {
        let y = this.getAxisMotionValue(v).get() || 0;
        if (et.test(y)) {
          const { projection: b } = this.visualElement;
          if (b && b.layout) {
            const P = b.layout.layoutBox[v];
            P && (y = Y(P) * (parseFloat(y) / 100));
          }
        }
        this.originPoint[v] = y;
      }), p && R.postRender(() => p(c, f)), He(this.visualElement, "transform");
      const { animationState: g } = this.visualElement;
      g && g.setActive("whileDrag", !0);
    }, r = (c, f) => {
      const { dragPropagation: d, dragDirectionLock: m, onDirectionLock: p, onDrag: g } = this.getProps();
      if (!d && !this.openDragLock)
        return;
      const { offset: v } = f;
      if (m && this.currentDirection === null) {
        this.currentDirection = Ru(v), this.currentDirection !== null && p && p(this.currentDirection);
        return;
      }
      this.updateAxis("x", f.point, v), this.updateAxis("y", f.point, v), this.visualElement.render(), g && g(c, f);
    }, a = (c, f) => this.stop(c, f), l = () => X((c) => {
      var f;
      return this.getAnimationState(c) === "paused" && ((f = this.getAxisMotionValue(c).animation) === null || f === void 0 ? void 0 : f.play());
    }), { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new Nr(e, {
      onSessionStart: i,
      onStart: o,
      onMove: r,
      onSessionEnd: a,
      resumeAnimation: l
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: u
    });
  }
  stop(e, n) {
    const s = this.isDragging;
    if (this.cancel(), !s)
      return;
    const { velocity: i } = n;
    this.startAnimation(i);
    const { onDragEnd: o } = this.getProps();
    o && R.postRender(() => o(e, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: e, animationState: n } = this.visualElement;
    e && (e.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
    const { dragPropagation: s } = this.getProps();
    !s && this.openDragLock && (this.openDragLock(), this.openDragLock = null), n && n.setActive("whileDrag", !1);
  }
  updateAxis(e, n, s) {
    const { drag: i } = this.getProps();
    if (!s || !de(e, i, this.currentDirection))
      return;
    const o = this.getAxisMotionValue(e);
    let r = this.originPoint[e] + s[e];
    this.constraints && this.constraints[e] && (r = Pu(r, this.constraints[e], this.elastic[e])), o.set(r);
  }
  resolveConstraints() {
    var e;
    const { dragConstraints: n, dragElastic: s } = this.getProps(), i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (e = this.visualElement.projection) === null || e === void 0 ? void 0 : e.layout, o = this.constraints;
    n && wt(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && i ? this.constraints = Su(i.layoutBox, n) : this.constraints = !1, this.elastic = Eu(s), o !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && X((r) => {
      this.constraints !== !1 && this.getAxisMotionValue(r) && (this.constraints[r] = Vu(i.layoutBox[r], this.constraints[r]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: e, onMeasureDragConstraints: n } = this.getProps();
    if (!e || !wt(e))
      return !1;
    const s = e.current;
    ut(s !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
    const { projection: i } = this.visualElement;
    if (!i || !i.layout)
      return !1;
    const o = vu(s, i.root, this.visualElement.getTransformPagePoint());
    let r = Au(i.layout.layoutBox, o);
    if (n) {
      const a = n(uu(r));
      this.hasMutatedConstraints = !!a, a && (r = Lr(a));
    }
    return r;
  }
  startAnimation(e) {
    const { drag: n, dragMomentum: s, dragElastic: i, dragTransition: o, dragSnapToOrigin: r, onDragTransitionEnd: a } = this.getProps(), l = this.constraints || {}, u = X((c) => {
      if (!de(c, n, this.currentDirection))
        return;
      let f = l && l[c] || {};
      r && (f = { min: 0, max: 0 });
      const d = i ? 200 : 1e6, m = i ? 40 : 1e7, p = {
        type: "inertia",
        velocity: s ? e[c] : 0,
        bounceStiffness: d,
        bounceDamping: m,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...o,
        ...f
      };
      return this.startAxisValueAnimation(c, p);
    });
    return Promise.all(u).then(a);
  }
  startAxisValueAnimation(e, n) {
    const s = this.getAxisMotionValue(e);
    return He(this.visualElement, e), s.start(Un(e, s, 0, n, this.visualElement, !1));
  }
  stopAnimation() {
    X((e) => this.getAxisMotionValue(e).stop());
  }
  pauseAnimation() {
    X((e) => {
      var n;
      return (n = this.getAxisMotionValue(e).animation) === null || n === void 0 ? void 0 : n.pause();
    });
  }
  getAnimationState(e) {
    var n;
    return (n = this.getAxisMotionValue(e).animation) === null || n === void 0 ? void 0 : n.state;
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(e) {
    const n = `_drag${e.toUpperCase()}`, s = this.visualElement.getProps(), i = s[n];
    return i || this.visualElement.getValue(e, (s.initial ? s.initial[e] : void 0) || 0);
  }
  snapToCursor(e) {
    X((n) => {
      const { drag: s } = this.getProps();
      if (!de(n, s, this.currentDirection))
        return;
      const { projection: i } = this.visualElement, o = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: r, max: a } = i.layout.layoutBox[n];
        o.set(e[n] - O(r, a, 0.5));
      }
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    const { drag: e, dragConstraints: n } = this.getProps(), { projection: s } = this.visualElement;
    if (!wt(n) || !s || !this.constraints)
      return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    X((r) => {
      const a = this.getAxisMotionValue(r);
      if (a && this.constraints !== !1) {
        const l = a.get();
        i[r] = wu({ min: l, max: l }, this.constraints[r]);
      }
    });
    const { transformTemplate: o } = this.visualElement.getProps();
    this.visualElement.current.style.transform = o ? o({}, "") : "none", s.root && s.root.updateScroll(), s.updateLayout(), this.resolveConstraints(), X((r) => {
      if (!de(r, e, null))
        return;
      const a = this.getAxisMotionValue(r), { min: l, max: u } = this.constraints[r];
      a.set(O(l, u, i[r]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    Cu.set(this.visualElement, this);
    const e = this.visualElement.current, n = Et(e, "pointerdown", (l) => {
      const { drag: u, dragListener: c = !0 } = this.getProps();
      u && c && this.start(l);
    }), s = () => {
      const { dragConstraints: l } = this.getProps();
      wt(l) && l.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: i } = this.visualElement, o = i.addEventListener("measure", s);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), R.read(s);
    const r = se(window, "resize", () => this.scalePositionWithinConstraints()), a = i.addEventListener("didUpdate", ({ delta: l, hasLayoutChanged: u }) => {
      this.isDragging && u && (X((c) => {
        const f = this.getAxisMotionValue(c);
        f && (this.originPoint[c] += l[c].translate, f.set(f.get() + l[c].translate));
      }), this.visualElement.render());
    });
    return () => {
      r(), n(), o(), a && a();
    };
  }
  getProps() {
    const e = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: s = !1, dragPropagation: i = !1, dragConstraints: o = !1, dragElastic: r = rn, dragMomentum: a = !0 } = e;
    return {
      ...e,
      drag: n,
      dragDirectionLock: s,
      dragPropagation: i,
      dragConstraints: o,
      dragElastic: r,
      dragMomentum: a
    };
  }
}
function de(t, e, n) {
  return (e === !0 || e === t) && (n === null || n === t);
}
function Ru(t, e = 10) {
  let n = null;
  return Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x"), n;
}
class Du extends ht {
  constructor(e) {
    super(e), this.removeGroupControls = z, this.removeListeners = z, this.controls = new Mu(e);
  }
  mount() {
    const { dragControls: e } = this.node.getProps();
    e && (this.removeGroupControls = e.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || z;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const qs = (t) => (e, n) => {
  t && R.postRender(() => t(e, n));
};
class ku extends ht {
  constructor() {
    super(...arguments), this.removePointerDownListener = z;
  }
  onPointerDown(e) {
    this.session = new Nr(e, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint()
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: e, onPanStart: n, onPan: s, onPanEnd: i } = this.node.getProps();
    return {
      onSessionStart: qs(e),
      onStart: qs(n),
      onMove: s,
      onEnd: (o, r) => {
        delete this.session, i && R.postRender(() => i(o, r));
      }
    };
  }
  mount() {
    this.removePointerDownListener = Et(this.node.current, "pointerdown", (e) => this.onPointerDown(e));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const ye = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: !0,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: !1
};
function Zs(t, e) {
  return e.max === e.min ? 0 : t / (e.max - e.min) * 100;
}
const $t = {
  correct: (t, e) => {
    if (!e.target)
      return t;
    if (typeof t == "string")
      if (A.test(t))
        t = parseFloat(t);
      else
        return t;
    const n = Zs(t, e.target.x), s = Zs(t, e.target.y);
    return `${n}% ${s}%`;
  }
}, Lu = {
  correct: (t, { treeScale: e, projectionDelta: n }) => {
    const s = t, i = ft.parse(t);
    if (i.length > 5)
      return s;
    const o = ft.createTransformer(t), r = typeof i[0] != "number" ? 1 : 0, a = n.x.scale * e.x, l = n.y.scale * e.y;
    i[0 + r] /= a, i[1 + r] /= l;
    const u = O(a, l, 0.5);
    return typeof i[2 + r] == "number" && (i[2 + r] /= u), typeof i[3 + r] == "number" && (i[3 + r] /= u), o(i);
  }
};
class Ou extends ao {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: e, layoutGroup: n, switchLayoutGroup: s, layoutId: i } = this.props, { projection: o } = e;
    Io(ju), o && (n.group && n.group.add(o), s && s.register && i && s.register(o), o.root.didUpdate(), o.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), o.setOptions({
      ...o.options,
      onExitComplete: () => this.safeToRemove()
    })), ye.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(e) {
    const { layoutDependency: n, visualElement: s, drag: i, isPresent: o } = this.props, r = s.projection;
    return r && (r.isPresent = o, i || e.layoutDependency !== n || n === void 0 || e.isPresent !== o ? r.willUpdate() : this.safeToRemove(), e.isPresent !== o && (o ? r.promote() : r.relegate() || R.postRender(() => {
      const a = r.getStack();
      (!a || !a.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: e } = this.props.visualElement;
    e && (e.root.didUpdate(), pn.postRender(() => {
      !e.currentAnimation && e.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: e, layoutGroup: n, switchLayoutGroup: s } = this.props, { projection: i } = e;
    i && (i.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(i), s && s.deregister && s.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: e } = this.props;
    e && e();
  }
  render() {
    return null;
  }
}
function Ur(t) {
  const [e, n] = po(), s = G(wi);
  return qt.jsx(Ou, { ...t, layoutGroup: s, switchLayoutGroup: G(ki), isPresent: e, safeToRemove: n });
}
const ju = {
  borderRadius: {
    ...$t,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: $t,
  borderTopRightRadius: $t,
  borderBottomLeftRadius: $t,
  borderBottomRightRadius: $t,
  boxShadow: Lu
};
function Bu(t, e, n) {
  const s = $(t) ? t : ee(t);
  return s.start(Un("", s, e, n)), s.animation;
}
function Fu(t) {
  return t instanceof SVGElement && t.tagName !== "svg";
}
const Iu = (t, e) => t.depth - e.depth;
class Nu {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(e) {
    Rn(this.children, e), this.isDirty = !0;
  }
  remove(e) {
    Dn(this.children, e), this.isDirty = !0;
  }
  forEach(e) {
    this.isDirty && this.children.sort(Iu), this.isDirty = !1, this.children.forEach(e);
  }
}
function _u(t, e) {
  const n = nt.now(), s = ({ timestamp: i }) => {
    const o = i - n;
    o >= e && (ct(s), t(o - e));
  };
  return R.read(s, !0), () => ct(s);
}
const $r = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], Uu = $r.length, Js = (t) => typeof t == "string" ? parseFloat(t) : t, Qs = (t) => typeof t == "number" || A.test(t);
function $u(t, e, n, s, i, o) {
  i ? (t.opacity = O(
    0,
    // TODO Reinstate this if only child
    n.opacity !== void 0 ? n.opacity : 1,
    Ku(s)
  ), t.opacityExit = O(e.opacity !== void 0 ? e.opacity : 1, 0, Wu(s))) : o && (t.opacity = O(e.opacity !== void 0 ? e.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, s));
  for (let r = 0; r < Uu; r++) {
    const a = `border${$r[r]}Radius`;
    let l = ti(e, a), u = ti(n, a);
    if (l === void 0 && u === void 0)
      continue;
    l || (l = 0), u || (u = 0), l === 0 || u === 0 || Qs(l) === Qs(u) ? (t[a] = Math.max(O(Js(l), Js(u), s), 0), (et.test(u) || et.test(l)) && (t[a] += "%")) : t[a] = u;
  }
  (e.rotate || n.rotate) && (t.rotate = O(e.rotate || 0, n.rotate || 0, s));
}
function ti(t, e) {
  return t[e] !== void 0 ? t[e] : t.borderRadius;
}
const Ku = /* @__PURE__ */ Kr(0, 0.5, ar), Wu = /* @__PURE__ */ Kr(0.5, 0.95, z);
function Kr(t, e, n) {
  return (s) => s < t ? 0 : s > e ? 1 : n(/* @__PURE__ */ Dt(t, e, s));
}
function ei(t, e) {
  t.min = e.min, t.max = e.max;
}
function H(t, e) {
  ei(t.x, e.x), ei(t.y, e.y);
}
function ni(t, e) {
  t.translate = e.translate, t.scale = e.scale, t.originPoint = e.originPoint, t.origin = e.origin;
}
function si(t, e, n, s, i) {
  return t -= e, t = Pe(t, 1 / n, s), i !== void 0 && (t = Pe(t, 1 / i, s)), t;
}
function Gu(t, e = 0, n = 1, s = 0.5, i, o = t, r = t) {
  if (et.test(e) && (e = parseFloat(e), e = O(r.min, r.max, e / 100) - r.min), typeof e != "number")
    return;
  let a = O(o.min, o.max, s);
  t === o && (a -= e), t.min = si(t.min, e, n, a, i), t.max = si(t.max, e, n, a, i);
}
function ii(t, e, [n, s, i], o, r) {
  Gu(t, e[n], e[s], e[i], e.scale, o, r);
}
const Yu = ["x", "scaleX", "originX"], zu = ["y", "scaleY", "originY"];
function ri(t, e, n, s) {
  ii(t.x, e, Yu, n ? n.x : void 0, s ? s.x : void 0), ii(t.y, e, zu, n ? n.y : void 0, s ? s.y : void 0);
}
function oi(t) {
  return t.translate === 0 && t.scale === 1;
}
function Wr(t) {
  return oi(t.x) && oi(t.y);
}
function ai(t, e) {
  return t.min === e.min && t.max === e.max;
}
function Hu(t, e) {
  return ai(t.x, e.x) && ai(t.y, e.y);
}
function li(t, e) {
  return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max);
}
function Gr(t, e) {
  return li(t.x, e.x) && li(t.y, e.y);
}
function ui(t) {
  return Y(t.x) / Y(t.y);
}
function ci(t, e) {
  return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint;
}
class Xu {
  constructor() {
    this.members = [];
  }
  add(e) {
    Rn(this.members, e), e.scheduleRender();
  }
  remove(e) {
    if (Dn(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(e) {
    const n = this.members.findIndex((i) => e === i);
    if (n === 0)
      return !1;
    let s;
    for (let i = n; i >= 0; i--) {
      const o = this.members[i];
      if (o.isPresent !== !1) {
        s = o;
        break;
      }
    }
    return s ? (this.promote(s), !0) : !1;
  }
  promote(e, n) {
    const s = this.lead;
    if (e !== s && (this.prevLead = s, this.lead = e, e.show(), s)) {
      s.instance && s.scheduleRender(), e.scheduleRender(), e.resumeFrom = s, n && (e.resumeFrom.preserveOpacity = !0), s.snapshot && (e.snapshot = s.snapshot, e.snapshot.latestValues = s.animationValues || s.latestValues), e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
      const { crossfade: i } = e.options;
      i === !1 && s.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((e) => {
      const { options: n, resumingFrom: s } = e;
      n.onExitComplete && n.onExitComplete(), s && s.options.onExitComplete && s.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((e) => {
      e.instance && e.scheduleRender(!1);
    });
  }
  /**
   * Clear any leads that have been removed this render to prevent them from being
   * used in future animations and to prevent memory leaks
   */
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function qu(t, e, n) {
  let s = "";
  const i = t.x.translate / e.x, o = t.y.translate / e.y, r = (n == null ? void 0 : n.z) || 0;
  if ((i || o || r) && (s = `translate3d(${i}px, ${o}px, ${r}px) `), (e.x !== 1 || e.y !== 1) && (s += `scale(${1 / e.x}, ${1 / e.y}) `), n) {
    const { transformPerspective: u, rotate: c, rotateX: f, rotateY: d, skewX: m, skewY: p } = n;
    u && (s = `perspective(${u}px) ${s}`), c && (s += `rotate(${c}deg) `), f && (s += `rotateX(${f}deg) `), d && (s += `rotateY(${d}deg) `), m && (s += `skewX(${m}deg) `), p && (s += `skewY(${p}deg) `);
  }
  const a = t.x.scale * e.x, l = t.y.scale * e.y;
  return (a !== 1 || l !== 1) && (s += `scale(${a}, ${l})`), s || "none";
}
const Ue = ["", "X", "Y", "Z"], Zu = { visibility: "hidden" }, fi = 1e3;
let Ju = 0;
function $e(t, e, n, s) {
  const { latestValues: i } = e;
  i[t] && (n[t] = i[t], e.setStaticValue(t, 0), s && (s[t] = 0));
}
function Yr(t) {
  if (t.hasCheckedOptimisedAppear = !0, t.root === t)
    return;
  const { visualElement: e } = t.options;
  if (!e)
    return;
  const n = tr(e);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: i, layoutId: o } = t.options;
    window.MotionCancelOptimisedAnimation(n, "transform", R, !(i || o));
  }
  const { parent: s } = t;
  s && !s.hasCheckedOptimisedAppear && Yr(s);
}
function zr({ attachResizeListener: t, defaultParent: e, measureScroll: n, checkIsScrollRoot: s, resetTransform: i }) {
  return class {
    constructor(r = {}, a = e == null ? void 0 : e()) {
      this.id = Ju++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, this.nodes.forEach(ec), this.nodes.forEach(oc), this.nodes.forEach(ac), this.nodes.forEach(nc);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = r, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new Nu());
    }
    addEventListener(r, a) {
      return this.eventHandlers.has(r) || this.eventHandlers.set(r, new kn()), this.eventHandlers.get(r).add(a);
    }
    notifyListeners(r, ...a) {
      const l = this.eventHandlers.get(r);
      l && l.notify(...a);
    }
    hasListeners(r) {
      return this.eventHandlers.has(r);
    }
    /**
     * Lifecycles
     */
    mount(r, a = this.root.hasTreeAnimated) {
      if (this.instance)
        return;
      this.isSVG = Fu(r), this.instance = r;
      const { layoutId: l, layout: u, visualElement: c } = this.options;
      if (c && !c.current && c.mount(r), this.root.nodes.add(this), this.parent && this.parent.children.add(this), a && (u || l) && (this.isLayoutDirty = !0), t) {
        let f;
        const d = () => this.root.updateBlockedByResize = !1;
        t(r, () => {
          this.root.updateBlockedByResize = !0, f && f(), f = _u(d, 250), ye.hasAnimatedSinceResize && (ye.hasAnimatedSinceResize = !1, this.nodes.forEach(di));
        });
      }
      l && this.root.registerSharedNode(l, this), this.options.animate !== !1 && c && (l || u) && this.addEventListener("didUpdate", ({ delta: f, hasLayoutChanged: d, hasRelativeLayoutChanged: m, layout: p }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const g = this.options.transition || c.getDefaultTransition() || hc, { onLayoutAnimationStart: v, onLayoutAnimationComplete: y } = c.getProps(), b = !this.targetLayout || !Gr(this.targetLayout, p), P = !d && m;
        if (this.options.layoutRoot || this.resumeFrom || P || d && (b || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(f, P);
          const C = {
            ...Vn(g, "layout"),
            onPlay: v,
            onComplete: y
          };
          (c.shouldReduceMotion || this.options.layoutRoot) && (C.delay = 0, C.type = !1), this.startAnimation(C);
        } else
          d || di(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = p;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const r = this.getStack();
      r && r.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, ct(this.updateProjection);
    }
    // only on the root
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
    }
    // Note: currently only running on root node
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(lc), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: r } = this.options;
      return r && r.getProps().transformTemplate;
    }
    willUpdate(r = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Yr(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const f = this.path[c];
        f.shouldResetTransform = !0, f.updateScroll("snapshot"), f.options.layoutRoot && f.willUpdate(!1);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l)
        return;
      const u = this.getTransformTemplate();
      this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0, this.updateSnapshot(), r && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(hi);
        return;
      }
      this.isUpdating || this.nodes.forEach(ic), this.isUpdating = !1, this.nodes.forEach(rc), this.nodes.forEach(Qu), this.nodes.forEach(tc), this.clearAllSnapshots();
      const a = nt.now();
      N.delta = ot(0, 1e3 / 60, a - N.timestamp), N.timestamp = a, N.isProcessing = !0, Le.update.process(N), Le.preRender.process(N), Le.render.process(N), N.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, pn.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(sc), this.sharedNodes.forEach(uc);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, R.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      R.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !Y(this.snapshot.measuredBox.x) && !Y(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++)
          this.path[l].updateScroll();
      const r = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = j(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a && a.notify("LayoutMeasure", this.layout.layoutBox, r ? r.layoutBox : void 0);
    }
    updateScroll(r = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === r && (a = !1), a) {
        const l = s(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: r,
          isRoot: l,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l
        };
      }
    }
    resetTransform() {
      if (!i)
        return;
      const r = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, a = this.projectionDelta && !Wr(this.projectionDelta), l = this.getTransformTemplate(), u = l ? l(this.latestValues, "") : void 0, c = u !== this.prevTransformTemplateValue;
      r && (a || gt(this.latestValues) || c) && (i(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(r = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return r && (l = this.removeTransform(l)), dc(l), {
        animationId: this.root.animationId,
        measuredBox: a,
        layoutBox: l,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      var r;
      const { visualElement: a } = this.options;
      if (!a)
        return j();
      const l = a.measureViewportBox();
      if (!(((r = this.scroll) === null || r === void 0 ? void 0 : r.wasRoot) || this.path.some(mc))) {
        const { scroll: c } = this.root;
        c && (Mt(l.x, c.offset.x), Mt(l.y, c.offset.y));
      }
      return l;
    }
    removeElementScroll(r) {
      var a;
      const l = j();
      if (H(l, r), !((a = this.scroll) === null || a === void 0) && a.wasRoot)
        return l;
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u], { scroll: f, options: d } = c;
        c !== this.root && f && d.layoutScroll && (f.wasRoot && H(l, r), Mt(l.x, f.offset.x), Mt(l.y, f.offset.y));
      }
      return l;
    }
    applyTransform(r, a = !1) {
      const l = j();
      H(l, r);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !a && c.options.layoutScroll && c.scroll && c !== c.root && Rt(l, {
          x: -c.scroll.offset.x,
          y: -c.scroll.offset.y
        }), gt(c.latestValues) && Rt(l, c.latestValues);
      }
      return gt(this.latestValues) && Rt(l, this.latestValues), l;
    }
    removeTransform(r) {
      const a = j();
      H(a, r);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !gt(u.latestValues))
          continue;
        nn(u.latestValues) && u.updateSnapshot();
        const c = j(), f = u.measurePageBox();
        H(c, f), ri(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return gt(this.latestValues) && ri(a, this.latestValues), a;
    }
    setTargetDelta(r) {
      this.targetDelta = r, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(r) {
      this.options = {
        ...this.options,
        ...r,
        crossfade: r.crossfade !== void 0 ? r.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== N.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(r = !1) {
      var a;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== l;
      if (!(r || u && this.isSharedProjectionDirty || this.isProjectionDirty || !((a = this.parent) === null || a === void 0) && a.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: f, layoutId: d } = this.options;
      if (!(!this.layout || !(f || d))) {
        if (this.resolvedRelativeTargetAt = N.timestamp, !this.targetDelta && !this.relativeTarget) {
          const m = this.getClosestProjectingParent();
          m && m.layout && this.animationProgress !== 1 ? (this.relativeParent = m, this.forceRelativeParentToResolveTarget(), this.relativeTarget = j(), this.relativeTargetOrigin = j(), Xt(this.relativeTargetOrigin, this.layout.layoutBox, m.layout.layoutBox), H(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = j(), this.targetWithTransforms = j()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), gu(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : H(this.target, this.layout.layoutBox), Fr(this.target, this.targetDelta)) : H(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
          this.attemptToResolveRelativeTarget = !1;
          const m = this.getClosestProjectingParent();
          m && !!m.resumingFrom == !!this.resumingFrom && !m.options.layoutScroll && m.target && this.animationProgress !== 1 ? (this.relativeParent = m, this.forceRelativeParentToResolveTarget(), this.relativeTarget = j(), this.relativeTargetOrigin = j(), Xt(this.relativeTargetOrigin, this.target, m.target), H(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || nn(this.parent.latestValues) || Br(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var r;
      const a = this.getLead(), l = !!this.resumingFrom || this !== a;
      let u = !0;
      if ((this.isProjectionDirty || !((r = this.parent) === null || r === void 0) && r.isProjectionDirty) && (u = !1), l && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = !1), this.resolvedRelativeTargetAt === N.timestamp && (u = !1), u)
        return;
      const { layout: c, layoutId: f } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(c || f))
        return;
      H(this.layoutCorrected, this.layout.layoutBox);
      const d = this.treeScale.x, m = this.treeScale.y;
      yu(this.layoutCorrected, this.treeScale, this.path, l), a.layout && !a.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (a.target = a.layout.layoutBox, a.targetWithTransforms = j());
      const { target: p } = a;
      if (!p) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (ni(this.prevProjectionDelta.x, this.projectionDelta.x), ni(this.prevProjectionDelta.y, this.projectionDelta.y)), Ht(this.projectionDelta, this.layoutCorrected, p, this.latestValues), (this.treeScale.x !== d || this.treeScale.y !== m || !ci(this.projectionDelta.x, this.prevProjectionDelta.x) || !ci(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", p));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(r = !0) {
      var a;
      if ((a = this.options.visualElement) === null || a === void 0 || a.scheduleRender(), r) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = Ct(), this.projectionDelta = Ct(), this.projectionDeltaWithTransform = Ct();
    }
    setAnimationOrigin(r, a = !1) {
      const l = this.snapshot, u = l ? l.latestValues : {}, c = { ...this.latestValues }, f = Ct();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
      const d = j(), m = l ? l.source : void 0, p = this.layout ? this.layout.source : void 0, g = m !== p, v = this.getStack(), y = !v || v.members.length <= 1, b = !!(g && !y && this.options.crossfade === !0 && !this.path.some(fc));
      this.animationProgress = 0;
      let P;
      this.mixTargetDelta = (C) => {
        const S = C / 1e3;
        mi(f.x, r.x, S), mi(f.y, r.y, S), this.setTargetDelta(f), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Xt(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox), cc(this.relativeTarget, this.relativeTargetOrigin, d, S), P && Hu(this.relativeTarget, P) && (this.isProjectionDirty = !1), P || (P = j()), H(P, this.relativeTarget)), g && (this.animationValues = c, $u(c, u, this.latestValues, S, b, y)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = S;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(r) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (ct(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = R.update(() => {
        ye.hasAnimatedSinceResize = !0, this.currentAnimation = Bu(0, fi, {
          ...r,
          onUpdate: (a) => {
            this.mixTargetDelta(a), r.onUpdate && r.onUpdate(a);
          },
          onStop: () => {
          },
          onComplete: () => {
            r.onComplete && r.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const r = this.getStack();
      r && r.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(fi), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const r = this.getLead();
      let { targetWithTransforms: a, target: l, layout: u, latestValues: c } = r;
      if (!(!a || !l || !u)) {
        if (this !== r && this.layout && u && Hr(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
          l = this.target || j();
          const f = Y(this.layout.layoutBox.x);
          l.x.min = r.target.x.min, l.x.max = l.x.min + f;
          const d = Y(this.layout.layoutBox.y);
          l.y.min = r.target.y.min, l.y.max = l.y.min + d;
        }
        H(a, l), Rt(a, c), Ht(this.projectionDeltaWithTransform, this.layoutCorrected, a, c);
      }
    }
    registerSharedNode(r, a) {
      this.sharedNodes.has(r) || this.sharedNodes.set(r, new Xu()), this.sharedNodes.get(r).add(a);
      const u = a.options.initialPromotionConfig;
      a.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(a) : void 0
      });
    }
    isLead() {
      const r = this.getStack();
      return r ? r.lead === this : !0;
    }
    getLead() {
      var r;
      const { layoutId: a } = this.options;
      return a ? ((r = this.getStack()) === null || r === void 0 ? void 0 : r.lead) || this : this;
    }
    getPrevLead() {
      var r;
      const { layoutId: a } = this.options;
      return a ? (r = this.getStack()) === null || r === void 0 ? void 0 : r.prevLead : void 0;
    }
    getStack() {
      const { layoutId: r } = this.options;
      if (r)
        return this.root.sharedNodes.get(r);
    }
    promote({ needsReset: r, transition: a, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      u && u.promote(this, l), r && (this.projectionDelta = void 0, this.needsReset = !0), a && this.setOptions({ transition: a });
    }
    relegate() {
      const r = this.getStack();
      return r ? r.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: r } = this.options;
      if (!r)
        return;
      let a = !1;
      const { latestValues: l } = r;
      if ((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) && (a = !0), !a)
        return;
      const u = {};
      l.z && $e("z", r, u, this.animationValues);
      for (let c = 0; c < Ue.length; c++)
        $e(`rotate${Ue[c]}`, r, u, this.animationValues), $e(`skew${Ue[c]}`, r, u, this.animationValues);
      r.render();
      for (const c in u)
        r.setStaticValue(c, u[c]), this.animationValues && (this.animationValues[c] = u[c]);
      r.scheduleRender();
    }
    getProjectionStyles(r) {
      var a, l;
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible)
        return Zu;
      const u = {
        visibility: ""
      }, c = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = !1, u.opacity = "", u.pointerEvents = pe(r == null ? void 0 : r.pointerEvents) || "", u.transform = c ? c(this.latestValues, "") : "none", u;
      const f = this.getLead();
      if (!this.projectionDelta || !this.layout || !f.target) {
        const g = {};
        return this.options.layoutId && (g.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, g.pointerEvents = pe(r == null ? void 0 : r.pointerEvents) || ""), this.hasProjected && !gt(this.latestValues) && (g.transform = c ? c({}, "") : "none", this.hasProjected = !1), g;
      }
      const d = f.animationValues || f.latestValues;
      this.applyTransformsToTarget(), u.transform = qu(this.projectionDeltaWithTransform, this.treeScale, d), c && (u.transform = c(d, u.transform));
      const { x: m, y: p } = this.projectionDelta;
      u.transformOrigin = `${m.origin * 100}% ${p.origin * 100}% 0`, f.animationValues ? u.opacity = f === this ? (l = (a = d.opacity) !== null && a !== void 0 ? a : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : d.opacityExit : u.opacity = f === this ? d.opacity !== void 0 ? d.opacity : "" : d.opacityExit !== void 0 ? d.opacityExit : 0;
      for (const g in Jt) {
        if (d[g] === void 0)
          continue;
        const { correct: v, applyTo: y, isCSSVariable: b } = Jt[g], P = u.transform === "none" ? d[g] : v(d[g], f);
        if (y) {
          const C = y.length;
          for (let S = 0; S < C; S++)
            u[y[S]] = P;
        } else
          b ? this.options.visualElement.renderState.vars[g] = P : u[g] = P;
      }
      return this.options.layoutId && (u.pointerEvents = f === this ? pe(r == null ? void 0 : r.pointerEvents) || "" : "none"), u;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((r) => {
        var a;
        return (a = r.currentAnimation) === null || a === void 0 ? void 0 : a.stop();
      }), this.root.nodes.forEach(hi), this.root.sharedNodes.clear();
    }
  };
}
function Qu(t) {
  t.updateLayout();
}
function tc(t) {
  var e;
  const n = ((e = t.resumeFrom) === null || e === void 0 ? void 0 : e.snapshot) || t.snapshot;
  if (t.isLead() && t.layout && n && t.hasListeners("didUpdate")) {
    const { layoutBox: s, measuredBox: i } = t.layout, { animationType: o } = t.options, r = n.source !== t.layout.source;
    o === "size" ? X((f) => {
      const d = r ? n.measuredBox[f] : n.layoutBox[f], m = Y(d);
      d.min = s[f].min, d.max = d.min + m;
    }) : Hr(o, n.layoutBox, s) && X((f) => {
      const d = r ? n.measuredBox[f] : n.layoutBox[f], m = Y(s[f]);
      d.max = d.min + m, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[f].max = t.relativeTarget[f].min + m);
    });
    const a = Ct();
    Ht(a, s, n.layoutBox);
    const l = Ct();
    r ? Ht(l, t.applyTransform(i, !0), n.measuredBox) : Ht(l, s, n.layoutBox);
    const u = !Wr(a);
    let c = !1;
    if (!t.resumeFrom) {
      const f = t.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        const { snapshot: d, layout: m } = f;
        if (d && m) {
          const p = j();
          Xt(p, n.layoutBox, d.layoutBox);
          const g = j();
          Xt(g, s, m.layoutBox), Gr(p, g) || (c = !0), f.options.layoutRoot && (t.relativeTarget = g, t.relativeTargetOrigin = p, t.relativeParent = f);
        }
      }
    }
    t.notifyListeners("didUpdate", {
      layout: s,
      snapshot: n,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: u,
      hasRelativeLayoutChanged: c
    });
  } else if (t.isLead()) {
    const { onExitComplete: s } = t.options;
    s && s();
  }
  t.options.transition = void 0;
}
function ec(t) {
  t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty));
}
function nc(t) {
  t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1;
}
function sc(t) {
  t.clearSnapshot();
}
function hi(t) {
  t.clearMeasurements();
}
function ic(t) {
  t.isLayoutDirty = !1;
}
function rc(t) {
  const { visualElement: e } = t.options;
  e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform();
}
function di(t) {
  t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0;
}
function oc(t) {
  t.resolveTargetDelta();
}
function ac(t) {
  t.calcProjection();
}
function lc(t) {
  t.resetSkewAndRotation();
}
function uc(t) {
  t.removeLeadSnapshot();
}
function mi(t, e, n) {
  t.translate = O(e.translate, 0, n), t.scale = O(e.scale, 1, n), t.origin = e.origin, t.originPoint = e.originPoint;
}
function pi(t, e, n, s) {
  t.min = O(e.min, n.min, s), t.max = O(e.max, n.max, s);
}
function cc(t, e, n, s) {
  pi(t.x, e.x, n.x, s), pi(t.y, e.y, n.y, s);
}
function fc(t) {
  return t.animationValues && t.animationValues.opacityExit !== void 0;
}
const hc = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, gi = (t) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t), yi = gi("applewebkit/") && !gi("chrome/") ? Math.round : z;
function vi(t) {
  t.min = yi(t.min), t.max = yi(t.max);
}
function dc(t) {
  vi(t.x), vi(t.y);
}
function Hr(t, e, n) {
  return t === "position" || t === "preserve-aspect" && !pu(ui(e), ui(n), 0.2);
}
function mc(t) {
  var e;
  return t !== t.root && ((e = t.scroll) === null || e === void 0 ? void 0 : e.wasRoot);
}
const pc = zr({
  attachResizeListener: (t, e) => se(t, "resize", e),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), Ke = {
  current: void 0
}, Xr = zr({
  measureScroll: (t) => ({
    x: t.scrollLeft,
    y: t.scrollTop
  }),
  defaultParent: () => {
    if (!Ke.current) {
      const t = new pc({});
      t.mount(window), t.setOptions({ layoutScroll: !0 }), Ke.current = t;
    }
    return Ke.current;
  },
  resetTransform: (t, e) => {
    t.style.transform = e !== void 0 ? e : "none";
  },
  checkIsScrollRoot: (t) => window.getComputedStyle(t).position === "fixed"
}), gc = {
  pan: {
    Feature: ku
  },
  drag: {
    Feature: Du,
    ProjectionNode: Xr,
    MeasureLayout: Ur
  }
};
function Ti(t, e, n) {
  const { props: s } = t;
  t.animationState && s.whileHover && t.animationState.setActive("whileHover", n === "Start");
  const i = "onHover" + n, o = s[i];
  o && R.postRender(() => o(e, ae(e)));
}
class yc extends ht {
  mount() {
    const { current: e } = this.node;
    e && (this.unmount = pa(e, (n, s) => (Ti(this.node, s, "Start"), (i) => Ti(this.node, i, "End"))));
  }
  unmount() {
  }
}
class vc extends ht {
  constructor() {
    super(...arguments), this.isActive = !1;
  }
  onFocus() {
    let e = !1;
    try {
      e = this.node.current.matches(":focus-visible");
    } catch {
      e = !0;
    }
    !e || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
  }
  mount() {
    this.unmount = oe(se(this.node.current, "focus", () => this.onFocus()), se(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function xi(t, e, n) {
  const { props: s } = t;
  if (t.current instanceof HTMLButtonElement && t.current.disabled)
    return;
  t.animationState && s.whileTap && t.animationState.setActive("whileTap", n === "Start");
  const i = "onTap" + (n === "End" ? "" : n), o = s[i];
  o && R.postRender(() => o(e, ae(e)));
}
class Tc extends ht {
  mount() {
    const { current: e } = this.node;
    e && (this.unmount = Ta(e, (n, s) => (xi(this.node, s, "Start"), (i, { success: o }) => xi(this.node, i, o ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
  }
  unmount() {
  }
}
const on = /* @__PURE__ */ new WeakMap(), We = /* @__PURE__ */ new WeakMap(), xc = (t) => {
  const e = on.get(t.target);
  e && e(t);
}, bc = (t) => {
  t.forEach(xc);
};
function Pc({ root: t, ...e }) {
  const n = t || document;
  We.has(n) || We.set(n, {});
  const s = We.get(n), i = JSON.stringify(e);
  return s[i] || (s[i] = new IntersectionObserver(bc, { root: t, ...e })), s[i];
}
function Sc(t, e, n) {
  const s = Pc(e);
  return on.set(t, n), s.observe(t), () => {
    on.delete(t), s.unobserve(t);
  };
}
const Ac = {
  some: 0,
  all: 1
};
class wc extends ht {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: e = {} } = this.node.getProps(), { root: n, margin: s, amount: i = "some", once: o } = e, r = {
      root: n ? n.current : void 0,
      rootMargin: s,
      threshold: typeof i == "number" ? i : Ac[i]
    }, a = (l) => {
      const { isIntersecting: u } = l;
      if (this.isInView === u || (this.isInView = u, o && !u && this.hasEnteredView))
        return;
      u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
      const { onViewportEnter: c, onViewportLeave: f } = this.node.getProps(), d = u ? c : f;
      d && d(l);
    };
    return Sc(this.node.current, r, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: e, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(Vc(e, n)) && this.startObserver();
  }
  unmount() {
  }
}
function Vc({ viewport: t = {} }, { viewport: e = {} } = {}) {
  return (n) => t[n] !== e[n];
}
const Ec = {
  inView: {
    Feature: wc
  },
  tap: {
    Feature: Tc
  },
  focus: {
    Feature: vc
  },
  hover: {
    Feature: yc
  }
}, Cc = {
  layout: {
    ProjectionNode: Xr,
    MeasureLayout: Ur
  }
}, an = { current: null }, qr = { current: !1 };
function Mc() {
  if (qr.current = !0, !!cn)
    if (window.matchMedia) {
      const t = window.matchMedia("(prefers-reduced-motion)"), e = () => an.current = t.matches;
      t.addListener(e), e();
    } else
      an.current = !1;
}
const Rc = [...br, U, ft], Dc = (t) => Rc.find(xr(t)), kc = /* @__PURE__ */ new WeakMap();
function Lc(t, e, n) {
  for (const s in e) {
    const i = e[s], o = n[s];
    if ($(i))
      t.addValue(s, i), process.env.NODE_ENV === "development" && Ae(i.version === "12.4.10", `Attempting to mix Motion versions ${i.version} with 12.4.10 may not work as expected.`);
    else if ($(o))
      t.addValue(s, ee(i, { owner: t }));
    else if (o !== i)
      if (t.hasValue(s)) {
        const r = t.getValue(s);
        r.liveStyle === !0 ? r.jump(i) : r.hasAnimated || r.set(i);
      } else {
        const r = t.getStaticValue(s);
        t.addValue(s, ee(r !== void 0 ? r : i, { owner: t }));
      }
  }
  for (const s in n)
    e[s] === void 0 && t.removeValue(s);
  return e;
}
const bi = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
class Oc {
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(e, n, s) {
    return {};
  }
  constructor({ parent: e, props: n, presenceContext: s, reducedMotionConfig: i, blockInitialAnimation: o, visualState: r }, a = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = In, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const m = nt.now();
      this.renderScheduledAt < m && (this.renderScheduledAt = m, R.render(this.render, !1, !0));
    };
    const { latestValues: l, renderState: u, onUpdate: c } = r;
    this.onUpdate = c, this.latestValues = l, this.baseTarget = { ...l }, this.initialValues = n.initial ? { ...l } : {}, this.renderState = u, this.parent = e, this.props = n, this.presenceContext = s, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = i, this.options = a, this.blockInitialAnimation = !!o, this.isControllingVariants = Ee(n), this.isVariantNode = Ri(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(e && e.current);
    const { willChange: f, ...d } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const m in d) {
      const p = d[m];
      l[m] !== void 0 && $(p) && p.set(l[m], !1);
    }
  }
  mount(e) {
    this.current = e, kc.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, s) => this.bindToMotionValue(s, n)), qr.current || Mc(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : an.current, process.env.NODE_ENV !== "production" && Ae(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected."), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    this.projection && this.projection.unmount(), ct(this.notifyUpdate), ct(this.render), this.valueSubscriptions.forEach((e) => e()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
    for (const e in this.events)
      this.events[e].clear();
    for (const e in this.features) {
      const n = this.features[e];
      n && (n.unmount(), n.isMounted = !1);
    }
    this.current = null;
  }
  bindToMotionValue(e, n) {
    this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();
    const s = xt.has(e);
    s && this.onBindTransform && this.onBindTransform();
    const i = n.on("change", (a) => {
      this.latestValues[e] = a, this.props.onUpdate && R.preRender(this.notifyUpdate), s && this.projection && (this.projection.isTransformDirty = !0);
    }), o = n.on("renderRequest", this.scheduleRender);
    let r;
    window.MotionCheckAppearSync && (r = window.MotionCheckAppearSync(this, e, n)), this.valueSubscriptions.set(e, () => {
      i(), o(), r && r(), n.owner && n.stop();
    });
  }
  sortNodePosition(e) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== e.type ? 0 : this.sortInstanceNodePosition(this.current, e.current);
  }
  updateFeatures() {
    let e = "animation";
    for (e in kt) {
      const n = kt[e];
      if (!n)
        continue;
      const { isEnabled: s, Feature: i } = n;
      if (!this.features[e] && i && s(this.props) && (this.features[e] = new i(this)), this.features[e]) {
        const o = this.features[e];
        o.isMounted ? o.update() : (o.mount(), o.isMounted = !0);
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : j();
  }
  getStaticValue(e) {
    return this.latestValues[e];
  }
  setStaticValue(e, n) {
    this.latestValues[e] = n;
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(e, n) {
    (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = e, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
    for (let s = 0; s < bi.length; s++) {
      const i = bi[s];
      this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
      const o = "on" + i, r = e[o];
      r && (this.propEventSubscriptions[i] = this.on(i, r));
    }
    this.prevMotionValues = Lc(this, this.scrapeMotionValuesFromProps(e, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue(), this.onUpdate && this.onUpdate(this);
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(e) {
    return this.props.variants ? this.props.variants[e] : void 0;
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(e) {
    const n = this.getClosestVariantNode();
    if (n)
      return n.variantChildren && n.variantChildren.add(e), () => n.variantChildren.delete(e);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(e, n) {
    const s = this.values.get(e);
    n !== s && (s && this.removeValue(e), this.bindToMotionValue(e, n), this.values.set(e, n), this.latestValues[e] = n.get());
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(e) {
    this.values.delete(e);
    const n = this.valueSubscriptions.get(e);
    n && (n(), this.valueSubscriptions.delete(e)), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(e) {
    return this.values.has(e);
  }
  getValue(e, n) {
    if (this.props.values && this.props.values[e])
      return this.props.values[e];
    let s = this.values.get(e);
    return s === void 0 && n !== void 0 && (s = ee(n === null ? void 0 : n, { owner: this }), this.addValue(e, s)), s;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(e, n) {
    var s;
    let i = this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : (s = this.getBaseTargetFromProps(this.props, e)) !== null && s !== void 0 ? s : this.readValueFromInstance(this.current, e, this.options);
    return i != null && (typeof i == "string" && (vr(i) || ur(i)) ? i = parseFloat(i) : !Dc(i) && ft.test(n) && (i = pr(e, n)), this.setBaseTarget(e, $(i) ? i.get() : i)), $(i) ? i.get() : i;
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(e, n) {
    this.baseTarget[e] = n;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(e) {
    var n;
    const { initial: s } = this.props;
    let i;
    if (typeof s == "string" || typeof s == "object") {
      const r = An(this.props, s, (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom);
      r && (i = r[e]);
    }
    if (s && i !== void 0)
      return i;
    const o = this.getBaseTargetFromProps(this.props, e);
    return o !== void 0 && !$(o) ? o : this.initialValues[e] !== void 0 && i === void 0 ? void 0 : this.baseTarget[e];
  }
  on(e, n) {
    return this.events[e] || (this.events[e] = new kn()), this.events[e].add(n);
  }
  notify(e, ...n) {
    this.events[e] && this.events[e].notify(...n);
  }
}
class Zr extends Oc {
  constructor() {
    super(...arguments), this.KeyframeResolver = Pr;
  }
  sortInstanceNodePosition(e, n) {
    return e.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(e, n) {
    return e.style ? e.style[n] : void 0;
  }
  removeValueFromRenderState(e, { vars: n, style: s }) {
    delete n[e], delete s[e];
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: e } = this.props;
    $(e) && (this.childSubscription = e.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
}
function jc(t) {
  return window.getComputedStyle(t);
}
class Bc extends Zr {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = Ui;
  }
  readValueFromInstance(e, n) {
    if (xt.has(n)) {
      const s = Fn(n);
      return s && s.default || 0;
    } else {
      const s = jc(e), i = (gn(n) ? s.getPropertyValue(n) : s[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(e, { transformPagePoint: n }) {
    return Ir(e, n);
  }
  build(e, n, s) {
    Tn(e, n, s.transformTemplate);
  }
  scrapeMotionValuesFromProps(e, n, s) {
    return wn(e, n, s);
  }
}
class Fc extends Zr {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = j, this.updateDimensions = () => {
      this.current && !this.renderState.dimensions && _i(this.current, this.renderState);
    };
  }
  getBaseTargetFromProps(e, n) {
    return e[n];
  }
  readValueFromInstance(e, n) {
    if (xt.has(n)) {
      const s = Fn(n);
      return s && s.default || 0;
    }
    return n = $i.has(n) ? n : mn(n), e.getAttribute(n);
  }
  scrapeMotionValuesFromProps(e, n, s) {
    return Wi(e, n, s);
  }
  onBindTransform() {
    this.current && !this.renderState.dimensions && R.postRender(this.updateDimensions);
  }
  build(e, n, s) {
    Pn(e, n, this.isSVGTag, s.transformTemplate);
  }
  renderInstance(e, n, s, i) {
    Ki(e, n, s, i);
  }
  mount(e) {
    this.isSVGTag = Sn(e.tagName), super.mount(e);
  }
}
const Ic = (t, e) => bn(t) ? new Fc(e) : new Bc(e, {
  allowProjection: t !== Si
}), Nc = /* @__PURE__ */ la({
  ...au,
  ...Ec,
  ...gc,
  ...Cc
}, Ic), _c = /* @__PURE__ */ Ao(Nc), D = {
  colors: {
    primary: "#ff3d00",
    // Rouge atomique 🔥 (Contraste AA sur fond clair, AAA sur fond foncé)
    secondary: "#0f172a",
    // Bleu très sombre (Contraste AAA sur fond clair)
    outline: "#ff9100",
    // Orange vif (Contraste AA sur fond foncé)
    textPrimary: "#ffffff",
    // Blanc (Contraste AAA sur fond foncé)
    textSecondary: "#ffd700",
    // Doré (Contraste AA sur fond foncé)
    background: "#1e293b",
    // Bleu foncé (Contraste AAA sur texte blanc)
    error: "#ff1744",
    // Rouge éclatant (Contraste AA sur fond foncé)
    warning: "#ff9800",
    // Orange percutant (Contraste AA sur fond foncé)
    success: "#00e676",
    // Vert néon (Contraste AA sur fond foncé)
    info: "#29b6f6"
    // Bleu clair (Contraste AA sur fond foncé)
  },
  darkMode: {
    primary: "#ff5722",
    // Orange atomique 💣 (Contraste AA sur fond sombre)
    secondary: "#2d3748",
    // Gris bleuté (Contraste AAA sur fond clair)
    outline: "#ffa726",
    // Orange plus doux (Contraste AA sur fond sombre)
    textPrimary: "#f9fafb",
    // Blanc cassé (Contraste AAA sur fond sombre)
    textSecondary: "#e2e8f0",
    // Gris clair (Contraste AA sur fond sombre)
    background: "#000000",
    // Full black (Contraste maximal avec tout texte clair)
    error: "#ff1744",
    // Rouge éclatant (Contraste AA sur fond sombre)
    warning: "#ffa726",
    // Orange plus doux (Contraste AA sur fond sombre)
    success: "#00e676",
    // Vert néon (Contraste AA sur fond sombre)
    info: "#1a202c"
    // Bleu nuit (Contraste AAA sur texte blanc)
  },
  borderRadius: {
    lg: "1.5rem"
  },
  boxShadow: {
    // Glow rouge
    md: "0 4px 8px rgba(255, 0, 0, 0.3)"
  },
  transition: "300ms cubic-bezier(0.4, 0, 0.2, 1)"
}, Uc = Tt(void 0);
function Jr() {
  const t = G(Uc);
  if (!t)
    throw new Error("useTheme must be used within a ThemeProvider");
  return t;
}
const Wc = ({
  variant: t = "primary",
  size: e = "md",
  type: n,
  children: s,
  onClick: i,
  disabled: o,
  className: r
}) => {
  const { isDarkMode: a } = Jr(), [l, u] = lo(), c = `rounded-lg font-medium transition-all cursor-pointer ${D.transition} ${r}`, f = {
    primary: `bg-[${D.colors.primary}] text-[${D.colors.textPrimary}] hover:bg-[${D.colors.secondary}]`,
    secondary: `bg-[${D.colors.secondary}] text-[${D.colors.textSecondary}] hover:bg-[${D.colors.secondary}`,
    outline: `border border-[${D.colors.outline}] text-[${D.colors.outline}] hover:bg-[${D.colors.secondary}`
  }, d = {
    primary: `bg-[${D.darkMode.primary}] text-[${D.darkMode.textPrimary}] hover:bg-[${D.darkMode.secondary}`,
    secondary: `bg-[${D.darkMode.secondary}] text-[${D.darkMode.textPrimary}] hover:bg-[${D.darkMode.secondary}`,
    outline: `border border-[${D.darkMode.outline}] text-[${D.darkMode.outline}] hover:bg-[${D.darkMode.secondary}`
  }, m = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-3 text-lg"
  }, p = () => i ? u(() => {
    i();
  }) : console.log("boom");
  return /* @__PURE__ */ qt.jsx(
    _c.button,
    {
      className: ho(
        c,
        a ? d[t] : f[t],
        m[e],
        (o || l) && "opacity-50"
      ),
      onClick: p,
      disabled: o || l,
      type: n,
      whileHover: { scale: 1.1 },
      whileTap: { scale: 0.9 },
      style: {
        backgroundColor: D.colors.primary,
        color: D.colors.textPrimary,
        borderRadius: D.borderRadius.lg,
        boxShadow: D.boxShadow.md,
        cursor: o || l ? "not-allowed" : "pointer"
      },
      children: l ? "Pending..." : s
    }
  );
}, Gc = ({ text: t, variant: e = "success" }) => {
  const { isDarkMode: n } = Jr();
  return /* @__PURE__ */ qt.jsx(
    "span",
    {
      className: "px-3 py-1 text-sm rounded-full",
      style: { background: n ? D.darkMode[e] : D.colors[e] },
      children: t
    }
  );
};
export {
  Gc as Badge,
  Wc as Button
};
//# sourceMappingURL=index.es.js.map
