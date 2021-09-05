(() => {
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a3, b3) => {
    for (var prop in b3 || (b3 = {}))
      if (__hasOwnProp.call(b3, prop))
        __defNormalProp(a3, prop, b3[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b3)) {
        if (__propIsEnum.call(b3, prop))
          __defNormalProp(a3, prop, b3[prop]);
      }
    return a3;
  };
  var __spreadProps = (a3, b3) => __defProps(a3, __getOwnPropDescs(b3));

  // node_modules/.pnpm/preact@10.5.14/node_modules/preact/dist/preact.module.js
  var n;
  var l;
  var u;
  var i;
  var t;
  var o;
  var r;
  var f;
  var e = {};
  var c = [];
  var s = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  function a(n2, l3) {
    for (var u3 in l3)
      n2[u3] = l3[u3];
    return n2;
  }
  function h(n2) {
    var l3 = n2.parentNode;
    l3 && l3.removeChild(n2);
  }
  function v(l3, u3, i3) {
    var t3, o3, r3, f3 = {};
    for (r3 in u3)
      r3 == "key" ? t3 = u3[r3] : r3 == "ref" ? o3 = u3[r3] : f3[r3] = u3[r3];
    if (arguments.length > 2 && (f3.children = arguments.length > 3 ? n.call(arguments, 2) : i3), typeof l3 == "function" && l3.defaultProps != null)
      for (r3 in l3.defaultProps)
        f3[r3] === void 0 && (f3[r3] = l3.defaultProps[r3]);
    return y(l3, f3, t3, o3, null);
  }
  function y(n2, i3, t3, o3, r3) {
    var f3 = { type: n2, props: i3, key: t3, ref: o3, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: r3 == null ? ++u : r3 };
    return l.vnode != null && l.vnode(f3), f3;
  }
  function d(n2) {
    return n2.children;
  }
  function _(n2, l3) {
    this.props = n2, this.context = l3;
  }
  function k(n2, l3) {
    if (l3 == null)
      return n2.__ ? k(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
    for (var u3; l3 < n2.__k.length; l3++)
      if ((u3 = n2.__k[l3]) != null && u3.__e != null)
        return u3.__e;
    return typeof n2.type == "function" ? k(n2) : null;
  }
  function b(n2) {
    var l3, u3;
    if ((n2 = n2.__) != null && n2.__c != null) {
      for (n2.__e = n2.__c.base = null, l3 = 0; l3 < n2.__k.length; l3++)
        if ((u3 = n2.__k[l3]) != null && u3.__e != null) {
          n2.__e = n2.__c.base = u3.__e;
          break;
        }
      return b(n2);
    }
  }
  function m(n2) {
    (!n2.__d && (n2.__d = true) && t.push(n2) && !g.__r++ || r !== l.debounceRendering) && ((r = l.debounceRendering) || o)(g);
  }
  function g() {
    for (var n2; g.__r = t.length; )
      n2 = t.sort(function(n3, l3) {
        return n3.__v.__b - l3.__v.__b;
      }), t = [], n2.some(function(n3) {
        var l3, u3, i3, t3, o3, r3;
        n3.__d && (o3 = (t3 = (l3 = n3).__v).__e, (r3 = l3.__P) && (u3 = [], (i3 = a({}, t3)).__v = t3.__v + 1, j(r3, t3, i3, l3.__n, r3.ownerSVGElement !== void 0, t3.__h != null ? [o3] : null, u3, o3 == null ? k(t3) : o3, t3.__h), z(u3, t3), t3.__e != o3 && b(t3)));
      });
  }
  function w(n2, l3, u3, i3, t3, o3, r3, f3, s2, a3) {
    var h2, v3, p2, _2, b3, m3, g3, w3 = i3 && i3.__k || c, A = w3.length;
    for (u3.__k = [], h2 = 0; h2 < l3.length; h2++)
      if ((_2 = u3.__k[h2] = (_2 = l3[h2]) == null || typeof _2 == "boolean" ? null : typeof _2 == "string" || typeof _2 == "number" || typeof _2 == "bigint" ? y(null, _2, null, null, _2) : Array.isArray(_2) ? y(d, { children: _2 }, null, null, null) : _2.__b > 0 ? y(_2.type, _2.props, _2.key, null, _2.__v) : _2) != null) {
        if (_2.__ = u3, _2.__b = u3.__b + 1, (p2 = w3[h2]) === null || p2 && _2.key == p2.key && _2.type === p2.type)
          w3[h2] = void 0;
        else
          for (v3 = 0; v3 < A; v3++) {
            if ((p2 = w3[v3]) && _2.key == p2.key && _2.type === p2.type) {
              w3[v3] = void 0;
              break;
            }
            p2 = null;
          }
        j(n2, _2, p2 = p2 || e, t3, o3, r3, f3, s2, a3), b3 = _2.__e, (v3 = _2.ref) && p2.ref != v3 && (g3 || (g3 = []), p2.ref && g3.push(p2.ref, null, _2), g3.push(v3, _2.__c || b3, _2)), b3 != null ? (m3 == null && (m3 = b3), typeof _2.type == "function" && _2.__k != null && _2.__k === p2.__k ? _2.__d = s2 = x(_2, s2, n2) : s2 = P(n2, _2, p2, w3, b3, s2), a3 || u3.type !== "option" ? typeof u3.type == "function" && (u3.__d = s2) : n2.value = "") : s2 && p2.__e == s2 && s2.parentNode != n2 && (s2 = k(p2));
      }
    for (u3.__e = m3, h2 = A; h2--; )
      w3[h2] != null && (typeof u3.type == "function" && w3[h2].__e != null && w3[h2].__e == u3.__d && (u3.__d = k(i3, h2 + 1)), N(w3[h2], w3[h2]));
    if (g3)
      for (h2 = 0; h2 < g3.length; h2++)
        M(g3[h2], g3[++h2], g3[++h2]);
  }
  function x(n2, l3, u3) {
    var i3, t3;
    for (i3 = 0; i3 < n2.__k.length; i3++)
      (t3 = n2.__k[i3]) && (t3.__ = n2, l3 = typeof t3.type == "function" ? x(t3, l3, u3) : P(u3, t3, t3, n2.__k, t3.__e, l3));
    return l3;
  }
  function P(n2, l3, u3, i3, t3, o3) {
    var r3, f3, e3;
    if (l3.__d !== void 0)
      r3 = l3.__d, l3.__d = void 0;
    else if (u3 == null || t3 != o3 || t3.parentNode == null)
      n:
        if (o3 == null || o3.parentNode !== n2)
          n2.appendChild(t3), r3 = null;
        else {
          for (f3 = o3, e3 = 0; (f3 = f3.nextSibling) && e3 < i3.length; e3 += 2)
            if (f3 == t3)
              break n;
          n2.insertBefore(t3, o3), r3 = o3;
        }
    return r3 !== void 0 ? r3 : t3.nextSibling;
  }
  function C(n2, l3, u3, i3, t3) {
    var o3;
    for (o3 in u3)
      o3 === "children" || o3 === "key" || o3 in l3 || H(n2, o3, null, u3[o3], i3);
    for (o3 in l3)
      t3 && typeof l3[o3] != "function" || o3 === "children" || o3 === "key" || o3 === "value" || o3 === "checked" || u3[o3] === l3[o3] || H(n2, o3, l3[o3], u3[o3], i3);
  }
  function $(n2, l3, u3) {
    l3[0] === "-" ? n2.setProperty(l3, u3) : n2[l3] = u3 == null ? "" : typeof u3 != "number" || s.test(l3) ? u3 : u3 + "px";
  }
  function H(n2, l3, u3, i3, t3) {
    var o3;
    n:
      if (l3 === "style")
        if (typeof u3 == "string")
          n2.style.cssText = u3;
        else {
          if (typeof i3 == "string" && (n2.style.cssText = i3 = ""), i3)
            for (l3 in i3)
              u3 && l3 in u3 || $(n2.style, l3, "");
          if (u3)
            for (l3 in u3)
              i3 && u3[l3] === i3[l3] || $(n2.style, l3, u3[l3]);
        }
      else if (l3[0] === "o" && l3[1] === "n")
        o3 = l3 !== (l3 = l3.replace(/Capture$/, "")), l3 = l3.toLowerCase() in n2 ? l3.toLowerCase().slice(2) : l3.slice(2), n2.l || (n2.l = {}), n2.l[l3 + o3] = u3, u3 ? i3 || n2.addEventListener(l3, o3 ? T : I, o3) : n2.removeEventListener(l3, o3 ? T : I, o3);
      else if (l3 !== "dangerouslySetInnerHTML") {
        if (t3)
          l3 = l3.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
        else if (l3 !== "href" && l3 !== "list" && l3 !== "form" && l3 !== "tabIndex" && l3 !== "download" && l3 in n2)
          try {
            n2[l3] = u3 == null ? "" : u3;
            break n;
          } catch (n3) {
          }
        typeof u3 == "function" || (u3 != null && (u3 !== false || l3[0] === "a" && l3[1] === "r") ? n2.setAttribute(l3, u3) : n2.removeAttribute(l3));
      }
  }
  function I(n2) {
    this.l[n2.type + false](l.event ? l.event(n2) : n2);
  }
  function T(n2) {
    this.l[n2.type + true](l.event ? l.event(n2) : n2);
  }
  function j(n2, u3, i3, t3, o3, r3, f3, e3, c3) {
    var s2, h2, v3, y3, p2, k3, b3, m3, g3, x3, A, P2 = u3.type;
    if (u3.constructor !== void 0)
      return null;
    i3.__h != null && (c3 = i3.__h, e3 = u3.__e = i3.__e, u3.__h = null, r3 = [e3]), (s2 = l.__b) && s2(u3);
    try {
      n:
        if (typeof P2 == "function") {
          if (m3 = u3.props, g3 = (s2 = P2.contextType) && t3[s2.__c], x3 = s2 ? g3 ? g3.props.value : s2.__ : t3, i3.__c ? b3 = (h2 = u3.__c = i3.__c).__ = h2.__E : ("prototype" in P2 && P2.prototype.render ? u3.__c = h2 = new P2(m3, x3) : (u3.__c = h2 = new _(m3, x3), h2.constructor = P2, h2.render = O), g3 && g3.sub(h2), h2.props = m3, h2.state || (h2.state = {}), h2.context = x3, h2.__n = t3, v3 = h2.__d = true, h2.__h = []), h2.__s == null && (h2.__s = h2.state), P2.getDerivedStateFromProps != null && (h2.__s == h2.state && (h2.__s = a({}, h2.__s)), a(h2.__s, P2.getDerivedStateFromProps(m3, h2.__s))), y3 = h2.props, p2 = h2.state, v3)
            P2.getDerivedStateFromProps == null && h2.componentWillMount != null && h2.componentWillMount(), h2.componentDidMount != null && h2.__h.push(h2.componentDidMount);
          else {
            if (P2.getDerivedStateFromProps == null && m3 !== y3 && h2.componentWillReceiveProps != null && h2.componentWillReceiveProps(m3, x3), !h2.__e && h2.shouldComponentUpdate != null && h2.shouldComponentUpdate(m3, h2.__s, x3) === false || u3.__v === i3.__v) {
              h2.props = m3, h2.state = h2.__s, u3.__v !== i3.__v && (h2.__d = false), h2.__v = u3, u3.__e = i3.__e, u3.__k = i3.__k, u3.__k.forEach(function(n3) {
                n3 && (n3.__ = u3);
              }), h2.__h.length && f3.push(h2);
              break n;
            }
            h2.componentWillUpdate != null && h2.componentWillUpdate(m3, h2.__s, x3), h2.componentDidUpdate != null && h2.__h.push(function() {
              h2.componentDidUpdate(y3, p2, k3);
            });
          }
          h2.context = x3, h2.props = m3, h2.state = h2.__s, (s2 = l.__r) && s2(u3), h2.__d = false, h2.__v = u3, h2.__P = n2, s2 = h2.render(h2.props, h2.state, h2.context), h2.state = h2.__s, h2.getChildContext != null && (t3 = a(a({}, t3), h2.getChildContext())), v3 || h2.getSnapshotBeforeUpdate == null || (k3 = h2.getSnapshotBeforeUpdate(y3, p2)), A = s2 != null && s2.type === d && s2.key == null ? s2.props.children : s2, w(n2, Array.isArray(A) ? A : [A], u3, i3, t3, o3, r3, f3, e3, c3), h2.base = u3.__e, u3.__h = null, h2.__h.length && f3.push(h2), b3 && (h2.__E = h2.__ = null), h2.__e = false;
        } else
          r3 == null && u3.__v === i3.__v ? (u3.__k = i3.__k, u3.__e = i3.__e) : u3.__e = L(i3.__e, u3, i3, t3, o3, r3, f3, c3);
      (s2 = l.diffed) && s2(u3);
    } catch (n3) {
      u3.__v = null, (c3 || r3 != null) && (u3.__e = e3, u3.__h = !!c3, r3[r3.indexOf(e3)] = null), l.__e(n3, u3, i3);
    }
  }
  function z(n2, u3) {
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
  function L(l3, u3, i3, t3, o3, r3, f3, c3) {
    var s2, a3, v3, y3 = i3.props, p2 = u3.props, d2 = u3.type, _2 = 0;
    if (d2 === "svg" && (o3 = true), r3 != null) {
      for (; _2 < r3.length; _2++)
        if ((s2 = r3[_2]) && (s2 === l3 || (d2 ? s2.localName == d2 : s2.nodeType == 3))) {
          l3 = s2, r3[_2] = null;
          break;
        }
    }
    if (l3 == null) {
      if (d2 === null)
        return document.createTextNode(p2);
      l3 = o3 ? document.createElementNS("http://www.w3.org/2000/svg", d2) : document.createElement(d2, p2.is && p2), r3 = null, c3 = false;
    }
    if (d2 === null)
      y3 === p2 || c3 && l3.data === p2 || (l3.data = p2);
    else {
      if (r3 = r3 && n.call(l3.childNodes), a3 = (y3 = i3.props || e).dangerouslySetInnerHTML, v3 = p2.dangerouslySetInnerHTML, !c3) {
        if (r3 != null)
          for (y3 = {}, _2 = 0; _2 < l3.attributes.length; _2++)
            y3[l3.attributes[_2].name] = l3.attributes[_2].value;
        (v3 || a3) && (v3 && (a3 && v3.__html == a3.__html || v3.__html === l3.innerHTML) || (l3.innerHTML = v3 && v3.__html || ""));
      }
      if (C(l3, p2, y3, o3, c3), v3)
        u3.__k = [];
      else if (_2 = u3.props.children, w(l3, Array.isArray(_2) ? _2 : [_2], u3, i3, t3, o3 && d2 !== "foreignObject", r3, f3, r3 ? r3[0] : i3.__k && k(i3, 0), c3), r3 != null)
        for (_2 = r3.length; _2--; )
          r3[_2] != null && h(r3[_2]);
      c3 || ("value" in p2 && (_2 = p2.value) !== void 0 && (_2 !== l3.value || d2 === "progress" && !_2) && H(l3, "value", _2, y3.value, false), "checked" in p2 && (_2 = p2.checked) !== void 0 && _2 !== l3.checked && H(l3, "checked", _2, y3.checked, false));
    }
    return l3;
  }
  function M(n2, u3, i3) {
    try {
      typeof n2 == "function" ? n2(u3) : n2.current = u3;
    } catch (n3) {
      l.__e(n3, i3);
    }
  }
  function N(n2, u3, i3) {
    var t3, o3;
    if (l.unmount && l.unmount(n2), (t3 = n2.ref) && (t3.current && t3.current !== n2.__e || M(t3, null, u3)), (t3 = n2.__c) != null) {
      if (t3.componentWillUnmount)
        try {
          t3.componentWillUnmount();
        } catch (n3) {
          l.__e(n3, u3);
        }
      t3.base = t3.__P = null;
    }
    if (t3 = n2.__k)
      for (o3 = 0; o3 < t3.length; o3++)
        t3[o3] && N(t3[o3], u3, typeof n2.type != "function");
    i3 || n2.__e == null || h(n2.__e), n2.__e = n2.__d = void 0;
  }
  function O(n2, l3, u3) {
    return this.constructor(n2, u3);
  }
  function S(u3, i3, t3) {
    var o3, r3, f3;
    l.__ && l.__(u3, i3), r3 = (o3 = typeof t3 == "function") ? null : t3 && t3.__k || i3.__k, f3 = [], j(i3, u3 = (!o3 && t3 || i3).__k = v(d, null, [u3]), r3 || e, e, i3.ownerSVGElement !== void 0, !o3 && t3 ? [t3] : r3 ? null : i3.firstChild ? n.call(i3.childNodes) : null, f3, !o3 && t3 ? t3 : r3 ? r3.__e : i3.firstChild, o3), z(f3, u3);
  }
  function D(n2, l3) {
    var u3 = { __c: l3 = "__cC" + f++, __: n2, Consumer: function(n3, l4) {
      return n3.children(l4);
    }, Provider: function(n3) {
      var u4, i3;
      return this.getChildContext || (u4 = [], (i3 = {})[l3] = this, this.getChildContext = function() {
        return i3;
      }, this.shouldComponentUpdate = function(n4) {
        this.props.value !== n4.value && u4.some(m);
      }, this.sub = function(n4) {
        u4.push(n4);
        var l4 = n4.componentWillUnmount;
        n4.componentWillUnmount = function() {
          u4.splice(u4.indexOf(n4), 1), l4 && l4.call(n4);
        };
      }), n3.children;
    } };
    return u3.Provider.__ = u3.Consumer.contextType = u3;
  }
  n = c.slice, l = { __e: function(n2, l3) {
    for (var u3, i3, t3; l3 = l3.__; )
      if ((u3 = l3.__c) && !u3.__)
        try {
          if ((i3 = u3.constructor) && i3.getDerivedStateFromError != null && (u3.setState(i3.getDerivedStateFromError(n2)), t3 = u3.__d), u3.componentDidCatch != null && (u3.componentDidCatch(n2), t3 = u3.__d), t3)
            return u3.__E = u3;
        } catch (l4) {
          n2 = l4;
        }
    throw n2;
  } }, u = 0, i = function(n2) {
    return n2 != null && n2.constructor === void 0;
  }, _.prototype.setState = function(n2, l3) {
    var u3;
    u3 = this.__s != null && this.__s !== this.state ? this.__s : this.__s = a({}, this.state), typeof n2 == "function" && (n2 = n2(a({}, u3), this.props)), n2 && a(u3, n2), n2 != null && this.__v && (l3 && this.__h.push(l3), m(this));
  }, _.prototype.forceUpdate = function(n2) {
    this.__v && (this.__e = true, n2 && this.__h.push(n2), m(this));
  }, _.prototype.render = d, t = [], o = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, g.__r = 0, f = 0;

  // node_modules/.pnpm/preact@10.5.14/node_modules/preact/hooks/dist/hooks.module.js
  var t2;
  var u2;
  var r2;
  var o2 = 0;
  var i2 = [];
  var c2 = l.__b;
  var f2 = l.__r;
  var e2 = l.diffed;
  var a2 = l.__c;
  var v2 = l.unmount;
  function m2(t3, r3) {
    l.__h && l.__h(u2, t3, o2 || r3), o2 = 0;
    var i3 = u2.__H || (u2.__H = { __: [], __h: [] });
    return t3 >= i3.__.length && i3.__.push({}), i3.__[t3];
  }
  function l2(n2) {
    return o2 = 1, p(w2, n2);
  }
  function p(n2, r3, o3) {
    var i3 = m2(t2++, 2);
    return i3.t = n2, i3.__c || (i3.__ = [o3 ? o3(r3) : w2(void 0, r3), function(n3) {
      var t3 = i3.t(i3.__[0], n3);
      i3.__[0] !== t3 && (i3.__ = [t3, i3.__[1]], i3.__c.setState({}));
    }], i3.__c = u2), i3.__;
  }
  function y2(r3, o3) {
    var i3 = m2(t2++, 3);
    !l.__s && k2(i3.__H, o3) && (i3.__ = r3, i3.__H = o3, u2.__H.__h.push(i3));
  }
  function F(n2) {
    var r3 = u2.context[n2.__c], o3 = m2(t2++, 9);
    return o3.c = n2, r3 ? (o3.__ == null && (o3.__ = true, r3.sub(u2)), r3.props.value) : n2.__;
  }
  function x2() {
    i2.forEach(function(t3) {
      if (t3.__P)
        try {
          t3.__H.__h.forEach(g2), t3.__H.__h.forEach(j2), t3.__H.__h = [];
        } catch (u3) {
          t3.__H.__h = [], l.__e(u3, t3.__v);
        }
    }), i2 = [];
  }
  l.__b = function(n2) {
    u2 = null, c2 && c2(n2);
  }, l.__r = function(n2) {
    f2 && f2(n2), t2 = 0;
    var r3 = (u2 = n2.__c).__H;
    r3 && (r3.__h.forEach(g2), r3.__h.forEach(j2), r3.__h = []);
  }, l.diffed = function(t3) {
    e2 && e2(t3);
    var o3 = t3.__c;
    o3 && o3.__H && o3.__H.__h.length && (i2.push(o3) !== 1 && r2 === l.requestAnimationFrame || ((r2 = l.requestAnimationFrame) || function(n2) {
      var t4, u3 = function() {
        clearTimeout(r3), b2 && cancelAnimationFrame(t4), setTimeout(n2);
      }, r3 = setTimeout(u3, 100);
      b2 && (t4 = requestAnimationFrame(u3));
    })(x2)), u2 = void 0;
  }, l.__c = function(t3, u3) {
    u3.some(function(t4) {
      try {
        t4.__h.forEach(g2), t4.__h = t4.__h.filter(function(n2) {
          return !n2.__ || j2(n2);
        });
      } catch (r3) {
        u3.some(function(n2) {
          n2.__h && (n2.__h = []);
        }), u3 = [], l.__e(r3, t4.__v);
      }
    }), a2 && a2(t3, u3);
  }, l.unmount = function(t3) {
    v2 && v2(t3);
    var u3 = t3.__c;
    if (u3 && u3.__H)
      try {
        u3.__H.__.forEach(g2);
      } catch (t4) {
        l.__e(t4, u3.__v);
      }
  };
  var b2 = typeof requestAnimationFrame == "function";
  function g2(n2) {
    var t3 = u2;
    typeof n2.__c == "function" && n2.__c(), u2 = t3;
  }
  function j2(n2) {
    var t3 = u2;
    n2.__c = n2.__(), u2 = t3;
  }
  function k2(n2, t3) {
    return !n2 || n2.length !== t3.length || t3.some(function(t4, u3) {
      return t4 !== n2[u3];
    });
  }
  function w2(n2, t3) {
    return typeof t3 == "function" ? t3(n2) : t3;
  }

  // src/storage.ts
  var StorageType;
  (function(StorageType2) {
    StorageType2[StorageType2["Session"] = 0] = "Session";
    StorageType2[StorageType2["Local"] = 1] = "Local";
  })(StorageType || (StorageType = {}));
  var SESSION = 0;
  var LOCAL = 1;
  var getStorage = (type, key) => {
    const storage = window[type === 0 ? "sessionStorage" : "localStorage"];
    return {
      get: () => {
        const str = storage.getItem(key);
        if (str == null)
          return null;
        try {
          return JSON.parse(str);
        } catch (_2) {
          return null;
        }
      },
      set: (value) => {
        storage.setItem(key, JSON.stringify(value));
      }
    };
  };
  var useStorage = (type, key, def) => {
    const [value, setValue] = l2(def);
    const [storage, setStorage] = l2(null);
    y2(() => {
      const store = getStorage(type, key);
      setStorage(store);
      const val = store.get();
      if (val == null) {
        store.set(value);
      } else {
        setValue(val);
      }
      return () => setStorage(null);
    }, [type, key]);
    y2(() => {
      if (storage != null) {
        storage.set(value);
      }
    }, [value]);
    return [value, setValue];
  };

  // src/config.tsx
  var defaultConfig = {
    version: 1,
    tartoPopup: false,
    debugMode: false,
    hideWarrior: false
  };
  var ConfigContext = D([
    defaultConfig,
    (_2) => {
    }
  ]);
  var ConfigProvider = ({ children }) => {
    const [config, setConfig] = useStorage(LOCAL, "config", defaultConfig);
    if (config.version !== defaultConfig.version)
      setConfig(defaultConfig);
    return /* @__PURE__ */ v(ConfigContext.Provider, {
      value: [config, setConfig],
      children
    });
  };
  var useConfig = (key) => {
    const [config, setConfig] = F(ConfigContext);
    return [
      config[key],
      (conf) => setConfig(__spreadProps(__spreadValues({}, config), { [key]: conf }))
    ];
  };

  // src/history.tsx
  var HistoryContext = D([
    [],
    (_2) => {
    }
  ]);
  var HistoryProvider = ({ children }) => /* @__PURE__ */ v(HistoryContext.Provider, {
    value: useStorage(SESSION, "item-history", []),
    children
  });
  var useHistory = () => F(HistoryContext);

  // src/popup.tsx
  var popupName = "souffle-popup";
  var PopupContext = D({
    openPopup: (_url) => {
    }
  });
  var PopupProvider = ({ children }) => {
    const [popup, setPopup] = l2(null);
    return /* @__PURE__ */ v(PopupContext.Provider, {
      children,
      value: { openPopup: (url) => {
        if (popup != null) {
          popup.close();
        }
        const pop = window.open(url, popupName, "width=700,height=700");
        pop == null ? void 0 : pop.focus();
        setPopup(pop);
      } }
    });
  };
  var Popup = ({ href, class: cn, children }) => {
    const { openPopup } = F(PopupContext);
    return /* @__PURE__ */ v("a", {
      class: cn,
      href,
      target: popupName,
      children,
      onClick: (event) => {
        event.preventDefault();
        openPopup(href);
      }
    });
  };
  var usePopup = () => F(PopupContext).openPopup;

  // src/item.module.ss
  var linkTarto = "_link-tarto_b0cqv_3";
  var item = "_item_b0cqv_8";
  var deleteItemBtn = "_delete-item-btn_b0cqv_23";
  var item_module_default = { linkTarto, item, deleteItemBtn };

  // src/item.tsx
  var tartoUrl = (name) => "https://ff14.tar.to/item/list/?redirect=true&quick-search-option=item&limit=2&keyword=" + encodeURIComponent(name);
  var Tarto = ({ name }) => /* @__PURE__ */ v(Popup, {
    class: item_module_default.linkTarto,
    href: tartoUrl(name)
  }, name);
  var Item = ({ name }) => {
    const [history, modifyHistory] = useHistory();
    return /* @__PURE__ */ v("li", {
      class: item_module_default.item
    }, /* @__PURE__ */ v(Tarto, {
      name
    }), /* @__PURE__ */ v("button", {
      class: item_module_default.deleteItemBtn,
      onClick: () => {
        modifyHistory(history.filter((value) => value !== name));
      }
    }, "✘"));
  };

  // src/utils.ts
  var delay = (ms = 300) => new Promise((ok) => setTimeout(ok, ms));

  // src/querystring.ts
  var decode = (str) => {
    return Object.fromEntries(str.replace(/\+/g, "%20").split("&").map((entry) => {
      const eq2 = entry.indexOf("=");
      if (eq2 < 0)
        return [decodeURIComponent(entry), ""];
      return [
        decodeURIComponent(entry.slice(0, eq2)),
        decodeURIComponent(entry.slice(eq2 + 1))
      ];
    }));
  };

  // src/overlay-websocket.ts
  var closeOnError = (socket) => socket.onerror = () => socket.close();
  var onClose = (socket) => new Promise((ok) => {
    closeOnError(socket);
    socket.onclose = async () => {
      await delay(1e3);
      ok();
    };
  });
  var listen = (url, callback) => {
    let socket;
    let explicitClose = false;
    const handleClose = () => {
      if (explicitClose)
        return;
      socket = new WebSocket(url);
      socket.onmessage = ({ data }) => {
        if (data === ".")
          socket.send(".");
        let res;
        try {
          res = JSON.parse(data);
        } catch (_2) {
          return;
        }
        callback(res);
      };
      onClose(socket).then(handleClose);
    };
    handleClose();
    return () => {
      explicitClose = true;
      socket.close();
    };
  };

  // src/overlay-plugin.tsx
  var getWebSocket = (cb) => {
    const qs = decode(window.location.search.replace(/^\?/, ""));
    const host = qs["HOST_PORT"] || "";
    if (!/^wss?:\/\//.test(host))
      return;
    return listen(`${host.replace(/\/+$/g, "")}/BeforeLogLineRead`, cb);
  };
  var getOP = async (events, cb) => {
    const api = await getOverlayPluginApi(window);
    window.__OverlayCallback = (data) => {
      if (data == null)
        return;
      cb(data);
    };
    api.callHandler(JSON.stringify({ call: "subscribe", events }), () => {
    });
    return () => api.callHandler(JSON.stringify({ call: "unsubscribe", events }), () => {
    });
  };
  var getOverlayPluginApi = async (window2) => {
    var _a;
    while (!((_a = window2.OverlayPluginApi) == null ? void 0 : _a.ready))
      await delay(300);
    return window2.OverlayPluginApi;
  };
  var MessageContext = D(null);
  var UserNameContext = D(null);
  var MessageProvider = ({ children }) => {
    const [line, setLine] = l2(null);
    const [user, setUser] = l2(null);
    y2(() => {
      const ws = getWebSocket((data) => {
        if (data.msgtype === "SendCharName") {
          const { charID, charName } = data.msg;
          return setUser({
            id: charID.toString(16).toUpperCase(),
            name: charName
          });
        }
        if (data.msgtype === "Chat") {
          return setLine(data.msg.split("|"));
        }
      });
      if (ws)
        return ws;
      let unsubscribe = () => {
      };
      getOP(["LogLine", "ChangePrimaryPlayer"], (data) => {
        if (data.type === "LogLine") {
          return setLine(data.line);
        }
        if (data.type === "ChangePrimaryPlayer") {
          return setUser({
            id: data.charID.toString(16).toLowerCase(),
            name: data.charName
          });
        }
      }).then((func) => {
        unsubscribe = func;
      });
      return () => unsubscribe();
    }, []);
    return /* @__PURE__ */ v(UserNameContext.Provider, {
      value: user
    }, /* @__PURE__ */ v(MessageContext.Provider, {
      value: line
    }, children));
  };
  var useLogFilter = (func) => {
    const user = F(UserNameContext);
    const line = F(MessageContext);
    if (line == null)
      return null;
    return func(line, user);
  };

  // src/jobs.ts
  var CRP = 8;
  var BSM = 9;
  var ARM = 10;
  var GSM = 11;
  var LTW = 12;
  var WVR = 13;
  var ALC = 14;
  var CUL = 15;
  var MIN = 16;
  var BTN = 17;
  var FSH = 18;
  var workers = [
    FSH,
    MIN,
    BTN,
    CRP,
    BSM,
    ARM,
    GSM,
    LTW,
    WVR,
    ALC,
    CUL
  ].sort((a3, b3) => a3 - b3);
  var isWorker = (job) => workers.includes(job);

  // src/filters.ts
  var stripSuffix = (source, suffix) => source.endsWith(suffix) ? source.slice(0, -suffix.length) : null;
  var itemQuery = (line) => {
    var _a;
    const systemMessage = line[0] === "00" && line[2] === "0039" && line[3] === "" && line[4] || null;
    if (systemMessage == null)
      return null;
    let message = stripSuffix(systemMessage, " 보유 상황을 확인합니다.") || stripSuffix(systemMessage, "의 이름을 클립보드에 복사했습니다.");
    return ((_a = message == null ? void 0 : message.match(/^\uE0BB([-\w\s\d':가-힣]+)\uE03C?$/)) == null ? void 0 : _a[1]) || null;
  };
  var useItemQueryFilter = () => useLogFilter(itemQuery);
  var eq = (a3, b3) => a3.toLowerCase() === b3.toLowerCase();
  var workerState = (line, user) => {
    if (user && line[0] === "03" && eq(line[2], user.id) && line[3] === user.name)
      return isWorker(parseInt(line[4] || "0", 16));
    return null;
  };
  var useWorkerState = (def = true) => {
    const [flop, setFlop] = l2(def);
    const worker = useLogFilter(workerState);
    y2(() => {
      if (worker != null && flop !== worker)
        setFlop(worker);
    }, [worker]);
    return flop;
  };
  var me = (line, user) => user && line.includes(user.id) ? line.join(" | ") : null;
  var useMeFilter = () => useLogFilter(me);

  // src/list.tsx
  var List = () => {
    const [history, modifyHistory] = useHistory();
    const openPopup = usePopup();
    const itemName = useItemQueryFilter();
    const tarto = useConfig("tartoPopup")[0];
    y2(() => {
      if (itemName == null)
        return;
      const newone = history.filter((value) => value !== itemName);
      newone.unshift(itemName);
      modifyHistory(newone);
      if (tarto)
        openPopup(tartoUrl(itemName));
    }, [itemName]);
    return /* @__PURE__ */ v("ul", {
      class: "item-list"
    }, history.map((name) => /* @__PURE__ */ v(Item, {
      key: name,
      name
    })));
  };

  // src/provider.tsx
  var injectProviders = (...providers) => ({ children }) => providers.reduceRight((children2, Provider2) => /* @__PURE__ */ v(Provider2, {
    children: children2
  }), /* @__PURE__ */ v(d, null, children));
  var Provider = /* @__PURE__ */ injectProviders(ConfigProvider, MessageProvider, HistoryProvider, PopupProvider);

  // src/setting.module.ss
  var section = "_section_1gw6w_3";
  var checkboxItem = "_checkbox-item_1gw6w_7";
  var checkboxText = "_checkbox-text_1gw6w_26";
  var settingInner = "_setting-inner_1gw6w_31";
  var toggleBtn = "_toggle-btn_1gw6w_34";
  var toggleText = "_toggle-text_1gw6w_64";
  var setting = "_setting_1gw6w_31";
  var setting_module_default = { section, checkboxItem, checkboxText, settingInner, toggleBtn, toggleText, setting };

  // src/setting.tsx
  var Checkbox = ({ name, children }) => {
    const [checked, setChecked] = useConfig(name);
    return /* @__PURE__ */ v("label", {
      class: setting_module_default.checkboxItem
    }, /* @__PURE__ */ v("input", {
      type: "checkbox",
      checked,
      onChange: (event) => setChecked(event.currentTarget.checked)
    }), /* @__PURE__ */ v("span", {
      class: setting_module_default.checkboxText
    }, children));
  };
  var Preferences = () => /* @__PURE__ */ v("ul", {
    class: setting_module_default.section
  }, /* @__PURE__ */ v(Checkbox, {
    name: "tartoPopup"
  }, "자동으로 타르토 열기"), /* @__PURE__ */ v(Checkbox, {
    name: "hideWarrior"
  }, "전투직 전환 시 숨기기"), /* @__PURE__ */ v(Checkbox, {
    name: "debugMode"
  }, "디버그 모드"));
  var SettingMenu = ({ children }) => {
    return /* @__PURE__ */ v("details", {
      class: setting_module_default.setting
    }, /* @__PURE__ */ v("summary", {
      class: setting_module_default.toggleBtn,
      onClick: (event) => event.currentTarget.blur()
    }, /* @__PURE__ */ v("span", {
      class: setting_module_default.toggleText
    }, "설정")), /* @__PURE__ */ v("div", {
      class: setting_module_default.settingInner
    }, children, /* @__PURE__ */ v("button", {
      onClick: () => window.location.reload()
    }, "새로고침~~~~")));
  };
  var Setting = () => /* @__PURE__ */ v(SettingMenu, null, /* @__PURE__ */ v(Preferences, null));

  // src/app.module.ss
  var app = "_app_nohzk_3";
  var dark = "_dark_nohzk_17";
  var app_module_default = { app, dark };

  // src/app.tsx
  var App = () => {
    const isWorker2 = useWorkerState();
    const hideWarrior = useConfig("hideWarrior")[0];
    const debugMode = useConfig("debugMode")[0];
    const log = useMeFilter();
    y2(() => {
      if (debugMode && log != null)
        console.log(log);
    }, [debugMode, log]);
    return /* @__PURE__ */ v("main", {
      class: `${app_module_default.app} ${app_module_default.dark}`
    }, /* @__PURE__ */ v(Setting, null), hideWarrior && !isWorker2 ? null : /* @__PURE__ */ v(List, null));
  };
  var Main = () => /* @__PURE__ */ v(Provider, null, /* @__PURE__ */ v(App, null));

  // src/index.tsx
  (false ? hydrate : S)(/* @__PURE__ */ v(Main, null), document.body);
})();
