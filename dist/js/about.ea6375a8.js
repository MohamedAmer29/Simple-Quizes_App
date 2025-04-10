"use strict";
(self["webpackChunknew_project_2"] =
  self["webpackChunknew_project_2"] || []).push([
  [594],
  {
    424: function (n, u, e) {
      e.r(u),
        e.d(u, {
          default: function () {
            return z;
          },
        });
      var t = e(641),
        r = e(751),
        i = e(953),
        a = e(863),
        c = e(33),
        l = e(220),
        o = ["src"],
        s = { class: "card-text" },
        d = (0, t.pM)({
          __name: "Card",
          props: ["quiz"],
          setup: function (n) {
            var u = (0, l.rd)(),
              e = function () {
                return u.push("/quiz/".concat(n.quiz.id));
              };
            return function (u, r) {
              return (
                (0, t.uX)(),
                (0, t.CE)("div", { onClick: e }, [
                  (0, t.Lk)("img", { src: n.quiz.img, alt: "img" }, null, 8, o),
                  (0, t.Lk)("div", s, [
                    (0, t.Lk)("h2", null, (0, c.v_)(n.quiz.name), 1),
                    (0, t.Lk)(
                      "p",
                      null,
                      (0, c.v_)(n.quiz.questions.length) + " questions",
                      1
                    ),
                  ]),
                ])
              );
            };
          },
        }),
        p = e(262);
      const v = (0, p.A)(d, [["__scopeId", "data-v-4338911a"]]);
      var f = v,
        k = { class: "container" },
        _ = { class: "options-container" },
        h = (0, t.pM)({
          __name: "QuizesView",
          setup: function (n) {
            var u = (0, i.KR)(""),
              e = (0, i.KR)(a),
              c = (0, t.EW)(function () {
                return e.value.filter(function (n) {
                  return n.name.toLowerCase().includes(u.value.toLowerCase());
                });
              });
            return function (n, e) {
              return (
                (0, t.uX)(),
                (0, t.CE)("div", k, [
                  (0, t.Lk)("header", null, [
                    e[1] || (e[1] = (0, t.Lk)("h1", null, "Quize", -1)),
                    (0, t.bo)(
                      (0, t.Lk)(
                        "input",
                        {
                          type: "text",
                          placeholder: "Search...",
                          "onUpdate:modelValue":
                            e[0] ||
                            (e[0] = function (n) {
                              return (u.value = n);
                            }),
                        },
                        null,
                        512
                      ),
                      [[r.Jo, u.value, void 0, { trim: !0 }]]
                    ),
                  ]),
                  (0, t.Lk)("div", _, [
                    ((0, t.uX)(!0),
                    (0, t.CE)(
                      t.FK,
                      null,
                      (0, t.pI)(c.value, function (n) {
                        return (
                          (0, t.uX)(),
                          (0, t.CE)("div", { class: "card", key: n.id }, [
                            (0, t.bF)(f, { quiz: n }, null, 8, ["quiz"]),
                          ])
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
      const q = (0, p.A)(h, [["__scopeId", "data-v-fc87b76c"]]);
      var z = q;
    },
  },
]);
//# sourceMappingURL=about.ea6375a8.js.map
