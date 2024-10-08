(() => {
  "use strict";
  var e = {
    n: (t) => {
      var a = t && t.__esModule ? () => t.default : () => t;
      return e.d(a, { a }), a;
    },
    d: (t, a) => {
      for (var l in a)
        e.o(a, l) &&
          !e.o(t, l) &&
          Object.defineProperty(t, l, { enumerable: !0, get: a[l] });
    },
    o: (e, t) => Object.prototype.hasOwnProperty.call(e, t),
  };
  const t = React;
  var a = e.n(t);
  const l = ReactDOM;
  var n = e.n(l);
  const r = (e) => {
      let { chatMessage: l = "Precisa de ajuda? Clique aqui para conversar!" } =
        e;
      const [n, r] = (0, t.useState)(!1),
        [o, s] = (0, t.useState)(!1),
        [c, i] = (0, t.useState)(!0);
      (0, t.useEffect)(() => {
        if (!n) {
          const e = setTimeout(() => {
            s(!0);
          }, 2e3);
          return () => clearTimeout(e);
        }
        s(!1);
      }, [n]);
      const d = () =>
          a().createElement(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            },
            a().createElement("path", {
              d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
            })
          ),
        m = () =>
          a().createElement(
            "div",
            { className: "flex justify-center items-center h-full" },
            a().createElement(
              "svg",
              {
                className: "animate-spin h-10 w-10 text-[#FF7000]",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
              },
              a().createElement("circle", {
                className: "opacity-25",
                cx: "12",
                cy: "12",
                r: "10",
                stroke: "currentColor",
                strokeWidth: "4",
              }),
              a().createElement("path", {
                className: "opacity-75",
                fill: "currentColor",
                d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
              })
            )
          );
      return a().createElement(
        "div",
        { className: "fixed bottom-4 right-4 flex items-end" },
        !n &&
          a().createElement(
            a().Fragment,
            null,
            o &&
              a().createElement(
                "div",
                {
                  className:
                    "mr-4 mb-2 bg-white text-gray-800 p-4 rounded-lg shadow-lg max-w-sm animate-fade-in",
                },
                a().createElement(
                  "div",
                  { className: "relative" },
                  l,
                  a().createElement("div", {
                    className:
                      "absolute -right-8 bottom-2 w-4 h-4 bg-white transform rotate-45",
                  })
                )
              ),
            a().createElement(
              "button",
              {
                onClick: () => r(!0),
                className:
                  "bg-[#FF7000] hover:bg-[#FF7000] text-white rounded-full p-3 shadow-lg",
              },
              a().createElement(d, null)
            )
          ),
        n &&
          a().createElement(
            "div",
            {
              style: { width: "500px", height: "600px" },
              className: "bg-white rounded-lg shadow-xl flex flex-col",
            },
            c && a().createElement(m, null),
            a().createElement("iframe", {
              src: "https://app.3mindtecnologia.com.br/version-01bgy/widget_chat",
              title: "Chat",
              className: "w-full h-full rounded-lg",
              frameBorder: "0",
              onLoad: () => i(!1),
              style: { display: c ? "none" : "block" },
            }),
            a().createElement(
              "button",
              {
                onClick: () => r(!1),
                className:
                  "absolute top-2 right-2 text-gray-500 hover:text-gray-700 bg-white rounded-full p-1",
              },
              a().createElement(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "20",
                  height: "20",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                },
                a().createElement("line", {
                  x1: "18",
                  y1: "6",
                  x2: "6",
                  y2: "18",
                }),
                a().createElement("line", {
                  x1: "6",
                  y1: "6",
                  x2: "18",
                  y2: "18",
                })
              )
            )
          )
      );
    },
    o = () =>
      a().createElement(a().StrictMode, null, a().createElement(r, null));
  window.initChatWidget = () => {
    (() => {
      const e = document.createElement("link");
      (e.href =
        "https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"),
        (e.rel = "stylesheet"),
        document.head.appendChild(e);
    })();
    const e = document.createElement("div");
    (e.id = "chat-widget-container"),
      document.body.appendChild(e),
      n().render(a().createElement(o, null), e);
  };
})();
