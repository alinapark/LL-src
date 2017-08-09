webpackJsonp([2, 0], {

    0: function(e, t, i) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var o = i(84),
            s = n(o),
            a = i(78),
            r = n(a),
            u = i(77),
            l = n(u);
        l.default.attach(document.body), new s.default({
            el: "#app",
            template: "<App/>",
            components: {
                App: r.default
            }
        })

    },
    37: function(e, t, i) {
        var n,
            o,
            s;
        (function(e) {
            "use strict";
            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var r = i(41),
                u = a(r),
                l = i(44),
                m = a(l);
            !function(i, a) {
                "object" == (0, m.default)(t) && "object" == (0, m.default)(e) ? e.exports = a() : (o = [], n = a, s = "function" == typeof n ? n.apply(t, o) : n, !(void 0 !== s && (e.exports = s)))
            }(void 0, function() {
                return function(e) {
                    function t(n) {
                        if (i[n])
                            return i[n].exports;
                        var o = i[n] = {
                            exports: {},
                            id: n,
                            loaded: !1
                        };
                        return e[n].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports
                    }
                    var i = {};
                    return t.m = e, t.c = i, t.p = "", t(0)
                }([function(e, t, i) {
                    function n(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    var o = i(7),
                        s = n(o);
                    e.exports = s.default
                }, , function(e, t, i) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n = i(3);
                    t.default = {
                        name: "CirleMenu",
                        props: {
                            type: {
                                type: String,
                                required: !0
                            },
                            number: {
                                type: Number,
                                required: !0,
                                validator: function(e) {
                                    return e > 1 && e < 5
                                }
                            },
                            animate: String,
                            mask: String,
                            circle: Boolean,
                            btn: Boolean,
                            colors: Array
                        },
                        data: function() {
                            return {
                                open: !1,
                                toggleAnimate: !1,
                                MaskToggle: !1,
                                BtnColor: "#ffec4f",
                                Item1Color: "#55acee",
                                Item2Color: "#ffec4f",
                                Item3Color: "#55acee",
                                Item4Color: "#ffec4f"
                            }
                        },
                        methods: {
                            toggle: function() {
                                this.open = !this.open, this.toggleAnimate = !this.toggleAnimate, this.MaskToggle = !this.MaskToggle
                            }
                        },
                        computed: {
                            AnimateClass: function() {
                                return this.toggleAnimate ? this.animate : ""
                            },
                            isShow: function() {
                                return 3 !== this.number ? 4 === this.number : "middle" !== this.type && "middle-around" !== this.type || void console.error("when type is 'middle' or 'middle-around',this number can not 3 ---VueCircleMenu")
                            }
                        },
                        mounted: function() {
                            if (this.colors)
                                if (this.colors.every(n.isColors) && 5 === this.colors.length)
                                    for (var e = 0, t = this.colors.length; e < t; e++)
                                        this.BtnColor = this.colors[0], this.Item1Color = this.colors[1], this.Item2Color = this.colors[2], this.Item3Color = this.colors[3], this.Item4Color = this.colors[4];
                                else
                                    console.error("this Array of colors must be hexcolor or rgbcolor and Array length must be 5 ---VueCircleMenu")
                        }
                    }
                }, function(e, t) {
                    function i(e) {
                        return n.test(e) || o.test(e)
                    }
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.isColors = i;
                    var n = /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/,
                        o = /^[rR][gG][Bb][Aa]?[\(]([\s]*(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?),){2}[\s]*(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?),?[\s]*(0\.\d{1,2}|1|0)?[\)]{1}$/g
                }, function(e, t, i) {
                    t = e.exports = i(5)(), t.push([e.id, '.bottom .oy-menu-group .btn-list .oy-menu-item,.left .oy-menu-group .btn-list .oy-menu-item,.middle-around .oy-menu-group .btn-list .oy-menu-item,.middle .oy-menu-group .btn-list .oy-menu-item,.right .oy-menu-group .btn-list .oy-menu-item,.top .oy-menu-group .btn-list .oy-menu-item{position:absolute;right:0;top:0;left:0;bottom:0;opacity:0}.bottom .oy-menu-group.open .btn-list .oy-menu-item,.left .oy-menu-group.open .btn-list .oy-menu-item,.middle-around .oy-menu-group.open .btn-list .oy-menu-item,.middle .oy-menu-group.open .btn-list .oy-menu-item,.right .oy-menu-group.open .btn-list .oy-menu-item,.top .oy-menu-group.open .btn-list .oy-menu-item{opacity:1}.top .oy-menu-group .btn-list .oy-menu-item.oy-menu-item_1,.top .oy-menu-group .btn-list .oy-menu-item.oy-menu-item_2,.top .oy-menu-group .btn-list .oy-menu-item.oy-menu-item_3,.top .oy-menu-group .btn-list .oy-menu-item.oy-menu-item_4{transition:.2s .1s}.top .oy-menu-group.open .btn-list .oy-menu-item.oy-menu-item_1{top:-55px;transition:.2s .1s}.top .oy-menu-group.open .btn-list .oy-menu-item.oy-menu-item_2{top:-110px;transition:.2s .1s}.top .oy-menu-group.open .btn-list .oy-menu-item.oy-menu-item_3{top:-165px;transition:.2s .1s}.top .oy-menu-group.open .btn-list .oy-menu-item.oy-menu-item_4{top:-220px;transition:.2s .1s}.bottom .oy-menu-group .btn-list .oy-menu-item.oy-menu-item_1,.bottom .oy-menu-group .btn-list .oy-menu-item.oy-menu-item_2,.bottom .oy-menu-group .btn-list .oy-menu-item.oy-menu-item_3,.bottom .oy-menu-group .btn-list .oy-menu-item.oy-menu-item_4{transition:.2s .1s}.bottom .oy-menu-group.open .btn-list .oy-menu-item.oy-menu-item_1{top:55px}.bottom .oy-menu-group.open .btn-list .oy-menu-item.oy-menu-item_2{top:110px}.bottom .oy-menu-group.open .btn-list .oy-menu-item.oy-menu-item_3{top:165px}.bottom .oy-menu-group.open .btn-list .oy-menu-item.oy-menu-item_4{top:220px}.left .oy-menu-group .btn-list .oy-menu-item.oy-menu-item_1,.left .oy-menu-group .btn-list .oy-menu-item.oy-menu-item_2,.left .oy-menu-group .btn-list .oy-menu-item.oy-menu-item_3,.left .oy-menu-group .btn-list .oy-menu-item.oy-menu-item_4{transition:.2s .1s}.left .oy-menu-group.open .btn-list .oy-menu-item.oy-menu-item_1{left:55px}.left .oy-menu-group.open .btn-list .oy-menu-item.oy-menu-item_2{left:110px}.left .oy-menu-group.open .btn-list .oy-menu-item.oy-menu-item_3{left:165px}.left .oy-menu-group.open .btn-list .oy-menu-item.oy-menu-item_4{left:220px}.right .oy-menu-group.open .btn-list .oy-menu-item.oy-menu-item_1{left:-55px}.right .oy-menu-group.open .btn-list .oy-menu-item.oy-menu-item_2{left:-110px}.right .oy-menu-group.open .btn-list .oy-menu-item.oy-menu-item_3{left:-165px}.right .oy-menu-group.open .btn-list .oy-menu-item.oy-menu-item_4{left:-220px}.middle .oy-menu-group .btn-list .oy-menu-item.oy-menu-item_1,.middle .oy-menu-group .btn-list .oy-menu-item.oy-menu-item_2,.middle .oy-menu-group .btn-list .oy-menu-item.oy-menu-item_3,.middle .oy-menu-group .btn-list .oy-menu-item.oy-menu-item_4,.right .oy-menu-group .btn-list .oy-menu-item.oy-menu-item_1,.right .oy-menu-group .btn-list .oy-menu-item.oy-menu-item_2,.right .oy-menu-group .btn-list .oy-menu-item.oy-menu-item_3,.right .oy-menu-group .btn-list .oy-menu-item.oy-menu-item_4{transition:.2s .1s}.middle .oy-menu-group.open .btn-list .oy-menu-item.oy-menu-item_1{left:-55px}.middle .oy-menu-group.open .btn-list .oy-menu-item.oy-menu-item_2{left:55px}.middle .oy-menu-group.open .btn-list .oy-menu-item.oy-menu-item_3{left:-110px}.middle .oy-menu-group.open .btn-list .oy-menu-item.oy-menu-item_4{left:110px}.middle-around .oy-menu-group .btn-list .oy-menu-item.oy-menu-item_1,.middle-around .oy-menu-group .btn-list .oy-menu-item.oy-menu-item_2,.middle-around .oy-menu-group .btn-list .oy-menu-item.oy-menu-item_3,.middle-around .oy-menu-group .btn-list .oy-menu-item.oy-menu-item_4{transition:.2s .1s}.middle-around .oy-menu-group.open .btn-list .oy-menu-item.oy-menu-item_1{left:-75px;top:0}.middle-around .oy-menu-group.open .btn-list .oy-menu-item.oy-menu-item_2{left:75px;top:0}.middle-around .oy-menu-group.open .btn-list .oy-menu-item.oy-menu-item_3{left:40px;top:-65px}.middle-around .oy-menu-group.open .btn-list .oy-menu-item.oy-menu-item_4{left:-40px;top:-65px}.#ffec4f{background:#ffec4f}.oy-mask-white{background:hsla(0,0%,100%,.8)}.oy-mask-black,.oy-mask-white,.oy-mask-white_transparent{position:fixed;z-index:1000;top:0;right:0;left:0;bottom:0}.oy-mask-black{background:rgba(0,0,0,.6)}.oy-mask-black_transparent{position:fixed;z-index:1000;top:0;right:0;left:0;bottom:0}.oy-menu-group{z-index:1001}.oy-menu-btn{width:48px;height:48px;line-height:50px;display:inline-block;border:none;text-align:center;position:relative}.oy-menu-btn:active{box-shadow:inset 0 0 1000px rgba(0,0,0,.5)}.oy-menu-btn-Circle{border-radius:50%;outline:none}.oy-menu-item{width:48px;height:48px;line-height:50px;display:inline-block;border:none;text-align:center;position:relative;border-radius:50%}.oy-menu-item:active{box-shadow:inset 0 0 1000px rgba(0,0,0,.5)}.icon-bars{background:#fff;height:1px;width:22px;margin:auto;display:block;position:relative;transition:.2s .2s}.icon-bars:after{content:"";position:absolute;height:22px;width:1px;background:#fff;top:-10px}.oy-menu-group.open .icon-bars{transform:rotate(45deg)}.oy-menu-group{position:relative;float:right;transition:.2s}.oy-menu-group .btn-toggle{z-index:15}', ""])
                }, function(e, t) {
                    e.exports = function() {
                        var e = [];
                        return e.toString = function() {
                            for (var e = [], t = 0; t < this.length; t++) {
                                var i = this[t];
                                i[2] ? e.push("@media " + i[2] + "{" + i[1] + "}") : e.push(i[1])
                            }
                            return e.join("")
                        }, e.i = function(t, i) {
                            "string" == typeof t && (t = [[null, t, ""]]);
                            for (var n = {}, o = 0; o < this.length; o++) {
                                var s = this[o][0];
                                "number" == typeof s && (n[s] = !0)
                            }
                            for (o = 0; o < t.length; o++) {
                                var a = t[o];
                                "number" == typeof a[0] && n[a[0]] || (i && !a[2] ? a[2] = i : i && (a[2] = "(" + a[2] + ") and (" + i + ")"), e.push(a))
                            }
                        }, e
                    }
                }, , function(e, t, i) {
                    var n,
                        o;
                    i(10), n = i(2);
                    var s = i(8);
                    o = n = n || {}, "object" != (0, m.default)(n.default) && "function" != typeof n.default || (o = n = n.default), "function" == typeof o && (o = o.options), o.render = s.render, o.staticRenderFns = s.staticRenderFns, e.exports = n
                }, function(e, t) {
                    e.exports = {
                        render: function() {
                            var e = this,
                                t = e.$createElement,
                                i = e._self._c || t;
                            return i("div", {
                                attrs: {
                                    id: "CircleMenu"
                                }
                            }, [i("div", {
                                class: e.type,
                                attrs: {
                                    animate: e.animate
                                }
                            }, ["black" === e.mask ? i("div", {
                                directives: [{
                                    name: "show",
                                    rawName: "v-show",
                                    value: e.MaskToggle,
                                    expression: "MaskToggle"
                                }],
                                staticClass: "oy-mask-black",
                                on: {
                                    click: e.toggle
                                }
                            }) : e._e(), e._v(" "), "white" === e.mask ? i("div", {
                                directives: [{
                                    name: "show",
                                    rawName: "v-show",
                                    value: e.MaskToggle,
                                    expression: "MaskToggle"
                                }],
                                staticClass: "oy-mask-white",
                                on: {
                                    click: e.toggle
                                }
                            }) : e._e(), e._v(" "), i("div", {
                                staticClass: "oy-menu-group",
                                class: {
                                    open: e.open
                                }
                            }, [i("button", {
                                staticClass: "oy-menu-btn btn-toggle #ffec4f",
                                class: {
                                    "oy-menu-btn-Circle": e.circle
                                },
                                style: {
                                    background: e.BtnColor
                                },
                                on: {
                                    click: e.toggle
                                }
                            }, [e.btn ? i("i", {
                                staticClass: "icon-bars"
                            }) : e._e(), e._v(" "), e._t("item_btn")], 2), e._v(" "), i("div", {
                                staticClass: "btn-list"
                            }, [i("div", {
                                directives: [{
                                    name: "show",
                                    rawName: "v-show",
                                    value: e.number > 1 && e.number < 5,
                                    expression: "number > 1 && number < 5"
                                }],
                                staticClass: "oy-menu-item oy-menu-item_1",
                                class: e.AnimateClass,
                                style: {
                                    background: e.Item1Color
                                }
                            }, [e._t("item_1")], 2), e._v(" "), i("div", {
                                directives: [{
                                    name: "show",
                                    rawName: "v-show",
                                    value: e.number > 1 && e.number < 5,
                                    expression: "number > 1 && number < 5"
                                }],
                                staticClass: "oy-menu-item oy-menu-item_2",
                                class: e.AnimateClass,
                                style: {
                                    background: e.Item2Color
                                }
                            }, [e._t("item_2")], 2), e._v(" "), i("div", {
                                directives: [{
                                    name: "show",
                                    rawName: "v-show",
                                    value: e.isShow,
                                    expression: "isShow"
                                }],
                                staticClass: "oy-menu-item oy-menu-item_3",
                                class: e.AnimateClass,
                                style: {
                                    background: e.Item3Color
                                }
                            }, [e._t("item_3")], 2), e._v(" "), i("div", {
                                directives: [{
                                    name: "show",
                                    rawName: "v-show",
                                    value: 4 === e.number,
                                    expression: "number === 4"
                                }],
                                staticClass: "oy-menu-item oy-menu-item_4",
                                class: e.AnimateClass,
                                style: {
                                    background: e.Item4Color
                                }
                            }, [e._t("item_4")], 2)])])])])
                        },
                        staticRenderFns: []
                    }
                }, function(e, t, i) {
                    function n(e, t) {
                        for (var i = 0; i < e.length; i++) {
                            var n = e[i],
                                o = p[n.id];
                            if (o) {
                                o.refs++;
                                for (var s = 0; s < o.parts.length; s++)
                                    o.parts[s](n.parts[s]);
                                for (; s < n.parts.length; s++)
                                    o.parts.push(l(n.parts[s], t))
                            } else {
                                for (var a = [], s = 0; s < n.parts.length; s++)
                                    a.push(l(n.parts[s], t));
                                p[n.id] = {
                                    id: n.id,
                                    refs: 1,
                                    parts: a
                                }
                            }
                        }
                    }
                    function o(e) {
                        for (var t = [], i = {}, n = 0; n < e.length; n++) {
                            var o = e[n],
                                s = o[0],
                                a = o[1],
                                r = o[2],
                                u = o[3],
                                l = {
                                    css: a,
                                    media: r,
                                    sourceMap: u
                                };
                            i[s] ? i[s].parts.push(l) : t.push(i[s] = {
                                id: s,
                                parts: [l]
                            })
                        }
                        return t
                    }
                    function s(e, t) {
                        var i = y(),
                            n = b[b.length - 1];
                        if ("top" === e.insertAt)
                            n ? n.nextSibling ? i.insertBefore(t, n.nextSibling) : i.appendChild(t) : i.insertBefore(t, i.firstChild), b.push(t);
                        else {
                            if ("bottom" !== e.insertAt)
                                throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
                            i.appendChild(t)
                        }
                    }
                    function a(e) {
                        e.parentNode.removeChild(e);
                        var t = b.indexOf(e);
                        t >= 0 && b.splice(t, 1)
                    }
                    function r(e) {
                        var t = document.createElement("style");
                        return t.type = "text/css", s(e, t), t
                    }
                    function l(e, t) {
                        var i,
                            n,
                            o;
                        if (t.singleton) {
                            var s = v++;
                            i = _ || (_ = r(t)), n = m.bind(null, i, s, !1), o = m.bind(null, i, s, !0)
                        } else
                            i = r(t), n = c.bind(null, i), o = function() {
                                a(i)
                            };
                        return n(e), function(t) {
                            if (t) {
                                if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap)
                                    return;
                                n(e = t)
                            } else
                                o()
                        }
                    }
                    function m(e, t, i, n) {
                        var o = i ? "" : n.css;
                        if (e.styleSheet)
                            e.styleSheet.cssText = g(t, o);
                        else {
                            var s = document.createTextNode(o),
                                a = e.childNodes;
                            a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(s, a[t]) : e.appendChild(s)
                        }
                    }
                    function c(e, t) {
                        var i = t.css,
                            n = t.media,
                            o = t.sourceMap;
                        if (n && e.setAttribute("media", n), o && (i += "\n/*# sourceURL=" + o.sources[0] + " */", i += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent((0, u.default)(o)))) + " */"), e.styleSheet)
                            e.styleSheet.cssText = i;
                        else {
                            for (; e.firstChild;)
                                e.removeChild(e.firstChild);
                            e.appendChild(document.createTextNode(i))
                        }
                    }
                    var p = {},
                        d = function(e) {
                            var t;
                            return function() {
                                return "undefined" == typeof t && (t = e.apply(this, arguments)), t
                            }
                        },
                        f = d(function() {
                            return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())
                        }),
                        y = d(function() {
                            return document.head || document.getElementsByTagName("head")[0]
                        }),
                        _ = null,
                        v = 0,
                        b = [];
                    e.exports = function(e, t) {
                        t = t || {}, "undefined" == typeof t.singleton && (t.singleton = f()), "undefined" == typeof t.insertAt && (t.insertAt = "bottom");
                        var i = o(e);
                        return n(i, t), function(e) {
                            for (var s = [], a = 0; a < i.length; a++) {
                                var r = i[a],
                                    u = p[r.id];
                                u.refs--, s.push(u)
                            }
                            if (e) {
                                var l = o(e);
                                n(l, t)
                            }
                            for (var a = 0; a < s.length; a++) {
                                var u = s[a];
                                if (0 === u.refs) {
                                    for (var m = 0; m < u.parts.length; m++)
                                        u.parts[m]();
                                    delete p[u.id]
                                }
                            }
                        }
                    };
                    var g = function() {
                        var e = [];
                        return function(t, i) {
                            return e[t] = i, e.filter(Boolean).join("\n")
                        }
                    }()
                }, function(e, t, i) {
                    var n = i(4);
                    "string" == typeof n && (n = [[e.id, n, ""]]), i(9)(n, {}), n.locals && (e.exports = n.locals)
                }])
            })
        }).call(t, i(85)(e))
    },
    38: function(e, t, i) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = i(79),
            s = n(o),
            a = i(80),
            r = n(a),
            u = i(37),
            l = n(u);
        t.default = {
            name: "app",
            components: {
                CircleMenu: l.default,
                selector: s.default,
                switcher: r.default
            },
            data: function() {
                return {
                    TypeValue: "top",
                    MaskType: "",
                    AnimateType: "",
                    isCircle: !1,
                    isBtn: !1,
                    NumberType: 4,
                    type: ["top", "bottom", "left", "right", "middle", "middle-around"],
                    mask: ["transparent", "white", "black"],
                    animate: ["simple", "animated rubberBand", "animated jello", "animated swing", "animated flash", "animated bounce", "animated flip"],
                    number: [2, 3, 4]
                }
            },
            computed: {
                MenuLeft: function() {
                    return "left" === this.TypeValue
                },
                MenuRight: function() {
                    return "right" === this.TypeValue
                },
                MenuBottom: function() {
                    return "bottom" === this.TypeValue
                },
                MenuMiddle: function() {
                    return "left" !== this.TypeValue && "right" !== this.TypeValue && "bottom" !== this.TypeValue
                }
            },
            methods: {
                item1: function() {
                    alert("You chose Sports!")
                },
                item2: function() {
                    alert("You chose Arts!")
                },
                item3: function() {
                    alert("You chose Languages!")
                },
                item4: function() {
                    alert("You chose Sciences!")
                }
            }
        }
    },
    39: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = {
            name: "selector",
            props: {
                title: String,
                options: Array
            },
            data: function() {
                return {
                    currentValue: ""
                }
            },
            watch: {
                currentValue: function(e) {
                    this.$emit("input", e)
                }
            }
        }
    },
    40: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = {
            data: function() {
                return {
                    currentValue: this.value
                }
            },
            props: {
                title: String
            },
            watch: {
                currentValue: function(e) {
                    this.$emit("input", e)
                }
            }
        }
    },
    75: function(e, t) {},
    76: function(e, t) {},
    78: function(e, t, i) {
        var n,
            o;
        i(76), n = i(38);
        var s = i(82);
        o = n = n || {}, "object" != typeof n.default && "function" != typeof n.default || (o = n = n.default), "function" == typeof o && (o = o.options), o.render = s.render, o.staticRenderFns = s.staticRenderFns, e.exports = n
    },
    79: function(e, t, i) {
        var n,
            o;
        n = i(39);
        var s = i(83);
        o = n = n || {}, "object" != typeof n.default && "function" != typeof n.default || (o = n = n.default), "function" == typeof o && (o = o.options), o.render = s.render, o.staticRenderFns = s.staticRenderFns, e.exports = n
    },
    80: function(e, t, i) {
        var n,
            o;
        i(75), n = i(40);
        var s = i(81);
        o = n = n || {}, "object" != typeof n.default && "function" != typeof n.default || (o = n = n.default), "function" == typeof o && (o = o.options), o.render = s.render, o.staticRenderFns = s.staticRenderFns, o._scopeId = "data-v-49408a42", e.exports = n
    },
    81: function(e, t) {
        e.exports = {
            render: function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("div", {
                    staticClass: "weui-cell weui-cell_switch"
                }, [i("div", {
                    staticClass: "weui-cell__bd"
                }, [e._v(e._s(e.title))]), e._v(" "), i("div", {
                    staticClass: "weui-cell__ft"
                }, [i("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.currentValue,
                        expression: "currentValue"
                    }],
                    staticClass: "weui-switch",
                    attrs: {
                        type: "checkbox"
                    },
                    domProps: {
                        checked: Array.isArray(e.currentValue) ? e._i(e.currentValue, null) > -1 : e.currentValue
                    },
                    on: {
                        click: function(t) {
                            var i = e.currentValue,
                                n = t.target,
                                o = !!n.checked;
                            if (Array.isArray(i)) {
                                var s = null,
                                    a = e._i(i, s);
                                o ? a < 0 && (e.currentValue = i.concat(s)) : a > -1 && (e.currentValue = i.slice(0, a).concat(i.slice(a + 1)))
                            } else
                                e.currentValue = o
                        }
                    }
                })])])
            },
            staticRenderFns: []
        }
    },
        82: function(e, t) {
        e.exports = {
            render: function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("div", {
                    attrs: {
                        id: "app"
                    }
                }, [i("div", {
                    staticClass: "weui-tab__panel"
                }, [i("circle-menu", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.MenuBottom,
                        expression: "MenuBottom"
                    }],
                    staticClass: "ab",
                    attrs: {
                        animate: e.AnimateType,
                        type: e.TypeValue,
                        mask: e.MaskType,
                        id: "menu",
                        circle: e.isCircle,
                        btn: e.isBtn,
                        number: e.NumberType
                    }
                }, [i("a", {
                    staticClass: "fa fa-futbol-o fa-lg",
                    on: {
                        click: e.item1
                    },
                    slot: "item_1"
                }), e._v(" "), i("a", {
                    staticClass: "fa fa-paint-brush fa-lg",
                    on: {
                        click: e.item2
                    },
                    slot: "item_2"
                }), e._v(" "), i("a", {
                    staticClass: "fa fa-language fa-lg",
                    on: {
                        click: e.item3
                    },
                    slot: "item_3"
                }), e._v(" "), i("a", {
                    staticClass: "fa fa-flask fa-lg",
                    on: {
                        click: e.item4
                    },
                    slot: "item_4"
                })]), e._v(" "), e._m(0), e._v(" "), i("div", {
                    attrs: {
                        id: "box"
                    }
                }, [i("div", {
                    staticClass: "weui-cells"
                }, [i("selector", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.TypeValue,
                        expression: "TypeValue"
                    }],
                    attrs: {
                        title: "TYPE",
                        options: e.type
                    },
                    domProps: {
                        value: e.TypeValue
                    },
                    on: {
                        input: function(t) {
                            e.TypeValue = t
                        }
                    }
            
                }), e._v(" "), i("selector", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.MaskType,
                        expression: "MaskType"
                    }],
                    attrs: {
                        title: "MASK",
                        options: e.mask
                    },
                    domProps: {
                        value: e.MaskType
                    },
                    on: {
                        input: function(t) {
                            e.MaskType = t
                        }
                    }
                }), e._v(" "), i("selector", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.AnimateType,
                        expression: "AnimateType"
                    }],
                    attrs: {
                        title: "ANIMATE",
                        options: e.animate
                    },
                    domProps: {
                        value: e.AnimateType
                    },
                    on: {
                        input: function(t) {
                            e.AnimateType = t
                        }
                    }
                }), e._v(" "), i("switcher", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.isCircle,
                        expression: "isCircle"
                    }],
                    attrs: {
                        title: "CIRCLE"
                    },
                    domProps: {
                        value: e.isCircle
                    },
                    on: {
                        input: function(t) {
                            e.isCircle = t
                        }
                    }
                }), e._v(" "), i("switcher", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.isBtn,
                        expression: "isBtn"
                    }],
                    attrs: {
                        title: "SIGN"
                    },
                    domProps: {
                        value: e.isBtn
                    },
                    on: {
                        input: function(t) {
                            e.isBtn = t
                        }
                    }
                })], 1)]), e._v(" "), i("br"), e._v(" "), i("div", {
                    staticClass: "weui-footer"
                }, [i("p", {
                    staticClass: "weui-footer__links"
                }, [i("a", {
                    staticClass: "weui-footer__link",
                    on: {
                        click: function(e) {}
                    }
                }, [e._v("Life Learner")])]), e._v(" "), i("p", {
                    staticClass: "weui-footer__text"
                }, [e._v("Live long and learn")])])], 1), e._v(" "), i("div", {
                    staticClass: "weui-tabbar nav"
                }, [i("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.MenuLeft,
                        expression: "MenuLeft"
                    }],
                    staticClass: "weui-tabbar__item weui-flex"
                }, [e._m(1), e._v(" "), i("circle-menu", {
                    attrs: {
                        animate: e.AnimateType,
                        type: e.TypeValue,
                        mask: e.MaskType,
                        id: "menu",
                        circle: e.isCircle,
                        btn: e.isBtn,
                        number: e.NumberType
                    }
                }, [i("a", {
                    staticClass: "fa fa-futbol-o fa-lg",
                    on: {
                        click: e.item1
                    },
                    slot: "item_1"
                }), e._v(" "), i("a", {
                    staticClass: "fa fa-paint-brush fa-lg",
                    on: {
                        click: e.item2
                    },
                    slot: "item_2"
                }), e._v(" "), i("a", {
                    staticClass: "fa fa-language fa-lg",
                    on: {
                        click: e.item3
                    },
                    slot: "item_3"
                }), e._v(" "), i("a", {
                    staticClass: "fa fa-flask fa-lg",
                    on: {
                        click: e.item4
                    },
                    slot: "item_4"
                })]), e._v(" "), e._m(2)], 1), e._v(" "), e._m(3), e._v(" "), i("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.MenuMiddle,
                        expression: "MenuMiddle"
                    }],
                    staticClass: "weui-tabbar__item weui-flex"
                }, [e._m(4), e._v(" "), i("circle-menu", {
                    attrs: {
                        animate: e.AnimateType,
                        type: e.TypeValue,
                        mask: e.MaskType,
                        id: "menu",
                        circle: e.isCircle,
                        btn: e.isBtn,
                        number: e.NumberType
                    }
                }, [i("a", {
                    staticClass: "fa fa-futbol-o fa-lg",
                    on: {
                        click: e.item1
                    },
                    slot: "item_1"
                }), e._v(" "), i("a", {
                    staticClass: "fa fa-paint-brush fa-lg",
                    on: {
                        click: e.item2
                    },
                    slot: "item_2"
                }), e._v(" "), i("a", {
                    staticClass: "fa fa-language fa-lg",
                    on: {
                        click: e.item3
                    },
                    slot: "item_3"
                }), e._v(" "), i("a", {
                    staticClass: "fa fa-flask fa-lg",
                    on: {
                        click: e.item4
                    },
                    slot: "item_4"
                })]), e._v(" "), e._m(5)], 1), e._v(" "), e._m(6), e._v(" "), i("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.MenuRight,
                        expression: "MenuRight"
                    }],
                    staticClass: "weui-tabbar__item weui-flex"
                }, [e._m(7), e._v(" "), i("circle-menu", {
                    attrs: {
                        animate: e.AnimateType,
                        type: e.TypeValue,
                        mask: e.MaskType,
                        id: "menu",
                        circle: e.isCircle,
                        btn: e.isBtn,
                        number: e.NumberType
                    }
                }, [i("a", {
                    staticClass: "fa fa-futbol-o fa-lg",
                    slot: "item_1"
                }), e._v(" "), i("a", {
                    staticClass: "fa fa-paint-brush fa-lg",
                    slot: "item_2"
                }), e._v(" "), i("a", {
                    staticClass: "fa fa-language fa-lg",
                    slot: "item_3"
                }), e._v(" "), i("a", {
                    staticClass: "fa fa-flask fa-lg",
                    slot: "item_4"
                })]), e._v(" "), e._m(8)], 1)])])
            },
            staticRenderFns: [function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("div", {
                    staticClass: "weui-msg"
                }, [i("div", {
                    staticClass: "weui-msg__icon-area"
                }, [i("img", {
                    staticStyle: {
                        "border-radius": "50%"
                    },
                    attrs: {
                        src: "https://image.ibb.co/ccYwAQ/Life_Learner_2.png",
                        width: "35%"
                    }
                })]), e._v(" "), i("div", {
                    staticClass: "weui-msg__text-area"
                }, [i("p", {
                    staticClass: "weui-msg__desc"
                }, [e._v("Choose what to learn")]), e._v(" "), i("p", {
                    staticClass: "weui-msg__desc"
                }, [e._v("And")]), e._v(" "), i("p", {
                    staticClass: "weui-msg__desc"
                }, [e._v("How to do it")])]), e._v(" "), i("div", {
                    staticClass: "weui-msg__extra-area"
                }, [i("div", {
                    staticClass: "weui-footer"
                })])])
            }, function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("div", {
                    staticClass: "weui-flex__item"
                }, [i("div", {
                    staticClass: "placeholder"
                }, [e._v("weui")])])
            }, function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("div", {
                    staticClass: "weui-flex__item"
                }, [i("div", {
                    staticClass: "placeholder"
                }, [e._v("weui")])])
            }, function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("a", {
                    staticClass: "weui-tabbar__item weui-bar__item_on",
                    attrs: {
                        href: "https://twitter.com/KendallJenner"
                    }
                }, [i("img", {
                    staticClass: "weui-tabbar__icon",
                    attrs: {
                        src: "http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c53e.png",
                        alt: ""
                    }
                }), e._v(" "), i("p", {
                    staticClass: "weui-tabbar__label"
                }, [e._v("Twitter")])])
            }, function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("div", {
                    staticClass: "weui-flex__item"
                }, [i("div", {
                    staticClass: "placeholder"
                }, [e._v("weui")])])
            }, function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("div", {
                    staticClass: "weui-flex__item"
                }, [i("div", {
                    staticClass: "placeholder"
                }, [e._v("weui")])])
            }, function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("a", {
                    staticClass: "weui-tabbar__item weui-bar__item_on",
                    attrs: {
                        href: "https://www.instagram.com/a_park16/"
                    }
                }, [i("img", {
                    staticClass: "weui-tabbar__icon",
                    attrs: {
                        src: "http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c521.png",
                        alt: ""
                    }
                }), e._v(" "), i("p", {
                    staticClass: "weui-tabbar__label"

                }, [e._v("Instagram")])])
            }, 
            function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("div", {
                    staticClass: "weui-flex__item"
                }, [i("div", {
                    staticClass: "placeholder"
                }, [e._v("weui")])])
            }, function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("div", {
                    staticClass: "weui-flex__item"

                }, [i("div", {
                    staticClass: "placeholder"
                }, [e._v("weui")])])
            }]
        }
    },
    83: function(e, t) {
        e.exports = {
            render: function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("div", {
                    staticClass: "weui-cell weui-cell_select weui-cell_select-after"
                }, [i("div", {
                    staticClass: "weui-cell__hd"
                }, [i("label", {
                    staticClass: "weui-label",
                    attrs: {
                        for: ""
                    }
                }, [e._v(e._s(e.title))])]), e._v(" "), i("div", {
                    staticClass: "weui-cell__bd"
                }, [i("select", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.currentValue,
                        expression: "currentValue"
                    }],
                    staticClass: "weui-select",
                    on: {
                        change: function(t) {
                            e.currentValue = Array.prototype.filter.call(t.target.options, function(e) {
                                return e.selected
                            }).map(function(e) {
                                var t = "_value" in e ? e._value : e.value;
                                return t
                            })[0]
                        }
                    }
                }, e._l(e.options, function(t) {
                    return i("option", {
                        domProps: {
                            value: t
                        }
                    }, [e._v(e._s(t))])
                }))])])
            },
            staticRenderFns: []
        }
    }
});
