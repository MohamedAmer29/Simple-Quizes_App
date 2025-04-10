(function () {
  "use strict";
  var e = {
      223: function (e, t, n) {
        var r = n(751),
          o = n(641);
        const i = { class: "conatainer" };
        function a(e, t) {
          const n = (0, o.g2)("router-view");
          return (0, o.uX)(), (0, o.CE)("div", i, [(0, o.bF)(n)]);
        }
        var l = n(262);
        const s = {},
          u = (0, l.A)(s, [
            ["render", a],
            ["__scopeId", "data-v-78fc1897"],
          ]);
        var c = u,
          d = n(953),
          f = n(33),
          p = { class: "question-container" },
          v = { class: "question" },
          b = { class: "options-container" },
          h = ["onClick"],
          C = { class: "option-label" },
          m = { class: "option-value" },
          g = (0, o.pM)({
            __name: "Question",
            props: ["question"],
            emits: ["selectOption"],
            setup: function (e, t) {
              var n = t.emit,
                r = function (e) {
                  return i("selectOption", e);
                },
                i = n;
              return function (t, n) {
                return (
                  (0, o.uX)(),
                  (0, o.CE)("div", null, [
                    (0, o.Lk)("div", p, [
                      (0, o.Lk)("h1", v, (0, f.v_)(e.question.text), 1),
                    ]),
                    (0, o.Lk)("div", b, [
                      ((0, o.uX)(!0),
                      (0, o.CE)(
                        o.FK,
                        null,
                        (0, o.pI)(e.question.options, function (e) {
                          return (
                            (0, o.uX)(),
                            (0, o.CE)(
                              "div",
                              {
                                class: "option",
                                key: e.id,
                                onClick: function (t) {
                                  return r(e.isCorrect);
                                },
                              },
                              [
                                (0, o.Lk)("p", C, (0, f.v_)(e.label), 1),
                                (0, o.Lk)("div", m, [
                                  (0, o.Lk)("p", null, (0, f.v_)(e.text), 1),
                                ]),
                              ],
                              8,
                              h
                            )
                          );
                        }),
                        128
                      )),
                    ]),
                  ])
                );
              };
            },
          });
        const x = (0, l.A)(g, [["__scopeId", "data-v-765b7b0e"]]);
        var y = x,
          k = { class: "bar" },
          _ = (0, o.pM)({
            __name: "QuizHeader",
            props: ["questionStatus", "barPercentage"],
            setup: function (e) {
              return function (t, n) {
                return (
                  (0, o.uX)(),
                  (0, o.CE)("div", null, [
                    (0, o.Lk)("header", null, [
                      (0, o.Lk)("h4", null, (0, f.v_)(e.questionStatus), 1),
                      (0, o.Lk)("div", k, [
                        (0, o.Lk)(
                          "div",
                          {
                            class: "completion",
                            style: (0, f.Tr)({ width: e.barPercentage }),
                          },
                          null,
                          4
                        ),
                      ]),
                    ]),
                  ])
                );
              };
            },
          });
        const w = (0, l.A)(_, [["__scopeId", "data-v-1c8e4c3d"]]);
        var q = w,
          A = n(220),
          L = n(863),
          E = { class: "results" },
          O = (0, o.pM)({
            __name: "Result",
            props: ["quizQuestionLength", "numberOfCorrectAnswer"],
            setup: function (e) {
              return function (t, n) {
                var r = (0, o.g2)("router-link");
                return (
                  (0, o.uX)(),
                  (0, o.CE)("div", E, [
                    n[1] ||
                      (n[1] = (0, o.Lk)("p", null, "Your Results...", -1)),
                    (0, o.Lk)(
                      "h1",
                      null,
                      (0, f.v_)(
                        ""
                          .concat(e.numberOfCorrectAnswer, "/")
                          .concat(e.quizQuestionLength)
                      ),
                      1
                    ),
                    (0, o.bF)(
                      r,
                      {
                        to: "/",
                        class: "text-xl bg-stone-300 p-2 rounded-xl m-4",
                      },
                      {
                        default: (0, o.k6)(function () {
                          return n[0] || (n[0] = [(0, o.eW)("Back")]);
                        }),
                        _: 1,
                      }
                    ),
                  ])
                );
              };
            },
          });
        const j = (0, l.A)(O, [["__scopeId", "data-v-8007967c"]]);
        var D = j,
          N = { class: "container" },
          S = (0, o.pM)({
            __name: "QuizView",
            setup: function (e) {
              var t = (0, A.lq)(),
                n = t.params.id,
                r = (0, d.KR)(0),
                i = L.find(function (e) {
                  return "".concat(e.id) === n;
                }),
                a = (0, d.KR)(0),
                l = null === i || void 0 === i ? void 0 : i.questions.length,
                s = (0, d.KR)(!1),
                u = (0, o.EW)(function () {
                  return ""
                    .concat(r.value + 1, "/")
                    .concat(
                      null === i || void 0 === i ? void 0 : i.questions.length
                    );
                }),
                c = (0, o.EW)(function () {
                  if ("undefined" !== typeof l)
                    return "".concat(((r.value + 1) / l) * 100, "%");
                }),
                f = function (e) {
                  e && a.value++,
                    (null === i || void 0 === i
                      ? void 0
                      : i.questions.length) ===
                    r.value + 1
                      ? (s.value = !0)
                      : r.value++;
                };
              return function (e, t) {
                var n;
                return (
                  (0, o.uX)(),
                  (0, o.CE)("div", N, [
                    (0, o.Lk)("div", null, [
                      (0, o.bF)(
                        q,
                        { questionStatus: u.value, barPercentage: c.value },
                        null,
                        8,
                        ["questionStatus", "barPercentage"]
                      ),
                    ]),
                    (0, o.Lk)("div", null, [
                      s.value
                        ? ((0, o.uX)(),
                          (0, o.Wv)(
                            D,
                            {
                              key: 1,
                              quizQuestionLength:
                                null === (n = (0, d.R1)(i)) || void 0 === n
                                  ? void 0
                                  : n.questions.length,
                              numberOfCorrectAnswer: a.value,
                            },
                            null,
                            8,
                            ["quizQuestionLength", "numberOfCorrectAnswer"]
                          ))
                        : ((0, o.uX)(),
                          (0, o.Wv)(
                            y,
                            {
                              key: 0,
                              question: (0, d.R1)(i).questions[r.value],
                              onSelectOption: f,
                            },
                            null,
                            8,
                            ["question"]
                          )),
                    ]),
                  ])
                );
              };
            },
          });
        const B = (0, l.A)(S, [["__scopeId", "data-v-3f55532d"]]);
        var P = B,
          T = [
            { path: "/quiz/:id", name: "quizView", component: P },
            {
              path: "/",
              name: "quizesView",
              component: function () {
                return n.e(594).then(n.bind(n, 424));
              },
            },
          ],
          z = (0, A.aE)({ history: (0, A.LA)("/"), routes: T }),
          F = z;
        (0, r.Ef)(c).use(F).mount("#app");
      },
      863: function (e) {
        e.exports = JSON.parse(
          '[{"id":1,"img":"https://media.istockphoto.com/id/1439286764/vector/mathematics-hand-lettering-with-mathematical-doodle.jpg?s=612x612&w=0&k=20&c=595UduFrDWjs97lTYglCyLDOy8UN5r3ZKJA5kQdejvg=","name":"Math","questions":[{"id":1,"text":"8 ÷ 2(2 + 2)","options":[{"id":1,"label":"A","text":"16","isCorrect":true},{"id":2,"label":"B","text":"1","isCorrect":false},{"id":3,"label":"C","text":"8","isCorrect":false},{"id":4,"label":"D","text":"24","isCorrect":false}]},{"id":2,"text":"sqrt(64) * 9","options":[{"id":1,"label":"A","text":"4","isCorrect":false},{"id":2,"label":"B","text":"81","isCorrect":false},{"id":3,"label":"C","text":"72","isCorrect":true},{"id":4,"label":"D","text":"144","isCorrect":false}]},{"id":3,"text":"3 + 3 x 3 ÷ 3 - 3","options":[{"id":1,"label":"A","text":"3","isCorrect":true},{"id":2,"label":"B","text":"1","isCorrect":false},{"id":3,"label":"C","text":"9","isCorrect":false},{"id":4,"label":"D","text":"16","isCorrect":false}]}]},{"id":2,"img":"https://blogs.biomedcentral.com/on-biology/wp-content/uploads/sites/5/2017/12/DNA.png","name":"Biology","questions":[{"id":1,"text":"The Kreb Cycles occurs in the","options":[{"id":1,"label":"A","text":"Mitochondria","isCorrect":true},{"id":2,"label":"B","text":"Nucleus","isCorrect":false},{"id":3,"label":"C","text":"Rough ER","isCorrect":false},{"id":4,"label":"D","text":"Cystol","isCorrect":false}]},{"id":2,"text":"How many oxygen molecules can hemoglobin hold","options":[{"id":1,"label":"A","text":"1","isCorrect":false},{"id":2,"label":"B","text":"2","isCorrect":false},{"id":3,"label":"C","text":"3","isCorrect":false},{"id":4,"label":"D","text":"4","isCorrect":true}]},{"id":3,"text":"The cones see ___ while the rods see ___","options":[{"id":1,"label":"A","text":"black and white; color","isCorrect":false},{"id":2,"label":"B","text":"color; black and white","isCorrect":true},{"id":3,"label":"C","text":"3D objects; 2D shapes","isCorrect":false},{"id":4,"label":"D","text":"2D shapes; 3D objects","isCorrect":false}]}]},{"id":3,"img":"http://jobs.newscientist.com/getasset/c40a5488-11be-43b0-843f-a2e6ef9f0612/","name":"Chemistry","questions":[{"id":1,"text":"What is the composition of table salt","options":[{"id":1,"label":"A","text":"NaCl","isCorrect":true},{"id":2,"label":"B","text":"K2","isCorrect":false},{"id":3,"label":"C","text":"NaCl2C4H7","isCorrect":false},{"id":4,"label":"D","text":"CH4","isCorrect":false}]},{"id":2,"text":"What is Potassium\'s chemical symbol","options":[{"id":1,"label":"A","text":"P","isCorrect":false},{"id":2,"label":"B","text":"Pt","isCorrect":false},{"id":3,"label":"C","text":"Pts","isCorrect":false},{"id":4,"label":"D","text":"K","isCorrect":true}]},{"id":3,"text":"Which is not organinc","options":[{"id":1,"label":"A","text":"CH4","isCorrect":false},{"id":2,"label":"B","text":"NaCl","isCorrect":true},{"id":3,"label":"C","text":"C2H6","isCorrect":false},{"id":4,"label":"D","text":"C3H8","isCorrect":false}]}]}]'
        );
      },
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var i = (t[r] = { exports: {} });
    return e[r](i, i.exports, n), i.exports;
  }
  (n.m = e),
    (function () {
      var e = [];
      n.O = function (t, r, o, i) {
        if (!r) {
          var a = 1 / 0;
          for (c = 0; c < e.length; c++) {
            (r = e[c][0]), (o = e[c][1]), (i = e[c][2]);
            for (var l = !0, s = 0; s < r.length; s++)
              (!1 & i || a >= i) &&
              Object.keys(n.O).every(function (e) {
                return n.O[e](r[s]);
              })
                ? r.splice(s--, 1)
                : ((l = !1), i < a && (a = i));
            if (l) {
              e.splice(c--, 1);
              var u = o();
              void 0 !== u && (t = u);
            }
          }
          return t;
        }
        i = i || 0;
        for (var c = e.length; c > 0 && e[c - 1][2] > i; c--) e[c] = e[c - 1];
        e[c] = [r, o, i];
      };
    })(),
    (function () {
      n.d = function (e, t) {
        for (var r in t)
          n.o(t, r) &&
            !n.o(e, r) &&
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
      };
    })(),
    (function () {
      (n.f = {}),
        (n.e = function (e) {
          return Promise.all(
            Object.keys(n.f).reduce(function (t, r) {
              return n.f[r](e, t), t;
            }, [])
          );
        });
    })(),
    (function () {
      n.u = function (e) {
        return "js/about.ea6375a8.js";
      };
    })(),
    (function () {
      n.miniCssF = function (e) {
        return "css/about.29959c98.css";
      };
    })(),
    (function () {
      n.g = (function () {
        if ("object" === typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (e) {
          if ("object" === typeof window) return window;
        }
      })();
    })(),
    (function () {
      n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      };
    })(),
    (function () {
      var e = {},
        t = "new_project_2:";
      n.l = function (r, o, i, a) {
        if (e[r]) e[r].push(o);
        else {
          var l, s;
          if (void 0 !== i)
            for (
              var u = document.getElementsByTagName("script"), c = 0;
              c < u.length;
              c++
            ) {
              var d = u[c];
              if (
                d.getAttribute("src") == r ||
                d.getAttribute("data-webpack") == t + i
              ) {
                l = d;
                break;
              }
            }
          l ||
            ((s = !0),
            (l = document.createElement("script")),
            (l.charset = "utf-8"),
            (l.timeout = 120),
            n.nc && l.setAttribute("nonce", n.nc),
            l.setAttribute("data-webpack", t + i),
            (l.src = r)),
            (e[r] = [o]);
          var f = function (t, n) {
              (l.onerror = l.onload = null), clearTimeout(p);
              var o = e[r];
              if (
                (delete e[r],
                l.parentNode && l.parentNode.removeChild(l),
                o &&
                  o.forEach(function (e) {
                    return e(n);
                  }),
                t)
              )
                return t(n);
            },
            p = setTimeout(
              f.bind(null, void 0, { type: "timeout", target: l }),
              12e4
            );
          (l.onerror = f.bind(null, l.onerror)),
            (l.onload = f.bind(null, l.onload)),
            s && document.head.appendChild(l);
        }
      };
    })(),
    (function () {
      n.r = function (e) {
        "undefined" !== typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      };
    })(),
    (function () {
      n.p = "/";
    })(),
    (function () {
      if ("undefined" !== typeof document) {
        var e = function (e, t, r, o, i) {
            var a = document.createElement("link");
            (a.rel = "stylesheet"),
              (a.type = "text/css"),
              n.nc && (a.nonce = n.nc);
            var l = function (n) {
              if (((a.onerror = a.onload = null), "load" === n.type)) o();
              else {
                var r = n && n.type,
                  l = (n && n.target && n.target.href) || t,
                  s = new Error(
                    "Loading CSS chunk " +
                      e +
                      " failed.\n(" +
                      r +
                      ": " +
                      l +
                      ")"
                  );
                (s.name = "ChunkLoadError"),
                  (s.code = "CSS_CHUNK_LOAD_FAILED"),
                  (s.type = r),
                  (s.request = l),
                  a.parentNode && a.parentNode.removeChild(a),
                  i(s);
              }
            };
            return (
              (a.onerror = a.onload = l),
              (a.href = t),
              r
                ? r.parentNode.insertBefore(a, r.nextSibling)
                : document.head.appendChild(a),
              a
            );
          },
          t = function (e, t) {
            for (
              var n = document.getElementsByTagName("link"), r = 0;
              r < n.length;
              r++
            ) {
              var o = n[r],
                i = o.getAttribute("data-href") || o.getAttribute("href");
              if ("stylesheet" === o.rel && (i === e || i === t)) return o;
            }
            var a = document.getElementsByTagName("style");
            for (r = 0; r < a.length; r++) {
              (o = a[r]), (i = o.getAttribute("data-href"));
              if (i === e || i === t) return o;
            }
          },
          r = function (r) {
            return new Promise(function (o, i) {
              var a = n.miniCssF(r),
                l = n.p + a;
              if (t(a, l)) return o();
              e(r, l, null, o, i);
            });
          },
          o = { 524: 0 };
        n.f.miniCss = function (e, t) {
          var n = { 594: 1 };
          o[e]
            ? t.push(o[e])
            : 0 !== o[e] &&
              n[e] &&
              t.push(
                (o[e] = r(e).then(
                  function () {
                    o[e] = 0;
                  },
                  function (t) {
                    throw (delete o[e], t);
                  }
                ))
              );
        };
      }
    })(),
    (function () {
      var e = { 524: 0 };
      (n.f.j = function (t, r) {
        var o = n.o(e, t) ? e[t] : void 0;
        if (0 !== o)
          if (o) r.push(o[2]);
          else {
            var i = new Promise(function (n, r) {
              o = e[t] = [n, r];
            });
            r.push((o[2] = i));
            var a = n.p + n.u(t),
              l = new Error(),
              s = function (r) {
                if (n.o(e, t) && ((o = e[t]), 0 !== o && (e[t] = void 0), o)) {
                  var i = r && ("load" === r.type ? "missing" : r.type),
                    a = r && r.target && r.target.src;
                  (l.message =
                    "Loading chunk " + t + " failed.\n(" + i + ": " + a + ")"),
                    (l.name = "ChunkLoadError"),
                    (l.type = i),
                    (l.request = a),
                    o[1](l);
                }
              };
            n.l(a, s, "chunk-" + t, t);
          }
      }),
        (n.O.j = function (t) {
          return 0 === e[t];
        });
      var t = function (t, r) {
          var o,
            i,
            a = r[0],
            l = r[1],
            s = r[2],
            u = 0;
          if (
            a.some(function (t) {
              return 0 !== e[t];
            })
          ) {
            for (o in l) n.o(l, o) && (n.m[o] = l[o]);
            if (s) var c = s(n);
          }
          for (t && t(r); u < a.length; u++)
            (i = a[u]), n.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
          return n.O(c);
        },
        r = (self["webpackChunknew_project_2"] =
          self["webpackChunknew_project_2"] || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })();
  var r = n.O(void 0, [504], function () {
    return n(223);
  });
  r = n.O(r);
})();
//# sourceMappingURL=app.f9c239f6.js.map
