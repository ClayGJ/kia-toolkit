(() => {
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a3, b2) => {
    for (var prop in b2 || (b2 = {}))
      if (__hasOwnProp.call(b2, prop))
        __defNormalProp(a3, prop, b2[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b2)) {
        if (__propIsEnum.call(b2, prop))
          __defNormalProp(a3, prop, b2[prop]);
      }
    return a3;
  };
  var __spreadProps = (a3, b2) => __defProps(a3, __getOwnPropDescs(b2));
  var __objRest = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // node_modules/.pnpm/preact@10.23.1/node_modules/preact/dist/preact.module.js
  function d(n2, l3) {
    for (var u3 in l3)
      n2[u3] = l3[u3];
    return n2;
  }
  function w(n2) {
    var l3 = n2.parentNode;
    l3 && l3.removeChild(n2);
  }
  function _(l3, u3, t3) {
    var i3, o3, r3, f3 = {};
    for (r3 in u3)
      "key" == r3 ? i3 = u3[r3] : "ref" == r3 ? o3 = u3[r3] : f3[r3] = u3[r3];
    if (arguments.length > 2 && (f3.children = arguments.length > 3 ? n.call(arguments, 2) : t3), "function" == typeof l3 && null != l3.defaultProps)
      for (r3 in l3.defaultProps)
        void 0 === f3[r3] && (f3[r3] = l3.defaultProps[r3]);
    return g(l3, f3, i3, o3, null);
  }
  function g(n2, t3, i3, o3, r3) {
    var f3 = { type: n2, props: t3, key: i3, ref: o3, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: null == r3 ? ++u : r3, __i: -1, __u: 0 };
    return null == r3 && null != l.vnode && l.vnode(f3), f3;
  }
  function k(n2) {
    return n2.children;
  }
  function b(n2, l3) {
    this.props = n2, this.context = l3;
  }
  function x(n2, l3) {
    if (null == l3)
      return n2.__ ? x(n2.__, n2.__i + 1) : null;
    for (var u3; l3 < n2.__k.length; l3++)
      if (null != (u3 = n2.__k[l3]) && null != u3.__e)
        return u3.__e;
    return "function" == typeof n2.type ? x(n2) : null;
  }
  function C(n2) {
    var l3, u3;
    if (null != (n2 = n2.__) && null != n2.__c) {
      for (n2.__e = n2.__c.base = null, l3 = 0; l3 < n2.__k.length; l3++)
        if (null != (u3 = n2.__k[l3]) && null != u3.__e) {
          n2.__e = n2.__c.base = u3.__e;
          break;
        }
      return C(n2);
    }
  }
  function M(n2) {
    (!n2.__d && (n2.__d = true) && i.push(n2) && !P.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || r)(P);
  }
  function P() {
    var n2, u3, t3, o3, r3, e3, c3, s3;
    for (i.sort(f); n2 = i.shift(); )
      n2.__d && (u3 = i.length, o3 = void 0, e3 = (r3 = (t3 = n2).__v).__e, c3 = [], s3 = [], t3.__P && ((o3 = d({}, r3)).__v = r3.__v + 1, l.vnode && l.vnode(o3), O(t3.__P, o3, r3, t3.__n, t3.__P.namespaceURI, 32 & r3.__u ? [e3] : null, c3, null == e3 ? x(r3) : e3, !!(32 & r3.__u), s3), o3.__v = r3.__v, o3.__.__k[o3.__i] = o3, j(c3, o3, s3), o3.__e != e3 && C(o3)), i.length > u3 && i.sort(f));
    P.__r = 0;
  }
  function S(n2, l3, u3, t3, i3, o3, r3, f3, e3, c3, s3) {
    var a3, v3, y2, d3, w3, _2 = t3 && t3.__k || p, g2 = l3.length;
    for (u3.__d = e3, $(u3, l3, _2), e3 = u3.__d, a3 = 0; a3 < g2; a3++)
      null != (y2 = u3.__k[a3]) && "boolean" != typeof y2 && "function" != typeof y2 && (v3 = -1 === y2.__i ? h : _2[y2.__i] || h, y2.__i = a3, O(n2, y2, v3, i3, o3, r3, f3, e3, c3, s3), d3 = y2.__e, y2.ref && v3.ref != y2.ref && (v3.ref && N(v3.ref, null, y2), s3.push(y2.ref, y2.__c || d3, y2)), null == w3 && null != d3 && (w3 = d3), 65536 & y2.__u || v3.__k === y2.__k ? e3 = I(y2, e3, n2) : "function" == typeof y2.type && void 0 !== y2.__d ? e3 = y2.__d : d3 && (e3 = d3.nextSibling), y2.__d = void 0, y2.__u &= -196609);
    u3.__d = e3, u3.__e = w3;
  }
  function $(n2, l3, u3) {
    var t3, i3, o3, r3, f3, e3 = l3.length, c3 = u3.length, s3 = c3, a3 = 0;
    for (n2.__k = [], t3 = 0; t3 < e3; t3++)
      r3 = t3 + a3, null != (i3 = n2.__k[t3] = null == (i3 = l3[t3]) || "boolean" == typeof i3 || "function" == typeof i3 ? null : "string" == typeof i3 || "number" == typeof i3 || "bigint" == typeof i3 || i3.constructor == String ? g(null, i3, null, null, null) : y(i3) ? g(k, { children: i3 }, null, null, null) : void 0 === i3.constructor && i3.__b > 0 ? g(i3.type, i3.props, i3.key, i3.ref ? i3.ref : null, i3.__v) : i3) ? (i3.__ = n2, i3.__b = n2.__b + 1, f3 = L(i3, u3, r3, s3), i3.__i = f3, o3 = null, -1 !== f3 && (s3--, (o3 = u3[f3]) && (o3.__u |= 131072)), null == o3 || null === o3.__v ? (-1 == f3 && a3--, "function" != typeof i3.type && (i3.__u |= 65536)) : f3 !== r3 && (f3 == r3 - 1 ? a3 = f3 - r3 : f3 == r3 + 1 ? a3++ : f3 > r3 ? s3 > e3 - r3 ? a3 += f3 - r3 : a3-- : f3 < r3 && a3++, f3 !== t3 + a3 && (i3.__u |= 65536))) : (o3 = u3[r3]) && null == o3.key && o3.__e && 0 == (131072 & o3.__u) && (o3.__e == n2.__d && (n2.__d = x(o3)), V(o3, o3, false), u3[r3] = null, s3--);
    if (s3)
      for (t3 = 0; t3 < c3; t3++)
        null != (o3 = u3[t3]) && 0 == (131072 & o3.__u) && (o3.__e == n2.__d && (n2.__d = x(o3)), V(o3, o3));
  }
  function I(n2, l3, u3) {
    var t3, i3;
    if ("function" == typeof n2.type) {
      for (t3 = n2.__k, i3 = 0; t3 && i3 < t3.length; i3++)
        t3[i3] && (t3[i3].__ = n2, l3 = I(t3[i3], l3, u3));
      return l3;
    }
    n2.__e != l3 && (l3 && n2.type && !u3.contains(l3) && (l3 = x(n2)), u3.insertBefore(n2.__e, l3 || null), l3 = n2.__e);
    do {
      l3 = l3 && l3.nextSibling;
    } while (null != l3 && 8 === l3.nodeType);
    return l3;
  }
  function H(n2, l3) {
    return l3 = l3 || [], null == n2 || "boolean" == typeof n2 || (y(n2) ? n2.some(function(n3) {
      H(n3, l3);
    }) : l3.push(n2)), l3;
  }
  function L(n2, l3, u3, t3) {
    var i3 = n2.key, o3 = n2.type, r3 = u3 - 1, f3 = u3 + 1, e3 = l3[u3];
    if (null === e3 || e3 && i3 == e3.key && o3 === e3.type && 0 == (131072 & e3.__u))
      return u3;
    if (t3 > (null != e3 && 0 == (131072 & e3.__u) ? 1 : 0))
      for (; r3 >= 0 || f3 < l3.length; ) {
        if (r3 >= 0) {
          if ((e3 = l3[r3]) && 0 == (131072 & e3.__u) && i3 == e3.key && o3 === e3.type)
            return r3;
          r3--;
        }
        if (f3 < l3.length) {
          if ((e3 = l3[f3]) && 0 == (131072 & e3.__u) && i3 == e3.key && o3 === e3.type)
            return f3;
          f3++;
        }
      }
    return -1;
  }
  function T(n2, l3, u3) {
    "-" === l3[0] ? n2.setProperty(l3, null == u3 ? "" : u3) : n2[l3] = null == u3 ? "" : "number" != typeof u3 || v.test(l3) ? u3 : u3 + "px";
  }
  function A(n2, l3, u3, t3, i3) {
    var o3;
    n:
      if ("style" === l3)
        if ("string" == typeof u3)
          n2.style.cssText = u3;
        else {
          if ("string" == typeof t3 && (n2.style.cssText = t3 = ""), t3)
            for (l3 in t3)
              u3 && l3 in u3 || T(n2.style, l3, "");
          if (u3)
            for (l3 in u3)
              t3 && u3[l3] === t3[l3] || T(n2.style, l3, u3[l3]);
        }
      else if ("o" === l3[0] && "n" === l3[1])
        o3 = l3 !== (l3 = l3.replace(/(PointerCapture)$|Capture$/i, "$1")), l3 = l3.toLowerCase() in n2 || "onFocusOut" === l3 || "onFocusIn" === l3 ? l3.toLowerCase().slice(2) : l3.slice(2), n2.l || (n2.l = {}), n2.l[l3 + o3] = u3, u3 ? t3 ? u3.u = t3.u : (u3.u = e, n2.addEventListener(l3, o3 ? s : c, o3)) : n2.removeEventListener(l3, o3 ? s : c, o3);
      else {
        if ("http://www.w3.org/2000/svg" == i3)
          l3 = l3.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if ("width" != l3 && "height" != l3 && "href" != l3 && "list" != l3 && "form" != l3 && "tabIndex" != l3 && "download" != l3 && "rowSpan" != l3 && "colSpan" != l3 && "role" != l3 && "popover" != l3 && l3 in n2)
          try {
            n2[l3] = null == u3 ? "" : u3;
            break n;
          } catch (n3) {
          }
        "function" == typeof u3 || (null == u3 || false === u3 && "-" !== l3[4] ? n2.removeAttribute(l3) : n2.setAttribute(l3, "popover" == l3 && 1 == u3 ? "" : u3));
      }
  }
  function F(n2) {
    return function(u3) {
      if (this.l) {
        var t3 = this.l[u3.type + n2];
        if (null == u3.t)
          u3.t = e++;
        else if (u3.t < t3.u)
          return;
        return t3(l.event ? l.event(u3) : u3);
      }
    };
  }
  function O(n2, u3, t3, i3, o3, r3, f3, e3, c3, s3) {
    var a3, h2, p2, v3, w3, _2, g2, m2, x2, C3, M2, P2, $2, I2, H2, L2, T3 = u3.type;
    if (void 0 !== u3.constructor)
      return null;
    128 & t3.__u && (c3 = !!(32 & t3.__u), r3 = [e3 = u3.__e = t3.__e]), (a3 = l.__b) && a3(u3);
    n:
      if ("function" == typeof T3)
        try {
          if (m2 = u3.props, x2 = "prototype" in T3 && T3.prototype.render, C3 = (a3 = T3.contextType) && i3[a3.__c], M2 = a3 ? C3 ? C3.props.value : a3.__ : i3, t3.__c ? g2 = (h2 = u3.__c = t3.__c).__ = h2.__E : (x2 ? u3.__c = h2 = new T3(m2, M2) : (u3.__c = h2 = new b(m2, M2), h2.constructor = T3, h2.render = q), C3 && C3.sub(h2), h2.props = m2, h2.state || (h2.state = {}), h2.context = M2, h2.__n = i3, p2 = h2.__d = true, h2.__h = [], h2._sb = []), x2 && null == h2.__s && (h2.__s = h2.state), x2 && null != T3.getDerivedStateFromProps && (h2.__s == h2.state && (h2.__s = d({}, h2.__s)), d(h2.__s, T3.getDerivedStateFromProps(m2, h2.__s))), v3 = h2.props, w3 = h2.state, h2.__v = u3, p2)
            x2 && null == T3.getDerivedStateFromProps && null != h2.componentWillMount && h2.componentWillMount(), x2 && null != h2.componentDidMount && h2.__h.push(h2.componentDidMount);
          else {
            if (x2 && null == T3.getDerivedStateFromProps && m2 !== v3 && null != h2.componentWillReceiveProps && h2.componentWillReceiveProps(m2, M2), !h2.__e && (null != h2.shouldComponentUpdate && false === h2.shouldComponentUpdate(m2, h2.__s, M2) || u3.__v === t3.__v)) {
              for (u3.__v !== t3.__v && (h2.props = m2, h2.state = h2.__s, h2.__d = false), u3.__e = t3.__e, u3.__k = t3.__k, u3.__k.forEach(function(n3) {
                n3 && (n3.__ = u3);
              }), P2 = 0; P2 < h2._sb.length; P2++)
                h2.__h.push(h2._sb[P2]);
              h2._sb = [], h2.__h.length && f3.push(h2);
              break n;
            }
            null != h2.componentWillUpdate && h2.componentWillUpdate(m2, h2.__s, M2), x2 && null != h2.componentDidUpdate && h2.__h.push(function() {
              h2.componentDidUpdate(v3, w3, _2);
            });
          }
          if (h2.context = M2, h2.props = m2, h2.__P = n2, h2.__e = false, $2 = l.__r, I2 = 0, x2) {
            for (h2.state = h2.__s, h2.__d = false, $2 && $2(u3), a3 = h2.render(h2.props, h2.state, h2.context), H2 = 0; H2 < h2._sb.length; H2++)
              h2.__h.push(h2._sb[H2]);
            h2._sb = [];
          } else
            do {
              h2.__d = false, $2 && $2(u3), a3 = h2.render(h2.props, h2.state, h2.context), h2.state = h2.__s;
            } while (h2.__d && ++I2 < 25);
          h2.state = h2.__s, null != h2.getChildContext && (i3 = d(d({}, i3), h2.getChildContext())), x2 && !p2 && null != h2.getSnapshotBeforeUpdate && (_2 = h2.getSnapshotBeforeUpdate(v3, w3)), S(n2, y(L2 = null != a3 && a3.type === k && null == a3.key ? a3.props.children : a3) ? L2 : [L2], u3, t3, i3, o3, r3, f3, e3, c3, s3), h2.base = u3.__e, u3.__u &= -161, h2.__h.length && f3.push(h2), g2 && (h2.__E = h2.__ = null);
        } catch (n3) {
          if (u3.__v = null, c3 || null != r3) {
            for (u3.__u |= c3 ? 160 : 32; e3 && 8 === e3.nodeType && e3.nextSibling; )
              e3 = e3.nextSibling;
            r3[r3.indexOf(e3)] = null, u3.__e = e3;
          } else
            u3.__e = t3.__e, u3.__k = t3.__k;
          l.__e(n3, u3, t3);
        }
      else
        null == r3 && u3.__v === t3.__v ? (u3.__k = t3.__k, u3.__e = t3.__e) : u3.__e = z(t3.__e, u3, t3, i3, o3, r3, f3, c3, s3);
    (a3 = l.diffed) && a3(u3);
  }
  function j(n2, u3, t3) {
    u3.__d = void 0;
    for (var i3 = 0; i3 < t3.length; i3++)
      N(t3[i3], t3[++i3], t3[++i3]);
    l.__c && l.__c(u3, n2), n2.some(function(u4) {
      try {
        n2 = u4.__h, u4.__h = [], n2.some(function(n3) {
          n3.call(u4);
        });
      } catch (n3) {
        l.__e(n3, u4.__v);
      }
    });
  }
  function z(l3, u3, t3, i3, o3, r3, f3, e3, c3) {
    var s3, a3, p2, v3, d3, _2, g2, m2 = t3.props, k3 = u3.props, b2 = u3.type;
    if ("svg" === b2 ? o3 = "http://www.w3.org/2000/svg" : "math" === b2 ? o3 = "http://www.w3.org/1998/Math/MathML" : o3 || (o3 = "http://www.w3.org/1999/xhtml"), null != r3) {
      for (s3 = 0; s3 < r3.length; s3++)
        if ((d3 = r3[s3]) && "setAttribute" in d3 == !!b2 && (b2 ? d3.localName === b2 : 3 === d3.nodeType)) {
          l3 = d3, r3[s3] = null;
          break;
        }
    }
    if (null == l3) {
      if (null === b2)
        return document.createTextNode(k3);
      l3 = document.createElementNS(o3, b2, k3.is && k3), r3 = null, e3 = false;
    }
    if (null === b2)
      m2 === k3 || e3 && l3.data === k3 || (l3.data = k3);
    else {
      if (r3 = r3 && n.call(l3.childNodes), m2 = t3.props || h, !e3 && null != r3)
        for (m2 = {}, s3 = 0; s3 < l3.attributes.length; s3++)
          m2[(d3 = l3.attributes[s3]).name] = d3.value;
      for (s3 in m2)
        if (d3 = m2[s3], "children" == s3)
          ;
        else if ("dangerouslySetInnerHTML" == s3)
          p2 = d3;
        else if ("key" !== s3 && !(s3 in k3)) {
          if ("value" == s3 && "defaultValue" in k3 || "checked" == s3 && "defaultChecked" in k3)
            continue;
          A(l3, s3, null, d3, o3);
        }
      for (s3 in k3)
        d3 = k3[s3], "children" == s3 ? v3 = d3 : "dangerouslySetInnerHTML" == s3 ? a3 = d3 : "value" == s3 ? _2 = d3 : "checked" == s3 ? g2 = d3 : "key" === s3 || e3 && "function" != typeof d3 || m2[s3] === d3 || A(l3, s3, d3, m2[s3], o3);
      if (a3)
        e3 || p2 && (a3.__html === p2.__html || a3.__html === l3.innerHTML) || (l3.innerHTML = a3.__html), u3.__k = [];
      else if (p2 && (l3.innerHTML = ""), S(l3, y(v3) ? v3 : [v3], u3, t3, i3, "foreignObject" === b2 ? "http://www.w3.org/1999/xhtml" : o3, r3, f3, r3 ? r3[0] : t3.__k && x(t3, 0), e3, c3), null != r3)
        for (s3 = r3.length; s3--; )
          null != r3[s3] && w(r3[s3]);
      e3 || (s3 = "value", void 0 !== _2 && (_2 !== l3[s3] || "progress" === b2 && !_2 || "option" === b2 && _2 !== m2[s3]) && A(l3, s3, _2, m2[s3], o3), s3 = "checked", void 0 !== g2 && g2 !== l3[s3] && A(l3, s3, g2, m2[s3], o3));
    }
    return l3;
  }
  function N(n2, u3, t3) {
    try {
      if ("function" == typeof n2) {
        var i3 = "function" == typeof n2.__u;
        i3 && n2.__u(), i3 && null == u3 || (n2.__u = n2(u3));
      } else
        n2.current = u3;
    } catch (n3) {
      l.__e(n3, t3);
    }
  }
  function V(n2, u3, t3) {
    var i3, o3;
    if (l.unmount && l.unmount(n2), (i3 = n2.ref) && (i3.current && i3.current !== n2.__e || N(i3, null, u3)), null != (i3 = n2.__c)) {
      if (i3.componentWillUnmount)
        try {
          i3.componentWillUnmount();
        } catch (n3) {
          l.__e(n3, u3);
        }
      i3.base = i3.__P = null;
    }
    if (i3 = n2.__k)
      for (o3 = 0; o3 < i3.length; o3++)
        i3[o3] && V(i3[o3], u3, t3 || "function" != typeof n2.type);
    t3 || null == n2.__e || w(n2.__e), n2.__c = n2.__ = n2.__e = n2.__d = void 0;
  }
  function q(n2, l3, u3) {
    return this.constructor(n2, u3);
  }
  function B(u3, t3, i3) {
    var o3, r3, f3, e3;
    l.__ && l.__(u3, t3), r3 = (o3 = "function" == typeof i3) ? null : i3 && i3.__k || t3.__k, f3 = [], e3 = [], O(t3, u3 = (!o3 && i3 || t3).__k = _(k, null, [u3]), r3 || h, h, t3.namespaceURI, !o3 && i3 ? [i3] : r3 ? null : t3.firstChild ? n.call(t3.childNodes) : null, f3, !o3 && i3 ? i3 : r3 ? r3.__e : t3.firstChild, o3, e3), j(f3, u3, e3);
  }
  var n, l, u, t, i, o, r, f, e, c, s, a, h, p, v, y;
  var init_preact_module = __esm({
    "node_modules/.pnpm/preact@10.23.1/node_modules/preact/dist/preact.module.js"() {
      h = {};
      p = [];
      v = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
      y = Array.isArray;
      n = p.slice, l = { __e: function(n2, l3, u3, t3) {
        for (var i3, o3, r3; l3 = l3.__; )
          if ((i3 = l3.__c) && !i3.__)
            try {
              if ((o3 = i3.constructor) && null != o3.getDerivedStateFromError && (i3.setState(o3.getDerivedStateFromError(n2)), r3 = i3.__d), null != i3.componentDidCatch && (i3.componentDidCatch(n2, t3 || {}), r3 = i3.__d), r3)
                return i3.__E = i3;
            } catch (l4) {
              n2 = l4;
            }
        throw n2;
      } }, u = 0, t = function(n2) {
        return null != n2 && null == n2.constructor;
      }, b.prototype.setState = function(n2, l3) {
        var u3;
        u3 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = d({}, this.state), "function" == typeof n2 && (n2 = n2(d({}, u3), this.props)), n2 && d(u3, n2), null != n2 && this.__v && (l3 && this._sb.push(l3), M(this));
      }, b.prototype.forceUpdate = function(n2) {
        this.__v && (this.__e = true, n2 && this.__h.push(n2), M(this));
      }, b.prototype.render = k, i = [], r = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f = function(n2, l3) {
        return n2.__v.__b - l3.__v.__b;
      }, P.__r = 0, e = 0, c = F(false), s = F(true), a = 0;
    }
  });

  // node_modules/.pnpm/@create-figma-plugin+ui@1.9.2_preact@10.23.1/node_modules/@create-figma-plugin/ui/lib/utilities/create-class-name.js
  function createClassName(classNames) {
    return classNames.filter(function(className) {
      return className !== null;
    }).join(" ");
  }
  var init_create_class_name = __esm({
    "node_modules/.pnpm/@create-figma-plugin+ui@1.9.2_preact@10.23.1/node_modules/@create-figma-plugin/ui/lib/utilities/create-class-name.js"() {
    }
  });

  // ../../../../private/var/folders/kq/djbxqzfn62xb8wdhcdrf5qfc0000gn/T/97fc1912-a820-486f-92b0-c664dc1bc9dc/banner.js
  var banner_default;
  var init_banner = __esm({
    "../../../../private/var/folders/kq/djbxqzfn62xb8wdhcdrf5qfc0000gn/T/97fc1912-a820-486f-92b0-c664dc1bc9dc/banner.js"() {
      if (document.getElementById("f850742da9") === null) {
        const element = document.createElement("style");
        element.id = "f850742da9";
        element.textContent = `._banner_15s6o_1 {
  position: relative;
  display: flex;
  min-height: 48px;
  align-items: center;
  padding: var(--space-small) var(--space-medium) var(--space-small) 44px;
}

._informative_15s6o_9 {
  background-color: var(--color-selection-b);
}
._upsell_15s6o_12 {
  background-color: var(--color-green);
  color: var(--color-white);
}
._warning_15s6o_16 {
  background-color: var(--color-yellow);
}

._icon_15s6o_20 {
  position: absolute;
  top: 24px;
  left: 24px;
  transform: translate(-50%, -50%);
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy8ucG5wbS9AY3JlYXRlLWZpZ21hLXBsdWdpbit1aUAxLjkuMl9wcmVhY3RAMTAuMjMuMS9ub2RlX21vZHVsZXMvQGNyZWF0ZS1maWdtYS1wbHVnaW4vdWkvbGliL2NvbXBvbmVudHMvYmFubmVyL2Jhbm5lci5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsdUVBQXVFO0FBQ3pFOztBQUVBO0VBQ0UsMENBQTBDO0FBQzVDO0FBQ0E7RUFDRSxvQ0FBb0M7RUFDcEMseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixnQ0FBZ0M7QUFDbEMiLCJmaWxlIjoibm9kZV9tb2R1bGVzLy5wbnBtL0BjcmVhdGUtZmlnbWEtcGx1Z2luK3VpQDEuOS4yX3ByZWFjdEAxMC4yMy4xL25vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy9iYW5uZXIvYmFubmVyLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYW5uZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1pbi1oZWlnaHQ6IDQ4cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IHZhcigtLXNwYWNlLXNtYWxsKSB2YXIoLS1zcGFjZS1tZWRpdW0pIHZhcigtLXNwYWNlLXNtYWxsKSA0NHB4O1xufVxuXG4uaW5mb3JtYXRpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1zZWxlY3Rpb24tYik7XG59XG4udXBzZWxsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZ3JlZW4pO1xuICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xufVxuLndhcm5pbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci15ZWxsb3cpO1xufVxuXG4uaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyNHB4O1xuICBsZWZ0OiAyNHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cbiJdfQ== */`;
        document.head.append(element);
      }
      banner_default = { "banner": "_banner_15s6o_1", "informative": "_informative_15s6o_9", "upsell": "_upsell_15s6o_12", "warning": "_warning_15s6o_16", "icon": "_icon_15s6o_20" };
    }
  });

  // node_modules/.pnpm/@create-figma-plugin+ui@1.9.2_preact@10.23.1/node_modules/@create-figma-plugin/ui/lib/components/banner/banner.js
  function Banner(_a) {
    var _b = _a, { children, icon, type = "informative" } = _b, rest = __objRest(_b, ["children", "icon", "type"]);
    return _("div", __spreadProps(__spreadValues({}, rest), { class: createClassName([banner_default.banner, banner_default[type]]) }), _("div", { class: banner_default.icon }, icon), _("div", null, children));
  }
  var init_banner2 = __esm({
    "node_modules/.pnpm/@create-figma-plugin+ui@1.9.2_preact@10.23.1/node_modules/@create-figma-plugin/ui/lib/components/banner/banner.js"() {
      init_preact_module();
      init_create_class_name();
      init_banner();
    }
  });

  // node_modules/.pnpm/preact@10.23.1/node_modules/preact/hooks/dist/hooks.module.js
  function d2(n2, t3) {
    c2.__h && c2.__h(r2, n2, o2 || t3), o2 = 0;
    var u3 = r2.__H || (r2.__H = { __: [], __h: [] });
    return n2 >= u3.__.length && u3.__.push({}), u3.__[n2];
  }
  function T2(n2, r3) {
    var u3 = d2(t2++, 7);
    return C2(u3.__H, r3) && (u3.__ = n2(), u3.__H = r3, u3.__h = n2), u3.__;
  }
  function q2(n2, t3) {
    return o2 = 8, T2(function() {
      return n2;
    }, t3);
  }
  function j2() {
    for (var n2; n2 = f2.shift(); )
      if (n2.__P && n2.__H)
        try {
          n2.__H.__h.forEach(z2), n2.__H.__h.forEach(B2), n2.__H.__h = [];
        } catch (t3) {
          n2.__H.__h = [], c2.__e(t3, n2.__v);
        }
  }
  function w2(n2) {
    var t3, r3 = function() {
      clearTimeout(u3), k2 && cancelAnimationFrame(t3), setTimeout(n2);
    }, u3 = setTimeout(r3, 100);
    k2 && (t3 = requestAnimationFrame(r3));
  }
  function z2(n2) {
    var t3 = r2, u3 = n2.__c;
    "function" == typeof u3 && (n2.__c = void 0, u3()), r2 = t3;
  }
  function B2(n2) {
    var t3 = r2;
    n2.__c = n2.__(), r2 = t3;
  }
  function C2(n2, t3) {
    return !n2 || n2.length !== t3.length || t3.some(function(t4, r3) {
      return t4 !== n2[r3];
    });
  }
  var t2, r2, u2, i2, o2, f2, c2, e2, a2, v2, l2, m, s2, k2;
  var init_hooks_module = __esm({
    "node_modules/.pnpm/preact@10.23.1/node_modules/preact/hooks/dist/hooks.module.js"() {
      init_preact_module();
      o2 = 0;
      f2 = [];
      c2 = l;
      e2 = c2.__b;
      a2 = c2.__r;
      v2 = c2.diffed;
      l2 = c2.__c;
      m = c2.unmount;
      s2 = c2.__;
      c2.__b = function(n2) {
        r2 = null, e2 && e2(n2);
      }, c2.__ = function(n2, t3) {
        n2 && t3.__k && t3.__k.__m && (n2.__m = t3.__k.__m), s2 && s2(n2, t3);
      }, c2.__r = function(n2) {
        a2 && a2(n2), t2 = 0;
        var i3 = (r2 = n2.__c).__H;
        i3 && (u2 === r2 ? (i3.__h = [], r2.__h = [], i3.__.forEach(function(n3) {
          n3.__N && (n3.__ = n3.__N), n3.i = n3.__N = void 0;
        })) : (i3.__h.forEach(z2), i3.__h.forEach(B2), i3.__h = [], t2 = 0)), u2 = r2;
      }, c2.diffed = function(n2) {
        v2 && v2(n2);
        var t3 = n2.__c;
        t3 && t3.__H && (t3.__H.__h.length && (1 !== f2.push(t3) && i2 === c2.requestAnimationFrame || ((i2 = c2.requestAnimationFrame) || w2)(j2)), t3.__H.__.forEach(function(n3) {
          n3.i && (n3.__H = n3.i), n3.i = void 0;
        })), u2 = r2 = null;
      }, c2.__c = function(n2, t3) {
        t3.some(function(n3) {
          try {
            n3.__h.forEach(z2), n3.__h = n3.__h.filter(function(n4) {
              return !n4.__ || B2(n4);
            });
          } catch (r3) {
            t3.some(function(n4) {
              n4.__h && (n4.__h = []);
            }), t3 = [], c2.__e(r3, n3.__v);
          }
        }), l2 && l2(n2, t3);
      }, c2.unmount = function(n2) {
        m && m(n2);
        var t3, r3 = n2.__c;
        r3 && r3.__H && (r3.__H.__.forEach(function(n3) {
          try {
            z2(n3);
          } catch (n4) {
            t3 = n4;
          }
        }), r3.__H = void 0, t3 && c2.__e(t3, r3.__v));
      };
      k2 = "function" == typeof requestAnimationFrame;
    }
  });

  // ../../../../private/var/folders/kq/djbxqzfn62xb8wdhcdrf5qfc0000gn/T/b2e8028f-4ad0-419c-bcbc-e7fe6a476ebb/loading-indicator.js
  var loading_indicator_default;
  var init_loading_indicator = __esm({
    "../../../../private/var/folders/kq/djbxqzfn62xb8wdhcdrf5qfc0000gn/T/b2e8028f-4ad0-419c-bcbc-e7fe6a476ebb/loading-indicator.js"() {
      if (document.getElementById("4aad5790a5") === null) {
        const element = document.createElement("style");
        element.id = "4aad5790a5";
        element.textContent = `._loadingIndicator_12ibq_1 {
  position: relative;
  width: 16px;
  height: 16px;
  margin: 0 auto;
}

._svg_12ibq_8 {
  position: absolute;
  top: 0;
  left: 0;
  width: 16px;
  height: 16px;
  animation: _rotating_12ibq_1 0.5s linear infinite;
  fill: currentColor;
}
._accent_12ibq_17 {
  fill: var(--color-accent);
}
._black-30_12ibq_20 {
  fill: var(--color-black-30);
}
._black-80_12ibq_23 {
  fill: var(--color-black-80);
}
._blue_12ibq_26 {
  fill: var(--color-blue);
}
._white_12ibq_29 {
  fill: var(--color-white);
}
._white-20_12ibq_32 {
  fill: var(--color-white-20-translucent);
}
._white-40_12ibq_35 {
  fill: var(--color-white-40-translucent);
}

@keyframes _rotating_12ibq_1 {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy8ucG5wbS9AY3JlYXRlLWZpZ21hLXBsdWdpbit1aUAxLjkuMl9wcmVhY3RAMTAuMjMuMS9ub2RlX21vZHVsZXMvQGNyZWF0ZS1maWdtYS1wbHVnaW4vdWkvbGliL2NvbXBvbmVudHMvbG9hZGluZy1pbmRpY2F0b3IvbG9hZGluZy1pbmRpY2F0b3IuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1osaURBQXdDO0VBQ3hDLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSx3QkFBd0I7QUFDMUI7QUFDQTtFQUNFLHVDQUF1QztBQUN6QztBQUNBO0VBQ0UsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0U7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNGIiwiZmlsZSI6Im5vZGVfbW9kdWxlcy8ucG5wbS9AY3JlYXRlLWZpZ21hLXBsdWdpbit1aUAxLjkuMl9wcmVhY3RAMTAuMjMuMS9ub2RlX21vZHVsZXMvQGNyZWF0ZS1maWdtYS1wbHVnaW4vdWkvbGliL2NvbXBvbmVudHMvbG9hZGluZy1pbmRpY2F0b3IvbG9hZGluZy1pbmRpY2F0b3IuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvYWRpbmdJbmRpY2F0b3Ige1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uc3ZnIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIGFuaW1hdGlvbjogcm90YXRpbmcgMC41cyBsaW5lYXIgaW5maW5pdGU7XG4gIGZpbGw6IGN1cnJlbnRDb2xvcjtcbn1cbi5hY2NlbnQge1xuICBmaWxsOiB2YXIoLS1jb2xvci1hY2NlbnQpO1xufVxuLmJsYWNrLTMwIHtcbiAgZmlsbDogdmFyKC0tY29sb3ItYmxhY2stMzApO1xufVxuLmJsYWNrLTgwIHtcbiAgZmlsbDogdmFyKC0tY29sb3ItYmxhY2stODApO1xufVxuLmJsdWUge1xuICBmaWxsOiB2YXIoLS1jb2xvci1ibHVlKTtcbn1cbi53aGl0ZSB7XG4gIGZpbGw6IHZhcigtLWNvbG9yLXdoaXRlKTtcbn1cbi53aGl0ZS0yMCB7XG4gIGZpbGw6IHZhcigtLWNvbG9yLXdoaXRlLTIwLXRyYW5zbHVjZW50KTtcbn1cbi53aGl0ZS00MCB7XG4gIGZpbGw6IHZhcigtLWNvbG9yLXdoaXRlLTQwLXRyYW5zbHVjZW50KTtcbn1cblxuQGtleWZyYW1lcyByb3RhdGluZyB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG4iXX0= */`;
        document.head.append(element);
      }
      loading_indicator_default = { "loadingIndicator": "_loadingIndicator_12ibq_1", "svg": "_svg_12ibq_8", "rotating": "_rotating_12ibq_1", "accent": "_accent_12ibq_17", "black-30": "_black-30_12ibq_20", "black-80": "_black-80_12ibq_23", "blue": "_blue_12ibq_26", "white": "_white_12ibq_29", "white-20": "_white-20_12ibq_32", "white-40": "_white-40_12ibq_35" };
    }
  });

  // node_modules/.pnpm/@create-figma-plugin+ui@1.9.2_preact@10.23.1/node_modules/@create-figma-plugin/ui/lib/components/loading-indicator/loading-indicator.js
  function LoadingIndicator(_a) {
    var _b = _a, { color } = _b, rest = __objRest(_b, ["color"]);
    return _("div", __spreadProps(__spreadValues({}, rest), { class: loading_indicator_default.loadingIndicator }), _("svg", { class: createClassName([
      loading_indicator_default.svg,
      typeof color === "undefined" ? null : loading_indicator_default[color]
    ]) }, _("path", { d: "M8 15C11.866 15 15 11.866 15 8C15 6.7865 14.6912 5.64511 14.1479 4.65013L15.0263 4.17174C15.6471 5.30882 16 6.6132 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 5.54138 1.10909 3.34181 2.85426 1.8743L3.47761 2.65678C1.96204 3.94081 1 5.85806 1 8C1 11.866 4.13401 15 8 15Z" })));
  }
  var init_loading_indicator2 = __esm({
    "node_modules/.pnpm/@create-figma-plugin+ui@1.9.2_preact@10.23.1/node_modules/@create-figma-plugin/ui/lib/components/loading-indicator/loading-indicator.js"() {
      init_preact_module();
      init_create_class_name();
      init_loading_indicator();
    }
  });

  // ../../../../private/var/folders/kq/djbxqzfn62xb8wdhcdrf5qfc0000gn/T/0c2166a7-49c6-4be8-b6b2-f561b60b00e8/button.js
  var button_default;
  var init_button = __esm({
    "../../../../private/var/folders/kq/djbxqzfn62xb8wdhcdrf5qfc0000gn/T/0c2166a7-49c6-4be8-b6b2-f561b60b00e8/button.js"() {
      if (document.getElementById("cee967e2b8") === null) {
        const element = document.createElement("style");
        element.id = "cee967e2b8";
        element.textContent = `._button_1j1gr_1 {
  position: relative;
  z-index: var(--z-index-1);
  display: inline-block;
}
._button_1j1gr_1 button {
  display: inline-block;
  height: 32px;
  border-radius: var(--border-radius-6);
  color: currentColor;
}

._disabled_1j1gr_13 {
  opacity: var(--opacity-30);
}
._disabled_1j1gr_13 button {
  cursor: not-allowed;
}

._primary_1j1gr_20 {
  color: var(
    --color-white
  ); /* Set the color of the \`button\` element and \`LoadingIndicator\` */
}
._primary_1j1gr_20 button {
  padding: 0 14px;
  border: 2px solid transparent;
  background-color: var(--color-accent);
  line-height: 28px;
}
._primary_1j1gr_20:not(._disabled_1j1gr_13) button:focus {
  border-color: var(--color-black-30-translucent);
}
._primary_1j1gr_20._destructive_1j1gr_34 {
  color: var(--color-white);
}
._primary_1j1gr_20._destructive_1j1gr_34 button {
  background-color: var(--color-red);
}
._primary_1j1gr_20._disabled_1j1gr_13 button {
  background-color: var(--color-black);
}

._secondary_1j1gr_44 {
  color: var(--color-black-80);
}
._secondary_1j1gr_44 button {
  padding: 0 15px;
  border: 1px solid var(--color-black-80);
  background-color: transparent;
  line-height: 30px;
}
._secondary_1j1gr_44:not(._disabled_1j1gr_13) button:focus {
  padding: 0 14px;
  border-width: 2px;
  border-color: var(--color-accent);
  line-height: 28px;
}
._secondary_1j1gr_44._destructive_1j1gr_34 {
  color: var(--color-red);
}
._secondary_1j1gr_44._destructive_1j1gr_34 button {
  border-color: var(--color-red);
}
._secondary_1j1gr_44._destructive_1j1gr_34:not(._disabled_1j1gr_13) button:focus {
  border-color: var(--color-red);
}

._fullWidth_1j1gr_69 {
  display: block;
}
._fullWidth_1j1gr_69 button {
  display: block;
  overflow: hidden;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
}

._loading_1j1gr_80 button {
  color: rgba(0, 0, 0, 0); /* Hide the button text */
}
._loadingIndicator_1j1gr_83 {
  position: absolute;
  top: 50%;
  left: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy8ucG5wbS9AY3JlYXRlLWZpZ21hLXBsdWdpbit1aUAxLjkuMl9wcmVhY3RAMTAuMjMuMS9ub2RlX21vZHVsZXMvQGNyZWF0ZS1maWdtYS1wbHVnaW4vdWkvbGliL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixxQ0FBcUM7RUFDckMsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRTs7R0FFQyxFQUFFLGlFQUFpRTtBQUN0RTtBQUNBO0VBQ0UsZUFBZTtFQUNmLDZCQUE2QjtFQUM3QixxQ0FBcUM7RUFDckMsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSwrQ0FBK0M7QUFDakQ7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0Usa0NBQWtDO0FBQ3BDO0FBQ0E7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLGVBQWU7RUFDZix1Q0FBdUM7RUFDdkMsNkJBQTZCO0VBQzdCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixpQ0FBaUM7RUFDakMsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7QUFDQTtFQUNFLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHVCQUF1QixFQUFFLHlCQUF5QjtBQUNwRDtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1Qsb0JBQW9CO0VBQ3BCLGdDQUFnQztBQUNsQyIsImZpbGUiOiJub2RlX21vZHVsZXMvLnBucG0vQGNyZWF0ZS1maWdtYS1wbHVnaW4rdWlAMS45LjJfcHJlYWN0QDEwLjIzLjEvbm9kZV9tb2R1bGVzL0BjcmVhdGUtZmlnbWEtcGx1Z2luL3VpL2xpYi9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogdmFyKC0tei1pbmRleC0xKTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLmJ1dHRvbiBidXR0b24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogMzJweDtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy02KTtcbiAgY29sb3I6IGN1cnJlbnRDb2xvcjtcbn1cblxuLmRpc2FibGVkIHtcbiAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eS0zMCk7XG59XG4uZGlzYWJsZWQgYnV0dG9uIHtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLnByaW1hcnkge1xuICBjb2xvcjogdmFyKFxuICAgIC0tY29sb3Itd2hpdGVcbiAgKTsgLyogU2V0IHRoZSBjb2xvciBvZiB0aGUgYGJ1dHRvbmAgZWxlbWVudCBhbmQgYExvYWRpbmdJbmRpY2F0b3JgICovXG59XG4ucHJpbWFyeSBidXR0b24ge1xuICBwYWRkaW5nOiAwIDE0cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1hY2NlbnQpO1xuICBsaW5lLWhlaWdodDogMjhweDtcbn1cbi5wcmltYXJ5Om5vdCguZGlzYWJsZWQpIGJ1dHRvbjpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItYmxhY2stMzAtdHJhbnNsdWNlbnQpO1xufVxuLnByaW1hcnkuZGVzdHJ1Y3RpdmUge1xuICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xufVxuLnByaW1hcnkuZGVzdHJ1Y3RpdmUgYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcmVkKTtcbn1cbi5wcmltYXJ5LmRpc2FibGVkIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJsYWNrKTtcbn1cblxuLnNlY29uZGFyeSB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1ibGFjay04MCk7XG59XG4uc2Vjb25kYXJ5IGJ1dHRvbiB7XG4gIHBhZGRpbmc6IDAgMTVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItYmxhY2stODApO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG59XG4uc2Vjb25kYXJ5Om5vdCguZGlzYWJsZWQpIGJ1dHRvbjpmb2N1cyB7XG4gIHBhZGRpbmc6IDAgMTRweDtcbiAgYm9yZGVyLXdpZHRoOiAycHg7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItYWNjZW50KTtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG59XG4uc2Vjb25kYXJ5LmRlc3RydWN0aXZlIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXJlZCk7XG59XG4uc2Vjb25kYXJ5LmRlc3RydWN0aXZlIGJ1dHRvbiB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItcmVkKTtcbn1cbi5zZWNvbmRhcnkuZGVzdHJ1Y3RpdmU6bm90KC5kaXNhYmxlZCkgYnV0dG9uOmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1yZWQpO1xufVxuXG4uZnVsbFdpZHRoIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uZnVsbFdpZHRoIGJ1dHRvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5sb2FkaW5nIGJ1dHRvbiB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDApOyAvKiBIaWRlIHRoZSBidXR0b24gdGV4dCAqL1xufVxuLmxvYWRpbmdJbmRpY2F0b3Ige1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cbiJdfQ== */`;
        document.head.append(element);
      }
      button_default = { "button": "_button_1j1gr_1", "disabled": "_disabled_1j1gr_13", "primary": "_primary_1j1gr_20", "destructive": "_destructive_1j1gr_34", "secondary": "_secondary_1j1gr_44", "fullWidth": "_fullWidth_1j1gr_69", "loading": "_loading_1j1gr_80", "loadingIndicator": "_loadingIndicator_1j1gr_83" };
    }
  });

  // node_modules/.pnpm/@create-figma-plugin+ui@1.9.2_preact@10.23.1/node_modules/@create-figma-plugin/ui/lib/components/button/button.js
  function Button(_a) {
    var _b = _a, { children, destructive = false, disabled = false, fullWidth = false, loading = false, onClick, propagateEscapeKeyDown = true, secondary = false } = _b, rest = __objRest(_b, ["children", "destructive", "disabled", "fullWidth", "loading", "onClick", "propagateEscapeKeyDown", "secondary"]);
    const handleKeyDown = q2(function(event) {
      if (event.key === "Escape") {
        if (propagateEscapeKeyDown === false) {
          event.stopPropagation();
        }
        event.currentTarget.blur();
        return;
      }
      if (event.key === "Enter") {
        event.stopPropagation();
      }
    }, [propagateEscapeKeyDown]);
    return _("div", { class: createClassName([
      button_default.button,
      secondary === true ? button_default.secondary : button_default.primary,
      destructive === true ? button_default.destructive : null,
      fullWidth === true ? button_default.fullWidth : null,
      disabled === true ? button_default.disabled : null,
      loading === true ? button_default.loading : null
    ]) }, loading === true ? _("div", { class: button_default.loadingIndicator }, _(LoadingIndicator, null)) : null, _("button", __spreadProps(__spreadValues({}, rest), { disabled: disabled === true, onClick: disabled === true || loading === true ? void 0 : onClick, onKeyDown: disabled === true || loading === true ? void 0 : handleKeyDown, tabIndex: disabled === true ? -1 : 0 }), children));
  }
  var init_button2 = __esm({
    "node_modules/.pnpm/@create-figma-plugin+ui@1.9.2_preact@10.23.1/node_modules/@create-figma-plugin/ui/lib/components/button/button.js"() {
      init_preact_module();
      init_hooks_module();
      init_create_class_name();
      init_loading_indicator2();
      init_button();
    }
  });

  // ../../../../private/var/folders/kq/djbxqzfn62xb8wdhcdrf5qfc0000gn/T/f0b67bf4-95aa-4a99-8c11-157e743955de/icon.js
  var icon_default;
  var init_icon = __esm({
    "../../../../private/var/folders/kq/djbxqzfn62xb8wdhcdrf5qfc0000gn/T/f0b67bf4-95aa-4a99-8c11-157e743955de/icon.js"() {
      if (document.getElementById("b725cd5ae5") === null) {
        const element = document.createElement("style");
        element.id = "b725cd5ae5";
        element.textContent = `._currentColor_1k010_1 {
  fill: currentColor;
}

._black-30_1k010_5 {
  fill: var(--color-black-30);
}
._black-80_1k010_8 {
  fill: var(--color-black-80);
}
._blue_1k010_11 {
  fill: var(--color-accent);
}
._green_1k010_14 {
  fill: var(--color-green);
}
._purple_1k010_17 {
  fill: var(--color-purple);
}
._red_1k010_20 {
  fill: var(--color-red);
}
._white_1k010_23 {
  fill: var(--color-white);
}
._white-20_1k010_26 {
  fill: var(--color-white-20-translucent);
}
._white-40_1k010_29 {
  fill: var(--color-white-40-translucent);
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy8ucG5wbS9AY3JlYXRlLWZpZ21hLXBsdWdpbit1aUAxLjkuMl9wcmVhY3RAMTAuMjMuMS9ub2RlX21vZHVsZXMvQGNyZWF0ZS1maWdtYS1wbHVnaW4vdWkvbGliL2NvbXBvbmVudHMvaWNvbi9pY29uLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UsdUNBQXVDO0FBQ3pDO0FBQ0E7RUFDRSx1Q0FBdUM7QUFDekMiLCJmaWxlIjoibm9kZV9tb2R1bGVzLy5wbnBtL0BjcmVhdGUtZmlnbWEtcGx1Z2luK3VpQDEuOS4yX3ByZWFjdEAxMC4yMy4xL25vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy9pY29uL2ljb24uY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1cnJlbnRDb2xvciB7XG4gIGZpbGw6IGN1cnJlbnRDb2xvcjtcbn1cblxuLmJsYWNrLTMwIHtcbiAgZmlsbDogdmFyKC0tY29sb3ItYmxhY2stMzApO1xufVxuLmJsYWNrLTgwIHtcbiAgZmlsbDogdmFyKC0tY29sb3ItYmxhY2stODApO1xufVxuLmJsdWUge1xuICBmaWxsOiB2YXIoLS1jb2xvci1hY2NlbnQpO1xufVxuLmdyZWVuIHtcbiAgZmlsbDogdmFyKC0tY29sb3ItZ3JlZW4pO1xufVxuLnB1cnBsZSB7XG4gIGZpbGw6IHZhcigtLWNvbG9yLXB1cnBsZSk7XG59XG4ucmVkIHtcbiAgZmlsbDogdmFyKC0tY29sb3ItcmVkKTtcbn1cbi53aGl0ZSB7XG4gIGZpbGw6IHZhcigtLWNvbG9yLXdoaXRlKTtcbn1cbi53aGl0ZS0yMCB7XG4gIGZpbGw6IHZhcigtLWNvbG9yLXdoaXRlLTIwLXRyYW5zbHVjZW50KTtcbn1cbi53aGl0ZS00MCB7XG4gIGZpbGw6IHZhcigtLWNvbG9yLXdoaXRlLTQwLXRyYW5zbHVjZW50KTtcbn1cbiJdfQ== */`;
        document.head.append(element);
      }
      icon_default = { "currentColor": "_currentColor_1k010_1", "black-30": "_black-30_1k010_5", "black-80": "_black-80_1k010_8", "blue": "_blue_1k010_11", "green": "_green_1k010_14", "purple": "_purple_1k010_17", "red": "_red_1k010_20", "white": "_white_1k010_23", "white-20": "_white-20_1k010_26", "white-40": "_white-40_1k010_29" };
    }
  });

  // node_modules/.pnpm/@create-figma-plugin+ui@1.9.2_preact@10.23.1/node_modules/@create-figma-plugin/ui/lib/components/icon/create-icon.js
  function createIcon(path, options) {
    const { width, height } = options;
    return function Icon(_a) {
      var _b = _a, { color } = _b, rest = __objRest(_b, ["color"]);
      return _("svg", __spreadProps(__spreadValues({}, rest), { class: typeof color === "undefined" ? icon_default.currentColor : icon_default[color], height, width, xmlns: "http://www.w3.org/2000/svg" }), _("path", { "clip-rule": "evenodd", d: path, "fill-rule": "evenodd" }));
    };
  }
  var init_create_icon = __esm({
    "node_modules/.pnpm/@create-figma-plugin+ui@1.9.2_preact@10.23.1/node_modules/@create-figma-plugin/ui/lib/components/icon/create-icon.js"() {
      init_preact_module();
      init_icon();
    }
  });

  // ../../../../private/var/folders/kq/djbxqzfn62xb8wdhcdrf5qfc0000gn/T/6ab5a501-c27c-4f6a-a99a-778cd0d5e557/divider.js
  var divider_default;
  var init_divider = __esm({
    "../../../../private/var/folders/kq/djbxqzfn62xb8wdhcdrf5qfc0000gn/T/6ab5a501-c27c-4f6a-a99a-778cd0d5e557/divider.js"() {
      if (document.getElementById("10cc8246af") === null) {
        const element = document.createElement("style");
        element.id = "10cc8246af";
        element.textContent = `._divider_b3ns9_1 {
  width: 100%;
  height: 1px;
  background-color: var(--color-silver);
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy8ucG5wbS9AY3JlYXRlLWZpZ21hLXBsdWdpbit1aUAxLjkuMl9wcmVhY3RAMTAuMjMuMS9ub2RlX21vZHVsZXMvQGNyZWF0ZS1maWdtYS1wbHVnaW4vdWkvbGliL2NvbXBvbmVudHMvZGl2aWRlci9kaXZpZGVyLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gscUNBQXFDO0FBQ3ZDIiwiZmlsZSI6Im5vZGVfbW9kdWxlcy8ucG5wbS9AY3JlYXRlLWZpZ21hLXBsdWdpbit1aUAxLjkuMl9wcmVhY3RAMTAuMjMuMS9ub2RlX21vZHVsZXMvQGNyZWF0ZS1maWdtYS1wbHVnaW4vdWkvbGliL2NvbXBvbmVudHMvZGl2aWRlci9kaXZpZGVyLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXZpZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1zaWx2ZXIpO1xufVxuIl19 */`;
        document.head.append(element);
      }
      divider_default = { "divider": "_divider_b3ns9_1" };
    }
  });

  // node_modules/.pnpm/@create-figma-plugin+ui@1.9.2_preact@10.23.1/node_modules/@create-figma-plugin/ui/lib/components/divider/divider.js
  function Divider(props) {
    return _("hr", __spreadProps(__spreadValues({}, props), { class: divider_default.divider }));
  }
  var init_divider2 = __esm({
    "node_modules/.pnpm/@create-figma-plugin+ui@1.9.2_preact@10.23.1/node_modules/@create-figma-plugin/ui/lib/components/divider/divider.js"() {
      init_preact_module();
      init_divider();
    }
  });

  // node_modules/.pnpm/@create-figma-plugin+ui@1.9.2_preact@10.23.1/node_modules/@create-figma-plugin/ui/lib/components/icon/icon-32/icon-megaphone-32.js
  var IconMegaphone32;
  var init_icon_megaphone_32 = __esm({
    "node_modules/.pnpm/@create-figma-plugin+ui@1.9.2_preact@10.23.1/node_modules/@create-figma-plugin/ui/lib/components/icon/icon-32/icon-megaphone-32.js"() {
      init_create_icon();
      IconMegaphone32 = createIcon("M9.5 12H12v5H9.5C8.11929 17 7 15.8807 7 14.5 7 13.1192 8.11929 12 9.5 12Zm3.5 5v-5.0037a13.00039 13.00039 0 0 0 6.3548-1.835L20 9.77606v8.75714l-1.4686-.5916A12.99982 12.99982 0 0 0 13.6738 17H13Zm-.3103-6H9.5C7.567 11 6 12.567 6 14.5c0 1.875 1.47447 3.4057 3.32719 3.4958l.00614.0184 1.21087 3.6325c.2722.8166 1.0365 1.3675 1.8973 1.3675h1.1711c.6825 0 1.1645-.6687.9487-1.3162L13.3286 18h.3452c1.5365 0 3.0587.295 4.4839.8692l2.1555.8683c.3286.1324.6868-.1095.6868-.4638V8.89512c0-.38818-.4231-.62831-.7563-.42929l-1.4016.83694A11.99989 11.99989 0 0 1 12.6897 11Zm-1.1969 10.3304-1.1054-3.3162h1.8918l1.3334 4h-1.1711c-.4304 0-.8126-.2754-.9487-.6838ZM23 12.5c.8284 0 1.5.6716 1.5 1.5s-.6716 1.5-1.5 1.5v1c1.3807 0 2.5-1.1193 2.5-2.5s-1.1193-2.5-2.5-2.5v1Z", { height: 32, width: 32 });
    }
  });

  // ../../../../private/var/folders/kq/djbxqzfn62xb8wdhcdrf5qfc0000gn/T/1abc4d2b-4180-4530-8273-1e2f6fcd96aa/container.js
  var container_default;
  var init_container = __esm({
    "../../../../private/var/folders/kq/djbxqzfn62xb8wdhcdrf5qfc0000gn/T/1abc4d2b-4180-4530-8273-1e2f6fcd96aa/container.js"() {
      if (document.getElementById("68b79906ce") === null) {
        const element = document.createElement("style");
        element.id = "68b79906ce";
        element.textContent = `._extraSmall_kslv9_1 {
  padding: 0 var(--space-extra-small);
}

._small_kslv9_5 {
  padding: 0 var(--space-small);
}

._medium_kslv9_9 {
  padding: 0 var(--space-medium);
}

._large_kslv9_13 {
  padding: 0 var(--space-large);
}

._extraLarge_kslv9_17 {
  padding: 0 var(--space-extra-large);
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy8ucG5wbS9AY3JlYXRlLWZpZ21hLXBsdWdpbit1aUAxLjkuMl9wcmVhY3RAMTAuMjMuMS9ub2RlX21vZHVsZXMvQGNyZWF0ZS1maWdtYS1wbHVnaW4vdWkvbGliL2NvbXBvbmVudHMvbGF5b3V0L2NvbnRhaW5lci9jb250YWluZXIuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsbUNBQW1DO0FBQ3JDIiwiZmlsZSI6Im5vZGVfbW9kdWxlcy8ucG5wbS9AY3JlYXRlLWZpZ21hLXBsdWdpbit1aUAxLjkuMl9wcmVhY3RAMTAuMjMuMS9ub2RlX21vZHVsZXMvQGNyZWF0ZS1maWdtYS1wbHVnaW4vdWkvbGliL2NvbXBvbmVudHMvbGF5b3V0L2NvbnRhaW5lci9jb250YWluZXIuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4dHJhU21hbGwge1xuICBwYWRkaW5nOiAwIHZhcigtLXNwYWNlLWV4dHJhLXNtYWxsKTtcbn1cblxuLnNtYWxsIHtcbiAgcGFkZGluZzogMCB2YXIoLS1zcGFjZS1zbWFsbCk7XG59XG5cbi5tZWRpdW0ge1xuICBwYWRkaW5nOiAwIHZhcigtLXNwYWNlLW1lZGl1bSk7XG59XG5cbi5sYXJnZSB7XG4gIHBhZGRpbmc6IDAgdmFyKC0tc3BhY2UtbGFyZ2UpO1xufVxuXG4uZXh0cmFMYXJnZSB7XG4gIHBhZGRpbmc6IDAgdmFyKC0tc3BhY2UtZXh0cmEtbGFyZ2UpO1xufVxuIl19 */`;
        document.head.append(element);
      }
      container_default = { "extraSmall": "_extraSmall_kslv9_1", "small": "_small_kslv9_5", "medium": "_medium_kslv9_9", "large": "_large_kslv9_13", "extraLarge": "_extraLarge_kslv9_17" };
    }
  });

  // node_modules/.pnpm/@create-figma-plugin+ui@1.9.2_preact@10.23.1/node_modules/@create-figma-plugin/ui/lib/components/layout/container/container.js
  function Container(_a) {
    var _b = _a, { space = "small" } = _b, rest = __objRest(_b, ["space"]);
    return _("div", __spreadProps(__spreadValues({}, rest), { class: container_default[space] }));
  }
  var init_container2 = __esm({
    "node_modules/.pnpm/@create-figma-plugin+ui@1.9.2_preact@10.23.1/node_modules/@create-figma-plugin/ui/lib/components/layout/container/container.js"() {
      init_preact_module();
      init_container();
    }
  });

  // ../../../../private/var/folders/kq/djbxqzfn62xb8wdhcdrf5qfc0000gn/T/c4dcb0d9-47cc-4503-8a67-98a263f3dd8b/inline.js
  var inline_default;
  var init_inline = __esm({
    "../../../../private/var/folders/kq/djbxqzfn62xb8wdhcdrf5qfc0000gn/T/c4dcb0d9-47cc-4503-8a67-98a263f3dd8b/inline.js"() {
      if (document.getElementById("2d2455d01e") === null) {
        const element = document.createElement("style");
        element.id = "2d2455d01e";
        element.textContent = `._item_14wk1_1 {
  display: inline-flex;
}

._extraSmall_14wk1_5 {
  margin-left: calc(-1 * var(--space-extra-small));
}
._extraSmall_14wk1_5 > ._item_14wk1_1 {
  margin-left: var(--space-extra-small);
}

._small_14wk1_12 {
  margin-left: calc(-1 * var(--space-small));
}
._small_14wk1_12 > ._item_14wk1_1 {
  margin-left: var(--space-small);
}

._medium_14wk1_19 {
  margin-left: calc(-1 * var(--space-medium));
}
._medium_14wk1_19 > ._item_14wk1_1 {
  margin-left: var(--space-medium);
}

._large_14wk1_26 {
  margin-left: calc(-1 * var(--space-large));
}
._large_14wk1_26 > ._item_14wk1_1 {
  margin-left: var(--space-large);
}

._extraLarge_14wk1_33 {
  margin-left: calc(-1 * var(--space-extra-large));
}
._extraLarge_14wk1_33 > ._item_14wk1_1 {
  margin-left: var(--space-extra-large);
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy8ucG5wbS9AY3JlYXRlLWZpZ21hLXBsdWdpbit1aUAxLjkuMl9wcmVhY3RAMTAuMjMuMS9ub2RlX21vZHVsZXMvQGNyZWF0ZS1maWdtYS1wbHVnaW4vdWkvbGliL2NvbXBvbmVudHMvbGF5b3V0L2lubGluZS9pbmxpbmUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsZ0RBQWdEO0FBQ2xEO0FBQ0E7RUFDRSxxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSwwQ0FBMEM7QUFDNUM7QUFDQTtFQUNFLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLDJDQUEyQztBQUM3QztBQUNBO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsMENBQTBDO0FBQzVDO0FBQ0E7RUFDRSwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxnREFBZ0Q7QUFDbEQ7QUFDQTtFQUNFLHFDQUFxQztBQUN2QyIsImZpbGUiOiJub2RlX21vZHVsZXMvLnBucG0vQGNyZWF0ZS1maWdtYS1wbHVnaW4rdWlAMS45LjJfcHJlYWN0QDEwLjIzLjEvbm9kZV9tb2R1bGVzL0BjcmVhdGUtZmlnbWEtcGx1Z2luL3VpL2xpYi9jb21wb25lbnRzL2xheW91dC9pbmxpbmUvaW5saW5lLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pdGVtIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59XG5cbi5leHRyYVNtYWxsIHtcbiAgbWFyZ2luLWxlZnQ6IGNhbGMoLTEgKiB2YXIoLS1zcGFjZS1leHRyYS1zbWFsbCkpO1xufVxuLmV4dHJhU21hbGwgPiAuaXRlbSB7XG4gIG1hcmdpbi1sZWZ0OiB2YXIoLS1zcGFjZS1leHRyYS1zbWFsbCk7XG59XG5cbi5zbWFsbCB7XG4gIG1hcmdpbi1sZWZ0OiBjYWxjKC0xICogdmFyKC0tc3BhY2Utc21hbGwpKTtcbn1cbi5zbWFsbCA+IC5pdGVtIHtcbiAgbWFyZ2luLWxlZnQ6IHZhcigtLXNwYWNlLXNtYWxsKTtcbn1cblxuLm1lZGl1bSB7XG4gIG1hcmdpbi1sZWZ0OiBjYWxjKC0xICogdmFyKC0tc3BhY2UtbWVkaXVtKSk7XG59XG4ubWVkaXVtID4gLml0ZW0ge1xuICBtYXJnaW4tbGVmdDogdmFyKC0tc3BhY2UtbWVkaXVtKTtcbn1cblxuLmxhcmdlIHtcbiAgbWFyZ2luLWxlZnQ6IGNhbGMoLTEgKiB2YXIoLS1zcGFjZS1sYXJnZSkpO1xufVxuLmxhcmdlID4gLml0ZW0ge1xuICBtYXJnaW4tbGVmdDogdmFyKC0tc3BhY2UtbGFyZ2UpO1xufVxuXG4uZXh0cmFMYXJnZSB7XG4gIG1hcmdpbi1sZWZ0OiBjYWxjKC0xICogdmFyKC0tc3BhY2UtZXh0cmEtbGFyZ2UpKTtcbn1cbi5leHRyYUxhcmdlID4gLml0ZW0ge1xuICBtYXJnaW4tbGVmdDogdmFyKC0tc3BhY2UtZXh0cmEtbGFyZ2UpO1xufVxuIl19 */`;
        document.head.append(element);
      }
      inline_default = { "item": "_item_14wk1_1", "extraSmall": "_extraSmall_14wk1_5", "small": "_small_14wk1_12", "medium": "_medium_14wk1_19", "large": "_large_14wk1_26", "extraLarge": "_extraLarge_14wk1_33" };
    }
  });

  // node_modules/.pnpm/@create-figma-plugin+ui@1.9.2_preact@10.23.1/node_modules/@create-figma-plugin/ui/lib/components/layout/inline/inline.js
  function Inline(_a) {
    var _b = _a, { children, space } = _b, rest = __objRest(_b, ["children", "space"]);
    return _("div", __spreadProps(__spreadValues({}, rest), { class: typeof space === "undefined" ? void 0 : inline_default[space] }), H(children).map(function(element, index) {
      return _("div", { key: index, class: inline_default.item }, element);
    }));
  }
  var init_inline2 = __esm({
    "node_modules/.pnpm/@create-figma-plugin+ui@1.9.2_preact@10.23.1/node_modules/@create-figma-plugin/ui/lib/components/layout/inline/inline.js"() {
      init_preact_module();
      init_inline();
    }
  });

  // ../../../../private/var/folders/kq/djbxqzfn62xb8wdhcdrf5qfc0000gn/T/5c3ccbd9-fd63-4e3c-aa44-d7ba0868e9d8/stack.js
  var stack_default;
  var init_stack = __esm({
    "../../../../private/var/folders/kq/djbxqzfn62xb8wdhcdrf5qfc0000gn/T/5c3ccbd9-fd63-4e3c-aa44-d7ba0868e9d8/stack.js"() {
      if (document.getElementById("cd454967be") === null) {
        const element = document.createElement("style");
        element.id = "cd454967be";
        element.textContent = `._extraSmall_ncwkc_1 > ._item_ncwkc_1 {
  margin-top: var(--space-extra-small);
}
._small_ncwkc_4 > ._item_ncwkc_1 {
  margin-top: var(--space-small);
}
._medium_ncwkc_7 > ._item_ncwkc_1 {
  margin-top: var(--space-medium);
}
._large_ncwkc_10 > ._item_ncwkc_1 {
  margin-top: var(--space-large);
}
._extraLarge_ncwkc_13 > ._item_ncwkc_1 {
  margin-top: var(--space-extra-large);
}
._item_ncwkc_1:first-child {
  margin-top: 0;
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy8ucG5wbS9AY3JlYXRlLWZpZ21hLXBsdWdpbit1aUAxLjkuMl9wcmVhY3RAMTAuMjMuMS9ub2RlX21vZHVsZXMvQGNyZWF0ZS1maWdtYS1wbHVnaW4vdWkvbGliL2NvbXBvbmVudHMvbGF5b3V0L3N0YWNrL3N0YWNrLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9DQUFvQztBQUN0QztBQUNBO0VBQ0UsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSwrQkFBK0I7QUFDakM7QUFDQTtFQUNFLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0Usb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSxhQUFhO0FBQ2YiLCJmaWxlIjoibm9kZV9tb2R1bGVzLy5wbnBtL0BjcmVhdGUtZmlnbWEtcGx1Z2luK3VpQDEuOS4yX3ByZWFjdEAxMC4yMy4xL25vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy9sYXlvdXQvc3RhY2svc3RhY2suY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4dHJhU21hbGwgPiAuaXRlbSB7XG4gIG1hcmdpbi10b3A6IHZhcigtLXNwYWNlLWV4dHJhLXNtYWxsKTtcbn1cbi5zbWFsbCA+IC5pdGVtIHtcbiAgbWFyZ2luLXRvcDogdmFyKC0tc3BhY2Utc21hbGwpO1xufVxuLm1lZGl1bSA+IC5pdGVtIHtcbiAgbWFyZ2luLXRvcDogdmFyKC0tc3BhY2UtbWVkaXVtKTtcbn1cbi5sYXJnZSA+IC5pdGVtIHtcbiAgbWFyZ2luLXRvcDogdmFyKC0tc3BhY2UtbGFyZ2UpO1xufVxuLmV4dHJhTGFyZ2UgPiAuaXRlbSB7XG4gIG1hcmdpbi10b3A6IHZhcigtLXNwYWNlLWV4dHJhLWxhcmdlKTtcbn1cbi5pdGVtOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cbiJdfQ== */`;
        document.head.append(element);
      }
      stack_default = { "extraSmall": "_extraSmall_ncwkc_1", "item": "_item_ncwkc_1", "small": "_small_ncwkc_4", "medium": "_medium_ncwkc_7", "large": "_large_ncwkc_10", "extraLarge": "_extraLarge_ncwkc_13" };
    }
  });

  // node_modules/.pnpm/@create-figma-plugin+ui@1.9.2_preact@10.23.1/node_modules/@create-figma-plugin/ui/lib/components/layout/stack/stack.js
  function Stack(_a) {
    var _b = _a, { children, space = "small" } = _b, rest = __objRest(_b, ["children", "space"]);
    return _("div", __spreadProps(__spreadValues({}, rest), { class: stack_default[space] }), H(children).map(function(element, index) {
      return _("div", { key: index, class: stack_default.item }, element);
    }));
  }
  var init_stack2 = __esm({
    "node_modules/.pnpm/@create-figma-plugin+ui@1.9.2_preact@10.23.1/node_modules/@create-figma-plugin/ui/lib/components/layout/stack/stack.js"() {
      init_preact_module();
      init_stack();
    }
  });

  // ../../../../private/var/folders/kq/djbxqzfn62xb8wdhcdrf5qfc0000gn/T/a0071bcf-7074-4a59-bb88-82c6a3152b8c/vertical-space.js
  var vertical_space_default;
  var init_vertical_space = __esm({
    "../../../../private/var/folders/kq/djbxqzfn62xb8wdhcdrf5qfc0000gn/T/a0071bcf-7074-4a59-bb88-82c6a3152b8c/vertical-space.js"() {
      if (document.getElementById("1079b40a72") === null) {
        const element = document.createElement("style");
        element.id = "1079b40a72";
        element.textContent = `._extraSmall_1f9m3_1 {
  height: var(--space-extra-small);
}

._small_1f9m3_5 {
  height: var(--space-small);
}

._medium_1f9m3_9 {
  height: var(--space-medium);
}

._large_1f9m3_13 {
  height: var(--space-large);
}

._extraLarge_1f9m3_17 {
  height: var(--space-extra-large);
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy8ucG5wbS9AY3JlYXRlLWZpZ21hLXBsdWdpbit1aUAxLjkuMl9wcmVhY3RAMTAuMjMuMS9ub2RlX21vZHVsZXMvQGNyZWF0ZS1maWdtYS1wbHVnaW4vdWkvbGliL2NvbXBvbmVudHMvbGF5b3V0L3ZlcnRpY2FsLXNwYWNlL3ZlcnRpY2FsLXNwYWNlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQyIsImZpbGUiOiJub2RlX21vZHVsZXMvLnBucG0vQGNyZWF0ZS1maWdtYS1wbHVnaW4rdWlAMS45LjJfcHJlYWN0QDEwLjIzLjEvbm9kZV9tb2R1bGVzL0BjcmVhdGUtZmlnbWEtcGx1Z2luL3VpL2xpYi9jb21wb25lbnRzL2xheW91dC92ZXJ0aWNhbC1zcGFjZS92ZXJ0aWNhbC1zcGFjZS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXh0cmFTbWFsbCB7XG4gIGhlaWdodDogdmFyKC0tc3BhY2UtZXh0cmEtc21hbGwpO1xufVxuXG4uc21hbGwge1xuICBoZWlnaHQ6IHZhcigtLXNwYWNlLXNtYWxsKTtcbn1cblxuLm1lZGl1bSB7XG4gIGhlaWdodDogdmFyKC0tc3BhY2UtbWVkaXVtKTtcbn1cblxuLmxhcmdlIHtcbiAgaGVpZ2h0OiB2YXIoLS1zcGFjZS1sYXJnZSk7XG59XG5cbi5leHRyYUxhcmdlIHtcbiAgaGVpZ2h0OiB2YXIoLS1zcGFjZS1leHRyYS1sYXJnZSk7XG59XG4iXX0= */`;
        document.head.append(element);
      }
      vertical_space_default = { "extraSmall": "_extraSmall_1f9m3_1", "small": "_small_1f9m3_5", "medium": "_medium_1f9m3_9", "large": "_large_1f9m3_13", "extraLarge": "_extraLarge_1f9m3_17" };
    }
  });

  // node_modules/.pnpm/@create-figma-plugin+ui@1.9.2_preact@10.23.1/node_modules/@create-figma-plugin/ui/lib/components/layout/vertical-space/vertical-space.js
  function VerticalSpace(_a) {
    var _b = _a, { space = "small" } = _b, rest = __objRest(_b, ["space"]);
    return _("div", __spreadProps(__spreadValues({}, rest), { class: vertical_space_default[space] }));
  }
  var init_vertical_space2 = __esm({
    "node_modules/.pnpm/@create-figma-plugin+ui@1.9.2_preact@10.23.1/node_modules/@create-figma-plugin/ui/lib/components/layout/vertical-space/vertical-space.js"() {
      init_preact_module();
      init_vertical_space();
    }
  });

  // ../../../../private/var/folders/kq/djbxqzfn62xb8wdhcdrf5qfc0000gn/T/02849207-c5d9-4707-8177-b6b752d451f2/text.js
  var text_default;
  var init_text = __esm({
    "../../../../private/var/folders/kq/djbxqzfn62xb8wdhcdrf5qfc0000gn/T/02849207-c5d9-4707-8177-b6b752d451f2/text.js"() {
      if (document.getElementById("7e02125339") === null) {
        const element = document.createElement("style");
        element.id = "7e02125339";
        element.textContent = `._text_wg7jj_1 {
  padding-top: 1px;
  color: var(--color-black-80);
  pointer-events: none;
  transform: translateY(4px);
}
._text_wg7jj_1:before {
  display: block;
  height: 0;
  margin-top: -9px;
  content: '';
  pointer-events: none;
}
._text_wg7jj_1 strong {
  font-weight: var(--font-weight-bold);
}
._text_wg7jj_1 a {
  color: var(--color-accent);
  pointer-events: all;
  text-decoration: none;
}
._text_wg7jj_1 a:hover {
  text-decoration: underline;
}
._text_wg7jj_1 a:focus {
  background-color: var(--color-blue-30-translucent);
  border-radius: var(--border-radius-2);
  outline: 0;
}
._text_wg7jj_1 code {
  font-family: var(--font-family-code);
}

._bold_wg7jj_34 {
  font-weight: var(--font-weight-bold);
}

._muted_wg7jj_38 {
  color: var(--color-black-30);
}

._numeric_wg7jj_42 {
  font-variant-numeric: tabular-nums;
}

._left_wg7jj_46 {
  text-align: left;
}

._center_wg7jj_50 {
  text-align: center;
}

._right_wg7jj_54 {
  text-align: right;
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy8ucG5wbS9AY3JlYXRlLWZpZ21hLXBsdWdpbit1aUAxLjkuMl9wcmVhY3RAMTAuMjMuMS9ub2RlX21vZHVsZXMvQGNyZWF0ZS1maWdtYS1wbHVnaW4vdWkvbGliL2NvbXBvbmVudHMvdGV4dC90ZXh0LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQiw0QkFBNEI7RUFDNUIsb0JBQW9CO0VBQ3BCLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsY0FBYztFQUNkLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0Usb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSwwQkFBMEI7RUFDMUIsbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRSxrREFBa0Q7RUFDbEQscUNBQXFDO0VBQ3JDLFVBQVU7QUFDWjtBQUNBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6Im5vZGVfbW9kdWxlcy8ucG5wbS9AY3JlYXRlLWZpZ21hLXBsdWdpbit1aUAxLjkuMl9wcmVhY3RAMTAuMjMuMS9ub2RlX21vZHVsZXMvQGNyZWF0ZS1maWdtYS1wbHVnaW4vdWkvbGliL2NvbXBvbmVudHMvdGV4dC90ZXh0LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0IHtcbiAgcGFkZGluZy10b3A6IDFweDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWJsYWNrLTgwKTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0cHgpO1xufVxuLnRleHQ6YmVmb3JlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMDtcbiAgbWFyZ2luLXRvcDogLTlweDtcbiAgY29udGVudDogJyc7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLnRleHQgc3Ryb25nIHtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LWJvbGQpO1xufVxuLnRleHQgYSB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1hY2NlbnQpO1xuICBwb2ludGVyLWV2ZW50czogYWxsO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4udGV4dCBhOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG4udGV4dCBhOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmx1ZS0zMC10cmFuc2x1Y2VudCk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtMik7XG4gIG91dGxpbmU6IDA7XG59XG4udGV4dCBjb2RlIHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5LWNvZGUpO1xufVxuXG4uYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1ib2xkKTtcbn1cblxuLm11dGVkIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWJsYWNrLTMwKTtcbn1cblxuLm51bWVyaWMge1xuICBmb250LXZhcmlhbnQtbnVtZXJpYzogdGFidWxhci1udW1zO1xufVxuXG4ubGVmdCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuIl19 */`;
        document.head.append(element);
      }
      text_default = { "text": "_text_wg7jj_1", "bold": "_bold_wg7jj_34", "muted": "_muted_wg7jj_38", "numeric": "_numeric_wg7jj_42", "left": "_left_wg7jj_46", "center": "_center_wg7jj_50", "right": "_right_wg7jj_54" };
    }
  });

  // node_modules/.pnpm/@create-figma-plugin+ui@1.9.2_preact@10.23.1/node_modules/@create-figma-plugin/ui/lib/components/text/text.js
  function Text(_a) {
    var _b = _a, { align = "left", bold = false, children, muted = false, numeric = false } = _b, rest = __objRest(_b, ["align", "bold", "children", "muted", "numeric"]);
    return _("div", __spreadProps(__spreadValues({}, rest), { class: createClassName([
      text_default.text,
      text_default[align],
      bold === true ? text_default.bold : null,
      muted === true ? text_default.muted : null,
      numeric === true ? text_default.numeric : null
    ]) }), children);
  }
  var init_text2 = __esm({
    "node_modules/.pnpm/@create-figma-plugin+ui@1.9.2_preact@10.23.1/node_modules/@create-figma-plugin/ui/lib/components/text/text.js"() {
      init_preact_module();
      init_create_class_name();
      init_text();
    }
  });

  // node_modules/.pnpm/@create-figma-plugin+utilities@1.9.2/node_modules/@create-figma-plugin/utilities/lib/events.js
  function invokeEventHandler(name, args) {
    for (const id in eventHandlers) {
      if (eventHandlers[id].name === name) {
        eventHandlers[id].handler.apply(null, args);
      }
    }
  }
  var eventHandlers, emit;
  var init_events = __esm({
    "node_modules/.pnpm/@create-figma-plugin+utilities@1.9.2/node_modules/@create-figma-plugin/utilities/lib/events.js"() {
      eventHandlers = {};
      emit = typeof window === "undefined" ? function(name, ...args) {
        figma.ui.postMessage([name, ...args]);
      } : function(name, ...args) {
        window.parent.postMessage({
          pluginMessage: [name, ...args]
        }, "*");
      };
      if (typeof window === "undefined") {
        figma.ui.onmessage = function([name, ...args]) {
          invokeEventHandler(name, args);
        };
      } else {
        window.onmessage = function(event) {
          const [name, ...args] = event.data.pluginMessage;
          invokeEventHandler(name, args);
        };
      }
    }
  });

  // node_modules/.pnpm/@create-figma-plugin+utilities@1.9.2/node_modules/@create-figma-plugin/utilities/lib/index.js
  var init_lib = __esm({
    "node_modules/.pnpm/@create-figma-plugin+utilities@1.9.2/node_modules/@create-figma-plugin/utilities/lib/index.js"() {
      init_events();
    }
  });

  // ../../../../private/var/folders/kq/djbxqzfn62xb8wdhcdrf5qfc0000gn/T/077dc2d9-dc25-4291-a6eb-d6bfa11e48d4/base.js
  var init_base = __esm({
    "../../../../private/var/folders/kq/djbxqzfn62xb8wdhcdrf5qfc0000gn/T/077dc2d9-dc25-4291-a6eb-d6bfa11e48d4/base.js"() {
      if (document.getElementById("9c28a111da") === null) {
        const element = document.createElement("style");
        element.id = "9c28a111da";
        element.textContent = `@import url('https://fonts.googleapis.com/css?family=Inter:400,600&display=swap');

:root {
  /* border-radius */
  --border-radius-2: 2px;
  --border-radius-6: 6px;
  /* box-shadow */
  --box-shadow: var(--box-shadow-menu);
  --box-shadow-menu: 0 5px 17px rgba(0, 0, 0, 0.2),
    0 2px 7px rgba(0, 0, 0, 0.15), inset 0 0 0 0.5px #000000,
    0 0 0 0.5px rgba(0, 0, 0, 0.1);
  --box-shadow-modal: 0 2px 14px rgba(0, 0, 0, 0.15),
    0 0 0 0.5px rgba(0, 0, 0, 0.2);
  /* color */
  --color-black: #000000;
  --color-black-3-translucent: rgba(0, 0, 0, 0.03);
  --color-black-6-translucent: rgba(0, 0, 0, 0.06);
  --color-black-30: #b3b3b3;
  --color-black-30-translucent: rgba(0, 0, 0, 0.3);
  --color-black-80: #333333;
  --color-black-80-translucent: rgba(0, 0, 0, 0.8);
  --color-blue: #18a0fb;
  --color-blue-30-translucent: rgba(24, 160, 251, 0.3);
  --color-figjam-purple: #974bff;
  --color-figjam-purple-20-translucent: rgba(151, 71, 255, 0.2);
  --color-green: #1bc47d;
  --color-hud: #222222;
  --color-purple: #7b61ff;
  --color-red: #f24822;
  --color-selection-a: #daebf7;
  --color-selection-b: #edf5fa;
  --color-silver: #e5e5e5;
  --color-white: #ffffff;
  --color-white-20-translucent: rgba(255, 255, 255, 0.2);
  --color-white-40-translucent: rgba(255, 255, 255, 0.4);
  --color-yellow: #ffeb00;
  /* font */
  --font-family: 'Inter', 'Helvetica', sans-serif;
  --font-family-code: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono',
    'Courier New', monospace;
  --font-size-11: 11px;
  --font-size-12: 12px;
  --font-weight-regular: 400;
  --font-weight-bold: 600;
  --line-height-16: 16px;
  /* opacity */
  --opacity-30: 0.3;
  /* space */
  --space-extra-small: 8px;
  --space-small: 12px;
  --space-medium: 16px;
  --space-large: 20px;
  --space-extra-large: 24px;
  /* z-index */
  --z-index-1: 1;
  --z-index-2: 2;
}

* {
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: currentColor;
}

body {
  margin: 0;
  font-family: var(--font-family);
  font-size: var(--font-size-11);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-16);
}

div,
span {
  cursor: default;
  user-select: none;
}

h1,
h2,
h3 {
  margin: 0;
  font-weight: inherit;
}

button {
  padding: 0;
  border: 0;
  -webkit-appearance: none;
  background-color: transparent;
  font: inherit;
  outline: 0;
}

hr {
  border: 0;
  margin: 0;
}

label {
  display: block;
}

input,
textarea {
  padding: 0;
  border: 0;
  margin: 0;
  -webkit-appearance: none;
  cursor: default;
  font: inherit;
  outline: 0;
}

svg {
  display: block;
}

.theme-figjam {
  --color-accent: var(--color-figjam-purple);
}
.theme-figjam ::selection {
  background-color: var(--color-figjam-purple-20-translucent);
}

.theme-figma {
  --color-accent: var(--color-blue);
}
.theme-figma ::selection {
  background-color: var(--color-blue-30-translucent);
}
`;
        document.head.prepend(element);
      }
    }
  });

  // node_modules/.pnpm/@create-figma-plugin+ui@1.9.2_preact@10.23.1/node_modules/@create-figma-plugin/ui/lib/utilities/render.js
  function render(Plugin2) {
    return function(rootNode2, props) {
      B(_(Plugin2, __spreadValues({}, props)), rootNode2);
    };
  }
  var init_render = __esm({
    "node_modules/.pnpm/@create-figma-plugin+ui@1.9.2_preact@10.23.1/node_modules/@create-figma-plugin/ui/lib/utilities/render.js"() {
      init_base();
      init_preact_module();
    }
  });

  // node_modules/.pnpm/@create-figma-plugin+ui@1.9.2_preact@10.23.1/node_modules/@create-figma-plugin/ui/lib/index.js
  var init_lib2 = __esm({
    "node_modules/.pnpm/@create-figma-plugin+ui@1.9.2_preact@10.23.1/node_modules/@create-figma-plugin/ui/lib/index.js"() {
      init_banner2();
      init_button2();
      init_divider2();
      init_icon_megaphone_32();
      init_container2();
      init_inline2();
      init_stack2();
      init_vertical_space2();
      init_text2();
      init_render();
    }
  });

  // src/ui.tsx
  var ui_exports = {};
  __export(ui_exports, {
    default: () => ui_default
  });
  function Plugin() {
    const handlePageButtonClick = q2(function() {
      emit("CREATE_PAGES");
    }, []);
    return /* @__PURE__ */ _(Container, {
      style: "padding: 0"
    }, /* @__PURE__ */ _(Banner, {
      icon: /* @__PURE__ */ _(IconMegaphone32, null)
    }, "Welcome to the Design Toolkit plugin"), /* @__PURE__ */ _(Container, null, /* @__PURE__ */ _(VerticalSpace, {
      space: "large"
    }), /* @__PURE__ */ _(Text, {
      bold: true
    }, "Automations"), /* @__PURE__ */ _(VerticalSpace, {
      space: "medium"
    }), /* @__PURE__ */ _(Button, {
      fullWidth: true,
      onClick: handlePageButtonClick
    }, "Setup design document"), /* @__PURE__ */ _(VerticalSpace, {
      space: "large"
    })), /* @__PURE__ */ _(Divider, null), /* @__PURE__ */ _(Container, null, /* @__PURE__ */ _(VerticalSpace, {
      space: "large"
    }), /* @__PURE__ */ _(Stack, {
      space: "extraLarge"
    }, /* @__PURE__ */ _(Stack, {
      space: "medium"
    }, /* @__PURE__ */ _(Text, {
      bold: true
    }, "Documentation"), /* @__PURE__ */ _(Inline, {
      space: "medium"
    }, /* @__PURE__ */ _(Text, null, /* @__PURE__ */ _("a", {
      href: "https://github.com/NoWorries/toolkit-figma-plugin",
      target: "_blank"
    }, "\u{1F310} Storybook")), /* @__PURE__ */ _(Text, null, /* @__PURE__ */ _("a", {
      href: "https://github.com/NoWorries/toolkit-figma-plugin",
      target: "_blank"
    }, "\u{1F310} Documentation")))), /* @__PURE__ */ _(Stack, {
      space: "medium"
    }, /* @__PURE__ */ _(Text, {
      bold: true
    }, "Design Support"), /* @__PURE__ */ _(Inline, {
      space: "medium"
    }, /* @__PURE__ */ _(Text, null, /* @__PURE__ */ _("a", {
      href: "https://github.com/NoWorries/toolkit-figma-plugin",
      target: "_blank"
    }, "\u{1F310} Social channel")), /* @__PURE__ */ _(Text, null, /* @__PURE__ */ _("a", {
      href: "https://github.com/NoWorries/toolkit-figma-plugin",
      target: "_blank"
    }, "\u{1F310} Jira")))), " ")));
  }
  var ui_default;
  var init_ui = __esm({
    "src/ui.tsx"() {
      "use strict";
      init_lib2();
      init_lib();
      init_preact_module();
      init_hooks_module();
      ui_default = render(Plugin);
    }
  });

  // <stdin>
  var rootNode = document.getElementById("create-figma-plugin");
  var modules = { "src/main.ts--default": (init_ui(), __toCommonJS(ui_exports))["default"], "designToolkit": (init_ui(), __toCommonJS(ui_exports))["default"] };
  var commandId = __FIGMA_COMMAND__ === "" ? "src/main.ts--default" : __FIGMA_COMMAND__;
  if (typeof modules[commandId] === "undefined") {
    throw new Error(
      "No UI defined for command `" + commandId + "`"
    );
  }
  modules[commandId](rootNode, __SHOW_UI_DATA__);
})();
