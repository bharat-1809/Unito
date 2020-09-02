/*!
 * clipboard.js v1.7.1
 * https://zenorocha.github.io/clipboard.js
 *
 * Licensed MIT Â© Zeno Rocha
 */ !(function (t) {
    if ("object" == typeof exports && "undefined" != typeof module)
        module.exports = t();
    else if ("function" == typeof define && define.amd) define([], t);
    else {
        var e;
        (e =
            "undefined" != typeof window
                ? window
                : "undefined" != typeof global
                    ? global
                    : "undefined" != typeof self
                        ? self
                        : this),
            (e.Clipboard = t());
    }
})(function () {
    var t, e, n;
    return (function t(e, n, o) {
        function i(a, c) {
            if (!n[a]) {
                if (!e[a]) {
                    var l = "function" == typeof require && require;
                    if (!c && l) return l(a, !0);
                    if (r) return r(a, !0);
                    var s = new Error("Cannot find module '" + a + "'");
                    throw ((s.code = "MODULE_NOT_FOUND"), s);
                }
                var u = (n[a] = { exports: {} });
                e[a][0].call(
                    u.exports,
                    function (t) {
                        var n = e[a][1][t];
                        return i(n || t);
                    },
                    u,
                    u.exports,
                    t,
                    e,
                    n,
                    o
                );
            }
            return n[a].exports;
        }
        for (
            var r = "function" == typeof require && require, a = 0;
            a < o.length;
            a++
        )
            i(o[a]);
        return i;
    })(
        {
            1: [
                function (t, e, n) {
                    function o(t, e) {
                        for (; t && t.nodeType !== i;) {
                            if ("function" == typeof t.matches && t.matches(e)) return t;
                            t = t.parentNode;
                        }
                    }
                    var i = 9;
                    if ("undefined" != typeof Element && !Element.prototype.matches) {
                        var r = Element.prototype;
                        r.matches =
                            r.matchesSelector ||
                            r.mozMatchesSelector ||
                            r.msMatchesSelector ||
                            r.oMatchesSelector ||
                            r.webkitMatchesSelector;
                    }
                    e.exports = o;
                },
                {},
            ],
            2: [
                function (t, e, n) {
                    function o(t, e, n, o, r) {
                        var a = i.apply(this, arguments);
                        return (
                            t.addEventListener(n, a, r),
                            {
                                destroy: function () {
                                    t.removeEventListener(n, a, r);
                                },
                            }
                        );
                    }
                    function i(t, e, n, o) {
                        return function (n) {
                            (n.delegateTarget = r(n.target, e)),
                                n.delegateTarget && o.call(t, n);
                        };
                    }
                    var r = t("./closest");
                    e.exports = o;
                },
                { "./closest": 1 },
            ],
            3: [
                function (t, e, n) {
                    (n.node = function (t) {
                        return void 0 !== t && t instanceof HTMLElement && 1 === t.nodeType;
                    }),
                        (n.nodeList = function (t) {
                            var e = Object.prototype.toString.call(t);
                            return (
                                void 0 !== t &&
                                ("[object NodeList]" === e ||
                                    "[object HTMLCollection]" === e) &&
                                "length" in t &&
                                (0 === t.length || n.node(t[0]))
                            );
                        }),
                        (n.string = function (t) {
                            return "string" == typeof t || t instanceof String;
                        }),
                        (n.fn = function (t) {
                            return "[object Function]" === Object.prototype.toString.call(t);
                        });
                },
                {},
            ],
            4: [
                function (t, e, n) {
                    function o(t, e, n) {
                        if (!t && !e && !n) throw new Error("Missing required arguments");
                        if (!c.string(e))
                            throw new TypeError("Second argument must be a String");
                        if (!c.fn(n))
                            throw new TypeError("Third argument must be a Function");
                        if (c.node(t)) return i(t, e, n);
                        if (c.nodeList(t)) return r(t, e, n);
                        if (c.string(t)) return a(t, e, n);
                        throw new TypeError(
                            "First argument must be a String, HTMLElement, HTMLCollection, or NodeList"
                        );
                    }
                    function i(t, e, n) {
                        return (
                            t.addEventListener(e, n),
                            {
                                destroy: function () {
                                    t.removeEventListener(e, n);
                                },
                            }
                        );
                    }
                    function r(t, e, n) {
                        return (
                            Array.prototype.forEach.call(t, function (t) {
                                t.addEventListener(e, n);
                            }),
                            {
                                destroy: function () {
                                    Array.prototype.forEach.call(t, function (t) {
                                        t.removeEventListener(e, n);
                                    });
                                },
                            }
                        );
                    }
                    function a(t, e, n) {
                        return l(document.body, t, e, n);
                    }
                    var c = t("./is"),
                        l = t("delegate");
                    e.exports = o;
                },
                { "./is": 3, delegate: 2 },
            ],
            5: [
                function (t, e, n) {
                    function o(t) {
                        var e;
                        if ("SELECT" === t.nodeName) t.focus(), (e = t.value);
                        else if ("INPUT" === t.nodeName || "TEXTAREA" === t.nodeName) {
                            var n = t.hasAttribute("readonly");
                            n || t.setAttribute("readonly", ""),
                                t.select(),
                                t.setSelectionRange(0, t.value.length),
                                n || t.removeAttribute("readonly"),
                                (e = t.value);
                        } else {
                            t.hasAttribute("contenteditable") && t.focus();
                            var o = window.getSelection(),
                                i = document.createRange();
                            i.selectNodeContents(t),
                                o.removeAllRanges(),
                                o.addRange(i),
                                (e = o.toString());
                        }
                        return e;
                    }
                    e.exports = o;
                },
                {},
            ],
            6: [
                function (t, e, n) {
                    function o() { }
                    (o.prototype = {
                        on: function (t, e, n) {
                            var o = this.e || (this.e = {});
                            return (o[t] || (o[t] = [])).push({ fn: e, ctx: n }), this;
                        },
                        once: function (t, e, n) {
                            function o() {
                                i.off(t, o), e.apply(n, arguments);
                            }
                            var i = this;
                            return (o._ = e), this.on(t, o, n);
                        },
                        emit: function (t) {
                            var e = [].slice.call(arguments, 1),
                                n = ((this.e || (this.e = {}))[t] || []).slice(),
                                o = 0,
                                i = n.length;
                            for (o; o < i; o++) n[o].fn.apply(n[o].ctx, e);
                            return this;
                        },
                        off: function (t, e) {
                            var n = this.e || (this.e = {}),
                                o = n[t],
                                i = [];
                            if (o && e)
                                for (var r = 0, a = o.length; r < a; r++)
                                    o[r].fn !== e && o[r].fn._ !== e && i.push(o[r]);
                            return i.length ? (n[t] = i) : delete n[t], this;
                        },
                    }),
                        (e.exports = o);
                },
                {},
            ],
            7: [
                function (e, n, o) {
                    !(function (i, r) {
                        if ("function" == typeof t && t.amd) t(["module", "select"], r);
                        else if (void 0 !== o) r(n, e("select"));
                        else {
                            var a = { exports: {} };
                            r(a, i.select), (i.clipboardAction = a.exports);
                        }
                    })(this, function (t, e) {
                        "use strict";
                        function n(t) {
                            return t && t.__esModule ? t : { default: t };
                        }
                        function o(t, e) {
                            if (!(t instanceof e))
                                throw new TypeError("Cannot call a class as a function");
                        }
                        var i = n(e),
                            r =
                                "function" == typeof Symbol &&
                                    "symbol" == typeof Symbol.iterator
                                    ? function (t) {
                                        return typeof t;
                                    }
                                    : function (t) {
                                        return t &&
                                            "function" == typeof Symbol &&
                                            t.constructor === Symbol &&
                                            t !== Symbol.prototype
                                            ? "symbol"
                                            : typeof t;
                                    },
                            a = (function () {
                                function t(t, e) {
                                    for (var n = 0; n < e.length; n++) {
                                        var o = e[n];
                                        (o.enumerable = o.enumerable || !1),
                                            (o.configurable = !0),
                                            "value" in o && (o.writable = !0),
                                            Object.defineProperty(t, o.key, o);
                                    }
                                }
                                return function (e, n, o) {
                                    return n && t(e.prototype, n), o && t(e, o), e;
                                };
                            })(),
                            c = (function () {
                                function t(e) {
                                    o(this, t), this.resolveOptions(e), this.initSelection();
                                }
                                return (
                                    a(t, [
                                        {
                                            key: "resolveOptions",
                                            value: function t() {
                                                var e =
                                                    arguments.length > 0 && void 0 !== arguments[0]
                                                        ? arguments[0]
                                                        : {};
                                                (this.action = e.action),
                                                    (this.container = e.container),
                                                    (this.emitter = e.emitter),
                                                    (this.target = e.target),
                                                    (this.text = e.text),
                                                    (this.trigger = e.trigger),
                                                    (this.selectedText = "");
                                            },
                                        },
                                        {
                                            key: "initSelection",
                                            value: function t() {
                                                this.text
                                                    ? this.selectFake()
                                                    : this.target && this.selectTarget();
                                            },
                                        },
                                        {
                                            key: "selectFake",
                                            value: function t() {
                                                var e = this,
                                                    n =
                                                        "rtl" ==
                                                        document.documentElement.getAttribute("dir");
                                                this.removeFake(),
                                                    (this.fakeHandlerCallback = function () {
                                                        return e.removeFake();
                                                    }),
                                                    (this.fakeHandler =
                                                        this.container.addEventListener(
                                                            "click",
                                                            this.fakeHandlerCallback
                                                        ) || !0),
                                                    (this.fakeElem = document.createElement("textarea")),
                                                    (this.fakeElem.style.fontSize = "12pt"),
                                                    (this.fakeElem.style.border = "0"),
                                                    (this.fakeElem.style.padding = "0"),
                                                    (this.fakeElem.style.margin = "0"),
                                                    (this.fakeElem.style.position = "absolute"),
                                                    (this.fakeElem.style[n ? "right" : "left"] =
                                                        "-9999px");
                                                var o =
                                                    window.pageYOffset ||
                                                    document.documentElement.scrollTop;
                                                (this.fakeElem.style.top = o + "px"),
                                                    this.fakeElem.setAttribute("readonly", ""),
                                                    (this.fakeElem.value = this.text),
                                                    this.container.appendChild(this.fakeElem),
                                                    (this.selectedText = (0, i.default)(this.fakeElem)),
                                                    this.copyText();
                                            },
                                        },
                                        {
                                            key: "removeFake",
                                            value: function t() {
                                                this.fakeHandler &&
                                                    (this.container.removeEventListener(
                                                        "click",
                                                        this.fakeHandlerCallback
                                                    ),
                                                        (this.fakeHandler = null),
                                                        (this.fakeHandlerCallback = null)),
                                                    this.fakeElem &&
                                                    (this.container.removeChild(this.fakeElem),
                                                        (this.fakeElem = null));
                                            },
                                        },
                                        {
                                            key: "selectTarget",
                                            value: function t() {
                                                (this.selectedText = (0, i.default)(this.target)),
                                                    this.copyText();
                                            },
                                        },
                                        {
                                            key: "copyText",
                                            value: function t() {
                                                var e = void 0;
                                                try {
                                                    e = document.execCommand(this.action);
                                                } catch (t) {
                                                    e = !1;
                                                }
                                                this.handleResult(e);
                                            },
                                        },
                                        {
                                            key: "handleResult",
                                            value: function t(e) {
                                                this.emitter.emit(e ? "success" : "error", {
                                                    action: this.action,
                                                    text: this.selectedText,
                                                    trigger: this.trigger,
                                                    clearSelection: this.clearSelection.bind(this),
                                                });
                                            },
                                        },
                                        {
                                            key: "clearSelection",
                                            value: function t() {
                                                this.trigger && this.trigger.focus(),
                                                    window.getSelection().removeAllRanges();
                                            },
                                        },
                                        {
                                            key: "destroy",
                                            value: function t() {
                                                this.removeFake();
                                            },
                                        },
                                        {
                                            key: "action",
                                            set: function t() {
                                                var e =
                                                    arguments.length > 0 && void 0 !== arguments[0]
                                                        ? arguments[0]
                                                        : "copy";
                                                if (
                                                    ((this._action = e),
                                                        "copy" !== this._action && "cut" !== this._action)
                                                )
                                                    throw new Error(
                                                        'Invalid "action" value, use either "copy" or "cut"'
                                                    );
                                            },
                                            get: function t() {
                                                return this._action;
                                            },
                                        },
                                        {
                                            key: "target",
                                            set: function t(e) {
                                                if (void 0 !== e) {
                                                    if (
                                                        !e ||
                                                        "object" !== (void 0 === e ? "undefined" : r(e)) ||
                                                        1 !== e.nodeType
                                                    )
                                                        throw new Error(
                                                            'Invalid "target" value, use a valid Element'
                                                        );
                                                    if (
                                                        "copy" === this.action &&
                                                        e.hasAttribute("disabled")
                                                    )
                                                        throw new Error(
                                                            'Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute'
                                                        );
                                                    if (
                                                        "cut" === this.action &&
                                                        (e.hasAttribute("readonly") ||
                                                            e.hasAttribute("disabled"))
                                                    )
                                                        throw new Error(
                                                            'Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes'
                                                        );
                                                    this._target = e;
                                                }
                                            },
                                            get: function t() {
                                                return this._target;
                                            },
                                        },
                                    ]),
                                    t
                                );
                            })();
                        t.exports = c;
                    });
                },
                { select: 5 },
            ],
            8: [
                function (e, n, o) {
                    !(function (i, r) {
                        if ("function" == typeof t && t.amd)
                            t(
                                [
                                    "module",
                                    "./clipboard-action",
                                    "tiny-emitter",
                                    "good-listener",
                                ],
                                r
                            );
                        else if (void 0 !== o)
                            r(
                                n,
                                e("./clipboard-action"),
                                e("tiny-emitter"),
                                e("good-listener")
                            );
                        else {
                            var a = { exports: {} };
                            r(a, i.clipboardAction, i.tinyEmitter, i.goodListener),
                                (i.clipboard = a.exports);
                        }
                    })(this, function (t, e, n, o) {
                        "use strict";
                        function i(t) {
                            return t && t.__esModule ? t : { default: t };
                        }
                        function r(t, e) {
                            if (!(t instanceof e))
                                throw new TypeError("Cannot call a class as a function");
                        }
                        function a(t, e) {
                            if (!t)
                                throw new ReferenceError(
                                    "this hasn't been initialised - super() hasn't been called"
                                );
                            return !e || ("object" != typeof e && "function" != typeof e)
                                ? t
                                : e;
                        }
                        function c(t, e) {
                            if ("function" != typeof e && null !== e)
                                throw new TypeError(
                                    "Super expression must either be null or a function, not " +
                                    typeof e
                                );
                            (t.prototype = Object.create(e && e.prototype, {
                                constructor: {
                                    value: t,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0,
                                },
                            })),
                                e &&
                                (Object.setPrototypeOf
                                    ? Object.setPrototypeOf(t, e)
                                    : (t.__proto__ = e));
                        }
                        function l(t, e) {
                            var n = "data-clipboard-" + t;
                            if (e.hasAttribute(n)) return e.getAttribute(n);
                        }
                        var s = i(e),
                            u = i(n),
                            f = i(o),
                            d =
                                "function" == typeof Symbol &&
                                    "symbol" == typeof Symbol.iterator
                                    ? function (t) {
                                        return typeof t;
                                    }
                                    : function (t) {
                                        return t &&
                                            "function" == typeof Symbol &&
                                            t.constructor === Symbol &&
                                            t !== Symbol.prototype
                                            ? "symbol"
                                            : typeof t;
                                    },
                            h = (function () {
                                function t(t, e) {
                                    for (var n = 0; n < e.length; n++) {
                                        var o = e[n];
                                        (o.enumerable = o.enumerable || !1),
                                            (o.configurable = !0),
                                            "value" in o && (o.writable = !0),
                                            Object.defineProperty(t, o.key, o);
                                    }
                                }
                                return function (e, n, o) {
                                    return n && t(e.prototype, n), o && t(e, o), e;
                                };
                            })(),
                            p = (function (t) {
                                function e(t, n) {
                                    r(this, e);
                                    var o = a(
                                        this,
                                        (e.__proto__ || Object.getPrototypeOf(e)).call(this)
                                    );
                                    return o.resolveOptions(n), o.listenClick(t), o;
                                }
                                return (
                                    c(e, t),
                                    h(
                                        e,
                                        [
                                            {
                                                key: "resolveOptions",
                                                value: function t() {
                                                    var e =
                                                        arguments.length > 0 && void 0 !== arguments[0]
                                                            ? arguments[0]
                                                            : {};
                                                    (this.action =
                                                        "function" == typeof e.action
                                                            ? e.action
                                                            : this.defaultAction),
                                                        (this.target =
                                                            "function" == typeof e.target
                                                                ? e.target
                                                                : this.defaultTarget),
                                                        (this.text =
                                                            "function" == typeof e.text
                                                                ? e.text
                                                                : this.defaultText),
                                                        (this.container =
                                                            "object" === d(e.container)
                                                                ? e.container
                                                                : document.body);
                                                },
                                            },
                                            {
                                                key: "listenClick",
                                                value: function t(e) {
                                                    var n = this;
                                                    this.listener = (0, f.default)(e, "click", function (
                                                        t
                                                    ) {
                                                        return n.onClick(t);
                                                    });
                                                },
                                            },
                                            {
                                                key: "onClick",
                                                value: function t(e) {
                                                    var n = e.delegateTarget || e.currentTarget;
                                                    this.clipboardAction && (this.clipboardAction = null),
                                                        (this.clipboardAction = new s.default({
                                                            action: this.action(n),
                                                            target: this.target(n),
                                                            text: this.text(n),
                                                            container: this.container,
                                                            trigger: n,
                                                            emitter: this,
                                                        }));
                                                },
                                            },
                                            {
                                                key: "defaultAction",
                                                value: function t(e) {
                                                    return l("action", e);
                                                },
                                            },
                                            {
                                                key: "defaultTarget",
                                                value: function t(e) {
                                                    var n = l("target", e);
                                                    if (n) return document.querySelector(n);
                                                },
                                            },
                                            {
                                                key: "defaultText",
                                                value: function t(e) {
                                                    return l("text", e);
                                                },
                                            },
                                            {
                                                key: "destroy",
                                                value: function t() {
                                                    this.listener.destroy(),
                                                        this.clipboardAction &&
                                                        (this.clipboardAction.destroy(),
                                                            (this.clipboardAction = null));
                                                },
                                            },
                                        ],
                                        [
                                            {
                                                key: "isSupported",
                                                value: function t() {
                                                    var e =
                                                        arguments.length > 0 && void 0 !== arguments[0]
                                                            ? arguments[0]
                                                            : ["copy", "cut"],
                                                        n = "string" == typeof e ? [e] : e,
                                                        o = !!document.queryCommandSupported;
                                                    return (
                                                        n.forEach(function (t) {
                                                            o = o && !!document.queryCommandSupported(t);
                                                        }),
                                                        o
                                                    );
                                                },
                                            },
                                        ]
                                    ),
                                    e
                                );
                            })(u.default);
                        t.exports = p;
                    });
                },
                { "./clipboard-action": 7, "good-listener": 4, "tiny-emitter": 6 },
            ],
        },
        {},
        [8]
    )(8);
});
/*!device.js 0.2.7*/ (function () {
    var a, b, c, d, e, f, g, h, i, j;
    (b = window.device),
        (a = {}),
        (window.device = a),
        (d = window.document.documentElement),
        (j = window.navigator.userAgent.toLowerCase()),
        (a.ios = function () {
            return a.iphone() || a.ipod() || a.ipad();
        }),
        (a.iphone = function () {
            return !a.windows() && e("iphone");
        }),
        (a.ipod = function () {
            return e("ipod");
        }),
        (a.ipad = function () {
            return e("ipad");
        }),
        (a.android = function () {
            return !a.windows() && e("android");
        }),
        (a.androidPhone = function () {
            return a.android() && e("mobile");
        }),
        (a.androidTablet = function () {
            return a.android() && !e("mobile");
        }),
        (a.blackberry = function () {
            return e("blackberry") || e("bb10") || e("rim");
        }),
        (a.blackberryPhone = function () {
            return a.blackberry() && !e("tablet");
        }),
        (a.blackberryTablet = function () {
            return a.blackberry() && e("tablet");
        }),
        (a.windows = function () {
            return e("windows");
        }),
        (a.windowsPhone = function () {
            return a.windows() && e("phone");
        }),
        (a.windowsTablet = function () {
            return a.windows() && e("touch") && !a.windowsPhone();
        }),
        (a.fxos = function () {
            return (e("(mobile;") || e("(tablet;")) && e("; rv:");
        }),
        (a.fxosPhone = function () {
            return a.fxos() && e("mobile");
        }),
        (a.fxosTablet = function () {
            return a.fxos() && e("tablet");
        }),
        (a.meego = function () {
            return e("meego");
        }),
        (a.cordova = function () {
            return window.cordova && "file:" === location.protocol;
        }),
        (a.nodeWebkit = function () {
            return "object" == typeof window.process;
        }),
        (a.mobile = function () {
            return (
                a.androidPhone() ||
                a.iphone() ||
                a.ipod() ||
                a.windowsPhone() ||
                a.blackberryPhone() ||
                a.fxosPhone() ||
                a.meego()
            );
        }),
        (a.tablet = function () {
            return (
                a.ipad() ||
                a.androidTablet() ||
                a.blackberryTablet() ||
                a.windowsTablet() ||
                a.fxosTablet()
            );
        }),
        (a.desktop = function () {
            return !a.tablet() && !a.mobile();
        }),
        (a.television = function () {
            var a;
            for (
                television = [
                    "googletv",
                    "viera",
                    "smarttv",
                    "internet.tv",
                    "netcast",
                    "nettv",
                    "appletv",
                    "boxee",
                    "kylo",
                    "roku",
                    "dlnadoc",
                    "roku",
                    "pov_tv",
                    "hbbtv",
                    "ce-html",
                ],
                a = 0;
                a < television.length;

            ) {
                if (e(television[a])) return !0;
                a++;
            }
            return !1;
        }),
        (a.portrait = function () {
            return window.innerHeight / window.innerWidth > 1;
        }),
        (a.landscape = function () {
            return window.innerHeight / window.innerWidth < 1;
        }),
        (a.noConflict = function () {
            return (window.device = b), this;
        }),
        (e = function (a) {
            return -1 !== j.indexOf(a);
        }),
        (g = function (a) {
            var b;
            return (b = new RegExp(a, "i")), d.className.match(b);
        }),
        (c = function (a) {
            var b = null;
            g(a) ||
                ((b = d.className.replace(/^\s+|\s+$/g, "")),
                    (d.className = b + " " + a));
        }),
        (i = function (a) {
            g(a) && (d.className = d.className.replace(" " + a, ""));
        }),
        a.ios()
            ? a.ipad()
                ? c("ios ipad tablet")
                : a.iphone()
                    ? c("ios iphone mobile")
                    : a.ipod() && c("ios ipod mobile")
            : a.android()
                ? c(a.androidTablet() ? "android tablet" : "android mobile")
                : a.blackberry()
                    ? c(a.blackberryTablet() ? "blackberry tablet" : "blackberry mobile")
                    : a.windows()
                        ? c(
                            a.windowsTablet()
                                ? "windows tablet"
                                : a.windowsPhone()
                                    ? "windows mobile"
                                    : "desktop"
                        )
                        : a.fxos()
                            ? c(a.fxosTablet() ? "fxos tablet" : "fxos mobile")
                            : a.meego()
                                ? c("meego mobile")
                                : a.nodeWebkit()
                                    ? c("node-webkit")
                                    : a.television()
                                        ? c("television")
                                        : a.desktop() && c("desktop"),
        a.cordova() && c("cordova"),
        (f = function () {
            a.landscape()
                ? (i("portrait"), c("landscape"))
                : (i("landscape"), c("portrait"));
        }),
        (h = Object.prototype.hasOwnProperty.call(window, "onorientationchange")
            ? "orientationchange"
            : "resize"),
        window.addEventListener
            ? window.addEventListener(h, f, !1)
            : window.attachEvent
                ? window.attachEvent(h, f)
                : (window[h] = f),
        f(),
        "function" == typeof define && "object" == typeof define.amd && define.amd
            ? define(function () {
                return a;
            })
            : "undefined" != typeof module && module.exports
                ? (module.exports = a)
                : (window.device = a);
}.call(this));
!(function (e, t) {
    "object" == typeof exports && "undefined" != typeof module
        ? t(exports)
        : "function" == typeof define && define.amd
            ? define(["exports"], t)
            : t((e.flatpickr = {}));
})(this, function (e) {
    "use strict";
    function t(e, t, n) {
        void 0 === n && (n = !1);
        var a;
        return function () {
            var i = this,
                o = arguments;
            null !== a && clearTimeout(a),
                (a = window.setTimeout(function () {
                    (a = null), n || e.apply(i, o);
                }, t)),
                n && !a && e.apply(i, o);
        };
    }
    function n(e, t, n) {
        return (
            void 0 === n && (n = !0),
            !1 !== n
                ? new Date(e.getTime()).setHours(0, 0, 0, 0) -
                new Date(t.getTime()).setHours(0, 0, 0, 0)
                : e.getTime() - t.getTime()
        );
    }
    function a(e, t, n) {
        if (!0 === n) return e.classList.add(t);
        e.classList.remove(t);
    }
    function i(e, t, n) {
        var a = window.document.createElement(e);
        return (
            (t = t || ""),
            (n = n || ""),
            (a.className = t),
            void 0 !== n && (a.textContent = n),
            a
        );
    }
    function o(e, t) {
        var n = i("div", "numInputWrapper"),
            a = i("input", "numInput " + e),
            o = i("span", "arrowUp"),
            r = i("span", "arrowDown");
        if (((a.type = "text"), (a.pattern = "\\d*"), void 0 !== t))
            for (var l in t) a.setAttribute(l, t[l]);
        return n.appendChild(a), n.appendChild(o), n.appendChild(r), n;
    }
    function r(e, r) {
        function l(e) {
            return e.bind(re);
        }
        function f(e) {
            re.config.noCalendar &&
                0 === re.selectedDates.length &&
                (re.setDate(
                    void 0 !== re.config.minDate
                        ? new Date(re.config.minDate.getTime())
                        : new Date().setHours(
                            re.config.defaultHour,
                            re.config.defaultMinute,
                            re.config.defaultSeconds,
                            0
                        ),
                    !1
                ),
                    m(),
                    ae()),
                (function (e) {
                    e.preventDefault();
                    var t = "keydown" === e.type,
                        n = e.target;
                    void 0 !== re.amPM &&
                        e.target === re.amPM &&
                        (re.amPM.textContent =
                            re.l10n.amPM[s(re.amPM.textContent === re.l10n.amPM[0])]);
                    var a = parseFloat(n.getAttribute("data-min")),
                        i = parseFloat(n.getAttribute("data-max")),
                        o = parseFloat(n.getAttribute("data-step")),
                        r = parseInt(n.value, 10),
                        l =
                            e.delta ||
                            (t
                                ? 38 === e.which
                                    ? 1
                                    : -1
                                : Math.max(-1, Math.min(1, e.wheelDelta || -e.deltaY)) || 0),
                        c = r + o * l;
                    if (void 0 !== n.value && 2 === n.value.length) {
                        var u = n === re.hourElement,
                            f = n === re.minuteElement;
                        c < a
                            ? ((c = i + c + s(!u) + (s(u) && s(!re.amPM))),
                                f && Y(void 0, -1, re.hourElement))
                            : c > i &&
                            ((c = n === re.hourElement ? c - i - s(!re.amPM) : a),
                                f && Y(void 0, 1, re.hourElement)),
                            re.amPM &&
                            u &&
                            (1 === o ? c + r === 23 : Math.abs(c - r) > o) &&
                            (re.amPM.textContent =
                                re.l10n.amPM[s(re.amPM.textContent === re.l10n.amPM[0])]),
                            (n.value = d(c));
                    }
                })(e),
                0 !== re.selectedDates.length &&
                ("input" !== e.type
                    ? (m(), ae())
                    : setTimeout(function () {
                        m(), ae();
                    }, M));
        }
        function m() {
            if (void 0 !== re.hourElement && void 0 !== re.minuteElement) {
                var e = (parseInt(re.hourElement.value.slice(-2), 10) || 0) % 24,
                    t = (parseInt(re.minuteElement.value, 10) || 0) % 60,
                    a =
                        void 0 !== re.secondElement
                            ? (parseInt(re.secondElement.value, 10) || 0) % 60
                            : 0;
                void 0 !== re.amPM &&
                    ((i = e),
                        (o = re.amPM.textContent),
                        (e = (i % 12) + 12 * s(o === re.l10n.amPM[1])));
                var i,
                    o,
                    r =
                        void 0 !== re.config.minTime ||
                        (re.config.minDate &&
                            re.minDateHasTime &&
                            re.latestSelectedDateObj &&
                            0 === n(re.latestSelectedDateObj, re.config.minDate, !0));
                if (
                    void 0 !== re.config.maxTime ||
                    (re.config.maxDate &&
                        re.maxDateHasTime &&
                        re.latestSelectedDateObj &&
                        0 === n(re.latestSelectedDateObj, re.config.maxDate, !0))
                ) {
                    var l =
                        void 0 !== re.config.maxTime
                            ? re.config.maxTime
                            : re.config.maxDate;
                    (e = Math.min(e, l.getHours())) === l.getHours() &&
                        (t = Math.min(t, l.getMinutes()));
                }
                if (r) {
                    var c =
                        void 0 !== re.config.minTime
                            ? re.config.minTime
                            : re.config.minDate;
                    (e = Math.max(e, c.getHours())) === c.getHours() &&
                        (t = Math.max(t, c.getMinutes()));
                }
                h(e, t, a);
            }
        }
        function p(e) {
            var t = e || re.latestSelectedDateObj;
            t && h(t.getHours(), t.getMinutes(), t.getSeconds());
        }
        function h(e, t, n) {
            void 0 !== re.latestSelectedDateObj &&
                re.latestSelectedDateObj.setHours(e % 24, t, n || 0, 0),
                re.hourElement &&
                re.minuteElement &&
                !re.isMobile &&
                ((re.hourElement.value = d(
                    re.config.time_24hr ? e : ((12 + e) % 12) + 12 * s(e % 12 == 0)
                )),
                    (re.minuteElement.value = d(t)),
                    void 0 !== re.amPM &&
                    (re.amPM.textContent = re.l10n.amPM[s(e >= 12)]),
                    void 0 !== re.secondElement && (re.secondElement.value = d(n)));
        }
        function w(e) {
            var t = parseInt(e.target.value) + (e.delta || 0);
            (4 !== t.toString().length && "Enter" !== e.key) ||
                (re.currentYearElement.blur(), /[^\d]/.test(t.toString()) || W(t));
        }
        function x(e, t, n, a) {
            return t instanceof Array
                ? t.forEach(function (t) {
                    return x(e, t, n, a);
                })
                : e instanceof Array
                    ? e.forEach(function (e) {
                        return x(e, t, n, a);
                    })
                    : (e.addEventListener(t, n, a),
                        void re._handlers.push({ element: e, event: t, handler: n }));
        }
        function E(e) {
            return function (t) {
                1 === t.which && e(t);
            };
        }
        function T() {
            X("onChange");
        }
        function k() {
            re._animationLoop.forEach(function (e) {
                return e();
            }),
                (re._animationLoop = []);
        }
        function N(e) {
            if (re.daysContainer && re.daysContainer.childNodes.length > 1)
                switch (e.animationName) {
                    case "fpSlideLeft":
                        re.daysContainer.lastChild &&
                            re.daysContainer.lastChild.classList.remove("slideLeftNew"),
                            re.daysContainer.removeChild(re.daysContainer.firstChild),
                            (re.days = re.daysContainer.firstChild),
                            k();
                        break;
                    case "fpSlideRight":
                        re.daysContainer.firstChild &&
                            re.daysContainer.firstChild.classList.remove("slideRightNew"),
                            re.daysContainer.removeChild(re.daysContainer.lastChild),
                            (re.days = re.daysContainer.firstChild),
                            k();
                }
        }
        function S(e) {
            switch (e.animationName) {
                case "fpSlideLeftNew":
                case "fpSlideRightNew":
                    re.navigationCurrentMonth.classList.remove("slideLeftNew"),
                        re.navigationCurrentMonth.classList.remove("slideRightNew");
                    for (
                        var t = re.navigationCurrentMonth;
                        t.nextSibling && /curr/.test(t.nextSibling.className);

                    )
                        re.monthNav.removeChild(t.nextSibling);
                    for (
                        ;
                        t.previousSibling && /curr/.test(t.previousSibling.className);

                    )
                        re.monthNav.removeChild(t.previousSibling);
                    re.oldCurMonth = void 0;
            }
        }
        function I(e) {
            var t =
                void 0 !== e
                    ? re.parseDate(e)
                    : re.latestSelectedDateObj ||
                    (re.config.minDate && re.config.minDate > re.now
                        ? re.config.minDate
                        : re.config.maxDate && re.config.maxDate < re.now
                            ? re.config.maxDate
                            : re.now);
            try {
                void 0 !== t &&
                    ((re.currentYear = t.getFullYear()),
                        (re.currentMonth = t.getMonth()));
            } catch (e) {
                (e.message = "Invalid date supplied: " + t), re.config.errorHandler(e);
            }
            re.redraw();
        }
        function _(e) {
            ~e.target.className.indexOf("arrow") &&
                Y(e, e.target.classList.contains("arrowUp") ? 1 : -1);
        }
        function Y(e, t, n) {
            var a = e && e.target,
                i = n || (a && a.parentNode && a.parentNode.firstChild),
                o = ee("increment");
            (o.delta = t), i && i.dispatchEvent(o);
        }
        function A(e, t, o, r) {
            var l = B(t, !0),
                c = i("span", "flatpickr-day " + e, t.getDate().toString());
            (c.dateObj = t),
                (c.$i = r),
                c.setAttribute(
                    "aria-label",
                    re.formatDate(t, re.config.ariaDateFormat)
                ),
                0 === n(t, re.now) &&
                ((re.todayDateElem = c), c.classList.add("today")),
                l
                    ? ((c.tabIndex = -1),
                        te(t) &&
                        (c.classList.add("selected"),
                            (re.selectedDateElem = c),
                            "range" === re.config.mode &&
                            (a(
                                c,
                                "startRange",
                                re.selectedDates[0] && 0 === n(t, re.selectedDates[0])
                            ),
                                a(
                                    c,
                                    "endRange",
                                    re.selectedDates[1] && 0 === n(t, re.selectedDates[1])
                                ))))
                    : (c.classList.add("disabled"),
                        re.selectedDates[0] &&
                            re.minRangeDate &&
                            t > re.minRangeDate &&
                            t < re.selectedDates[0]
                            ? (re.minRangeDate = t)
                            : re.selectedDates[0] &&
                            re.maxRangeDate &&
                            t < re.maxRangeDate &&
                            t > re.selectedDates[0] &&
                            (re.maxRangeDate = t)),
                "range" === re.config.mode &&
                ((d = t),
                    !("range" !== re.config.mode || re.selectedDates.length < 2) &&
                    n(d, re.selectedDates[0]) >= 0 &&
                    n(d, re.selectedDates[1]) <= 0 &&
                    !te(t) &&
                    c.classList.add("inRange"),
                    1 === re.selectedDates.length &&
                    void 0 !== re.minRangeDate &&
                    void 0 !== re.maxRangeDate &&
                    (t < re.minRangeDate || t > re.maxRangeDate) &&
                    c.classList.add("notAllowed"));
            var d;
            return (
                re.weekNumbers &&
                "prevMonthDay" !== e &&
                o % 7 == 1 &&
                re.weekNumbers.insertAdjacentHTML(
                    "beforeend",
                    "<span class='flatpickr-day'>" + re.config.getWeek(t) + "</span>"
                ),
                X("onDayCreate", c),
                c
            );
        }
        function O(e, t) {
            var n = e + t || 0,
                a =
                    void 0 !== e
                        ? re.days.childNodes[n]
                        : re.selectedDateElem || re.todayDateElem || re.days.childNodes[0],
                i = function () {
                    (a = a || re.days.childNodes[n]).focus(),
                        "range" === re.config.mode && K(a);
                };
            if (void 0 === a && 0 !== t)
                return (
                    t > 0
                        ? (re.changeMonth(1, !0, void 0, !0), (n %= 42))
                        : t < 0 && (re.changeMonth(-1, !0, void 0, !0), (n += 42)),
                    P(i)
                );
            i();
        }
        function P(e) {
            !0 === re.config.animate ? re._animationLoop.push(e) : e();
        }
        function F(e) {
            if (void 0 !== re.daysContainer) {
                var t =
                    (new Date(re.currentYear, re.currentMonth, 1).getDay() -
                        re.l10n.firstDayOfWeek +
                        7) %
                    7,
                    n = "range" === re.config.mode,
                    a = re.utils.getDaysInMonth((re.currentMonth - 1 + 12) % 12),
                    o = re.utils.getDaysInMonth(),
                    r = window.document.createDocumentFragment(),
                    l = a + 1 - t,
                    c = 0;
                for (
                    re.weekNumbers &&
                    re.weekNumbers.firstChild &&
                    (re.weekNumbers.textContent = ""),
                    n &&
                    ((re.minRangeDate = new Date(
                        re.currentYear,
                        re.currentMonth - 1,
                        l
                    )),
                        (re.maxRangeDate = new Date(
                            re.currentYear,
                            re.currentMonth + 1,
                            (42 - t) % o
                        )));
                    l <= a;
                    l++, c++
                )
                    r.appendChild(
                        A(
                            "prevMonthDay",
                            new Date(re.currentYear, re.currentMonth - 1, l),
                            l,
                            c
                        )
                    );
                for (l = 1; l <= o; l++, c++)
                    r.appendChild(
                        A("", new Date(re.currentYear, re.currentMonth, l), l, c)
                    );
                for (var d = o + 1; d <= 42 - t; d++, c++)
                    r.appendChild(
                        A(
                            "nextMonthDay",
                            new Date(re.currentYear, re.currentMonth + 1, d % o),
                            d,
                            c
                        )
                    );
                n && 1 === re.selectedDates.length && r.childNodes[0]
                    ? ((re._hidePrevMonthArrow =
                        re._hidePrevMonthArrow ||
                        (!!re.minRangeDate && re.minRangeDate > r.childNodes[0].dateObj)),
                        (re._hideNextMonthArrow =
                            re._hideNextMonthArrow ||
                            (!!re.maxRangeDate &&
                                re.maxRangeDate <
                                new Date(re.currentYear, re.currentMonth + 1, 1))))
                    : ne();
                var s = i("div", "dayContainer");
                if ((s.appendChild(r), re.config.animate && void 0 !== e))
                    for (; re.daysContainer.childNodes.length > 1;)
                        re.daysContainer.removeChild(re.daysContainer.firstChild);
                else
                    !(function (e) {
                        for (; e.firstChild;) e.removeChild(e.firstChild);
                    })(re.daysContainer);
                e && e >= 0
                    ? re.daysContainer.appendChild(s)
                    : re.daysContainer.insertBefore(s, re.daysContainer.firstChild),
                    (re.days = re.daysContainer.childNodes[0]);
            }
        }
        function j() {
            re.weekdayContainer ||
                (re.weekdayContainer = i("div", "flatpickr-weekdays"));
            var e = re.l10n.firstDayOfWeek,
                t = re.l10n.weekdays.shorthand.slice();
            return (
                e > 0 &&
                e < t.length &&
                (t = t.splice(e, t.length).concat(t.splice(0, e))),
                (re.weekdayContainer.innerHTML =
                    "\n    <span class=flatpickr-weekday>\n      " +
                    t.join("</span><span class=flatpickr-weekday>") +
                    "\n    </span>\n    "),
                re.weekdayContainer
            );
        }
        function L(e, t, n, a) {
            void 0 === t && (t = !0),
                void 0 === n && (n = re.config.animate),
                void 0 === a && (a = !1);
            var i = t ? e : e - re.currentMonth;
            if (
                !(
                    (i < 0 && re._hidePrevMonthArrow) ||
                    (i > 0 && re._hideNextMonthArrow)
                )
            ) {
                if (
                    ((re.currentMonth += i),
                        (re.currentMonth < 0 || re.currentMonth > 11) &&
                        ((re.currentYear += re.currentMonth > 11 ? 1 : -1),
                            (re.currentMonth = (re.currentMonth + 12) % 12),
                            X("onYearChange")),
                        F(n ? i : void 0),
                        !n)
                )
                    return X("onMonthChange"), ne();
                var o = re.navigationCurrentMonth;
                if (i < 0)
                    for (; o.nextSibling && /curr/.test(o.nextSibling.className);)
                        re.monthNav.removeChild(o.nextSibling);
                else if (i > 0)
                    for (
                        ;
                        o.previousSibling && /curr/.test(o.previousSibling.className);

                    )
                        re.monthNav.removeChild(o.previousSibling);
                (re.oldCurMonth = re.navigationCurrentMonth),
                    (re.navigationCurrentMonth = re.monthNav.insertBefore(
                        re.oldCurMonth.cloneNode(!0),
                        i > 0 ? re.oldCurMonth.nextSibling : re.oldCurMonth
                    ));
                var r = re.daysContainer;
                if (
                    (r.firstChild &&
                        r.lastChild &&
                        (i > 0
                            ? (r.firstChild.classList.add("slideLeft"),
                                r.lastChild.classList.add("slideLeftNew"),
                                re.oldCurMonth.classList.add("slideLeft"),
                                re.navigationCurrentMonth.classList.add("slideLeftNew"))
                            : i < 0 &&
                            (r.firstChild.classList.add("slideRightNew"),
                                r.lastChild.classList.add("slideRight"),
                                re.oldCurMonth.classList.add("slideRight"),
                                re.navigationCurrentMonth.classList.add("slideRightNew"))),
                        (re.currentMonthElement = re.navigationCurrentMonth.firstChild),
                        (re.currentYearElement =
                            re.navigationCurrentMonth.lastChild.childNodes[0]),
                        ne(),
                        re.oldCurMonth.firstChild &&
                        (re.oldCurMonth.firstChild.textContent = C(
                            re.currentMonth - i,
                            re.config.shorthandCurrentMonth,
                            re.l10n
                        )),
                        P(function () {
                            return X("onMonthChange");
                        }),
                        a && document.activeElement && document.activeElement.$i)
                ) {
                    var l = document.activeElement.$i;
                    P(function () {
                        O(l, 0);
                    });
                }
            }
        }
        function H(e) {
            return (
                !(!re.config.appendTo || !re.config.appendTo.contains(e)) ||
                re.calendarContainer.contains(e)
            );
        }
        function R(e) {
            if (re.isOpen && !re.config.inline) {
                var t = H(e.target),
                    n =
                        e.target === re.input ||
                        e.target === re.altInput ||
                        re.element.contains(e.target) ||
                        (e.path &&
                            e.path.indexOf &&
                            (~e.path.indexOf(re.input) || ~e.path.indexOf(re.altInput))),
                    a =
                        "blur" === e.type
                            ? n && e.relatedTarget && !H(e.relatedTarget)
                            : !n && !t,
                    i = !re.config.ignoredFocusElements.some(function (t) {
                        return t.contains(e.target);
                    });
                a &&
                    i &&
                    (re.close(),
                        "range" === re.config.mode &&
                        1 === re.selectedDates.length &&
                        (re.clear(!1), re.redraw()));
            }
        }
        function W(e) {
            if (
                !(
                    !e ||
                    (re.currentYearElement.getAttribute("data-min") &&
                        e < parseInt(re.currentYearElement.getAttribute("data-min"))) ||
                    (re.currentYearElement.getAttribute("data-max") &&
                        e > parseInt(re.currentYearElement.getAttribute("data-max")))
                )
            ) {
                var t = e,
                    n = re.currentYear !== t;
                (re.currentYear = t || re.currentYear),
                    re.config.maxDate &&
                        re.currentYear === re.config.maxDate.getFullYear()
                        ? (re.currentMonth = Math.min(
                            re.config.maxDate.getMonth(),
                            re.currentMonth
                        ))
                        : re.config.minDate &&
                        re.currentYear === re.config.minDate.getFullYear() &&
                        (re.currentMonth = Math.max(
                            re.config.minDate.getMonth(),
                            re.currentMonth
                        )),
                    n && (re.redraw(), X("onYearChange"));
            }
        }
        function B(e, t) {
            void 0 === t && (t = !0);
            var a = re.parseDate(e, void 0, t);
            if (
                (re.config.minDate &&
                    a &&
                    n(a, re.config.minDate, void 0 !== t ? t : !re.minDateHasTime) < 0) ||
                (re.config.maxDate &&
                    a &&
                    n(a, re.config.maxDate, void 0 !== t ? t : !re.maxDateHasTime) > 0)
            )
                return !1;
            if (!re.config.enable.length && !re.config.disable.length) return !0;
            if (void 0 === a) return !1;
            for (
                var i = re.config.enable.length > 0,
                o = i ? re.config.enable : re.config.disable,
                r = 0,
                l = void 0;
                r < o.length;
                r++
            ) {
                if ("function" == typeof (l = o[r]) && l(a)) return i;
                if (l instanceof Date && void 0 !== a && l.getTime() === a.getTime())
                    return i;
                if ("string" == typeof l && void 0 !== a) {
                    var c = re.parseDate(l, void 0, !0);
                    return c && c.getTime() === a.getTime() ? i : !i;
                }
                if (
                    "object" == typeof l &&
                    void 0 !== a &&
                    l.from &&
                    l.to &&
                    a.getTime() >= l.from.getTime() &&
                    a.getTime() <= l.to.getTime()
                )
                    return i;
            }
            return !i;
        }
        function J(e) {
            var t = e.target === re._input,
                n = H(e.target),
                a = re.config.allowInput,
                i = re.isOpen && (!a || !t),
                o = re.config.inline && t && !a;
            if (13 === e.keyCode && t) {
                if (a)
                    return (
                        re.setDate(
                            re._input.value,
                            !0,
                            e.target === re.altInput
                                ? re.config.altFormat
                                : re.config.dateFormat
                        ),
                        e.target.blur()
                    );
                re.open();
            } else if (n || i || o) {
                var r = !!re.timeContainer && re.timeContainer.contains(e.target);
                switch (e.keyCode) {
                    case 13:
                        r ? ae() : V(e);
                        break;
                    case 27:
                        e.preventDefault(), re.close();
                        break;
                    case 8:
                    case 46:
                        t && !re.config.allowInput && re.clear();
                        break;
                    case 37:
                    case 39:
                        if (r) re.hourElement && re.hourElement.focus();
                        else if ((e.preventDefault(), re.daysContainer)) {
                            var l = 39 === e.keyCode ? 1 : -1;
                            e.ctrlKey ? L(l, !0, void 0, !0) : O(e.target.$i, l);
                        }
                        break;
                    case 38:
                    case 40:
                        e.preventDefault();
                        var c = 40 === e.keyCode ? 1 : -1;
                        re.daysContainer && void 0 !== e.target.$i
                            ? e.ctrlKey
                                ? (W(re.currentYear - c), O(e.target.$i, 0))
                                : r || O(e.target.$i, 7 * c)
                            : re.config.enableTime &&
                            (!r && re.hourElement && re.hourElement.focus(),
                                f(e),
                                re._debouncedChange());
                        break;
                    case 9:
                        e.target === re.hourElement
                            ? (e.preventDefault(), re.minuteElement.select())
                            : e.target === re.minuteElement && (re.secondElement || re.amPM)
                                ? (e.preventDefault(),
                                    void 0 !== re.secondElement
                                        ? re.secondElement.focus()
                                        : void 0 !== re.amPM && re.amPM.focus())
                                : e.target === re.secondElement &&
                                re.amPM &&
                                (e.preventDefault(), re.amPM.focus());
                }
                switch (e.key) {
                    case re.l10n.amPM[0].charAt(0):
                        void 0 !== re.amPM &&
                            e.target === re.amPM &&
                            ((re.amPM.textContent = re.l10n.amPM[0]), m(), ae());
                        break;
                    case re.l10n.amPM[1].charAt(0):
                        void 0 !== re.amPM &&
                            e.target === re.amPM &&
                            ((re.amPM.textContent = re.l10n.amPM[1]), m(), ae());
                }
                X("onKeyDown", e);
            }
        }
        function K(e) {
            if (
                1 === re.selectedDates.length &&
                e.classList.contains("flatpickr-day") &&
                !e.classList.contains("disabled") &&
                void 0 !== re.minRangeDate &&
                void 0 !== re.maxRangeDate
            ) {
                for (
                    var t = e.dateObj,
                    n = re.parseDate(re.selectedDates[0], void 0, !0),
                    a = Math.min(t.getTime(), re.selectedDates[0].getTime()),
                    i = Math.max(t.getTime(), re.selectedDates[0].getTime()),
                    o = !1,
                    r = a;
                    r < i;
                    r += b.DAY
                )
                    if (!B(new Date(r))) {
                        o = !0;
                        break;
                    }
                for (
                    var l = 0, c = re.days.childNodes[l].dateObj;
                    l < 42;
                    l++, c = re.days.childNodes[l] && re.days.childNodes[l].dateObj
                )
                    !(function (r, l) {
                        var c = l.getTime(),
                            d =
                                c < re.minRangeDate.getTime() || c > re.maxRangeDate.getTime(),
                            s = re.days.childNodes[r];
                        if (d)
                            return (
                                s.classList.add("notAllowed"),
                                ["inRange", "startRange", "endRange"].forEach(function (e) {
                                    s.classList.remove(e);
                                }),
                                "continue"
                            );
                        if (o && !d) return "continue";
                        ["startRange", "inRange", "endRange", "notAllowed"].forEach(
                            function (e) {
                                s.classList.remove(e);
                            }
                        );
                        var u = Math.max(re.minRangeDate.getTime(), a),
                            f = Math.min(re.maxRangeDate.getTime(), i);
                        e.classList.add(
                            t < re.selectedDates[0] ? "startRange" : "endRange"
                        ),
                            n < t && c === n.getTime()
                                ? s.classList.add("startRange")
                                : n > t && c === n.getTime() && s.classList.add("endRange"),
                            c >= u && c <= f && s.classList.add("inRange");
                    })(l, c);
            }
        }
        function $() {
            !re.isOpen || re.config.static || re.config.inline || z();
        }
        function U(e) {
            return function (t) {
                var n = (re.config["_" + e + "Date"] = re.parseDate(
                    t,
                    re.config.dateFormat
                )),
                    a = re.config["_" + ("min" === e ? "max" : "min") + "Date"];
                void 0 !== n &&
                    (re["min" === e ? "minDateHasTime" : "maxDateHasTime"] =
                        n.getHours() > 0 || n.getMinutes() > 0 || n.getSeconds() > 0),
                    re.selectedDates &&
                    ((re.selectedDates = re.selectedDates.filter(function (e) {
                        return B(e);
                    })),
                        re.selectedDates.length || "min" !== e || p(n),
                        ae()),
                    re.daysContainer &&
                    (G(),
                        void 0 !== n
                            ? (re.currentYearElement[e] = n.getFullYear().toString())
                            : re.currentYearElement.removeAttribute(e),
                        (re.currentYearElement.disabled =
                            !!a && void 0 !== n && a.getFullYear() === n.getFullYear()));
            };
        }
        function q() {
            "object" != typeof re.config.locale &&
                void 0 === y.l10ns[re.config.locale] &&
                re.config.errorHandler(
                    new Error("flatpickr: invalid locale " + re.config.locale)
                ),
                (re.l10n = c(
                    {},
                    y.l10ns.default,
                    "object" == typeof re.config.locale
                        ? re.config.locale
                        : "default" !== re.config.locale
                            ? y.l10ns[re.config.locale]
                            : void 0
                )),
                (g.K =
                    "(" +
                    re.l10n.amPM[0] +
                    "|" +
                    re.l10n.amPM[1] +
                    "|" +
                    re.l10n.amPM[0].toLowerCase() +
                    "|" +
                    re.l10n.amPM[1].toLowerCase() +
                    ")"),
                (re.formatDate = v(re));
        }
        function z(e) {
            if (void 0 !== re.calendarContainer) {
                X("onPreCalendarPosition");
                var t = e || re._positionElement,
                    n = Array.prototype.reduce.call(
                        re.calendarContainer.children,
                        function (e, t) {
                            return e + t.offsetHeight;
                        },
                        0
                    ),
                    i = re.calendarContainer.offsetWidth,
                    o = re.config.position,
                    r = t.getBoundingClientRect(),
                    l = window.innerHeight - r.bottom,
                    c = "above" === o || ("below" !== o && l < n && r.top > n),
                    d = window.pageYOffset + r.top + (c ? -n - 2 : t.offsetHeight + 2);
                if (
                    (a(re.calendarContainer, "arrowTop", !c),
                        a(re.calendarContainer, "arrowBottom", c),
                        !re.config.inline)
                ) {
                    var s = window.pageXOffset + r.left,
                        u = window.document.body.offsetWidth - r.right,
                        f = s + i > window.document.body.offsetWidth;
                    a(re.calendarContainer, "rightMost", f),
                        re.config.static ||
                        ((re.calendarContainer.style.top = d + "px"),
                            f
                                ? ((re.calendarContainer.style.left = "auto"),
                                    (re.calendarContainer.style.right = u + "px"))
                                : ((re.calendarContainer.style.left = s + "px"),
                                    (re.calendarContainer.style.right = "auto")));
                }
            }
        }
        function G() {
            re.config.noCalendar || re.isMobile || (j(), ne(), F());
        }
        function V(e) {
            e.preventDefault(), e.stopPropagation();
            var t = (function e(t, n) {
                return n(t) ? t : t.parentNode ? e(t.parentNode, n) : void 0;
            })(e.target, function (e) {
                return (
                    e.classList &&
                    e.classList.contains("flatpickr-day") &&
                    !e.classList.contains("disabled") &&
                    !e.classList.contains("notAllowed")
                );
            });
            if (void 0 !== t) {
                var a = t,
                    i = (re.latestSelectedDateObj = new Date(a.dateObj.getTime())),
                    o = i.getMonth() !== re.currentMonth && "range" !== re.config.mode;
                if (((re.selectedDateElem = a), "single" === re.config.mode))
                    re.selectedDates = [i];
                else if ("multiple" === re.config.mode) {
                    var r = te(i);
                    r
                        ? re.selectedDates.splice(parseInt(r), 1)
                        : re.selectedDates.push(i);
                } else
                    "range" === re.config.mode &&
                        (2 === re.selectedDates.length && re.clear(),
                            re.selectedDates.push(i),
                            0 !== n(i, re.selectedDates[0], !0) &&
                            re.selectedDates.sort(function (e, t) {
                                return e.getTime() - t.getTime();
                            }));
                if ((m(), o)) {
                    var l = re.currentYear !== i.getFullYear();
                    (re.currentYear = i.getFullYear()),
                        (re.currentMonth = i.getMonth()),
                        l && X("onYearChange"),
                        X("onMonthChange");
                }
                if (
                    (F(),
                        re.config.minDate &&
                        re.minDateHasTime &&
                        re.config.enableTime &&
                        0 === n(i, re.config.minDate) &&
                        p(re.config.minDate),
                        ae(),
                        re.config.enableTime &&
                        setTimeout(function () {
                            return (re.showTimeInput = !0);
                        }, 50),
                        "range" === re.config.mode &&
                        (1 === re.selectedDates.length
                            ? (K(a),
                                (re._hidePrevMonthArrow =
                                    re._hidePrevMonthArrow ||
                                    (void 0 !== re.minRangeDate &&
                                        re.minRangeDate > re.days.childNodes[0].dateObj)),
                                (re._hideNextMonthArrow =
                                    re._hideNextMonthArrow ||
                                    (void 0 !== re.maxRangeDate &&
                                        re.maxRangeDate <
                                        new Date(re.currentYear, re.currentMonth + 1, 1))))
                            : ne()),
                        o
                            ? P(function () {
                                return re.selectedDateElem && re.selectedDateElem.focus();
                            })
                            : O(a.$i, 0),
                        void 0 !== re.hourElement &&
                        setTimeout(function () {
                            return void 0 !== re.hourElement && re.hourElement.select();
                        }, 451),
                        re.config.closeOnSelect)
                ) {
                    var c = "single" === re.config.mode && !re.config.enableTime,
                        d =
                            "range" === re.config.mode &&
                            2 === re.selectedDates.length &&
                            !re.config.enableTime;
                    (c || d) &&
                        (re._input.focus(),
                            -1 === window.navigator.userAgent.indexOf("MSIE")
                                ? re.close()
                                : setTimeout(re.close, 0));
                }
                T();
            }
        }
        function Z(e, t) {
            var n = [];
            if (e instanceof Array)
                n = e.map(function (e) {
                    return re.parseDate(e, t);
                });
            else if (e instanceof Date || "number" == typeof e)
                n = [re.parseDate(e, t)];
            else if ("string" == typeof e)
                switch (re.config.mode) {
                    case "single":
                        n = [re.parseDate(e, t)];
                        break;
                    case "multiple":
                        n = e.split(re.config.conjunction).map(function (e) {
                            return re.parseDate(e, t);
                        });
                        break;
                    case "range":
                        n = e.split(re.l10n.rangeSeparator).map(function (e) {
                            return re.parseDate(e, t);
                        });
                }
            else
                re.config.errorHandler(
                    new Error("Invalid date supplied: " + JSON.stringify(e))
                );
            (re.selectedDates = n.filter(function (e) {
                return e instanceof Date && B(e, !1);
            })),
                re.selectedDates.sort(function (e, t) {
                    return e.getTime() - t.getTime();
                });
        }
        function Q(e) {
            return e
                .map(function (e) {
                    return "string" == typeof e ||
                        "number" == typeof e ||
                        e instanceof Date
                        ? re.parseDate(e, void 0, !0)
                        : e && "object" == typeof e && e.from && e.to
                            ? {
                                from: re.parseDate(e.from, void 0),
                                to: re.parseDate(e.to, void 0),
                            }
                            : e;
                })
                .filter(function (e) {
                    return e;
                });
        }
        function X(e, t) {
            var n = re.config[e];
            if (void 0 !== n && n.length > 0)
                for (var a = 0; n[a] && a < n.length; a++)
                    n[a](re.selectedDates, re.input.value, re, t);
            "onChange" === e &&
                (re.input.dispatchEvent(ee("change")),
                    re.input.dispatchEvent(ee("input")));
        }
        function ee(e) {
            var t = document.createEvent("Event");
            return t.initEvent(e, !0, !0), t;
        }
        function te(e) {
            for (var t = 0; t < re.selectedDates.length; t++)
                if (0 === n(re.selectedDates[t], e)) return "" + t;
            return !1;
        }
        function ne() {
            re.config.noCalendar ||
                re.isMobile ||
                !re.monthNav ||
                ((re.currentMonthElement.textContent =
                    C(re.currentMonth, re.config.shorthandCurrentMonth, re.l10n) + " "),
                    (re.currentYearElement.value = re.currentYear.toString()),
                    (re._hidePrevMonthArrow =
                        void 0 !== re.config.minDate &&
                        (re.currentYear === re.config.minDate.getFullYear()
                            ? re.currentMonth <= re.config.minDate.getMonth()
                            : re.currentYear < re.config.minDate.getFullYear())),
                    (re._hideNextMonthArrow =
                        void 0 !== re.config.maxDate &&
                        (re.currentYear === re.config.maxDate.getFullYear()
                            ? re.currentMonth + 1 > re.config.maxDate.getMonth()
                            : re.currentYear > re.config.maxDate.getFullYear())));
        }
        function ae(e) {
            if ((void 0 === e && (e = !0), !re.selectedDates.length))
                return re.clear(e);
            void 0 !== re.mobileInput &&
                re.mobileFormatStr &&
                (re.mobileInput.value =
                    void 0 !== re.latestSelectedDateObj
                        ? re.formatDate(re.latestSelectedDateObj, re.mobileFormatStr)
                        : "");
            var t =
                "range" !== re.config.mode
                    ? re.config.conjunction
                    : re.l10n.rangeSeparator;
            (re.input.value = re.selectedDates
                .map(function (e) {
                    return re.formatDate(e, re.config.dateFormat);
                })
                .join(t)),
                void 0 !== re.altInput &&
                (re.altInput.value = re.selectedDates
                    .map(function (e) {
                        return re.formatDate(e, re.config.altFormat);
                    })
                    .join(t)),
                !1 !== e && X("onValueUpdate");
        }
        function ie(e) {
            e.preventDefault();
            var t =
                re.currentYearElement.parentNode &&
                re.currentYearElement.parentNode.contains(e.target);
            if (e.target === re.currentMonthElement || t) {
                var n = ((a = e), (a.wheelDelta || -a.deltaY) >= 0 ? 1 : -1);
                t
                    ? (W(re.currentYear + n),
                        (e.target.value = re.currentYear.toString()))
                    : re.changeMonth(n, !0, !1);
            }
            var a;
        }
        function oe(e) {
            var t = re.prevMonthNav.contains(e.target),
                n = re.nextMonthNav.contains(e.target);
            t || n
                ? L(t ? -1 : 1)
                : e.target === re.currentYearElement
                    ? (e.preventDefault(), re.currentYearElement.select())
                    : "arrowUp" === e.target.className
                        ? re.changeYear(re.currentYear + 1)
                        : "arrowDown" === e.target.className &&
                        re.changeYear(re.currentYear - 1);
        }
        var re = {};
        (re.parseDate = D(re)),
            (re._animationLoop = []),
            (re._handlers = []),
            (re._bind = x),
            (re._setHoursFromDate = p),
            (re.changeMonth = L),
            (re.changeYear = W),
            (re.clear = function (e) {
                void 0 === e && (e = !0),
                    (re.input.value = ""),
                    re.altInput && (re.altInput.value = ""),
                    re.mobileInput && (re.mobileInput.value = ""),
                    (re.selectedDates = []),
                    (re.latestSelectedDateObj = void 0),
                    (re.showTimeInput = !1),
                    re.config.enableTime &&
                    (void 0 !== re.config.minDate
                        ? p(re.config.minDate)
                        : h(
                            re.config.defaultHour,
                            re.config.defaultMinute,
                            re.config.defaultSeconds
                        )),
                    re.redraw(),
                    e && X("onChange");
            }),
            (re.close = function () {
                (re.isOpen = !1),
                    re.isMobile ||
                    (re.calendarContainer.classList.remove("open"),
                        re._input.classList.remove("active")),
                    X("onClose");
            }),
            (re._createElement = i),
            (re.destroy = function () {
                void 0 !== re.config && X("onDestroy");
                for (var e = re._handlers.length; e--;) {
                    var t = re._handlers[e];
                    t.element.removeEventListener(t.event, t.handler);
                }
                (re._handlers = []),
                    re.mobileInput
                        ? (re.mobileInput.parentNode &&
                            re.mobileInput.parentNode.removeChild(re.mobileInput),
                            (re.mobileInput = void 0))
                        : re.calendarContainer &&
                        re.calendarContainer.parentNode &&
                        re.calendarContainer.parentNode.removeChild(re.calendarContainer),
                    re.altInput &&
                    ((re.input.type = "text"),
                        re.altInput.parentNode &&
                        re.altInput.parentNode.removeChild(re.altInput),
                        delete re.altInput),
                    re.input &&
                    ((re.input.type = re.input._type),
                        re.input.classList.remove("flatpickr-input"),
                        re.input.removeAttribute("readonly"),
                        (re.input.value = "")),
                    [
                        "_showTimeInput",
                        "latestSelectedDateObj",
                        "_hideNextMonthArrow",
                        "_hidePrevMonthArrow",
                        "__hideNextMonthArrow",
                        "__hidePrevMonthArrow",
                        "isMobile",
                        "isOpen",
                        "selectedDateElem",
                        "minDateHasTime",
                        "maxDateHasTime",
                        "days",
                        "daysContainer",
                        "_input",
                        "_positionElement",
                        "innerContainer",
                        "rContainer",
                        "monthNav",
                        "todayDateElem",
                        "calendarContainer",
                        "weekdayContainer",
                        "prevMonthNav",
                        "nextMonthNav",
                        "currentMonthElement",
                        "currentYearElement",
                        "navigationCurrentMonth",
                        "selectedDateElem",
                        "config",
                    ].forEach(function (e) {
                        try {
                            delete re[e];
                        } catch (e) { }
                    });
            }),
            (re.isEnabled = B),
            (re.jumpToDate = I),
            (re.open = function (e, t) {
                if ((void 0 === t && (t = re._input), re.isMobile))
                    return (
                        e && (e.preventDefault(), e.target && e.target.blur()),
                        setTimeout(function () {
                            void 0 !== re.mobileInput && re.mobileInput.click();
                        }, 0),
                        void X("onOpen")
                    );
                if (!re._input.disabled && !re.config.inline) {
                    var n = re.isOpen;
                    (re.isOpen = !0),
                        n ||
                        (re.calendarContainer.classList.add("open"),
                            re._input.classList.add("active"),
                            X("onOpen"),
                            z(t));
                }
            }),
            (re.redraw = G),
            (re.set = function (e, t) {
                null !== e && "object" == typeof e
                    ? Object.assign(re.config, e)
                    : ((re.config[e] = t),
                        void 0 !== le[e] &&
                        le[e].forEach(function (e) {
                            return e();
                        })),
                    re.redraw(),
                    I();
            }),
            (re.setDate = function (e, t, n) {
                if (
                    (void 0 === t && (t = !1),
                        void 0 === n && (n = re.config.dateFormat),
                        0 !== e && !e)
                )
                    return re.clear(t);
                Z(e, n),
                    (re.showTimeInput = re.selectedDates.length > 0),
                    (re.latestSelectedDateObj = re.selectedDates[0]),
                    re.redraw(),
                    I(),
                    p(),
                    ae(t),
                    t && X("onChange");
            }),
            (re.toggle = function () {
                if (re.isOpen) return re.close();
                re.open();
            });
        var le = { locale: [q] };
        return (
            (function () {
                (re.element = re.input = e),
                    (re.isOpen = !1),
                    (function () {
                        var t = [
                            "wrap",
                            "weekNumbers",
                            "allowInput",
                            "clickOpens",
                            "time_24hr",
                            "enableTime",
                            "noCalendar",
                            "altInput",
                            "shorthandCurrentMonth",
                            "inline",
                            "static",
                            "enableSeconds",
                            "disableMobile",
                        ],
                            n = [
                                "onChange",
                                "onClose",
                                "onDayCreate",
                                "onDestroy",
                                "onKeyDown",
                                "onMonthChange",
                                "onOpen",
                                "onParseConfig",
                                "onReady",
                                "onValueUpdate",
                                "onYearChange",
                                "onPreCalendarPosition",
                            ];
                        re.config = c({}, y.defaultConfig);
                        var a = c({}, r, JSON.parse(JSON.stringify(e.dataset || {}))),
                            i = {};
                        (re.config.parseDate = a.parseDate),
                            (re.config.formatDate = a.formatDate),
                            Object.defineProperty(re.config, "enable", {
                                get: function () {
                                    return re.config._enable || [];
                                },
                                set: function (e) {
                                    re.config._enable = Q(e);
                                },
                            }),
                            Object.defineProperty(re.config, "disable", {
                                get: function () {
                                    return re.config._disable || [];
                                },
                                set: function (e) {
                                    re.config._disable = Q(e);
                                },
                            }),
                            !a.dateFormat &&
                            a.enableTime &&
                            (i.dateFormat = a.noCalendar
                                ? "H:i" + (a.enableSeconds ? ":S" : "")
                                : y.defaultConfig.dateFormat +
                                " H:i" +
                                (a.enableSeconds ? ":S" : "")),
                            a.altInput &&
                            a.enableTime &&
                            !a.altFormat &&
                            (i.altFormat = a.noCalendar
                                ? "h:i" + (a.enableSeconds ? ":S K" : " K")
                                : y.defaultConfig.altFormat +
                                " h:i" +
                                (a.enableSeconds ? ":S" : "") +
                                " K"),
                            Object.defineProperty(re.config, "minDate", {
                                get: function () {
                                    return re.config._minDate;
                                },
                                set: U("min"),
                            }),
                            Object.defineProperty(re.config, "maxDate", {
                                get: function () {
                                    return re.config._maxDate;
                                },
                                set: U("max"),
                            });
                        var o = function (e) {
                            return function (t) {
                                re.config["min" === e ? "_minTime" : "_maxTime"] = re.parseDate(
                                    t,
                                    "H:i"
                                );
                            };
                        };
                        Object.defineProperty(re.config, "minTime", {
                            get: function () {
                                return re.config._minTime;
                            },
                            set: o("min"),
                        }),
                            Object.defineProperty(re.config, "maxTime", {
                                get: function () {
                                    return re.config._maxTime;
                                },
                                set: o("max"),
                            }),
                            Object.assign(re.config, i, a);
                        for (var d = 0; d < t.length; d++)
                            re.config[t[d]] =
                                !0 === re.config[t[d]] || "true" === re.config[t[d]];
                        for (var d = n.length; d--;)
                            void 0 !== re.config[n[d]] &&
                                (re.config[n[d]] = u(re.config[n[d]] || []).map(l));
                        for (var d = 0; d < re.config.plugins.length; d++) {
                            var s = re.config.plugins[d](re) || {};
                            for (var f in s)
                                ~n.indexOf(f)
                                    ? (re.config[f] = u(s[f]).map(l).concat(re.config[f]))
                                    : void 0 === a[f] && (re.config[f] = s[f]);
                        }
                        (re.isMobile =
                            !re.config.disableMobile &&
                            !re.config.inline &&
                            "single" === re.config.mode &&
                            !re.config.disable.length &&
                            !re.config.enable.length &&
                            !re.config.weekNumbers &&
                            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                                navigator.userAgent
                            )),
                            X("onParseConfig");
                    })(),
                    q(),
                    (re.input = re.config.wrap ? e.querySelector("[data-input]") : e),
                    re.input
                        ? ((re.input._type = re.input.type),
                            (re.input.type = "text"),
                            re.input.classList.add("flatpickr-input"),
                            (re._input = re.input),
                            re.config.altInput &&
                            ((re.altInput = i(
                                re.input.nodeName,
                                re.input.className + " " + re.config.altInputClass
                            )),
                                (re._input = re.altInput),
                                (re.altInput.placeholder = re.input.placeholder),
                                (re.altInput.disabled = re.input.disabled),
                                (re.altInput.required = re.input.required),
                                (re.altInput.type = "text"),
                                (re.input.type = "hidden"),
                                !re.config.static &&
                                re.input.parentNode &&
                                re.input.parentNode.insertBefore(
                                    re.altInput,
                                    re.input.nextSibling
                                )),
                            re.config.allowInput ||
                            re._input.setAttribute("readonly", "readonly"),
                            (re._positionElement = re.config.positionElement || re._input))
                        : re.config.errorHandler(
                            new Error("Invalid input element specified")
                        ),
                    (function () {
                        (re.selectedDates = []), (re.now = new Date());
                        var e = re.config.defaultDate || re.input.value;
                        e && Z(e, re.config.dateFormat);
                        var t = re.selectedDates.length
                            ? re.selectedDates[0]
                            : re.config.minDate &&
                                re.config.minDate.getTime() > re.now.getTime()
                                ? re.config.minDate
                                : re.config.maxDate &&
                                    re.config.maxDate.getTime() < re.now.getTime()
                                    ? re.config.maxDate
                                    : re.now;
                        (re.currentYear = t.getFullYear()),
                            (re.currentMonth = t.getMonth()),
                            re.selectedDates.length &&
                            (re.latestSelectedDateObj = re.selectedDates[0]),
                            void 0 !== re.config.minTime &&
                            (re.config.minTime = re.parseDate(re.config.minTime, "H:i")),
                            void 0 !== re.config.maxTime &&
                            (re.config.maxTime = re.parseDate(re.config.maxTime, "H:i")),
                            (re.minDateHasTime =
                                !!re.config.minDate &&
                                (re.config.minDate.getHours() > 0 ||
                                    re.config.minDate.getMinutes() > 0 ||
                                    re.config.minDate.getSeconds() > 0)),
                            (re.maxDateHasTime =
                                !!re.config.maxDate &&
                                (re.config.maxDate.getHours() > 0 ||
                                    re.config.maxDate.getMinutes() > 0 ||
                                    re.config.maxDate.getSeconds() > 0)),
                            Object.defineProperty(re, "showTimeInput", {
                                get: function () {
                                    return re._showTimeInput;
                                },
                                set: function (e) {
                                    (re._showTimeInput = e),
                                        re.calendarContainer &&
                                        a(re.calendarContainer, "showTimeInput", e),
                                        re.isOpen && z();
                                },
                            });
                    })(),
                    (re.utils = {
                        getDaysInMonth: function (e, t) {
                            return (
                                void 0 === e && (e = re.currentMonth),
                                void 0 === t && (t = re.currentYear),
                                1 === e && ((t % 4 == 0 && t % 100 != 0) || t % 400 == 0)
                                    ? 29
                                    : re.l10n.daysInMonth[e]
                            );
                        },
                    }),
                    re.isMobile ||
                    (function () {
                        var e = window.document.createDocumentFragment();
                        if (
                            ((re.calendarContainer = i("div", "flatpickr-calendar")),
                                (re.calendarContainer.tabIndex = -1),
                                !re.config.noCalendar)
                        ) {
                            if (
                                (e.appendChild(
                                    (function () {
                                        var e = window.document.createDocumentFragment();
                                        (re.monthNav = i("div", "flatpickr-month")),
                                            (re.prevMonthNav = i("span", "flatpickr-prev-month")),
                                            (re.prevMonthNav.innerHTML = re.config.prevArrow),
                                            (re.currentMonthElement = i("span", "cur-month")),
                                            (re.currentMonthElement.title = re.l10n.scrollTitle);
                                        var t = o("cur-year", { tabindex: "-1" });
                                        return (
                                            (re.currentYearElement = t.childNodes[0]),
                                            (re.currentYearElement.title = re.l10n.scrollTitle),
                                            re.config.minDate &&
                                            re.currentYearElement.setAttribute(
                                                "data-min",
                                                re.config.minDate.getFullYear().toString()
                                            ),
                                            re.config.maxDate &&
                                            (re.currentYearElement.setAttribute(
                                                "data-max",
                                                re.config.maxDate.getFullYear().toString()
                                            ),
                                                (re.currentYearElement.disabled =
                                                    !!re.config.minDate &&
                                                    re.config.minDate.getFullYear() ===
                                                    re.config.maxDate.getFullYear())),
                                            (re.nextMonthNav = i("span", "flatpickr-next-month")),
                                            (re.nextMonthNav.innerHTML = re.config.nextArrow),
                                            (re.navigationCurrentMonth = i(
                                                "div",
                                                "flatpickr-current-month"
                                            )),
                                            re.navigationCurrentMonth.appendChild(
                                                re.currentMonthElement
                                            ),
                                            re.navigationCurrentMonth.appendChild(t),
                                            e.appendChild(re.prevMonthNav),
                                            e.appendChild(re.navigationCurrentMonth),
                                            e.appendChild(re.nextMonthNav),
                                            re.monthNav.appendChild(e),
                                            Object.defineProperty(re, "_hidePrevMonthArrow", {
                                                get: function () {
                                                    return re.__hidePrevMonthArrow;
                                                },
                                                set: function (e) {
                                                    re.__hidePrevMonthArrow !== e &&
                                                        (re.prevMonthNav.style.display = e
                                                            ? "none"
                                                            : "block"),
                                                        (re.__hidePrevMonthArrow = e);
                                                },
                                            }),
                                            Object.defineProperty(re, "_hideNextMonthArrow", {
                                                get: function () {
                                                    return re.__hideNextMonthArrow;
                                                },
                                                set: function (e) {
                                                    re.__hideNextMonthArrow !== e &&
                                                        (re.nextMonthNav.style.display = e
                                                            ? "none"
                                                            : "block"),
                                                        (re.__hideNextMonthArrow = e);
                                                },
                                            }),
                                            ne(),
                                            re.monthNav
                                        );
                                    })()
                                ),
                                    (re.innerContainer = i("div", "flatpickr-innerContainer")),
                                    re.config.weekNumbers)
                            ) {
                                var t = (function () {
                                    re.calendarContainer.classList.add("hasWeeks");
                                    var e = i("div", "flatpickr-weekwrapper");
                                    e.appendChild(
                                        i("span", "flatpickr-weekday", re.l10n.weekAbbreviation)
                                    );
                                    var t = i("div", "flatpickr-weeks");
                                    return (
                                        e.appendChild(t), { weekWrapper: e, weekNumbers: t }
                                    );
                                })(),
                                    n = t.weekWrapper,
                                    r = t.weekNumbers;
                                re.innerContainer.appendChild(n),
                                    (re.weekNumbers = r),
                                    (re.weekWrapper = n);
                            }
                            (re.rContainer = i("div", "flatpickr-rContainer")),
                                re.rContainer.appendChild(j()),
                                re.daysContainer ||
                                ((re.daysContainer = i("div", "flatpickr-days")),
                                    (re.daysContainer.tabIndex = -1)),
                                F(),
                                re.rContainer.appendChild(re.daysContainer),
                                re.innerContainer.appendChild(re.rContainer),
                                e.appendChild(re.innerContainer);
                        }
                        re.config.enableTime &&
                            e.appendChild(
                                (function () {
                                    re.calendarContainer.classList.add("hasTime"),
                                        re.config.noCalendar &&
                                        re.calendarContainer.classList.add("noCalendar"),
                                        (re.timeContainer = i("div", "flatpickr-time")),
                                        (re.timeContainer.tabIndex = -1);
                                    var e = i("span", "flatpickr-time-separator", ":"),
                                        t = o("flatpickr-hour");
                                    re.hourElement = t.childNodes[0];
                                    var n = o("flatpickr-minute");
                                    if (
                                        ((re.minuteElement = n.childNodes[0]),
                                            (re.hourElement.tabIndex = re.minuteElement.tabIndex = -1),
                                            (re.hourElement.value = d(
                                                re.latestSelectedDateObj
                                                    ? re.latestSelectedDateObj.getHours()
                                                    : re.config.time_24hr
                                                        ? re.config.defaultHour
                                                        : (function (e) {
                                                            switch (e % 24) {
                                                                case 0:
                                                                case 12:
                                                                    return 12;
                                                                default:
                                                                    return e % 12;
                                                            }
                                                        })(re.config.defaultHour)
                                            )),
                                            (re.minuteElement.value = d(
                                                re.latestSelectedDateObj
                                                    ? re.latestSelectedDateObj.getMinutes()
                                                    : re.config.defaultMinute
                                            )),
                                            re.hourElement.setAttribute(
                                                "data-step",
                                                re.config.hourIncrement.toString()
                                            ),
                                            re.minuteElement.setAttribute(
                                                "data-step",
                                                re.config.minuteIncrement.toString()
                                            ),
                                            re.hourElement.setAttribute(
                                                "data-min",
                                                re.config.time_24hr ? "0" : "1"
                                            ),
                                            re.hourElement.setAttribute(
                                                "data-max",
                                                re.config.time_24hr ? "23" : "12"
                                            ),
                                            re.minuteElement.setAttribute("data-min", "0"),
                                            re.minuteElement.setAttribute("data-max", "59"),
                                            (re.hourElement.title = re.minuteElement.title =
                                                re.l10n.scrollTitle),
                                            re.timeContainer.appendChild(t),
                                            re.timeContainer.appendChild(e),
                                            re.timeContainer.appendChild(n),
                                            re.config.time_24hr &&
                                            re.timeContainer.classList.add("time24hr"),
                                            re.config.enableSeconds)
                                    ) {
                                        re.timeContainer.classList.add("hasSeconds");
                                        var a = o("flatpickr-second");
                                        (re.secondElement = a.childNodes[0]),
                                            (re.secondElement.value = d(
                                                re.latestSelectedDateObj
                                                    ? re.latestSelectedDateObj.getSeconds()
                                                    : re.config.defaultSeconds
                                            )),
                                            re.secondElement.setAttribute(
                                                "data-step",
                                                re.minuteElement.getAttribute("data-step")
                                            ),
                                            re.secondElement.setAttribute(
                                                "data-min",
                                                re.minuteElement.getAttribute("data-min")
                                            ),
                                            re.secondElement.setAttribute(
                                                "data-max",
                                                re.minuteElement.getAttribute("data-max")
                                            ),
                                            re.timeContainer.appendChild(
                                                i("span", "flatpickr-time-separator", ":")
                                            ),
                                            re.timeContainer.appendChild(a);
                                    }
                                    return (
                                        re.config.time_24hr ||
                                        ((re.amPM = i(
                                            "span",
                                            "flatpickr-am-pm",
                                            re.l10n.amPM[
                                            s(
                                                (re.latestSelectedDateObj
                                                    ? re.hourElement.value
                                                    : re.config.defaultHour) > 11
                                            )
                                            ]
                                        )),
                                            (re.amPM.title = re.l10n.toggleTitle),
                                            (re.amPM.tabIndex = -1),
                                            re.timeContainer.appendChild(re.amPM)),
                                        re.timeContainer
                                    );
                                })()
                            ),
                            a(
                                re.calendarContainer,
                                "rangeMode",
                                "range" === re.config.mode
                            ),
                            a(re.calendarContainer, "animate", re.config.animate),
                            re.calendarContainer.appendChild(e);
                        var l =
                            void 0 !== re.config.appendTo && re.config.appendTo.nodeType;
                        if (
                            (re.config.inline || re.config.static) &&
                            (re.calendarContainer.classList.add(
                                re.config.inline ? "inline" : "static"
                            ),
                                re.config.inline &&
                                (!l && re.element.parentNode
                                    ? re.element.parentNode.insertBefore(
                                        re.calendarContainer,
                                        re._input.nextSibling
                                    )
                                    : void 0 !== re.config.appendTo &&
                                    re.config.appendTo.appendChild(re.calendarContainer)),
                                re.config.static)
                        ) {
                            var c = i("div", "flatpickr-wrapper");
                            re.element.parentNode &&
                                re.element.parentNode.insertBefore(c, re.element),
                                c.appendChild(re.element),
                                re.altInput && c.appendChild(re.altInput),
                                c.appendChild(re.calendarContainer);
                        }
                        re.config.static ||
                            re.config.inline ||
                            (void 0 !== re.config.appendTo
                                ? re.config.appendTo
                                : window.document.body
                            ).appendChild(re.calendarContainer);
                    })(),
                    (function () {
                        if (
                            (re.config.wrap &&
                                ["open", "close", "toggle", "clear"].forEach(function (e) {
                                    Array.prototype.forEach.call(
                                        re.element.querySelectorAll("[data-" + e + "]"),
                                        function (t) {
                                            return x(t, "click", re[e]);
                                        }
                                    );
                                }),
                                re.isMobile)
                        )
                            !(function () {
                                var e = re.config.enableTime
                                    ? re.config.noCalendar
                                        ? "time"
                                        : "datetime-local"
                                    : "date";
                                (re.mobileInput = i(
                                    "input",
                                    re.input.className + " flatpickr-mobile"
                                )),
                                    (re.mobileInput.step =
                                        re.input.getAttribute("step") || "any"),
                                    (re.mobileInput.tabIndex = 1),
                                    (re.mobileInput.type = e),
                                    (re.mobileInput.disabled = re.input.disabled),
                                    (re.mobileInput.placeholder = re.input.placeholder),
                                    (re.mobileFormatStr =
                                        "datetime-local" === e
                                            ? "Y-m-d\\TH:i:S"
                                            : "date" === e
                                                ? "Y-m-d"
                                                : "H:i:S"),
                                    re.selectedDates.length &&
                                    (re.mobileInput.defaultValue = re.mobileInput.value = re.formatDate(
                                        re.selectedDates[0],
                                        re.mobileFormatStr
                                    )),
                                    re.config.minDate &&
                                    (re.mobileInput.min = re.formatDate(
                                        re.config.minDate,
                                        "Y-m-d"
                                    )),
                                    re.config.maxDate &&
                                    (re.mobileInput.max = re.formatDate(
                                        re.config.maxDate,
                                        "Y-m-d"
                                    )),
                                    (re.input.type = "hidden"),
                                    void 0 !== re.altInput && (re.altInput.type = "hidden");
                                try {
                                    re.input.parentNode &&
                                        re.input.parentNode.insertBefore(
                                            re.mobileInput,
                                            re.input.nextSibling
                                        );
                                } catch (e) { }
                                x(re.mobileInput, "change", function (e) {
                                    re.setDate(e.target.value, !1, re.mobileFormatStr),
                                        X("onChange"),
                                        X("onClose");
                                });
                            })();
                        else {
                            var e = t($, 50);
                            (re._debouncedChange = t(T, M)),
                                "range" === re.config.mode &&
                                re.daysContainer &&
                                !/iPhone|iPad|iPod/i.test(navigator.userAgent) &&
                                x(re.daysContainer, "mouseover", function (e) {
                                    return K(e.target);
                                }),
                                x(window.document.body, "keydown", J),
                                re.config.static || x(re._input, "keydown", J),
                                re.config.inline || re.config.static || x(window, "resize", e),
                                void 0 !== window.ontouchstart &&
                                x(window.document.body, "touchstart", R),
                                x(window.document.body, "mousedown", E(R)),
                                x(window.document.body, "focus", R, { capture: !0 }),
                                !0 === re.config.clickOpens &&
                                (x(re._input, "focus", re.open),
                                    x(re._input, "mousedown", E(re.open))),
                                void 0 !== re.daysContainer &&
                                (x(re.monthNav, "wheel", ie),
                                    x(re.monthNav, "mousedown", E(oe)),
                                    x(re.monthNav, ["keyup", "increment"], w),
                                    x(re.daysContainer, "mousedown", E(V)),
                                    re.config.animate &&
                                    (x(
                                        re.daysContainer,
                                        ["webkitAnimationEnd", "animationend"],
                                        N
                                    ),
                                        x(re.monthNav, ["webkitAnimationEnd", "animationend"], S))),
                                void 0 !== re.timeContainer &&
                                void 0 !== re.minuteElement &&
                                void 0 !== re.hourElement &&
                                (x(re.timeContainer, ["wheel", "input", "increment"], f),
                                    x(re.timeContainer, "mousedown", E(_)),
                                    x(
                                        re.timeContainer,
                                        ["wheel", "input", "increment"],
                                        re._debouncedChange,
                                        { passive: !0 }
                                    ),
                                    x(
                                        [re.hourElement, re.minuteElement],
                                        ["focus", "click"],
                                        function (e) {
                                            return e.target.select();
                                        }
                                    ),
                                    void 0 !== re.secondElement &&
                                    x(re.secondElement, "focus", function () {
                                        return re.secondElement && re.secondElement.select();
                                    }),
                                    void 0 !== re.amPM &&
                                    x(
                                        re.amPM,
                                        "mousedown",
                                        E(function (e) {
                                            f(e), T();
                                        })
                                    ));
                        }
                    })(),
                    (re.selectedDates.length || re.config.noCalendar) &&
                    (re.config.enableTime &&
                        p(
                            re.config.noCalendar
                                ? re.latestSelectedDateObj || re.config.minDate
                                : void 0
                        ),
                        ae(!1)),
                    (re.showTimeInput =
                        re.selectedDates.length > 0 || re.config.noCalendar),
                    void 0 !== re.weekWrapper &&
                    void 0 !== re.daysContainer &&
                    (re.calendarContainer.style.width =
                        re.daysContainer.offsetWidth + re.weekWrapper.offsetWidth + "px");
                var n = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
                !re.isMobile && n && z(), X("onReady");
            })(),
            re
        );
    }
    function l(e, t) {
        for (
            var n = Array.prototype.slice.call(e), a = [], i = 0;
            i < n.length;
            i++
        ) {
            var o = n[i];
            try {
                if (null !== o.getAttribute("data-fp-omit")) continue;
                void 0 !== o._flatpickr &&
                    (o._flatpickr.destroy(), (o._flatpickr = void 0)),
                    (o._flatpickr = r(o, t || {})),
                    a.push(o._flatpickr);
            } catch (e) {
                console.error(e);
            }
        }
        return 1 === a.length ? a[0] : a;
    }
    var c =
        Object.assign ||
        function (e) {
            for (var t, n = 1, a = arguments.length; n < a; n++) {
                t = arguments[n];
                for (var i in t)
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            }
            return e;
        },
        d = function (e) {
            return ("0" + e).slice(-2);
        },
        s = function (e) {
            return !0 === e ? 1 : 0;
        },
        u = function (e) {
            return e instanceof Array ? e : [e];
        },
        f = function () { },
        m = {
            D: f,
            F: function (e, t, n) {
                e.setMonth(n.months.longhand.indexOf(t));
            },
            G: function (e, t) {
                e.setHours(parseFloat(t));
            },
            H: function (e, t) {
                e.setHours(parseFloat(t));
            },
            J: function (e, t) {
                e.setDate(parseFloat(t));
            },
            K: function (e, t, n) {
                e.setHours(
                    (e.getHours() % 12) + 12 * s(new RegExp(n.amPM[1], "i").test(t))
                );
            },
            M: function (e, t, n) {
                e.setMonth(n.months.shorthand.indexOf(t));
            },
            S: function (e, t) {
                e.setSeconds(parseFloat(t));
            },
            U: function (e, t) {
                return new Date(1e3 * parseFloat(t));
            },
            W: function (e, t) {
                var n = parseInt(t);
                return new Date(e.getFullYear(), 0, 2 + 7 * (n - 1), 0, 0, 0, 0);
            },
            Y: function (e, t) {
                e.setFullYear(parseFloat(t));
            },
            Z: function (e, t) {
                return new Date(t);
            },
            d: function (e, t) {
                e.setDate(parseFloat(t));
            },
            h: function (e, t) {
                e.setHours(parseFloat(t));
            },
            i: function (e, t) {
                e.setMinutes(parseFloat(t));
            },
            j: function (e, t) {
                e.setDate(parseFloat(t));
            },
            l: f,
            m: function (e, t) {
                e.setMonth(parseFloat(t) - 1);
            },
            n: function (e, t) {
                e.setMonth(parseFloat(t) - 1);
            },
            s: function (e, t) {
                e.setSeconds(parseFloat(t));
            },
            w: f,
            y: function (e, t) {
                e.setFullYear(2e3 + parseFloat(t));
            },
        },
        g = {
            D: "(\\w+)",
            F: "(\\w+)",
            G: "(\\d\\d|\\d)",
            H: "(\\d\\d|\\d)",
            J: "(\\d\\d|\\d)\\w+",
            K: "",
            M: "(\\w+)",
            S: "(\\d\\d|\\d)",
            U: "(.+)",
            W: "(\\d\\d|\\d)",
            Y: "(\\d{4})",
            Z: "(.+)",
            d: "(\\d\\d|\\d)",
            h: "(\\d\\d|\\d)",
            i: "(\\d\\d|\\d)",
            j: "(\\d\\d|\\d)",
            l: "(\\w+)",
            m: "(\\d\\d|\\d)",
            n: "(\\d\\d|\\d)",
            s: "(\\d\\d|\\d)",
            w: "(\\d\\d|\\d)",
            y: "(\\d{2})",
        },
        p = {
            Z: function (e) {
                return e.toISOString();
            },
            D: function (e, t, n) {
                return t.weekdays.shorthand[p.w(e, t, n)];
            },
            F: function (e, t, n) {
                return C(p.n(e, t, n) - 1, !1, t);
            },
            G: function (e, t, n) {
                return d(p.h(e, t, n));
            },
            H: function (e) {
                return d(e.getHours());
            },
            J: function (e, t) {
                return void 0 !== t.ordinal
                    ? e.getDate() + t.ordinal(e.getDate())
                    : e.getDate();
            },
            K: function (e, t) {
                return t.amPM[s(e.getHours() > 11)];
            },
            M: function (e, t) {
                return C(e.getMonth(), !0, t);
            },
            S: function (e) {
                return d(e.getSeconds());
            },
            U: function (e) {
                return e.getTime() / 1e3;
            },
            W: function (e, t, n) {
                return n.getWeek(e);
            },
            Y: function (e) {
                return e.getFullYear();
            },
            d: function (e) {
                return d(e.getDate());
            },
            h: function (e) {
                return e.getHours() % 12 ? e.getHours() % 12 : 12;
            },
            i: function (e) {
                return d(e.getMinutes());
            },
            j: function (e) {
                return e.getDate();
            },
            l: function (e, t) {
                return t.weekdays.longhand[e.getDay()];
            },
            m: function (e) {
                return d(e.getMonth() + 1);
            },
            n: function (e) {
                return e.getMonth() + 1;
            },
            s: function (e) {
                return e.getSeconds();
            },
            w: function (e) {
                return e.getDay();
            },
            y: function (e) {
                return String(e.getFullYear()).substring(2);
            },
        },
        h = {
            weekdays: {
                shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                longhand: [
                    "Sunday",
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                ],
            },
            months: {
                shorthand: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                ],
                longhand: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December",
                ],
            },
            daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
            firstDayOfWeek: 0,
            ordinal: function (e) {
                var t = e % 100;
                if (t > 3 && t < 21) return "th";
                switch (t % 10) {
                    case 1:
                        return "st";
                    case 2:
                        return "nd";
                    case 3:
                        return "rd";
                    default:
                        return "th";
                }
            },
            rangeSeparator: " to ",
            weekAbbreviation: "Wk",
            scrollTitle: "Scroll to increment",
            toggleTitle: "Click to toggle",
            amPM: ["AM", "PM"],
        },
        v = function (e) {
            var t = e.config,
                n = void 0 === t ? w : t,
                a = e.l10n,
                i = void 0 === a ? h : a;
            return function (e, t) {
                return void 0 !== n.formatDate
                    ? n.formatDate(e, t)
                    : t
                        .split("")
                        .map(function (t, a, o) {
                            return p[t] && "\\" !== o[a - 1]
                                ? p[t](e, i, n)
                                : "\\" !== t
                                    ? t
                                    : "";
                        })
                        .join("");
            };
        },
        D = function (e) {
            var t = e.config,
                n = void 0 === t ? w : t,
                a = e.l10n,
                i = void 0 === a ? h : a;
            return function (e, t, a) {
                if (0 === e || e) {
                    var o,
                        r = e;
                    if (e instanceof Date) o = new Date(e.getTime());
                    else if ("string" != typeof e && void 0 !== e.toFixed)
                        o = new Date(e);
                    else if ("string" == typeof e) {
                        var l = t || (n || w).dateFormat,
                            c = String(e).trim();
                        if ("today" === c) (o = new Date()), (a = !0);
                        else if (/Z$/.test(c) || /GMT$/.test(c)) o = new Date(e);
                        else if (n && n.parseDate) o = n.parseDate(e, l);
                        else {
                            o =
                                n && n.noCalendar
                                    ? new Date(new Date().setHours(0, 0, 0, 0))
                                    : new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0);
                            for (
                                var d = void 0, s = [], u = 0, f = 0, p = "";
                                u < l.length;
                                u++
                            ) {
                                var h = l[u],
                                    v = "\\" === h,
                                    D = "\\" === l[u - 1] || v;
                                if (g[h] && !D) {
                                    p += g[h];
                                    var C = new RegExp(p).exec(e);
                                    C &&
                                        (d = !0) &&
                                        s["Y" !== h ? "push" : "unshift"]({
                                            fn: m[h],
                                            val: C[++f],
                                        });
                                } else v || (p += ".");
                                s.forEach(function (e) {
                                    var t = e.fn,
                                        n = e.val;
                                    return (o = t(o, n, i) || o);
                                });
                            }
                            o = d ? o : void 0;
                        }
                    }
                    if (o instanceof Date) return !0 === a && o.setHours(0, 0, 0, 0), o;
                    n.errorHandler(new Error("Invalid date provided: " + r));
                }
            };
        },
        C = function (e, t, n) {
            return n.months[t ? "shorthand" : "longhand"][e];
        },
        b = { DAY: 864e5 },
        w = {
            _disable: [],
            _enable: [],
            allowInput: !1,
            altFormat: "F j, Y",
            altInput: !1,
            altInputClass: "form-control input",
            animate:
                "object" == typeof window &&
                -1 === window.navigator.userAgent.indexOf("MSIE"),
            ariaDateFormat: "F j, Y",
            clickOpens: !0,
            closeOnSelect: !0,
            conjunction: ", ",
            dateFormat: "Y-m-d",
            defaultHour: 12,
            defaultMinute: 0,
            defaultSeconds: 0,
            disable: [],
            disableMobile: !1,
            enable: [],
            enableSeconds: !1,
            enableTime: !1,
            errorHandler: console.warn,
            getWeek: function (e) {
                var t = new Date(e.getTime());
                t.setHours(0, 0, 0, 0),
                    t.setDate(t.getDate() + 3 - ((t.getDay() + 6) % 7));
                var n = new Date(t.getFullYear(), 0, 4);
                return (
                    1 +
                    Math.round(
                        ((t.getTime() - n.getTime()) / 864e5 - 3 + ((n.getDay() + 6) % 7)) /
                        7
                    )
                );
            },
            hourIncrement: 1,
            ignoredFocusElements: [],
            inline: !1,
            locale: "default",
            minuteIncrement: 5,
            mode: "single",
            nextArrow:
                "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
            noCalendar: !1,
            onChange: [],
            onClose: [],
            onDayCreate: [],
            onDestroy: [],
            onKeyDown: [],
            onMonthChange: [],
            onOpen: [],
            onParseConfig: [],
            onReady: [],
            onValueUpdate: [],
            onYearChange: [],
            onPreCalendarPosition: [],
            plugins: [],
            position: "auto",
            positionElement: void 0,
            prevArrow:
                "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
            shorthandCurrentMonth: !1,
            static: !1,
            time_24hr: !1,
            weekNumbers: !1,
            wrap: !1,
        };
    "function" != typeof Object.assign &&
        (Object.assign = function (e) {
            for (var t = [], n = 1; n < arguments.length; n++)
                t[n - 1] = arguments[n];
            if (!e) throw TypeError("Cannot convert undefined or null to object");
            for (var a = 0, i = t; a < i.length; a++)
                !(function (t) {
                    t &&
                        Object.keys(t).forEach(function (n) {
                            return (e[n] = t[n]);
                        });
                })(i[a]);
            return e;
        });
    var M = 300;
    "undefined" != typeof HTMLElement &&
        ((HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function (
            e
        ) {
            return l(this, e);
        }),
            (HTMLElement.prototype.flatpickr = function (e) {
                return l([this], e);
            }));
    var y;
    (y = function (e, t) {
        return e instanceof NodeList
            ? l(e, t)
            : l("string" == typeof e ? window.document.querySelectorAll(e) : [e], t);
    }),
        "object" == typeof window && (window.flatpickr = y),
        (y.defaultConfig = w),
        (y.l10ns = { en: c({}, h), default: c({}, h) }),
        (y.localize = function (e) {
            y.l10ns.default = c({}, y.l10ns.default, e);
        }),
        (y.setDefaults = function (e) {
            y.defaultConfig = c({}, y.defaultConfig, e);
        }),
        (y.parseDate = D({})),
        (y.formatDate = v({})),
        (y.compareDates = n),
        "undefined" != typeof jQuery &&
        (jQuery.fn.flatpickr = function (e) {
            return l(this, e);
        }),
        (Date.prototype.fp_incr = function (e) {
            return new Date(
                this.getFullYear(),
                this.getMonth(),
                this.getDate() + ("string" == typeof e ? parseInt(e, 10) : e)
            );
        });
    var x = y;
    (e.default = x), Object.defineProperty(e, "__esModule", { value: !0 });
});
/*!
 * jquery.customSelect() - v0.5.1
 * http://adam.co/lab/jquery/customselect/
 * 2014-04-19
 *
 * Copyright 2013 Adam Coulombe
 * @license http://www.opensource.org/licenses/mit-license.html MIT License
 * @license http://www.gnu.org/licenses/gpl.html GPL2 License
 */ (function (a) {
    a.fn.extend({
        customSelect: function (c) {
            if (typeof document.body.style.maxHeight === "undefined") {
                return this;
            }
            var e = { customClass: "customSelect", mapClass: true, mapStyle: true },
                c = a.extend(e, c),
                d = c.customClass,
                f = function (h, k) {
                    var g = h.find(":selected"),
                        j = k.children(":first"),
                        i = g.html() || "&nbsp;";
                    j.html(i);
                    if (g.attr("disabled")) {
                        k.addClass(b("DisabledOption"));
                    } else {
                        k.removeClass(b("DisabledOption"));
                    }
                    setTimeout(function () {
                        k.removeClass(b("Open"));
                        a(document).off("mouseup.customSelect");
                    }, 60);
                },
                b = function (g) {
                    return d + g;
                };
            return this.each(function () {
                var g = a(this),
                    i = a("<span />").addClass(b("Inner")),
                    h = a("<span />");
                g.after(h.append(i));
                h.addClass(d);
                if (c.mapClass) {
                    h.addClass(g.attr("class"));
                }
                if (c.mapStyle) {
                    h.attr("style", g.attr("style"));
                }
                g.addClass("hasCustomSelect")
                    .on("render.customSelect", function () {
                        f(g, h);
                        g.css("width", "");
                        var k =
                            parseInt(g.outerWidth(), 10) -
                            (parseInt(h.outerWidth(), 10) - parseInt(h.width(), 10));
                        h.css({ display: "inline-block" });
                        var j = h.outerHeight();
                        if (g.attr("disabled")) {
                            h.addClass(b("Disabled"));
                        } else {
                            h.removeClass(b("Disabled"));
                        }
                        i.css({ width: k, display: "inline-block" });
                        g.css({
                            "-webkit-appearance": "menulist-button",
                            width: h.outerWidth(),
                            position: "absolute",
                            opacity: 0,
                            height: j,
                            fontSize: h.css("font-size"),
                        });
                    })
                    .on("change.customSelect", function () {
                        h.addClass(b("Changed"));
                        f(g, h);
                    })
                    .on("keyup.customSelect", function (j) {
                        if (!h.hasClass(b("Open"))) {
                            g.trigger("blur.customSelect");
                            g.trigger("focus.customSelect");
                        } else {
                            if (j.which == 13 || j.which == 27) {
                                f(g, h);
                            }
                        }
                    })
                    .on("mousedown.customSelect", function () {
                        h.removeClass(b("Changed"));
                    })
                    .on("mouseup.customSelect", function (j) {
                        if (!h.hasClass(b("Open"))) {
                            if (
                                a("." + b("Open")).not(h).length > 0 &&
                                typeof InstallTrigger !== "undefined"
                            ) {
                                g.trigger("focus.customSelect");
                            } else {
                                h.addClass(b("Open"));
                                j.stopPropagation();
                                a(document).one("mouseup.customSelect", function (k) {
                                    if (
                                        k.target != g.get(0) &&
                                        a.inArray(k.target, g.find("*").get()) < 0
                                    ) {
                                        g.trigger("blur.customSelect");
                                    } else {
                                        f(g, h);
                                    }
                                });
                            }
                        }
                    })
                    .on("focus.customSelect", function () {
                        h.removeClass(b("Changed")).addClass(b("Focus"));
                    })
                    .on("blur.customSelect", function () {
                        h.removeClass(b("Focus") + " " + b("Open"));
                    })
                    .on("mouseenter.customSelect", function () {
                        h.addClass(b("Hover"));
                    })
                    .on("mouseleave.customSelect", function () {
                        h.removeClass(b("Hover"));
                    })
                    .trigger("render.customSelect");
            });
        },
    });
})(jQuery);
(jQuery.easing.jswing = jQuery.easing.swing),
    jQuery.extend(jQuery.easing, {
        def: "easeOutQuad",
        swing: function (n, e, t, u, a) {
            return jQuery.easing[jQuery.easing.def](n, e, t, u, a);
        },
        easeInQuad: function (n, e, t, u, a) {
            return u * (e /= a) * e + t;
        },
        easeOutQuad: function (n, e, t, u, a) {
            return -u * (e /= a) * (e - 2) + t;
        },
        easeInOutQuad: function (n, e, t, u, a) {
            return (e /= a / 2) < 1
                ? (u / 2) * e * e + t
                : (-u / 2) * (--e * (e - 2) - 1) + t;
        },
        easeInCubic: function (n, e, t, u, a) {
            return u * (e /= a) * e * e + t;
        },
        easeOutCubic: function (n, e, t, u, a) {
            return u * ((e = e / a - 1) * e * e + 1) + t;
        },
        easeInOutCubic: function (n, e, t, u, a) {
            return (e /= a / 2) < 1
                ? (u / 2) * e * e * e + t
                : (u / 2) * ((e -= 2) * e * e + 2) + t;
        },
        easeInQuart: function (n, e, t, u, a) {
            return u * (e /= a) * e * e * e + t;
        },
        easeOutQuart: function (n, e, t, u, a) {
            return -u * ((e = e / a - 1) * e * e * e - 1) + t;
        },
        easeInOutQuart: function (n, e, t, u, a) {
            return (e /= a / 2) < 1
                ? (u / 2) * e * e * e * e + t
                : (-u / 2) * ((e -= 2) * e * e * e - 2) + t;
        },
        easeInQuint: function (n, e, t, u, a) {
            return u * (e /= a) * e * e * e * e + t;
        },
        easeOutQuint: function (n, e, t, u, a) {
            return u * ((e = e / a - 1) * e * e * e * e + 1) + t;
        },
        easeInOutQuint: function (n, e, t, u, a) {
            return (e /= a / 2) < 1
                ? (u / 2) * e * e * e * e * e + t
                : (u / 2) * ((e -= 2) * e * e * e * e + 2) + t;
        },
        easeInSine: function (n, e, t, u, a) {
            return -u * Math.cos((e / a) * (Math.PI / 2)) + u + t;
        },
        easeOutSine: function (n, e, t, u, a) {
            return u * Math.sin((e / a) * (Math.PI / 2)) + t;
        },
        easeInOutSine: function (n, e, t, u, a) {
            return (-u / 2) * (Math.cos((Math.PI * e) / a) - 1) + t;
        },
        easeInExpo: function (n, e, t, u, a) {
            return 0 == e ? t : u * Math.pow(2, 10 * (e / a - 1)) + t;
        },
        easeOutExpo: function (n, e, t, u, a) {
            return e == a ? t + u : u * (-Math.pow(2, (-10 * e) / a) + 1) + t;
        },
        easeInOutExpo: function (n, e, t, u, a) {
            return 0 == e
                ? t
                : e == a
                    ? t + u
                    : (e /= a / 2) < 1
                        ? (u / 2) * Math.pow(2, 10 * (e - 1)) + t
                        : (u / 2) * (-Math.pow(2, -10 * --e) + 2) + t;
        },
        easeInCirc: function (n, e, t, u, a) {
            return -u * (Math.sqrt(1 - (e /= a) * e) - 1) + t;
        },
        easeOutCirc: function (n, e, t, u, a) {
            return u * Math.sqrt(1 - (e = e / a - 1) * e) + t;
        },
        easeInOutCirc: function (n, e, t, u, a) {
            return (e /= a / 2) < 1
                ? (-u / 2) * (Math.sqrt(1 - e * e) - 1) + t
                : (u / 2) * (Math.sqrt(1 - (e -= 2) * e) + 1) + t;
        },
        easeInElastic: function (n, e, t, u, a) {
            var r = 1.70158,
                i = 0,
                s = u;
            if (0 == e) return t;
            if (1 == (e /= a)) return t + u;
            if ((i || (i = 0.3 * a), s < Math.abs(u))) {
                s = u;
                var r = i / 4;
            } else var r = (i / (2 * Math.PI)) * Math.asin(u / s);
            return (
                -(
                    s *
                    Math.pow(2, 10 * (e -= 1)) *
                    Math.sin(((e * a - r) * (2 * Math.PI)) / i)
                ) + t
            );
        },
        easeOutElastic: function (n, e, t, u, a) {
            var r = 1.70158,
                i = 0,
                s = u;
            if (0 == e) return t;
            if (1 == (e /= a)) return t + u;
            if ((i || (i = 0.3 * a), s < Math.abs(u))) {
                s = u;
                var r = i / 4;
            } else var r = (i / (2 * Math.PI)) * Math.asin(u / s);
            return (
                s * Math.pow(2, -10 * e) * Math.sin(((e * a - r) * (2 * Math.PI)) / i) +
                u +
                t
            );
        },
        easeInOutElastic: function (n, e, t, u, a) {
            var r = 1.70158,
                i = 0,
                s = u;
            if (0 == e) return t;
            if (2 == (e /= a / 2)) return t + u;
            if ((i || (i = a * (0.3 * 1.5)), s < Math.abs(u))) {
                s = u;
                var r = i / 4;
            } else var r = (i / (2 * Math.PI)) * Math.asin(u / s);
            return 1 > e
                ? -0.5 *
                (s *
                    Math.pow(2, 10 * (e -= 1)) *
                    Math.sin(((e * a - r) * (2 * Math.PI)) / i)) +
                t
                : s *
                Math.pow(2, -10 * (e -= 1)) *
                Math.sin(((e * a - r) * (2 * Math.PI)) / i) *
                0.5 +
                u +
                t;
        },
        easeInBack: function (n, e, t, u, a, r) {
            return (
                void 0 == r && (r = 1.70158), u * (e /= a) * e * ((r + 1) * e - r) + t
            );
        },
        easeOutBack: function (n, e, t, u, a, r) {
            return (
                void 0 == r && (r = 1.70158),
                u * ((e = e / a - 1) * e * ((r + 1) * e + r) + 1) + t
            );
        },
        easeInOutBack: function (n, e, t, u, a, r) {
            return (
                void 0 == r && (r = 1.70158),
                (e /= a / 2) < 1
                    ? (u / 2) * (e * e * (((r *= 1.525) + 1) * e - r)) + t
                    : (u / 2) * ((e -= 2) * e * (((r *= 1.525) + 1) * e + r) + 2) + t
            );
        },
        easeInBounce: function (n, e, t, u, a) {
            return u - jQuery.easing.easeOutBounce(n, a - e, 0, u, a) + t;
        },
        easeOutBounce: function (n, e, t, u, a) {
            return (e /= a) < 1 / 2.75
                ? u * (7.5625 * e * e) + t
                : 2 / 2.75 > e
                    ? u * (7.5625 * (e -= 1.5 / 2.75) * e + 0.75) + t
                    : 2.5 / 2.75 > e
                        ? u * (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375) + t
                        : u * (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375) + t;
        },
        easeInOutBounce: function (n, e, t, u, a) {
            return a / 2 > e
                ? 0.5 * jQuery.easing.easeInBounce(n, 2 * e, 0, u, a) + t
                : 0.5 * jQuery.easing.easeOutBounce(n, 2 * e - a, 0, u, a) +
                0.5 * u +
                t;
        },
    });
(function () {
    var b, f;
    b = this.jQuery || window.jQuery;
    f = b(window);
    b.fn.stick_in_parent = function (d) {
        var A, w, J, n, B, K, p, q, k, E, t;
        null == d && (d = {});
        t = d.sticky_class;
        B = d.inner_scrolling;
        E = d.recalc_every;
        k = d.parent;
        q = d.offset_top;
        p = d.spacer;
        w = d.bottoming;
        null == q && (q = 0);
        null == k && (k = void 0);
        null == B && (B = !0);
        null == t && (t = "is_stuck");
        A = b(document);
        null == w && (w = !0);
        J = function (a, d, n, C, F, u, r, G) {
            var v, H, m, D, I, c, g, x, y, z, h, l;
            if (!a.data("sticky_kit")) {
                a.data("sticky_kit", !0);
                I = A.height();
                g = a.parent();
                null != k && (g = g.closest(k));
                if (!g.length) throw "failed to find stick parent";
                v = m = !1;
                (h = null != p ? p && a.closest(p) : b("<div />")) &&
                    h.css("position", a.css("position"));
                x = function () {
                    var c, f, e;
                    if (
                        !G &&
                        ((I = A.height()),
                            (c = parseInt(g.css("border-top-width"), 10)),
                            (f = parseInt(g.css("padding-top"), 10)),
                            (d = parseInt(g.css("padding-bottom"), 10)),
                            (n = g.offset().top + c + f),
                            (C = g.height()),
                            m &&
                            ((v = m = !1),
                                null == p && (a.insertAfter(h), h.detach()),
                                a
                                    .css({ position: "", top: "", width: "", bottom: "" })
                                    .removeClass(t),
                                (e = !0)),
                            (F = a.offset().top - (parseInt(a.css("margin-top"), 10) || 0) - q),
                            (u = a.outerHeight(!0)),
                            (r = a.css("float")),
                            h &&
                            h.css({
                                width: a.outerWidth(!0),
                                height: u,
                                display: a.css("display"),
                                "vertical-align": a.css("vertical-align"),
                                float: r,
                            }),
                            e)
                    )
                        return l();
                };
                x();
                if (u !== C)
                    return (
                        (D = void 0),
                        (c = q),
                        (z = E),
                        (l = function () {
                            var b, l, e, k;
                            if (
                                !G &&
                                ((e = !1),
                                    null != z && (--z, 0 >= z && ((z = E), x(), (e = !0))),
                                    e || A.height() === I || x(),
                                    (e = f.scrollTop()),
                                    null != D && (l = e - D),
                                    (D = e),
                                    m
                                        ? (w &&
                                            ((k = e + u + c > C + n),
                                                v &&
                                                !k &&
                                                ((v = !1),
                                                    a
                                                        .css({ position: "fixed", bottom: "", top: c })
                                                        .trigger("sticky_kit:unbottom"))),
                                            e < F &&
                                            ((m = !1),
                                                (c = q),
                                                null == p &&
                                                (("left" !== r && "right" !== r) || a.insertAfter(h),
                                                    h.detach()),
                                                (b = { position: "", width: "", top: "" }),
                                                a.css(b).removeClass(t).trigger("sticky_kit:unstick")),
                                            B &&
                                            ((b = f.height()),
                                                u + q > b &&
                                                !v &&
                                                ((c -= l),
                                                    (c = Math.max(b - u, c)),
                                                    (c = Math.min(q, c)),
                                                    m && a.css({ top: c + "px" }))))
                                        : e > F &&
                                        ((m = !0),
                                            (b = { position: "fixed", top: c }),
                                            (b.width =
                                                "border-box" === a.css("box-sizing")
                                                    ? a.outerWidth() + "px"
                                                    : a.width() + "px"),
                                            a.css(b).addClass(t),
                                            null == p &&
                                            (a.after(h),
                                                ("left" !== r && "right" !== r) || h.append(a)),
                                            a.trigger("sticky_kit:stick")),
                                    m && w && (null == k && (k = e + u + c > C + n), !v && k))
                            )
                                return (
                                    (v = !0),
                                    "static" === g.css("position") &&
                                    g.css({ position: "relative" }),
                                    a
                                        .css({ position: "absolute", bottom: d, top: "auto" })
                                        .trigger("sticky_kit:bottom")
                                );
                        }),
                        (y = function () {
                            x();
                            return l();
                        }),
                        (H = function () {
                            G = !0;
                            f.off("touchmove", l);
                            f.off("scroll", l);
                            f.off("resize", y);
                            b(document.body).off("sticky_kit:recalc", y);
                            a.off("sticky_kit:detach", H);
                            a.removeData("sticky_kit");
                            a.css({ position: "", bottom: "", top: "", width: "" });
                            g.position("position", "");
                            if (m)
                                return (
                                    null == p &&
                                    (("left" !== r && "right" !== r) || a.insertAfter(h),
                                        h.remove()),
                                    a.removeClass(t)
                                );
                        }),
                        f.on("touchmove", l),
                        f.on("scroll", l),
                        f.on("resize", y),
                        b(document.body).on("sticky_kit:recalc", y),
                        a.on("sticky_kit:detach", H),
                        setTimeout(l, 0)
                    );
            }
        };
        n = 0;
        for (K = this.length; n < K; n++) (d = this[n]), J(b(d));
        return this;
    };
}.call(this));
(function (c) {
    c.extend(c.fn, {
        validate: function (a) {
            if (this.length) {
                var b = c.data(this[0], "validator");
                if (b) return b;
                this.attr("novalidate", "novalidate");
                b = new c.validator(a, this[0]);
                c.data(this[0], "validator", b);
                if (b.settings.onsubmit) {
                    a = this.find("input, button");
                    a.filter(".cancel").click(function () {
                        b.cancelSubmit = true;
                    });
                    b.settings.submitHandler &&
                        a.filter(":submit").click(function () {
                            b.submitButton = this;
                        });
                    this.submit(function (d) {
                        function e() {
                            if (b.settings.submitHandler) {
                                if (b.submitButton)
                                    var f = c("<input type='hidden'/>")
                                        .attr("name", b.submitButton.name)
                                        .val(b.submitButton.value)
                                        .appendTo(b.currentForm);
                                b.settings.submitHandler.call(b, b.currentForm);
                                b.submitButton && f.remove();
                                return false;
                            }
                            return true;
                        }
                        b.settings.debug && d.preventDefault();
                        if (b.cancelSubmit) {
                            b.cancelSubmit = false;
                            return e();
                        }
                        if (b.form()) {
                            if (b.pendingRequest) {
                                b.formSubmitted = true;
                                return false;
                            }
                            return e();
                        } else {
                            b.focusInvalid();
                            return false;
                        }
                    });
                }
                return b;
            } else
                a &&
                    a.debug &&
                    window.console &&
                    console.warn("nothing selected, can't validate, returning nothing");
        },
        valid: function () {
            if (c(this[0]).is("form")) return this.validate().form();
            else {
                var a = true,
                    b = c(this[0].form).validate();
                this.each(function () {
                    a &= b.element(this);
                });
                return a;
            }
        },
        removeAttrs: function (a) {
            var b = {},
                d = this;
            c.each(a.split(/\s/), function (e, f) {
                b[f] = d.attr(f);
                d.removeAttr(f);
            });
            return b;
        },
        rules: function (a, b) {
            var d = this[0];
            if (a) {
                var e = c.data(d.form, "validator").settings,
                    f = e.rules,
                    g = c.validator.staticRules(d);
                switch (a) {
                    case "add":
                        c.extend(g, c.validator.normalizeRule(b));
                        f[d.name] = g;
                        if (b.messages)
                            e.messages[d.name] = c.extend(e.messages[d.name], b.messages);
                        break;
                    case "remove":
                        if (!b) {
                            delete f[d.name];
                            return g;
                        }
                        var h = {};
                        c.each(b.split(/\s/), function (j, i) {
                            h[i] = g[i];
                            delete g[i];
                        });
                        return h;
                }
            }
            d = c.validator.normalizeRules(
                c.extend(
                    {},
                    c.validator.metadataRules(d),
                    c.validator.classRules(d),
                    c.validator.attributeRules(d),
                    c.validator.staticRules(d)
                ),
                d
            );
            if (d.required) {
                e = d.required;
                delete d.required;
                d = c.extend({ required: e }, d);
            }
            return d;
        },
    });
    c.extend(c.expr[":"], {
        blank: function (a) {
            return !c.trim("" + a.value);
        },
        filled: function (a) {
            return !!c.trim("" + a.value);
        },
        unchecked: function (a) {
            return !a.checked;
        },
    });
    c.validator = function (a, b) {
        this.settings = c.extend(true, {}, c.validator.defaults, a);
        this.currentForm = b;
        this.init();
    };
    c.validator.format = function (a, b) {
        if (arguments.length == 1)
            return function () {
                var d = c.makeArray(arguments);
                d.unshift(a);
                return c.validator.format.apply(this, d);
            };
        if (arguments.length > 2 && b.constructor != Array)
            b = c.makeArray(arguments).slice(1);
        if (b.constructor != Array) b = [b];
        c.each(b, function (d, e) {
            a = a.replace(RegExp("\\{" + d + "\\}", "g"), e);
        });
        return a;
    };
    c.extend(c.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            validClass: "valid",
            errorElement: "label",
            focusInvalid: true,
            errorContainer: c([]),
            errorLabelContainer: c([]),
            onsubmit: true,
            ignore: ":hidden",
            ignoreTitle: false,
            onfocusin: function (a) {
                this.lastActive = a;
                if (this.settings.focusCleanup && !this.blockFocusCleanup) {
                    this.settings.unhighlight &&
                        this.settings.unhighlight.call(
                            this,
                            a,
                            this.settings.errorClass,
                            this.settings.validClass
                        );
                    this.addWrapper(this.errorsFor(a)).hide();
                }
            },
            onfocusout: function (a) {
                if (
                    !this.checkable(a) &&
                    (a.name in this.submitted || !this.optional(a))
                )
                    this.element(a);
            },
            onkeyup: function (a) {
                if (a.name in this.submitted || a == this.lastElement) this.element(a);
            },
            onclick: function (a) {
                if (a.name in this.submitted) this.element(a);
                else a.parentNode.name in this.submitted && this.element(a.parentNode);
            },
            highlight: function (a, b, d) {
                a.type === "radio"
                    ? this.findByName(a.name).addClass(b).removeClass(d)
                    : c(a).addClass(b).removeClass(d);
            },
            unhighlight: function (a, b, d) {
                a.type === "radio"
                    ? this.findByName(a.name).removeClass(b).addClass(d)
                    : c(a).removeClass(b).addClass(d);
            },
        },
        setDefaults: function (a) {
            c.extend(c.validator.defaults, a);
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            creditcard: "Please enter a valid credit card number.",
            equalTo: "Please enter the same value again.",
            accept: "Please enter a value with a valid extension.",
            maxlength: c.validator.format(
                "Please enter no more than {0} characters."
            ),
            minlength: c.validator.format("Please enter at least {0} characters."),
            rangelength: c.validator.format(
                "Please enter a value between {0} and {1} characters long."
            ),
            range: c.validator.format("Please enter a value between {0} and {1}."),
            max: c.validator.format(
                "Please enter a value less than or equal to {0}."
            ),
            min: c.validator.format(
                "Please enter a value greater than or equal to {0}."
            ),
        },
        autoCreateRanges: false,
        prototype: {
            init: function () {
                function a(e) {
                    var f = c.data(this[0].form, "validator"),
                        g = "on" + e.type.replace(/^validate/, "");
                    f.settings[g] && f.settings[g].call(f, this[0], e);
                }
                this.labelContainer = c(this.settings.errorLabelContainer);
                this.errorContext =
                    (this.labelContainer.length && this.labelContainer) ||
                    c(this.currentForm);
                this.containers = c(this.settings.errorContainer).add(
                    this.settings.errorLabelContainer
                );
                this.submitted = {};
                this.valueCache = {};
                this.pendingRequest = 0;
                this.pending = {};
                this.invalid = {};
                this.reset();
                var b = (this.groups = {});
                c.each(this.settings.groups, function (e, f) {
                    c.each(f.split(/\s/), function (g, h) {
                        b[h] = e;
                    });
                });
                var d = this.settings.rules;
                c.each(d, function (e, f) {
                    d[e] = c.validator.normalizeRule(f);
                });
                c(this.currentForm)
                    .validateDelegate(
                        "[type='text'], [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ",
                        "focusin focusout keyup",
                        a
                    )
                    .validateDelegate(
                        "[type='radio'], [type='checkbox'], select, option",
                        "click",
                        a
                    );
                this.settings.invalidHandler &&
                    c(this.currentForm).bind(
                        "invalid-form.validate",
                        this.settings.invalidHandler
                    );
            },
            form: function () {
                this.checkForm();
                c.extend(this.submitted, this.errorMap);
                this.invalid = c.extend({}, this.errorMap);
                this.valid() ||
                    c(this.currentForm).triggerHandler("invalid-form", [this]);
                this.showErrors();
                return this.valid();
            },
            checkForm: function () {
                this.prepareForm();
                for (var a = 0, b = (this.currentElements = this.elements()); b[a]; a++)
                    this.check(b[a]);
                return this.valid();
            },
            element: function (a) {
                this.lastElement = a = this.validationTargetFor(this.clean(a));
                this.prepareElement(a);
                this.currentElements = c(a);
                var b = this.check(a);
                if (b) delete this.invalid[a.name];
                else this.invalid[a.name] = true;
                if (!this.numberOfInvalids())
                    this.toHide = this.toHide.add(this.containers);
                this.showErrors();
                return b;
            },
            showErrors: function (a) {
                if (a) {
                    c.extend(this.errorMap, a);
                    this.errorList = [];
                    for (var b in a)
                        this.errorList.push({
                            message: a[b],
                            element: this.findByName(b)[0],
                        });
                    this.successList = c.grep(this.successList, function (d) {
                        return !(d.name in a);
                    });
                }
                this.settings.showErrors
                    ? this.settings.showErrors.call(this, this.errorMap, this.errorList)
                    : this.defaultShowErrors();
            },
            resetForm: function () {
                c.fn.resetForm && c(this.currentForm).resetForm();
                this.submitted = {};
                this.lastElement = null;
                this.prepareForm();
                this.hideErrors();
                this.elements().removeClass(this.settings.errorClass);
            },
            numberOfInvalids: function () {
                return this.objectLength(this.invalid);
            },
            objectLength: function (a) {
                var b = 0,
                    d;
                for (d in a) b++;
                return b;
            },
            hideErrors: function () {
                this.addWrapper(this.toHide).hide();
            },
            valid: function () {
                return this.size() == 0;
            },
            size: function () {
                return this.errorList.length;
            },
            focusInvalid: function () {
                if (this.settings.focusInvalid)
                    try {
                        c(
                            this.findLastActive() ||
                            (this.errorList.length && this.errorList[0].element) ||
                            []
                        )
                            .filter(":visible")
                            .focus()
                            .trigger("focusin");
                    } catch (a) { }
            },
            findLastActive: function () {
                var a = this.lastActive;
                return (
                    a &&
                    c.grep(this.errorList, function (b) {
                        return b.element.name == a.name;
                    }).length == 1 &&
                    a
                );
            },
            elements: function () {
                var a = this,
                    b = {};
                return c(this.currentForm)
                    .find("input, select, textarea")
                    .not(":submit, :reset, :image, [disabled]")
                    .not(this.settings.ignore)
                    .filter(function () {
                        !this.name &&
                            a.settings.debug &&
                            window.console &&
                            console.error("%o has no name assigned", this);
                        if (this.name in b || !a.objectLength(c(this).rules()))
                            return false;
                        return (b[this.name] = true);
                    });
            },
            clean: function (a) {
                return c(a)[0];
            },
            errors: function () {
                return c(
                    this.settings.errorElement + "." + this.settings.errorClass,
                    this.errorContext
                );
            },
            reset: function () {
                this.successList = [];
                this.errorList = [];
                this.errorMap = {};
                this.toShow = c([]);
                this.toHide = c([]);
                this.currentElements = c([]);
            },
            prepareForm: function () {
                this.reset();
                this.toHide = this.errors().add(this.containers);
            },
            prepareElement: function (a) {
                this.reset();
                this.toHide = this.errorsFor(a);
            },
            check: function (a) {
                a = this.validationTargetFor(this.clean(a));
                var b = c(a).rules(),
                    d = false,
                    e;
                for (e in b) {
                    var f = { method: e, parameters: b[e] };
                    try {
                        var g = c.validator.methods[e].call(
                            this,
                            a.value.replace(/\r/g, ""),
                            a,
                            f.parameters
                        );
                        if (g == "dependency-mismatch") d = true;
                        else {
                            d = false;
                            if (g == "pending") {
                                this.toHide = this.toHide.not(this.errorsFor(a));
                                return;
                            }
                            if (!g) {
                                this.formatAndAdd(a, f);
                                return false;
                            }
                        }
                    } catch (h) {
                        this.settings.debug &&
                            window.console &&
                            console.log(
                                "exception occured when checking element " +
                                a.id +
                                ", check the '" +
                                f.method +
                                "' method",
                                h
                            );
                        throw h;
                    }
                }
                if (!d) {
                    this.objectLength(b) && this.successList.push(a);
                    return true;
                }
            },
            customMetaMessage: function (a, b) {
                if (c.metadata) {
                    var d = this.settings.meta
                        ? c(a).metadata()[this.settings.meta]
                        : c(a).metadata();
                    return d && d.messages && d.messages[b];
                }
            },
            customMessage: function (a, b) {
                var d = this.settings.messages[a];
                return d && (d.constructor == String ? d : d[b]);
            },
            findDefined: function () {
                for (var a = 0; a < arguments.length; a++)
                    if (arguments[a] !== undefined) return arguments[a];
            },
            defaultMessage: function (a, b) {
                return this.findDefined(
                    this.customMessage(a.name, b),
                    this.customMetaMessage(a, b),
                    (!this.settings.ignoreTitle && a.title) || undefined,
                    c.validator.messages[b],
                    "<strong>Warning: No message defined for " + a.name + "</strong>"
                );
            },
            formatAndAdd: function (a, b) {
                var d = this.defaultMessage(a, b.method),
                    e = /\$?\{(\d+)\}/g;
                if (typeof d == "function") d = d.call(this, b.parameters, a);
                else if (e.test(d))
                    d = jQuery.format(d.replace(e, "{$1}"), b.parameters);
                this.errorList.push({ message: d, element: a });
                this.errorMap[a.name] = d;
                this.submitted[a.name] = d;
            },
            addWrapper: function (a) {
                if (this.settings.wrapper) a = a.add(a.parent(this.settings.wrapper));
                return a;
            },
            defaultShowErrors: function () {
                for (var a = 0; this.errorList[a]; a++) {
                    var b = this.errorList[a];
                    this.settings.highlight &&
                        this.settings.highlight.call(
                            this,
                            b.element,
                            this.settings.errorClass,
                            this.settings.validClass
                        );
                    this.showLabel(b.element, b.message);
                }
                if (this.errorList.length)
                    this.toShow = this.toShow.add(this.containers);
                if (this.settings.success)
                    for (a = 0; this.successList[a]; a++)
                        this.showLabel(this.successList[a]);
                if (this.settings.unhighlight) {
                    a = 0;
                    for (b = this.validElements(); b[a]; a++)
                        this.settings.unhighlight.call(
                            this,
                            b[a],
                            this.settings.errorClass,
                            this.settings.validClass
                        );
                }
                this.toHide = this.toHide.not(this.toShow);
                this.hideErrors();
                this.addWrapper(this.toShow).show();
            },
            validElements: function () {
                return this.currentElements.not(this.invalidElements());
            },
            invalidElements: function () {
                return c(this.errorList).map(function () {
                    return this.element;
                });
            },
            showLabel: function (a, b) {
                var d = this.errorsFor(a);
                if (d.length) {
                    d.removeClass(this.settings.validClass).addClass(
                        this.settings.errorClass
                    );
                    d.attr("generated") && d.html(b);
                } else {
                    d = c("<" + this.settings.errorElement + "/>")
                        .attr({ for: this.idOrName(a), generated: true })
                        .addClass(this.settings.errorClass)
                        .html(b || "");
                    if (this.settings.wrapper)
                        d = d
                            .hide()
                            .show()
                            .wrap("<" + this.settings.wrapper + "/>")
                            .parent();
                    this.labelContainer.append(d).length ||
                        (this.settings.errorPlacement
                            ? this.settings.errorPlacement(d, c(a))
                            : d.insertAfter(a));
                }
                if (!b && this.settings.success) {
                    d.text("");
                    typeof this.settings.success == "string"
                        ? d.addClass(this.settings.success)
                        : this.settings.success(d);
                }
                this.toShow = this.toShow.add(d);
            },
            errorsFor: function (a) {
                var b = this.idOrName(a);
                return this.errors().filter(function () {
                    return c(this).attr("for") == b;
                });
            },
            idOrName: function (a) {
                return (
                    this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name)
                );
            },
            validationTargetFor: function (a) {
                if (this.checkable(a))
                    a = this.findByName(a.name).not(this.settings.ignore)[0];
                return a;
            },
            checkable: function (a) {
                return /radio|checkbox/i.test(a.type);
            },
            findByName: function (a) {
                var b = this.currentForm;
                return c(document.getElementsByName(a)).map(function (d, e) {
                    return (e.form == b && e.name == a && e) || null;
                });
            },
            getLength: function (a, b) {
                switch (b.nodeName.toLowerCase()) {
                    case "select":
                        return c("option:selected", b).length;
                    case "input":
                        if (this.checkable(b))
                            return this.findByName(b.name).filter(":checked").length;
                }
                return a.length;
            },
            depend: function (a, b) {
                return this.dependTypes[typeof a]
                    ? this.dependTypes[typeof a](a, b)
                    : true;
            },
            dependTypes: {
                boolean: function (a) {
                    return a;
                },
                string: function (a, b) {
                    return !!c(a, b.form).length;
                },
                function: function (a, b) {
                    return a(b);
                },
            },
            optional: function (a) {
                return (
                    !c.validator.methods.required.call(this, c.trim(a.value), a) &&
                    "dependency-mismatch"
                );
            },
            startRequest: function (a) {
                if (!this.pending[a.name]) {
                    this.pendingRequest++;
                    this.pending[a.name] = true;
                }
            },
            stopRequest: function (a, b) {
                this.pendingRequest--;
                if (this.pendingRequest < 0) this.pendingRequest = 0;
                delete this.pending[a.name];
                if (
                    b &&
                    this.pendingRequest == 0 &&
                    this.formSubmitted &&
                    this.form()
                ) {
                    c(this.currentForm).submit();
                    this.formSubmitted = false;
                } else if (!b && this.pendingRequest == 0 && this.formSubmitted) {
                    c(this.currentForm).triggerHandler("invalid-form", [this]);
                    this.formSubmitted = false;
                }
            },
            previousValue: function (a) {
                return (
                    c.data(a, "previousValue") ||
                    c.data(a, "previousValue", {
                        old: null,
                        valid: true,
                        message: this.defaultMessage(a, "remote"),
                    })
                );
            },
        },
        classRuleSettings: {
            required: { required: true },
            email: { email: true },
            url: { url: true },
            date: { date: true },
            dateISO: { dateISO: true },
            dateDE: { dateDE: true },
            number: { number: true },
            numberDE: { numberDE: true },
            digits: { digits: true },
            creditcard: { creditcard: true },
        },
        addClassRules: function (a, b) {
            a.constructor == String
                ? (this.classRuleSettings[a] = b)
                : c.extend(this.classRuleSettings, a);
        },
        classRules: function (a) {
            var b = {};
            (a = c(a).attr("class")) &&
                c.each(a.split(" "), function () {
                    this in c.validator.classRuleSettings &&
                        c.extend(b, c.validator.classRuleSettings[this]);
                });
            return b;
        },
        attributeRules: function (a) {
            var b = {};
            a = c(a);
            for (var d in c.validator.methods) {
                var e;
                if (
                    (e =
                        d === "required" && typeof c.fn.prop === "function"
                            ? a.prop(d)
                            : a.attr(d))
                )
                    b[d] = e;
                else if (a[0].getAttribute("type") === d) b[d] = true;
            }
            b.maxlength &&
                /-1|2147483647|524288/.test(b.maxlength) &&
                delete b.maxlength;
            return b;
        },
        metadataRules: function (a) {
            if (!c.metadata) return {};
            var b = c.data(a.form, "validator").settings.meta;
            return b ? c(a).metadata()[b] : c(a).metadata();
        },
        staticRules: function (a) {
            var b = {},
                d = c.data(a.form, "validator");
            if (d.settings.rules)
                b = c.validator.normalizeRule(d.settings.rules[a.name]) || {};
            return b;
        },
        normalizeRules: function (a, b) {
            c.each(a, function (d, e) {
                if (e === false) delete a[d];
                else if (e.param || e.depends) {
                    var f = true;
                    switch (typeof e.depends) {
                        case "string":
                            f = !!c(e.depends, b.form).length;
                            break;
                        case "function":
                            f = e.depends.call(b, b);
                    }
                    if (f) a[d] = e.param !== undefined ? e.param : true;
                    else delete a[d];
                }
            });
            c.each(a, function (d, e) {
                a[d] = c.isFunction(e) ? e(b) : e;
            });
            c.each(["minlength", "maxlength", "min", "max"], function () {
                if (a[this]) a[this] = Number(a[this]);
            });
            c.each(["rangelength", "range"], function () {
                if (a[this]) a[this] = [Number(a[this][0]), Number(a[this][1])];
            });
            if (c.validator.autoCreateRanges) {
                if (a.min && a.max) {
                    a.range = [a.min, a.max];
                    delete a.min;
                    delete a.max;
                }
                if (a.minlength && a.maxlength) {
                    a.rangelength = [a.minlength, a.maxlength];
                    delete a.minlength;
                    delete a.maxlength;
                }
            }
            a.messages && delete a.messages;
            return a;
        },
        normalizeRule: function (a) {
            if (typeof a == "string") {
                var b = {};
                c.each(a.split(/\s/), function () {
                    b[this] = true;
                });
                a = b;
            }
            return a;
        },
        addMethod: function (a, b, d) {
            c.validator.methods[a] = b;
            c.validator.messages[a] = d != undefined ? d : c.validator.messages[a];
            b.length < 3 &&
                c.validator.addClassRules(a, c.validator.normalizeRule(a));
        },
        methods: {
            required: function (a, b, d) {
                if (!this.depend(d, b)) return "dependency-mismatch";
                switch (b.nodeName.toLowerCase()) {
                    case "select":
                        return (a = c(b).val()) && a.length > 0;
                    case "input":
                        if (this.checkable(b)) return this.getLength(a, b) > 0;
                    default:
                        return c.trim(a).length > 0;
                }
            },
            remote: function (a, b, d) {
                if (this.optional(b)) return "dependency-mismatch";
                var e = this.previousValue(b);
                this.settings.messages[b.name] || (this.settings.messages[b.name] = {});
                e.originalMessage = this.settings.messages[b.name].remote;
                this.settings.messages[b.name].remote = e.message;
                d = (typeof d == "string" && { url: d }) || d;
                if (this.pending[b.name]) return "pending";
                if (e.old === a) return e.valid;
                e.old = a;
                var f = this;
                this.startRequest(b);
                var g = {};
                g[b.name] = a;
                c.ajax(
                    c.extend(
                        true,
                        {
                            url: d,
                            mode: "abort",
                            port: "validate" + b.name,
                            dataType: "json",
                            data: g,
                            success: function (h) {
                                f.settings.messages[b.name].remote = e.originalMessage;
                                var j = h === true;
                                if (j) {
                                    var i = f.formSubmitted;
                                    f.prepareElement(b);
                                    f.formSubmitted = i;
                                    f.successList.push(b);
                                    f.showErrors();
                                } else {
                                    i = {};
                                    h = h || f.defaultMessage(b, "remote");
                                    i[b.name] = e.message = c.isFunction(h) ? h(a) : h;
                                    f.showErrors(i);
                                }
                                e.valid = j;
                                f.stopRequest(b, j);
                            },
                        },
                        d
                    )
                );
                return "pending";
            },
            minlength: function (a, b, d) {
                return this.optional(b) || this.getLength(c.trim(a), b) >= d;
            },
            maxlength: function (a, b, d) {
                return this.optional(b) || this.getLength(c.trim(a), b) <= d;
            },
            rangelength: function (a, b, d) {
                a = this.getLength(c.trim(a), b);
                return this.optional(b) || (a >= d[0] && a <= d[1]);
            },
            min: function (a, b, d) {
                return this.optional(b) || a >= d;
            },
            max: function (a, b, d) {
                return this.optional(b) || a <= d;
            },
            range: function (a, b, d) {
                return this.optional(b) || (a >= d[0] && a <= d[1]);
            },
            email: function (a, b) {
                return (
                    this.optional(b) ||
                    /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(
                        a
                    )
                );
            },
            url: function (a, b) {
                return (
                    this.optional(b) ||
                    /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(
                        a
                    )
                );
            },
            date: function (a, b) {
                return this.optional(b) || !/Invalid|NaN/.test(new Date(a));
            },
            dateISO: function (a, b) {
                return this.optional(b) || /^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(a);
            },
            number: function (a, b) {
                return (
                    this.optional(b) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(a)
                );
            },
            digits: function (a, b) {
                return this.optional(b) || /^\d+$/.test(a);
            },
            creditcard: function (a, b) {
                if (this.optional(b)) return "dependency-mismatch";
                if (/[^0-9 -]+/.test(a)) return false;
                var d = 0,
                    e = 0,
                    f = false;
                a = a.replace(/\D/g, "");
                for (var g = a.length - 1; g >= 0; g--) {
                    e = a.charAt(g);
                    e = parseInt(e, 10);
                    if (f) if ((e *= 2) > 9) e -= 9;
                    d += e;
                    f = !f;
                }
                return d % 10 == 0;
            },
            accept: function (a, b, d) {
                d = typeof d == "string" ? d.replace(/,/g, "|") : "png|jpe?g|gif";
                return this.optional(b) || a.match(RegExp(".(" + d + ")$", "i"));
            },
            equalTo: function (a, b, d) {
                d = c(d)
                    .unbind(".validate-equalTo")
                    .bind("blur.validate-equalTo", function () {
                        c(b).valid();
                    });
                return a == d.val();
            },
        },
    });
    c.format = c.validator.format;
})(jQuery);
(function (c) {
    var a = {};
    if (c.ajaxPrefilter)
        c.ajaxPrefilter(function (d, e, f) {
            e = d.port;
            if (d.mode == "abort") {
                a[e] && a[e].abort();
                a[e] = f;
            }
        });
    else {
        var b = c.ajax;
        c.ajax = function (d) {
            var e = ("port" in d ? d : c.ajaxSettings).port;
            if (("mode" in d ? d : c.ajaxSettings).mode == "abort") {
                a[e] && a[e].abort();
                return (a[e] = b.apply(this, arguments));
            }
            return b.apply(this, arguments);
        };
    }
})(jQuery);
(function (c) {
    !jQuery.event.special.focusin &&
        !jQuery.event.special.focusout &&
        document.addEventListener &&
        c.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
            function d(e) {
                e = c.event.fix(e);
                e.type = b;
                return c.event.handle.call(this, e);
            }
            c.event.special[b] = {
                setup: function () {
                    this.addEventListener(a, d, true);
                },
                teardown: function () {
                    this.removeEventListener(a, d, true);
                },
                handler: function (e) {
                    arguments[0] = c.event.fix(e);
                    arguments[0].type = b;
                    return c.event.handle.apply(this, arguments);
                },
            };
        });
    c.extend(c.fn, {
        validateDelegate: function (a, b, d) {
            return this.bind(b, function (e) {
                var f = c(e.target);
                if (f.is(a)) return d.apply(f, arguments);
            });
        },
    });
})(jQuery);
/*!
Waypoints - 3.1.1
Copyright Â© 2011-2015 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blog/master/licenses.txt
*/ !(function () {
    "use strict";
    function t(o) {
        if (!o) throw new Error("No options passed to Waypoint constructor");
        if (!o.element)
            throw new Error("No element option passed to Waypoint constructor");
        if (!o.handler)
            throw new Error("No handler option passed to Waypoint constructor");
        (this.key = "waypoint-" + e),
            (this.options = t.Adapter.extend({}, t.defaults, o)),
            (this.element = this.options.element),
            (this.adapter = new t.Adapter(this.element)),
            (this.callback = o.handler),
            (this.axis = this.options.horizontal ? "horizontal" : "vertical"),
            (this.enabled = this.options.enabled),
            (this.triggerPoint = null),
            (this.group = t.Group.findOrCreate({
                name: this.options.group,
                axis: this.axis,
            })),
            (this.context = t.Context.findOrCreateByElement(this.options.context)),
            t.offsetAliases[this.options.offset] &&
            (this.options.offset = t.offsetAliases[this.options.offset]),
            this.group.add(this),
            this.context.add(this),
            (i[this.key] = this),
            (e += 1);
    }
    var e = 0,
        i = {};
    (t.prototype.queueTrigger = function (t) {
        this.group.queueTrigger(this, t);
    }),
        (t.prototype.trigger = function (t) {
            this.enabled && this.callback && this.callback.apply(this, t);
        }),
        (t.prototype.destroy = function () {
            this.context.remove(this), this.group.remove(this), delete i[this.key];
        }),
        (t.prototype.disable = function () {
            return (this.enabled = !1), this;
        }),
        (t.prototype.enable = function () {
            return this.context.refresh(), (this.enabled = !0), this;
        }),
        (t.prototype.next = function () {
            return this.group.next(this);
        }),
        (t.prototype.previous = function () {
            return this.group.previous(this);
        }),
        (t.invokeAll = function (t) {
            var e = [];
            for (var o in i) e.push(i[o]);
            for (var n = 0, r = e.length; r > n; n++) e[n][t]();
        }),
        (t.destroyAll = function () {
            t.invokeAll("destroy");
        }),
        (t.disableAll = function () {
            t.invokeAll("disable");
        }),
        (t.enableAll = function () {
            t.invokeAll("enable");
        }),
        (t.refreshAll = function () {
            t.Context.refreshAll();
        }),
        (t.viewportHeight = function () {
            return window.innerHeight || document.documentElement.clientHeight;
        }),
        (t.viewportWidth = function () {
            return document.documentElement.clientWidth;
        }),
        (t.adapters = []),
        (t.defaults = {
            context: window,
            continuous: !0,
            enabled: !0,
            group: "default",
            horizontal: !1,
            offset: 0,
        }),
        (t.offsetAliases = {
            "bottom-in-view": function () {
                return this.context.innerHeight() - this.adapter.outerHeight();
            },
            "right-in-view": function () {
                return this.context.innerWidth() - this.adapter.outerWidth();
            },
        }),
        (window.Waypoint = t);
})(),
    (function () {
        "use strict";
        function t(t) {
            window.setTimeout(t, 1e3 / 60);
        }
        function e(t) {
            (this.element = t),
                (this.Adapter = n.Adapter),
                (this.adapter = new this.Adapter(t)),
                (this.key = "waypoint-context-" + i),
                (this.didScroll = !1),
                (this.didResize = !1),
                (this.oldScroll = {
                    x: this.adapter.scrollLeft(),
                    y: this.adapter.scrollTop(),
                }),
                (this.waypoints = { vertical: {}, horizontal: {} }),
                (t.waypointContextKey = this.key),
                (o[t.waypointContextKey] = this),
                (i += 1),
                this.createThrottledScrollHandler(),
                this.createThrottledResizeHandler();
        }
        var i = 0,
            o = {},
            n = window.Waypoint,
            r = window.onload;
        (e.prototype.add = function (t) {
            var e = t.options.horizontal ? "horizontal" : "vertical";
            (this.waypoints[e][t.key] = t), this.refresh();
        }),
            (e.prototype.checkEmpty = function () {
                var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
                    e = this.Adapter.isEmptyObject(this.waypoints.vertical);
                t && e && (this.adapter.off(".waypoints"), delete o[this.key]);
            }),
            (e.prototype.createThrottledResizeHandler = function () {
                function t() {
                    e.handleResize(), (e.didResize = !1);
                }
                var e = this;
                this.adapter.on("resize.waypoints", function () {
                    e.didResize || ((e.didResize = !0), n.requestAnimationFrame(t));
                });
            }),
            (e.prototype.createThrottledScrollHandler = function () {
                function t() {
                    e.handleScroll(), (e.didScroll = !1);
                }
                var e = this;
                this.adapter.on("scroll.waypoints", function () {
                    (!e.didScroll || n.isTouch) &&
                        ((e.didScroll = !0), n.requestAnimationFrame(t));
                });
            }),
            (e.prototype.handleResize = function () {
                n.Context.refreshAll();
            }),
            (e.prototype.handleScroll = function () {
                var t = {},
                    e = {
                        horizontal: {
                            newScroll: this.adapter.scrollLeft(),
                            oldScroll: this.oldScroll.x,
                            forward: "right",
                            backward: "left",
                        },
                        vertical: {
                            newScroll: this.adapter.scrollTop(),
                            oldScroll: this.oldScroll.y,
                            forward: "down",
                            backward: "up",
                        },
                    };
                for (var i in e) {
                    var o = e[i],
                        n = o.newScroll > o.oldScroll,
                        r = n ? o.forward : o.backward;
                    for (var s in this.waypoints[i]) {
                        var a = this.waypoints[i][s],
                            l = o.oldScroll < a.triggerPoint,
                            h = o.newScroll >= a.triggerPoint,
                            p = l && h,
                            u = !l && !h;
                        (p || u) && (a.queueTrigger(r), (t[a.group.id] = a.group));
                    }
                }
                for (var c in t) t[c].flushTriggers();
                this.oldScroll = { x: e.horizontal.newScroll, y: e.vertical.newScroll };
            }),
            (e.prototype.innerHeight = function () {
                return this.element == this.element.window
                    ? n.viewportHeight()
                    : this.adapter.innerHeight();
            }),
            (e.prototype.remove = function (t) {
                delete this.waypoints[t.axis][t.key], this.checkEmpty();
            }),
            (e.prototype.innerWidth = function () {
                return this.element == this.element.window
                    ? n.viewportWidth()
                    : this.adapter.innerWidth();
            }),
            (e.prototype.destroy = function () {
                var t = [];
                for (var e in this.waypoints)
                    for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]);
                for (var o = 0, n = t.length; n > o; o++) t[o].destroy();
            }),
            (e.prototype.refresh = function () {
                var t,
                    e = this.element == this.element.window,
                    i = this.adapter.offset(),
                    o = {};
                this.handleScroll(),
                    (t = {
                        horizontal: {
                            contextOffset: e ? 0 : i.left,
                            contextScroll: e ? 0 : this.oldScroll.x,
                            contextDimension: this.innerWidth(),
                            oldScroll: this.oldScroll.x,
                            forward: "right",
                            backward: "left",
                            offsetProp: "left",
                        },
                        vertical: {
                            contextOffset: e ? 0 : i.top,
                            contextScroll: e ? 0 : this.oldScroll.y,
                            contextDimension: this.innerHeight(),
                            oldScroll: this.oldScroll.y,
                            forward: "down",
                            backward: "up",
                            offsetProp: "top",
                        },
                    });
                for (var n in t) {
                    var r = t[n];
                    for (var s in this.waypoints[n]) {
                        var a,
                            l,
                            h,
                            p,
                            u,
                            c = this.waypoints[n][s],
                            d = c.options.offset,
                            f = c.triggerPoint,
                            w = 0,
                            y = null == f;
                        c.element !== c.element.window &&
                            (w = c.adapter.offset()[r.offsetProp]),
                            "function" == typeof d
                                ? (d = d.apply(c))
                                : "string" == typeof d &&
                                ((d = parseFloat(d)),
                                    c.options.offset.indexOf("%") > -1 &&
                                    (d = Math.ceil((r.contextDimension * d) / 100))),
                            (a = r.contextScroll - r.contextOffset),
                            (c.triggerPoint = w + a - d),
                            (l = f < r.oldScroll),
                            (h = c.triggerPoint >= r.oldScroll),
                            (p = l && h),
                            (u = !l && !h),
                            !y && p
                                ? (c.queueTrigger(r.backward), (o[c.group.id] = c.group))
                                : !y && u
                                    ? (c.queueTrigger(r.forward), (o[c.group.id] = c.group))
                                    : y &&
                                    r.oldScroll >= c.triggerPoint &&
                                    (c.queueTrigger(r.forward), (o[c.group.id] = c.group));
                    }
                }
                for (var g in o) o[g].flushTriggers();
                return this;
            }),
            (e.findOrCreateByElement = function (t) {
                return e.findByElement(t) || new e(t);
            }),
            (e.refreshAll = function () {
                for (var t in o) o[t].refresh();
            }),
            (e.findByElement = function (t) {
                return o[t.waypointContextKey];
            }),
            (window.onload = function () {
                r && r(), e.refreshAll();
            }),
            (n.requestAnimationFrame = function (e) {
                var i =
                    window.requestAnimationFrame ||
                    window.mozRequestAnimationFrame ||
                    window.webkitRequestAnimationFrame ||
                    t;
                i.call(window, e);
            }),
            (n.Context = e);
    })(),
    (function () {
        "use strict";
        function t(t, e) {
            return t.triggerPoint - e.triggerPoint;
        }
        function e(t, e) {
            return e.triggerPoint - t.triggerPoint;
        }
        function i(t) {
            (this.name = t.name),
                (this.axis = t.axis),
                (this.id = this.name + "-" + this.axis),
                (this.waypoints = []),
                this.clearTriggerQueues(),
                (o[this.axis][this.name] = this);
        }
        var o = { vertical: {}, horizontal: {} },
            n = window.Waypoint;
        (i.prototype.add = function (t) {
            this.waypoints.push(t);
        }),
            (i.prototype.clearTriggerQueues = function () {
                this.triggerQueues = { up: [], down: [], left: [], right: [] };
            }),
            (i.prototype.flushTriggers = function () {
                for (var i in this.triggerQueues) {
                    var o = this.triggerQueues[i],
                        n = "up" === i || "left" === i;
                    o.sort(n ? e : t);
                    for (var r = 0, s = o.length; s > r; r += 1) {
                        var a = o[r];
                        (a.options.continuous || r === o.length - 1) && a.trigger([i]);
                    }
                }
                this.clearTriggerQueues();
            }),
            (i.prototype.next = function (e) {
                this.waypoints.sort(t);
                var i = n.Adapter.inArray(e, this.waypoints),
                    o = i === this.waypoints.length - 1;
                return o ? null : this.waypoints[i + 1];
            }),
            (i.prototype.previous = function (e) {
                this.waypoints.sort(t);
                var i = n.Adapter.inArray(e, this.waypoints);
                return i ? this.waypoints[i - 1] : null;
            }),
            (i.prototype.queueTrigger = function (t, e) {
                this.triggerQueues[e].push(t);
            }),
            (i.prototype.remove = function (t) {
                var e = n.Adapter.inArray(t, this.waypoints);
                e > -1 && this.waypoints.splice(e, 1);
            }),
            (i.prototype.first = function () {
                return this.waypoints[0];
            }),
            (i.prototype.last = function () {
                return this.waypoints[this.waypoints.length - 1];
            }),
            (i.findOrCreate = function (t) {
                return o[t.axis][t.name] || new i(t);
            }),
            (n.Group = i);
    })(),
    (function () {
        "use strict";
        function t(t) {
            this.$element = e(t);
        }
        var e = window.jQuery,
            i = window.Waypoint;
        e.each(
            [
                "innerHeight",
                "innerWidth",
                "off",
                "offset",
                "on",
                "outerHeight",
                "outerWidth",
                "scrollLeft",
                "scrollTop",
            ],
            function (e, i) {
                t.prototype[i] = function () {
                    var t = Array.prototype.slice.call(arguments);
                    return this.$element[i].apply(this.$element, t);
                };
            }
        ),
            e.each(["extend", "inArray", "isEmptyObject"], function (i, o) {
                t[o] = e[o];
            }),
            i.adapters.push({ name: "jquery", Adapter: t }),
            (i.Adapter = t);
    })(),
    (function () {
        "use strict";
        function t(t) {
            return function () {
                var i = [],
                    o = arguments[0];
                return (
                    t.isFunction(arguments[0]) &&
                    ((o = t.extend({}, arguments[1])), (o.handler = arguments[0])),
                    this.each(function () {
                        var n = t.extend({}, o, { element: this });
                        "string" == typeof n.context &&
                            (n.context = t(this).closest(n.context)[0]),
                            i.push(new e(n));
                    }),
                    i
                );
            };
        }
        var e = window.Waypoint;
        window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)),
            window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto));
    })();
/*!Lazy Load 2.0.0-beta.2 - MIT license - Copyright 2007-2017 Mika Tuupola*/ !(function (
        t,
        e
    ) {
    "object" == typeof exports
        ? (module.exports = e(t))
        : "function" == typeof define && define.amd
            ? define([], e(t))
            : (t.LazyLoad = e(t));
})(
    "undefined" != typeof global ? global : this.window || this.global,
    function (t) {
        "use strict";
        function e(t, e) {
            (this.settings = r(s, e || {})),
                (this.images = t || document.querySelectorAll(this.settings.selector)),
                (this.observer = null),
                this.init();
        }
        const s = { src: "data-src", srcset: "data-srcset", selector: ".lazyload" },
            r = function () {
                let t = {},
                    e = !1,
                    s = 0,
                    o = arguments.length;
                "[object Boolean]" === Object.prototype.toString.call(arguments[0]) &&
                    ((e = arguments[0]), s++);
                for (; s < o; s++)
                    !(function (s) {
                        for (let o in s)
                            Object.prototype.hasOwnProperty.call(s, o) &&
                                (e && "[object Object]" === Object.prototype.toString.call(s[o])
                                    ? (t[o] = r(!0, t[o], s[o]))
                                    : (t[o] = s[o]));
                    })(arguments[s]);
                return t;
            };
        if (
            ((e.prototype = {
                init: function () {
                    if (!t.IntersectionObserver) return void this.loadImages();
                    let e = this,
                        s = { root: null, rootMargin: "0px", threshold: [0] };
                    (this.observer = new IntersectionObserver(function (t) {
                        t.forEach(function (t) {
                            if (t.intersectionRatio > 0) {
                                e.observer.unobserve(t.target);
                                let s = t.target.getAttribute(e.settings.src),
                                    r = t.target.getAttribute(e.settings.srcset);
                                "img" === t.target.tagName.toLowerCase()
                                    ? (s && (t.target.src = s), r && (t.target.srcset = r))
                                    : (t.target.style.backgroundImage = "url(" + s + ")");
                            }
                        });
                    }, s)),
                        this.images.forEach(function (t) {
                            e.observer.observe(t);
                        });
                },
                loadAndDestroy: function () {
                    this.settings && (this.loadImages(), this.destroy());
                },
                loadImages: function () {
                    if (!this.settings) return;
                    let t = this;
                    this.images.forEach(function (e) {
                        let s = e.getAttribute(t.settings.src),
                            r = e.getAttribute(t.settings.srcset);
                        "img" === e.tagName.toLowerCase()
                            ? (s && (e.src = s), r && (e.srcset = r))
                            : (e.style.backgroundImage = "url(" + s + ")");
                    });
                },
                destroy: function () {
                    this.settings && (this.observer.disconnect(), (this.settings = null));
                },
            }),
                (t.lazyload = function (t, s) {
                    return new e(t, s);
                }),
                t.jQuery)
        ) {
            const s = t.jQuery;
            s.fn.lazyload = function (t) {
                return (
                    (t = t || {}),
                    (t.attribute = t.attribute || "data-src"),
                    new e(s.makeArray(this), t),
                    this
                );
            };
        }
        return e;
    }
);
/*!selectize.js - v0.12.4 | https://github.com/selectize/selectize.js | Apache License (v2)*/ !(function (
    a,
    b
) {
    "function" == typeof define && define.amd
        ? define("sifter", b)
        : "object" == typeof exports
            ? (module.exports = b())
            : (a.Sifter = b());
})(this, function () {
    var a = function (a, b) {
        (this.items = a), (this.settings = b || { diacritics: !0 });
    };
    (a.prototype.tokenize = function (a) {
        if (((a = e(String(a || "").toLowerCase())), !a || !a.length)) return [];
        var b,
            c,
            d,
            g,
            i = [],
            j = a.split(/ +/);
        for (b = 0, c = j.length; b < c; b++) {
            if (((d = f(j[b])), this.settings.diacritics))
                for (g in h)
                    h.hasOwnProperty(g) && (d = d.replace(new RegExp(g, "g"), h[g]));
            i.push({ string: j[b], regex: new RegExp(d, "i") });
        }
        return i;
    }),
        (a.prototype.iterator = function (a, b) {
            var c;
            (c = g(a)
                ? Array.prototype.forEach ||
                function (a) {
                    for (var b = 0, c = this.length; b < c; b++) a(this[b], b, this);
                }
                : function (a) {
                    for (var b in this) this.hasOwnProperty(b) && a(this[b], b, this);
                }),
                c.apply(a, [b]);
        }),
        (a.prototype.getScoreFunction = function (a, b) {
            var c, e, f, g, h;
            (c = this),
                (a = c.prepareSearch(a, b)),
                (f = a.tokens),
                (e = a.options.fields),
                (g = f.length),
                (h = a.options.nesting);
            var i = function (a, b) {
                var c, d;
                return a
                    ? ((a = String(a || "")),
                        (d = a.search(b.regex)),
                        d === -1
                            ? 0
                            : ((c = b.string.length / a.length), 0 === d && (c += 0.5), c))
                    : 0;
            },
                j = (function () {
                    var a = e.length;
                    return a
                        ? 1 === a
                            ? function (a, b) {
                                return i(d(b, e[0], h), a);
                            }
                            : function (b, c) {
                                for (var f = 0, g = 0; f < a; f++) g += i(d(c, e[f], h), b);
                                return g / a;
                            }
                        : function () {
                            return 0;
                        };
                })();
            return g
                ? 1 === g
                    ? function (a) {
                        return j(f[0], a);
                    }
                    : "and" === a.options.conjunction
                        ? function (a) {
                            for (var b, c = 0, d = 0; c < g; c++) {
                                if (((b = j(f[c], a)), b <= 0)) return 0;
                                d += b;
                            }
                            return d / g;
                        }
                        : function (a) {
                            for (var b = 0, c = 0; b < g; b++) c += j(f[b], a);
                            return c / g;
                        }
                : function () {
                    return 0;
                };
        }),
        (a.prototype.getSortFunction = function (a, c) {
            var e, f, g, h, i, j, k, l, m, n, o;
            if (
                ((g = this),
                    (a = g.prepareSearch(a, c)),
                    (o = (!a.query && c.sort_empty) || c.sort),
                    (m = function (a, b) {
                        return "$score" === a ? b.score : d(g.items[b.id], a, c.nesting);
                    }),
                    (i = []),
                    o)
            )
                for (e = 0, f = o.length; e < f; e++)
                    (a.query || "$score" !== o[e].field) && i.push(o[e]);
            if (a.query) {
                for (n = !0, e = 0, f = i.length; e < f; e++)
                    if ("$score" === i[e].field) {
                        n = !1;
                        break;
                    }
                n && i.unshift({ field: "$score", direction: "desc" });
            } else
                for (e = 0, f = i.length; e < f; e++)
                    if ("$score" === i[e].field) {
                        i.splice(e, 1);
                        break;
                    }
            for (l = [], e = 0, f = i.length; e < f; e++)
                l.push("desc" === i[e].direction ? -1 : 1);
            return (
                (j = i.length),
                j
                    ? 1 === j
                        ? ((h = i[0].field),
                            (k = l[0]),
                            function (a, c) {
                                return k * b(m(h, a), m(h, c));
                            })
                        : function (a, c) {
                            var d, e, f;
                            for (d = 0; d < j; d++)
                                if (((f = i[d].field), (e = l[d] * b(m(f, a), m(f, c)))))
                                    return e;
                            return 0;
                        }
                    : null
            );
        }),
        (a.prototype.prepareSearch = function (a, b) {
            if ("object" == typeof a) return a;
            b = c({}, b);
            var d = b.fields,
                e = b.sort,
                f = b.sort_empty;
            return (
                d && !g(d) && (b.fields = [d]),
                e && !g(e) && (b.sort = [e]),
                f && !g(f) && (b.sort_empty = [f]),
                {
                    options: b,
                    query: String(a || "").toLowerCase(),
                    tokens: this.tokenize(a),
                    total: 0,
                    items: [],
                }
            );
        }),
        (a.prototype.search = function (a, b) {
            var c,
                d,
                e,
                f,
                g = this;
            return (
                (d = this.prepareSearch(a, b)),
                (b = d.options),
                (a = d.query),
                (f = b.score || g.getScoreFunction(d)),
                a.length
                    ? g.iterator(g.items, function (a, e) {
                        (c = f(a)),
                            (b.filter === !1 || c > 0) && d.items.push({ score: c, id: e });
                    })
                    : g.iterator(g.items, function (a, b) {
                        d.items.push({ score: 1, id: b });
                    }),
                (e = g.getSortFunction(d, b)),
                e && d.items.sort(e),
                (d.total = d.items.length),
                "number" == typeof b.limit && (d.items = d.items.slice(0, b.limit)),
                d
            );
        });
    var b = function (a, b) {
        return "number" == typeof a && "number" == typeof b
            ? a > b
                ? 1
                : a < b
                    ? -1
                    : 0
            : ((a = i(String(a || ""))),
                (b = i(String(b || ""))),
                a > b ? 1 : b > a ? -1 : 0);
    },
        c = function (a, b) {
            var c, d, e, f;
            for (c = 1, d = arguments.length; c < d; c++)
                if ((f = arguments[c]))
                    for (e in f) f.hasOwnProperty(e) && (a[e] = f[e]);
            return a;
        },
        d = function (a, b, c) {
            if (a && b) {
                if (!c) return a[b];
                for (var d = b.split("."); d.length && (a = a[d.shift()]););
                return a;
            }
        },
        e = function (a) {
            return (a + "").replace(/^\s+|\s+$|/g, "");
        },
        f = function (a) {
            return (a + "").replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
        },
        g =
            Array.isArray ||
            ("undefined" != typeof $ && $.isArray) ||
            function (a) {
                return "[object Array]" === Object.prototype.toString.call(a);
            },
        h = {
            a: "[aá¸€á¸Ä‚ÄƒÃ‚Ã¢ÇÇŽÈºâ±¥È¦È§áº áº¡Ã„Ã¤Ã€Ã ÃÃ¡Ä€ÄÃƒÃ£Ã…Ã¥Ä…Ä„ÃƒÄ…Ä„]",
            b: "[bâ¢Î²Î’Bà¸¿ðŒá›’]",
            c: "[cÄ†Ä‡ÄˆÄ‰ÄŒÄÄŠÄ‹CÌ„cÌ„Ã‡Ã§á¸ˆá¸‰È»È¼Æ‡ÆˆÉ•á´„ï¼£ï½ƒ]",
            d:
                "[dÄŽÄá¸Šá¸‹á¸á¸‘á¸Œá¸á¸’á¸“á¸Žá¸ÄÄ‘DÌ¦dÌ¦Æ‰É–ÆŠÉ—Æ‹ÆŒáµ­á¶á¶‘È¡á´…ï¼¤ï½„Ã°]",
            e:
                "[eÃ‰Ã©ÃˆÃ¨ÃŠÃªá¸˜á¸™ÄšÄ›Ä”Ä•áº¼áº½á¸šá¸›áººáº»Ä–Ä—Ã‹Ã«Ä’Ä“È¨È©Ä˜Ä™á¶’É†É‡È„È…áº¾áº¿á»€á»á»„á»…á»‚á»ƒá¸œá¸á¸–á¸—á¸”á¸•È†È‡áº¸áº¹á»†á»‡â±¸á´‡ï¼¥ï½…É˜ÇÆÆÎµ]",
            f: "[fÆ‘Æ’á¸žá¸Ÿ]",
            g: "[gÉ¢â‚²Ç¤Ç¥ÄœÄÄžÄŸÄ¢Ä£Æ“É Ä Ä¡]",
            h: "[hÄ¤Ä¥Ä¦Ä§á¸¨á¸©áº–áº–á¸¤á¸¥á¸¢á¸£É¦Ê°Ç¶Æ•]",
            i:
                "[iÃÃ­ÃŒÃ¬Ä¬Ä­ÃŽÃ®ÇÇÃÃ¯á¸®á¸¯Ä¨Ä©Ä®Ä¯ÄªÄ«á»ˆá»‰ÈˆÈ‰ÈŠÈ‹á»Šá»‹á¸¬á¸­Æ—É¨É¨Ì†áµ»á¶–Ä°iIÄ±Éªï¼©ï½‰]",
            j: "[jÈ·Ä´ÄµÉˆÉ‰ÊÉŸÊ²]",
            k: "[kÆ˜Æ™ê€êá¸°á¸±Ç¨Ç©á¸²á¸³á¸´á¸µÎºÏ°â‚­]",
            l:
                "[lÅÅ‚Ä½Ä¾Ä»Ä¼Ä¹Äºá¸¶á¸·á¸¸á¸¹á¸¼á¸½á¸ºá¸»Ä¿Å€È½Æšâ± â±¡â±¢É«É¬á¶…É­È´ÊŸï¼¬ï½Œ]",
            n:
                "[nÅƒÅ„Ç¸Ç¹Å‡ÅˆÃ‘Ã±á¹„á¹…Å…Å†á¹†á¹‡á¹Šá¹‹á¹ˆá¹‰NÌˆnÌˆÆÉ²È Æžáµ°á¶‡É³ÈµÉ´ï¼®ï½ŽÅŠÅ‹]",
            o:
                "[oÃ˜Ã¸Ã–Ã¶Ã“Ã³Ã’Ã²Ã”Ã´Ç‘Ç’ÅÅ‘ÅŽÅÈ®È¯á»Œá»ÆŸÉµÆ Æ¡á»Žá»ÅŒÅÃ•ÃµÇªÇ«ÈŒÈÕ•Ö…]",
            p: "[pá¹”á¹•á¹–á¹—â±£áµ½Æ¤Æ¥áµ±]",
            q: "[qê–ê—Ê ÉŠÉ‹ê˜ê™qÌƒ]",
            r: "[rÅ”Å•ÉŒÉÅ˜Å™Å–Å—á¹˜á¹™ÈÈ‘È’È“á¹šá¹›â±¤É½]",
            s: "[sÅšÅ›á¹ á¹¡á¹¢á¹£êž¨êž©ÅœÅÅ Å¡ÅžÅŸÈ˜È™SÌˆsÌˆ]",
            t: "[tÅ¤Å¥á¹ªá¹«Å¢Å£á¹¬á¹­Æ®ÊˆÈšÈ›á¹°á¹±á¹®á¹¯Æ¬Æ­]",
            u:
                "[uÅ¬Å­É„Ê‰á»¤á»¥ÃœÃ¼ÃšÃºÃ™Ã¹Ã›Ã»Ç“Ç”Å°Å±Å¬Å­Æ¯Æ°á»¦á»§ÅªÅ«Å¨Å©Å²Å³È”È•âˆª]",
            v: "[vá¹¼á¹½á¹¾á¹¿Æ²Ê‹êžêŸâ±±Ê‹]",
            w: "[wáº‚áºƒáº€áºÅ´Åµáº„áº…áº†áº‡áºˆáº‰]",
            x: "[xáºŒáºáºŠáº‹Ï‡]",
            y: "[yÃÃ½á»²á»³Å¶Å·Å¸Ã¿á»¸á»¹áºŽáºá»´á»µÉŽÉÆ³Æ´]",
            z: "[zÅ¹Åºáºáº‘Å½Å¾Å»Å¼áº’áº“áº”áº•ÆµÆ¶]",
        },
        i = (function () {
            var a,
                b,
                c,
                d,
                e = "",
                f = {};
            for (c in h)
                if (h.hasOwnProperty(c))
                    for (
                        d = h[c].substring(2, h[c].length - 1), e += d, a = 0, b = d.length;
                        a < b;
                        a++
                    )
                        f[d.charAt(a)] = c;
            var g = new RegExp("[" + e + "]", "g");
            return function (a) {
                return a
                    .replace(g, function (a) {
                        return f[a];
                    })
                    .toLowerCase();
            };
        })();
    return a;
}),
    (function (a, b) {
        "function" == typeof define && define.amd
            ? define("microplugin", b)
            : "object" == typeof exports
                ? (module.exports = b())
                : (a.MicroPlugin = b());
    })(this, function () {
        var a = {};
        a.mixin = function (a) {
            (a.plugins = {}),
                (a.prototype.initializePlugins = function (a) {
                    var c,
                        d,
                        e,
                        f = this,
                        g = [];
                    if (
                        ((f.plugins = {
                            names: [],
                            settings: {},
                            requested: {},
                            loaded: {},
                        }),
                            b.isArray(a))
                    )
                        for (c = 0, d = a.length; c < d; c++)
                            "string" == typeof a[c]
                                ? g.push(a[c])
                                : ((f.plugins.settings[a[c].name] = a[c].options),
                                    g.push(a[c].name));
                    else if (a)
                        for (e in a)
                            a.hasOwnProperty(e) &&
                                ((f.plugins.settings[e] = a[e]), g.push(e));
                    for (; g.length;) f.require(g.shift());
                }),
                (a.prototype.loadPlugin = function (b) {
                    var c = this,
                        d = c.plugins,
                        e = a.plugins[b];
                    if (!a.plugins.hasOwnProperty(b))
                        throw new Error('Unable to find "' + b + '" plugin');
                    (d.requested[b] = !0),
                        (d.loaded[b] = e.fn.apply(c, [c.plugins.settings[b] || {}])),
                        d.names.push(b);
                }),
                (a.prototype.require = function (a) {
                    var b = this,
                        c = b.plugins;
                    if (!b.plugins.loaded.hasOwnProperty(a)) {
                        if (c.requested[a])
                            throw new Error('Plugin has circular dependency ("' + a + '")');
                        b.loadPlugin(a);
                    }
                    return c.loaded[a];
                }),
                (a.define = function (b, c) {
                    a.plugins[b] = { name: b, fn: c };
                });
        };
        var b = {
            isArray:
                Array.isArray ||
                function (a) {
                    return "[object Array]" === Object.prototype.toString.call(a);
                },
        };
        return a;
    }),
    (function (a, b) {
        "function" == typeof define && define.amd
            ? define("selectize", ["jquery", "sifter", "microplugin"], b)
            : "object" == typeof exports
                ? (module.exports = b(
                    require("jquery"),
                    require("sifter"),
                    require("microplugin")
                ))
                : (a.Selectize = b(a.jQuery, a.Sifter, a.MicroPlugin));
    })(this, function (a, b, c) {
        "use strict";
        var d = function (a, b) {
            if ("string" != typeof b || b.length) {
                var c = "string" == typeof b ? new RegExp(b, "i") : b,
                    d = function (a) {
                        var b = 0;
                        if (3 === a.nodeType) {
                            var e = a.data.search(c);
                            if (e >= 0 && a.data.length > 0) {
                                var f = a.data.match(c),
                                    g = document.createElement("span");
                                g.className = "highlight";
                                var h = a.splitText(e),
                                    i = (h.splitText(f[0].length), h.cloneNode(!0));
                                g.appendChild(i), h.parentNode.replaceChild(g, h), (b = 1);
                            }
                        } else if (
                            1 === a.nodeType &&
                            a.childNodes &&
                            !/(script|style)/i.test(a.tagName)
                        )
                            for (var j = 0; j < a.childNodes.length; ++j)
                                j += d(a.childNodes[j]);
                        return b;
                    };
                return a.each(function () {
                    d(this);
                });
            }
        };
        a.fn.removeHighlight = function () {
            return this.find("span.highlight")
                .each(function () {
                    this.parentNode.firstChild.nodeName;
                    var a = this.parentNode;
                    a.replaceChild(this.firstChild, this), a.normalize();
                })
                .end();
        };
        var e = function () { };
        (e.prototype = {
            on: function (a, b) {
                (this._events = this._events || {}),
                    (this._events[a] = this._events[a] || []),
                    this._events[a].push(b);
            },
            off: function (a, b) {
                var c = arguments.length;
                return 0 === c
                    ? delete this._events
                    : 1 === c
                        ? delete this._events[a]
                        : ((this._events = this._events || {}),
                            void (
                                a in this._events != !1 &&
                                this._events[a].splice(this._events[a].indexOf(b), 1)
                            ));
            },
            trigger: function (a) {
                if (((this._events = this._events || {}), a in this._events != !1))
                    for (var b = 0; b < this._events[a].length; b++)
                        this._events[a][b].apply(
                            this,
                            Array.prototype.slice.call(arguments, 1)
                        );
            },
        }),
            (e.mixin = function (a) {
                for (var b = ["on", "off", "trigger"], c = 0; c < b.length; c++)
                    a.prototype[b[c]] = e.prototype[b[c]];
            });
        var f = /Mac/.test(navigator.userAgent),
            g = 65,
            h = 13,
            i = 27,
            j = 37,
            k = 38,
            l = 80,
            m = 39,
            n = 40,
            o = 78,
            p = 8,
            q = 46,
            r = 16,
            s = f ? 91 : 17,
            t = f ? 18 : 17,
            u = 9,
            v = 1,
            w = 2,
            x =
                !/android/i.test(window.navigator.userAgent) &&
                !!document.createElement("input").validity,
            y = function (a) {
                return "undefined" != typeof a;
            },
            z = function (a) {
                return "undefined" == typeof a || null === a
                    ? null
                    : "boolean" == typeof a
                        ? a
                            ? "1"
                            : "0"
                        : a + "";
            },
            A = function (a) {
                return (a + "")
                    .replace(/&/g, "&amp;")
                    .replace(/</g, "&lt;")
                    .replace(/>/g, "&gt;")
                    .replace(/"/g, "&quot;");
            },
            B = {};
        (B.before = function (a, b, c) {
            var d = a[b];
            a[b] = function () {
                return c.apply(a, arguments), d.apply(a, arguments);
            };
        }),
            (B.after = function (a, b, c) {
                var d = a[b];
                a[b] = function () {
                    var b = d.apply(a, arguments);
                    return c.apply(a, arguments), b;
                };
            });
        var C = function (a) {
            var b = !1;
            return function () {
                b || ((b = !0), a.apply(this, arguments));
            };
        },
            D = function (a, b) {
                var c;
                return function () {
                    var d = this,
                        e = arguments;
                    window.clearTimeout(c),
                        (c = window.setTimeout(function () {
                            a.apply(d, e);
                        }, b));
                };
            },
            E = function (a, b, c) {
                var d,
                    e = a.trigger,
                    f = {};
                (a.trigger = function () {
                    var c = arguments[0];
                    return b.indexOf(c) === -1
                        ? e.apply(a, arguments)
                        : void (f[c] = arguments);
                }),
                    c.apply(a, []),
                    (a.trigger = e);
                for (d in f) f.hasOwnProperty(d) && e.apply(a, f[d]);
            },
            F = function (a, b, c, d) {
                a.on(b, c, function (b) {
                    for (var c = b.target; c && c.parentNode !== a[0];) c = c.parentNode;
                    return (b.currentTarget = c), d.apply(this, [b]);
                });
            },
            G = function (a) {
                var b = {};
                if ("selectionStart" in a)
                    (b.start = a.selectionStart), (b.length = a.selectionEnd - b.start);
                else if (document.selection) {
                    a.focus();
                    var c = document.selection.createRange(),
                        d = document.selection.createRange().text.length;
                    c.moveStart("character", -a.value.length),
                        (b.start = c.text.length - d),
                        (b.length = d);
                }
                return b;
            },
            H = function (a, b, c) {
                var d,
                    e,
                    f = {};
                if (c) for (d = 0, e = c.length; d < e; d++) f[c[d]] = a.css(c[d]);
                else f = a.css();
                b.css(f);
            },
            I = function (b, c) {
                if (!b) return 0;
                var d = a("<test>")
                    .css({
                        position: "absolute",
                        top: -99999,
                        left: -99999,
                        width: "auto",
                        padding: 0,
                        whiteSpace: "pre",
                    })
                    .text(b)
                    .appendTo("body");
                H(c, d, [
                    "letterSpacing",
                    "fontSize",
                    "fontFamily",
                    "fontWeight",
                    "textTransform",
                ]);
                var e = d.width();
                return d.remove(), e;
            },
            J = function (a) {
                var b = null,
                    c = function (c, d) {
                        var e, f, g, h, i, j, k, l;
                        (c = c || window.event || {}),
                            (d = d || {}),
                            c.metaKey ||
                            c.altKey ||
                            ((d.force || a.data("grow") !== !1) &&
                                ((e = a.val()),
                                    c.type &&
                                    "keydown" === c.type.toLowerCase() &&
                                    ((f = c.keyCode),
                                        (g =
                                            (f >= 97 && f <= 122) ||
                                            (f >= 65 && f <= 90) ||
                                            (f >= 48 && f <= 57) ||
                                            32 === f),
                                        f === q || f === p
                                            ? ((l = G(a[0])),
                                                l.length
                                                    ? (e =
                                                        e.substring(0, l.start) +
                                                        e.substring(l.start + l.length))
                                                    : f === p && l.start
                                                        ? (e =
                                                            e.substring(0, l.start - 1) +
                                                            e.substring(l.start + 1))
                                                        : f === q &&
                                                        "undefined" != typeof l.start &&
                                                        (e =
                                                            e.substring(0, l.start) +
                                                            e.substring(l.start + 1)))
                                            : g &&
                                            ((j = c.shiftKey),
                                                (k = String.fromCharCode(c.keyCode)),
                                                (k = j ? k.toUpperCase() : k.toLowerCase()),
                                                (e += k))),
                                    (h = a.attr("placeholder")),
                                    !e && h && (e = h),
                                    (i = I(e, a) + 4),
                                    i !== b &&
                                    ((b = i), a.width(i), a.triggerHandler("resize"))));
                    };
                a.on("keydown keyup update blur", c), c();
            },
            K = function (a) {
                var b = document.createElement("div");
                return b.appendChild(a.cloneNode(!0)), b.innerHTML;
            },
            L = function (a, b) {
                b || (b = {});
                var c = "Selectize";
                console.error(c + ": " + a),
                    b.explanation &&
                    (console.group && console.group(),
                        console.error(b.explanation),
                        console.group && console.groupEnd());
            },
            M = function (c, d) {
                var e,
                    f,
                    g,
                    h,
                    i = this;
                (h = c[0]), (h.selectize = i);
                var j = window.getComputedStyle && window.getComputedStyle(h, null);
                if (
                    ((g = j
                        ? j.getPropertyValue("direction")
                        : h.currentStyle && h.currentStyle.direction),
                        (g = g || c.parents("[dir]:first").attr("dir") || ""),
                        a.extend(i, {
                            order: 0,
                            settings: d,
                            $input: c,
                            tabIndex: c.attr("tabindex") || "",
                            tagType: "select" === h.tagName.toLowerCase() ? v : w,
                            rtl: /rtl/i.test(g),
                            eventNS: ".selectize" + ++M.count,
                            highlightedValue: null,
                            isOpen: !1,
                            isDisabled: !1,
                            isRequired: c.is("[required]"),
                            isInvalid: !1,
                            isLocked: !1,
                            isFocused: !1,
                            isInputHidden: !1,
                            isSetup: !1,
                            isShiftDown: !1,
                            isCmdDown: !1,
                            isCtrlDown: !1,
                            ignoreFocus: !1,
                            ignoreBlur: !1,
                            ignoreHover: !1,
                            hasOptions: !1,
                            currentResults: null,
                            lastValue: "",
                            caretPos: 0,
                            loading: 0,
                            loadedSearches: {},
                            $activeOption: null,
                            $activeItems: [],
                            optgroups: {},
                            options: {},
                            userOptions: {},
                            items: [],
                            renderCache: {},
                            onSearchChange:
                                null === d.loadThrottle
                                    ? i.onSearchChange
                                    : D(i.onSearchChange, d.loadThrottle),
                        }),
                        (i.sifter = new b(this.options, { diacritics: d.diacritics })),
                        i.settings.options)
                ) {
                    for (e = 0, f = i.settings.options.length; e < f; e++)
                        i.registerOption(i.settings.options[e]);
                    delete i.settings.options;
                }
                if (i.settings.optgroups) {
                    for (e = 0, f = i.settings.optgroups.length; e < f; e++)
                        i.registerOptionGroup(i.settings.optgroups[e]);
                    delete i.settings.optgroups;
                }
                (i.settings.mode =
                    i.settings.mode || (1 === i.settings.maxItems ? "single" : "multi")),
                    "boolean" != typeof i.settings.hideSelected &&
                    (i.settings.hideSelected = "multi" === i.settings.mode),
                    i.initializePlugins(i.settings.plugins),
                    i.setupCallbacks(),
                    i.setupTemplates(),
                    i.setup();
            };
        return (
            e.mixin(M),
            "undefined" != typeof c
                ? c.mixin(M)
                : L("Dependency MicroPlugin is missing", {
                    explanation:
                        'Make sure you either: (1) are using the "standalone" version of Selectize, or (2) require MicroPlugin before you load Selectize.',
                }),
            a.extend(M.prototype, {
                setup: function () {
                    var b,
                        c,
                        d,
                        e,
                        g,
                        h,
                        i,
                        j,
                        k,
                        l,
                        m = this,
                        n = m.settings,
                        o = m.eventNS,
                        p = a(window),
                        q = a(document),
                        u = m.$input;
                    if (
                        ((i = m.settings.mode),
                            (j = u.attr("class") || ""),
                            (b = a("<div>").addClass(n.wrapperClass).addClass(j).addClass(i)),
                            (c = a("<div>")
                                .addClass(n.inputClass)
                                .addClass("items")
                                .appendTo(b)),
                            (d = a('<input type="text" autocomplete="off" />')
                                .appendTo(c)
                                .attr("tabindex", u.is(":disabled") ? "-1" : m.tabIndex)),
                            (h = a(n.dropdownParent || b)),
                            (e = a("<div>")
                                .addClass(n.dropdownClass)
                                .addClass(i)
                                .hide()
                                .appendTo(h)),
                            (g = a("<div>").addClass(n.dropdownContentClass).appendTo(e)),
                            (l = u.attr("id")) &&
                            (d.attr("id", l + "-selectized"),
                                a("label[for='" + l + "']").attr("for", l + "-selectized")),
                            m.settings.copyClassesToDropdown && e.addClass(j),
                            b.css({ width: u[0].style.width }),
                            m.plugins.names.length &&
                            ((k = "plugin-" + m.plugins.names.join(" plugin-")),
                                b.addClass(k),
                                e.addClass(k)),
                            (null === n.maxItems || n.maxItems > 1) &&
                            m.tagType === v &&
                            u.attr("multiple", "multiple"),
                            m.settings.placeholder && d.attr("placeholder", n.placeholder),
                            !m.settings.splitOn && m.settings.delimiter)
                    ) {
                        var w = m.settings.delimiter.replace(
                            /[-\/\\^$*+?.()|[\]{}]/g,
                            "\\$&"
                        );
                        m.settings.splitOn = new RegExp("\\s*" + w + "+\\s*");
                    }
                    u.attr("autocorrect") && d.attr("autocorrect", u.attr("autocorrect")),
                        u.attr("autocapitalize") &&
                        d.attr("autocapitalize", u.attr("autocapitalize")),
                        (m.$wrapper = b),
                        (m.$control = c),
                        (m.$control_input = d),
                        (m.$dropdown = e),
                        (m.$dropdown_content = g),
                        e.on("mouseenter", "[data-selectable]", function () {
                            return m.onOptionHover.apply(m, arguments);
                        }),
                        e.on("mousedown click", "[data-selectable]", function () {
                            return m.onOptionSelect.apply(m, arguments);
                        }),
                        F(c, "mousedown", "*:not(input)", function () {
                            return m.onItemSelect.apply(m, arguments);
                        }),
                        J(d),
                        c.on({
                            mousedown: function () {
                                return m.onMouseDown.apply(m, arguments);
                            },
                            click: function () {
                                return m.onClick.apply(m, arguments);
                            },
                        }),
                        d.on({
                            mousedown: function (a) {
                                a.stopPropagation();
                            },
                            keydown: function () {
                                return m.onKeyDown.apply(m, arguments);
                            },
                            keyup: function () {
                                return m.onKeyUp.apply(m, arguments);
                            },
                            keypress: function () {
                                return m.onKeyPress.apply(m, arguments);
                            },
                            resize: function () {
                                m.positionDropdown.apply(m, []);
                            },
                            blur: function () {
                                return m.onBlur.apply(m, arguments);
                            },
                            focus: function () {
                                return (m.ignoreBlur = !1), m.onFocus.apply(m, arguments);
                            },
                            paste: function () {
                                return m.onPaste.apply(m, arguments);
                            },
                        }),
                        q.on("keydown" + o, function (a) {
                            (m.isCmdDown = a[f ? "metaKey" : "ctrlKey"]),
                                (m.isCtrlDown = a[f ? "altKey" : "ctrlKey"]),
                                (m.isShiftDown = a.shiftKey);
                        }),
                        q.on("keyup" + o, function (a) {
                            a.keyCode === t && (m.isCtrlDown = !1),
                                a.keyCode === r && (m.isShiftDown = !1),
                                a.keyCode === s && (m.isCmdDown = !1);
                        }),
                        q.on("mousedown" + o, function (a) {
                            if (m.isFocused) {
                                if (
                                    a.target === m.$dropdown[0] ||
                                    a.target.parentNode === m.$dropdown[0]
                                )
                                    return !1;
                                m.$control.has(a.target).length ||
                                    a.target === m.$control[0] ||
                                    m.blur(a.target);
                            }
                        }),
                        p.on(["scroll" + o, "resize" + o].join(" "), function () {
                            m.isOpen && m.positionDropdown.apply(m, arguments);
                        }),
                        p.on("mousemove" + o, function () {
                            m.ignoreHover = !1;
                        }),
                        (this.revertSettings = {
                            $children: u.children().detach(),
                            tabindex: u.attr("tabindex"),
                        }),
                        u.attr("tabindex", -1).hide().after(m.$wrapper),
                        a.isArray(n.items) && (m.setValue(n.items), delete n.items),
                        x &&
                        u.on("invalid" + o, function (a) {
                            a.preventDefault(), (m.isInvalid = !0), m.refreshState();
                        }),
                        m.updateOriginalInput(),
                        m.refreshItems(),
                        m.refreshState(),
                        m.updatePlaceholder(),
                        (m.isSetup = !0),
                        u.is(":disabled") && m.disable(),
                        m.on("change", this.onChange),
                        u.data("selectize", m),
                        u.addClass("selectized"),
                        m.trigger("initialize"),
                        n.preload === !0 && m.onSearchChange("");
                },
                setupTemplates: function () {
                    var b = this,
                        c = b.settings.labelField,
                        d = b.settings.optgroupLabelField,
                        e = {
                            optgroup: function (a) {
                                return '<div class="optgroup">' + a.html + "</div>";
                            },
                            optgroup_header: function (a, b) {
                                return '<div class="optgroup-header">' + b(a[d]) + "</div>";
                            },
                            option: function (a, b) {
                                return '<div class="option">' + b(a[c]) + "</div>";
                            },
                            item: function (a, b) {
                                return '<div class="item">' + b(a[c]) + "</div>";
                            },
                            option_create: function (a, b) {
                                return (
                                    '<div class="create">Add <strong>' +
                                    b(a.input) +
                                    "</strong>&hellip;</div>"
                                );
                            },
                        };
                    b.settings.render = a.extend({}, e, b.settings.render);
                },
                setupCallbacks: function () {
                    var a,
                        b,
                        c = {
                            initialize: "onInitialize",
                            change: "onChange",
                            item_add: "onItemAdd",
                            item_remove: "onItemRemove",
                            clear: "onClear",
                            option_add: "onOptionAdd",
                            option_remove: "onOptionRemove",
                            option_clear: "onOptionClear",
                            optgroup_add: "onOptionGroupAdd",
                            optgroup_remove: "onOptionGroupRemove",
                            optgroup_clear: "onOptionGroupClear",
                            dropdown_open: "onDropdownOpen",
                            dropdown_close: "onDropdownClose",
                            type: "onType",
                            load: "onLoad",
                            focus: "onFocus",
                            blur: "onBlur",
                        };
                    for (a in c)
                        c.hasOwnProperty(a) &&
                            ((b = this.settings[c[a]]), b && this.on(a, b));
                },
                onClick: function (a) {
                    var b = this;
                    b.isFocused || (b.focus(), a.preventDefault());
                },
                onMouseDown: function (b) {
                    var c = this,
                        d = b.isDefaultPrevented();
                    a(b.target);
                    if (c.isFocused) {
                        if (b.target !== c.$control_input[0])
                            return (
                                "single" === c.settings.mode
                                    ? c.isOpen
                                        ? c.close()
                                        : c.open()
                                    : d || c.setActiveItem(null),
                                !1
                            );
                    } else
                        d ||
                            window.setTimeout(function () {
                                c.focus();
                            }, 0);
                },
                onChange: function () {
                    this.$input.trigger("change");
                },
                onPaste: function (b) {
                    var c = this;
                    return c.isFull() || c.isInputHidden || c.isLocked
                        ? void b.preventDefault()
                        : void (
                            c.settings.splitOn &&
                            setTimeout(function () {
                                var b = c.$control_input.val();
                                if (b.match(c.settings.splitOn))
                                    for (
                                        var d = a.trim(b).split(c.settings.splitOn),
                                        e = 0,
                                        f = d.length;
                                        e < f;
                                        e++
                                    )
                                        c.createItem(d[e]);
                            }, 0)
                        );
                },
                onKeyPress: function (a) {
                    if (this.isLocked) return a && a.preventDefault();
                    var b = String.fromCharCode(a.keyCode || a.which);
                    return this.settings.create &&
                        "multi" === this.settings.mode &&
                        b === this.settings.delimiter
                        ? (this.createItem(), a.preventDefault(), !1)
                        : void 0;
                },
                onKeyDown: function (a) {
                    var b = (a.target === this.$control_input[0], this);
                    if (b.isLocked) return void (a.keyCode !== u && a.preventDefault());
                    switch (a.keyCode) {
                        case g:
                            if (b.isCmdDown) return void b.selectAll();
                            break;
                        case i:
                            return void (
                                b.isOpen && (a.preventDefault(), a.stopPropagation(), b.close())
                            );
                        case o:
                            if (!a.ctrlKey || a.altKey) break;
                        case n:
                            if (!b.isOpen && b.hasOptions) b.open();
                            else if (b.$activeOption) {
                                b.ignoreHover = !0;
                                var c = b.getAdjacentOption(b.$activeOption, 1);
                                c.length && b.setActiveOption(c, !0, !0);
                            }
                            return void a.preventDefault();
                        case l:
                            if (!a.ctrlKey || a.altKey) break;
                        case k:
                            if (b.$activeOption) {
                                b.ignoreHover = !0;
                                var d = b.getAdjacentOption(b.$activeOption, -1);
                                d.length && b.setActiveOption(d, !0, !0);
                            }
                            return void a.preventDefault();
                        case h:
                            return void (
                                b.isOpen &&
                                b.$activeOption &&
                                (b.onOptionSelect({ currentTarget: b.$activeOption }),
                                    a.preventDefault())
                            );
                        case j:
                            return void b.advanceSelection(-1, a);
                        case m:
                            return void b.advanceSelection(1, a);
                        case u:
                            return (
                                b.settings.selectOnTab &&
                                b.isOpen &&
                                b.$activeOption &&
                                (b.onOptionSelect({ currentTarget: b.$activeOption }),
                                    b.isFull() || a.preventDefault()),
                                void (b.settings.create && b.createItem() && a.preventDefault())
                            );
                        case p:
                        case q:
                            return void b.deleteSelection(a);
                    }
                    return (!b.isFull() && !b.isInputHidden) ||
                        (f ? a.metaKey : a.ctrlKey)
                        ? void 0
                        : void a.preventDefault();
                },
                onKeyUp: function (a) {
                    var b = this;
                    if (b.isLocked) return a && a.preventDefault();
                    var c = b.$control_input.val() || "";
                    b.lastValue !== c &&
                        ((b.lastValue = c),
                            b.onSearchChange(c),
                            b.refreshOptions(),
                            b.trigger("type", c));
                },
                onSearchChange: function (a) {
                    var b = this,
                        c = b.settings.load;
                    c &&
                        (b.loadedSearches.hasOwnProperty(a) ||
                            ((b.loadedSearches[a] = !0),
                                b.load(function (d) {
                                    c.apply(b, [a, d]);
                                })));
                },
                onFocus: function (a) {
                    var b = this,
                        c = b.isFocused;
                    return b.isDisabled
                        ? (b.blur(), a && a.preventDefault(), !1)
                        : void (
                            b.ignoreFocus ||
                            ((b.isFocused = !0),
                                "focus" === b.settings.preload && b.onSearchChange(""),
                                c || b.trigger("focus"),
                                b.$activeItems.length ||
                                (b.showInput(),
                                    b.setActiveItem(null),
                                    b.refreshOptions(!!b.settings.openOnFocus)),
                                b.refreshState())
                        );
                },
                onBlur: function (a, b) {
                    var c = this;
                    if (c.isFocused && ((c.isFocused = !1), !c.ignoreFocus)) {
                        if (
                            !c.ignoreBlur &&
                            document.activeElement === c.$dropdown_content[0]
                        )
                            return (c.ignoreBlur = !0), void c.onFocus(a);
                        var d = function () {
                            c.close(),
                                c.setTextboxValue(""),
                                c.setActiveItem(null),
                                c.setActiveOption(null),
                                c.setCaret(c.items.length),
                                c.refreshState(),
                                b && b.focus && b.focus(),
                                (c.ignoreFocus = !1),
                                c.trigger("blur");
                        };
                        (c.ignoreFocus = !0),
                            c.settings.create && c.settings.createOnBlur
                                ? c.createItem(null, !1, d)
                                : d();
                    }
                },
                onOptionHover: function (a) {
                    this.ignoreHover || this.setActiveOption(a.currentTarget, !1);
                },
                onOptionSelect: function (b) {
                    var c,
                        d,
                        e = this;
                    b.preventDefault && (b.preventDefault(), b.stopPropagation()),
                        (d = a(b.currentTarget)),
                        d.hasClass("create")
                            ? e.createItem(null, function () {
                                e.settings.closeAfterSelect && e.close();
                            })
                            : ((c = d.attr("data-value")),
                                "undefined" != typeof c &&
                                ((e.lastQuery = null),
                                    e.setTextboxValue(""),
                                    e.addItem(c),
                                    e.settings.closeAfterSelect
                                        ? e.close()
                                        : !e.settings.hideSelected &&
                                        b.type &&
                                        /mouse/.test(b.type) &&
                                        e.setActiveOption(e.getOption(c))));
                },
                onItemSelect: function (a) {
                    var b = this;
                    b.isLocked ||
                        ("multi" === b.settings.mode &&
                            (a.preventDefault(), b.setActiveItem(a.currentTarget, a)));
                },
                load: function (a) {
                    var b = this,
                        c = b.$wrapper.addClass(b.settings.loadingClass);
                    b.loading++,
                        a.apply(b, [
                            function (a) {
                                (b.loading = Math.max(b.loading - 1, 0)),
                                    a &&
                                    a.length &&
                                    (b.addOption(a),
                                        b.refreshOptions(b.isFocused && !b.isInputHidden)),
                                    b.loading || c.removeClass(b.settings.loadingClass),
                                    b.trigger("load", a);
                            },
                        ]);
                },
                setTextboxValue: function (a) {
                    var b = this.$control_input,
                        c = b.val() !== a;
                    c && (b.val(a).triggerHandler("update"), (this.lastValue = a));
                },
                getValue: function () {
                    return this.tagType === v && this.$input.attr("multiple")
                        ? this.items
                        : this.items.join(this.settings.delimiter);
                },
                setValue: function (a, b) {
                    var c = b ? [] : ["change"];
                    E(this, c, function () {
                        this.clear(b), this.addItems(a, b);
                    });
                },
                setActiveItem: function (b, c) {
                    var d,
                        e,
                        f,
                        g,
                        h,
                        i,
                        j,
                        k,
                        l = this;
                    if ("single" !== l.settings.mode) {
                        if (((b = a(b)), !b.length))
                            return (
                                a(l.$activeItems).removeClass("active"),
                                (l.$activeItems = []),
                                void (l.isFocused && l.showInput())
                            );
                        if (
                            ((d = c && c.type.toLowerCase()),
                                "mousedown" === d && l.isShiftDown && l.$activeItems.length)
                        ) {
                            for (
                                k = l.$control.children(".active:last"),
                                g = Array.prototype.indexOf.apply(l.$control[0].childNodes, [
                                    k[0],
                                ]),
                                h = Array.prototype.indexOf.apply(l.$control[0].childNodes, [
                                    b[0],
                                ]),
                                g > h && ((j = g), (g = h), (h = j)),
                                e = g;
                                e <= h;
                                e++
                            )
                                (i = l.$control[0].childNodes[e]),
                                    l.$activeItems.indexOf(i) === -1 &&
                                    (a(i).addClass("active"), l.$activeItems.push(i));
                            c.preventDefault();
                        } else
                            ("mousedown" === d && l.isCtrlDown) ||
                                ("keydown" === d && this.isShiftDown)
                                ? b.hasClass("active")
                                    ? ((f = l.$activeItems.indexOf(b[0])),
                                        l.$activeItems.splice(f, 1),
                                        b.removeClass("active"))
                                    : l.$activeItems.push(b.addClass("active")[0])
                                : (a(l.$activeItems).removeClass("active"),
                                    (l.$activeItems = [b.addClass("active")[0]]));
                        l.hideInput(), this.isFocused || l.focus();
                    }
                },
                setActiveOption: function (b, c, d) {
                    var e,
                        f,
                        g,
                        h,
                        i,
                        j = this;
                    j.$activeOption && j.$activeOption.removeClass("active"),
                        (j.$activeOption = null),
                        (b = a(b)),
                        b.length &&
                        ((j.$activeOption = b.addClass("active")),
                            (!c && y(c)) ||
                            ((e = j.$dropdown_content.height()),
                                (f = j.$activeOption.outerHeight(!0)),
                                (c = j.$dropdown_content.scrollTop() || 0),
                                (g =
                                    j.$activeOption.offset().top -
                                    j.$dropdown_content.offset().top +
                                    c),
                                (h = g),
                                (i = g - e + f),
                                g + f > e + c
                                    ? j.$dropdown_content
                                        .stop()
                                        .animate(
                                            { scrollTop: i },
                                            d ? j.settings.scrollDuration : 0
                                        )
                                    : g < c &&
                                    j.$dropdown_content
                                        .stop()
                                        .animate(
                                            { scrollTop: h },
                                            d ? j.settings.scrollDuration : 0
                                        )));
                },
                selectAll: function () {
                    var a = this;
                    "single" !== a.settings.mode &&
                        ((a.$activeItems = Array.prototype.slice.apply(
                            a.$control.children(":not(input)").addClass("active")
                        )),
                            a.$activeItems.length && (a.hideInput(), a.close()),
                            a.focus());
                },
                hideInput: function () {
                    var a = this;
                    a.setTextboxValue(""),
                        a.$control_input.css({
                            opacity: 0,
                            position: "absolute",
                            left: a.rtl ? 1e4 : -1e4,
                        }),
                        (a.isInputHidden = !0);
                },
                showInput: function () {
                    this.$control_input.css({
                        opacity: 1,
                        position: "relative",
                        left: 0,
                    }),
                        (this.isInputHidden = !1);
                },
                focus: function () {
                    var a = this;
                    a.isDisabled ||
                        ((a.ignoreFocus = !0),
                            a.$control_input[0].focus(),
                            window.setTimeout(function () {
                                (a.ignoreFocus = !1), a.onFocus();
                            }, 0));
                },
                blur: function (a) {
                    this.$control_input[0].blur(), this.onBlur(null, a);
                },
                getScoreFunction: function (a) {
                    return this.sifter.getScoreFunction(a, this.getSearchOptions());
                },
                getSearchOptions: function () {
                    var a = this.settings,
                        b = a.sortField;
                    return (
                        "string" == typeof b && (b = [{ field: b }]),
                        { fields: a.searchField, conjunction: a.searchConjunction, sort: b }
                    );
                },
                search: function (b) {
                    var c,
                        d,
                        e,
                        f = this,
                        g = f.settings,
                        h = this.getSearchOptions();
                    if (
                        g.score &&
                        ((e = f.settings.score.apply(this, [b])), "function" != typeof e)
                    )
                        throw new Error(
                            'Selectize "score" setting must be a function that returns a function'
                        );
                    if (
                        (b !== f.lastQuery
                            ? ((f.lastQuery = b),
                                (d = f.sifter.search(b, a.extend(h, { score: e }))),
                                (f.currentResults = d))
                            : (d = a.extend(!0, {}, f.currentResults)),
                            g.hideSelected)
                    )
                        for (c = d.items.length - 1; c >= 0; c--)
                            f.items.indexOf(z(d.items[c].id)) !== -1 && d.items.splice(c, 1);
                    return d;
                },
                refreshOptions: function (b) {
                    var c, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s;
                    "undefined" == typeof b && (b = !0);
                    var t = this,
                        u = a.trim(t.$control_input.val()),
                        v = t.search(u),
                        w = t.$dropdown_content,
                        x = t.$activeOption && z(t.$activeOption.attr("data-value"));
                    for (
                        g = v.items.length,
                        "number" == typeof t.settings.maxOptions &&
                        (g = Math.min(g, t.settings.maxOptions)),
                        h = {},
                        i = [],
                        c = 0;
                        c < g;
                        c++
                    )
                        for (
                            j = t.options[v.items[c].id],
                            k = t.render("option", j),
                            l = j[t.settings.optgroupField] || "",
                            m = a.isArray(l) ? l : [l],
                            e = 0,
                            f = m && m.length;
                            e < f;
                            e++
                        )
                            (l = m[e]),
                                t.optgroups.hasOwnProperty(l) || (l = ""),
                                h.hasOwnProperty(l) ||
                                ((h[l] = document.createDocumentFragment()), i.push(l)),
                                h[l].appendChild(k);
                    for (
                        this.settings.lockOptgroupOrder &&
                        i.sort(function (a, b) {
                            var c = t.optgroups[a].$order || 0,
                                d = t.optgroups[b].$order || 0;
                            return c - d;
                        }),
                        n = document.createDocumentFragment(),
                        c = 0,
                        g = i.length;
                        c < g;
                        c++
                    )
                        (l = i[c]),
                            t.optgroups.hasOwnProperty(l) && h[l].childNodes.length
                                ? ((o = document.createDocumentFragment()),
                                    o.appendChild(t.render("optgroup_header", t.optgroups[l])),
                                    o.appendChild(h[l]),
                                    n.appendChild(
                                        t.render(
                                            "optgroup",
                                            a.extend({}, t.optgroups[l], { html: K(o), dom: o })
                                        )
                                    ))
                                : n.appendChild(h[l]);
                    if (
                        (w.html(n),
                            t.settings.highlight && v.query.length && v.tokens.length)
                    )
                        for (w.removeHighlight(), c = 0, g = v.tokens.length; c < g; c++)
                            d(w, v.tokens[c].regex);
                    if (!t.settings.hideSelected)
                        for (c = 0, g = t.items.length; c < g; c++)
                            t.getOption(t.items[c]).addClass("selected");
                    (p = t.canCreate(u)),
                        p &&
                        (w.prepend(t.render("option_create", { input: u })),
                            (s = a(w[0].childNodes[0]))),
                        (t.hasOptions = v.items.length > 0 || p),
                        t.hasOptions
                            ? (v.items.length > 0
                                ? ((r = x && t.getOption(x)),
                                    r && r.length
                                        ? (q = r)
                                        : "single" === t.settings.mode &&
                                        t.items.length &&
                                        (q = t.getOption(t.items[0])),
                                    (q && q.length) ||
                                    (q =
                                        s && !t.settings.addPrecedence
                                            ? t.getAdjacentOption(s, 1)
                                            : w.find("[data-selectable]:first")))
                                : (q = s),
                                t.setActiveOption(q),
                                b && !t.isOpen && t.open())
                            : (t.setActiveOption(null), b && t.isOpen && t.close());
                },
                addOption: function (b) {
                    var c,
                        d,
                        e,
                        f = this;
                    if (a.isArray(b))
                        for (c = 0, d = b.length; c < d; c++) f.addOption(b[c]);
                    else
                        (e = f.registerOption(b)) &&
                            ((f.userOptions[e] = !0),
                                (f.lastQuery = null),
                                f.trigger("option_add", e, b));
                },
                registerOption: function (a) {
                    var b = z(a[this.settings.valueField]);
                    return (
                        "undefined" != typeof b &&
                        null !== b &&
                        !this.options.hasOwnProperty(b) &&
                        ((a.$order = a.$order || ++this.order), (this.options[b] = a), b)
                    );
                },
                registerOptionGroup: function (a) {
                    var b = z(a[this.settings.optgroupValueField]);
                    return (
                        !!b &&
                        ((a.$order = a.$order || ++this.order), (this.optgroups[b] = a), b)
                    );
                },
                addOptionGroup: function (a, b) {
                    (b[this.settings.optgroupValueField] = a),
                        (a = this.registerOptionGroup(b)) &&
                        this.trigger("optgroup_add", a, b);
                },
                removeOptionGroup: function (a) {
                    this.optgroups.hasOwnProperty(a) &&
                        (delete this.optgroups[a],
                            (this.renderCache = {}),
                            this.trigger("optgroup_remove", a));
                },
                clearOptionGroups: function () {
                    (this.optgroups = {}),
                        (this.renderCache = {}),
                        this.trigger("optgroup_clear");
                },
                updateOption: function (b, c) {
                    var d,
                        e,
                        f,
                        g,
                        h,
                        i,
                        j,
                        k = this;
                    if (
                        ((b = z(b)),
                            (f = z(c[k.settings.valueField])),
                            null !== b && k.options.hasOwnProperty(b))
                    ) {
                        if ("string" != typeof f)
                            throw new Error("Value must be set in option data");
                        (j = k.options[b].$order),
                            f !== b &&
                            (delete k.options[b],
                                (g = k.items.indexOf(b)),
                                g !== -1 && k.items.splice(g, 1, f)),
                            (c.$order = c.$order || j),
                            (k.options[f] = c),
                            (h = k.renderCache.item),
                            (i = k.renderCache.option),
                            h && (delete h[b], delete h[f]),
                            i && (delete i[b], delete i[f]),
                            k.items.indexOf(f) !== -1 &&
                            ((d = k.getItem(b)),
                                (e = a(k.render("item", c))),
                                d.hasClass("active") && e.addClass("active"),
                                d.replaceWith(e)),
                            (k.lastQuery = null),
                            k.isOpen && k.refreshOptions(!1);
                    }
                },
                removeOption: function (a, b) {
                    var c = this;
                    a = z(a);
                    var d = c.renderCache.item,
                        e = c.renderCache.option;
                    d && delete d[a],
                        e && delete e[a],
                        delete c.userOptions[a],
                        delete c.options[a],
                        (c.lastQuery = null),
                        c.trigger("option_remove", a),
                        c.removeItem(a, b);
                },
                clearOptions: function () {
                    var a = this;
                    (a.loadedSearches = {}),
                        (a.userOptions = {}),
                        (a.renderCache = {}),
                        (a.options = a.sifter.items = {}),
                        (a.lastQuery = null),
                        a.trigger("option_clear"),
                        a.clear();
                },
                getOption: function (a) {
                    return this.getElementWithValue(
                        a,
                        this.$dropdown_content.find("[data-selectable]")
                    );
                },
                getAdjacentOption: function (b, c) {
                    var d = this.$dropdown.find("[data-selectable]"),
                        e = d.index(b) + c;
                    return e >= 0 && e < d.length ? d.eq(e) : a();
                },
                getElementWithValue: function (b, c) {
                    if (((b = z(b)), "undefined" != typeof b && null !== b))
                        for (var d = 0, e = c.length; d < e; d++)
                            if (c[d].getAttribute("data-value") === b) return a(c[d]);
                    return a();
                },
                getItem: function (a) {
                    return this.getElementWithValue(a, this.$control.children());
                },
                addItems: function (b, c) {
                    for (var d = a.isArray(b) ? b : [b], e = 0, f = d.length; e < f; e++)
                        (this.isPending = e < f - 1), this.addItem(d[e], c);
                },
                addItem: function (b, c) {
                    var d = c ? [] : ["change"];
                    E(this, d, function () {
                        var d,
                            e,
                            f,
                            g,
                            h,
                            i = this,
                            j = i.settings.mode;
                        return (
                            (b = z(b)),
                            i.items.indexOf(b) !== -1
                                ? void ("single" === j && i.close())
                                : void (
                                    i.options.hasOwnProperty(b) &&
                                    ("single" === j && i.clear(c),
                                        ("multi" === j && i.isFull()) ||
                                        ((d = a(i.render("item", i.options[b]))),
                                            (h = i.isFull()),
                                            i.items.splice(i.caretPos, 0, b),
                                            i.insertAtCaret(d),
                                            (!i.isPending || (!h && i.isFull())) && i.refreshState(),
                                            i.isSetup &&
                                            ((f = i.$dropdown_content.find("[data-selectable]")),
                                                i.isPending ||
                                                ((e = i.getOption(b)),
                                                    (g = i.getAdjacentOption(e, 1).attr("data-value")),
                                                    i.refreshOptions(i.isFocused && "single" !== j),
                                                    g && i.setActiveOption(i.getOption(g))),
                                                !f.length || i.isFull()
                                                    ? i.close()
                                                    : i.positionDropdown(),
                                                i.updatePlaceholder(),
                                                i.trigger("item_add", b, d),
                                                i.updateOriginalInput({ silent: c }))))
                                )
                        );
                    });
                },
                removeItem: function (b, c) {
                    var d,
                        e,
                        f,
                        g = this;
                    (d = b instanceof a ? b : g.getItem(b)),
                        (b = z(d.attr("data-value"))),
                        (e = g.items.indexOf(b)),
                        e !== -1 &&
                        (d.remove(),
                            d.hasClass("active") &&
                            ((f = g.$activeItems.indexOf(d[0])),
                                g.$activeItems.splice(f, 1)),
                            g.items.splice(e, 1),
                            (g.lastQuery = null),
                            !g.settings.persist &&
                            g.userOptions.hasOwnProperty(b) &&
                            g.removeOption(b, c),
                            e < g.caretPos && g.setCaret(g.caretPos - 1),
                            g.refreshState(),
                            g.updatePlaceholder(),
                            g.updateOriginalInput({ silent: c }),
                            g.positionDropdown(),
                            g.trigger("item_remove", b, d));
                },
                createItem: function (b, c) {
                    var d = this,
                        e = d.caretPos;
                    b = b || a.trim(d.$control_input.val() || "");
                    var f = arguments[arguments.length - 1];
                    if (
                        ("function" != typeof f && (f = function () { }),
                            "boolean" != typeof c && (c = !0),
                            !d.canCreate(b))
                    )
                        return f(), !1;
                    d.lock();
                    var g =
                        "function" == typeof d.settings.create
                            ? this.settings.create
                            : function (a) {
                                var b = {};
                                return (
                                    (b[d.settings.labelField] = a),
                                    (b[d.settings.valueField] = a),
                                    b
                                );
                            },
                        h = C(function (a) {
                            if ((d.unlock(), !a || "object" != typeof a)) return f();
                            var b = z(a[d.settings.valueField]);
                            return "string" != typeof b
                                ? f()
                                : (d.setTextboxValue(""),
                                    d.addOption(a),
                                    d.setCaret(e),
                                    d.addItem(b),
                                    d.refreshOptions(c && "single" !== d.settings.mode),
                                    void f(a));
                        }),
                        i = g.apply(this, [b, h]);
                    return "undefined" != typeof i && h(i), !0;
                },
                refreshItems: function () {
                    (this.lastQuery = null),
                        this.isSetup && this.addItem(this.items),
                        this.refreshState(),
                        this.updateOriginalInput();
                },
                refreshState: function () {
                    this.refreshValidityState(), this.refreshClasses();
                },
                refreshValidityState: function () {
                    if (!this.isRequired) return !1;
                    var a = !this.items.length;
                    (this.isInvalid = a),
                        this.$control_input.prop("required", a),
                        this.$input.prop("required", !a);
                },
                refreshClasses: function () {
                    var b = this,
                        c = b.isFull(),
                        d = b.isLocked;
                    b.$wrapper.toggleClass("rtl", b.rtl),
                        b.$control
                            .toggleClass("focus", b.isFocused)
                            .toggleClass("disabled", b.isDisabled)
                            .toggleClass("required", b.isRequired)
                            .toggleClass("invalid", b.isInvalid)
                            .toggleClass("locked", d)
                            .toggleClass("full", c)
                            .toggleClass("not-full", !c)
                            .toggleClass("input-active", b.isFocused && !b.isInputHidden)
                            .toggleClass("dropdown-active", b.isOpen)
                            .toggleClass("has-options", !a.isEmptyObject(b.options))
                            .toggleClass("has-items", b.items.length > 0),
                        b.$control_input.data("grow", !c && !d);
                },
                isFull: function () {
                    return (
                        null !== this.settings.maxItems &&
                        this.items.length >= this.settings.maxItems
                    );
                },
                updateOriginalInput: function (a) {
                    var b,
                        c,
                        d,
                        e,
                        f = this;
                    if (((a = a || {}), f.tagType === v)) {
                        for (d = [], b = 0, c = f.items.length; b < c; b++)
                            (e = f.options[f.items[b]][f.settings.labelField] || ""),
                                d.push(
                                    '<option value="' +
                                    A(f.items[b]) +
                                    '" selected="selected">' +
                                    A(e) +
                                    "</option>"
                                );
                        d.length ||
                            this.$input.attr("multiple") ||
                            d.push('<option value="" selected="selected"></option>'),
                            f.$input.html(d.join(""));
                    } else
                        f.$input.val(f.getValue()), f.$input.attr("value", f.$input.val());
                    f.isSetup && (a.silent || f.trigger("change", f.$input.val()));
                },
                updatePlaceholder: function () {
                    if (this.settings.placeholder) {
                        var a = this.$control_input;
                        this.items.length
                            ? a.removeAttr("placeholder")
                            : a.attr("placeholder", this.settings.placeholder),
                            a.triggerHandler("update", { force: !0 });
                    }
                },
                open: function () {
                    var a = this;
                    a.isLocked ||
                        a.isOpen ||
                        ("multi" === a.settings.mode && a.isFull()) ||
                        (a.focus(),
                            (a.isOpen = !0),
                            a.refreshState(),
                            a.$dropdown.css({ visibility: "hidden", display: "block" }),
                            a.positionDropdown(),
                            a.$dropdown.css({ visibility: "visible" }),
                            a.trigger("dropdown_open", a.$dropdown));
                },
                close: function () {
                    var a = this,
                        b = a.isOpen;
                    "single" === a.settings.mode &&
                        a.items.length &&
                        (a.hideInput(), a.$control_input.blur()),
                        (a.isOpen = !1),
                        a.$dropdown.hide(),
                        a.setActiveOption(null),
                        a.refreshState(),
                        b && a.trigger("dropdown_close", a.$dropdown);
                },
                positionDropdown: function () {
                    var a = this.$control,
                        b =
                            "body" === this.settings.dropdownParent
                                ? a.offset()
                                : a.position();
                    (b.top += a.outerHeight(!0)),
                        this.$dropdown.css({
                            width: a.outerWidth(),
                            top: b.top,
                            left: b.left,
                        });
                },
                clear: function (a) {
                    var b = this;
                    b.items.length &&
                        (b.$control.children(":not(input)").remove(),
                            (b.items = []),
                            (b.lastQuery = null),
                            b.setCaret(0),
                            b.setActiveItem(null),
                            b.updatePlaceholder(),
                            b.updateOriginalInput({ silent: a }),
                            b.refreshState(),
                            b.showInput(),
                            b.trigger("clear"));
                },
                insertAtCaret: function (b) {
                    var c = Math.min(this.caretPos, this.items.length);
                    0 === c
                        ? this.$control.prepend(b)
                        : a(this.$control[0].childNodes[c]).before(b),
                        this.setCaret(c + 1);
                },
                deleteSelection: function (b) {
                    var c,
                        d,
                        e,
                        f,
                        g,
                        h,
                        i,
                        j,
                        k,
                        l = this;
                    if (
                        ((e = b && b.keyCode === p ? -1 : 1),
                            (f = G(l.$control_input[0])),
                            l.$activeOption &&
                            !l.settings.hideSelected &&
                            (i = l.getAdjacentOption(l.$activeOption, -1).attr("data-value")),
                            (g = []),
                            l.$activeItems.length)
                    ) {
                        for (
                            k = l.$control.children(".active:" + (e > 0 ? "last" : "first")),
                            h = l.$control.children(":not(input)").index(k),
                            e > 0 && h++,
                            c = 0,
                            d = l.$activeItems.length;
                            c < d;
                            c++
                        )
                            g.push(a(l.$activeItems[c]).attr("data-value"));
                        b && (b.preventDefault(), b.stopPropagation());
                    } else
                        (l.isFocused || "single" === l.settings.mode) &&
                            l.items.length &&
                            (e < 0 && 0 === f.start && 0 === f.length
                                ? g.push(l.items[l.caretPos - 1])
                                : e > 0 &&
                                f.start === l.$control_input.val().length &&
                                g.push(l.items[l.caretPos]));
                    if (
                        !g.length ||
                        ("function" == typeof l.settings.onDelete &&
                            l.settings.onDelete.apply(l, [g]) === !1)
                    )
                        return !1;
                    for ("undefined" != typeof h && l.setCaret(h); g.length;)
                        l.removeItem(g.pop());
                    return (
                        l.showInput(),
                        l.positionDropdown(),
                        l.refreshOptions(!0),
                        i && ((j = l.getOption(i)), j.length && l.setActiveOption(j)),
                        !0
                    );
                },
                advanceSelection: function (a, b) {
                    var c,
                        d,
                        e,
                        f,
                        g,
                        h,
                        i = this;
                    0 !== a &&
                        (i.rtl && (a *= -1),
                            (c = a > 0 ? "last" : "first"),
                            (d = G(i.$control_input[0])),
                            i.isFocused && !i.isInputHidden
                                ? ((f = i.$control_input.val().length),
                                    (g = a < 0 ? 0 === d.start && 0 === d.length : d.start === f),
                                    g && !f && i.advanceCaret(a, b))
                                : ((h = i.$control.children(".active:" + c)),
                                    h.length &&
                                    ((e = i.$control.children(":not(input)").index(h)),
                                        i.setActiveItem(null),
                                        i.setCaret(a > 0 ? e + 1 : e))));
                },
                advanceCaret: function (a, b) {
                    var c,
                        d,
                        e = this;
                    0 !== a &&
                        ((c = a > 0 ? "next" : "prev"),
                            e.isShiftDown
                                ? ((d = e.$control_input[c]()),
                                    d.length &&
                                    (e.hideInput(), e.setActiveItem(d), b && b.preventDefault()))
                                : e.setCaret(e.caretPos + a));
                },
                setCaret: function (b) {
                    var c = this;
                    if (
                        ((b =
                            "single" === c.settings.mode
                                ? c.items.length
                                : Math.max(0, Math.min(c.items.length, b))),
                            !c.isPending)
                    ) {
                        var d, e, f, g;
                        for (
                            f = c.$control.children(":not(input)"), d = 0, e = f.length;
                            d < e;
                            d++
                        )
                            (g = a(f[d]).detach()),
                                d < b ? c.$control_input.before(g) : c.$control.append(g);
                    }
                    c.caretPos = b;
                },
                lock: function () {
                    this.close(), (this.isLocked = !0), this.refreshState();
                },
                unlock: function () {
                    (this.isLocked = !1), this.refreshState();
                },
                disable: function () {
                    var a = this;
                    a.$input.prop("disabled", !0),
                        a.$control_input.prop("disabled", !0).prop("tabindex", -1),
                        (a.isDisabled = !0),
                        a.lock();
                },
                enable: function () {
                    var a = this;
                    a.$input.prop("disabled", !1),
                        a.$control_input.prop("disabled", !1).prop("tabindex", a.tabIndex),
                        (a.isDisabled = !1),
                        a.unlock();
                },
                destroy: function () {
                    var b = this,
                        c = b.eventNS,
                        d = b.revertSettings;
                    b.trigger("destroy"),
                        b.off(),
                        b.$wrapper.remove(),
                        b.$dropdown.remove(),
                        b.$input
                            .html("")
                            .append(d.$children)
                            .removeAttr("tabindex")
                            .removeClass("selectized")
                            .attr({ tabindex: d.tabindex })
                            .show(),
                        b.$control_input.removeData("grow"),
                        b.$input.removeData("selectize"),
                        a(window).off(c),
                        a(document).off(c),
                        a(document.body).off(c),
                        delete b.$input[0].selectize;
                },
                render: function (b, c) {
                    var d,
                        e,
                        f = "",
                        g = !1,
                        h = this;
                    return (
                        ("option" !== b && "item" !== b) ||
                        ((d = z(c[h.settings.valueField])), (g = !!d)),
                        g &&
                            (y(h.renderCache[b]) || (h.renderCache[b] = {}),
                                h.renderCache[b].hasOwnProperty(d))
                            ? h.renderCache[b][d]
                            : ((f = a(h.settings.render[b].apply(this, [c, A]))),
                                "option" === b || "option_create" === b
                                    ? f.attr("data-selectable", "")
                                    : "optgroup" === b &&
                                    ((e = c[h.settings.optgroupValueField] || ""),
                                        f.attr("data-group", e)),
                                ("option" !== b && "item" !== b) ||
                                f.attr("data-value", d || ""),
                                g && (h.renderCache[b][d] = f[0]),
                                f[0])
                    );
                },
                clearCache: function (a) {
                    var b = this;
                    "undefined" == typeof a
                        ? (b.renderCache = {})
                        : delete b.renderCache[a];
                },
                canCreate: function (a) {
                    var b = this;
                    if (!b.settings.create) return !1;
                    var c = b.settings.createFilter;
                    return (
                        a.length &&
                        ("function" != typeof c || c.apply(b, [a])) &&
                        ("string" != typeof c || new RegExp(c).test(a)) &&
                        (!(c instanceof RegExp) || c.test(a))
                    );
                },
            }),
            (M.count = 0),
            (M.defaults = {
                options: [],
                optgroups: [],
                plugins: [],
                delimiter: ",",
                splitOn: null,
                persist: !0,
                diacritics: !0,
                create: !1,
                createOnBlur: !1,
                createFilter: null,
                highlight: !0,
                openOnFocus: !0,
                maxOptions: 1e3,
                maxItems: null,
                hideSelected: null,
                addPrecedence: !1,
                selectOnTab: !1,
                preload: !1,
                allowEmptyOption: !1,
                closeAfterSelect: !1,
                scrollDuration: 60,
                loadThrottle: 300,
                loadingClass: "loading",
                dataAttr: "data-data",
                optgroupField: "optgroup",
                valueField: "value",
                labelField: "text",
                optgroupLabelField: "label",
                optgroupValueField: "value",
                lockOptgroupOrder: !1,
                sortField: "$order",
                searchField: ["text"],
                searchConjunction: "and",
                mode: null,
                wrapperClass: "selectize-control",
                inputClass: "selectize-input",
                dropdownClass: "selectize-dropdown",
                dropdownContentClass: "selectize-dropdown-content",
                dropdownParent: null,
                copyClassesToDropdown: !0,
                render: {},
            }),
            (a.fn.selectize = function (b) {
                var c = a.fn.selectize.defaults,
                    d = a.extend({}, c, b),
                    e = d.dataAttr,
                    f = d.labelField,
                    g = d.valueField,
                    h = d.optgroupField,
                    i = d.optgroupLabelField,
                    j = d.optgroupValueField,
                    k = function (b, c) {
                        var h,
                            i,
                            j,
                            k,
                            l = b.attr(e);
                        if (l)
                            for (
                                c.options = JSON.parse(l), h = 0, i = c.options.length;
                                h < i;
                                h++
                            )
                                c.items.push(c.options[h][g]);
                        else {
                            var m = a.trim(b.val() || "");
                            if (!d.allowEmptyOption && !m.length) return;
                            for (j = m.split(d.delimiter), h = 0, i = j.length; h < i; h++)
                                (k = {}), (k[f] = j[h]), (k[g] = j[h]), c.options.push(k);
                            c.items = j;
                        }
                    },
                    l = function (b, c) {
                        var k,
                            l,
                            m,
                            n,
                            o = c.options,
                            p = {},
                            q = function (a) {
                                var b = e && a.attr(e);
                                return "string" == typeof b && b.length ? JSON.parse(b) : null;
                            },
                            r = function (b, e) {
                                b = a(b);
                                var i = z(b.val());
                                if (i || d.allowEmptyOption)
                                    if (p.hasOwnProperty(i)) {
                                        if (e) {
                                            var j = p[i][h];
                                            j
                                                ? a.isArray(j)
                                                    ? j.push(e)
                                                    : (p[i][h] = [j, e])
                                                : (p[i][h] = e);
                                        }
                                    } else {
                                        var k = q(b) || {};
                                        (k[f] = k[f] || b.text()),
                                            (k[g] = k[g] || i),
                                            (k[h] = k[h] || e),
                                            (p[i] = k),
                                            o.push(k),
                                            b.is(":selected") && c.items.push(i);
                                    }
                            },
                            s = function (b) {
                                var d, e, f, g, h;
                                for (
                                    b = a(b),
                                    f = b.attr("label"),
                                    f &&
                                    ((g = q(b) || {}),
                                        (g[i] = f),
                                        (g[j] = f),
                                        c.optgroups.push(g)),
                                    h = a("option", b),
                                    d = 0,
                                    e = h.length;
                                    d < e;
                                    d++
                                )
                                    r(h[d], f);
                            };
                        for (
                            c.maxItems = b.attr("multiple") ? null : 1,
                            n = b.children(),
                            k = 0,
                            l = n.length;
                            k < l;
                            k++
                        )
                            (m = n[k].tagName.toLowerCase()),
                                "optgroup" === m ? s(n[k]) : "option" === m && r(n[k]);
                    };
                return this.each(function () {
                    if (!this.selectize) {
                        var e,
                            f = a(this),
                            g = this.tagName.toLowerCase(),
                            h = f.attr("placeholder") || f.attr("data-placeholder");
                        h ||
                            d.allowEmptyOption ||
                            (h = f.children('option[value=""]').text());
                        var i = { placeholder: h, options: [], optgroups: [], items: [] };
                        "select" === g ? l(f, i) : k(f, i),
                            (e = new M(f, a.extend(!0, {}, c, i, b)));
                    }
                });
            }),
            (a.fn.selectize.defaults = M.defaults),
            (a.fn.selectize.support = { validity: x }),
            M.define("drag_drop", function (b) {
                if (!a.fn.sortable)
                    throw new Error(
                        'The "drag_drop" plugin requires jQuery UI "sortable".'
                    );
                if ("multi" === this.settings.mode) {
                    var c = this;
                    (c.lock = (function () {
                        var a = c.lock;
                        return function () {
                            var b = c.$control.data("sortable");
                            return b && b.disable(), a.apply(c, arguments);
                        };
                    })()),
                        (c.unlock = (function () {
                            var a = c.unlock;
                            return function () {
                                var b = c.$control.data("sortable");
                                return b && b.enable(), a.apply(c, arguments);
                            };
                        })()),
                        (c.setup = (function () {
                            var b = c.setup;
                            return function () {
                                b.apply(this, arguments);
                                var d = c.$control.sortable({
                                    items: "[data-value]",
                                    forcePlaceholderSize: !0,
                                    disabled: c.isLocked,
                                    start: function (a, b) {
                                        b.placeholder.css("width", b.helper.css("width")),
                                            d.css({ overflow: "visible" });
                                    },
                                    stop: function () {
                                        d.css({ overflow: "hidden" });
                                        var b = c.$activeItems ? c.$activeItems.slice() : null,
                                            e = [];
                                        d.children("[data-value]").each(function () {
                                            e.push(a(this).attr("data-value"));
                                        }),
                                            c.setValue(e),
                                            c.setActiveItem(b);
                                    },
                                });
                            };
                        })());
                }
            }),
            M.define("dropdown_header", function (b) {
                var c = this;
                (b = a.extend(
                    {
                        title: "Untitled",
                        headerClass: "selectize-dropdown-header",
                        titleRowClass: "selectize-dropdown-header-title",
                        labelClass: "selectize-dropdown-header-label",
                        closeClass: "selectize-dropdown-header-close",
                        html: function (a) {
                            return (
                                '<div class="' +
                                a.headerClass +
                                '"><div class="' +
                                a.titleRowClass +
                                '"><span class="' +
                                a.labelClass +
                                '">' +
                                a.title +
                                '</span><a href="javascript:void(0)" class="' +
                                a.closeClass +
                                '">&times;</a></div></div>'
                            );
                        },
                    },
                    b
                )),
                    (c.setup = (function () {
                        var d = c.setup;
                        return function () {
                            d.apply(c, arguments),
                                (c.$dropdown_header = a(b.html(b))),
                                c.$dropdown.prepend(c.$dropdown_header);
                        };
                    })());
            }),
            M.define("optgroup_columns", function (b) {
                var c = this;
                (b = a.extend({ equalizeWidth: !0, equalizeHeight: !0 }, b)),
                    (this.getAdjacentOption = function (b, c) {
                        var d = b.closest("[data-group]").find("[data-selectable]"),
                            e = d.index(b) + c;
                        return e >= 0 && e < d.length ? d.eq(e) : a();
                    }),
                    (this.onKeyDown = (function () {
                        var a = c.onKeyDown;
                        return function (b) {
                            var d, e, f, g;
                            return !this.isOpen || (b.keyCode !== j && b.keyCode !== m)
                                ? a.apply(this, arguments)
                                : ((c.ignoreHover = !0),
                                    (g = this.$activeOption.closest("[data-group]")),
                                    (d = g.find("[data-selectable]").index(this.$activeOption)),
                                    (g =
                                        b.keyCode === j
                                            ? g.prev("[data-group]")
                                            : g.next("[data-group]")),
                                    (f = g.find("[data-selectable]")),
                                    (e = f.eq(Math.min(f.length - 1, d))),
                                    void (e.length && this.setActiveOption(e)));
                        };
                    })());
                var d = function () {
                    var a,
                        b = d.width,
                        c = document;
                    return (
                        "undefined" == typeof b &&
                        ((a = c.createElement("div")),
                            (a.innerHTML =
                                '<div style="width:50px;height:50px;position:absolute;left:-50px;top:-50px;overflow:auto;"><div style="width:1px;height:100px;"></div></div>'),
                            (a = a.firstChild),
                            c.body.appendChild(a),
                            (b = d.width = a.offsetWidth - a.clientWidth),
                            c.body.removeChild(a)),
                        b
                    );
                },
                    e = function () {
                        var e, f, g, h, i, j, k;
                        if (
                            ((k = a("[data-group]", c.$dropdown_content)),
                                (f = k.length),
                                f && c.$dropdown_content.width())
                        ) {
                            if (b.equalizeHeight) {
                                for (g = 0, e = 0; e < f; e++)
                                    g = Math.max(g, k.eq(e).height());
                                k.css({ height: g });
                            }
                            b.equalizeWidth &&
                                ((j = c.$dropdown_content.innerWidth() - d()),
                                    (h = Math.round(j / f)),
                                    k.css({ width: h }),
                                    f > 1 &&
                                    ((i = j - h * (f - 1)), k.eq(f - 1).css({ width: i })));
                        }
                    };
                (b.equalizeHeight || b.equalizeWidth) &&
                    (B.after(this, "positionDropdown", e),
                        B.after(this, "refreshOptions", e));
            }),
            M.define("remove_button", function (b) {
                b = a.extend(
                    {
                        label: "&times;",
                        title: "Remove",
                        className: "remove",
                        append: !0,
                    },
                    b
                );
                var c = function (b, c) {
                    c.className = "remove-single";
                    var d = b,
                        e =
                            '<a href="javascript:void(0)" class="' +
                            c.className +
                            '" tabindex="-1" title="' +
                            A(c.title) +
                            '">' +
                            c.label +
                            "</a>",
                        f = function (a, b) {
                            return a + b;
                        };
                    b.setup = (function () {
                        var g = d.setup;
                        return function () {
                            if (c.append) {
                                var h = a(d.$input.context).attr("id"),
                                    i = (a("#" + h), d.settings.render.item);
                                d.settings.render.item = function (a) {
                                    return f(i.apply(b, arguments), e);
                                };
                            }
                            g.apply(b, arguments),
                                b.$control.on("click", "." + c.className, function (a) {
                                    a.preventDefault(), d.isLocked || d.clear();
                                });
                        };
                    })();
                },
                    d = function (b, c) {
                        var d = b,
                            e =
                                '<a href="javascript:void(0)" class="' +
                                c.className +
                                '" tabindex="-1" title="' +
                                A(c.title) +
                                '">' +
                                c.label +
                                "</a>",
                            f = function (a, b) {
                                var c = a.search(/(<\/[^>]+>\s*)$/);
                                return a.substring(0, c) + b + a.substring(c);
                            };
                        b.setup = (function () {
                            var g = d.setup;
                            return function () {
                                if (c.append) {
                                    var h = d.settings.render.item;
                                    d.settings.render.item = function (a) {
                                        return f(h.apply(b, arguments), e);
                                    };
                                }
                                g.apply(b, arguments),
                                    b.$control.on("click", "." + c.className, function (b) {
                                        if ((b.preventDefault(), !d.isLocked)) {
                                            var c = a(b.currentTarget).parent();
                                            d.setActiveItem(c),
                                                d.deleteSelection() && d.setCaret(d.items.length);
                                        }
                                    });
                            };
                        })();
                    };
                return "single" === this.settings.mode
                    ? void c(this, b)
                    : void d(this, b);
            }),
            M.define("restore_on_backspace", function (a) {
                var b = this;
                (a.text =
                    a.text ||
                    function (a) {
                        return a[this.settings.labelField];
                    }),
                    (this.onKeyDown = (function () {
                        var c = b.onKeyDown;
                        return function (b) {
                            var d, e;
                            return b.keyCode === p &&
                                "" === this.$control_input.val() &&
                                !this.$activeItems.length &&
                                ((d = this.caretPos - 1), d >= 0 && d < this.items.length)
                                ? ((e = this.options[this.items[d]]),
                                    this.deleteSelection(b) &&
                                    (this.setTextboxValue(a.text.apply(this, [e])),
                                        this.refreshOptions(!0)),
                                    void b.preventDefault())
                                : c.apply(this, arguments);
                        };
                    })());
            }),
            M
        );
    });
!(function (a) {
    "use strict";
    "function" == typeof define && define.amd
        ? define(["jquery"], a)
        : "undefined" != typeof exports
            ? (module.exports = a(require("jquery")))
            : a(jQuery);
})(function (a) {
    "use strict";
    var b = window.Slick || {};
    (b = (function () {
        function c(c, d) {
            var f,
                e = this;
            (e.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: a(c),
                appendDots: a(c),
                arrows: !0,
                asNavFor: null,
                prevArrow:
                    '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                nextArrow:
                    '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function (b, c) {
                    return a(
                        '<button type="button" data-role="none" role="button" tabindex="0" />'
                    ).text(c + 1);
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: 0.35,
                fade: !1,
                focusOnSelect: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3,
            }),
                (e.initials = {
                    animating: !1,
                    dragging: !1,
                    autoPlayTimer: null,
                    currentDirection: 0,
                    currentLeft: null,
                    currentSlide: 0,
                    direction: 1,
                    $dots: null,
                    listWidth: null,
                    listHeight: null,
                    loadIndex: 0,
                    $nextArrow: null,
                    $prevArrow: null,
                    slideCount: null,
                    slideWidth: null,
                    $slideTrack: null,
                    $slides: null,
                    sliding: !1,
                    slideOffset: 0,
                    swipeLeft: null,
                    $list: null,
                    touchObject: {},
                    transformsEnabled: !1,
                    unslicked: !1,
                }),
                a.extend(e, e.initials),
                (e.activeBreakpoint = null),
                (e.animType = null),
                (e.animProp = null),
                (e.breakpoints = []),
                (e.breakpointSettings = []),
                (e.cssTransitions = !1),
                (e.focussed = !1),
                (e.interrupted = !1),
                (e.hidden = "hidden"),
                (e.paused = !0),
                (e.positionProp = null),
                (e.respondTo = null),
                (e.rowCount = 1),
                (e.shouldClick = !0),
                (e.$slider = a(c)),
                (e.$slidesCache = null),
                (e.transformType = null),
                (e.transitionType = null),
                (e.visibilityChange = "visibilitychange"),
                (e.windowWidth = 0),
                (e.windowTimer = null),
                (f = a(c).data("slick") || {}),
                (e.options = a.extend({}, e.defaults, d, f)),
                (e.currentSlide = e.options.initialSlide),
                (e.originalSettings = e.options),
                "undefined" != typeof document.mozHidden
                    ? ((e.hidden = "mozHidden"),
                        (e.visibilityChange = "mozvisibilitychange"))
                    : "undefined" != typeof document.webkitHidden &&
                    ((e.hidden = "webkitHidden"),
                        (e.visibilityChange = "webkitvisibilitychange")),
                (e.autoPlay = a.proxy(e.autoPlay, e)),
                (e.autoPlayClear = a.proxy(e.autoPlayClear, e)),
                (e.autoPlayIterator = a.proxy(e.autoPlayIterator, e)),
                (e.changeSlide = a.proxy(e.changeSlide, e)),
                (e.clickHandler = a.proxy(e.clickHandler, e)),
                (e.selectHandler = a.proxy(e.selectHandler, e)),
                (e.setPosition = a.proxy(e.setPosition, e)),
                (e.swipeHandler = a.proxy(e.swipeHandler, e)),
                (e.dragHandler = a.proxy(e.dragHandler, e)),
                (e.keyHandler = a.proxy(e.keyHandler, e)),
                (e.instanceUid = b++),
                (e.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
                e.registerBreakpoints(),
                e.init(!0);
        }
        var b = 0;
        return c;
    })()),
        (b.prototype.activateADA = function () {
            var a = this;
            a.$slideTrack
                .find(".slick-active")
                .attr({ "aria-hidden": "false" })
                .find("a, input, button, select")
                .attr({ tabindex: "0" });
        }),
        (b.prototype.addSlide = b.prototype.slickAdd = function (b, c, d) {
            var e = this;
            if ("boolean" == typeof c) (d = c), (c = null);
            else if (0 > c || c >= e.slideCount) return !1;
            e.unload(),
                "number" == typeof c
                    ? 0 === c && 0 === e.$slides.length
                        ? a(b).appendTo(e.$slideTrack)
                        : d
                            ? a(b).insertBefore(e.$slides.eq(c))
                            : a(b).insertAfter(e.$slides.eq(c))
                    : d === !0
                        ? a(b).prependTo(e.$slideTrack)
                        : a(b).appendTo(e.$slideTrack),
                (e.$slides = e.$slideTrack.children(this.options.slide)),
                e.$slideTrack.children(this.options.slide).detach(),
                e.$slideTrack.append(e.$slides),
                e.$slides.each(function (b, c) {
                    a(c).attr("data-slick-index", b);
                }),
                (e.$slidesCache = e.$slides),
                e.reinit();
        }),
        (b.prototype.animateHeight = function () {
            var a = this;
            if (
                1 === a.options.slidesToShow &&
                a.options.adaptiveHeight === !0 &&
                a.options.vertical === !1
            ) {
                var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
                a.$list.animate({ height: b }, a.options.speed);
            }
        }),
        (b.prototype.animateSlide = function (b, c) {
            var d = {},
                e = this;
            e.animateHeight(),
                e.options.rtl === !0 && e.options.vertical === !1 && (b = -b),
                e.transformsEnabled === !1
                    ? e.options.vertical === !1
                        ? e.$slideTrack.animate(
                            { left: b },
                            e.options.speed,
                            e.options.easing,
                            c
                        )
                        : e.$slideTrack.animate(
                            { top: b },
                            e.options.speed,
                            e.options.easing,
                            c
                        )
                    : e.cssTransitions === !1
                        ? (e.options.rtl === !0 && (e.currentLeft = -e.currentLeft),
                            a({ animStart: e.currentLeft }).animate(
                                { animStart: b },
                                {
                                    duration: e.options.speed,
                                    easing: e.options.easing,
                                    step: function (a) {
                                        (a = Math.ceil(a)),
                                            e.options.vertical === !1
                                                ? ((d[e.animType] = "translate(" + a + "px, 0px)"),
                                                    e.$slideTrack.css(d))
                                                : ((d[e.animType] = "translate(0px," + a + "px)"),
                                                    e.$slideTrack.css(d));
                                    },
                                    complete: function () {
                                        c && c.call();
                                    },
                                }
                            ))
                        : (e.applyTransition(),
                            (b = Math.ceil(b)),
                            e.options.vertical === !1
                                ? (d[e.animType] = "translate3d(" + b + "px, 0px, 0px)")
                                : (d[e.animType] = "translate3d(0px," + b + "px, 0px)"),
                            e.$slideTrack.css(d),
                            c &&
                            setTimeout(function () {
                                e.disableTransition(), c.call();
                            }, e.options.speed));
        }),
        (b.prototype.getNavTarget = function () {
            var b = this,
                c = b.options.asNavFor;
            return c && null !== c && (c = a(c).not(b.$slider)), c;
        }),
        (b.prototype.asNavFor = function (b) {
            var c = this,
                d = c.getNavTarget();
            null !== d &&
                "object" == typeof d &&
                d.each(function () {
                    var c = a(this).slick("getSlick");
                    c.unslicked || c.slideHandler(b, !0);
                });
        }),
        (b.prototype.applyTransition = function (a) {
            var b = this,
                c = {};
            b.options.fade === !1
                ? (c[b.transitionType] =
                    b.transformType + " " + b.options.speed + "ms " + b.options.cssEase)
                : (c[b.transitionType] =
                    "opacity " + b.options.speed + "ms " + b.options.cssEase),
                b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c);
        }),
        (b.prototype.autoPlay = function () {
            var a = this;
            a.autoPlayClear(),
                a.slideCount > a.options.slidesToShow &&
                (a.autoPlayTimer = setInterval(
                    a.autoPlayIterator,
                    a.options.autoplaySpeed
                ));
        }),
        (b.prototype.autoPlayClear = function () {
            var a = this;
            a.autoPlayTimer && clearInterval(a.autoPlayTimer);
        }),
        (b.prototype.autoPlayIterator = function () {
            var a = this,
                b = a.currentSlide + a.options.slidesToScroll;
            a.paused ||
                a.interrupted ||
                a.focussed ||
                (a.options.infinite === !1 &&
                    (1 === a.direction && a.currentSlide + 1 === a.slideCount - 1
                        ? (a.direction = 0)
                        : 0 === a.direction &&
                        ((b = a.currentSlide - a.options.slidesToScroll),
                            a.currentSlide - 1 === 0 && (a.direction = 1))),
                    a.slideHandler(b));
        }),
        (b.prototype.buildArrows = function () {
            var b = this;
            b.options.arrows === !0 &&
                ((b.$prevArrow = a(b.options.prevArrow).addClass("slick-arrow")),
                    (b.$nextArrow = a(b.options.nextArrow).addClass("slick-arrow")),
                    b.slideCount > b.options.slidesToShow
                        ? (b.$prevArrow
                            .removeClass("slick-hidden")
                            .removeAttr("aria-hidden tabindex"),
                            b.$nextArrow
                                .removeClass("slick-hidden")
                                .removeAttr("aria-hidden tabindex"),
                            b.htmlExpr.test(b.options.prevArrow) &&
                            b.$prevArrow.prependTo(b.options.appendArrows),
                            b.htmlExpr.test(b.options.nextArrow) &&
                            b.$nextArrow.appendTo(b.options.appendArrows),
                            b.options.infinite !== !0 &&
                            b.$prevArrow
                                .addClass("slick-disabled")
                                .attr("aria-disabled", "true"))
                        : b.$prevArrow
                            .add(b.$nextArrow)
                            .addClass("slick-hidden")
                            .attr({ "aria-disabled": "true", tabindex: "-1" }));
        }),
        (b.prototype.buildDots = function () {
            var c,
                d,
                b = this;
            if (b.options.dots === !0 && b.slideCount > b.options.slidesToShow) {
                for (
                    b.$slider.addClass("slick-dotted"),
                    d = a("<ul />").addClass(b.options.dotsClass),
                    c = 0;
                    c <= b.getDotCount();
                    c += 1
                )
                    d.append(a("<li />").append(b.options.customPaging.call(this, b, c)));
                (b.$dots = d.appendTo(b.options.appendDots)),
                    b.$dots
                        .find("li")
                        .first()
                        .addClass("slick-active")
                        .attr("aria-hidden", "false");
            }
        }),
        (b.prototype.buildOut = function () {
            var b = this;
            (b.$slides = b.$slider
                .children(b.options.slide + ":not(.slick-cloned)")
                .addClass("slick-slide")),
                (b.slideCount = b.$slides.length),
                b.$slides.each(function (b, c) {
                    a(c)
                        .attr("data-slick-index", b)
                        .data("originalStyling", a(c).attr("style") || "");
                }),
                b.$slider.addClass("slick-slider"),
                (b.$slideTrack =
                    0 === b.slideCount
                        ? a('<div class="slick-track"/>').appendTo(b.$slider)
                        : b.$slides.wrapAll('<div class="slick-track"/>').parent()),
                (b.$list = b.$slideTrack
                    .wrap('<div aria-live="polite" class="slick-list"/>')
                    .parent()),
                b.$slideTrack.css("opacity", 0),
                (b.options.centerMode === !0 || b.options.swipeToSlide === !0) &&
                (b.options.slidesToScroll = 1),
                a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"),
                b.setupInfinite(),
                b.buildArrows(),
                b.buildDots(),
                b.updateDots(),
                b.setSlideClasses(
                    "number" == typeof b.currentSlide ? b.currentSlide : 0
                ),
                b.options.draggable === !0 && b.$list.addClass("draggable");
        }),
        (b.prototype.buildRows = function () {
            var b,
                c,
                d,
                e,
                f,
                g,
                h,
                a = this;
            if (
                ((e = document.createDocumentFragment()),
                    (g = a.$slider.children()),
                    a.options.rows > 1)
            ) {
                for (
                    h = a.options.slidesPerRow * a.options.rows,
                    f = Math.ceil(g.length / h),
                    b = 0;
                    f > b;
                    b++
                ) {
                    var i = document.createElement("div");
                    for (c = 0; c < a.options.rows; c++) {
                        var j = document.createElement("div");
                        for (d = 0; d < a.options.slidesPerRow; d++) {
                            var k = b * h + (c * a.options.slidesPerRow + d);
                            g.get(k) && j.appendChild(g.get(k));
                        }
                        i.appendChild(j);
                    }
                    e.appendChild(i);
                }
                a.$slider.empty().append(e),
                    a.$slider
                        .children()
                        .children()
                        .children()
                        .css({
                            width: 100 / a.options.slidesPerRow + "%",
                            display: "inline-block",
                        });
            }
        }),
        (b.prototype.checkResponsive = function (b, c) {
            var e,
                f,
                g,
                d = this,
                h = !1,
                i = d.$slider.width(),
                j = window.innerWidth || a(window).width();
            if (
                ("window" === d.respondTo
                    ? (g = j)
                    : "slider" === d.respondTo
                        ? (g = i)
                        : "min" === d.respondTo && (g = Math.min(j, i)),
                    d.options.responsive &&
                    d.options.responsive.length &&
                    null !== d.options.responsive)
            ) {
                f = null;
                for (e in d.breakpoints)
                    d.breakpoints.hasOwnProperty(e) &&
                        (d.originalSettings.mobileFirst === !1
                            ? g < d.breakpoints[e] && (f = d.breakpoints[e])
                            : g > d.breakpoints[e] && (f = d.breakpoints[e]));
                null !== f
                    ? null !== d.activeBreakpoint
                        ? (f !== d.activeBreakpoint || c) &&
                        ((d.activeBreakpoint = f),
                            "unslick" === d.breakpointSettings[f]
                                ? d.unslick(f)
                                : ((d.options = a.extend(
                                    {},
                                    d.originalSettings,
                                    d.breakpointSettings[f]
                                )),
                                    b === !0 && (d.currentSlide = d.options.initialSlide),
                                    d.refresh(b)),
                            (h = f))
                        : ((d.activeBreakpoint = f),
                            "unslick" === d.breakpointSettings[f]
                                ? d.unslick(f)
                                : ((d.options = a.extend(
                                    {},
                                    d.originalSettings,
                                    d.breakpointSettings[f]
                                )),
                                    b === !0 && (d.currentSlide = d.options.initialSlide),
                                    d.refresh(b)),
                            (h = f))
                    : null !== d.activeBreakpoint &&
                    ((d.activeBreakpoint = null),
                        (d.options = d.originalSettings),
                        b === !0 && (d.currentSlide = d.options.initialSlide),
                        d.refresh(b),
                        (h = f)),
                    b || h === !1 || d.$slider.trigger("breakpoint", [d, h]);
            }
        }),
        (b.prototype.changeSlide = function (b, c) {
            var f,
                g,
                h,
                d = this,
                e = a(b.currentTarget);
            switch (
            (e.is("a") && b.preventDefault(),
                e.is("li") || (e = e.closest("li")),
                (h = d.slideCount % d.options.slidesToScroll !== 0),
                (f = h
                    ? 0
                    : (d.slideCount - d.currentSlide) % d.options.slidesToScroll),
                b.data.message)
            ) {
                case "previous":
                    (g = 0 === f ? d.options.slidesToScroll : d.options.slidesToShow - f),
                        d.slideCount > d.options.slidesToShow &&
                        d.slideHandler(d.currentSlide - g, !1, c);
                    break;
                case "next":
                    (g = 0 === f ? d.options.slidesToScroll : f),
                        d.slideCount > d.options.slidesToShow &&
                        d.slideHandler(d.currentSlide + g, !1, c);
                    break;
                case "index":
                    var i =
                        0 === b.data.index
                            ? 0
                            : b.data.index || e.index() * d.options.slidesToScroll;
                    d.slideHandler(d.checkNavigable(i), !1, c),
                        e.children().trigger("focus");
                    break;
                default:
                    return;
            }
        }),
        (b.prototype.checkNavigable = function (a) {
            var c,
                d,
                b = this;
            if (((c = b.getNavigableIndexes()), (d = 0), a > c[c.length - 1]))
                a = c[c.length - 1];
            else
                for (var e in c) {
                    if (a < c[e]) {
                        a = d;
                        break;
                    }
                    d = c[e];
                }
            return a;
        }),
        (b.prototype.cleanUpEvents = function () {
            var b = this;
            b.options.dots &&
                null !== b.$dots &&
                a("li", b.$dots)
                    .off("click.slick", b.changeSlide)
                    .off("mouseenter.slick", a.proxy(b.interrupt, b, !0))
                    .off("mouseleave.slick", a.proxy(b.interrupt, b, !1)),
                b.$slider.off("focus.slick blur.slick"),
                b.options.arrows === !0 &&
                b.slideCount > b.options.slidesToShow &&
                (b.$prevArrow && b.$prevArrow.off("click.slick", b.changeSlide),
                    b.$nextArrow && b.$nextArrow.off("click.slick", b.changeSlide)),
                b.$list.off("touchstart.slick mousedown.slick", b.swipeHandler),
                b.$list.off("touchmove.slick mousemove.slick", b.swipeHandler),
                b.$list.off("touchend.slick mouseup.slick", b.swipeHandler),
                b.$list.off("touchcancel.slick mouseleave.slick", b.swipeHandler),
                b.$list.off("click.slick", b.clickHandler),
                a(document).off(b.visibilityChange, b.visibility),
                b.cleanUpSlideEvents(),
                b.options.accessibility === !0 &&
                b.$list.off("keydown.slick", b.keyHandler),
                b.options.focusOnSelect === !0 &&
                a(b.$slideTrack).children().off("click.slick", b.selectHandler),
                a(window).off(
                    "orientationchange.slick.slick-" + b.instanceUid,
                    b.orientationChange
                ),
                a(window).off("resize.slick.slick-" + b.instanceUid, b.resize),
                a("[draggable!=true]", b.$slideTrack).off(
                    "dragstart",
                    b.preventDefault
                ),
                a(window).off("load.slick.slick-" + b.instanceUid, b.setPosition),
                a(document).off("ready.slick.slick-" + b.instanceUid, b.setPosition);
        }),
        (b.prototype.cleanUpSlideEvents = function () {
            var b = this;
            b.$list.off("mouseenter.slick", a.proxy(b.interrupt, b, !0)),
                b.$list.off("mouseleave.slick", a.proxy(b.interrupt, b, !1));
        }),
        (b.prototype.cleanUpRows = function () {
            var b,
                a = this;
            a.options.rows > 1 &&
                ((b = a.$slides.children().children()),
                    b.removeAttr("style"),
                    a.$slider.empty().append(b));
        }),
        (b.prototype.clickHandler = function (a) {
            var b = this;
            b.shouldClick === !1 &&
                (a.stopImmediatePropagation(), a.stopPropagation(), a.preventDefault());
        }),
        (b.prototype.destroy = function (b) {
            var c = this;
            c.autoPlayClear(),
                (c.touchObject = {}),
                c.cleanUpEvents(),
                a(".slick-cloned", c.$slider).detach(),
                c.$dots && c.$dots.remove(),
                c.$prevArrow &&
                c.$prevArrow.length &&
                (c.$prevArrow
                    .removeClass("slick-disabled slick-arrow slick-hidden")
                    .removeAttr("aria-hidden aria-disabled tabindex")
                    .css("display", ""),
                    c.htmlExpr.test(c.options.prevArrow) && c.$prevArrow.remove()),
                c.$nextArrow &&
                c.$nextArrow.length &&
                (c.$nextArrow
                    .removeClass("slick-disabled slick-arrow slick-hidden")
                    .removeAttr("aria-hidden aria-disabled tabindex")
                    .css("display", ""),
                    c.htmlExpr.test(c.options.nextArrow) && c.$nextArrow.remove()),
                c.$slides &&
                (c.$slides
                    .removeClass(
                        "slick-slide slick-active slick-center slick-visible slick-current"
                    )
                    .removeAttr("aria-hidden")
                    .removeAttr("data-slick-index")
                    .each(function () {
                        a(this).attr("style", a(this).data("originalStyling"));
                    }),
                    c.$slideTrack.children(this.options.slide).detach(),
                    c.$slideTrack.detach(),
                    c.$list.detach(),
                    c.$slider.append(c.$slides)),
                c.cleanUpRows(),
                c.$slider.removeClass("slick-slider"),
                c.$slider.removeClass("slick-initialized"),
                c.$slider.removeClass("slick-dotted"),
                (c.unslicked = !0),
                b || c.$slider.trigger("destroy", [c]);
        }),
        (b.prototype.disableTransition = function (a) {
            var b = this,
                c = {};
            (c[b.transitionType] = ""),
                b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c);
        }),
        (b.prototype.fadeSlide = function (a, b) {
            var c = this;
            c.cssTransitions === !1
                ? (c.$slides.eq(a).css({ zIndex: c.options.zIndex }),
                    c.$slides
                        .eq(a)
                        .animate({ opacity: 1 }, c.options.speed, c.options.easing, b))
                : (c.applyTransition(a),
                    c.$slides.eq(a).css({ opacity: 1, zIndex: c.options.zIndex }),
                    b &&
                    setTimeout(function () {
                        c.disableTransition(a), b.call();
                    }, c.options.speed));
        }),
        (b.prototype.fadeSlideOut = function (a) {
            var b = this;
            b.cssTransitions === !1
                ? b.$slides
                    .eq(a)
                    .animate(
                        { opacity: 0, zIndex: b.options.zIndex - 2 },
                        b.options.speed,
                        b.options.easing
                    )
                : (b.applyTransition(a),
                    b.$slides.eq(a).css({ opacity: 0, zIndex: b.options.zIndex - 2 }));
        }),
        (b.prototype.filterSlides = b.prototype.slickFilter = function (a) {
            var b = this;
            null !== a &&
                ((b.$slidesCache = b.$slides),
                    b.unload(),
                    b.$slideTrack.children(this.options.slide).detach(),
                    b.$slidesCache.filter(a).appendTo(b.$slideTrack),
                    b.reinit());
        }),
        (b.prototype.focusHandler = function () {
            var b = this;
            b.$slider
                .off("focus.slick blur.slick")
                .on("focus.slick blur.slick", "*:not(.slick-arrow)", function (c) {
                    c.stopImmediatePropagation();
                    var d = a(this);
                    setTimeout(function () {
                        b.options.pauseOnFocus &&
                            ((b.focussed = d.is(":focus")), b.autoPlay());
                    }, 0);
                });
        }),
        (b.prototype.getCurrent = b.prototype.slickCurrentSlide = function () {
            var a = this;
            return a.currentSlide;
        }),
        (b.prototype.getDotCount = function () {
            var a = this,
                b = 0,
                c = 0,
                d = 0;
            if (a.options.infinite === !0)
                for (; b < a.slideCount;)
                    ++d,
                        (b = c + a.options.slidesToScroll),
                        (c +=
                            a.options.slidesToScroll <= a.options.slidesToShow
                                ? a.options.slidesToScroll
                                : a.options.slidesToShow);
            else if (a.options.centerMode === !0) d = a.slideCount;
            else if (a.options.asNavFor)
                for (; b < a.slideCount;)
                    ++d,
                        (b = c + a.options.slidesToScroll),
                        (c +=
                            a.options.slidesToScroll <= a.options.slidesToShow
                                ? a.options.slidesToScroll
                                : a.options.slidesToShow);
            else
                d =
                    1 +
                    Math.ceil(
                        (a.slideCount - a.options.slidesToShow) / a.options.slidesToScroll
                    );
            return d - 1;
        }),
        (b.prototype.getLeft = function (a) {
            var c,
                d,
                f,
                b = this,
                e = 0;
            return (
                (b.slideOffset = 0),
                (d = b.$slides.first().outerHeight(!0)),
                b.options.infinite === !0
                    ? (b.slideCount > b.options.slidesToShow &&
                        ((b.slideOffset = b.slideWidth * b.options.slidesToShow * -1),
                            (e = d * b.options.slidesToShow * -1)),
                        b.slideCount % b.options.slidesToScroll !== 0 &&
                        a + b.options.slidesToScroll > b.slideCount &&
                        b.slideCount > b.options.slidesToShow &&
                        (a > b.slideCount
                            ? ((b.slideOffset =
                                (b.options.slidesToShow - (a - b.slideCount)) *
                                b.slideWidth *
                                -1),
                                (e = (b.options.slidesToShow - (a - b.slideCount)) * d * -1))
                            : ((b.slideOffset =
                                (b.slideCount % b.options.slidesToScroll) *
                                b.slideWidth *
                                -1),
                                (e = (b.slideCount % b.options.slidesToScroll) * d * -1))))
                    : a + b.options.slidesToShow > b.slideCount &&
                    ((b.slideOffset =
                        (a + b.options.slidesToShow - b.slideCount) * b.slideWidth),
                        (e = (a + b.options.slidesToShow - b.slideCount) * d)),
                b.slideCount <= b.options.slidesToShow &&
                ((b.slideOffset = 0), (e = 0)),
                b.options.centerMode === !0 && b.options.infinite === !0
                    ? (b.slideOffset +=
                        b.slideWidth * Math.floor(b.options.slidesToShow / 2) -
                        b.slideWidth)
                    : b.options.centerMode === !0 &&
                    ((b.slideOffset = 0),
                        (b.slideOffset +=
                            b.slideWidth * Math.floor(b.options.slidesToShow / 2))),
                (c =
                    b.options.vertical === !1
                        ? a * b.slideWidth * -1 + b.slideOffset
                        : a * d * -1 + e),
                b.options.variableWidth === !0 &&
                ((f =
                    b.slideCount <= b.options.slidesToShow || b.options.infinite === !1
                        ? b.$slideTrack.children(".slick-slide").eq(a)
                        : b.$slideTrack
                            .children(".slick-slide")
                            .eq(a + b.options.slidesToShow)),
                    (c =
                        b.options.rtl === !0
                            ? f[0]
                                ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width())
                                : 0
                            : f[0]
                                ? -1 * f[0].offsetLeft
                                : 0),
                    b.options.centerMode === !0 &&
                    ((f =
                        b.slideCount <= b.options.slidesToShow ||
                            b.options.infinite === !1
                            ? b.$slideTrack.children(".slick-slide").eq(a)
                            : b.$slideTrack
                                .children(".slick-slide")
                                .eq(a + b.options.slidesToShow + 1)),
                        (c =
                            b.options.rtl === !0
                                ? f[0]
                                    ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width())
                                    : 0
                                : f[0]
                                    ? -1 * f[0].offsetLeft
                                    : 0),
                        (c += (b.$list.width() - f.outerWidth()) / 2))),
                c
            );
        }),
        (b.prototype.getOption = b.prototype.slickGetOption = function (a) {
            var b = this;
            return b.options[a];
        }),
        (b.prototype.getNavigableIndexes = function () {
            var e,
                a = this,
                b = 0,
                c = 0,
                d = [];
            for (
                a.options.infinite === !1
                    ? (e = a.slideCount)
                    : ((b = -1 * a.options.slidesToScroll),
                        (c = -1 * a.options.slidesToScroll),
                        (e = 2 * a.slideCount));
                e > b;

            )
                d.push(b),
                    (b = c + a.options.slidesToScroll),
                    (c +=
                        a.options.slidesToScroll <= a.options.slidesToShow
                            ? a.options.slidesToScroll
                            : a.options.slidesToShow);
            return d;
        }),
        (b.prototype.getSlick = function () {
            return this;
        }),
        (b.prototype.getSlideCount = function () {
            var c,
                d,
                e,
                b = this;
            return (
                (e =
                    b.options.centerMode === !0
                        ? b.slideWidth * Math.floor(b.options.slidesToShow / 2)
                        : 0),
                b.options.swipeToSlide === !0
                    ? (b.$slideTrack.find(".slick-slide").each(function (c, f) {
                        return f.offsetLeft - e + a(f).outerWidth() / 2 > -1 * b.swipeLeft
                            ? ((d = f), !1)
                            : void 0;
                    }),
                        (c = Math.abs(a(d).attr("data-slick-index") - b.currentSlide) || 1))
                    : b.options.slidesToScroll
            );
        }),
        (b.prototype.goTo = b.prototype.slickGoTo = function (a, b) {
            var c = this;
            c.changeSlide({ data: { message: "index", index: parseInt(a) } }, b);
        }),
        (b.prototype.init = function (b) {
            var c = this;
            a(c.$slider).hasClass("slick-initialized") ||
                (a(c.$slider).addClass("slick-initialized"),
                    c.buildRows(),
                    c.buildOut(),
                    c.setProps(),
                    c.startLoad(),
                    c.loadSlider(),
                    c.initializeEvents(),
                    c.updateArrows(),
                    c.updateDots(),
                    c.checkResponsive(!0),
                    c.focusHandler()),
                b && c.$slider.trigger("init", [c]),
                c.options.accessibility === !0 && c.initADA(),
                c.options.autoplay && ((c.paused = !1), c.autoPlay());
        }),
        (b.prototype.initADA = function () {
            var b = this;
            b.$slides
                .add(b.$slideTrack.find(".slick-cloned"))
                .attr({ "aria-hidden": "true", tabindex: "-1" })
                .find("a, input, button, select")
                .attr({ tabindex: "-1" }),
                b.$slideTrack.attr("role", "listbox"),
                b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function (c) {
                    a(this).attr({
                        role: "option",
                        "aria-describedby": "slick-slide" + b.instanceUid + c,
                    });
                }),
                null !== b.$dots &&
                b.$dots
                    .attr("role", "tablist")
                    .find("li")
                    .each(function (c) {
                        a(this).attr({
                            role: "presentation",
                            "aria-selected": "false",
                            "aria-controls": "navigation" + b.instanceUid + c,
                            id: "slick-slide" + b.instanceUid + c,
                        });
                    })
                    .first()
                    .attr("aria-selected", "true")
                    .end()
                    .find("button")
                    .attr("role", "button")
                    .end()
                    .closest("div")
                    .attr("role", "toolbar"),
                b.activateADA();
        }),
        (b.prototype.initArrowEvents = function () {
            var a = this;
            a.options.arrows === !0 &&
                a.slideCount > a.options.slidesToShow &&
                (a.$prevArrow
                    .off("click.slick")
                    .on("click.slick", { message: "previous" }, a.changeSlide),
                    a.$nextArrow
                        .off("click.slick")
                        .on("click.slick", { message: "next" }, a.changeSlide));
        }),
        (b.prototype.initDotEvents = function () {
            var b = this;
            b.options.dots === !0 &&
                b.slideCount > b.options.slidesToShow &&
                a("li", b.$dots).on("click.slick", { message: "index" }, b.changeSlide),
                b.options.dots === !0 &&
                b.options.pauseOnDotsHover === !0 &&
                a("li", b.$dots)
                    .on("mouseenter.slick", a.proxy(b.interrupt, b, !0))
                    .on("mouseleave.slick", a.proxy(b.interrupt, b, !1));
        }),
        (b.prototype.initSlideEvents = function () {
            var b = this;
            b.options.pauseOnHover &&
                (b.$list.on("mouseenter.slick", a.proxy(b.interrupt, b, !0)),
                    b.$list.on("mouseleave.slick", a.proxy(b.interrupt, b, !1)));
        }),
        (b.prototype.initializeEvents = function () {
            var b = this;
            b.initArrowEvents(),
                b.initDotEvents(),
                b.initSlideEvents(),
                b.$list.on(
                    "touchstart.slick mousedown.slick",
                    { action: "start" },
                    b.swipeHandler
                ),
                b.$list.on(
                    "touchmove.slick mousemove.slick",
                    { action: "move" },
                    b.swipeHandler
                ),
                b.$list.on(
                    "touchend.slick mouseup.slick",
                    { action: "end" },
                    b.swipeHandler
                ),
                b.$list.on(
                    "touchcancel.slick mouseleave.slick",
                    { action: "end" },
                    b.swipeHandler
                ),
                b.$list.on("click.slick", b.clickHandler),
                a(document).on(b.visibilityChange, a.proxy(b.visibility, b)),
                b.options.accessibility === !0 &&
                b.$list.on("keydown.slick", b.keyHandler),
                b.options.focusOnSelect === !0 &&
                a(b.$slideTrack).children().on("click.slick", b.selectHandler),
                a(window).on(
                    "orientationchange.slick.slick-" + b.instanceUid,
                    a.proxy(b.orientationChange, b)
                ),
                a(window).on(
                    "resize.slick.slick-" + b.instanceUid,
                    a.proxy(b.resize, b)
                ),
                a("[draggable!=true]", b.$slideTrack).on("dragstart", b.preventDefault),
                a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition),
                a(document).on("ready.slick.slick-" + b.instanceUid, b.setPosition);
        }),
        (b.prototype.initUI = function () {
            var a = this;
            a.options.arrows === !0 &&
                a.slideCount > a.options.slidesToShow &&
                (a.$prevArrow.show(), a.$nextArrow.show()),
                a.options.dots === !0 &&
                a.slideCount > a.options.slidesToShow &&
                a.$dots.show();
        }),
        (b.prototype.keyHandler = function (a) {
            var b = this;
            a.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
                (37 === a.keyCode && b.options.accessibility === !0
                    ? b.changeSlide({
                        data: { message: b.options.rtl === !0 ? "next" : "previous" },
                    })
                    : 39 === a.keyCode &&
                    b.options.accessibility === !0 &&
                    b.changeSlide({
                        data: { message: b.options.rtl === !0 ? "previous" : "next" },
                    }));
        }),
        (b.prototype.lazyLoad = function () {
            function g(c) {
                a("img[data-lazy]", c).each(function () {
                    var c = a(this),
                        d = a(this).attr("data-lazy"),
                        e = document.createElement("img");
                    (e.onload = function () {
                        c.animate({ opacity: 0 }, 100, function () {
                            c.attr("src", d).animate({ opacity: 1 }, 200, function () {
                                c.removeAttr("data-lazy").removeClass("slick-loading");
                            }),
                                b.$slider.trigger("lazyLoaded", [b, c, d]);
                        });
                    }),
                        (e.onerror = function () {
                            c
                                .removeAttr("data-lazy")
                                .removeClass("slick-loading")
                                .addClass("slick-lazyload-error"),
                                b.$slider.trigger("lazyLoadError", [b, c, d]);
                        }),
                        (e.src = d);
                });
            }
            var c,
                d,
                e,
                f,
                b = this;
            b.options.centerMode === !0
                ? b.options.infinite === !0
                    ? ((e = b.currentSlide + (b.options.slidesToShow / 2 + 1)),
                        (f = e + b.options.slidesToShow + 2))
                    : ((e = Math.max(
                        0,
                        b.currentSlide - (b.options.slidesToShow / 2 + 1)
                    )),
                        (f = 2 + (b.options.slidesToShow / 2 + 1) + b.currentSlide))
                : ((e = b.options.infinite
                    ? b.options.slidesToShow + b.currentSlide
                    : b.currentSlide),
                    (f = Math.ceil(e + b.options.slidesToShow)),
                    b.options.fade === !0 && (e > 0 && e--, f <= b.slideCount && f++)),
                (c = b.$slider.find(".slick-slide").slice(e, f)),
                g(c),
                b.slideCount <= b.options.slidesToShow
                    ? ((d = b.$slider.find(".slick-slide")), g(d))
                    : b.currentSlide >= b.slideCount - b.options.slidesToShow
                        ? ((d = b.$slider
                            .find(".slick-cloned")
                            .slice(0, b.options.slidesToShow)),
                            g(d))
                        : 0 === b.currentSlide &&
                        ((d = b.$slider
                            .find(".slick-cloned")
                            .slice(-1 * b.options.slidesToShow)),
                            g(d));
        }),
        (b.prototype.loadSlider = function () {
            var a = this;
            a.setPosition(),
                a.$slideTrack.css({ opacity: 1 }),
                a.$slider.removeClass("slick-loading"),
                a.initUI(),
                "progressive" === a.options.lazyLoad && a.progressiveLazyLoad();
        }),
        (b.prototype.next = b.prototype.slickNext = function () {
            var a = this;
            a.changeSlide({ data: { message: "next" } });
        }),
        (b.prototype.orientationChange = function () {
            var a = this;
            a.checkResponsive(), a.setPosition();
        }),
        (b.prototype.pause = b.prototype.slickPause = function () {
            var a = this;
            a.autoPlayClear(), (a.paused = !0);
        }),
        (b.prototype.play = b.prototype.slickPlay = function () {
            var a = this;
            a.autoPlay(),
                (a.options.autoplay = !0),
                (a.paused = !1),
                (a.focussed = !1),
                (a.interrupted = !1);
        }),
        (b.prototype.postSlide = function (a) {
            var b = this;
            b.unslicked ||
                (b.$slider.trigger("afterChange", [b, a]),
                    (b.animating = !1),
                    b.setPosition(),
                    (b.swipeLeft = null),
                    b.options.autoplay && b.autoPlay(),
                    b.options.accessibility === !0 && b.initADA());
        }),
        (b.prototype.prev = b.prototype.slickPrev = function () {
            var a = this;
            a.changeSlide({ data: { message: "previous" } });
        }),
        (b.prototype.preventDefault = function (a) {
            a.preventDefault();
        }),
        (b.prototype.progressiveLazyLoad = function (b) {
            b = b || 1;
            var e,
                f,
                g,
                c = this,
                d = a("img[data-lazy]", c.$slider);
            d.length
                ? ((e = d.first()),
                    (f = e.attr("data-lazy")),
                    (g = document.createElement("img")),
                    (g.onload = function () {
                        e
                            .attr("src", f)
                            .removeAttr("data-lazy")
                            .removeClass("slick-loading"),
                            c.options.adaptiveHeight === !0 && c.setPosition(),
                            c.$slider.trigger("lazyLoaded", [c, e, f]),
                            c.progressiveLazyLoad();
                    }),
                    (g.onerror = function () {
                        3 > b
                            ? setTimeout(function () {
                                c.progressiveLazyLoad(b + 1);
                            }, 500)
                            : (e
                                .removeAttr("data-lazy")
                                .removeClass("slick-loading")
                                .addClass("slick-lazyload-error"),
                                c.$slider.trigger("lazyLoadError", [c, e, f]),
                                c.progressiveLazyLoad());
                    }),
                    (g.src = f))
                : c.$slider.trigger("allImagesLoaded", [c]);
        }),
        (b.prototype.refresh = function (b) {
            var d,
                e,
                c = this;
            (e = c.slideCount - c.options.slidesToShow),
                !c.options.infinite && c.currentSlide > e && (c.currentSlide = e),
                c.slideCount <= c.options.slidesToShow && (c.currentSlide = 0),
                (d = c.currentSlide),
                c.destroy(!0),
                a.extend(c, c.initials, { currentSlide: d }),
                c.init(),
                b || c.changeSlide({ data: { message: "index", index: d } }, !1);
        }),
        (b.prototype.registerBreakpoints = function () {
            var c,
                d,
                e,
                b = this,
                f = b.options.responsive || null;
            if ("array" === a.type(f) && f.length) {
                b.respondTo = b.options.respondTo || "window";
                for (c in f)
                    if (
                        ((e = b.breakpoints.length - 1),
                            (d = f[c].breakpoint),
                            f.hasOwnProperty(c))
                    ) {
                        for (; e >= 0;)
                            b.breakpoints[e] &&
                                b.breakpoints[e] === d &&
                                b.breakpoints.splice(e, 1),
                                e--;
                        b.breakpoints.push(d), (b.breakpointSettings[d] = f[c].settings);
                    }
                b.breakpoints.sort(function (a, c) {
                    return b.options.mobileFirst ? a - c : c - a;
                });
            }
        }),
        (b.prototype.reinit = function () {
            var b = this;
            (b.$slides = b.$slideTrack
                .children(b.options.slide)
                .addClass("slick-slide")),
                (b.slideCount = b.$slides.length),
                b.currentSlide >= b.slideCount &&
                0 !== b.currentSlide &&
                (b.currentSlide = b.currentSlide - b.options.slidesToScroll),
                b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0),
                b.registerBreakpoints(),
                b.setProps(),
                b.setupInfinite(),
                b.buildArrows(),
                b.updateArrows(),
                b.initArrowEvents(),
                b.buildDots(),
                b.updateDots(),
                b.initDotEvents(),
                b.cleanUpSlideEvents(),
                b.initSlideEvents(),
                b.checkResponsive(!1, !0),
                b.options.focusOnSelect === !0 &&
                a(b.$slideTrack).children().on("click.slick", b.selectHandler),
                b.setSlideClasses(
                    "number" == typeof b.currentSlide ? b.currentSlide : 0
                ),
                b.setPosition(),
                b.focusHandler(),
                (b.paused = !b.options.autoplay),
                b.autoPlay(),
                b.$slider.trigger("reInit", [b]);
        }),
        (b.prototype.resize = function () {
            var b = this;
            a(window).width() !== b.windowWidth &&
                (clearTimeout(b.windowDelay),
                    (b.windowDelay = window.setTimeout(function () {
                        (b.windowWidth = a(window).width()),
                            b.checkResponsive(),
                            b.unslicked || b.setPosition();
                    }, 50)));
        }),
        (b.prototype.removeSlide = b.prototype.slickRemove = function (a, b, c) {
            var d = this;
            return (
                "boolean" == typeof a
                    ? ((b = a), (a = b === !0 ? 0 : d.slideCount - 1))
                    : (a = b === !0 ? --a : a),
                d.slideCount < 1 || 0 > a || a > d.slideCount - 1
                    ? !1
                    : (d.unload(),
                        c === !0
                            ? d.$slideTrack.children().remove()
                            : d.$slideTrack.children(this.options.slide).eq(a).remove(),
                        (d.$slides = d.$slideTrack.children(this.options.slide)),
                        d.$slideTrack.children(this.options.slide).detach(),
                        d.$slideTrack.append(d.$slides),
                        (d.$slidesCache = d.$slides),
                        void d.reinit())
            );
        }),
        (b.prototype.setCSS = function (a) {
            var d,
                e,
                b = this,
                c = {};
            b.options.rtl === !0 && (a = -a),
                (d = "left" == b.positionProp ? Math.ceil(a) + "px" : "0px"),
                (e = "top" == b.positionProp ? Math.ceil(a) + "px" : "0px"),
                (c[b.positionProp] = a),
                b.transformsEnabled === !1
                    ? b.$slideTrack.css(c)
                    : ((c = {}),
                        b.cssTransitions === !1
                            ? ((c[b.animType] = "translate(" + d + ", " + e + ")"),
                                b.$slideTrack.css(c))
                            : ((c[b.animType] = "translate3d(" + d + ", " + e + ", 0px)"),
                                b.$slideTrack.css(c)));
        }),
        (b.prototype.setDimensions = function () {
            var a = this;
            a.options.vertical === !1
                ? a.options.centerMode === !0 &&
                a.$list.css({ padding: "0px " + a.options.centerPadding })
                : (a.$list.height(
                    a.$slides.first().outerHeight(!0) * a.options.slidesToShow
                ),
                    a.options.centerMode === !0 &&
                    a.$list.css({ padding: a.options.centerPadding + " 0px" })),
                (a.listWidth = a.$list.width()),
                (a.listHeight = a.$list.height()),
                a.options.vertical === !1 && a.options.variableWidth === !1
                    ? ((a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow)),
                        a.$slideTrack.width(
                            Math.ceil(
                                a.slideWidth * a.$slideTrack.children(".slick-slide").length
                            )
                        ))
                    : a.options.variableWidth === !0
                        ? a.$slideTrack.width(5e3 * a.slideCount)
                        : ((a.slideWidth = Math.ceil(a.listWidth)),
                            a.$slideTrack.height(
                                Math.ceil(
                                    a.$slides.first().outerHeight(!0) *
                                    a.$slideTrack.children(".slick-slide").length
                                )
                            ));
            var b = a.$slides.first().outerWidth(!0) - a.$slides.first().width();
            a.options.variableWidth === !1 &&
                a.$slideTrack.children(".slick-slide").width(a.slideWidth - b);
        }),
        (b.prototype.setFade = function () {
            var c,
                b = this;
            b.$slides.each(function (d, e) {
                (c = b.slideWidth * d * -1),
                    b.options.rtl === !0
                        ? a(e).css({
                            position: "relative",
                            right: c,
                            top: 0,
                            zIndex: b.options.zIndex - 2,
                            opacity: 0,
                        })
                        : a(e).css({
                            position: "relative",
                            left: c,
                            top: 0,
                            zIndex: b.options.zIndex - 2,
                            opacity: 0,
                        });
            }),
                b.$slides
                    .eq(b.currentSlide)
                    .css({ zIndex: b.options.zIndex - 1, opacity: 1 });
        }),
        (b.prototype.setHeight = function () {
            var a = this;
            if (
                1 === a.options.slidesToShow &&
                a.options.adaptiveHeight === !0 &&
                a.options.vertical === !1
            ) {
                var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
                a.$list.css("height", b);
            }
        }),
        (b.prototype.setOption = b.prototype.slickSetOption = function () {
            var c,
                d,
                e,
                f,
                h,
                b = this,
                g = !1;
            if (
                ("object" === a.type(arguments[0])
                    ? ((e = arguments[0]), (g = arguments[1]), (h = "multiple"))
                    : "string" === a.type(arguments[0]) &&
                    ((e = arguments[0]),
                        (f = arguments[1]),
                        (g = arguments[2]),
                        "responsive" === arguments[0] && "array" === a.type(arguments[1])
                            ? (h = "responsive")
                            : "undefined" != typeof arguments[1] && (h = "single")),
                    "single" === h)
            )
                b.options[e] = f;
            else if ("multiple" === h)
                a.each(e, function (a, c) {
                    b.options[a] = c;
                });
            else if ("responsive" === h)
                for (d in f)
                    if ("array" !== a.type(b.options.responsive))
                        b.options.responsive = [f[d]];
                    else {
                        for (c = b.options.responsive.length - 1; c >= 0;)
                            b.options.responsive[c].breakpoint === f[d].breakpoint &&
                                b.options.responsive.splice(c, 1),
                                c--;
                        b.options.responsive.push(f[d]);
                    }
            g && (b.unload(), b.reinit());
        }),
        (b.prototype.setPosition = function () {
            var a = this;
            a.setDimensions(),
                a.setHeight(),
                a.options.fade === !1
                    ? a.setCSS(a.getLeft(a.currentSlide))
                    : a.setFade(),
                a.$slider.trigger("setPosition", [a]);
        }),
        (b.prototype.setProps = function () {
            var a = this,
                b = document.body.style;
            (a.positionProp = a.options.vertical === !0 ? "top" : "left"),
                "top" === a.positionProp
                    ? a.$slider.addClass("slick-vertical")
                    : a.$slider.removeClass("slick-vertical"),
                (void 0 !== b.WebkitTransition ||
                    void 0 !== b.MozTransition ||
                    void 0 !== b.msTransition) &&
                a.options.useCSS === !0 &&
                (a.cssTransitions = !0),
                a.options.fade &&
                ("number" == typeof a.options.zIndex
                    ? a.options.zIndex < 3 && (a.options.zIndex = 3)
                    : (a.options.zIndex = a.defaults.zIndex)),
                void 0 !== b.OTransform &&
                ((a.animType = "OTransform"),
                    (a.transformType = "-o-transform"),
                    (a.transitionType = "OTransition"),
                    void 0 === b.perspectiveProperty &&
                    void 0 === b.webkitPerspective &&
                    (a.animType = !1)),
                void 0 !== b.MozTransform &&
                ((a.animType = "MozTransform"),
                    (a.transformType = "-moz-transform"),
                    (a.transitionType = "MozTransition"),
                    void 0 === b.perspectiveProperty &&
                    void 0 === b.MozPerspective &&
                    (a.animType = !1)),
                void 0 !== b.webkitTransform &&
                ((a.animType = "webkitTransform"),
                    (a.transformType = "-webkit-transform"),
                    (a.transitionType = "webkitTransition"),
                    void 0 === b.perspectiveProperty &&
                    void 0 === b.webkitPerspective &&
                    (a.animType = !1)),
                void 0 !== b.msTransform &&
                ((a.animType = "msTransform"),
                    (a.transformType = "-ms-transform"),
                    (a.transitionType = "msTransition"),
                    void 0 === b.msTransform && (a.animType = !1)),
                void 0 !== b.transform &&
                a.animType !== !1 &&
                ((a.animType = "transform"),
                    (a.transformType = "transform"),
                    (a.transitionType = "transition")),
                (a.transformsEnabled =
                    a.options.useTransform && null !== a.animType && a.animType !== !1);
        }),
        (b.prototype.setSlideClasses = function (a) {
            var c,
                d,
                e,
                f,
                b = this;
            (d = b.$slider
                .find(".slick-slide")
                .removeClass("slick-active slick-center slick-current")
                .attr("aria-hidden", "true")),
                b.$slides.eq(a).addClass("slick-current"),
                b.options.centerMode === !0
                    ? ((c = Math.floor(b.options.slidesToShow / 2)),
                        b.options.infinite === !0 &&
                        (a >= c && a <= b.slideCount - 1 - c
                            ? b.$slides
                                .slice(a - c, a + c + 1)
                                .addClass("slick-active")
                                .attr("aria-hidden", "false")
                            : ((e = b.options.slidesToShow + a),
                                d
                                    .slice(e - c + 1, e + c + 2)
                                    .addClass("slick-active")
                                    .attr("aria-hidden", "false")),
                            0 === a
                                ? d
                                    .eq(d.length - 1 - b.options.slidesToShow)
                                    .addClass("slick-center")
                                : a === b.slideCount - 1 &&
                                d.eq(b.options.slidesToShow).addClass("slick-center")),
                        b.$slides.eq(a).addClass("slick-center"))
                    : a >= 0 && a <= b.slideCount - b.options.slidesToShow
                        ? b.$slides
                            .slice(a, a + b.options.slidesToShow)
                            .addClass("slick-active")
                            .attr("aria-hidden", "false")
                        : d.length <= b.options.slidesToShow
                            ? d.addClass("slick-active").attr("aria-hidden", "false")
                            : ((f = b.slideCount % b.options.slidesToShow),
                                (e = b.options.infinite === !0 ? b.options.slidesToShow + a : a),
                                b.options.slidesToShow == b.options.slidesToScroll &&
                                    b.slideCount - a < b.options.slidesToShow
                                    ? d
                                        .slice(e - (b.options.slidesToShow - f), e + f)
                                        .addClass("slick-active")
                                        .attr("aria-hidden", "false")
                                    : d
                                        .slice(e, e + b.options.slidesToShow)
                                        .addClass("slick-active")
                                        .attr("aria-hidden", "false")),
                "ondemand" === b.options.lazyLoad && b.lazyLoad();
        }),
        (b.prototype.setupInfinite = function () {
            var c,
                d,
                e,
                b = this;
            if (
                (b.options.fade === !0 && (b.options.centerMode = !1),
                    b.options.infinite === !0 &&
                    b.options.fade === !1 &&
                    ((d = null), b.slideCount > b.options.slidesToShow))
            ) {
                for (
                    e =
                    b.options.centerMode === !0
                        ? b.options.slidesToShow + 1
                        : b.options.slidesToShow,
                    c = b.slideCount;
                    c > b.slideCount - e;
                    c -= 1
                )
                    (d = c - 1),
                        a(b.$slides[d])
                            .clone(!0)
                            .attr("id", "")
                            .attr("data-slick-index", d - b.slideCount)
                            .prependTo(b.$slideTrack)
                            .addClass("slick-cloned");
                for (c = 0; e > c; c += 1)
                    (d = c),
                        a(b.$slides[d])
                            .clone(!0)
                            .attr("id", "")
                            .attr("data-slick-index", d + b.slideCount)
                            .appendTo(b.$slideTrack)
                            .addClass("slick-cloned");
                b.$slideTrack
                    .find(".slick-cloned")
                    .find("[id]")
                    .each(function () {
                        a(this).attr("id", "");
                    });
            }
        }),
        (b.prototype.interrupt = function (a) {
            var b = this;
            a || b.autoPlay(), (b.interrupted = a);
        }),
        (b.prototype.selectHandler = function (b) {
            var c = this,
                d = a(b.target).is(".slick-slide")
                    ? a(b.target)
                    : a(b.target).parents(".slick-slide"),
                e = parseInt(d.attr("data-slick-index"));
            return (
                e || (e = 0),
                c.slideCount <= c.options.slidesToShow
                    ? (c.setSlideClasses(e), void c.asNavFor(e))
                    : void c.slideHandler(e)
            );
        }),
        (b.prototype.slideHandler = function (a, b, c) {
            var d,
                e,
                f,
                g,
                j,
                h = null,
                i = this;
            return (
                (b = b || !1),
                (i.animating === !0 && i.options.waitForAnimate === !0) ||
                    (i.options.fade === !0 && i.currentSlide === a) ||
                    i.slideCount <= i.options.slidesToShow
                    ? void 0
                    : (b === !1 && i.asNavFor(a),
                        (d = a),
                        (h = i.getLeft(d)),
                        (g = i.getLeft(i.currentSlide)),
                        (i.currentLeft = null === i.swipeLeft ? g : i.swipeLeft),
                        i.options.infinite === !1 &&
                            i.options.centerMode === !1 &&
                            (0 > a || a > i.getDotCount() * i.options.slidesToScroll)
                            ? void (
                                i.options.fade === !1 &&
                                ((d = i.currentSlide),
                                    c !== !0
                                        ? i.animateSlide(g, function () {
                                            i.postSlide(d);
                                        })
                                        : i.postSlide(d))
                            )
                            : i.options.infinite === !1 &&
                                i.options.centerMode === !0 &&
                                (0 > a || a > i.slideCount - i.options.slidesToScroll)
                                ? void (
                                    i.options.fade === !1 &&
                                    ((d = i.currentSlide),
                                        c !== !0
                                            ? i.animateSlide(g, function () {
                                                i.postSlide(d);
                                            })
                                            : i.postSlide(d))
                                )
                                : (i.options.autoplay && clearInterval(i.autoPlayTimer),
                                    (e =
                                        0 > d
                                            ? i.slideCount % i.options.slidesToScroll !== 0
                                                ? i.slideCount - (i.slideCount % i.options.slidesToScroll)
                                                : i.slideCount + d
                                            : d >= i.slideCount
                                                ? i.slideCount % i.options.slidesToScroll !== 0
                                                    ? 0
                                                    : d - i.slideCount
                                                : d),
                                    (i.animating = !0),
                                    i.$slider.trigger("beforeChange", [i, i.currentSlide, e]),
                                    (f = i.currentSlide),
                                    (i.currentSlide = e),
                                    i.setSlideClasses(i.currentSlide),
                                    i.options.asNavFor &&
                                    ((j = i.getNavTarget()),
                                        (j = j.slick("getSlick")),
                                        j.slideCount <= j.options.slidesToShow &&
                                        j.setSlideClasses(i.currentSlide)),
                                    i.updateDots(),
                                    i.updateArrows(),
                                    i.options.fade === !0
                                        ? (c !== !0
                                            ? (i.fadeSlideOut(f),
                                                i.fadeSlide(e, function () {
                                                    i.postSlide(e);
                                                }))
                                            : i.postSlide(e),
                                            void i.animateHeight())
                                        : void (c !== !0
                                            ? i.animateSlide(h, function () {
                                                i.postSlide(e);
                                            })
                                            : i.postSlide(e))))
            );
        }),
        (b.prototype.startLoad = function () {
            var a = this;
            a.options.arrows === !0 &&
                a.slideCount > a.options.slidesToShow &&
                (a.$prevArrow.hide(), a.$nextArrow.hide()),
                a.options.dots === !0 &&
                a.slideCount > a.options.slidesToShow &&
                a.$dots.hide(),
                a.$slider.addClass("slick-loading");
        }),
        (b.prototype.swipeDirection = function () {
            var a,
                b,
                c,
                d,
                e = this;
            return (
                (a = e.touchObject.startX - e.touchObject.curX),
                (b = e.touchObject.startY - e.touchObject.curY),
                (c = Math.atan2(b, a)),
                (d = Math.round((180 * c) / Math.PI)),
                0 > d && (d = 360 - Math.abs(d)),
                45 >= d && d >= 0
                    ? e.options.rtl === !1
                        ? "left"
                        : "right"
                    : 360 >= d && d >= 315
                        ? e.options.rtl === !1
                            ? "left"
                            : "right"
                        : d >= 135 && 225 >= d
                            ? e.options.rtl === !1
                                ? "right"
                                : "left"
                            : e.options.verticalSwiping === !0
                                ? d >= 35 && 135 >= d
                                    ? "down"
                                    : "up"
                                : "vertical"
            );
        }),
        (b.prototype.swipeEnd = function (a) {
            var c,
                d,
                b = this;
            if (
                ((b.dragging = !1),
                    (b.interrupted = !1),
                    (b.shouldClick = b.touchObject.swipeLength > 10 ? !1 : !0),
                    void 0 === b.touchObject.curX)
            )
                return !1;
            if (
                (b.touchObject.edgeHit === !0 &&
                    b.$slider.trigger("edge", [b, b.swipeDirection()]),
                    b.touchObject.swipeLength >= b.touchObject.minSwipe)
            ) {
                switch ((d = b.swipeDirection())) {
                    case "left":
                    case "down":
                        (c = b.options.swipeToSlide
                            ? b.checkNavigable(b.currentSlide + b.getSlideCount())
                            : b.currentSlide + b.getSlideCount()),
                            (b.currentDirection = 0);
                        break;
                    case "right":
                    case "up":
                        (c = b.options.swipeToSlide
                            ? b.checkNavigable(b.currentSlide - b.getSlideCount())
                            : b.currentSlide - b.getSlideCount()),
                            (b.currentDirection = 1);
                }
                "vertical" != d &&
                    (b.slideHandler(c),
                        (b.touchObject = {}),
                        b.$slider.trigger("swipe", [b, d]));
            } else
                b.touchObject.startX !== b.touchObject.curX &&
                    (b.slideHandler(b.currentSlide), (b.touchObject = {}));
        }),
        (b.prototype.swipeHandler = function (a) {
            var b = this;
            if (
                !(
                    b.options.swipe === !1 ||
                    ("ontouchend" in document && b.options.swipe === !1) ||
                    (b.options.draggable === !1 && -1 !== a.type.indexOf("mouse"))
                )
            )
                switch (
                ((b.touchObject.fingerCount =
                    a.originalEvent && void 0 !== a.originalEvent.touches
                        ? a.originalEvent.touches.length
                        : 1),
                    (b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold),
                    b.options.verticalSwiping === !0 &&
                    (b.touchObject.minSwipe = b.listHeight / b.options.touchThreshold),
                    a.data.action)
                ) {
                    case "start":
                        b.swipeStart(a);
                        break;
                    case "move":
                        b.swipeMove(a);
                        break;
                    case "end":
                        b.swipeEnd(a);
                }
        }),
        (b.prototype.swipeMove = function (a) {
            var d,
                e,
                f,
                g,
                h,
                b = this;
            return (
                (h = void 0 !== a.originalEvent ? a.originalEvent.touches : null),
                !b.dragging || (h && 1 !== h.length)
                    ? !1
                    : ((d = b.getLeft(b.currentSlide)),
                        (b.touchObject.curX = void 0 !== h ? h[0].pageX : a.clientX),
                        (b.touchObject.curY = void 0 !== h ? h[0].pageY : a.clientY),
                        (b.touchObject.swipeLength = Math.round(
                            Math.sqrt(Math.pow(b.touchObject.curX - b.touchObject.startX, 2))
                        )),
                        b.options.verticalSwiping === !0 &&
                        (b.touchObject.swipeLength = Math.round(
                            Math.sqrt(
                                Math.pow(b.touchObject.curY - b.touchObject.startY, 2)
                            )
                        )),
                        (e = b.swipeDirection()),
                        "vertical" !== e
                            ? (void 0 !== a.originalEvent &&
                                b.touchObject.swipeLength > 4 &&
                                a.preventDefault(),
                                (g =
                                    (b.options.rtl === !1 ? 1 : -1) *
                                    (b.touchObject.curX > b.touchObject.startX ? 1 : -1)),
                                b.options.verticalSwiping === !0 &&
                                (g = b.touchObject.curY > b.touchObject.startY ? 1 : -1),
                                (f = b.touchObject.swipeLength),
                                (b.touchObject.edgeHit = !1),
                                b.options.infinite === !1 &&
                                ((0 === b.currentSlide && "right" === e) ||
                                    (b.currentSlide >= b.getDotCount() && "left" === e)) &&
                                ((f = b.touchObject.swipeLength * b.options.edgeFriction),
                                    (b.touchObject.edgeHit = !0)),
                                b.options.vertical === !1
                                    ? (b.swipeLeft = d + f * g)
                                    : (b.swipeLeft =
                                        d + f * (b.$list.height() / b.listWidth) * g),
                                b.options.verticalSwiping === !0 && (b.swipeLeft = d + f * g),
                                b.options.fade === !0 || b.options.touchMove === !1
                                    ? !1
                                    : b.animating === !0
                                        ? ((b.swipeLeft = null), !1)
                                        : void b.setCSS(b.swipeLeft))
                            : void 0)
            );
        }),
        (b.prototype.swipeStart = function (a) {
            var c,
                b = this;
            return (
                (b.interrupted = !0),
                1 !== b.touchObject.fingerCount ||
                    b.slideCount <= b.options.slidesToShow
                    ? ((b.touchObject = {}), !1)
                    : (void 0 !== a.originalEvent &&
                        void 0 !== a.originalEvent.touches &&
                        (c = a.originalEvent.touches[0]),
                        (b.touchObject.startX = b.touchObject.curX =
                            void 0 !== c ? c.pageX : a.clientX),
                        (b.touchObject.startY = b.touchObject.curY =
                            void 0 !== c ? c.pageY : a.clientY),
                        void (b.dragging = !0))
            );
        }),
        (b.prototype.unfilterSlides = b.prototype.slickUnfilter = function () {
            var a = this;
            null !== a.$slidesCache &&
                (a.unload(),
                    a.$slideTrack.children(this.options.slide).detach(),
                    a.$slidesCache.appendTo(a.$slideTrack),
                    a.reinit());
        }),
        (b.prototype.unload = function () {
            var b = this;
            a(".slick-cloned", b.$slider).remove(),
                b.$dots && b.$dots.remove(),
                b.$prevArrow &&
                b.htmlExpr.test(b.options.prevArrow) &&
                b.$prevArrow.remove(),
                b.$nextArrow &&
                b.htmlExpr.test(b.options.nextArrow) &&
                b.$nextArrow.remove(),
                b.$slides
                    .removeClass("slick-slide slick-active slick-visible slick-current")
                    .attr("aria-hidden", "true")
                    .css("width", "");
        }),
        (b.prototype.unslick = function (a) {
            var b = this;
            b.$slider.trigger("unslick", [b, a]), b.destroy();
        }),
        (b.prototype.updateArrows = function () {
            var b,
                a = this;
            (b = Math.floor(a.options.slidesToShow / 2)),
                a.options.arrows === !0 &&
                a.slideCount > a.options.slidesToShow &&
                !a.options.infinite &&
                (a.$prevArrow
                    .removeClass("slick-disabled")
                    .attr("aria-disabled", "false"),
                    a.$nextArrow
                        .removeClass("slick-disabled")
                        .attr("aria-disabled", "false"),
                    0 === a.currentSlide
                        ? (a.$prevArrow
                            .addClass("slick-disabled")
                            .attr("aria-disabled", "true"),
                            a.$nextArrow
                                .removeClass("slick-disabled")
                                .attr("aria-disabled", "false"))
                        : a.currentSlide >= a.slideCount - a.options.slidesToShow &&
                            a.options.centerMode === !1
                            ? (a.$nextArrow
                                .addClass("slick-disabled")
                                .attr("aria-disabled", "true"),
                                a.$prevArrow
                                    .removeClass("slick-disabled")
                                    .attr("aria-disabled", "false"))
                            : a.currentSlide >= a.slideCount - 1 &&
                            a.options.centerMode === !0 &&
                            (a.$nextArrow
                                .addClass("slick-disabled")
                                .attr("aria-disabled", "true"),
                                a.$prevArrow
                                    .removeClass("slick-disabled")
                                    .attr("aria-disabled", "false")));
        }),
        (b.prototype.updateDots = function () {
            var a = this;
            null !== a.$dots &&
                (a.$dots
                    .find("li")
                    .removeClass("slick-active")
                    .attr("aria-hidden", "true"),
                    a.$dots
                        .find("li")
                        .eq(Math.floor(a.currentSlide / a.options.slidesToScroll))
                        .addClass("slick-active")
                        .attr("aria-hidden", "false"));
        }),
        (b.prototype.visibility = function () {
            var a = this;
            a.options.autoplay &&
                (document[a.hidden] ? (a.interrupted = !0) : (a.interrupted = !1));
        }),
        (a.fn.slick = function () {
            var f,
                g,
                a = this,
                c = arguments[0],
                d = Array.prototype.slice.call(arguments, 1),
                e = a.length;
            for (f = 0; e > f; f++)
                if (
                    ("object" == typeof c || "undefined" == typeof c
                        ? (a[f].slick = new b(a[f], c))
                        : (g = a[f].slick[c].apply(a[f].slick, d)),
                        "undefined" != typeof g)
                )
                    return g;
            return a;
        });
}); function isValidAmount(e) {
    return /^\$?(\d)+$/.test(e);
}
function sanitizeAmount(e) {
    return "" == e
        ? ""
        : (/^\$/.test(e) && (e = e.replace(/^\$+/, "$")),
            /^\$/.test(e) || (e = "$" + e),
            (e = e.replace(/(^\$+)([0]+)(\d+)/, function (e, t, a, n) {
                return t + n;
            })));
}
function parseSanitizedAmount(e) {
    var t = "";
    return (
        isValidAmount(e) &&
        ((t = parseInt(e.replace("$", ""))), (t = isNaN(t) ? "" : t)),
        t
    );
}
function setAmountPayable(e) {
    var t = $('input[name="amount_payable"]'),
        a = $(".filter-chosen"),
        n = "",
        o = "";
    "" !== e && ((n = 100 * parseInt(e)), (o = "$" + e)),
        t.val(n),
        a.text(o),
        "" === e ? a.hide() : a.show(),
        t.valid(),
        0 === n
            ? $(".show-when-zero-amount").addClass("notice--visible")
            : $(".show-when-zero-amount").removeClass("notice--visible");
}
function processPwyw() {
    var e = ($("form.form-generator.form-pwyw"), $('input[name="type"]').val()),
        t = $('input[name="amount_payable"]').val() / 100,
        a = $("form input, form select");
    a = a.not(".custom-options input, .custom-options select");
    var n = a.serialize();
    $("#generate-term-submit-button").prop("disabled", !0),
        showRedirectModal(!0, "wait-1"),
        $.ajax({
            type: "POST",
            url: "/process-pwyw.php",
            data: n,
            dataType: "json",
        }).done(function (a, n, o) {
            200 == o.status
                ? a.error
                    ? (showRedirectModal(!1),
                        $("#generate-term-submit-button").prop("disabled", !1),
                        $("#error-container .error-message").text(a.message),
                        $("#error-container").show(),
                        $("html, body").animate(
                            { scrollTop: $("#error-container").offset().top },
                            1e3,
                            function () { }
                        ))
                    : (trackEvent(
                        {
                            category: e,
                            action: "purchase",
                            label: a.token ? a.token : "",
                            value: t,
                        },
                        function () { }
                    ),
                        setTimeout(function () {
                            var e = a.redirect;
                            showRedirectModal(!0, "wait-2", e),
                                setTimeout(function () {
                                    window.location.href = e;
                                }, 1e3),
                                $("#generate-term-submit-button").prop("disabled", !1);
                        }, 2e3))
                : (showRedirectModal(!1),
                    $("#generate-term-submit-button").prop("disabled", !1),
                    alert("There was an error encountered attempting to charge"));
        });
}
function initPwywUpgradeForm() {
    var e = $("form.form-pwyw-upgrade").validate({
        ignore: ":hidden:not(.validate-although-hidden)",
        rules: { amount_payable: { digits: !0, validAmount: !0 } },
        showErrors: function (e, t) {
            this.defaultShowErrors();
        },
        errorPlacement: function (e, t) { },
        submitHandler: function (e) {
            $("#error-container").hide();
            var t = $('input[name="type"]'),
                a = (t.val(), $('input[name="amount_payable"]').val()),
                n = parseInt(a) > 0;
            t.data("description");
            n
                ? pwyw_upgrade_checkout_handler.open({
                    name: "GetTerms",
                    description: "GetTerms Comprehensive Privacy & Terms Pack",
                    amount: parseInt(a),
                })
                : processPwywUpgrade();
        },
    });
    (window.form_validator_pwyw_upgrade = e),
        $("form.form-pwyw-upgrade .preset-amount").click(function (e) {
            e.preventDefault();
            var t = $(this);
            $(".preset-amount").removeClass("-selected"),
                t.addClass("-selected"),
                $('input[name="custom_amount_input"]').removeClass("-selected"),
                $('input[name="amount_payable"]').val(parseInt(100 * t.data("amount")));
        });
}
function processPwywUpgrade() {
    var e = $("form.form-pwyw-upgrade"),
        t = e.serialize(),
        a = $('input[name="pywy_token"]').val(),
        n = $('input[name="amount_payable"]').val() / 100;
    showRedirectModal(!0, "wait-1"),
        $.ajax({
            type: "POST",
            url: "/process-pwyw-upgrade.php",
            data: t,
            dataType: "json",
        }).done(function (e, t, o) {
            200 == o.status
                ? e.error
                    ? (showRedirectModal(!1),
                        $("#error-container .error-message").text(e.message),
                        $("#error-container").show())
                    : (trackEvent(
                        {
                            category: "comprehensive-pwyw-upgraded",
                            action: "purchase",
                            label: a,
                            value: n,
                        },
                        function () { }
                    ),
                        setTimeout(function () {
                            var t = e.redirect;
                            showRedirectModal(!0, "wait-2", t),
                                setTimeout(function () {
                                    window.location.href = t;
                                }, 1e3);
                        }, 2e3))
                : (showRedirectModal(!1),
                    alert("There was an error encountered attempting to charge"));
        });
}
function initPwywPolicyPage() {
    $(".show-pwyw-upgrade-modal").click(function (e) {
        e.preventDefault(), showPwywUpgradeModal(!0, $(this).data("context"));
    });
}
function showPwywUpgradeModal(e, t) {
    if (void 0 === e) var e = !0;
    if (void 0 === t) var t = "unlock";
    if (!e)
        return void $(".popup-confirm")
            .removeClass("active")
            .addClass("transition-opacity");
    $(".popup-confirm .modal-context").hide(),
        $(".popup-confirm .modal-context.modal-" + t).show(),
        $(".popup-confirm").addClass("active");
}
$(function () {
  initPwywPolicyPage();
});
var pwyw_checkout_handler = null,
    pwyw_upgrade_checkout_handler = null;
function slick_init(i) {
    var e = jQuery(window).width();
    jQuery.each(i, function (i, s) {
        jQuery(s.selector).length > 0 &&
            (void 0 === s.limit || null == s.limit
                ? jQuery(s.selector).hasClass("slick-initialized") ||
                jQuery(s.selector).slick(s.args)
                : operators[s.operator](e, s.limit)
                    ? jQuery(s.selector).hasClass("slick-initialized") ||
                    jQuery(s.selector).slick(s.args)
                    : jQuery(s.selector).hasClass("slick-initialized") &&
                    jQuery(s.selector).slick("unslick"));
    });
}
var slick_sliders = [
    {
        selector: ".choose-your-plan .col-3-flex",
        limit: "481",
        operator: "<",
        args: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: !0,
            infinite: !1,
            slide: ".col",
            adaptiveHeight: !0,
            dots: !0,
            arrows: !1,
            customPaging: function (i, e) {
                return "<span></span>";
            },
        },
    },
    {
        selector: ".blog-roll--related .grid",
        limit: "768",
        operator: "<",
        args: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: !1,
            slide: ".grid-item",
            dots: !0,
            arrows: !1,
            customPaging: function (i, e) {
                return "<span></span>";
            },
            responsive: [
                { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
            ],
        },
    },
    {
        selector: ".review-grid",
        limit: "481",
        operator: "<",
        args: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: !0,
            autoplay: !0,
            centerMode: !0,
            dots: !1,
            arrows: !1,
            customPaging: function (i, e) {
                return "<span></span>";
            },
        },
    },
],
    operators = {
        "<": function (i, e) {
            return i < e;
        },
        ">": function (i, e) {
            return i > e;
        },
        "<=": function (i, e) {
            return i <= e;
        },
        ">=": function (i, e) {
            return i >= e;
        },
        "==": function (i, e) {
            return i == e;
        },
    };
jQuery(document).ready(function () {
    slick_init(slick_sliders),
        jQuery(window).resize(function () {
            slick_init(slick_sliders);
        }),
        $(".choose-your-plan .col-3-flex").on("afterChange", function (i, e, s, r) {
            $(
                ".choose-your-plan .col-3-flex .slick-slide.slick-current.slick-active label"
            ).click();
        });
});
function init() {
    (iris.ref = $(".iris")),
        (iris.x = parseInt(iris.ref.css("left"))),
        (iris.y = parseInt(iris.ref.css("top"))),
        (iris.w = parseInt(iris.ref.css("width"))),
        (iris.h = parseInt(iris.ref.css("height"))),
        (lids = $(".lids")),
        (pupil.ref = $(".pupil")),
        (pupil.x = parseInt(pupil.ref.css("left"))),
        (pupil.y = parseInt(pupil.ref.css("top"))),
        (pupil.w = parseInt(pupil.ref.css("width"))),
        (pupil.h = parseInt(pupil.ref.css("height"))),
        animate();
}
function animate() {
    if (
        ((blinkTimer -= 1 + anger / 50),
            blinkTimer <= 0 && ((blinkTimer = randomInt(120, 600)), (blinkFlag = !0)),
            (distractionTimer -= 1) <= 0)
    ) {
        if (((distractionTimer = randomInt(60, 120)), !0 === distractedFlag)) {
            var e = eye.offset(),
                t = e.left,
                o = e.top,
                i = randomInt(mouse.x + t + r - 200, mouse.x + t + r + 200),
                a = randomInt(mouse.y + t + r - 200, mouse.y + t + r + 100),
                n = { x: i - r - t - center.x, y: a - r - o - center.y },
                s = Math.sqrt(n.x * n.x + n.y * n.y);
            s < distanceThreshold
                ? ((mouse.x = i - t - r), (mouse.y = a - o - r))
                : ((mouse.x = (n.x / s) * distanceThreshold + center.x),
                    (mouse.y = (n.y / s) * distanceThreshold + center.y));
        }
        distractedFlag = !0;
    }
    followMouse(),
        glare(),
        blink(),
        updateEyeParts(),
        (mouse.oldX = mouse.x),
        (mouse.oldY = mouse.y),
        setTimeout(animate, 16);
}
function updateEyeParts() {
    lidTop.pos >= lidMax
        ? (lidTop.pos = lidMax)
        : lidTop.pos <= 0 && (lidTop.pos = 0),
        lidBottom.pos >= lidMax
            ? (lidBottom.pos = lidMax)
            : lidBottom.pos <= 0 && (lidBottom.pos = 0),
        lids.css("border-top", lidTop.pos + "px solid " + skinColor),
        lids.css("border-bottom", lidBottom.pos + "px solid " + skinColor),
        iris.ref.css("left", iris.x + "px"),
        iris.ref.css("top", iris.y + "px");
}
function animate_favicon() {
    animating_icon ||
        ((animating_icon = !0),
            is_glaring
                ? (favicon.attr("href", icon_part_4),
                    setTimeout(function () {
                        favicon.attr("href", icon_part_2), (animating_icon = !1);
                    }, 201))
                : (favicon.attr("href", icon_part_2),
                    setTimeout(function () {
                        favicon.attr("href", icon_part_4),
                            setTimeout(function () {
                                favicon.attr("href", icon_part_2),
                                    setTimeout(function () {
                                        favicon.attr("href", icon_part_1), (animating_icon = !1);
                                    }, animation_speed);
                            }, animation_speed);
                    }, animation_speed)));
}
function blink() {
    !0 === blinkFlag
        ? ((lidTop.pos = interpolate(lidTop.pos, lidMax, lidTop.lerp, 0.6)),
            (lidBottom.pos = interpolate(lidBottom.pos, lidMax, lidBottom.lerp, 0.6)),
            animate_favicon())
        : eye.hasClass("glaring")
            ? ((lidTop.pos = interpolate(lidTop.pos, lidTop.glare, lidTop.lerp, 0.6)),
                (lidBottom.pos = interpolate(
                    lidBottom.pos,
                    lidTop.glare,
                    lidBottom.lerp,
                    0.6
                )))
            : ((lidTop.pos = interpolate(lidTop.pos, lidTop.normal, lidTop.lerp, 0.6)),
                (lidBottom.pos = interpolate(
                    lidBottom.pos,
                    lidBottom.normal,
                    lidBottom.lerp,
                    0.6
                ))),
        lidTop.pos >= lidMax - 1 &&
        lidBottom.pos >= lidMax - 1 &&
        ((blinkFlag = !1),
            eye.hasClass("glaring") || favicon.attr("href", icon_part_1));
}
function glare() {
    eye.hasClass("glaring") &&
        ((follow_mouse = !1),
            is_glaring ||
            ((is_glaring = !0),
                (distractedFlag = !0),
                (blinkFlag = !1),
                eye.removeClass("not-glaring"),
                favicon.attr("href", icon_part_2),
                (lidTop.posGoal = 90),
                (lidBottom.posGoal = 90),
                (lidTop.pos = interpolate(lidTop.pos, lidTop.posGoal, lidTop.lerp, 0.6)),
                (lidBottom.pos = interpolate(
                    lidBottom.pos,
                    lidBottom.posGoal,
                    lidBottom.lerp,
                    0.6
                )))),
        eye.hasClass("not-glaring") &&
        ((is_glaring = !1),
            (lidTop.pos = interpolate(lidTop.pos, lidTop.normal, lidTop.lerp, 0.6)),
            (lidBottom.pos = interpolate(
                lidBottom.pos,
                lidBottom.normal,
                lidBottom.lerp,
                0.6
            )),
            setTimeout(function () {
                (blinkFlag = !1), (distractedFlag = !1), (follow_mouse = !0);
            }, 200));
}
function followMouse() {
    (xp = interpolate(xp, mouse.x, 0, 0.12)),
        (yp = follow_mouse
            ? interpolate(yp, mouse.y, 0, 0.12)
            : interpolate(yp, (eye.height() - iris.h) / 2, 0, 0.12)),
        Math.sqrt(
            (mouse.x - mouse.oldX) * (mouse.x - mouse.oldX) +
            (mouse.y - mouse.oldY) * (mouse.y - mouse.oldY)
        ) >= 25 &&
        ((xp = interpolate(xp, mouse.x, 0, 0.4)),
            (yp = follow_mouse
                ? interpolate(yp, mouse.y, 0, 0.4)
                : interpolate(yp, (eye.height() - iris.h) / 2, 0, 0.4))),
        (iris.x = xp),
        (iris.y = yp);
}
function interpolate(e, t, o, i) {
    return e != t && (o = 0), o <= 1 && (o += i), (e = lerp(e, o, t));
}
function lerp(e, t, o) {
    return e * (1 - t) + o * t;
}
function randomInt(e, t) {
    return Math.floor(Math.random() * (t - e + 1)) + e;
}

function initContactForm() {
    $("form.form-contact").validate({
        errorPlacement: function () { },
        submitHandler: function (e) {
            var t = $(e),
                o = t.serialize();
            $("#error-container, #success-container").hide(),
                $.ajax({
                    type: "POST",
                    url: "/process-contact.php",
                    data: o,
                    dataType: "json",
                }).done(function (t, o, i) {
                    200 == i.status
                        ? t.error
                            ? $("#error-container").show()
                            : ($("#success-container").show(), $(e)[0].reset())
                        : $("#error-container").show();
                });
        },
    });
}
function initReviews() {
    0 != $("div.reviews").length &&
        ($(".reviews__rating").length &&
            $(".reviews__rating-item")
                .on("mouseover", function () {
                    $(this)
                        .prevAll(".reviews__rating-item")
                        .addClass("reviews__rating-item--active"),
                        $(this)
                            .nextAll(".reviews__rating-item")
                            .addClass("reviews__rating-item--hover");
                })
                .on("mouseout", function () {
                    $(".reviews__rating-item").removeClass(
                        "reviews__rating-item--active reviews__rating-item--hover"
                    );
                }),
            $("body").on("click", ".reviews__close", function (e) {
                $(".reviews").addClass("reviews--hide"),
                    setTimeout(function () {
                        $(".reviews").remove();
                    }, 1e3);
            }),
            $('input[name="sentiment"]').change(function () {
                var e = $('input[name="sentiment"]:checked').val();
                $(".reviews-when-" + e).show(),
                    $(".reviews__step").hide(),
                    $(".reviews__step--2").show();
            }),
            $("#review-form").validate({
                rules: {},
                submitHandler: function (e) {
                    var t = $(e),
                        o = t.serialize(),
                        i = t.find('button[type="submit"]');
                    i.text("Submitting...").prop("disabled", !0),
                        $.ajax({
                            type: "POST",
                            url: "/process-review.php",
                            data: o,
                            dataType: "json",
                        }).done(function (e, t, o) {
                            if ((i.prop("disabled", !1), 200 != o.status || e.error))
                                return void i.text("Try again");
                            i.text("Submit feedback"),
                                e.error ||
                                ($(".reviews__step").hide(),
                                    $(".reviews__step--3").show(),
                                    setTimeout(function () {
                                        $(".reviews").addClass("reviews--hide");
                                    }, 5e3));
                        });
                },
            }));
}
function calculateAddonsPrice() {
    var e = [],
        t = 0;
    return (
        $('input[name="languages[]"]:checked').each(function () {
            e.push($(this).val());
        }),
        e.length > 1 &&
        (t =
            (e.length - 1) *
            $("[data-addon-additional-language-price]").data(
                "addon-additional-language-price"
            )),
        t
    );
}
function updateCheckoutButton() {
    var e = $(".discount"),
        t = "",
        o = $('.form-generator input[name="type"]:checked'),
        i = o.data("price"),
        a = o.closest("label").data("plan");
    if ("basic" == o || "basic-app" == o)
        $("#generate-term-submit-button .filter-chosen")
            .text(a)
            .removeClass("discounted"),
            e.hide();
    else {
        var n = calculateAddonsPrice();
        n > 0 && (i += n),
            discount_amount > 0
                ? ((i -= discount_amount),
                    (i = Math.max(0, i)),
                    (t += "$" + (i / 100).toFixed(2)),
                    $("#generate-term-submit-button .filter-chosen")
                        .addClass("discounted")
                        .hide(),
                    e.show())
                : (n > 0
                    ? $("#generate-term-submit-button .filter-chosen").text(
                        "$" + (i / 100).toFixed(2)
                    )
                    : $("#generate-term-submit-button .filter-chosen").text(a),
                    $("#generate-term-submit-button .filter-chosen")
                        .removeClass("discounted")
                        .show(),
                    e.hide());
    }
    e.html(t);
}
function trackEvent(e, t) {
    if (void 0 === t) var t = function () { };
    var o = e.category,
        i = e.action,
        a = e.label,
        n = e.value;
    "undefined" != typeof dataLayer &&
        dataLayer.push({
            event: "GACustomEvent",
            event_category: o,
            event_action: i,
            event_label: a,
            event_value: n,
        }),
        "purchase" == i &&
        "undefined" != typeof fbq &&
        fbq("track", "Purchase", { value: n, currency: "USD" });
}
function showRedirectModal(e, t, o) {
    var i = $(".popup-wait");
    if (!e) return void i.removeClass("active");
    void 0 === t && (o = "wait-1"),
        void 0 === o && (o = "#"),
        i.find(".wait-1, .wait-2").hide(),
        i.find("." + t).show(),
        i.find("#purchased-policy-href").attr("href", o),
        i.addClass("active");
}
$(document).ready(function () {
    function e(e) {
        e.parent().removeClass("is-filled"),
            e.hasClass("error") && eye.addClass("glaring").removeClass("not-glaring"),
            e.val().length > 0 && e.parent().addClass("is-filled");
    }
    window.addEventListener("popstate", function () {
        showRedirectModal(!1);
    }),
        flatpickr(".date-picker", {
            altInput: !0,
            altFormat: "j F Y",
            dateFormat: "j F Y",
        }),
        $(".custom-select") &&
        $(".custom-select").each(function () {
            $(this).customSelect();
        }),
        initContactForm(),
        $("#select-country").selectize({ maxItems: 100 }),
        lazyload(),
        $('a[href*="#"]')
            .not('[href="#"]')
            .not('[href="#0"]')
            .click(function (e) {
                if (
                    location.pathname.replace(/^\//, "") ==
                    this.pathname.replace(/^\//, "") &&
                    location.hostname == this.hostname
                ) {
                    var t = $(this.hash);
                    (t = t.length ? t : $("[name=" + this.hash.slice(1) + "]")),
                        t.length &&
                        (e.preventDefault(),
                            $("html, body").animate(
                                { scrollTop: t.offset().top },
                                1e3,
                                function () {
                                    var e = $(t);
                                    if ((e.focus(), e.is(":focus"))) return !1;
                                    e.attr("tabindex", "-1"), e.focus();
                                }
                            ));
                }
            }),
        $(".back").on("click", function () {
            return (
                $(".generated").fadeOut(300, function () {
                    $(".intro. .faq").fadeIn(300);
                }),
                !1
            );
        }),
        $(".hamburger")
            .unbind("click")
            .click(function () {
                return (
                    $("body").hasClass("is-mobOpen")
                        ? $("body").removeClass("is-mobOpen")
                        : $("body").addClass("is-mobOpen"),
                    !1
                );
            }),
        $(".toggle-nav li.is-active a")
            .unbind("click")
            .click(function () {
                if ($(window).width() <= 500)
                    return (
                        $("body").hasClass("toggle-nav--is-open")
                            ? $("body").removeClass("toggle-nav--is-open")
                            : $("body").addClass("toggle-nav--is-open"),
                        !1
                    );
            }),
        $(".js-compare").on("click", function () {
            return (
                $(".choose-your-plan").hasClass("is-expanded")
                    ? ($(".choose-your-plan").removeClass("is-expanded"),
                        $(".plan-item__expand").stop().slideUp(500),
                        $(this).removeClass("is-active").text("What's included?"))
                    : ($(".choose-your-plan").addClass("is-expanded"),
                        $(".plan-item__expand").stop().slideDown(500),
                        $(this).addClass("is-active").text("Close Comparison")),
                !1
            );
        });
    $(".social").each(function () {
        $(this).append(
            '<a href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fgetterms.io" data-window-name="facebook-share-dialog" data-window-options="width=626,height=436,location=0,toolbar=0,status=0,menubar=0" title="Share on Facebook" class="facebook share-btn"><span class="hidden">Facebook</span></a>'
        ),
            $(this).append(
                '<a href="https://twitter.com/intent/tweet?text=http%3A%2F%2Fgetterms.io+-+Generate+a+simple+Terms+of+Service+and+Privacy+Policy+statement+for+your+website" data-window-name="tweet" data-window-options="height=300,width=500,location=0,toolbar=0,status=0,menubar=0" title="Share on Twitter" class="twitter share-btn"><span class="hidden">Twitter</span></a>'
            );
    }),
        $(".share-btn").on("click", function (e) {
            e.preventDefault();
            var t = $(this).attr("href"),
                o = $(this).attr("data-window-name"),
                i = $(this).attr("data-window-options");
            return window.open(t, o, i), !1;
        }),
        $.validator.addClassRules({
            "required-depends-on": {
                required: function (e) {
                    var t = $(e);
                    return $(t.attr("data-dependency")).is(":checked");
                },
            },
        }),
        $('.toggle-backup-cycle input[type="radio"]').bind("change", function (e) {
            ($input = $(".toggle-source-backup-cycle__other")),
                $input.is(":checked")
                    ? $(".toggle-backup-cycle__other").stop().slideDown()
                    : $(".toggle-backup-cycle__other").stop().slideUp();
        });
    var t = {
        "languages-tester": {
            required: function (e) {
                return 0 == $('input[name="languages[]"]:checked').length;
            },
        },
    },
        o = { "languages-tester": "Please select at least one language" };
    $("#coupon").length &&
        (t = {
            coupon_code: {
                remote: {
                    url: "/check-coupon.php",
                    type: "post",
                    dataType: "json",
                    data: {
                        type: function () {
                            return $('input[type="radio"][name="type"]:checked').val();
                        },
                    },
                    dataFilter: function (e) {
                        var t = JSON.parse(e),
                            o = t.valid;
                        return (
                            $(".coupon-overlay svg").hide(),
                            o
                                ? ($("#coupon-details").html(t.description_html).show(),
                                    (discount_formatted = t.amount),
                                    (discount_amount = parseInt(100 * t.amount)),
                                    $(".coupon-overlay svg.tick").show())
                                : ($("#coupon-details").html("").hide(),
                                    (discount_formatted = 0),
                                    (discount_amount = 0),
                                    $(".coupon-overlay svg.cross").show()),
                            updateCheckoutButton(),
                            o
                        );
                    },
                },
            },
        }),
        $("input#coupon").bind("change", function () {
            $(this).data("previousValue", null),
                "" == $(this).val() &&
                ($("#coupon-details").html("").hide(),
                    $(".coupon-overlay svg").hide(),
                    (discount_amount = 0),
                    (discount_formatted = 0),
                    updateCheckoutButton());
        });
    var i = $("form.form-generator:not(.form-pwyw)").validate({
        ignore: ":hidden:not(.validate-although-hidden)",
        rules: t,
        messages: o,
        showErrors: function (e, t) {
            t.length > 0
                ? eye.addClass("glaring").removeClass("not-glaring")
                : eye.removeClass("glaring").addClass("not-glaring"),
                this.defaultShowErrors();
        },
        errorPlacement: function (e, t) {
            "languages-tester" == t.attr("name") &&
                e.appendTo($("#languages-error-container"));
        },
        submitHandler: function (e) {
            $("#error-container").hide();
            var t = $('input[type="radio"][name="type"]:checked').val();
            if ("basic" == t) processCharge();
            else if ("basic-app" == t) processCharge();
            else {
                var o = $('input[name="type"]:checked'),
                    i = ($('input[name="coupon_code"]'), o.data("price")),
                    a = calculateAddonsPrice(),
                    n = i + a;
                discount_amount > 0 && ((n -= discount_amount), (n = Math.max(0, n)));
                var s = n > 0,
                    r = o.data("description");
                s
                    ? checkout_handler.open({
                        name: "GetTerms",
                        description: r,
                        amount: n,
                    })
                    : processCharge();
            }
        },
    });
    (window.form_validator = i),
        $("input.toggle").each(function () {
            $(this).bind("change", function () {
                var e = $(this),
                    t = e.closest(".col").find(".toggle-target");
                e.is(":checked") ? t.show() : t.hide();
            });
        }),
        $('.form-generator input[name="type"]').bind("change", function () {
            var e = $('.form-generator input[name="type"]:checked');
            e.closest("label").data("plan");
            $('input[name="languages[]"]:checked').prop("checked", !1),
                $('input[name="languages[]"]')
                    .first()
                    .prop("checked", !0)
                    .trigger("change"),
                updateCheckoutButton(),
                $(".choose-your-plan").hasClass("is-expanded")
                    ? $("html, body").animate(
                        { scrollTop: $("#privacy-address").offset().top - 80 },
                        1e3,
                        function () {
                            $("#privacy-address")
                                .blur()
                                .focus()
                                .parent()
                                .addClass("is-filled");
                        }
                    )
                    : $("#privacy-address").blur().focus().parent().addClass("is-filled"),
                i.resetForm(),
                $(".language-option").hide(),
                "custom" == e.val() || "custom-10" == e.val()
                    ? ($(".custom-options").stop().slideDown(),
                        $(".custom-language-option").show())
                    : $(".custom-options").stop().slideUp(),
                "comprehensive" == e.val() ||
                    "comprehensive-25" == e.val() ||
                    "comprehensive-app" == e.val() ||
                    "comprehensive-app" == e.val() ||
                    "comprehensive-web-app" == e.val() ||
                    "comprehensive-ecommerce" == e.val() ||
                    "comprehensive-news" == e.val()
                    ? ($(".comprehensive-options").stop().slideDown(),
                        $(".basic-language-options").stop().slideUp(),
                        $(".comprehensive-language-options").stop().slideDown(),
                        $(".comprehensive-language-option").show())
                    : ($(".comprehensive-options").stop().slideUp(),
                        $(".basic-language-options").stop().slideDown(),
                        $(".comprehensive-language-options").stop().slideUp()),
                "basic" == e.val() || "basic-app" == e.val()
                    ? ($(".paid-option").stop().slideUp(),
                        $(".free-option").stop().slideDown(),
                        $('input[name="purchaser_email"]').val(""),
                        (discount_formatted = 0),
                        (discount_amount = 0),
                        updateCheckoutButton())
                    : ($(".paid-option").stop().slideDown(),
                        $(".free-option").stop().slideUp(),
                        $("#coupon").length &&
                        "" != $("#coupon").val() &&
                        $("#coupon").data("previousValue", null).valid());
        }),
        $('input[name="languages[]"]').change(function () {
            var e = $('input[name="languages[]"]'),
                t = $('input[name="languages[]"]:checked');
            e.not(t).removeClass("language-first"),
                1 == t.length
                    ? t.addClass("language-first")
                    : t.length > 1 &&
                    0 == $('input[name="languages[]"].language-first').length &&
                    t.first().addClass("language-first"),
                t.each(function () {
                    $(this).hasClass("language-first")
                        ? $(this).closest("label").find(".additional-fee").hide()
                        : $(this).closest("label").find(".additional-fee").show();
                }),
                e.not(t).each(function () {
                    $(this).closest("label").find(".additional-fee").hide();
                }),
                updateCheckoutButton();
        }),
        $(".show-disclaimer").on("click", function (e) {
            e.preventDefault(), $("#disclaimer").slideToggle();
        }),
        $(".tab.switch")
            .unbind("click.Tab")
            .bind("click.Tab", function () {
                if (!$(this).data("switch")) return !1;
                var e = "#" + $(this).data("switch");
                $(this)
                    .closest(".tabs")
                    .find(".tab.switch.active")
                    .removeClass("active"),
                    $(this).addClass("active"),
                    $(".tab-content.active").removeClass("active").fadeOut(300),
                    $(e).addClass("active").fadeIn(300),
                    $(document.body).trigger("sticky_kit:recalc");
            }),
        $(".filter .switch")
            .unbind("click")
            .click(function () {
                $(this).closest(".filter").find(".switch").removeClass("active"),
                    $(this).addClass("active");
                var e = "#" + $(this).data("switch");
                return (
                    $(this)
                        .closest(".tab-content")
                        .find(".content-visual, .content-code")
                        .not(e)
                        .removeClass("active")
                        .fadeOut(300),
                    $(e).addClass("active").fadeIn(300),
                    !1
                );
            }),
        $(".form-inputs input, .form-inputs textarea")
            .each(function () {
                e($(this));
            })
            .on("focus blur click", function () {
                if (
                    "privacy-address" == $(this).attr("id") &&
                    0 == $(this).val().length
                ) {
                    var t = $(this);
                    setTimeout(function () {
                        t.val("http://");
                    }, 250);
                }
                e($(this));
            }),
        $(".filter").stick_in_parent(),
        initReviews(),
        $('select[name="change-language"]').change(function () {
            var e = $(this).data("base-url");
            window.location.href =
                e + "?language=" + encodeURIComponent($(this).val());
        });
    var a = $("body").data("preselect-type");
    if (a) {
        var n = $('input[name="type"][value="' + a + '"]');
        n.length &&
            setTimeout(function () {
                n.prop("checked", !0).trigger("change");
            }, 500);
    }
    $("#coupon").is(":visible") &&
        $("#coupon").data("previousValue", null).valid(),
        $('input[name="type"]:checked').length > 0 && updateCheckoutButton();
});

var clipboard = new Clipboard(".clipboard", {
    text: function (e) {
        var t = $(e),
            o = t.closest(".tab-content");
        if (o.find(".switch-content.active").hasClass("content-visual"))
            var i = o.find(".switch-content.content-visual").text();
        else var i = o.find(".switch-content.content-code pre").text();
        return i;
    },
});
clipboard.on("success", function (e) {
    "yes" == $("body").data("show-pwyw-upgrade")
        ? showPwywUpgradeModal(!0, "clipboard")
        : ($(".popup-confirm--flash").stop().hide().removeClass("active"),
            $(".popup-confirm--flash").show().addClass("active"),
            setTimeout(function () {
                $(".popup-confirm--flash").hide().removeClass("active");
            }, 1500));
}),
    $(".popup-confirm .close-button").on("click", function () {
        showPwywUpgradeModal(!1);
    }),
    clipboard.on("error", function (e) { });
var checkout_handler = null,
    discount_formatted = 0,
    discount_amount = 0;
