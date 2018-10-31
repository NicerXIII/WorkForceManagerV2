﻿/*
 Highcharts JS v6.1.2 (2018-08-31)

 (c) 2009-2016 Torstein Honsi

 License: www.highcharts.com/license
*/
(function (T, K) { "object" === typeof module && module.exports ? module.exports = T.document ? K(T) : K : "function" === typeof define && define.amd ? define(function () { return K(T) }) : T.Highcharts = K(T) })("undefined" !== typeof window ? window : this, function (T) {
    var K = function () {
        var a = "undefined" === typeof T ? window : T, C = a.document, D = a.navigator && a.navigator.userAgent || "", E = C && C.createElementNS && !!C.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect, m = /(edge|msie|trident)/i.test(D) && !a.opera, h = -1 !== D.indexOf("Firefox"),
        f = -1 !== D.indexOf("Chrome"), r = h && 4 > parseInt(D.split("Firefox/")[1], 10); return a.Highcharts ? a.Highcharts.error(16, !0) : {
            product: "Highcharts", version: "6.1.2", deg2rad: 2 * Math.PI / 360, doc: C, hasBidiBug: r, hasTouch: C && void 0 !== C.documentElement.ontouchstart, isMS: m, isWebKit: -1 !== D.indexOf("AppleWebKit"), isFirefox: h, isChrome: f, isSafari: !f && -1 !== D.indexOf("Safari"), isTouchDevice: /(Mobile|Android|Windows Phone)/.test(D), SVG_NS: "http://www.w3.org/2000/svg", chartCount: 0, seriesTypes: {}, symbolSizes: {}, svg: E, win: a, marginNames: ["plotTop",
                "marginRight", "marginBottom", "plotLeft"], noop: function () { }, charts: []
        }
    }(); (function (a) {
    a.timers = []; var C = a.charts, D = a.doc, E = a.win; a.error = function (m, h) { m = a.isNumber(m) ? "Highcharts error #" + m + ": www.highcharts.com/errors/" + m : m; if (h) throw Error(m); E.console && console.log(m) }; a.Fx = function (a, h, f) { this.options = h; this.elem = a; this.prop = f }; a.Fx.prototype = {
        dSetter: function () {
            var a = this.paths[0], h = this.paths[1], f = [], r = this.now, y = a.length, q; if (1 === r) f = this.toD; else if (y === h.length && 1 > r) for (; y--;)q = parseFloat(a[y]),
                f[y] = isNaN(q) ? h[y] : r * parseFloat(h[y] - q) + q; else f = h; this.elem.attr("d", f, null, !0)
        }, update: function () { var a = this.elem, h = this.prop, f = this.now, r = this.options.step; if (this[h + "Setter"]) this[h + "Setter"](); else a.attr ? a.element && a.attr(h, f, null, !0) : a.style[h] = f + this.unit; r && r.call(a, f, this) }, run: function (m, h, f) {
            var r = this, y = r.options, q = function (a) { return q.stopped ? !1 : r.step(a) }, w = E.requestAnimationFrame || function (a) { setTimeout(a, 13) }, e = function () {
                for (var c = 0; c < a.timers.length; c++)a.timers[c]() || a.timers.splice(c--,
                    1); a.timers.length && w(e)
            }; m !== h || this.elem["forceAnimate:" + this.prop] ? (this.startTime = +new Date, this.start = m, this.end = h, this.unit = f, this.now = this.start, this.pos = 0, q.elem = this.elem, q.prop = this.prop, q() && 1 === a.timers.push(q) && w(e)) : (delete y.curAnim[this.prop], y.complete && 0 === a.keys(y.curAnim).length && y.complete.call(this.elem))
        }, step: function (m) {
            var h = +new Date, f, r = this.options, y = this.elem, q = r.complete, w = r.duration, e = r.curAnim; y.attr && !y.element ? m = !1 : m || h >= w + this.startTime ? (this.now = this.end, this.pos =
                1, this.update(), f = e[this.prop] = !0, a.objectEach(e, function (a) { !0 !== a && (f = !1) }), f && q && q.call(y), m = !1) : (this.pos = r.easing((h - this.startTime) / w), this.now = this.start + (this.end - this.start) * this.pos, this.update(), m = !0); return m
        }, initPath: function (m, h, f) {
            function r(a) { var d, k; for (b = a.length; b--;)d = "M" === a[b] || "L" === a[b], k = /[a-zA-Z]/.test(a[b + 3]), d && k && a.splice(b + 1, 0, a[b + 1], a[b + 2], a[b + 1], a[b + 2]) } function y(a, d) {
                for (; a.length < k;) {
                a[0] = d[k - a.length]; var c = a.slice(0, z);[].splice.apply(a, [0, 0].concat(c)); u && (c =
                    a.slice(a.length - z), [].splice.apply(a, [a.length, 0].concat(c)), b--)
                } a[0] = "M"
            } function q(a, b) { for (var c = (k - a.length) / z; 0 < c && c--;)d = a.slice().splice(a.length / p - z, z * p), d[0] = b[k - z - c * z], l && (d[z - 6] = d[z - 2], d[z - 5] = d[z - 1]), [].splice.apply(a, [a.length / p, 0].concat(d)), u && c-- } h = h || ""; var w, e = m.startX, c = m.endX, l = -1 < h.indexOf("C"), z = l ? 7 : 3, k, d, b; h = h.split(" "); f = f.slice(); var u = m.isArea, p = u ? 2 : 1, H; l && (r(h), r(f)); if (e && c) {
                for (b = 0; b < e.length; b++)if (e[b] === c[0]) { w = b; break } else if (e[0] === c[c.length - e.length + b]) {
                    w = b; H =
                        !0; break
                } void 0 === w && (h = [])
            } h.length && a.isNumber(w) && (k = f.length + w * p * z, H ? (y(h, f), q(f, h)) : (y(f, h), q(h, f))); return [h, f]
        }, fillSetter: function () { a.Fx.prototype.strokeSetter.apply(this, arguments) }, strokeSetter: function () { this.elem.attr(this.prop, a.color(this.start).tweenTo(a.color(this.end), this.pos), null, !0) }
    }; a.merge = function () {
        var m, h = arguments, f, r = {}, y = function (f, m) {
        "object" !== typeof f && (f = {}); a.objectEach(m, function (e, c) {
        !a.isObject(e, !0) || a.isClass(e) || a.isDOMElement(e) ? f[c] = m[c] : f[c] = y(f[c] || {},
            e)
        }); return f
        }; !0 === h[0] && (r = h[1], h = Array.prototype.slice.call(h, 2)); f = h.length; for (m = 0; m < f; m++)r = y(r, h[m]); return r
    }; a.pInt = function (a, h) { return parseInt(a, h || 10) }; a.isString = function (a) { return "string" === typeof a }; a.isArray = function (a) { a = Object.prototype.toString.call(a); return "[object Array]" === a || "[object Array Iterator]" === a }; a.isObject = function (m, h) { return !!m && "object" === typeof m && (!h || !a.isArray(m)) }; a.isDOMElement = function (m) { return a.isObject(m) && "number" === typeof m.nodeType }; a.isClass = function (m) {
        var h =
            m && m.constructor; return !(!a.isObject(m, !0) || a.isDOMElement(m) || !h || !h.name || "Object" === h.name)
    }; a.isNumber = function (a) { return "number" === typeof a && !isNaN(a) && Infinity > a && -Infinity < a }; a.erase = function (a, h) { for (var f = a.length; f--;)if (a[f] === h) { a.splice(f, 1); break } }; a.defined = function (a) { return void 0 !== a && null !== a }; a.attr = function (m, h, f) {
        var r; a.isString(h) ? a.defined(f) ? m.setAttribute(h, f) : m && m.getAttribute && ((r = m.getAttribute(h)) || "class" !== h || (r = m.getAttribute(h + "Name"))) : a.defined(h) && a.isObject(h) &&
            a.objectEach(h, function (a, f) { m.setAttribute(f, a) }); return r
    }; a.splat = function (m) { return a.isArray(m) ? m : [m] }; a.syncTimeout = function (a, h, f) { if (h) return setTimeout(a, h, f); a.call(0, f) }; a.clearTimeout = function (m) { a.defined(m) && clearTimeout(m) }; a.extend = function (a, h) { var f; a || (a = {}); for (f in h) a[f] = h[f]; return a }; a.pick = function () { var a = arguments, h, f, r = a.length; for (h = 0; h < r; h++)if (f = a[h], void 0 !== f && null !== f) return f }; a.css = function (m, h) {
    a.isMS && !a.svg && h && void 0 !== h.opacity && (h.filter = "alpha(opacity\x3d" +
        100 * h.opacity + ")"); a.extend(m.style, h)
    }; a.createElement = function (m, h, f, r, y) { m = D.createElement(m); var q = a.css; h && a.extend(m, h); y && q(m, { padding: 0, border: "none", margin: 0 }); f && q(m, f); r && r.appendChild(m); return m }; a.extendClass = function (m, h) { var f = function () { }; f.prototype = new m; a.extend(f.prototype, h); return f }; a.pad = function (a, h, f) { return Array((h || 2) + 1 - String(a).replace("-", "").length).join(f || 0) + a }; a.relativeLength = function (a, h, f) { return /%$/.test(a) ? h * parseFloat(a) / 100 + (f || 0) : parseFloat(a) }; a.wrap =
        function (a, h, f) { var m = a[h]; a[h] = function () { var a = Array.prototype.slice.call(arguments), q = arguments, w = this; w.proceed = function () { m.apply(w, arguments.length ? arguments : q) }; a.unshift(m); a = f.apply(this, a); w.proceed = null; return a } }; a.formatSingle = function (m, h, f) { var r = /\.([0-9])/, y = a.defaultOptions.lang; /f$/.test(m) ? (f = (f = m.match(r)) ? f[1] : -1, null !== h && (h = a.numberFormat(h, f, y.decimalPoint, -1 < m.indexOf(",") ? y.thousandsSep : ""))) : h = (f || a.time).dateFormat(m, h); return h }; a.format = function (m, h, f) {
            for (var r = "{",
                y = !1, q, w, e, c, l = [], z; m;) { r = m.indexOf(r); if (-1 === r) break; q = m.slice(0, r); if (y) { q = q.split(":"); w = q.shift().split("."); c = w.length; z = h; for (e = 0; e < c; e++)z && (z = z[w[e]]); q.length && (z = a.formatSingle(q.join(":"), z, f)); l.push(z) } else l.push(q); m = m.slice(r + 1); r = (y = !y) ? "}" : "{" } l.push(m); return l.join("")
        }; a.getMagnitude = function (a) { return Math.pow(10, Math.floor(Math.log(a) / Math.LN10)) }; a.normalizeTickInterval = function (m, h, f, r, y) {
            var q, w = m; f = a.pick(f, 1); q = m / f; h || (h = y ? [1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10] : [1, 2, 2.5, 5, 10],
                !1 === r && (1 === f ? h = a.grep(h, function (a) { return 0 === a % 1 }) : .1 >= f && (h = [1 / f]))); for (r = 0; r < h.length && !(w = h[r], y && w * f >= m || !y && q <= (h[r] + (h[r + 1] || h[r])) / 2); r++); return w = a.correctFloat(w * f, -Math.round(Math.log(.001) / Math.LN10))
        }; a.stableSort = function (a, h) { var f = a.length, m, y; for (y = 0; y < f; y++)a[y].safeI = y; a.sort(function (a, f) { m = h(a, f); return 0 === m ? a.safeI - f.safeI : m }); for (y = 0; y < f; y++)delete a[y].safeI }; a.arrayMin = function (a) { for (var h = a.length, f = a[0]; h--;)a[h] < f && (f = a[h]); return f }; a.arrayMax = function (a) {
            for (var h =
                a.length, f = a[0]; h--;)a[h] > f && (f = a[h]); return f
        }; a.destroyObjectProperties = function (m, h) { a.objectEach(m, function (a, r) { a && a !== h && a.destroy && a.destroy(); delete m[r] }) }; a.discardElement = function (m) { var h = a.garbageBin; h || (h = a.createElement("div")); m && h.appendChild(m); h.innerHTML = "" }; a.correctFloat = function (a, h) { return parseFloat(a.toPrecision(h || 14)) }; a.setAnimation = function (m, h) { h.renderer.globalAnimation = a.pick(m, h.options.chart.animation, !0) }; a.animObject = function (m) {
            return a.isObject(m) ? a.merge(m) :
                { duration: m ? 500 : 0 }
        }; a.timeUnits = { millisecond: 1, second: 1E3, minute: 6E4, hour: 36E5, day: 864E5, week: 6048E5, month: 24192E5, year: 314496E5 }; a.numberFormat = function (m, h, f, r) {
            m = +m || 0; h = +h; var y = a.defaultOptions.lang, q = (m.toString().split(".")[1] || "").split("e")[0].length, w, e, c = m.toString().split("e"); -1 === h ? h = Math.min(q, 20) : a.isNumber(h) ? h && c[1] && 0 > c[1] && (w = h + +c[1], 0 <= w ? (c[0] = (+c[0]).toExponential(w).split("e")[0], h = w) : (c[0] = c[0].split(".")[0] || 0, m = 20 > h ? (c[0] * Math.pow(10, c[1])).toFixed(h) : 0, c[1] = 0)) : h = 2; e = (Math.abs(c[1] ?
                c[0] : m) + Math.pow(10, -Math.max(h, q) - 1)).toFixed(h); q = String(a.pInt(e)); w = 3 < q.length ? q.length % 3 : 0; f = a.pick(f, y.decimalPoint); r = a.pick(r, y.thousandsSep); m = (0 > m ? "-" : "") + (w ? q.substr(0, w) + r : ""); m += q.substr(w).replace(/(\d{3})(?=\d)/g, "$1" + r); h && (m += f + e.slice(-h)); c[1] && 0 !== +m && (m += "e" + c[1]); return m
        }; Math.easeInOutSine = function (a) { return -.5 * (Math.cos(Math.PI * a) - 1) }; a.getStyle = function (m, h, f) {
            if ("width" === h) return Math.max(0, Math.min(m.offsetWidth, m.scrollWidth) - a.getStyle(m, "padding-left") - a.getStyle(m,
                "padding-right")); if ("height" === h) return Math.max(0, Math.min(m.offsetHeight, m.scrollHeight) - a.getStyle(m, "padding-top") - a.getStyle(m, "padding-bottom")); E.getComputedStyle || a.error(27, !0); if (m = E.getComputedStyle(m, void 0)) m = m.getPropertyValue(h), a.pick(f, "opacity" !== h) && (m = a.pInt(m)); return m
        }; a.inArray = function (m, h, f) { return (a.indexOfPolyfill || Array.prototype.indexOf).call(h, m, f) }; a.grep = function (m, h) { return (a.filterPolyfill || Array.prototype.filter).call(m, h) }; a.find = Array.prototype.find ? function (a,
            h) { return a.find(h) } : function (a, h) { var f, r = a.length; for (f = 0; f < r; f++)if (h(a[f], f)) return a[f] }; a.some = function (m, h, f) { return (a.somePolyfill || Array.prototype.some).call(m, h, f) }; a.map = function (a, h) { for (var f = [], r = 0, y = a.length; r < y; r++)f[r] = h.call(a[r], a[r], r, a); return f }; a.keys = function (m) { return (a.keysPolyfill || Object.keys).call(void 0, m) }; a.reduce = function (m, h, f) { return (a.reducePolyfill || Array.prototype.reduce).apply(m, 2 < arguments.length ? [h, f] : [h]) }; a.offset = function (a) {
                var h = D.documentElement; a = a.parentElement ||
                    a.parentNode ? a.getBoundingClientRect() : { top: 0, left: 0 }; return { top: a.top + (E.pageYOffset || h.scrollTop) - (h.clientTop || 0), left: a.left + (E.pageXOffset || h.scrollLeft) - (h.clientLeft || 0) }
            }; a.stop = function (m, h) { for (var f = a.timers.length; f--;)a.timers[f].elem !== m || h && h !== a.timers[f].prop || (a.timers[f].stopped = !0) }; a.each = function (m, h, f) { return (a.forEachPolyfill || Array.prototype.forEach).call(m, h, f) }; a.objectEach = function (a, h, f) { for (var r in a) a.hasOwnProperty(r) && h.call(f || a[r], a[r], r, a) }; a.addEvent = function (m,
                h, f, r) { var y, q = m.addEventListener || a.addEventListenerPolyfill; y = "function" === typeof m && m.prototype ? m.prototype.protoEvents = m.prototype.protoEvents || {} : m.hcEvents = m.hcEvents || {}; a.Point && m instanceof a.Point && m.series && m.series.chart && (m.series.chart.runTrackerClick = !0); q && q.call(m, h, f, !1); y[h] || (y[h] = []); y[h].push(f); r && a.isNumber(r.order) && (f.order = r.order, y[h].sort(function (a, e) { return a.order - e.order })); return function () { a.removeEvent(m, h, f) } }; a.removeEvent = function (m, h, f) {
                    function r(e, c) {
                        var l =
                            m.removeEventListener || a.removeEventListenerPolyfill; l && l.call(m, e, c, !1)
                    } function y(e) { var c, l; m.nodeName && (h ? (c = {}, c[h] = !0) : c = e, a.objectEach(c, function (a, k) { if (e[k]) for (l = e[k].length; l--;)r(k, e[k][l]) })) } var q, w; a.each(["protoEvents", "hcEvents"], function (e) { var c = m[e]; c && (h ? (q = c[h] || [], f ? (w = a.inArray(f, q), -1 < w && (q.splice(w, 1), c[h] = q), r(h, f)) : (y(c), c[h] = [])) : (y(c), m[e] = {})) })
                }; a.fireEvent = function (m, h, f, r) {
                    var y, q, w, e, c; f = f || {}; D.createEvent && (m.dispatchEvent || m.fireEvent) ? (y = D.createEvent("Events"),
                        y.initEvent(h, !0, !0), a.extend(y, f), m.dispatchEvent ? m.dispatchEvent(y) : m.fireEvent(h, y)) : a.each(["protoEvents", "hcEvents"], function (l) { if (m[l]) for (q = m[l][h] || [], w = q.length, f.target || a.extend(f, { preventDefault: function () { f.defaultPrevented = !0 }, target: m, type: h }), e = 0; e < w; e++)(c = q[e]) && !1 === c.call(m, f) && f.preventDefault() }); r && !f.defaultPrevented && r.call(m, f)
                }; a.animate = function (m, h, f) {
                    var r, y = "", q, w, e; a.isObject(f) || (e = arguments, f = { duration: e[2], easing: e[3], complete: e[4] }); a.isNumber(f.duration) || (f.duration =
                        400); f.easing = "function" === typeof f.easing ? f.easing : Math[f.easing] || Math.easeInOutSine; f.curAnim = a.merge(h); a.objectEach(h, function (c, e) { a.stop(m, e); w = new a.Fx(m, f, e); q = null; "d" === e ? (w.paths = w.initPath(m, m.d, h.d), w.toD = h.d, r = 0, q = 1) : m.attr ? r = m.attr(e) : (r = parseFloat(a.getStyle(m, e)) || 0, "opacity" !== e && (y = "px")); q || (q = c); q && q.match && q.match("px") && (q = q.replace(/px/g, "")); w.run(r, q, y) })
                }; a.seriesType = function (m, h, f, r, y) {
                    var q = a.getOptions(), w = a.seriesTypes; q.plotOptions[m] = a.merge(q.plotOptions[h], f);
                    w[m] = a.extendClass(w[h] || function () { }, r); w[m].prototype.type = m; y && (w[m].prototype.pointClass = a.extendClass(a.Point, y)); return w[m]
                }; a.uniqueKey = function () { var a = Math.random().toString(36).substring(2, 9), h = 0; return function () { return "highcharts-" + a + "-" + h++ } }(); E.jQuery && (E.jQuery.fn.highcharts = function () { var m = [].slice.call(arguments); if (this[0]) return m[0] ? (new (a[a.isString(m[0]) ? m.shift() : "Chart"])(this[0], m[0], m[1]), this) : C[a.attr(this[0], "data-highcharts-chart")] })
    })(K); (function (a) {
        var C = a.each,
        D = a.isNumber, E = a.map, m = a.merge, h = a.pInt; a.Color = function (f) { if (!(this instanceof a.Color)) return new a.Color(f); this.init(f) }; a.Color.prototype = {
            parsers: [{ regex: /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/, parse: function (a) { return [h(a[1]), h(a[2]), h(a[3]), parseFloat(a[4], 10)] } }, { regex: /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/, parse: function (a) { return [h(a[1]), h(a[2]), h(a[3]), 1] } }], names: { white: "#ffffff", black: "#000000" }, init: function (f) {
                var h,
                y, q, w; if ((this.input = f = this.names[f && f.toLowerCase ? f.toLowerCase() : ""] || f) && f.stops) this.stops = E(f.stops, function (e) { return new a.Color(e[1]) }); else if (f && f.charAt && "#" === f.charAt() && (h = f.length, f = parseInt(f.substr(1), 16), 7 === h ? y = [(f & 16711680) >> 16, (f & 65280) >> 8, f & 255, 1] : 4 === h && (y = [(f & 3840) >> 4 | (f & 3840) >> 8, (f & 240) >> 4 | f & 240, (f & 15) << 4 | f & 15, 1])), !y) for (q = this.parsers.length; q-- && !y;)w = this.parsers[q], (h = w.regex.exec(f)) && (y = w.parse(h)); this.rgba = y || []
            }, get: function (a) {
                var f = this.input, h = this.rgba, q; this.stops ?
                    (q = m(f), q.stops = [].concat(q.stops), C(this.stops, function (f, e) { q.stops[e] = [q.stops[e][0], f.get(a)] })) : q = h && D(h[0]) ? "rgb" === a || !a && 1 === h[3] ? "rgb(" + h[0] + "," + h[1] + "," + h[2] + ")" : "a" === a ? h[3] : "rgba(" + h.join(",") + ")" : f; return q
            }, brighten: function (a) { var f, y = this.rgba; if (this.stops) C(this.stops, function (f) { f.brighten(a) }); else if (D(a) && 0 !== a) for (f = 0; 3 > f; f++)y[f] += h(255 * a), 0 > y[f] && (y[f] = 0), 255 < y[f] && (y[f] = 255); return this }, setOpacity: function (a) { this.rgba[3] = a; return this }, tweenTo: function (a, h) {
                var f = this.rgba,
                q = a.rgba; q.length && f && f.length ? (a = 1 !== q[3] || 1 !== f[3], h = (a ? "rgba(" : "rgb(") + Math.round(q[0] + (f[0] - q[0]) * (1 - h)) + "," + Math.round(q[1] + (f[1] - q[1]) * (1 - h)) + "," + Math.round(q[2] + (f[2] - q[2]) * (1 - h)) + (a ? "," + (q[3] + (f[3] - q[3]) * (1 - h)) : "") + ")") : h = a.input || "none"; return h
            }
        }; a.color = function (f) { return new a.Color(f) }
    })(K); (function (a) {
        var C, D, E = a.addEvent, m = a.animate, h = a.attr, f = a.charts, r = a.color, y = a.css, q = a.createElement, w = a.defined, e = a.deg2rad, c = a.destroyObjectProperties, l = a.doc, z = a.each, k = a.extend, d = a.erase, b = a.grep,
        u = a.hasTouch, p = a.inArray, H = a.isArray, t = a.isFirefox, L = a.isMS, x = a.isObject, I = a.isString, n = a.isWebKit, G = a.merge, B = a.noop, M = a.objectEach, F = a.pick, g = a.pInt, v = a.removeEvent, P = a.stop, Q = a.svg, J = a.SVG_NS, O = a.symbolSizes, N = a.win; C = a.SVGElement = function () { return this }; k(C.prototype, {
            opacity: 1, SVG_NS: J, textProps: "direction fontSize fontWeight fontFamily fontStyle color lineHeight width textAlign textDecoration textOverflow textOutline cursor".split(" "), init: function (a, g) {
            this.element = "span" === g ? q(g) : l.createElementNS(this.SVG_NS,
                g); this.renderer = a
            }, animate: function (A, g, b) { g = a.animObject(F(g, this.renderer.globalAnimation, !0)); 0 !== g.duration ? (b && (g.complete = b), m(this, A, g)) : (this.attr(A, null, b), g.step && g.step.call(this)); return this }, complexColor: function (A, g, b) {
                var d = this.renderer, v, k, c, n, e, J, l, B, u, R, p, t = [], x; a.fireEvent(this.renderer, "complexColor", { args: arguments }, function () {
                    A.radialGradient ? k = "radialGradient" : A.linearGradient && (k = "linearGradient"); k && (c = A[k], e = d.gradients, l = A.stops, R = b.radialReference, H(c) && (A[k] = c = {
                        x1: c[0],
                        y1: c[1], x2: c[2], y2: c[3], gradientUnits: "userSpaceOnUse"
                    }), "radialGradient" === k && R && !w(c.gradientUnits) && (n = c, c = G(c, d.getRadialAttr(R, n), { gradientUnits: "userSpaceOnUse" })), M(c, function (a, A) { "id" !== A && t.push(A, a) }), M(l, function (a) { t.push(a) }), t = t.join(","), e[t] ? p = e[t].attr("id") : (c.id = p = a.uniqueKey(), e[t] = J = d.createElement(k).attr(c).add(d.defs), J.radAttr = n, J.stops = [], z(l, function (A) {
                        0 === A[1].indexOf("rgba") ? (v = a.color(A[1]), B = v.get("rgb"), u = v.get("a")) : (B = A[1], u = 1); A = d.createElement("stop").attr({
                            offset: A[0],
                            "stop-color": B, "stop-opacity": u
                        }).add(J); J.stops.push(A)
                    })), x = "url(" + d.url + "#" + p + ")", b.setAttribute(g, x), b.gradient = t, A.toString = function () { return x })
                })
            }, applyTextOutline: function (A) {
                var g = this.element, b, v, k, c, n; -1 !== A.indexOf("contrast") && (A = A.replace(/contrast/g, this.renderer.getContrast(g.style.fill))); A = A.split(" "); v = A[A.length - 1]; if ((k = A[0]) && "none" !== k && a.svg) {
                this.fakeTS = !0; A = [].slice.call(g.getElementsByTagName("tspan")); this.ySetter = this.xSetter; k = k.replace(/(^[\d\.]+)(.*?)$/g, function (a,
                    A, g) { return 2 * A + g }); for (n = A.length; n--;)b = A[n], "highcharts-text-outline" === b.getAttribute("class") && d(A, g.removeChild(b)); c = g.firstChild; z(A, function (a, A) { 0 === A && (a.setAttribute("x", g.getAttribute("x")), A = g.getAttribute("y"), a.setAttribute("y", A || 0), null === A && g.setAttribute("y", 0)); a = a.cloneNode(1); h(a, { "class": "highcharts-text-outline", fill: v, stroke: v, "stroke-width": k, "stroke-linejoin": "round" }); g.insertBefore(a, c) })
                }
            }, attr: function (a, g, b, d) {
                var A, v = this.element, k, c = this, n, J; "string" === typeof a &&
                    void 0 !== g && (A = a, a = {}, a[A] = g); "string" === typeof a ? c = (this[a + "Getter"] || this._defaultGetter).call(this, a, v) : (M(a, function (A, g) { n = !1; d || P(this, g); this.symbolName && /^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)$/.test(g) && (k || (this.symbolAttr(a), k = !0), n = !0); !this.rotation || "x" !== g && "y" !== g || (this.doTransform = !0); n || (J = this[g + "Setter"] || this._defaultSetter, J.call(this, A, g, v), this.shadows && /^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(g) && this.updateShadows(g, A, J)) }, this), this.afterSetters());
                b && b.call(this); return c
            }, afterSetters: function () { this.doTransform && (this.updateTransform(), this.doTransform = !1) }, updateShadows: function (a, g, b) { for (var A = this.shadows, d = A.length; d--;)b.call(A[d], "height" === a ? Math.max(g - (A[d].cutHeight || 0), 0) : "d" === a ? this.d : g, a, A[d]) }, addClass: function (a, g) { var A = this.attr("class") || ""; -1 === A.indexOf(a) && (g || (a = (A + (A ? " " : "") + a).replace("  ", " ")), this.attr("class", a)); return this }, hasClass: function (a) { return -1 !== p(a, (this.attr("class") || "").split(" ")) }, removeClass: function (a) {
                return this.attr("class",
                    (this.attr("class") || "").replace(a, ""))
            }, symbolAttr: function (a) { var A = this; z("x y r start end width height innerR anchorX anchorY".split(" "), function (g) { A[g] = F(a[g], A[g]) }); A.attr({ d: A.renderer.symbols[A.symbolName](A.x, A.y, A.width, A.height, A) }) }, clip: function (a) { return this.attr("clip-path", a ? "url(" + this.renderer.url + "#" + a.id + ")" : "none") }, crisp: function (a, g) {
                var A; g = g || a.strokeWidth || 0; A = Math.round(g) % 2 / 2; a.x = Math.floor(a.x || this.x || 0) + A; a.y = Math.floor(a.y || this.y || 0) + A; a.width = Math.floor((a.width ||
                    this.width || 0) - 2 * A); a.height = Math.floor((a.height || this.height || 0) - 2 * A); w(a.strokeWidth) && (a.strokeWidth = g); return a
            }, css: function (a) {
                var A = this.styles, b = {}, d = this.element, v, c = "", n, J = !A, e = ["textOutline", "textOverflow", "width"]; a && a.color && (a.fill = a.color); A && M(a, function (a, g) { a !== A[g] && (b[g] = a, J = !0) }); J && (A && (a = k(A, b)), a && (null === a.width || "auto" === a.width ? delete this.textWidth : "text" === d.nodeName.toLowerCase() && a.width && (v = this.textWidth = g(a.width))), this.styles = a, v && !Q && this.renderer.forExport &&
                    delete a.width, d.namespaceURI === this.SVG_NS ? (n = function (a, A) { return "-" + A.toLowerCase() }, M(a, function (a, A) { -1 === p(A, e) && (c += A.replace(/([A-Z])/g, n) + ":" + a + ";") }), c && h(d, "style", c)) : y(d, a), this.added && ("text" === this.element.nodeName && this.renderer.buildText(this), a && a.textOutline && this.applyTextOutline(a.textOutline))); return this
            }, strokeWidth: function () { return this["stroke-width"] || 0 }, on: function (a, g) {
                var A = this, b = A.element; u && "click" === a ? (b.ontouchstart = function (a) {
                A.touchEventFired = Date.now(); a.preventDefault();
                    g.call(b, a)
                }, b.onclick = function (a) { (-1 === N.navigator.userAgent.indexOf("Android") || 1100 < Date.now() - (A.touchEventFired || 0)) && g.call(b, a) }) : b["on" + a] = g; return this
            }, setRadialReference: function (a) { var A = this.renderer.gradients[this.element.gradient]; this.element.radialReference = a; A && A.radAttr && A.animate(this.renderer.getRadialAttr(a, A.radAttr)); return this }, translate: function (a, g) { return this.attr({ translateX: a, translateY: g }) }, invert: function (a) { this.inverted = a; this.updateTransform(); return this }, updateTransform: function () {
                var a =
                    this.translateX || 0, g = this.translateY || 0, b = this.scaleX, d = this.scaleY, v = this.inverted, c = this.rotation, k = this.matrix, n = this.element; v && (a += this.width, g += this.height); a = ["translate(" + a + "," + g + ")"]; w(k) && a.push("matrix(" + k.join(",") + ")"); v ? a.push("rotate(90) scale(-1,1)") : c && a.push("rotate(" + c + " " + F(this.rotationOriginX, n.getAttribute("x"), 0) + " " + F(this.rotationOriginY, n.getAttribute("y") || 0) + ")"); (w(b) || w(d)) && a.push("scale(" + F(b, 1) + " " + F(d, 1) + ")"); a.length && n.setAttribute("transform", a.join(" "))
            }, toFront: function () {
                var a =
                    this.element; a.parentNode.appendChild(a); return this
            }, align: function (a, g, b) {
                var A, v, c, k, n = {}; v = this.renderer; c = v.alignedObjects; var J, e; if (a) { if (this.alignOptions = a, this.alignByTranslate = g, !b || I(b)) this.alignTo = A = b || "renderer", d(c, this), c.push(this), b = null } else a = this.alignOptions, g = this.alignByTranslate, A = this.alignTo; b = F(b, v[A], v); A = a.align; v = a.verticalAlign; c = (b.x || 0) + (a.x || 0); k = (b.y || 0) + (a.y || 0); "right" === A ? J = 1 : "center" === A && (J = 2); J && (c += (b.width - (a.width || 0)) / J); n[g ? "translateX" : "x"] = Math.round(c);
                "bottom" === v ? e = 1 : "middle" === v && (e = 2); e && (k += (b.height - (a.height || 0)) / e); n[g ? "translateY" : "y"] = Math.round(k); this[this.placed ? "animate" : "attr"](n); this.placed = !0; this.alignAttr = n; return this
            }, getBBox: function (a, g) {
                var A, b = this.renderer, d, v = this.element, c = this.styles, n, J = this.textStr, l, B = b.cache, u = b.cacheKeys, p; g = F(g, this.rotation); d = g * e; n = c && c.fontSize; w(J) && (p = J.toString(), -1 === p.indexOf("\x3c") && (p = p.replace(/[0-9]/g, "0")), p += ["", g || 0, n, this.textWidth, c && c.textOverflow].join()); p && !a && (A = B[p]); if (!A) {
                    if (v.namespaceURI ===
                        this.SVG_NS || b.forExport) { try { (l = this.fakeTS && function (a) { z(v.querySelectorAll(".highcharts-text-outline"), function (A) { A.style.display = a }) }) && l("none"), A = v.getBBox ? k({}, v.getBBox()) : { width: v.offsetWidth, height: v.offsetHeight }, l && l("") } catch (W) { } if (!A || 0 > A.width) A = { width: 0, height: 0 } } else A = this.htmlGetBBox(); b.isSVG && (a = A.width, b = A.height, c && "11px" === c.fontSize && 17 === Math.round(b) && (A.height = b = 14), g && (A.width = Math.abs(b * Math.sin(d)) + Math.abs(a * Math.cos(d)), A.height = Math.abs(b * Math.cos(d)) + Math.abs(a *
                            Math.sin(d)))); if (p && 0 < A.height) { for (; 250 < u.length;)delete B[u.shift()]; B[p] || u.push(p); B[p] = A }
                } return A
            }, show: function (a) { return this.attr({ visibility: a ? "inherit" : "visible" }) }, hide: function () { return this.attr({ visibility: "hidden" }) }, fadeOut: function (a) { var A = this; A.animate({ opacity: 0 }, { duration: a || 150, complete: function () { A.attr({ y: -9999 }) } }) }, add: function (a) {
                var A = this.renderer, g = this.element, b; a && (this.parentGroup = a); this.parentInverted = a && a.inverted; void 0 !== this.textStr && A.buildText(this); this.added =
                    !0; if (!a || a.handleZ || this.zIndex) b = this.zIndexSetter(); b || (a ? a.element : A.box).appendChild(g); if (this.onAdd) this.onAdd(); return this
            }, safeRemoveChild: function (a) { var A = a.parentNode; A && A.removeChild(a) }, destroy: function () {
                var a = this, g = a.element || {}, b = a.renderer.isSVG && "SPAN" === g.nodeName && a.parentGroup, v = g.ownerSVGElement, c = a.clipPath; g.onclick = g.onmouseout = g.onmouseover = g.onmousemove = g.point = null; P(a); c && v && (z(v.querySelectorAll("[clip-path],[CLIP-PATH]"), function (a) {
                    var g = a.getAttribute("clip-path"),
                    A = c.element.id; (-1 < g.indexOf("(#" + A + ")") || -1 < g.indexOf('("#' + A + '")')) && a.removeAttribute("clip-path")
                }), a.clipPath = c.destroy()); if (a.stops) { for (v = 0; v < a.stops.length; v++)a.stops[v] = a.stops[v].destroy(); a.stops = null } a.safeRemoveChild(g); for (a.destroyShadows(); b && b.div && 0 === b.div.childNodes.length;)g = b.parentGroup, a.safeRemoveChild(b.div), delete b.div, b = g; a.alignTo && d(a.renderer.alignedObjects, a); M(a, function (g, A) { delete a[A] }); return null
            }, shadow: function (a, g, b) {
                var A = [], d, v, c = this.element, k, n, J, e;
                if (!a) this.destroyShadows(); else if (!this.shadows) { n = F(a.width, 3); J = (a.opacity || .15) / n; e = this.parentInverted ? "(-1,-1)" : "(" + F(a.offsetX, 1) + ", " + F(a.offsetY, 1) + ")"; for (d = 1; d <= n; d++)v = c.cloneNode(0), k = 2 * n + 1 - 2 * d, h(v, { isShadow: "true", stroke: a.color || "#000000", "stroke-opacity": J * d, "stroke-width": k, transform: "translate" + e, fill: "none" }), b && (h(v, "height", Math.max(h(v, "height") - k, 0)), v.cutHeight = k), g ? g.element.appendChild(v) : c.parentNode && c.parentNode.insertBefore(v, c), A.push(v); this.shadows = A } return this
            },
            destroyShadows: function () { z(this.shadows || [], function (a) { this.safeRemoveChild(a) }, this); this.shadows = void 0 }, xGetter: function (a) { "circle" === this.element.nodeName && ("x" === a ? a = "cx" : "y" === a && (a = "cy")); return this._defaultGetter(a) }, _defaultGetter: function (a) { a = F(this[a + "Value"], this[a], this.element ? this.element.getAttribute(a) : null, 0); /^[\-0-9\.]+$/.test(a) && (a = parseFloat(a)); return a }, dSetter: function (a, g, b) {
            a && a.join && (a = a.join(" ")); /(NaN| {2}|^$)/.test(a) && (a = "M 0 0"); this[g] !== a && (b.setAttribute(g,
                a), this[g] = a)
            }, dashstyleSetter: function (a) { var b, A = this["stroke-width"]; "inherit" === A && (A = 1); if (a = a && a.toLowerCase()) { a = a.replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(","); for (b = a.length; b--;)a[b] = g(a[b]) * A; a = a.join(",").replace(/NaN/g, "none"); this.element.setAttribute("stroke-dasharray", a) } }, alignSetter: function (a) {
            this.alignValue =
                a; this.element.setAttribute("text-anchor", { left: "start", center: "middle", right: "end" }[a])
            }, opacitySetter: function (a, g, b) { this[g] = a; b.setAttribute(g, a) }, titleSetter: function (a) { var g = this.element.getElementsByTagName("title")[0]; g || (g = l.createElementNS(this.SVG_NS, "title"), this.element.appendChild(g)); g.firstChild && g.removeChild(g.firstChild); g.appendChild(l.createTextNode(String(F(a), "").replace(/<[^>]*>/g, "").replace(/&lt;/g, "\x3c").replace(/&gt;/g, "\x3e"))) }, textSetter: function (a) {
            a !== this.textStr &&
                (delete this.bBox, this.textStr = a, this.added && this.renderer.buildText(this))
            }, fillSetter: function (a, g, b) { "string" === typeof a ? b.setAttribute(g, a) : a && this.complexColor(a, g, b) }, visibilitySetter: function (a, g, b) { "inherit" === a ? b.removeAttribute(g) : this[g] !== a && b.setAttribute(g, a); this[g] = a }, zIndexSetter: function (a, b) {
                var d = this.renderer, v = this.parentGroup, A = (v || d).element || d.box, c, k = this.element, n, J, d = A === d.box; c = this.added; var e; w(a) ? (k.setAttribute("data-z-index", a), a = +a, this[b] === a && (c = !1)) : w(this[b]) &&
                    k.removeAttribute("data-z-index"); this[b] = a; if (c) { (a = this.zIndex) && v && (v.handleZ = !0); b = A.childNodes; for (e = b.length - 1; 0 <= e && !n; e--)if (v = b[e], c = v.getAttribute("data-z-index"), J = !w(c), v !== k) if (0 > a && J && !d && !e) A.insertBefore(k, b[e]), n = !0; else if (g(c) <= a || J && (!w(a) || 0 <= a)) A.insertBefore(k, b[e + 1] || null), n = !0; n || (A.insertBefore(k, b[d ? 3 : 0] || null), n = !0) } return n
            }, _defaultSetter: function (a, g, b) { b.setAttribute(g, a) }
        }); C.prototype.yGetter = C.prototype.xGetter; C.prototype.translateXSetter = C.prototype.translateYSetter =
            C.prototype.rotationSetter = C.prototype.verticalAlignSetter = C.prototype.rotationOriginXSetter = C.prototype.rotationOriginYSetter = C.prototype.scaleXSetter = C.prototype.scaleYSetter = C.prototype.matrixSetter = function (a, g) { this[g] = a; this.doTransform = !0 }; C.prototype["stroke-widthSetter"] = C.prototype.strokeSetter = function (a, g, b) {
            this[g] = a; this.stroke && this["stroke-width"] ? (C.prototype.fillSetter.call(this, this.stroke, "stroke", b), b.setAttribute("stroke-width", this["stroke-width"]), this.hasStroke = !0) : "stroke-width" ===
                g && 0 === a && this.hasStroke && (b.removeAttribute("stroke"), this.hasStroke = !1)
            }; D = a.SVGRenderer = function () { this.init.apply(this, arguments) }; k(D.prototype, {
                Element: C, SVG_NS: J, init: function (a, g, b, d, v, c) {
                    var A; d = this.createElement("svg").attr({ version: "1.1", "class": "highcharts-root" }).css(this.getStyle(d)); A = d.element; a.appendChild(A); h(a, "dir", "ltr"); -1 === a.innerHTML.indexOf("xmlns") && h(A, "xmlns", this.SVG_NS); this.isSVG = !0; this.box = A; this.boxWrapper = d; this.alignedObjects = []; this.url = (t || n) && l.getElementsByTagName("base").length ?
                        N.location.href.split("#")[0].replace(/<[^>]*>/g, "").replace(/([\('\)])/g, "\\$1").replace(/ /g, "%20") : ""; this.createElement("desc").add().element.appendChild(l.createTextNode("Created with Highcharts 6.1.2")); this.defs = this.createElement("defs").add(); this.allowHTML = c; this.forExport = v; this.gradients = {}; this.cache = {}; this.cacheKeys = []; this.imgCount = 0; this.setSize(g, b, !1); var k; t && a.getBoundingClientRect && (g = function () {
                            y(a, { left: 0, top: 0 }); k = a.getBoundingClientRect(); y(a, {
                                left: Math.ceil(k.left) - k.left +
                                    "px", top: Math.ceil(k.top) - k.top + "px"
                            })
                        }, g(), this.unSubPixelFix = E(N, "resize", g))
                }, getStyle: function (a) { return this.style = k({ fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif', fontSize: "12px" }, a) }, setStyle: function (a) { this.boxWrapper.css(this.getStyle(a)) }, isHidden: function () { return !this.boxWrapper.getBBox().width }, destroy: function () {
                    var a = this.defs; this.box = null; this.boxWrapper = this.boxWrapper.destroy(); c(this.gradients || {}); this.gradients = null; a && (this.defs = a.destroy());
                    this.unSubPixelFix && this.unSubPixelFix(); return this.alignedObjects = null
                }, createElement: function (a) { var g = new this.Element; g.init(this, a); return g }, draw: B, getRadialAttr: function (a, g) { return { cx: a[0] - a[2] / 2 + g.cx * a[2], cy: a[1] - a[2] / 2 + g.cy * a[2], r: g.r * a[2] } }, getSpanWidth: function (a) { return a.getBBox(!0).width }, applyEllipsis: function (a, g, b, d) {
                    var v = a.rotation, c = b, k, A = 0, n = b.length, J = function (a) { g.removeChild(g.firstChild); a && g.appendChild(l.createTextNode(a)) }, e; a.rotation = 0; c = this.getSpanWidth(a, g); if (e =
                        c > d) { for (; A <= n;)k = Math.ceil((A + n) / 2), c = b.substring(0, k) + "\u2026", J(c), c = this.getSpanWidth(a, g), A === n ? A = n + 1 : c > d ? n = k - 1 : A = k; 0 === n && J("") } a.rotation = v; return e
                }, escapes: { "\x26": "\x26amp;", "\x3c": "\x26lt;", "\x3e": "\x26gt;", "'": "\x26#39;", '"': "\x26quot;" }, buildText: function (a) {
                    var d = a.element, v = this, c = v.forExport, k = F(a.textStr, "").toString(), A = -1 !== k.indexOf("\x3c"), n = d.childNodes, e, B = h(d, "x"), u = a.styles, t = a.textWidth, G = u && u.lineHeight, x = u && u.textOutline, f = u && "ellipsis" === u.textOverflow, P = u && "nowrap" ===
                        u.whiteSpace, O = u && u.fontSize, w, q, H = n.length, u = t && !a.added && this.box, I = function (a) { var b; b = /(px|em)$/.test(a && a.style.fontSize) ? a.style.fontSize : O || v.style.fontSize || 12; return G ? g(G) : v.fontMetrics(b, a.getAttribute("style") ? a : d).h }, N = function (a, g) { M(v.escapes, function (b, d) { g && -1 !== p(b, g) || (a = a.toString().replace(new RegExp(b, "g"), d)) }); return a }, m = function (a, g) {
                            var b; b = a.indexOf("\x3c"); a = a.substring(b, a.indexOf("\x3e") - b); b = a.indexOf(g + "\x3d"); if (-1 !== b && (b = b + g.length + 1, g = a.charAt(b), '"' === g || "'" ===
                                g)) return a = a.substring(b + 1), a.substring(0, a.indexOf(g))
                        }; w = [k, f, P, G, x, O, t].join(); if (w !== a.textCache) {
                            for (a.textCache = w; H--;)d.removeChild(n[H]); A || x || f || t || -1 !== k.indexOf(" ") ? (u && u.appendChild(d), k = A ? k.replace(/<(b|strong)>/g, '\x3cspan style\x3d"font-weight:bold"\x3e').replace(/<(i|em)>/g, '\x3cspan style\x3d"font-style:italic"\x3e').replace(/<a/g, "\x3cspan").replace(/<\/(b|strong|i|em|a)>/g, "\x3c/span\x3e").split(/<br.*?>/g) : [k], k = b(k, function (a) { return "" !== a }), z(k, function (g, b) {
                                var k, A = 0; g = g.replace(/^\s+|\s+$/g,
                                    "").replace(/<span/g, "|||\x3cspan").replace(/<\/span>/g, "\x3c/span\x3e|||"); k = g.split("|||"); z(k, function (g) {
                                        if ("" !== g || 1 === k.length) {
                                            var n = {}, u = l.createElementNS(v.SVG_NS, "tspan"), p, G; (p = m(g, "class")) && h(u, "class", p); if (p = m(g, "style")) p = p.replace(/(;| |^)color([ :])/, "$1fill$2"), h(u, "style", p); (G = m(g, "href")) && !c && (h(u, "onclick", 'location.href\x3d"' + G + '"'), h(u, "class", "highcharts-anchor"), y(u, { cursor: "pointer" })); g = N(g.replace(/<[a-zA-Z\/](.|\n)*?>/g, "") || " "); if (" " !== g) {
                                                u.appendChild(l.createTextNode(g));
                                                A ? n.dx = 0 : b && null !== B && (n.x = B); h(u, n); d.appendChild(u); !A && q && (!Q && c && y(u, { display: "block" }), h(u, "dy", I(u))); if (t) {
                                                    n = g.replace(/([^\^])-/g, "$1- ").split(" "); G = 1 < k.length || b || 1 < n.length && !P; var x = [], z, O = I(u), w = a.rotation; for (f && (e = v.applyEllipsis(a, u, g, t)); !f && G && (n.length || x.length);)a.rotation = 0, z = v.getSpanWidth(a, u), g = z > t, void 0 === e && (e = g), g && 1 !== n.length ? (u.removeChild(u.firstChild), x.unshift(n.pop())) : (n = x, x = [], n.length && !P && (u = l.createElementNS(J, "tspan"), h(u, { dy: O, x: B }), p && h(u, "style", p), d.appendChild(u)),
                                                        z > t && (t = z + 1)), n.length && u.appendChild(l.createTextNode(n.join(" ").replace(/- /g, "-"))); a.rotation = w
                                                } A++
                                            }
                                        }
                                    }); q = q || d.childNodes.length
                            }), f && e && a.attr("title", N(a.textStr, ["\x26lt;", "\x26gt;"])), u && u.removeChild(d), x && a.applyTextOutline && a.applyTextOutline(x)) : d.appendChild(l.createTextNode(N(k)))
                        }
                }, getContrast: function (a) { a = r(a).rgba; a[0] *= 1; a[1] *= 1.2; a[2] *= .5; return 459 < a[0] + a[1] + a[2] ? "#000000" : "#FFFFFF" }, button: function (a, g, b, d, v, c, n, e, J) {
                    var A = this.label(a, g, b, J, null, null, null, null, "button"), u =
                        0; A.attr(G({ padding: 8, r: 2 }, v)); var l, B, p, t; v = G({ fill: "#f7f7f7", stroke: "#cccccc", "stroke-width": 1, style: { color: "#333333", cursor: "pointer", fontWeight: "normal" } }, v); l = v.style; delete v.style; c = G(v, { fill: "#e6e6e6" }, c); B = c.style; delete c.style; n = G(v, { fill: "#e6ebf5", style: { color: "#000000", fontWeight: "bold" } }, n); p = n.style; delete n.style; e = G(v, { style: { color: "#cccccc" } }, e); t = e.style; delete e.style; E(A.element, L ? "mouseover" : "mouseenter", function () { 3 !== u && A.setState(1) }); E(A.element, L ? "mouseout" : "mouseleave",
                            function () { 3 !== u && A.setState(u) }); A.setState = function (a) { 1 !== a && (A.state = u = a); A.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-" + ["normal", "hover", "pressed", "disabled"][a || 0]); A.attr([v, c, n, e][a || 0]).css([l, B, p, t][a || 0]) }; A.attr(v).css(k({ cursor: "default" }, l)); return A.on("click", function (a) { 3 !== u && d.call(A, a) })
                }, crispLine: function (a, g) { a[1] === a[4] && (a[1] = a[4] = Math.round(a[1]) - g % 2 / 2); a[2] === a[5] && (a[2] = a[5] = Math.round(a[2]) + g % 2 / 2); return a }, path: function (a) {
                    var g =
                        { fill: "none" }; H(a) ? g.d = a : x(a) && k(g, a); return this.createElement("path").attr(g)
                }, circle: function (a, g, b) { a = x(a) ? a : { x: a, y: g, r: b }; g = this.createElement("circle"); g.xSetter = g.ySetter = function (a, g, b) { b.setAttribute("c" + g, a) }; return g.attr(a) }, arc: function (a, g, b, d, v, c) { x(a) ? (d = a, g = d.y, b = d.r, a = d.x) : d = { innerR: d, start: v, end: c }; a = this.symbol("arc", a, g, b, b, d); a.r = b; return a }, rect: function (a, g, b, d, v, c) {
                    v = x(a) ? a.r : v; var k = this.createElement("rect"); a = x(a) ? a : void 0 === a ? {} : {
                        x: a, y: g, width: Math.max(b, 0), height: Math.max(d,
                            0)
                    }; void 0 !== c && (a.strokeWidth = c, a = k.crisp(a)); a.fill = "none"; v && (a.r = v); k.rSetter = function (a, g, b) { h(b, { rx: a, ry: a }) }; return k.attr(a)
                }, setSize: function (a, g, b) { var d = this.alignedObjects, v = d.length; this.width = a; this.height = g; for (this.boxWrapper.animate({ width: a, height: g }, { step: function () { this.attr({ viewBox: "0 0 " + this.attr("width") + " " + this.attr("height") }) }, duration: F(b, !0) ? void 0 : 0 }); v--;)d[v].align() }, g: function (a) { var g = this.createElement("g"); return a ? g.attr({ "class": "highcharts-" + a }) : g }, image: function (a,
                    g, b, d, v, c) { var n = { preserveAspectRatio: "none" }, e, J = function (a, g) { a.setAttributeNS ? a.setAttributeNS("http://www.w3.org/1999/xlink", "href", g) : a.setAttribute("hc-svg-href", g) }, A = function (g) { J(e.element, a); c.call(e, g) }; 1 < arguments.length && k(n, { x: g, y: b, width: d, height: v }); e = this.createElement("image").attr(n); c ? (J(e.element, "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw\x3d\x3d"), n = new N.Image, E(n, "load", A), n.src = a, n.complete && A({})) : J(e.element, a); return e }, symbol: function (a,
                        g, b, d, v, c) {
                            var n = this, e, J = /^url\((.*?)\)$/, A = J.test(a), u = !A && (this.symbols[a] ? a : "circle"), B = u && this.symbols[u], p = w(g) && B && B.call(this.symbols, Math.round(g), Math.round(b), d, v, c), t, G; B ? (e = this.path(p), e.attr("fill", "none"), k(e, { symbolName: u, x: g, y: b, width: d, height: v }), c && k(e, c)) : A && (t = a.match(J)[1], e = this.image(t), e.imgwidth = F(O[t] && O[t].width, c && c.width), e.imgheight = F(O[t] && O[t].height, c && c.height), G = function () { e.attr({ width: e.width, height: e.height }) }, z(["width", "height"], function (a) {
                            e[a + "Setter"] =
                                function (a, g) { var b = {}, d = this["img" + g], v = "width" === g ? "translateX" : "translateY"; this[g] = a; w(d) && (this.element && this.element.setAttribute(g, d), this.alignByTranslate || (b[v] = ((this[g] || 0) - d) / 2, this.attr(b))) }
                            }), w(g) && e.attr({ x: g, y: b }), e.isImg = !0, w(e.imgwidth) && w(e.imgheight) ? G() : (e.attr({ width: 0, height: 0 }), q("img", {
                                onload: function () {
                                    var a = f[n.chartIndex]; 0 === this.width && (y(this, { position: "absolute", top: "-999em" }), l.body.appendChild(this)); O[t] = { width: this.width, height: this.height }; e.imgwidth = this.width;
                                    e.imgheight = this.height; e.element && G(); this.parentNode && this.parentNode.removeChild(this); n.imgCount--; if (!n.imgCount && a && a.onload) a.onload()
                                }, src: t
                            }), this.imgCount++)); return e
                    }, symbols: {
                        circle: function (a, g, b, d) { return this.arc(a + b / 2, g + d / 2, b / 2, d / 2, { start: 0, end: 2 * Math.PI, open: !1 }) }, square: function (a, g, b, d) { return ["M", a, g, "L", a + b, g, a + b, g + d, a, g + d, "Z"] }, triangle: function (a, g, b, d) { return ["M", a + b / 2, g, "L", a + b, g + d, a, g + d, "Z"] }, "triangle-down": function (a, g, b, d) { return ["M", a, g, "L", a + b, g, a + b / 2, g + d, "Z"] }, diamond: function (a,
                            g, b, d) { return ["M", a + b / 2, g, "L", a + b, g + d / 2, a + b / 2, g + d, a, g + d / 2, "Z"] }, arc: function (a, g, b, d, v) { var c = v.start, k = v.r || b, n = v.r || d || b, e = v.end - .001; b = v.innerR; d = F(v.open, .001 > Math.abs(v.end - v.start - 2 * Math.PI)); var J = Math.cos(c), u = Math.sin(c), A = Math.cos(e), e = Math.sin(e); v = .001 > v.end - c - Math.PI ? 0 : 1; k = ["M", a + k * J, g + n * u, "A", k, n, 0, v, 1, a + k * A, g + n * e]; w(b) && k.push(d ? "M" : "L", a + b * A, g + b * e, "A", b, b, 0, v, 0, a + b * J, g + b * u); k.push(d ? "" : "Z"); return k }, callout: function (a, g, b, d, v) {
                                var c = Math.min(v && v.r || 0, b, d), k = c + 6, n = v && v.anchorX; v =
                                    v && v.anchorY; var e; e = ["M", a + c, g, "L", a + b - c, g, "C", a + b, g, a + b, g, a + b, g + c, "L", a + b, g + d - c, "C", a + b, g + d, a + b, g + d, a + b - c, g + d, "L", a + c, g + d, "C", a, g + d, a, g + d, a, g + d - c, "L", a, g + c, "C", a, g, a, g, a + c, g]; n && n > b ? v > g + k && v < g + d - k ? e.splice(13, 3, "L", a + b, v - 6, a + b + 6, v, a + b, v + 6, a + b, g + d - c) : e.splice(13, 3, "L", a + b, d / 2, n, v, a + b, d / 2, a + b, g + d - c) : n && 0 > n ? v > g + k && v < g + d - k ? e.splice(33, 3, "L", a, v + 6, a - 6, v, a, v - 6, a, g + c) : e.splice(33, 3, "L", a, d / 2, n, v, a, d / 2, a, g + c) : v && v > d && n > a + k && n < a + b - k ? e.splice(23, 3, "L", n + 6, g + d, n, g + d + 6, n - 6, g + d, a + c, g + d) : v && 0 > v && n > a + k && n < a + b -
                                        k && e.splice(3, 3, "L", n - 6, g, n, g - 6, n + 6, g, b - c, g); return e
                            }
                    }, clipRect: function (g, b, d, v) { var c = a.uniqueKey(), k = this.createElement("clipPath").attr({ id: c }).add(this.defs); g = this.rect(g, b, d, v, 0).add(k); g.id = c; g.clipPath = k; g.count = 0; return g }, text: function (a, g, b, d) {
                        var v = {}; if (d && (this.allowHTML || !this.forExport)) return this.html(a, g, b); v.x = Math.round(g || 0); b && (v.y = Math.round(b)); if (a || 0 === a) v.text = a; a = this.createElement("text").attr(v); d || (a.xSetter = function (a, g, b) {
                            var d = b.getElementsByTagName("tspan"), v,
                            c = b.getAttribute(g), k; for (k = 0; k < d.length; k++)v = d[k], v.getAttribute(g) === c && v.setAttribute(g, a); b.setAttribute(g, a)
                        }); return a
                    }, fontMetrics: function (a, b) { a = a || b && b.style && b.style.fontSize || this.style && this.style.fontSize; a = /px/.test(a) ? g(a) : /em/.test(a) ? parseFloat(a) * (b ? this.fontMetrics(null, b.parentNode).f : 16) : 12; b = 24 > a ? a + 3 : Math.round(1.2 * a); return { h: b, b: Math.round(.8 * b), f: a } }, rotCorr: function (a, g, b) { var d = a; g && b && (d = Math.max(d * Math.cos(g * e), 4)); return { x: -a / 3 * Math.sin(g * e), y: d } }, label: function (g,
                        b, d, c, n, e, J, u, l) {
                            var B = this, p = B.g("button" !== l && "label"), t = p.text = B.text("", 0, 0, J).attr({ zIndex: 1 }), A, x, Q = 0, f = 3, P = 0, h, O, q, F, H, I = {}, N, y, M = /^url\((.*?)\)$/.test(c), m = M, L, r, R, U; l && p.addClass("highcharts-" + l); m = M; L = function () { return (N || 0) % 2 / 2 }; r = function () {
                                var a = t.element.style, g = {}; x = (void 0 === h || void 0 === O || H) && w(t.textStr) && t.getBBox(); p.width = (h || x.width || 0) + 2 * f + P; p.height = (O || x.height || 0) + 2 * f; y = f + B.fontMetrics(a && a.fontSize, t).b; m && (A || (p.box = A = B.symbols[c] || M ? B.symbol(c) : B.rect(), A.addClass(("button" ===
                                    l ? "" : "highcharts-label-box") + (l ? " highcharts-" + l + "-box" : "")), A.add(p), a = L(), g.x = a, g.y = (u ? -y : 0) + a), g.width = Math.round(p.width), g.height = Math.round(p.height), A.attr(k(g, I)), I = {})
                            }; R = function () { var a = P + f, g; g = u ? 0 : y; w(h) && x && ("center" === H || "right" === H) && (a += { center: .5, right: 1 }[H] * (h - x.width)); if (a !== t.x || g !== t.y) t.attr("x", a), t.hasBoxWidthChanged && (x = t.getBBox(!0), r()), void 0 !== g && t.attr("y", g); t.x = a; t.y = g }; U = function (a, g) { A ? A.attr(a, g) : I[a] = g }; p.onAdd = function () {
                                t.add(p); p.attr({
                                    text: g || 0 === g ? g : "", x: b,
                                    y: d
                                }); A && w(n) && p.attr({ anchorX: n, anchorY: e })
                            }; p.widthSetter = function (g) { h = a.isNumber(g) ? g : null }; p.heightSetter = function (a) { O = a }; p["text-alignSetter"] = function (a) { H = a }; p.paddingSetter = function (a) { w(a) && a !== f && (f = p.padding = a, R()) }; p.paddingLeftSetter = function (a) { w(a) && a !== P && (P = a, R()) }; p.alignSetter = function (a) { a = { left: 0, center: .5, right: 1 }[a]; a !== Q && (Q = a, x && p.attr({ x: q })) }; p.textSetter = function (a) { void 0 !== a && t.textSetter(a); r(); R() }; p["stroke-widthSetter"] = function (a, g) {
                                a && (m = !0); N = this["stroke-width"] =
                                    a; U(g, a)
                            }; p.strokeSetter = p.fillSetter = p.rSetter = function (a, g) { "r" !== g && ("fill" === g && a && (m = !0), p[g] = a); U(g, a) }; p.anchorXSetter = function (a, g) { n = p.anchorX = a; U(g, Math.round(a) - L() - q) }; p.anchorYSetter = function (a, g) { e = p.anchorY = a; U(g, a - F) }; p.xSetter = function (a) { p.x = a; Q && (a -= Q * ((h || x.width) + 2 * f), p["forceAnimate:x"] = !0); q = Math.round(a); p.attr("translateX", q) }; p.ySetter = function (a) { F = p.y = Math.round(a); p.attr("translateY", F) }; var S = p.css; return k(p, {
                                css: function (a) {
                                    if (a) {
                                        var g = {}; a = G(a); z(p.textProps, function (b) {
                                        void 0 !==
                                            a[b] && (g[b] = a[b], delete a[b])
                                        }); t.css(g); "width" in g && r()
                                    } return S.call(p, a)
                                }, getBBox: function () { return { width: x.width + 2 * f, height: x.height + 2 * f, x: x.x - f, y: x.y - f } }, shadow: function (a) { a && (r(), A && A.shadow(a)); return p }, destroy: function () { v(p.element, "mouseenter"); v(p.element, "mouseleave"); t && (t = t.destroy()); A && (A = A.destroy()); C.prototype.destroy.call(p); p = B = r = R = U = null }
                            })
                    }
            }); a.Renderer = D
    })(K); (function (a) {
        var C = a.attr, D = a.createElement, E = a.css, m = a.defined, h = a.each, f = a.extend, r = a.isFirefox, y = a.isMS, q = a.isWebKit,
        w = a.pick, e = a.pInt, c = a.SVGRenderer, l = a.win, z = a.wrap; f(a.SVGElement.prototype, {
            htmlCss: function (a) { var d = this.element; if ((d = a && "SPAN" === d.tagName && a.width) || this.textWidth && !d) delete a.width, this.textWidth = d, this.htmlUpdateTransform(); a && "ellipsis" === a.textOverflow && (a.whiteSpace = "nowrap", a.overflow = "hidden"); this.styles = f(this.styles, a); E(this.element, a); return this }, htmlGetBBox: function () { var a = this.element; return { x: a.offsetLeft, y: a.offsetTop, width: a.offsetWidth, height: a.offsetHeight } }, htmlUpdateTransform: function () {
                if (this.added) {
                    var a =
                        this.renderer, d = this.element, b = this.translateX || 0, c = this.translateY || 0, p = this.x || 0, l = this.y || 0, t = this.textAlign || "left", f = { left: 0, center: .5, right: 1 }[t], x = this.styles, z = x && x.whiteSpace; E(d, { marginLeft: b, marginTop: c }); this.shadows && h(this.shadows, function (a) { E(a, { marginLeft: b + 1, marginTop: c + 1 }) }); this.inverted && h(d.childNodes, function (b) { a.invertChild(b, d) }); if ("SPAN" === d.tagName) {
                            var x = this.rotation, n = this.textWidth && e(this.textWidth), G = [x, t, d.innerHTML, this.textWidth, this.textAlign].join(), B; (B = n !==
                                this.oldTextWidth) && !(B = n > this.oldTextWidth) && ((B = this.textPxLength) || (E(d, { width: "", whiteSpace: z || "nowrap" }), B = d.offsetWidth), B = B > n); B && /[ \-]/.test(d.textContent || d.innerText) ? (E(d, { width: n + "px", display: "block", whiteSpace: z || "normal" }), this.oldTextWidth = n, this.hasBoxWidthChanged = !0) : this.hasBoxWidthChanged = !1; G !== this.cTT && (z = a.fontMetrics(d.style.fontSize).b, !m(x) || x === (this.oldRotation || 0) && t === this.oldAlign || this.setSpanRotation(x, f, z), this.getSpanCorrection(!m(x) && this.textPxLength || d.offsetWidth,
                                    z, f, x, t)); E(d, { left: p + (this.xCorr || 0) + "px", top: l + (this.yCorr || 0) + "px" }); this.cTT = G; this.oldRotation = x; this.oldAlign = t
                        }
                } else this.alignOnAdd = !0
            }, setSpanRotation: function (a, d, b) { var c = {}, k = this.renderer.getTransformKey(); c[k] = c.transform = "rotate(" + a + "deg)"; c[k + (r ? "Origin" : "-origin")] = c.transformOrigin = 100 * d + "% " + b + "px"; E(this.element, c) }, getSpanCorrection: function (a, d, b) { this.xCorr = -a * b; this.yCorr = -d }
        }); f(c.prototype, {
            getTransformKey: function () {
                return y && !/Edge/.test(l.navigator.userAgent) ? "-ms-transform" :
                    q ? "-webkit-transform" : r ? "MozTransform" : l.opera ? "-o-transform" : ""
            }, html: function (a, d, b) {
                var c = this.createElement("span"), k = c.element, e = c.renderer, l = e.isSVG, q = function (a, b) { h(["opacity", "visibility"], function (d) { z(a, d + "Setter", function (a, d, c, k) { a.call(this, d, c, k); b[c] = d }) }); a.addedSetters = !0 }; c.textSetter = function (a) { a !== k.innerHTML && delete this.bBox; this.textStr = a; k.innerHTML = w(a, ""); c.doTransform = !0 }; l && q(c, c.element.style); c.xSetter = c.ySetter = c.alignSetter = c.rotationSetter = function (a, b) {
                "align" ===
                    b && (b = "textAlign"); c[b] = a; c.doTransform = !0
                }; c.afterSetters = function () { this.doTransform && (this.htmlUpdateTransform(), this.doTransform = !1) }; c.attr({ text: a, x: Math.round(d), y: Math.round(b) }).css({ fontFamily: this.style.fontFamily, fontSize: this.style.fontSize, position: "absolute" }); k.style.whiteSpace = "nowrap"; c.css = c.htmlCss; l && (c.add = function (a) {
                    var b, d = e.box.parentNode, p = []; if (this.parentGroup = a) {
                        if (b = a.div, !b) {
                            for (; a;)p.push(a), a = a.parentGroup; h(p.reverse(), function (a) {
                                function k(g, b) {
                                a[b] = g; "translateX" ===
                                    b ? n.left = g + "px" : n.top = g + "px"; a.doTransform = !0
                                } var n, g = C(a.element, "class"); g && (g = { className: g }); b = a.div = a.div || D("div", g, { position: "absolute", left: (a.translateX || 0) + "px", top: (a.translateY || 0) + "px", display: a.display, opacity: a.opacity, pointerEvents: a.styles && a.styles.pointerEvents }, b || d); n = b.style; f(a, { classSetter: function (a) { return function (g) { this.element.setAttribute("class", g); a.className = g } }(b), on: function () { p[0].div && c.on.apply({ element: p[0].div }, arguments); return a }, translateXSetter: k, translateYSetter: k });
                                a.addedSetters || q(a, n)
                            })
                        }
                    } else b = d; b.appendChild(k); c.added = !0; c.alignOnAdd && c.htmlUpdateTransform(); return c
                }); return c
            }
        })
    })(K); (function (a) {
        var C = a.defined, D = a.each, E = a.extend, m = a.merge, h = a.pick, f = a.timeUnits, r = a.win; a.Time = function (a) { this.update(a, !1) }; a.Time.prototype = {
            defaultOptions: {}, update: function (a) {
                var f = h(a && a.useUTC, !0), w = this; this.options = a = m(!0, this.options || {}, a); this.Date = a.Date || r.Date; this.timezoneOffset = (this.useUTC = f) && a.timezoneOffset; this.getTimezoneOffset = this.timezoneOffsetFunction();
                (this.variableTimezone = !(f && !a.getTimezoneOffset && !a.timezone)) || this.timezoneOffset ? (this.get = function (a, c) { var e = c.getTime(), f = e - w.getTimezoneOffset(c); c.setTime(f); a = c["getUTC" + a](); c.setTime(e); return a }, this.set = function (a, c, l) { var e; if ("Milliseconds" === a || "Seconds" === a || "Minutes" === a && 0 === c.getTimezoneOffset() % 60) c["set" + a](l); else e = w.getTimezoneOffset(c), e = c.getTime() - e, c.setTime(e), c["setUTC" + a](l), a = w.getTimezoneOffset(c), e = c.getTime() + a, c.setTime(e) }) : f ? (this.get = function (a, c) {
                    return c["getUTC" +
                        a]()
                }, this.set = function (a, c, l) { return c["setUTC" + a](l) }) : (this.get = function (a, c) { return c["get" + a]() }, this.set = function (a, c, l) { return c["set" + a](l) })
            }, makeTime: function (f, q, w, e, c, l) { var z, k, d; this.useUTC ? (z = this.Date.UTC.apply(0, arguments), k = this.getTimezoneOffset(z), z += k, d = this.getTimezoneOffset(z), k !== d ? z += d - k : k - 36E5 !== this.getTimezoneOffset(z - 36E5) || a.isSafari || (z -= 36E5)) : z = (new this.Date(f, q, h(w, 1), h(e, 0), h(c, 0), h(l, 0))).getTime(); return z }, timezoneOffsetFunction: function () {
                var f = this, h = this.options,
                w = r.moment; if (!this.useUTC) return function (a) { return 6E4 * (new Date(a)).getTimezoneOffset() }; if (h.timezone) { if (w) return function (a) { return 6E4 * -w.tz(a, h.timezone).utcOffset() }; a.error(25) } return this.useUTC && h.getTimezoneOffset ? function (a) { return 6E4 * h.getTimezoneOffset(a) } : function () { return 6E4 * (f.timezoneOffset || 0) }
            }, dateFormat: function (f, h, w) {
                if (!a.defined(h) || isNaN(h)) return a.defaultOptions.lang.invalidDate || ""; f = a.pick(f, "%Y-%m-%d %H:%M:%S"); var e = this, c = new this.Date(h), l = this.get("Hours", c),
                    z = this.get("Day", c), k = this.get("Date", c), d = this.get("Month", c), b = this.get("FullYear", c), u = a.defaultOptions.lang, p = u.weekdays, H = u.shortWeekdays, t = a.pad, c = a.extend({ a: H ? H[z] : p[z].substr(0, 3), A: p[z], d: t(k), e: t(k, 2, " "), w: z, b: u.shortMonths[d], B: u.months[d], m: t(d + 1), o: d + 1, y: b.toString().substr(2, 2), Y: b, H: t(l), k: l, I: t(l % 12 || 12), l: l % 12 || 12, M: t(e.get("Minutes", c)), p: 12 > l ? "AM" : "PM", P: 12 > l ? "am" : "pm", S: t(c.getSeconds()), L: t(Math.round(h % 1E3), 3) }, a.dateFormats); a.objectEach(c, function (a, b) {
                        for (; -1 !== f.indexOf("%" +
                            b);)f = f.replace("%" + b, "function" === typeof a ? a.call(e, h) : a)
                    }); return w ? f.substr(0, 1).toUpperCase() + f.substr(1) : f
            }, getTimeTicks: function (a, q, w, e) {
                var c = this, l = [], z = {}, k, d = new c.Date(q), b = a.unitRange, u = a.count || 1, p; if (C(q)) {
                    c.set("Milliseconds", d, b >= f.second ? 0 : u * Math.floor(c.get("Milliseconds", d) / u)); b >= f.second && c.set("Seconds", d, b >= f.minute ? 0 : u * Math.floor(c.get("Seconds", d) / u)); b >= f.minute && c.set("Minutes", d, b >= f.hour ? 0 : u * Math.floor(c.get("Minutes", d) / u)); b >= f.hour && c.set("Hours", d, b >= f.day ? 0 : u * Math.floor(c.get("Hours",
                        d) / u)); b >= f.day && c.set("Date", d, b >= f.month ? 1 : u * Math.floor(c.get("Date", d) / u)); b >= f.month && (c.set("Month", d, b >= f.year ? 0 : u * Math.floor(c.get("Month", d) / u)), k = c.get("FullYear", d)); b >= f.year && c.set("FullYear", d, k - k % u); b === f.week && c.set("Date", d, c.get("Date", d) - c.get("Day", d) + h(e, 1)); k = c.get("FullYear", d); e = c.get("Month", d); var H = c.get("Date", d), t = c.get("Hours", d); q = d.getTime(); c.variableTimezone && (p = w - q > 4 * f.month || c.getTimezoneOffset(q) !== c.getTimezoneOffset(w)); d = d.getTime(); for (q = 1; d < w;)l.push(d), d =
                            b === f.year ? c.makeTime(k + q * u, 0) : b === f.month ? c.makeTime(k, e + q * u) : !p || b !== f.day && b !== f.week ? p && b === f.hour && 1 < u ? c.makeTime(k, e, H, t + q * u) : d + b * u : c.makeTime(k, e, H + q * u * (b === f.day ? 1 : 7)), q++; l.push(d); b <= f.hour && 1E4 > l.length && D(l, function (a) { 0 === a % 18E5 && "000000000" === c.dateFormat("%H%M%S%L", a) && (z[a] = "day") })
                } l.info = E(a, { higherRanks: z, totalRange: b * u }); return l
            }
        }
    })(K); (function (a) {
        var C = a.color, D = a.merge; a.defaultOptions = {
            colors: "#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1".split(" "),
            symbols: ["circle", "diamond", "square", "triangle", "triangle-down"], lang: { loading: "Loading...", months: "January February March April May June July August September October November December".split(" "), shortMonths: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "), weekdays: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), decimalPoint: ".", numericSymbols: "kMGTPE".split(""), resetZoom: "Reset zoom", resetZoomTitle: "Reset zoom level 1:1", thousandsSep: " " }, global: {}, time: a.Time.prototype.defaultOptions,
            chart: { borderRadius: 0, defaultSeriesType: "line", ignoreHiddenSeries: !0, spacing: [10, 10, 15, 10], resetZoomButton: { theme: { zIndex: 6 }, position: { align: "right", x: -10, y: 10 } }, width: null, height: null, borderColor: "#335cad", backgroundColor: "#ffffff", plotBorderColor: "#cccccc" }, title: { text: "Chart title", align: "center", margin: 15, widthAdjust: -44 }, subtitle: { text: "", align: "center", widthAdjust: -44 }, plotOptions: {}, labels: { style: { position: "absolute", color: "#333333" } }, legend: {
                enabled: !0, align: "center", alignColumns: !0, layout: "horizontal",
                labelFormatter: function () { return this.name }, borderColor: "#999999", borderRadius: 0, navigation: { activeColor: "#003399", inactiveColor: "#cccccc" }, itemStyle: { color: "#333333", fontSize: "12px", fontWeight: "bold", textOverflow: "ellipsis" }, itemHoverStyle: { color: "#000000" }, itemHiddenStyle: { color: "#cccccc" }, shadow: !1, itemCheckboxStyle: { position: "absolute", width: "13px", height: "13px" }, squareSymbol: !0, symbolPadding: 5, verticalAlign: "bottom", x: 0, y: 0, title: { style: { fontWeight: "bold" } }
            }, loading: {
                labelStyle: {
                    fontWeight: "bold",
                    position: "relative", top: "45%"
                }, style: { position: "absolute", backgroundColor: "#ffffff", opacity: .5, textAlign: "center" }
            }, tooltip: {
                enabled: !0, animation: a.svg, borderRadius: 3, dateTimeLabelFormats: { millisecond: "%A, %b %e, %H:%M:%S.%L", second: "%A, %b %e, %H:%M:%S", minute: "%A, %b %e, %H:%M", hour: "%A, %b %e, %H:%M", day: "%A, %b %e, %Y", week: "Week from %A, %b %e, %Y", month: "%B %Y", year: "%Y" }, footerFormat: "", padding: 8, snap: a.isTouchDevice ? 25 : 10, backgroundColor: C("#f7f7f7").setOpacity(.85).get(), borderWidth: 1, headerFormat: '\x3cspan style\x3d"font-size: 10px"\x3e{point.key}\x3c/span\x3e\x3cbr/\x3e',
                pointFormat: '\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e {series.name}: \x3cb\x3e{point.y}\x3c/b\x3e\x3cbr/\x3e', shadow: !0, style: { color: "#333333", cursor: "default", fontSize: "12px", pointerEvents: "none", whiteSpace: "nowrap" }
            }, credits: { enabled: !0, href: "https://www.highcharts.com", position: { align: "right", x: -10, verticalAlign: "bottom", y: -5 }, style: { cursor: "pointer", color: "#999999", fontSize: "9px" }, text: "Highcharts.com" }
        }; a.setOptions = function (C) {
        a.defaultOptions = D(!0, a.defaultOptions, C);
            a.time.update(D(a.defaultOptions.global, a.defaultOptions.time), !1); return a.defaultOptions
        }; a.getOptions = function () { return a.defaultOptions }; a.defaultPlotOptions = a.defaultOptions.plotOptions; a.time = new a.Time(D(a.defaultOptions.global, a.defaultOptions.time)); a.dateFormat = function (C, m, h) { return a.time.dateFormat(C, m, h) }
    })(K); (function (a) {
        var C = a.correctFloat, D = a.defined, E = a.destroyObjectProperties, m = a.fireEvent, h = a.isNumber, f = a.merge, r = a.pick, y = a.deg2rad; a.Tick = function (a, f, e, c) {
        this.axis = a; this.pos =
            f; this.type = e || ""; this.isNewLabel = this.isNew = !0; e || c || this.addLabel()
        }; a.Tick.prototype = {
            addLabel: function () {
                var a = this.axis, h = a.options, e = a.chart, c = a.categories, l = a.names, z = this.pos, k = h.labels, d = a.tickPositions, b = z === d[0], u = z === d[d.length - 1], l = c ? r(c[z], l[z], z) : z, c = this.label, d = d.info, p; a.isDatetimeAxis && d && (p = h.dateTimeLabelFormats[d.higherRanks[z] || d.unitName]); this.isFirst = b; this.isLast = u; h = { axis: a, chart: e, isFirst: b, isLast: u, dateTimeLabelFormat: p, value: a.isLog ? C(a.lin2log(l)) : l, pos: z }; h = a.labelFormatter.call(h,
                    h); if (D(c)) c && c.attr({ text: h }); else { if (this.label = c = D(h) && k.enabled ? e.renderer.text(h, 0, 0, k.useHTML).css(f(k.style)).add(a.labelGroup) : null) c.textPxLength = c.getBBox().width; this.rotation = 0 }
            }, getLabelSize: function () { return this.label ? this.label.getBBox()[this.axis.horiz ? "height" : "width"] : 0 }, handleOverflow: function (a) {
                var f = this.axis, e = f.options.labels, c = a.x, l = f.chart.chartWidth, z = f.chart.spacing, k = r(f.labelLeft, Math.min(f.pos, z[3])), z = r(f.labelRight, Math.max(f.isRadial ? 0 : f.pos + f.len, l - z[1])), d = this.label,
                b = this.rotation, u = { left: 0, center: .5, right: 1 }[f.labelAlign || d.attr("align")], p = d.getBBox().width, h = f.getSlotWidth(this), t = h, q = 1, x, I = {}; if (b || !1 === e.overflow) 0 > b && c - u * p < k ? x = Math.round(c / Math.cos(b * y) - k) : 0 < b && c + u * p > z && (x = Math.round((l - c) / Math.cos(b * y))); else if (l = c + (1 - u) * p, c - u * p < k ? t = a.x + t * (1 - u) - k : l > z && (t = z - a.x + t * u, q = -1), t = Math.min(h, t), t < h && "center" === f.labelAlign && (a.x += q * (h - t - u * (h - Math.min(p, t)))), p > t || f.autoRotation && (d.styles || {}).width) x = t; x && (I.width = x, (e.style || {}).textOverflow || (I.textOverflow =
                    "ellipsis"), d.css(I))
            }, getPosition: function (f, h, e, c) { var l = this.axis, z = l.chart, k = c && z.oldChartHeight || z.chartHeight; f = { x: f ? a.correctFloat(l.translate(h + e, null, null, c) + l.transB) : l.left + l.offset + (l.opposite ? (c && z.oldChartWidth || z.chartWidth) - l.right - l.left : 0), y: f ? k - l.bottom + l.offset - (l.opposite ? l.height : 0) : a.correctFloat(k - l.translate(h + e, null, null, c) - l.transB) }; m(this, "afterGetPosition", { pos: f }); return f }, getLabelPosition: function (a, f, e, c, l, h, k, d) {
                var b = this.axis, u = b.transA, p = b.reversed, z = b.staggerLines,
                t = b.tickRotCorr || { x: 0, y: 0 }, w = l.y, x = c || b.reserveSpaceDefault ? 0 : -b.labelOffset * ("center" === b.labelAlign ? .5 : 1), q = {}; D(w) || (w = 0 === b.side ? e.rotation ? -8 : -e.getBBox().height : 2 === b.side ? t.y + 8 : Math.cos(e.rotation * y) * (t.y - e.getBBox(!1, 0).height / 2)); a = a + l.x + x + t.x - (h && c ? h * u * (p ? -1 : 1) : 0); f = f + w - (h && !c ? h * u * (p ? 1 : -1) : 0); z && (e = k / (d || 1) % z, b.opposite && (e = z - e - 1), f += b.labelOffset / z * e); q.x = a; q.y = Math.round(f); m(this, "afterGetLabelPosition", { pos: q }); return q
            }, getMarkPath: function (a, f, e, c, l, h) {
                return h.crispLine(["M", a, f,
                    "L", a + (l ? 0 : -e), f + (l ? e : 0)], c)
            }, renderGridLine: function (a, f, e) {
                var c = this.axis, l = c.options, h = this.gridLine, k = {}, d = this.pos, b = this.type, u = c.tickmarkOffset, p = c.chart.renderer, H = b ? b + "Grid" : "grid", t = l[H + "LineWidth"], w = l[H + "LineColor"], l = l[H + "LineDashStyle"]; h || (k.stroke = w, k["stroke-width"] = t, l && (k.dashstyle = l), b || (k.zIndex = 1), a && (k.opacity = 0), this.gridLine = h = p.path().attr(k).addClass("highcharts-" + (b ? b + "-" : "") + "grid-line").add(c.gridGroup)); if (!a && h && (a = c.getPlotLinePath(d + u, h.strokeWidth() * e, a, !0))) h[this.isNew ?
                    "attr" : "animate"]({ d: a, opacity: f })
            }, renderMark: function (a, f, e) { var c = this.axis, l = c.options, h = c.chart.renderer, k = this.type, d = k ? k + "Tick" : "tick", b = c.tickSize(d), u = this.mark, p = !u, H = a.x; a = a.y; var t = r(l[d + "Width"], !k && c.isXAxis ? 1 : 0), l = l[d + "Color"]; b && (c.opposite && (b[0] = -b[0]), p && (this.mark = u = h.path().addClass("highcharts-" + (k ? k + "-" : "") + "tick").add(c.axisGroup), u.attr({ stroke: l, "stroke-width": t })), u[p ? "attr" : "animate"]({ d: this.getMarkPath(H, a, b[0], u.strokeWidth() * e, c.horiz, h), opacity: f })) }, renderLabel: function (a,
                f, e, c) { var l = this.axis, z = l.horiz, k = l.options, d = this.label, b = k.labels, u = b.step, l = l.tickmarkOffset, p = !0, H = a.x; a = a.y; d && h(H) && (d.xy = a = this.getLabelPosition(H, a, d, z, b, l, c, u), this.isFirst && !this.isLast && !r(k.showFirstLabel, 1) || this.isLast && !this.isFirst && !r(k.showLastLabel, 1) ? p = !1 : !z || b.step || b.rotation || f || 0 === e || this.handleOverflow(a), u && c % u && (p = !1), p && h(a.y) ? (a.opacity = e, d[this.isNewLabel ? "attr" : "animate"](a), this.isNewLabel = !1) : (d.attr("y", -9999), this.isNewLabel = !0)) }, render: function (f, h, e) {
                    var c =
                        this.axis, l = c.horiz, z = this.getPosition(l, this.pos, c.tickmarkOffset, h), k = z.x, d = z.y, c = l && k === c.pos + c.len || !l && d === c.pos ? -1 : 1; e = r(e, 1); this.isActive = !0; this.renderGridLine(h, e, c); this.renderMark(z, e, c); this.renderLabel(z, h, e, f); this.isNew = !1; a.fireEvent(this, "afterRender")
                }, destroy: function () { E(this, this.axis) }
        }
    })(K); var V = function (a) {
        var C = a.addEvent, D = a.animObject, E = a.arrayMax, m = a.arrayMin, h = a.color, f = a.correctFloat, r = a.defaultOptions, y = a.defined, q = a.deg2rad, w = a.destroyObjectProperties, e = a.each, c =
            a.extend, l = a.fireEvent, z = a.format, k = a.getMagnitude, d = a.grep, b = a.inArray, u = a.isArray, p = a.isNumber, H = a.isString, t = a.merge, L = a.normalizeTickInterval, x = a.objectEach, I = a.pick, n = a.removeEvent, G = a.splat, B = a.syncTimeout, M = a.Tick, F = function () { this.init.apply(this, arguments) }; a.extend(F.prototype, {
                defaultOptions: {
                    dateTimeLabelFormats: { millisecond: "%H:%M:%S.%L", second: "%H:%M:%S", minute: "%H:%M", hour: "%H:%M", day: "%e. %b", week: "%e. %b", month: "%b '%y", year: "%Y" }, endOnTick: !1, labels: {
                        enabled: !0, x: 0, style: {
                            color: "#666666",
                            cursor: "default", fontSize: "11px"
                        }
                    }, maxPadding: .01, minorTickLength: 2, minorTickPosition: "outside", minPadding: .01, startOfWeek: 1, startOnTick: !1, tickLength: 10, tickPixelInterval: 100, tickmarkPlacement: "between", tickPosition: "outside", title: { align: "middle", style: { color: "#666666" } }, type: "linear", minorGridLineColor: "#f2f2f2", minorGridLineWidth: 1, minorTickColor: "#999999", lineColor: "#ccd6eb", lineWidth: 1, gridLineColor: "#e6e6e6", tickColor: "#ccd6eb"
                }, defaultYAxisOptions: {
                    endOnTick: !0, maxPadding: .05, minPadding: .05,
                    tickPixelInterval: 72, showLastLabel: !0, labels: { x: -8 }, startOnTick: !0, title: { rotation: 270, text: "Values" }, stackLabels: { allowOverlap: !1, enabled: !1, formatter: function () { return a.numberFormat(this.total, -1) }, style: { fontSize: "11px", fontWeight: "bold", color: "#000000", textOutline: "1px contrast" } }, gridLineWidth: 1, lineWidth: 0
                }, defaultLeftAxisOptions: { labels: { x: -15 }, title: { rotation: 270 } }, defaultRightAxisOptions: { labels: { x: 15 }, title: { rotation: 90 } }, defaultBottomAxisOptions: { labels: { autoRotation: [-45], x: 0 }, title: { rotation: 0 } },
                defaultTopAxisOptions: { labels: { autoRotation: [-45], x: 0 }, title: { rotation: 0 } }, init: function (a, d) {
                    var g = d.isX, v = this; v.chart = a; v.horiz = a.inverted && !v.isZAxis ? !g : g; v.isXAxis = g; v.coll = v.coll || (g ? "xAxis" : "yAxis"); l(this, "init", { userOptions: d }); v.opposite = d.opposite; v.side = d.side || (v.horiz ? v.opposite ? 0 : 2 : v.opposite ? 1 : 3); v.setOptions(d); var c = this.options, k = c.type; v.labelFormatter = c.labels.formatter || v.defaultLabelFormatter; v.userOptions = d; v.minPixelPadding = 0; v.reversed = c.reversed; v.visible = !1 !== c.visible;
                    v.zoomEnabled = !1 !== c.zoomEnabled; v.hasNames = "category" === k || !0 === c.categories; v.categories = c.categories || v.hasNames; v.names || (v.names = [], v.names.keys = {}); v.plotLinesAndBandsGroups = {}; v.isLog = "logarithmic" === k; v.isDatetimeAxis = "datetime" === k; v.positiveValuesOnly = v.isLog && !v.allowNegativeLog; v.isLinked = y(c.linkedTo); v.ticks = {}; v.labelEdge = []; v.minorTicks = {}; v.plotLinesAndBands = []; v.alternateBands = {}; v.len = 0; v.minRange = v.userMinRange = c.minRange || c.maxZoom; v.range = c.range; v.offset = c.offset || 0; v.stacks =
                        {}; v.oldStacks = {}; v.stacksTouched = 0; v.max = null; v.min = null; v.crosshair = I(c.crosshair, G(a.options.tooltip.crosshairs)[g ? 0 : 1], !1); d = v.options.events; -1 === b(v, a.axes) && (g ? a.axes.splice(a.xAxis.length, 0, v) : a.axes.push(v), a[v.coll].push(v)); v.series = v.series || []; a.inverted && !v.isZAxis && g && void 0 === v.reversed && (v.reversed = !0); x(d, function (a, g) { C(v, g, a) }); v.lin2log = c.linearToLogConverter || v.lin2log; v.isLog && (v.val2lin = v.log2lin, v.lin2val = v.lin2log); l(this, "afterInit")
                }, setOptions: function (a) {
                this.options =
                    t(this.defaultOptions, "yAxis" === this.coll && this.defaultYAxisOptions, [this.defaultTopAxisOptions, this.defaultRightAxisOptions, this.defaultBottomAxisOptions, this.defaultLeftAxisOptions][this.side], t(r[this.coll], a)); l(this, "afterSetOptions", { userOptions: a })
                }, defaultLabelFormatter: function () {
                    var g = this.axis, b = this.value, d = g.chart.time, c = g.categories, k = this.dateTimeLabelFormat, n = r.lang, e = n.numericSymbols, n = n.numericSymbolMagnitude || 1E3, p = e && e.length, l, u = g.options.labels.format, g = g.isLog ? Math.abs(b) : g.tickInterval;
                    if (u) l = z(u, this, d); else if (c) l = b; else if (k) l = d.dateFormat(k, b); else if (p && 1E3 <= g) for (; p-- && void 0 === l;)d = Math.pow(n, p + 1), g >= d && 0 === 10 * b % d && null !== e[p] && 0 !== b && (l = a.numberFormat(b / d, -1) + e[p]); void 0 === l && (l = 1E4 <= Math.abs(b) ? a.numberFormat(b, -1) : a.numberFormat(b, -1, void 0, "")); return l
                }, getSeriesExtremes: function () {
                    var a = this, b = a.chart; l(this, "getSeriesExtremes", null, function () {
                    a.hasVisibleSeries = !1; a.dataMin = a.dataMax = a.threshold = null; a.softThreshold = !a.isXAxis; a.buildStacks && a.buildStacks(); e(a.series,
                        function (g) {
                            if (g.visible || !b.options.chart.ignoreHiddenSeries) {
                                var v = g.options, c = v.threshold, k; a.hasVisibleSeries = !0; a.positiveValuesOnly && 0 >= c && (c = null); if (a.isXAxis) v = g.xData, v.length && (g = m(v), k = E(v), p(g) || g instanceof Date || (v = d(v, p), g = m(v), k = E(v)), v.length && (a.dataMin = Math.min(I(a.dataMin, v[0], g), g), a.dataMax = Math.max(I(a.dataMax, v[0], k), k))); else if (g.getExtremes(), k = g.dataMax, g = g.dataMin, y(g) && y(k) && (a.dataMin = Math.min(I(a.dataMin, g), g), a.dataMax = Math.max(I(a.dataMax, k), k)), y(c) && (a.threshold =
                                    c), !v.softThreshold || a.positiveValuesOnly) a.softThreshold = !1
                            }
                        })
                    }); l(this, "afterGetSeriesExtremes")
                }, translate: function (a, b, d, c, k, n) { var g = this.linkedParent || this, v = 1, e = 0, J = c ? g.oldTransA : g.transA; c = c ? g.oldMin : g.min; var l = g.minPixelPadding; k = (g.isOrdinal || g.isBroken || g.isLog && k) && g.lin2val; J || (J = g.transA); d && (v *= -1, e = g.len); g.reversed && (v *= -1, e -= v * (g.sector || g.len)); b ? (a = (a * v + e - l) / J + c, k && (a = g.lin2val(a))) : (k && (a = g.val2lin(a)), a = p(c) ? v * (a - c) * J + e + v * l + (p(n) ? J * n : 0) : void 0); return a }, toPixels: function (a,
                    b) { return this.translate(a, !1, !this.horiz, null, !0) + (b ? 0 : this.pos) }, toValue: function (a, b) { return this.translate(a - (b ? 0 : this.pos), !0, !this.horiz, null, !0) }, getPlotLinePath: function (a, b, d, c, k) {
                        var g = this.chart, v = this.left, n = this.top, e, J, l = d && g.oldChartHeight || g.chartHeight, u = d && g.oldChartWidth || g.chartWidth, B; e = this.transB; var f = function (a, g, b) { if (a < g || a > b) c ? a = Math.min(Math.max(g, a), b) : B = !0; return a }; k = I(k, this.translate(a, null, null, d)); k = Math.min(Math.max(-1E5, k), 1E5); a = d = Math.round(k + e); e = J = Math.round(l -
                            k - e); p(k) ? this.horiz ? (e = n, J = l - this.bottom, a = d = f(a, v, v + this.width)) : (a = v, d = u - this.right, e = J = f(e, n, n + this.height)) : (B = !0, c = !1); return B && !c ? null : g.renderer.crispLine(["M", a, e, "L", d, J], b || 1)
                    }, getLinearTickPositions: function (a, b, d) { var g, v = f(Math.floor(b / a) * a); d = f(Math.ceil(d / a) * a); var c = [], k; f(v + a) === v && (k = 20); if (this.single) return [b]; for (b = v; b <= d;) { c.push(b); b = f(b + a, k); if (b === g) break; g = b } return c }, getMinorTickInterval: function () {
                        var a = this.options; return !0 === a.minorTicks ? I(a.minorTickInterval, "auto") :
                            !1 === a.minorTicks ? null : a.minorTickInterval
                    }, getMinorTickPositions: function () {
                        var a = this, b = a.options, d = a.tickPositions, c = a.minorTickInterval, k = [], n = a.pointRangePadding || 0, p = a.min - n, n = a.max + n, l = n - p; if (l && l / c < a.len / 3) if (a.isLog) e(this.paddedTicks, function (g, b, d) { b && k.push.apply(k, a.getLogTickPositions(c, d[b - 1], d[b], !0)) }); else if (a.isDatetimeAxis && "auto" === this.getMinorTickInterval()) k = k.concat(a.getTimeTicks(a.normalizeTimeTickInterval(c), p, n, b.startOfWeek)); else for (b = p + (d[0] - p) % c; b <= n && b !== k[0]; b +=
                            c)k.push(b); 0 !== k.length && a.trimTicks(k); return k
                    }, adjustForMinRange: function () {
                        var a = this.options, b = this.min, d = this.max, c, k, n, p, l, u, B, f; this.isXAxis && void 0 === this.minRange && !this.isLog && (y(a.min) || y(a.max) ? this.minRange = null : (e(this.series, function (a) { u = a.xData; for (p = B = a.xIncrement ? 1 : u.length - 1; 0 < p; p--)if (l = u[p] - u[p - 1], void 0 === n || l < n) n = l }), this.minRange = Math.min(5 * n, this.dataMax - this.dataMin))); d - b < this.minRange && (k = this.dataMax - this.dataMin >= this.minRange, f = this.minRange, c = (f - d + b) / 2, c = [b - c, I(a.min,
                            b - c)], k && (c[2] = this.isLog ? this.log2lin(this.dataMin) : this.dataMin), b = E(c), d = [b + f, I(a.max, b + f)], k && (d[2] = this.isLog ? this.log2lin(this.dataMax) : this.dataMax), d = m(d), d - b < f && (c[0] = d - f, c[1] = I(a.min, d - f), b = E(c))); this.min = b; this.max = d
                    }, getClosest: function () { var a; this.categories ? a = 1 : e(this.series, function (g) { var b = g.closestPointRange, d = g.visible || !g.chart.options.chart.ignoreHiddenSeries; !g.noSharedTooltip && y(b) && d && (a = y(a) ? Math.min(a, b) : b) }); return a }, nameToX: function (a) {
                        var g = u(this.categories), d = g ? this.categories :
                            this.names, c = a.options.x, k; a.series.requireSorting = !1; y(c) || (c = !1 === this.options.uniqueNames ? a.series.autoIncrement() : g ? b(a.name, d) : I(d.keys[a.name], -1)); -1 === c ? g || (k = d.length) : k = c; void 0 !== k && (this.names[k] = a.name, this.names.keys[a.name] = k); return k
                    }, updateNames: function () {
                        var b = this, d = this.names; 0 < d.length && (e(a.keys(d.keys), function (a) { delete d.keys[a] }), d.length = 0, this.minRange = this.userMinRange, e(this.series || [], function (a) {
                        a.xIncrement = null; if (!a.points || a.isDirtyData) a.processData(), a.generatePoints();
                            e(a.points, function (g, d) { var c; g.options && (c = b.nameToX(g), void 0 !== c && c !== g.x && (g.x = c, a.xData[d] = c)) })
                        }))
                    }, setAxisTranslation: function (a) {
                        var b = this, g = b.max - b.min, d = b.axisPointRange || 0, c, k = 0, n = 0, p = b.linkedParent, u = !!b.categories, f = b.transA, B = b.isXAxis; if (B || u || d) c = b.getClosest(), p ? (k = p.minPointOffset, n = p.pointRangePadding) : e(b.series, function (a) {
                            var g = u ? 1 : B ? I(a.options.pointRange, c, 0) : b.axisPointRange || 0; a = a.options.pointPlacement; d = Math.max(d, g); b.single || (k = Math.max(k, H(a) ? 0 : g / 2), n = Math.max(n, "on" ===
                                a ? 0 : g))
                        }), p = b.ordinalSlope && c ? b.ordinalSlope / c : 1, b.minPointOffset = k *= p, b.pointRangePadding = n *= p, b.pointRange = Math.min(d, g), B && (b.closestPointRange = c); a && (b.oldTransA = f); b.translationSlope = b.transA = f = b.options.staticScale || b.len / (g + n || 1); b.transB = b.horiz ? b.left : b.bottom; b.minPixelPadding = f * k; l(this, "afterSetAxisTranslation")
                    }, minFromRange: function () { return this.max - this.range }, setTickInterval: function (b) {
                        var g = this, d = g.chart, c = g.options, n = g.isLog, u = g.isDatetimeAxis, B = g.isXAxis, t = g.isLinked, h = c.maxPadding,
                        G = c.minPadding, x = c.tickInterval, z = c.tickPixelInterval, F = g.categories, H = p(g.threshold) ? g.threshold : null, w = g.softThreshold, q, M, m, r; u || F || t || this.getTickAmount(); m = I(g.userMin, c.min); r = I(g.userMax, c.max); t ? (g.linkedParent = d[g.coll][c.linkedTo], d = g.linkedParent.getExtremes(), g.min = I(d.min, d.dataMin), g.max = I(d.max, d.dataMax), c.type !== g.linkedParent.options.type && a.error(11, 1)) : (!w && y(H) && (g.dataMin >= H ? (q = H, G = 0) : g.dataMax <= H && (M = H, h = 0)), g.min = I(m, q, g.dataMin), g.max = I(r, M, g.dataMax)); n && (g.positiveValuesOnly &&
                            !b && 0 >= Math.min(g.min, I(g.dataMin, g.min)) && a.error(10, 1), g.min = f(g.log2lin(g.min), 15), g.max = f(g.log2lin(g.max), 15)); g.range && y(g.max) && (g.userMin = g.min = m = Math.max(g.dataMin, g.minFromRange()), g.userMax = r = g.max, g.range = null); l(g, "foundExtremes"); g.beforePadding && g.beforePadding(); g.adjustForMinRange(); !(F || g.axisPointRange || g.usePercentage || t) && y(g.min) && y(g.max) && (d = g.max - g.min) && (!y(m) && G && (g.min -= d * G), !y(r) && h && (g.max += d * h)); p(c.softMin) && !p(g.userMin) && (g.min = Math.min(g.min, c.softMin)); p(c.softMax) &&
                                !p(g.userMax) && (g.max = Math.max(g.max, c.softMax)); p(c.floor) && (g.min = Math.max(g.min, c.floor)); p(c.ceiling) && (g.max = Math.min(g.max, c.ceiling)); w && y(g.dataMin) && (H = H || 0, !y(m) && g.min < H && g.dataMin >= H ? g.min = H : !y(r) && g.max > H && g.dataMax <= H && (g.max = H)); g.tickInterval = g.min === g.max || void 0 === g.min || void 0 === g.max ? 1 : t && !x && z === g.linkedParent.options.tickPixelInterval ? x = g.linkedParent.tickInterval : I(x, this.tickAmount ? (g.max - g.min) / Math.max(this.tickAmount - 1, 1) : void 0, F ? 1 : (g.max - g.min) * z / Math.max(g.len, z)); B &&
                                    !b && e(g.series, function (a) { a.processData(g.min !== g.oldMin || g.max !== g.oldMax) }); g.setAxisTranslation(!0); g.beforeSetTickPositions && g.beforeSetTickPositions(); g.postProcessTickInterval && (g.tickInterval = g.postProcessTickInterval(g.tickInterval)); g.pointRange && !x && (g.tickInterval = Math.max(g.pointRange, g.tickInterval)); b = I(c.minTickInterval, g.isDatetimeAxis && g.closestPointRange); !x && g.tickInterval < b && (g.tickInterval = b); u || n || x || (g.tickInterval = L(g.tickInterval, null, k(g.tickInterval), I(c.allowDecimals,
                                        !(.5 < g.tickInterval && 5 > g.tickInterval && 1E3 < g.max && 9999 > g.max)), !!this.tickAmount)); this.tickAmount || (g.tickInterval = g.unsquish()); this.setTickPositions()
                    }, setTickPositions: function () {
                        var a = this.options, b, d = a.tickPositions; b = this.getMinorTickInterval(); var c = a.tickPositioner, k = a.startOnTick, n = a.endOnTick; this.tickmarkOffset = this.categories && "between" === a.tickmarkPlacement && 1 === this.tickInterval ? .5 : 0; this.minorTickInterval = "auto" === b && this.tickInterval ? this.tickInterval / 5 : b; this.single = this.min === this.max &&
                            y(this.min) && !this.tickAmount && (parseInt(this.min, 10) === this.min || !1 !== a.allowDecimals); this.tickPositions = b = d && d.slice(); !b && (b = this.isDatetimeAxis ? this.getTimeTicks(this.normalizeTimeTickInterval(this.tickInterval, a.units), this.min, this.max, a.startOfWeek, this.ordinalPositions, this.closestPointRange, !0) : this.isLog ? this.getLogTickPositions(this.tickInterval, this.min, this.max) : this.getLinearTickPositions(this.tickInterval, this.min, this.max), b.length > this.len && (b = [b[0], b.pop()], b[0] === b[1] && (b.length =
                                1)), this.tickPositions = b, c && (c = c.apply(this, [this.min, this.max]))) && (this.tickPositions = b = c); this.paddedTicks = b.slice(0); this.trimTicks(b, k, n); this.isLinked || (this.single && 2 > b.length && (this.min -= .5, this.max += .5), d || c || this.adjustTickAmount()); l(this, "afterSetTickPositions")
                    }, trimTicks: function (a, b, d) {
                        var g = a[0], c = a[a.length - 1], k = this.minPointOffset || 0; if (!this.isLinked) {
                            if (b && -Infinity !== g) this.min = g; else for (; this.min - k > a[0];)a.shift(); if (d) this.max = c; else for (; this.max + k < a[a.length - 1];)a.pop();
                            0 === a.length && y(g) && !this.options.tickPositions && a.push((c + g) / 2)
                        }
                    }, alignToOthers: function () { var a = {}, b, d = this.options; !1 === this.chart.options.chart.alignTicks || !1 === d.alignTicks || !1 === d.startOnTick || !1 === d.endOnTick || this.isLog || e(this.chart[this.coll], function (g) { var d = g.options, d = [g.horiz ? d.left : d.top, d.width, d.height, d.pane].join(); g.series.length && (a[d] ? b = !0 : a[d] = 1) }); return b }, getTickAmount: function () {
                        var a = this.options, b = a.tickAmount, d = a.tickPixelInterval; !y(a.tickInterval) && this.len < d && !this.isRadial &&
                            !this.isLog && a.startOnTick && a.endOnTick && (b = 2); !b && this.alignToOthers() && (b = Math.ceil(this.len / d) + 1); 4 > b && (this.finalTickAmt = b, b = 5); this.tickAmount = b
                    }, adjustTickAmount: function () {
                        var a = this.tickInterval, b = this.tickPositions, d = this.tickAmount, c = this.finalTickAmt, k = b && b.length, n = I(this.threshold, this.softThreshold ? 0 : null); if (this.hasData()) {
                            if (k < d) { for (; b.length < d;)b.length % 2 || this.min === n ? b.push(f(b[b.length - 1] + a)) : b.unshift(f(b[0] - a)); this.transA *= (k - 1) / (d - 1); this.min = b[0]; this.max = b[b.length - 1] } else k >
                                d && (this.tickInterval *= 2, this.setTickPositions()); if (y(c)) { for (a = d = b.length; a--;)(3 === c && 1 === a % 2 || 2 >= c && 0 < a && a < d - 1) && b.splice(a, 1); this.finalTickAmt = void 0 }
                        }
                    }, setScale: function () {
                        var a, b; this.oldMin = this.min; this.oldMax = this.max; this.oldAxisLength = this.len; this.setAxisSize(); b = this.len !== this.oldAxisLength; e(this.series, function (b) { if (b.isDirtyData || b.isDirty || b.xAxis.isDirty) a = !0 }); b || a || this.isLinked || this.forceRedraw || this.userMin !== this.oldUserMin || this.userMax !== this.oldUserMax || this.alignToOthers() ?
                            (this.resetStacks && this.resetStacks(), this.forceRedraw = !1, this.getSeriesExtremes(), this.setTickInterval(), this.oldUserMin = this.userMin, this.oldUserMax = this.userMax, this.isDirty || (this.isDirty = b || this.min !== this.oldMin || this.max !== this.oldMax)) : this.cleanStacks && this.cleanStacks(); l(this, "afterSetScale")
                    }, setExtremes: function (a, b, d, k, n) {
                        var g = this, p = g.chart; d = I(d, !0); e(g.series, function (a) { delete a.kdTree }); n = c(n, { min: a, max: b }); l(g, "setExtremes", n, function () {
                        g.userMin = a; g.userMax = b; g.eventArgs = n; d &&
                            p.redraw(k)
                        })
                    }, zoom: function (a, b) { var g = this.dataMin, d = this.dataMax, c = this.options, k = Math.min(g, I(c.min, g)), c = Math.max(d, I(c.max, d)); if (a !== this.min || b !== this.max) this.allowZoomOutside || (y(g) && (a < k && (a = k), a > c && (a = c)), y(d) && (b < k && (b = k), b > c && (b = c))), this.displayBtn = void 0 !== a || void 0 !== b, this.setExtremes(a, b, !1, void 0, { trigger: "zoom" }); return !0 }, setAxisSize: function () {
                        var b = this.chart, d = this.options, c = d.offsets || [0, 0, 0, 0], k = this.horiz, n = this.width = Math.round(a.relativeLength(I(d.width, b.plotWidth - c[3] +
                            c[1]), b.plotWidth)), e = this.height = Math.round(a.relativeLength(I(d.height, b.plotHeight - c[0] + c[2]), b.plotHeight)), p = this.top = Math.round(a.relativeLength(I(d.top, b.plotTop + c[0]), b.plotHeight, b.plotTop)), d = this.left = Math.round(a.relativeLength(I(d.left, b.plotLeft + c[3]), b.plotWidth, b.plotLeft)); this.bottom = b.chartHeight - e - p; this.right = b.chartWidth - n - d; this.len = Math.max(k ? n : e, 0); this.pos = k ? d : p
                    }, getExtremes: function () {
                        var a = this.isLog; return {
                            min: a ? f(this.lin2log(this.min)) : this.min, max: a ? f(this.lin2log(this.max)) :
                                this.max, dataMin: this.dataMin, dataMax: this.dataMax, userMin: this.userMin, userMax: this.userMax
                        }
                    }, getThreshold: function (a) { var b = this.isLog, g = b ? this.lin2log(this.min) : this.min, b = b ? this.lin2log(this.max) : this.max; null === a || -Infinity === a ? a = g : Infinity === a ? a = b : g > a ? a = g : b < a && (a = b); return this.translate(a, 0, 1, 0, 1) }, autoLabelAlign: function (a) { a = (I(a, 0) - 90 * this.side + 720) % 360; return 15 < a && 165 > a ? "right" : 195 < a && 345 > a ? "left" : "center" }, tickSize: function (a) {
                        var b = this.options, g = b[a + "Length"], d = I(b[a + "Width"], "tick" ===
                            a && this.isXAxis ? 1 : 0); if (d && g) return "inside" === b[a + "Position"] && (g = -g), [g, d]
                    }, labelMetrics: function () { var a = this.tickPositions && this.tickPositions[0] || 0; return this.chart.renderer.fontMetrics(this.options.labels.style && this.options.labels.style.fontSize, this.ticks[a] && this.ticks[a].label) }, unsquish: function () {
                        var a = this.options.labels, b = this.horiz, d = this.tickInterval, c = d, k = this.len / (((this.categories ? 1 : 0) + this.max - this.min) / d), n, p = a.rotation, l = this.labelMetrics(), u, B = Number.MAX_VALUE, t, h = function (a) {
                            a /=
                            k || 1; a = 1 < a ? Math.ceil(a) : 1; return f(a * d)
                        }; b ? (t = !a.staggerLines && !a.step && (y(p) ? [p] : k < I(a.autoRotationLimit, 80) && a.autoRotation)) && e(t, function (a) { var b; if (a === p || a && -90 <= a && 90 >= a) u = h(Math.abs(l.h / Math.sin(q * a))), b = u + Math.abs(a / 360), b < B && (B = b, n = a, c = u) }) : a.step || (c = h(l.h)); this.autoRotation = t; this.labelRotation = I(n, p); return c
                    }, getSlotWidth: function () {
                        var a = this.chart, b = this.horiz, d = this.options.labels, c = Math.max(this.tickPositions.length - (this.categories ? 0 : 1), 1), k = a.margin[3]; return b && 2 > (d.step || 0) &&
                            !d.rotation && (this.staggerLines || 1) * this.len / c || !b && (d.style && parseInt(d.style.width, 10) || k && k - a.spacing[3] || .33 * a.chartWidth)
                    }, renderUnsquish: function () {
                        var a = this.chart, b = a.renderer, d = this.tickPositions, c = this.ticks, k = this.options.labels, n = k && k.style || {}, p = this.horiz, l = this.getSlotWidth(), u = Math.max(1, Math.round(l - 2 * (k.padding || 5))), B = {}, f = this.labelMetrics(), t = k.style && k.style.textOverflow, h, G, x = 0, z; H(k.rotation) || (B.rotation = k.rotation || 0); e(d, function (a) {
                        (a = c[a]) && a.label && a.label.textPxLength >
                            x && (x = a.label.textPxLength)
                        }); this.maxLabelLength = x; if (this.autoRotation) x > u && x > f.h ? B.rotation = this.labelRotation : this.labelRotation = 0; else if (l && (h = u, !t)) for (G = "clip", u = d.length; !p && u--;)if (z = d[u], z = c[z].label) z.styles && "ellipsis" === z.styles.textOverflow ? z.css({ textOverflow: "clip" }) : z.textPxLength > l && z.css({ width: l + "px" }), z.getBBox().height > this.len / d.length - (f.h - f.f) && (z.specificTextOverflow = "ellipsis"); B.rotation && (h = x > .5 * a.chartHeight ? .33 * a.chartHeight : x, t || (G = "ellipsis")); if (this.labelAlign =
                            k.align || this.autoLabelAlign(this.labelRotation)) B.align = this.labelAlign; e(d, function (a) { var b = (a = c[a]) && a.label, g = n.width, d = {}; b && (b.attr(B), h && !g && "nowrap" !== n.whiteSpace && (h < b.textPxLength || "SPAN" === b.element.tagName) ? (d.width = h, t || (d.textOverflow = b.specificTextOverflow || G), b.css(d)) : b.styles && b.styles.width && !d.width && !g && b.css({ width: null }), delete b.specificTextOverflow, a.rotation = B.rotation) }); this.tickRotCorr = b.rotCorr(f.b, this.labelRotation || 0, 0 !== this.side)
                    }, hasData: function () {
                        return this.hasVisibleSeries ||
                            y(this.min) && y(this.max) && this.tickPositions && 0 < this.tickPositions.length
                    }, addTitle: function (a) {
                        var b = this.chart.renderer, g = this.horiz, d = this.opposite, c = this.options.title, k; this.axisTitle || ((k = c.textAlign) || (k = (g ? { low: "left", middle: "center", high: "right" } : { low: d ? "right" : "left", middle: "center", high: d ? "left" : "right" })[c.align]), this.axisTitle = b.text(c.text, 0, 0, c.useHTML).attr({ zIndex: 7, rotation: c.rotation || 0, align: k }).addClass("highcharts-axis-title").css(t(c.style)).add(this.axisGroup), this.axisTitle.isNew =
                            !0); c.style.width || this.isRadial || this.axisTitle.css({ width: this.len }); this.axisTitle[a ? "show" : "hide"](!0)
                    }, generateTick: function (a) { var b = this.ticks; b[a] ? b[a].addLabel() : b[a] = new M(this, a) }, getOffset: function () {
                        var a = this, b = a.chart, d = b.renderer, c = a.options, k = a.tickPositions, n = a.ticks, p = a.horiz, u = a.side, B = b.inverted && !a.isZAxis ? [1, 0, 3, 2][u] : u, f, t, h = 0, G, z = 0, H = c.title, F = c.labels, w = 0, q = b.axisOffset, b = b.clipOffset, m = [-1, 1, 1, -1][u], M = c.className, r = a.axisParent, L = this.tickSize("tick"); f = a.hasData(); a.showAxis =
                            t = f || I(c.showEmpty, !0); a.staggerLines = a.horiz && F.staggerLines; a.axisGroup || (a.gridGroup = d.g("grid").attr({ zIndex: c.gridZIndex || 1 }).addClass("highcharts-" + this.coll.toLowerCase() + "-grid " + (M || "")).add(r), a.axisGroup = d.g("axis").attr({ zIndex: c.zIndex || 2 }).addClass("highcharts-" + this.coll.toLowerCase() + " " + (M || "")).add(r), a.labelGroup = d.g("axis-labels").attr({ zIndex: F.zIndex || 7 }).addClass("highcharts-" + a.coll.toLowerCase() + "-labels " + (M || "")).add(r)); f || a.isLinked ? (e(k, function (b, g) {
                                a.generateTick(b,
                                    g)
                            }), a.renderUnsquish(), a.reserveSpaceDefault = 0 === u || 2 === u || { 1: "left", 3: "right" }[u] === a.labelAlign, I(F.reserveSpace, "center" === a.labelAlign ? !0 : null, a.reserveSpaceDefault) && e(k, function (a) { w = Math.max(n[a].getLabelSize(), w) }), a.staggerLines && (w *= a.staggerLines), a.labelOffset = w * (a.opposite ? -1 : 1)) : x(n, function (a, b) { a.destroy(); delete n[b] }); H && H.text && !1 !== H.enabled && (a.addTitle(t), t && !1 !== H.reserveSpace && (a.titleOffset = h = a.axisTitle.getBBox()[p ? "height" : "width"], G = H.offset, z = y(G) ? 0 : I(H.margin, p ? 5 : 10)));
                        a.renderLine(); a.offset = m * I(c.offset, q[u]); a.tickRotCorr = a.tickRotCorr || { x: 0, y: 0 }; d = 0 === u ? -a.labelMetrics().h : 2 === u ? a.tickRotCorr.y : 0; z = Math.abs(w) + z; w && (z = z - d + m * (p ? I(F.y, a.tickRotCorr.y + 8 * m) : F.x)); a.axisTitleMargin = I(G, z); q[u] = Math.max(q[u], a.axisTitleMargin + h + m * a.offset, z, f && k.length && L ? L[0] + m * a.offset : 0); c = c.offset ? 0 : 2 * Math.floor(a.axisLine.strokeWidth() / 2); b[B] = Math.max(b[B], c); l(this, "afterGetOffset")
                    }, getLinePath: function (a) {
                        var b = this.chart, g = this.opposite, d = this.offset, c = this.horiz, k = this.left +
                            (g ? this.width : 0) + d, d = b.chartHeight - this.bottom - (g ? this.height : 0) + d; g && (a *= -1); return b.renderer.crispLine(["M", c ? this.left : k, c ? d : this.top, "L", c ? b.chartWidth - this.right : k, c ? d : b.chartHeight - this.bottom], a)
                    }, renderLine: function () { this.axisLine || (this.axisLine = this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup), this.axisLine.attr({ stroke: this.options.lineColor, "stroke-width": this.options.lineWidth, zIndex: 7 })) }, getTitlePosition: function () {
                        var a = this.horiz, b = this.left, d = this.top,
                        c = this.len, k = this.options.title, n = a ? b : d, e = this.opposite, p = this.offset, l = k.x || 0, u = k.y || 0, B = this.axisTitle, f = this.chart.renderer.fontMetrics(k.style && k.style.fontSize, B), B = Math.max(B.getBBox(null, 0).height - f.h - 1, 0), c = { low: n + (a ? 0 : c), middle: n + c / 2, high: n + (a ? c : 0) }[k.align], b = (a ? d + this.height : b) + (a ? 1 : -1) * (e ? -1 : 1) * this.axisTitleMargin + [-B, B, f.f, -B][this.side]; return { x: a ? c + l : b + (e ? this.width : 0) + p + l, y: a ? b + u - (e ? this.height : 0) + p : c + u }
                    }, renderMinorTick: function (a) {
                        var b = this.chart.hasRendered && p(this.oldMin), d =
                            this.minorTicks; d[a] || (d[a] = new M(this, a, "minor")); b && d[a].isNew && d[a].render(null, !0); d[a].render(null, !1, 1)
                    }, renderTick: function (a, b) { var d = this.isLinked, g = this.ticks, c = this.chart.hasRendered && p(this.oldMin); if (!d || a >= this.min && a <= this.max) g[a] || (g[a] = new M(this, a)), c && g[a].isNew && g[a].render(b, !0, .1), g[a].render(b) }, render: function () {
                        var b = this, d = b.chart, c = b.options, k = b.isLog, n = b.isLinked, u = b.tickPositions, f = b.axisTitle, t = b.ticks, h = b.minorTicks, G = b.alternateBands, z = c.stackLabels, H = c.alternateGridColor,
                        F = b.tickmarkOffset, w = b.axisLine, I = b.showAxis, m = D(d.renderer.globalAnimation), q, r; b.labelEdge.length = 0; b.overlap = !1; e([t, h, G], function (a) { x(a, function (a) { a.isActive = !1 }) }); if (b.hasData() || n) b.minorTickInterval && !b.categories && e(b.getMinorTickPositions(), function (a) { b.renderMinorTick(a) }), u.length && (e(u, function (a, d) { b.renderTick(a, d) }), F && (0 === b.min || b.single) && (t[-1] || (t[-1] = new M(b, -1, null, !0)), t[-1].render(-1))), H && e(u, function (c, g) {
                            r = void 0 !== u[g + 1] ? u[g + 1] + F : b.max - F; 0 === g % 2 && c < b.max && r <= b.max +
                                (d.polar ? -F : F) && (G[c] || (G[c] = new a.PlotLineOrBand(b)), q = c + F, G[c].options = { from: k ? b.lin2log(q) : q, to: k ? b.lin2log(r) : r, color: H }, G[c].render(), G[c].isActive = !0)
                        }), b._addedPlotLB || (e((c.plotLines || []).concat(c.plotBands || []), function (a) { b.addPlotBandOrLine(a) }), b._addedPlotLB = !0); e([t, h, G], function (a) {
                            var b, c = [], g = m.duration; x(a, function (a, b) { a.isActive || (a.render(b, !1, 0), a.isActive = !1, c.push(b)) }); B(function () { for (b = c.length; b--;)a[c[b]] && !a[c[b]].isActive && (a[c[b]].destroy(), delete a[c[b]]) }, a !== G &&
                                d.hasRendered && g ? g : 0)
                        }); w && (w[w.isPlaced ? "animate" : "attr"]({ d: this.getLinePath(w.strokeWidth()) }), w.isPlaced = !0, w[I ? "show" : "hide"](!0)); f && I && (c = b.getTitlePosition(), p(c.y) ? (f[f.isNew ? "attr" : "animate"](c), f.isNew = !1) : (f.attr("y", -9999), f.isNew = !0)); z && z.enabled && b.renderStackTotals(); b.isDirty = !1; l(this, "afterRender")
                    }, redraw: function () { this.visible && (this.render(), e(this.plotLinesAndBands, function (a) { a.render() })); e(this.series, function (a) { a.isDirty = !0 }) }, keepProps: "extKey hcEvents names series userMax userMin".split(" "),
                destroy: function (a) {
                    var d = this, c = d.stacks, g = d.plotLinesAndBands, k; l(this, "destroy", { keepEvents: a }); a || n(d); x(c, function (a, b) { w(a); c[b] = null }); e([d.ticks, d.minorTicks, d.alternateBands], function (a) { w(a) }); if (g) for (a = g.length; a--;)g[a].destroy(); e("stackTotalGroup axisLine axisTitle axisGroup gridGroup labelGroup cross scrollbar".split(" "), function (a) { d[a] && (d[a] = d[a].destroy()) }); for (k in d.plotLinesAndBandsGroups) d.plotLinesAndBandsGroups[k] = d.plotLinesAndBandsGroups[k].destroy(); x(d, function (a, c) {
                    -1 ===
                        b(c, d.keepProps) && delete d[c]
                    })
                }, drawCrosshair: function (a, b) {
                    var d, c = this.crosshair, g = I(c.snap, !0), k, n = this.cross; l(this, "drawCrosshair", { e: a, point: b }); a || (a = this.cross && this.cross.e); if (this.crosshair && !1 !== (y(b) || !g)) {
                        g ? y(b) && (k = I(b.crosshairPos, this.isXAxis ? b.plotX : this.len - b.plotY)) : k = a && (this.horiz ? a.chartX - this.pos : this.len - a.chartY + this.pos); y(k) && (d = this.getPlotLinePath(b && (this.isXAxis ? b.x : I(b.stackY, b.y)), null, null, null, k) || null); if (!y(d)) { this.hideCrosshair(); return } g = this.categories &&
                            !this.isRadial; n || (this.cross = n = this.chart.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-" + (g ? "category " : "thin ") + c.className).attr({ zIndex: I(c.zIndex, 2) }).add(), n.attr({ stroke: c.color || (g ? h("#ccd6eb").setOpacity(.25).get() : "#cccccc"), "stroke-width": I(c.width, 1) }).css({ "pointer-events": "none" }), c.dashStyle && n.attr({ dashstyle: c.dashStyle })); n.show().attr({ d: d }); g && !c.width && n.attr({ "stroke-width": this.transA }); this.cross.e = a
                    } else this.hideCrosshair(); l(this, "afterDrawCrosshair",
                        { e: a, point: b })
                }, hideCrosshair: function () { this.cross && this.cross.hide() }
            }); return a.Axis = F
    }(K); (function (a) {
        var C = a.Axis, D = a.getMagnitude, E = a.normalizeTickInterval, m = a.timeUnits; C.prototype.getTimeTicks = function () { return this.chart.time.getTimeTicks.apply(this.chart.time, arguments) }; C.prototype.normalizeTimeTickInterval = function (a, f) {
            var h = f || [["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]], ["second", [1, 2, 5, 10, 15, 30]], ["minute", [1, 2, 5, 10, 15, 30]], ["hour", [1, 2, 3, 4, 6, 8, 12]], ["day", [1, 2]], ["week", [1, 2]],
            ["month", [1, 2, 3, 4, 6]], ["year", null]]; f = h[h.length - 1]; var y = m[f[0]], q = f[1], w; for (w = 0; w < h.length && !(f = h[w], y = m[f[0]], q = f[1], h[w + 1] && a <= (y * q[q.length - 1] + m[h[w + 1][0]]) / 2); w++); y === m.year && a < 5 * y && (q = [1, 2, 5]); a = E(a / y, q, "year" === f[0] ? Math.max(D(a / y), 1) : 1); return { unitRange: y, count: a, unitName: f[0] }
        }
    })(K); (function (a) {
        var C = a.Axis, D = a.getMagnitude, E = a.map, m = a.normalizeTickInterval, h = a.pick; C.prototype.getLogTickPositions = function (a, r, y, q) {
            var f = this.options, e = this.len, c = []; q || (this._minorAutoInterval = null);
            if (.5 <= a) a = Math.round(a), c = this.getLinearTickPositions(a, r, y); else if (.08 <= a) for (var e = Math.floor(r), l, z, k, d, b, f = .3 < a ? [1, 2, 4] : .15 < a ? [1, 2, 4, 6, 8] : [1, 2, 3, 4, 5, 6, 7, 8, 9]; e < y + 1 && !b; e++)for (z = f.length, l = 0; l < z && !b; l++)k = this.log2lin(this.lin2log(e) * f[l]), k > r && (!q || d <= y) && void 0 !== d && c.push(d), d > y && (b = !0), d = k; else r = this.lin2log(r), y = this.lin2log(y), a = q ? this.getMinorTickInterval() : f.tickInterval, a = h("auto" === a ? null : a, this._minorAutoInterval, f.tickPixelInterval / (q ? 5 : 1) * (y - r) / ((q ? e / this.tickPositions.length :
                e) || 1)), a = m(a, null, D(a)), c = E(this.getLinearTickPositions(a, r, y), this.log2lin), q || (this._minorAutoInterval = a / 5); q || (this.tickInterval = a); return c
        }; C.prototype.log2lin = function (a) { return Math.log(a) / Math.LN10 }; C.prototype.lin2log = function (a) { return Math.pow(10, a) }
    })(K); (function (a, C) {
        var D = a.arrayMax, E = a.arrayMin, m = a.defined, h = a.destroyObjectProperties, f = a.each, r = a.erase, y = a.merge, q = a.pick; a.PlotLineOrBand = function (a, e) { this.axis = a; e && (this.options = e, this.id = e.id) }; a.PlotLineOrBand.prototype = {
            render: function () {
                var f =
                    this, e = f.axis, c = e.horiz, l = f.options, h = l.label, k = f.label, d = l.to, b = l.from, u = l.value, p = m(b) && m(d), H = m(u), t = f.svgElem, r = !t, x = [], I = l.color, n = q(l.zIndex, 0), G = l.events, x = { "class": "highcharts-plot-" + (p ? "band " : "line ") + (l.className || "") }, B = {}, M = e.chart.renderer, F = p ? "bands" : "lines"; e.isLog && (b = e.log2lin(b), d = e.log2lin(d), u = e.log2lin(u)); H ? (x.stroke = I, x["stroke-width"] = l.width, l.dashStyle && (x.dashstyle = l.dashStyle)) : p && (I && (x.fill = I), l.borderWidth && (x.stroke = l.borderColor, x["stroke-width"] = l.borderWidth));
                B.zIndex = n; F += "-" + n; (I = e.plotLinesAndBandsGroups[F]) || (e.plotLinesAndBandsGroups[F] = I = M.g("plot-" + F).attr(B).add()); r && (f.svgElem = t = M.path().attr(x).add(I)); if (H) x = e.getPlotLinePath(u, t.strokeWidth()); else if (p) x = e.getPlotBandPath(b, d, l); else return; r && x && x.length ? (t.attr({ d: x }), G && a.objectEach(G, function (a, b) { t.on(b, function (a) { G[b].apply(f, [a]) }) })) : t && (x ? (t.show(), t.animate({ d: x })) : (t.hide(), k && (f.label = k = k.destroy()))); h && m(h.text) && x && x.length && 0 < e.width && 0 < e.height && !x.isFlat ? (h = y({
                    align: c &&
                        p && "center", x: c ? !p && 4 : 10, verticalAlign: !c && p && "middle", y: c ? p ? 16 : 10 : p ? 6 : -4, rotation: c && !p && 90
                }, h), this.renderLabel(h, x, p, n)) : k && k.hide(); return f
            }, renderLabel: function (a, e, c, l) {
                var f = this.label, k = this.axis.chart.renderer; f || (f = { align: a.textAlign || a.align, rotation: a.rotation, "class": "highcharts-plot-" + (c ? "band" : "line") + "-label " + (a.className || "") }, f.zIndex = l, this.label = f = k.text(a.text, 0, 0, a.useHTML).attr(f).add(), f.css(a.style)); l = e.xBounds || [e[1], e[4], c ? e[6] : e[1]]; e = e.yBounds || [e[2], e[5], c ? e[7] : e[2]];
                c = E(l); k = E(e); f.align(a, !1, { x: c, y: k, width: D(l) - c, height: D(e) - k }); f.show()
            }, destroy: function () { r(this.axis.plotLinesAndBands, this); delete this.axis; h(this) }
        }; a.extend(C.prototype, {
            getPlotBandPath: function (a, e) {
                var c = this.getPlotLinePath(e, null, null, !0), l = this.getPlotLinePath(a, null, null, !0), f = [], k = this.horiz, d = 1, b; a = a < this.min && e < this.min || a > this.max && e > this.max; if (l && c) for (a && (b = l.toString() === c.toString(), d = 0), a = 0; a < l.length; a += 6)k && c[a + 1] === l[a + 1] ? (c[a + 1] += d, c[a + 4] += d) : k || c[a + 2] !== l[a + 2] || (c[a +
                    2] += d, c[a + 5] += d), f.push("M", l[a + 1], l[a + 2], "L", l[a + 4], l[a + 5], c[a + 4], c[a + 5], c[a + 1], c[a + 2], "z"), f.isFlat = b; return f
            }, addPlotBand: function (a) { return this.addPlotBandOrLine(a, "plotBands") }, addPlotLine: function (a) { return this.addPlotBandOrLine(a, "plotLines") }, addPlotBandOrLine: function (f, e) { var c = (new a.PlotLineOrBand(this, f)).render(), l = this.userOptions; c && (e && (l[e] = l[e] || [], l[e].push(f)), this.plotLinesAndBands.push(c)); return c }, removePlotBandOrLine: function (a) {
                for (var e = this.plotLinesAndBands, c = this.options,
                    l = this.userOptions, h = e.length; h--;)e[h].id === a && e[h].destroy(); f([c.plotLines || [], l.plotLines || [], c.plotBands || [], l.plotBands || []], function (c) { for (h = c.length; h--;)c[h].id === a && r(c, c[h]) })
            }, removePlotBand: function (a) { this.removePlotBandOrLine(a) }, removePlotLine: function (a) { this.removePlotBandOrLine(a) }
        })
    })(K, V); (function (a) {
        var C = a.doc, D = a.each, E = a.extend, m = a.format, h = a.isNumber, f = a.map, r = a.merge, y = a.pick, q = a.splat, w = a.syncTimeout, e = a.timeUnits; a.Tooltip = function () { this.init.apply(this, arguments) };
        a.Tooltip.prototype = {
            init: function (a, e) { this.chart = a; this.options = e; this.crosshairs = []; this.now = { x: 0, y: 0 }; this.isHidden = !0; this.split = e.split && !a.inverted; this.shared = e.shared || this.split; this.outside = e.outside && !this.split }, cleanSplit: function (a) { D(this.chart.series, function (c) { var e = c && c.tt; e && (!e.isActive || a ? c.tt = e.destroy() : e.isActive = !1) }) }, getLabel: function () {
                var c = this.chart.renderer, e = this.options, f; this.label || (this.outside && (this.container = f = a.doc.createElement("div"), f.className = "highcharts-tooltip-container",
                    a.css(f, { position: "absolute", top: "1px", pointerEvents: e.style && e.style.pointerEvents }), a.doc.body.appendChild(f), this.renderer = c = new a.Renderer(f, 0, 0)), this.split ? this.label = c.g("tooltip") : (this.label = c.label("", 0, 0, e.shape || "callout", null, null, e.useHTML, null, "tooltip").attr({ padding: e.padding, r: e.borderRadius }), this.label.attr({ fill: e.backgroundColor, "stroke-width": e.borderWidth }).css(e.style).shadow(e.shadow)), this.outside && (this.label.attr({ x: this.distance, y: this.distance }), this.label.xSetter = function (a) {
                        f.style.left =
                        a + "px"
                    }, this.label.ySetter = function (a) { f.style.top = a + "px" }), this.label.attr({ zIndex: 8 }).add()); return this.label
            }, update: function (a) { this.destroy(); r(!0, this.chart.options.tooltip.userOptions, a); this.init(this.chart, r(!0, this.options, a)) }, destroy: function () {
            this.label && (this.label = this.label.destroy()); this.split && this.tt && (this.cleanSplit(this.chart, !0), this.tt = this.tt.destroy()); this.renderer && (this.renderer = this.renderer.destroy(), a.discardElement(this.container)); a.clearTimeout(this.hideTimer);
                a.clearTimeout(this.tooltipTimeout)
            }, move: function (c, e, f, k) { var d = this, b = d.now, u = !1 !== d.options.animation && !d.isHidden && (1 < Math.abs(c - b.x) || 1 < Math.abs(e - b.y)), p = d.followPointer || 1 < d.len; E(b, { x: u ? (2 * b.x + c) / 3 : c, y: u ? (b.y + e) / 2 : e, anchorX: p ? void 0 : u ? (2 * b.anchorX + f) / 3 : f, anchorY: p ? void 0 : u ? (b.anchorY + k) / 2 : k }); d.getLabel().attr(b); u && (a.clearTimeout(this.tooltipTimeout), this.tooltipTimeout = setTimeout(function () { d && d.move(c, e, f, k) }, 32)) }, hide: function (c) {
                var e = this; a.clearTimeout(this.hideTimer); c = y(c, this.options.hideDelay,
                    500); this.isHidden || (this.hideTimer = w(function () { e.getLabel()[c ? "fadeOut" : "hide"](); e.isHidden = !0 }, c))
            }, getAnchor: function (a, e) {
                var c = this.chart, k = c.pointer, d = c.inverted, b = c.plotTop, u = c.plotLeft, p = 0, l = 0, t, h; a = q(a); this.followPointer && e || k.followTouchMove && e && "touchmove" === e.type ? (void 0 === e.chartX && (e = k.normalize(e)), a = [e.chartX - c.plotLeft, e.chartY - b]) : a[0].tooltipPos ? a = a[0].tooltipPos : (D(a, function (a) {
                    t = a.series.yAxis; h = a.series.xAxis; p += a.plotX + (!d && h ? h.left - u : 0); l += (a.plotLow ? (a.plotLow + a.plotHigh) /
                        2 : a.plotY) + (!d && t ? t.top - b : 0)
                }), p /= a.length, l /= a.length, a = [d ? c.plotWidth - l : p, this.shared && !d && 1 < a.length && e ? e.chartY - b : d ? c.plotHeight - p : l]); return f(a, Math.round)
            }, getPosition: function (a, e, f) {
                var c = this.chart, d = this.distance, b = {}, u = c.inverted && f.h || 0, p, l = this.outside, t = l ? C.documentElement.clientWidth - 2 * d : c.chartWidth, h = l ? Math.max(C.body.scrollHeight, C.documentElement.scrollHeight, C.body.offsetHeight, C.documentElement.offsetHeight, C.documentElement.clientHeight) : c.chartHeight, x = c.pointer.chartPosition,
                z = ["y", h, e, (l ? x.top - d : 0) + f.plotY + c.plotTop, l ? 0 : c.plotTop, l ? h : c.plotTop + c.plotHeight], n = ["x", t, a, (l ? x.left - d : 0) + f.plotX + c.plotLeft, l ? 0 : c.plotLeft, l ? t : c.plotLeft + c.plotWidth], G = !this.followPointer && y(f.ttBelow, !c.inverted === !!f.negative), B = function (a, c, g, k, n, e) { var p = g < k - d, f = k + d + g < c, B = k - d - g; k += d; if (G && f) b[a] = k; else if (!G && p) b[a] = B; else if (p) b[a] = Math.min(e - g, 0 > B - u ? B : B - u); else if (f) b[a] = Math.max(n, k + u + g > c ? k : k + u); else return !1 }, q = function (a, c, g, k) {
                    var n; k < d || k > c - d ? n = !1 : b[a] = k < g / 2 ? 1 : k > c - g / 2 ? c - g - 2 : k - g /
                        2; return n
                }, F = function (a) { var b = z; z = n; n = b; p = a }, g = function () { !1 !== B.apply(0, z) ? !1 !== q.apply(0, n) || p || (F(!0), g()) : p ? b.x = b.y = 0 : (F(!0), g()) }; (c.inverted || 1 < this.len) && F(); g(); return b
            }, defaultFormatter: function (a) { var c = this.points || q(this), e; e = [a.tooltipFooterHeaderFormatter(c[0])]; e = e.concat(a.bodyFormatter(c)); e.push(a.tooltipFooterHeaderFormatter(c[0], !0)); return e }, refresh: function (c, e) {
                var f, k = this.options, d, b = c, u, p = {}, l = []; f = k.formatter || this.defaultFormatter; var p = this.shared, t; k.enabled && (a.clearTimeout(this.hideTimer),
                    this.followPointer = q(b)[0].series.tooltipOptions.followPointer, u = this.getAnchor(b, e), e = u[0], d = u[1], !p || b.series && b.series.noSharedTooltip ? p = b.getLabelConfig() : (D(b, function (a) { a.setState("hover"); l.push(a.getLabelConfig()) }), p = { x: b[0].category, y: b[0].y }, p.points = l, b = b[0]), this.len = l.length, p = f.call(p, this), t = b.series, this.distance = y(t.tooltipOptions.distance, 16), !1 === p ? this.hide() : (f = this.getLabel(), this.isHidden && f.attr({ opacity: 1 }).show(), this.split ? this.renderSplit(p, q(c)) : (k.style.width || f.css({ width: this.chart.spacingBox.width }),
                        f.attr({ text: p && p.join ? p.join("") : p }), f.removeClass(/highcharts-color-[\d]+/g).addClass("highcharts-color-" + y(b.colorIndex, t.colorIndex)), f.attr({ stroke: k.borderColor || b.color || t.color || "#666666" }), this.updatePosition({ plotX: e, plotY: d, negative: b.negative, ttBelow: b.ttBelow, h: u[2] || 0 })), this.isHidden = !1))
            }, renderSplit: function (c, e) {
                var f = this, k = [], d = this.chart, b = d.renderer, u = !0, p = this.options, l = 0, t = this.getLabel(); a.isString(c) && (c = [!1, c]); D(c.slice(0, e.length + 1), function (a, c) {
                    if (!1 !== a) {
                        c = e[c - 1] ||
                        { isHeader: !0, plotX: e[0].plotX }; var h = c.series || f, n = h.tt, G = c.series || {}, B = "highcharts-color-" + y(c.colorIndex, G.colorIndex, "none"); n || (h.tt = n = b.label(null, null, null, "callout", null, null, p.useHTML).addClass("highcharts-tooltip-box " + B).attr({ padding: p.padding, r: p.borderRadius, fill: p.backgroundColor, stroke: p.borderColor || c.color || G.color || "#333333", "stroke-width": p.borderWidth }).add(t)); n.isActive = !0; n.attr({ text: a }); n.css(p.style).shadow(p.shadow); a = n.getBBox(); G = a.width + n.strokeWidth(); c.isHeader ? (l =
                            a.height, G = Math.max(0, Math.min(c.plotX + d.plotLeft - G / 2, d.chartWidth - G))) : G = c.plotX + d.plotLeft - y(p.distance, 16) - G; 0 > G && (u = !1); a = (c.series && c.series.yAxis && c.series.yAxis.pos) + (c.plotY || 0); a -= d.plotTop; k.push({ target: c.isHeader ? d.plotHeight + l : a, rank: c.isHeader ? 1 : 0, size: h.tt.getBBox().height + 1, point: c, x: G, tt: n })
                    }
                }); this.cleanSplit(); a.distribute(k, d.plotHeight + l); D(k, function (a) {
                    var b = a.point, c = b.series; a.tt.attr({
                        visibility: void 0 === a.pos ? "hidden" : "inherit", x: u || b.isHeader ? a.x : b.plotX + d.plotLeft + y(p.distance,
                            16), y: a.pos + d.plotTop, anchorX: b.isHeader ? b.plotX + d.plotLeft : b.plotX + c.xAxis.pos, anchorY: b.isHeader ? a.pos + d.plotTop - 15 : b.plotY + c.yAxis.pos
                    })
                })
            }, updatePosition: function (a) {
                var c = this.chart, e = this.getLabel(), k = (this.options.positioner || this.getPosition).call(this, e.width, e.height, a), d = a.plotX + c.plotLeft; a = a.plotY + c.plotTop; var b; this.outside && (b = (this.options.borderWidth || 0) + 2 * this.distance, this.renderer.setSize(e.width + b, e.height + b, !1), d += c.pointer.chartPosition.left - k.x, a += c.pointer.chartPosition.top -
                    k.y); this.move(Math.round(k.x), Math.round(k.y || 0), d, a)
            }, getDateFormat: function (a, f, h, k) { var d = this.chart.time, b = d.dateFormat("%m-%d %H:%M:%S.%L", f), c, p, l = { millisecond: 15, second: 12, minute: 9, hour: 6, day: 3 }, t = "millisecond"; for (p in e) { if (a === e.week && +d.dateFormat("%w", f) === h && "00:00:00.000" === b.substr(6)) { p = "week"; break } if (e[p] > a) { p = t; break } if (l[p] && b.substr(l[p]) !== "01-01 00:00:00.000".substr(l[p])) break; "week" !== p && (t = p) } p && (c = k[p]); return c }, getXDateFormat: function (a, e, f) {
                e = e.dateTimeLabelFormats;
                var c = f && f.closestPointRange; return (c ? this.getDateFormat(c, a.x, f.options.startOfWeek, e) : e.day) || e.year
            }, tooltipFooterHeaderFormatter: function (a, e) { e = e ? "footer" : "header"; var c = a.series, k = c.tooltipOptions, d = k.xDateFormat, b = c.xAxis, f = b && "datetime" === b.options.type && h(a.key), p = k[e + "Format"]; f && !d && (d = this.getXDateFormat(a, k, b)); f && d && D(a.point && a.point.tooltipDateKeys || ["key"], function (a) { p = p.replace("{point." + a + "}", "{point." + a + ":" + d + "}") }); return m(p, { point: a, series: c }, this.chart.time) }, bodyFormatter: function (a) {
                return f(a,
                    function (a) { var c = a.series.tooltipOptions; return (c[(a.point.formatPrefix || "point") + "Formatter"] || a.point.tooltipFormatter).call(a.point, c[(a.point.formatPrefix || "point") + "Format"]) })
            }
        }
    })(K); (function (a) {
        var C = a.addEvent, D = a.attr, E = a.charts, m = a.color, h = a.css, f = a.defined, r = a.each, y = a.extend, q = a.find, w = a.fireEvent, e = a.isNumber, c = a.isObject, l = a.offset, z = a.pick, k = a.splat, d = a.Tooltip; a.Pointer = function (a, d) { this.init(a, d) }; a.Pointer.prototype = {
            init: function (a, c) {
            this.options = c; this.chart = a; this.runChartClick =
                c.chart.events && !!c.chart.events.click; this.pinchDown = []; this.lastValidTouch = {}; d && (a.tooltip = new d(a, c.tooltip), this.followTouchMove = z(c.tooltip.followTouchMove, !0)); this.setDOMEvents()
            }, zoomOption: function (a) { var b = this.chart, d = b.options.chart, c = d.zoomType || "", b = b.inverted; /touch/.test(a.type) && (c = z(d.pinchType, c)); this.zoomX = a = /x/.test(c); this.zoomY = c = /y/.test(c); this.zoomHor = a && !b || c && b; this.zoomVert = c && !b || a && b; this.hasZoom = a || c }, normalize: function (a, d) {
                var b; b = a.touches ? a.touches.length ? a.touches.item(0) :
                    a.changedTouches[0] : a; d || (this.chartPosition = d = l(this.chart.container)); return y(a, { chartX: Math.round(b.pageX - d.left), chartY: Math.round(b.pageY - d.top) })
            }, getCoordinates: function (a) { var b = { xAxis: [], yAxis: [] }; r(this.chart.axes, function (d) { b[d.isXAxis ? "xAxis" : "yAxis"].push({ axis: d, value: d.toValue(a[d.horiz ? "chartX" : "chartY"]) }) }); return b }, findNearestKDPoint: function (a, d, k) {
                var b; r(a, function (a) {
                    var e = !(a.noSharedTooltip && d) && 0 > a.options.findNearestPointBy.indexOf("y"); a = a.searchPoint(k, e); if ((e = c(a,
                        !0)) && !(e = !c(b, !0))) var e = b.distX - a.distX, f = b.dist - a.dist, p = (a.series.group && a.series.group.zIndex) - (b.series.group && b.series.group.zIndex), e = 0 < (0 !== e && d ? e : 0 !== f ? f : 0 !== p ? p : b.series.index > a.series.index ? -1 : 1); e && (b = a)
                }); return b
            }, getPointFromEvent: function (a) { a = a.target; for (var b; a && !b;)b = a.point, a = a.parentNode; return b }, getChartCoordinatesFromPoint: function (a, d) {
                var b = a.series, c = b.xAxis, b = b.yAxis, k = z(a.clientX, a.plotX), e = a.shapeArgs; if (c && b) return d ? { chartX: c.len + c.pos - k, chartY: b.len + b.pos - a.plotY } :
                    { chartX: k + c.pos, chartY: a.plotY + b.pos }; if (e && e.x && e.y) return { chartX: e.x, chartY: e.y }
            }, getHoverData: function (b, d, k, e, f, h, l) {
                var p, n = [], u = l && l.isBoosting; e = !(!e || !b); l = d && !d.stickyTracking ? [d] : a.grep(k, function (a) { return a.visible && !(!f && a.directTouch) && z(a.options.enableMouseTracking, !0) && a.stickyTracking }); d = (p = e ? b : this.findNearestKDPoint(l, f, h)) && p.series; p && (f && !d.noSharedTooltip ? (l = a.grep(k, function (a) { return a.visible && !(!f && a.directTouch) && z(a.options.enableMouseTracking, !0) && !a.noSharedTooltip }),
                    r(l, function (a) { var b = q(a.points, function (a) { return a.x === p.x && !a.isNull }); c(b) && (u && (b = a.getPoint(b)), n.push(b)) })) : n.push(p)); return { hoverPoint: p, hoverSeries: d, hoverPoints: n }
            }, runPointActions: function (b, d) {
                var c = this.chart, k = c.tooltip && c.tooltip.options.enabled ? c.tooltip : void 0, e = k ? k.shared : !1, f = d || c.hoverPoint, l = f && f.series || c.hoverSeries, l = this.getHoverData(f, l, c.series, !!d || l && l.directTouch && this.isDirectTouch, e, b, { isBoosting: c.isBoosting }), u, f = l.hoverPoint; u = l.hoverPoints; l = l.hoverSeries; d =
                    b && "touchmove" === b.type ? !0 === this.followTouchMove : l && l.tooltipOptions.followPointer; e = e && l && !l.noSharedTooltip; if (f && (f !== c.hoverPoint || k && k.isHidden)) { r(c.hoverPoints || [], function (b) { -1 === a.inArray(b, u) && b.setState() }); r(u || [], function (a) { a.setState("hover") }); if (c.hoverSeries !== l) l.onMouseOver(); c.hoverPoint && c.hoverPoint.firePointEvent("mouseOut"); if (!f.series) return; f.firePointEvent("mouseOver"); c.hoverPoints = u; c.hoverPoint = f; k && k.refresh(e ? u : f, b) } else d && k && !k.isHidden && (f = k.getAnchor([{}], b),
                        k.updatePosition({ plotX: f[0], plotY: f[1] })); this.unDocMouseMove || (this.unDocMouseMove = C(c.container.ownerDocument, "mousemove", function (b) { var d = E[a.hoverChartIndex]; if (d) d.pointer.onDocumentMouseMove(b) })); r(c.axes, function (d) { var c = z(d.crosshair.snap, !0), k = c ? a.find(u, function (a) { return a.series[d.coll] === d }) : void 0; k || !c ? d.drawCrosshair(b, k) : d.hideCrosshair() })
            }, reset: function (a, d) {
                var b = this.chart, c = b.hoverSeries, e = b.hoverPoint, f = b.hoverPoints, l = b.tooltip, u = l && l.shared ? f : e; a && u && r(k(u), function (b) {
                    b.series.isCartesian &&
                    void 0 === b.plotX && (a = !1)
                }); if (a) l && u && (l.refresh(u), l.shared && f ? r(f, function (a) { a.setState(a.state, !0); a.series.xAxis.crosshair && a.series.xAxis.drawCrosshair(null, a); a.series.yAxis.crosshair && a.series.yAxis.drawCrosshair(null, a) }) : e && (e.setState(e.state, !0), r(b.axes, function (a) { a.crosshair && a.drawCrosshair(null, e) }))); else {
                    if (e) e.onMouseOut(); f && r(f, function (a) { a.setState() }); if (c) c.onMouseOut(); l && l.hide(d); this.unDocMouseMove && (this.unDocMouseMove = this.unDocMouseMove()); r(b.axes, function (a) { a.hideCrosshair() });
                    this.hoverX = b.hoverPoints = b.hoverPoint = null
                }
            }, scaleGroups: function (a, d) { var b = this.chart, c; r(b.series, function (k) { c = a || k.getPlotBox(); k.xAxis && k.xAxis.zoomEnabled && k.group && (k.group.attr(c), k.markerGroup && (k.markerGroup.attr(c), k.markerGroup.clip(d ? b.clipRect : null)), k.dataLabelsGroup && k.dataLabelsGroup.attr(c)) }); b.clipRect.attr(d || b.clipBox) }, dragStart: function (a) { var b = this.chart; b.mouseIsDown = a.type; b.cancelClick = !1; b.mouseDownX = this.mouseDownX = a.chartX; b.mouseDownY = this.mouseDownY = a.chartY }, drag: function (a) {
                var b =
                    this.chart, d = b.options.chart, c = a.chartX, k = a.chartY, e = this.zoomHor, f = this.zoomVert, l = b.plotLeft, n = b.plotTop, h = b.plotWidth, B = b.plotHeight, z, F = this.selectionMarker, g = this.mouseDownX, v = this.mouseDownY, q = d.panKey && a[d.panKey + "Key"]; F && F.touch || (c < l ? c = l : c > l + h && (c = l + h), k < n ? k = n : k > n + B && (k = n + B), this.hasDragged = Math.sqrt(Math.pow(g - c, 2) + Math.pow(v - k, 2)), 10 < this.hasDragged && (z = b.isInsidePlot(g - l, v - n), b.hasCartesianSeries && (this.zoomX || this.zoomY) && z && !q && !F && (this.selectionMarker = F = b.renderer.rect(l, n, e ? 1 : h,
                        f ? 1 : B, 0).attr({ fill: d.selectionMarkerFill || m("#335cad").setOpacity(.25).get(), "class": "highcharts-selection-marker", zIndex: 7 }).add()), F && e && (c -= g, F.attr({ width: Math.abs(c), x: (0 < c ? 0 : c) + g })), F && f && (c = k - v, F.attr({ height: Math.abs(c), y: (0 < c ? 0 : c) + v })), z && !F && d.panning && b.pan(a, d.panning)))
            }, drop: function (a) {
                var b = this, d = this.chart, c = this.hasPinched; if (this.selectionMarker) {
                    var k = { originalEvent: a, xAxis: [], yAxis: [] }, l = this.selectionMarker, x = l.attr ? l.attr("x") : l.x, z = l.attr ? l.attr("y") : l.y, n = l.attr ? l.attr("width") :
                        l.width, G = l.attr ? l.attr("height") : l.height, B; if (this.hasDragged || c) r(d.axes, function (d) { if (d.zoomEnabled && f(d.min) && (c || b[{ xAxis: "zoomX", yAxis: "zoomY" }[d.coll]])) { var e = d.horiz, g = "touchend" === a.type ? d.minPixelPadding : 0, l = d.toValue((e ? x : z) + g), e = d.toValue((e ? x + n : z + G) - g); k[d.coll].push({ axis: d, min: Math.min(l, e), max: Math.max(l, e) }); B = !0 } }), B && w(d, "selection", k, function (a) { d.zoom(y(a, c ? { animation: !1 } : null)) }); e(d.index) && (this.selectionMarker = this.selectionMarker.destroy()); c && this.scaleGroups()
                } d && e(d.index) &&
                    (h(d.container, { cursor: d._cursor }), d.cancelClick = 10 < this.hasDragged, d.mouseIsDown = this.hasDragged = this.hasPinched = !1, this.pinchDown = [])
            }, onContainerMouseDown: function (a) { a = this.normalize(a); 2 !== a.button && (this.zoomOption(a), a.preventDefault && a.preventDefault(), this.dragStart(a)) }, onDocumentMouseUp: function (b) { E[a.hoverChartIndex] && E[a.hoverChartIndex].pointer.drop(b) }, onDocumentMouseMove: function (a) {
                var b = this.chart, d = this.chartPosition; a = this.normalize(a, d); !d || this.inClass(a.target, "highcharts-tracker") ||
                    b.isInsidePlot(a.chartX - b.plotLeft, a.chartY - b.plotTop) || this.reset()
            }, onContainerMouseLeave: function (b) { var d = E[a.hoverChartIndex]; d && (b.relatedTarget || b.toElement) && (d.pointer.reset(), d.pointer.chartPosition = null) }, onContainerMouseMove: function (b) {
                var d = this.chart; f(a.hoverChartIndex) && E[a.hoverChartIndex] && E[a.hoverChartIndex].mouseIsDown || (a.hoverChartIndex = d.index); b = this.normalize(b); b.returnValue = !1; "mousedown" === d.mouseIsDown && this.drag(b); !this.inClass(b.target, "highcharts-tracker") && !d.isInsidePlot(b.chartX -
                    d.plotLeft, b.chartY - d.plotTop) || d.openMenu || this.runPointActions(b)
            }, inClass: function (a, d) { for (var b; a;) { if (b = D(a, "class")) { if (-1 !== b.indexOf(d)) return !0; if (-1 !== b.indexOf("highcharts-container")) return !1 } a = a.parentNode } }, onTrackerMouseOut: function (a) { var b = this.chart.hoverSeries; a = a.relatedTarget || a.toElement; this.isDirectTouch = !1; if (!(!b || !a || b.stickyTracking || this.inClass(a, "highcharts-tooltip") || this.inClass(a, "highcharts-series-" + b.index) && this.inClass(a, "highcharts-tracker"))) b.onMouseOut() },
            onContainerClick: function (a) { var b = this.chart, d = b.hoverPoint, c = b.plotLeft, k = b.plotTop; a = this.normalize(a); b.cancelClick || (d && this.inClass(a.target, "highcharts-tracker") ? (w(d.series, "click", y(a, { point: d })), b.hoverPoint && d.firePointEvent("click", a)) : (y(a, this.getCoordinates(a)), b.isInsidePlot(a.chartX - c, a.chartY - k) && w(b, "click", a))) }, setDOMEvents: function () {
                var b = this, d = b.chart.container, c = d.ownerDocument; d.onmousedown = function (a) { b.onContainerMouseDown(a) }; d.onmousemove = function (a) { b.onContainerMouseMove(a) };
                d.onclick = function (a) { b.onContainerClick(a) }; this.unbindContainerMouseLeave = C(d, "mouseleave", b.onContainerMouseLeave); a.unbindDocumentMouseUp || (a.unbindDocumentMouseUp = C(c, "mouseup", b.onDocumentMouseUp)); a.hasTouch && (d.ontouchstart = function (a) { b.onContainerTouchStart(a) }, d.ontouchmove = function (a) { b.onContainerTouchMove(a) }, a.unbindDocumentTouchEnd || (a.unbindDocumentTouchEnd = C(c, "touchend", b.onDocumentTouchEnd)))
            }, destroy: function () {
                var b = this; b.unDocMouseMove && b.unDocMouseMove(); this.unbindContainerMouseLeave();
                a.chartCount || (a.unbindDocumentMouseUp && (a.unbindDocumentMouseUp = a.unbindDocumentMouseUp()), a.unbindDocumentTouchEnd && (a.unbindDocumentTouchEnd = a.unbindDocumentTouchEnd())); clearInterval(b.tooltipTimeout); a.objectEach(b, function (a, d) { b[d] = null })
            }
        }
    })(K); (function (a) {
        var C = a.charts, D = a.each, E = a.extend, m = a.map, h = a.noop, f = a.pick; E(a.Pointer.prototype, {
            pinchTranslate: function (a, f, h, m, e, c) {
            this.zoomHor && this.pinchTranslateDirection(!0, a, f, h, m, e, c); this.zoomVert && this.pinchTranslateDirection(!1, a, f, h, m,
                e, c)
            }, pinchTranslateDirection: function (a, f, h, m, e, c, l, z) {
                var k = this.chart, d = a ? "x" : "y", b = a ? "X" : "Y", u = "chart" + b, p = a ? "width" : "height", q = k["plot" + (a ? "Left" : "Top")], t, r, x = z || 1, y = k.inverted, n = k.bounds[a ? "h" : "v"], G = 1 === f.length, B = f[0][u], M = h[0][u], F = !G && f[1][u], g = !G && h[1][u], v; h = function () { !G && 20 < Math.abs(B - F) && (x = z || Math.abs(M - g) / Math.abs(B - F)); r = (q - M) / x + B; t = k["plot" + (a ? "Width" : "Height")] / x }; h(); f = r; f < n.min ? (f = n.min, v = !0) : f + t > n.max && (f = n.max - t, v = !0); v ? (M -= .8 * (M - l[d][0]), G || (g -= .8 * (g - l[d][1])), h()) : l[d] =
                    [M, g]; y || (c[d] = r - q, c[p] = t); c = y ? 1 / x : x; e[p] = t; e[d] = f; m[y ? a ? "scaleY" : "scaleX" : "scale" + b] = x; m["translate" + b] = c * q + (M - c * B)
            }, pinch: function (a) {
                var r = this, q = r.chart, w = r.pinchDown, e = a.touches, c = e.length, l = r.lastValidTouch, z = r.hasZoom, k = r.selectionMarker, d = {}, b = 1 === c && (r.inClass(a.target, "highcharts-tracker") && q.runTrackerClick || r.runChartClick), u = {}; 1 < c && (r.initiated = !0); z && r.initiated && !b && a.preventDefault(); m(e, function (a) { return r.normalize(a) }); "touchstart" === a.type ? (D(e, function (a, b) {
                w[b] = {
                    chartX: a.chartX,
                    chartY: a.chartY
                }
                }), l.x = [w[0].chartX, w[1] && w[1].chartX], l.y = [w[0].chartY, w[1] && w[1].chartY], D(q.axes, function (a) { if (a.zoomEnabled) { var b = q.bounds[a.horiz ? "h" : "v"], d = a.minPixelPadding, c = a.toPixels(f(a.options.min, a.dataMin)), k = a.toPixels(f(a.options.max, a.dataMax)), e = Math.max(c, k); b.min = Math.min(a.pos, Math.min(c, k) - d); b.max = Math.max(a.pos + a.len, e + d) } }), r.res = !0) : r.followTouchMove && 1 === c ? this.runPointActions(r.normalize(a)) : w.length && (k || (r.selectionMarker = k = E({ destroy: h, touch: !0 }, q.plotBox)), r.pinchTranslate(w,
                    e, d, k, u, l), r.hasPinched = z, r.scaleGroups(d, u), r.res && (r.res = !1, this.reset(!1, 0)))
            }, touch: function (h, m) {
                var q = this.chart, r, e; if (q.index !== a.hoverChartIndex) this.onContainerMouseLeave({ relatedTarget: !0 }); a.hoverChartIndex = q.index; 1 === h.touches.length ? (h = this.normalize(h), (e = q.isInsidePlot(h.chartX - q.plotLeft, h.chartY - q.plotTop)) && !q.openMenu ? (m && this.runPointActions(h), "touchmove" === h.type && (m = this.pinchDown, r = m[0] ? 4 <= Math.sqrt(Math.pow(m[0].chartX - h.chartX, 2) + Math.pow(m[0].chartY - h.chartY, 2)) : !1), f(r,
                    !0) && this.pinch(h)) : m && this.reset()) : 2 === h.touches.length && this.pinch(h)
            }, onContainerTouchStart: function (a) { this.zoomOption(a); this.touch(a, !0) }, onContainerTouchMove: function (a) { this.touch(a) }, onDocumentTouchEnd: function (f) { C[a.hoverChartIndex] && C[a.hoverChartIndex].pointer.drop(f) }
        })
    })(K); (function (a) {
        var C = a.addEvent, D = a.charts, E = a.css, m = a.doc, h = a.extend, f = a.noop, r = a.Pointer, y = a.removeEvent, q = a.win, w = a.wrap; if (!a.hasTouch && (q.PointerEvent || q.MSPointerEvent)) {
            var e = {}, c = !!q.PointerEvent, l = function () {
                var c =
                    []; c.item = function (a) { return this[a] }; a.objectEach(e, function (a) { c.push({ pageX: a.pageX, pageY: a.pageY, target: a.target }) }); return c
            }, z = function (c, d, b, e) { "touch" !== c.pointerType && c.pointerType !== c.MSPOINTER_TYPE_TOUCH || !D[a.hoverChartIndex] || (e(c), e = D[a.hoverChartIndex].pointer, e[d]({ type: b, target: c.currentTarget, preventDefault: f, touches: l() })) }; h(r.prototype, {
                onContainerPointerDown: function (a) { z(a, "onContainerTouchStart", "touchstart", function (a) { e[a.pointerId] = { pageX: a.pageX, pageY: a.pageY, target: a.currentTarget } }) },
                onContainerPointerMove: function (a) { z(a, "onContainerTouchMove", "touchmove", function (a) { e[a.pointerId] = { pageX: a.pageX, pageY: a.pageY }; e[a.pointerId].target || (e[a.pointerId].target = a.currentTarget) }) }, onDocumentPointerUp: function (a) { z(a, "onDocumentTouchEnd", "touchend", function (a) { delete e[a.pointerId] }) }, batchMSEvents: function (a) {
                    a(this.chart.container, c ? "pointerdown" : "MSPointerDown", this.onContainerPointerDown); a(this.chart.container, c ? "pointermove" : "MSPointerMove", this.onContainerPointerMove); a(m, c ?
                        "pointerup" : "MSPointerUp", this.onDocumentPointerUp)
                }
            }); w(r.prototype, "init", function (a, d, b) { a.call(this, d, b); this.hasZoom && E(d.container, { "-ms-touch-action": "none", "touch-action": "none" }) }); w(r.prototype, "setDOMEvents", function (a) { a.apply(this); (this.hasZoom || this.followTouchMove) && this.batchMSEvents(C) }); w(r.prototype, "destroy", function (a) { this.batchMSEvents(y); a.call(this) })
        }
    })(K); (function (a) {
        var C = a.addEvent, D = a.css, E = a.discardElement, m = a.defined, h = a.each, f = a.fireEvent, r = a.isFirefox, y = a.marginNames,
        q = a.merge, w = a.pick, e = a.setAnimation, c = a.stableSort, l = a.win, z = a.wrap; a.Legend = function (a, d) { this.init(a, d) }; a.Legend.prototype = {
            init: function (a, d) { this.chart = a; this.setOptions(d); d.enabled && (this.render(), C(this.chart, "endResize", function () { this.legend.positionCheckboxes() }), this.proximate ? this.unchartrender = C(this.chart, "render", function () { this.legend.proximatePositions(); this.legend.positionItems() }) : this.unchartrender && this.unchartrender()) }, setOptions: function (a) {
                var d = w(a.padding, 8); this.options =
                    a; this.itemStyle = a.itemStyle; this.itemHiddenStyle = q(this.itemStyle, a.itemHiddenStyle); this.itemMarginTop = a.itemMarginTop || 0; this.padding = d; this.initialItemY = d - 5; this.symbolWidth = w(a.symbolWidth, 16); this.pages = []; this.proximate = "proximate" === a.layout && !this.chart.inverted
            }, update: function (a, d) { var b = this.chart; this.setOptions(q(!0, this.options, a)); this.destroy(); b.isDirtyLegend = b.isDirtyBox = !0; w(d, !0) && b.redraw(); f(this, "afterUpdate") }, colorizeItem: function (a, d) {
            a.legendGroup[d ? "removeClass" : "addClass"]("highcharts-legend-item-hidden");
                var b = this.options, c = a.legendItem, k = a.legendLine, e = a.legendSymbol, l = this.itemHiddenStyle.color, b = d ? b.itemStyle.color : l, h = d ? a.color || l : l, x = a.options && a.options.marker, z = { fill: h }; c && c.css({ fill: b, color: b }); k && k.attr({ stroke: h }); e && (x && e.isMarker && (z = a.pointAttribs(), d || (z.stroke = z.fill = l)), e.attr(z)); f(this, "afterColorizeItem", { item: a, visible: d })
            }, positionItems: function () { h(this.allItems, this.positionItem, this); this.chart.isResizing || this.positionCheckboxes() }, positionItem: function (a) {
                var d = this.options,
                b = d.symbolPadding, d = !d.rtl, c = a._legendItemPos, k = c[0], c = c[1], e = a.checkbox; if ((a = a.legendGroup) && a.element) a[m(a.translateY) ? "animate" : "attr"]({ translateX: d ? k : this.legendWidth - k - 2 * b - 4, translateY: c }); e && (e.x = k, e.y = c)
            }, destroyItem: function (a) { var d = a.checkbox; h(["legendItem", "legendLine", "legendSymbol", "legendGroup"], function (b) { a[b] && (a[b] = a[b].destroy()) }); d && E(a.checkbox) }, destroy: function () {
                function a(a) { this[a] && (this[a] = this[a].destroy()) } h(this.getAllItems(), function (c) {
                    h(["legendItem", "legendGroup"],
                        a, c)
                }); h("clipRect up down pager nav box title group".split(" "), a, this); this.display = null
            }, positionCheckboxes: function () { var a = this.group && this.group.alignAttr, c, b = this.clipHeight || this.legendHeight, e = this.titleHeight; a && (c = a.translateY, h(this.allItems, function (d) { var k = d.checkbox, f; k && (f = c + e + k.y + (this.scrollOffset || 0) + 3, D(k, { left: a.translateX + d.checkboxOffset + k.x - 20 + "px", top: f + "px", display: f > c - 6 && f < c + b - 6 ? "" : "none" })) }, this)) }, renderTitle: function () {
                var a = this.options, c = this.padding, b = a.title, e =
                    0; b.text && (this.title || (this.title = this.chart.renderer.label(b.text, c - 3, c - 4, null, null, null, a.useHTML, null, "legend-title").attr({ zIndex: 1 }).css(b.style).add(this.group)), a = this.title.getBBox(), e = a.height, this.offsetWidth = a.width, this.contentGroup.attr({ translateY: e })); this.titleHeight = e
            }, setText: function (c) { var d = this.options; c.legendItem.attr({ text: d.labelFormat ? a.format(d.labelFormat, c, this.chart.time) : d.labelFormatter.call(c) }) }, renderItem: function (a) {
                var c = this.chart, b = c.renderer, e = this.options,
                k = this.symbolWidth, f = e.symbolPadding, l = this.itemStyle, h = this.itemHiddenStyle, x = "horizontal" === e.layout ? w(e.itemDistance, 20) : 0, z = !e.rtl, n = a.legendItem, G = !a.series, B = !G && a.series.drawLegendSymbol ? a.series : a, m = B.options, m = this.createCheckboxForItem && m && m.showCheckbox, x = k + f + x + (m ? 20 : 0), F = e.useHTML, g = a.options.className; n || (a.legendGroup = b.g("legend-item").addClass("highcharts-" + B.type + "-series highcharts-color-" + a.colorIndex + (g ? " " + g : "") + (G ? " highcharts-series-" + a.index : "")).attr({ zIndex: 1 }).add(this.scrollGroup),
                    a.legendItem = n = b.text("", z ? k + f : -f, this.baseline || 0, F).css(q(a.visible ? l : h)).attr({ align: z ? "left" : "right", zIndex: 2 }).add(a.legendGroup), this.baseline || (k = l.fontSize, this.fontMetrics = b.fontMetrics(k, n), this.baseline = this.fontMetrics.f + 3 + this.itemMarginTop, n.attr("y", this.baseline)), this.symbolHeight = e.symbolHeight || this.fontMetrics.f, B.drawLegendSymbol(this, a), this.setItemEvents && this.setItemEvents(a, n, F), m && this.createCheckboxForItem(a)); this.colorizeItem(a, a.visible); l.width || n.css({
                        width: (e.itemWidth ||
                            e.width || c.spacingBox.width) - x
                    }); this.setText(a); c = n.getBBox(); a.itemWidth = a.checkboxOffset = e.itemWidth || a.legendItemWidth || c.width + x; this.maxItemWidth = Math.max(this.maxItemWidth, a.itemWidth); this.totalItemWidth += a.itemWidth; this.itemHeight = a.itemHeight = Math.round(a.legendItemHeight || c.height || this.symbolHeight)
            }, layoutItem: function (a) {
                var c = this.options, b = this.padding, e = "horizontal" === c.layout, k = a.itemHeight, f = c.itemMarginBottom || 0, l = this.itemMarginTop, h = e ? w(c.itemDistance, 20) : 0, x = c.width, z = x || this.chart.spacingBox.width -
                    2 * b - c.x, c = c.alignColumns && this.totalItemWidth > z ? this.maxItemWidth : a.itemWidth; e && this.itemX - b + c > z && (this.itemX = b, this.itemY += l + this.lastLineHeight + f, this.lastLineHeight = 0); this.lastItemY = l + this.itemY + f; this.lastLineHeight = Math.max(k, this.lastLineHeight); a._legendItemPos = [this.itemX, this.itemY]; e ? this.itemX += c : (this.itemY += l + k + f, this.lastLineHeight = k); this.offsetWidth = x || Math.max((e ? this.itemX - b - (a.checkbox ? 0 : h) : c) + b, this.offsetWidth)
            }, getAllItems: function () {
                var a = []; h(this.chart.series, function (c) {
                    var b =
                        c && c.options; c && w(b.showInLegend, m(b.linkedTo) ? !1 : void 0, !0) && (a = a.concat(c.legendItems || ("point" === b.legendType ? c.data : c)))
                }); f(this, "afterGetAllItems", { allItems: a }); return a
            }, getAlignment: function () { var a = this.options; return this.proximate ? a.align.charAt(0) + "tv" : a.floating ? "" : a.align.charAt(0) + a.verticalAlign.charAt(0) + a.layout.charAt(0) }, adjustMargins: function (a, c) {
                var b = this.chart, d = this.options, e = this.getAlignment(); e && h([/(lth|ct|rth)/, /(rtv|rm|rbv)/, /(rbh|cb|lbh)/, /(lbv|lm|ltv)/], function (k,
                    f) { k.test(e) && !m(a[f]) && (b[y[f]] = Math.max(b[y[f]], b.legend[(f + 1) % 2 ? "legendHeight" : "legendWidth"] + [1, -1, -1, 1][f] * d[f % 2 ? "x" : "y"] + w(d.margin, 12) + c[f] + (0 === f && void 0 !== b.options.title.margin ? b.titleOffset + b.options.title.margin : 0))) })
            }, proximatePositions: function () {
                var c = this.chart, d = [], b = "left" === this.options.align; h(this.allItems, function (e) {
                    var k, f; k = b; e.xAxis && e.points && (e.xAxis.options.reversed && (k = !k), k = a.find(k ? e.points : e.points.slice(0).reverse(), function (b) { return a.isNumber(b.plotY) }), f = e.legendGroup.getBBox().height,
                        d.push({ target: e.visible ? (k ? k.plotY : e.xAxis.height) - .3 * f : c.plotHeight, size: f, item: e }))
                }, this); a.distribute(d, c.plotHeight); h(d, function (a) { a.item._legendItemPos[1] = c.plotTop - c.spacing[0] + a.pos })
            }, render: function () {
                var a = this.chart, d = a.renderer, b = this.group, e, f, l, t = this.box, z = this.options, x = this.padding; this.itemX = x; this.itemY = this.initialItemY; this.lastItemY = this.offsetWidth = 0; b || (this.group = b = d.g("legend").attr({ zIndex: 7 }).add(), this.contentGroup = d.g().attr({ zIndex: 1 }).add(b), this.scrollGroup = d.g().add(this.contentGroup));
                this.renderTitle(); e = this.getAllItems(); c(e, function (a, b) { return (a.options && a.options.legendIndex || 0) - (b.options && b.options.legendIndex || 0) }); z.reversed && e.reverse(); this.allItems = e; this.display = f = !!e.length; this.itemHeight = this.totalItemWidth = this.maxItemWidth = this.lastLineHeight = 0; h(e, this.renderItem, this); h(e, this.layoutItem, this); e = (z.width || this.offsetWidth) + x; l = this.lastItemY + this.lastLineHeight + this.titleHeight; l = this.handleOverflow(l); l += x; t || (this.box = t = d.rect().addClass("highcharts-legend-box").attr({ r: z.borderRadius }).add(b),
                    t.isNew = !0); t.attr({ stroke: z.borderColor, "stroke-width": z.borderWidth || 0, fill: z.backgroundColor || "none" }).shadow(z.shadow); 0 < e && 0 < l && (t[t.isNew ? "attr" : "animate"](t.crisp.call({}, { x: 0, y: 0, width: e, height: l }, t.strokeWidth())), t.isNew = !1); t[f ? "show" : "hide"](); this.legendWidth = e; this.legendHeight = l; f && (d = a.spacingBox, /(lth|ct|rth)/.test(this.getAlignment()) && (d = q(d, { y: d.y + a.titleOffset + a.options.title.margin })), b.align(q(z, { width: e, height: l, verticalAlign: this.proximate ? "top" : z.verticalAlign }), !0, d)); this.proximate ||
                        this.positionItems()
            }, handleOverflow: function (a) {
                var c = this, b = this.chart, e = b.renderer, k = this.options, f = k.y, l = this.padding, b = b.spacingBox.height + ("top" === k.verticalAlign ? -f : f) - l, f = k.maxHeight, z, x = this.clipRect, m = k.navigation, n = w(m.animation, !0), G = m.arrowSize || 12, B = this.nav, q = this.pages, F, g = this.allItems, v = function (a) { "number" === typeof a ? x.attr({ height: a }) : x && (c.clipRect = x.destroy(), c.contentGroup.clip()); c.contentGroup.div && (c.contentGroup.div.style.clip = a ? "rect(" + l + "px,9999px," + (l + a) + "px,0)" : "auto") };
                "horizontal" !== k.layout || "middle" === k.verticalAlign || k.floating || (b /= 2); f && (b = Math.min(b, f)); q.length = 0; a > b && !1 !== m.enabled ? (this.clipHeight = z = Math.max(b - 20 - this.titleHeight - l, 0), this.currentPage = w(this.currentPage, 1), this.fullHeight = a, h(g, function (a, b) { var c = a._legendItemPos[1], d = Math.round(a.legendItem.getBBox().height), e = q.length; if (!e || c - q[e - 1] > z && (F || c) !== q[e - 1]) q.push(F || c), e++; a.pageIx = e - 1; F && (g[b - 1].pageIx = e - 1); b === g.length - 1 && c + d - q[e - 1] > z && (q.push(c), a.pageIx = e); c !== F && (F = c) }), x || (x = c.clipRect =
                    e.clipRect(0, l, 9999, 0), c.contentGroup.clip(x)), v(z), B || (this.nav = B = e.g().attr({ zIndex: 1 }).add(this.group), this.up = e.symbol("triangle", 0, 0, G, G).on("click", function () { c.scroll(-1, n) }).add(B), this.pager = e.text("", 15, 10).addClass("highcharts-legend-navigation").css(m.style).add(B), this.down = e.symbol("triangle-down", 0, 0, G, G).on("click", function () { c.scroll(1, n) }).add(B)), c.scroll(0), a = b) : B && (v(), this.nav = B.destroy(), this.scrollGroup.attr({ translateY: 1 }), this.clipHeight = 0); return a
            }, scroll: function (a, c) {
                var b =
                    this.pages, d = b.length; a = this.currentPage + a; var k = this.clipHeight, f = this.options.navigation, l = this.pager, h = this.padding; a > d && (a = d); 0 < a && (void 0 !== c && e(c, this.chart), this.nav.attr({ translateX: h, translateY: k + this.padding + 7 + this.titleHeight, visibility: "visible" }), this.up.attr({ "class": 1 === a ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active" }), l.attr({ text: a + "/" + d }), this.down.attr({ x: 18 + this.pager.getBBox().width, "class": a === d ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active" }),
                        this.up.attr({ fill: 1 === a ? f.inactiveColor : f.activeColor }).css({ cursor: 1 === a ? "default" : "pointer" }), this.down.attr({ fill: a === d ? f.inactiveColor : f.activeColor }).css({ cursor: a === d ? "default" : "pointer" }), this.scrollOffset = -b[a - 1] + this.initialItemY, this.scrollGroup.animate({ translateY: this.scrollOffset }), this.currentPage = a, this.positionCheckboxes())
            }
        }; a.LegendSymbolMixin = {
            drawRectangle: function (a, c) {
                var b = a.symbolHeight, d = a.options.squareSymbol; c.legendSymbol = this.chart.renderer.rect(d ? (a.symbolWidth - b) / 2 :
                    0, a.baseline - b + 1, d ? b : a.symbolWidth, b, w(a.options.symbolRadius, b / 2)).addClass("highcharts-point").attr({ zIndex: 3 }).add(c.legendGroup)
            }, drawLineMarker: function (a) {
                var c = this.options, b = c.marker, e = a.symbolWidth, k = a.symbolHeight, f = k / 2, l = this.chart.renderer, h = this.legendGroup; a = a.baseline - Math.round(.3 * a.fontMetrics.b); var z; z = { "stroke-width": c.lineWidth || 0 }; c.dashStyle && (z.dashstyle = c.dashStyle); this.legendLine = l.path(["M", 0, a, "L", e, a]).addClass("highcharts-graph").attr(z).add(h); b && !1 !== b.enabled && e &&
                    (c = Math.min(w(b.radius, f), f), 0 === this.symbol.indexOf("url") && (b = q(b, { width: k, height: k }), c = 0), this.legendSymbol = b = l.symbol(this.symbol, e / 2 - c, a - c, 2 * c, 2 * c, b).addClass("highcharts-point").add(h), b.isMarker = !0)
            }
        }; (/Trident\/7\.0/.test(l.navigator.userAgent) || r) && z(a.Legend.prototype, "positionItem", function (a, c) { var b = this, d = function () { c._legendItemPos && a.call(b, c) }; d(); setTimeout(d) })
    })(K); (function (a) {
        var C = a.addEvent, D = a.animate, E = a.animObject, m = a.attr, h = a.doc, f = a.Axis, r = a.createElement, y = a.defaultOptions,
        q = a.discardElement, w = a.charts, e = a.css, c = a.defined, l = a.each, z = a.extend, k = a.find, d = a.fireEvent, b = a.grep, u = a.isNumber, p = a.isObject, H = a.isString, t = a.Legend, L = a.marginNames, x = a.merge, I = a.objectEach, n = a.Pointer, G = a.pick, B = a.pInt, M = a.removeEvent, F = a.seriesTypes, g = a.splat, v = a.syncTimeout, P = a.win, Q = a.Chart = function () { this.getArgs.apply(this, arguments) }; a.chart = function (a, b, c) { return new Q(a, b, c) }; z(Q.prototype, {
            callbacks: [], getArgs: function () {
                var a = [].slice.call(arguments); if (H(a[0]) || a[0].nodeName) this.renderTo =
                    a.shift(); this.init(a[0], a[1])
            }, init: function (b, c) {
                var g, e, k = b.series, f = b.plotOptions || {}; d(this, "init", { args: arguments }, function () {
                b.series = null; g = x(y, b); for (e in g.plotOptions) g.plotOptions[e].tooltip = f[e] && x(f[e].tooltip) || void 0; g.tooltip.userOptions = b.chart && b.chart.forExport && b.tooltip.userOptions || b.tooltip; g.series = b.series = k; this.userOptions = b; var n = g.chart, l = n.events; this.margin = []; this.spacing = []; this.bounds = { h: {}, v: {} }; this.labelCollectors = []; this.callback = c; this.isResizing = 0; this.options =
                    g; this.axes = []; this.series = []; this.time = b.time && a.keys(b.time).length ? new a.Time(b.time) : a.time; this.hasCartesianSeries = n.showAxes; var h = this; h.index = w.length; w.push(h); a.chartCount++; l && I(l, function (a, b) { C(h, b, a) }); h.xAxis = []; h.yAxis = []; h.pointCount = h.colorCounter = h.symbolCounter = 0; d(h, "afterInit"); h.firstRender()
                })
            }, initSeries: function (b) { var c = this.options.chart; (c = F[b.type || c.type || c.defaultSeriesType]) || a.error(17, !0); c = new c; c.init(this, b); return c }, orderSeries: function (a) {
                var b = this.series;
                for (a = a || 0; a < b.length; a++)b[a] && (b[a].index = a, b[a].name = b[a].getName())
            }, isInsidePlot: function (a, b, c) { var d = c ? b : a; a = c ? a : b; return 0 <= d && d <= this.plotWidth && 0 <= a && a <= this.plotHeight }, redraw: function (b) {
                d(this, "beforeRedraw"); var c = this.axes, g = this.series, e = this.pointer, f = this.legend, k = this.isDirtyLegend, n, h, B = this.hasCartesianSeries, G = this.isDirtyBox, v, p = this.renderer, t = p.isHidden(), x = []; this.setResponsive && this.setResponsive(!1); a.setAnimation(b, this); t && this.temporaryDisplay(); this.layOutTitles();
                for (b = g.length; b--;)if (v = g[b], v.options.stacking && (n = !0, v.isDirty)) { h = !0; break } if (h) for (b = g.length; b--;)v = g[b], v.options.stacking && (v.isDirty = !0); l(g, function (a) { a.isDirty && "point" === a.options.legendType && (a.updateTotals && a.updateTotals(), k = !0); a.isDirtyData && d(a, "updatedData") }); k && f.options.enabled && (f.render(), this.isDirtyLegend = !1); n && this.getStacks(); B && l(c, function (a) { a.updateNames(); a.setScale() }); this.getMargins(); B && (l(c, function (a) { a.isDirty && (G = !0) }), l(c, function (a) {
                    var b = a.min + "," + a.max;
                    a.extKey !== b && (a.extKey = b, x.push(function () { d(a, "afterSetExtremes", z(a.eventArgs, a.getExtremes())); delete a.eventArgs })); (G || n) && a.redraw()
                })); G && this.drawChartBox(); d(this, "predraw"); l(g, function (a) { (G || a.isDirty) && a.visible && a.redraw(); a.isDirtyData = !1 }); e && e.reset(!0); p.draw(); d(this, "redraw"); d(this, "render"); t && this.temporaryDisplay(!0); l(x, function (a) { a.call() })
            }, get: function (a) {
                function b(b) { return b.id === a || b.options && b.options.id === a } var c, d = this.series, g; c = k(this.axes, b) || k(this.series,
                    b); for (g = 0; !c && g < d.length; g++)c = k(d[g].points || [], b); return c
            }, getAxes: function () { var a = this, b = this.options, c = b.xAxis = g(b.xAxis || {}), b = b.yAxis = g(b.yAxis || {}); d(this, "getAxes"); l(c, function (a, b) { a.index = b; a.isX = !0 }); l(b, function (a, b) { a.index = b }); c = c.concat(b); l(c, function (b) { new f(a, b) }); d(this, "afterGetAxes") }, getSelectedPoints: function () { var a = []; l(this.series, function (c) { a = a.concat(b(c.data || [], function (a) { return a.selected })) }); return a }, getSelectedSeries: function () { return b(this.series, function (a) { return a.selected }) },
            setTitle: function (a, b, c) { var d = this, g = d.options, e; e = g.title = x({ style: { color: "#333333", fontSize: g.isStock ? "16px" : "18px" } }, g.title, a); g = g.subtitle = x({ style: { color: "#666666" } }, g.subtitle, b); l([["title", a, e], ["subtitle", b, g]], function (a, b) { var c = a[0], g = d[c], e = a[1]; a = a[2]; g && e && (d[c] = g = g.destroy()); a && !g && (d[c] = d.renderer.text(a.text, 0, 0, a.useHTML).attr({ align: a.align, "class": "highcharts-" + c, zIndex: a.zIndex || 4 }).add(), d[c].update = function (a) { d.setTitle(!b && a, b && a) }, d[c].css(a.style)) }); d.layOutTitles(c) },
            layOutTitles: function (a) {
                var b = 0, c, d = this.renderer, g = this.spacingBox; l(["title", "subtitle"], function (a) { var c = this[a], e = this.options[a]; a = "title" === a ? -3 : e.verticalAlign ? 0 : b + 2; var n; c && (n = e.style.fontSize, n = d.fontMetrics(n, c).b, c.css({ width: (e.width || g.width + e.widthAdjust) + "px" }).align(z({ y: a + n }, e), !1, "spacingBox"), e.floating || e.verticalAlign || (b = Math.ceil(b + c.getBBox(e.useHTML).height))) }, this); c = this.titleOffset !== b; this.titleOffset = b; !this.isDirtyBox && c && (this.isDirtyBox = this.isDirtyLegend = c, this.hasRendered &&
                    G(a, !0) && this.isDirtyBox && this.redraw())
            }, getChartSize: function () { var b = this.options.chart, d = b.width, b = b.height, g = this.renderTo; c(d) || (this.containerWidth = a.getStyle(g, "width")); c(b) || (this.containerHeight = a.getStyle(g, "height")); this.chartWidth = Math.max(0, d || this.containerWidth || 600); this.chartHeight = Math.max(0, a.relativeLength(b, this.chartWidth) || (1 < this.containerHeight ? this.containerHeight : 400)) }, temporaryDisplay: function (b) {
                var c = this.renderTo; if (b) for (; c && c.style;)c.hcOrigStyle && (a.css(c, c.hcOrigStyle),
                    delete c.hcOrigStyle), c.hcOrigDetached && (h.body.removeChild(c), c.hcOrigDetached = !1), c = c.parentNode; else for (; c && c.style;) {
                        h.body.contains(c) || c.parentNode || (c.hcOrigDetached = !0, h.body.appendChild(c)); if ("none" === a.getStyle(c, "display", !1) || c.hcOricDetached) c.hcOrigStyle = { display: c.style.display, height: c.style.height, overflow: c.style.overflow }, b = { display: "block", overflow: "hidden" }, c !== this.renderTo && (b.height = 0), a.css(c, b), c.offsetWidth || c.style.setProperty("display", "block", "important"); c = c.parentNode;
                        if (c === h.body) break
                    }
            }, setClassName: function (a) { this.container.className = "highcharts-container " + (a || "") }, getContainer: function () {
                var b, c = this.options, g = c.chart, e, n; b = this.renderTo; var f = a.uniqueKey(), k; b || (this.renderTo = b = g.renderTo); H(b) && (this.renderTo = b = h.getElementById(b)); b || a.error(13, !0); e = B(m(b, "data-highcharts-chart")); u(e) && w[e] && w[e].hasRendered && w[e].destroy(); m(b, "data-highcharts-chart", this.index); b.innerHTML = ""; g.skipClone || b.offsetWidth || this.temporaryDisplay(); this.getChartSize();
                e = this.chartWidth; n = this.chartHeight; k = z({ position: "relative", overflow: "hidden", width: e + "px", height: n + "px", textAlign: "left", lineHeight: "normal", zIndex: 0, "-webkit-tap-highlight-color": "rgba(0,0,0,0)" }, g.style); this.container = b = r("div", { id: f }, k, b); this._cursor = b.style.cursor; this.renderer = new (a[g.renderer] || a.Renderer)(b, e, n, null, g.forExport, c.exporting && c.exporting.allowHTML); this.setClassName(g.className); this.renderer.setStyle(g.style); this.renderer.chartIndex = this.index; d(this, "afterGetContainer")
            },
            getMargins: function (a) { var b = this.spacing, g = this.margin, e = this.titleOffset; this.resetMargins(); e && !c(g[0]) && (this.plotTop = Math.max(this.plotTop, e + this.options.title.margin + b[0])); this.legend && this.legend.display && this.legend.adjustMargins(g, b); d(this, "getMargins"); a || this.getAxisMargins() }, getAxisMargins: function () { var a = this, b = a.axisOffset = [0, 0, 0, 0], d = a.margin; a.hasCartesianSeries && l(a.axes, function (a) { a.visible && a.getOffset() }); l(L, function (g, e) { c(d[e]) || (a[g] += b[e]) }); a.setChartSize() }, reflow: function (b) {
                var d =
                    this, g = d.options.chart, e = d.renderTo, n = c(g.width) && c(g.height), k = g.width || a.getStyle(e, "width"), g = g.height || a.getStyle(e, "height"), e = b ? b.target : P; if (!n && !d.isPrinting && k && g && (e === P || e === h)) { if (k !== d.containerWidth || g !== d.containerHeight) a.clearTimeout(d.reflowTimeout), d.reflowTimeout = v(function () { d.container && d.setSize(void 0, void 0, !1) }, b ? 100 : 0); d.containerWidth = k; d.containerHeight = g }
            }, setReflow: function (a) {
                var b = this; !1 === a || this.unbindReflow ? !1 === a && this.unbindReflow && (this.unbindReflow = this.unbindReflow()) :
                    (this.unbindReflow = C(P, "resize", function (a) { b.reflow(a) }), C(this, "destroy", this.unbindReflow))
            }, setSize: function (b, c, g) {
                var n = this, k = n.renderer; n.isResizing += 1; a.setAnimation(g, n); n.oldChartHeight = n.chartHeight; n.oldChartWidth = n.chartWidth; void 0 !== b && (n.options.chart.width = b); void 0 !== c && (n.options.chart.height = c); n.getChartSize(); b = k.globalAnimation; (b ? D : e)(n.container, { width: n.chartWidth + "px", height: n.chartHeight + "px" }, b); n.setChartSize(!0); k.setSize(n.chartWidth, n.chartHeight, g); l(n.axes, function (a) {
                a.isDirty =
                    !0; a.setScale()
                }); n.isDirtyLegend = !0; n.isDirtyBox = !0; n.layOutTitles(); n.getMargins(); n.redraw(g); n.oldChartHeight = null; d(n, "resize"); v(function () { n && d(n, "endResize", null, function () { --n.isResizing }) }, E(b).duration)
            }, setChartSize: function (a) {
                var b = this.inverted, c = this.renderer, g = this.chartWidth, e = this.chartHeight, n = this.options.chart, k = this.spacing, f = this.clipOffset, h, B, G, v; this.plotLeft = h = Math.round(this.plotLeft); this.plotTop = B = Math.round(this.plotTop); this.plotWidth = G = Math.max(0, Math.round(g - h - this.marginRight));
                this.plotHeight = v = Math.max(0, Math.round(e - B - this.marginBottom)); this.plotSizeX = b ? v : G; this.plotSizeY = b ? G : v; this.plotBorderWidth = n.plotBorderWidth || 0; this.spacingBox = c.spacingBox = { x: k[3], y: k[0], width: g - k[3] - k[1], height: e - k[0] - k[2] }; this.plotBox = c.plotBox = { x: h, y: B, width: G, height: v }; g = 2 * Math.floor(this.plotBorderWidth / 2); b = Math.ceil(Math.max(g, f[3]) / 2); c = Math.ceil(Math.max(g, f[0]) / 2); this.clipBox = {
                    x: b, y: c, width: Math.floor(this.plotSizeX - Math.max(g, f[1]) / 2 - b), height: Math.max(0, Math.floor(this.plotSizeY -
                        Math.max(g, f[2]) / 2 - c))
                }; a || l(this.axes, function (a) { a.setAxisSize(); a.setAxisTranslation() }); d(this, "afterSetChartSize", { skipAxes: a })
            }, resetMargins: function () { var a = this, b = a.options.chart; l(["margin", "spacing"], function (c) { var d = b[c], g = p(d) ? d : [d, d, d, d]; l(["Top", "Right", "Bottom", "Left"], function (d, e) { a[c][e] = G(b[c + d], g[e]) }) }); l(L, function (b, c) { a[b] = G(a.margin[c], a.spacing[c]) }); a.axisOffset = [0, 0, 0, 0]; a.clipOffset = [0, 0, 0, 0] }, drawChartBox: function () {
                var a = this.options.chart, b = this.renderer, c = this.chartWidth,
                g = this.chartHeight, e = this.chartBackground, n = this.plotBackground, k = this.plotBorder, f, l = this.plotBGImage, h = a.backgroundColor, B = a.plotBackgroundColor, G = a.plotBackgroundImage, v, p = this.plotLeft, t = this.plotTop, z = this.plotWidth, x = this.plotHeight, F = this.plotBox, u = this.clipRect, m = this.clipBox, q = "animate"; e || (this.chartBackground = e = b.rect().addClass("highcharts-background").add(), q = "attr"); f = a.borderWidth || 0; v = f + (a.shadow ? 8 : 0); h = { fill: h || "none" }; if (f || e["stroke-width"]) h.stroke = a.borderColor, h["stroke-width"] =
                    f; e.attr(h).shadow(a.shadow); e[q]({ x: v / 2, y: v / 2, width: c - v - f % 2, height: g - v - f % 2, r: a.borderRadius }); q = "animate"; n || (q = "attr", this.plotBackground = n = b.rect().addClass("highcharts-plot-background").add()); n[q](F); n.attr({ fill: B || "none" }).shadow(a.plotShadow); G && (l ? l.animate(F) : this.plotBGImage = b.image(G, p, t, z, x).add()); u ? u.animate({ width: m.width, height: m.height }) : this.clipRect = b.clipRect(m); q = "animate"; k || (q = "attr", this.plotBorder = k = b.rect().addClass("highcharts-plot-border").attr({ zIndex: 1 }).add()); k.attr({
                        stroke: a.plotBorderColor,
                        "stroke-width": a.plotBorderWidth || 0, fill: "none"
                    }); k[q](k.crisp({ x: p, y: t, width: z, height: x }, -k.strokeWidth())); this.isDirtyBox = !1; d(this, "afterDrawChartBox")
            }, propFromSeries: function () { var a = this, b = a.options.chart, c, d = a.options.series, g, e; l(["inverted", "angular", "polar"], function (n) { c = F[b.type || b.defaultSeriesType]; e = b[n] || c && c.prototype[n]; for (g = d && d.length; !e && g--;)(c = F[d[g].type]) && c.prototype[n] && (e = !0); a[n] = e }) }, linkSeries: function () {
                var a = this, b = a.series; l(b, function (a) {
                    a.linkedSeries.length =
                    0
                }); l(b, function (b) { var c = b.options.linkedTo; H(c) && (c = ":previous" === c ? a.series[b.index - 1] : a.get(c)) && c.linkedParent !== b && (c.linkedSeries.push(b), b.linkedParent = c, b.visible = G(b.options.visible, c.options.visible, b.visible)) }); d(this, "afterLinkSeries")
            }, renderSeries: function () { l(this.series, function (a) { a.translate(); a.render() }) }, renderLabels: function () {
                var a = this, b = a.options.labels; b.items && l(b.items, function (c) {
                    var d = z(b.style, c.style), g = B(d.left) + a.plotLeft, e = B(d.top) + a.plotTop + 12; delete d.left; delete d.top;
                    a.renderer.text(c.html, g, e).attr({ zIndex: 2 }).css(d).add()
                })
            }, render: function () {
                var a = this.axes, b = this.renderer, c = this.options, d, g, e; this.setTitle(); this.legend = new t(this, c.legend); this.getStacks && this.getStacks(); this.getMargins(!0); this.setChartSize(); c = this.plotWidth; d = this.plotHeight = Math.max(this.plotHeight - 21, 0); l(a, function (a) { a.setScale() }); this.getAxisMargins(); g = 1.1 < c / this.plotWidth; e = 1.05 < d / this.plotHeight; if (g || e) l(a, function (a) { (a.horiz && g || !a.horiz && e) && a.setTickInterval(!0) }), this.getMargins();
                this.drawChartBox(); this.hasCartesianSeries && l(a, function (a) { a.visible && a.render() }); this.seriesGroup || (this.seriesGroup = b.g("series-group").attr({ zIndex: 3 }).add()); this.renderSeries(); this.renderLabels(); this.addCredits(); this.setResponsive && this.setResponsive(); this.hasRendered = !0
            }, addCredits: function (a) {
                var b = this; a = x(!0, this.options.credits, a); a.enabled && !this.credits && (this.credits = this.renderer.text(a.text + (this.mapCredits || ""), 0, 0).addClass("highcharts-credits").on("click", function () {
                a.href &&
                    (P.location.href = a.href)
                }).attr({ align: a.position.align, zIndex: 8 }).css(a.style).add().align(a.position), this.credits.update = function (a) { b.credits = b.credits.destroy(); b.addCredits(a) })
            }, destroy: function () {
                var b = this, c = b.axes, g = b.series, e = b.container, n, k = e && e.parentNode; d(b, "destroy"); b.renderer.forExport ? a.erase(w, b) : w[b.index] = void 0; a.chartCount--; b.renderTo.removeAttribute("data-highcharts-chart"); M(b); for (n = c.length; n--;)c[n] = c[n].destroy(); this.scroller && this.scroller.destroy && this.scroller.destroy();
                for (n = g.length; n--;)g[n] = g[n].destroy(); l("title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer".split(" "), function (a) { var c = b[a]; c && c.destroy && (b[a] = c.destroy()) }); e && (e.innerHTML = "", M(e), k && q(e)); I(b, function (a, c) { delete b[c] })
            }, firstRender: function () {
                var a = this, b = a.options; if (!a.isReadyToRender || a.isReadyToRender()) {
                    a.getContainer(); a.resetMargins(); a.setChartSize(); a.propFromSeries(); a.getAxes();
                    l(b.series || [], function (b) { a.initSeries(b) }); a.linkSeries(); d(a, "beforeRender"); n && (a.pointer = new n(a, b)); a.render(); if (!a.renderer.imgCount && a.onload) a.onload(); a.temporaryDisplay(!0)
                }
            }, onload: function () { l([this.callback].concat(this.callbacks), function (a) { a && void 0 !== this.index && a.apply(this, [this]) }, this); d(this, "load"); d(this, "render"); c(this.index) && this.setReflow(this.options.chart.reflow); this.onload = null }
        })
    })(K); (function (a) {
        var C = a.addEvent, D = a.Chart, E = a.each; C(D, "afterSetChartSize", function (m) {
            var h =
                this.options.chart.scrollablePlotArea; (h = h && h.minWidth) && !this.renderer.forExport && (this.scrollablePixels = h = Math.max(0, h - this.chartWidth)) && (this.plotWidth += h, this.clipBox.width += h, m.skipAxes || E(this.axes, function (f) { 1 === f.side ? f.getPlotLinePath = function () { var h = this.right, m; this.right = h - f.chart.scrollablePixels; m = a.Axis.prototype.getPlotLinePath.apply(this, arguments); this.right = h; return m } : (f.setAxisSize(), f.setAxisTranslation()) }))
        }); C(D, "render", function () {
            this.scrollablePixels ? (this.setUpScrolling &&
                this.setUpScrolling(), this.applyFixed()) : this.fixedDiv && this.applyFixed()
        }); D.prototype.setUpScrolling = function () { this.scrollingContainer = a.createElement("div", { className: "highcharts-scrolling" }, { overflowX: "auto", WebkitOverflowScrolling: "touch" }, this.renderTo); this.innerContainer = a.createElement("div", { className: "highcharts-inner-container" }, null, this.scrollingContainer); this.innerContainer.appendChild(this.container); this.setUpScrolling = null }; D.prototype.applyFixed = function () {
            var m = this.container,
            h, f, r = !this.fixedDiv; r && (this.fixedDiv = a.createElement("div", { className: "highcharts-fixed" }, { position: "absolute", overflow: "hidden", pointerEvents: "none", zIndex: 2 }, null, !0), this.renderTo.insertBefore(this.fixedDiv, this.renderTo.firstChild), this.fixedRenderer = h = new a.Renderer(this.fixedDiv, 0, 0), this.scrollableMask = h.path().attr({ fill: a.color(this.options.chart.backgroundColor || "#fff").setOpacity(.85).get(), zIndex: -1 }).addClass("highcharts-scrollable-mask").add(), a.each([this.inverted ? ".highcharts-xaxis" :
                ".highcharts-yaxis", this.inverted ? ".highcharts-xaxis-labels" : ".highcharts-yaxis-labels", ".highcharts-contextbutton", ".highcharts-credits", ".highcharts-legend", ".highcharts-subtitle", ".highcharts-title", ".highcharts-legend-checkbox"], function (f) { a.each(m.querySelectorAll(f), function (a) { (a.namespaceURI === h.SVG_NS ? h.box : h.box.parentNode).appendChild(a); a.style.pointerEvents = "auto" }) })); this.fixedRenderer.setSize(this.chartWidth, this.chartHeight); f = this.chartWidth + this.scrollablePixels; a.stop(this.container);
            this.container.style.width = f + "px"; this.renderer.boxWrapper.attr({ width: f, height: this.chartHeight, viewBox: [0, 0, f, this.chartHeight].join(" ") }); this.chartBackground.attr({ width: f }); r && (f = this.options.chart.scrollablePlotArea, f.scrollPositionX && (this.scrollingContainer.scrollLeft = this.scrollablePixels * f.scrollPositionX)); r = this.axisOffset; f = this.plotTop - r[0] - 1; var r = this.plotTop + this.plotHeight + r[2], y = this.plotLeft + this.plotWidth - this.scrollablePixels; this.scrollableMask.attr({
                d: this.scrollablePixels ?
                    ["M", 0, f, "L", this.plotLeft - 1, f, "L", this.plotLeft - 1, r, "L", 0, r, "Z", "M", y, f, "L", this.chartWidth, f, "L", this.chartWidth, r, "L", y, r, "Z"] : ["M", 0, 0]
            })
        }
    })(K); (function (a) {
        var C, D = a.each, E = a.extend, m = a.erase, h = a.fireEvent, f = a.format, r = a.isArray, y = a.isNumber, q = a.pick, w = a.removeEvent; a.Point = C = function () { }; a.Point.prototype = {
            init: function (a, c, f) {
            this.series = a; this.color = a.color; this.applyOptions(c, f); a.options.colorByPoint ? (c = a.options.colors || a.chart.options.colors, this.color = this.color || c[a.colorCounter], c =
                c.length, f = a.colorCounter, a.colorCounter++ , a.colorCounter === c && (a.colorCounter = 0)) : f = a.colorIndex; this.colorIndex = q(this.colorIndex, f); a.chart.pointCount++; h(this, "afterInit"); return this
            }, applyOptions: function (a, c) {
                var e = this.series, f = e.options.pointValKey || e.pointValKey; a = C.prototype.optionsToObject.call(this, a); E(this, a); this.options = this.options ? E(this.options, a) : a; a.group && delete this.group; f && (this.y = this[f]); this.isNull = q(this.isValid && !this.isValid(), null === this.x || !y(this.y, !0)); this.selected &&
                    (this.state = "select"); "name" in this && void 0 === c && e.xAxis && e.xAxis.hasNames && (this.x = e.xAxis.nameToX(this)); void 0 === this.x && e && (this.x = void 0 === c ? e.autoIncrement(this) : c); return this
            }, setNestedProperty: function (e, c, f) { f = f.split("."); a.reduce(f, function (e, f, d, b) { e[f] = b.length - 1 === d ? c : a.isObject(e[f], !0) ? e[f] : {}; return e[f] }, e); return e }, optionsToObject: function (e) {
                var c = {}, f = this.series, h = f.options.keys, k = h || f.pointArrayMap || ["y"], d = k.length, b = 0, u = 0; if (y(e) || null === e) c[k[0]] = e; else if (r(e)) for (!h &&
                    e.length > d && (f = typeof e[0], "string" === f ? c.name = e[0] : "number" === f && (c.x = e[0]), b++); u < d;)h && void 0 === e[b] || (0 < k[u].indexOf(".") ? a.Point.prototype.setNestedProperty(c, e[b], k[u]) : c[k[u]] = e[b]), b++ , u++; else "object" === typeof e && (c = e, e.dataLabels && (f._hasPointLabels = !0), e.marker && (f._hasPointMarkers = !0)); return c
            }, getClassName: function () {
                return "highcharts-point" + (this.selected ? " highcharts-point-select" : "") + (this.negative ? " highcharts-negative" : "") + (this.isNull ? " highcharts-null-point" : "") + (void 0 !== this.colorIndex ?
                    " highcharts-color-" + this.colorIndex : "") + (this.options.className ? " " + this.options.className : "") + (this.zone && this.zone.className ? " " + this.zone.className.replace("highcharts-negative", "") : "")
            }, getZone: function () { var a = this.series, c = a.zones, a = a.zoneAxis || "y", f = 0, h; for (h = c[f]; this[a] >= h.value;)h = c[++f]; this.nonZonedColor || (this.nonZonedColor = this.color); this.color = h && h.color && !this.options.color ? h.color : this.nonZonedColor; return h }, destroy: function () {
                var a = this.series.chart, c = a.hoverPoints, f; a.pointCount--;
                c && (this.setState(), m(c, this), c.length || (a.hoverPoints = null)); if (this === a.hoverPoint) this.onMouseOut(); if (this.graphic || this.dataLabel) w(this), this.destroyElements(); this.legendItem && a.legend.destroyItem(this); for (f in this) this[f] = null
            }, destroyElements: function () { for (var a = ["graphic", "dataLabel", "dataLabelUpper", "connector", "shadowGroup"], c, f = 6; f--;)c = a[f], this[c] && (this[c] = this[c].destroy()) }, getLabelConfig: function () {
                return {
                    x: this.category, y: this.y, color: this.color, colorIndex: this.colorIndex, key: this.name ||
                        this.category, series: this.series, point: this, percentage: this.percentage, total: this.total || this.stackTotal
                }
            }, tooltipFormatter: function (a) { var c = this.series, e = c.tooltipOptions, h = q(e.valueDecimals, ""), k = e.valuePrefix || "", d = e.valueSuffix || ""; D(c.pointArrayMap || ["y"], function (b) { b = "{point." + b; if (k || d) a = a.replace(RegExp(b + "}", "g"), k + b + "}" + d); a = a.replace(RegExp(b + "}", "g"), b + ":,." + h + "f}") }); return f(a, { point: this, series: this.series }, c.chart.time) }, firePointEvent: function (a, c, f) {
                var e = this, k = this.series.options;
                (k.point.events[a] || e.options && e.options.events && e.options.events[a]) && this.importEvents(); "click" === a && k.allowPointSelect && (f = function (a) { e.select && e.select(null, a.ctrlKey || a.metaKey || a.shiftKey) }); h(this, a, c, f)
            }, visible: !0
        }
    })(K); (function (a) {
        var C = a.addEvent, D = a.animObject, E = a.arrayMax, m = a.arrayMin, h = a.correctFloat, f = a.defaultOptions, r = a.defaultPlotOptions, y = a.defined, q = a.each, w = a.erase, e = a.extend, c = a.fireEvent, l = a.grep, z = a.isArray, k = a.isNumber, d = a.isString, b = a.merge, u = a.objectEach, p = a.pick, H = a.removeEvent,
        t = a.splat, L = a.SVGElement, x = a.syncTimeout, I = a.win; a.Series = a.seriesType("line", null, {
            lineWidth: 2, allowPointSelect: !1, showCheckbox: !1, animation: { duration: 1E3 }, events: {}, marker: { lineWidth: 0, lineColor: "#ffffff", enabledThreshold: 2, radius: 4, states: { normal: { animation: !0 }, hover: { animation: { duration: 50 }, enabled: !0, radiusPlus: 2, lineWidthPlus: 1 }, select: { fillColor: "#cccccc", lineColor: "#000000", lineWidth: 2 } } }, point: { events: {} }, dataLabels: {
                align: "center", formatter: function () {
                    return null === this.y ? "" : a.numberFormat(this.y,
                        -1)
                }, style: { fontSize: "11px", fontWeight: "bold", color: "contrast", textOutline: "1px contrast" }, verticalAlign: "bottom", x: 0, y: 0, padding: 5
            }, cropThreshold: 300, pointRange: 0, softThreshold: !0, states: { normal: { animation: !0 }, hover: { animation: { duration: 50 }, lineWidthPlus: 1, marker: {}, halo: { size: 10, opacity: .25 } }, select: {} }, stickyTracking: !0, turboThreshold: 1E3, findNearestPointBy: "x"
        }, {
            isCartesian: !0, pointClass: a.Point, sorted: !0, requireSorting: !0, directTouch: !1, axisTypes: ["xAxis", "yAxis"], colorCounter: 0, parallelArrays: ["x",
                "y"], coll: "series", init: function (a, b) {
                    var d = this, n, f = a.series, g; d.chart = a; d.options = b = d.setOptions(b); d.linkedSeries = []; d.bindAxes(); e(d, { name: b.name, state: "", visible: !1 !== b.visible, selected: !0 === b.selected }); n = b.events; u(n, function (a, b) { C(d, b, a) }); if (n && n.click || b.point && b.point.events && b.point.events.click || b.allowPointSelect) a.runTrackerClick = !0; d.getColor(); d.getSymbol(); q(d.parallelArrays, function (a) { d[a + "Data"] = [] }); d.setData(b.data, !1); d.isCartesian && (a.hasCartesianSeries = !0); f.length && (g =
                        f[f.length - 1]); d._i = p(g && g._i, -1) + 1; a.orderSeries(this.insert(f)); c(this, "afterInit")
                }, insert: function (a) { var b = this.options.index, c; if (k(b)) { for (c = a.length; c--;)if (b >= p(a[c].options.index, a[c]._i)) { a.splice(c + 1, 0, this); break } -1 === c && a.unshift(this); c += 1 } else a.push(this); return p(c, a.length - 1) }, bindAxes: function () {
                    var b = this, c = b.options, d = b.chart, e; q(b.axisTypes || [], function (f) {
                        q(d[f], function (a) {
                            e = a.options; if (c[f] === e.index || void 0 !== c[f] && c[f] === e.id || void 0 === c[f] && 0 === e.index) b.insert(a.series),
                                b[f] = a, a.isDirty = !0
                        }); b[f] || b.optionalAxis === f || a.error(18, !0)
                    })
                }, updateParallelArrays: function (a, b) { var c = a.series, d = arguments, e = k(b) ? function (d) { var g = "y" === d && c.toYData ? c.toYData(a) : a[d]; c[d + "Data"][b] = g } : function (a) { Array.prototype[b].apply(c[a + "Data"], Array.prototype.slice.call(d, 2)) }; q(c.parallelArrays, e) }, autoIncrement: function () {
                    var a = this.options, b = this.xIncrement, c, d = a.pointIntervalUnit, e = this.chart.time, b = p(b, a.pointStart, 0); this.pointInterval = c = p(this.pointInterval, a.pointInterval, 1);
                    d && (a = new e.Date(b), "day" === d ? e.set("Date", a, e.get("Date", a) + c) : "month" === d ? e.set("Month", a, e.get("Month", a) + c) : "year" === d && e.set("FullYear", a, e.get("FullYear", a) + c), c = a.getTime() - b); this.xIncrement = b + c; return b
                }, setOptions: function (a) {
                    var d = this.chart, e = d.options, k = e.plotOptions, n = (d.userOptions || {}).plotOptions || {}, g = k[this.type]; this.userOptions = a; d = b(g, k.series, a); this.tooltipOptions = b(f.tooltip, f.plotOptions.series && f.plotOptions.series.tooltip, f.plotOptions[this.type].tooltip, e.tooltip.userOptions,
                        k.series && k.series.tooltip, k[this.type].tooltip, a.tooltip); this.stickyTracking = p(a.stickyTracking, n[this.type] && n[this.type].stickyTracking, n.series && n.series.stickyTracking, this.tooltipOptions.shared && !this.noSharedTooltip ? !0 : d.stickyTracking); null === g.marker && delete d.marker; this.zoneAxis = d.zoneAxis; a = this.zones = (d.zones || []).slice(); !d.negativeColor && !d.negativeFillColor || d.zones || a.push({ value: d[this.zoneAxis + "Threshold"] || d.threshold || 0, className: "highcharts-negative", color: d.negativeColor, fillColor: d.negativeFillColor });
                    a.length && y(a[a.length - 1].value) && a.push({ color: this.color, fillColor: this.fillColor }); c(this, "afterSetOptions", { options: d }); return d
                }, getName: function () { return this.name || "Series " + (this.index + 1) }, getCyclic: function (a, b, c) { var d, e = this.chart, g = this.userOptions, f = a + "Index", k = a + "Counter", n = c ? c.length : p(e.options.chart[a + "Count"], e[a + "Count"]); b || (d = p(g[f], g["_" + f]), y(d) || (e.series.length || (e[k] = 0), g["_" + f] = d = e[k] % n, e[k] += 1), c && (b = c[d])); void 0 !== d && (this[f] = d); this[a] = b }, getColor: function () {
                    this.options.colorByPoint ?
                    this.options.color = null : this.getCyclic("color", this.options.color || r[this.type].color, this.chart.options.colors)
                }, getSymbol: function () { this.getCyclic("symbol", this.options.marker.symbol, this.chart.options.symbols) }, drawLegendSymbol: a.LegendSymbolMixin.drawLineMarker, updateData: function (b) {
                    var c = this.options, d = this.points, e = [], f, g, n, h = this.requireSorting; q(b, function (b) {
                        var g; g = a.defined(b) && this.pointClass.prototype.optionsToObject.call({ series: this }, b).x; k(g) && (g = a.inArray(g, this.xData, n), -1 === g ?
                            e.push(b) : b !== c.data[g] ? (d[g].update(b, !1, null, !1), d[g].touched = !0, h && (n = g)) : d[g] && (d[g].touched = !0), f = !0)
                    }, this); if (f) for (b = d.length; b--;)g = d[b], g.touched || g.remove(!1), g.touched = !1; else if (b.length === d.length) q(b, function (a, b) { d[b].update && a !== c.data[b] && d[b].update(a, !1, null, !1) }); else return !1; q(e, function (a) { this.addPoint(a, !1) }, this); return !0
                }, setData: function (b, c, e, f) {
                    var n = this, g = n.points, h = g && g.length || 0, l, B = n.options, G = n.chart, t = null, x = n.xAxis, u = B.turboThreshold, m = this.xData, r = this.yData,
                    w = (l = n.pointArrayMap) && l.length, y; b = b || []; l = b.length; c = p(c, !0); !1 !== f && l && h && !n.cropped && !n.hasGroupedData && n.visible && !n.isSeriesBoosting && (y = this.updateData(b)); if (!y) {
                    n.xIncrement = null; n.colorCounter = 0; q(this.parallelArrays, function (a) { n[a + "Data"].length = 0 }); if (u && l > u) { for (e = 0; null === t && e < l;)t = b[e], e++; if (k(t)) for (e = 0; e < l; e++)m[e] = this.autoIncrement(), r[e] = b[e]; else if (z(t)) if (w) for (e = 0; e < l; e++)t = b[e], m[e] = t[0], r[e] = t.slice(1, w + 1); else for (e = 0; e < l; e++)t = b[e], m[e] = t[0], r[e] = t[1]; else a.error(12) } else for (e =
                        0; e < l; e++)void 0 !== b[e] && (t = { series: n }, n.pointClass.prototype.applyOptions.apply(t, [b[e]]), n.updateParallelArrays(t, e)); r && d(r[0]) && a.error(14, !0); n.data = []; n.options.data = n.userOptions.data = b; for (e = h; e--;)g[e] && g[e].destroy && g[e].destroy(); x && (x.minRange = x.userMinRange); n.isDirty = G.isDirtyBox = !0; n.isDirtyData = !!g; e = !1
                    } "point" === B.legendType && (this.processData(), this.generatePoints()); c && G.redraw(e)
                }, processData: function (b) {
                    var c = this.xData, d = this.yData, e = c.length, f; f = 0; var g, k, n = this.xAxis, h, l = this.options;
                    h = l.cropThreshold; var p = this.getExtremesFromAll || l.getExtremesFromAll, t = this.isCartesian, l = n && n.val2lin, x = n && n.isLog, u = this.requireSorting, m, z; if (t && !this.isDirty && !n.isDirty && !this.yAxis.isDirty && !b) return !1; n && (b = n.getExtremes(), m = b.min, z = b.max); t && this.sorted && !p && (!h || e > h || this.forceCrop) && (c[e - 1] < m || c[0] > z ? (c = [], d = []) : this.yData && (c[0] < m || c[e - 1] > z) && (f = this.cropData(this.xData, this.yData, m, z), c = f.xData, d = f.yData, f = f.start, g = !0)); for (h = c.length || 1; --h;)e = x ? l(c[h]) - l(c[h - 1]) : c[h] - c[h - 1], 0 < e && (void 0 ===
                        k || e < k) ? k = e : 0 > e && u && (a.error(15), u = !1); this.cropped = g; this.cropStart = f; this.processedXData = c; this.processedYData = d; this.closestPointRange = k
                }, cropData: function (a, b, c, d, e) { var g = a.length, f = 0, k = g, n; e = p(e, this.cropShoulder, 1); for (n = 0; n < g; n++)if (a[n] >= c) { f = Math.max(0, n - e); break } for (c = n; c < g; c++)if (a[c] > d) { k = c + e; break } return { xData: a.slice(f, k), yData: b.slice(f, k), start: f, end: k } }, generatePoints: function () {
                    var a = this.options, b = a.data, c = this.data, d, e = this.processedXData, g = this.processedYData, f = this.pointClass,
                    k = e.length, h = this.cropStart || 0, l, p = this.hasGroupedData, a = a.keys, x, u = [], m; c || p || (c = [], c.length = b.length, c = this.data = c); a && p && (this.options.keys = !1); for (m = 0; m < k; m++)l = h + m, p ? (x = (new f).init(this, [e[m]].concat(t(g[m]))), x.dataGroup = this.groupMap[m]) : (x = c[l]) || void 0 === b[l] || (c[l] = x = (new f).init(this, b[l], e[m])), x && (x.index = l, u[m] = x); this.options.keys = a; if (c && (k !== (d = c.length) || p)) for (m = 0; m < d; m++)m !== h || p || (m += k), c[m] && (c[m].destroyElements(), c[m].plotX = void 0); this.data = c; this.points = u
                }, getExtremes: function (a) {
                    var b =
                        this.yAxis, c = this.processedXData, d, e = [], g = 0; d = this.xAxis.getExtremes(); var f = d.min, n = d.max, h, l, p = this.requireSorting ? 1 : 0, t, x; a = a || this.stackedYData || this.processedYData || []; d = a.length; for (x = 0; x < d; x++)if (l = c[x], t = a[x], h = (k(t, !0) || z(t)) && (!b.positiveValuesOnly || t.length || 0 < t), l = this.getExtremesFromAll || this.options.getExtremesFromAll || this.cropped || (c[x + p] || l) >= f && (c[x - p] || l) <= n, h && l) if (h = t.length) for (; h--;)"number" === typeof t[h] && (e[g++] = t[h]); else e[g++] = t; this.dataMin = m(e); this.dataMax = E(e)
                }, translate: function () {
                this.processedXData ||
                    this.processData(); this.generatePoints(); var a = this.options, b = a.stacking, d = this.xAxis, e = d.categories, f = this.yAxis, g = this.points, l = g.length, t = !!this.modifyValue, x = a.pointPlacement, m = "between" === x || k(x), u = a.threshold, z = a.startFromThreshold ? u : 0, q, r, w, I, H = Number.MAX_VALUE; "between" === x && (x = .5); k(x) && (x *= p(a.pointRange || d.pointRange)); for (a = 0; a < l; a++) {
                        var L = g[a], C = L.x, D = L.y; r = L.low; var E = b && f.stacks[(this.negStacks && D < (z ? 0 : u) ? "-" : "") + this.stackKey], K; f.positiveValuesOnly && null !== D && 0 >= D && (L.isNull = !0);
                        L.plotX = q = h(Math.min(Math.max(-1E5, d.translate(C, 0, 0, 0, 1, x, "flags" === this.type)), 1E5)); b && this.visible && !L.isNull && E && E[C] && (I = this.getStackIndicator(I, C, this.index), K = E[C], D = K.points[I.key], r = D[0], D = D[1], r === z && I.key === E[C].base && (r = p(k(u) && u, f.min)), f.positiveValuesOnly && 0 >= r && (r = null), L.total = L.stackTotal = K.total, L.percentage = K.total && L.y / K.total * 100, L.stackY = D, K.setOffset(this.pointXOffset || 0, this.barW || 0)); L.yBottom = y(r) ? Math.min(Math.max(-1E5, f.translate(r, 0, 1, 0, 1)), 1E5) : null; t && (D = this.modifyValue(D,
                            L)); L.plotY = r = "number" === typeof D && Infinity !== D ? Math.min(Math.max(-1E5, f.translate(D, 0, 1, 0, 1)), 1E5) : void 0; L.isInside = void 0 !== r && 0 <= r && r <= f.len && 0 <= q && q <= d.len; L.clientX = m ? h(d.translate(C, 0, 0, 0, 1, x)) : q; L.negative = L.y < (u || 0); L.category = e && void 0 !== e[L.x] ? e[L.x] : L.x; L.isNull || (void 0 !== w && (H = Math.min(H, Math.abs(q - w))), w = q); L.zone = this.zones.length && L.getZone()
                    } this.closestPointRangePx = H; c(this, "afterTranslate")
                }, getValidPoints: function (a, b) {
                    var c = this.chart; return l(a || this.points || [], function (a) {
                        return b &&
                            !c.isInsidePlot(a.plotX, a.plotY, c.inverted) ? !1 : !a.isNull
                    })
                }, setClip: function (a) {
                    var b = this.chart, c = this.options, d = b.renderer, e = b.inverted, g = this.clipBox, f = g || b.clipBox, k = this.sharedClipKey || ["_sharedClip", a && a.duration, a && a.easing, f.height, c.xAxis, c.yAxis].join(), n = b[k], h = b[k + "m"]; n || (a && (f.width = 0, e && (f.x = b.plotSizeX), b[k + "m"] = h = d.clipRect(e ? b.plotSizeX + 99 : -99, e ? -b.plotLeft : -b.plotTop, 99, e ? b.chartWidth : b.chartHeight)), b[k] = n = d.clipRect(f), n.count = { length: 0 }); a && !n.count[this.index] && (n.count[this.index] =
                        !0, n.count.length += 1); !1 !== c.clip && (this.group.clip(a || g ? n : b.clipRect), this.markerGroup.clip(h), this.sharedClipKey = k); a || (n.count[this.index] && (delete n.count[this.index], --n.count.length), 0 === n.count.length && k && b[k] && (g || (b[k] = b[k].destroy()), b[k + "m"] && (b[k + "m"] = b[k + "m"].destroy())))
                }, animate: function (a) {
                    var b = this.chart, c = D(this.options.animation), d; a ? this.setClip(c) : (d = this.sharedClipKey, (a = b[d]) && a.animate({ width: b.plotSizeX, x: 0 }, c), b[d + "m"] && b[d + "m"].animate({ width: b.plotSizeX + 99, x: 0 }, c), this.animate =
                        null)
                }, afterAnimate: function () { this.setClip(); c(this, "afterAnimate"); this.finishedAnimating = !0 }, drawPoints: function () {
                    var a = this.points, b = this.chart, c, d, e, g, f = this.options.marker, k, h, l, t = this[this.specialGroup] || this.markerGroup, x, m = p(f.enabled, this.xAxis.isRadial ? !0 : null, this.closestPointRangePx >= f.enabledThreshold * f.radius); if (!1 !== f.enabled || this._hasPointMarkers) for (c = 0; c < a.length; c++)d = a[c], g = d.graphic, k = d.marker || {}, h = !!d.marker, e = m && void 0 === k.enabled || k.enabled, l = d.isInside, e && !d.isNull ? (e =
                        p(k.symbol, this.symbol), x = this.markerAttribs(d, d.selected && "select"), g ? g[l ? "show" : "hide"](!0).animate(x) : l && (0 < x.width || d.hasImage) && (d.graphic = g = b.renderer.symbol(e, x.x, x.y, x.width, x.height, h ? k : f).add(t)), g && g.attr(this.pointAttribs(d, d.selected && "select")), g && g.addClass(d.getClassName(), !0)) : g && (d.graphic = g.destroy())
                }, markerAttribs: function (a, b) {
                    var c = this.options.marker, d = a.marker || {}, e = d.symbol || c.symbol, g = p(d.radius, c.radius); b && (c = c.states[b], b = d.states && d.states[b], g = p(b && b.radius, c && c.radius,
                        g + (c && c.radiusPlus || 0))); a.hasImage = e && 0 === e.indexOf("url"); a.hasImage && (g = 0); a = { x: Math.floor(a.plotX) - g, y: a.plotY - g }; g && (a.width = a.height = 2 * g); return a
                }, pointAttribs: function (a, b) {
                    var c = this.options.marker, d = a && a.options, e = d && d.marker || {}, g = this.color, f = d && d.color, k = a && a.color, d = p(e.lineWidth, c.lineWidth); a = a && a.zone && a.zone.color; g = f || a || k || g; a = e.fillColor || c.fillColor || g; g = e.lineColor || c.lineColor || g; b && (c = c.states[b], b = e.states && e.states[b] || {}, d = p(b.lineWidth, c.lineWidth, d + p(b.lineWidthPlus,
                        c.lineWidthPlus, 0)), a = b.fillColor || c.fillColor || a, g = b.lineColor || c.lineColor || g); return { stroke: g, "stroke-width": d, fill: a }
                }, destroy: function () {
                    var b = this, d = b.chart, e = /AppleWebKit\/533/.test(I.navigator.userAgent), f, k, g = b.data || [], h, l; c(b, "destroy"); H(b); q(b.axisTypes || [], function (a) { (l = b[a]) && l.series && (w(l.series, b), l.isDirty = l.forceRedraw = !0) }); b.legendItem && b.chart.legend.destroyItem(b); for (k = g.length; k--;)(h = g[k]) && h.destroy && h.destroy(); b.points = null; a.clearTimeout(b.animationTimeout); u(b, function (a,
                        b) { a instanceof L && !a.survive && (f = e && "group" === b ? "hide" : "destroy", a[f]()) }); d.hoverSeries === b && (d.hoverSeries = null); w(d.series, b); d.orderSeries(); u(b, function (a, c) { delete b[c] })
                }, getGraphPath: function (a, b, c) {
                    var d = this, e = d.options, g = e.step, f, k = [], n = [], h; a = a || d.points; (f = a.reversed) && a.reverse(); (g = { right: 1, center: 2 }[g] || g && 3) && f && (g = 4 - g); !e.connectNulls || b || c || (a = this.getValidPoints(a)); q(a, function (f, l) {
                        var p = f.plotX, t = f.plotY, x = a[l - 1]; (f.leftCliff || x && x.rightCliff) && !c && (h = !0); f.isNull && !y(b) &&
                            0 < l ? h = !e.connectNulls : f.isNull && !b ? h = !0 : (0 === l || h ? l = ["M", f.plotX, f.plotY] : d.getPointSpline ? l = d.getPointSpline(a, f, l) : g ? (l = 1 === g ? ["L", x.plotX, t] : 2 === g ? ["L", (x.plotX + p) / 2, x.plotY, "L", (x.plotX + p) / 2, t] : ["L", p, x.plotY], l.push("L", p, t)) : l = ["L", p, t], n.push(f.x), g && (n.push(f.x), 2 === g && n.push(f.x)), k.push.apply(k, l), h = !1)
                    }); k.xMap = n; return d.graphPath = k
                }, drawGraph: function () {
                    var a = this, b = this.options, c = (this.gappedPath || this.getGraphPath).call(this), d = [["graph", "highcharts-graph", b.lineColor || this.color, b.dashStyle]],
                    d = a.getZonesGraphs(d); q(d, function (d, e) { var g = d[0], f = a[g]; f ? (f.endX = a.preventGraphAnimation ? null : c.xMap, f.animate({ d: c })) : c.length && (a[g] = a.chart.renderer.path(c).addClass(d[1]).attr({ zIndex: 1 }).add(a.group), f = { stroke: d[2], "stroke-width": b.lineWidth, fill: a.fillGraph && a.color || "none" }, d[3] ? f.dashstyle = d[3] : "square" !== b.linecap && (f["stroke-linecap"] = f["stroke-linejoin"] = "round"), f = a[g].attr(f).shadow(2 > e && b.shadow)); f && (f.startX = c.xMap, f.isArea = c.isArea) })
                }, getZonesGraphs: function (a) {
                    q(this.zones, function (b,
                        c) { a.push(["zone-graph-" + c, "highcharts-graph highcharts-zone-graph-" + c + " " + (b.className || ""), b.color || this.color, b.dashStyle || this.options.dashStyle]) }, this); return a
                }, applyZones: function () {
                    var a = this, b = this.chart, c = b.renderer, d = this.zones, e, g, f = this.clips || [], k, h = this.graph, l = this.area, t = Math.max(b.chartWidth, b.chartHeight), x = this[(this.zoneAxis || "y") + "Axis"], m, u, z = b.inverted, r, w, y, I, H = !1; d.length && (h || l) && x && void 0 !== x.min && (u = x.reversed, r = x.horiz, h && !this.showLine && h.hide(), l && l.hide(), m = x.getExtremes(),
                        q(d, function (d, n) {
                            e = u ? r ? b.plotWidth : 0 : r ? 0 : x.toPixels(m.min); e = Math.min(Math.max(p(g, e), 0), t); g = Math.min(Math.max(Math.round(x.toPixels(p(d.value, m.max), !0)), 0), t); H && (e = g = x.toPixels(m.max)); w = Math.abs(e - g); y = Math.min(e, g); I = Math.max(e, g); x.isXAxis ? (k = { x: z ? I : y, y: 0, width: w, height: t }, r || (k.x = b.plotHeight - k.x)) : (k = { x: 0, y: z ? I : y, width: t, height: w }, r && (k.y = b.plotWidth - k.y)); z && c.isVML && (k = x.isXAxis ? { x: 0, y: u ? y : I, height: k.width, width: b.chartWidth } : { x: k.y - b.plotLeft - b.spacingBox.x, y: 0, width: k.height, height: b.chartHeight });
                            f[n] ? f[n].animate(k) : (f[n] = c.clipRect(k), h && a["zone-graph-" + n].clip(f[n]), l && a["zone-area-" + n].clip(f[n])); H = d.value > m.max; a.resetZones && 0 === g && (g = void 0)
                        }), this.clips = f)
                }, invertGroups: function (a) { function b() { q(["group", "markerGroup"], function (b) { c[b] && (d.renderer.isVML && c[b].attr({ width: c.yAxis.len, height: c.xAxis.len }), c[b].width = c.yAxis.len, c[b].height = c.xAxis.len, c[b].invert(a)) }) } var c = this, d = c.chart, e; c.xAxis && (e = C(d, "resize", b), C(c, "destroy", e), b(a), c.invertGroups = b) }, plotGroup: function (a,
                    b, c, d, e) { var g = this[a], f = !g; f && (this[a] = g = this.chart.renderer.g().attr({ zIndex: d || .1 }).add(e)); g.addClass("highcharts-" + b + " highcharts-series-" + this.index + " highcharts-" + this.type + "-series " + (y(this.colorIndex) ? "highcharts-color-" + this.colorIndex + " " : "") + (this.options.className || "") + (g.hasClass("highcharts-tracker") ? " highcharts-tracker" : ""), !0); g.attr({ visibility: c })[f ? "attr" : "animate"](this.getPlotBox()); return g }, getPlotBox: function () {
                        var a = this.chart, b = this.xAxis, c = this.yAxis; a.inverted && (b = c,
                            c = this.xAxis); return { translateX: b ? b.left : a.plotLeft, translateY: c ? c.top : a.plotTop, scaleX: 1, scaleY: 1 }
                    }, render: function () {
                        var a = this, b = a.chart, d, e = a.options, f = !!a.animate && b.renderer.isSVG && D(e.animation).duration, g = a.visible ? "inherit" : "hidden", k = e.zIndex, h = a.hasRendered, l = b.seriesGroup, p = b.inverted; d = a.plotGroup("group", "series", g, k, l); a.markerGroup = a.plotGroup("markerGroup", "markers", g, k, l); f && a.animate(!0); d.inverted = a.isCartesian ? p : !1; a.drawGraph && (a.drawGraph(), a.applyZones()); a.drawDataLabels &&
                            a.drawDataLabels(); a.visible && a.drawPoints(); a.drawTracker && !1 !== a.options.enableMouseTracking && a.drawTracker(); a.invertGroups(p); !1 === e.clip || a.sharedClipKey || h || d.clip(b.clipRect); f && a.animate(); h || (a.animationTimeout = x(function () { a.afterAnimate() }, f)); a.isDirty = !1; a.hasRendered = !0; c(a, "afterRender")
                    }, redraw: function () {
                        var a = this.chart, b = this.isDirty || this.isDirtyData, c = this.group, d = this.xAxis, e = this.yAxis; c && (a.inverted && c.attr({ width: a.plotWidth, height: a.plotHeight }), c.animate({
                            translateX: p(d &&
                                d.left, a.plotLeft), translateY: p(e && e.top, a.plotTop)
                        })); this.translate(); this.render(); b && delete this.kdTree
                    }, kdAxisArray: ["clientX", "plotY"], searchPoint: function (a, b) { var c = this.xAxis, d = this.yAxis, e = this.chart.inverted; return this.searchKDTree({ clientX: e ? c.len - a.chartY + c.pos : a.chartX - c.pos, plotY: e ? d.len - a.chartX + d.pos : a.chartY - d.pos }, b) }, buildKDTree: function () {
                        function a(c, d, e) {
                            var g, f; if (f = c && c.length) return g = b.kdAxisArray[d % e], c.sort(function (a, b) { return a[g] - b[g] }), f = Math.floor(f / 2), {
                                point: c[f],
                                left: a(c.slice(0, f), d + 1, e), right: a(c.slice(f + 1), d + 1, e)
                            }
                        } this.buildingKdTree = !0; var b = this, c = -1 < b.options.findNearestPointBy.indexOf("y") ? 2 : 1; delete b.kdTree; x(function () { b.kdTree = a(b.getValidPoints(null, !b.directTouch), c, c); b.buildingKdTree = !1 }, b.options.kdNow ? 0 : 1)
                    }, searchKDTree: function (a, b) {
                        function c(a, b, k, h) {
                            var l = b.point, n = d.kdAxisArray[k % h], p, t, x = l; t = y(a[e]) && y(l[e]) ? Math.pow(a[e] - l[e], 2) : null; p = y(a[g]) && y(l[g]) ? Math.pow(a[g] - l[g], 2) : null; p = (t || 0) + (p || 0); l.dist = y(p) ? Math.sqrt(p) : Number.MAX_VALUE;
                            l.distX = y(t) ? Math.sqrt(t) : Number.MAX_VALUE; n = a[n] - l[n]; p = 0 > n ? "left" : "right"; t = 0 > n ? "right" : "left"; b[p] && (p = c(a, b[p], k + 1, h), x = p[f] < x[f] ? p : l); b[t] && Math.sqrt(n * n) < x[f] && (a = c(a, b[t], k + 1, h), x = a[f] < x[f] ? a : x); return x
                        } var d = this, e = this.kdAxisArray[0], g = this.kdAxisArray[1], f = b ? "distX" : "dist"; b = -1 < d.options.findNearestPointBy.indexOf("y") ? 2 : 1; this.kdTree || this.buildingKdTree || this.buildKDTree(); if (this.kdTree) return c(a, this.kdTree, b, b)
                    }
            })
    })(K); (function (a) {
        var C = a.Axis, D = a.Chart, E = a.correctFloat, m = a.defined,
        h = a.destroyObjectProperties, f = a.each, r = a.format, y = a.objectEach, q = a.pick, w = a.Series; a.StackItem = function (a, c, f, h, k) { var d = a.chart.inverted; this.axis = a; this.isNegative = f; this.options = c; this.x = h; this.total = null; this.points = {}; this.stack = k; this.rightCliff = this.leftCliff = 0; this.alignOptions = { align: c.align || (d ? f ? "left" : "right" : "center"), verticalAlign: c.verticalAlign || (d ? "middle" : f ? "bottom" : "top"), y: q(c.y, d ? 4 : f ? 14 : -6), x: q(c.x, d ? f ? -6 : 6 : 0) }; this.textAlign = c.textAlign || (d ? f ? "right" : "left" : "center") }; a.StackItem.prototype =
            {
                destroy: function () { h(this, this.axis) }, render: function (a) { var c = this.axis.chart, e = this.options, f = e.format, f = f ? r(f, this, c.time) : e.formatter.call(this); this.label ? this.label.attr({ text: f, visibility: "hidden" }) : this.label = c.renderer.text(f, null, null, e.useHTML).css(e.style).attr({ align: this.textAlign, rotation: e.rotation, visibility: "hidden" }).add(a); this.label.labelrank = c.plotHeight }, setOffset: function (a, c) {
                    var e = this.axis, f = e.chart, k = e.translate(e.usePercentage ? 100 : this.total, 0, 0, 0, 1), d = e.translate(0),
                    d = m(k) && Math.abs(k - d); a = f.xAxis[0].translate(this.x) + a; e = m(k) && this.getStackBox(f, this, a, k, c, d, e); (c = this.label) && e && (c.align(this.alignOptions, null, e), e = c.alignAttr, c[!1 === this.options.crop || f.isInsidePlot(e.x, e.y) ? "show" : "hide"](!0))
                }, getStackBox: function (a, c, f, h, k, d, b) { var e = c.axis.reversed, l = a.inverted; a = b.height + b.pos - (l ? a.plotLeft : a.plotTop); c = c.isNegative && !e || !c.isNegative && e; return { x: l ? c ? h : h - d : f, y: l ? a - f - k : c ? a - h - d : a - h, width: l ? d : k, height: l ? k : d } }
            }; D.prototype.getStacks = function () {
                var a = this;
                f(a.yAxis, function (a) { a.stacks && a.hasVisibleSeries && (a.oldStacks = a.stacks) }); f(a.series, function (c) { !c.options.stacking || !0 !== c.visible && !1 !== a.options.chart.ignoreHiddenSeries || (c.stackKey = c.type + q(c.options.stack, "")) })
            }; C.prototype.buildStacks = function () { var a = this.series, c = q(this.options.reversedStacks, !0), f = a.length, h; if (!this.isXAxis) { this.usePercentage = !1; for (h = f; h--;)a[c ? h : f - h - 1].setStackedPoints(); for (h = 0; h < f; h++)a[h].modifyStacks() } }; C.prototype.renderStackTotals = function () {
                var a = this.chart,
                c = a.renderer, f = this.stacks, h = this.stackTotalGroup; h || (this.stackTotalGroup = h = c.g("stack-labels").attr({ visibility: "visible", zIndex: 6 }).add()); h.translate(a.plotLeft, a.plotTop); y(f, function (a) { y(a, function (a) { a.render(h) }) })
            }; C.prototype.resetStacks = function () { var a = this, c = a.stacks; a.isXAxis || y(c, function (c) { y(c, function (e, f) { e.touched < a.stacksTouched ? (e.destroy(), delete c[f]) : (e.total = null, e.cumulative = null) }) }) }; C.prototype.cleanStacks = function () {
                var a; this.isXAxis || (this.oldStacks && (a = this.stacks =
                    this.oldStacks), y(a, function (a) { y(a, function (a) { a.cumulative = a.total }) }))
            }; w.prototype.setStackedPoints = function () {
                if (this.options.stacking && (!0 === this.visible || !1 === this.chart.options.chart.ignoreHiddenSeries)) {
                    var e = this.processedXData, c = this.processedYData, f = [], h = c.length, k = this.options, d = k.threshold, b = q(k.startFromThreshold && d, 0), u = k.stack, k = k.stacking, p = this.stackKey, r = "-" + p, t = this.negStacks, w = this.yAxis, x = w.stacks, y = w.oldStacks, n, G, B, M, F, g, v; w.stacksTouched += 1; for (F = 0; F < h; F++)g = e[F], v = c[F],
                        n = this.getStackIndicator(n, g, this.index), M = n.key, B = (G = t && v < (b ? 0 : d)) ? r : p, x[B] || (x[B] = {}), x[B][g] || (y[B] && y[B][g] ? (x[B][g] = y[B][g], x[B][g].total = null) : x[B][g] = new a.StackItem(w, w.options.stackLabels, G, g, u)), B = x[B][g], null !== v ? (B.points[M] = B.points[this.index] = [q(B.cumulative, b)], m(B.cumulative) || (B.base = M), B.touched = w.stacksTouched, 0 < n.index && !1 === this.singleStacks && (B.points[M][0] = B.points[this.index + "," + g + ",0"][0])) : B.points[M] = B.points[this.index] = null, "percent" === k ? (G = G ? p : r, t && x[G] && x[G][g] ? (G =
                            x[G][g], B.total = G.total = Math.max(G.total, B.total) + Math.abs(v) || 0) : B.total = E(B.total + (Math.abs(v) || 0))) : B.total = E(B.total + (v || 0)), B.cumulative = q(B.cumulative, b) + (v || 0), null !== v && (B.points[M].push(B.cumulative), f[F] = B.cumulative); "percent" === k && (w.usePercentage = !0); this.stackedYData = f; w.oldStacks = {}
                }
            }; w.prototype.modifyStacks = function () {
                var a = this, c = a.stackKey, h = a.yAxis.stacks, m = a.processedXData, k, d = a.options.stacking; a[d + "Stacker"] && f([c, "-" + c], function (b) {
                    for (var c = m.length, e, f; c--;)if (e = m[c], k = a.getStackIndicator(k,
                        e, a.index, b), f = (e = h[b] && h[b][e]) && e.points[k.key]) a[d + "Stacker"](f, e, c)
                })
            }; w.prototype.percentStacker = function (a, c, f) { c = c.total ? 100 / c.total : 0; a[0] = E(a[0] * c); a[1] = E(a[1] * c); this.stackedYData[f] = a[1] }; w.prototype.getStackIndicator = function (a, c, f, h) { !m(a) || a.x !== c || h && a.key !== h ? a = { x: c, index: 0, key: h } : a.index++; a.key = [f, c, a.index].join(); return a }
    })(K); (function (a) {
        var C = a.addEvent, D = a.animate, E = a.Axis, m = a.createElement, h = a.css, f = a.defined, r = a.each, y = a.erase, q = a.extend, w = a.fireEvent, e = a.inArray, c = a.isNumber,
        l = a.isObject, z = a.isArray, k = a.merge, d = a.objectEach, b = a.pick, u = a.Point, p = a.Series, H = a.seriesTypes, t = a.setAnimation, L = a.splat; q(a.Chart.prototype, {
            addSeries: function (a, c, d) { var e, f = this; a && (c = b(c, !0), w(f, "addSeries", { options: a }, function () { e = f.initSeries(a); f.isDirtyLegend = !0; f.linkSeries(); w(f, "afterAddSeries"); c && f.redraw(d) })); return e }, addAxis: function (a, c, d, e) {
                var f = c ? "xAxis" : "yAxis", h = this.options; a = k(a, { index: this[f].length, isX: c }); c = new E(this, a); h[f] = L(h[f] || {}); h[f].push(a); b(d, !0) && this.redraw(e);
                return c
            }, showLoading: function (a) {
                var b = this, c = b.options, d = b.loadingDiv, e = c.loading, f = function () { d && h(d, { left: b.plotLeft + "px", top: b.plotTop + "px", width: b.plotWidth + "px", height: b.plotHeight + "px" }) }; d || (b.loadingDiv = d = m("div", { className: "highcharts-loading highcharts-loading-hidden" }, null, b.container), b.loadingSpan = m("span", { className: "highcharts-loading-inner" }, null, d), C(b, "redraw", f)); d.className = "highcharts-loading"; b.loadingSpan.innerHTML = a || c.lang.loading; h(d, q(e.style, { zIndex: 10 })); h(b.loadingSpan,
                    e.labelStyle); b.loadingShown || (h(d, { opacity: 0, display: "" }), D(d, { opacity: e.style.opacity || .5 }, { duration: e.showDuration || 0 })); b.loadingShown = !0; f()
            }, hideLoading: function () { var a = this.options, b = this.loadingDiv; b && (b.className = "highcharts-loading highcharts-loading-hidden", D(b, { opacity: 0 }, { duration: a.loading.hideDuration || 100, complete: function () { h(b, { display: "none" }) } })); this.loadingShown = !1 }, propsRequireDirtyBox: "backgroundColor borderColor borderWidth margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow".split(" "),
            propsRequireUpdateSeries: "chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions time tooltip".split(" "), update: function (a, h, l, p) {
                var n = this, t = { credits: "addCredits", title: "setTitle", subtitle: "setSubtitle" }, x = a.chart, g, m, u = []; w(n, "update", { options: a }); if (x) {
                    k(!0, n.options.chart, x); "className" in x && n.setClassName(x.className); "reflow" in x && n.setReflow(x.reflow); if ("inverted" in x || "polar" in x || "type" in x) n.propFromSeries(), g = !0; "alignTicks" in x && (g = !0); d(x, function (a, b) {
                    -1 !==
                        e("chart." + b, n.propsRequireUpdateSeries) && (m = !0); -1 !== e(b, n.propsRequireDirtyBox) && (n.isDirtyBox = !0)
                    }); "style" in x && n.renderer.setStyle(x.style)
                } a.colors && (this.options.colors = a.colors); a.plotOptions && k(!0, this.options.plotOptions, a.plotOptions); d(a, function (a, b) { if (n[b] && "function" === typeof n[b].update) n[b].update(a, !1); else if ("function" === typeof n[t[b]]) n[t[b]](a); "chart" !== b && -1 !== e(b, n.propsRequireUpdateSeries) && (m = !0) }); r("xAxis yAxis zAxis series colorAxis pane".split(" "), function (b) {
                    var c;
                    a[b] && ("series" === b && (c = [], r(n[b], function (a, b) { a.options.isInternal || c.push(b) })), r(L(a[b]), function (a, d) { (d = f(a.id) && n.get(a.id) || n[b][c ? c[d] : d]) && d.coll === b && (d.update(a, !1), l && (d.touched = !0)); if (!d && l) if ("series" === b) n.addSeries(a, !1).touched = !0; else if ("xAxis" === b || "yAxis" === b) n.addAxis(a, "xAxis" === b, !1).touched = !0 }), l && r(n[b], function (a) { a.touched || a.options.isInternal ? delete a.touched : u.push(a) }))
                }); r(u, function (a) { a.remove(!1) }); g && r(n.axes, function (a) { a.update({}, !1) }); m && r(n.series, function (a) {
                    a.update({},
                        !1)
                }); a.loading && k(!0, n.options.loading, a.loading); g = x && x.width; x = x && x.height; c(g) && g !== n.chartWidth || c(x) && x !== n.chartHeight ? n.setSize(g, x, p) : b(h, !0) && n.redraw(p); w(n, "afterUpdate", { options: a })
            }, setSubtitle: function (a) { this.setTitle(void 0, a) }
        }); q(u.prototype, {
            update: function (a, c, d, e) {
                function f() {
                    k.applyOptions(a); null === k.y && g && (k.graphic = g.destroy()); l(a, !0) && (g && g.element && a && a.marker && void 0 !== a.marker.symbol && (k.graphic = g.destroy()), a && a.dataLabels && k.dataLabel && (k.dataLabel = k.dataLabel.destroy()),
                        k.connector && (k.connector = k.connector.destroy())); n = k.index; h.updateParallelArrays(k, n); t.data[n] = l(t.data[n], !0) || l(a, !0) ? k.options : b(a, t.data[n]); h.isDirty = h.isDirtyData = !0; !h.fixedBox && h.hasCartesianSeries && (p.isDirtyBox = !0); "point" === t.legendType && (p.isDirtyLegend = !0); c && p.redraw(d)
                } var k = this, h = k.series, g = k.graphic, n, p = h.chart, t = h.options; c = b(c, !0); !1 === e ? f() : k.firePointEvent("update", { options: a }, f)
            }, remove: function (a, b) { this.series.removePoint(e(this, this.series.data), a, b) }
        }); q(p.prototype,
            {
                addPoint: function (a, c, d, e) {
                    var f = this.options, k = this.data, h = this.chart, g = this.xAxis, g = g && g.hasNames && g.names, n = f.data, l, p, t = this.xData, x, m; c = b(c, !0); l = { series: this }; this.pointClass.prototype.applyOptions.apply(l, [a]); m = l.x; x = t.length; if (this.requireSorting && m < t[x - 1]) for (p = !0; x && t[x - 1] > m;)x--; this.updateParallelArrays(l, "splice", x, 0, 0); this.updateParallelArrays(l, x); g && l.name && (g[m] = l.name); n.splice(x, 0, a); p && (this.data.splice(x, 0, null), this.processData()); "point" === f.legendType && this.generatePoints();
                    d && (k[0] && k[0].remove ? k[0].remove(!1) : (k.shift(), this.updateParallelArrays(l, "shift"), n.shift())); this.isDirtyData = this.isDirty = !0; c && h.redraw(e)
                }, removePoint: function (a, c, d) { var e = this, f = e.data, k = f[a], h = e.points, g = e.chart, n = function () { h && h.length === f.length && h.splice(a, 1); f.splice(a, 1); e.options.data.splice(a, 1); e.updateParallelArrays(k || { series: e }, "splice", a, 1); k && k.destroy(); e.isDirty = !0; e.isDirtyData = !0; c && g.redraw() }; t(d, g); c = b(c, !0); k ? k.firePointEvent("remove", null, n) : n() }, remove: function (a,
                    c, d) { function e() { f.destroy(); k.isDirtyLegend = k.isDirtyBox = !0; k.linkSeries(); b(a, !0) && k.redraw(c) } var f = this, k = f.chart; !1 !== d ? w(f, "remove", null, e) : e() }, update: function (c, d) {
                        var f = this, h = f.chart, l = f.userOptions, p = f.oldType || f.type, t = c.type || l.type || h.options.chart.type, g = H[p].prototype, x, m = ["group", "markerGroup", "dataLabelsGroup"], u = ["navigatorSeries", "baseSeries"], z = f.finishedAnimating && { animation: !1 }, y = ["data", "name", "turboThreshold"], I = a.keys(c), A = 0 < I.length; r(I, function (a) { -1 === e(a, y) && (A = !1) });
                        if (A) c.data && this.setData(c.data, !1), c.name && this.setName(c.name, !1); else { u = m.concat(u); r(u, function (a) { u[a] = f[a]; delete f[a] }); c = k(l, z, { index: f.index, pointStart: b(l.pointStart, f.xData[0]) }, { data: f.options.data }, c); f.remove(!1, null, !1); for (x in g) f[x] = void 0; H[t || p] ? q(f, H[t || p].prototype) : a.error(17, !0); r(u, function (a) { f[a] = u[a] }); f.init(h, c); c.zIndex !== l.zIndex && r(m, function (a) { f[a] && f[a].attr({ zIndex: c.zIndex }) }); f.oldType = p; h.linkSeries() } w(this, "afterUpdate"); b(d, !0) && h.redraw(!1)
                    }, setName: function (a) {
                    this.name =
                        this.options.name = this.userOptions.name = a; this.chart.isDirtyLegend = !0
                    }
            }); q(E.prototype, {
                update: function (a, c) { var e = this.chart, f = a && a.events || {}; a = k(this.userOptions, a); e.options[this.coll].indexOf && (e.options[this.coll][e.options[this.coll].indexOf(this.userOptions)] = a); d(e.options[this.coll].events, function (a, b) { "undefined" === typeof f[b] && (f[b] = void 0) }); this.destroy(!0); this.init(e, q(a, { events: f })); e.isDirtyBox = !0; b(c, !0) && e.redraw() }, remove: function (a) {
                    for (var c = this.chart, d = this.coll, e = this.series,
                        f = e.length; f--;)e[f] && e[f].remove(!1); y(c.axes, this); y(c[d], this); z(c.options[d]) ? c.options[d].splice(this.options.index, 1) : delete c.options[d]; r(c[d], function (a, b) { a.options.index = a.userOptions.index = b }); this.destroy(); c.isDirtyBox = !0; b(a, !0) && c.redraw()
                }, setTitle: function (a, b) { this.update({ title: a }, b) }, setCategories: function (a, b) { this.update({ categories: a }, b) }
            })
    })(K); (function (a) {
        var C = a.color, D = a.each, E = a.map, m = a.pick, h = a.Series, f = a.seriesType; f("area", "line", { softThreshold: !1, threshold: 0 }, {
            singleStacks: !1,
            getStackPoints: function (f) {
                var h = [], q = [], r = this.xAxis, e = this.yAxis, c = e.stacks[this.stackKey], l = {}, z = this.index, k = e.series, d = k.length, b, u = m(e.options.reversedStacks, !0) ? 1 : -1, p; f = f || this.points; if (this.options.stacking) {
                    for (p = 0; p < f.length; p++)f[p].leftNull = f[p].rightNull = null, l[f[p].x] = f[p]; a.objectEach(c, function (a, b) { null !== a.total && q.push(b) }); q.sort(function (a, b) { return a - b }); b = E(k, function () { return this.visible }); D(q, function (a, f) {
                        var k = 0, t, m; if (l[a] && !l[a].isNull) h.push(l[a]), D([-1, 1], function (e) {
                            var k =
                                1 === e ? "rightNull" : "leftNull", h = 0, n = c[q[f + e]]; if (n) for (p = z; 0 <= p && p < d;)t = n.points[p], t || (p === z ? l[a][k] = !0 : b[p] && (m = c[a].points[p]) && (h -= m[1] - m[0])), p += u; l[a][1 === e ? "rightCliff" : "leftCliff"] = h
                        }); else { for (p = z; 0 <= p && p < d;) { if (t = c[a].points[p]) { k = t[1]; break } p += u } k = e.translate(k, 0, 1, 0, 1); h.push({ isNull: !0, plotX: r.translate(a, 0, 0, 0, 1), x: a, plotY: k, yBottom: k }) }
                    })
                } return h
            }, getGraphPath: function (a) {
                var f = h.prototype.getGraphPath, q = this.options, r = q.stacking, e = this.yAxis, c, l, z = [], k = [], d = this.index, b, u = e.stacks[this.stackKey],
                p = q.threshold, H = e.getThreshold(q.threshold), t, q = q.connectNulls || "percent" === r, L = function (c, f, h) { var l = a[c]; c = r && u[l.x].points[d]; var n = l[h + "Null"] || 0; h = l[h + "Cliff"] || 0; var t, m, l = !0; h || n ? (t = (n ? c[0] : c[1]) + h, m = c[0] + h, l = !!n) : !r && a[f] && a[f].isNull && (t = m = p); void 0 !== t && (k.push({ plotX: b, plotY: null === t ? H : e.getThreshold(t), isNull: l, isCliff: !0 }), z.push({ plotX: b, plotY: null === m ? H : e.getThreshold(m), doCurve: !1 })) }; a = a || this.points; r && (a = this.getStackPoints(a)); for (c = 0; c < a.length; c++)if (l = a[c].isNull, b = m(a[c].rectPlotX,
                    a[c].plotX), t = m(a[c].yBottom, H), !l || q) q || L(c, c - 1, "left"), l && !r && q || (k.push(a[c]), z.push({ x: c, plotX: b, plotY: t })), q || L(c, c + 1, "right"); c = f.call(this, k, !0, !0); z.reversed = !0; l = f.call(this, z, !0, !0); l.length && (l[0] = "L"); l = c.concat(l); f = f.call(this, k, !1, q); l.xMap = c.xMap; this.areaPath = l; return f
            }, drawGraph: function () {
            this.areaPath = []; h.prototype.drawGraph.apply(this); var a = this, f = this.areaPath, q = this.options, w = [["area", "highcharts-area", this.color, q.fillColor]]; D(this.zones, function (e, c) {
                w.push(["zone-area-" +
                    c, "highcharts-area highcharts-zone-area-" + c + " " + e.className, e.color || a.color, e.fillColor || q.fillColor])
            }); D(w, function (e) { var c = e[0], h = a[c]; h ? (h.endX = a.preventGraphAnimation ? null : f.xMap, h.animate({ d: f })) : (h = a[c] = a.chart.renderer.path(f).addClass(e[1]).attr({ fill: m(e[3], C(e[2]).setOpacity(m(q.fillOpacity, .75)).get()), zIndex: 0 }).add(a.group), h.isArea = !0); h.startX = f.xMap; h.shiftUnit = q.step ? 2 : 1 })
            }, drawLegendSymbol: a.LegendSymbolMixin.drawRectangle
        })
    })(K); (function (a) {
        var C = a.pick; a = a.seriesType; a("spline",
            "line", {}, {
                getPointSpline: function (a, E, m) {
                    var h = E.plotX, f = E.plotY, r = a[m - 1]; m = a[m + 1]; var y, q, w, e; if (r && !r.isNull && !1 !== r.doCurve && !E.isCliff && m && !m.isNull && !1 !== m.doCurve && !E.isCliff) {
                        a = r.plotY; w = m.plotX; m = m.plotY; var c = 0; y = (1.5 * h + r.plotX) / 2.5; q = (1.5 * f + a) / 2.5; w = (1.5 * h + w) / 2.5; e = (1.5 * f + m) / 2.5; w !== y && (c = (e - q) * (w - h) / (w - y) + f - e); q += c; e += c; q > a && q > f ? (q = Math.max(a, f), e = 2 * f - q) : q < a && q < f && (q = Math.min(a, f), e = 2 * f - q); e > m && e > f ? (e = Math.max(m, f), q = 2 * f - e) : e < m && e < f && (e = Math.min(m, f), q = 2 * f - e); E.rightContX = w; E.rightContY =
                            e
                    } E = ["C", C(r.rightContX, r.plotX), C(r.rightContY, r.plotY), C(y, h), C(q, f), h, f]; r.rightContX = r.rightContY = null; return E
                }
            })
    })(K); (function (a) { var C = a.seriesTypes.area.prototype, D = a.seriesType; D("areaspline", "spline", a.defaultPlotOptions.area, { getStackPoints: C.getStackPoints, getGraphPath: C.getGraphPath, drawGraph: C.drawGraph, drawLegendSymbol: a.LegendSymbolMixin.drawRectangle }) })(K); (function (a) {
        var C = a.animObject, D = a.color, E = a.each, m = a.extend, h = a.isNumber, f = a.merge, r = a.pick, y = a.Series, q = a.seriesType, w = a.svg;
        q("column", "line", { borderRadius: 0, crisp: !0, groupPadding: .2, marker: null, pointPadding: .1, minPointLength: 0, cropThreshold: 50, pointRange: null, states: { hover: { halo: !1, brightness: .1 }, select: { color: "#cccccc", borderColor: "#000000" } }, dataLabels: { align: null, verticalAlign: null, y: null }, softThreshold: !1, startFromThreshold: !0, stickyTracking: !1, tooltip: { distance: 6 }, threshold: 0, borderColor: "#ffffff" }, {
            cropShoulder: 0, directTouch: !0, trackerGroups: ["group", "dataLabelsGroup"], negStacks: !0, init: function () {
                y.prototype.init.apply(this,
                    arguments); var a = this, c = a.chart; c.hasRendered && E(c.series, function (c) { c.type === a.type && (c.isDirty = !0) })
            }, getColumnMetrics: function () {
                var a = this, c = a.options, f = a.xAxis, h = a.yAxis, k = f.options.reversedStacks, k = f.reversed && !k || !f.reversed && k, d, b = {}, m = 0; !1 === c.grouping ? m = 1 : E(a.chart.series, function (c) {
                    var e = c.options, f = c.yAxis, k; c.type !== a.type || !c.visible && a.chart.options.chart.ignoreHiddenSeries || h.len !== f.len || h.pos !== f.pos || (e.stacking ? (d = c.stackKey, void 0 === b[d] && (b[d] = m++), k = b[d]) : !1 !== e.grouping &&
                        (k = m++), c.columnIndex = k)
                }); var p = Math.min(Math.abs(f.transA) * (f.ordinalSlope || c.pointRange || f.closestPointRange || f.tickInterval || 1), f.len), q = p * c.groupPadding, t = (p - 2 * q) / (m || 1), c = Math.min(c.maxPointWidth || f.len, r(c.pointWidth, t * (1 - 2 * c.pointPadding))); a.columnMetrics = { width: c, offset: (t - c) / 2 + (q + ((a.columnIndex || 0) + (k ? 1 : 0)) * t - p / 2) * (k ? -1 : 1) }; return a.columnMetrics
            }, crispCol: function (a, c, f, h) {
                var e = this.chart, d = this.borderWidth, b = -(d % 2 ? .5 : 0), d = d % 2 ? .5 : 1; e.inverted && e.renderer.isVML && (d += 1); this.options.crisp &&
                    (f = Math.round(a + f) + b, a = Math.round(a) + b, f -= a); h = Math.round(c + h) + d; b = .5 >= Math.abs(c) && .5 < h; c = Math.round(c) + d; h -= c; b && h && (--c, h += 1); return { x: a, y: c, width: f, height: h }
            }, translate: function () {
                var a = this, c = a.chart, f = a.options, h = a.dense = 2 > a.closestPointRange * a.xAxis.transA, h = a.borderWidth = r(f.borderWidth, h ? 0 : 1), k = a.yAxis, d = f.threshold, b = a.translatedThreshold = k.getThreshold(d), m = r(f.minPointLength, 5), p = a.getColumnMetrics(), q = p.width, t = a.barW = Math.max(q, 1 + 2 * h), w = a.pointXOffset = p.offset; c.inverted && (b -= .5); f.pointPadding &&
                    (t = Math.ceil(t)); y.prototype.translate.apply(a); E(a.points, function (e) {
                        var f = r(e.yBottom, b), h = 999 + Math.abs(f), h = Math.min(Math.max(-h, e.plotY), k.len + h), l = e.plotX + w, p = t, u = Math.min(h, f), x, g = Math.max(h, f) - u; m && Math.abs(g) < m && (g = m, x = !k.reversed && !e.negative || k.reversed && e.negative, e.y === d && a.dataMax <= d && k.min < d && (x = !x), u = Math.abs(u - b) > m ? f - m : b - (x ? m : 0)); e.barX = l; e.pointWidth = q; e.tooltipPos = c.inverted ? [k.len + k.pos - c.plotLeft - h, a.xAxis.len - l - p / 2, g] : [l + p / 2, h + k.pos - c.plotTop, g]; e.shapeType = "rect"; e.shapeArgs =
                            a.crispCol.apply(a, e.isNull ? [l, b, p, 0] : [l, u, p, g])
                    })
            }, getSymbol: a.noop, drawLegendSymbol: a.LegendSymbolMixin.drawRectangle, drawGraph: function () { this.group[this.dense ? "addClass" : "removeClass"]("highcharts-dense-data") }, pointAttribs: function (a, c) {
                var e = this.options, h, k = this.pointAttrToOptions || {}; h = k.stroke || "borderColor"; var d = k["stroke-width"] || "borderWidth", b = a && a.color || this.color, m = a && a[h] || e[h] || this.color || b, p = a && a[d] || e[d] || this[d] || 0, k = e.dashStyle; a && this.zones.length && (b = a.getZone(), b = a.options.color ||
                    b && b.color || this.color); c && (a = f(e.states[c], a.options.states && a.options.states[c] || {}), c = a.brightness, b = a.color || void 0 !== c && D(b).brighten(a.brightness).get() || b, m = a[h] || m, p = a[d] || p, k = a.dashStyle || k); h = { fill: b, stroke: m, "stroke-width": p }; k && (h.dashstyle = k); return h
            }, drawPoints: function () {
                var a = this, c = this.chart, l = a.options, m = c.renderer, k = l.animationLimit || 250, d; E(a.points, function (b) {
                    var e = b.graphic, p = e && c.pointCount < k ? "animate" : "attr"; if (h(b.plotY) && null !== b.y) {
                        d = b.shapeArgs; if (e) e[p](f(d)); else b.graphic =
                            e = m[b.shapeType](d).add(b.group || a.group); l.borderRadius && e.attr({ r: l.borderRadius }); e[p](a.pointAttribs(b, b.selected && "select")).shadow(l.shadow, null, l.stacking && !l.borderRadius); e.addClass(b.getClassName(), !0)
                    } else e && (b.graphic = e.destroy())
                })
            }, animate: function (a) {
                var c = this, f = this.yAxis, e = c.options, k = this.chart.inverted, d = {}, b = k ? "translateX" : "translateY", h; w && (a ? (d.scaleY = .001, a = Math.min(f.pos + f.len, Math.max(f.pos, f.toPixels(e.threshold))), k ? d.translateX = a - f.len : d.translateY = a, c.group.attr(d)) :
                    (h = c.group.attr(b), c.group.animate({ scaleY: 1 }, m(C(c.options.animation), { step: function (a, e) { d[b] = h + e.pos * (f.pos - h); c.group.attr(d) } })), c.animate = null))
            }, remove: function () { var a = this, c = a.chart; c.hasRendered && E(c.series, function (c) { c.type === a.type && (c.isDirty = !0) }); y.prototype.remove.apply(a, arguments) }
        })
    })(K); (function (a) { a = a.seriesType; a("bar", "column", null, { inverted: !0 }) })(K); (function (a) {
        var C = a.Series; a = a.seriesType; a("scatter", "line", {
            lineWidth: 0, findNearestPointBy: "xy", marker: { enabled: !0 }, tooltip: {
                headerFormat: '\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e \x3cspan style\x3d"font-size: 0.85em"\x3e {series.name}\x3c/span\x3e\x3cbr/\x3e',
                pointFormat: "x: \x3cb\x3e{point.x}\x3c/b\x3e\x3cbr/\x3ey: \x3cb\x3e{point.y}\x3c/b\x3e\x3cbr/\x3e"
            }
        }, { sorted: !1, requireSorting: !1, noSharedTooltip: !0, trackerGroups: ["group", "markerGroup", "dataLabelsGroup"], takeOrdinalPosition: !1, drawGraph: function () { this.options.lineWidth && C.prototype.drawGraph.call(this) } })
    })(K); (function (a) {
        var C = a.deg2rad, D = a.isNumber, E = a.pick, m = a.relativeLength; a.CenteredSeriesMixin = {
            getCenter: function () {
                var a = this.options, f = this.chart, r = 2 * (a.slicedOffset || 0), y = f.plotWidth - 2 * r,
                f = f.plotHeight - 2 * r, q = a.center, q = [E(q[0], "50%"), E(q[1], "50%"), a.size || "100%", a.innerSize || 0], w = Math.min(y, f), e, c; for (e = 0; 4 > e; ++e)c = q[e], a = 2 > e || 2 === e && /%$/.test(c), q[e] = m(c, [y, f, w, q[2]][e]) + (a ? r : 0); q[3] > q[2] && (q[3] = q[2]); return q
            }, getStartAndEndRadians: function (a, f) { a = D(a) ? a : 0; f = D(f) && f > a && 360 > f - a ? f : a + 360; return { start: C * (a + -90), end: C * (f + -90) } }
        }
    })(K); (function (a) {
        var C = a.addEvent, D = a.CenteredSeriesMixin, E = a.defined, m = a.each, h = a.extend, f = D.getStartAndEndRadians, r = a.inArray, y = a.noop, q = a.pick, w = a.Point,
        e = a.Series, c = a.seriesType, l = a.setAnimation; c("pie", "line", { center: [null, null], clip: !1, colorByPoint: !0, dataLabels: { allowOverlap: !0, distance: 30, enabled: !0, formatter: function () { return this.point.isNull ? void 0 : this.point.name }, x: 0 }, ignoreHiddenPoint: !0, legendType: "point", marker: null, size: null, showInLegend: !1, slicedOffset: 10, stickyTracking: !1, tooltip: { followPointer: !0 }, borderColor: "#ffffff", borderWidth: 1, states: { hover: { brightness: .1 } } }, {
            isCartesian: !1, requireSorting: !1, directTouch: !0, noSharedTooltip: !0,
            trackerGroups: ["group", "dataLabelsGroup"], axisTypes: [], pointAttribs: a.seriesTypes.column.prototype.pointAttribs, animate: function (a) { var c = this, d = c.points, b = c.startAngleRad; a || (m(d, function (a) { var d = a.graphic, f = a.shapeArgs; d && (d.attr({ r: a.startR || c.center[3] / 2, start: b, end: b }), d.animate({ r: f.r, start: f.start, end: f.end }, c.options.animation)) }), c.animate = null) }, updateTotals: function () {
                var a, c = 0, d = this.points, b = d.length, f, e = this.options.ignoreHiddenPoint; for (a = 0; a < b; a++)f = d[a], c += e && !f.visible ? 0 : f.isNull ?
                    0 : f.y; this.total = c; for (a = 0; a < b; a++)f = d[a], f.percentage = 0 < c && (f.visible || !e) ? f.y / c * 100 : 0, f.total = c
            }, generatePoints: function () { e.prototype.generatePoints.call(this); this.updateTotals() }, translate: function (a) {
                this.generatePoints(); var c = 0, d = this.options, b = d.slicedOffset, e = b + (d.borderWidth || 0), h, l, t, m = f(d.startAngle, d.endAngle), x = this.startAngleRad = m.start, m = (this.endAngleRad = m.end) - x, r = this.points, n, w = d.dataLabels.distance, d = d.ignoreHiddenPoint, z, y = r.length, F; a || (this.center = a = this.getCenter()); this.getX =
                    function (b, c, d) { t = Math.asin(Math.min((b - a[1]) / (a[2] / 2 + d.labelDistance), 1)); return a[0] + (c ? -1 : 1) * Math.cos(t) * (a[2] / 2 + d.labelDistance) }; for (z = 0; z < y; z++) {
                        F = r[z]; F.labelDistance = q(F.options.dataLabels && F.options.dataLabels.distance, w); this.maxLabelDistance = Math.max(this.maxLabelDistance || 0, F.labelDistance); h = x + c * m; if (!d || F.visible) c += F.percentage / 100; l = x + c * m; F.shapeType = "arc"; F.shapeArgs = { x: a[0], y: a[1], r: a[2] / 2, innerR: a[3] / 2, start: Math.round(1E3 * h) / 1E3, end: Math.round(1E3 * l) / 1E3 }; t = (l + h) / 2; t > 1.5 * Math.PI ?
                            t -= 2 * Math.PI : t < -Math.PI / 2 && (t += 2 * Math.PI); F.slicedTranslation = { translateX: Math.round(Math.cos(t) * b), translateY: Math.round(Math.sin(t) * b) }; l = Math.cos(t) * a[2] / 2; n = Math.sin(t) * a[2] / 2; F.tooltipPos = [a[0] + .7 * l, a[1] + .7 * n]; F.half = t < -Math.PI / 2 || t > Math.PI / 2 ? 1 : 0; F.angle = t; h = Math.min(e, F.labelDistance / 5); F.labelPos = [a[0] + l + Math.cos(t) * F.labelDistance, a[1] + n + Math.sin(t) * F.labelDistance, a[0] + l + Math.cos(t) * h, a[1] + n + Math.sin(t) * h, a[0] + l, a[1] + n, 0 > F.labelDistance ? "center" : F.half ? "right" : "left", t]
                    }
            }, drawGraph: null,
            drawPoints: function () {
                var a = this, c = a.chart.renderer, d, b, f, e, l = a.options.shadow; l && !a.shadowGroup && (a.shadowGroup = c.g("shadow").add(a.group)); m(a.points, function (k) {
                    b = k.graphic; if (k.isNull) b && (k.graphic = b.destroy()); else {
                        e = k.shapeArgs; d = k.getTranslate(); var t = k.shadowGroup; l && !t && (t = k.shadowGroup = c.g("shadow").add(a.shadowGroup)); t && t.attr(d); f = a.pointAttribs(k, k.selected && "select"); b ? b.setRadialReference(a.center).attr(f).animate(h(e, d)) : (k.graphic = b = c[k.shapeType](e).setRadialReference(a.center).attr(d).add(a.group),
                            b.attr(f).attr({ "stroke-linejoin": "round" }).shadow(l, t)); b.attr({ visibility: k.visible ? "inherit" : "hidden" }); b.addClass(k.getClassName())
                    }
                })
            }, searchPoint: y, sortByAngle: function (a, c) { a.sort(function (a, b) { return void 0 !== a.angle && (b.angle - a.angle) * c }) }, drawLegendSymbol: a.LegendSymbolMixin.drawRectangle, getCenter: D.getCenter, getSymbol: y
        }, {
            init: function () {
                w.prototype.init.apply(this, arguments); var a = this, c; a.name = q(a.name, "Slice"); c = function (c) { a.slice("select" === c.type) }; C(a, "select", c); C(a, "unselect",
                    c); return a
            }, isValid: function () { return a.isNumber(this.y, !0) && 0 <= this.y }, setVisible: function (a, c) { var d = this, b = d.series, f = b.chart, e = b.options.ignoreHiddenPoint; c = q(c, e); a !== d.visible && (d.visible = d.options.visible = a = void 0 === a ? !d.visible : a, b.options.data[r(d, b.data)] = d.options, m(["graphic", "dataLabel", "connector", "shadowGroup"], function (b) { if (d[b]) d[b][a ? "show" : "hide"](!0) }), d.legendItem && f.legend.colorizeItem(d, a), a || "hover" !== d.state || d.setState(""), e && (b.isDirty = !0), c && f.redraw()) }, slice: function (a,
                c, d) { var b = this.series; l(d, b.chart); q(c, !0); this.sliced = this.options.sliced = E(a) ? a : !this.sliced; b.options.data[r(this, b.data)] = this.options; this.graphic.animate(this.getTranslate()); this.shadowGroup && this.shadowGroup.animate(this.getTranslate()) }, getTranslate: function () { return this.sliced ? this.slicedTranslation : { translateX: 0, translateY: 0 } }, haloPath: function (a) {
                    var c = this.shapeArgs; return this.sliced || !this.visible ? [] : this.series.chart.renderer.symbols.arc(c.x, c.y, c.r + a, c.r + a, {
                        innerR: this.shapeArgs.r -
                            1, start: c.start, end: c.end
                    })
                }
            })
    })(K); (function (a) {
        var C = a.addEvent, D = a.arrayMax, E = a.defined, m = a.each, h = a.extend, f = a.format, r = a.map, y = a.merge, q = a.noop, w = a.pick, e = a.relativeLength, c = a.Series, l = a.seriesTypes, z = a.some, k = a.stableSort; a.distribute = function (c, b, f) {
            function d(a, b) { return a.target - b.target } var e, h = !0, l = c, x = [], q; q = 0; var n = l.reducedLen || b; for (e = c.length; e--;)q += c[e].size; if (q > n) { k(c, function (a, b) { return (b.rank || 0) - (a.rank || 0) }); for (q = e = 0; q <= n;)q += c[e].size, e++; x = c.splice(e - 1, c.length) } k(c, d);
            for (c = r(c, function (a) { return { size: a.size, targets: [a.target], align: w(a.align, .5) } }); h;) { for (e = c.length; e--;)h = c[e], q = (Math.min.apply(0, h.targets) + Math.max.apply(0, h.targets)) / 2, h.pos = Math.min(Math.max(0, q - h.size * h.align), b - h.size); e = c.length; for (h = !1; e--;)0 < e && c[e - 1].pos + c[e - 1].size > c[e].pos && (c[e - 1].size += c[e].size, c[e - 1].targets = c[e - 1].targets.concat(c[e].targets), c[e - 1].align = .5, c[e - 1].pos + c[e - 1].size > b && (c[e - 1].pos = b - c[e - 1].size), c.splice(e, 1), h = !0) } l.push.apply(l, x); e = 0; z(c, function (c) {
                var d =
                    0; if (z(c.targets, function () { l[e].pos = c.pos + d; if (Math.abs(l[e].pos - l[e].target) > f) return m(l.slice(0, e + 1), function (a) { delete a.pos }), l.reducedLen = (l.reducedLen || b) - .1 * b, l.reducedLen > .1 * b && a.distribute(l, b, f), !0; d += l[e].size; e++ })) return !0
            }); k(l, d)
        }; c.prototype.drawDataLabels = function () {
            function c(a, b) { var c = b.filter; return c ? (b = c.operator, a = a[c.property], c = c.value, "\x3e" === b && a > c || "\x3c" === b && a < c || "\x3e\x3d" === b && a >= c || "\x3c\x3d" === b && a <= c || "\x3d\x3d" === b && a == c || "\x3d\x3d\x3d" === b && a === c ? !0 : !1) : !0 }
            var b = this, e = b.chart, k = b.options, h = k.dataLabels, l = b.points, q, x, r = b.hasRendered || 0, n, z, B = w(h.defer, !!k.animation), D = e.renderer; if (h.enabled || b._hasPointLabels) b.dlProcessOptions && b.dlProcessOptions(h), z = b.plotGroup("dataLabelsGroup", "data-labels", B && !r ? "hidden" : "visible", h.zIndex || 6), B && (z.attr({ opacity: +r }), r || C(b, "afterAnimate", function () { b.visible && z.show(!0); z[k.animation ? "animate" : "attr"]({ opacity: 1 }, { duration: 200 }) })), x = h, m(l, function (d) {
                var g, l = d.dataLabel, t, p, m = d.connector, u = !l, r; q = d.dlOptions ||
                    d.options && d.options.dataLabels; (g = w(q && q.enabled, x.enabled) && !d.isNull) && (g = !0 === c(d, q || h)); g && (h = y(x, q), t = d.getLabelConfig(), r = h[d.formatPrefix + "Format"] || h.format, n = E(r) ? f(r, t, e.time) : (h[d.formatPrefix + "Formatter"] || h.formatter).call(t, h), r = h.style, t = h.rotation, r.color = w(h.color, r.color, b.color, "#000000"), "contrast" === r.color && (d.contrastColor = D.getContrast(d.color || b.color), r.color = h.inside || 0 > w(d.labelDistance, h.distance) || k.stacking ? d.contrastColor : "#000000"), k.cursor && (r.cursor = k.cursor), p =
                        { fill: h.backgroundColor, stroke: h.borderColor, "stroke-width": h.borderWidth, r: h.borderRadius || 0, rotation: t, padding: h.padding, zIndex: 1 }, a.objectEach(p, function (a, b) { void 0 === a && delete p[b] })); !l || g && E(n) ? g && E(n) && (l ? p.text = n : (l = d.dataLabel = t ? D.text(n, 0, -9999, h.useHTML).addClass("highcharts-data-label") : D.label(n, 0, -9999, h.shape, null, null, h.useHTML, null, "data-label"), l.addClass(" highcharts-data-label-color-" + d.colorIndex + " " + (h.className || "") + (h.useHTML ? " highcharts-tracker" : ""))), l.attr(p), l.css(r).shadow(h.shadow),
                            l.added || l.add(z), b.alignDataLabel(d, l, h, null, u)) : (d.dataLabel = l = l.destroy(), m && (d.connector = m.destroy()))
            }); a.fireEvent(this, "afterDrawDataLabels")
        }; c.prototype.alignDataLabel = function (a, b, c, e, f) {
            var d = this.chart, k = d.inverted, l = w(a.dlBox && a.dlBox.centerX, a.plotX, -9999), m = w(a.plotY, -9999), n = b.getBBox(), p, q = c.rotation, r = c.align, u = this.visible && (a.series.forceDL || d.isInsidePlot(l, Math.round(m), k) || e && d.isInsidePlot(l, k ? e.x + 1 : e.y + e.height - 1, k)), g = "justify" === w(c.overflow, "justify"); if (u && (p = c.style.fontSize,
                p = d.renderer.fontMetrics(p, b).b, e = h({ x: k ? this.yAxis.len - m : l, y: Math.round(k ? this.xAxis.len - l : m), width: 0, height: 0 }, e), h(c, { width: n.width, height: n.height }), q ? (g = !1, l = d.renderer.rotCorr(p, q), l = { x: e.x + c.x + e.width / 2 + l.x, y: e.y + c.y + { top: 0, middle: .5, bottom: 1 }[c.verticalAlign] * e.height }, b[f ? "attr" : "animate"](l).attr({ align: r }), m = (q + 720) % 360, m = 180 < m && 360 > m, "left" === r ? l.y -= m ? n.height : 0 : "center" === r ? (l.x -= n.width / 2, l.y -= n.height / 2) : "right" === r && (l.x -= n.width, l.y -= m ? 0 : n.height), b.placed = !0, b.alignAttr = l) : (b.align(c,
                    null, e), l = b.alignAttr), g && 0 <= e.height ? a.isLabelJustified = this.justifyDataLabel(b, c, l, n, e, f) : w(c.crop, !0) && (u = d.isInsidePlot(l.x, l.y) && d.isInsidePlot(l.x + n.width, l.y + n.height)), c.shape && !q)) b[f ? "attr" : "animate"]({ anchorX: k ? d.plotWidth - a.plotY : a.plotX, anchorY: k ? d.plotHeight - a.plotX : a.plotY }); u || (b.attr({ y: -9999 }), b.placed = !1)
        }; c.prototype.justifyDataLabel = function (a, b, c, e, f, k) {
            var d = this.chart, h = b.align, l = b.verticalAlign, n, m, t = a.box ? 0 : a.padding || 0; n = c.x + t; 0 > n && ("right" === h ? b.align = "left" : b.x = -n, m = !0);
            n = c.x + e.width - t; n > d.plotWidth && ("left" === h ? b.align = "right" : b.x = d.plotWidth - n, m = !0); n = c.y + t; 0 > n && ("bottom" === l ? b.verticalAlign = "top" : b.y = -n, m = !0); n = c.y + e.height - t; n > d.plotHeight && ("top" === l ? b.verticalAlign = "bottom" : b.y = d.plotHeight - n, m = !0); m && (a.placed = !k, a.align(b, null, f)); return m
        }; l.pie && (l.pie.prototype.drawDataLabels = function () {
            var d = this, b = d.data, e, f = d.chart, k = d.options.dataLabels, h = w(k.connectorPadding, 10), l = w(k.connectorWidth, 1), q = f.plotWidth, r = f.plotHeight, n = Math.round(f.chartWidth / 3), y, z =
                d.center, C = z[2] / 2, F = z[1], g, v, K, Q, J = [[], []], O, N, A, R, S = [0, 0, 0, 0]; d.visible && (k.enabled || d._hasPointLabels) && (m(b, function (a) { a.dataLabel && a.visible && a.dataLabel.shortened && (a.dataLabel.attr({ width: "auto" }).css({ width: "auto", textOverflow: "clip" }), a.dataLabel.shortened = !1) }), c.prototype.drawDataLabels.apply(d), m(b, function (a) {
                a.dataLabel && (a.visible ? (J[a.half].push(a), a.dataLabel._pos = null, !E(k.style.width) && !E(a.options.dataLabels && a.options.dataLabels.style && a.options.dataLabels.style.width) && a.dataLabel.getBBox().width >
                    n && (a.dataLabel.css({ width: .7 * n }), a.dataLabel.shortened = !0)) : a.dataLabel = a.dataLabel.destroy())
                }), m(J, function (b, c) {
                    var l, n, t = b.length, p = [], x; if (t) for (d.sortByAngle(b, c - .5), 0 < d.maxLabelDistance && (l = Math.max(0, F - C - d.maxLabelDistance), n = Math.min(F + C + d.maxLabelDistance, f.plotHeight), m(b, function (a) {
                    0 < a.labelDistance && a.dataLabel && (a.top = Math.max(0, F - C - a.labelDistance), a.bottom = Math.min(F + C + a.labelDistance, f.plotHeight), x = a.dataLabel.getBBox().height || 21, a.distributeBox = {
                        target: a.labelPos[1] - a.top + x /
                            2, size: x, rank: a.y
                    }, p.push(a.distributeBox))
                    }), l = n + x - l, a.distribute(p, l, l / 5)), R = 0; R < t; R++)e = b[R], K = e.labelPos, g = e.dataLabel, A = !1 === e.visible ? "hidden" : "inherit", N = l = K[1], p && E(e.distributeBox) && (void 0 === e.distributeBox.pos ? A = "hidden" : (Q = e.distributeBox.size, N = e.top + e.distributeBox.pos)), delete e.positionIndex, O = k.justify ? z[0] + (c ? -1 : 1) * (C + e.labelDistance) : d.getX(N < e.top + 2 || N > e.bottom - 2 ? l : N, c, e), g._attr = { visibility: A, align: K[6] }, g._pos = { x: O + k.x + ({ left: h, right: -h }[K[6]] || 0), y: N + k.y - 10 }, K.x = O, K.y = N, w(k.crop,
                        !0) && (v = g.getBBox().width, l = null, O - v < h && 1 === c ? (l = Math.round(v - O + h), S[3] = Math.max(l, S[3])) : O + v > q - h && 0 === c && (l = Math.round(O + v - q + h), S[1] = Math.max(l, S[1])), 0 > N - Q / 2 ? S[0] = Math.max(Math.round(-N + Q / 2), S[0]) : N + Q / 2 > r && (S[2] = Math.max(Math.round(N + Q / 2 - r), S[2])), g.sideOverflow = l)
                }), 0 === D(S) || this.verifyDataLabelOverflow(S)) && (this.placeDataLabels(), l && m(this.points, function (a) {
                    var b; y = a.connector; if ((g = a.dataLabel) && g._pos && a.visible && 0 < a.labelDistance) {
                        A = g._attr.visibility; if (b = !y) a.connector = y = f.renderer.path().addClass("highcharts-data-label-connector  highcharts-color-" +
                            a.colorIndex + (a.className ? " " + a.className : "")).add(d.dataLabelsGroup), y.attr({ "stroke-width": l, stroke: k.connectorColor || a.color || "#666666" }); y[b ? "attr" : "animate"]({ d: d.connectorPath(a.labelPos) }); y.attr("visibility", A)
                    } else y && (a.connector = y.destroy())
                }))
        }, l.pie.prototype.connectorPath = function (a) {
            var b = a.x, c = a.y; return w(this.options.dataLabels.softConnector, !0) ? ["M", b + ("left" === a[6] ? 5 : -5), c, "C", b, c, 2 * a[2] - a[4], 2 * a[3] - a[5], a[2], a[3], "L", a[4], a[5]] : ["M", b + ("left" === a[6] ? 5 : -5), c, "L", a[2], a[3], "L",
                a[4], a[5]]
        }, l.pie.prototype.placeDataLabels = function () { m(this.points, function (a) { var b = a.dataLabel; b && a.visible && ((a = b._pos) ? (b.sideOverflow && (b._attr.width = b.getBBox().width - b.sideOverflow, b.css({ width: b._attr.width + "px", textOverflow: (this.options.dataLabels.style || {}).textOverflow || "ellipsis" }), b.shortened = !0), b.attr(b._attr), b[b.moved ? "animate" : "attr"](a), b.moved = !0) : b && b.attr({ y: -9999 })) }, this) }, l.pie.prototype.alignDataLabel = q, l.pie.prototype.verifyDataLabelOverflow = function (a) {
            var b = this.center,
            c = this.options, d = c.center, f = c.minSize || 80, k, h = null !== c.size; h || (null !== d[0] ? k = Math.max(b[2] - Math.max(a[1], a[3]), f) : (k = Math.max(b[2] - a[1] - a[3], f), b[0] += (a[3] - a[1]) / 2), null !== d[1] ? k = Math.max(Math.min(k, b[2] - Math.max(a[0], a[2])), f) : (k = Math.max(Math.min(k, b[2] - a[0] - a[2]), f), b[1] += (a[0] - a[2]) / 2), k < b[2] ? (b[2] = k, b[3] = Math.min(e(c.innerSize || 0, k), k), this.translate(b), this.drawDataLabels && this.drawDataLabels()) : h = !0); return h
        }); l.column && (l.column.prototype.alignDataLabel = function (a, b, e, f, k) {
            var d = this.chart.inverted,
            h = a.series, l = a.dlBox || a.shapeArgs, m = w(a.below, a.plotY > w(this.translatedThreshold, h.yAxis.len)), n = w(e.inside, !!this.options.stacking); l && (f = y(l), 0 > f.y && (f.height += f.y, f.y = 0), l = f.y + f.height - h.yAxis.len, 0 < l && (f.height -= l), d && (f = { x: h.yAxis.len - f.y - f.height, y: h.xAxis.len - f.x - f.width, width: f.height, height: f.width }), n || (d ? (f.x += m ? 0 : f.width, f.width = 0) : (f.y += m ? f.height : 0, f.height = 0))); e.align = w(e.align, !d || n ? "center" : m ? "right" : "left"); e.verticalAlign = w(e.verticalAlign, d || n ? "middle" : m ? "top" : "bottom"); c.prototype.alignDataLabel.call(this,
                a, b, e, f, k); a.isLabelJustified && a.contrastColor && a.dataLabel.css({ color: a.contrastColor })
        })
    })(K); (function (a) {
        var C = a.Chart, D = a.each, E = a.objectEach, m = a.pick; a = a.addEvent; a(C, "render", function () {
            var a = []; D(this.labelCollectors || [], function (f) { a = a.concat(f()) }); D(this.yAxis || [], function (f) { f.options.stackLabels && !f.options.stackLabels.allowOverlap && E(f.stacks, function (f) { E(f, function (f) { a.push(f.label) }) }) }); D(this.series || [], function (f) {
                var h = f.options.dataLabels, y = f.dataLabelCollections || ["dataLabel"];
                (h.enabled || f._hasPointLabels) && !h.allowOverlap && f.visible && D(y, function (h) { D(f.points, function (f) { f[h] && (f[h].labelrank = m(f.labelrank, f.shapeArgs && f.shapeArgs.height), a.push(f[h])) }) })
            }); this.hideOverlappingLabels(a)
        }); C.prototype.hideOverlappingLabels = function (a) {
            var f = a.length, h = this.renderer, m, q, w, e, c, l, z = function (a, c, b, e, f, h, l, m) { return !(f > a + b || f + l < a || h > c + e || h + m < c) }; w = function (a) {
                var c, b, e, f = 2 * (a.box ? 0 : a.padding || 0); e = 0; if (a && (!a.alignAttr || a.placed)) return c = a.alignAttr || { x: a.attr("x"), y: a.attr("y") },
                    b = a.parentGroup, a.width || (e = a.getBBox(), a.width = e.width, a.height = e.height, e = h.fontMetrics(null, a.element).h), { x: c.x + (b.translateX || 0), y: c.y + (b.translateY || 0) - e, width: a.width - f, height: a.height - f }
            }; for (q = 0; q < f; q++)if (m = a[q]) m.oldOpacity = m.opacity, m.newOpacity = 1, m.absoluteBox = w(m); a.sort(function (a, c) { return (c.labelrank || 0) - (a.labelrank || 0) }); for (q = 0; q < f; q++)for (l = (w = a[q]) && w.absoluteBox, m = q + 1; m < f; ++m)if (c = (e = a[m]) && e.absoluteBox, l && c && w !== e && 0 !== w.newOpacity && 0 !== e.newOpacity && (c = z(l.x, l.y, l.width,
                l.height, c.x, c.y, c.width, c.height))) (w.labelrank < e.labelrank ? w : e).newOpacity = 0; D(a, function (a) { var c, b; a && (b = a.newOpacity, a.oldOpacity !== b && (a.alignAttr && a.placed ? (b ? a.show(!0) : c = function () { a.hide() }, a.alignAttr.opacity = b, a[a.isOld ? "animate" : "attr"](a.alignAttr, null, c)) : a.attr({ opacity: b })), a.isOld = !0) })
        }
    })(K); (function (a) {
        var C = a.addEvent, D = a.Chart, E = a.createElement, m = a.css, h = a.defaultOptions, f = a.defaultPlotOptions, r = a.each, y = a.extend, q = a.fireEvent, w = a.hasTouch, e = a.inArray, c = a.isObject, l = a.Legend,
        z = a.merge, k = a.pick, d = a.Point, b = a.Series, u = a.seriesTypes, p = a.svg, H; H = a.TrackerMixin = {
            drawTrackerPoint: function () {
                var a = this, b = a.chart.pointer, c = function (a) { var c = b.getPointFromEvent(a); void 0 !== c && (b.isDirectTouch = !0, c.onMouseOver(a)) }; r(a.points, function (a) { a.graphic && (a.graphic.element.point = a); a.dataLabel && (a.dataLabel.div ? a.dataLabel.div.point = a : a.dataLabel.element.point = a) }); a._hasTracking || (r(a.trackerGroups, function (d) {
                    if (a[d]) {
                        a[d].addClass("highcharts-tracker").on("mouseover", c).on("mouseout",
                            function (a) { b.onTrackerMouseOut(a) }); if (w) a[d].on("touchstart", c); a.options.cursor && a[d].css(m).css({ cursor: a.options.cursor })
                    }
                }), a._hasTracking = !0); q(this, "afterDrawTracker")
            }, drawTrackerGraph: function () {
                var a = this, b = a.options, c = b.trackByArea, d = [].concat(c ? a.areaPath : a.graphPath), e = d.length, f = a.chart, h = f.pointer, k = f.renderer, l = f.options.tooltip.snap, g = a.tracker, m, u = function () { if (f.hoverSeries !== a) a.onMouseOver() }, y = "rgba(192,192,192," + (p ? .0001 : .002) + ")"; if (e && !c) for (m = e + 1; m--;)"M" === d[m] && d.splice(m +
                    1, 0, d[m + 1] - l, d[m + 2], "L"), (m && "M" === d[m] || m === e) && d.splice(m, 0, "L", d[m - 2] + l, d[m - 1]); g ? g.attr({ d: d }) : a.graph && (a.tracker = k.path(d).attr({ "stroke-linejoin": "round", visibility: a.visible ? "visible" : "hidden", stroke: y, fill: c ? y : "none", "stroke-width": a.graph.strokeWidth() + (c ? 0 : 2 * l), zIndex: 2 }).add(a.group), r([a.tracker, a.markerGroup], function (a) { a.addClass("highcharts-tracker").on("mouseover", u).on("mouseout", function (a) { h.onTrackerMouseOut(a) }); b.cursor && a.css({ cursor: b.cursor }); if (w) a.on("touchstart", u) }));
                q(this, "afterDrawTracker")
            }
        }; u.column && (u.column.prototype.drawTracker = H.drawTrackerPoint); u.pie && (u.pie.prototype.drawTracker = H.drawTrackerPoint); u.scatter && (u.scatter.prototype.drawTracker = H.drawTrackerPoint); y(l.prototype, {
            setItemEvents: function (a, b, c) {
                var e = this, f = e.chart.renderer.boxWrapper, h = "highcharts-legend-" + (a instanceof d ? "point" : "series") + "-active"; (c ? b : a.legendGroup).on("mouseover", function () { a.setState("hover"); f.addClass(h); b.css(e.options.itemHoverStyle) }).on("mouseout", function () {
                    b.css(z(a.visible ?
                        e.itemStyle : e.itemHiddenStyle)); f.removeClass(h); a.setState()
                }).on("click", function (b) { var c = function () { a.setVisible && a.setVisible() }; f.removeClass(h); b = { browserEvent: b }; a.firePointEvent ? a.firePointEvent("legendItemClick", b, c) : q(a, "legendItemClick", b, c) })
            }, createCheckboxForItem: function (a) {
            a.checkbox = E("input", { type: "checkbox", className: "highcharts-legend-checkbox", checked: a.selected, defaultChecked: a.selected }, this.options.itemCheckboxStyle, this.chart.container); C(a.checkbox, "click", function (b) {
                q(a.series ||
                    a, "checkboxClick", { checked: b.target.checked, item: a }, function () { a.select() })
            })
            }
        }); h.legend.itemStyle.cursor = "pointer"; y(D.prototype, {
            showResetZoom: function () {
                function a() { b.zoomOut() } var b = this, c = h.lang, d = b.options.chart.resetZoomButton, e = d.theme, f = e.states, k = "chart" === d.relativeTo ? null : "plotBox"; q(this, "beforeShowResetZoom", null, function () {
                b.resetZoomButton = b.renderer.button(c.resetZoom, null, null, a, e, f && f.hover).attr({ align: d.position.align, title: c.resetZoomTitle }).addClass("highcharts-reset-zoom").add().align(d.position,
                    !1, k)
                })
            }, zoomOut: function () { q(this, "selection", { resetSelection: !0 }, this.zoom) }, zoom: function (a) { var b, d = this.pointer, e = !1, f; !a || a.resetSelection ? (r(this.axes, function (a) { b = a.zoom() }), d.initiated = !1) : r(a.xAxis.concat(a.yAxis), function (a) { var c = a.axis; d[c.isXAxis ? "zoomX" : "zoomY"] && (b = c.zoom(a.min, a.max), c.displayBtn && (e = !0)) }); f = this.resetZoomButton; e && !f ? this.showResetZoom() : !e && c(f) && (this.resetZoomButton = f.destroy()); b && this.redraw(k(this.options.chart.animation, a && a.animation, 100 > this.pointCount)) },
            pan: function (a, b) {
                var c = this, d = c.hoverPoints, e; d && r(d, function (a) { a.setState() }); r("xy" === b ? [1, 0] : [1], function (b) {
                    b = c[b ? "xAxis" : "yAxis"][0]; var d = b.horiz, f = a[d ? "chartX" : "chartY"], d = d ? "mouseDownX" : "mouseDownY", h = c[d], g = (b.pointRange || 0) / 2, k = b.reversed && !c.inverted || !b.reversed && c.inverted ? -1 : 1, l = b.getExtremes(), n = b.toValue(h - f, !0) + g * k, k = b.toValue(h + b.len - f, !0) - g * k, m = k < n, h = m ? k : n, n = m ? n : k, k = Math.min(l.dataMin, g ? l.min : b.toValue(b.toPixels(l.min) - b.minPixelPadding)), g = Math.max(l.dataMax, g ? l.max : b.toValue(b.toPixels(l.max) +
                        b.minPixelPadding)), m = k - h; 0 < m && (n += m, h = k); m = n - g; 0 < m && (n = g, h -= m); b.series.length && h !== l.min && n !== l.max && (b.setExtremes(h, n, !1, !1, { trigger: "pan" }), e = !0); c[d] = f
                }); e && c.redraw(!1); m(c.container, { cursor: "move" })
            }
        }); y(d.prototype, {
            select: function (a, b) {
                var c = this, d = c.series, f = d.chart; a = k(a, !c.selected); c.firePointEvent(a ? "select" : "unselect", { accumulate: b }, function () {
                c.selected = c.options.selected = a; d.options.data[e(c, d.data)] = c.options; c.setState(a && "select"); b || r(f.getSelectedPoints(), function (a) {
                a.selected &&
                    a !== c && (a.selected = a.options.selected = !1, d.options.data[e(a, d.data)] = a.options, a.setState(""), a.firePointEvent("unselect"))
                })
                })
            }, onMouseOver: function (a) { var b = this.series.chart, c = b.pointer; a = a ? c.normalize(a) : c.getChartCoordinatesFromPoint(this, b.inverted); c.runPointActions(a, this) }, onMouseOut: function () { var a = this.series.chart; this.firePointEvent("mouseOut"); r(a.hoverPoints || [], function (a) { a.setState() }); a.hoverPoints = a.hoverPoint = null }, importEvents: function () {
                if (!this.hasImportedEvents) {
                    var b = this,
                    c = z(b.series.options.point, b.options).events; b.events = c; a.objectEach(c, function (a, c) { C(b, c, a) }); this.hasImportedEvents = !0
                }
            }, setState: function (a, b) {
                var c = Math.floor(this.plotX), d = this.plotY, e = this.series, h = e.options.states[a || "normal"] || {}, l = f[e.type].marker && e.options.marker, m = l && !1 === l.enabled, p = l && l.states && l.states[a || "normal"] || {}, g = !1 === p.enabled, t = e.stateMarkerGraphic, r = this.marker || {}, u = e.chart, w = e.halo, z, C = l && e.markerAttribs; a = a || ""; if (!(a === this.state && !b || this.selected && "select" !== a || !1 ===
                    h.enabled || a && (g || m && !1 === p.enabled) || a && r.states && r.states[a] && !1 === r.states[a].enabled)) {
                        C && (z = e.markerAttribs(this, a)); if (this.graphic) this.state && this.graphic.removeClass("highcharts-point-" + this.state), a && this.graphic.addClass("highcharts-point-" + a), this.graphic.animate(e.pointAttribs(this, a), k(u.options.chart.animation, h.animation)), z && this.graphic.animate(z, k(u.options.chart.animation, p.animation, l.animation)), t && t.hide(); else {
                            if (a && p) {
                                l = r.symbol || e.symbol; t && t.currentSymbol !== l && (t = t.destroy());
                                if (t) t[b ? "animate" : "attr"]({ x: z.x, y: z.y }); else l && (e.stateMarkerGraphic = t = u.renderer.symbol(l, z.x, z.y, z.width, z.height).add(e.markerGroup), t.currentSymbol = l); t && t.attr(e.pointAttribs(this, a))
                            } t && (t[a && u.isInsidePlot(c, d, u.inverted) ? "show" : "hide"](), t.element.point = this)
                        } (c = h.halo) && c.size ? (w || (e.halo = w = u.renderer.path().add((this.graphic || t).parentGroup)), w.show()[b ? "animate" : "attr"]({ d: this.haloPath(c.size) }), w.attr({
                            "class": "highcharts-halo highcharts-color-" + k(this.colorIndex, e.colorIndex) + (this.className ?
                                " " + this.className : ""), zIndex: -1
                        }), w.point = this, w.attr(y({ fill: this.color || e.color, "fill-opacity": c.opacity }, c.attributes))) : w && w.point && w.point.haloPath && w.animate({ d: w.point.haloPath(0) }, null, w.hide); this.state = a; q(this, "afterSetState")
                }
            }, haloPath: function (a) { return this.series.chart.renderer.symbols.circle(Math.floor(this.plotX) - a, this.plotY - a, 2 * a, 2 * a) }
        }); y(b.prototype, {
            onMouseOver: function () {
                var a = this.chart, b = a.hoverSeries; if (b && b !== this) b.onMouseOut(); this.options.events.mouseOver && q(this, "mouseOver");
                this.setState("hover"); a.hoverSeries = this
            }, onMouseOut: function () { var a = this.options, b = this.chart, c = b.tooltip, d = b.hoverPoint; b.hoverSeries = null; if (d) d.onMouseOut(); this && a.events.mouseOut && q(this, "mouseOut"); !c || this.stickyTracking || c.shared && !this.noSharedTooltip || c.hide(); this.setState() }, setState: function (a) {
                var b = this, c = b.options, d = b.graph, e = c.states, f = c.lineWidth, c = 0; a = a || ""; if (b.state !== a && (r([b.group, b.markerGroup, b.dataLabelsGroup], function (c) {
                    c && (b.state && c.removeClass("highcharts-series-" +
                        b.state), a && c.addClass("highcharts-series-" + a))
                }), b.state = a, !e[a] || !1 !== e[a].enabled) && (a && (f = e[a].lineWidth || f + (e[a].lineWidthPlus || 0)), d && !d.dashstyle)) for (f = { "stroke-width": f }, d.animate(f, k(e[a || "normal"] && e[a || "normal"].animation, b.chart.options.chart.animation)); b["zone-graph-" + c];)b["zone-graph-" + c].attr(f), c += 1
            }, setVisible: function (a, b) {
                var c = this, d = c.chart, e = c.legendItem, f, h = d.options.chart.ignoreHiddenSeries, k = c.visible; f = (c.visible = a = c.options.visible = c.userOptions.visible = void 0 === a ? !k :
                    a) ? "show" : "hide"; r(["group", "dataLabelsGroup", "markerGroup", "tracker", "tt"], function (a) { if (c[a]) c[a][f]() }); if (d.hoverSeries === c || (d.hoverPoint && d.hoverPoint.series) === c) c.onMouseOut(); e && d.legend.colorizeItem(c, a); c.isDirty = !0; c.options.stacking && r(d.series, function (a) { a.options.stacking && a.visible && (a.isDirty = !0) }); r(c.linkedSeries, function (b) { b.setVisible(a, !1) }); h && (d.isDirtyBox = !0); q(c, f); !1 !== b && d.redraw()
            }, show: function () { this.setVisible(!0) }, hide: function () { this.setVisible(!1) }, select: function (a) {
            this.selected =
                a = void 0 === a ? !this.selected : a; this.checkbox && (this.checkbox.checked = a); q(this, a ? "select" : "unselect")
            }, drawTracker: H.drawTrackerGraph
        })
    })(K); (function (a) {
        var C = a.Chart, D = a.each, E = a.inArray, m = a.isArray, h = a.isObject, f = a.pick, r = a.splat; C.prototype.setResponsive = function (f) {
            var h = this.options.responsive, m = [], e = this.currentResponsive; h && h.rules && D(h.rules, function (c) { void 0 === c._id && (c._id = a.uniqueKey()); this.matchResponsiveRule(c, m, f) }, this); var c = a.merge.apply(0, a.map(m, function (c) {
                return a.find(h.rules,
                    function (a) { return a._id === c }).chartOptions
            })), m = m.toString() || void 0; m !== (e && e.ruleIds) && (e && this.update(e.undoOptions, f), m ? (this.currentResponsive = { ruleIds: m, mergedOptions: c, undoOptions: this.currentOptions(c) }, this.update(c, f)) : this.currentResponsive = void 0)
        }; C.prototype.matchResponsiveRule = function (a, h) {
            var m = a.condition; (m.callback || function () {
                return this.chartWidth <= f(m.maxWidth, Number.MAX_VALUE) && this.chartHeight <= f(m.maxHeight, Number.MAX_VALUE) && this.chartWidth >= f(m.minWidth, 0) && this.chartHeight >=
                    f(m.minHeight, 0)
            }).call(this) && h.push(a._id)
        }; C.prototype.currentOptions = function (f) { function q(e, c, f, w) { var k; a.objectEach(e, function (a, b) { if (!w && -1 < E(b, ["series", "xAxis", "yAxis"])) for (a = r(a), f[b] = [], k = 0; k < a.length; k++)c[b][k] && (f[b][k] = {}, q(a[k], c[b][k], f[b][k], w + 1)); else h(a) ? (f[b] = m(a) ? [] : {}, q(a, c[b] || {}, f[b], w + 1)) : f[b] = c[b] || null }) } var w = {}; q(f, this.options, w, 0); return w }
    })(K); return K
});