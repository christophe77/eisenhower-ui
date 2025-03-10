import pe, { createContext as Ce, lazy as je } from "react";
var k = { exports: {} }, w = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ie;
function he() {
  if (ie) return w;
  ie = 1;
  var f = Symbol.for("react.transitional.element"), C = Symbol.for("react.fragment");
  function x(j, s, i) {
    var v = null;
    if (i !== void 0 && (v = "" + i), s.key !== void 0 && (v = "" + s.key), "key" in s) {
      i = {};
      for (var _ in s)
        _ !== "key" && (i[_] = s[_]);
    } else i = s;
    return s = i.ref, {
      $$typeof: f,
      type: j,
      key: v,
      ref: s !== void 0 ? s : null,
      props: i
    };
  }
  return w.Fragment = C, w.jsx = x, w.jsxs = x, w;
}
var p = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ce;
function ke() {
  return ce || (ce = 1, process.env.NODE_ENV !== "production" && function() {
    function f(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Re ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case P:
          return "Fragment";
        case Te:
          return "Portal";
        case F:
          return "Profiler";
        case B:
          return "StrictMode";
        case M:
          return "Suspense";
        case $:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case Z:
            return (e.displayName || "Context") + ".Provider";
          case L:
            return (e._context.displayName || "Context") + ".Consumer";
          case Y:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case W:
            return r = e.displayName || null, r !== null ? r : f(e.type) || "Memo";
          case U:
            r = e._payload, e = e._init;
            try {
              return f(e(r));
            } catch {
            }
        }
      return null;
    }
    function C(e) {
      return "" + e;
    }
    function x(e) {
      try {
        C(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var t = r.error, n = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          n
        ), C(e);
      }
    }
    function j() {
    }
    function s() {
      if (R === 0) {
        K = console.log, D = console.info, ee = console.warn, re = console.error, te = console.group, oe = console.groupCollapsed, ne = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: j,
          writable: !0
        };
        Object.defineProperties(console, {
          info: e,
          log: e,
          warn: e,
          error: e,
          group: e,
          groupCollapsed: e,
          groupEnd: e
        });
      }
      R++;
    }
    function i() {
      if (R--, R === 0) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: m({}, e, { value: K }),
          info: m({}, e, { value: D }),
          warn: m({}, e, { value: ee }),
          error: m({}, e, { value: re }),
          group: m({}, e, { value: te }),
          groupCollapsed: m({}, e, { value: oe }),
          groupEnd: m({}, e, { value: ne })
        });
      }
      0 > R && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function v(e) {
      if (J === void 0)
        try {
          throw Error();
        } catch (t) {
          var r = t.stack.trim().match(/\n( *(at )?)/);
          J = r && r[1] || "", ae = -1 < t.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < t.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + J + e + ae;
    }
    function _(e, r) {
      if (!e || q) return "";
      var t = V.get(e);
      if (t !== void 0) return t;
      q = !0, t = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var n = null;
      n = b.H, b.H = null, s();
      try {
        var u = {
          DetermineComponentFrameRoot: function() {
            try {
              if (r) {
                var d = function() {
                  throw Error();
                };
                if (Object.defineProperty(d.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(d, []);
                  } catch (E) {
                    var h = E;
                  }
                  Reflect.construct(e, [], d);
                } else {
                  try {
                    d.call();
                  } catch (E) {
                    h = E;
                  }
                  e.call(d.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (E) {
                  h = E;
                }
                (d = e()) && typeof d.catch == "function" && d.catch(function() {
                });
              }
            } catch (E) {
              if (E && h && typeof E.stack == "string")
                return [E.stack, h.stack];
            }
            return [null, null];
          }
        };
        u.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var a = Object.getOwnPropertyDescriptor(
          u.DetermineComponentFrameRoot,
          "name"
        );
        a && a.configurable && Object.defineProperty(
          u.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var o = u.DetermineComponentFrameRoot(), c = o[0], T = o[1];
        if (c && T) {
          var l = c.split(`
`), g = T.split(`
`);
          for (o = a = 0; a < l.length && !l[a].includes(
            "DetermineComponentFrameRoot"
          ); )
            a++;
          for (; o < g.length && !g[o].includes(
            "DetermineComponentFrameRoot"
          ); )
            o++;
          if (a === l.length || o === g.length)
            for (a = l.length - 1, o = g.length - 1; 1 <= a && 0 <= o && l[a] !== g[o]; )
              o--;
          for (; 1 <= a && 0 <= o; a--, o--)
            if (l[a] !== g[o]) {
              if (a !== 1 || o !== 1)
                do
                  if (a--, o--, 0 > o || l[a] !== g[o]) {
                    var y = `
` + l[a].replace(
                      " at new ",
                      " at "
                    );
                    return e.displayName && y.includes("<anonymous>") && (y = y.replace("<anonymous>", e.displayName)), typeof e == "function" && V.set(e, y), y;
                  }
                while (1 <= a && 0 <= o);
              break;
            }
        }
      } finally {
        q = !1, b.H = n, i(), Error.prepareStackTrace = t;
      }
      return l = (l = e ? e.displayName || e.name : "") ? v(l) : "", typeof e == "function" && V.set(e, l), l;
    }
    function O(e) {
      if (e == null) return "";
      if (typeof e == "function") {
        var r = e.prototype;
        return _(
          e,
          !(!r || !r.isReactComponent)
        );
      }
      if (typeof e == "string") return v(e);
      switch (e) {
        case M:
          return v("Suspense");
        case $:
          return v("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Y:
            return e = _(e.render, !1), e;
          case W:
            return O(e.type);
          case U:
            r = e._payload, e = e._init;
            try {
              return O(e(r));
            } catch {
            }
        }
      return "";
    }
    function S() {
      var e = b.A;
      return e === null ? null : e.getOwner();
    }
    function ve(e) {
      if (Q.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function de(e, r) {
      function t() {
        ue || (ue = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      t.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: t,
        configurable: !0
      });
    }
    function be() {
      var e = f(this.type);
      return le[e] || (le[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function me(e, r, t, n, u, a) {
      return t = a.ref, e = {
        $$typeof: N,
        type: e,
        key: r,
        props: a,
        _owner: u
      }, (t !== void 0 ? t : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: be
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function G(e, r, t, n, u, a) {
      if (typeof e == "string" || typeof e == "function" || e === P || e === F || e === B || e === M || e === $ || e === xe || typeof e == "object" && e !== null && (e.$$typeof === U || e.$$typeof === W || e.$$typeof === Z || e.$$typeof === L || e.$$typeof === Y || e.$$typeof === ye || e.getModuleId !== void 0)) {
        var o = r.children;
        if (o !== void 0)
          if (n)
            if (z(o)) {
              for (n = 0; n < o.length; n++)
                H(o[n], e);
              Object.freeze && Object.freeze(o);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else H(o, e);
      } else
        o = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? n = "null" : z(e) ? n = "array" : e !== void 0 && e.$$typeof === N ? (n = "<" + (f(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : n = typeof e, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          n,
          o
        );
      if (Q.call(r, "key")) {
        o = f(e);
        var c = Object.keys(r).filter(function(l) {
          return l !== "key";
        });
        n = 0 < c.length ? "{key: someKey, " + c.join(": ..., ") + ": ...}" : "{key: someKey}", se[o + n] || (c = 0 < c.length ? "{" + c.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          n,
          o,
          c,
          o
        ), se[o + n] = !0);
      }
      if (o = null, t !== void 0 && (x(t), o = "" + t), ve(r) && (x(r.key), o = "" + r.key), "key" in r) {
        t = {};
        for (var T in r)
          T !== "key" && (t[T] = r[T]);
      } else t = r;
      return o && de(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), me(e, o, a, u, S(), t);
    }
    function H(e, r) {
      if (typeof e == "object" && e && e.$$typeof !== we) {
        if (z(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            A(n) && X(n, r);
          }
        else if (A(e))
          e._store && (e._store.validated = 1);
        else if (e === null || typeof e != "object" ? t = null : (t = I && e[I] || e["@@iterator"], t = typeof t == "function" ? t : null), typeof t == "function" && t !== e.entries && (t = t.call(e), t !== e))
          for (; !(e = t.next()).done; )
            A(e.value) && X(e.value, r);
      }
    }
    function A(e) {
      return typeof e == "object" && e !== null && e.$$typeof === N;
    }
    function X(e, r) {
      if (e._store && !e._store.validated && e.key == null && (e._store.validated = 1, r = ge(r), !fe[r])) {
        fe[r] = !0;
        var t = "";
        e && e._owner != null && e._owner !== S() && (t = null, typeof e._owner.tag == "number" ? t = f(e._owner.type) : typeof e._owner.name == "string" && (t = e._owner.name), t = " It was passed a child from " + t + ".");
        var n = b.getCurrentStack;
        b.getCurrentStack = function() {
          var u = O(e.type);
          return n && (u += n() || ""), u;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          r,
          t
        ), b.getCurrentStack = n;
      }
    }
    function ge(e) {
      var r = "", t = S();
      return t && (t = f(t.type)) && (r = `

Check the render method of \`` + t + "`."), r || (e = f(e)) && (r = `

Check the top-level render call using <` + e + ">."), r;
    }
    var _e = pe, N = Symbol.for("react.transitional.element"), Te = Symbol.for("react.portal"), P = Symbol.for("react.fragment"), B = Symbol.for("react.strict_mode"), F = Symbol.for("react.profiler"), L = Symbol.for("react.consumer"), Z = Symbol.for("react.context"), Y = Symbol.for("react.forward_ref"), M = Symbol.for("react.suspense"), $ = Symbol.for("react.suspense_list"), W = Symbol.for("react.memo"), U = Symbol.for("react.lazy"), xe = Symbol.for("react.offscreen"), I = Symbol.iterator, Re = Symbol.for("react.client.reference"), b = _e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Q = Object.prototype.hasOwnProperty, m = Object.assign, ye = Symbol.for("react.client.reference"), z = Array.isArray, R = 0, K, D, ee, re, te, oe, ne;
    j.__reactDisabledLog = !0;
    var J, ae, q = !1, V = new (typeof WeakMap == "function" ? WeakMap : Map)(), we = Symbol.for("react.client.reference"), ue, le = {}, se = {}, fe = {};
    p.Fragment = P, p.jsx = function(e, r, t, n, u) {
      return G(e, r, t, !1, n, u);
    }, p.jsxs = function(e, r, t, n, u) {
      return G(e, r, t, !0, n, u);
    };
  }()), p;
}
var Ee;
function Oe() {
  return Ee || (Ee = 1, process.env.NODE_ENV === "production" ? k.exports = he() : k.exports = ke()), k.exports;
}
var Ae = Oe();
const Ne = Ce(void 0);
je(() => import("./Button-BIfXMKTg.js"));
export {
  Ne as T,
  Ae as j
};
//# sourceMappingURL=index-BuZrwCXO.js.map
