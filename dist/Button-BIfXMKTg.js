import { j as Gt, T as hr } from "./index-BuZrwCXO.js";
import { createContext as pt, useRef as _t, useContext as F, useId as fr, useEffect as ke, useCallback as Bs, useLayoutEffect as dr, useMemo as Zt, useInsertionEffect as mr, forwardRef as pr, Fragment as Fs, createElement as gr, Component as yr, useTransition as vr } from "react";
function Os(t) {
  var e, n, s = "";
  if (typeof t == "string" || typeof t == "number") s += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var i = t.length;
    for (e = 0; e < i; e++) t[e] && (n = Os(t[e])) && (s && (s += " "), s += n);
  } else for (n in t) t[n] && (s && (s += " "), s += n);
  return s;
}
function xr() {
  for (var t, e, n = 0, s = "", i = arguments.length; n < i; n++) (t = arguments[n]) && (e = Os(t)) && (s && (s += " "), s += e);
  return s;
}
const Is = pt({});
function Tr(t) {
  const e = _t(null);
  return e.current === null && (e.current = t()), e.current;
}
const Be = /* @__PURE__ */ pt(null), js = pt({
  transformPagePoint: (t) => t,
  isStatic: !1,
  reducedMotion: "never"
});
function Pr(t = !0) {
  const e = F(Be);
  if (e === null)
    return [!0, null];
  const { isPresent: n, onExitComplete: s, register: i } = e, o = fr();
  ke(() => {
    if (t)
      return i(o);
  }, [t]);
  const r = Bs(() => t && s && s(o), [o, s, t]);
  return !n && s ? [!1, r] : [!0];
}
const Fe = typeof window < "u", br = Fe ? dr : ke, j = /* @__NO_SIDE_EFFECTS__ */ (t) => t;
let gt = j, q = j;
process.env.NODE_ENV !== "production" && (gt = (t, e) => {
  !t && typeof console < "u" && console.warn(e);
}, q = (t, e) => {
  if (!t)
    throw new Error(e);
});
// @__NO_SIDE_EFFECTS__
function Oe(t) {
  let e;
  return () => (e === void 0 && (e = t()), e);
}
const ft = /* @__NO_SIDE_EFFECTS__ */ (t, e, n) => {
  const s = e - t;
  return s === 0 ? 1 : (n - t) / s;
}, K = /* @__NO_SIDE_EFFECTS__ */ (t) => t * 1e3, H = /* @__NO_SIDE_EFFECTS__ */ (t) => t / 1e3, Sr = {
  useManualTiming: !1
}, jt = [
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
], gn = {
  value: null
};
function Ar(t, e) {
  let n = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Set(), i = !1, o = !1;
  const r = /* @__PURE__ */ new WeakSet();
  let a = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, l = 0;
  function u(h) {
    r.has(h) && (c.schedule(h), t()), l++, h(a);
  }
  const c = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (h, f = !1, d = !1) => {
      const p = d && i ? n : s;
      return f && r.add(h), p.has(h) || p.add(h), h;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (h) => {
      s.delete(h), r.delete(h);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (h) => {
      if (a = h, i) {
        o = !0;
        return;
      }
      i = !0, [n, s] = [s, n], n.forEach(u), e && gn.value && gn.value.frameloop[e].push(l), l = 0, n.clear(), i = !1, o && (o = !1, c.process(h));
    }
  };
  return c;
}
const wr = 40;
function Ns(t, e) {
  let n = !1, s = !0;
  const i = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, o = () => n = !0, r = jt.reduce((g, v) => (g[v] = Ar(o, e ? v : void 0), g), {}), { read: a, resolveKeyframes: l, update: u, preRender: c, render: h, postRender: f } = r, d = () => {
    const g = performance.now();
    n = !1, i.delta = s ? 1e3 / 60 : Math.max(Math.min(g - i.timestamp, wr), 1), i.timestamp = g, i.isProcessing = !0, a.process(i), l.process(i), u.process(i), c.process(i), h.process(i), f.process(i), i.isProcessing = !1, n && e && (s = !1, t(d));
  }, m = () => {
    n = !0, s = !0, i.isProcessing || t(d);
  };
  return { schedule: jt.reduce((g, v) => {
    const x = r[v];
    return g[v] = (S, P = !1, A = !1) => (n || m(), x.schedule(S, P, A)), g;
  }, {}), cancel: (g) => {
    for (let v = 0; v < jt.length; v++)
      r[jt[v]].cancel(g);
  }, state: i, steps: r };
}
const { schedule: w, cancel: Z, state: E, steps: re } = Ns(typeof requestAnimationFrame < "u" ? requestAnimationFrame : j, !0), Us = pt({ strict: !1 }), yn = {
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
}, dt = {};
for (const t in yn)
  dt[t] = {
    isEnabled: (e) => yn[t].some((n) => !!e[n])
  };
function Vr(t) {
  for (const e in t)
    dt[e] = {
      ...dt[e],
      ...t[e]
    };
}
const Dr = /* @__PURE__ */ new Set([
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
function zt(t) {
  return t.startsWith("while") || t.startsWith("drag") && t !== "draggable" || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || Dr.has(t);
}
let _s = (t) => !zt(t);
function Cr(t) {
  t && (_s = (e) => e.startsWith("on") ? !zt(e) : t(e));
}
try {
  Cr(require("@emotion/is-prop-valid").default);
} catch {
}
function Mr(t, e, n) {
  const s = {};
  for (const i in t)
    i === "values" && typeof t.values == "object" || (_s(i) || n === !0 && zt(i) || !e && !zt(i) || // If trying to use native HTML drag events, forward drag listeners
    t.draggable && i.startsWith("onDrag")) && (s[i] = t[i]);
  return s;
}
const vn = /* @__PURE__ */ new Set();
function Jt(t, e, n) {
  t || vn.has(e) || (console.warn(e), vn.add(e));
}
function Rr(t) {
  if (typeof Proxy > "u")
    return t;
  const e = /* @__PURE__ */ new Map(), n = (...s) => (process.env.NODE_ENV !== "production" && Jt(!1, "motion() is deprecated. Use motion.create() instead."), t(...s));
  return new Proxy(n, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (s, i) => i === "create" ? t : (e.has(i) || e.set(i, t(i)), e.get(i))
  });
}
const Qt = /* @__PURE__ */ pt({});
function te(t) {
  return t !== null && typeof t == "object" && typeof t.start == "function";
}
function Dt(t) {
  return typeof t == "string" || Array.isArray(t);
}
const Ie = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], je = ["initial", ...Ie];
function ee(t) {
  return te(t.animate) || je.some((e) => Dt(t[e]));
}
function $s(t) {
  return !!(ee(t) || t.variants);
}
function Er(t, e) {
  if (ee(t)) {
    const { initial: n, animate: s } = t;
    return {
      initial: n === !1 || Dt(n) ? n : void 0,
      animate: Dt(s) ? s : void 0
    };
  }
  return t.inherit !== !1 ? e : {};
}
function Lr(t) {
  const { initial: e, animate: n } = Er(t, F(Qt));
  return Zt(() => ({ initial: e, animate: n }), [xn(e), xn(n)]);
}
function xn(t) {
  return Array.isArray(t) ? t.join(" ") : t;
}
const kr = Symbol.for("motionComponentSymbol");
function ot(t) {
  return t && typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current");
}
function Br(t, e, n) {
  return Bs(
    (s) => {
      s && t.onMount && t.onMount(s), e && (s ? e.mount(s) : e.unmount()), n && (typeof n == "function" ? n(s) : ot(n) && (n.current = s));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [e]
  );
}
const Ne = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), Fr = "framerAppearId", Ks = "data-" + Ne(Fr), { schedule: Ue } = Ns(queueMicrotask, !1), Ws = pt({});
function Or(t, e, n, s, i) {
  var o, r;
  const { visualElement: a } = F(Qt), l = F(Us), u = F(Be), c = F(js).reducedMotion, h = _t(null);
  s = s || l.renderer, !h.current && s && (h.current = s(t, {
    visualState: e,
    parent: a,
    props: n,
    presenceContext: u,
    blockInitialAnimation: u ? u.initial === !1 : !1,
    reducedMotionConfig: c
  }));
  const f = h.current, d = F(Ws);
  f && !f.projection && i && (f.type === "html" || f.type === "svg") && Ir(h.current, n, i, d);
  const m = _t(!1);
  mr(() => {
    f && m.current && f.update(n, u);
  });
  const p = n[Ks], y = _t(!!p && !(!((o = window.MotionHandoffIsComplete) === null || o === void 0) && o.call(window, p)) && ((r = window.MotionHasOptimisedAnimation) === null || r === void 0 ? void 0 : r.call(window, p)));
  return br(() => {
    f && (m.current = !0, window.MotionIsMounted = !0, f.updateFeatures(), Ue.render(f.render), y.current && f.animationState && f.animationState.animateChanges());
  }), ke(() => {
    f && (!y.current && f.animationState && f.animationState.animateChanges(), y.current && (queueMicrotask(() => {
      var g;
      (g = window.MotionHandoffMarkAsComplete) === null || g === void 0 || g.call(window, p);
    }), y.current = !1));
  }), f;
}
function Ir(t, e, n, s) {
  const { layoutId: i, layout: o, drag: r, dragConstraints: a, layoutScroll: l, layoutRoot: u } = e;
  t.projection = new n(t.latestValues, e["data-framer-portal-id"] ? void 0 : Gs(t.parent)), t.projection.setOptions({
    layoutId: i,
    layout: o,
    alwaysMeasureLayout: !!r || a && ot(a),
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
function Gs(t) {
  if (t)
    return t.options.allowProjection !== !1 ? t.projection : Gs(t.parent);
}
function jr({ preloadedFeatures: t, createVisualElement: e, useRender: n, useVisualState: s, Component: i }) {
  var o, r;
  t && Vr(t);
  function a(u, c) {
    let h;
    const f = {
      ...F(js),
      ...u,
      layoutId: Nr(u)
    }, { isStatic: d } = f, m = Lr(u), p = s(u, d);
    if (!d && Fe) {
      Ur(f, t);
      const y = _r(f);
      h = y.MeasureLayout, m.visualElement = Or(i, p, f, e, y.ProjectionNode);
    }
    return Gt.jsxs(Qt.Provider, { value: m, children: [h && m.visualElement ? Gt.jsx(h, { visualElement: m.visualElement, ...f }) : null, n(i, u, Br(p, m.visualElement, c), p, d, m.visualElement)] });
  }
  a.displayName = `motion.${typeof i == "string" ? i : `create(${(r = (o = i.displayName) !== null && o !== void 0 ? o : i.name) !== null && r !== void 0 ? r : ""})`}`;
  const l = pr(a);
  return l[kr] = i, l;
}
function Nr({ layoutId: t }) {
  const e = F(Is).id;
  return e && t !== void 0 ? e + "-" + t : t;
}
function Ur(t, e) {
  const n = F(Us).strict;
  if (process.env.NODE_ENV !== "production" && e && n) {
    const s = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
    t.ignoreStrict ? gt(!1, s) : q(!1, s);
  }
}
function _r(t) {
  const { drag: e, layout: n } = dt;
  if (!e && !n)
    return {};
  const s = { ...e, ...n };
  return {
    MeasureLayout: e != null && e.isEnabled(t) || n != null && n.isEnabled(t) ? s.MeasureLayout : void 0,
    ProjectionNode: s.ProjectionNode
  };
}
const zs = (t) => (e) => typeof e == "string" && e.startsWith(t), _e = /* @__PURE__ */ zs("--"), $r = /* @__PURE__ */ zs("var(--"), $e = (t) => $r(t) ? Kr.test(t.split("/*")[0].trim()) : !1, Kr = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, Ct = {};
function Wr(t) {
  for (const e in t)
    Ct[e] = t[e], _e(e) && (Ct[e].isCSSVariable = !0);
}
const yt = [
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
], it = new Set(yt);
function Hs(t, { layout: e, layoutId: n }) {
  return it.has(t) || t.startsWith("origin") || (e || n !== void 0) && (!!Ct[t] || t === "opacity");
}
const k = (t) => !!(t && t.getVelocity), Ys = (t, e) => e && typeof t == "number" ? e.transform(t) : t, Y = (t, e, n) => n > e ? e : n < t ? t : n, vt = {
  test: (t) => typeof t == "number",
  parse: parseFloat,
  transform: (t) => t
}, Mt = {
  ...vt,
  transform: (t) => Y(0, 1, t)
}, Nt = {
  ...vt,
  default: 1
}, Bt = (t) => ({
  test: (e) => typeof e == "string" && e.endsWith(t) && e.split(" ").length === 1,
  parse: parseFloat,
  transform: (e) => `${e}${t}`
}), X = /* @__PURE__ */ Bt("deg"), W = /* @__PURE__ */ Bt("%"), T = /* @__PURE__ */ Bt("px"), Gr = /* @__PURE__ */ Bt("vh"), zr = /* @__PURE__ */ Bt("vw"), Tn = {
  ...W,
  parse: (t) => W.parse(t) / 100,
  transform: (t) => W.transform(t * 100)
}, Hr = {
  // Border props
  borderWidth: T,
  borderTopWidth: T,
  borderRightWidth: T,
  borderBottomWidth: T,
  borderLeftWidth: T,
  borderRadius: T,
  radius: T,
  borderTopLeftRadius: T,
  borderTopRightRadius: T,
  borderBottomRightRadius: T,
  borderBottomLeftRadius: T,
  // Positioning props
  width: T,
  maxWidth: T,
  height: T,
  maxHeight: T,
  top: T,
  right: T,
  bottom: T,
  left: T,
  // Spacing props
  padding: T,
  paddingTop: T,
  paddingRight: T,
  paddingBottom: T,
  paddingLeft: T,
  margin: T,
  marginTop: T,
  marginRight: T,
  marginBottom: T,
  marginLeft: T,
  // Misc
  backgroundPositionX: T,
  backgroundPositionY: T
}, Yr = {
  rotate: X,
  rotateX: X,
  rotateY: X,
  rotateZ: X,
  scale: Nt,
  scaleX: Nt,
  scaleY: Nt,
  scaleZ: Nt,
  skew: X,
  skewX: X,
  skewY: X,
  distance: T,
  translateX: T,
  translateY: T,
  translateZ: T,
  x: T,
  y: T,
  z: T,
  perspective: T,
  transformPerspective: T,
  opacity: Mt,
  originX: Tn,
  originY: Tn,
  originZ: T
}, Pn = {
  ...vt,
  transform: Math.round
}, Ke = {
  ...Hr,
  ...Yr,
  zIndex: Pn,
  size: T,
  // SVG
  fillOpacity: Mt,
  strokeOpacity: Mt,
  numOctaves: Pn
}, Xr = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, qr = yt.length;
function Zr(t, e, n) {
  let s = "", i = !0;
  for (let o = 0; o < qr; o++) {
    const r = yt[o], a = t[r];
    if (a === void 0)
      continue;
    let l = !0;
    if (typeof a == "number" ? l = a === (r.startsWith("scale") ? 1 : 0) : l = parseFloat(a) === 0, !l || n) {
      const u = Ys(a, Ke[r]);
      if (!l) {
        i = !1;
        const c = Xr[r] || r;
        s += `${c}(${u}) `;
      }
      n && (e[r] = u);
    }
  }
  return s = s.trim(), n ? s = n(e, i ? "" : s) : i && (s = "none"), s;
}
function We(t, e, n) {
  const { style: s, vars: i, transformOrigin: o } = t;
  let r = !1, a = !1;
  for (const l in e) {
    const u = e[l];
    if (it.has(l)) {
      r = !0;
      continue;
    } else if (_e(l)) {
      i[l] = u;
      continue;
    } else {
      const c = Ys(u, Ke[l]);
      l.startsWith("origin") ? (a = !0, o[l] = c) : s[l] = c;
    }
  }
  if (e.transform || (r || n ? s.transform = Zr(e, t.transform, n) : s.transform && (s.transform = "none")), a) {
    const { originX: l = "50%", originY: u = "50%", originZ: c = 0 } = o;
    s.transformOrigin = `${l} ${u} ${c}`;
  }
}
const Ge = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function Xs(t, e, n) {
  for (const s in e)
    !k(e[s]) && !Hs(s, n) && (t[s] = e[s]);
}
function Jr({ transformTemplate: t }, e) {
  return Zt(() => {
    const n = Ge();
    return We(n, e, t), Object.assign({}, n.vars, n.style);
  }, [e]);
}
function Qr(t, e) {
  const n = t.style || {}, s = {};
  return Xs(s, n, t), Object.assign(s, Jr(t, e)), s;
}
function to(t, e) {
  const n = {}, s = Qr(t, e);
  return t.drag && t.dragListener !== !1 && (n.draggable = !1, s.userSelect = s.WebkitUserSelect = s.WebkitTouchCallout = "none", s.touchAction = t.drag === !0 ? "none" : `pan-${t.drag === "x" ? "y" : "x"}`), t.tabIndex === void 0 && (t.onTap || t.onTapStart || t.whileTap) && (n.tabIndex = 0), n.style = s, n;
}
const eo = [
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
function ze(t) {
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
      !!(eo.indexOf(t) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(t))
    )
  );
}
const no = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, so = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function io(t, e, n = 1, s = 0, i = !0) {
  t.pathLength = 1;
  const o = i ? no : so;
  t[o.offset] = T.transform(-s);
  const r = T.transform(e), a = T.transform(n);
  t[o.array] = `${r} ${a}`;
}
function bn(t, e, n) {
  return typeof t == "string" ? t : T.transform(e + n * t);
}
function ro(t, e, n) {
  const s = bn(e, t.x, t.width), i = bn(n, t.y, t.height);
  return `${s} ${i}`;
}
function He(t, {
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
}, c, h) {
  if (We(t, u, h), c) {
    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
    return;
  }
  t.attrs = t.style, t.style = {};
  const { attrs: f, style: d, dimensions: m } = t;
  f.transform && (m && (d.transform = f.transform), delete f.transform), m && (i !== void 0 || o !== void 0 || d.transform) && (d.transformOrigin = ro(m, i !== void 0 ? i : 0.5, o !== void 0 ? o : 0.5)), e !== void 0 && (f.x = e), n !== void 0 && (f.y = n), s !== void 0 && (f.scale = s), r !== void 0 && io(f, r, a, l, !1);
}
const qs = () => ({
  ...Ge(),
  attrs: {}
}), Ye = (t) => typeof t == "string" && t.toLowerCase() === "svg";
function oo(t, e, n, s) {
  const i = Zt(() => {
    const o = qs();
    return He(o, e, Ye(s), t.transformTemplate), {
      ...o.attrs,
      style: { ...o.style }
    };
  }, [e]);
  if (t.style) {
    const o = {};
    Xs(o, t.style, t), i.style = { ...o, ...i.style };
  }
  return i;
}
function ao(t = !1) {
  return (n, s, i, { latestValues: o }, r) => {
    const l = (ze(n) ? oo : to)(s, o, r, n), u = Mr(s, typeof n == "string", t), c = n !== Fs ? { ...u, ...l, ref: i } : {}, { children: h } = s, f = Zt(() => k(h) ? h.get() : h, [h]);
    return gr(n, {
      ...c,
      children: f
    });
  };
}
function Sn(t) {
  const e = [{}, {}];
  return t == null || t.values.forEach((n, s) => {
    e[0][s] = n.get(), e[1][s] = n.getVelocity();
  }), e;
}
function Xe(t, e, n, s) {
  if (typeof e == "function") {
    const [i, o] = Sn(s);
    e = e(n !== void 0 ? n : t.custom, i, o);
  }
  if (typeof e == "string" && (e = t.variants && t.variants[e]), typeof e == "function") {
    const [i, o] = Sn(s);
    e = e(n !== void 0 ? n : t.custom, i, o);
  }
  return e;
}
const ye = (t) => Array.isArray(t), lo = (t) => !!(t && typeof t == "object" && t.mix && t.toValue), uo = (t) => ye(t) ? t[t.length - 1] || 0 : t;
function $t(t) {
  const e = k(t) ? t.get() : t;
  return lo(e) ? e.toValue() : e;
}
function co({ scrapeMotionValuesFromProps: t, createRenderState: e, onUpdate: n }, s, i, o) {
  const r = {
    latestValues: ho(s, i, o, t),
    renderState: e()
  };
  return n && (r.onMount = (a) => n({ props: s, current: a, ...r }), r.onUpdate = (a) => n(a)), r;
}
const Zs = (t) => (e, n) => {
  const s = F(Qt), i = F(Be), o = () => co(t, e, s, i);
  return n ? o() : Tr(o);
};
function ho(t, e, n, s) {
  const i = {}, o = s(t, {});
  for (const f in o)
    i[f] = $t(o[f]);
  let { initial: r, animate: a } = t;
  const l = ee(t), u = $s(t);
  e && u && !l && t.inherit !== !1 && (r === void 0 && (r = e.initial), a === void 0 && (a = e.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || r === !1;
  const h = c ? a : r;
  if (h && typeof h != "boolean" && !te(h)) {
    const f = Array.isArray(h) ? h : [h];
    for (let d = 0; d < f.length; d++) {
      const m = Xe(t, f[d]);
      if (m) {
        const { transitionEnd: p, transition: y, ...g } = m;
        for (const v in g) {
          let x = g[v];
          if (Array.isArray(x)) {
            const S = c ? x.length - 1 : 0;
            x = x[S];
          }
          x !== null && (i[v] = x);
        }
        for (const v in p)
          i[v] = p[v];
      }
    }
  }
  return i;
}
function qe(t, e, n) {
  var s;
  const { style: i } = t, o = {};
  for (const r in i)
    (k(i[r]) || e.style && k(e.style[r]) || Hs(r, t) || ((s = n == null ? void 0 : n.getValue(r)) === null || s === void 0 ? void 0 : s.liveStyle) !== void 0) && (o[r] = i[r]);
  return o;
}
const fo = {
  useVisualState: Zs({
    scrapeMotionValuesFromProps: qe,
    createRenderState: Ge
  })
};
function Js(t, e) {
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
function Qs(t, { style: e, vars: n }, s, i) {
  Object.assign(t.style, e, i && i.getProjectionStyles(s));
  for (const o in n)
    t.style.setProperty(o, n[o]);
}
const ti = /* @__PURE__ */ new Set([
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
function ei(t, e, n, s) {
  Qs(t, e, void 0, s);
  for (const i in e.attrs)
    t.setAttribute(ti.has(i) ? i : Ne(i), e.attrs[i]);
}
function ni(t, e, n) {
  const s = qe(t, e, n);
  for (const i in t)
    if (k(t[i]) || k(e[i])) {
      const o = yt.indexOf(i) !== -1 ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i;
      s[o] = t[i];
    }
  return s;
}
const An = ["x", "y", "width", "height", "cx", "cy", "r"], mo = {
  useVisualState: Zs({
    scrapeMotionValuesFromProps: ni,
    createRenderState: qs,
    onUpdate: ({ props: t, prevProps: e, current: n, renderState: s, latestValues: i }) => {
      if (!n)
        return;
      let o = !!t.drag;
      if (!o) {
        for (const a in i)
          if (it.has(a)) {
            o = !0;
            break;
          }
      }
      if (!o)
        return;
      let r = !e;
      if (e)
        for (let a = 0; a < An.length; a++) {
          const l = An[a];
          t[l] !== e[l] && (r = !0);
        }
      r && w.read(() => {
        Js(n, s), w.render(() => {
          He(s, i, Ye(n.tagName), t.transformTemplate), ei(n, s);
        });
      });
    }
  })
};
function po(t, e) {
  return function(s, { forwardMotionProps: i } = { forwardMotionProps: !1 }) {
    const r = {
      ...ze(s) ? mo : fo,
      preloadedFeatures: t,
      useRender: ao(i),
      createVisualElement: e,
      Component: s
    };
    return jr(r);
  };
}
function Rt(t, e, n) {
  const s = t.getProps();
  return Xe(s, e, n !== void 0 ? n : s.custom, t);
}
const go = /* @__PURE__ */ Oe(() => window.ScrollTimeline !== void 0);
class yo {
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
      if (go() && i.attachTimeline)
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
class vo extends yo {
  then(e, n) {
    return Promise.all(this.animations).then(e).catch(n);
  }
}
function Ze(t, e) {
  return t ? t[e] || t.default || t : void 0;
}
const ve = 2e4;
function si(t) {
  let e = 0;
  const n = 50;
  let s = t.next(e);
  for (; !s.done && e < ve; )
    e += n, s = t.next(e);
  return e >= ve ? 1 / 0 : e;
}
function Je(t) {
  return typeof t == "function";
}
function wn(t, e) {
  t.timeline = e, t.onfinish = null;
}
const Qe = (t) => Array.isArray(t) && typeof t[0] == "number", xo = {
  linearEasing: void 0
};
function To(t, e) {
  const n = /* @__PURE__ */ Oe(t);
  return () => {
    var s;
    return (s = xo[e]) !== null && s !== void 0 ? s : n();
  };
}
const Ht = /* @__PURE__ */ To(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), ii = (t, e, n = 10) => {
  let s = "";
  const i = Math.max(Math.round(e / n), 2);
  for (let o = 0; o < i; o++)
    s += t(/* @__PURE__ */ ft(0, i - 1, o)) + ", ";
  return `linear(${s.substring(0, s.length - 2)})`;
};
function ri(t) {
  return !!(typeof t == "function" && Ht() || !t || typeof t == "string" && (t in xe || Ht()) || Qe(t) || Array.isArray(t) && t.every(ri));
}
const Tt = ([t, e, n, s]) => `cubic-bezier(${t}, ${e}, ${n}, ${s})`, xe = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ Tt([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ Tt([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ Tt([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ Tt([0.33, 1.53, 0.69, 0.99])
};
function oi(t, e) {
  if (t)
    return typeof t == "function" && Ht() ? ii(t, e) : Qe(t) ? Tt(t) : Array.isArray(t) ? t.map((n) => oi(n, e) || xe.easeOut) : xe[t];
}
const $ = {
  x: !1,
  y: !1
};
function ai() {
  return $.x || $.y;
}
function Po(t, e, n) {
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
function li(t, e) {
  const n = Po(t), s = new AbortController(), i = {
    passive: !0,
    ...e,
    signal: s.signal
  };
  return [n, i, () => s.abort()];
}
function Vn(t) {
  return !(t.pointerType === "touch" || ai());
}
function bo(t, e, n = {}) {
  const [s, i, o] = li(t, n), r = (a) => {
    if (!Vn(a))
      return;
    const { target: l } = a, u = e(l, a);
    if (typeof u != "function" || !l)
      return;
    const c = (h) => {
      Vn(h) && (u(h), l.removeEventListener("pointerleave", c));
    };
    l.addEventListener("pointerleave", c, i);
  };
  return s.forEach((a) => {
    a.addEventListener("pointerenter", r, i);
  }), o;
}
function bt(t, e) {
  const n = `${e}PointerCapture`;
  if (t.target instanceof Element && n in t.target && t.pointerId !== void 0)
    try {
      t.target[n](t.pointerId);
    } catch {
    }
}
const ui = (t, e) => e ? t === e ? !0 : ui(t, e.parentElement) : !1, tn = (t) => t.pointerType === "mouse" ? typeof t.button != "number" || t.button <= 0 : t.isPrimary !== !1, So = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function Ao(t) {
  return So.has(t.tagName) || t.tabIndex !== -1;
}
const Pt = /* @__PURE__ */ new WeakSet();
function Dn(t) {
  return (e) => {
    e.key === "Enter" && t(e);
  };
}
function oe(t, e) {
  t.dispatchEvent(new PointerEvent("pointer" + e, { isPrimary: !0, bubbles: !0 }));
}
const wo = (t, e) => {
  const n = t.currentTarget;
  if (!n)
    return;
  const s = Dn(() => {
    if (Pt.has(n))
      return;
    oe(n, "down");
    const i = Dn(() => {
      oe(n, "up");
    }), o = () => oe(n, "cancel");
    n.addEventListener("keyup", i, e), n.addEventListener("blur", o, e);
  });
  n.addEventListener("keydown", s, e), n.addEventListener("blur", () => n.removeEventListener("keydown", s), e);
};
function Cn(t) {
  return tn(t) && !ai();
}
function Vo(t, e, n = {}) {
  const [s, i, o] = li(t, n), r = (a) => {
    const l = a.currentTarget;
    if (!l || !Cn(a) || Pt.has(l))
      return;
    Pt.add(l), bt(a, "set");
    const u = e(l, a), c = (d, m) => {
      l.removeEventListener("pointerup", h), l.removeEventListener("pointercancel", f), bt(d, "release"), !(!Cn(d) || !Pt.has(l)) && (Pt.delete(l), typeof u == "function" && u(d, { success: m }));
    }, h = (d) => {
      (d.isTrusted ? Do(d, l instanceof Element ? l.getBoundingClientRect() : {
        left: 0,
        top: 0,
        right: window.innerWidth,
        bottom: window.innerHeight
      }) : !1) ? c(d, !1) : c(d, !(l instanceof Element) || ui(l, d.target));
    }, f = (d) => {
      c(d, !1);
    };
    l.addEventListener("pointerup", h, i), l.addEventListener("pointercancel", f, i), l.addEventListener("lostpointercapture", f, i);
  };
  return s.forEach((a) => {
    a = n.useGlobalTarget ? window : a;
    let l = !1;
    a instanceof HTMLElement && (l = !0, !Ao(a) && a.getAttribute("tabindex") === null && (a.tabIndex = 0)), a.addEventListener("pointerdown", r, i), l && a.addEventListener("focus", (u) => wo(u, i), i);
  }), o;
}
function Do(t, e) {
  return t.clientX < e.left || t.clientX > e.right || t.clientY < e.top || t.clientY > e.bottom;
}
function Co(t) {
  return t === "x" || t === "y" ? $[t] ? null : ($[t] = !0, () => {
    $[t] = !1;
  }) : $.x || $.y ? null : ($.x = $.y = !0, () => {
    $.x = $.y = !1;
  });
}
const ci = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...yt
]);
let Kt;
function Mo() {
  Kt = void 0;
}
const G = {
  now: () => (Kt === void 0 && G.set(E.isProcessing || Sr.useManualTiming ? E.timestamp : performance.now()), Kt),
  set: (t) => {
    Kt = t, queueMicrotask(Mo);
  }
};
function en(t, e) {
  t.indexOf(e) === -1 && t.push(e);
}
function nn(t, e) {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}
class sn {
  constructor() {
    this.subscriptions = [];
  }
  add(e) {
    return en(this.subscriptions, e), () => nn(this.subscriptions, e);
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
function hi(t, e) {
  return e ? t * (1e3 / e) : 0;
}
const Mn = 30, Ro = (t) => !isNaN(parseFloat(t));
class Eo {
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
      const o = G.now();
      this.updatedAt !== o && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(s), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), i && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.hasAnimated = !1, this.setCurrent(e), this.owner = n.owner;
  }
  setCurrent(e) {
    this.current = e, this.updatedAt = G.now(), this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = Ro(this.current));
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
    return process.env.NODE_ENV !== "production" && Jt(!1, 'value.onChange(callback) is deprecated. Switch to value.on("change", callback).'), this.on("change", e);
  }
  on(e, n) {
    this.events[e] || (this.events[e] = new sn());
    const s = this.events[e].add(n);
    return e === "change" ? () => {
      s(), w.read(() => {
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
    const e = G.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > Mn)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, Mn);
    return hi(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
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
function Et(t, e) {
  return new Eo(t, e);
}
function Lo(t, e, n) {
  t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, Et(n));
}
function ko(t, e) {
  const n = Rt(t, e);
  let { transitionEnd: s = {}, transition: i = {}, ...o } = n || {};
  o = { ...o, ...s };
  for (const r in o) {
    const a = uo(o[r]);
    Lo(t, r, a);
  }
}
function Bo(t) {
  return !!(k(t) && t.add);
}
function Te(t, e) {
  const n = t.getValue("willChange");
  if (Bo(n))
    return n.add(e);
}
function fi(t) {
  return t.props[Ks];
}
const di = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t, Fo = 1e-7, Oo = 12;
function Io(t, e, n, s, i) {
  let o, r, a = 0;
  do
    r = e + (n - e) / 2, o = di(r, s, i) - t, o > 0 ? n = r : e = r;
  while (Math.abs(o) > Fo && ++a < Oo);
  return r;
}
function Ft(t, e, n, s) {
  if (t === e && n === s)
    return j;
  const i = (o) => Io(o, 0, 1, t, n);
  return (o) => o === 0 || o === 1 ? o : di(i(o), e, s);
}
const mi = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2, pi = (t) => (e) => 1 - t(1 - e), gi = /* @__PURE__ */ Ft(0.33, 1.53, 0.69, 0.99), rn = /* @__PURE__ */ pi(gi), yi = /* @__PURE__ */ mi(rn), vi = (t) => (t *= 2) < 1 ? 0.5 * rn(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))), on = (t) => 1 - Math.sin(Math.acos(t)), xi = pi(on), Ti = mi(on), Pi = (t) => /^0[^.\s]+$/u.test(t);
function jo(t) {
  return typeof t == "number" ? t === 0 : t !== null ? t === "none" || t === "0" || Pi(t) : !0;
}
const St = (t) => Math.round(t * 1e5) / 1e5, an = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function No(t) {
  return t == null;
}
const Uo = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, ln = (t, e) => (n) => !!(typeof n == "string" && Uo.test(n) && n.startsWith(t) || e && !No(n) && Object.prototype.hasOwnProperty.call(n, e)), bi = (t, e, n) => (s) => {
  if (typeof s != "string")
    return s;
  const [i, o, r, a] = s.match(an);
  return {
    [t]: parseFloat(i),
    [e]: parseFloat(o),
    [n]: parseFloat(r),
    alpha: a !== void 0 ? parseFloat(a) : 1
  };
}, _o = (t) => Y(0, 255, t), ae = {
  ...vt,
  transform: (t) => Math.round(_o(t))
}, nt = {
  test: /* @__PURE__ */ ln("rgb", "red"),
  parse: /* @__PURE__ */ bi("red", "green", "blue"),
  transform: ({ red: t, green: e, blue: n, alpha: s = 1 }) => "rgba(" + ae.transform(t) + ", " + ae.transform(e) + ", " + ae.transform(n) + ", " + St(Mt.transform(s)) + ")"
};
function $o(t) {
  let e = "", n = "", s = "", i = "";
  return t.length > 5 ? (e = t.substring(1, 3), n = t.substring(3, 5), s = t.substring(5, 7), i = t.substring(7, 9)) : (e = t.substring(1, 2), n = t.substring(2, 3), s = t.substring(3, 4), i = t.substring(4, 5), e += e, n += n, s += s, i += i), {
    red: parseInt(e, 16),
    green: parseInt(n, 16),
    blue: parseInt(s, 16),
    alpha: i ? parseInt(i, 16) / 255 : 1
  };
}
const Pe = {
  test: /* @__PURE__ */ ln("#"),
  parse: $o,
  transform: nt.transform
}, at = {
  test: /* @__PURE__ */ ln("hsl", "hue"),
  parse: /* @__PURE__ */ bi("hue", "saturation", "lightness"),
  transform: ({ hue: t, saturation: e, lightness: n, alpha: s = 1 }) => "hsla(" + Math.round(t) + ", " + W.transform(St(e)) + ", " + W.transform(St(n)) + ", " + St(Mt.transform(s)) + ")"
}, L = {
  test: (t) => nt.test(t) || Pe.test(t) || at.test(t),
  parse: (t) => nt.test(t) ? nt.parse(t) : at.test(t) ? at.parse(t) : Pe.parse(t),
  transform: (t) => typeof t == "string" ? t : t.hasOwnProperty("red") ? nt.transform(t) : at.transform(t)
}, Ko = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function Wo(t) {
  var e, n;
  return isNaN(t) && typeof t == "string" && (((e = t.match(an)) === null || e === void 0 ? void 0 : e.length) || 0) + (((n = t.match(Ko)) === null || n === void 0 ? void 0 : n.length) || 0) > 0;
}
const Si = "number", Ai = "color", Go = "var", zo = "var(", Rn = "${}", Ho = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Lt(t) {
  const e = t.toString(), n = [], s = {
    color: [],
    number: [],
    var: []
  }, i = [];
  let o = 0;
  const a = e.replace(Ho, (l) => (L.test(l) ? (s.color.push(o), i.push(Ai), n.push(L.parse(l))) : l.startsWith(zo) ? (s.var.push(o), i.push(Go), n.push(l)) : (s.number.push(o), i.push(Si), n.push(parseFloat(l))), ++o, Rn)).split(Rn);
  return { values: n, split: a, indexes: s, types: i };
}
function wi(t) {
  return Lt(t).values;
}
function Vi(t) {
  const { split: e, types: n } = Lt(t), s = e.length;
  return (i) => {
    let o = "";
    for (let r = 0; r < s; r++)
      if (o += e[r], i[r] !== void 0) {
        const a = n[r];
        a === Si ? o += St(i[r]) : a === Ai ? o += L.transform(i[r]) : o += i[r];
      }
    return o;
  };
}
const Yo = (t) => typeof t == "number" ? 0 : t;
function Xo(t) {
  const e = wi(t);
  return Vi(t)(e.map(Yo));
}
const J = {
  test: Wo,
  parse: wi,
  createTransformer: Vi,
  getAnimatableNone: Xo
}, qo = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function Zo(t) {
  const [e, n] = t.slice(0, -1).split("(");
  if (e === "drop-shadow")
    return t;
  const [s] = n.match(an) || [];
  if (!s)
    return t;
  const i = n.replace(s, "");
  let o = qo.has(e) ? 1 : 0;
  return s !== n && (o *= 100), e + "(" + o + i + ")";
}
const Jo = /\b([a-z-]*)\(.*?\)/gu, be = {
  ...J,
  getAnimatableNone: (t) => {
    const e = t.match(Jo);
    return e ? e.map(Zo).join(" ") : t;
  }
}, Qo = {
  ...Ke,
  // Color props
  color: L,
  backgroundColor: L,
  outlineColor: L,
  fill: L,
  stroke: L,
  // Border props
  borderColor: L,
  borderTopColor: L,
  borderRightColor: L,
  borderBottomColor: L,
  borderLeftColor: L,
  filter: be,
  WebkitFilter: be
}, un = (t) => Qo[t];
function Di(t, e) {
  let n = un(t);
  return n !== be && (n = J), n.getAnimatableNone ? n.getAnimatableNone(e) : void 0;
}
const ta = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function ea(t, e, n) {
  let s = 0, i;
  for (; s < t.length && !i; ) {
    const o = t[s];
    typeof o == "string" && !ta.has(o) && Lt(o).values.length && (i = t[s]), s++;
  }
  if (i && n)
    for (const o of e)
      t[o] = Di(n, i);
}
const En = (t) => t === vt || t === T, Ln = (t, e) => parseFloat(t.split(", ")[e]), kn = (t, e) => (n, { transform: s }) => {
  if (s === "none" || !s)
    return 0;
  const i = s.match(/^matrix3d\((.+)\)$/u);
  if (i)
    return Ln(i[1], e);
  {
    const o = s.match(/^matrix\((.+)\)$/u);
    return o ? Ln(o[1], t) : 0;
  }
}, na = /* @__PURE__ */ new Set(["x", "y", "z"]), sa = yt.filter((t) => !na.has(t));
function ia(t) {
  const e = [];
  return sa.forEach((n) => {
    const s = t.getValue(n);
    s !== void 0 && (e.push([n, s.get()]), s.set(n.startsWith("scale") ? 1 : 0));
  }), e;
}
const mt = {
  // Dimensions
  width: ({ x: t }, { paddingLeft: e = "0", paddingRight: n = "0" }) => t.max - t.min - parseFloat(e) - parseFloat(n),
  height: ({ y: t }, { paddingTop: e = "0", paddingBottom: n = "0" }) => t.max - t.min - parseFloat(e) - parseFloat(n),
  top: (t, { top: e }) => parseFloat(e),
  left: (t, { left: e }) => parseFloat(e),
  bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
  right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
  // Transform
  x: kn(4, 13),
  y: kn(5, 14)
};
mt.translateX = mt.x;
mt.translateY = mt.y;
const st = /* @__PURE__ */ new Set();
let Se = !1, Ae = !1;
function Ci() {
  if (Ae) {
    const t = Array.from(st).filter((s) => s.needsMeasurement), e = new Set(t.map((s) => s.element)), n = /* @__PURE__ */ new Map();
    e.forEach((s) => {
      const i = ia(s);
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
  Ae = !1, Se = !1, st.forEach((t) => t.complete()), st.clear();
}
function Mi() {
  st.forEach((t) => {
    t.readKeyframes(), t.needsMeasurement && (Ae = !0);
  });
}
function ra() {
  Mi(), Ci();
}
class cn {
  constructor(e, n, s, i, o, r = !1) {
    this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...e], this.onComplete = n, this.name = s, this.motionValue = i, this.element = o, this.isAsync = r;
  }
  scheduleResolve() {
    this.isScheduled = !0, this.isAsync ? (st.add(this), Se || (Se = !0, w.read(Mi), w.resolveKeyframes(Ci))) : (this.readKeyframes(), this.complete());
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
    this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), st.delete(this);
  }
  cancel() {
    this.isComplete || (this.isScheduled = !1, st.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const Ri = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t), oa = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function aa(t) {
  const e = oa.exec(t);
  if (!e)
    return [,];
  const [, n, s, i] = e;
  return [`--${n ?? s}`, i];
}
const la = 4;
function Ei(t, e, n = 1) {
  q(n <= la, `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`);
  const [s, i] = aa(t);
  if (!s)
    return;
  const o = window.getComputedStyle(e).getPropertyValue(s);
  if (o) {
    const r = o.trim();
    return Ri(r) ? parseFloat(r) : r;
  }
  return $e(i) ? Ei(i, e, n + 1) : i;
}
const Li = (t) => (e) => e.test(t), ua = {
  test: (t) => t === "auto",
  parse: (t) => t
}, ki = [vt, T, W, X, zr, Gr, ua], Bn = (t) => ki.find(Li(t));
class Bi extends cn {
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
      if (typeof u == "string" && (u = u.trim(), $e(u))) {
        const c = Ei(u, n.current);
        c !== void 0 && (e[l] = c), l === e.length - 1 && (this.finalKeyframe = u);
      }
    }
    if (this.resolveNoneKeyframes(), !ci.has(s) || e.length !== 2)
      return;
    const [i, o] = e, r = Bn(i), a = Bn(o);
    if (r !== a)
      if (En(r) && En(a))
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
      jo(e[i]) && s.push(i);
    s.length && ea(e, s, n);
  }
  measureInitialState() {
    const { element: e, unresolvedKeyframes: n, name: s } = this;
    if (!e || !e.current)
      return;
    s === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = mt[s](e.measureViewportBox(), window.getComputedStyle(e.current)), n[0] = this.measuredOrigin;
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
    i[r] = mt[s](n.measureViewportBox(), window.getComputedStyle(n.current)), a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a), !((e = this.removedTransforms) === null || e === void 0) && e.length && this.removedTransforms.forEach(([l, u]) => {
      n.getValue(l).set(u);
    }), this.resolveNoneKeyframes();
  }
}
const Fn = (t, e) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && // It's animatable if we have a string
(J.test(t) || t === "0") && // And it contains numbers and/or colors
!t.startsWith("url("));
function ca(t) {
  const e = t[0];
  if (t.length === 1)
    return !0;
  for (let n = 0; n < t.length; n++)
    if (t[n] !== e)
      return !0;
}
function ha(t, e, n, s) {
  const i = t[0];
  if (i === null)
    return !1;
  if (e === "display" || e === "visibility")
    return !0;
  const o = t[t.length - 1], r = Fn(i, e), a = Fn(o, e);
  return gt(r === a, `You are trying to animate ${e} from "${i}" to "${o}". ${i} is not an animatable value - to enable this animation set ${i} to a value animatable to ${o} via the \`style\` property.`), !r || !a ? !1 : ca(t) || (n === "spring" || Je(n)) && s;
}
const fa = (t) => t !== null;
function ne(t, { repeat: e, repeatType: n = "loop" }, s) {
  const i = t.filter(fa), o = e && n !== "loop" && e % 2 === 1 ? 0 : i.length - 1;
  return !o || s === void 0 ? i[o] : s;
}
const da = 40;
class Fi {
  constructor({ autoplay: e = !0, delay: n = 0, type: s = "keyframes", repeat: i = 0, repeatDelay: o = 0, repeatType: r = "loop", ...a }) {
    this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = G.now(), this.options = {
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
    return this.resolvedAt ? this.resolvedAt - this.createdAt > da ? this.resolvedAt : this.createdAt : this.createdAt;
  }
  /**
   * A getter for resolved data. If keyframes are not yet resolved, accessing
   * this.resolved will synchronously flush all pending keyframe resolvers.
   * This is a deoptimisation, but at its worst still batches read/writes.
   */
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && ra(), this._resolved;
  }
  /**
   * A method to be called when the keyframes resolver completes. This method
   * will check if its possible to run the animation and, if not, skip it.
   * Otherwise, it will call initPlayback on the implementing class.
   */
  onKeyframesResolved(e, n) {
    this.resolvedAt = G.now(), this.hasAttemptedResolve = !0;
    const { name: s, type: i, velocity: o, delay: r, onComplete: a, onUpdate: l, isGenerator: u } = this.options;
    if (!u && !ha(e, s, i, o))
      if (r)
        this.options.duration = 0;
      else {
        l && l(ne(e, this.options, n)), a && a(), this.resolveFinishedPromise();
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
const C = (t, e, n) => t + (e - t) * n;
function le(t, e, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + (e - t) * 6 * n : n < 1 / 2 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t;
}
function ma({ hue: t, saturation: e, lightness: n, alpha: s }) {
  t /= 360, e /= 100, n /= 100;
  let i = 0, o = 0, r = 0;
  if (!e)
    i = o = r = n;
  else {
    const a = n < 0.5 ? n * (1 + e) : n + e - n * e, l = 2 * n - a;
    i = le(l, a, t + 1 / 3), o = le(l, a, t), r = le(l, a, t - 1 / 3);
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(o * 255),
    blue: Math.round(r * 255),
    alpha: s
  };
}
function Yt(t, e) {
  return (n) => n > 0 ? e : t;
}
const ue = (t, e, n) => {
  const s = t * t, i = n * (e * e - s) + s;
  return i < 0 ? 0 : Math.sqrt(i);
}, pa = [Pe, nt, at], ga = (t) => pa.find((e) => e.test(t));
function On(t) {
  const e = ga(t);
  if (gt(!!e, `'${t}' is not an animatable color. Use the equivalent color code instead.`), !e)
    return !1;
  let n = e.parse(t);
  return e === at && (n = ma(n)), n;
}
const In = (t, e) => {
  const n = On(t), s = On(e);
  if (!n || !s)
    return Yt(t, e);
  const i = { ...n };
  return (o) => (i.red = ue(n.red, s.red, o), i.green = ue(n.green, s.green, o), i.blue = ue(n.blue, s.blue, o), i.alpha = C(n.alpha, s.alpha, o), nt.transform(i));
}, ya = (t, e) => (n) => e(t(n)), Ot = (...t) => t.reduce(ya), we = /* @__PURE__ */ new Set(["none", "hidden"]);
function va(t, e) {
  return we.has(t) ? (n) => n <= 0 ? t : e : (n) => n >= 1 ? e : t;
}
function xa(t, e) {
  return (n) => C(t, e, n);
}
function hn(t) {
  return typeof t == "number" ? xa : typeof t == "string" ? $e(t) ? Yt : L.test(t) ? In : ba : Array.isArray(t) ? Oi : typeof t == "object" ? L.test(t) ? In : Ta : Yt;
}
function Oi(t, e) {
  const n = [...t], s = n.length, i = t.map((o, r) => hn(o)(o, e[r]));
  return (o) => {
    for (let r = 0; r < s; r++)
      n[r] = i[r](o);
    return n;
  };
}
function Ta(t, e) {
  const n = { ...t, ...e }, s = {};
  for (const i in n)
    t[i] !== void 0 && e[i] !== void 0 && (s[i] = hn(t[i])(t[i], e[i]));
  return (i) => {
    for (const o in s)
      n[o] = s[o](i);
    return n;
  };
}
function Pa(t, e) {
  var n;
  const s = [], i = { color: 0, var: 0, number: 0 };
  for (let o = 0; o < e.values.length; o++) {
    const r = e.types[o], a = t.indexes[r][i[r]], l = (n = t.values[a]) !== null && n !== void 0 ? n : 0;
    s[o] = l, i[r]++;
  }
  return s;
}
const ba = (t, e) => {
  const n = J.createTransformer(e), s = Lt(t), i = Lt(e);
  return s.indexes.var.length === i.indexes.var.length && s.indexes.color.length === i.indexes.color.length && s.indexes.number.length >= i.indexes.number.length ? we.has(t) && !i.values.length || we.has(e) && !s.values.length ? va(t, e) : Ot(Oi(Pa(s, i), i.values), n) : (gt(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), Yt(t, e));
};
function Ii(t, e, n) {
  return typeof t == "number" && typeof e == "number" && typeof n == "number" ? C(t, e, n) : hn(t)(t, e);
}
const Sa = 5;
function ji(t, e, n) {
  const s = Math.max(e - Sa, 0);
  return hi(n - t(s), e - s);
}
const D = {
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
}, jn = 1e-3;
function Aa({ duration: t = D.duration, bounce: e = D.bounce, velocity: n = D.velocity, mass: s = D.mass }) {
  let i, o;
  gt(t <= /* @__PURE__ */ K(D.maxDuration), "Spring duration must be 10 seconds or less");
  let r = 1 - e;
  r = Y(D.minDamping, D.maxDamping, r), t = Y(D.minDuration, D.maxDuration, /* @__PURE__ */ H(t)), r < 1 ? (i = (u) => {
    const c = u * r, h = c * t, f = c - n, d = Ve(u, r), m = Math.exp(-h);
    return jn - f / d * m;
  }, o = (u) => {
    const h = u * r * t, f = h * n + n, d = Math.pow(r, 2) * Math.pow(u, 2) * t, m = Math.exp(-h), p = Ve(Math.pow(u, 2), r);
    return (-i(u) + jn > 0 ? -1 : 1) * ((f - d) * m) / p;
  }) : (i = (u) => {
    const c = Math.exp(-u * t), h = (u - n) * t + 1;
    return -1e-3 + c * h;
  }, o = (u) => {
    const c = Math.exp(-u * t), h = (n - u) * (t * t);
    return c * h;
  });
  const a = 5 / t, l = Va(i, o, a);
  if (t = /* @__PURE__ */ K(t), isNaN(l))
    return {
      stiffness: D.stiffness,
      damping: D.damping,
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
const wa = 12;
function Va(t, e, n) {
  let s = n;
  for (let i = 1; i < wa; i++)
    s = s - t(s) / e(s);
  return s;
}
function Ve(t, e) {
  return t * Math.sqrt(1 - e * e);
}
const Da = ["duration", "bounce"], Ca = ["stiffness", "damping", "mass"];
function Nn(t, e) {
  return e.some((n) => t[n] !== void 0);
}
function Ma(t) {
  let e = {
    velocity: D.velocity,
    stiffness: D.stiffness,
    damping: D.damping,
    mass: D.mass,
    isResolvedFromDuration: !1,
    ...t
  };
  if (!Nn(t, Ca) && Nn(t, Da))
    if (t.visualDuration) {
      const n = t.visualDuration, s = 2 * Math.PI / (n * 1.2), i = s * s, o = 2 * Y(0.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(i);
      e = {
        ...e,
        mass: D.mass,
        stiffness: i,
        damping: o
      };
    } else {
      const n = Aa(t);
      e = {
        ...e,
        ...n,
        mass: D.mass
      }, e.isResolvedFromDuration = !0;
    }
  return e;
}
function Ni(t = D.visualDuration, e = D.bounce) {
  const n = typeof t != "object" ? {
    visualDuration: t,
    keyframes: [0, 1],
    bounce: e
  } : t;
  let { restSpeed: s, restDelta: i } = n;
  const o = n.keyframes[0], r = n.keyframes[n.keyframes.length - 1], a = { done: !1, value: o }, { stiffness: l, damping: u, mass: c, duration: h, velocity: f, isResolvedFromDuration: d } = Ma({
    ...n,
    velocity: -/* @__PURE__ */ H(n.velocity || 0)
  }), m = f || 0, p = u / (2 * Math.sqrt(l * c)), y = r - o, g = /* @__PURE__ */ H(Math.sqrt(l / c)), v = Math.abs(y) < 5;
  s || (s = v ? D.restSpeed.granular : D.restSpeed.default), i || (i = v ? D.restDelta.granular : D.restDelta.default);
  let x;
  if (p < 1) {
    const P = Ve(g, p);
    x = (A) => {
      const R = Math.exp(-p * g * A);
      return r - R * ((m + p * g * y) / P * Math.sin(P * A) + y * Math.cos(P * A));
    };
  } else if (p === 1)
    x = (P) => r - Math.exp(-g * P) * (y + (m + g * y) * P);
  else {
    const P = g * Math.sqrt(p * p - 1);
    x = (A) => {
      const R = Math.exp(-p * g * A), b = Math.min(P * A, 300);
      return r - R * ((m + p * g * y) * Math.sinh(b) + P * y * Math.cosh(b)) / P;
    };
  }
  const S = {
    calculatedDuration: d && h || null,
    next: (P) => {
      const A = x(P);
      if (d)
        a.done = P >= h;
      else {
        let R = 0;
        p < 1 && (R = P === 0 ? /* @__PURE__ */ K(m) : ji(x, P, A));
        const b = Math.abs(R) <= s, I = Math.abs(r - A) <= i;
        a.done = b && I;
      }
      return a.value = a.done ? r : A, a;
    },
    toString: () => {
      const P = Math.min(si(S), ve), A = ii((R) => S.next(P * R).value, P, 30);
      return P + "ms " + A;
    }
  };
  return S;
}
function Un({ keyframes: t, velocity: e = 0, power: n = 0.8, timeConstant: s = 325, bounceDamping: i = 10, bounceStiffness: o = 500, modifyTarget: r, min: a, max: l, restDelta: u = 0.5, restSpeed: c }) {
  const h = t[0], f = {
    done: !1,
    value: h
  }, d = (b) => a !== void 0 && b < a || l !== void 0 && b > l, m = (b) => a === void 0 ? l : l === void 0 || Math.abs(a - b) < Math.abs(l - b) ? a : l;
  let p = n * e;
  const y = h + p, g = r === void 0 ? y : r(y);
  g !== y && (p = g - h);
  const v = (b) => -p * Math.exp(-b / s), x = (b) => g + v(b), S = (b) => {
    const I = v(b), N = x(b);
    f.done = Math.abs(I) <= u, f.value = f.done ? g : N;
  };
  let P, A;
  const R = (b) => {
    d(f.value) && (P = b, A = Ni({
      keyframes: [f.value, m(f.value)],
      velocity: ji(x, b, f.value),
      // TODO: This should be passing * 1000
      damping: i,
      stiffness: o,
      restDelta: u,
      restSpeed: c
    }));
  };
  return R(0), {
    calculatedDuration: null,
    next: (b) => {
      let I = !1;
      return !A && P === void 0 && (I = !0, S(b), R(b)), P !== void 0 && b >= P ? A.next(b - P) : (!I && S(b), f);
    }
  };
}
const Ra = /* @__PURE__ */ Ft(0.42, 0, 1, 1), Ea = /* @__PURE__ */ Ft(0, 0, 0.58, 1), Ui = /* @__PURE__ */ Ft(0.42, 0, 0.58, 1), La = (t) => Array.isArray(t) && typeof t[0] != "number", _n = {
  linear: j,
  easeIn: Ra,
  easeInOut: Ui,
  easeOut: Ea,
  circIn: on,
  circInOut: Ti,
  circOut: xi,
  backIn: rn,
  backInOut: yi,
  backOut: gi,
  anticipate: vi
}, $n = (t) => {
  if (Qe(t)) {
    q(t.length === 4, "Cubic bezier arrays must contain four numerical values.");
    const [e, n, s, i] = t;
    return Ft(e, n, s, i);
  } else if (typeof t == "string")
    return q(_n[t] !== void 0, `Invalid easing type '${t}'`), _n[t];
  return t;
};
function ka(t, e, n) {
  const s = [], i = n || Ii, o = t.length - 1;
  for (let r = 0; r < o; r++) {
    let a = i(t[r], t[r + 1]);
    if (e) {
      const l = Array.isArray(e) ? e[r] || j : e;
      a = Ot(l, a);
    }
    s.push(a);
  }
  return s;
}
function Ba(t, e, { clamp: n = !0, ease: s, mixer: i } = {}) {
  const o = t.length;
  if (q(o === e.length, "Both input and output ranges must be the same length"), o === 1)
    return () => e[0];
  if (o === 2 && e[0] === e[1])
    return () => e[1];
  const r = t[0] === t[1];
  t[0] > t[o - 1] && (t = [...t].reverse(), e = [...e].reverse());
  const a = ka(e, s, i), l = a.length, u = (c) => {
    if (r && c < t[0])
      return e[0];
    let h = 0;
    if (l > 1)
      for (; h < t.length - 2 && !(c < t[h + 1]); h++)
        ;
    const f = /* @__PURE__ */ ft(t[h], t[h + 1], c);
    return a[h](f);
  };
  return n ? (c) => u(Y(t[0], t[o - 1], c)) : u;
}
function Fa(t, e) {
  const n = t[t.length - 1];
  for (let s = 1; s <= e; s++) {
    const i = /* @__PURE__ */ ft(0, e, s);
    t.push(C(n, 1, i));
  }
}
function Oa(t) {
  const e = [0];
  return Fa(e, t.length - 1), e;
}
function Ia(t, e) {
  return t.map((n) => n * e);
}
function ja(t, e) {
  return t.map(() => e || Ui).splice(0, t.length - 1);
}
function At({ duration: t = 300, keyframes: e, times: n, ease: s = "easeInOut" }) {
  const i = La(s) ? s.map($n) : $n(s), o = {
    done: !1,
    value: e[0]
  }, r = Ia(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === e.length ? n : Oa(e),
    t
  ), a = Ba(r, e, {
    ease: Array.isArray(i) ? i : ja(e, i)
  });
  return {
    calculatedDuration: t,
    next: (l) => (o.value = a(l), o.done = l >= t, o)
  };
}
const Na = (t) => {
  const e = ({ timestamp: n }) => t(n);
  return {
    start: () => w.update(e, !0),
    stop: () => Z(e),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => E.isProcessing ? E.timestamp : G.now()
  };
}, Ua = {
  decay: Un,
  inertia: Un,
  tween: At,
  keyframes: At,
  spring: Ni
}, _a = (t) => t / 100;
class fn extends Fi {
  constructor(e) {
    super(e), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
      if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle")
        return;
      this.teardown();
      const { onStop: l } = this.options;
      l && l();
    };
    const { name: n, motionValue: s, element: i, keyframes: o } = this.options, r = (i == null ? void 0 : i.KeyframeResolver) || cn, a = (l, u) => this.onKeyframesResolved(l, u);
    this.resolver = new r(o, a, n, s, i), this.resolver.scheduleResolve();
  }
  flatten() {
    super.flatten(), this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes));
  }
  initPlayback(e) {
    const { type: n = "keyframes", repeat: s = 0, repeatDelay: i = 0, repeatType: o, velocity: r = 0 } = this.options, a = Je(n) ? n : Ua[n] || At;
    let l, u;
    process.env.NODE_ENV !== "production" && a !== At && q(e.length <= 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${e}`), a !== At && typeof e[0] != "number" && (l = Ot(_a, Ii(e[0], e[1])), e = [0, 100]);
    const c = a({ ...this.options, keyframes: e });
    o === "mirror" && (u = a({
      ...this.options,
      keyframes: [...e].reverse(),
      velocity: -r
    })), c.calculatedDuration === null && (c.calculatedDuration = si(c));
    const { calculatedDuration: h } = c, f = h + i, d = f * (s + 1) - i;
    return {
      generator: c,
      mirroredGenerator: u,
      mapPercentToKeyframes: l,
      calculatedDuration: h,
      resolvedDuration: f,
      totalDuration: d
    };
  }
  onPostResolved() {
    const { autoplay: e = !0 } = this.options;
    this.play(), this.pendingPlayState === "paused" || !e ? this.pause() : this.state = this.pendingPlayState;
  }
  tick(e, n = !1) {
    const { resolved: s } = this;
    if (!s) {
      const { keyframes: b } = this.options;
      return { done: !0, value: b[b.length - 1] };
    }
    const { finalKeyframe: i, generator: o, mirroredGenerator: r, mapPercentToKeyframes: a, keyframes: l, calculatedDuration: u, totalDuration: c, resolvedDuration: h } = s;
    if (this.startTime === null)
      return o.next(0);
    const { delay: f, repeat: d, repeatType: m, repeatDelay: p, onUpdate: y } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - c / this.speed, this.startTime)), n ? this.currentTime = e : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(e - this.startTime) * this.speed;
    const g = this.currentTime - f * (this.speed >= 0 ? 1 : -1), v = this.speed >= 0 ? g < 0 : g > c;
    this.currentTime = Math.max(g, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = c);
    let x = this.currentTime, S = o;
    if (d) {
      const b = Math.min(this.currentTime, c) / h;
      let I = Math.floor(b), N = b % 1;
      !N && b >= 1 && (N = 1), N === 1 && I--, I = Math.min(I, d + 1), !!(I % 2) && (m === "reverse" ? (N = 1 - N, p && (N -= p / h)) : m === "mirror" && (S = r)), x = Y(0, 1, N) * h;
    }
    const P = v ? { done: !1, value: l[0] } : S.next(x);
    a && (P.value = a(P.value));
    let { done: A } = P;
    !v && u !== null && (A = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
    const R = this.holdTime === null && (this.state === "finished" || this.state === "running" && A);
    return R && i !== void 0 && (P.value = ne(l, this.options, i)), y && y(P.value), R && this.finish(), P;
  }
  get duration() {
    const { resolved: e } = this;
    return e ? /* @__PURE__ */ H(e.calculatedDuration) : 0;
  }
  get time() {
    return /* @__PURE__ */ H(this.currentTime);
  }
  set time(e) {
    e = /* @__PURE__ */ K(e), this.currentTime = e, this.holdTime !== null || this.speed === 0 ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(e) {
    const n = this.playbackSpeed !== e;
    this.playbackSpeed = e, n && (this.time = /* @__PURE__ */ H(this.currentTime));
  }
  play() {
    if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped)
      return;
    const { driver: e = Na, onPlay: n, startTime: s } = this.options;
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
const $a = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Can be accelerated but currently disabled until https://issues.chromium.org/issues/41491098 is resolved
  // or until we implement support for linear() easing.
  // "background-color"
]);
function Ka(t, e, n, { delay: s = 0, duration: i = 300, repeat: o = 0, repeatType: r = "loop", ease: a = "easeInOut", times: l } = {}) {
  const u = { [e]: n };
  l && (u.offset = l);
  const c = oi(a, i);
  return Array.isArray(c) && (u.easing = c), t.animate(u, {
    delay: s,
    duration: i,
    easing: Array.isArray(c) ? "linear" : c,
    fill: "both",
    iterations: o + 1,
    direction: r === "reverse" ? "alternate" : "normal"
  });
}
const Wa = /* @__PURE__ */ Oe(() => Object.hasOwnProperty.call(Element.prototype, "animate")), Xt = 10, Ga = 2e4;
function za(t) {
  return Je(t.type) || t.type === "spring" || !ri(t.ease);
}
function Ha(t, e) {
  const n = new fn({
    ...e,
    keyframes: t,
    repeat: 0,
    delay: 0,
    isGenerator: !0
  });
  let s = { done: !1, value: t[0] };
  const i = [];
  let o = 0;
  for (; !s.done && o < Ga; )
    s = n.sample(o), i.push(s.value), o += Xt;
  return {
    times: void 0,
    keyframes: i,
    duration: o - Xt,
    ease: "linear"
  };
}
const _i = {
  anticipate: vi,
  backInOut: yi,
  circInOut: Ti
};
function Ya(t) {
  return t in _i;
}
class Kn extends Fi {
  constructor(e) {
    super(e);
    const { name: n, motionValue: s, element: i, keyframes: o } = this.options;
    this.resolver = new Bi(o, (r, a) => this.onKeyframesResolved(r, a), n, s, i), this.resolver.scheduleResolve();
  }
  initPlayback(e, n) {
    let { duration: s = 300, times: i, ease: o, type: r, motionValue: a, name: l, startTime: u } = this.options;
    if (!a.owner || !a.owner.current)
      return !1;
    if (typeof o == "string" && Ht() && Ya(o) && (o = _i[o]), za(this.options)) {
      const { onComplete: h, onUpdate: f, motionValue: d, element: m, ...p } = this.options, y = Ha(e, p);
      e = y.keyframes, e.length === 1 && (e[1] = e[0]), s = y.duration, i = y.times, o = y.ease, r = "keyframes";
    }
    const c = Ka(a.owner.current, l, e, { ...this.options, duration: s, times: i, ease: o });
    return c.startTime = u ?? this.calcStartTime(), this.pendingTimeline ? (wn(c, this.pendingTimeline), this.pendingTimeline = void 0) : c.onfinish = () => {
      const { onComplete: h } = this.options;
      a.set(ne(e, this.options, n)), h && h(), this.cancel(), this.resolveFinishedPromise();
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
    return /* @__PURE__ */ H(n);
  }
  get time() {
    const { resolved: e } = this;
    if (!e)
      return 0;
    const { animation: n } = e;
    return /* @__PURE__ */ H(n.currentTime || 0);
  }
  set time(e) {
    const { resolved: n } = this;
    if (!n)
      return;
    const { animation: s } = n;
    s.currentTime = /* @__PURE__ */ K(e);
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
        return j;
      const { animation: s } = n;
      wn(s, e);
    }
    return j;
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
      const { motionValue: u, onUpdate: c, onComplete: h, element: f, ...d } = this.options, m = new fn({
        ...d,
        keyframes: s,
        duration: i,
        type: o,
        ease: r,
        times: a,
        isGenerator: !0
      }), p = /* @__PURE__ */ K(this.time);
      u.setWithVelocity(m.sample(p - Xt).value, m.sample(p).value, Xt);
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
    return Wa() && s && $a.has(s) && /**
     * If we're outputting values to onUpdate then we can't use WAAPI as there's
     * no way to read the value from WAAPI every frame.
     */
    !l && !u && !i && o !== "mirror" && r !== 0 && a !== "inertia";
  }
}
const Xa = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, qa = (t) => ({
  type: "spring",
  stiffness: 550,
  damping: t === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), Za = {
  type: "keyframes",
  duration: 0.8
}, Ja = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, Qa = (t, { keyframes: e }) => e.length > 2 ? Za : it.has(t) ? t.startsWith("scale") ? qa(e[1]) : Xa : Ja;
function tl({ when: t, delay: e, delayChildren: n, staggerChildren: s, staggerDirection: i, repeat: o, repeatType: r, repeatDelay: a, from: l, elapsed: u, ...c }) {
  return !!Object.keys(c).length;
}
const dn = (t, e, n, s = {}, i, o) => (r) => {
  const a = Ze(s, t) || {}, l = a.delay || s.delay || 0;
  let { elapsed: u = 0 } = s;
  u = u - /* @__PURE__ */ K(l);
  let c = {
    keyframes: Array.isArray(n) ? n : [null, n],
    ease: "easeOut",
    velocity: e.getVelocity(),
    ...a,
    delay: -u,
    onUpdate: (f) => {
      e.set(f), a.onUpdate && a.onUpdate(f);
    },
    onComplete: () => {
      r(), a.onComplete && a.onComplete();
    },
    name: t,
    motionValue: e,
    element: o ? void 0 : i
  };
  tl(a) || (c = {
    ...c,
    ...Qa(t, c)
  }), c.duration && (c.duration = /* @__PURE__ */ K(c.duration)), c.repeatDelay && (c.repeatDelay = /* @__PURE__ */ K(c.repeatDelay)), c.from !== void 0 && (c.keyframes[0] = c.from);
  let h = !1;
  if ((c.type === !1 || c.duration === 0 && !c.repeatDelay) && (c.duration = 0, c.delay === 0 && (h = !0)), h && !o && e.get() !== void 0) {
    const f = ne(c.keyframes, a);
    if (f !== void 0)
      return w.update(() => {
        c.onUpdate(f), c.onComplete();
      }), new vo([]);
  }
  return !o && Kn.supports(c) ? new Kn(c) : new fn(c);
};
function el({ protectedKeys: t, needsAnimating: e }, n) {
  const s = t.hasOwnProperty(n) && e[n] !== !0;
  return e[n] = !1, s;
}
function $i(t, e, { delay: n = 0, transitionOverride: s, type: i } = {}) {
  var o;
  let { transition: r = t.getDefaultTransition(), transitionEnd: a, ...l } = e;
  s && (r = s);
  const u = [], c = i && t.animationState && t.animationState.getState()[i];
  for (const h in l) {
    const f = t.getValue(h, (o = t.latestValues[h]) !== null && o !== void 0 ? o : null), d = l[h];
    if (d === void 0 || c && el(c, h))
      continue;
    const m = {
      delay: n,
      ...Ze(r || {}, h)
    };
    let p = !1;
    if (window.MotionHandoffAnimation) {
      const g = fi(t);
      if (g) {
        const v = window.MotionHandoffAnimation(g, h, w);
        v !== null && (m.startTime = v, p = !0);
      }
    }
    Te(t, h), f.start(dn(h, f, d, t.shouldReduceMotion && ci.has(h) ? { type: !1 } : m, t, p));
    const y = f.animation;
    y && u.push(y);
  }
  return a && Promise.all(u).then(() => {
    w.update(() => {
      a && ko(t, a);
    });
  }), u;
}
function De(t, e, n = {}) {
  var s;
  const i = Rt(t, e, n.type === "exit" ? (s = t.presenceContext) === null || s === void 0 ? void 0 : s.custom : void 0);
  let { transition: o = t.getDefaultTransition() || {} } = i || {};
  n.transitionOverride && (o = n.transitionOverride);
  const r = i ? () => Promise.all($i(t, i, n)) : () => Promise.resolve(), a = t.variantChildren && t.variantChildren.size ? (u = 0) => {
    const { delayChildren: c = 0, staggerChildren: h, staggerDirection: f } = o;
    return nl(t, e, c + u, h, f, n);
  } : () => Promise.resolve(), { when: l } = o;
  if (l) {
    const [u, c] = l === "beforeChildren" ? [r, a] : [a, r];
    return u().then(() => c());
  } else
    return Promise.all([r(), a(n.delay)]);
}
function nl(t, e, n = 0, s = 0, i = 1, o) {
  const r = [], a = (t.variantChildren.size - 1) * s, l = i === 1 ? (u = 0) => u * s : (u = 0) => a - u * s;
  return Array.from(t.variantChildren).sort(sl).forEach((u, c) => {
    u.notify("AnimationStart", e), r.push(De(u, e, {
      ...o,
      delay: n + l(c)
    }).then(() => u.notify("AnimationComplete", e)));
  }), Promise.all(r);
}
function sl(t, e) {
  return t.sortNodePosition(e);
}
function il(t, e, n = {}) {
  t.notify("AnimationStart", e);
  let s;
  if (Array.isArray(e)) {
    const i = e.map((o) => De(t, o, n));
    s = Promise.all(i);
  } else if (typeof e == "string")
    s = De(t, e, n);
  else {
    const i = typeof e == "function" ? Rt(t, e, n.custom) : e;
    s = Promise.all($i(t, i, n));
  }
  return s.then(() => {
    t.notify("AnimationComplete", e);
  });
}
function Ki(t, e) {
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
const rl = je.length;
function Wi(t) {
  if (!t)
    return;
  if (!t.isControllingVariants) {
    const n = t.parent ? Wi(t.parent) || {} : {};
    return t.props.initial !== void 0 && (n.initial = t.props.initial), n;
  }
  const e = {};
  for (let n = 0; n < rl; n++) {
    const s = je[n], i = t.props[s];
    (Dt(i) || i === !1) && (e[s] = i);
  }
  return e;
}
const ol = [...Ie].reverse(), al = Ie.length;
function ll(t) {
  return (e) => Promise.all(e.map(({ animation: n, options: s }) => il(t, n, s)));
}
function ul(t) {
  let e = ll(t), n = Wn(), s = !0;
  const i = (l) => (u, c) => {
    var h;
    const f = Rt(t, c, l === "exit" ? (h = t.presenceContext) === null || h === void 0 ? void 0 : h.custom : void 0);
    if (f) {
      const { transition: d, transitionEnd: m, ...p } = f;
      u = { ...u, ...p, ...m };
    }
    return u;
  };
  function o(l) {
    e = l(t);
  }
  function r(l) {
    const { props: u } = t, c = Wi(t.parent) || {}, h = [], f = /* @__PURE__ */ new Set();
    let d = {}, m = 1 / 0;
    for (let y = 0; y < al; y++) {
      const g = ol[y], v = n[g], x = u[g] !== void 0 ? u[g] : c[g], S = Dt(x), P = g === l ? v.isActive : null;
      P === !1 && (m = y);
      let A = x === c[g] && x !== u[g] && S;
      if (A && s && t.manuallyAnimateOnMount && (A = !1), v.protectedKeys = { ...d }, // If it isn't active and hasn't *just* been set as inactive
      !v.isActive && P === null || // If we didn't and don't have any defined prop for this animation type
      !x && !v.prevProp || // Or if the prop doesn't define an animation
      te(x) || typeof x == "boolean")
        continue;
      const R = cl(v.prevProp, x);
      let b = R || // If we're making this variant active, we want to always make it active
      g === l && v.isActive && !A && S || // If we removed a higher-priority variant (i is in reverse order)
      y > m && S, I = !1;
      const N = Array.isArray(x) ? x : [x];
      let rt = N.reduce(i(g), {});
      P === !1 && (rt = {});
      const { prevResolvedValues: mn = {} } = v, cr = {
        ...mn,
        ...rt
      }, pn = (B) => {
        b = !0, f.has(B) && (I = !0, f.delete(B)), v.needsAnimating[B] = !0;
        const z = t.getValue(B);
        z && (z.liveStyle = !1);
      };
      for (const B in cr) {
        const z = rt[B], se = mn[B];
        if (d.hasOwnProperty(B))
          continue;
        let ie = !1;
        ye(z) && ye(se) ? ie = !Ki(z, se) : ie = z !== se, ie ? z != null ? pn(B) : f.add(B) : z !== void 0 && f.has(B) ? pn(B) : v.protectedKeys[B] = !0;
      }
      v.prevProp = x, v.prevResolvedValues = rt, v.isActive && (d = { ...d, ...rt }), s && t.blockInitialAnimation && (b = !1), b && (!(A && R) || I) && h.push(...N.map((B) => ({
        animation: B,
        options: { type: g }
      })));
    }
    if (f.size) {
      const y = {};
      if (typeof u.initial != "boolean") {
        const g = Rt(t, Array.isArray(u.initial) ? u.initial[0] : u.initial);
        g && g.transition && (y.transition = g.transition);
      }
      f.forEach((g) => {
        const v = t.getBaseTarget(g), x = t.getValue(g);
        x && (x.liveStyle = !0), y[g] = v ?? null;
      }), h.push({ animation: y });
    }
    let p = !!h.length;
    return s && (u.initial === !1 || u.initial === u.animate) && !t.manuallyAnimateOnMount && (p = !1), s = !1, p ? e(h) : Promise.resolve();
  }
  function a(l, u) {
    var c;
    if (n[l].isActive === u)
      return Promise.resolve();
    (c = t.variantChildren) === null || c === void 0 || c.forEach((f) => {
      var d;
      return (d = f.animationState) === null || d === void 0 ? void 0 : d.setActive(l, u);
    }), n[l].isActive = u;
    const h = r(l);
    for (const f in n)
      n[f].protectedKeys = {};
    return h;
  }
  return {
    animateChanges: r,
    setActive: a,
    setAnimateFunction: o,
    getState: () => n,
    reset: () => {
      n = Wn(), s = !0;
    }
  };
}
function cl(t, e) {
  return typeof e == "string" ? e !== t : Array.isArray(e) ? !Ki(e, t) : !1;
}
function tt(t = !1) {
  return {
    isActive: t,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function Wn() {
  return {
    animate: tt(!0),
    whileInView: tt(),
    whileHover: tt(),
    whileTap: tt(),
    whileDrag: tt(),
    whileFocus: tt(),
    exit: tt()
  };
}
class Q {
  constructor(e) {
    this.isMounted = !1, this.node = e;
  }
  update() {
  }
}
class hl extends Q {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(e) {
    super(e), e.animationState || (e.animationState = ul(e));
  }
  updateAnimationControlsSubscription() {
    const { animate: e } = this.node.getProps();
    te(e) && (this.unmountControls = e.subscribe(this.node));
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
let fl = 0;
class dl extends Q {
  constructor() {
    super(...arguments), this.id = fl++;
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
const ml = {
  animation: {
    Feature: hl
  },
  exit: {
    Feature: dl
  }
};
function kt(t, e, n, s = { passive: !0 }) {
  return t.addEventListener(e, n, s), () => t.removeEventListener(e, n);
}
function It(t) {
  return {
    point: {
      x: t.pageX,
      y: t.pageY
    }
  };
}
const pl = (t) => (e) => tn(e) && t(e, It(e));
function lt(t, e, n, s) {
  return kt(t, e, pl(n), s);
}
function Gi({ top: t, left: e, right: n, bottom: s }) {
  return {
    x: { min: e, max: n },
    y: { min: t, max: s }
  };
}
function gl({ x: t, y: e }) {
  return { top: e.min, right: t.max, bottom: e.max, left: t.min };
}
function yl(t, e) {
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
const zi = 1e-4, vl = 1 - zi, xl = 1 + zi, Hi = 0.01, Tl = 0 - Hi, Pl = 0 + Hi;
function O(t) {
  return t.max - t.min;
}
function bl(t, e, n) {
  return Math.abs(t - e) <= n;
}
function Gn(t, e, n, s = 0.5) {
  t.origin = s, t.originPoint = C(e.min, e.max, t.origin), t.scale = O(n) / O(e), t.translate = C(n.min, n.max, t.origin) - t.originPoint, (t.scale >= vl && t.scale <= xl || isNaN(t.scale)) && (t.scale = 1), (t.translate >= Tl && t.translate <= Pl || isNaN(t.translate)) && (t.translate = 0);
}
function wt(t, e, n, s) {
  Gn(t.x, e.x, n.x, s ? s.originX : void 0), Gn(t.y, e.y, n.y, s ? s.originY : void 0);
}
function zn(t, e, n) {
  t.min = n.min + e.min, t.max = t.min + O(e);
}
function Sl(t, e, n) {
  zn(t.x, e.x, n.x), zn(t.y, e.y, n.y);
}
function Hn(t, e, n) {
  t.min = e.min - n.min, t.max = t.min + O(e);
}
function Vt(t, e, n) {
  Hn(t.x, e.x, n.x), Hn(t.y, e.y, n.y);
}
const Yn = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), ut = () => ({
  x: Yn(),
  y: Yn()
}), Xn = () => ({ min: 0, max: 0 }), M = () => ({
  x: Xn(),
  y: Xn()
});
function _(t) {
  return [t("x"), t("y")];
}
function ce(t) {
  return t === void 0 || t === 1;
}
function Ce({ scale: t, scaleX: e, scaleY: n }) {
  return !ce(t) || !ce(e) || !ce(n);
}
function et(t) {
  return Ce(t) || Yi(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY;
}
function Yi(t) {
  return qn(t.x) || qn(t.y);
}
function qn(t) {
  return t && t !== "0%";
}
function qt(t, e, n) {
  const s = t - n, i = e * s;
  return n + i;
}
function Zn(t, e, n, s, i) {
  return i !== void 0 && (t = qt(t, i, s)), qt(t, n, s) + e;
}
function Me(t, e = 0, n = 1, s, i) {
  t.min = Zn(t.min, e, n, s, i), t.max = Zn(t.max, e, n, s, i);
}
function Xi(t, { x: e, y: n }) {
  Me(t.x, e.translate, e.scale, e.originPoint), Me(t.y, n.translate, n.scale, n.originPoint);
}
const Jn = 0.999999999999, Qn = 1.0000000000001;
function Al(t, e, n, s = !1) {
  const i = n.length;
  if (!i)
    return;
  e.x = e.y = 1;
  let o, r;
  for (let a = 0; a < i; a++) {
    o = n[a], r = o.projectionDelta;
    const { visualElement: l } = o.options;
    l && l.props.style && l.props.style.display === "contents" || (s && o.options.layoutScroll && o.scroll && o !== o.root && ht(t, {
      x: -o.scroll.offset.x,
      y: -o.scroll.offset.y
    }), r && (e.x *= r.x.scale, e.y *= r.y.scale, Xi(t, r)), s && et(o.latestValues) && ht(t, o.latestValues));
  }
  e.x < Qn && e.x > Jn && (e.x = 1), e.y < Qn && e.y > Jn && (e.y = 1);
}
function ct(t, e) {
  t.min = t.min + e, t.max = t.max + e;
}
function ts(t, e, n, s, i = 0.5) {
  const o = C(t.min, t.max, i);
  Me(t, e, n, o, s);
}
function ht(t, e) {
  ts(t.x, e.x, e.scaleX, e.scale, e.originX), ts(t.y, e.y, e.scaleY, e.scale, e.originY);
}
function qi(t, e) {
  return Gi(yl(t.getBoundingClientRect(), e));
}
function wl(t, e, n) {
  const s = qi(t, n), { scroll: i } = e;
  return i && (ct(s.x, i.offset.x), ct(s.y, i.offset.y)), s;
}
const es = (t, e) => Math.abs(t - e);
function Vl(t, e) {
  const n = es(t.x, e.x), s = es(t.y, e.y);
  return Math.sqrt(n ** 2 + s ** 2);
}
class Zi {
  constructor(e, n, { transformPagePoint: s, dragSnapToOrigin: i = !1 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const c = fe(this.lastMoveEventInfo, this.history), h = this.startEvent !== null, f = Vl(c.offset, { x: 0, y: 0 }) >= 3;
      if (!h && !f)
        return;
      const { point: d } = c, { timestamp: m } = E;
      this.history.push({ ...d, timestamp: m });
      const { onStart: p, onMove: y } = this.handlers;
      h || (p && p(this.lastMoveEvent, c), this.startEvent = this.lastMoveEvent), y && y(this.lastMoveEvent, c);
    }, this.handlePointerMove = (c, h) => {
      if (this.index = ss(c.currentTarget), c.target instanceof Element && c.target.hasPointerCapture && c.pointerId !== void 0)
        try {
          if (!c.target.hasPointerCapture(c.pointerId))
            return;
        } catch {
        }
      this.lastMoveEvent = c, this.lastMoveEventInfo = he(h, this.transformPagePoint), w.update(this.updatePoint, !0);
    }, this.handlePointerUp = (c, h) => {
      bt(c, "release"), this.end();
      const { onEnd: f, onSessionEnd: d, resumeAnimation: m } = this.handlers;
      if (this.dragSnapToOrigin && m && m(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const p = fe(c.type === "pointercancel" || c.type === "lostpointercapture" ? this.lastMoveEventInfo : he(h, this.transformPagePoint), this.history);
      this.startEvent && f && f(c, p), d && d(c, p);
    }, !tn(e))
      return;
    this.dragSnapToOrigin = i, this.handlers = n, this.transformPagePoint = s;
    const o = It(e), r = he(o, this.transformPagePoint), { point: a } = r, { timestamp: l } = E;
    this.history = [{ ...a, timestamp: l }];
    const { onSessionStart: u } = n;
    u && u(e, fe(r, this.history)), bt(e, "set"), this.removeListeners = Ot(lt(e.currentTarget, "pointermove", this.handlePointerMove), lt(e.currentTarget, "pointerup", this.handlePointerUp), lt(e.currentTarget, "pointercancel", this.handlePointerUp), lt(e.currentTarget, "lostpointercapture", (c, h) => {
      ss(c.currentTarget) !== this.index ? bt(c, "set") : this.handlePointerUp(c, h);
    }));
  }
  updateHandlers(e) {
    this.handlers = e;
  }
  end() {
    this.removeListeners && this.removeListeners(), Z(this.updatePoint);
  }
}
function he(t, e) {
  return e ? { point: e(t.point) } : t;
}
function ns(t, e) {
  return { x: t.x - e.x, y: t.y - e.y };
}
function fe({ point: t }, e) {
  return {
    point: t,
    delta: ns(t, Ji(e)),
    offset: ns(t, Dl(e)),
    velocity: Cl(e, 0.1)
  };
}
function Dl(t) {
  return t[0];
}
function Ji(t) {
  return t[t.length - 1];
}
function Cl(t, e) {
  if (t.length < 2)
    return { x: 0, y: 0 };
  let n = t.length - 1, s = null;
  const i = Ji(t);
  for (; n >= 0 && (s = t[n], !(i.timestamp - s.timestamp > /* @__PURE__ */ K(e))); )
    n--;
  if (!s)
    return { x: 0, y: 0 };
  const o = /* @__PURE__ */ H(i.timestamp - s.timestamp);
  if (o === 0)
    return { x: 0, y: 0 };
  const r = {
    x: (i.x - s.x) / o,
    y: (i.y - s.y) / o
  };
  return r.x === 1 / 0 && (r.x = 0), r.y === 1 / 0 && (r.y = 0), r;
}
function ss(t) {
  return t.parentNode ? Array.from(t.parentNode.children).indexOf(t) : -1;
}
function Ml(t, { min: e, max: n }, s) {
  return e !== void 0 && t < e ? t = s ? C(e, t, s.min) : Math.max(t, e) : n !== void 0 && t > n && (t = s ? C(n, t, s.max) : Math.min(t, n)), t;
}
function is(t, e, n) {
  return {
    min: e !== void 0 ? t.min + e : void 0,
    max: n !== void 0 ? t.max + n - (t.max - t.min) : void 0
  };
}
function Rl(t, { top: e, left: n, bottom: s, right: i }) {
  return {
    x: is(t.x, n, i),
    y: is(t.y, e, s)
  };
}
function rs(t, e) {
  let n = e.min - t.min, s = e.max - t.max;
  return e.max - e.min < t.max - t.min && ([n, s] = [s, n]), { min: n, max: s };
}
function El(t, e) {
  return {
    x: rs(t.x, e.x),
    y: rs(t.y, e.y)
  };
}
function Ll(t, e) {
  let n = 0.5;
  const s = O(t), i = O(e);
  return i > s ? n = /* @__PURE__ */ ft(e.min, e.max - s, t.min) : s > i && (n = /* @__PURE__ */ ft(t.min, t.max - i, e.min)), Y(0, 1, n);
}
function kl(t, e) {
  const n = {};
  return e.min !== void 0 && (n.min = e.min - t.min), e.max !== void 0 && (n.max = e.max - t.min), n;
}
const Re = 0.35;
function Bl(t = Re) {
  return t === !1 ? t = 0 : t === !0 && (t = Re), {
    x: os(t, "left", "right"),
    y: os(t, "top", "bottom")
  };
}
function os(t, e, n) {
  return {
    min: as(t, e),
    max: as(t, n)
  };
}
function as(t, e) {
  return typeof t == "number" ? t : t[e] || 0;
}
const Fl = /* @__PURE__ */ new WeakMap();
class Ol {
  constructor(e) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = M(), this.visualElement = e;
  }
  start(e, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: s } = this.visualElement;
    if (s && s.isPresent === !1)
      return;
    const i = (c) => {
      const { dragSnapToOrigin: h } = this.getProps();
      h ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(It(c).point);
    }, o = (c, h) => {
      const { drag: f, dragPropagation: d, onDragStart: m } = this.getProps();
      if (f && !d && (this.openDragLock && this.openDragLock(), this.openDragLock = Co(f), !this.openDragLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), _((y) => {
        let g = this.getAxisMotionValue(y).get() || 0;
        if (W.test(g)) {
          const { projection: v } = this.visualElement;
          if (v && v.layout) {
            const x = v.layout.layoutBox[y];
            x && (g = O(x) * (parseFloat(g) / 100));
          }
        }
        this.originPoint[y] = g;
      }), m && w.postRender(() => m(c, h)), Te(this.visualElement, "transform");
      const { animationState: p } = this.visualElement;
      p && p.setActive("whileDrag", !0);
    }, r = (c, h) => {
      const { dragPropagation: f, dragDirectionLock: d, onDirectionLock: m, onDrag: p } = this.getProps();
      if (!f && !this.openDragLock)
        return;
      const { offset: y } = h;
      if (d && this.currentDirection === null) {
        this.currentDirection = Il(y), this.currentDirection !== null && m && m(this.currentDirection);
        return;
      }
      this.updateAxis("x", h.point, y), this.updateAxis("y", h.point, y), this.visualElement.render(), p && p(c, h);
    }, a = (c, h) => this.stop(c, h), l = () => _((c) => {
      var h;
      return this.getAnimationState(c) === "paused" && ((h = this.getAxisMotionValue(c).animation) === null || h === void 0 ? void 0 : h.play());
    }), { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new Zi(e, {
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
    o && w.postRender(() => o(e, n));
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
    if (!s || !Ut(e, i, this.currentDirection))
      return;
    const o = this.getAxisMotionValue(e);
    let r = this.originPoint[e] + s[e];
    this.constraints && this.constraints[e] && (r = Ml(r, this.constraints[e], this.elastic[e])), o.set(r);
  }
  resolveConstraints() {
    var e;
    const { dragConstraints: n, dragElastic: s } = this.getProps(), i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (e = this.visualElement.projection) === null || e === void 0 ? void 0 : e.layout, o = this.constraints;
    n && ot(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && i ? this.constraints = Rl(i.layoutBox, n) : this.constraints = !1, this.elastic = Bl(s), o !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && _((r) => {
      this.constraints !== !1 && this.getAxisMotionValue(r) && (this.constraints[r] = kl(i.layoutBox[r], this.constraints[r]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: e, onMeasureDragConstraints: n } = this.getProps();
    if (!e || !ot(e))
      return !1;
    const s = e.current;
    q(s !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
    const { projection: i } = this.visualElement;
    if (!i || !i.layout)
      return !1;
    const o = wl(s, i.root, this.visualElement.getTransformPagePoint());
    let r = El(i.layout.layoutBox, o);
    if (n) {
      const a = n(gl(r));
      this.hasMutatedConstraints = !!a, a && (r = Gi(a));
    }
    return r;
  }
  startAnimation(e) {
    const { drag: n, dragMomentum: s, dragElastic: i, dragTransition: o, dragSnapToOrigin: r, onDragTransitionEnd: a } = this.getProps(), l = this.constraints || {}, u = _((c) => {
      if (!Ut(c, n, this.currentDirection))
        return;
      let h = l && l[c] || {};
      r && (h = { min: 0, max: 0 });
      const f = i ? 200 : 1e6, d = i ? 40 : 1e7, m = {
        type: "inertia",
        velocity: s ? e[c] : 0,
        bounceStiffness: f,
        bounceDamping: d,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...o,
        ...h
      };
      return this.startAxisValueAnimation(c, m);
    });
    return Promise.all(u).then(a);
  }
  startAxisValueAnimation(e, n) {
    const s = this.getAxisMotionValue(e);
    return Te(this.visualElement, e), s.start(dn(e, s, 0, n, this.visualElement, !1));
  }
  stopAnimation() {
    _((e) => this.getAxisMotionValue(e).stop());
  }
  pauseAnimation() {
    _((e) => {
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
    _((n) => {
      const { drag: s } = this.getProps();
      if (!Ut(n, s, this.currentDirection))
        return;
      const { projection: i } = this.visualElement, o = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: r, max: a } = i.layout.layoutBox[n];
        o.set(e[n] - C(r, a, 0.5));
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
    if (!ot(n) || !s || !this.constraints)
      return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    _((r) => {
      const a = this.getAxisMotionValue(r);
      if (a && this.constraints !== !1) {
        const l = a.get();
        i[r] = Ll({ min: l, max: l }, this.constraints[r]);
      }
    });
    const { transformTemplate: o } = this.visualElement.getProps();
    this.visualElement.current.style.transform = o ? o({}, "") : "none", s.root && s.root.updateScroll(), s.updateLayout(), this.resolveConstraints(), _((r) => {
      if (!Ut(r, e, null))
        return;
      const a = this.getAxisMotionValue(r), { min: l, max: u } = this.constraints[r];
      a.set(C(l, u, i[r]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    Fl.set(this.visualElement, this);
    const e = this.visualElement.current, n = lt(e, "pointerdown", (l) => {
      const { drag: u, dragListener: c = !0 } = this.getProps();
      u && c && this.start(l);
    }), s = () => {
      const { dragConstraints: l } = this.getProps();
      ot(l) && l.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: i } = this.visualElement, o = i.addEventListener("measure", s);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), w.read(s);
    const r = kt(window, "resize", () => this.scalePositionWithinConstraints()), a = i.addEventListener("didUpdate", ({ delta: l, hasLayoutChanged: u }) => {
      this.isDragging && u && (_((c) => {
        const h = this.getAxisMotionValue(c);
        h && (this.originPoint[c] += l[c].translate, h.set(h.get() + l[c].translate));
      }), this.visualElement.render());
    });
    return () => {
      r(), n(), o(), a && a();
    };
  }
  getProps() {
    const e = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: s = !1, dragPropagation: i = !1, dragConstraints: o = !1, dragElastic: r = Re, dragMomentum: a = !0 } = e;
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
function Ut(t, e, n) {
  return (e === !0 || e === t) && (n === null || n === t);
}
function Il(t, e = 10) {
  let n = null;
  return Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x"), n;
}
class jl extends Q {
  constructor(e) {
    super(e), this.removeGroupControls = j, this.removeListeners = j, this.controls = new Ol(e);
  }
  mount() {
    const { dragControls: e } = this.node.getProps();
    e && (this.removeGroupControls = e.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || j;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const ls = (t) => (e, n) => {
  t && w.postRender(() => t(e, n));
};
class Nl extends Q {
  constructor() {
    super(...arguments), this.removePointerDownListener = j;
  }
  onPointerDown(e) {
    this.session = new Zi(e, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint()
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: e, onPanStart: n, onPan: s, onPanEnd: i } = this.node.getProps();
    return {
      onSessionStart: ls(e),
      onStart: ls(n),
      onMove: s,
      onEnd: (o, r) => {
        delete this.session, i && w.postRender(() => i(o, r));
      }
    };
  }
  mount() {
    this.removePointerDownListener = lt(this.node.current, "pointerdown", (e) => this.onPointerDown(e));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const Wt = {
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
function us(t, e) {
  return e.max === e.min ? 0 : t / (e.max - e.min) * 100;
}
const xt = {
  correct: (t, e) => {
    if (!e.target)
      return t;
    if (typeof t == "string")
      if (T.test(t))
        t = parseFloat(t);
      else
        return t;
    const n = us(t, e.target.x), s = us(t, e.target.y);
    return `${n}% ${s}%`;
  }
}, Ul = {
  correct: (t, { treeScale: e, projectionDelta: n }) => {
    const s = t, i = J.parse(t);
    if (i.length > 5)
      return s;
    const o = J.createTransformer(t), r = typeof i[0] != "number" ? 1 : 0, a = n.x.scale * e.x, l = n.y.scale * e.y;
    i[0 + r] /= a, i[1 + r] /= l;
    const u = C(a, l, 0.5);
    return typeof i[2 + r] == "number" && (i[2 + r] /= u), typeof i[3 + r] == "number" && (i[3 + r] /= u), o(i);
  }
};
class _l extends yr {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: e, layoutGroup: n, switchLayoutGroup: s, layoutId: i } = this.props, { projection: o } = e;
    Wr($l), o && (n.group && n.group.add(o), s && s.register && i && s.register(o), o.root.didUpdate(), o.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), o.setOptions({
      ...o.options,
      onExitComplete: () => this.safeToRemove()
    })), Wt.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(e) {
    const { layoutDependency: n, visualElement: s, drag: i, isPresent: o } = this.props, r = s.projection;
    return r && (r.isPresent = o, i || e.layoutDependency !== n || n === void 0 || e.isPresent !== o ? r.willUpdate() : this.safeToRemove(), e.isPresent !== o && (o ? r.promote() : r.relegate() || w.postRender(() => {
      const a = r.getStack();
      (!a || !a.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: e } = this.props.visualElement;
    e && (e.root.didUpdate(), Ue.postRender(() => {
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
function Qi(t) {
  const [e, n] = Pr(), s = F(Is);
  return Gt.jsx(_l, { ...t, layoutGroup: s, switchLayoutGroup: F(Ws), isPresent: e, safeToRemove: n });
}
const $l = {
  borderRadius: {
    ...xt,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: xt,
  borderTopRightRadius: xt,
  borderBottomLeftRadius: xt,
  borderBottomRightRadius: xt,
  boxShadow: Ul
};
function Kl(t, e, n) {
  const s = k(t) ? t : Et(t);
  return s.start(dn("", s, e, n)), s.animation;
}
function Wl(t) {
  return t instanceof SVGElement && t.tagName !== "svg";
}
const Gl = (t, e) => t.depth - e.depth;
class zl {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(e) {
    en(this.children, e), this.isDirty = !0;
  }
  remove(e) {
    nn(this.children, e), this.isDirty = !0;
  }
  forEach(e) {
    this.isDirty && this.children.sort(Gl), this.isDirty = !1, this.children.forEach(e);
  }
}
function Hl(t, e) {
  const n = G.now(), s = ({ timestamp: i }) => {
    const o = i - n;
    o >= e && (Z(s), t(o - e));
  };
  return w.read(s, !0), () => Z(s);
}
const tr = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], Yl = tr.length, cs = (t) => typeof t == "string" ? parseFloat(t) : t, hs = (t) => typeof t == "number" || T.test(t);
function Xl(t, e, n, s, i, o) {
  i ? (t.opacity = C(
    0,
    // TODO Reinstate this if only child
    n.opacity !== void 0 ? n.opacity : 1,
    ql(s)
  ), t.opacityExit = C(e.opacity !== void 0 ? e.opacity : 1, 0, Zl(s))) : o && (t.opacity = C(e.opacity !== void 0 ? e.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, s));
  for (let r = 0; r < Yl; r++) {
    const a = `border${tr[r]}Radius`;
    let l = fs(e, a), u = fs(n, a);
    if (l === void 0 && u === void 0)
      continue;
    l || (l = 0), u || (u = 0), l === 0 || u === 0 || hs(l) === hs(u) ? (t[a] = Math.max(C(cs(l), cs(u), s), 0), (W.test(u) || W.test(l)) && (t[a] += "%")) : t[a] = u;
  }
  (e.rotate || n.rotate) && (t.rotate = C(e.rotate || 0, n.rotate || 0, s));
}
function fs(t, e) {
  return t[e] !== void 0 ? t[e] : t.borderRadius;
}
const ql = /* @__PURE__ */ er(0, 0.5, xi), Zl = /* @__PURE__ */ er(0.5, 0.95, j);
function er(t, e, n) {
  return (s) => s < t ? 0 : s > e ? 1 : n(/* @__PURE__ */ ft(t, e, s));
}
function ds(t, e) {
  t.min = e.min, t.max = e.max;
}
function U(t, e) {
  ds(t.x, e.x), ds(t.y, e.y);
}
function ms(t, e) {
  t.translate = e.translate, t.scale = e.scale, t.originPoint = e.originPoint, t.origin = e.origin;
}
function ps(t, e, n, s, i) {
  return t -= e, t = qt(t, 1 / n, s), i !== void 0 && (t = qt(t, 1 / i, s)), t;
}
function Jl(t, e = 0, n = 1, s = 0.5, i, o = t, r = t) {
  if (W.test(e) && (e = parseFloat(e), e = C(r.min, r.max, e / 100) - r.min), typeof e != "number")
    return;
  let a = C(o.min, o.max, s);
  t === o && (a -= e), t.min = ps(t.min, e, n, a, i), t.max = ps(t.max, e, n, a, i);
}
function gs(t, e, [n, s, i], o, r) {
  Jl(t, e[n], e[s], e[i], e.scale, o, r);
}
const Ql = ["x", "scaleX", "originX"], tu = ["y", "scaleY", "originY"];
function ys(t, e, n, s) {
  gs(t.x, e, Ql, n ? n.x : void 0, s ? s.x : void 0), gs(t.y, e, tu, n ? n.y : void 0, s ? s.y : void 0);
}
function vs(t) {
  return t.translate === 0 && t.scale === 1;
}
function nr(t) {
  return vs(t.x) && vs(t.y);
}
function xs(t, e) {
  return t.min === e.min && t.max === e.max;
}
function eu(t, e) {
  return xs(t.x, e.x) && xs(t.y, e.y);
}
function Ts(t, e) {
  return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max);
}
function sr(t, e) {
  return Ts(t.x, e.x) && Ts(t.y, e.y);
}
function Ps(t) {
  return O(t.x) / O(t.y);
}
function bs(t, e) {
  return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint;
}
class nu {
  constructor() {
    this.members = [];
  }
  add(e) {
    en(this.members, e), e.scheduleRender();
  }
  remove(e) {
    if (nn(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
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
function su(t, e, n) {
  let s = "";
  const i = t.x.translate / e.x, o = t.y.translate / e.y, r = (n == null ? void 0 : n.z) || 0;
  if ((i || o || r) && (s = `translate3d(${i}px, ${o}px, ${r}px) `), (e.x !== 1 || e.y !== 1) && (s += `scale(${1 / e.x}, ${1 / e.y}) `), n) {
    const { transformPerspective: u, rotate: c, rotateX: h, rotateY: f, skewX: d, skewY: m } = n;
    u && (s = `perspective(${u}px) ${s}`), c && (s += `rotate(${c}deg) `), h && (s += `rotateX(${h}deg) `), f && (s += `rotateY(${f}deg) `), d && (s += `skewX(${d}deg) `), m && (s += `skewY(${m}deg) `);
  }
  const a = t.x.scale * e.x, l = t.y.scale * e.y;
  return (a !== 1 || l !== 1) && (s += `scale(${a}, ${l})`), s || "none";
}
const de = ["", "X", "Y", "Z"], iu = { visibility: "hidden" }, Ss = 1e3;
let ru = 0;
function me(t, e, n, s) {
  const { latestValues: i } = e;
  i[t] && (n[t] = i[t], e.setStaticValue(t, 0), s && (s[t] = 0));
}
function ir(t) {
  if (t.hasCheckedOptimisedAppear = !0, t.root === t)
    return;
  const { visualElement: e } = t.options;
  if (!e)
    return;
  const n = fi(e);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: i, layoutId: o } = t.options;
    window.MotionCancelOptimisedAnimation(n, "transform", w, !(i || o));
  }
  const { parent: s } = t;
  s && !s.hasCheckedOptimisedAppear && ir(s);
}
function rr({ attachResizeListener: t, defaultParent: e, measureScroll: n, checkIsScrollRoot: s, resetTransform: i }) {
  return class {
    constructor(r = {}, a = e == null ? void 0 : e()) {
      this.id = ru++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, this.nodes.forEach(lu), this.nodes.forEach(du), this.nodes.forEach(mu), this.nodes.forEach(uu);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = r, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new zl());
    }
    addEventListener(r, a) {
      return this.eventHandlers.has(r) || this.eventHandlers.set(r, new sn()), this.eventHandlers.get(r).add(a);
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
      this.isSVG = Wl(r), this.instance = r;
      const { layoutId: l, layout: u, visualElement: c } = this.options;
      if (c && !c.current && c.mount(r), this.root.nodes.add(this), this.parent && this.parent.children.add(this), a && (u || l) && (this.isLayoutDirty = !0), t) {
        let h;
        const f = () => this.root.updateBlockedByResize = !1;
        t(r, () => {
          this.root.updateBlockedByResize = !0, h && h(), h = Hl(f, 250), Wt.hasAnimatedSinceResize && (Wt.hasAnimatedSinceResize = !1, this.nodes.forEach(ws));
        });
      }
      l && this.root.registerSharedNode(l, this), this.options.animate !== !1 && c && (l || u) && this.addEventListener("didUpdate", ({ delta: h, hasLayoutChanged: f, hasRelativeLayoutChanged: d, layout: m }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const p = this.options.transition || c.getDefaultTransition() || xu, { onLayoutAnimationStart: y, onLayoutAnimationComplete: g } = c.getProps(), v = !this.targetLayout || !sr(this.targetLayout, m), x = !f && d;
        if (this.options.layoutRoot || this.resumeFrom || x || f && (v || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(h, x);
          const S = {
            ...Ze(p, "layout"),
            onPlay: y,
            onComplete: g
          };
          (c.shouldReduceMotion || this.options.layoutRoot) && (S.delay = 0, S.type = !1), this.startAnimation(S);
        } else
          f || ws(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = m;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const r = this.getStack();
      r && r.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, Z(this.updateProjection);
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
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(pu), this.animationId++);
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
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && ir(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const h = this.path[c];
        h.shouldResetTransform = !0, h.updateScroll("snapshot"), h.options.layoutRoot && h.willUpdate(!1);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l)
        return;
      const u = this.getTransformTemplate();
      this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0, this.updateSnapshot(), r && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(As);
        return;
      }
      this.isUpdating || this.nodes.forEach(hu), this.isUpdating = !1, this.nodes.forEach(fu), this.nodes.forEach(ou), this.nodes.forEach(au), this.clearAllSnapshots();
      const a = G.now();
      E.delta = Y(0, 1e3 / 60, a - E.timestamp), E.timestamp = a, E.isProcessing = !0, re.update.process(E), re.preRender.process(E), re.render.process(E), E.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, Ue.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(cu), this.sharedNodes.forEach(gu);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, w.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      w.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !O(this.snapshot.measuredBox.x) && !O(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++)
          this.path[l].updateScroll();
      const r = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = M(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
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
      const r = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, a = this.projectionDelta && !nr(this.projectionDelta), l = this.getTransformTemplate(), u = l ? l(this.latestValues, "") : void 0, c = u !== this.prevTransformTemplateValue;
      r && (a || et(this.latestValues) || c) && (i(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(r = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return r && (l = this.removeTransform(l)), Tu(l), {
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
        return M();
      const l = a.measureViewportBox();
      if (!(((r = this.scroll) === null || r === void 0 ? void 0 : r.wasRoot) || this.path.some(Pu))) {
        const { scroll: c } = this.root;
        c && (ct(l.x, c.offset.x), ct(l.y, c.offset.y));
      }
      return l;
    }
    removeElementScroll(r) {
      var a;
      const l = M();
      if (U(l, r), !((a = this.scroll) === null || a === void 0) && a.wasRoot)
        return l;
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u], { scroll: h, options: f } = c;
        c !== this.root && h && f.layoutScroll && (h.wasRoot && U(l, r), ct(l.x, h.offset.x), ct(l.y, h.offset.y));
      }
      return l;
    }
    applyTransform(r, a = !1) {
      const l = M();
      U(l, r);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !a && c.options.layoutScroll && c.scroll && c !== c.root && ht(l, {
          x: -c.scroll.offset.x,
          y: -c.scroll.offset.y
        }), et(c.latestValues) && ht(l, c.latestValues);
      }
      return et(this.latestValues) && ht(l, this.latestValues), l;
    }
    removeTransform(r) {
      const a = M();
      U(a, r);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !et(u.latestValues))
          continue;
        Ce(u.latestValues) && u.updateSnapshot();
        const c = M(), h = u.measurePageBox();
        U(c, h), ys(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return et(this.latestValues) && ys(a, this.latestValues), a;
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
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== E.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(r = !1) {
      var a;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== l;
      if (!(r || u && this.isSharedProjectionDirty || this.isProjectionDirty || !((a = this.parent) === null || a === void 0) && a.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: h, layoutId: f } = this.options;
      if (!(!this.layout || !(h || f))) {
        if (this.resolvedRelativeTargetAt = E.timestamp, !this.targetDelta && !this.relativeTarget) {
          const d = this.getClosestProjectingParent();
          d && d.layout && this.animationProgress !== 1 ? (this.relativeParent = d, this.forceRelativeParentToResolveTarget(), this.relativeTarget = M(), this.relativeTargetOrigin = M(), Vt(this.relativeTargetOrigin, this.layout.layoutBox, d.layout.layoutBox), U(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = M(), this.targetWithTransforms = M()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), Sl(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : U(this.target, this.layout.layoutBox), Xi(this.target, this.targetDelta)) : U(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
          this.attemptToResolveRelativeTarget = !1;
          const d = this.getClosestProjectingParent();
          d && !!d.resumingFrom == !!this.resumingFrom && !d.options.layoutScroll && d.target && this.animationProgress !== 1 ? (this.relativeParent = d, this.forceRelativeParentToResolveTarget(), this.relativeTarget = M(), this.relativeTargetOrigin = M(), Vt(this.relativeTargetOrigin, this.target, d.target), U(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Ce(this.parent.latestValues) || Yi(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var r;
      const a = this.getLead(), l = !!this.resumingFrom || this !== a;
      let u = !0;
      if ((this.isProjectionDirty || !((r = this.parent) === null || r === void 0) && r.isProjectionDirty) && (u = !1), l && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = !1), this.resolvedRelativeTargetAt === E.timestamp && (u = !1), u)
        return;
      const { layout: c, layoutId: h } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(c || h))
        return;
      U(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x, d = this.treeScale.y;
      Al(this.layoutCorrected, this.treeScale, this.path, l), a.layout && !a.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (a.target = a.layout.layoutBox, a.targetWithTransforms = M());
      const { target: m } = a;
      if (!m) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (ms(this.prevProjectionDelta.x, this.projectionDelta.x), ms(this.prevProjectionDelta.y, this.projectionDelta.y)), wt(this.projectionDelta, this.layoutCorrected, m, this.latestValues), (this.treeScale.x !== f || this.treeScale.y !== d || !bs(this.projectionDelta.x, this.prevProjectionDelta.x) || !bs(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", m));
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
      this.prevProjectionDelta = ut(), this.projectionDelta = ut(), this.projectionDeltaWithTransform = ut();
    }
    setAnimationOrigin(r, a = !1) {
      const l = this.snapshot, u = l ? l.latestValues : {}, c = { ...this.latestValues }, h = ut();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
      const f = M(), d = l ? l.source : void 0, m = this.layout ? this.layout.source : void 0, p = d !== m, y = this.getStack(), g = !y || y.members.length <= 1, v = !!(p && !g && this.options.crossfade === !0 && !this.path.some(vu));
      this.animationProgress = 0;
      let x;
      this.mixTargetDelta = (S) => {
        const P = S / 1e3;
        Vs(h.x, r.x, P), Vs(h.y, r.y, P), this.setTargetDelta(h), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Vt(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox), yu(this.relativeTarget, this.relativeTargetOrigin, f, P), x && eu(this.relativeTarget, x) && (this.isProjectionDirty = !1), x || (x = M()), U(x, this.relativeTarget)), p && (this.animationValues = c, Xl(c, u, this.latestValues, P, v, g)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = P;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(r) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (Z(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = w.update(() => {
        Wt.hasAnimatedSinceResize = !0, this.currentAnimation = Kl(0, Ss, {
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
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Ss), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const r = this.getLead();
      let { targetWithTransforms: a, target: l, layout: u, latestValues: c } = r;
      if (!(!a || !l || !u)) {
        if (this !== r && this.layout && u && or(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
          l = this.target || M();
          const h = O(this.layout.layoutBox.x);
          l.x.min = r.target.x.min, l.x.max = l.x.min + h;
          const f = O(this.layout.layoutBox.y);
          l.y.min = r.target.y.min, l.y.max = l.y.min + f;
        }
        U(a, l), ht(a, c), wt(this.projectionDeltaWithTransform, this.layoutCorrected, a, c);
      }
    }
    registerSharedNode(r, a) {
      this.sharedNodes.has(r) || this.sharedNodes.set(r, new nu()), this.sharedNodes.get(r).add(a);
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
      l.z && me("z", r, u, this.animationValues);
      for (let c = 0; c < de.length; c++)
        me(`rotate${de[c]}`, r, u, this.animationValues), me(`skew${de[c]}`, r, u, this.animationValues);
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
        return iu;
      const u = {
        visibility: ""
      }, c = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = !1, u.opacity = "", u.pointerEvents = $t(r == null ? void 0 : r.pointerEvents) || "", u.transform = c ? c(this.latestValues, "") : "none", u;
      const h = this.getLead();
      if (!this.projectionDelta || !this.layout || !h.target) {
        const p = {};
        return this.options.layoutId && (p.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, p.pointerEvents = $t(r == null ? void 0 : r.pointerEvents) || ""), this.hasProjected && !et(this.latestValues) && (p.transform = c ? c({}, "") : "none", this.hasProjected = !1), p;
      }
      const f = h.animationValues || h.latestValues;
      this.applyTransformsToTarget(), u.transform = su(this.projectionDeltaWithTransform, this.treeScale, f), c && (u.transform = c(f, u.transform));
      const { x: d, y: m } = this.projectionDelta;
      u.transformOrigin = `${d.origin * 100}% ${m.origin * 100}% 0`, h.animationValues ? u.opacity = h === this ? (l = (a = f.opacity) !== null && a !== void 0 ? a : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : f.opacityExit : u.opacity = h === this ? f.opacity !== void 0 ? f.opacity : "" : f.opacityExit !== void 0 ? f.opacityExit : 0;
      for (const p in Ct) {
        if (f[p] === void 0)
          continue;
        const { correct: y, applyTo: g, isCSSVariable: v } = Ct[p], x = u.transform === "none" ? f[p] : y(f[p], h);
        if (g) {
          const S = g.length;
          for (let P = 0; P < S; P++)
            u[g[P]] = x;
        } else
          v ? this.options.visualElement.renderState.vars[p] = x : u[p] = x;
      }
      return this.options.layoutId && (u.pointerEvents = h === this ? $t(r == null ? void 0 : r.pointerEvents) || "" : "none"), u;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((r) => {
        var a;
        return (a = r.currentAnimation) === null || a === void 0 ? void 0 : a.stop();
      }), this.root.nodes.forEach(As), this.root.sharedNodes.clear();
    }
  };
}
function ou(t) {
  t.updateLayout();
}
function au(t) {
  var e;
  const n = ((e = t.resumeFrom) === null || e === void 0 ? void 0 : e.snapshot) || t.snapshot;
  if (t.isLead() && t.layout && n && t.hasListeners("didUpdate")) {
    const { layoutBox: s, measuredBox: i } = t.layout, { animationType: o } = t.options, r = n.source !== t.layout.source;
    o === "size" ? _((h) => {
      const f = r ? n.measuredBox[h] : n.layoutBox[h], d = O(f);
      f.min = s[h].min, f.max = f.min + d;
    }) : or(o, n.layoutBox, s) && _((h) => {
      const f = r ? n.measuredBox[h] : n.layoutBox[h], d = O(s[h]);
      f.max = f.min + d, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[h].max = t.relativeTarget[h].min + d);
    });
    const a = ut();
    wt(a, s, n.layoutBox);
    const l = ut();
    r ? wt(l, t.applyTransform(i, !0), n.measuredBox) : wt(l, s, n.layoutBox);
    const u = !nr(a);
    let c = !1;
    if (!t.resumeFrom) {
      const h = t.getClosestProjectingParent();
      if (h && !h.resumeFrom) {
        const { snapshot: f, layout: d } = h;
        if (f && d) {
          const m = M();
          Vt(m, n.layoutBox, f.layoutBox);
          const p = M();
          Vt(p, s, d.layoutBox), sr(m, p) || (c = !0), h.options.layoutRoot && (t.relativeTarget = p, t.relativeTargetOrigin = m, t.relativeParent = h);
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
function lu(t) {
  t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty));
}
function uu(t) {
  t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1;
}
function cu(t) {
  t.clearSnapshot();
}
function As(t) {
  t.clearMeasurements();
}
function hu(t) {
  t.isLayoutDirty = !1;
}
function fu(t) {
  const { visualElement: e } = t.options;
  e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform();
}
function ws(t) {
  t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0;
}
function du(t) {
  t.resolveTargetDelta();
}
function mu(t) {
  t.calcProjection();
}
function pu(t) {
  t.resetSkewAndRotation();
}
function gu(t) {
  t.removeLeadSnapshot();
}
function Vs(t, e, n) {
  t.translate = C(e.translate, 0, n), t.scale = C(e.scale, 1, n), t.origin = e.origin, t.originPoint = e.originPoint;
}
function Ds(t, e, n, s) {
  t.min = C(e.min, n.min, s), t.max = C(e.max, n.max, s);
}
function yu(t, e, n, s) {
  Ds(t.x, e.x, n.x, s), Ds(t.y, e.y, n.y, s);
}
function vu(t) {
  return t.animationValues && t.animationValues.opacityExit !== void 0;
}
const xu = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, Cs = (t) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t), Ms = Cs("applewebkit/") && !Cs("chrome/") ? Math.round : j;
function Rs(t) {
  t.min = Ms(t.min), t.max = Ms(t.max);
}
function Tu(t) {
  Rs(t.x), Rs(t.y);
}
function or(t, e, n) {
  return t === "position" || t === "preserve-aspect" && !bl(Ps(e), Ps(n), 0.2);
}
function Pu(t) {
  var e;
  return t !== t.root && ((e = t.scroll) === null || e === void 0 ? void 0 : e.wasRoot);
}
const bu = rr({
  attachResizeListener: (t, e) => kt(t, "resize", e),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), pe = {
  current: void 0
}, ar = rr({
  measureScroll: (t) => ({
    x: t.scrollLeft,
    y: t.scrollTop
  }),
  defaultParent: () => {
    if (!pe.current) {
      const t = new bu({});
      t.mount(window), t.setOptions({ layoutScroll: !0 }), pe.current = t;
    }
    return pe.current;
  },
  resetTransform: (t, e) => {
    t.style.transform = e !== void 0 ? e : "none";
  },
  checkIsScrollRoot: (t) => window.getComputedStyle(t).position === "fixed"
}), Su = {
  pan: {
    Feature: Nl
  },
  drag: {
    Feature: jl,
    ProjectionNode: ar,
    MeasureLayout: Qi
  }
};
function Es(t, e, n) {
  const { props: s } = t;
  t.animationState && s.whileHover && t.animationState.setActive("whileHover", n === "Start");
  const i = "onHover" + n, o = s[i];
  o && w.postRender(() => o(e, It(e)));
}
class Au extends Q {
  mount() {
    const { current: e } = this.node;
    e && (this.unmount = bo(e, (n, s) => (Es(this.node, s, "Start"), (i) => Es(this.node, i, "End"))));
  }
  unmount() {
  }
}
class wu extends Q {
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
    this.unmount = Ot(kt(this.node.current, "focus", () => this.onFocus()), kt(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function Ls(t, e, n) {
  const { props: s } = t;
  if (t.current instanceof HTMLButtonElement && t.current.disabled)
    return;
  t.animationState && s.whileTap && t.animationState.setActive("whileTap", n === "Start");
  const i = "onTap" + (n === "End" ? "" : n), o = s[i];
  o && w.postRender(() => o(e, It(e)));
}
class Vu extends Q {
  mount() {
    const { current: e } = this.node;
    e && (this.unmount = Vo(e, (n, s) => (Ls(this.node, s, "Start"), (i, { success: o }) => Ls(this.node, i, o ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
  }
  unmount() {
  }
}
const Ee = /* @__PURE__ */ new WeakMap(), ge = /* @__PURE__ */ new WeakMap(), Du = (t) => {
  const e = Ee.get(t.target);
  e && e(t);
}, Cu = (t) => {
  t.forEach(Du);
};
function Mu({ root: t, ...e }) {
  const n = t || document;
  ge.has(n) || ge.set(n, {});
  const s = ge.get(n), i = JSON.stringify(e);
  return s[i] || (s[i] = new IntersectionObserver(Cu, { root: t, ...e })), s[i];
}
function Ru(t, e, n) {
  const s = Mu(e);
  return Ee.set(t, n), s.observe(t), () => {
    Ee.delete(t), s.unobserve(t);
  };
}
const Eu = {
  some: 0,
  all: 1
};
class Lu extends Q {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: e = {} } = this.node.getProps(), { root: n, margin: s, amount: i = "some", once: o } = e, r = {
      root: n ? n.current : void 0,
      rootMargin: s,
      threshold: typeof i == "number" ? i : Eu[i]
    }, a = (l) => {
      const { isIntersecting: u } = l;
      if (this.isInView === u || (this.isInView = u, o && !u && this.hasEnteredView))
        return;
      u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
      const { onViewportEnter: c, onViewportLeave: h } = this.node.getProps(), f = u ? c : h;
      f && f(l);
    };
    return Ru(this.node.current, r, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: e, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(ku(e, n)) && this.startObserver();
  }
  unmount() {
  }
}
function ku({ viewport: t = {} }, { viewport: e = {} } = {}) {
  return (n) => t[n] !== e[n];
}
const Bu = {
  inView: {
    Feature: Lu
  },
  tap: {
    Feature: Vu
  },
  focus: {
    Feature: wu
  },
  hover: {
    Feature: Au
  }
}, Fu = {
  layout: {
    ProjectionNode: ar,
    MeasureLayout: Qi
  }
}, Le = { current: null }, lr = { current: !1 };
function Ou() {
  if (lr.current = !0, !!Fe)
    if (window.matchMedia) {
      const t = window.matchMedia("(prefers-reduced-motion)"), e = () => Le.current = t.matches;
      t.addListener(e), e();
    } else
      Le.current = !1;
}
const Iu = [...ki, L, J], ju = (t) => Iu.find(Li(t)), Nu = /* @__PURE__ */ new WeakMap();
function Uu(t, e, n) {
  for (const s in e) {
    const i = e[s], o = n[s];
    if (k(i))
      t.addValue(s, i), process.env.NODE_ENV === "development" && Jt(i.version === "12.4.10", `Attempting to mix Motion versions ${i.version} with 12.4.10 may not work as expected.`);
    else if (k(o))
      t.addValue(s, Et(i, { owner: t }));
    else if (o !== i)
      if (t.hasValue(s)) {
        const r = t.getValue(s);
        r.liveStyle === !0 ? r.jump(i) : r.hasAnimated || r.set(i);
      } else {
        const r = t.getStaticValue(s);
        t.addValue(s, Et(r !== void 0 ? r : i, { owner: t }));
      }
  }
  for (const s in n)
    e[s] === void 0 && t.removeValue(s);
  return e;
}
const ks = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
class _u {
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
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = cn, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const d = G.now();
      this.renderScheduledAt < d && (this.renderScheduledAt = d, w.render(this.render, !1, !0));
    };
    const { latestValues: l, renderState: u, onUpdate: c } = r;
    this.onUpdate = c, this.latestValues = l, this.baseTarget = { ...l }, this.initialValues = n.initial ? { ...l } : {}, this.renderState = u, this.parent = e, this.props = n, this.presenceContext = s, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = i, this.options = a, this.blockInitialAnimation = !!o, this.isControllingVariants = ee(n), this.isVariantNode = $s(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(e && e.current);
    const { willChange: h, ...f } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const d in f) {
      const m = f[d];
      l[d] !== void 0 && k(m) && m.set(l[d], !1);
    }
  }
  mount(e) {
    this.current = e, Nu.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, s) => this.bindToMotionValue(s, n)), lr.current || Ou(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Le.current, process.env.NODE_ENV !== "production" && Jt(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected."), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    this.projection && this.projection.unmount(), Z(this.notifyUpdate), Z(this.render), this.valueSubscriptions.forEach((e) => e()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
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
    const s = it.has(e);
    s && this.onBindTransform && this.onBindTransform();
    const i = n.on("change", (a) => {
      this.latestValues[e] = a, this.props.onUpdate && w.preRender(this.notifyUpdate), s && this.projection && (this.projection.isTransformDirty = !0);
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
    for (e in dt) {
      const n = dt[e];
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
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : M();
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
    for (let s = 0; s < ks.length; s++) {
      const i = ks[s];
      this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
      const o = "on" + i, r = e[o];
      r && (this.propEventSubscriptions[i] = this.on(i, r));
    }
    this.prevMotionValues = Uu(this, this.scrapeMotionValuesFromProps(e, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue(), this.onUpdate && this.onUpdate(this);
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
    return s === void 0 && n !== void 0 && (s = Et(n === null ? void 0 : n, { owner: this }), this.addValue(e, s)), s;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(e, n) {
    var s;
    let i = this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : (s = this.getBaseTargetFromProps(this.props, e)) !== null && s !== void 0 ? s : this.readValueFromInstance(this.current, e, this.options);
    return i != null && (typeof i == "string" && (Ri(i) || Pi(i)) ? i = parseFloat(i) : !ju(i) && J.test(n) && (i = Di(e, n)), this.setBaseTarget(e, k(i) ? i.get() : i)), k(i) ? i.get() : i;
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
      const r = Xe(this.props, s, (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom);
      r && (i = r[e]);
    }
    if (s && i !== void 0)
      return i;
    const o = this.getBaseTargetFromProps(this.props, e);
    return o !== void 0 && !k(o) ? o : this.initialValues[e] !== void 0 && i === void 0 ? void 0 : this.baseTarget[e];
  }
  on(e, n) {
    return this.events[e] || (this.events[e] = new sn()), this.events[e].add(n);
  }
  notify(e, ...n) {
    this.events[e] && this.events[e].notify(...n);
  }
}
class ur extends _u {
  constructor() {
    super(...arguments), this.KeyframeResolver = Bi;
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
    k(e) && (this.childSubscription = e.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
}
function $u(t) {
  return window.getComputedStyle(t);
}
class Ku extends ur {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = Qs;
  }
  readValueFromInstance(e, n) {
    if (it.has(n)) {
      const s = un(n);
      return s && s.default || 0;
    } else {
      const s = $u(e), i = (_e(n) ? s.getPropertyValue(n) : s[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(e, { transformPagePoint: n }) {
    return qi(e, n);
  }
  build(e, n, s) {
    We(e, n, s.transformTemplate);
  }
  scrapeMotionValuesFromProps(e, n, s) {
    return qe(e, n, s);
  }
}
class Wu extends ur {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = M, this.updateDimensions = () => {
      this.current && !this.renderState.dimensions && Js(this.current, this.renderState);
    };
  }
  getBaseTargetFromProps(e, n) {
    return e[n];
  }
  readValueFromInstance(e, n) {
    if (it.has(n)) {
      const s = un(n);
      return s && s.default || 0;
    }
    return n = ti.has(n) ? n : Ne(n), e.getAttribute(n);
  }
  scrapeMotionValuesFromProps(e, n, s) {
    return ni(e, n, s);
  }
  onBindTransform() {
    this.current && !this.renderState.dimensions && w.postRender(this.updateDimensions);
  }
  build(e, n, s) {
    He(e, n, this.isSVGTag, s.transformTemplate);
  }
  renderInstance(e, n, s, i) {
    ei(e, n, s, i);
  }
  mount(e) {
    this.isSVGTag = Ye(e.tagName), super.mount(e);
  }
}
const Gu = (t, e) => ze(t) ? new Wu(e) : new Ku(e, {
  allowProjection: t !== Fs
}), zu = /* @__PURE__ */ po({
  ...ml,
  ...Bu,
  ...Su,
  ...Fu
}, Gu), Hu = /* @__PURE__ */ Rr(zu), V = {
  colors: {
    primary: "#ff3d00",
    // Rouge atomique 🔥 (Contraste AA sur fond clair, AAA sur fond foncé)
    secondary: "#0f172a",
    // Bleu très sombre (Contraste AAA sur fond clair)
    outline: "#ff9100",
    // Orange vif (Contraste AA sur fond foncé)
    textPrimary: "#ffffff",
    // Blanc (Contraste AAA sur fond foncé)
    textSecondary: "#ffd700"
  },
  darkMode: {
    primary: "#ff5722",
    // Orange atomique 💣 (Contraste AA sur fond sombre)
    secondary: "#2d3748",
    // Gris bleuté (Contraste AAA sur fond clair)
    outline: "#ffa726",
    // Orange plus doux (Contraste AA sur fond sombre)
    textPrimary: "#f9fafb"
  },
  borderRadius: {
    lg: "1.5rem"
  },
  boxShadow: {
    // Glow rouge
    md: "0 4px 8px rgba(255, 0, 0, 0.3)"
  },
  transition: "300ms cubic-bezier(0.4, 0, 0.2, 1)"
};
function Yu() {
  const t = F(hr);
  if (!t)
    throw new Error("useTheme must be used within a ThemeProvider");
  return t;
}
const tc = ({
  variant: t = "primary",
  size: e = "md",
  type: n,
  children: s,
  onClick: i,
  disabled: o,
  className: r
}) => {
  const { isDarkMode: a } = Yu(), [l, u] = vr(), c = `rounded-lg font-medium transition-all cursor-pointer ${V.transition} ${r}`, h = {
    primary: `bg-[${V.colors.primary}] text-[${V.colors.textPrimary}] hover:bg-[${V.colors.secondary}]`,
    secondary: `bg-[${V.colors.secondary}] text-[${V.colors.textSecondary}] hover:bg-[${V.colors.secondary}`,
    outline: `border border-[${V.colors.outline}] text-[${V.colors.outline}] hover:bg-[${V.colors.secondary}`
  }, f = {
    primary: `bg-[${V.darkMode.primary}] text-[${V.darkMode.textPrimary}] hover:bg-[${V.darkMode.secondary}`,
    secondary: `bg-[${V.darkMode.secondary}] text-[${V.darkMode.textPrimary}] hover:bg-[${V.darkMode.secondary}`,
    outline: `border border-[${V.darkMode.outline}] text-[${V.darkMode.outline}] hover:bg-[${V.darkMode.secondary}`
  }, d = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-3 text-lg"
  }, m = () => i ? u(() => {
    i();
  }) : console.log("boom");
  return /* @__PURE__ */ Gt.jsx(
    Hu.button,
    {
      className: xr(
        c,
        a ? f[t] : h[t],
        d[e],
        (o || l) && "opacity-50"
      ),
      onClick: m,
      disabled: o || l,
      type: n,
      whileHover: { scale: 1.1 },
      whileTap: { scale: 0.9 },
      style: {
        backgroundColor: V.colors.primary,
        color: V.colors.textPrimary,
        borderRadius: V.borderRadius.lg,
        boxShadow: V.boxShadow.md,
        cursor: o || l ? "not-allowed" : "pointer"
      },
      children: l ? "Pending..." : s
    }
  );
};
export {
  tc as default
};
//# sourceMappingURL=Button-BIfXMKTg.js.map
