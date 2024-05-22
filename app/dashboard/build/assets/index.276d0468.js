import {
  i as Rt,
  B as tn,
  a as rn,
  b as nn,
  j as Cr,
  d as j,
  U as Ft,
  z as on,
  r as sn,
  f as an,
  Q as ln,
  e as cn,
  $ as dn,
  c as wt,
  g as x,
  h as hn,
  C as un,
  k as kt,
  u as Wt,
  l as O,
  m as r,
  H as k,
  n as e,
  T as h,
  o as pn,
  p as z,
  s as mn,
  q as g,
  t as ot,
  J as gn,
  v as wr,
  A as _t,
  w as fn,
  x as bn,
  M as re,
  y as ne,
  D as oe,
  E as se,
  F as ae,
  G as ue,
  I as He,
  K as kr,
  L as xn,
  N as tt,
  O as ie,
  P as R,
  R as $,
  S as _r,
  V as te,
  W as U,
  X as De,
  Y,
  Z as Ue,
  _ as N,
  a0 as vt,
  a1 as Je,
  a2 as yn,
  a3 as Ee,
  a4 as Ne,
  a5 as Sn,
  a6 as vr,
  a7 as Ir,
  a8 as Ke,
  a9 as gt,
  aa as Cn,
  ab as We,
  ac as ft,
  ad as Qt,
  ae as wn,
  af as zr,
  ag as Dr,
  ah as Er,
  ai as he,
  aj as kn,
  ak as _n,
  al as vn,
  am as In,
  an as zn,
  ao as Pt,
  ap as Ur,
  aq as Rr,
  ar as xe,
  as as qt,
  at as Dn,
  au as En,
  av as Un,
  aw as Lt,
  ax as Rn,
  ay as Ln,
  az as Tn,
  aA as An,
  aB as Mn,
  aC as Nn,
  aD as bt,
  aE as Fn,
  aF as Me,
  aG as Wn,
  aH as w,
  aI as st,
  aJ as Lr,
  aK as at,
  aL as M,
  aM as Ot,
  aN as Pn,
  aO as Pe,
  aP as Oe,
  aQ as Tt,
  aR as je,
  aS as ye,
  aT as Se,
  aU as Ce,
  aV as we,
  aW as ke,
  aX as _e,
  aY as Xt,
  aZ as On,
  a_ as jt,
  a$ as xt,
  b0 as Ht,
  b1 as jn,
  b2 as Hn,
  b3 as Bn,
  b4 as Tr,
  b5 as $n,
  b6 as rt,
  b7 as yt,
  b8 as Ar,
  b9 as Vn,
  ba as Gn,
  bb as Mr,
  bc as Te,
  bd as Yn,
  be as Zn,
  bf as Qn,
  bg as Bt,
  bh as zt,
  bi as Jt,
  bj as Nr,
  bk as qn,
  bl as Xn,
  bm as Kt,
  bn as Jn,
  bo as er,
  bp as Fr,
  bq as Kn,
  br as Wr,
  bs as eo,
  bt as to,
  bu as Pr,
  bv as ro,
  bw as no,
  bx as Or,
  by as jr,
  bz as Hr,
  bA as J,
  bB as oo,
  bC as Br,
  bD as so,
  bE as ao,
  bF as io,
  bG as lo,
  bH as co,
  bI as ho,
  bJ as uo,
  bK as $r,
  bL as po,
  bM as tr,
  bN as rr,
  bO as Fe,
  bP as ve,
  bQ as nr,
  bR as de,
  bS as or,
  bT as mo,
  bU as go,
  bV as fo,
  bW as bo,
  bX as xo,
  bY as yo,
  bZ as So,
  b_ as Co,
  b$ as wo,
  c0 as ko,
  c1 as _o,
  c2 as vo,
  c3 as Io,
  c4 as zo,
  c5 as Do,
  c6 as Eo,
  c7 as Uo,
} from "./vendor.146f9f92.js";
(function () {
  const n = document.createElement("link").relList;
  if (n && n.supports && n.supports("modulepreload")) return;
  for (const a of document.querySelectorAll('link[rel="modulepreload"]')) s(a);
  new MutationObserver((a) => {
    for (const i of a)
      if (i.type === "childList")
        for (const l of i.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && s(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function o(a) {
    const i = {};
    return (
      a.integrity && (i.integrity = a.integrity),
      a.referrerpolicy && (i.referrerPolicy = a.referrerpolicy),
      a.crossorigin === "use-credentials"
        ? (i.credentials = "include")
        : a.crossorigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function s(a) {
    if (a.ep) return;
    a.ep = !0;
    const i = o(a);
    fetch(a.href, i);
  }
})();
Rt.use(tn)
  .use(rn)
  .use(nn)
  .init(
    {
      debug: {}.NODE_ENV === "development",
      returnNull: !1,
      fallbackLng: "en",
      interpolation: { escapeValue: !1 },
      react: { useSuspense: !1 },
      load: "languageOnly",
      detection: { caches: ["localStorage", "sessionStorage", "cookie"] },
      backend: { loadPath: Cr(["/dashboard/", "locales/{{lng}}.json"]) },
    },
    function (t, n) {
      j.locale(Rt.language);
    }
  );
Rt.on("languageChanged", (t) => {
  j.locale(t);
});
Ft("zh-cn", on);
Ft("ru", sn);
Ft("fa", an);
const At = new ln(),
  Vr = (t) => {
    const n = document.querySelector('meta[name="theme-color"]');
    n == null || n.setAttribute("content", t == "dark" ? "#1A202C" : "#3B81F6");
  },
  Ro = cn({
    shadows: { outline: "0 0 0 2px var(--chakra-colors-primary-200)" },
    fonts: {
      body: "Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
    },
    colors: {
      "light-border": "#d2d2d4",
      primary: {
        50: "#9cb7f2",
        100: "#88a9ef",
        200: "#749aec",
        300: "#618ce9",
        400: "#4d7de7",
        500: "#396fe4",
        600: "#3364cd",
        700: "#2e59b6",
        800: "#284ea0",
        900: "#224389",
      },
      gray: { 750: "#222C3B" },
    },
    components: {
      Alert: {
        baseStyle: { container: { borderRadius: "6px", fontSize: "sm" } },
      },
      Select: {
        baseStyle: {
          field: {
            _dark: { borderColor: "gray.600", borderRadius: "6px" },
            _light: { borderRadius: "6px" },
          },
        },
      },
      FormHelperText: { baseStyle: { fontSize: "xs" } },
      FormLabel: {
        baseStyle: {
          fontSize: "sm",
          fontWeight: "medium",
          mb: "1",
          _dark: { color: "gray.300" },
        },
      },
      Input: {
        baseStyle: {
          addon: {
            _dark: {
              borderColor: "gray.600",
              _placeholder: { color: "gray.500" },
            },
          },
          field: {
            _focusVisible: {
              boxShadow: "none",
              borderColor: "primary.200",
              outlineColor: "primary.200",
            },
            _dark: {
              borderColor: "gray.600",
              _disabled: { color: "gray.400", borderColor: "gray.500" },
              _placeholder: { color: "gray.500" },
            },
          },
        },
      },
      Table: {
        baseStyle: {
          table: { borderCollapse: "separate", borderSpacing: 0 },
          thead: { borderBottomColor: "light-border" },
          th: {
            background: "#F9FAFB",
            borderColor: "light-border !important",
            borderBottomColor: "light-border !important",
            borderTop: "1px solid ",
            borderTopColor: "light-border !important",
            _first: {
              borderLeft: "1px solid",
              borderColor: "light-border !important",
            },
            _last: {
              borderRight: "1px solid",
              borderColor: "light-border !important",
            },
            _dark: {
              borderColor: "gray.600 !important",
              background: "gray.750",
            },
          },
          td: {
            transition: "all .1s ease-out",
            borderColor: "light-border",
            borderBottomColor: "light-border !important",
            _first: {
              borderLeft: "1px solid",
              borderColor: "light-border",
              _dark: { borderColor: "gray.600" },
            },
            _last: {
              borderRight: "1px solid",
              borderColor: "light-border",
              _dark: { borderColor: "gray.600" },
            },
            _dark: {
              borderColor: "gray.600",
              borderBottomColor: "gray.600 !important",
            },
          },
          tr: {
            "&.interactive": {
              cursor: "pointer",
              _hover: {
                "& > td": { bg: "gray.200" },
                _dark: { "& > td": { bg: "gray.750" } },
              },
            },
            _last: {
              "& > td": {
                _first: { borderBottomLeftRadius: "8px" },
                _last: { borderBottomRightRadius: "8px" },
              },
            },
          },
        },
      },
    },
  });
const St = () => localStorage.getItem("token"),
  Lo = (t) => {
    localStorage.setItem("token", t);
  },
  To = () => {
    localStorage.removeItem("token");
  },
  Ao = dn.create({ baseURL: "http://127.0.0.1:8000/api/" }),
  Mo = (t, n = {}) => (
    St() &&
      (n.headers = {
        ...((n == null ? void 0 : n.headers) || {}),
        Authorization: `Bearer ${St()}`,
      }),
    Ao(t, n)
  ),
  P = Mo,
  No = wt((t) => ({
    isLoading: !0,
    isPostLoading: !1,
    version: null,
    started: !1,
    logs_websocket: null,
    config: "",
    fetchCoreSettings: () => {
      t({ isLoading: !0 }),
        Promise.all([
          P("/core").then(({ version: n, started: o, logs_websocket: s }) =>
            t({ version: n, started: o, logs_websocket: s })
          ),
          P("/core/config").then((n) => t({ config: n })),
        ]).finally(() => t({ isLoading: !1 }));
    },
    updateConfig: (n) => (
      t({ isPostLoading: !0 }),
      P("/core/config", { method: "PUT", body: n }).finally(() => {
        t({ isPostLoading: !1 });
      })
    ),
    restartCore: () => P("/core/restart", { method: "POST" }),
  }));
function ee(t, n = 2, o = !1) {
  if (!+t) return "0 B";
  const s = 1024,
    a = n < 0 ? 0 : n,
    i = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
    l = Math.floor(Math.log(t) / Math.log(s));
  return o
    ? [parseFloat((t / Math.pow(s, l)).toFixed(a)), i[l]]
    : `${parseFloat((t / Math.pow(s, l)).toFixed(a))} ${i[l]}`;
}
const sr = (t) => {
    if (t !== null) return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  },
  Fo = x(hn, { baseStyle: { w: 5, h: 5, position: "relative", zIndex: "2" } }),
  Wo = x(un, { baseStyle: { w: 5, h: 5, position: "relative", zIndex: "2" } }),
  Po = x(kt, { baseStyle: { w: 5, h: 5, position: "relative", zIndex: "2" } }),
  Dt = ({ title: t, content: n, icon: o }) =>
    r(pn, {
      p: 6,
      borderWidth: "1px",
      borderColor: "light-border",
      bg: "#F9FAFB",
      _dark: { borderColor: "gray.600", bg: "gray.750" },
      borderStyle: "solid",
      boxShadow: "none",
      borderRadius: "12px",
      width: "full",
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "row",
      children: [
        r(k, {
          alignItems: "center",
          columnGap: "4",
          children: [
            e(z, {
              p: "2",
              position: "relative",
              color: "white",
              _before: {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                bg: "primary.400",
                display: "block",
                w: "full",
                h: "full",
                borderRadius: "5px",
                opacity: ".5",
                z: "1",
              },
              _after: {
                content: '""',
                position: "absolute",
                top: "-5px",
                left: "-5px",
                bg: "primary.400",
                display: "block",
                w: "calc(100% + 10px)",
                h: "calc(100% + 10px)",
                borderRadius: "8px",
                opacity: ".4",
                z: "1",
              },
              children: o,
            }),
            e(h, {
              color: "gray.600",
              _dark: { color: "gray.300" },
              fontWeight: "medium",
              textTransform: "capitalize",
              fontSize: "sm",
              children: t,
            }),
          ],
        }),
        e(z, { fontSize: "3xl", fontWeight: "semibold", mt: "2", children: n }),
      ],
    }),
  Mt = "statistics-query-key",
  Oo = (t) => {
    const { version: n } = I(),
      { data: o } = Wt({
        queryKey: Mt,
        queryFn: () => P("/system"),
        refetchInterval: 5e3,
        onSuccess: ({ version: a }) => {
          n !== a && I.setState({ version: a });
        },
      }),
      { t: s } = O();
    return r(k, {
      justifyContent: "space-between",
      gap: 0,
      columnGap: { lg: 4, md: 0 },
      rowGap: { lg: 0, base: 4 },
      display: "flex",
      flexDirection: { lg: "row", base: "column" },
      ...t,
      children: [
        e(Dt, {
          title: s("activeUsers"),
          content:
            o &&
            r(k, {
              alignItems: "flex-end",
              children: [
                e(h, { children: sr(o.users_active) }),
                r(h, {
                  fontWeight: "normal",
                  fontSize: "lg",
                  as: "span",
                  display: "inline-block",
                  pb: "5px",
                  children: ["/ ", sr(o.total_user)],
                }),
              ],
            }),
          icon: e(Fo, {}),
        }),
        e(Dt, {
          title: s("dataUsage"),
          content: o && ee(o.incoming_bandwidth + o.outgoing_bandwidth),
          icon: e(Wo, {}),
        }),
        e(Dt, {
          title: s("memoryUsage"),
          content:
            o &&
            r(k, {
              alignItems: "flex-end",
              children: [
                e(h, { children: ee(o.mem_used, 1, !0)[0] }),
                r(h, {
                  fontWeight: "normal",
                  fontSize: "lg",
                  as: "span",
                  display: "inline-block",
                  pb: "5px",
                  children: [
                    ee(o.mem_used, 1, !0)[1],
                    " /",
                    " ",
                    ee(o.mem_total, 1),
                  ],
                }),
              ],
            }),
          icon: e(Po, {}),
        }),
      ],
    });
  },
  Gr = "marzban-num-users-per-page",
  ar = 10,
  jo = () => {
    const t = localStorage.getItem(Gr) || ar.toString();
    return parseInt(t) || ar;
  },
  Ho = (t) => localStorage.setItem(Gr, t),
  Bo = (t) => {
    for (const n in t) t[n] || delete t[n];
    return (
      I.setState({ loading: !0 }),
      P("/users", { query: t })
        .then((n) => (I.setState({ users: n }), n))
        .finally(() => {
          I.setState({ loading: !1 });
        })
    );
  },
  $o = () =>
    P("/inbounds")
      .then((t) => {
        I.setState({ inbounds: new Map(Object.entries(t)) });
      })
      .finally(() => {
        I.setState({ loading: !1 });
      }),
  I = wt(
    mn((t, n) => ({
      version: null,
      editingUser: null,
      deletingUser: null,
      isCreatingNewUser: !1,
      QRcodeLinks: null,
      subscribeUrl: null,
      users: { users: [], total: 0 },
      loading: !0,
      isResetingAllUsage: !1,
      isEditingHosts: !1,
      isEditingNodes: !1,
      isShowingNodesUsage: !1,
      resetUsageUser: null,
      revokeSubscriptionUser: null,
      filters: { username: "", limit: jo(), sort: "-created_at" },
      inbounds: new Map(),
      isEditingCore: !1,
      refetchUsers: () => {
        Bo(n().filters);
      },
      resetAllUsage: () =>
        P("/users/reset", { method: "POST" }).then(() => {
          n().onResetAllUsage(!1), n().refetchUsers();
        }),
      onResetAllUsage: (o) => t({ isResetingAllUsage: o }),
      onCreateUser: (o) => t({ isCreatingNewUser: o }),
      onEditingUser: (o) => {
        t({ editingUser: o });
      },
      onDeletingUser: (o) => {
        t({ deletingUser: o });
      },
      onFilterChange: (o) => {
        t({ filters: { ...n().filters, ...o } }), n().refetchUsers();
      },
      setQRCode: (o) => {
        t({ QRcodeLinks: o });
      },
      deleteUser: (o) => (
        t({ editingUser: null }),
        P(`/user/${o.username}`, { method: "DELETE" }).then(() => {
          t({ deletingUser: null }),
            n().refetchUsers(),
            At.invalidateQueries(Mt);
        })
      ),
      createUser: (o) =>
        P("/user", { method: "POST", body: o }).then(() => {
          t({ editingUser: null }),
            n().refetchUsers(),
            At.invalidateQueries(Mt);
        }),
      editUser: (o) =>
        P(`/user/${o.username}`, { method: "PUT", body: o }).then(() => {
          n().onEditingUser(null), n().refetchUsers();
        }),
      fetchUserUsage: (o, s) => {
        for (const a in s) s[a] || delete s[a];
        return P(`/user/${o.username}/usage`, { method: "GET", query: s });
      },
      onEditingHosts: (o) => {
        t({ isEditingHosts: o });
      },
      onEditingNodes: (o) => {
        t({ isEditingNodes: o });
      },
      onShowingNodesUsage: (o) => {
        t({ isShowingNodesUsage: o });
      },
      setSubLink: (o) => {
        t({ subscribeUrl: o });
      },
      resetDataUsage: (o) =>
        P(`/user/${o.username}/reset`, { method: "POST" }).then(() => {
          t({ resetUsageUser: null }), n().refetchUsers();
        }),
      revokeSubscription: (o) =>
        P(`/user/${o.username}/revoke_sub`, { method: "POST" }).then((s) => {
          t({ revokeSubscriptionUser: null, editingUser: s }),
            n().refetchUsers();
        }),
    }))
  ),
  le = ({ children: t, color: n }) =>
    e(z, {
      position: "relative",
      width: "36px",
      height: "36px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      _before: {
        content: '""',
        display: "block",
        position: "absolute",
        top: "0",
        left: "0",
        width: "calc(100%)",
        height: "calc(100%)",
        bg: `${n}.400`,
        opacity: ".5",
        borderRadius: "5px",
        zIndex: "1",
        _dark: { bg: `${n}.400` },
      },
      _after: {
        content: '""',
        display: "block",
        position: "absolute",
        top: "0",
        left: "0",
        width: "calc(100% + 10px)",
        height: "calc(100% + 10px)",
        transform: "translate(-5px, -5px)",
        bg: `${n}.400`,
        opacity: ".4",
        borderRadius: "8px",
        zIndex: "1",
        _dark: { bg: `${n}.400` },
      },
      children: e(h, {
        color: `${n}.500`,
        _dark: { color: `${n}.900` },
        position: "relative",
        zIndex: "2",
        children: t,
      }),
    });
window.ace.define(
  "ace/theme/nord_dark",
  ["require", "exports", "module", "ace/lib/dom"],
  (t, n, o) => {
    (n.isDark = !0),
      (n.cssClass = "ace-nord-dark"),
      t("../lib/dom").importCssString(n.cssText, n.cssClass);
  }
);
window.ace.define(
  "ace/theme/dawn",
  ["require", "exports", "module", "ace/lib/dom"],
  (t, n, o) => {
    (n.isDark = !1),
      (n.cssClass = "ace-dawn"),
      t("../lib/dom").importCssString(n.cssText, n.cssClass);
  }
);
const Vo = g.exports.forwardRef(
    ({ json: t, onChange: n, mode: o = "code" }, s) => {
      const { colorMode: a } = ot(),
        i = {
          mode: o,
          onChangeText: n,
          statusBar: !1,
          mainMenuBar: !1,
          theme: a === "dark" ? "ace/theme/nord_dark" : "ace/theme/dawn",
        },
        l = g.exports.useRef(null),
        u = g.exports.useRef(null);
      return (
        g.exports.useEffect(
          () => (
            (u.current = new gn(l.current, i)),
            () => {
              u.current && u.current.destroy();
            }
          ),
          []
        ),
        g.exports.useEffect(() => {
          u.current && u.current.update(t);
        }, [t]),
        e(z, {
          ref: s,
          border: "1px solid",
          borderColor: "gray.300",
          _dark: { borderColor: "gray.500" },
          borderRadius: 5,
          h: "full",
          children: e(z, { height: "full", ref: l }),
        })
      );
    }
  ),
  ir = 500,
  Go = x(wr, { baseStyle: { w: 5, h: 5 } }),
  Yo = x(_t, { baseStyle: { w: 4, h: 4 } }),
  Zo = x(fn, { baseStyle: { w: 4, h: 4 } }),
  Qo = x(bn, { baseStyle: { w: 3, h: 3 } }),
  qo = (t) =>
    ({
      [Je.ReadyState.CONNECTING]: "connecting",
      [Je.ReadyState.OPEN]: "connected",
      [Je.ReadyState.CLOSING]: "closed",
      [Je.ReadyState.CLOSED]: "closed",
      [Je.ReadyState.UNINSTANTIATED]: "closed",
    }[t]),
  Xo = () => {
    try {
      let t = new URL(
        "http://127.0.0.1:8000/api/".startsWith("/")
          ? window.location.origin + "http://127.0.0.1:8000/api/"
          : "http://127.0.0.1:8000/api/"
      );
      return (
        (t.protocol === "https:" ? "wss://" : "ws://") +
        Cr([t.host + t.pathname, "/core/logs"]) +
        "?interval=1&token=" +
        St()
      );
    } catch (t) {
      return (
        console.error("Unable to generate websocket url"),
        console.error(t),
        null
      );
    }
  };
let Re = [];
const Jo = () => {
    const { isEditingCore: t } = I(),
      {
        fetchCoreSettings: n,
        updateConfig: o,
        isLoading: s,
        config: a,
        isPostLoading: i,
        version: l,
        restartCore: u,
      } = No(),
      p = g.exports.useRef(null),
      [y, d] = g.exports.useState([]),
      { t: c } = O(),
      C = ue(),
      _ = He({ defaultValues: { config: a || {} } });
    g.exports.useEffect(() => {
      a && _.setValue("config", a);
    }, [a]),
      g.exports.useEffect(() => {
        t && n();
      }, [t]);
    const f = g.exports.useRef(!0),
      S = g.exports.useCallback(
        kr((D) => {
          var q, L, X;
          const F =
            Math.abs(
              (((q = p.current) == null ? void 0 : q.scrollTop) || 0) -
                (((L = p.current) == null ? void 0 : L.scrollHeight) || 0) +
                (((X = p.current) == null ? void 0 : X.offsetHeight) || 0)
            ) < 10;
          p.current && F ? (f.current = !0) : (f.current = !1),
            D.length < 40 && d(D);
        }, 300),
        []
      ),
      { readyState: T } = xn(Xo(), {
        onMessage: (D) => {
          Re.push(D.data),
            Re.length > ir && (Re = Re.splice(0, Re.length - ir)),
            S([...Re]);
        },
        shouldReconnect: () => !0,
        reconnectAttempts: 10,
        reconnectInterval: 1e3,
      });
    g.exports.useEffect(() => {
      var D;
      p.current &&
        f.current &&
        (p.current.scrollTop =
          (D = p.current) == null ? void 0 : D.scrollHeight);
    }, [y]),
      g.exports.useEffect(
        () => () => {
          Re = [];
        },
        []
      );
    const m = qo(T.toString()),
      { mutate: b, isLoading: W } = tt(u),
      H = ({ config: D }) => {
        o(D)
          .then(() => {
            C({
              title: c("core.successMessage"),
              status: "success",
              isClosable: !0,
              position: "top",
              duration: 3e3,
            });
          })
          .catch((F) => {
            let q = c("core.generalErrorMessage");
            typeof F.response._data.detail == "object" &&
              (q =
                F.response._data.detail[
                  Object.keys(F.response._data.detail)[0]
                ]),
              typeof F.response._data.detail == "string" &&
                (q = F.response._data.detail),
              C({
                title: q,
                status: "error",
                isClosable: !0,
                position: "top",
                duration: 3e3,
              });
          });
      },
      E = g.exports.useRef(null),
      [A, V] = g.exports.useState(!1),
      Q = () => {
        var D;
        document.fullscreenElement
          ? (document.exitFullscreen(), V(!1))
          : ((D = E.current) == null || D.requestFullscreen(), V(!0));
      };
    return r("form", {
      onSubmit: _.handleSubmit(H),
      children: [
        r(ie, {
          children: [
            r(R, {
              children: [
                r(k, {
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  children: [
                    r($, {
                      children: [
                        c("core.configuration"),
                        " ",
                        s && e(_r, { isIndeterminate: !0, size: "15px" }),
                      ],
                    }),
                    e(k, {
                      gap: 0,
                      children: e(te, {
                        label: "Xray Version",
                        placement: "top",
                        children: e(U, {
                          height: "100%",
                          textTransform: "lowercase",
                          children: l && `v${l}`,
                        }),
                      }),
                    }),
                  ],
                }),
                r(z, {
                  position: "relative",
                  ref: E,
                  minHeight: "300px",
                  children: [
                    e(De, {
                      control: _.control,
                      name: "config",
                      render: ({ field: D }) =>
                        e(Vo, { json: a, onChange: D.onChange }),
                    }),
                    e(Y, {
                      size: "xs",
                      "aria-label": "full screen",
                      variant: "ghost",
                      position: "absolute",
                      top: "2",
                      right: "4",
                      onClick: Q,
                      children: A ? e(Qo, {}) : e(Zo, {}),
                    }),
                  ],
                }),
              ],
            }),
            r(R, {
              mt: "4",
              children: [
                r(k, {
                  justifyContent: "space-between",
                  children: [
                    e($, { children: c("core.logs") }),
                    e(h, { as: $, children: c(`core.socket.${m}`) }),
                  ],
                }),
                e(z, {
                  border: "1px solid",
                  borderColor: "gray.300",
                  bg: "#F9F9F9",
                  _dark: { borderColor: "gray.500", bg: "#2e3440" },
                  borderRadius: 5,
                  minHeight: "200px",
                  maxHeight: "250px",
                  p: 2,
                  overflowY: "auto",
                  ref: p,
                  children: y.map((D, F) =>
                    e(
                      h,
                      {
                        fontSize: "xs",
                        opacity: 0.8,
                        whiteSpace: "pre-line",
                        children: D,
                      },
                      F
                    )
                  ),
                }),
              ],
            }),
          ],
        }),
        e(Ue, {
          children: r(k, {
            w: "full",
            justifyContent: "space-between",
            children: [
              e(z, {
                children: e(N, {
                  size: "sm",
                  leftIcon: e(Yo, { className: vt({ "animate-spin": W }) }),
                  onClick: () => b(),
                  children: c(W ? "core.restarting" : "core.restartCore"),
                }),
              }),
              e(k, {
                children: e(N, {
                  size: "sm",
                  variant: "solid",
                  colorScheme: "primary",
                  px: "5",
                  type: "submit",
                  isDisabled: s || i,
                  isLoading: i,
                  children: c("core.save"),
                }),
              }),
            ],
          }),
        }),
      ],
    });
  },
  Ko = () => {
    const { isEditingCore: t } = I(),
      n = I.setState.bind(null, { isEditingCore: !1 }),
      { t: o } = O();
    return r(re, {
      isOpen: t,
      onClose: n,
      size: "3xl",
      children: [
        e(ne, { bg: "blackAlpha.300", backdropFilter: "blur(10px)" }),
        r(oe, {
          mx: "3",
          w: "full",
          children: [
            e(se, {
              pt: 6,
              children: r(k, {
                gap: 2,
                children: [
                  e(le, {
                    color: "primary",
                    children: e(Go, { color: "white" }),
                  }),
                  e(h, {
                    fontWeight: "semibold",
                    fontSize: "lg",
                    children: o("core.title"),
                  }),
                ],
              }),
            }),
            e(ae, { mt: 3 }),
            e(Jo, {}),
          ],
        }),
      ],
    });
  },
  it = x(yn, { baseStyle: { w: 5, h: 5 } }),
  es = () => {
    const [t, n] = g.exports.useState(!1),
      { deletingUser: o, onDeletingUser: s, deleteUser: a } = I(),
      { t: i } = O(),
      l = ue(),
      u = () => {
        s(null);
      },
      p = () => {
        o &&
          (n(!0),
          a(o)
            .then(() => {
              l({
                title: i("deleteUser.deleteSuccess", { username: o.username }),
                status: "success",
                isClosable: !0,
                position: "top",
                duration: 3e3,
              });
            })
            .then(u)
            .finally(n.bind(null, !1)));
      };
    return r(re, {
      isCentered: !0,
      isOpen: !!o,
      onClose: u,
      size: "sm",
      children: [
        e(ne, { bg: "blackAlpha.300", backdropFilter: "blur(10px)" }),
        r(oe, {
          mx: "3",
          children: [
            e(se, {
              pt: 6,
              children: e(le, { color: "red", children: e(it, {}) }),
            }),
            e(ae, { mt: 3 }),
            r(ie, {
              children: [
                e(h, {
                  fontWeight: "semibold",
                  fontSize: "lg",
                  children: i("deleteUser.title"),
                }),
                o &&
                  e(h, {
                    mt: 1,
                    fontSize: "sm",
                    _dark: { color: "gray.400" },
                    color: "gray.600",
                    children: e(Ee, {
                      components: { b: e("b", {}) },
                      children: i("deleteUser.prompt", {
                        username: o.username,
                      }),
                    }),
                  }),
              ],
            }),
            r(Ue, {
              display: "flex",
              children: [
                e(N, {
                  size: "sm",
                  onClick: u,
                  mr: 3,
                  w: "full",
                  variant: "outline",
                  children: i("cancel"),
                }),
                e(N, {
                  size: "sm",
                  w: "full",
                  colorScheme: "red",
                  onClick: p,
                  leftIcon: t ? e(Ne, { size: "xs" }) : void 0,
                  children: i("delete"),
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  $t = { baseStyle: { w: 4, h: 4 } },
  ts = x(Sn, $t),
  rs = x(vr, $t),
  Yr = x(_t, $t),
  ns = kr((t) => {
    I.getState().onFilterChange({
      ...I.getState().filters,
      offset: 0,
      search: t,
    });
  }, 300),
  os = ({ ...t }) => {
    const {
        loading: n,
        filters: o,
        onFilterChange: s,
        refetchUsers: a,
        onCreateUser: i,
      } = I(),
      { t: l } = O(),
      [u, p] = g.exports.useState(""),
      y = (c) => {
        p(c.target.value), ns(c.target.value);
      },
      d = () => {
        p(""), s({ ...o, offset: 0, search: "" });
      };
    return r(Ir, {
      id: "filters",
      templateColumns: {
        lg: "repeat(3, 1fr)",
        md: "repeat(4, 1fr)",
        base: "repeat(1, 1fr)",
      },
      position: "sticky",
      top: 0,
      mx: "-6",
      px: "6",
      rowGap: 4,
      gap: { lg: 4, base: 0 },
      bg: "var(--chakra-colors-chakra-body-bg)",
      py: 4,
      zIndex: "docked",
      ...t,
      children: [
        e(Ke, {
          colSpan: { base: 1, md: 2, lg: 1 },
          order: { base: 2, md: 1 },
          children: r(gt, {
            children: [
              e(Cn, { pointerEvents: "none", children: e(ts, {}) }),
              e(We, {
                placeholder: l("search"),
                value: u,
                borderColor: "light-border",
                onChange: y,
              }),
              r(ft, {
                children: [
                  n && e(Ne, { size: "xs" }),
                  o.search &&
                    o.search.length > 0 &&
                    e(Y, {
                      onClick: d,
                      "aria-label": "clear",
                      size: "xs",
                      variant: "ghost",
                      children: e(rs, {}),
                    }),
                ],
              }),
            ],
          }),
        }),
        e(Ke, {
          colSpan: 2,
          order: { base: 1, md: 2 },
          children: r(k, {
            justifyContent: "flex-end",
            alignItems: "center",
            h: "full",
            children: [
              e(Y, {
                "aria-label": "refresh users",
                disabled: n,
                onClick: a,
                size: "sm",
                variant: "outline",
                children: e(Yr, { className: vt({ "animate-spin": n }) }),
              }),
              e(N, {
                colorScheme: "primary",
                size: "sm",
                onClick: () => i(!0),
                px: 5,
                children: l("createUser"),
              }),
            ],
          }),
        }),
      ],
    });
  },
  Zr = "https://github.com/Gozargah/Marzban",
  ss = "https://github.com/Gozargah",
  as = "https://github.com/Gozargah/Marzban#donation",
  Qr = (t) => {
    const { version: n } = I();
    return e(k, {
      w: "full",
      py: "0",
      position: "relative",
      ...t,
      children: r(h, {
        display: "inline-block",
        flexGrow: 1,
        textAlign: "center",
        color: "gray.500",
        fontSize: "xs",
        children: [
          e(Qt, { color: "blue.400", href: Zr, children: "Marzban" }),
          n ? ` (v${n}), ` : ", ",
          "Made with \u2764\uFE0F in",
          " ",
          e(Qt, { color: "blue.400", href: ss, children: "Gozargah" }),
        ],
      }),
    });
  },
  is = x(wn, { baseStyle: { w: 4, h: 4 } }),
  qr = ({ actions: t }) => {
    const { i18n: n } = O();
    var o = (s) => {
      n.changeLanguage(s);
    };
    return r(zr, {
      placement: "bottom-end",
      children: [
        e(Dr, {
          as: Y,
          size: "sm",
          variant: "outline",
          icon: e(is, {}),
          position: "relative",
        }),
        r(Er, {
          minW: "100px",
          zIndex: 9999,
          children: [
            e(he, {
              maxW: "100px",
              fontSize: "sm",
              onClick: () => o("en"),
              children: "English",
            }),
            e(he, {
              maxW: "100px",
              fontSize: "sm",
              onClick: () => o("fa"),
              children: "\u0641\u0627\u0631\u0633\u06CC",
            }),
            e(he, {
              maxW: "100px",
              fontSize: "sm",
              onClick: () => o("zh-cn"),
              children: "\u7B80\u4F53\u4E2D\u6587",
            }),
            e(he, {
              maxW: "100px",
              fontSize: "sm",
              onClick: () => o("ru"),
              children: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439",
            }),
          ],
        }),
      ],
    });
  },
  pe = { baseStyle: { w: 4, h: 4 } },
  ls = x(kn, pe),
  cs = x(_n, pe),
  ds = x(wr, pe),
  hs = x(vn, pe),
  us = x(In, pe),
  ps = x(zn, pe),
  ms = x(Pt, pe),
  gs = x(Ur, pe),
  fs = x(kt, pe),
  bs = x(Rr, pe),
  lr = x(z, {
    baseStyle: {
      bg: "yellow.500",
      w: "2",
      h: "2",
      rounded: "full",
      position: "absolute",
    },
  }),
  Xr = "marzban-menu-notification",
  xs = () => {
    const t = localStorage.getItem(Xr);
    if (!t) return !0;
    try {
      return t && En(parseInt(t))
        ? Un(new Date(), new Date(parseInt(t))) >= 7
        : !0;
    } catch {
      return !0;
    }
  },
  ys = ({ actions: t }) => {
    const {
        onEditingHosts: n,
        onResetAllUsage: o,
        onEditingNodes: s,
        onShowingNodesUsage: a,
      } = I(),
      { t: i } = O(),
      { colorMode: l, toggleColorMode: u } = ot(),
      [p, y] = g.exports.useState(xs()),
      d = l === "dark" ? "dark_dimmed" : l,
      c = () => {
        localStorage.setItem(Xr, new Date().getTime().toString()), y(!1);
      };
    return r(k, {
      gap: 2,
      justifyContent: "space-between",
      __css: { "& .menuList": { direction: "ltr" } },
      position: "relative",
      children: [
        e(h, {
          as: "h1",
          fontWeight: "semibold",
          fontSize: "2xl",
          children: i("users"),
        }),
        p && e(lr, { top: "0", right: "0", zIndex: 9999 }),
        e(z, {
          overflow: "auto",
          css: { direction: "rtl" },
          children: r(k, {
            alignItems: "center",
            children: [
              r(zr, {
                children: [
                  e(Dr, {
                    as: Y,
                    size: "sm",
                    variant: "outline",
                    icon: e(xe, { children: e(hs, {}) }),
                    position: "relative",
                  }),
                  r(Er, {
                    minW: "170px",
                    zIndex: 99999,
                    className: "menuList",
                    children: [
                      e(he, {
                        maxW: "170px",
                        fontSize: "sm",
                        icon: e(ms, {}),
                        onClick: n.bind(null, !0),
                        children: i("header.hostSettings"),
                      }),
                      e(he, {
                        maxW: "170px",
                        fontSize: "sm",
                        icon: e(gs, {}),
                        onClick: s.bind(null, !0),
                        children: i("header.nodeSettings"),
                      }),
                      e(he, {
                        maxW: "170px",
                        fontSize: "sm",
                        icon: e(fs, {}),
                        onClick: a.bind(null, !0),
                        children: i("header.nodesUsage"),
                      }),
                      e(he, {
                        maxW: "170px",
                        fontSize: "sm",
                        icon: e(bs, {}),
                        onClick: o.bind(null, !0),
                        children: i("resetAllUsage"),
                      }),
                      e(qt, {
                        to: as,
                        target: "_blank",
                        children: r(he, {
                          maxW: "170px",
                          fontSize: "sm",
                          icon: e(ps, {}),
                          position: "relative",
                          onClick: c,
                          children: [
                            i("header.donation"),
                            " ",
                            p && e(lr, { top: "3", right: "2" }),
                          ],
                        }),
                      }),
                      e(qt, {
                        to: "/login",
                        children: e(he, {
                          maxW: "170px",
                          fontSize: "sm",
                          icon: e(us, {}),
                          children: i("header.logout"),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              e(Y, {
                size: "sm",
                variant: "outline",
                "aria-label": "core settings",
                onClick: () => {
                  I.setState({ isEditingCore: !0 });
                },
                children: e(ds, {}),
              }),
              e(qr, {}),
              e(Y, {
                size: "sm",
                variant: "outline",
                "aria-label": "switch theme",
                onClick: () => {
                  Vr(l == "dark" ? "light" : "dark"), u();
                },
                children: l === "light" ? e(ls, {}) : e(cs, {}),
              }),
              e(z, {
                css: { direction: "ltr" },
                display: "flex",
                alignItems: "center",
                pr: "2",
                __css: { "&  span": { display: "inline-flex" } },
                children: e(Dn, {
                  href: Zr,
                  "data-color-scheme": `no-preference: ${d}; light: ${d}; dark: ${d};`,
                  "data-size": "large",
                  "data-show-count": "true",
                  "aria-label": "Star Marzban on GitHub",
                  children: "Star",
                }),
              }),
            ],
          }),
        }),
      ],
    });
  },
  Ss = [
    { title: "Inbound's default", value: "inbound_default" },
    { title: "TLS", value: "tls" },
    { title: "None", value: "none" },
  ],
  Cs = [
    { title: "", value: "" },
    { title: "h2", value: "h2" },
    { title: "http/1.1", value: "http/1.1" },
    { title: "h2, http/1.1", value: "h2,http/1.1" },
  ],
  ws = [
    { title: "", value: "" },
    ...[
      "chrome",
      "firefox",
      "safari",
      "ios",
      "android",
      "edge",
      "360",
      "qq",
      "random",
      "randomized",
    ].map((t) => ({ title: t, value: t })),
  ],
  ks = [
    { title: "none", value: "" },
    { title: "xtls-rprx-vision", value: "xtls-rprx-vision" },
  ],
  _s = ["aes-128-gcm", "aes-256-gcm", "chacha20-ietf-poly1305"],
  vs = wt((t) => ({
    isLoading: !1,
    isPostLoading: !1,
    hosts: {},
    fetchHosts: () => {
      t({ isLoading: !0 }),
        P("/hosts")
          .then((n) => t({ hosts: n }))
          .finally(() => t({ isLoading: !1 }));
    },
    setHosts: (n) => (
      t({ isPostLoading: !0 }),
      P("/hosts", { method: "PUT", body: n }).finally(() => {
        t({ isPostLoading: !1 });
      })
    ),
  }));
const Is = x(vr, { baseStyle: { w: 4, h: 4 } }),
  Ae = Lt.forwardRef(
    (
      {
        disabled: t,
        step: n,
        label: o,
        className: s,
        startAdornment: a,
        endAdornment: i,
        type: l = "text",
        placeholder: u,
        onChange: p,
        onBlur: y,
        name: d,
        value: c,
        onClick: C,
        error: _,
        clearable: f = !1,
        ...S
      },
      T
    ) => {
      const m = () => {
          p && p({ target: { value: "", name: d } });
        },
        { size: b = "md" } = S,
        W = l == "number" ? Fn : We,
        H = l == "number" ? Rn : Lt.Fragment,
        E =
          l == "number"
            ? {
                keepWithinRange: !0,
                precision: 5,
                format: (A) =>
                  isNaN(parseFloat(String(A))) ||
                  Number(parseFloat(String(A)).toFixed(5)) === 0
                    ? A
                    : Number(parseFloat(String(A)).toFixed(5)),
                min: 0,
                step: n,
                name: d,
                type: l,
                placeholder: u,
                onChange: (A) => {
                  p && p(A);
                },
                onBlur: y,
                value: c,
                onClick: C,
                disabled: t,
                flexGrow: 1,
                size: b,
              }
            : {};
      return r(R, {
        isInvalid: !!_,
        children: [
          o && e($, { children: o }),
          r(gt, {
            size: b,
            w: "full",
            rounded: "md",
            _focusWithin: { outline: "2px solid", outlineColor: "primary.200" },
            bg: t ? "gray.100" : "transparent",
            _dark: { bg: t ? "gray.600" : "transparent" },
            children: [
              a && e(Ln, { children: a }),
              r(H, {
                ...E,
                children: [
                  e(W, {
                    name: d,
                    ref: T,
                    step: n,
                    className: vt(s),
                    type: l,
                    placeholder: u,
                    onChange: p,
                    onBlur: y,
                    value: c,
                    onClick: C,
                    disabled: t,
                    flexGrow: 1,
                    _focusVisible: {
                      outline: "none",
                      borderTopColor: "transparent",
                      borderRightColor: "transparent",
                      borderBottomColor: "transparent",
                    },
                    _disabled: { cursor: "not-allowed" },
                    ...S,
                    roundedLeft: a ? "0" : "md",
                    roundedRight: i ? "0" : "md",
                  }),
                  l == "number" &&
                    e(xe, {
                      children: r(Tn, { children: [e(An, {}), e(Mn, {})] }),
                    }),
                ],
              }),
              i &&
                e(Nn, {
                  borderLeftRadius: 0,
                  borderRightRadius: "6px",
                  bg: "transparent",
                  children: i,
                }),
              f &&
                c &&
                c.length &&
                e(ft, {
                  borderLeftRadius: 0,
                  borderRightRadius: "6px",
                  bg: "transparent",
                  onClick: m,
                  cursor: "pointer",
                  children: e(Is, {}),
                }),
            ],
          }),
          !!_ && e(bt, { children: _ }),
        ],
      });
    }
  ),
  Et = x(Me, { baseStyle: { bg: "white", _dark: { bg: "gray.700" } } }),
  Le = x(Ae, { baseStyle: { bg: "white", _dark: { bg: "gray.700" } } }),
  zs = x(Pt, { baseStyle: { w: 5, h: 5 } }),
  Ie = x(Wn, {
    baseStyle: { w: 4, h: 4, color: "gray.400", cursor: "pointer" },
  }),
  Ds = w.record(
    w.string().min(1),
    w.array(
      w.object({
        remark: w.string().min(1, "Remark is required"),
        address: w.string().min(1, "Address is required"),
        port: w
          .string()
          .or(w.number())
          .nullable()
          .transform((t) =>
            typeof t == "number"
              ? t
              : t !== null && !isNaN(parseInt(t))
              ? Number(parseInt(t))
              : null
          ),
        path: w.string().nullable(),
        sni: w.string().nullable(),
        host: w.string().nullable(),
        mux_enable: w.boolean().default(!1),
        allowinsecure: w.boolean().nullable().default(!1),
        is_disabled: w.boolean().default(!0),
        fragment_setting: w.string().nullable(),
        security: w.string(),
        alpn: w.string(),
        fingerprint: w.string(),
      })
    )
  ),
  ze = x(bt, {
    baseStyle: {
      color: "red.400",
      display: "block",
      textAlign: "left",
      w: "100%",
    },
  }),
  Es = ({ hostKey: t, isOpen: n, toggleAccordion: o }) => {
    const { inbounds: s } = I(),
      a = [...s.values()].flat().filter((_) => _.tag === t)[0],
      i = Ot(),
      { fields: l, append: u, remove: p } = Pn({ control: i.control, name: t }),
      { errors: y } = i.formState,
      { t: d } = O(),
      c = y[t],
      C = () => {
        u({
          host: "",
          sni: "",
          port: null,
          path: null,
          address: "",
          remark: "",
          mux_enable: !1,
          allowinsecure: !1,
          is_disabled: !1,
          fragment_setting: "",
          security: "inbound_default",
          alpn: "",
          fingerprint: "",
        });
      };
    return (
      g.exports.useEffect(() => {
        c && !n && o();
      }, [c]),
      r(Pe, {
        border: "1px solid",
        _dark: { borderColor: "gray.600" },
        _light: { borderColor: "gray.200" },
        borderRadius: "4px",
        p: 1,
        w: "full",
        children: [
          r(Oe, {
            px: 2,
            borderRadius: "3px",
            onClick: o,
            children: [
              e(h, {
                as: "span",
                fontWeight: "medium",
                fontSize: "sm",
                flex: "1",
                textAlign: "left",
                color: "gray.700",
                _dark: { color: "gray.300" },
                children: t,
              }),
              e(Tt, {}),
            ],
          }),
          e(je, {
            px: 2,
            pb: 2,
            children: r(M, {
              gap: 3,
              children: [
                l.map((_, f) => {
                  var S,
                    T,
                    m,
                    b,
                    W,
                    H,
                    E,
                    A,
                    V,
                    Q,
                    D,
                    F,
                    q,
                    L,
                    X,
                    K,
                    dt,
                    ht,
                    me,
                    $e,
                    Ve,
                    Ge,
                    Ye,
                    Ze,
                    v,
                    B,
                    ge,
                    fe,
                    ce,
                    be,
                    G,
                    Qe,
                    qe;
                  return r(
                    M,
                    {
                      border: "1px solid",
                      _dark: { borderColor: "gray.600", bg: "#273142" },
                      _light: { borderColor: "gray.200", bg: "#fcfbfb" },
                      p: 2,
                      w: "full",
                      borderRadius: "4px",
                      children: [
                        e(k, {
                          w: "100%",
                          alignItems: "flex-start",
                          children: r(R, {
                            position: "relative",
                            zIndex: 10,
                            isInvalid: !!(
                              c && ((S = c[f]) == null ? void 0 : S.remark)
                            ),
                            children: [
                              r(gt, {
                                children: [
                                  e(Le, {
                                    ...i.register(t + "." + f + ".remark"),
                                    size: "sm",
                                    borderRadius: "4px",
                                    placeholder: "Remark",
                                  }),
                                  e(ft, {
                                    children: r(ye, {
                                      isLazy: !0,
                                      placement: "right",
                                      children: [
                                        e(Se, {
                                          children: e(z, {
                                            mt: "-8px",
                                            children: e(Ie, {}),
                                          }),
                                        }),
                                        e(Ce, {
                                          children: r(we, {
                                            children: [
                                              e(ke, {}),
                                              e(_e, {}),
                                              e(Xt, {
                                                children: r(z, {
                                                  fontSize: "xs",
                                                  children: [
                                                    e(h, {
                                                      pr: "20px",
                                                      children:
                                                        d("hostsDialog.desc"),
                                                    }),
                                                    r(h, {
                                                      children: [
                                                        r(U, {
                                                          children: [
                                                            "{",
                                                            "SERVER_IP",
                                                            "}",
                                                          ],
                                                        }),
                                                        " ",
                                                        d(
                                                          "hostsDialog.currentServer"
                                                        ),
                                                      ],
                                                    }),
                                                    r(h, {
                                                      mt: 1,
                                                      children: [
                                                        r(U, {
                                                          children: [
                                                            "{",
                                                            "USERNAME",
                                                            "}",
                                                          ],
                                                        }),
                                                        " ",
                                                        d(
                                                          "hostsDialog.username"
                                                        ),
                                                      ],
                                                    }),
                                                    r(h, {
                                                      mt: 1,
                                                      children: [
                                                        r(U, {
                                                          children: [
                                                            "{",
                                                            "DATA_USAGE",
                                                            "}",
                                                          ],
                                                        }),
                                                        " ",
                                                        d(
                                                          "hostsDialog.dataUsage"
                                                        ),
                                                      ],
                                                    }),
                                                    r(h, {
                                                      mt: 1,
                                                      children: [
                                                        r(U, {
                                                          children: [
                                                            "{",
                                                            "DATA_LEFT",
                                                            "}",
                                                          ],
                                                        }),
                                                        " ",
                                                        d(
                                                          "hostsDialog.remainingData"
                                                        ),
                                                      ],
                                                    }),
                                                    r(h, {
                                                      mt: 1,
                                                      children: [
                                                        r(U, {
                                                          children: [
                                                            "{",
                                                            "DATA_LIMIT",
                                                            "}",
                                                          ],
                                                        }),
                                                        " ",
                                                        d(
                                                          "hostsDialog.dataLimit"
                                                        ),
                                                      ],
                                                    }),
                                                    r(h, {
                                                      mt: 1,
                                                      children: [
                                                        r(U, {
                                                          children: [
                                                            "{",
                                                            "DAYS_LEFT",
                                                            "}",
                                                          ],
                                                        }),
                                                        " ",
                                                        d(
                                                          "hostsDialog.remainingDays"
                                                        ),
                                                      ],
                                                    }),
                                                    r(h, {
                                                      mt: 1,
                                                      children: [
                                                        r(U, {
                                                          children: [
                                                            "{",
                                                            "EXPIRE_DATE",
                                                            "}",
                                                          ],
                                                        }),
                                                        " ",
                                                        d(
                                                          "hostsDialog.expireDate"
                                                        ),
                                                      ],
                                                    }),
                                                    r(h, {
                                                      mt: 1,
                                                      children: [
                                                        r(U, {
                                                          children: [
                                                            "{",
                                                            "JALALI_EXPIRE_DATE",
                                                            "}",
                                                          ],
                                                        }),
                                                        " ",
                                                        d(
                                                          "hostsDialog.jalaliExpireDate"
                                                        ),
                                                      ],
                                                    }),
                                                    r(h, {
                                                      mt: 1,
                                                      children: [
                                                        r(U, {
                                                          children: [
                                                            "{",
                                                            "TIME_LEFT",
                                                            "}",
                                                          ],
                                                        }),
                                                        " ",
                                                        d(
                                                          "hostsDialog.remainingTime"
                                                        ),
                                                      ],
                                                    }),
                                                    r(h, {
                                                      mt: 1,
                                                      children: [
                                                        r(U, {
                                                          children: [
                                                            "{",
                                                            "STATUS_TEXT",
                                                            "}",
                                                          ],
                                                        }),
                                                        " ",
                                                        d(
                                                          "hostsDialog.statusText"
                                                        ),
                                                      ],
                                                    }),
                                                    r(h, {
                                                      mt: 1,
                                                      children: [
                                                        r(U, {
                                                          children: [
                                                            "{",
                                                            "STATUS_EMOJI",
                                                            "}",
                                                          ],
                                                        }),
                                                        " ",
                                                        d(
                                                          "hostsDialog.statusEmoji"
                                                        ),
                                                      ],
                                                    }),
                                                    r(h, {
                                                      mt: 1,
                                                      children: [
                                                        r(U, {
                                                          children: [
                                                            "{",
                                                            "PROTOCOL",
                                                            "}",
                                                          ],
                                                        }),
                                                        " ",
                                                        d(
                                                          "hostsDialog.proxyProtocol"
                                                        ),
                                                      ],
                                                    }),
                                                    r(h, {
                                                      mt: 1,
                                                      children: [
                                                        r(U, {
                                                          children: [
                                                            "{",
                                                            "TRANSPORT",
                                                            "}",
                                                          ],
                                                        }),
                                                        " ",
                                                        d(
                                                          "hostsDialog.proxyMethod"
                                                        ),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                              }),
                                            ],
                                          }),
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                              c &&
                                ((T = c[f]) == null ? void 0 : T.remark) &&
                                e(ze, {
                                  children:
                                    (b =
                                      (m = c[f]) == null ? void 0 : m.remark) ==
                                    null
                                      ? void 0
                                      : b.message,
                                }),
                            ],
                          }),
                        }),
                        r(R, {
                          isInvalid: !!(
                            c && ((W = c[f]) == null ? void 0 : W.address)
                          ),
                          children: [
                            r(gt, {
                              children: [
                                e(Le, {
                                  size: "sm",
                                  borderRadius: "4px",
                                  placeholder: "Address (e.g. example.com)",
                                  ...i.register(t + "." + f + ".address"),
                                }),
                                e(ft, {
                                  children: r(ye, {
                                    isLazy: !0,
                                    placement: "right",
                                    children: [
                                      e(Se, {
                                        children: e(z, {
                                          mt: "-8px",
                                          children: e(Ie, {}),
                                        }),
                                      }),
                                      e(Ce, {
                                        children: r(we, {
                                          children: [
                                            e(ke, {}),
                                            e(_e, {}),
                                            e(Xt, {
                                              children: r(z, {
                                                fontSize: "xs",
                                                children: [
                                                  e(h, {
                                                    pr: "20px",
                                                    children:
                                                      d("hostsDialog.desc"),
                                                  }),
                                                  r(h, {
                                                    children: [
                                                      r(U, {
                                                        children: [
                                                          "{",
                                                          "SERVER_IP",
                                                          "}",
                                                        ],
                                                      }),
                                                      " ",
                                                      d(
                                                        "hostsDialog.currentServer"
                                                      ),
                                                    ],
                                                  }),
                                                  r(h, {
                                                    mt: 1,
                                                    children: [
                                                      r(U, {
                                                        children: [
                                                          "{",
                                                          "USERNAME",
                                                          "}",
                                                        ],
                                                      }),
                                                      " ",
                                                      d("hostsDialog.username"),
                                                    ],
                                                  }),
                                                  r(h, {
                                                    mt: 1,
                                                    children: [
                                                      r(U, {
                                                        children: [
                                                          "{",
                                                          "DATA_USAGE",
                                                          "}",
                                                        ],
                                                      }),
                                                      " ",
                                                      d(
                                                        "hostsDialog.dataUsage"
                                                      ),
                                                    ],
                                                  }),
                                                  r(h, {
                                                    mt: 1,
                                                    children: [
                                                      r(U, {
                                                        children: [
                                                          "{",
                                                          "DATA_LEFT",
                                                          "}",
                                                        ],
                                                      }),
                                                      " ",
                                                      d(
                                                        "hostsDialog.remainingData"
                                                      ),
                                                    ],
                                                  }),
                                                  r(h, {
                                                    mt: 1,
                                                    children: [
                                                      r(U, {
                                                        children: [
                                                          "{",
                                                          "DATA_LIMIT",
                                                          "}",
                                                        ],
                                                      }),
                                                      " ",
                                                      d(
                                                        "hostsDialog.dataLimit"
                                                      ),
                                                    ],
                                                  }),
                                                  r(h, {
                                                    mt: 1,
                                                    children: [
                                                      r(U, {
                                                        children: [
                                                          "{",
                                                          "DAYS_LEFT",
                                                          "}",
                                                        ],
                                                      }),
                                                      " ",
                                                      d(
                                                        "hostsDialog.remainingDays"
                                                      ),
                                                    ],
                                                  }),
                                                  r(h, {
                                                    mt: 1,
                                                    children: [
                                                      r(U, {
                                                        children: [
                                                          "{",
                                                          "EXPIRE_DATE",
                                                          "}",
                                                        ],
                                                      }),
                                                      " ",
                                                      d(
                                                        "hostsDialog.expireDate"
                                                      ),
                                                    ],
                                                  }),
                                                  r(h, {
                                                    mt: 1,
                                                    children: [
                                                      r(U, {
                                                        children: [
                                                          "{",
                                                          "JALALI_EXPIRE_DATE",
                                                          "}",
                                                        ],
                                                      }),
                                                      " ",
                                                      d(
                                                        "hostsDialog.jalaliExpireDate"
                                                      ),
                                                    ],
                                                  }),
                                                  r(h, {
                                                    mt: 1,
                                                    children: [
                                                      r(U, {
                                                        children: [
                                                          "{",
                                                          "TIME_LEFT",
                                                          "}",
                                                        ],
                                                      }),
                                                      " ",
                                                      d(
                                                        "hostsDialog.remainingTime"
                                                      ),
                                                    ],
                                                  }),
                                                  r(h, {
                                                    mt: 1,
                                                    children: [
                                                      r(U, {
                                                        children: [
                                                          "{",
                                                          "STATUS_TEXT",
                                                          "}",
                                                        ],
                                                      }),
                                                      " ",
                                                      d(
                                                        "hostsDialog.statusText"
                                                      ),
                                                    ],
                                                  }),
                                                  r(h, {
                                                    mt: 1,
                                                    children: [
                                                      r(U, {
                                                        children: [
                                                          "{",
                                                          "STATUS_EMOJI",
                                                          "}",
                                                        ],
                                                      }),
                                                      " ",
                                                      d(
                                                        "hostsDialog.statusEmoji"
                                                      ),
                                                    ],
                                                  }),
                                                  r(h, {
                                                    mt: 1,
                                                    children: [
                                                      r(U, {
                                                        children: [
                                                          "{",
                                                          "PROTOCOL",
                                                          "}",
                                                        ],
                                                      }),
                                                      " ",
                                                      d(
                                                        "hostsDialog.proxyProtocol"
                                                      ),
                                                    ],
                                                  }),
                                                  r(h, {
                                                    mt: 1,
                                                    children: [
                                                      r(U, {
                                                        children: [
                                                          "{",
                                                          "TRANSPORT",
                                                          "}",
                                                        ],
                                                      }),
                                                      " ",
                                                      d(
                                                        "hostsDialog.proxyMethod"
                                                      ),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            }),
                                          ],
                                        }),
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                            c &&
                              ((H = c[f]) == null ? void 0 : H.address) &&
                              e(ze, {
                                children:
                                  (A =
                                    (E = c[f]) == null ? void 0 : E.address) ==
                                  null
                                    ? void 0
                                    : A.message,
                              }),
                          ],
                        }),
                        e(at, {
                          w: "full",
                          allowToggle: !0,
                          children: r(Pe, {
                            border: "0",
                            children: [
                              r(Oe, {
                                display: "flex",
                                px: 0,
                                py: 1,
                                borderRadius: 3,
                                _hover: { bg: "transparent" },
                                children: [
                                  r(h, {
                                    flex: "3",
                                    align: "start",
                                    fontSize: "xs",
                                    color: "gray.600",
                                    _dark: { color: "gray.500" },
                                    pl: 1,
                                    children: [
                                      d("hostsDialog.advancedOptions"),
                                      e(Tt, { fontSize: "sm", ml: 1 }),
                                    ],
                                  }),
                                  r(On, {
                                    flex: "1",
                                    px: "0",
                                    children: [
                                      e(De, {
                                        control: i.control,
                                        name: `${t}.${f}.is_disabled`,
                                        render: ({ field: Z }) =>
                                          e(jt, {
                                            mx: "1.5",
                                            colorScheme: "primary",
                                            ...Z,
                                            value: void 0,
                                            isChecked: !Z.value,
                                            onChange: (Xe) => {
                                              console.log(Xe.target.checked),
                                                Z.onChange(!Xe.target.checked);
                                            },
                                          }),
                                      }),
                                      e(te, {
                                        label: "Delete",
                                        placement: "top",
                                        children: e(Y, {
                                          "aria-label": "Delete",
                                          size: "sm",
                                          colorScheme: "red",
                                          variant: "ghost",
                                          onClick: p.bind(null, f),
                                          children: e(it, {}),
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              e(je, {
                                w: "full",
                                p: 1,
                                children: r(
                                  M,
                                  {
                                    w: "full",
                                    borderRadius: "4px",
                                    children: [
                                      r(R, {
                                        isInvalid: !!(
                                          c &&
                                          ((V = c[f]) == null ? void 0 : V.port)
                                        ),
                                        children: [
                                          r($, {
                                            display: "flex",
                                            pb: 1,
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            gap: 1,
                                            m: "0",
                                            children: [
                                              e("span", {
                                                children: d("hostsDialog.port"),
                                              }),
                                              r(ye, {
                                                isLazy: !0,
                                                placement: "right",
                                                children: [
                                                  e(Se, {
                                                    children: e(Ie, {}),
                                                  }),
                                                  e(Ce, {
                                                    children: r(we, {
                                                      p: 2,
                                                      children: [
                                                        e(ke, {}),
                                                        e(_e, {}),
                                                        e(h, {
                                                          fontSize: "xs",
                                                          pr: 5,
                                                          children: d(
                                                            "hostsDialog.port.info"
                                                          ),
                                                        }),
                                                      ],
                                                    }),
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          e(Le, {
                                            size: "sm",
                                            borderRadius: "4px",
                                            placeholder: String(
                                              a.port || "8080"
                                            ),
                                            type: "number",
                                            ...i.register(
                                              t + "." + f + ".port"
                                            ),
                                          }),
                                        ],
                                      }),
                                      r(R, {
                                        isInvalid: !!(
                                          c &&
                                          ((Q = c[f]) == null ? void 0 : Q.sni)
                                        ),
                                        children: [
                                          r($, {
                                            display: "flex",
                                            pb: 1,
                                            alignItems: "center",
                                            gap: 1,
                                            justifyContent: "space-between",
                                            m: "0",
                                            children: [
                                              e("span", {
                                                children: d("hostsDialog.sni"),
                                              }),
                                              r(ye, {
                                                isLazy: !0,
                                                placement: "right",
                                                children: [
                                                  e(Se, {
                                                    children: e(Ie, {}),
                                                  }),
                                                  e(Ce, {
                                                    children: r(we, {
                                                      p: 2,
                                                      children: [
                                                        e(ke, {}),
                                                        e(_e, {}),
                                                        e(h, {
                                                          fontSize: "xs",
                                                          pr: 5,
                                                          children: d(
                                                            "hostsDialog.sni.info"
                                                          ),
                                                        }),
                                                        e(h, {
                                                          fontSize: "xs",
                                                          mt: "2",
                                                          children: e(Ee, {
                                                            i18nKey:
                                                              "hostsDialog.host.wildcard",
                                                            components: {
                                                              badge: e(U, {}),
                                                            },
                                                          }),
                                                        }),
                                                        e(h, {
                                                          fontSize: "xs",
                                                          children: e(Ee, {
                                                            i18nKey:
                                                              "hostsDialog.host.multiHost",
                                                            components: {
                                                              badge: e(U, {}),
                                                            },
                                                          }),
                                                        }),
                                                      ],
                                                    }),
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          e(Le, {
                                            size: "sm",
                                            borderRadius: "4px",
                                            placeholder:
                                              "SNI (e.g. example.com)",
                                            ...i.register(t + "." + f + ".sni"),
                                          }),
                                          c &&
                                            ((D = c[f]) == null
                                              ? void 0
                                              : D.sni) &&
                                            e(ze, {
                                              children:
                                                (q =
                                                  (F = c[f]) == null
                                                    ? void 0
                                                    : F.sni) == null
                                                  ? void 0
                                                  : q.message,
                                            }),
                                        ],
                                      }),
                                      r(R, {
                                        isInvalid: !!(
                                          c &&
                                          ((L = c[f]) == null ? void 0 : L.host)
                                        ),
                                        children: [
                                          r($, {
                                            display: "flex",
                                            pb: 1,
                                            alignItems: "center",
                                            gap: 1,
                                            justifyContent: "space-between",
                                            m: "0",
                                            children: [
                                              e("span", {
                                                children: d("hostsDialog.host"),
                                              }),
                                              r(ye, {
                                                isLazy: !0,
                                                placement: "right",
                                                children: [
                                                  e(Se, {
                                                    children: e(Ie, {}),
                                                  }),
                                                  e(Ce, {
                                                    children: r(we, {
                                                      p: 2,
                                                      children: [
                                                        e(ke, {}),
                                                        e(_e, {}),
                                                        e(h, {
                                                          fontSize: "xs",
                                                          pr: 5,
                                                          children: d(
                                                            "hostsDialog.host.info"
                                                          ),
                                                        }),
                                                        e(h, {
                                                          fontSize: "xs",
                                                          mt: "2",
                                                          children: e(Ee, {
                                                            i18nKey:
                                                              "hostsDialog.host.wildcard",
                                                            components: {
                                                              badge: e(U, {}),
                                                            },
                                                          }),
                                                        }),
                                                        e(h, {
                                                          fontSize: "xs",
                                                          children: e(Ee, {
                                                            i18nKey:
                                                              "hostsDialog.host.multiHost",
                                                            components: {
                                                              badge: e(U, {}),
                                                            },
                                                          }),
                                                        }),
                                                      ],
                                                    }),
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          e(Le, {
                                            size: "sm",
                                            borderRadius: "4px",
                                            placeholder:
                                              "Host (e.g. example.com)",
                                            ...i.register(
                                              t + "." + f + ".host"
                                            ),
                                          }),
                                          c &&
                                            ((X = c[f]) == null
                                              ? void 0
                                              : X.host) &&
                                            e(ze, {
                                              children:
                                                (dt =
                                                  (K = c[f]) == null
                                                    ? void 0
                                                    : K.host) == null
                                                  ? void 0
                                                  : dt.message,
                                            }),
                                        ],
                                      }),
                                      r(R, {
                                        isInvalid: !!(
                                          c &&
                                          ((ht = c[f]) == null
                                            ? void 0
                                            : ht.path)
                                        ),
                                        children: [
                                          r($, {
                                            display: "flex",
                                            pb: 1,
                                            alignItems: "center",
                                            gap: 1,
                                            justifyContent: "space-between",
                                            m: "0",
                                            children: [
                                              e("span", {
                                                children: d("hostsDialog.path"),
                                              }),
                                              r(ye, {
                                                isLazy: !0,
                                                placement: "right",
                                                children: [
                                                  e(Se, {
                                                    children: e(Ie, {}),
                                                  }),
                                                  e(Ce, {
                                                    children: r(we, {
                                                      p: 2,
                                                      children: [
                                                        e(ke, {}),
                                                        e(_e, {}),
                                                        e(h, {
                                                          fontSize: "xs",
                                                          pr: 5,
                                                          children: d(
                                                            "hostsDialog.path.info"
                                                          ),
                                                        }),
                                                      ],
                                                    }),
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          e(Le, {
                                            size: "sm",
                                            borderRadius: "4px",
                                            placeholder: "path (e.g. /vless)",
                                            ...i.register(
                                              t + "." + f + ".path"
                                            ),
                                          }),
                                          c &&
                                            ((me = c[f]) == null
                                              ? void 0
                                              : me.path) &&
                                            e(ze, {
                                              children:
                                                (Ve =
                                                  ($e = c[f]) == null
                                                    ? void 0
                                                    : $e.path) == null
                                                  ? void 0
                                                  : Ve.message,
                                            }),
                                        ],
                                      }),
                                      r(R, {
                                        height: "66px",
                                        children: [
                                          r($, {
                                            display: "flex",
                                            pb: 1,
                                            alignItems: "center",
                                            gap: 1,
                                            justifyContent: "space-between",
                                            m: "0",
                                            children: [
                                              e("span", {
                                                children: d(
                                                  "hostsDialog.security"
                                                ),
                                              }),
                                              r(ye, {
                                                isLazy: !0,
                                                placement: "right",
                                                children: [
                                                  e(Se, {
                                                    children: e(Ie, {}),
                                                  }),
                                                  e(Ce, {
                                                    children: r(we, {
                                                      p: 2,
                                                      children: [
                                                        e(ke, {}),
                                                        e(_e, {}),
                                                        e(h, {
                                                          fontSize: "xs",
                                                          pr: 5,
                                                          children: d(
                                                            "hostsDialog.security.info"
                                                          ),
                                                        }),
                                                      ],
                                                    }),
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          e(Et, {
                                            size: "sm",
                                            ...i.register(
                                              t + "." + f + ".security"
                                            ),
                                            children: Ss.map((Z) =>
                                              e(
                                                "option",
                                                {
                                                  value: Z.value,
                                                  children: Z.title,
                                                },
                                                Z.value
                                              )
                                            ),
                                          }),
                                        ],
                                      }),
                                      r(R, {
                                        height: "66px",
                                        children: [
                                          e($, {
                                            display: "flex",
                                            pb: 1,
                                            alignItems: "center",
                                            gap: 1,
                                            justifyContent: "space-between",
                                            m: "0",
                                            children: e("span", {
                                              children: d("hostsDialog.alpn"),
                                            }),
                                          }),
                                          e(Et, {
                                            size: "sm",
                                            ...i.register(
                                              t + "." + f + ".alpn"
                                            ),
                                            children: Cs.map((Z) =>
                                              e(
                                                "option",
                                                {
                                                  value: Z.value,
                                                  children: Z.title,
                                                },
                                                Z.value
                                              )
                                            ),
                                          }),
                                        ],
                                      }),
                                      r(R, {
                                        height: "66px",
                                        children: [
                                          e($, {
                                            display: "flex",
                                            pb: 1,
                                            alignItems: "center",
                                            gap: 1,
                                            justifyContent: "space-between",
                                            m: "0",
                                            children: e("span", {
                                              children: d(
                                                "hostsDialog.fingerprint"
                                              ),
                                            }),
                                          }),
                                          e(Et, {
                                            size: "sm",
                                            ...i.register(
                                              t + "." + f + ".fingerprint"
                                            ),
                                            children: ws.map((Z) =>
                                              e(
                                                "option",
                                                {
                                                  value: Z.value,
                                                  children: Z.title,
                                                },
                                                Z.value
                                              )
                                            ),
                                          }),
                                        ],
                                      }),
                                      r(R, {
                                        isInvalid: !!(
                                          c &&
                                          ((Ge = c[f]) == null
                                            ? void 0
                                            : Ge.fragment_setting)
                                        ),
                                        children: [
                                          r($, {
                                            display: "flex",
                                            pb: 1,
                                            alignItems: "center",
                                            gap: 1,
                                            justifyContent: "space-between",
                                            m: "0",
                                            children: [
                                              e("span", {
                                                children: d(
                                                  "hostsDialog.fragment"
                                                ),
                                              }),
                                              r(ye, {
                                                isLazy: !0,
                                                placement: "right",
                                                children: [
                                                  e(Se, {
                                                    children: e(Ie, {}),
                                                  }),
                                                  e(Ce, {
                                                    children: r(we, {
                                                      p: 2,
                                                      children: [
                                                        e(ke, {}),
                                                        e(_e, {}),
                                                        e(h, {
                                                          fontSize: "xs",
                                                          pr: 5,
                                                          children: d(
                                                            "hostsDialog.fragment.info"
                                                          ),
                                                        }),
                                                        e(h, {
                                                          fontSize: "xs",
                                                          pr: 5,
                                                          pt: 2,
                                                          pb: 1,
                                                          children: d(
                                                            "hostsDialog.fragment.info.examples"
                                                          ),
                                                        }),
                                                        e(h, {
                                                          fontSize: "xs",
                                                          pr: 5,
                                                          children:
                                                            "100-200,10-20,tlshello",
                                                        }),
                                                        e(h, {
                                                          fontSize: "xs",
                                                          pr: 5,
                                                          children:
                                                            "100-200,10-20,1-3",
                                                        }),
                                                        e(h, {
                                                          fontSize: "xs",
                                                          pr: 5,
                                                          pt: "3",
                                                          children: d(
                                                            "hostsDialog.fragment.info.attention"
                                                          ),
                                                        }),
                                                      ],
                                                    }),
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          e(Le, {
                                            size: "sm",
                                            borderRadius: "4px",
                                            placeholder:
                                              "Fragment settings by pattern",
                                            ...i.register(
                                              t + "." + f + ".fragment_setting"
                                            ),
                                          }),
                                          c &&
                                            ((Ye = c[f]) == null
                                              ? void 0
                                              : Ye.fragment_setting) &&
                                            e(ze, {
                                              children:
                                                (v =
                                                  (Ze = c[f]) == null
                                                    ? void 0
                                                    : Ze.fragment_setting) ==
                                                null
                                                  ? void 0
                                                  : v.message,
                                            }),
                                        ],
                                      }),
                                      e(R, {
                                        isInvalid: !!(
                                          c &&
                                          ((B = c[f]) == null
                                            ? void 0
                                            : B.allowinsecure)
                                        ),
                                        children: r(xt, {
                                          ...i.register(
                                            t + "." + f + ".allowinsecure"
                                          ),
                                          name: t + "." + f + ".allowinsecure",
                                          children: [
                                            e($, {
                                              children: d(
                                                "hostsDialog.allowinsecure"
                                              ),
                                            }),
                                            c &&
                                              ((ge = c[f]) == null
                                                ? void 0
                                                : ge.allowinsecure) &&
                                              e(ze, {
                                                children:
                                                  (ce =
                                                    (fe = c[f]) == null
                                                      ? void 0
                                                      : fe.allowinsecure) ==
                                                  null
                                                    ? void 0
                                                    : ce.message,
                                              }),
                                          ],
                                        }),
                                      }),
                                      r(R, {
                                        isInvalid: !!(
                                          c &&
                                          ((be = c[f]) == null
                                            ? void 0
                                            : be.mux_enable)
                                        ),
                                        children: [
                                          e(xt, {
                                            ...i.register(
                                              t + "." + f + ".mux_enable"
                                            ),
                                            children: e($, {
                                              children: d(
                                                "hostsDialog.muxEnable"
                                              ),
                                            }),
                                          }),
                                          c &&
                                            ((G = c[f]) == null
                                              ? void 0
                                              : G.mux_enable) &&
                                            e(ze, {
                                              children:
                                                (qe =
                                                  (Qe = c[f]) == null
                                                    ? void 0
                                                    : Qe.mux_enable) == null
                                                  ? void 0
                                                  : qe.message,
                                            }),
                                        ],
                                      }),
                                    ],
                                  },
                                  f
                                ),
                              }),
                            ],
                          }),
                        }),
                      ],
                    },
                    f
                  );
                }),
                e(N, {
                  variant: "outline",
                  w: "full",
                  size: "sm",
                  color: "",
                  fontWeight: "normal",
                  onClick: C,
                  children: d("hostsDialog.addHost"),
                }),
              ],
            }),
          }),
        ],
      })
    );
  },
  Us = () => {
    const {
        isEditingHosts: t,
        onEditingHosts: n,
        refetchUsers: o,
        inbounds: s,
      } = I(),
      {
        isLoading: a,
        hosts: i,
        fetchHosts: l,
        isPostLoading: u,
        setHosts: p,
      } = vs(),
      y = ue(),
      { t: d } = O(),
      [c, C] = g.exports.useState({});
    g.exports.useEffect(() => {
      t && l();
    }, [t]);
    const _ = He({ resolver: st(Ds) });
    g.exports.useEffect(() => {
      i && t && _.reset(i);
    }, [i]);
    const f = () => {
        C({}), n(!1);
      },
      S = (m) => {
        p(m)
          .then(() => {
            y({
              title: d("hostsDialog.savedSuccess"),
              status: "success",
              isClosable: !0,
              position: "top",
              duration: 3e3,
            }),
              o();
          })
          .catch((b) => {
            var W, H, E, A, V;
            (((W = b == null ? void 0 : b.response) == null
              ? void 0
              : W.status) === 409 ||
              ((H = b == null ? void 0 : b.response) == null
                ? void 0
                : H.status) === 400) &&
              y({
                title:
                  (A = (E = b.response) == null ? void 0 : E._data) == null
                    ? void 0
                    : A.detail,
                status: "error",
                isClosable: !0,
                position: "top",
                duration: 3e3,
              }),
              ((V = b == null ? void 0 : b.response) == null
                ? void 0
                : V.status) === 422 &&
                Object.keys(b.response._data.detail).forEach((Q) => {
                  y({
                    title: b.response._data.detail[Q] + " (" + Q + ")",
                    status: "error",
                    isClosable: !0,
                    position: "top",
                    duration: 3e3,
                  });
                });
          });
      },
      T = (m) => {
        c[String(m)] ? delete c[String(m)] : (c[String(m)] = {}), C({ ...c });
      };
    return r(re, {
      isOpen: t,
      onClose: f,
      children: [
        e(ne, { bg: "blackAlpha.300", backdropFilter: "blur(10px)" }),
        r(oe, {
          mx: "3",
          w: "fit-content",
          maxW: "3xl",
          children: [
            e(se, {
              pt: 6,
              children: e(le, {
                color: "primary",
                children: e(zs, { color: "white" }),
              }),
            }),
            e(ae, { mt: 3 }),
            e(ie, {
              w: "440px",
              pb: 3,
              pt: 3,
              children: e(Lr, {
                ..._,
                children: r("form", {
                  onSubmit: _.handleSubmit(S),
                  children: [
                    e(h, {
                      mb: 3,
                      opacity: 0.8,
                      fontSize: "sm",
                      children: d("hostsDialog.title"),
                    }),
                    a && d("hostsDialog.loading"),
                    !a &&
                      i &&
                      (Object.keys(i).length > 0
                        ? e(at, {
                            w: "full",
                            allowToggle: !0,
                            allowMultiple: !0,
                            index: Object.keys(c).map((m) => parseInt(m)),
                            children: e(M, {
                              w: "full",
                              children: Object.keys(i).map((m, b) =>
                                e(
                                  Es,
                                  {
                                    toggleAccordion: () => T(b),
                                    isOpen: c[String(b)],
                                    hostKey: m,
                                  },
                                  m
                                )
                              ),
                            }),
                          })
                        : "No inbound found. Please check your Xray config file."),
                    e(k, {
                      justifyContent: "flex-end",
                      py: 2,
                      children: e(N, {
                        variant: "solid",
                        mt: "2",
                        type: "submit",
                        colorScheme: "primary",
                        size: "sm",
                        px: 5,
                        isLoading: u,
                        disabled: u,
                        children: d("hostsDialog.apply"),
                      }),
                    }),
                  ],
                }),
              }),
            }),
          ],
        }),
      ],
    });
  },
  Jr = w.object({
    name: w.string().min(1),
    address: w.string().min(1),
    port: w
      .number()
      .min(1)
      .or(w.string().transform((t) => parseFloat(t))),
    api_port: w
      .number()
      .min(1)
      .or(w.string().transform((t) => parseFloat(t))),
    xray_version: w.string().nullable().optional(),
    id: w.number().nullable().optional(),
    status: w
      .enum(["connected", "connecting", "error", "disabled"])
      .nullable()
      .optional(),
    message: w.string().nullable().optional(),
    add_as_new_host: w.boolean().optional(),
  }),
  Rs = () => ({
    name: "",
    address: "",
    port: 62050,
    api_port: 62051,
    xray_version: "",
  }),
  nt = "fetch-nodes-query-key",
  Ls = () => {
    const { isEditingNodes: t } = I();
    return Wt({
      queryKey: nt,
      queryFn: lt.getState().fetchNodes,
      refetchInterval: t ? 3e3 : void 0,
      refetchOnWindowFocus: !1,
    });
  },
  lt = wt((t, n) => ({
    nodes: [],
    addNode(o) {
      return P("/node", { method: "POST", body: o });
    },
    fetchNodes() {
      return P("/nodes");
    },
    fetchNodesUsage(o) {
      return P("/nodes/usage", { query: o });
    },
    updateNode(o) {
      return P(`/node/${o.id}`, { method: "PUT", body: o });
    },
    setDeletingNode(o) {
      t({ deletingNode: o });
    },
    reconnectNode(o) {
      return P(`/node/${o.id}/reconnect`, { method: "POST" });
    },
    deleteNode: () => {
      var o;
      return P(`/node/${(o = n().deletingNode) == null ? void 0 : o.id}`, {
        method: "DELETE",
      });
    },
  })),
  Vt = (t, n, o) => {
    if (t.response && t.response._data) {
      if (typeof t.response._data.detail == "string")
        return n({
          title: t.response._data.detail,
          status: "error",
          isClosable: !0,
          position: "top",
          duration: 3e3,
        });
      if (typeof t.response._data.detail == "object" && o) {
        Object.keys(t.response._data.detail).forEach((s) =>
          o.setError(s, { message: t.response._data.detail[s] })
        );
        return;
      }
    }
    return n({
      title: "Something went wrong!",
      status: "error",
      isClosable: !0,
      position: "top",
      duration: 3e3,
    });
  },
  Gt = (t, n) =>
    n({
      title: t,
      status: "success",
      isClosable: !0,
      position: "top",
      duration: 3e3,
    }),
  Ts = ({ deleteCallback: t }) => {
    const { deleteNode: n, deletingNode: o, setDeletingNode: s } = lt(),
      { t: a } = O(),
      i = ue(),
      l = Ht(),
      u = () => {
        s(null);
      },
      { isLoading: p, mutate: y } = tt(n, {
        onSuccess: () => {
          Gt(a("deleteNode.deleteSuccess", { name: o && o.name }), i),
            s(null),
            l.invalidateQueries(nt),
            t && t();
        },
        onError: (d) => {
          Vt(d, i);
        },
      });
    return r(re, {
      isCentered: !0,
      isOpen: !!o,
      onClose: u,
      size: "sm",
      children: [
        e(ne, { bg: "blackAlpha.300", backdropFilter: "blur(10px)" }),
        r(oe, {
          mx: "3",
          children: [
            e(se, {
              pt: 6,
              children: e(le, { color: "red", children: e(it, {}) }),
            }),
            e(ae, { mt: 3 }),
            r(ie, {
              children: [
                e(h, {
                  fontWeight: "semibold",
                  fontSize: "lg",
                  children: a("deleteNode.title"),
                }),
                o &&
                  e(h, {
                    mt: 1,
                    fontSize: "sm",
                    _dark: { color: "gray.400" },
                    color: "gray.600",
                    children: e(Ee, {
                      components: { b: e("b", {}) },
                      children: a("deleteNode.prompt", { name: o.name }),
                    }),
                  }),
              ],
            }),
            r(Ue, {
              display: "flex",
              children: [
                e(N, {
                  size: "sm",
                  onClick: u,
                  mr: 3,
                  w: "full",
                  variant: "outline",
                  children: a("cancel"),
                }),
                e(N, {
                  size: "sm",
                  w: "full",
                  colorScheme: "red",
                  onClick: () => y(),
                  leftIcon: p ? e(Ne, { size: "xs" }) : void 0,
                  children: a("delete"),
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  ct = { baseStyle: { strokeWidth: "2px", w: 4, h: 4 } },
  cr = x(jn, ct),
  As = x(Hn, ct),
  dr = x(Bn, ct),
  hr = x(Tr, ct),
  Ms = x(Tr, ct),
  Nt = [
    { title: "No", value: "no_reset" },
    { title: "Daily", value: "day" },
    { title: "Weekly", value: "week" },
    { title: "Monthly", value: "month" },
    { title: "Annually", value: "year" },
  ],
  et = {
    active: { statusColor: "green", bandWidthColor: "primary", icon: cr },
    connected: { statusColor: "green", bandWidthColor: "primary", icon: cr },
    disabled: { statusColor: "gray", bandWidthColor: "gray", icon: As },
    expired: { statusColor: "orange", bandWidthColor: "orange", icon: hr },
    on_hold: { statusColor: "purple", bandWidthColor: "purple", icon: Ms },
    connecting: { statusColor: "orange", bandWidthColor: "orange", icon: hr },
    limited: { statusColor: "red", bandWidthColor: "red", icon: dr },
    error: { statusColor: "red", bandWidthColor: "red", icon: dr },
  },
  Yt = (t) => {
    let n = { status: "", time: "" };
    if (t) {
      j(t * 1e3)
        .utc()
        .isAfter(j().utc())
        ? (n.status = "expires")
        : (n.status = "expired");
      const o = [],
        s = j.duration(
          j(t * 1e3)
            .utc()
            .diff(j())
        );
      s.years() != 0 &&
        o.push(
          Math.abs(s.years()) + " year" + (Math.abs(s.years()) != 1 ? "s" : "")
        ),
        s.months() != 0 &&
          o.push(
            Math.abs(s.months()) +
              " month" +
              (Math.abs(s.months()) != 1 ? "s" : "")
          ),
        s.days() != 0 &&
          o.push(
            Math.abs(s.days()) + " day" + (Math.abs(s.days()) != 1 ? "s" : "")
          ),
        o.length === 0 &&
          (s.hours() != 0 &&
            o.push(
              Math.abs(s.hours()) +
                " hour" +
                (Math.abs(s.hours()) != 1 ? "s" : "")
            ),
          s.minutes() != 0 &&
            o.push(
              Math.abs(s.minutes()) +
                " min" +
                (Math.abs(s.minutes()) != 1 ? "s" : "")
            )),
        (n.time = o.join(", "));
    }
    return n;
  },
  mt = ({
    expiryDate: t,
    status: n,
    compact: o = !1,
    showDetail: s = !0,
    extraText: a,
  }) => {
    const { t: i } = O(),
      l = Yt(t),
      u = et[n].icon;
    return r(xe, {
      children: [
        r(U, {
          colorScheme: et[n].statusColor,
          rounded: "full",
          display: "inline-flex",
          px: 3,
          py: 1,
          columnGap: o ? 1 : 2,
          alignItems: "center",
          children: [
            e(u, { w: o ? 3 : 4 }),
            s &&
              r(h, {
                textTransform: "capitalize",
                fontSize: o ? ".7rem" : ".875rem",
                lineHeight: o ? "1rem" : "1.25rem",
                fontWeight: "medium",
                letterSpacing: "tighter",
                children: [n, a && `: ${a}`],
              }),
          ],
        }),
        s &&
          t &&
          e(h, {
            display: "inline-block",
            fontSize: "xs",
            fontWeight: "medium",
            ml: "2",
            color: "gray.600",
            _dark: { color: "gray.400" },
            children: i(l.status, { time: l.time }),
          }),
      ],
    });
  },
  ut = x(Ae, { baseStyle: { bg: "white", _dark: { bg: "gray.700" } } }),
  Ns = x(Ur, { baseStyle: { w: 5, h: 5 } }),
  Fs = x($n, { baseStyle: { w: 5, h: 5, strokeWidth: 2 } }),
  Ws = ({ toggleAccordion: t, node: n }) => {
    const { updateNode: o, reconnectNode: s, setDeletingNode: a } = lt(),
      { t: i } = O(),
      l = Ht(),
      u = ue(),
      p = He({ defaultValues: n, resolver: st(Jr) }),
      y = a.bind(null, n),
      { isLoading: d, mutate: c } = tt(o, {
        onSuccess: () => {
          Gt("Node updated successfully", u), l.invalidateQueries(nt);
        },
        onError: (S) => {
          Vt(S, u, p);
        },
      }),
      { isLoading: C, mutate: _ } = tt(s.bind(null, n), {
        onSuccess: () => {
          l.invalidateQueries(nt);
        },
      }),
      f = C ? "connecting" : n.status ? n.status : "error";
    return r(Pe, {
      border: "1px solid",
      _dark: { borderColor: "gray.600" },
      _light: { borderColor: "gray.200" },
      borderRadius: "4px",
      p: 1,
      w: "full",
      children: [
        r(Oe, {
          px: 2,
          borderRadius: "3px",
          onClick: t,
          children: [
            r(k, {
              w: "full",
              justifyContent: "space-between",
              pr: 2,
              children: [
                e(h, {
                  as: "span",
                  fontWeight: "medium",
                  fontSize: "sm",
                  flex: "1",
                  textAlign: "left",
                  color: "gray.700",
                  _dark: { color: "gray.300" },
                  children: n.name,
                }),
                r(k, {
                  children: [
                    n.xray_version &&
                      e(U, {
                        colorScheme: "blue",
                        rounded: "full",
                        display: "inline-flex",
                        px: 3,
                        py: 1,
                        children: r(h, {
                          textTransform: "capitalize",
                          fontSize: "0.7rem",
                          fontWeight: "medium",
                          letterSpacing: "tighter",
                          children: ["Xray ", n.xray_version],
                        }),
                      }),
                    n.status && e(mt, { status: f, compact: !0 }),
                  ],
                }),
              ],
            }),
            e(Tt, {}),
          ],
        }),
        r(je, {
          px: 2,
          pb: 2,
          children: [
            e(M, {
              pb: 3,
              alignItems: "flex-start",
              children:
                f === "error" &&
                e(rt, {
                  status: "error",
                  size: "xs",
                  children: r(z, {
                    children: [
                      r(k, {
                        w: "full",
                        children: [
                          e(yt, { w: 4 }),
                          e(h, { marginInlineEnd: 0, children: n.message }),
                        ],
                      }),
                      e(k, {
                        justifyContent: "flex-end",
                        w: "full",
                        children: e(N, {
                          size: "sm",
                          "aria-label": "reconnect node",
                          leftIcon: e(Yr, {}),
                          onClick: () => _(),
                          disabled: C,
                          children: i(
                            C ? "nodes.reconnecting" : "nodes.reconnect"
                          ),
                        }),
                      }),
                    ],
                  }),
                }),
            }),
            e(Kr, {
              form: p,
              mutate: c,
              isLoading: d,
              submitBtnText: i("nodes.editNode"),
              btnLeftAdornment: e(te, {
                label: i("delete"),
                placement: "top",
                children: e(Y, {
                  colorScheme: "red",
                  variant: "ghost",
                  size: "sm",
                  "aria-label": "delete node",
                  onClick: y,
                  children: e(it, {}),
                }),
              }),
            }),
          ],
        }),
      ],
    });
  },
  Ps = ({ toggleAccordion: t, resetAccordions: n }) => {
    const o = ue(),
      { t: s } = O(),
      a = Ht(),
      { addNode: i } = lt(),
      l = He({
        resolver: st(Jr),
        defaultValues: { ...Rs(), add_as_new_host: !0 },
      }),
      { isLoading: u, mutate: p } = tt(i, {
        onSuccess: () => {
          Gt(s("nodes.addNodeSuccess", { name: l.getValues("name") }), o),
            a.invalidateQueries(nt),
            l.reset(),
            n();
        },
        onError: (y) => {
          Vt(y, o, l);
        },
      });
    return r(Pe, {
      border: "1px solid",
      _dark: { borderColor: "gray.600" },
      _light: { borderColor: "gray.200" },
      borderRadius: "4px",
      p: 1,
      w: "full",
      children: [
        e(Oe, {
          px: 2,
          borderRadius: "3px",
          onClick: t,
          children: r(h, {
            as: "span",
            fontWeight: "medium",
            fontSize: "sm",
            flex: "1",
            textAlign: "left",
            color: "gray.700",
            _dark: { color: "gray.300" },
            display: "flex",
            gap: 1,
            children: [
              e(Fs, { display: "inline-block" }),
              " ",
              e("span", { children: s("nodes.addNewMarzbanNode") }),
            ],
          }),
        }),
        e(je, {
          px: 2,
          py: 4,
          children: e(Kr, {
            form: l,
            mutate: p,
            isLoading: u,
            submitBtnText: s("nodes.addNode"),
            btnProps: { variant: "solid" },
            addAsHost: !0,
          }),
        }),
      ],
    });
  },
  Kr = ({
    form: t,
    mutate: n,
    isLoading: o,
    submitBtnText: s,
    btnProps: a = {},
    btnLeftAdornment: i,
    addAsHost: l = !1,
  }) => {
    var _, f, S, T, m, b, W, H, E, A, V, Q;
    const { t: u } = O(),
      [p, y] = g.exports.useState(!1),
      { data: d, isLoading: c } = Wt({
        queryKey: "node-settings",
        queryFn: () => P("/node/settings"),
      });
    function C(D) {
      if (document.body.createTextRange) {
        const F = document.body.createTextRange();
        F.moveToElementText(D), F.select();
      } else if (window.getSelection) {
        const F = window.getSelection(),
          q = document.createRange();
        q.selectNodeContents(D), F.removeAllRanges(), F.addRange(q);
      } else
        console.warn("Could not select text in node: Unsupported browser.");
    }
    return e("form", {
      onSubmit: t.handleSubmit((D) => n(D)),
      children: r(M, {
        children: [
          d &&
            d.certificate &&
            e(rt, {
              status: "info",
              alignItems: "start",
              children: r(Ar, {
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                children: [
                  e("span", { children: u("nodes.connection-hint") }),
                  r(k, {
                    justify: "end",
                    py: 2,
                    children: [
                      e(N, {
                        as: "a",
                        colorScheme: "primary",
                        size: "xs",
                        download: "ssl_client_cert.pem",
                        href: URL.createObjectURL(
                          new Blob([d.certificate], { type: "text/plain" })
                        ),
                        children: u("nodes.download-certificate"),
                      }),
                      e(te, {
                        placement: "top",
                        label: u("nodes.show-certificate"),
                        children: e(Y, {
                          "aria-label": u("nodes.show-certificate"),
                          onClick: y.bind(null, !p),
                          colorScheme: "whiteAlpha",
                          color: "primary",
                          size: "xs",
                          children: p
                            ? e(Gn, { width: "15px" })
                            : e(Vn, { width: "15px" }),
                        }),
                      }),
                    ],
                  }),
                  e(Mr, {
                    in: p,
                    animateOpacity: !0,
                    children: e(h, {
                      bg: "rgba(255,255,255,.5)",
                      _dark: { bg: "rgba(255,255,255,.2)" },
                      rounded: "md",
                      p: "2",
                      lineHeight: "1.2",
                      fontSize: "10px",
                      fontFamily: "Courier",
                      whiteSpace: "pre",
                      overflow: "auto",
                      onClick: (D) => {
                        C(D.target);
                      },
                      children: d.certificate,
                    }),
                  }),
                ],
              }),
            }),
          r(k, {
            w: "full",
            children: [
              e(R, {
                children: e(ut, {
                  label: u("nodes.nodeName"),
                  size: "sm",
                  placeholder: "Marzban-S2",
                  ...t.register("name"),
                  error:
                    (S =
                      (f = (_ = t.formState) == null ? void 0 : _.errors) ==
                      null
                        ? void 0
                        : f.name) == null
                      ? void 0
                      : S.message,
                }),
              }),
              e(k, {
                px: 1,
                children: e(De, {
                  name: "status",
                  control: t.control,
                  render: ({ field: D }) =>
                    e(
                      te,
                      {
                        placement: "top",
                        label:
                          `${u("usersTable.status")}: ` +
                          (D.value !== "disabled"
                            ? u("active")
                            : u("disabled")),
                        textTransform: "capitalize",
                        children: e(z, {
                          mt: "6",
                          children: e(jt, {
                            colorScheme: "primary",
                            isChecked: D.value !== "disabled",
                            onChange: (F) => {
                              F.target.checked
                                ? D.onChange("connecting")
                                : D.onChange("disabled");
                            },
                          }),
                        }),
                      },
                      D.value
                    ),
                }),
              }),
            ],
          }),
          r(k, {
            alignItems: "flex-start",
            children: [
              e(z, {
                w: "50%",
                children: e(ut, {
                  label: u("nodes.nodeAddress"),
                  size: "sm",
                  placeholder: "51.20.12.13",
                  ...t.register("address"),
                  error:
                    (b =
                      (m = (T = t.formState) == null ? void 0 : T.errors) ==
                      null
                        ? void 0
                        : m.address) == null
                      ? void 0
                      : b.message,
                }),
              }),
              e(z, {
                w: "25%",
                children: e(ut, {
                  label: u("nodes.nodePort"),
                  size: "sm",
                  placeholder: "62050",
                  ...t.register("port"),
                  error:
                    (E =
                      (H = (W = t.formState) == null ? void 0 : W.errors) ==
                      null
                        ? void 0
                        : H.port) == null
                      ? void 0
                      : E.message,
                }),
              }),
              e(z, {
                w: "25%",
                children: e(ut, {
                  label: u("nodes.nodeAPIPort"),
                  size: "sm",
                  placeholder: "62051",
                  ...t.register("api_port"),
                  error:
                    (Q =
                      (V = (A = t.formState) == null ? void 0 : A.errors) ==
                      null
                        ? void 0
                        : V.api_port) == null
                      ? void 0
                      : Q.message,
                }),
              }),
            ],
          }),
          l &&
            e(R, {
              py: 1,
              children: e(xt, {
                ...t.register("add_as_new_host"),
                children: e($, {
                  m: 0,
                  children: u("nodes.addHostForEveryInbound"),
                }),
              }),
            }),
          r(k, {
            w: "full",
            children: [
              i,
              e(N, {
                flexGrow: 1,
                type: "submit",
                colorScheme: "primary",
                size: "sm",
                px: 5,
                w: "full",
                isLoading: o,
                ...a,
                children: s,
              }),
            ],
          }),
        ],
      }),
    });
  },
  Os = () => {
    const { isEditingNodes: t, onEditingNodes: n } = I(),
      { t: o } = O(),
      [s, a] = g.exports.useState({}),
      { data: i, isLoading: l } = Ls(),
      u = () => {
        a({}), n(!1);
      },
      p = (y) => {
        s[String(y)] ? delete s[String(y)] : (s[String(y)] = {}), a({ ...s });
      };
    return r(xe, {
      children: [
        r(re, {
          isOpen: t,
          onClose: u,
          children: [
            e(ne, { bg: "blackAlpha.300", backdropFilter: "blur(10px)" }),
            r(oe, {
              mx: "3",
              w: "fit-content",
              maxW: "3xl",
              children: [
                e(se, {
                  pt: 6,
                  children: e(le, {
                    color: "primary",
                    children: e(Ns, { color: "white" }),
                  }),
                }),
                e(ae, { mt: 3 }),
                r(ie, {
                  w: "440px",
                  pb: 6,
                  pt: 3,
                  children: [
                    e(h, {
                      mb: 3,
                      opacity: 0.8,
                      fontSize: "sm",
                      children: o("nodes.title"),
                    }),
                    l && "loading...",
                    e(at, {
                      w: "full",
                      allowToggle: !0,
                      index: Object.keys(s).map((y) => parseInt(y)),
                      children: r(M, {
                        w: "full",
                        children: [
                          !l &&
                            i &&
                            i.map((y, d) =>
                              e(
                                Ws,
                                { toggleAccordion: () => p(d), node: y },
                                y.name
                              )
                            ),
                          e(Ps, {
                            toggleAccordion: () => p((i || []).length),
                            resetAccordions: () => a({}),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        e(Ts, { deleteCallback: () => a({}) }),
      ],
    });
  };
function js(t) {
  const n = 360 / t,
    o = 90,
    s = 47,
    a = [];
  for (let i = 0; i < t; i++) {
    const l = ((i * n) % 360) + 140,
      u = Hs(l, o, s);
    a.push(u);
  }
  return a;
}
function Hs(t, n, o) {
  (t /= 360), (n /= 100), (o /= 100);
  let s, a, i;
  if (n === 0) s = a = i = o;
  else {
    const u = (d, c, C) => (
        C < 0 && (C += 1),
        C > 1 && (C -= 1),
        C < 0.16666666666666666
          ? d + (c - d) * 6 * C
          : C < 0.5
          ? c
          : C < 0.6666666666666666
          ? d + (c - d) * (0.6666666666666666 - C) * 6
          : d
      ),
      p = o < 0.5 ? o * (1 + n) : o + n - o * n,
      y = 2 * o - p;
    (s = Math.round(u(y, p, t + 1 / 3) * 255)),
      (a = Math.round(u(y, p, t) * 255)),
      (i = Math.round(u(y, p, t - 1 / 3) * 255));
  }
  const l = (u) => {
    const p = u.toString(16);
    return p.length === 1 ? "0" + p : p;
  };
  return `#${l(s)}${l(a)}${l(i)}`;
}
const ur = ({ border: t, ...n }) => {
    const { getInputProps: o, getRadioProps: s } = Kn(n),
      a = Te({ base: "xs", md: "sm" });
    return r(z, {
      as: "label",
      children: [
        e("input", { ...o() }),
        e(z, {
          ...s(),
          minW: "48px",
          w: "full",
          h: "full",
          textAlign: "center",
          cursor: "pointer",
          fontSize: a,
          borderWidth: t ? "1px" : "0px",
          borderRadius: "md",
          _checked: {
            bg: "primary.500",
            color: "white",
            borderColor: "primary.500",
          },
          _focus: { boxShadow: "outline" },
          px: 3,
          py: 1,
          children: n.children,
        }),
      ],
    });
  },
  en = ({ onChange: t, defaultValue: n, ...o }) => {
    const { t: s, i18n: a } = O();
    ot();
    const i = Te({
        base: ["7h", "1d", "3d", "1w"],
        md: ["7h", "1d", "3d", "1w", "1m", "3m"],
      }),
      l = { h: "hour", d: "day", w: "week", m: "month", y: "year" },
      u = Te({
        base: [
          { title: "hours", options: ["1h", "3h", "6h", "12h"] },
          { title: "days", options: ["1d", "2d", "3d", "4d"] },
          { title: "weeks", options: ["1w", "2w", "3w", "4w"] },
          { title: "months", options: ["1m", "2m", "3m", "6m"] },
        ],
        md: [
          { title: "hours", options: ["1h", "2h", "3h", "6h", "8h", "12h"] },
          { title: "days", options: ["1d", "2d", "3d", "4d", "5d", "6d"] },
          { title: "weeks", options: ["1w", "2w", "3w", "4w"] },
          { title: "months", options: ["1m", "2m", "3m", "6m", "8m"] },
        ],
      }),
      {
        getRootProps: p,
        getRadioProps: y,
        setValue: d,
      } = Yn({
        name: "filter",
        defaultValue: n,
        onChange: (L) => {
          if (L === "custom") return;
          _(),
            i.indexOf(L) >= 0
              ? (T(s("userDialog.custom")), b(!1))
              : (T(s("userDialog.custom") + ` (${L})`), b(!0));
          const X = Number(L.substring(0, L.length - 1)),
            K = l[L[L.length - 1]];
          t(L, {
            start: j().utc().subtract(X, K).format("YYYY-MM-DDTHH:00:00"),
          });
        },
      }),
      { isOpen: c, onOpen: C, onClose: _ } = Zn(),
      f = g.exports.useRef(null);
    Qn({ ref: f, handler: _ });
    const [S, T] = g.exports.useState(s("userDialog.custom")),
      [m, b] = g.exports.useState(!1),
      [W, H] = g.exports.useState(0),
      E = Te({ base: 1, md: 2 }),
      A = Te({ base: "xs", md: "sm" }),
      [V, Q] = g.exports.useState(null),
      [D, F] = g.exports.useState(null),
      q = (L) => {
        const [X, K] = L;
        D && !K
          ? (Q(null), F(null))
          : (Q(X),
            F(K),
            X &&
              K &&
              (_(),
              t("custom", {
                start: j(X).format("YYYY-MM-DDT00:00:00"),
                end: j(K).format("YYYY-MM-DDT23:59:59"),
              })));
      };
    return r(M, {
      ...o,
      children: [
        W == 0 &&
          r(Bt, {
            ...p(),
            gap: 0,
            display: "flex",
            borderWidth: "1px",
            borderRadius: "md",
            minW: { base: "320px", md: "400px" },
            children: [
              i.map((L) => e(ur, { ...y({ value: L }), children: L }, L)),
              e(z, {
                onClick: () => {
                  Q(null), F(null), C();
                },
                cursor: "pointer",
                borderRadius: "md",
                w: "full",
                fontSize: A,
                px: 3,
                py: 1,
                bg: m ? "primary.500" : "unset",
                color: m ? "white" : "unset",
                borderColor: m ? "primary.500" : "unset",
                children: r(k, {
                  children: [
                    e(h, { children: S }),
                    e(zt, { as: Jt, boxSize: "18px" }),
                  ],
                }),
              }),
            ],
          }),
        W == 1 &&
          r(k, {
            onClick: C,
            cursor: "pointer",
            fontSize: A,
            borderRadius: "md",
            px: 3,
            py: 1,
            minW: { base: "320px", md: "400px" },
            borderWidth: "1px",
            children: [
              e(h, {
                w: "full",
                color: V ? "unset" : "gray.500",
                children: V
                  ? j(V).format("YYYY-MM-DD (00:00)")
                  : s("userDialog.startDate"),
              }),
              e(zt, { as: Nr, boxSize: "18px" }),
              e(h, {
                w: "full",
                color: D ? "unset" : "gray.500",
                children: D
                  ? j(D).format("YYYY-MM-DD (23:59)")
                  : s("userDialog.endDate"),
              }),
              e(zt, { as: Jt, boxSize: "18px" }),
            ],
          }),
        e(M, {
          ref: f,
          marginTop: "40px !important",
          borderRadius: "md",
          borderWidth: "1px",
          position: "absolute",
          zIndex: "1",
          backgroundColor: "white",
          _dark: { backgroundColor: "gray.700" },
          display: c ? "unset" : "none",
          children: r(qn, {
            onChange: (L) => H(L),
            children: [
              r(Xn, {
                children: [
                  e(Kt, { fontSize: A, children: s("userDialog.relative") }),
                  e(Kt, { fontSize: A, children: s("userDialog.absolute") }),
                ],
              }),
              r(Jn, {
                children: [
                  e(er, {
                    children: u.map((L) =>
                      e(
                        M,
                        {
                          alignItems: "start",
                          pl: 2,
                          pr: 2,
                          children: r(k, {
                            justifyItems: "flex-start",
                            mb: 4,
                            children: [
                              e(h, {
                                fontSize: A,
                                minW: "60px",
                                children: s("userDialog." + L.title),
                              }),
                              L.options.map((X) =>
                                e(
                                  ur,
                                  {
                                    border: !0,
                                    ...y({ value: X }),
                                    children: X,
                                  },
                                  X + ".custom"
                                )
                              ),
                            ],
                          }),
                        },
                        L.title
                      )
                    ),
                  }),
                  e(er, {
                    className: "datepicker-panel",
                    children: e(M, {
                      children: e(Fr, {
                        locale: a.language.toLocaleLowerCase(),
                        selected: V,
                        onChange: q,
                        startDate: V,
                        endDate: D,
                        selectsRange: !0,
                        maxDate: new Date(),
                        monthsShown: E,
                        peekNextMonth: !1,
                        inline: !0,
                      }),
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  };
function Ct(t, n, o = [], s = []) {
  const a = ee(o.reduce((i, l) => (i += l), 0));
  return {
    series: o,
    options: {
      labels: s,
      chart: {
        width: "100%",
        height: "100%",
        type: "donut",
        animations: { enabled: !1 },
      },
      title: {
        text: `${n}${a}`,
        align: "center",
        style: {
          fontWeight: "var(--chakra-fontWeights-medium)",
          color: t === "dark" ? "var(--chakra-colors-gray-300)" : void 0,
        },
      },
      legend: {
        position: "bottom",
        labels: {
          colors: t === "dark" ? "#CBD5E0" : void 0,
          useSeriesColors: !1,
        },
      },
      stroke: { width: 1, colors: void 0 },
      dataLabels: {
        formatter: (i, { seriesIndex: l, w: u }) => ee(u.config.series[l], 1),
      },
      tooltip: {
        custom: ({ series: i, seriesIndex: l, dataPointIndex: u, w: p }) => {
          const y = ee(i[l], 1),
            d = Math.max(
              i.reduce((C, _) => (C += _)),
              1
            ),
            c = Math.round((i[l] / d) * 1e3) / 10 + "%";
          return `
            <div style="
                    background-color: ${p.globals.colors[l]};
                    padding-left:12px;
                    padding-right:12px;
                    padding-top:6px;
                    padding-bottom:6px;
                    font-size:0.725rem;
                  "
            >
              ${p.config.labels[l]}: <b>${c}, ${y}</b>
            </div>
          `;
        },
      },
      colors: js(o.length),
    },
  };
}
const Bs = x(kt, { baseStyle: { w: 5, h: 5 } }),
  $s = () => {
    const { isShowingNodesUsage: t, onShowingNodesUsage: n } = I(),
      { fetchNodesUsage: o } = lt(),
      { t: s } = O(),
      [a, i] = g.exports.useState(!1),
      { colorMode: l } = ot(),
      u = s("userDialog.total"),
      [p, y] = g.exports.useState(Ct(l, u)),
      [d, c] = g.exports.useState("1m"),
      C = (S) => {
        o(S).then((T) => {
          const m = [],
            b = [];
          for (const W in T.usages) {
            const H = T.usages[W];
            b.push(H.uplink + H.downlink), m.push(H.node_name);
          }
          y(Ct(l, u, b, m));
        });
      };
    g.exports.useEffect(() => {
      t &&
        C({
          start: j().utc().subtract(30, "day").format("YYYY-MM-DDTHH:00:00"),
        });
    }, [t]);
    const _ = () => {
        n(!1), c("1m");
      },
      f = a;
    return r(re, {
      isOpen: t,
      onClose: _,
      size: "2xl",
      children: [
        e(ne, { bg: "blackAlpha.300", backdropFilter: "blur(10px)" }),
        r(oe, {
          mx: "3",
          w: "full",
          children: [
            e(se, {
              pt: 6,
              children: r(k, {
                gap: 2,
                children: [
                  e(le, {
                    color: "primary",
                    children: e(Bs, { color: "white" }),
                  }),
                  e(h, {
                    fontWeight: "semibold",
                    fontSize: "lg",
                    children: s("header.nodesUsage"),
                  }),
                ],
              }),
            }),
            e(ae, { mt: 3, disabled: f }),
            e(ie, {
              children: r(M, {
                gap: 4,
                children: [
                  e(en, {
                    defaultValue: d,
                    onChange: (S, T) => {
                      c(S), C(T);
                    },
                  }),
                  e(z, {
                    justifySelf: "center",
                    w: "full",
                    maxW: "300px",
                    mt: "4",
                    children: e(g.exports.Suspense, {
                      fallback: e(_r, { isIndeterminate: !0 }),
                      children: e(Wr, {
                        options: p.options,
                        series: p.series,
                        type: "donut",
                        height: "500px",
                      }),
                    }),
                  }),
                ],
              }),
            }),
            e(Ue, { mt: "3" }),
          ],
        }),
      ],
    });
  },
  pr = x(eo),
  Vs = x(Nr, {
    baseStyle: { w: 6, h: 6, color: "gray.600", _dark: { color: "white" } },
  }),
  Gs = x(to, {
    baseStyle: { w: 6, h: 6, color: "gray.600", _dark: { color: "white" } },
  }),
  Ys = x(Pr, { baseStyle: { w: 5, h: 5 } }),
  Zs = () => {
    const {
        QRcodeLinks: t,
        setQRCode: n,
        setSubLink: o,
        subscribeUrl: s,
      } = I(),
      a = t !== null,
      [i, l] = g.exports.useState(0),
      { t: u } = O(),
      p = () => {
        n(null), o(null);
      },
      y = String(s).startsWith("/") ? window.location.origin + s : String(s);
    return r(re, {
      isOpen: a,
      onClose: p,
      children: [
        e(ne, { bg: "blackAlpha.300", backdropFilter: "blur(10px)" }),
        r(oe, {
          mx: "3",
          w: "fit-content",
          maxW: "3xl",
          children: [
            e(se, {
              pt: 6,
              children: e(le, {
                color: "primary",
                children: e(Ys, { color: "white" }),
              }),
            }),
            e(ae, { mt: 3 }),
            t &&
              r(ie, {
                gap: { base: "20px", lg: "50px" },
                pr: { lg: "60px" },
                px: { base: "50px" },
                display: "flex",
                justifyContent: "center",
                flexDirection: { base: "column", lg: "row" },
                children: [
                  s &&
                    r(M, {
                      children: [
                        e(pr, {
                          mx: "auto",
                          size: 300,
                          p: "2",
                          level: "L",
                          includeMargin: !1,
                          value: y,
                          bg: "white",
                        }),
                        e(h, {
                          display: "block",
                          textAlign: "center",
                          pb: 3,
                          mt: 1,
                          children: u("qrcodeDialog.sublink"),
                        }),
                      ],
                    }),
                  r(z, {
                    w: "300px",
                    children: [
                      e(ro, {
                        centerPadding: "0px",
                        centerMode: !0,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: !1,
                        afterChange: l,
                        onInit: () => l(0),
                        nextArrow: e(Y, {
                          size: "sm",
                          position: "absolute",
                          display: "flex !important",
                          _before: { content: '""' },
                          "aria-label": "next",
                          mr: "-4",
                          children: e(Vs, {}),
                        }),
                        prevArrow: e(Y, {
                          size: "sm",
                          position: "absolute",
                          display: "flex !important",
                          _before: { content: '""' },
                          "aria-label": "prev",
                          ml: "-4",
                          children: e(Gs, {}),
                        }),
                        children: t.map((d, c) =>
                          e(
                            k,
                            {
                              children: e(pr, {
                                mx: "auto",
                                size: 300,
                                p: "2",
                                level: "L",
                                includeMargin: !1,
                                value: d,
                                bg: "white",
                              }),
                            },
                            c
                          )
                        ),
                      }),
                      r(h, {
                        display: "block",
                        textAlign: "center",
                        pb: 3,
                        mt: 1,
                        children: [i + 1, " / ", t.length],
                      }),
                    ],
                  }),
                ],
              }),
          ],
        }),
      ],
    });
  },
  Qs = x(Rr, { baseStyle: { w: 5, h: 5 } }),
  qs = () => {
    const [t, n] = g.exports.useState(!1),
      { isResetingAllUsage: o, onResetAllUsage: s, resetAllUsage: a } = I(),
      { t: i } = O(),
      l = ue(),
      u = () => {
        s(!1);
      },
      p = () => {
        n(!0),
          a()
            .then(() => {
              l({
                title: i("resetAllUsage.success"),
                status: "success",
                isClosable: !0,
                position: "top",
                duration: 3e3,
              });
            })
            .catch(() => {
              l({
                title: i("resetAllUsage.error"),
                status: "error",
                isClosable: !0,
                position: "top",
                duration: 3e3,
              });
            })
            .finally(() => {
              n(!1);
            });
      };
    return r(re, {
      isCentered: !0,
      isOpen: o,
      onClose: u,
      size: "sm",
      children: [
        e(ne, { bg: "blackAlpha.300", backdropFilter: "blur(10px)" }),
        r(oe, {
          mx: "3",
          children: [
            e(se, {
              pt: 6,
              children: e(le, { color: "red", children: e(Qs, {}) }),
            }),
            e(ae, { mt: 3 }),
            r(ie, {
              children: [
                e(h, {
                  fontWeight: "semibold",
                  fontSize: "lg",
                  children: i("resetAllUsage.title"),
                }),
                o &&
                  e(h, {
                    mt: 1,
                    fontSize: "sm",
                    _dark: { color: "gray.400" },
                    color: "gray.600",
                    children: i("resetAllUsage.prompt"),
                  }),
              ],
            }),
            r(Ue, {
              display: "flex",
              children: [
                e(N, {
                  size: "sm",
                  onClick: u,
                  mr: 3,
                  w: "full",
                  variant: "outline",
                  children: i("cancel"),
                }),
                e(N, {
                  size: "sm",
                  w: "full",
                  colorScheme: "red",
                  onClick: p,
                  leftIcon: t ? e(Ne, { size: "xs" }) : void 0,
                  children: i("reset"),
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  Xs = x(_t, { baseStyle: { w: 5, h: 5 } }),
  Js = () => {
    const [t, n] = g.exports.useState(!1),
      { resetUsageUser: o, resetDataUsage: s } = I(),
      { t: a } = O(),
      i = ue(),
      l = () => {
        I.setState({ resetUsageUser: null });
      },
      u = () => {
        o &&
          (n(!0),
          s(o)
            .then(() => {
              i({
                title: a("resetUserUsage.success", { username: o.username }),
                status: "success",
                isClosable: !0,
                position: "top",
                duration: 3e3,
              });
            })
            .catch(() => {
              i({
                title: a("resetUserUsage.error"),
                status: "error",
                isClosable: !0,
                position: "top",
                duration: 3e3,
              });
            })
            .finally(() => {
              n(!1);
            }));
      };
    return r(re, {
      isCentered: !0,
      isOpen: !!o,
      onClose: l,
      size: "sm",
      children: [
        e(ne, { bg: "blackAlpha.300", backdropFilter: "blur(10px)" }),
        r(oe, {
          mx: "3",
          children: [
            e(se, {
              pt: 6,
              children: e(le, { color: "blue", children: e(Xs, {}) }),
            }),
            e(ae, { mt: 3 }),
            r(ie, {
              children: [
                e(h, {
                  fontWeight: "semibold",
                  fontSize: "lg",
                  children: a("resetUserUsage.title"),
                }),
                o &&
                  e(h, {
                    mt: 1,
                    fontSize: "sm",
                    _dark: { color: "gray.400" },
                    color: "gray.600",
                    children: e(Ee, {
                      components: { b: e("b", {}) },
                      children: a("resetUserUsage.prompt", {
                        username: o.username,
                      }),
                    }),
                  }),
              ],
            }),
            r(Ue, {
              display: "flex",
              children: [
                e(N, {
                  size: "sm",
                  onClick: l,
                  mr: 3,
                  w: "full",
                  variant: "outline",
                  children: a("cancel"),
                }),
                e(N, {
                  size: "sm",
                  w: "full",
                  colorScheme: "blue",
                  onClick: u,
                  leftIcon: t ? e(Ne, { size: "xs" }) : void 0,
                  children: a("reset"),
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  Ks = x(_t, { baseStyle: { w: 5, h: 5 } }),
  ea = () => {
    const [t, n] = g.exports.useState(!1),
      { revokeSubscriptionUser: o, revokeSubscription: s } = I(),
      { t: a } = O(),
      i = ue(),
      l = () => {
        I.setState({ revokeSubscriptionUser: null });
      },
      u = () => {
        o &&
          (n(!0),
          s(o)
            .then(() => {
              i({
                title: a("revokeUserSub.success", { username: o.username }),
                status: "success",
                isClosable: !0,
                position: "top",
                duration: 3e3,
              });
            })
            .catch(() => {
              i({
                title: a("revokeUserSub.error"),
                status: "error",
                isClosable: !0,
                position: "top",
                duration: 3e3,
              });
            })
            .finally(() => {
              n(!1);
            }));
      };
    return r(re, {
      isCentered: !0,
      isOpen: !!o,
      onClose: l,
      size: "sm",
      children: [
        e(ne, { bg: "blackAlpha.300", backdropFilter: "blur(10px)" }),
        r(oe, {
          mx: "3",
          children: [
            e(se, {
              pt: 6,
              children: e(le, { color: "blue", children: e(Ks, {}) }),
            }),
            e(ae, { mt: 3 }),
            r(ie, {
              children: [
                e(h, {
                  fontWeight: "semibold",
                  fontSize: "lg",
                  children: a("revokeUserSub.title"),
                }),
                o &&
                  e(h, {
                    mt: 1,
                    fontSize: "sm",
                    _dark: { color: "gray.400" },
                    color: "gray.600",
                    children: e(Ee, {
                      components: { b: e("b", {}) },
                      children: a("revokeUserSub.prompt", {
                        username: o.username,
                      }),
                    }),
                  }),
              ],
            }),
            r(Ue, {
              display: "flex",
              children: [
                e(N, {
                  size: "sm",
                  onClick: l,
                  mr: 3,
                  w: "full",
                  variant: "outline",
                  children: a("cancel"),
                }),
                e(N, {
                  size: "sm",
                  w: "full",
                  colorScheme: "blue",
                  onClick: u,
                  leftIcon: t ? e(Ne, { size: "xs" }) : void 0,
                  children: a("revoke"),
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  ta = x(no, { baseStyle: { strokeWidth: "2px", w: 5, h: 5 } }),
  ra = ({ inbound: t, ...n }) => {
    const {
        getCheckboxProps: o,
        getInputProps: s,
        getLabelProps: a,
        htmlProps: i,
      } = jr(n),
      l = s();
    return r(z, {
      as: "label",
      children: [
        e("input", { ...l }),
        r(z, {
          w: "fll",
          position: "relative",
          ...i,
          cursor: "pointer",
          borderRadius: "sm",
          border: "1px solid",
          borderColor: "gray.200",
          _dark: { borderColor: "gray.600" },
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          overflow: "hidden",
          _checked: {
            bg: "gray.50",
            outline: "2px",
            boxShadow: "outline",
            outlineColor: "primary.500",
            borderColor: "transparent",
            fontWeight: "medium",
            _dark: { bg: "gray.750", borderColor: "transparent" },
            "& p": { opacity: 1 },
          },
          __css: { "& p": { opacity: 0.8 } },
          textTransform: "capitalize",
          px: 3,
          py: 2,
          fontWeight: "medium",
          ...o(),
          children: [
            e(xt, {
              size: "sm",
              w: "full",
              maxW: "full",
              color: "gray.700",
              _dark: { color: "gray.300" },
              textTransform: "uppercase",
              colorScheme: "primary",
              className: "inbound-item",
              isChecked: l.checked,
              pointerEvents: "none",
              flexGrow: 1,
              children: e(k, {
                justify: "space-between",
                w: "full",
                maxW: "calc(100% - 20px)",
                spacing: 0,
                gap: 2,
                overflow: "hidden",
                children: r(h, {
                  isTruncated: !0,
                  ...a(),
                  fontSize: "xs",
                  children: [
                    t.tag,
                    " ",
                    r(h, { as: "span", children: ["(", t.network, ")"] }),
                  ],
                }),
              }),
            }),
            t.tls &&
              t.tls != "none" &&
              e(U, {
                fontSize: "xs",
                opacity: ".8",
                size: "xs",
                children: t.tls,
              }),
          ],
        }),
      ],
    });
  },
  na = ({
    disabled: t,
    title: n,
    description: o,
    toggleAccordion: s,
    isSelected: a,
    ...i
  }) => {
    const l = Ot(),
      { inbounds: u } = I(),
      {
        getCheckboxProps: p,
        getInputProps: y,
        getLabelProps: d,
        htmlProps: c,
      } = jr(i),
      C = y(),
      [_] = Hr({ name: [`inbounds.${n}`], control: l.control }),
      { getCheckboxProps: f } = Or({
        value: _,
        onChange: (b) => {
          if ((l.setValue(`inbounds.${n}`, b), b.length === 0)) {
            const W = l.getValues("selected_proxies");
            l.setValue(
              "selected_proxies",
              W.filter((H) => H !== n)
            ),
              s();
          }
        },
      }),
      S = _ && a && (I.getState().inbounds.get(n) || []).length !== _.length,
      T = (I.getState().inbounds.get(n) || []).length > 0,
      m = !a && !T;
    return r(Pe, {
      isDisabled: !T,
      borderRadius: "md",
      borderStyle: "solid",
      border: "1px",
      borderColor: "gray.200",
      bg: m ? "gray.100" : "transparent",
      _dark: { borderColor: "gray.600", bg: m ? "#364154" : "transparent" },
      _checked: {
        bg: "gray.50",
        outline: "2px",
        boxShadow: "outline",
        outlineColor: "primary.500",
        borderColor: "transparent",
      },
      ...p(),
      children: [
        r(z, {
          as: m ? "span" : "label",
          position: "relative",
          children: [
            S &&
              e(z, {
                position: "absolute",
                w: "2",
                h: "2",
                bg: "yellow.500",
                top: "-1",
                right: "-1",
                rounded: "full",
                zIndex: 999,
              }),
            e("input", { ...C }),
            r(z, {
              w: "fll",
              position: "relative",
              ...c,
              borderRadius: "md",
              cursor: m ? "not-allowed" : "pointer",
              _checked: {
                fontWeight: "medium",
                _dark: { bg: "gray.750", borderColor: "transparent" },
                "& > svg": {
                  opacity: 1,
                  "&.checked": { display: "block" },
                  "&.unchecked": { display: "none" },
                },
                "& p": { opacity: 1 },
              },
              __css: {
                "& > svg": {
                  opacity: 0.3,
                  "&.checked": { display: "none" },
                  "&.unchecked": { display: "block" },
                },
                "& p": { opacity: 0.8 },
              },
              textTransform: "capitalize",
              px: 3,
              py: 2,
              fontWeight: "medium",
              ...p(),
              children: [
                e(Oe, {
                  display: C.checked && T ? "block" : "none",
                  as: "span",
                  className: "checked",
                  color: "primary.200",
                  position: "absolute",
                  right: "3",
                  top: "3",
                  w: "auto",
                  p: 0,
                  onClick: s,
                  children: e(Y, {
                    size: "sm",
                    "aria-label": "inbound settings",
                    children: e(ta, {}),
                  }),
                }),
                e(h, {
                  fontSize: "sm",
                  color: m ? "gray.400" : "gray.700",
                  _dark: { color: m ? "gray.500" : "gray.300" },
                  ...d(),
                  children: n,
                }),
                e(h, {
                  fontWeight: "medium",
                  color: m ? "gray.400" : "gray.600",
                  _dark: { color: m ? "gray.500" : "gray.400" },
                  fontSize: "xs",
                  children: o,
                }),
              ],
            }),
          ],
        }),
        e(je, {
          px: 2,
          pb: 3,
          roundedBottom: "5px",
          pt: 3,
          _dark: { bg: C.checked && "gray.750" },
          children: r(M, {
            w: "full",
            rowGap: 2,
            borderStyle: "solid",
            borderWidth: "1px",
            borderRadius: "md",
            pl: 3,
            pr: 3,
            pt: 1.5,
            _dark: { bg: "gray.700" },
            children: [
              r(M, {
                alignItems: "flex-start",
                w: "full",
                children: [
                  e(h, { fontSize: "sm", children: J("inbound") }),
                  e(Bt, {
                    gap: 2,
                    alignItems: "flex-start",
                    w: "full",
                    columns: 1,
                    spacing: 1,
                    children: (u.get(n) || []).map((b) =>
                      e(ra, { ...f({ value: b.tag }), inbound: b }, b.tag)
                    ),
                  }),
                ],
              }),
              n === "vmess" &&
                a &&
                e(M, {
                  alignItems: "flex-start",
                  w: "full",
                  children: r(R, {
                    height: "66px",
                    children: [
                      e(h, { fontSize: "sm", pb: 1, children: "ID" }),
                      e(We, {
                        fontSize: "xs",
                        size: "sm",
                        borderRadius: "6px",
                        pl: 2,
                        pr: 2,
                        placeholder: J("userDialog.generatedByDefault"),
                        ...l.register("proxies.vmess.id"),
                      }),
                    ],
                  }),
                }),
              n === "vless" &&
                a &&
                r(M, {
                  alignItems: "flex-start",
                  w: "full",
                  children: [
                    r(R, {
                      height: "66px",
                      children: [
                        e(h, { fontSize: "sm", pb: 1, children: "ID" }),
                        e(We, {
                          fontSize: "xs",
                          size: "sm",
                          borderRadius: "6px",
                          pl: 2,
                          pr: 2,
                          placeholder: J("userDialog.generatedByDefault"),
                          ...l.register("proxies.vless.id"),
                        }),
                      ],
                    }),
                    r(R, {
                      height: "66px",
                      children: [
                        e(h, { fontSize: "sm", pb: 1, children: "Flow" }),
                        e(Me, {
                          fontSize: "xs",
                          size: "sm",
                          borderRadius: "6px",
                          ...l.register("proxies.vless.flow"),
                          children: ks.map((b) =>
                            e(
                              "option",
                              { value: b.value, children: b.title },
                              b.title
                            )
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
              n === "trojan" &&
                a &&
                e(M, {
                  alignItems: "flex-start",
                  w: "full",
                  children: r(R, {
                    height: "66px",
                    children: [
                      e(h, { fontSize: "sm", pb: 1, children: J("password") }),
                      e(We, {
                        fontSize: "xs",
                        size: "sm",
                        borderRadius: "6px",
                        pl: 2,
                        pr: 2,
                        placeholder: J("userDialog.generatedByDefault"),
                        ...l.register("proxies.trojan.password"),
                      }),
                    ],
                  }),
                }),
              n === "shadowsocks" &&
                a &&
                r(M, {
                  alignItems: "flex-start",
                  w: "full",
                  children: [
                    r(R, {
                      height: "66px",
                      children: [
                        e(h, {
                          fontSize: "sm",
                          pb: 1,
                          children: J("password"),
                        }),
                        e(We, {
                          fontSize: "xs",
                          size: "sm",
                          borderRadius: "6px",
                          pl: 2,
                          pr: 2,
                          placeholder: J("userDialog.generatedByDefault"),
                          ...l.register("proxies.shadowsocks.password"),
                        }),
                      ],
                    }),
                    r(R, {
                      height: "66px",
                      children: [
                        e(h, {
                          fontSize: "sm",
                          pb: 1,
                          children: J("userDialog.method"),
                        }),
                        e(Me, {
                          fontSize: "xs",
                          size: "sm",
                          borderRadius: "6px",
                          ...l.register("proxies.shadowsocks.method"),
                          children: _s.map((b) =>
                            e("option", { value: b, children: b }, b)
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
            ],
          }),
        }),
      ],
    });
  },
  oa = g.exports.forwardRef(
    ({ name: t, list: n, onChange: o, disabled: s, ...a }, i) => {
      const l = Ot(),
        [u, p] = g.exports.useState([]),
        y = (c) => {
          u.includes(c) ? u.splice(u.indexOf(c), 1) : u.push(c), p([...u]);
        },
        { getCheckboxProps: d } = Or({
          value: a.value,
          onChange: (c) => {
            var _;
            const C = c.filter((f) => !a.value.includes(f));
            C[0] &&
              l.setValue(
                `inbounds.${C[0]}`,
                (_ = I.getState().inbounds.get(C[0])) == null
                  ? void 0
                  : _.map((f) => f.tag)
              ),
              p(u.filter((f) => c.find((S) => S === n[f].title))),
              o({ target: { value: c, name: t } });
          },
        });
      return e(at, {
        allowToggle: !0,
        index: u,
        children: e(Bt, {
          ref: i,
          gap: 2,
          alignItems: "flex-start",
          columns: 1,
          spacing: 1,
          children: n.map((c, C) =>
            e(
              na,
              {
                toggleAccordion: y.bind(null, C),
                disabled: s,
                title: c.title,
                description: c.description,
                isSelected: !!a.value.find((_) => _ === c.title),
                ...d({ value: c.title }),
              },
              c.title
            )
          ),
        }),
      });
    }
  ),
  sa = x(oo, { baseStyle: { w: 5, h: 5 } }),
  aa = x(Br, { baseStyle: { w: 5, h: 5 } }),
  ia = x(kt, { baseStyle: { w: 5, h: 5 } }),
  la = w.object({
    username: w.string().min(1, { message: "Required" }),
    selected_proxies: w
      .array(w.string())
      .refine((t) => t.length > 0, { message: "userDialog.selectOneProtocol" }),
    note: w.string().nullable(),
    proxies: w
      .record(w.string(), w.record(w.string(), w.any()))
      .transform((t) => {
        const n = (o, s) => {
          o && o[s] === "" && delete o[s];
        };
        return (
          n(t.vmess, "id"),
          n(t.vless, "id"),
          n(t.trojan, "password"),
          n(t.shadowsocks, "password"),
          n(t.shadowsocks, "method"),
          t
        );
      }),
    data_limit: w
      .string()
      .min(0, "The minimum number is 0")
      .or(w.number())
      .nullable()
      .transform((t) =>
        t ? Number((parseFloat(String(t)) * 1073741824).toFixed(5)) : 0
      ),
    expire: w.number().nullable(),
    data_limit_reset_strategy: w.string(),
    status: w.string(),
    inbounds: w.record(w.string(), w.array(w.string())).transform(
      (t) => (
        Object.keys(t).forEach((n) => {
          var o;
          Array.isArray(t[n]) &&
            !((o = t[n]) != null && o.length) &&
            delete t[n];
        }),
        t
      )
    ),
  }),
  ca = (t) => ({
    ...t,
    data_limit: t.data_limit
      ? Number((t.data_limit / 1073741824).toFixed(5))
      : t.data_limit,
    selected_proxies: Object.keys(t.proxies),
  }),
  Ut = () => {
    const t = Object.fromEntries(I.getState().inbounds),
      n = {};
    for (const o in t) n[o] = t[o].map((s) => s.tag);
    return {
      selected_proxies: Object.keys(t),
      data_limit: null,
      expire: null,
      username: "",
      data_limit_reset_strategy: "no_reset",
      status: "active",
      note: "",
      inbounds: n,
      proxies: {
        vless: { id: "", flow: "" },
        vmess: { id: "" },
        trojan: { password: "" },
        shadowsocks: { password: "", method: "chacha20-ietf-poly1305" },
      },
    };
  },
  da = (t, n) => {
    const o = t.reduce((s, a) => ({ ...s, [a]: {} }), {});
    return (
      n &&
        t.forEach((s) => {
          n[s] && (o[s] = n[s]);
        }),
      o
    );
  },
  ha = () => {
    var $e, Ve, Ge, Ye, Ze;
    const {
        editingUser: t,
        isCreatingNewUser: n,
        onCreateUser: o,
        editUser: s,
        fetchUserUsage: a,
        onEditingUser: i,
        createUser: l,
        onDeletingUser: u,
      } = I(),
      p = !!t,
      y = n || p,
      [d, c] = g.exports.useState(!1),
      [C, _] = g.exports.useState(""),
      f = ue(),
      { t: S, i18n: T } = O(),
      { colorMode: m } = ot(),
      [b, W] = g.exports.useState(!1),
      H = () => {
        W((v) => !v);
      },
      E = He({ defaultValues: Ut(), resolver: st(la) });
    g.exports.useEffect(
      () =>
        I.subscribe(
          (v) => v.inbounds,
          () => {
            E.reset(Ut());
          }
        ),
      []
    );
    const [A] = Hr({ control: E.control, name: ["data_limit"] }),
      V = S("userDialog.total"),
      [Q, D] = g.exports.useState(Ct(m, V)),
      [F, q] = g.exports.useState("1m"),
      L = (v) => {
        a(t, v).then((B) => {
          const ge = [],
            fe = [];
          for (const ce in B.usages)
            fe.push(B.usages[ce].used_traffic), ge.push(B.usages[ce].node_name);
          D(Ct(m, V, fe, ge));
        });
      };
    g.exports.useEffect(() => {
      t &&
        (E.reset(ca(t)),
        L({
          start: j().utc().subtract(30, "day").format("YYYY-MM-DDTHH:00:00"),
        }));
    }, [t]);
    const X = (v) => {
        c(!0);
        const B = { edited: s, created: l },
          ge = p ? "edited" : "created";
        _(null);
        const { selected_proxies: fe, ...ce } = v;
        let be = {
          ...ce,
          data_limit: v.data_limit,
          proxies: da(fe, v.proxies),
          data_limit_reset_strategy:
            v.data_limit && v.data_limit > 0
              ? v.data_limit_reset_strategy
              : "no_reset",
          status:
            v.status === "active" || v.status === "disabled"
              ? v.status
              : "active",
        };
        B[ge](be)
          .then(() => {
            f({
              title: S(p ? "userDialog.userEdited" : "userDialog.userCreated", {
                username: v.username,
              }),
              status: "success",
              isClosable: !0,
              position: "top",
              duration: 3e3,
            }),
              K();
          })
          .catch((G) => {
            var Qe, qe, Z, Xe, Zt;
            (((Qe = G == null ? void 0 : G.response) == null
              ? void 0
              : Qe.status) === 409 ||
              ((qe = G == null ? void 0 : G.response) == null
                ? void 0
                : qe.status) === 400) &&
              _(
                (Xe =
                  (Z = G == null ? void 0 : G.response) == null
                    ? void 0
                    : Z._data) == null
                  ? void 0
                  : Xe.detail
              ),
              ((Zt = G == null ? void 0 : G.response) == null
                ? void 0
                : Zt.status) === 422 &&
                Object.keys(G.response._data.detail).forEach((It) => {
                  _(G == null ? void 0 : G.response._data.detail[It]),
                    E.setError(It, {
                      type: "custom",
                      message: G.response._data.detail[It],
                    });
                });
          })
          .finally(() => {
            c(!1);
          });
      },
      K = () => {
        E.reset(Ut()), o(!1), i(null), _(null), W(!1), q("1m");
      },
      dt = () => {
        I.setState({ resetUsageUser: t });
      },
      ht = () => {
        I.setState({ revokeSubscriptionUser: t });
      },
      me = d;
    return r(re, {
      isOpen: y,
      onClose: K,
      size: "2xl",
      children: [
        e(ne, { bg: "blackAlpha.300", backdropFilter: "blur(10px)" }),
        e(Lr, {
          ...E,
          children: e(oe, {
            mx: "3",
            children: r("form", {
              onSubmit: E.handleSubmit(X),
              children: [
                e(se, {
                  pt: 6,
                  children: r(k, {
                    gap: 2,
                    children: [
                      e(le, {
                        color: "primary",
                        children: p
                          ? e(aa, { color: "white" })
                          : e(sa, { color: "white" }),
                      }),
                      e(h, {
                        fontWeight: "semibold",
                        fontSize: "lg",
                        children: S(
                          p ? "userDialog.editUserTitle" : "createNewUser"
                        ),
                      }),
                    ],
                  }),
                }),
                e(ae, { mt: 3, disabled: me }),
                r(ie, {
                  children: [
                    r(Ir, {
                      templateColumns: {
                        base: "repeat(1, 1fr)",
                        md: "repeat(2, 1fr)",
                      },
                      gap: 3,
                      children: [
                        e(Ke, {
                          children: r(M, {
                            justifyContent: "space-between",
                            children: [
                              r(so, {
                                flexDirection: "column",
                                gridAutoRows: "min-content",
                                w: "full",
                                children: [
                                  r(R, {
                                    mb: "10px",
                                    children: [
                                      e($, { children: S("username") }),
                                      r(k, {
                                        children: [
                                          e(Ae, {
                                            size: "sm",
                                            type: "text",
                                            borderRadius: "6px",
                                            error:
                                              ($e =
                                                E.formState.errors.username) ==
                                              null
                                                ? void 0
                                                : $e.message,
                                            disabled: me || p,
                                            ...E.register("username"),
                                          }),
                                          p &&
                                            e(k, {
                                              px: 1,
                                              children: e(De, {
                                                name: "status",
                                                control: E.control,
                                                render: ({ field: v }) =>
                                                  e(te, {
                                                    placement: "top",
                                                    label: "status: " + v.value,
                                                    textTransform: "capitalize",
                                                    children: e(z, {
                                                      children: e(jt, {
                                                        colorScheme: "primary",
                                                        disabled:
                                                          v.value !==
                                                            "active" &&
                                                          v.value !==
                                                            "disabled",
                                                        isChecked:
                                                          v.value === "active",
                                                        onChange: (B) => {
                                                          B.target.checked
                                                            ? v.onChange(
                                                                "active"
                                                              )
                                                            : v.onChange(
                                                                "disabled"
                                                              );
                                                        },
                                                      }),
                                                    }),
                                                  }),
                                              }),
                                            }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  r(R, {
                                    mb: "10px",
                                    children: [
                                      e($, {
                                        children: S("userDialog.dataLimit"),
                                      }),
                                      e(De, {
                                        control: E.control,
                                        name: "data_limit",
                                        render: ({ field: v }) => {
                                          var B;
                                          return e(Ae, {
                                            endAdornment: "GB",
                                            type: "number",
                                            size: "sm",
                                            borderRadius: "6px",
                                            onChange: v.onChange,
                                            disabled: me,
                                            error:
                                              (B =
                                                E.formState.errors
                                                  .data_limit) == null
                                                ? void 0
                                                : B.message,
                                            value: v.value
                                              ? String(v.value)
                                              : "",
                                          });
                                        },
                                      }),
                                    ],
                                  }),
                                  e(Mr, {
                                    in: !!(A && A > 0),
                                    animateOpacity: !0,
                                    style: { width: "100%" },
                                    children: r(R, {
                                      height: "66px",
                                      children: [
                                        e($, {
                                          children: S(
                                            "userDialog.periodicUsageReset"
                                          ),
                                        }),
                                        e(De, {
                                          control: E.control,
                                          name: "data_limit_reset_strategy",
                                          render: ({ field: v }) =>
                                            e(Me, {
                                              size: "sm",
                                              ...v,
                                              children: Nt.map((B) =>
                                                e(
                                                  "option",
                                                  {
                                                    value: B.value,
                                                    children: S(
                                                      "userDialog.resetStrategy" +
                                                        B.title
                                                    ),
                                                  },
                                                  B.value
                                                )
                                              ),
                                            }),
                                        }),
                                      ],
                                    }),
                                  }),
                                  r(R, {
                                    mb: "10px",
                                    children: [
                                      e($, {
                                        children: S("userDialog.expiryDate"),
                                      }),
                                      e(De, {
                                        name: "expire",
                                        control: E.control,
                                        render: ({ field: v }) => {
                                          var ce;
                                          function B(be) {
                                            return j(
                                              j(be * 1e3).utc()
                                            ).toDate();
                                          }
                                          const { status: ge, time: fe } = Yt(
                                            v.value
                                          );
                                          return r(xe, {
                                            children: [
                                              e(Fr, {
                                                locale:
                                                  T.language.toLocaleLowerCase(),
                                                dateFormat: S("dateFormat"),
                                                minDate: new Date(),
                                                selected: v.value
                                                  ? B(v.value)
                                                  : void 0,
                                                onChange: (be) => {
                                                  v.onChange({
                                                    target: {
                                                      value: be
                                                        ? j(
                                                            j(be)
                                                              .set("hour", 23)
                                                              .set("minute", 59)
                                                              .set("second", 59)
                                                          )
                                                            .utc()
                                                            .valueOf() / 1e3
                                                        : 0,
                                                      name: "expire",
                                                    },
                                                  });
                                                },
                                                customInput: e(Ae, {
                                                  size: "sm",
                                                  type: "text",
                                                  borderRadius: "6px",
                                                  clearable: !0,
                                                  disabled: me,
                                                  error:
                                                    (ce =
                                                      E.formState.errors
                                                        .expire) == null
                                                      ? void 0
                                                      : ce.message,
                                                }),
                                              }),
                                              v.value
                                                ? e(ao, {
                                                    children: S(ge, {
                                                      time: fe,
                                                    }),
                                                  })
                                                : "",
                                            ],
                                          });
                                        },
                                      }),
                                    ],
                                  }),
                                  r(R, {
                                    mb: "10px",
                                    isInvalid: !!E.formState.errors.note,
                                    children: [
                                      e($, { children: S("userDialog.note") }),
                                      e(io, { ...E.register("note") }),
                                      e(bt, {
                                        children:
                                          (Ge =
                                            (Ve = E.formState.errors) == null
                                              ? void 0
                                              : Ve.note) == null
                                            ? void 0
                                            : Ge.message,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              C &&
                                r(rt, {
                                  status: "error",
                                  display: { base: "none", md: "flex" },
                                  children: [e(yt, {}), C],
                                }),
                            ],
                          }),
                        }),
                        e(Ke, {
                          children: r(R, {
                            isInvalid: !!(
                              (Ye = E.formState.errors.selected_proxies) !=
                                null && Ye.message
                            ),
                            children: [
                              e($, { children: S("userDialog.protocols") }),
                              e(De, {
                                control: E.control,
                                name: "selected_proxies",
                                render: ({ field: v }) =>
                                  e(oa, {
                                    list: [
                                      {
                                        title: "vmess",
                                        description: S("userDialog.vmessDesc"),
                                      },
                                      {
                                        title: "vless",
                                        description: S("userDialog.vlessDesc"),
                                      },
                                      {
                                        title: "trojan",
                                        description: S("userDialog.trojanDesc"),
                                      },
                                      {
                                        title: "shadowsocks",
                                        description: S(
                                          "userDialog.shadowsocksDesc"
                                        ),
                                      },
                                    ],
                                    disabled: me,
                                    ...v,
                                  }),
                              }),
                              e(bt, {
                                children: S(
                                  (Ze = E.formState.errors.selected_proxies) ==
                                    null
                                    ? void 0
                                    : Ze.message
                                ),
                              }),
                            ],
                          }),
                        }),
                        p &&
                          b &&
                          e(Ke, {
                            pt: 6,
                            colSpan: { base: 1, md: 2 },
                            children: r(M, {
                              gap: 4,
                              children: [
                                e(en, {
                                  defaultValue: F,
                                  onChange: (v, B) => {
                                    q(v), L(B);
                                  },
                                }),
                                e(z, {
                                  width: { base: "100%", md: "70%" },
                                  justifySelf: "center",
                                  children: e(Wr, {
                                    options: Q.options,
                                    series: Q.series,
                                    type: "donut",
                                  }),
                                }),
                              ],
                            }),
                          }),
                      ],
                    }),
                    C &&
                      r(rt, {
                        mt: "3",
                        status: "error",
                        display: { base: "flex", md: "none" },
                        children: [e(yt, {}), C],
                      }),
                  ],
                }),
                e(Ue, {
                  mt: "3",
                  children: r(k, {
                    justifyContent: "space-between",
                    w: "full",
                    gap: 3,
                    flexDirection: { base: "column", sm: "row" },
                    children: [
                      e(k, {
                        justifyContent: "flex-start",
                        w: { base: "full", sm: "unset" },
                        children:
                          p &&
                          r(xe, {
                            children: [
                              e(te, {
                                label: S("delete"),
                                placement: "top",
                                children: e(Y, {
                                  "aria-label": "Delete",
                                  size: "sm",
                                  onClick: () => {
                                    u(t), K();
                                  },
                                  children: e(it, {}),
                                }),
                              }),
                              e(te, {
                                label: S("userDialog.usage"),
                                placement: "top",
                                children: e(Y, {
                                  "aria-label": "usage",
                                  size: "sm",
                                  onClick: H,
                                  children: e(ia, {}),
                                }),
                              }),
                              e(N, {
                                onClick: dt,
                                size: "sm",
                                children: S("userDialog.resetUsage"),
                              }),
                              e(N, {
                                onClick: ht,
                                size: "sm",
                                children: S("userDialog.revokeSubscription"),
                              }),
                            ],
                          }),
                      }),
                      e(k, {
                        w: "full",
                        maxW: { md: "50%", base: "full" },
                        justify: "end",
                        children: e(N, {
                          type: "submit",
                          size: "sm",
                          px: "8",
                          colorScheme: "primary",
                          leftIcon: d ? e(Ne, { size: "xs" }) : void 0,
                          disabled: me,
                          children: S(p ? "userDialog.editUser" : "createUser"),
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        }),
      ],
    });
  },
  ua = (t) =>
    g.exports.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        "data-name": "Layer 1",
        width: 782.04441,
        height: 701.88002,
        viewBox: "0 0 782.04441 701.88002",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        ...t,
      },
      g.exports.createElement("path", {
        d: "M609.48783,100.59015l-25.44631,6.56209L270.53735,187.9987,245.091,194.56079A48.17927,48.17927,0,0,0,210.508,253.17865L320.849,681.05606a48.17924,48.17924,0,0,0,58.61776,34.58317l.06572-.01695,364.26536-93.93675.06572-.01695a48.17923,48.17923,0,0,0,34.58309-58.6178l-110.341-427.87741A48.17928,48.17928,0,0,0,609.48783,100.59015Z",
        transform: "translate(-208.9778 -99.05999)",
        fill: "#f2f2f2",
      }),
      g.exports.createElement("path", {
        d: "M612.94784,114.00532l-30.13945,7.77236L278.68955,200.20385l-30.139,7.77223a34.30949,34.30949,0,0,0-24.6275,41.74308l110.341,427.87741a34.30946,34.30946,0,0,0,41.7431,24.62736l.06572-.01695,364.26536-93.93674.06619-.01707a34.30935,34.30935,0,0,0,24.627-41.7429l-110.341-427.87741A34.30938,34.30938,0,0,0,612.94784,114.00532Z",
        transform: "translate(-208.9778 -99.05999)",
        fill: "#fff",
      }),
      g.exports.createElement("path", {
        d: "M590.19,252.56327,405.917,300.08359a8.01411,8.01411,0,0,1-4.00241-15.52046l184.273-47.52033A8.01412,8.01412,0,0,1,590.19,252.56327Z",
        transform: "translate(-208.9778 -99.05999)",
        fill: "#f2f2f2",
      }),
      g.exports.createElement("path", {
        d: "M628.955,270.49906,412.671,326.27437a8.01411,8.01411,0,1,1-4.00241-15.52046l216.284-55.77531a8.01411,8.01411,0,0,1,4.00242,15.52046Z",
        transform: "translate(-208.9778 -99.05999)",
        fill: "#f2f2f2",
      }),
      g.exports.createElement("path", {
        d: "M620.45825,369.93676l-184.273,47.52032a8.01411,8.01411,0,1,1-4.00242-15.52046l184.273-47.52032a8.01411,8.01411,0,1,1,4.00241,15.52046Z",
        transform: "translate(-208.9778 -99.05999)",
        fill: "#f2f2f2",
      }),
      g.exports.createElement("path", {
        d: "M659.22329,387.87255l-216.284,55.77531a8.01411,8.01411,0,1,1-4.00242-15.52046l216.284-55.77531a8.01411,8.01411,0,0,1,4.00242,15.52046Z",
        transform: "translate(-208.9778 -99.05999)",
        fill: "#f2f2f2",
      }),
      g.exports.createElement("path", {
        d: "M650.72653,487.31025l-184.273,47.52033a8.01412,8.01412,0,0,1-4.00242-15.52047l184.273-47.52032a8.01411,8.01411,0,0,1,4.00242,15.52046Z",
        transform: "translate(-208.9778 -99.05999)",
        fill: "#f2f2f2",
      }),
      g.exports.createElement("path", {
        d: "M689.49156,505.246l-216.284,55.77532a8.01412,8.01412,0,1,1-4.00241-15.52047l216.284-55.77531a8.01411,8.01411,0,0,1,4.00242,15.52046Z",
        transform: "translate(-208.9778 -99.05999)",
        fill: "#f2f2f2",
      }),
      g.exports.createElement("path", {
        d: "M374.45884,348.80871l-65.21246,16.817a3.847,3.847,0,0,1-4.68062-2.76146L289.5963,304.81607a3.847,3.847,0,0,1,2.76145-4.68061l65.21247-16.817a3.847,3.847,0,0,1,4.68061,2.76145l14.96947,58.04817A3.847,3.847,0,0,1,374.45884,348.80871Z",
        transform: "translate(-208.9778 -99.05999)",
        fill: "#e6e6e6",
      }),
      g.exports.createElement("path", {
        d: "M404.72712,466.1822l-65.21247,16.817a3.847,3.847,0,0,1-4.68062-2.76146l-14.96946-58.04816A3.847,3.847,0,0,1,322.626,417.509l65.21246-16.817a3.847,3.847,0,0,1,4.68062,2.76145l14.96946,58.04817A3.847,3.847,0,0,1,404.72712,466.1822Z",
        transform: "translate(-208.9778 -99.05999)",
        fill: "#e6e6e6",
      }),
      g.exports.createElement("path", {
        d: "M434.99539,583.55569l-65.21246,16.817a3.847,3.847,0,0,1-4.68062-2.76145l-14.96946-58.04817a3.847,3.847,0,0,1,2.76145-4.68062l65.21247-16.817a3.847,3.847,0,0,1,4.68061,2.76146l14.96947,58.04816A3.847,3.847,0,0,1,434.99539,583.55569Z",
        transform: "translate(-208.9778 -99.05999)",
        fill: "#e6e6e6",
      }),
      g.exports.createElement("path", {
        d: "M863.63647,209.0517H487.31811a48.17928,48.17928,0,0,0-48.125,48.12512V699.05261a48.17924,48.17924,0,0,0,48.125,48.12507H863.63647a48.17924,48.17924,0,0,0,48.125-48.12507V257.17682A48.17928,48.17928,0,0,0,863.63647,209.0517Z",
        transform: "translate(-208.9778 -99.05999)",
        fill: "#e6e6e6",
      }),
      g.exports.createElement("path", {
        d: "M863.637,222.90589H487.31811a34.30948,34.30948,0,0,0-34.271,34.27093V699.05261a34.30947,34.30947,0,0,0,34.271,34.27088H863.637a34.30936,34.30936,0,0,0,34.27051-34.27088V257.17682A34.30937,34.30937,0,0,0,863.637,222.90589Z",
        transform: "translate(-208.9778 -99.05999)",
        fill: "#fff",
      }),
      g.exports.createElement("circle", {
        cx: 694.19401,
        cy: 614.02963,
        r: 87.85039,
        fill: "#3182CE",
      }),
      g.exports.createElement("path", {
        d: "M945.18722,701.63087H914.63056V671.07421a11.45875,11.45875,0,0,0-22.9175,0v30.55666H861.1564a11.45875,11.45875,0,0,0,0,22.9175h30.55666V755.105a11.45875,11.45875,0,1,0,22.9175,0V724.54837h30.55666a11.45875,11.45875,0,0,0,0-22.9175Z",
        transform: "translate(-208.9778 -99.05999)",
        fill: "#fff",
      }),
      g.exports.createElement("path", {
        d: "M807.00068,465.71551H616.699a8.01412,8.01412,0,1,1,0-16.02823H807.00068a8.01412,8.01412,0,0,1,0,16.02823Z",
        transform: "translate(-208.9778 -99.05999)",
        fill: "#e6e6e6",
      }),
      g.exports.createElement("path", {
        d: "M840.05889,492.76314H616.699a8.01412,8.01412,0,1,1,0-16.02823H840.05889a8.01411,8.01411,0,1,1,0,16.02823Z",
        transform: "translate(-208.9778 -99.05999)",
        fill: "#e6e6e6",
      }),
      g.exports.createElement("path", {
        d: "M807.00068,586.929H616.699a8.01412,8.01412,0,1,1,0-16.02823H807.00068a8.01411,8.01411,0,0,1,0,16.02823Z",
        transform: "translate(-208.9778 -99.05999)",
        fill: "#e6e6e6",
      }),
      g.exports.createElement("path", {
        d: "M840.05889,613.97661H616.699a8.01412,8.01412,0,1,1,0-16.02823H840.05889a8.01412,8.01412,0,1,1,0,16.02823Z",
        transform: "translate(-208.9778 -99.05999)",
        fill: "#e6e6e6",
      }),
      g.exports.createElement("path", {
        d: "M574.07028,505.04162H506.72434a3.847,3.847,0,0,1-3.84278-3.84278V441.25158a3.847,3.847,0,0,1,3.84278-3.84278h67.34594a3.847,3.847,0,0,1,3.84278,3.84278v59.94726A3.847,3.847,0,0,1,574.07028,505.04162Z",
        transform: "translate(-208.9778 -99.05999)",
        fill: "#e6e6e6",
      }),
      g.exports.createElement("path", {
        d: "M574.07028,626.25509H506.72434a3.847,3.847,0,0,1-3.84278-3.84278V562.46505a3.847,3.847,0,0,1,3.84278-3.84278h67.34594a3.847,3.847,0,0,1,3.84278,3.84278v59.94726A3.847,3.847,0,0,1,574.07028,626.25509Z",
        transform: "translate(-208.9778 -99.05999)",
        fill: "#e6e6e6",
      }),
      g.exports.createElement("path", {
        d: "M807.21185,330.781H666.91017a8.01411,8.01411,0,0,1,0-16.02823H807.21185a8.01411,8.01411,0,0,1,0,16.02823Z",
        transform: "translate(-208.9778 -99.05999)",
        fill: "#ccc",
      }),
      g.exports.createElement("path", {
        d: "M840.27007,357.82862H666.91017a8.01411,8.01411,0,1,1,0-16.02822h173.3599a8.01411,8.01411,0,0,1,0,16.02822Z",
        transform: "translate(-208.9778 -99.05999)",
        fill: "#ccc",
      }),
      g.exports.createElement("path", {
        d: "M635.85911,390.6071H506.51316a3.847,3.847,0,0,1-3.84277-3.84277V285.81706a3.847,3.847,0,0,1,3.84277-3.84277H635.85911a3.847,3.847,0,0,1,3.84277,3.84277V386.76433A3.847,3.847,0,0,1,635.85911,390.6071Z",
        transform: "translate(-208.9778 -99.05999)",
        fill: "#ccc",
      })
    ),
  pa = (t) => {
    if (!t) return null;
    const n = new Date(t + "Z");
    return Math.floor(n.getTime() / 1e3);
  },
  mr = ({ lastOnline: t }) => {
    const n = Math.floor(Date.now() / 1e3),
      o = pa(t);
    if (typeof t > "u" || t === null)
      return e("div", { className: "circle pulse orange" });
    const s = o ? n - o : 1 / 0;
    return s > 0 && s <= 60
      ? e("div", { className: "circle pulse green" })
      : e("div", { className: "circle pulse red" });
  },
  ma = (t) => {
    if (!t) return null;
    const n = new Date(t + "Z");
    return Math.floor(n.getTime() / 1e3);
  },
  gr = ({ lastOnline: t }) => {
    const n = Math.floor(Date.now() / 1e3),
      o = ma(t),
      s = o ? n - o : null,
      a = o ? Yt(o) : { status: "", time: "Not Connected Yet" };
    return e(h, {
      display: "inline-block",
      fontSize: "xs",
      fontWeight: "medium",
      ml: "2",
      color: "gray.600",
      _dark: { color: "gray.400" },
      children: s && s <= 60 ? "Online" : s ? `${a.time} ago` : a.time,
    });
  },
  ga = x(lo, { baseStyle: { w: 4, h: 4 } }),
  fa = x(co, { baseStyle: { w: 4, h: 4 } }),
  fr = 5;
function ba(t, n, o) {
  if (o < fr) throw new Error(`Must allow at least ${fr} page items`);
  if (o % 2 === 0) throw new Error("Must allow odd number of page items");
  if (t < o) return [...new Array(t).keys()];
  const s = Math.max(0, Math.min(t - o, n - Math.floor(o / 2))),
    a = new Array(o);
  for (let i = 0; i < o; i += 1) a[i] = i + s;
  return (
    a[0] > 0 && ((a[0] = 0), (a[1] = "prev-more")),
    a[a.length - 1] < t - 1 &&
      ((a[a.length - 1] = t - 1), (a[a.length - 2] = "next-more")),
    a
  );
}
const xa = () => {
    const {
        filters: t,
        onFilterChange: n,
        users: { total: o },
      } = I(),
      { limit: s, offset: a } = t,
      i = (a || 0) / (s || 1),
      l = Math.ceil(o / (s || 1)),
      u = ba(l, i, 7),
      p = (c) => {
        n({ ...t, offset: c * s });
      },
      y = (c) => {
        n({ ...t, limit: parseInt(c.target.value) }), Ho(c.target.value);
      },
      { t: d } = O();
    return r(k, {
      justifyContent: "space-between",
      mt: 4,
      w: "full",
      display: "flex",
      columnGap: { lg: 4, md: 0 },
      rowGap: { md: 0, base: 4 },
      flexDirection: { md: "row", base: "column" },
      children: [
        e(z, {
          order: { base: 2, md: 1 },
          children: r(k, {
            children: [
              r(Me, {
                minW: "60px",
                value: s,
                onChange: y,
                size: "sm",
                rounded: "md",
                children: [
                  e("option", { children: "10" }),
                  e("option", { children: "20" }),
                  e("option", { children: "30" }),
                ],
              }),
              e(h, {
                whiteSpace: "nowrap",
                fontSize: "sm",
                children: d("itemsPerPage"),
              }),
            ],
          }),
        }),
        r(ho, {
          size: "sm",
          isAttached: !0,
          variant: "outline",
          order: { base: 1, md: 2 },
          children: [
            e(N, {
              leftIcon: e(ga, {}),
              onClick: p.bind(null, i - 1),
              isDisabled: i === 0 || l === 0,
              children: d("previous"),
            }),
            u.map((c) =>
              typeof c == "string"
                ? e(N, { children: "..." }, c)
                : e(
                    N,
                    {
                      variant: c === i ? "solid" : "outline",
                      onClick: p.bind(null, c),
                      children: c + 1,
                    },
                    c
                  )
            ),
            e(N, {
              rightIcon: e(fa, {}),
              onClick: p.bind(null, i + 1),
              isDisabled: i + 1 === l || l === 0,
              children: d("next"),
            }),
          ],
        }),
      ],
    });
  },
  ya = x(ua),
  Be = { baseStyle: { w: { base: 4, md: 5 }, h: { base: 4, md: 5 } } },
  Sa = x(uo, Be),
  Ca = x($r, Be),
  br = x(po, Be),
  wa = x(Pt, Be),
  ka = x(Pr, Be),
  _a = x(Br, Be),
  va = x($r, { baseStyle: { width: "15px", height: "15px" } }),
  Ia = (t) => {
    for (var n = 0; n < Nt.length; n++) {
      const o = Nt[n];
      if (o.value == t) return o.title;
    }
    return "No";
  },
  za = (t) => {
    const {
        used: n,
        total: o,
        dataLimitResetStrategy: s,
        totalUsedTraffic: a,
      } = t,
      i = o === 0 || o === null;
    return e(k, {
      justifyContent: "space-between",
      fontSize: "xs",
      fontWeight: "medium",
      color: "gray.600",
      _dark: { color: "gray.400" },
      children: r(h, {
        children: [
          ee(n),
          " /",
          " ",
          i
            ? e(h, { as: "span", fontFamily: "system-ui", children: "\u221E" })
            : ee(o),
        ],
      }),
    });
  },
  xr = (t) => {
    const {
        used: n,
        total: o,
        dataLimitResetStrategy: s,
        totalUsedTraffic: a,
        ...i
      } = t,
      l = o === 0 || o === null,
      u = !l && (n / o) * 100 >= 100;
    return r(xe, {
      children: [
        e(mo, {
          orientation: "horizontal",
          value: l ? 100 : Math.min((n / o) * 100, 100),
          colorScheme: u ? "red" : "primary",
          ...i,
          children: e(go, {
            h: "6px",
            borderRadius: "full",
            children: e(fo, { borderRadius: "full" }),
          }),
        }),
        r(k, {
          justifyContent: "space-between",
          fontSize: "xs",
          fontWeight: "medium",
          color: "gray.600",
          _dark: { color: "gray.400" },
          children: [
            r(h, {
              children: [
                ee(n),
                " /",
                " ",
                l
                  ? e(h, {
                      as: "span",
                      fontFamily: "system-ui",
                      children: "\u221E",
                    })
                  : ee(o) +
                    (s && s !== "no_reset"
                      ? " " + J("userDialog.resetStrategy" + Ia(s))
                      : ""),
              ],
            }),
            r(h, { children: [J("usersTable.total"), ": ", ee(a)] }),
          ],
        }),
      ],
    });
  },
  pt = ({ sort: t, column: n }) =>
    t.includes(n)
      ? e(va, { transform: t.startsWith("-") ? void 0 : "rotate(180deg)" })
      : null,
  Da = (t) => {
    const {
        filters: n,
        users: { users: o },
        users: s,
        onEditingUser: a,
        onFilterChange: i,
      } = I(),
      { t: l } = O(),
      [u, p] = g.exports.useState(void 0),
      y = Te({ base: 120, lg: 72 }) || 72,
      [d, c] = g.exports.useState(`${y}px`),
      C = Te({ base: !1, md: !0 });
    g.exports.useEffect(() => {
      const m = () => {
        const b = document.querySelectorAll("#filters")[0];
        c(`${b.offsetHeight}px`);
      };
      window.addEventListener("scroll", m);
    }, []);
    const _ = o.length !== s.total,
      f = (m) => {
        let b = n.sort;
        b.includes(m)
          ? b.startsWith("-")
            ? (b = "-created_at")
            : (b = "-" + m)
          : (b = m),
          i({ sort: b });
      },
      S = (m) => {
        i({ status: m.target.value.length > 0 ? m.target.value : void 0 });
      },
      T = (m) => {
        p(m === u ? void 0 : m);
      };
    return r(z, {
      id: "users-table",
      overflowX: { base: "unset", md: "unset" },
      children: [
        e(at, {
          allowMultiple: !0,
          display: { base: "block", md: "none" },
          index: u,
          children: r(tr, {
            orientation: "vertical",
            zIndex: "docked",
            ...t,
            children: [
              e(rr, {
                zIndex: "docked",
                position: "relative",
                children: r(Fe, {
                  children: [
                    e(ve, {
                      position: "sticky",
                      top: d,
                      minW: "120px",
                      pl: 4,
                      pr: 4,
                      cursor: "pointer",
                      onClick: f.bind(null, "username"),
                      children: r(k, {
                        children: [
                          e("span", { children: l("users") }),
                          e(pt, { sort: n.sort, column: "username" }),
                        ],
                      }),
                    }),
                    e(ve, {
                      position: "sticky",
                      top: d,
                      minW: "50px",
                      pl: 0,
                      pr: 0,
                      w: "140px",
                      cursor: "pointer",
                      children: r(k, {
                        spacing: 0,
                        position: "relative",
                        children: [
                          r(h, {
                            position: "absolute",
                            _dark: { bg: "gray.750" },
                            _light: { bg: "#F9FAFB" },
                            userSelect: "none",
                            pointerEvents: "none",
                            zIndex: 1,
                            w: "100%",
                            children: [
                              l("usersTable.status"),
                              n.status ? ": " + n.status : "",
                            ],
                          }),
                          r(Me, {
                            value: n.sort,
                            fontSize: "xs",
                            fontWeight: "extrabold",
                            textTransform: "uppercase",
                            cursor: "pointer",
                            p: 0,
                            border: 0,
                            h: "auto",
                            w: "auto",
                            icon: e(xe, {}),
                            _focusVisible: { border: "0 !important" },
                            onChange: S,
                            children: [
                              e("option", {}),
                              e("option", { children: "active" }),
                              e("option", { children: "disabled" }),
                              e("option", { children: "limited" }),
                              e("option", { children: "expired" }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    e(ve, {
                      position: "sticky",
                      top: d,
                      minW: "100px",
                      cursor: "pointer",
                      pr: 0,
                      onClick: f.bind(null, "used_traffic"),
                      children: r(k, {
                        children: [
                          e("span", { children: l("usersTable.dataUsage") }),
                          e(pt, { sort: n.sort, column: "used_traffic" }),
                        ],
                      }),
                    }),
                    e(ve, {
                      position: "sticky",
                      top: d,
                      minW: "32px",
                      w: "32px",
                      p: 0,
                      cursor: "pointer",
                    }),
                  ],
                }),
              }),
              e(nr, {
                children:
                  !C &&
                  (o == null
                    ? void 0
                    : o.map((m, b) =>
                        r(
                          g.exports.Fragment,
                          {
                            children: [
                              r(Fe, {
                                onClick: T.bind(null, b),
                                cursor: "pointer",
                                children: [
                                  e(de, {
                                    borderBottom: 0,
                                    minW: "100px",
                                    pl: 4,
                                    pr: 4,
                                    maxW: "calc(100vw - 50px - 32px - 100px - 48px)",
                                    children: r("div", {
                                      className: "flex-status",
                                      children: [
                                        e(mr, { lastOnline: m.online_at }),
                                        e(h, {
                                          isTruncated: !0,
                                          children: m.username,
                                        }),
                                      ],
                                    }),
                                  }),
                                  e(de, {
                                    borderBottom: 0,
                                    minW: "50px",
                                    pl: 0,
                                    pr: 0,
                                    children: e(mt, {
                                      compact: !0,
                                      showDetail: !1,
                                      expiryDate: m.expire,
                                      status: m.status,
                                    }),
                                  }),
                                  e(de, {
                                    borderBottom: 0,
                                    minW: "100px",
                                    pr: 0,
                                    children: e(za, {
                                      totalUsedTraffic: m.lifetime_used_traffic,
                                      dataLimitResetStrategy:
                                        m.data_limit_reset_strategy,
                                      used: m.used_traffic,
                                      total: m.data_limit,
                                      colorScheme: et[m.status].bandWidthColor,
                                    }),
                                  }),
                                  e(de, {
                                    p: 0,
                                    borderBottom: 0,
                                    w: "32px",
                                    minW: "32px",
                                    children: e(Ca, {
                                      color: "gray.600",
                                      _dark: { color: "gray.400" },
                                      transition: "transform .2s ease-out",
                                      transform:
                                        u === b ? "rotate(180deg)" : "0deg",
                                    }),
                                  }),
                                ],
                              }),
                              e(Fe, {
                                className: "collapsible",
                                onClick: T.bind(null, b),
                                children: e(de, {
                                  p: 0,
                                  colSpan: 4,
                                  children: r(Pe, {
                                    border: 0,
                                    children: [
                                      e(Oe, { display: "none" }),
                                      e(je, {
                                        border: 0,
                                        cursor: "pointer",
                                        px: 6,
                                        py: 3,
                                        children: r(M, {
                                          justifyContent: "space-between",
                                          spacing: "4",
                                          children: [
                                            r(M, {
                                              alignItems: "flex-start",
                                              w: "full",
                                              spacing: -1,
                                              children: [
                                                e(h, {
                                                  textTransform: "capitalize",
                                                  fontSize: "xs",
                                                  fontWeight: "bold",
                                                  color: "gray.600",
                                                  _dark: { color: "gray.400" },
                                                  children: l(
                                                    "usersTable.dataUsage"
                                                  ),
                                                }),
                                                e(z, {
                                                  width: "full",
                                                  minW: "230px",
                                                  children: e(xr, {
                                                    totalUsedTraffic:
                                                      m.lifetime_used_traffic,
                                                    dataLimitResetStrategy:
                                                      m.data_limit_reset_strategy,
                                                    used: m.used_traffic,
                                                    total: m.data_limit,
                                                    colorScheme:
                                                      et[m.status]
                                                        .bandWidthColor,
                                                  }),
                                                }),
                                              ],
                                            }),
                                            r(k, {
                                              w: "full",
                                              justifyContent: "space-between",
                                              children: [
                                                r(z, {
                                                  width: "full",
                                                  children: [
                                                    e(mt, {
                                                      compact: !0,
                                                      expiryDate: m.expire,
                                                      status: m.status,
                                                    }),
                                                    e(gr, {
                                                      lastOnline: m.online_at,
                                                    }),
                                                  ],
                                                }),
                                                r(k, {
                                                  children: [
                                                    e(yr, { user: m }),
                                                    e(te, {
                                                      label: l(
                                                        "userDialog.editUser"
                                                      ),
                                                      placement: "top",
                                                      children: e(Y, {
                                                        p: "0 !important",
                                                        "aria-label":
                                                          "Edit user",
                                                        bg: "transparent",
                                                        _dark: {
                                                          _hover: {
                                                            bg: "gray.700",
                                                          },
                                                        },
                                                        size: {
                                                          base: "sm",
                                                          md: "md",
                                                        },
                                                        onClick: (W) => {
                                                          W.stopPropagation(),
                                                            a(m);
                                                        },
                                                        children: e(_a, {}),
                                                      }),
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                            ],
                          },
                          m.username
                        )
                      )),
              }),
            ],
          }),
        }),
        r(tr, {
          orientation: "vertical",
          display: { base: "none", md: "table" },
          ...t,
          children: [
            e(rr, {
              zIndex: "docked",
              position: "relative",
              children: r(Fe, {
                children: [
                  e(ve, {
                    position: "sticky",
                    top: { base: "unset", md: d },
                    minW: "140px",
                    cursor: "pointer",
                    onClick: f.bind(null, "username"),
                    children: r(k, {
                      children: [
                        e("span", { children: l("username") }),
                        e(pt, { sort: n.sort, column: "username" }),
                      ],
                    }),
                  }),
                  e(ve, {
                    position: "sticky",
                    top: { base: "unset", md: d },
                    width: "400px",
                    minW: "150px",
                    cursor: "pointer",
                    children: r(k, {
                      spacing: 0,
                      position: "relative",
                      children: [
                        r(h, {
                          position: "absolute",
                          _dark: { bg: "gray.750" },
                          _light: { bg: "#F9FAFB" },
                          userSelect: "none",
                          pointerEvents: "none",
                          zIndex: 1,
                          w: "100%",
                          children: [
                            l("usersTable.status"),
                            n.status ? ": " + n.status : "",
                          ],
                        }),
                        r(Me, {
                          fontSize: "xs",
                          fontWeight: "extrabold",
                          textTransform: "uppercase",
                          cursor: "pointer",
                          p: 0,
                          border: 0,
                          h: "auto",
                          w: "auto",
                          icon: e(xe, {}),
                          _focusVisible: { border: "0 !important" },
                          value: n.sort,
                          onChange: S,
                          children: [
                            e("option", {}),
                            e("option", { children: "active" }),
                            e("option", { children: "disabled" }),
                            e("option", { children: "limited" }),
                            e("option", { children: "expired" }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  e(ve, {
                    position: "sticky",
                    top: { base: "unset", md: d },
                    width: "350px",
                    minW: "230px",
                    cursor: "pointer",
                    onClick: f.bind(null, "used_traffic"),
                    children: r(k, {
                      children: [
                        e("span", { children: l("usersTable.dataUsage") }),
                        e(pt, { sort: n.sort, column: "used_traffic" }),
                      ],
                    }),
                  }),
                  e(ve, {
                    position: "sticky",
                    top: { base: "unset", md: d },
                    width: "200px",
                    minW: "180px",
                  }),
                ],
              }),
            }),
            r(nr, {
              children: [
                C &&
                  (o == null
                    ? void 0
                    : o.map((m, b) =>
                        r(
                          Fe,
                          {
                            className: vt("interactive", {
                              "last-row": b === o.length - 1,
                            }),
                            onClick: () => a(m),
                            children: [
                              e(de, {
                                minW: "140px",
                                children: r("div", {
                                  className: "flex-status",
                                  children: [
                                    e(mr, { lastOnline: m.online_at }),
                                    m.username,
                                    e(gr, { lastOnline: m.online_at }),
                                  ],
                                }),
                              }),
                              e(de, {
                                width: "400px",
                                minW: "150px",
                                children: e(mt, {
                                  expiryDate: m.expire,
                                  status: m.status,
                                }),
                              }),
                              e(de, {
                                width: "350px",
                                minW: "230px",
                                children: e(xr, {
                                  totalUsedTraffic: m.lifetime_used_traffic,
                                  dataLimitResetStrategy:
                                    m.data_limit_reset_strategy,
                                  used: m.used_traffic,
                                  total: m.data_limit,
                                  colorScheme: et[m.status].bandWidthColor,
                                }),
                              }),
                              e(de, {
                                width: "200px",
                                minW: "180px",
                                children: e(yr, { user: m }),
                              }),
                            ],
                          },
                          m.username
                        )
                      )),
                o.length == 0 &&
                  e(Fe, {
                    children: e(de, {
                      colSpan: 4,
                      children: e(Ea, { isFiltered: _ }),
                    }),
                  }),
              ],
            }),
          ],
        }),
        e(xa, {}),
      ],
    });
  },
  yr = ({ user: t }) => {
    const { setQRCode: n, setSubLink: o } = I(),
      s = t.links.join(`\r
`),
      [a, i] = g.exports.useState([-1, !1]);
    return (
      g.exports.useEffect(() => {
        a[1] &&
          setTimeout(() => {
            i([-1, !1]);
          }, 1e3);
      }, [a]),
      r(k, {
        justifyContent: "flex-end",
        onClick: (l) => {
          l.preventDefault(), l.stopPropagation();
        },
        children: [
          e(or, {
            text: t.subscription_url.startsWith("/")
              ? window.location.origin + t.subscription_url
              : t.subscription_url,
            onCopy: () => {
              i([0, !0]);
            },
            children: e("div", {
              children: e(te, {
                label:
                  a[0] == 0 && a[1]
                    ? J("usersTable.copied")
                    : J("usersTable.copyLink"),
                placement: "top",
                children: e(Y, {
                  p: "0 !important",
                  "aria-label": "copy subscription link",
                  bg: "transparent",
                  _dark: { _hover: { bg: "gray.700" } },
                  size: { base: "sm", md: "md" },
                  children: a[0] == 0 && a[1] ? e(br, {}) : e(wa, {}),
                }),
              }),
            }),
          }),
          e(or, {
            text: s,
            onCopy: () => {
              i([1, !0]);
            },
            children: e("div", {
              children: e(te, {
                label:
                  a[0] == 1 && a[1]
                    ? J("usersTable.copied")
                    : J("usersTable.copyConfigs"),
                placement: "top",
                children: e(Y, {
                  p: "0 !important",
                  "aria-label": "copy configs",
                  bg: "transparent",
                  _dark: { _hover: { bg: "gray.700" } },
                  size: { base: "sm", md: "md" },
                  children: a[0] == 1 && a[1] ? e(br, {}) : e(Sa, {}),
                }),
              }),
            }),
          }),
          e(te, {
            label: "QR Code",
            placement: "top",
            children: e(Y, {
              p: "0 !important",
              "aria-label": "qr code",
              bg: "transparent",
              _dark: { _hover: { bg: "gray.700" } },
              size: { base: "sm", md: "md" },
              onClick: () => {
                n(t.links), o(t.subscription_url);
              },
              children: e(ka, {}),
            }),
          }),
        ],
      })
    );
  },
  Ea = ({ isFiltered: t }) => {
    const { onCreateUser: n } = I();
    return r(z, {
      padding: "5",
      py: "8",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      gap: 4,
      w: "full",
      children: [
        e(ya, {
          maxHeight: "200px",
          maxWidth: "200px",
          _dark: {
            'path[fill="#fff"]': { fill: "gray.800" },
            'path[fill="#f2f2f2"], path[fill="#e6e6e6"], path[fill="#ccc"]': {
              fill: "gray.700",
            },
            'circle[fill="#3182CE"]': { fill: "primary.300" },
          },
          _light: {
            'path[fill="#f2f2f2"], path[fill="#e6e6e6"], path[fill="#ccc"]': {
              fill: "gray.300",
            },
            'circle[fill="#3182CE"]': { fill: "primary.500" },
          },
        }),
        e(h, {
          fontWeight: "medium",
          color: "gray.600",
          _dark: { color: "gray.400" },
          children: t ? J("usersTable.noUserMatched") : J("usersTable.noUser"),
        }),
        !t &&
          e(N, {
            size: "sm",
            colorScheme: "primary",
            onClick: () => n(!0),
            children: J("createUser"),
          }),
      ],
    });
  },
  Ua = () => (
    g.exports.useEffect(() => {
      I.getState().refetchUsers(), $o();
    }, []),
    r(M, {
      justifyContent: "space-between",
      minH: "100vh",
      p: "6",
      rowGap: 4,
      children: [
        r(z, {
          w: "full",
          children: [
            e(ys, {}),
            e(Oo, { mt: "4" }),
            e(os, {}),
            e(Da, {}),
            e(ha, {}),
            e(es, {}),
            e(Zs, {}),
            e(Us, {}),
            e(Js, {}),
            e(ea, {}),
            e(Os, {}),
            e($s, {}),
            e(qs, {}),
            e(Ko, {}),
          ],
        }),
        e(Qr, {}),
      ],
    })
  ),
  Ra = (t) =>
    g.exports.createElement(
      "svg",
      {
        viewBox: "0 0 747 747",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...t,
      },
      g.exports.createElement("path", {
        d: "M746.671 209.652V77.6572C746.671 72.9384 743.827 68.6832 739.468 66.8811C735.108 65.0738 730.093 66.0739 726.754 69.4072L579.354 216.807C577.453 202.386 570.203 189.203 559.037 179.87C547.875 170.542 533.615 165.744 519.083 166.432C504.551 167.12 490.807 173.24 480.573 183.583L414.375 249.776C412.417 235.391 405.141 222.25 393.985 212.959C382.823 203.662 368.594 198.88 354.083 199.552C339.578 200.224 325.849 206.302 315.594 216.588L274.343 257.828L19.9167 3.41515C16.5781 0.0818157 11.5625 -0.918184 7.20306 0.889149C2.84373 2.69648 0 6.94648 0 11.6651V143.649C0 146.743 1.22917 149.712 3.41667 151.899L191.843 340.339L3.41667 528.753C1.2292 530.94 0 533.909 0 537.003V668.997C0 673.716 2.84373 677.971 7.20306 679.773C11.5624 681.581 16.578 680.58 19.9167 677.247L167.317 529.847C169.285 544.233 176.561 557.358 187.718 566.65C198.869 575.947 213.098 580.728 227.603 580.066C242.103 579.404 255.838 573.342 266.098 563.071L332.295 496.874V496.879C334.259 511.264 341.535 524.395 352.691 533.686C363.853 542.977 378.082 547.759 392.587 547.092C407.093 546.421 420.822 540.348 431.077 530.066L472.327 488.826L726.754 743.239C728.941 745.427 731.91 746.656 735.004 746.656C736.535 746.661 738.056 746.359 739.473 745.77C743.832 743.963 746.671 739.708 746.671 734.989V602.994C746.671 599.901 745.442 596.932 743.254 594.744L554.827 406.318L743.254 217.904H743.259C745.447 215.717 746.676 212.748 746.676 209.654L746.671 209.652ZM23.3373 39.8118L257.844 274.318L208.328 323.818L23.3413 138.818L23.3373 39.8118ZM723.337 706.825L488.831 472.318L538.347 422.818L723.333 607.818L723.337 706.825ZM23.3373 541.825L332.097 233.078C338.764 226.719 347.624 223.172 356.843 223.172C366.056 223.172 374.916 226.719 381.588 233.078C388.151 239.641 391.838 248.548 391.838 257.828C391.838 267.114 388.151 276.016 381.588 282.577L23.3347 640.831L23.3373 541.825ZM249.604 546.575C240.755 555.419 227.864 558.872 215.781 555.638C203.703 552.398 194.265 542.961 191.027 530.883C187.792 518.8 191.245 505.91 200.089 497.06L497.076 200.074C505.92 191.23 518.811 187.772 530.893 191.011C542.971 194.246 552.409 203.678 555.648 215.76C558.888 227.839 555.434 240.73 546.591 249.572L249.604 546.575ZM723.337 204.815L414.577 513.562C407.911 519.926 399.051 523.473 389.832 523.473C380.618 523.473 371.753 519.926 365.087 513.562C358.529 506.999 354.842 498.098 354.842 488.816C354.842 479.535 358.529 470.634 365.087 464.071L723.34 105.818L723.337 204.815Z",
        fill: "currentColor",
      })
    ),
  La = w.object({
    username: w.string().min(1, "login.fieldRequired"),
    password: w.string().min(1, "login.fieldRequired"),
  }),
  Ta = x(Ra, { baseStyle: { strokeWidth: "10px", w: 12, h: 12 } }),
  Aa = x(bo, { baseStyle: { w: 5, h: 5, strokeWidth: "2px" } }),
  Sr = () => {
    var c, C;
    const [t, n] = g.exports.useState(""),
      [o, s] = g.exports.useState(!1),
      a = xo(),
      { t: i } = O();
    let l = yo();
    const {
      register: u,
      formState: { errors: p },
      handleSubmit: y,
    } = He({ resolver: st(La) });
    g.exports.useEffect(() => {
      To(), l.pathname !== "/login" && a("/login", { replace: !0 });
    }, []);
    const d = (_) => {
      n("");
      const f = new FormData();
      f.append("username", _.username),
        f.append("password", _.password),
        f.append("grant_type", "password"),
        s(!0),
        P("/admin/token", { method: "post", body: f })
          .then(({ access_token: S }) => {
            Lo(S), a("/");
          })
          .catch((S) => {
            n(S.response._data.detail);
          })
          .finally(s.bind(null, !1));
    };
    return r(M, {
      justifyContent: "space-between",
      minH: "100vh",
      p: "6",
      w: "full",
      children: [
        r(z, {
          w: "full",
          children: [
            e(k, { justifyContent: "end", w: "full", children: e(qr, {}) }),
            e(k, {
              w: "full",
              justifyContent: "center",
              alignItems: "center",
              children: r(z, {
                w: "full",
                maxW: "340px",
                mt: "6",
                children: [
                  r(M, {
                    alignItems: "center",
                    w: "full",
                    children: [
                      e(Ta, {}),
                      e(h, {
                        fontSize: "2xl",
                        fontWeight: "semibold",
                        children: i("login.loginYourAccount"),
                      }),
                      e(h, {
                        color: "gray.600",
                        _dark: { color: "gray.400" },
                        children: i("login.welcomeBack"),
                      }),
                    ],
                  }),
                  e(z, {
                    w: "full",
                    maxW: "300px",
                    m: "auto",
                    pt: "4",
                    children: e("form", {
                      onSubmit: y(d),
                      children: r(M, {
                        mt: 4,
                        rowGap: 2,
                        children: [
                          e(R, {
                            children: e(Ae, {
                              w: "full",
                              placeholder: i("username"),
                              ...u("username"),
                              error: i(
                                (c = p == null ? void 0 : p.username) == null
                                  ? void 0
                                  : c.message
                              ),
                            }),
                          }),
                          e(R, {
                            children: e(Ae, {
                              w: "full",
                              type: "password",
                              placeholder: i("password"),
                              ...u("password"),
                              error: i(
                                (C = p == null ? void 0 : p.password) == null
                                  ? void 0
                                  : C.message
                              ),
                            }),
                          }),
                          t &&
                            r(rt, {
                              status: "error",
                              rounded: "md",
                              children: [e(yt, {}), e(Ar, { children: t })],
                            }),
                          r(N, {
                            isLoading: o,
                            type: "submit",
                            w: "full",
                            colorScheme: "primary",
                            children: [e(Aa, { marginRight: 1 }), i("login")],
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
            }),
          ],
        }),
        e(Qr, {}),
      ],
    });
  },
  Ma = () => P("/admin", { headers: { Authorization: `Bearer ${St()}` } }),
  Na = So(
    [
      { path: "/", element: e(Ua, {}), errorElement: e(Sr, {}), loader: Ma },
      { path: "/login/", element: e(Sr, {}) },
    ],
    { basename: "/dashboard/" }
  );
function Fa() {
  return e("main", { className: "p-8", children: e(Co, { router: Na }) });
}
j.extend(wo);
j.extend(ko);
j.extend(_o);
j.extend(vo);
j.extend(Io);
Vr(zo.get() || "light");
Do.createRoot(document.getElementById("root")).render(
  e(Lt.StrictMode, {
    children: e(Eo, {
      theme: Ro,
      children: e(Uo, { client: At, children: e(Fa, {}) }),
    }),
  })
);
