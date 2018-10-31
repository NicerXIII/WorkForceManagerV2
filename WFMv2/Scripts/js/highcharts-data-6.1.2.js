﻿/*
 Highcharts JS v6.1.2 (2018-08-31)
 Data module

 (c) 2012-2017 Torstein Honsi

 License: www.highcharts.com/license
*/
(function (q) { "object" === typeof module && module.exports ? module.exports = q : "function" === typeof define && define.amd ? define(function () { return q }) : q(Highcharts) })(function (q) {
    (function (h) {
    h.ajax = function (q) {
        var m = h.merge(!0, { url: !1, type: "GET", dataType: "json", success: !1, error: !1, data: !1, headers: {} }, q); q = { json: "application/json", xml: "application/xml", text: "text/plain", octet: "application/octet-stream" }; var p = new XMLHttpRequest; if (!m.url) return !1; p.open(m.type.toUpperCase(), m.url, !0); p.setRequestHeader("Content-Type",
            q[m.dataType] || q.text); h.objectEach(m.headers, function (h, m) { p.setRequestHeader(m, h) }); p.onreadystatechange = function () { var h; if (4 === p.readyState) { if (200 === p.status) { h = p.responseText; if ("json" === m.dataType) try { h = JSON.parse(h) } catch (C) { m.error && m.error(p, C); return } return m.success && m.success(h) } m.error && m.error(p, p.responseText) } }; try { m.data = JSON.stringify(m.data) } catch (u) { } p.send(m.data || !0)
    }
    })(q); (function (h) {
        var q = h.addEvent, m = h.Chart, p = h.win.document, u = h.each, C = h.objectEach, H = h.pick, E = h.inArray,
        F = h.isNumber, z = h.merge, I = h.splat, J = h.fireEvent, K = h.some, x, A = function (a, b, c) { this.init(a, b, c) }; h.extend(A.prototype, {
            init: function (a, b, c) {
                var f = a.decimalPoint, e; b && (this.chartOptions = b); c && (this.chart = c); "." !== f && "," !== f && (f = void 0); this.options = a; this.columns = a.columns || this.rowsToColumns(a.rows) || []; this.firstRowAsNames = H(a.firstRowAsNames, this.firstRowAsNames, !0); this.decimalRegex = f && new RegExp("^(-?[0-9]+)" + f + "([0-9]+)$"); this.rawColumns = []; this.columns.length && (this.dataFound(), e = !0); e || (e = this.fetchLiveData());
                e || (e = !!this.parseCSV().length); e || (e = !!this.parseTable().length); e || (e = this.parseGoogleSpreadsheet()); !e && a.afterComplete && a.afterComplete()
            }, getColumnDistribution: function () {
                var a = this.chartOptions, b = this.options, c = [], f = function (a) { return (h.seriesTypes[a || "line"].prototype.pointArrayMap || [0]).length }, e = a && a.chart && a.chart.type, d = [], l = [], w = 0, b = b && b.seriesMapping || a && a.series && h.map(a.series, function () { return { x: 0 } }) || [], g; u(a && a.series || [], function (a) { d.push(f(a.type || e)) }); u(b, function (a) {
                    c.push(a.x ||
                        0)
                }); 0 === c.length && c.push(0); u(b, function (b) { var c = new x, D = d[w] || f(e), n = h.seriesTypes[((a && a.series || [])[w] || {}).type || e || "line"].prototype.pointArrayMap || ["y"]; c.addColumnReader(b.x, "x"); C(b, function (a, b) { "x" !== b && c.addColumnReader(a, b) }); for (g = 0; g < D; g++)c.hasReader(n[g]) || c.addColumnReader(void 0, n[g]); l.push(c); w++ }); b = h.seriesTypes[e || "line"].prototype.pointArrayMap; void 0 === b && (b = ["y"]); this.valueCount = { global: f(e), xColumns: c, individual: d, seriesBuilders: l, globalPointArrayMap: b }
            }, dataFound: function () {
                this.options.switchRowsAndColumns &&
                (this.columns = this.rowsToColumns(this.columns)); this.getColumnDistribution(); this.parseTypes(); !1 !== this.parsed() && this.complete()
            }, parseCSV: function (a) {
                function b(a, b, c, d) {
                    function e(b) { k = a[b]; r = a[b - 1]; w = a[b + 1] } function f(a) { v.length < t + 1 && v.push([a]); v[t][v[t].length - 1] !== a && v[t].push(a) } function g() {
                    D > B || B > m ? (++B, n = "") : (!isNaN(parseFloat(n)) && isFinite(n) ? (n = parseFloat(n), f("number")) : isNaN(Date.parse(n)) ? f("string") : (n = n.replace(/\//g, "-"), f("date")), h.length < t + 1 && h.push([]), c || (h[t][b] = n), n = "",
                        ++t, ++B)
                    } var l = 0, k = "", r = "", w = "", n = "", B = 0, t = 0; if (a.trim().length && "#" !== a.trim()[0]) { for (; l < a.length; l++) { e(l); if ("#" === k) { g(); return } if ('"' === k) for (e(++l); l < a.length && ('"' !== k || '"' === r || '"' === w);) { if ('"' !== k || '"' === k && '"' !== r) n += k; e(++l) } else d && d[k] ? d[k](k, n) && g() : k === y ? g() : n += k } g() }
                } function c(a) {
                    var b = 0, c = 0, f = !1; K(a, function (a, d) {
                        var e = !1, f, k, g = ""; if (13 < d) return !0; for (var l = 0; l < a.length; l++) {
                            d = a[l]; f = a[l + 1]; k = a[l - 1]; if ("#" === d) break; else if ('"' === d) if (e) {
                                if ('"' !== k && '"' !== f) {
                                    for (; " " === f && l < a.length;)f =
                                        a[++l]; "undefined" !== typeof t[f] && t[f]++; e = !1
                                }
                            } else e = !0; else "undefined" !== typeof t[d] ? (g = g.trim(), isNaN(Date.parse(g)) ? !isNaN(g) && isFinite(g) || t[d]++ : t[d]++ , g = "") : g += d; "," === d && c++; "." === d && b++
                        }
                    }); f = t[";"] > t[","] ? ";" : ","; d.decimalPoint || (d.decimalPoint = b > c ? "." : ",", e.decimalRegex = new RegExp("^(-?[0-9]+)" + d.decimalPoint + "([0-9]+)$")); return f
                } function f(a, b) {
                    var c, f, g = 0, l = !1, h = [], n = [], k; if (!b || b > a.length) b = a.length; for (; g < b; g++)if ("undefined" !== typeof a[g] && a[g] && a[g].length) for (c = a[g].trim().replace(/\//g,
                        " ").replace(/\-/g, " ").split(" "), f = ["", "", ""], k = 0; k < c.length; k++)k < f.length && (c[k] = parseInt(c[k], 10), c[k] && (n[k] = !n[k] || n[k] < c[k] ? c[k] : n[k], "undefined" !== typeof h[k] ? h[k] !== c[k] && (h[k] = !1) : h[k] = c[k], 31 < c[k] ? f[k] = 100 > c[k] ? "YY" : "YYYY" : 12 < c[k] && 31 >= c[k] ? (f[k] = "dd", l = !0) : f[k].length || (f[k] = "mm"))); if (l) {
                            for (k = 0; k < h.length; k++)!1 !== h[k] ? 12 < n[k] && "YY" !== f[k] && "YYYY" !== f[k] && (f[k] = "YY") : 12 < n[k] && "mm" === f[k] && (f[k] = "dd"); 3 === f.length && "dd" === f[1] && "dd" === f[2] && (f[2] = "YY"); a = f.join("/"); return (d.dateFormats ||
                                e.dateFormats)[a] ? a : (J("deduceDateFailed"), "YYYY/mm/dd")
                        } return "YYYY/mm/dd"
                } var e = this, d = a || this.options, l = d.csv, h; a = "undefined" !== typeof d.startRow && d.startRow ? d.startRow : 0; var g = d.endRow || Number.MAX_VALUE, D = "undefined" !== typeof d.startColumn && d.startColumn ? d.startColumn : 0, m = d.endColumn || Number.MAX_VALUE, y, n = 0, v = [], t = { ",": 0, ";": 0, "\t": 0 }; h = this.columns = []; l && d.beforeParse && (l = d.beforeParse.call(this, l)); if (l) {
                    l = l.replace(/\r\n/g, "\n").replace(/\r/g, "\n").split(d.lineDelimiter || "\n"); if (!a || 0 > a) a =
                        0; if (!g || g >= l.length) g = l.length - 1; d.itemDelimiter ? y = d.itemDelimiter : (y = null, y = c(l)); for (var G = 0, n = a; n <= g; n++)"#" === l[n][0] ? G++ : b(l[n], n - a - G); d.columnTypes && 0 !== d.columnTypes.length || !v.length || !v[0].length || "date" !== v[0][1] || d.dateFormat || (d.dateFormat = f(h[0])); this.dataFound()
                } return h
            }, parseTable: function () {
                var a = this.options, b = a.table, c = this.columns, f = a.startRow || 0, e = a.endRow || Number.MAX_VALUE, d = a.startColumn || 0, l = a.endColumn || Number.MAX_VALUE; b && ("string" === typeof b && (b = p.getElementById(b)), u(b.getElementsByTagName("tr"),
                    function (a, b) { b >= f && b <= e && u(a.children, function (a, e) { ("TD" === a.tagName || "TH" === a.tagName) && e >= d && e <= l && (c[e - d] || (c[e - d] = []), c[e - d][b - f] = a.innerHTML) }) }), this.dataFound()); return c
            }, fetchLiveData: function () {
                function a(w) {
                    function g(g, l, y) {
                        function n() { e && b.liveDataURL === g && (b.liveDataTimeout = setTimeout(a, d)) } if (!g || 0 !== g.indexOf("http")) return g && c.error && c.error("Invalid URL"), !1; w && (clearTimeout(b.liveDataTimeout), b.liveDataURL = g); h.ajax({
                            url: g, dataType: y || "json", success: function (a) {
                            b && b.series &&
                                l(a); n()
                            }, error: function (a, b) { 3 > ++f && n(); return c.error && c.error(b, a) }
                        }); return !0
                    } g(l.csvURL, function (a) { b.update({ data: { csv: a } }) }, "text") || g(l.rowsURL, function (a) { b.update({ data: { rows: a } }) }) || g(l.columnsURL, function (a) { b.update({ data: { columns: a } }) })
                } var b = this.chart, c = this.options, f = 0, e = c.enablePolling, d = 1E3 * (c.dataRefreshRate || 2), l = z(c); if (!c || !c.csvURL && !c.rowsURL && !c.columnsURL) return !1; 1E3 > d && (d = 1E3); delete c.csvURL; delete c.rowsURL; delete c.columnsURL; a(!0); return c && (c.csvURL || c.rowsURL || c.columnsURL)
            },
            parseGoogleSpreadsheet: function () {
                function a(b) { var e = ["https://spreadsheets.google.com/feeds/cells", f, d, "public/values?alt\x3djson"].join("/"); h.ajax({ url: e, dataType: "json", success: function (d) { b(d); c.enablePolling && setTimeout(function () { a(b) }, c.dataRefreshRate) }, error: function (a, b) { return c.error && c.error(b, a) } }) } var b = this, c = this.options, f = c.googleSpreadsheetKey, e = this.chart, d = c.googleSpreadsheetWorksheet || 1, l = c.startRow || 0, w = c.endRow || Number.MAX_VALUE, g = c.startColumn || 0, m = c.endColumn || Number.MAX_VALUE,
                    q = 1E3 * (c.dataRefreshRate || 2); 4E3 > q && (q = 4E3); f && (delete c.googleSpreadsheetKey, a(function (a) {
                        var c = []; a = a.feed.entry; var d, f = (a || []).length, h = 0, q, p, r; if (!a || 0 === a.length) return !1; for (r = 0; r < f; r++)d = a[r], h = Math.max(h, d.gs$cell.col); for (r = 0; r < h; r++)r >= g && r <= m && (c[r - g] = []); for (r = 0; r < f; r++)d = a[r], h = d.gs$cell.row - 1, q = d.gs$cell.col - 1, q >= g && q <= m && h >= l && h <= w && (p = d.gs$cell || d.content, d = null, p.numericValue ? d = 0 <= p.$t.indexOf("/") || 0 <= p.$t.indexOf("-") ? p.$t : 0 < p.$t.indexOf("%") ? 100 * parseFloat(p.numericValue) : parseFloat(p.numericValue) :
                            p.$t && p.$t.length && (d = p.$t), c[q - g][h - l] = d); u(c, function (a) { for (r = 0; r < a.length; r++)void 0 === a[r] && (a[r] = null) }); e && e.series ? e.update({ data: { columns: c } }) : (b.columns = c, b.dataFound())
                    })); return !1
            }, trim: function (a, b) { "string" === typeof a && (a = a.replace(/^\s+|\s+$/g, ""), b && /^[0-9\s]+$/.test(a) && (a = a.replace(/\s/g, "")), this.decimalRegex && (a = a.replace(this.decimalRegex, "$1.$2"))); return a }, parseTypes: function () { for (var a = this.columns, b = a.length; b--;)this.parseColumn(a[b], b) }, parseColumn: function (a, b) {
                var c =
                    this.rawColumns, f = this.columns, e = a.length, d, l, h, g, p = this.firstRowAsNames, m = -1 !== E(b, this.valueCount.xColumns), q, n = [], v = this.chartOptions, t, u = (this.options.columnTypes || [])[b], v = m && (v && v.xAxis && "category" === I(v.xAxis)[0].type || "string" === u); for (c[b] || (c[b] = []); e--;)d = n[e] || a[e], h = this.trim(d), g = this.trim(d, !0), l = parseFloat(g), void 0 === c[b][e] && (c[b][e] = h), v || 0 === e && p ? a[e] = "" + h : +g === l ? (a[e] = l, 31536E6 < l && "float" !== u ? a.isDatetime = !0 : a.isNumeric = !0, void 0 !== a[e + 1] && (t = l > a[e + 1])) : (h && h.length && (q = this.parseDate(d)),
                        m && F(q) && "float" !== u ? (n[e] = d, a[e] = q, a.isDatetime = !0, void 0 !== a[e + 1] && (d = q > a[e + 1], d !== t && void 0 !== t && (this.alternativeFormat ? (this.dateFormat = this.alternativeFormat, e = a.length, this.alternativeFormat = this.dateFormats[this.dateFormat].alternative) : a.unsorted = !0), t = d)) : (a[e] = "" === h ? null : h, 0 !== e && (a.isDatetime || a.isNumeric) && (a.mixed = !0))); m && a.mixed && (f[b] = c[b]); if (m && t && this.options.sort) for (b = 0; b < f.length; b++)f[b].reverse(), p && f[b].unshift(f[b].pop())
            }, dateFormats: {
                "YYYY/mm/dd": {
                    regex: /^([0-9]{4})[\-\/\.]([0-9]{1,2})[\-\/\.]([0-9]{1,2})$/,
                    parser: function (a) { return Date.UTC(+a[1], a[2] - 1, +a[3]) }
                }, "dd/mm/YYYY": { regex: /^([0-9]{1,2})[\-\/\.]([0-9]{1,2})[\-\/\.]([0-9]{4})$/, parser: function (a) { return Date.UTC(+a[3], a[2] - 1, +a[1]) }, alternative: "mm/dd/YYYY" }, "mm/dd/YYYY": { regex: /^([0-9]{1,2})[\-\/\.]([0-9]{1,2})[\-\/\.]([0-9]{4})$/, parser: function (a) { return Date.UTC(+a[3], a[1] - 1, +a[2]) } }, "dd/mm/YY": {
                    regex: /^([0-9]{1,2})[\-\/\.]([0-9]{1,2})[\-\/\.]([0-9]{2})$/, parser: function (a) {
                        var b = +a[3], b = b > (new Date).getFullYear() - 2E3 ? b + 1900 : b + 2E3; return Date.UTC(b,
                            a[2] - 1, +a[1])
                    }, alternative: "mm/dd/YY"
                }, "mm/dd/YY": { regex: /^([0-9]{1,2})[\-\/\.]([0-9]{1,2})[\-\/\.]([0-9]{2})$/, parser: function (a) { return Date.UTC(+a[3] + 2E3, a[1] - 1, +a[2]) } }
            }, parseDate: function (a) {
                var b = this.options.parseDate, c, f, e = this.options.dateFormat || this.dateFormat, d; if (b) c = b(a); else if ("string" === typeof a) {
                    if (e) (b = this.dateFormats[e]) || (b = this.dateFormats["YYYY/mm/dd"]), (d = a.match(b.regex)) && (c = b.parser(d)); else for (f in this.dateFormats) if (b = this.dateFormats[f], d = a.match(b.regex)) {
                    this.dateFormat =
                        f; this.alternativeFormat = b.alternative; c = b.parser(d); break
                    } d || (d = Date.parse(a), "object" === typeof d && null !== d && d.getTime ? c = d.getTime() - 6E4 * d.getTimezoneOffset() : F(d) && (c = d - 6E4 * (new Date(d)).getTimezoneOffset()))
                } return c
            }, rowsToColumns: function (a) { var b, c, f, e, d; if (a) for (d = [], c = a.length, b = 0; b < c; b++)for (e = a[b].length, f = 0; f < e; f++)d[f] || (d[f] = []), d[f][b] = a[b][f]; return d }, parsed: function () { if (this.options.parsed) return this.options.parsed.call(this, this.columns) }, getFreeIndexes: function (a, b) {
                var c, f = [],
                e = [], d; for (c = 0; c < a; c += 1)f.push(!0); for (a = 0; a < b.length; a += 1)for (d = b[a].getReferencedColumnIndexes(), c = 0; c < d.length; c += 1)f[d[c]] = !1; for (c = 0; c < f.length; c += 1)f[c] && e.push(c); return e
            }, complete: function () {
                var a = this.columns, b, c = this.options, f, e, d, h, m = [], g; if (c.complete || c.afterComplete) {
                    if (this.firstRowAsNames) for (d = 0; d < a.length; d++)a[d].name = a[d].shift(); f = []; e = this.getFreeIndexes(a.length, this.valueCount.seriesBuilders); for (d = 0; d < this.valueCount.seriesBuilders.length; d++)g = this.valueCount.seriesBuilders[d],
                        g.populateColumns(e) && m.push(g); for (; 0 < e.length;) { g = new x; g.addColumnReader(0, "x"); d = E(0, e); -1 !== d && e.splice(d, 1); for (d = 0; d < this.valueCount.global; d++)g.addColumnReader(void 0, this.valueCount.globalPointArrayMap[d]); g.populateColumns(e) && m.push(g) } 0 < m.length && 0 < m[0].readers.length && (g = a[m[0].readers[0].columnIndex], void 0 !== g && (g.isDatetime ? b = "datetime" : g.isNumeric || (b = "category"))); if ("category" === b) for (d = 0; d < m.length; d++)for (g = m[d], e = 0; e < g.readers.length; e++)"x" === g.readers[e].configName && (g.readers[e].configName =
                            "name"); for (d = 0; d < m.length; d++) { g = m[d]; e = []; for (h = 0; h < a[0].length; h++)e[h] = g.read(a, h); f[d] = { data: e }; g.name && (f[d].name = g.name); "category" === b && (f[d].turboThreshold = 0) } a = { series: f }; b && (a.xAxis = { type: b }, "category" === b && (a.xAxis.uniqueNames = !1)); c.complete && c.complete(a); c.afterComplete && c.afterComplete(a)
                }
            }, update: function (a, b) { var c = this.chart; a && (a.afterComplete = function (a) { a.xAxis && c.xAxis[0] && a.xAxis.type === c.xAxis[0].options.type && delete a.xAxis; c.update(a, b, !0) }, z(!0, this.options, a), this.init(this.options)) }
        });
        h.Data = A; h.data = function (a, b) { return new A(a, b) }; q(m, "init", function (a) { var b = this, c = a.args[0], f = a.args[1]; c && c.data && !b.hasDataDef && (b.hasDataDef = !0, b.data = new A(h.extend(c.data, { afterComplete: function (a) { var d, e; if (c.hasOwnProperty("series")) if ("object" === typeof c.series) for (d = Math.max(c.series.length, a && a.series ? a.series.length : 0); d--;)e = c.series[d] || {}, c.series[d] = z(e, a && a.series ? a.series[d] : {}); else delete c.series; c = z(a, c); b.init(c, f) } }), c, b), a.preventDefault()) }); x = function () {
        this.readers =
            []; this.pointIsArray = !0
        }; x.prototype.populateColumns = function (a) { var b = !0; u(this.readers, function (b) { void 0 === b.columnIndex && (b.columnIndex = a.shift()) }); u(this.readers, function (a) { void 0 === a.columnIndex && (b = !1) }); return b }; x.prototype.read = function (a, b) {
            var c = this.pointIsArray, f = c ? [] : {}, e; u(this.readers, function (d) { var e = a[d.columnIndex][b]; c ? f.push(e) : 0 < d.configName.indexOf(".") ? h.Point.prototype.setNestedProperty(f, e, d.configName) : f[d.configName] = e }); void 0 === this.name && 2 <= this.readers.length &&
                (e = this.getReferencedColumnIndexes(), 2 <= e.length && (e.shift(), e.sort(function (a, b) { return a - b }), this.name = a[e.shift()].name)); return f
        }; x.prototype.addColumnReader = function (a, b) { this.readers.push({ columnIndex: a, configName: b }); "x" !== b && "y" !== b && void 0 !== b && (this.pointIsArray = !1) }; x.prototype.getReferencedColumnIndexes = function () { var a, b = [], c; for (a = 0; a < this.readers.length; a += 1)c = this.readers[a], void 0 !== c.columnIndex && b.push(c.columnIndex); return b }; x.prototype.hasReader = function (a) {
            var b, c; for (b = 0; b <
                this.readers.length; b += 1)if (c = this.readers[b], c.configName === a) return !0
        }
    })(q)
});