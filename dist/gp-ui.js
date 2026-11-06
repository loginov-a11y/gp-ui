import { defineComponent as h, computed as C, openBlock as a, createElementBlock as l, Fragment as U, renderList as G, useSlots as z1, normalizeStyle as L, normalizeClass as $, renderSlot as S, createBlock as H, createCommentVNode as b, createVNode as V, createElementVNode as i, reactive as k3, unref as f, Teleport as I1, withModifiers as o1, withCtx as I, createTextVNode as N, toDisplayString as x, ref as E, resolveComponent as N1, createSlots as d1, withDirectives as $3, vShow as x3, withKeys as ee, onUnmounted as f1, nextTick as g1, onMounted as u1, resolveDynamicComponent as K, watch as e1, mergeProps as M3, createStaticVNode as v1, Transition as te, inject as z3, getCurrentInstance as I3, readonly as T1, TransitionGroup as V3, useModel as ne, mergeModels as se, onBeforeUnmount as H3, onScopeDispose as Z3 } from "vue";
import { useI18n as j } from "vue-i18n";
import qe from "@vuepic/vue-datepicker";
import { ExternalLink as Ge, Copy as je, ChevronDown as B3, MoreHorizontal as S3, CheckCircle as R3, XCircle as T3, Loader2 as E3, QrCode as xe } from "lucide-vue-next";
import { RouterLink as U1, useRoute as q1, useRouter as We } from "vue-router";
import Me from "qrcode";
function l1(e) {
  return e ? typeof e == "string" ? e.split(" ").filter(Boolean) : Array.isArray(e) ? e.flatMap(l1) : typeof e == "object" ? Object.entries(e).filter(([, n]) => !!n).map(([n]) => n) : [] : [];
}
const D3 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "1.5",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true"
}, A3 = ["d"], F3 = /* @__PURE__ */ h({
  __name: "GIcon",
  props: {
    name: {}
  },
  setup(e) {
    const n = {
      "i-heroicons-arrow-path": [
        "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
      ],
      "i-heroicons-check-circle": [
        "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      ],
      "i-heroicons-x-circle": [
        "M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      ],
      "i-heroicons-arrow-left": ["M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"],
      "i-heroicons-check": ["M4.5 12.75l6 6 9-13.5"],
      "i-heroicons-exclamation-triangle": [
        "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
      ],
      "i-heroicons-banknotes": [
        "M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
      ],
      "i-heroicons-bolt": [
        "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
      ]
    }, t = e, s = C(() => n[t.name] ?? []);
    return (o, c) => (a(), l("svg", D3, [
      (a(!0), l(U, null, G(s.value, (u, d) => (a(), l("path", {
        key: d,
        d: u
      }, null, 8, A3))), 128))
    ]));
  }
}), g = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [s, o] of n)
    t[s] = o;
  return t;
}, Y = /* @__PURE__ */ g(F3, [["__scopeId", "data-v-c94b7720"]]), P3 = {
  dark: "primary",
  gray: "secondary",
  white: "ghost"
}, Qe = (e) => P3[e] ?? e, O3 = ["type", "disabled", "aria-busy"], U3 = {
  key: 0,
  class: "g-button__leading"
}, N3 = {
  key: 1,
  class: "g-button__content"
}, q3 = {
  key: 2,
  class: "g-button__trailing"
}, G3 = {
  key: 3,
  class: "g-button__status",
  "aria-hidden": "true"
}, j3 = {
  key: 4,
  class: "g-button__status",
  "aria-hidden": "true"
}, W3 = /* @__PURE__ */ h({
  __name: "GButton",
  props: {
    type: { default: "button" },
    disabled: { type: Boolean, default: !1 },
    loading: { type: Boolean, default: !1 },
    success: { type: Boolean, default: !1 },
    size: { default: "md" },
    variant: { default: "primary" },
    shape: { default: "pill" },
    leadingIcon: {},
    trailingIcon: {},
    class: { default: "" },
    block: { type: Boolean, default: !1 },
    animated: { type: Boolean, default: !0 },
    hoverable: { type: Boolean, default: !0 },
    fontSize: {}
  },
  emits: ["click"],
  setup(e, { emit: n }) {
    const t = e, s = n, o = z1(), c = C(() => Qe(t.variant)), u = C(() => t.disabled || t.loading), d = C(
      () => !!(o.leading || o.left || t.leadingIcon)
    ), r = C(
      () => !!(o.trailing || o.right || t.trailingIcon)
    ), w = C(() => {
      const y = [
        "g-button",
        `g-button--${t.size}`,
        `g-button--${c.value}`,
        `g-button--${t.shape === "default" ? "pill" : t.shape}`
      ];
      return u.value && y.push("g-button--disabled"), t.loading && y.push("g-button--loading"), t.success && y.push("g-button--is-success"), t.block && y.push("g-button--block"), t.class && y.push(...l1(t.class)), y.join(" ");
    }), _ = C(() => t.fontSize === void 0 || t.fontSize === "" ? void 0 : { fontSize: typeof t.fontSize == "number" ? `${t.fontSize}px` : t.fontSize }), p = (y) => {
      u.value || s("click", y);
    };
    return (y, Z) => (a(), l("button", {
      type: e.type,
      disabled: u.value,
      "aria-busy": e.loading || void 0,
      class: $(w.value),
      style: L(_.value),
      onClick: p
    }, [
      d.value ? (a(), l("span", U3, [
        S(y.$slots, "leading", {}, () => [
          S(y.$slots, "left", {}, () => [
            e.leadingIcon ? (a(), H(Y, {
              key: 0,
              name: e.leadingIcon,
              class: "g-button__icon"
            }, null, 8, ["name"])) : b("", !0)
          ], !0)
        ], !0)
      ])) : b("", !0),
      y.$slots.default ? (a(), l("span", N3, [
        S(y.$slots, "default", {}, void 0, !0)
      ])) : b("", !0),
      r.value ? (a(), l("span", q3, [
        S(y.$slots, "trailing", {}, () => [
          S(y.$slots, "right", {}, () => [
            e.trailingIcon ? (a(), H(Y, {
              key: 0,
              name: e.trailingIcon,
              class: "g-button__icon"
            }, null, 8, ["name"])) : b("", !0)
          ], !0)
        ], !0)
      ])) : b("", !0),
      e.loading ? (a(), l("span", G3, [
        V(Y, {
          name: "i-heroicons-arrow-path",
          class: "g-button__icon animate-spin"
        })
      ])) : e.success ? (a(), l("span", j3, [
        V(Y, {
          name: "i-heroicons-check-circle",
          class: "g-button__icon"
        })
      ])) : b("", !0)
    ], 14, O3));
  }
}), m1 = /* @__PURE__ */ g(W3, [["__scopeId", "data-v-8a7e3030"]]), Q3 = ["aria-checked", "disabled"], K3 = {
  key: 0,
  class: "g-checkbox__mark",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true"
}, Y3 = /* @__PURE__ */ h({
  __name: "GCheckbox",
  props: {
    modelValue: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: n }) {
    const t = e, s = n, o = () => {
      t.disabled || s("update:modelValue", !t.modelValue);
    };
    return (c, u) => (a(), l("button", {
      type: "button",
      role: "checkbox",
      class: $(["g-checkbox", { _checked: e.modelValue, _disabled: e.disabled }]),
      "aria-checked": e.modelValue,
      disabled: e.disabled,
      onClick: o
    }, [
      e.modelValue ? (a(), l("svg", K3, [...u[0] || (u[0] = [
        i("path", {
          d: "M16.8548 7.5359C17.1111 7.2717 17.5332 7.2653 17.7975 7.5216C18.0617 7.7779 18.0681 8.2 17.8118 8.4643L10.7005 15.7976C10.5749 15.927 10.4022 16.0001 10.222 16.0001C10.0417 16.0001 9.869 15.9271 9.7434 15.7976L6.1881 12.131C5.9318 11.8667 5.9382 11.4446 6.2024 11.1883C6.4667 10.932 6.8888 10.9384 7.1451 11.2026L10.222 14.3758L16.8548 7.5359Z",
          fill: "currentColor"
        }, null, -1)
      ])])) : b("", !0)
    ], 10, Q3));
  }
}), X3 = /* @__PURE__ */ g(Y3, [["__scopeId", "data-v-9f9f4615"]]), J3 = /* @__PURE__ */ h({
  __name: "GContextMenu",
  props: {
    class: { default: "" }
  },
  setup(e) {
    const n = e;
    return (t, s) => (a(), l("div", {
      class: $(["g-context-menu", n.class]),
      role: "menu"
    }, [
      S(t.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), G1 = /* @__PURE__ */ g(J3, [["__scopeId", "data-v-fea9926c"]]), e6 = ["disabled"], t6 = {
  key: 0,
  class: "g-context-menu-item__leading"
}, n6 = { class: "g-context-menu-item__label" }, s6 = {
  key: 1,
  class: "g-context-menu-item__check",
  "aria-hidden": "true"
}, a6 = /* @__PURE__ */ h({
  __name: "GContextMenuItem",
  props: {
    selected: { type: Boolean, default: !1 },
    muted: { type: Boolean, default: !1 },
    hovered: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    class: { default: "" }
  },
  emits: ["click"],
  setup(e, { emit: n }) {
    const t = e, s = n, o = z1(), c = C(() => !!o.leading), u = C(() => {
      const r = ["g-context-menu-item"];
      return t.selected && r.push("_selected"), t.hovered && r.push("_hover"), t.muted && r.push("_muted"), t.disabled && r.push("_disabled"), t.class && r.push(...l1(t.class)), r.join(" ");
    }), d = (r) => {
      t.disabled || s("click", r);
    };
    return (r, w) => (a(), l("button", {
      type: "button",
      role: "menuitem",
      disabled: e.disabled,
      class: $(u.value),
      onClick: d
    }, [
      c.value ? (a(), l("span", t6, [
        S(r.$slots, "leading", {}, void 0, !0)
      ])) : b("", !0),
      i("span", n6, [
        S(r.$slots, "default", {}, void 0, !0)
      ]),
      e.selected ? (a(), l("span", s6, [...w[0] || (w[0] = [
        i("svg", {
          width: "16",
          height: "16",
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, [
          i("path", {
            d: "M13.355 5.036C13.611 4.772 14.033 4.765 14.297 5.021C14.562 5.278 14.568 5.7 14.312 5.964L7.2 13.298C7.075 13.427 6.902 13.5 6.722 13.5C6.542 13.5 6.369 13.427 6.243 13.298L2.688 9.631C2.432 9.367 2.438 8.945 2.702 8.688C2.967 8.432 3.389 8.438 3.645 8.702L6.722 11.876L13.355 5.036Z",
            fill: "currentColor"
          })
        ], -1)
      ])])) : b("", !0)
    ], 10, e6));
  }
}), $1 = /* @__PURE__ */ g(a6, [["__scopeId", "data-v-bc68f256"]]), ze = 4e3;
let o6 = 1;
const x1 = k3([]), ae = /* @__PURE__ */ new Map();
function i6(e) {
  const n = { id: o6++, duration: ze, ...e };
  x1.push(n);
  const t = n.duration ?? ze;
  return t > 0 && ae.set(
    n.id,
    setTimeout(() => he(n.id), t)
  ), n;
}
function he(e) {
  const n = x1.findIndex((s) => s.id === e);
  n !== -1 && x1.splice(n, 1);
  const t = ae.get(e);
  t && (clearTimeout(t), ae.delete(e));
}
function l6() {
  for (const e of [...x1]) he(e.id);
}
function fe() {
  return {
    toasts: C(() => x1),
    add: i6,
    remove: he,
    clear: l6
  };
}
function me() {
  const e = fe();
  async function n(t, s) {
    if (!t || typeof navigator > "u" || !navigator.clipboard)
      return !1;
    try {
      return await navigator.clipboard.writeText(t), s?.showToast !== !1 && s?.toastTitle && e.add({
        title: s.toastTitle,
        description: s.toastDescription,
        color: "success"
      }), !0;
    } catch (o) {
      return console.error("Clipboard error", o), !1;
    }
  }
  return { copyToClipboard: n };
}
function Ie(e) {
  if (typeof e == "number") return `${e}px`;
  const n = String(e).trim();
  return /^\d+(\.\d+)?$/.test(n) ? `${n}px` : n;
}
function z(e, n = e) {
  return {
    width: Ie(e),
    height: Ie(n)
  };
}
const r6 = ["width", "height"], c6 = /* @__PURE__ */ h({
  __name: "Copy",
  props: {
    size: { default: 16 }
  },
  setup(e) {
    return (n, t) => (a(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: e.size,
      height: e.size,
      style: L(f(z)(e.size)),
      viewBox: "0 0 16 16",
      fill: "none",
      "aria-hidden": "true",
      class: "g-icon-copy"
    }, [...t[0] || (t[0] = [
      i("path", {
        d: "M6.5 2C5.67157 2 5 2.67157 5 3.5V4H6V3.5C6 3.22386 6.22386 3 6.5 3H12.5C12.7761 3 13 3.22386 13 3.5V10.5C13 10.7761 12.7761 11 12.5 11H12V12H12.5C13.3284 12 14 11.3284 14 10.5V3.5C14 2.67157 13.3284 2 12.5 2H6.5ZM3.5 5C2.67157 5 2 5.67157 2 6.5V12.5C2 13.3284 2.67157 14 3.5 14H9.5C10.3284 14 11 13.3284 11 12.5V6.5C11 5.67157 10.3284 5 9.5 5H3.5ZM3 6.5C3 6.22386 3.22386 6 3.5 6H9.5C9.77614 6 10 6.22386 10 6.5V12.5C10 12.7761 9.77614 13 9.5 13H3.5C3.22386 13 3 12.7761 3 12.5V6.5Z",
        fill: "currentColor"
      }, null, -1)
    ])], 12, r6));
  }
}), d6 = /* @__PURE__ */ g(c6, [["__scopeId", "data-v-e809acb3"]]), u6 = ["aria-label", "disabled"], C6 = /* @__PURE__ */ h({
  __name: "GCopyButton",
  props: {
    value: {},
    ariaLabel: {},
    bare: { type: Boolean, default: !1 }
  },
  setup(e) {
    const n = e, { t } = j(), { copyToClipboard: s } = me();
    function o(c) {
      c.stopPropagation(), n.value && s(n.value, {
        showToast: !0,
        toastTitle: t("common.copied"),
        toastDescription: t("common.copiedDesc")
      });
    }
    return (c, u) => (a(), l("button", {
      type: "button",
      class: $(["g-copy-button", { "g-copy-button--bare": e.bare }]),
      "aria-label": e.ariaLabel || f(t)("common.copy"),
      disabled: !e.value,
      onClick: o
    }, [
      S(c.$slots, "default", {}, () => [
        V(d6, { size: 12 })
      ], !0)
    ], 10, u6));
  }
}), h6 = /* @__PURE__ */ g(C6, [["__scopeId", "data-v-e5bf2637"]]), f6 = ["width", "height"], m6 = /* @__PURE__ */ h({
  __name: "Calendar",
  props: {
    size: { default: 20 }
  },
  setup(e) {
    return (n, t) => (a(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: e.size,
      height: e.size,
      style: L(f(z)(e.size)),
      viewBox: "0 0 24 24",
      fill: "none",
      "aria-hidden": "true",
      class: "g-icon-calendar"
    }, [...t[0] || (t[0] = [
      i("path", {
        transform: "translate(2 1)",
        d: "M18 10H2V16.2002C2 17.0566 2.00035 17.6388 2.03711 18.0889C2.07293 18.5273 2.13809 18.7518 2.21778 18.9082C2.40951 19.2845 2.71555 19.5905 3.0918 19.7822C3.2482 19.8619 3.47272 19.9271 3.91113 19.9629C4.36117 19.9997 4.94342 20 5.79981 20H14.2002C15.0566 20 15.6388 19.9997 16.0889 19.9629C16.5273 19.9271 16.7518 19.8619 16.9082 19.7822C17.2845 19.5905 17.5905 19.2845 17.7822 18.9082C17.8619 18.7518 17.9271 18.5273 17.9629 18.0889C17.9997 17.6388 18 17.0566 18 16.2002V10ZM13 5V4H7V5C7 5.55228 6.55229 6 6 6C5.44772 6 5 5.55228 5 5V4.00293C4.55454 4.00606 4.2047 4.01313 3.91113 4.03711C3.47272 4.07293 3.2482 4.13808 3.0918 4.21777C2.71555 4.40951 2.40951 4.71554 2.21778 5.0918C2.13809 5.2482 2.07293 5.47272 2.03711 5.91113C2.00035 6.36117 2 6.94341 2 7.7998V8H18V7.7998C18 6.94341 17.9997 6.36117 17.9629 5.91113C17.9271 5.47272 17.8619 5.2482 17.7822 5.0918C17.5905 4.71554 17.2845 4.40951 16.9082 4.21777C16.7518 4.13808 16.5273 4.07293 16.0889 4.03711C15.7953 4.01313 15.4455 4.00606 15 4.00293V5C15 5.55228 14.5523 6 14 6C13.4477 6 13 5.55228 13 5ZM20 16.2002C20 17.0237 20.001 17.7016 19.9561 18.252C19.9101 18.814 19.8117 19.3311 19.5645 19.8164C19.181 20.5689 18.5689 21.181 17.8164 21.5645C17.3311 21.8117 16.814 21.9101 16.252 21.9561C15.7016 22.001 15.0237 22 14.2002 22H5.79981C4.97632 22 4.29843 22.001 3.74805 21.9561C3.18599 21.9101 2.6689 21.8117 2.1836 21.5645C1.43109 21.181 0.819017 20.5689 0.435549 19.8164C0.188274 19.3311 0.0898762 18.814 0.0439473 18.252C-0.00102053 17.7016 1.82649e-06 17.0237 1.94927e-06 16.2002V7.7998C1.82679e-06 6.97631 -0.00102054 6.29843 0.0439473 5.74805C0.0898762 5.18599 0.188273 4.6689 0.435549 4.18359C0.819018 3.43109 1.43109 2.81902 2.1836 2.43555C2.6689 2.18827 3.18599 2.08987 3.74805 2.04395C4.10885 2.01447 4.52454 2.0062 5 2.00293V1C5 0.447715 5.44772 0 6 0C6.55229 0 7 0.447715 7 1V2H13V1C13 0.447715 13.4477 0 14 0C14.5523 0 15 0.447715 15 1V2.00293C15.4755 2.0062 15.8911 2.01447 16.252 2.04395C16.814 2.08987 17.3311 2.18827 17.8164 2.43555C18.5689 2.81902 19.181 3.43109 19.5645 4.18359C19.8117 4.6689 19.9101 5.18599 19.9561 5.74805C20.001 6.29843 20 6.97632 20 7.7998V16.2002Z",
        fill: "currentColor"
      }, null, -1)
    ])], 12, f6));
  }
}), Ve = /* @__PURE__ */ g(m6, [["__scopeId", "data-v-62ca5e48"]]), g6 = ["width", "height"], p6 = /* @__PURE__ */ h({
  __name: "Close",
  props: {
    size: { default: 12 }
  },
  setup(e) {
    return (n, t) => (a(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: e.size,
      height: e.size,
      style: L(f(z)(e.size)),
      viewBox: "0 0 12 12",
      fill: "none",
      "aria-hidden": "true",
      class: "g-icon-close"
    }, [...t[0] || (t[0] = [
      i("path", {
        d: "M10.2929 0.292893C10.6834 -0.0976311 11.3164 -0.0976309 11.707 0.292893C12.0975 0.683417 12.0975 1.31643 11.707 1.70696L7.41399 5.99992L11.707 10.2929C12.0975 10.6834 12.0975 11.3164 11.707 11.707C11.3164 12.0975 10.6834 12.0975 10.2929 11.707L5.99992 7.41399L1.70696 11.707C1.31643 12.0975 0.683417 12.0975 0.292893 11.707C-0.0976309 11.3164 -0.0976311 10.6834 0.292893 10.2929L4.58586 5.99992L0.292893 1.70696C-0.0976311 1.31643 -0.0976311 0.683418 0.292893 0.292893C0.683418 -0.0976311 1.31643 -0.0976311 1.70696 0.292893L5.99992 4.58586L10.2929 0.292893Z",
        fill: "currentColor"
      }, null, -1)
    ])], 12, g6));
  }
}), Ke = /* @__PURE__ */ g(p6, [["__scopeId", "data-v-9bba5162"]]), v6 = {
  key: 0,
  class: "ui-kit g-picker-sheet",
  role: "dialog",
  "aria-modal": "true"
}, w6 = ["aria-label"], _6 = { class: "g-picker-sheet__head" }, b6 = ["aria-label"], y6 = { class: "g-picker-sheet__body" }, L6 = { class: "g-picker-sheet__footer" }, k6 = /* @__PURE__ */ h({
  __name: "GPickerSheet",
  props: {
    open: { type: Boolean }
  },
  emits: ["close", "save"],
  setup(e, { emit: n }) {
    const t = n;
    return (s, o) => (a(), H(I1, { to: "body" }, [
      e.open ? (a(), l("div", v6, [
        i("button", {
          type: "button",
          class: "g-picker-sheet__backdrop",
          "aria-label": s.$t("common.close"),
          onClick: o[0] || (o[0] = (c) => t("close"))
        }, null, 8, w6),
        i("div", {
          class: "g-picker-sheet__panel",
          onClick: o[3] || (o[3] = o1(() => {
          }, ["stop"]))
        }, [
          i("div", _6, [
            o[4] || (o[4] = i("span", {
              class: "g-picker-sheet__handle",
              "aria-hidden": "true"
            }, null, -1)),
            i("button", {
              type: "button",
              class: "g-picker-sheet__close",
              "aria-label": s.$t("common.close"),
              onClick: o[1] || (o[1] = (c) => t("close"))
            }, [
              V(Ke, { size: 12 })
            ], 8, b6)
          ]),
          i("div", y6, [
            S(s.$slots, "default", {}, void 0, !0)
          ]),
          i("div", L6, [
            V(m1, {
              variant: "primary",
              size: "lg",
              block: "",
              onClick: o[2] || (o[2] = (c) => t("save"))
            }, {
              default: I(() => [
                N(x(s.$t("common.save")), 1)
              ]),
              _: 1
            })
          ])
        ])
      ])) : b("", !0)
    ]));
  }
}), ge = /* @__PURE__ */ g(k6, [["__scopeId", "data-v-e6475c66"]]), $6 = ["disabled"], x6 = { class: "g-date-picker__trigger-label" }, M6 = {
  class: "g-date-picker__icon",
  "aria-hidden": "true"
}, z6 = {
  class: "g-date-picker__icon",
  "aria-hidden": "true"
}, I6 = ["aria-label", "onClick", "onKeydown"], V6 = { class: "g-date-picker__month-year" }, H6 = { class: "g-date-picker__header" }, Z6 = ["aria-expanded", "onClick"], B6 = { class: "g-date-picker__nav-group" }, S6 = ["aria-label", "disabled", "onClick"], R6 = ["aria-label", "disabled", "onClick"], T6 = {
  key: 0,
  class: "g-date-picker__month-overlay"
}, E6 = ["onClick"], D6 = {
  key: 0,
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, A6 = {
  key: 1,
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, F6 = {
  key: 0,
  class: "g-date-picker__months-grid"
}, P6 = ["onClick"], O6 = /* @__PURE__ */ h({
  name: "GDatePicker",
  __name: "GDatePicker",
  props: {
    modelValue: { default: null },
    placeholder: { default: void 0 },
    disabled: { type: Boolean, default: !1 },
    clearable: { type: Boolean, default: !0 },
    range: { type: Boolean, default: !1 },
    inline: { type: Boolean, default: !1 },
    sheet: { type: Boolean, default: !1 },
    locale: { default: void 0 },
    formatPattern: { default: "dd.MM.yyyy" },
    monthNameFormat: { default: "short" }
  },
  emits: ["update:modelValue"],
  setup(e, { expose: n, emit: t }) {
    const s = e, o = t, c = () => {
      const M = s.modelValue;
      return M instanceof Date ? M.getFullYear() : Array.isArray(M) && M[0] instanceof Date ? M[0].getFullYear() : (/* @__PURE__ */ new Date()).getFullYear();
    }, u = E(null), d = E(!1), r = E(null), w = E(c()), _ = E(!1), p = E(null), { t: y, locale: Z } = j(), m = C(() => s.locale ?? Z.value), k = C(() => s.placeholder ?? y("common.date")), v = C(() => [
      y("common.weekdays.mon"),
      y("common.weekdays.tue"),
      y("common.weekdays.wed"),
      y("common.weekdays.thu"),
      y("common.weekdays.fri"),
      y("common.weekdays.sat"),
      y("common.weekdays.sun")
    ]), R = C(() => s.sheet && !s.inline), T = (M) => {
      const F = String(M.getDate()).padStart(2, "0"), J = String(M.getMonth() + 1).padStart(2, "0");
      return `${F}.${J}.${M.getFullYear()}`;
    }, P = (M) => M instanceof Date ? new Date(M) : Array.isArray(M) && M[0] instanceof Date && M[1] instanceof Date ? [new Date(M[0]), new Date(M[1])] : null, D = C(() => {
      const M = s.modelValue;
      return M instanceof Date ? T(M) : Array.isArray(M) && M[0] instanceof Date && M[1] instanceof Date ? `${T(M[0])} — ${T(M[1])}` : k.value;
    }), A = C(() => ({
      keepActionRow: s.range,
      closeOnAutoApply: !s.range
    })), n1 = C(() => {
      const M = s.range ? "g-date-picker__menu g-date-picker__menu--range" : "g-date-picker__menu g-date-picker__menu--single";
      return d.value ? `${M} g-date-picker__menu--month-overlay-open` : M;
    }), X = C(() => ({
      input: "g-date-picker__input",
      menu: n1.value
    })), s1 = C(() => r1(s.modelValue)), h1 = C(
      () => new Intl.DateTimeFormat(m.value, {
        month: "long",
        year: "numeric"
      })
    ), a1 = (M, F) => {
      if (M == null || F == null)
        return "";
      const J = h1.value.format(new Date(F, M, 1));
      return J.charAt(0).toUpperCase() + J.slice(1);
    }, r1 = (M) => M instanceof Date ? !0 : Array.isArray(M) && M.length === 2 ? M.every((F) => F instanceof Date) : !1, t1 = (M) => {
      if (s.range) {
        if (Array.isArray(M) && M.length === 2) {
          const [F, J] = M;
          F instanceof Date && J instanceof Date && o("update:modelValue", [F, J]);
          return;
        }
        M === null && o("update:modelValue", null);
        return;
      }
      o("update:modelValue", M instanceof Date ? M : null);
    }, Q1 = () => {
      u.value?.clearValue?.(), o("update:modelValue", null);
    }, w1 = (M) => {
      M(), o("update:modelValue", null);
    }, K1 = ({ year: M }) => {
      w.value = M;
    }, _1 = (M) => [M, M + 1, M + 2], Y1 = (M) => {
      if (M?.length)
        return M;
      const F = s.monthNameFormat === "short" ? "short" : "long";
      return Array.from({ length: 12 }, (J, O) => ({
        value: O,
        text: new Intl.DateTimeFormat(m.value, { month: F }).format(
          new Date(2026, O, 1)
        )
      }));
    }, B = () => {
      d.value = !1, r.value = null;
    }, q = () => {
      B();
    }, W = (M) => {
      r.value = r.value === M ? null : M;
    }, Z1 = (M, F, J) => {
      J?.(M, F, !1), B();
    }, ke = (M) => {
      if (d.value) {
        B();
        return;
      }
      r.value = M ?? w.value, d.value = !0;
    }, _3 = () => {
      r.value = w.value, d.value = !0;
    }, b3 = () => {
      s.disabled || _.value || (p.value = P(s.modelValue ?? null), _.value = !0);
    }, $e = () => {
      _.value = !1;
    }, y3 = (M) => {
      p.value = P(M);
    }, L3 = () => {
      o("update:modelValue", P(p.value)), $e();
    };
    return n({
      openMonthYearPicker: _3
    }), (M, F) => {
      const J = N1("GDatePicker", !0);
      return a(), l("div", {
        class: $(["g-date-picker", {
          _filled: s1.value,
          _disabled: e.disabled,
          _range: e.range,
          _inline: e.inline,
          _sheet: R.value,
          "_month-overlay-open": d.value
        }])
      }, [
        R.value ? (a(), l("button", {
          key: 0,
          type: "button",
          class: "g-date-picker__input",
          disabled: e.disabled,
          onClick: b3
        }, [
          i("span", x6, x(D.value), 1),
          i("span", M6, [
            V(Ve, { size: 20 })
          ])
        ], 8, $6)) : b("", !0),
        R.value ? (a(), H(ge, {
          key: 1,
          open: _.value,
          onClose: $e,
          onSave: L3
        }, {
          default: I(() => [
            V(J, {
              "model-value": p.value,
              range: e.range,
              locale: m.value,
              "format-pattern": e.formatPattern,
              "month-name-format": e.monthNameFormat,
              inline: "",
              "onUpdate:modelValue": y3
            }, null, 8, ["model-value", "range", "locale", "format-pattern", "month-name-format"])
          ]),
          _: 1
        }, 8, ["open"])) : (a(), H(f(qe), {
          key: 2,
          ref_key: "pickerRef",
          ref: u,
          "model-value": e.modelValue,
          disabled: e.disabled,
          range: e.range,
          inline: e.inline,
          "enable-time-picker": !1,
          locale: m.value,
          format: e.formatPattern,
          placeholder: k.value,
          "auto-apply": !0,
          clearable: e.clearable && !e.inline,
          "week-start": 1,
          "month-name-format": e.monthNameFormat,
          "day-names": v.value,
          config: A.value,
          teleport: !e.inline,
          ui: X.value,
          "onUpdate:modelValue": t1,
          onUpdateMonthYear: K1,
          onClosed: q
        }, d1({
          "input-icon": I(() => [
            i("span", z6, [
              V(Ve, { size: 20 })
            ])
          ]),
          "clear-icon": I(({ clear: O }) => [
            i("span", {
              class: "g-date-picker__clear-btn",
              role: "button",
              tabindex: "0",
              "aria-label": M.$t("common.clear"),
              onClick: (Q) => w1(O),
              onKeydown: [
                ee(o1((Q) => w1(O), ["prevent"]), ["enter"]),
                ee(o1((Q) => w1(O), ["prevent"]), ["space"])
              ]
            }, [...F[0] || (F[0] = [
              i("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                "aria-hidden": "true"
              }, [
                i("path", {
                  d: "M12 4L4 12M4 4L12 12",
                  stroke: "currentColor",
                  "stroke-width": "1.2",
                  "stroke-linecap": "round"
                })
              ], -1)
            ])], 40, I6)
          ]),
          "month-year": I((O) => [
            i("div", V6, [
              i("div", H6, [
                i("button", {
                  type: "button",
                  class: $(["g-date-picker__month-pill", { _open: d.value }]),
                  "aria-expanded": d.value,
                  onClick: (Q) => ke(O.year)
                }, [
                  i("span", null, x(a1(O.month, O.year)), 1),
                  (a(), l("svg", {
                    class: $(["g-date-picker__chevron", { _open: d.value }]),
                    width: "16",
                    height: "16",
                    viewBox: "0 0 16 16",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    "aria-hidden": "true"
                  }, [...F[1] || (F[1] = [
                    i("path", {
                      d: "M4 6L8 10L12 6",
                      stroke: "currentColor",
                      "stroke-width": "1.2",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    }, null, -1)
                  ])], 2))
                ], 10, Z6),
                $3(i("div", B6, [
                  i("button", {
                    type: "button",
                    class: "g-date-picker__nav-btn",
                    "aria-label": M.$t("common.previousMonth"),
                    disabled: O.isDisabled?.(!1),
                    onClick: (Q) => O.handleMonthYearChange?.(!1, !0)
                  }, [...F[2] || (F[2] = [
                    i("svg", {
                      width: "16",
                      height: "16",
                      viewBox: "0 0 16 16",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg"
                    }, [
                      i("path", {
                        d: "M8 12.6667V3.33333M8 3.33333L4 7.33333M8 3.33333L12 7.33333",
                        stroke: "currentColor",
                        "stroke-width": "1.2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      })
                    ], -1)
                  ])], 8, S6),
                  i("button", {
                    type: "button",
                    class: "g-date-picker__nav-btn",
                    "aria-label": M.$t("common.nextMonth"),
                    disabled: O.isDisabled?.(!0),
                    onClick: (Q) => O.handleMonthYearChange?.(!0, !0)
                  }, [...F[3] || (F[3] = [
                    i("svg", {
                      width: "16",
                      height: "16",
                      viewBox: "0 0 16 16",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg"
                    }, [
                      i("path", {
                        d: "M8 3.33333V12.6667M8 12.6667L12 8.66667M8 12.6667L4 8.66667",
                        stroke: "currentColor",
                        "stroke-width": "1.2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      })
                    ], -1)
                  ])], 8, R6)
                ], 512), [
                  [x3, !d.value]
                ])
              ]),
              d.value ? (a(), l("div", T6, [
                (a(!0), l(U, null, G(_1(O.year), (Q) => (a(), l("section", {
                  key: Q,
                  class: "g-date-picker__year-section"
                }, [
                  i("button", {
                    type: "button",
                    class: $(["g-date-picker__year-toggle", { _expanded: r.value === Q }]),
                    onClick: (b1) => W(Q)
                  }, [
                    i("span", null, x(Q), 1),
                    i("span", {
                      class: $(["g-date-picker__year-toggle-icon", { _expanded: r.value === Q }]),
                      "aria-hidden": "true"
                    }, [
                      r.value === Q ? (a(), l("svg", D6, [...F[4] || (F[4] = [
                        i("path", {
                          d: "M12 4L4 12M4 4L12 12",
                          stroke: "currentColor",
                          "stroke-width": "1.2",
                          "stroke-linecap": "round"
                        }, null, -1)
                      ])])) : (a(), l("svg", A6, [...F[5] || (F[5] = [
                        i("path", {
                          d: "M8 3.33333V12.6667M3.33333 8H12.6667",
                          stroke: "currentColor",
                          "stroke-width": "1.2",
                          "stroke-linecap": "round"
                        }, null, -1)
                      ])]))
                    ], 2)
                  ], 10, E6),
                  r.value === Q ? (a(), l("div", F6, [
                    (a(!0), l(U, null, G(Y1(O.months), (b1) => (a(), l("button", {
                      key: `${Q}-${b1.value}`,
                      type: "button",
                      class: $(["g-date-picker__month-btn", {
                        _active: O.month === b1.value && O.year === Q
                      }]),
                      onClick: (j9) => Z1(b1.value, Q, O.updateMonthYear)
                    }, x(b1.text), 11, P6))), 128))
                  ])) : b("", !0)
                ]))), 128))
              ])) : b("", !0)
            ])
          ]),
          _: 2
        }, [
          e.range ? {
            name: "action-row",
            fn: I(({ internalModelValue: O }) => [
              r1(O) ? (a(), l("button", {
                key: 0,
                type: "button",
                class: "g-date-picker__clear",
                onClick: Q1
              }, [
                F[6] || (F[6] = i("svg", {
                  width: "16",
                  height: "16",
                  viewBox: "0 0 16 16",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  "aria-hidden": "true"
                }, [
                  i("path", {
                    d: "M12 4L4 12M4 4L12 12",
                    stroke: "currentColor",
                    "stroke-width": "1.2",
                    "stroke-linecap": "round"
                  })
                ], -1)),
                N(" " + x(M.$t("common.clear")), 1)
              ])) : b("", !0)
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["model-value", "disabled", "range", "inline", "locale", "format", "placeholder", "clearable", "month-name-format", "day-names", "config", "teleport", "ui"]))
      ], 2);
    };
  }
}), U6 = /* @__PURE__ */ g(O6, [["__scopeId", "data-v-fa7d3568"]]), N6 = ["type", "disabled", "aria-expanded"], q6 = {
  key: 0,
  class: "g-dropdown-button__leading"
}, G6 = {
  key: 1,
  class: "g-dropdown-button__label"
}, j6 = /* @__PURE__ */ h({
  __name: "GDropdownButton",
  props: {
    type: { default: "button" },
    disabled: { type: Boolean, default: !1 },
    open: { type: Boolean, default: !1 },
    variant: { default: "white" },
    class: { default: "" }
  },
  emits: ["click"],
  setup(e, { emit: n }) {
    const t = e, s = n, o = z1(), c = C(() => !!o.leading), u = C(() => {
      const r = [
        "g-dropdown-button",
        `g-dropdown-button--${t.variant}`
      ];
      return t.open && r.push("_open"), t.disabled && r.push("_disabled"), t.class && r.push(...l1(t.class)), r.join(" ");
    }), d = (r) => {
      t.disabled || s("click", r);
    };
    return (r, w) => (a(), l("button", {
      type: e.type,
      disabled: e.disabled,
      "aria-expanded": e.open,
      class: $(u.value),
      onClick: d
    }, [
      c.value ? (a(), l("span", q6, [
        S(r.$slots, "leading", {}, void 0, !0)
      ])) : b("", !0),
      r.$slots.default ? (a(), l("span", G6, [
        S(r.$slots, "default", {}, void 0, !0)
      ])) : b("", !0),
      i("span", {
        class: $(["g-dropdown-button__chevron", { _open: e.open }]),
        "aria-hidden": "true"
      }, [...w[0] || (w[0] = [
        i("svg", {
          width: "16",
          height: "16",
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, [
          i("path", {
            d: "M4.529 6.529C4.789 6.268 5.211 6.268 5.471 6.529L8 9.057L10.529 6.529C10.789 6.268 11.211 6.268 11.471 6.529C11.732 6.789 11.732 7.211 11.471 7.471L8.471 10.471C8.346 10.596 8.177 10.667 8 10.667C7.823 10.667 7.654 10.596 7.529 10.471L4.529 7.471C4.268 7.211 4.268 6.789 4.529 6.529Z",
            fill: "currentColor"
          })
        ], -1)
      ])], 2)
    ], 10, N6));
  }
}), pe = /* @__PURE__ */ g(j6, [["__scopeId", "data-v-4c198efd"]]), W6 = ["type", "disabled", "aria-label"], Q6 = { class: "g-icon-button__icon" }, K6 = /* @__PURE__ */ h({
  __name: "GIconButton",
  props: {
    type: { default: "button" },
    disabled: { type: Boolean, default: !1 },
    size: { default: "md" },
    variant: { default: "primary" },
    icon: {},
    ariaLabel: {},
    class: { default: "" }
  },
  emits: ["click"],
  setup(e, { emit: n }) {
    const t = e, s = n, o = C(() => Qe(t.variant)), c = C(() => {
      const d = [
        "g-icon-button",
        `g-icon-button--${t.size}`,
        `g-icon-button--${o.value}`
      ];
      return t.disabled && d.push("g-icon-button--disabled"), t.class && d.push(...l1(t.class)), d.join(" ");
    }), u = (d) => {
      t.disabled || s("click", d);
    };
    return (d, r) => (a(), l("button", {
      type: e.type,
      disabled: e.disabled,
      "aria-label": e.ariaLabel,
      class: $(c.value),
      onClick: u
    }, [
      i("span", Q6, [
        S(d.$slots, "default", {}, () => [
          e.icon ? (a(), H(Y, {
            key: 0,
            name: e.icon
          }, null, 8, ["name"])) : b("", !0)
        ], !0)
      ])
    ], 10, W6));
  }
}), i1 = /* @__PURE__ */ g(K6, [["__scopeId", "data-v-a6e65ca7"]]), Y6 = ["width", "height"], X6 = /* @__PURE__ */ h({
  __name: "InfoCircle",
  props: {
    size: { default: 16 }
  },
  setup(e) {
    return (n, t) => (a(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: e.size,
      height: e.size,
      style: L(f(z)(e.size)),
      viewBox: "0 0 14.6667 14.6667",
      fill: "none",
      "aria-hidden": "true",
      class: "g-icon-info-circle"
    }, [...t[0] || (t[0] = [
      i("path", {
        d: "M13.3333 7.33333C13.3333 4.01962 10.647 1.33333 7.33333 1.33333C4.01962 1.33333 1.33333 4.01962 1.33333 7.33333C1.33333 10.647 4.01962 13.3333 7.33333 13.3333C10.647 13.3333 13.3333 10.647 13.3333 7.33333ZM6.72461 10V7C6.72461 6.63186 7.02316 6.33342 7.39128 6.33333C7.75947 6.33333 8.05794 6.63181 8.05794 7V10C8.05793 10.3682 7.75946 10.6667 7.39128 10.6667C7.02316 10.6666 6.72462 10.3681 6.72461 10ZM7.39128 4C7.75947 4 8.05794 4.29848 8.05794 4.66667C8.05793 5.03485 7.75946 5.33333 7.39128 5.33333H7.38477C7.01658 5.33333 6.71811 5.03485 6.7181 4.66667C6.7181 4.29848 7.01658 4 7.38477 4H7.39128ZM14.6667 7.33333C14.6667 11.3834 11.3834 14.6667 7.33333 14.6667C3.28325 14.6667 0 11.3834 0 7.33333C0 3.28325 3.28325 0 7.33333 0C11.3834 0 14.6667 3.28325 14.6667 7.33333Z",
        fill: "currentColor"
      }, null, -1)
    ])], 12, Y6));
  }
}), J6 = /* @__PURE__ */ g(X6, [["__scopeId", "data-v-1a3d675a"]]), e0 = ["aria-label", "onKeydown"], He = 8, c1 = 8, t0 = /* @__PURE__ */ h({
  __name: "GInfoTooltip",
  props: {
    text: {},
    ariaLabel: {}
  },
  setup(e) {
    const n = E(null), t = E(null), s = E(!1), o = E(!1), c = E({
      position: "fixed",
      top: "0px",
      left: "0px"
    });
    function u() {
      const _ = n.value, p = t.value;
      if (!s.value || !_ || !p) return;
      const y = _.getBoundingClientRect(), Z = p.offsetWidth, m = p.offsetHeight, k = Math.max(c1, window.innerWidth - Z - c1);
      let v = y.left + y.width / 2 - Z / 2;
      v = Math.min(Math.max(c1, v), k);
      let R = y.top - m - He;
      R < c1 && (R = y.bottom + He), R + m > window.innerHeight - c1 && (R = Math.max(c1, window.innerHeight - m - c1)), c.value = {
        position: "fixed",
        top: `${Math.round(R)}px`,
        left: `${Math.round(v)}px`,
        zIndex: "var(--z-fixed)"
      }, o.value = !0;
    }
    function d() {
      s.value && u();
    }
    function r() {
      s.value || (s.value = !0, window.addEventListener("scroll", d, !0), window.addEventListener("resize", d), g1(() => {
        requestAnimationFrame(u);
      }));
    }
    function w() {
      s.value = !1, o.value = !1, window.removeEventListener("scroll", d, !0), window.removeEventListener("resize", d);
    }
    return f1(w), (_, p) => (a(), l("span", {
      ref_key: "triggerRef",
      ref: n,
      class: "g-info-tooltip",
      tabindex: "0",
      "aria-label": e.ariaLabel,
      onMouseenter: r,
      onMouseleave: w,
      onFocus: r,
      onBlur: w,
      onClick: p[0] || (p[0] = o1(() => {
      }, ["stop"])),
      onKeydown: ee(o1(w, ["prevent"]), ["escape"])
    }, [
      S(_.$slots, "default", {}, () => [
        V(J6, { size: 16 })
      ], !0),
      (a(), H(I1, { to: "body" }, [
        s.value ? (a(), l("span", {
          key: 0,
          ref_key: "bubbleRef",
          ref: t,
          class: $(["g-info-tooltip__bubble", { _ready: o.value }]),
          role: "tooltip",
          style: L(c.value)
        }, [
          S(_.$slots, "content", {}, () => [
            N(x(e.text), 1)
          ], !0)
        ], 6)) : b("", !0)
      ]))
    ], 40, e0));
  }
}), Ye = /* @__PURE__ */ g(t0, [["__scopeId", "data-v-d33b84f1"]]), n0 = ["width", "height"], s0 = /* @__PURE__ */ h({
  __name: "AlertCircle",
  props: {
    size: { default: 16 }
  },
  setup(e) {
    return (n, t) => (a(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: e.size,
      height: e.size,
      style: L(f(z)(e.size)),
      viewBox: "0 0 15 15",
      fill: "none",
      "aria-hidden": "true",
      class: "g-icon-alert-circle"
    }, [...t[0] || (t[0] = [
      i("path", {
        d: "M13.3333 7.33333C13.3333 4.01962 10.647 1.33333 7.33333 1.33333C4.01962 1.33333 1.33333 4.01962 1.33333 7.33333C1.33333 10.647 4.01962 13.3333 7.33333 13.3333C10.647 13.3333 13.3333 10.647 13.3333 7.33333ZM7.33984 9.33333C7.70803 9.33333 8.00651 9.63181 8.00651 10C8.00651 10.3682 7.70803 10.6667 7.33984 10.6667H7.33333C6.96514 10.6667 6.66667 10.3682 6.66667 10C6.66667 9.63181 6.96514 9.33333 7.33333 9.33333H7.33984ZM6.66667 8V4.66667C6.66667 4.29848 6.96514 4 7.33333 4C7.70152 4 8 4.29848 8 4.66667V8C8 8.36819 7.70152 8.66667 7.33333 8.66667C6.96514 8.66667 6.66667 8.36819 6.66667 8ZM14.6667 7.33333C14.6667 11.3834 11.3834 14.6667 7.33333 14.6667C3.28325 14.6667 0 11.3834 0 7.33333C0 3.28325 3.28325 0 7.33333 0C11.3834 0 14.6667 3.28325 14.6667 7.33333Z",
        fill: "currentColor"
      }, null, -1)
    ])], 12, n0));
  }
}), a0 = /* @__PURE__ */ g(s0, [["__scopeId", "data-v-830faf49"]]), o0 = { class: "g-input-field__body" }, i0 = {
  key: 0,
  class: "g-input__leading"
}, l0 = ["type", "value", "placeholder", "disabled", "readonly", "name", "id", "autocomplete", "autocapitalize", "spellcheck", "inputmode", "maxlength"], r0 = {
  key: 1,
  class: "g-input__trailing"
}, c0 = ["role"], d0 = {
  class: "g-input-field__message-icon",
  "aria-hidden": "true"
}, u0 = { class: "g-input-field__message-text" }, C0 = /* @__PURE__ */ h({
  __name: "GInput",
  props: {
    modelValue: {},
    type: { default: "text" },
    placeholder: {},
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    error: { type: Boolean, default: !1 },
    message: { default: "" },
    variant: { default: "gray" },
    name: {},
    id: {},
    autocomplete: {},
    autocapitalize: {},
    spellcheck: { type: Boolean },
    inputmode: {},
    maxlength: {},
    class: { default: "" }
  },
  emits: ["update:modelValue", "focus", "blur", "keydown"],
  setup(e, { expose: n, emit: t }) {
    const s = e, o = t, c = E(null), u = E(!1), d = C(() => {
      const m = [`g-input--${s.variant}`];
      return s.disabled && m.push("_disabled"), s.error && m.push("_error"), u.value && m.push("_focused"), m.join(" ");
    }), r = (m) => {
      const k = m.target;
      if (s.inputmode === "numeric" && s.maxlength) {
        const R = k.value.replace(/\D/g, "");
        k.value = R, o("update:modelValue", R);
      } else
        o("update:modelValue", k.value);
      const v = String(s.modelValue ?? "");
      k.value !== v && (k.value = v);
    }, w = (m) => {
      u.value = !0, o("focus", m);
    }, _ = (m) => {
      u.value = !1, o("blur", m);
    }, p = (m) => {
      o("keydown", m);
    };
    return n({ focus: () => {
      c.value?.focus();
    }, select: () => {
      c.value?.select();
    }, inputRef: c }), (m, k) => (a(), l("div", {
      class: $(["g-input-field", s.class])
    }, [
      i("div", o0, [
        i("div", {
          class: $(["g-input", d.value])
        }, [
          m.$slots.leading ? (a(), l("span", i0, [
            S(m.$slots, "leading", {}, void 0, !0)
          ])) : b("", !0),
          i("input", {
            ref_key: "inputRef",
            ref: c,
            class: "g-input__control",
            type: e.type,
            value: e.modelValue ?? "",
            placeholder: e.placeholder,
            disabled: e.disabled,
            readonly: e.readonly,
            name: e.name,
            id: e.id,
            autocomplete: e.autocomplete,
            autocapitalize: e.autocapitalize,
            spellcheck: e.spellcheck,
            inputmode: e.inputmode,
            maxlength: e.maxlength,
            onInput: r,
            onFocus: w,
            onBlur: _,
            onKeydown: p
          }, null, 40, l0),
          m.$slots.trailing ? (a(), l("span", r0, [
            S(m.$slots, "trailing", {}, void 0, !0)
          ])) : b("", !0)
        ], 2),
        S(m.$slots, "dropdown", {}, void 0, !0)
      ]),
      e.message ? (a(), l("p", {
        key: 0,
        class: $(["g-input-field__message", { _error: e.error }]),
        role: e.error ? "alert" : void 0
      }, [
        i("span", d0, [
          V(a0, { size: 16 })
        ]),
        i("span", u0, x(e.message), 1)
      ], 10, c0)) : b("", !0)
    ], 2));
  }
}), ve = /* @__PURE__ */ g(C0, [["__scopeId", "data-v-2abca68d"]]);
function we(e, n) {
  const t = (s) => {
    f(e)?.contains(s.target) || n();
  };
  u1(() => document.addEventListener("mousedown", t)), f1(() => document.removeEventListener("mousedown", t));
}
const h0 = ["disabled", "aria-expanded", "aria-label"], f0 = {
  key: 0,
  class: "g-input-select__empty"
}, m0 = { class: "g-input-select__sheet-list" }, g0 = /* @__PURE__ */ h({
  __name: "GInputSelect",
  props: {
    modelValue: {},
    items: {},
    placeholder: {},
    disabled: { type: Boolean, default: !1 },
    error: { type: Boolean, default: !1 },
    message: { default: "" },
    variant: { default: "gray" },
    toggleLabel: { default: void 0 },
    emptyLabel: { default: void 0 },
    sheet: { type: Boolean, default: !1 },
    class: { default: "" }
  },
  emits: ["update:modelValue", "open", "close", "select"],
  setup(e, { emit: n }) {
    const t = e, { t: s } = j(), o = C(() => t.toggleLabel ?? s("common.openList")), c = C(() => t.emptyLabel ?? s("common.nothingFound")), u = n, d = z1(), r = E(null), w = E(null), _ = E(!1), p = E(!1), y = E(""), Z = E(!1), m = E(-1), k = E(), v = C(() => !!d.leading), R = C(
      () => t.items.find((B) => B.value === t.modelValue) ?? null
    ), T = C(() => {
      if (!Z.value) return t.items;
      const B = y.value.trim().toLowerCase();
      return B ? t.items.filter((q) => q.label.toLowerCase().includes(B)) : t.items;
    }), P = C(() => _.value && Z.value ? y.value : R.value?.label ?? ""), D = () => {
      m.value = t.items.findIndex((B) => B.value === t.modelValue);
    }, A = (B) => {
      Z.value = !0, y.value = B, _.value || (_.value = !0, u("open")), m.value = T.value.length > 0 ? 0 : -1;
    }, n1 = (B) => B.key.length === 1 && !B.ctrlKey && !B.metaKey && !B.altKey, X = () => {
      if (!t.disabled) {
        if (t.sheet) {
          if (p.value) return;
          k.value = t.modelValue ?? t.items[0]?.value, p.value = !0, u("open");
          return;
        }
        _.value || (y.value = "", Z.value = !1, _.value = !0, D(), u("open"), window.setTimeout(() => w.value?.select(), 0));
      }
    }, s1 = (B) => {
      !t.sheet || t.disabled || B.preventDefault();
    }, h1 = () => {
      !t.sheet || t.disabled || p.value || X();
    }, a1 = () => {
      p.value && (p.value = !1, u("close"));
    }, r1 = () => {
      const B = t.items.find((q) => q.value === k.value);
      B ? _1(B) : a1();
    }, t1 = () => {
      _.value && (_.value = !1, y.value = "", Z.value = !1, m.value = -1, u("close"));
    }, Q1 = () => {
      t.disabled || t.sheet || (_.value ? t1() : (w.value?.focus(), X()));
    }, w1 = (B) => {
      const q = R.value?.label ?? "";
      if (!Z.value && q && B.startsWith(q)) {
        A(B.slice(q.length));
        return;
      }
      A(B);
    }, K1 = () => {
      window.setTimeout(() => {
        r.value?.contains(document.activeElement) || t1();
      }, 0);
    }, _1 = (B) => {
      u("update:modelValue", B.value), u("select", B), t.sheet ? a1() : t1();
    }, Y1 = (B) => {
      if (!_.value && ["ArrowDown", "ArrowUp", "Enter"].includes(B.key)) {
        X(), B.preventDefault();
        return;
      }
      if (_.value) {
        if (B.key === "Escape") {
          B.preventDefault(), t1();
          return;
        }
        if (B.key === "ArrowDown") {
          if (B.preventDefault(), T.value.length === 0) return;
          m.value = (m.value + 1) % T.value.length;
          return;
        }
        if (B.key === "ArrowUp") {
          if (B.preventDefault(), T.value.length === 0) return;
          m.value = m.value <= 0 ? T.value.length - 1 : m.value - 1;
          return;
        }
        if (B.key === "Enter") {
          B.preventDefault();
          const q = T.value[m.value];
          q && _1(q);
          return;
        }
        if (!Z.value && n1(B)) {
          B.preventDefault(), A(B.key);
          return;
        }
        !Z.value && (B.key === "Backspace" || B.key === "Delete") && (B.preventDefault(), A(""));
      }
    };
    return we(r, () => {
      _.value && t1();
    }), (B, q) => (a(), l("div", {
      ref_key: "rootRef",
      ref: r,
      class: $(["g-input-select", { _sheet: e.sheet }]),
      onMousedown: s1,
      onClick: h1
    }, [
      V(ve, {
        ref_key: "inputRef",
        ref: w,
        "model-value": P.value,
        placeholder: e.placeholder,
        disabled: e.disabled,
        readonly: e.sheet,
        error: e.error,
        message: e.message,
        variant: e.variant,
        "onUpdate:modelValue": w1,
        onFocus: X,
        onBlur: K1,
        onKeydown: Y1
      }, d1({
        trailing: I(() => [
          i("button", {
            type: "button",
            class: $(["g-input-select__chevron", { _open: _.value || p.value }]),
            disabled: e.disabled,
            "aria-expanded": _.value || p.value,
            "aria-label": o.value,
            onMousedown: q[0] || (q[0] = o1(() => {
            }, ["prevent"])),
            onClick: Q1
          }, [...q[2] || (q[2] = [
            i("svg", {
              width: "16",
              height: "16",
              viewBox: "0 0 16 16",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              "aria-hidden": "true"
            }, [
              i("path", {
                d: "M4.529 6.529C4.789 6.268 5.211 6.268 5.471 6.529L8 9.057L10.529 6.529C10.789 6.268 11.211 6.268 11.471 6.529C11.732 6.789 11.732 7.211 11.471 7.471L8.471 10.471C8.346 10.596 8.177 10.667 8 10.667C7.823 10.667 7.654 10.596 7.529 10.471L4.529 7.471C4.268 7.211 4.268 6.789 4.529 6.529Z",
                fill: "currentColor"
              })
            ], -1)
          ])], 42, h0)
        ]),
        _: 2
      }, [
        v.value ? {
          name: "leading",
          fn: I(() => [
            S(B.$slots, "leading", {}, void 0, !0)
          ]),
          key: "0"
        } : void 0,
        e.sheet ? void 0 : {
          name: "dropdown",
          fn: I(() => [
            _.value ? (a(), H(G1, {
              key: 0,
              class: "g-input-select__menu"
            }, {
              default: I(() => [
                (a(!0), l(U, null, G(T.value, (W, Z1) => (a(), H($1, {
                  key: W.value,
                  selected: W.value === e.modelValue,
                  muted: W.value !== e.modelValue,
                  class: $({ _active: Z1 === m.value }),
                  onMousedown: q[1] || (q[1] = o1(() => {
                  }, ["prevent"])),
                  onClick: (ke) => _1(W)
                }, d1({
                  default: I(() => [
                    S(B.$slots, "item", { item: W }, () => [
                      N(x(W.label), 1)
                    ], !0)
                  ]),
                  _: 2
                }, [
                  B.$slots.itemLeading ? {
                    name: "leading",
                    fn: I(() => [
                      S(B.$slots, "itemLeading", { item: W }, void 0, !0)
                    ]),
                    key: "0"
                  } : void 0
                ]), 1032, ["selected", "muted", "class", "onClick"]))), 128)),
                T.value.length === 0 ? (a(), l("p", f0, x(c.value), 1)) : b("", !0)
              ]),
              _: 3
            })) : b("", !0)
          ]),
          key: "1"
        }
      ]), 1032, ["model-value", "placeholder", "disabled", "readonly", "error", "message", "variant"]),
      e.sheet ? (a(), H(ge, {
        key: 0,
        open: p.value,
        onClose: a1,
        onSave: r1
      }, {
        default: I(() => [
          i("div", m0, [
            (a(!0), l(U, null, G(e.items, (W) => (a(), H($1, {
              key: W.value,
              selected: W.value === k.value,
              muted: W.value !== k.value,
              onClick: (Z1) => k.value = W.value
            }, d1({
              default: I(() => [
                S(B.$slots, "item", { item: W }, () => [
                  N(x(W.label), 1)
                ], !0)
              ]),
              _: 2
            }, [
              B.$slots.itemLeading ? {
                name: "leading",
                fn: I(() => [
                  S(B.$slots, "itemLeading", { item: W }, void 0, !0)
                ]),
                key: "0"
              } : void 0
            ]), 1032, ["selected", "muted", "onClick"]))), 128))
          ])
        ]),
        _: 3
      }, 8, ["open"])) : b("", !0)
    ], 34));
  }
}), Xe = /* @__PURE__ */ g(g0, [["__scopeId", "data-v-18bfa555"]]), p0 = ["type", "disabled", "aria-pressed"], v0 = {
  key: 0,
  class: "g-menu-button__leading"
}, w0 = {
  key: 1,
  class: "g-menu-button__label"
}, _0 = /* @__PURE__ */ h({
  __name: "GMenuButton",
  props: {
    type: { default: "button" },
    disabled: { type: Boolean, default: !1 },
    selected: { type: Boolean, default: !1 },
    hovered: { type: Boolean, default: !1 },
    pressed: { type: Boolean, default: !1 },
    size: { default: "sm" },
    class: { default: "" }
  },
  emits: ["click"],
  setup(e, { emit: n }) {
    const t = e, s = n, o = z1(), c = C(() => !!o.leading), u = C(() => {
      const r = ["g-menu-button", `g-menu-button--${t.size}`];
      return t.selected && r.push("_selected"), t.hovered && r.push("_hover"), t.pressed && r.push("_active"), t.disabled && r.push("_disabled"), t.class && r.push(...l1(t.class)), r.join(" ");
    }), d = (r) => {
      t.disabled || s("click", r);
    };
    return (r, w) => (a(), l("button", {
      type: e.type,
      disabled: e.disabled,
      "aria-pressed": e.selected || void 0,
      class: $(u.value),
      onClick: d
    }, [
      c.value ? (a(), l("span", v0, [
        S(r.$slots, "leading", {}, void 0, !0)
      ])) : b("", !0),
      r.$slots.default ? (a(), l("span", w0, [
        S(r.$slots, "default", {}, void 0, !0)
      ])) : b("", !0)
    ], 10, p0));
  }
}), Je = /* @__PURE__ */ g(_0, [["__scopeId", "data-v-0c29f640"]]), b0 = ["width", "height"], y0 = /* @__PURE__ */ h({
  __name: "ChevronLeft",
  props: {
    size: { default: 20 }
  },
  setup(e) {
    return (n, t) => (a(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: e.size,
      height: e.size,
      style: L(f(z)(e.size)),
      viewBox: "0 0 20 20",
      fill: "none",
      "aria-hidden": "true",
      class: "g-icon-chevron-left"
    }, [...t[0] || (t[0] = [
      i("path", {
        transform: "translate(10 10) rotate(90) translate(-5.83325 -3.3333)",
        d: "M10.2441 0.244078C10.5695 -0.0813592 11.097 -0.0813592 11.4225 0.244078C11.7479 0.569515 11.7479 1.09703 11.4225 1.42246L6.42246 6.42246C6.26618 6.57874 6.05428 6.6666 5.83327 6.6666C5.61226 6.6666 5.40036 6.57874 5.24408 6.42246L0.244078 1.42246C-0.0813592 1.09703 -0.0813592 0.569515 0.244078 0.244078C0.569515 -0.0813592 1.09703 -0.0813592 1.42246 0.244078L5.83327 4.65489L10.2441 0.244078Z",
        fill: "currentColor"
      }, null, -1)
    ])], 12, b0));
  }
}), L0 = /* @__PURE__ */ g(y0, [["__scopeId", "data-v-714d332e"]]), k0 = ["width", "height"], $0 = /* @__PURE__ */ h({
  __name: "ChevronRight",
  props: {
    size: { default: 16 }
  },
  setup(e) {
    return (n, t) => (a(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: e.size,
      height: e.size,
      style: L(f(z)(e.size)),
      viewBox: "0 0 16 16",
      fill: "none",
      "aria-hidden": "true",
      class: "g-icon-chevron-right"
    }, [...t[0] || (t[0] = [
      i("path", {
        transform: "translate(5.33336 3.33339)",
        d: "M0.195262 0.195262C0.455612 -0.0650874 0.877621 -0.0650873 1.13797 0.195262L5.13797 4.19526C5.26299 4.32029 5.33328 4.48981 5.33328 4.66662C5.33328 4.84343 5.26299 5.01295 5.13797 5.13797L1.13797 9.13797C0.877621 9.39832 0.455612 9.39832 0.195262 9.13797C-0.0650874 8.87762 -0.0650874 8.45561 0.195262 8.19526L3.72391 4.66662L0.195262 1.13797C-0.0650874 0.877621 -0.0650873 0.455612 0.195262 0.195262Z",
        fill: "currentColor"
      }, null, -1)
    ])], 12, k0));
  }
}), x0 = /* @__PURE__ */ g($0, [["__scopeId", "data-v-35bc57d1"]]), M0 = { class: "g-pagination" }, z0 = { class: "g-pagination__meta" }, I0 = { class: "g-pagination__range" }, V0 = { class: "g-pagination__pages" }, H0 = ["disabled", "onClick"], Z0 = /* @__PURE__ */ h({
  __name: "GPagination",
  props: {
    count: {},
    total: {},
    currentPage: {},
    limit: {},
    sizes: {}
  },
  emits: ["page-change", "limit-change"],
  setup(e, { emit: n }) {
    const t = [10, 25, 50, 100], s = e, o = n, c = C(
      () => (s.sizes ?? t).map((m) => ({ label: String(m), value: m }))
    ), u = E(null), d = E(!1);
    we(u, () => {
      d.value = !1;
    });
    const r = C(() => s.total === 0 ? 0 : Math.max(1, Math.ceil(s.total / s.limit))), w = C(() => s.total === 0 || s.count === 0 ? 0 : (s.currentPage - 1) * s.limit + 1), _ = C(() => s.total === 0 || s.count === 0 ? 0 : Math.min(s.currentPage * s.limit, s.total));
    function p(m, k) {
      if (k <= 0) return [];
      if (k <= 7) return Array.from({ length: k }, (D, A) => A + 1);
      const v = /* @__PURE__ */ new Set([1, k, m, m - 1, m + 1]);
      m <= 2 && (v.add(2), v.add(3)), m >= k - 1 && (v.add(k - 2), v.add(k - 1));
      const R = [...v].filter((D) => D >= 1 && D <= k).sort((D, A) => D - A), T = [];
      let P = 0;
      for (const D of R)
        P > 0 && D - P > 1 && T.push("ellipsis"), T.push(D), P = D;
      return T;
    }
    const y = C(() => p(s.currentPage, r.value));
    function Z(m) {
      d.value = !1;
      const k = Number(m);
      Number.isFinite(k) && k !== s.limit && o("limit-change", k);
    }
    return (m, k) => (a(), l("div", M0, [
      i("div", z0, [
        i("span", I0, x(m.$t("common.showRange", { from: w.value, to: _.value, total: e.total })), 1),
        i("div", {
          ref_key: "sizeRef",
          ref: u,
          class: "g-pagination__size"
        }, [
          V(pe, {
            variant: "gray",
            open: d.value,
            onClick: k[0] || (k[0] = (v) => d.value = !d.value)
          }, {
            default: I(() => [
              N(x(e.limit), 1)
            ]),
            _: 1
          }, 8, ["open"]),
          d.value ? (a(), H(G1, {
            key: 0,
            class: "g-pagination__size-menu"
          }, {
            default: I(() => [
              (a(!0), l(U, null, G(c.value, (v) => (a(), H($1, {
                key: String(v.value),
                selected: Number(v.value) === e.limit,
                onClick: (R) => Z(v.value)
              }, {
                default: I(() => [
                  N(x(v.label), 1)
                ]),
                _: 2
              }, 1032, ["selected", "onClick"]))), 128))
            ]),
            _: 1
          })) : b("", !0)
        ], 512)
      ]),
      i("div", V0, [
        e.currentPage > 1 ? (a(), H(i1, {
          key: 0,
          variant: "gray",
          size: "md",
          "aria-label": m.$t("common.back"),
          onClick: k[1] || (k[1] = (v) => o("page-change", e.currentPage - 1))
        }, {
          default: I(() => [
            V(L0, { size: 16 })
          ]),
          _: 1
        }, 8, ["aria-label"])) : b("", !0),
        (a(!0), l(U, null, G(y.value, (v, R) => (a(), l("button", {
          key: `${v}-${R}`,
          type: "button",
          class: $(["g-pagination__page", {
            _active: v === e.currentPage,
            _ellipsis: v === "ellipsis"
          }]),
          disabled: v === "ellipsis",
          onClick: (T) => v !== "ellipsis" && o("page-change", v)
        }, x(v === "ellipsis" ? "…" : v), 11, H0))), 128)),
        V(i1, {
          variant: "gray",
          size: "md",
          disabled: r.value === 0 || e.currentPage >= r.value,
          "aria-label": m.$t("common.next"),
          onClick: k[2] || (k[2] = (v) => o("page-change", e.currentPage + 1))
        }, {
          default: I(() => [
            V(x0, { size: 16 })
          ]),
          _: 1
        }, 8, ["disabled", "aria-label"])
      ])
    ]));
  }
}), e3 = /* @__PURE__ */ g(Z0, [["__scopeId", "data-v-2b6bf883"]]), B0 = {
  key: 0,
  class: "g-panel__head"
}, S0 = {
  key: 0,
  class: "g-panel__icon"
}, R0 = { class: "g-panel__text" }, T0 = {
  key: 0,
  class: "g-panel__title"
}, E0 = {
  key: 1,
  class: "g-panel__subtitle"
}, D0 = {
  key: 1,
  class: "g-panel__actions"
}, A0 = { class: "g-panel__body" }, F0 = /* @__PURE__ */ h({
  __name: "GPanel",
  props: {
    title: {},
    subtitle: {},
    icon: {},
    fill: { type: Boolean }
  },
  setup(e) {
    return (n, t) => (a(), l("section", {
      class: $(["g-panel", { "g-panel--fill": e.fill }])
    }, [
      e.title || e.icon || n.$slots.actions ? (a(), l("header", B0, [
        e.icon ? (a(), l("span", S0, [
          (a(), H(K(e.icon), { size: 20 }))
        ])) : b("", !0),
        i("div", R0, [
          e.title ? (a(), l("h2", T0, x(e.title), 1)) : b("", !0),
          e.subtitle ? (a(), l("p", E0, x(e.subtitle), 1)) : b("", !0)
        ]),
        n.$slots.actions ? (a(), l("div", D0, [
          S(n.$slots, "actions", {}, void 0, !0)
        ])) : b("", !0)
      ])) : b("", !0),
      i("div", A0, [
        S(n.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), P0 = /* @__PURE__ */ g(F0, [["__scopeId", "data-v-063ab6fb"]]), O0 = { class: "g-property-list" }, U0 = /* @__PURE__ */ h({
  __name: "GPropertyList",
  setup(e) {
    return (n, t) => (a(), l("dl", O0, [
      S(n.$slots, "default")
    ]));
  }
}), N0 = { class: "g-property-row__label" }, q0 = {
  key: 0,
  class: "g-property-row__quote"
}, G0 = /* @__PURE__ */ h({
  __name: "GPropertyRow",
  props: {
    label: {},
    layout: { default: "default" },
    tone: { default: "default" }
  },
  setup(e) {
    const n = e, t = C(() => ({
      "g-property-row--wrap": n.layout === "wrap",
      "g-property-row--stack": n.layout === "stack",
      "g-property-row--comment": n.layout === "comment"
    })), s = C(() => ({
      "g-property-row__value--accent": n.tone === "accent",
      "g-property-row__value--danger": n.tone === "danger"
    }));
    return (o, c) => (a(), l("div", {
      class: $(["g-property-row", t.value])
    }, [
      i("dt", N0, x(e.label), 1),
      e.layout === "comment" ? (a(), l("dd", q0, [
        S(o.$slots, "default")
      ])) : (a(), l("dd", {
        key: 1,
        class: $(["g-property-row__value", s.value])
      }, [
        S(o.$slots, "default")
      ], 2))
    ], 2));
  }
}), j0 = ["aria-checked", "disabled"], W0 = {
  key: 0,
  class: "g-radio__dot",
  "aria-hidden": "true"
}, Q0 = /* @__PURE__ */ h({
  __name: "GRadio",
  props: {
    modelValue: { type: [String, Number, Boolean, null], default: null },
    value: { type: [String, Number, Boolean] },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: n }) {
    const t = e, s = n, o = C(() => t.modelValue === t.value), c = () => {
      t.disabled || t.value === void 0 || s("update:modelValue", t.value);
    };
    return (u, d) => (a(), l("button", {
      type: "button",
      role: "radio",
      class: $(["g-radio", { _checked: o.value, _disabled: e.disabled }]),
      "aria-checked": o.value,
      disabled: e.disabled,
      onClick: c
    }, [
      o.value ? (a(), l("span", W0)) : b("", !0)
    ], 10, j0));
  }
}), K0 = /* @__PURE__ */ g(Q0, [["__scopeId", "data-v-2cc9b45a"]]), Y0 = {
  class: "g-snackbar__icon",
  "aria-hidden": "true"
}, X0 = {
  key: 0,
  viewBox: "36.8333 36.8333 18.3334 18.3334",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, J0 = {
  key: 1,
  viewBox: "36.8333 136.833 18.3334 18.334",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, e2 = {
  key: 2,
  viewBox: "36.8333 233.833 18.3334 18.334",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, t2 = { class: "g-snackbar__body" }, n2 = {
  key: 0,
  class: "g-snackbar__title"
}, s2 = {
  key: 1,
  class: "g-snackbar__description"
}, a2 = ["aria-label"], o2 = /* @__PURE__ */ h({
  __name: "GSnackbar",
  props: {
    type: { default: "info" },
    title: { default: "" },
    description: { default: "" },
    closable: { type: Boolean, default: !0 }
  },
  emits: ["close"],
  setup(e, { emit: n }) {
    const t = n;
    return (s, o) => (a(), l("div", {
      class: $(["g-snackbar", `g-snackbar--${e.type}`]),
      role: "status"
    }, [
      i("span", Y0, [
        e.type === "success" ? (a(), l("svg", X0, [...o[1] || (o[1] = [
          i("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M53.5 45.9999C53.5 41.8578 50.1421 38.4999 46 38.4999C41.8578 38.4999 38.5 41.8578 38.5 45.9999C38.5 50.1421 41.8578 53.4999 46 53.4999C50.1421 53.4999 53.5 50.1421 53.5 45.9999ZM48.7832 42.8505C49.086 42.504 49.6126 42.468 49.9591 42.7708C50.3056 43.0736 50.3408 43.6002 50.0381 43.9467L45.4905 49.1493C45.3323 49.3304 45.1036 49.435 44.8631 49.435C44.6226 49.435 44.3939 49.3304 44.2357 49.1493L41.9619 46.5484C41.659 46.2019 41.6944 45.6754 42.0408 45.3725C42.3873 45.0696 42.9139 45.1049 43.2168 45.4514L44.8631 47.3346L48.7832 42.8505ZM55.1666 45.9999C55.1666 51.0625 51.0626 55.1666 46 55.1666C40.9374 55.1666 36.8333 51.0625 36.8333 45.9999C36.8333 40.9373 40.9374 36.8333 46 36.8333C51.0626 36.8333 55.1666 40.9373 55.1666 45.9999Z",
            fill: "currentColor"
          }, null, -1)
        ])])) : e.type === "error" ? (a(), l("svg", J0, [...o[2] || (o[2] = [
          i("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M53.5 146C53.5 141.858 50.1421 138.5 46 138.5C41.8578 138.5 38.5 141.858 38.5 146C38.5 150.142 41.8578 153.5 46 153.5C50.1421 153.5 53.5 150.142 53.5 146ZM47.4941 143.327C47.8196 143.002 48.3471 143.002 48.6725 143.327C48.9979 143.653 48.9979 144.18 48.6725 144.506L47.1784 146L48.6725 147.494C48.9979 147.819 48.9979 148.347 48.6725 148.672C48.3471 148.998 47.8196 148.998 47.4941 148.672L46 147.178L44.5058 148.672C44.1804 148.998 43.6529 148.998 43.3275 148.672C43.002 148.347 43.002 147.819 43.3275 147.494L44.8216 146L43.3275 144.506C43.002 144.18 43.002 143.653 43.3275 143.327C43.6529 143.002 44.1804 143.002 44.5058 143.327L46 144.822L47.4941 143.327ZM55.1666 146C55.1666 151.063 51.0626 155.167 46 155.167C40.9374 155.167 36.8333 151.063 36.8333 146C36.8333 140.937 40.9374 136.833 46 136.833C51.0626 136.833 55.1666 140.937 55.1666 146Z",
            fill: "currentColor"
          }, null, -1)
        ])])) : (a(), l("svg", e2, [...o[3] || (o[3] = [
          i("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M53.5 243C53.5 238.858 50.1421 235.5 46 235.5C41.8578 235.5 38.5 238.858 38.5 243C38.5 247.142 41.8578 250.5 46 250.5C50.1421 250.5 53.5 247.142 53.5 243ZM45.2391 246.333V242.583C45.2391 242.123 45.6123 241.75 46.0724 241.75C46.5326 241.75 46.9057 242.123 46.9057 242.583V246.333C46.9057 246.793 46.5326 247.167 46.0724 247.167C45.6123 247.166 45.2391 246.793 45.2391 246.333ZM46.0724 238.833C46.5326 238.833 46.9057 239.206 46.9057 239.667C46.9057 240.127 46.5326 240.5 46.0724 240.5H46.0643C45.604 240.5 45.231 240.127 45.2309 239.667C45.2309 239.206 45.604 238.833 46.0643 238.833H46.0724ZM55.1666 243C55.1666 248.063 51.0626 252.167 46 252.167C40.9374 252.167 36.8333 248.063 36.8333 243C36.8333 237.937 40.9374 233.833 46 233.833C51.0626 233.833 55.1666 237.937 55.1666 243Z",
            fill: "currentColor"
          }, null, -1)
        ])]))
      ]),
      i("div", t2, [
        e.title ? (a(), l("p", n2, x(e.title), 1)) : b("", !0),
        e.description ? (a(), l("p", s2, x(e.description), 1)) : b("", !0),
        S(s.$slots, "default", {}, void 0, !0)
      ]),
      e.closable ? (a(), l("button", {
        key: 0,
        type: "button",
        class: "g-snackbar__close",
        "aria-label": s.$t("common.close"),
        onClick: o[0] || (o[0] = (c) => t("close"))
      }, [...o[4] || (o[4] = [
        i("svg", {
          viewBox: "309.244 41.2441 9.512 9.5117",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          "aria-hidden": "true"
        }, [
          i("path", {
            d: "M317.577 41.2441C317.903 40.9186 318.43 40.9186 318.756 41.2441C319.081 41.5695 319.081 42.097 318.756 42.4225L315.178 45.9999L318.756 49.5774C319.081 49.9028 319.081 50.4304 318.756 50.7558C318.43 51.0812 317.903 51.0812 317.577 50.7558L314 47.1783L310.423 50.7558C310.097 51.0812 309.57 51.0812 309.244 50.7558C308.919 50.4304 308.919 49.9028 309.244 49.5774L312.822 45.9999L309.244 42.4225C308.919 42.097 308.919 41.5695 309.244 41.2441C309.57 40.9186 310.097 40.9186 310.423 41.2441L314 44.8216L317.577 41.2441Z",
            fill: "currentColor"
          })
        ], -1)
      ])], 8, a2)) : b("", !0)
    ], 2));
  }
}), t3 = /* @__PURE__ */ g(o2, [["__scopeId", "data-v-e8a813d5"]]), i2 = ["width", "height"], l2 = /* @__PURE__ */ h({
  __name: "CheckMini",
  props: {
    size: { default: 7 }
  },
  setup(e) {
    return (n, t) => (a(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: e.size,
      height: e.size,
      style: L(f(z)(e.size)),
      viewBox: "0 0 9 7",
      fill: "none",
      "aria-hidden": "true",
      class: "g-icon-check-mini"
    }, [...t[0] || (t[0] = [
      i("path", {
        d: "M8.14108 0.151825C8.33332 -0.0463506 8.64989 -0.0511308 8.84811 0.141082C9.04629 0.333324 9.05107 0.649894 8.85886 0.848114L3.52536 6.34811C3.4312 6.44513 3.30168 6.49997 3.16647 6.49997C3.03126 6.49992 2.90172 6.44519 2.80759 6.34811L0.141082 3.59811C-0.0511308 3.39989 -0.0463506 3.08332 0.151825 2.89108C0.350044 2.69887 0.666614 2.70365 0.858856 2.90182L3.16647 5.28171L8.14108 0.151825Z",
        fill: "currentColor"
      }, null, -1)
    ])], 12, i2));
  }
}), r2 = /* @__PURE__ */ g(l2, [["__scopeId", "data-v-a0197cbf"]]), c2 = ["width", "height"], d2 = /* @__PURE__ */ h({
  __name: "ClockMini",
  props: {
    size: { default: 11 }
  },
  setup(e) {
    return (n, t) => (a(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: e.size,
      height: e.size,
      style: L(f(z)(e.size)),
      viewBox: "0 0 11 11",
      fill: "none",
      "aria-hidden": "true",
      class: "g-icon-clock-mini"
    }, [...t[0] || (t[0] = [
      i("path", {
        d: "M10 5.5C10 3.01472 7.98528 1 5.5 1C3.01472 1 1 3.01472 1 5.5C1 7.98528 3.01472 10 5.5 10C7.98528 10 10 7.98528 10 5.5ZM5 2.75C5 2.47386 5.22386 2.25 5.5 2.25C5.77614 2.25 6 2.47386 6 2.75V5.29297L7.35352 6.64648C7.54878 6.84175 7.54878 7.15825 7.35352 7.35352C7.15825 7.54878 6.84175 7.54878 6.64648 7.35352L5.14648 5.85352C5.05272 5.75975 5 5.63261 5 5.5V2.75ZM11 5.5C11 8.53757 8.53757 11 5.5 11C2.46243 11 0 8.53757 0 5.5C0 2.46243 2.46243 0 5.5 0C8.53757 0 11 2.46243 11 5.5Z",
        fill: "currentColor"
      }, null, -1)
    ])], 12, c2));
  }
}), u2 = /* @__PURE__ */ g(d2, [["__scopeId", "data-v-796533ec"]]), C2 = ["width", "height"], h2 = /* @__PURE__ */ h({
  __name: "CloseMini",
  props: {
    size: { default: 6 }
  },
  setup(e) {
    return (n, t) => (a(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: e.size,
      height: e.size,
      style: L(f(z)(e.size)),
      viewBox: "0 0 6 6",
      fill: "none",
      "aria-hidden": "true",
      class: "g-icon-close-mini"
    }, [...t[0] || (t[0] = [
      i("path", {
        d: "M5.14645 0.146447C5.34171 -0.0488155 5.65822 -0.0488155 5.85348 0.146447C6.04874 0.341709 6.04874 0.658216 5.85348 0.853478L3.70699 2.99996L5.85348 5.14645C6.04874 5.34171 6.04874 5.65822 5.85348 5.85348C5.65822 6.04874 5.34171 6.04874 5.14645 5.85348L2.99996 3.70699L0.853478 5.85348C0.658216 6.04874 0.341709 6.04874 0.146447 5.85348C-0.0488155 5.65822 -0.0488155 5.34171 0.146447 5.14645L2.29293 2.99996L0.146447 0.853478C-0.0488155 0.658216 -0.0488155 0.341709 0.146447 0.146447C0.341709 -0.0488155 0.658216 -0.0488155 0.853478 0.146447L2.99996 2.29293L5.14645 0.146447Z",
        fill: "currentColor"
      }, null, -1)
    ])], 12, C2));
  }
}), f2 = /* @__PURE__ */ g(h2, [["__scopeId", "data-v-ea3bb59d"]]), m2 = ["width", "height"], g2 = 13 / 12, p2 = /* @__PURE__ */ h({
  __name: "ReverseLeft",
  props: {
    size: { default: void 0 },
    width: { default: void 0 },
    height: { default: void 0 }
  },
  setup(e) {
    const n = e, t = C(() => n.width ?? n.size ?? 12), s = C(() => {
      if (n.height != null) return n.height;
      if (n.width != null) return n.width;
      if (n.size != null) {
        const o = typeof n.size == "number" ? n.size : Number(n.size);
        return Number.isFinite(o) ? o * g2 : n.size;
      }
      return 13;
    });
    return (o, c) => (a(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: t.value,
      height: s.value,
      style: L(f(z)(t.value, s.value)),
      viewBox: "0 0 12 13",
      fill: "none",
      "aria-hidden": "true",
      class: "g-icon-reverse-left"
    }, [...c[0] || (c[0] = [
      i("path", {
        d: "M10 4.66639C9.99984 6.5072 8.50751 7.99972 6.66667 7.99972H2.27604L3.9668 6.30897C4.2269 6.04865 4.22693 5.62656 3.9668 5.36626C3.70645 5.10591 3.28379 5.10591 3.02344 5.36626L0.195312 8.19439C-0.065037 8.45474 -0.065037 8.8774 0.195312 9.13775L3.02344 11.9659C3.28379 12.2262 3.70645 12.2262 3.9668 11.9659C4.22691 11.7056 4.22691 11.2835 3.9668 11.0232L2.27669 9.33306H6.66667C9.24389 9.33306 11.3332 7.24358 11.3333 4.66639C11.3333 2.08906 9.24399 -0.000274677 6.66667 -0.000275021H0.666667C0.298477 -0.000275021 0 0.298202 0 0.666392C0.000163501 1.03444 0.298578 1.33306 0.666667 1.33306H6.66667C8.50761 1.33306 10 2.82544 10 4.66639Z",
        fill: "currentColor"
      }, null, -1)
    ])], 12, m2));
  }
}), v2 = /* @__PURE__ */ g(p2, [["__scopeId", "data-v-263e40f3"]]), w2 = { class: "g-status-badge__status" }, _2 = {
  class: "g-status-badge__icon",
  "aria-hidden": "true"
}, b2 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 12 12",
  fill: "none",
  width: "12",
  height: "12"
}, y2 = ["d"], L2 = { class: "g-status-badge__text" }, B1 = "M10.5 6C10.5 3.5147 8.4853 1.5 6 1.5C3.5147 1.5 1.5 3.5147 1.5 6C1.5 8.4853 3.5147 10.5 6 10.5C8.4853 10.5 10.5 8.4853 10.5 6ZM5.5 3.25C5.5 2.9739 5.7239 2.75 6 2.75C6.2761 2.75 6.5 2.9739 6.5 3.25V5.793L7.8535 7.1465C8.0488 7.3417 8.0488 7.6583 7.8535 7.8535C7.6583 8.0488 7.3417 8.0488 7.1465 7.8535L5.6465 6.3535C5.5527 6.2597 5.5 6.1326 5.5 6V3.25ZM11.5 6C11.5 9.0376 9.0376 11.5 6 11.5C2.9624 11.5 0.5 9.0376 0.5 6C0.5 2.9624 2.9624 0.5 6 0.5C9.0376 0.5 11.5 2.9624 11.5 6Z", Ze = "M10.5 6C10.5 3.5147 8.4853 1.5 6 1.5C3.5147 1.5 1.5 3.5147 1.5 6C1.5 8.4853 3.5147 10.5 6 10.5C8.4853 10.5 10.5 8.4853 10.5 6ZM7.6699 4.1104C7.8516 3.9025 8.1676 3.8808 8.3755 4.0625C8.5834 4.2442 8.6045 4.5602 8.4229 4.7681L5.6943 7.8896C5.5994 7.9983 5.4621 8.061 5.3179 8.061C5.1736 8.061 5.0364 7.9983 4.9414 7.8896L3.5771 6.3291C3.3954 6.1212 3.4166 5.8053 3.6245 5.6235C3.8324 5.4418 4.1483 5.463 4.3301 5.6709L5.3179 6.8008L7.6699 4.1104ZM11.5 6C11.5 9.0376 9.0376 11.5 6 11.5C2.9624 11.5 0.5 9.0376 0.5 6C0.5 2.9624 2.9624 0.5 6 0.5C9.0376 0.5 11.5 2.9624 11.5 6Z", Be = "M9.04 8.078V7.118H8.0801C7.8039 7.118 7.5801 6.894 7.5801 6.618C7.5801 6.342 7.8039 6.118 8.0801 6.118H9.04V5.158C9.0401 4.882 9.2639 4.658 9.54 4.658C9.8161 4.658 10.04 4.882 10.04 5.158V6.118H11C11.2761 6.118 11.5 6.342 11.5 6.618C11.5 6.894 11.2761 7.118 11 7.118H10.04V8.078C10.04 8.354 9.8161 8.578 9.54 8.578C9.2639 8.578 9.0401 8.354 9.04 8.078ZM10.5 3.96V3.5H1.5V5.1C1.5 5.528 1.5002 5.819 1.5186 6.044C1.5365 6.264 1.569 6.376 1.6089 6.454C1.7048 6.642 1.8578 6.795 2.0459 6.891C2.1241 6.931 2.2364 6.964 2.4556 6.981C2.6806 7 2.9717 7 3.3999 7H6.4302C6.7062 7 6.9302 7.224 6.9302 7.5C6.9302 7.776 6.7062 8 6.4302 8H3.3999C2.9882 8 2.6492 8.001 2.374 7.978C2.093 7.955 1.8345 7.906 1.5918 7.782C1.2155 7.59 0.9095 7.284 0.7178 6.908C0.5941 6.666 0.5449 6.407 0.522 6.126C0.4995 5.851 0.5 5.512 0.5 5.1V2.8999C0.5 2.4882 0.4995 2.1492 0.522 1.874C0.5449 1.593 0.5941 1.3345 0.7178 1.0918C0.9095 0.7155 1.2155 0.4095 1.5918 0.2178C1.8345 0.0941 2.093 0.0449 2.374 0.022C2.6492 0 2.9882 0 3.3999 0H8.6001C9.0118 0 9.3508 0 9.626 0.022C9.907 0.0449 10.1656 0.0941 10.4082 0.2178C10.7845 0.4095 11.0905 0.7155 11.2822 1.0918C11.4059 1.3345 11.4551 1.593 11.478 1.874C11.5005 2.1492 11.5 2.4882 11.5 2.8999V3.96C11.4999 4.236 11.2761 4.46 11 4.46C10.7239 4.46 10.5001 4.236 10.5 3.96ZM3.3999 1C2.9717 1 2.6806 1.0002 2.4556 1.0186C2.2364 1.0365 2.1241 1.069 2.0459 1.1089C1.8578 1.2048 1.7048 1.3578 1.6089 1.5459C1.569 1.6241 1.5365 1.7364 1.5186 1.9556C1.5066 2.1023 1.5035 2.2773 1.502 2.5H10.498C10.4965 2.2773 10.4934 2.1023 10.4814 1.9556C10.4635 1.7364 10.431 1.6241 10.3911 1.5459C10.2952 1.3578 10.1422 1.2048 9.9541 1.1089C9.8759 1.069 9.7636 1.0365 9.5444 1.0186C9.3194 1.0002 9.0283 1 8.6001 1H3.3999Z", k2 = "M11 5.623C11.276 5.623 11.4999 5.847 11.5 6.123C11.5 6.399 11.2761 6.623 11 6.623H8.0801C7.8039 6.623 7.5801 6.399 7.5801 6.123C7.5802 5.847 7.804 5.623 8.0801 5.623H11ZM10.5 3.96V3.5H1.5V5.1C1.5 5.528 1.5002 5.819 1.5186 6.044C1.5365 6.264 1.569 6.376 1.6089 6.454C1.7048 6.642 1.8578 6.795 2.0459 6.891C2.1241 6.931 2.2364 6.964 2.4556 6.981C2.6806 7 2.9717 7 3.3999 7H6.4302C6.7062 7 6.9302 7.224 6.9302 7.5C6.9302 7.776 6.7062 8 6.4302 8H3.3999C2.9882 8 2.6492 8.001 2.374 7.978C2.093 7.955 1.8345 7.906 1.5918 7.782C1.2155 7.59 0.9095 7.284 0.7178 6.908C0.5941 6.666 0.5449 6.407 0.522 6.126C0.4995 5.851 0.5 5.512 0.5 5.1V2.9C0.5 2.488 0.4995 2.149 0.522 1.874C0.5449 1.593 0.5941 1.334 0.7178 1.092C0.9095 0.716 1.2155 0.41 1.5918 0.218C1.8345 0.094 2.093 0.045 2.374 0.022C2.6492 0 2.9882 0 3.3999 0H8.6001C9.0118 0 9.3508 0 9.626 0.022C9.907 0.045 10.1656 0.094 10.4082 0.218C10.7845 0.41 11.0905 0.716 11.2822 1.092C11.4059 1.334 11.4551 1.593 11.478 1.874C11.5005 2.149 11.5 2.488 11.5 2.9V3.96C11.4999 4.236 11.2761 4.46 11 4.46C10.7239 4.46 10.5001 4.236 10.5 3.96ZM3.3999 1C2.9717 1 2.6806 1 2.4556 1.019C2.2364 1.036 2.1241 1.069 2.0459 1.109C1.8578 1.205 1.7048 1.358 1.6089 1.546C1.569 1.624 1.5365 1.736 1.5186 1.956C1.5066 2.102 1.5035 2.277 1.502 2.5H10.498C10.4965 2.277 10.4934 2.102 10.4814 1.956C10.4635 1.736 10.431 1.624 10.3911 1.546C10.2952 1.358 10.1422 1.205 9.9541 1.109C9.8759 1.069 9.7636 1.036 9.5444 1.019C9.3194 1 9.0283 1 8.6001 1H3.3999Z", $2 = "M10.6465 8.246C10.8417 8.051 11.1583 8.051 11.3535 8.246C11.5488 8.441 11.5488 8.758 11.3535 8.953L10.5068 9.8L11.3535 10.646C11.5488 10.842 11.5488 11.158 11.3535 11.354C11.1583 11.549 10.8417 11.549 10.6465 11.354L9.7998 10.507L8.9531 11.354C8.7579 11.549 8.4414 11.549 8.2461 11.354C8.0508 11.158 8.0508 10.842 8.2461 10.646L9.0928 9.8L8.2461 8.953C8.0508 8.758 8.0508 8.441 8.2461 8.246C8.4414 8.051 8.7579 8.051 8.9531 8.246L9.7998 9.093L10.6465 8.246ZM5.5 3.25C5.5 2.974 5.7239 2.75 6 2.75C6.2761 2.75 6.5 2.974 6.5 3.25V5.793L7.8535 7.146C8.0488 7.342 8.0488 7.658 7.8535 7.854C7.6583 8.049 7.3417 8.049 7.1465 7.854L5.6465 6.354C5.5527 6.26 5.5 6.133 5.5 6V3.25ZM10.5 6C10.5 3.515 8.4853 1.5 6 1.5C3.5147 1.5 1.5 3.515 1.5 6C1.5 8.485 3.5147 10.5 6 10.5C6.1522 10.5 6.3026 10.492 6.4507 10.478C6.7254 10.45 6.9702 10.651 6.9976 10.926C7.0248 11.201 6.8241 11.445 6.5493 11.473C6.3685 11.491 6.1853 11.5 6 11.5C2.9624 11.5 0.5 9.038 0.5 6C0.5 2.962 2.9624 0.5 6 0.5C9.0376 0.5 11.5 2.962 11.5 6C11.5 6.185 11.4906 6.368 11.4727 6.549C11.4454 6.824 11.2006 7.025 10.9258 6.998C10.6511 6.97 10.4503 6.725 10.4775 6.451C10.4922 6.303 10.5 6.152 10.5 6Z", x2 = "M10.5 6C10.5 3.515 8.4853 1.5 6 1.5C4.9375 1.5 3.9612 1.869 3.1914 2.484L9.5151 8.808C10.1309 8.038 10.5 7.062 10.5 6ZM1.5 6C1.5 8.485 3.5147 10.5 6 10.5C7.0625 10.5 8.0383 10.131 8.8081 9.515L2.4844 3.191C1.8686 3.961 1.5 4.937 1.5 6ZM11.5 6C11.5 9.038 9.0376 11.5 6 11.5C2.9624 11.5 0.5 9.038 0.5 6C0.5 2.962 2.9624 0.5 6 0.5C9.0376 0.5 11.5 2.962 11.5 6Z", Se = "M10.5 6C10.5 3.515 8.4853 1.5 6 1.5C3.5147 1.5 1.5 3.515 1.5 6C1.5 8.485 3.5147 10.5 6 10.5C8.4853 10.5 10.5 8.485 10.5 6ZM6.8965 4.396C7.0917 4.201 7.4083 4.201 7.6035 4.396C7.7988 4.592 7.7988 4.908 7.6035 5.104L6.707 6L7.6035 6.896C7.7988 7.092 7.7988 7.408 7.6035 7.604C7.4083 7.799 7.0917 7.799 6.8965 7.604L6 6.707L5.1035 7.604C4.9083 7.799 4.5917 7.799 4.3965 7.604C4.2012 7.408 4.2012 7.092 4.3965 6.896L5.293 6L4.3965 5.104C4.2012 4.908 4.2012 4.592 4.3965 4.396C4.5917 4.201 4.9083 4.201 5.1035 4.396L6 5.293L6.8965 4.396ZM11.5 6C11.5 9.038 9.0376 11.5 6 11.5C2.9624 11.5 0.5 9.038 0.5 6C0.5 2.962 2.9624 0.5 6 0.5C9.0376 0.5 11.5 2.962 11.5 6Z", M2 = "M9.5001 3.953C9.5001 3.276 9.4915 3.077 9.4288 2.92C9.3657 2.762 9.2632 2.623 9.1314 2.516C9.0003 2.409 8.813 2.341 8.1666 2.139L6.567 1.639C6.2844 1.551 6.2011 1.527 6.1212 1.517C6.0409 1.507 5.9593 1.507 5.879 1.517C5.799 1.527 5.7158 1.551 5.4332 1.639L3.8336 2.139C3.1872 2.341 2.9999 2.409 2.8687 2.516C2.737 2.623 2.6345 2.762 2.5714 2.92C2.5087 3.077 2.5001 3.276 2.5001 3.953V4.392C2.5001 5.587 2.5032 6.107 2.6143 6.591C2.7305 7.097 2.9331 7.579 3.2135 8.016C3.482 8.434 3.8518 8.799 4.7066 9.635C4.99 9.912 5.1825 10.1 5.3429 10.235C5.499 10.366 5.5939 10.419 5.671 10.446C5.8841 10.52 6.1161 10.52 6.3292 10.446C6.4062 10.419 6.5012 10.366 6.6573 10.235C6.8177 10.1 7.0102 9.912 7.2935 9.635C8.1484 8.799 8.5182 8.434 8.7867 8.016C9.0671 7.579 9.2697 7.097 9.3858 6.591C9.497 6.107 9.5001 5.587 9.5001 4.392V3.953ZM6.8287 4.054C7.0239 3.859 7.3405 3.859 7.5357 4.054C7.731 4.25 7.731 4.566 7.5357 4.761L6.7066 5.59L7.5357 6.419C7.731 6.614 7.731 6.931 7.5357 7.126C7.3405 7.321 7.0239 7.321 6.8287 7.126L6.0001 6.297L5.1715 7.126C4.9763 7.321 4.6597 7.321 4.4644 7.126C4.2692 6.931 4.2692 6.614 4.4644 6.419L5.2931 5.59L4.4644 4.761C4.2692 4.566 4.2692 4.25 4.4644 4.054C4.6597 3.859 4.9762 3.859 5.1715 4.054L6.0001 4.883L6.8287 4.054ZM10.5001 4.392C10.5001 5.542 10.5029 6.195 10.3604 6.815C10.2185 7.434 9.9707 8.023 9.628 8.556C9.284 9.092 8.815 9.547 7.9928 10.351C7.7205 10.617 7.4963 10.836 7.2999 11.001C7.0992 11.169 6.8971 11.307 6.6583 11.39C6.232 11.539 5.7681 11.539 5.3419 11.39C5.1031 11.307 4.9009 11.169 4.7003 11.001C4.5039 10.836 4.2797 10.617 4.0074 10.351C3.1852 9.547 2.7162 9.092 2.3722 8.556C2.0295 8.023 1.7817 7.434 1.6397 6.815C1.4972 6.195 1.5001 5.542 1.5001 4.392V3.953C1.5001 3.363 1.4915 2.928 1.6432 2.548C1.7694 2.233 1.9738 1.954 2.2374 1.74C2.5541 1.482 2.9721 1.361 3.5352 1.185L5.1349 0.685C5.3838 0.607 5.5671 0.548 5.7584 0.524C5.9189 0.505 6.0812 0.505 6.2418 0.524C6.4331 0.548 6.6164 0.607 6.8653 0.685L8.4649 1.185C9.0281 1.361 9.4461 1.482 9.7628 1.74C10.0264 1.954 10.2308 2.233 10.357 2.548C10.5086 2.928 10.5001 3.363 10.5001 3.953V4.392Z", z2 = "M8.0801 6.118H11C11.2761 6.118 11.5 6.342 11.5 6.618C11.5 6.894 11.2761 7.118 11 7.118H8.0801C7.8039 7.118 7.5801 6.894 7.5801 6.618C7.5801 6.342 7.8039 6.118 8.0801 6.118ZM10.5 3.96V3.5H1.5V5.1C1.5 5.528 1.5002 5.819 1.5186 6.044C1.5365 6.264 1.569 6.376 1.6089 6.454C1.7048 6.642 1.8578 6.795 2.0459 6.891C2.1241 6.931 2.2364 6.964 2.4556 6.981C2.6806 7 2.9717 7 3.3999 7H6.4302C6.7062 7 6.9302 7.224 6.9302 7.5C6.9302 7.776 6.7062 8 6.4302 8H3.3999C2.9882 8 2.6492 8.001 2.374 7.978C2.093 7.955 1.8345 7.906 1.5918 7.782C1.2155 7.59 0.9095 7.284 0.7178 6.908C0.5941 6.666 0.5449 6.407 0.522 6.126C0.4995 5.851 0.5 5.512 0.5 5.1V2.8999C0.5 2.4882 0.4995 2.1492 0.522 1.874C0.5449 1.593 0.5941 1.3345 0.7178 1.0918C0.9095 0.7155 1.2155 0.4095 1.5918 0.2178C1.8345 0.0941 2.093 0.0449 2.374 0.022C2.6492 0 2.9882 0 3.3999 0H8.6001C9.0118 0 9.3508 0 9.626 0.022C9.907 0.0449 10.1656 0.0941 10.4082 0.2178C10.7845 0.4095 11.0905 0.7155 11.2822 1.0918C11.4059 1.3345 11.4551 1.593 11.478 1.874C11.5005 2.1492 11.5 2.4882 11.5 2.8999V3.96C11.4999 4.236 11.2761 4.46 11 4.46C10.7239 4.46 10.5001 4.236 10.5 3.96ZM3.3999 1C2.9717 1 2.6806 1.0002 2.4556 1.0186C2.2364 1.0365 2.1241 1.069 2.0459 1.1089C1.8578 1.2048 1.7048 1.3578 1.6089 1.5459C1.569 1.6241 1.5365 1.7364 1.5186 1.9556C1.5066 2.1023 1.5035 2.2773 1.502 2.5H10.498C10.4965 2.2773 10.4934 2.1023 10.4814 1.9556C10.4635 1.7364 10.431 1.6241 10.3911 1.5459C10.2952 1.3578 10.1422 1.2048 9.9541 1.1089C9.8759 1.069 9.7636 1.0365 9.5444 1.0186C9.3194 1.0002 9.0283 1 8.6001 1H3.3999Z", I2 = /* @__PURE__ */ h({
  __name: "GStatusBadge",
  props: {
    domain: {},
    status: {},
    label: {},
    info: {},
    infoTone: {},
    infoIcon: {}
  },
  setup(e) {
    const n = e, { t } = j(), s = C(
      () => n.status === "UNDERPAID" ? t("invoices.resolution.underpaidHint") : ""
    ), o = {
      ACTIVE: { icon: B1, tone: "blue", defaultLabel: "ACTIVE" },
      COMPLETED: { icon: Ze, tone: "green", defaultLabel: "COMPLETED" },
      CREATED: { icon: Be, tone: "purple", defaultLabel: "CREATED" },
      OVERPAID: { icon: Be, tone: "purple", defaultLabel: "OVERPAID" },
      UNDERPAID: { icon: z2, tone: "orange", defaultLabel: "UNDERPAID" },
      CANCELED: { icon: k2, tone: "orange", defaultLabel: "CANCELED" },
      TIMEOUT: { icon: $2, tone: "amber", defaultLabel: "TIMEOUT" },
      VOID: { icon: x2, tone: "gray", defaultLabel: "VOID" },
      ERROR: { icon: Se, tone: "red", defaultLabel: "ERROR" },
      AML_FAILED: { icon: M2, tone: "danger", defaultLabel: "AML FAILED" }
    }, c = {
      ACTIVE: { icon: B1, tone: "blue", defaultLabel: "ACTIVE" },
      TIMEOUT: { icon: B1, tone: "amber", defaultLabel: "TIMEOUT" }
    }, u = {
      created: { icon: B1, tone: "gray", defaultLabel: "created" },
      paid: { icon: Ze, tone: "green", defaultLabel: "paid" },
      rejected: { icon: Se, tone: "danger", defaultLabel: "rejected" }
    }, d = C(() => n.domain === "invoice" ? o[n.status] ?? o.ACTIVE : n.domain === "payment" ? c[n.status] ?? c.ACTIVE : u[n.status] ?? u.created), r = C(() => n.label ?? d.value.defaultLabel), w = C(
      () => n.infoTone ? `g-status-badge__info--${n.infoTone}` : void 0
    ), _ = C(() => {
      if (n.infoIcon === "credit") return r2;
      if (n.infoIcon === "refund") return v2;
      if (n.infoIcon === "writtenOff") return f2;
      if (n.infoIcon === "awaiting") return u2;
    });
    return (p, y) => (a(), l("span", {
      class: $(["g-status-badge", [`g-status-badge--${d.value.tone}`, { "g-status-badge--stacked": !!e.info }]])
    }, [
      i("span", w2, [
        i("span", _2, [
          (a(), l("svg", b2, [
            i("path", {
              d: d.value.icon,
              fill: "currentColor"
            }, null, 8, y2)
          ]))
        ]),
        i("span", L2, x(r.value), 1),
        s.value ? (a(), H(Ye, {
          key: 0,
          text: s.value,
          "aria-label": s.value
        }, null, 8, ["text", "aria-label"])) : b("", !0)
      ]),
      e.info ? (a(), l("span", {
        key: 0,
        class: $(["g-status-badge__info", w.value])
      }, [
        _.value ? (a(), H(K(_.value), { key: 0 })) : b("", !0),
        N(" " + x(e.info), 1)
      ], 2)) : b("", !0)
    ], 2));
  }
}), V2 = /* @__PURE__ */ g(I2, [["__scopeId", "data-v-8b5d5e0e"]]), H2 = ["value", "placeholder", "disabled", "readonly", "name", "id", "rows", "maxlength"], Z2 = {
  key: 0,
  class: "g-textarea__counter",
  "aria-hidden": "true"
}, B2 = /* @__PURE__ */ h({
  __name: "GTextarea",
  props: {
    modelValue: {},
    placeholder: { default: "" },
    maxlength: {},
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    rows: { default: 1 },
    name: {},
    id: {},
    class: { default: "" }
  },
  emits: ["update:modelValue", "focus", "blur"],
  setup(e, { expose: n, emit: t }) {
    const s = e, o = t, c = E(null), u = C(() => typeof s.maxlength == "number" && s.maxlength > 0), d = C(() => (s.modelValue ?? "").length), r = C(() => {
      const v = [];
      return s.class && v.push(...l1(s.class)), u.value && v.push("_has-counter"), s.disabled && v.push("_disabled"), v.join(" ");
    }), w = (v) => u.value ? v.slice(0, s.maxlength) : v, _ = () => {
      const v = c.value;
      v && (v.style.height = "0", v.style.height = `${Math.max(60, v.scrollHeight)}px`);
    };
    e1(
      () => s.modelValue,
      (v) => {
        if (u.value && v != null) {
          const R = w(v);
          R !== v && o("update:modelValue", R);
        }
        g1(_);
      },
      { immediate: !0 }
    ), u1(_);
    const p = (v) => {
      const R = v.target, T = w(R.value);
      T !== R.value && (R.value = T), o("update:modelValue", T), _();
    }, y = (v) => {
      if (!u.value) return;
      const R = v.clipboardData?.getData("text") ?? "";
      if (!R) return;
      const T = v.target, P = T.selectionStart ?? 0, D = T.selectionEnd ?? 0, A = s.modelValue ?? "", n1 = A.slice(0, P) + R + A.slice(D), X = w(n1);
      if (n1.length === X.length) return;
      v.preventDefault(), T.value = X, o("update:modelValue", X);
      const s1 = Math.min(P + R.length, X.length);
      g1(() => T.setSelectionRange(s1, s1));
    }, Z = (v) => {
      o("focus", v);
    }, m = (v) => {
      o("blur", v);
    };
    return n({ focus: () => {
      c.value?.focus();
    }, textareaRef: c }), (v, R) => (a(), l("div", {
      class: $(["g-textarea", r.value])
    }, [
      i("textarea", {
        ref_key: "textareaRef",
        ref: c,
        class: "g-textarea__control",
        value: e.modelValue ?? "",
        placeholder: e.placeholder,
        disabled: e.disabled,
        readonly: e.readonly,
        name: e.name,
        id: e.id,
        rows: e.rows,
        maxlength: e.maxlength,
        onInput: p,
        onPaste: y,
        onFocus: Z,
        onBlur: m
      }, null, 40, H2),
      u.value ? (a(), l("span", Z2, x(d.value) + "/" + x(e.maxlength), 1)) : b("", !0)
    ], 2));
  }
}), S2 = /* @__PURE__ */ g(B2, [["__scopeId", "data-v-798c15a3"]]), R2 = ["aria-checked", "disabled"], T2 = /* @__PURE__ */ h({
  __name: "GToggle",
  props: {
    modelValue: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: n }) {
    const t = e, s = n, o = () => {
      t.disabled || s("update:modelValue", !t.modelValue);
    };
    return (c, u) => (a(), l("button", {
      type: "button",
      role: "switch",
      class: $(["g-toggle", { _on: e.modelValue, _disabled: e.disabled }]),
      "aria-checked": e.modelValue,
      disabled: e.disabled,
      onClick: o
    }, [...u[0] || (u[0] = [
      i("span", {
        class: "g-toggle__knob",
        "aria-hidden": "true"
      }, null, -1)
    ])], 10, R2));
  }
}), E2 = /* @__PURE__ */ g(T2, [["__scopeId", "data-v-6460e692"]]), D2 = {
  key: 1,
  class: "flex items-center space-x-3"
}, A2 = {
  key: 0,
  class: "icon-container"
}, F2 = { class: "header-content" }, P2 = /* @__PURE__ */ h({
  __name: "GCard",
  props: {
    title: {},
    description: {},
    icon: {},
    iconClass: { default: "" },
    cardClass: { default: "" },
    size: { default: "md" },
    animated: { type: Boolean, default: !0 },
    hoverable: { type: Boolean, default: !0 },
    bordered: { type: Boolean, default: !0 }
  },
  setup(e) {
    const n = e, t = C(() => {
      const r = ["g-card"];
      return r.push(`g-card--${n.size}`), n.animated && r.push("g-card--animated"), n.hoverable && r.push("g-card--hoverable"), n.cardClass && r.push(n.cardClass), n.bordered && r.push("g-card--bordered"), r.join(" ");
    }), s = C(() => n.iconClass ? n.iconClass : "g-card__icon text-2xl text-gray-600"), o = C(() => "g-card__title text-lg font-semibold text-gray-800"), c = C(() => "g-card__description text-sm text-gray-500"), u = C(() => {
      const r = ["g-card__content"];
      switch (n.size) {
        case "sm":
          r.push("p-4");
          break;
        case "lg":
          r.push("p-8");
          break;
        default:
          r.push("p-6");
      }
      return r.join(" ");
    }), d = C(() => {
      const r = ["g-card__footer"];
      switch (n.size) {
        case "sm":
          r.push("px-4 py-3");
          break;
        case "lg":
          r.push("px-8 py-6");
          break;
        default:
          r.push("px-6 py-4");
      }
      return r.join(" ");
    });
    return (r, w) => (a(), l("div", {
      class: $(t.value)
    }, [
      r.$slots.header ? S(r.$slots, "header", {}, void 0, !0, 0) : e.title || e.icon ? (a(), l("div", D2, [
        e.icon ? (a(), l("div", A2, [
          V(Y, {
            name: e.icon,
            class: $(s.value)
          }, null, 8, ["name", "class"])
        ])) : b("", !0),
        i("div", F2, [
          e.title ? (a(), l("h3", {
            key: 0,
            class: $(o.value)
          }, x(e.title), 3)) : b("", !0),
          e.description ? (a(), l("p", {
            key: 1,
            class: $(c.value)
          }, x(e.description), 3)) : b("", !0)
        ])
      ])) : b("", !0),
      i("div", {
        class: $(u.value)
      }, [
        S(r.$slots, "default", {}, void 0, !0)
      ], 2),
      r.$slots.footer ? (a(), l("div", {
        key: 2,
        class: $(d.value)
      }, [
        S(r.$slots, "footer", {}, void 0, !0)
      ], 2)) : b("", !0)
    ], 2));
  }
}), O2 = /* @__PURE__ */ g(P2, [["__scopeId", "data-v-85d34d1e"]]), U2 = ["type", "disabled"], N2 = {
  key: 0,
  class: "g-button__leading"
}, q2 = { class: "g-button__content" }, G2 = {
  key: 1,
  class: "g-button__trailing"
}, j2 = {
  key: 2,
  class: "g-button__loading"
}, W2 = {
  key: 3,
  class: "g-button__success"
}, Q2 = /* @__PURE__ */ h({
  __name: "GButton",
  props: {
    type: { default: "button" },
    disabled: { type: Boolean, default: !1 },
    loading: { type: Boolean, default: !1 },
    success: { type: Boolean, default: !1 },
    size: { default: "md" },
    variant: { default: "primary" },
    shape: { default: "default" },
    leadingIcon: {},
    trailingIcon: {},
    class: { default: "" },
    block: { type: Boolean, default: !1 },
    animated: { type: Boolean, default: !0 },
    hoverable: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(e, { emit: n }) {
    const t = e, s = n, o = C(() => {
      const r = ["g-button"];
      return r.push(`g-button--${t.size}`), r.push(`g-button--${t.variant}`), r.push(`g-button--${t.shape}`), t.disabled && r.push("g-button--disabled"), t.loading && r.push("g-button--loading"), t.success && r.push("g-button--success"), t.block && r.push("g-button--block"), t.animated && r.push("g-button--animated"), t.hoverable && r.push("g-button--hoverable"), t.class && r.push(...l1(t.class)), r.join(" ");
    }), c = C(() => {
      const r = ["g-button__icon", "g-button__icon--leading"];
      switch (t.size) {
        case "xs":
          r.push("text-xs");
          break;
        case "sm":
          r.push("text-sm");
          break;
        case "md":
          r.push("text-base");
          break;
        case "lg":
          r.push("text-lg");
          break;
        case "xl":
          r.push("text-xl");
          break;
      }
      return r.join(" ");
    }), u = C(() => {
      const r = ["g-button__icon", "g-button__icon--trailing"];
      switch (t.size) {
        case "xs":
          r.push("text-xs");
          break;
        case "sm":
          r.push("text-sm");
          break;
        case "md":
          r.push("text-base");
          break;
        case "lg":
          r.push("text-lg");
          break;
        case "xl":
          r.push("text-xl");
          break;
      }
      return r.join(" ");
    }), d = (r) => {
      !t.disabled && !t.loading && s("click", r);
    };
    return (r, w) => (a(), l("button", {
      type: e.type,
      disabled: e.disabled || e.loading,
      class: $(o.value),
      onClick: d
    }, [
      r.$slots.leading || e.leadingIcon ? (a(), l("span", N2, [
        S(r.$slots, "leading", {}, () => [
          e.leadingIcon ? (a(), H(Y, {
            key: 0,
            name: e.leadingIcon,
            class: $(c.value)
          }, null, 8, ["name", "class"])) : b("", !0)
        ], !0)
      ])) : b("", !0),
      i("span", q2, [
        S(r.$slots, "default", {}, void 0, !0)
      ]),
      r.$slots.trailing || e.trailingIcon ? (a(), l("span", G2, [
        S(r.$slots, "trailing", {}, () => [
          e.trailingIcon ? (a(), H(Y, {
            key: 0,
            name: e.trailingIcon,
            class: $(u.value)
          }, null, 8, ["name", "class"])) : b("", !0)
        ], !0)
      ])) : b("", !0),
      e.loading ? (a(), l("span", j2, [
        V(Y, {
          name: "i-heroicons-arrow-path",
          class: "animate-spin"
        })
      ])) : b("", !0),
      e.success ? (a(), l("span", W2, [
        V(Y, {
          name: "i-heroicons-check-circle",
          class: "animate-bounce-in"
        })
      ])) : b("", !0)
    ], 10, U2));
  }
}), j1 = /* @__PURE__ */ g(Q2, [["__scopeId", "data-v-007b555f"]]), K2 = {
  key: 0,
  class: "g-link-copy"
}, Y2 = {
  key: 1,
  class: "g-link-copy flex items-center gap-2"
}, X2 = { class: "g-link-copy__text truncate" }, J2 = /* @__PURE__ */ h({
  __name: "GLinkCopy",
  props: {
    text: { default: "" },
    href: { default: "" },
    copyValue: { default: void 0 },
    emptyText: { default: "-" },
    linkTitle: { default: void 0 },
    showExternalIcon: { type: Boolean, default: !0 },
    emptyClass: { default: "text-gray-400 text-sm" }
  },
  setup(e) {
    const n = e, { t } = j(), { copyToClipboard: s } = me(), o = C(() => {
      const p = n.text;
      return p != null && String(p).trim() !== "";
    }), c = C(() => n.href ? "a" : "span"), u = C(() => n.href ? {
      href: n.href,
      target: "_blank",
      rel: "noopener noreferrer",
      title: n.linkTitle ?? n.text
    } : {}), d = C(
      () => n.href ? "text-cyan-600 hover:text-cyan-700 underline text-sm font-mono max-w-[200px] truncate inline-flex items-center gap-1 align-middle" : "text-gray-700 text-sm font-mono max-w-[200px] truncate inline-flex items-center gap-1 align-middle"
    ), r = C(() => {
      const p = n.copyValue;
      return p != null && String(p) !== "" ? String(p) : n.text ?? "";
    }), w = C(() => t("common.copied"));
    function _() {
      const p = r.value;
      p && s(p, {
        showToast: !0,
        toastTitle: t("common.copied"),
        toastDescription: t("common.copiedDesc")
      });
    }
    return (p, y) => o.value ? (a(), l("div", Y2, [
      (a(), H(K(c.value), M3(u.value, { class: d.value }), {
        default: I(() => [
          i("span", X2, x(e.text), 1),
          e.href && e.showExternalIcon ? (a(), H(f(Ge), {
            key: 0,
            class: "w-3 h-3 flex-shrink-0"
          })) : b("", !0)
        ]),
        _: 1
      }, 16, ["class"])),
      V(j1, {
        variant: "secondary",
        size: "xs",
        "aria-label": w.value,
        onClick: _
      }, {
        default: I(() => [
          V(f(je), { class: "w-3 h-3" })
        ]),
        _: 1
      }, 8, ["aria-label"])
    ])) : (a(), l("div", K2, [
      i("span", {
        class: $(e.emptyClass)
      }, x(e.emptyText), 3)
    ]));
  }
}), en = /* @__PURE__ */ g(J2, [["__scopeId", "data-v-dc75fcee"]]), e5 = ["width", "height"], t5 = /* @__PURE__ */ h({
  __name: "AlipayLogo",
  props: {
    size: { default: 16 }
  },
  setup(e) {
    return (n, t) => (a(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: e.size,
      height: e.size,
      style: L(f(z)(e.size)),
      viewBox: "0 0 16 16",
      fill: "none",
      "aria-hidden": "true",
      class: "g-icon-alipay-logo"
    }, [...t[0] || (t[0] = [
      v1('<g clip-path="url(#clip0_alipay_logo)" data-v-7c094fc4><path d="M12.8874 0.747437H3.11206C1.83903 0.747437 0.808105 1.78746 0.808105 3.07123V12.9293C0.808105 14.2122 1.83903 15.2526 3.11206 15.2526H12.8874C14.1601 15.2526 15.1905 14.2122 15.1905 12.9293V3.07123C15.1905 1.78746 14.1601 0.747437 12.8874 0.747437Z" fill="#1677FF" data-v-7c094fc4></path><path d="M4.69435 11.902C2.45683 11.902 1.79532 10.1245 2.9011 9.15203C3.27011 8.82338 3.94439 8.66293 4.30388 8.62693C5.63302 8.49446 6.86339 9.00585 8.31535 9.72062C7.29476 11.0633 5.99483 11.902 4.69435 11.902ZM12.6496 9.85539C12.0741 9.66097 11.3019 9.36371 10.4417 9.04987C10.9583 8.14421 11.3709 7.11288 11.6421 5.99201H8.80704V4.96218H12.28V4.38734H8.80704V2.67059H7.38972C7.1411 2.67059 7.1411 2.91813 7.1411 2.91813V4.38734H3.62865V4.96218H7.1411V5.99201H4.24111V6.56671H9.86554C9.65971 7.28189 9.38337 7.95332 9.0554 8.56334C7.23036 7.95604 5.28291 7.46381 4.05947 7.76678C3.27703 7.9612 2.77312 8.30819 2.47708 8.67176C1.11832 10.3391 2.09286 12.8715 4.96241 12.8715C6.65906 12.8715 8.29348 11.9175 9.56026 10.3453C11.4497 11.2613 15.1905 12.834 15.1905 12.834V10.5926C15.1905 10.5926 14.7207 10.5548 12.6496 9.85539Z" fill="white" data-v-7c094fc4></path></g><defs data-v-7c094fc4><clipPath id="clip0_alipay_logo" data-v-7c094fc4><rect width="16" height="16" fill="white" data-v-7c094fc4></rect></clipPath></defs>', 2)
    ])], 12, e5));
  }
}), tn = /* @__PURE__ */ g(t5, [["__scopeId", "data-v-7c094fc4"]]), n5 = ["width", "height"], s5 = /* @__PURE__ */ h({
  __name: "AlipayWordmark",
  props: {
    width: { default: 80 },
    height: { default: 20 }
  },
  setup(e) {
    return (n, t) => (a(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: e.width,
      height: e.height,
      viewBox: "0 0 80 20",
      fill: "none",
      "aria-hidden": "true",
      class: "g-icon-alipay-wordmark"
    }, [...t[0] || (t[0] = [
      v1('<path d="M16.6551 0H3.17673C1.42145 0 0 1.434 0 3.20408V16.7965C0 18.5654 1.42145 20 3.17673 20H16.6551C18.41 20 19.8307 18.5654 19.8307 16.7965V3.20408C19.8307 1.434 18.41 0 16.6551 0Z" fill="#1677FF" data-v-b111b2bc></path><path d="M5.35841 15.3801C2.27329 15.3801 1.36119 12.9293 2.88586 11.5884C3.39464 11.1352 4.32436 10.914 4.82003 10.8644C6.65267 10.6817 8.34912 11.3868 10.3511 12.3724C8.94389 14.2237 7.15153 15.3801 5.35841 15.3801ZM16.3273 12.5582C15.5338 12.2901 14.469 11.8802 13.283 11.4475C13.9952 10.1988 14.5641 8.77676 14.938 7.2313H11.0291V5.81135H15.8176V5.01876H11.0291V2.65167H9.07484C8.73202 2.65167 8.73202 2.99298 8.73202 2.99298V5.01876H3.889V5.81135H8.73202V7.2313H4.73348V8.0237H12.4885C12.2047 9.0098 11.8237 9.93558 11.3715 10.7767C8.8551 9.93933 6.16992 9.26064 4.48303 9.67838C3.4042 9.94645 2.70939 10.4249 2.3012 10.9262C0.427725 13.2251 1.77144 16.7169 5.72801 16.7169C8.06738 16.7169 10.3209 15.4015 12.0676 13.2337C14.6728 14.4967 19.8307 16.6652 19.8307 16.6652V13.5746C19.8307 13.5746 19.1829 13.5226 16.3273 12.5582Z" fill="white" data-v-b111b2bc></path><path d="M43.0606 2.92784C43.0606 3.96246 43.8167 4.65895 44.8713 4.65895C45.926 4.65895 46.682 3.96246 46.682 2.92784C46.682 1.91308 45.926 1.19655 44.8713 1.19655C43.8167 1.19655 43.0606 1.91308 43.0606 2.92784Z" fill="#1677FF" data-v-b111b2bc></path><path d="M38.0064 16.1603H41.1503V1.63439H38.0064V16.1603Z" fill="black" data-v-b111b2bc></path><path d="M27.9177 11.126L29.788 4.65898H29.8678L31.6388 11.126H27.9177ZM32.4945 2.13191H28.2758L23.5598 16.1604H26.4651L27.2611 13.4144H32.2556L33.0115 16.1604H36.7328L32.4945 2.13191Z" fill="black" data-v-b111b2bc></path><path d="M43.2994 16.1603H46.4433V5.4947H43.2994V16.1603Z" fill="black" data-v-b111b2bc></path><path d="M79.297 5.51459L79.3167 5.49474H76.3519L74.4816 11.9816H74.3821L72.2331 5.49474H68.7107L72.9494 16.2002L71.1784 19.4635V19.5431H73.9443L79.297 5.51459Z" fill="black" data-v-b111b2bc></path><path d="M52.2741 14.3297C51.9161 14.3297 51.5776 14.29 51.1998 14.1704V8.39996C51.8564 7.94232 52.3936 7.72333 53.0701 7.72333C54.2442 7.72333 55.1794 8.65866 55.1794 10.6485C55.1794 13.1954 53.8065 14.3297 52.2741 14.3297ZM54.2641 5.27587C53.11 5.27587 52.2145 5.71366 51.1998 6.54934V5.49467H48.0555V19.543H51.1998V16.0608C51.7966 16.22 52.3537 16.2996 53.0304 16.2996C55.836 16.2996 58.3632 14.2302 58.3632 10.549C58.3632 7.24583 56.5323 5.27587 54.2641 5.27587Z" fill="black" data-v-b111b2bc></path><path d="M64.9501 13.5735C64.1144 14.0312 63.6365 14.2102 63.0798 14.2102C62.3236 14.2102 61.8461 13.7129 61.8461 12.9169C61.8461 12.6183 61.9056 12.3199 62.1443 12.0812C62.5225 11.703 63.2589 11.4245 64.9501 11.0266V13.5735ZM68.094 13.4939V9.03677C68.094 6.60899 66.6615 5.27595 64.1345 5.27595C62.5225 5.27595 61.4083 5.55432 59.3786 6.1712L59.9355 8.61884C61.7861 7.78298 62.6021 7.42481 63.4578 7.42481C64.4926 7.42481 64.9501 8.16101 64.9501 9.29529V9.3749C61.3483 10.0515 60.2341 10.4296 59.5376 11.1261C59.0204 11.6435 58.8016 12.3797 58.8016 13.2352C58.8016 15.2848 60.3935 16.3793 61.886 16.3793C63.0002 16.3793 63.8954 15.9614 65.1095 15.0459L65.3283 16.1603H68.4723L68.094 13.4939Z" fill="black" data-v-b111b2bc></path>', 9)
    ])], 8, n5));
  }
}), nn = /* @__PURE__ */ g(s5, [["__scopeId", "data-v-b111b2bc"]]), a5 = ["width", "height"], o5 = /* @__PURE__ */ h({
  __name: "ArrowCircleRight",
  props: {
    size: { default: 16 }
  },
  setup(e) {
    return (n, t) => (a(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: e.size,
      height: e.size,
      style: L(f(z)(e.size)),
      viewBox: "0 0 14.6667 14.6667",
      fill: "none",
      "aria-hidden": "true",
      class: "g-icon-arrow-circle-right"
    }, [...t[0] || (t[0] = [
      i("path", {
        d: "M13.3333 7.33333C13.3333 4.01963 10.647 1.33333 7.33333 1.33333C4.01963 1.33333 1.33333 4.01963 1.33333 7.33333C1.33333 10.647 4.01963 13.3333 7.33333 13.3333C10.647 13.3333 13.3333 10.647 13.3333 7.33333ZM6.66797 4.01563C6.92832 3.75528 7.35098 3.75528 7.61133 4.01563L10.457 6.86198C10.582 6.987 10.6523 7.15653 10.6523 7.33333C10.6523 7.51013 10.582 7.67967 10.457 7.80469L7.61133 10.651C7.35099 10.9114 6.92832 10.9114 6.66797 10.651C6.40762 10.3907 6.40762 9.96803 6.66797 9.70768L8.3763 8H4.99935C4.63118 7.99998 4.33269 7.70151 4.33268 7.33333C4.33268 6.96516 4.63117 6.66669 4.99935 6.66667H8.3763L6.66797 4.95833C6.40788 4.69797 6.40773 4.27589 6.66797 4.01563ZM14.6667 7.33333C14.6667 11.3834 11.3834 14.6667 7.33333 14.6667C3.28325 14.6667 3.57628e-07 11.3834 0 7.33333C2.5723e-08 3.28325 3.28325 3.57628e-07 7.33333 0C11.3834 2.57231e-08 14.6667 3.28325 14.6667 7.33333Z",
        fill: "currentColor"
      }, null, -1)
    ])], 12, a5));
  }
}), i5 = /* @__PURE__ */ g(o5, [["__scopeId", "data-v-20ef60a2"]]), l5 = ["width", "height"], r5 = /* @__PURE__ */ h({
  __name: "ArrowNarrowRight",
  props: {
    size: { default: 20 }
  },
  setup(e) {
    return (n, t) => (a(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: e.size,
      height: e.size,
      style: L(f(z)(e.size)),
      viewBox: "0 0 20 20",
      fill: "none",
      "aria-hidden": "true",
      class: "g-icon-arrow-narrow-right"
    }, [...t[0] || (t[0] = [
      i("path", {
        transform: "translate(2.58335 4.25)",
        d: "M0.75 5.75H14.0833M9.08333 10.75L14.0833 5.75L9.08333 0.75",
        stroke: "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }, null, -1)
    ])], 12, l5));
  }
}), sn = /* @__PURE__ */ g(r5, [["__scopeId", "data-v-5edc7280"]]), c5 = ["width", "height"], d5 = /* @__PURE__ */ h({
  __name: "Book",
  props: {
    size: { default: 16 }
  },
  setup(e) {
    return (n, t) => (a(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: e.size,
      height: e.size,
      style: L(f(z)(e.size)),
      viewBox: "0 0 18 22",
      fill: "none",
      "aria-hidden": "true",
      class: "g-icon-book"
    }, [...t[0] || (t[0] = [
      i("path", {
        d: "M16 16H4.99903C4.00488 16 3.70371 16.0088 3.48145 16.0684C2.79138 16.2534 2.2523 16.7923 2.06738 17.4824C2.04852 17.5529 2.03329 17.6481 2.02149 17.8027C2.02623 17.9041 2.02978 17.9992 2.03711 18.0889C2.07293 18.5273 2.13809 18.7518 2.21778 18.9082C2.40951 19.2845 2.71555 19.5905 3.0918 19.7822C3.2482 19.8619 3.47272 19.9271 3.91113 19.9629C4.36117 19.9997 4.94342 20 5.79981 20H14.5996C15.0362 20 15.3039 19.9988 15.5039 19.9824C15.5969 19.9748 15.6533 19.9661 15.6875 19.958C15.7035 19.9542 15.7133 19.9502 15.7188 19.9482C15.7232 19.9466 15.7258 19.9457 15.7266 19.9453C15.8206 19.8974 15.8974 19.8207 15.9453 19.7266C15.9457 19.7258 15.9466 19.7232 15.9482 19.7188C15.9502 19.7133 15.9542 19.7035 15.958 19.6875C15.9661 19.6533 15.9748 19.5969 15.9824 19.5039C15.9988 19.304 16 19.0362 16 18.5996V16ZM8 8.13966L9.03321 7.45704C9.12815 7.39421 9.37864 7.2109 9.67774 7.13966C9.84907 7.09888 10.0262 7.08897 10.2002 7.10938L10.373 7.13966L10.4824 7.17188C10.7321 7.25546 10.9345 7.40206 11.0176 7.45704L12.0508 8.13966V2.00001H8V8.13966ZM16 3.4004C16 2.96386 15.9988 2.69606 15.9824 2.4961C15.9748 2.40313 15.9661 2.34672 15.958 2.31251C15.9542 2.2965 15.9502 2.28673 15.9482 2.28126C15.9466 2.27678 15.9457 2.27424 15.9453 2.27344C15.8974 2.17936 15.8206 2.10263 15.7266 2.05469C15.7258 2.05431 15.7232 2.05337 15.7188 2.05177C15.7133 2.04982 15.7035 2.04577 15.6875 2.042C15.6533 2.03395 15.5969 2.02519 15.5039 2.01759C15.3039 2.00125 15.0362 2.00001 14.5996 2.00001H14.0508V8.51173C14.0508 8.73363 14.052 8.96997 14.0342 9.16407C14.0173 9.34843 13.9723 9.6765 13.748 9.97364C13.4844 10.323 13.0814 10.54 12.6445 10.5674C12.2731 10.5906 11.9747 10.447 11.8115 10.3594C11.6398 10.2672 11.443 10.1361 11.2578 10.0137L10.0254 9.19825L8.79297 10.0137C8.60782 10.1361 8.41101 10.2672 8.23926 10.3594C8.07611 10.447 7.77765 10.5906 7.40625 10.5674C6.96943 10.54 6.56639 10.323 6.30274 9.97364C6.0785 9.6765 6.0335 9.34843 6.0166 9.16407C5.99883 8.96997 6 8.73363 6 8.51173V2.00001H5.79981C4.94342 2.00001 4.36117 2.00036 3.91113 2.03712C3.47272 2.07294 3.2482 2.13809 3.0918 2.21778C2.71555 2.40952 2.40951 2.71555 2.21778 3.0918C2.13809 3.2482 2.07293 3.47272 2.03711 3.91114C2.00035 4.36118 2 4.94342 2 5.79981V14.5352C2.29858 14.3629 2.62206 14.2283 2.96387 14.1367C3.50454 13.9919 4.13357 14 4.99903 14H16V3.4004ZM18 18.5996C18 19.0032 18.0011 19.3667 17.9766 19.667C17.9511 19.9788 17.893 20.31 17.7275 20.6348C17.4879 21.1052 17.1052 21.4879 16.6348 21.7275C16.31 21.893 15.9788 21.9511 15.667 21.9766C15.3667 22.0011 15.0031 22 14.5996 22H5.79981C4.97632 22 4.29843 22.001 3.74805 21.9561C3.18599 21.9101 2.6689 21.8117 2.1836 21.5645C1.43109 21.181 0.819017 20.5689 0.435549 19.8164C0.188274 19.3311 0.0898762 18.814 0.0439473 18.252C0.0347885 18.1399 0.0301727 18.0222 0.024416 17.8994C0.0213428 17.8675 0.0185313 17.8354 0.0185566 17.8027C0.000298126 17.3441 1.85798e-06 16.8124 1.94926e-06 16.2002V5.79981C1.82648e-06 4.97632 -0.00102053 4.29843 0.0439473 3.74805C0.0898762 3.186 0.188274 2.66891 0.435549 2.1836C0.819018 1.4311 1.43109 0.819023 2.1836 0.435554C2.6689 0.188279 3.18599 0.0898816 3.74805 0.0439527C4.29843 -0.00101507 4.97632 7.2802e-06 5.79981 7.40298e-06H14.5996C15.0031 7.40298e-06 15.3667 -0.00109022 15.667 0.0234449C15.9788 0.0489431 16.31 0.107051 16.6348 0.272468C17.1052 0.512152 17.4879 0.894836 17.7275 1.36524C17.893 1.68997 17.9511 2.0212 17.9766 2.33302C18.0011 2.63331 18 2.99686 18 3.4004V18.5996Z",
        fill: "currentColor"
      }, null, -1)
    ])], 12, c5));
  }
}), u5 = /* @__PURE__ */ g(d5, [["__scopeId", "data-v-f8a88d5b"]]), C5 = ["width", "height"], h5 = /* @__PURE__ */ h({
  __name: "Chart",
  props: {
    size: { default: 18 }
  },
  setup(e) {
    return (n, t) => (a(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: e.size,
      height: e.size,
      style: L(f(z)(e.size)),
      viewBox: "0 0 18 18",
      fill: "none",
      "aria-hidden": "true",
      class: "g-icon-chart"
    }, [...t[0] || (t[0] = [
      i("path", {
        d: "M15.7308 8.64743C15.7307 6.10427 14.3908 3.87322 12.3746 2.62285C11.9837 2.38021 11.8636 1.86642 12.1061 1.47539C12.3487 1.0844 12.8625 0.9643 13.2535 1.20683C15.7391 2.74844 17.3974 5.50387 17.3974 8.64743C17.3974 13.4799 13.4799 17.3974 8.64743 17.3974C5.50387 17.3974 2.74844 15.7391 1.20683 13.2535C0.9643 12.8625 1.0844 12.3487 1.47539 12.1061C1.86642 11.8636 2.38021 11.9837 2.62285 12.3746C3.87322 14.3908 6.10427 15.7307 8.64743 15.7308C12.5594 15.7308 15.7308 12.5594 15.7308 8.64743ZM8.23076 2.73109C8.23076 2.37969 8.23 2.18184 8.21367 2.03366C8.20005 1.91023 8.18024 1.87802 8.17054 1.86194C8.1683 1.85881 8.16038 1.84804 8.1445 1.83102C8.12384 1.80891 8.09644 1.78347 8.06474 1.75859C8.03302 1.73369 8.00164 1.71319 7.97523 1.69837C7.95424 1.68661 7.94171 1.6817 7.9386 1.68047C7.89476 1.66675 7.86401 1.66144 7.79375 1.66907C7.69032 1.68031 7.55717 1.71136 7.28105 1.77894C6.91101 1.86951 6.5474 1.98892 6.19381 2.13538C5.28399 2.51229 4.45691 3.06418 3.76054 3.76054C3.06418 4.45691 2.51229 5.28399 2.13538 6.19381C1.98892 6.5474 1.86951 6.91101 1.77894 7.28105C1.71136 7.55717 1.68031 7.69032 1.66907 7.79375C1.66144 7.86401 1.66675 7.89476 1.68047 7.9386C1.6817 7.94171 1.68661 7.95424 1.69837 7.97523C1.71319 8.00164 1.73369 8.03302 1.75859 8.06474C1.78347 8.09644 1.80891 8.12384 1.83102 8.1445C1.84804 8.16038 1.85881 8.1683 1.86194 8.17054C1.87802 8.18024 1.91023 8.20005 2.03366 8.21367C2.18184 8.23 2.37969 8.23076 2.73108 8.23076H7.06377C7.42755 8.23076 7.65071 8.23054 7.81735 8.21692C7.89486 8.21059 7.94181 8.20248 7.97034 8.19577C7.98391 8.19257 7.99269 8.19005 7.9972 8.18844C8.00139 8.18694 8.00371 8.18519 8.00371 8.18519C8.0818 8.14529 8.14529 8.0818 8.18519 8.00371C8.18519 8.00371 8.18694 8.00139 8.18844 7.9972C8.19005 7.99269 8.19257 7.98391 8.19577 7.97034C8.20248 7.94181 8.21059 7.89486 8.21692 7.81735C8.23054 7.65071 8.23076 7.42755 8.23076 7.06377V2.73109ZM9.89743 7.06377C9.89743 7.40005 9.89834 7.70301 9.8779 7.95325C9.85665 8.21311 9.80822 8.48911 9.67038 8.75973C9.47064 9.15174 9.15174 9.47064 8.75973 9.67038C8.48911 9.80822 8.21311 9.85665 7.95325 9.8779C7.70301 9.89834 7.40005 9.89743 7.06377 9.89743H2.73108C2.15186 9.89743 1.54165 9.92433 1.00094 9.59795C0.777337 9.46292 0.588143 9.27253 0.447556 9.09339C0.307054 8.91434 0.167494 8.68577 0.089483 8.43665C-0.095706 7.84478 0.0460969 7.35212 0.160284 6.88554C0.270977 6.43321 0.416652 5.98881 0.595668 5.55661C1.05634 4.44445 1.73096 3.43336 2.58216 2.58216C3.43336 1.73096 4.44445 1.05634 5.55661 0.595668C5.98881 0.416652 6.43321 0.270977 6.88554 0.160284C7.35212 0.046097 7.84478 -0.0957062 8.43665 0.0894832C8.68577 0.167494 8.91435 0.307054 9.09339 0.447556C9.27253 0.588143 9.46292 0.777337 9.59795 1.00094C9.92433 1.54165 9.89743 2.15186 9.89743 2.73109V7.06377Z",
        fill: "currentColor"
      }, null, -1)
    ])], 12, C5));
  }
}), an = /* @__PURE__ */ g(h5, [["__scopeId", "data-v-9896441c"]]), f5 = ["width", "height"], m5 = /* @__PURE__ */ h({
  __name: "Check",
  props: {
    size: { default: 24 }
  },
  setup(e) {
    return (n, t) => (a(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: e.size,
      height: e.size,
      style: L(f(z)(e.size)),
      viewBox: "0 0 24 24",
      fill: "none",
      "aria-hidden": "true",
      class: "g-icon-check"
    }, [...t[0] || (t[0] = [
      i("path", {
        transform: "translate(3 5)",
        d: "M16.2822 0.303649C16.6666 -0.0927012 17.2998 -0.102262 17.6962 0.282165C18.0926 0.666649 18.1021 1.29979 17.7177 1.69623L7.05072 12.6962C6.8624 12.8903 6.60336 12.9999 6.33295 12.9999C6.06251 12.9999 5.80344 12.8904 5.61517 12.6962L0.282165 7.19623C-0.102262 6.79979 -0.0927012 6.16665 0.303649 5.78217C0.700089 5.39774 1.33323 5.4073 1.71771 5.80365L6.33295 10.5634L16.2822 0.303649Z",
        fill: "currentColor"
      }, null, -1)
    ])], 12, f5));
  }
}), on = /* @__PURE__ */ g(m5, [["__scopeId", "data-v-a3f99b3d"]]), g5 = ["width", "height"], p5 = /* @__PURE__ */ h({
  __name: "CheckCircle",
  props: {
    size: { default: 12 }
  },
  setup(e) {
    return (n, t) => (a(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: e.size,
      height: e.size,
      style: L(f(z)(e.size)),
      viewBox: "0 0 11 11",
      fill: "none",
      "aria-hidden": "true",
      class: "g-icon-check-circle"
    }, [...t[0] || (t[0] = [
      i("path", {
        d: "M10 5.5C10 3.01472 7.98528 1 5.5 1C3.01472 1 1 3.01472 1 5.5C1 7.98528 3.01472 10 5.5 10C7.98528 10 10 7.98528 10 5.5ZM7.16992 3.61035C7.35163 3.40246 7.66757 3.38085 7.87549 3.5625C8.08337 3.7442 8.10449 4.06015 7.92285 4.26807L5.19434 7.38965C5.09939 7.49828 4.96214 7.56104 4.81787 7.56104C4.6736 7.56104 4.53635 7.49828 4.44141 7.38965L3.07715 5.8291C2.89543 5.6212 2.91662 5.30527 3.12451 5.12354C3.33242 4.94181 3.64834 4.96301 3.83008 5.1709L4.81787 6.30078L7.16992 3.61035ZM11 5.5C11 8.53757 8.53757 11 5.5 11C2.46243 11 0 8.53757 0 5.5C0 2.46243 2.46243 0 5.5 0C8.53757 0 11 2.46243 11 5.5Z",
        fill: "currentColor"
      }, null, -1)
    ])], 12, g5));
  }
}), v5 = /* @__PURE__ */ g(p5, [["__scopeId", "data-v-8b6602c6"]]), w5 = ["width", "height"], _5 = /* @__PURE__ */ h({
  __name: "Clock",
  props: {
    size: { default: 16 }
  },
  setup(e) {
    return (n, t) => (a(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: e.size,
      height: e.size,
      style: L(f(z)(e.size)),
      viewBox: "0 0 14.6667 14.6667",
      fill: "none",
      "aria-hidden": "true",
      class: "g-icon-clock"
    }, [...t[0] || (t[0] = [
      i("path", {
        d: "M13.3333 7.33333C13.3333 4.01962 10.647 1.33333 7.33333 1.33333C4.01962 1.33333 1.33333 4.01962 1.33333 7.33333C1.33333 10.647 4.01962 13.3333 7.33333 13.3333C10.647 13.3333 13.3333 10.647 13.3333 7.33333ZM6.66667 3.66667C6.66667 3.29848 6.96514 3 7.33333 3C7.70152 3 8 3.29848 8 3.66667V7.05729L9.80469 8.86198C10.065 9.12233 10.065 9.54434 9.80469 9.80469C9.54434 10.065 9.12233 10.065 8.86198 9.80469L6.86198 7.80469C6.73696 7.67966 6.66667 7.51014 6.66667 7.33333V3.66667ZM14.6667 7.33333C14.6667 11.3834 11.3834 14.6667 7.33333 14.6667C3.28325 14.6667 0 11.3834 0 7.33333C0 3.28325 3.28325 0 7.33333 0C11.3834 0 14.6667 3.28325 14.6667 7.33333Z",
        fill: "currentColor"
      }, null, -1)
    ])], 12, w5));
  }
}), ln = /* @__PURE__ */ g(_5, [["__scopeId", "data-v-2bf99f2b"]]), b5 = ["width", "height"], y5 = /* @__PURE__ */ h({
  __name: "ClockX",
  props: {
    size: { default: 12 }
  },
  setup(e) {
    return (n, t) => (a(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: e.size,
      height: e.size,
      style: L(f(z)(e.size)),
      viewBox: "0 0 12 12",
      fill: "none",
      "aria-hidden": "true",
      class: "g-icon-clock-x"
    }, [...t[0] || (t[0] = [
      i("path", {
        d: "M10.6465 8.246C10.8417 8.051 11.1583 8.051 11.3535 8.246C11.5488 8.441 11.5488 8.758 11.3535 8.953L10.5068 9.8L11.3535 10.646C11.5488 10.842 11.5488 11.158 11.3535 11.354C11.1583 11.549 10.8417 11.549 10.6465 11.354L9.7998 10.507L8.9531 11.354C8.7579 11.549 8.4414 11.549 8.2461 11.354C8.0508 11.158 8.0508 10.842 8.2461 10.646L9.0928 9.8L8.2461 8.953C8.0508 8.758 8.0508 8.441 8.2461 8.246C8.4414 8.051 8.7579 8.051 8.9531 8.246L9.7998 9.093L10.6465 8.246ZM5.5 3.25C5.5 2.974 5.7239 2.75 6 2.75C6.2761 2.75 6.5 2.974 6.5 3.25V5.793L7.8535 7.146C8.0488 7.342 8.0488 7.658 7.8535 7.854C7.6583 8.049 7.3417 8.049 7.1465 7.854L5.6465 6.354C5.5527 6.26 5.5 6.133 5.5 6V3.25ZM10.5 6C10.5 3.515 8.4853 1.5 6 1.5C3.5147 1.5 1.5 3.515 1.5 6C1.5 8.485 3.5147 10.5 6 10.5C6.1522 10.5 6.3026 10.492 6.4507 10.478C6.7254 10.45 6.9702 10.651 6.9976 10.926C7.0248 11.201 6.8241 11.445 6.5493 11.473C6.3685 11.491 6.1853 11.5 6 11.5C2.9624 11.5 0.5 9.038 0.5 6C0.5 2.962 2.9624 0.5 6 0.5C9.0376 0.5 11.5 2.962 11.5 6C11.5 6.185 11.4906 6.368 11.4727 6.549C11.4454 6.824 11.2006 7.025 10.9258 6.998C10.6511 6.97 10.4503 6.725 10.4775 6.451C10.4922 6.303 10.5 6.152 10.5 6Z",
        fill: "currentColor"
      }, null, -1)
    ])], 12, b5));
  }
}), rn = /* @__PURE__ */ g(y5, [["__scopeId", "data-v-b09bf33f"]]), L5 = ["width", "height"], k5 = /* @__PURE__ */ h({
  __name: "CodeSquare",
  props: {
    size: { default: 12 }
  },
  setup(e) {
    return (n, t) => (a(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: e.size,
      height: e.size,
      style: L(f(z)(e.size)),
      viewBox: "0 0 11 11",
      fill: "none",
      "aria-hidden": "true",
      class: "g-icon-code-square"
    }, [...t[0] || (t[0] = [
      i("path", {
        d: "M10 2.8999C10 2.47171 9.99983 2.18059 9.98145 1.95557C9.96354 1.73636 9.93096 1.6241 9.89111 1.5459C9.79525 1.35777 9.64223 1.20475 9.4541 1.10889C9.3759 1.06904 9.26364 1.03647 9.04443 1.01856C8.81942 1.00018 8.52829 1 8.1001 1H2.8999C2.47171 1 2.18059 1.00018 1.95557 1.01856C1.73636 1.03647 1.6241 1.06904 1.5459 1.10889C1.35777 1.20475 1.20475 1.35777 1.10889 1.5459C1.06904 1.6241 1.03647 1.73636 1.01856 1.95557C1.00018 2.18059 1 2.47171 1 2.8999V8.1001C1 8.52829 1.00018 8.81942 1.01856 9.04443C1.03647 9.26364 1.06904 9.3759 1.10889 9.4541C1.20475 9.64223 1.35777 9.79525 1.5459 9.89111C1.6241 9.93096 1.73636 9.96354 1.95557 9.98145C2.18059 9.99983 2.47171 10 2.8999 10H8.1001C8.52829 10 8.81942 9.99983 9.04443 9.98145C9.26364 9.96354 9.3759 9.93096 9.4541 9.89111C9.64223 9.79525 9.79525 9.64223 9.89111 9.4541C9.93096 9.3759 9.96354 9.26364 9.98145 9.04443C9.99983 8.81942 10 8.52829 10 8.1001V2.8999ZM5.44678 3.15088C5.50151 2.88025 5.7655 2.70508 6.03613 2.75977C6.30679 2.81451 6.48198 3.07846 6.42725 3.34912L5.51514 7.8584C5.46034 8.12891 5.19681 8.30363 4.92627 8.24902C4.65565 8.19429 4.48049 7.93078 4.53516 7.66016L5.44678 3.15088ZM3.15186 3.76758C3.34712 3.57232 3.66363 3.57232 3.85889 3.76758C4.054 3.96285 4.0541 4.2794 3.85889 4.47461L2.8335 5.5L3.85889 6.52539C4.05415 6.72065 4.05415 7.03765 3.85889 7.23291C3.66369 7.42803 3.34711 7.42794 3.15186 7.23291L2.0166 6.09717C1.6867 5.76727 1.6867 5.23274 2.0166 4.90283L3.15186 3.76758ZM7.08936 3.76758C7.28462 3.57232 7.60113 3.57232 7.79639 3.76758L8.93164 4.90283C9.26146 5.23271 9.26144 5.76728 8.93164 6.09717L7.79639 7.23291C7.60117 7.428 7.28459 7.42797 7.08936 7.23291C6.89409 7.03765 6.89409 6.72065 7.08936 6.52539L8.11475 5.5L7.08936 4.47461C6.89411 4.27937 6.89415 3.96285 7.08936 3.76758ZM11 8.1001C11 8.51184 11.0005 8.85079 10.978 9.12598C10.9551 9.40701 10.9059 9.66555 10.7822 9.9082C10.5905 10.2845 10.2845 10.5905 9.9082 10.7822C9.66555 10.9059 9.40701 10.9551 9.12598 10.978C8.85079 11.0005 8.51184 11 8.1001 11H2.8999C2.48816 11 2.14921 11.0005 1.87402 10.978C1.593 10.9551 1.33445 10.9059 1.0918 10.7822C0.715545 10.5905 0.409509 10.2845 0.217774 9.9082C0.0941368 9.66555 0.0449381 9.40701 0.0219736 9.12598C-0.000510264 8.85079 9.13239e-07 8.51184 9.74628e-07 8.1001V2.8999C9.13239e-07 2.48816 -0.000510264 2.14921 0.0219736 1.87402C0.0449381 1.593 0.0941368 1.33445 0.217774 1.0918C0.409509 0.715545 0.715545 0.409509 1.0918 0.217774C1.33445 0.0941368 1.593 0.0449381 1.87402 0.0219736C2.14921 -0.000510264 2.48816 9.13239e-07 2.8999 9.74628e-07H8.1001C8.51184 9.13239e-07 8.85079 -0.000510264 9.12598 0.0219736C9.40701 0.0449381 9.66555 0.0941368 9.9082 0.217774C10.2845 0.409509 10.5905 0.715545 10.7822 1.0918C10.9059 1.33445 10.9551 1.593 10.978 1.87402C11.0005 2.14921 11 2.48816 11 2.8999V8.1001Z",
        fill: "currentColor"
      }, null, -1)
    ])], 12, L5));
  }
}), cn = /* @__PURE__ */ g(k5, [["__scopeId", "data-v-8a6d849b"]]), $5 = ["width", "height"], x5 = /* @__PURE__ */ h({
  __name: "Coins",
  props: {
    size: { default: 16 }
  },
  setup(e) {
    return (n, t) => (a(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: e.size,
      height: e.size,
      style: L(f(z)(e.size)),
      viewBox: "0 0 14.6667 14.6667",
      fill: "none",
      "aria-hidden": "true",
      class: "g-icon-coins"
    }, [...t[0] || (t[0] = [
      i("path", {
        d: "M4.33333 5.33333C5.40254 5.33333 6.3998 5.4896 7.15365 5.76367C7.5278 5.89973 7.87785 6.07767 8.14648 6.30859C8.41297 6.5377 8.66667 6.88184 8.66667 7.33333V12.6667C8.66667 13.1182 8.41297 13.4623 8.14648 13.6914C7.87785 13.9223 7.5278 14.1003 7.15365 14.2363C6.3998 14.5104 5.40254 14.6667 4.33333 14.6667C3.26413 14.6667 2.26687 14.5104 1.51302 14.2363C1.13887 14.1003 0.788815 13.9223 0.520182 13.6914C0.2537 13.4623 0 13.1182 0 12.6667V7.33333C0 6.88184 0.2537 6.5377 0.520182 6.30859C0.788815 6.07767 1.13887 5.89973 1.51302 5.76367C2.26687 5.4896 3.26413 5.33333 4.33333 5.33333ZM7.15365 11.5697C6.3998 11.8437 5.40254 12 4.33333 12C3.26413 12 2.26687 11.8437 1.51302 11.5697C1.45217 11.5475 1.39264 11.5218 1.33333 11.4974V12.6237C1.343 12.6357 1.35982 12.655 1.38932 12.6803C1.49177 12.7684 1.67945 12.8779 1.96875 12.9831C2.54193 13.1914 3.37782 13.3333 4.33333 13.3333C5.28885 13.3333 6.12474 13.1914 6.69792 12.9831C6.98721 12.8779 7.17489 12.7684 7.27734 12.6803C7.30685 12.655 7.32367 12.6357 7.33333 12.6237V11.4974C7.27402 11.5218 7.21449 11.5475 7.15365 11.5697ZM7.15365 8.903C6.3998 9.17707 5.40254 9.33333 4.33333 9.33333C3.26413 9.33333 2.26687 9.17707 1.51302 8.903C1.45217 8.88087 1.39264 8.85511 1.33333 8.83073V9.95703C1.343 9.96902 1.35982 9.9883 1.38932 10.0137C1.49177 10.1017 1.67945 10.2112 1.96875 10.3164C2.54193 10.5248 3.37782 10.6667 4.33333 10.6667C5.28885 10.6667 6.12474 10.5248 6.69792 10.3164C6.98721 10.2112 7.17489 10.1017 7.27734 10.0137C7.30685 9.9883 7.32367 9.96902 7.33333 9.95703V8.83073C7.27402 8.85511 7.21449 8.88087 7.15365 8.903ZM4.33333 6.66667C3.37782 6.66667 2.54193 6.80856 1.96875 7.01693C1.67945 7.12213 1.49177 7.2316 1.38932 7.31966C1.38401 7.32423 1.37955 7.32919 1.375 7.33333C1.37955 7.33747 1.38401 7.34243 1.38932 7.34701C1.49177 7.43507 1.67945 7.54454 1.96875 7.64974C2.54193 7.85811 3.37782 8 4.33333 8C5.28885 8 6.12474 7.85811 6.69792 7.64974C6.98721 7.54454 7.17489 7.43507 7.27734 7.34701C7.28252 7.34255 7.28656 7.33738 7.29102 7.33333C7.28656 7.32929 7.28252 7.32411 7.27734 7.31966C7.17489 7.2316 6.98721 7.12213 6.69792 7.01693C6.12474 6.80856 5.28885 6.66667 4.33333 6.66667ZM6 4V2C6 1.5485 6.2537 1.20436 6.52018 0.97526C6.78881 0.74434 7.13887 0.566395 7.51302 0.430339C8.26687 0.156269 9.26413 0 10.3333 0C11.4025 0 12.3998 0.156269 13.1536 0.430339C13.5278 0.566395 13.8779 0.74434 14.1465 0.97526C14.413 1.20436 14.6667 1.5485 14.6667 2V12.6667C14.6667 13.1182 14.413 13.4623 14.1465 13.6914C13.8779 13.9223 13.5278 14.1003 13.1536 14.2363C12.3998 14.5104 11.4025 14.6667 10.3333 14.6667C9.96514 14.6667 9.66667 14.3682 9.66667 14C9.66667 13.6318 9.96514 13.3333 10.3333 13.3333C11.2888 13.3333 12.1247 13.1914 12.6979 12.9831C12.9872 12.8779 13.1749 12.7684 13.2773 12.6803C13.3069 12.655 13.3237 12.6357 13.3333 12.6237V11.4974C13.274 11.5218 13.2145 11.5475 13.1536 11.5697C12.3998 11.8437 11.4025 12 10.3333 12C9.96514 12 9.66667 11.7015 9.66667 11.3333C9.66667 10.9651 9.96514 10.6667 10.3333 10.6667C11.2888 10.6667 12.1247 10.5248 12.6979 10.3164C12.9872 10.2112 13.1749 10.1017 13.2773 10.0137C13.3069 9.9883 13.3237 9.96902 13.3333 9.95703V8.83073C13.274 8.85511 13.2145 8.88087 13.1536 8.903C12.3998 9.17706 11.4025 9.33333 10.3333 9.33333C9.96514 9.33333 9.66667 9.03486 9.66667 8.66667C9.66667 8.29848 9.96514 8 10.3333 8C11.2888 8 12.1247 7.85811 12.6979 7.64974C12.9872 7.54454 13.1749 7.43507 13.2773 7.34701C13.3069 7.32164 13.3237 7.30235 13.3333 7.29036V6.16406C13.274 6.18844 13.2145 6.2142 13.1536 6.23633C12.3998 6.5104 11.4025 6.66667 10.3333 6.66667C9.96514 6.66667 9.66667 6.36819 9.66667 6C9.66667 5.63181 9.96514 5.33333 10.3333 5.33333C11.2888 5.33333 12.1247 5.19144 12.6979 4.98307C12.9872 4.87787 13.1749 4.7684 13.2773 4.68034C13.3069 4.65497 13.3237 4.63569 13.3333 4.6237V3.4974C13.274 3.52178 13.2145 3.54754 13.1536 3.56966C12.3998 3.84373 11.4025 4 10.3333 4C9.26413 4 8.26687 3.84373 7.51302 3.56966C7.45218 3.54754 7.39264 3.52178 7.33333 3.4974V4C7.33333 4.36819 7.03486 4.66667 6.66667 4.66667C6.29848 4.66667 6 4.36819 6 4ZM10.3333 1.33333C9.37782 1.33333 8.54193 1.47523 7.96875 1.68359C7.67945 1.78879 7.49177 1.89826 7.38932 1.98633C7.38401 1.9909 7.37955 1.99586 7.375 2C7.37955 2.00414 7.38401 2.0091 7.38932 2.01367C7.49177 2.10174 7.67945 2.21121 7.96875 2.31641C8.54193 2.52477 9.37782 2.66667 10.3333 2.66667C11.2888 2.66667 12.1247 2.52477 12.6979 2.31641C12.9872 2.21121 13.1749 2.10174 13.2773 2.01367C13.2825 2.00922 13.2866 2.00404 13.291 2C13.2866 1.99596 13.2825 1.99078 13.2773 1.98633C13.1749 1.89826 12.9872 1.78879 12.6979 1.68359C12.1247 1.47523 11.2888 1.33333 10.3333 1.33333Z",
        fill: "currentColor"
      }, null, -1)
    ])], 12, $5));
  }
}), M5 = /* @__PURE__ */ g(x5, [["__scopeId", "data-v-2d41f335"]]), z5 = ["width", "height"], I5 = /* @__PURE__ */ h({
  __name: "CoinsHand",
  props: {
    size: { default: 16 }
  },
  setup(e) {
    return (n, t) => (a(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: e.size,
      height: e.size,
      style: L(f(z)(e.size)),
      viewBox: "0 0 14.6668 14.0001",
      fill: "none",
      "aria-hidden": "true",
      class: "g-icon-coins-hand"
    }, [...t[0] || (t[0] = [
      i("path", {
        d: "M13.3335 10.0938C13.3335 9.69004 12.8934 9.44058 12.547 9.64779L11.1375 10.4915C11.083 10.5242 11.0254 10.5475 10.9669 10.5632C10.6973 10.7231 10.3835 10.817 10.047 10.8171H8.85041C8.48231 10.817 8.18385 10.5185 8.18374 10.1504C8.18374 9.78222 8.48225 9.48376 8.85041 9.48372H10.047C10.3118 9.48355 10.5255 9.2667 10.5223 9.00195C10.5192 8.76498 10.342 8.56648 10.1069 8.53646L7.18374 8.16341C6.8678 8.12313 6.7756 8.11342 6.6883 8.11523C6.60076 8.11706 6.51338 8.12757 6.42788 8.14648C6.34272 8.16535 6.25548 8.19694 5.95848 8.31055L4.00015 9.05925V11.6048H4.12775C4.39802 11.6048 4.59737 11.603 4.79637 11.6315C4.96368 11.6555 5.1288 11.6955 5.28856 11.7507C5.4787 11.8163 5.65543 11.9088 5.89598 12.0326L6.46629 12.3262C6.83608 12.5163 6.94517 12.5693 7.05353 12.6009C7.16216 12.6326 7.2744 12.6503 7.38752 12.6536C7.50037 12.657 7.62074 12.6403 8.0314 12.5736L10.3237 12.2012C10.6194 12.1531 10.7054 12.1376 10.784 12.1133C10.8628 12.0889 10.9389 12.0567 11.0119 12.0182C11.0846 11.9798 11.1565 11.9304 11.3992 11.7552L13.118 10.515C13.2533 10.4173 13.3335 10.2606 13.3335 10.0938ZM12.008 3.52018C12.0079 2.72198 11.3608 2.07493 10.5626 2.07487C9.7644 2.07487 9.11739 2.72195 9.11733 3.52018C9.11733 4.31847 9.76436 4.96549 10.5626 4.96549C11.3609 4.96544 12.008 4.31843 12.008 3.52018ZM14.6668 10.0938C14.6668 10.6891 14.3807 11.248 13.8979 11.5964L12.1792 12.8359C11.9652 12.9903 11.8085 13.1056 11.6349 13.1973C11.489 13.2743 11.3361 13.3379 11.1785 13.3867C10.9909 13.4448 10.7984 13.4746 10.5379 13.5169L8.24494 13.89C7.88381 13.9487 7.61757 13.9943 7.3478 13.9863C7.12158 13.9796 6.89709 13.9443 6.67983 13.8809C6.4207 13.8052 6.18176 13.6791 5.85627 13.5117L5.28595 13.2188C5.01288 13.0783 4.93267 13.0386 4.85301 13.0111C4.77323 12.9835 4.69111 12.9632 4.60757 12.9512C4.52417 12.9392 4.43461 12.9382 4.12775 12.9382H3.88556C3.69438 13.429 3.28084 13.8051 2.76512 13.9434C2.53181 14.0059 2.26722 14 2.00015 14C1.73308 14 1.46849 14.0059 1.23517 13.9434C0.660198 13.7892 0.210935 13.3399 0.0567877 12.765C-0.00572871 12.5317 0.000147117 12.2671 0.000147117 12V8.66667C0.000147117 8.3996 -0.00572863 8.13501 0.0567877 7.90169C0.210936 7.32672 0.660198 6.87746 1.23517 6.72331C1.46849 6.66079 1.73308 6.66667 2.00015 6.66667C2.26722 6.66667 2.53181 6.66079 2.76512 6.72331C3.26451 6.85719 3.66798 7.21418 3.86668 7.68229L5.48192 7.0651C5.74395 6.96488 5.93656 6.88943 6.14012 6.8444C6.31104 6.8066 6.48529 6.78556 6.6603 6.7819C6.86876 6.77756 7.07403 6.80566 7.35236 6.84115L10.2755 7.21354C11.0192 7.30838 11.6083 7.84735 11.7931 8.54427L11.8621 8.50391C13.0973 7.76458 14.6668 8.65421 14.6668 10.0938ZM1.33348 12C1.33348 12.1608 1.33334 12.2593 1.33674 12.334C1.33973 12.3996 1.34437 12.4193 1.34455 12.4199C1.37541 12.5348 1.46537 12.6247 1.58023 12.6556C1.58084 12.6558 1.60052 12.6604 1.66616 12.6634C1.74081 12.6668 1.83932 12.6667 2.00015 12.6667C2.16097 12.6667 2.25948 12.6668 2.33413 12.6634C2.39977 12.6604 2.41945 12.6558 2.42007 12.6556C2.53492 12.6247 2.62489 12.5348 2.65575 12.4199C2.65592 12.4193 2.66057 12.3996 2.66356 12.334C2.66695 12.2593 2.66681 12.1608 2.66681 12V8.66667C2.66681 8.50584 2.66695 8.40733 2.66356 8.33268C2.66057 8.26705 2.65592 8.24736 2.65575 8.24675C2.62489 8.13189 2.53492 8.04193 2.42007 8.01107C2.41945 8.01089 2.39977 8.00625 2.33413 8.00326C2.25948 7.99986 2.16097 8 2.00015 8C1.83932 8 1.74081 7.99986 1.66616 8.00326C1.60052 8.00625 1.58084 8.01089 1.58023 8.01107C1.46537 8.04193 1.37541 8.13189 1.34455 8.24675C1.34437 8.24736 1.33973 8.26704 1.33674 8.33268C1.33334 8.40733 1.33348 8.50584 1.33348 8.66667V12ZM13.3413 3.52018C13.3413 5.05481 12.0973 6.29877 10.5626 6.29883C9.73119 6.29883 8.98529 5.93354 8.47606 5.35482C8.15464 5.48458 7.8041 5.55728 7.437 5.55729C5.90233 5.55729 4.65835 4.31331 4.65835 2.77865C4.65841 1.24403 5.90237 0 7.437 0C8.26819 3.41109e-05 9.01325 0.366393 9.52163 0.943359C9.84314 0.813364 10.1945 0.741536 10.5626 0.741536C12.0972 0.741595 13.3412 1.9856 13.3413 3.52018ZM5.99168 2.77865C5.99168 3.57693 6.63871 4.22396 7.437 4.22396C7.58394 4.22395 7.72506 4.20131 7.85822 4.16081C7.8097 3.95516 7.784 3.74065 7.784 3.52018C7.78403 2.84034 8.02767 2.21727 8.43309 1.73438C8.17316 1.48623 7.82355 1.33336 7.437 1.33333C6.63875 1.33333 5.99174 1.98041 5.99168 2.77865Z",
        fill: "currentColor"
      }, null, -1)
    ])], 12, z5));
  }
}), dn = /* @__PURE__ */ g(I5, [["__scopeId", "data-v-83ebc898"]]), V5 = ["width", "height"], H5 = /* @__PURE__ */ h({
  __name: "CopyOutline",
  props: {
    size: { default: 20 }
  },
  setup(e) {
    return (n, t) => (a(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: e.size,
      height: e.size,
      style: L(f(z)(e.size)),
      viewBox: "0 0 18.3333 18.3333",
      fill: "none",
      "aria-hidden": "true",
      class: "g-icon-copy-outline"
    }, [...t[0] || (t[0] = [
      i("path", {
        d: "M16.6667 9.83317C16.6667 9.11951 16.6664 8.63431 16.6357 8.25928C16.6059 7.89393 16.5516 7.70683 16.4852 7.5765C16.3254 7.26296 16.0704 7.00792 15.7568 6.84815C15.6265 6.78174 15.4394 6.72744 15.0741 6.69759C14.699 6.66696 14.2138 6.66667 13.5002 6.66667H9.83317C9.11951 6.66667 8.63431 6.66696 8.25928 6.69759C7.89393 6.72744 7.70683 6.78174 7.5765 6.84815C7.26295 7.00792 7.00792 7.26295 6.84815 7.5765C6.78174 7.70683 6.72744 7.89393 6.69759 8.25928C6.66696 8.63431 6.66667 9.11951 6.66667 9.83317V13.5002C6.66667 14.2138 6.66696 14.699 6.69759 15.0741C6.72744 15.4394 6.78174 15.6265 6.84815 15.7568C7.00792 16.0704 7.26296 16.3254 7.5765 16.4852C7.70683 16.5516 7.89393 16.6059 8.25928 16.6357C8.63431 16.6664 9.11951 16.6667 9.83317 16.6667H13.5002C14.2138 16.6667 14.699 16.6664 15.0741 16.6357C15.4394 16.6059 15.6265 16.5516 15.7568 16.4852C16.0704 16.3254 16.3254 16.0704 16.4852 15.7568C16.5516 15.6265 16.6059 15.4394 16.6357 15.0741C16.6664 14.699 16.6667 14.2138 16.6667 13.5002V9.83317ZM11.6667 4.83317C11.6667 4.11951 11.6664 3.63431 11.6357 3.25928C11.6059 2.89393 11.5516 2.70683 11.4852 2.5765C11.3254 2.26296 11.0704 2.00793 10.7568 1.84815C10.6265 1.78174 10.4394 1.72744 10.0741 1.69759C9.69903 1.66696 9.21382 1.66667 8.50016 1.66667H4.83317C4.11951 1.66667 3.63431 1.66696 3.25928 1.69759C2.89393 1.72744 2.70683 1.78174 2.5765 1.84815C2.26295 2.00792 2.00792 2.26295 1.84815 2.5765C1.78174 2.70683 1.72744 2.89393 1.69759 3.25928C1.66696 3.63431 1.66667 4.11951 1.66667 4.83317V8.50016C1.66667 9.21382 1.66696 9.69903 1.69759 10.0741C1.72744 10.4394 1.78174 10.6265 1.84815 10.7568C2.00793 11.0704 2.26296 11.3254 2.5765 11.4852C2.70683 11.5516 2.89393 11.6059 3.25928 11.6357C3.63431 11.6664 4.11951 11.6667 4.83317 11.6667H5V9.83317C5 9.14693 4.99915 8.58202 5.03662 8.12337C5.0749 7.65499 5.15689 7.22408 5.36296 6.81966C5.68251 6.19257 6.19257 5.68251 6.81966 5.36296C7.22408 5.15689 7.65499 5.0749 8.12337 5.03662C8.58202 4.99915 9.14693 5 9.83317 5H11.6667V4.83317ZM13.3333 5H13.5002C14.1864 5 14.7513 4.99915 15.21 5.03662C15.6783 5.0749 16.1093 5.15689 16.5137 5.36296C17.1408 5.68251 17.6508 6.19257 17.9704 6.81966C18.1764 7.22408 18.2584 7.65499 18.2967 8.12337C18.3342 8.58202 18.3333 9.14693 18.3333 9.83317V13.5002C18.3333 14.1864 18.3342 14.7513 18.2967 15.21C18.2584 15.6783 18.1764 16.1093 17.9704 16.5137C17.6508 17.1408 17.1408 17.6508 16.5137 17.9704C16.1093 18.1764 15.6783 18.2584 15.21 18.2967C14.7513 18.3342 14.1864 18.3333 13.5002 18.3333H9.83317C9.14693 18.3333 8.58202 18.3342 8.12337 18.2967C7.65499 18.2584 7.22408 18.1764 6.81966 17.9704C6.19257 17.6508 5.68251 17.1408 5.36296 16.5137C5.15689 16.1093 5.0749 15.6783 5.03662 15.21C4.99915 14.7513 5 14.1864 5 13.5002V13.3333H4.83317C4.14693 13.3333 3.58202 13.3342 3.12337 13.2967C2.65499 13.2584 2.22408 13.1764 1.81966 12.9704C1.19257 12.6508 0.682514 12.1408 0.362957 11.5137C0.156895 11.1093 0.0748968 10.6783 0.0366227 10.21C-0.00085044 9.75131 1.52207e-06 9.18641 1.62438e-06 8.50016V4.83317C1.52182e-06 4.14693 -0.000850431 3.58202 0.0366227 3.12337C0.0748968 2.65499 0.156895 2.22408 0.362957 1.81966C0.682515 1.19257 1.19257 0.682515 1.81966 0.362957C2.22408 0.156895 2.65499 0.0748968 3.12337 0.0366227C3.58202 -0.00085044 4.14693 1.52207e-06 4.83317 1.62438e-06H8.50016C9.18641 1.52207e-06 9.75131 -0.00085044 10.21 0.0366227C10.6783 0.0748968 11.1093 0.156895 11.5137 0.362957C12.1408 0.682514 12.6508 1.19257 12.9704 1.81966C13.1764 2.22408 13.2584 2.65499 13.2967 3.12337C13.3342 3.58202 13.3333 4.14693 13.3333 4.83317V5Z",
        fill: "currentColor"
      }, null, -1)
    ])], 12, V5));
  }
}), un = /* @__PURE__ */ g(H5, [["__scopeId", "data-v-e5b0db3a"]]), Z5 = ["width", "height"], B5 = /* @__PURE__ */ h({
  __name: "CreditCardMinus",
  props: {
    size: { default: 12 }
  },
  setup(e) {
    return (n, t) => (a(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: e.size,
      height: e.size,
      style: L(f(z)(e.size)),
      viewBox: "0 0 12 12",
      fill: "none",
      "aria-hidden": "true",
      class: "g-icon-credit-card-minus"
    }, [...t[0] || (t[0] = [
      i("path", {
        d: "M8.0801 6.118H11C11.2761 6.118 11.5 6.342 11.5 6.618C11.5 6.894 11.2761 7.118 11 7.118H8.0801C7.8039 7.118 7.5801 6.894 7.5801 6.618C7.5801 6.342 7.8039 6.118 8.0801 6.118ZM10.5 3.96V3.5H1.5V5.1C1.5 5.528 1.5002 5.819 1.5186 6.044C1.5365 6.264 1.569 6.376 1.6089 6.454C1.7048 6.642 1.8578 6.795 2.0459 6.891C2.1241 6.931 2.2364 6.964 2.4556 6.981C2.6806 7 2.9717 7 3.3999 7H6.4302C6.7062 7 6.9302 7.224 6.9302 7.5C6.9302 7.776 6.7062 8 6.4302 8H3.3999C2.9882 8 2.6492 8.001 2.374 7.978C2.093 7.955 1.8345 7.906 1.5918 7.782C1.2155 7.59 0.9095 7.284 0.7178 6.908C0.5941 6.666 0.5449 6.407 0.522 6.126C0.4995 5.851 0.5 5.512 0.5 5.1V2.8999C0.5 2.4882 0.4995 2.1492 0.522 1.874C0.5449 1.593 0.5941 1.3345 0.7178 1.0918C0.9095 0.7155 1.2155 0.4095 1.5918 0.2178C1.8345 0.0941 2.093 0.0449 2.374 0.022C2.6492 0 2.9882 0 3.3999 0H8.6001C9.0118 0 9.3508 0 9.626 0.022C9.907 0.0449 10.1656 0.0941 10.4082 0.2178C10.7845 0.4095 11.0905 0.7155 11.2822 1.0918C11.4059 1.3345 11.4551 1.593 11.478 1.874C11.5005 2.1492 11.5 2.4882 11.5 2.8999V3.96C11.4999 4.236 11.2761 4.46 11 4.46C10.7239 4.46 10.5001 4.236 10.5 3.96ZM3.3999 1C2.9717 1 2.6806 1.0002 2.4556 1.0186C2.2364 1.0365 2.1241 1.069 2.0459 1.1089C1.8578 1.2048 1.7048 1.3578 1.6089 1.5459C1.569 1.6241 1.5365 1.7364 1.5186 1.9556C1.5066 2.1023 1.5035 2.2773 1.502 2.5H10.498C10.4965 2.2773 10.4934 2.1023 10.4814 1.9556C10.4635 1.7364 10.431 1.6241 10.3911 1.5459C10.2952 1.3578 10.1422 1.2048 9.9541 1.1089C9.8759 1.069 9.7636 1.0365 9.5444 1.0186C9.3194 1.0002 9.0283 1 8.6001 1H3.3999Z",
        fill: "currentColor"
      }, null, -1)
    ])], 12, Z5));
  }
}), Cn = /* @__PURE__ */ g(B5, [["__scopeId", "data-v-74e2be6f"]]), S5 = ["width", "height"], R5 = /* @__PURE__ */ h({
  __name: "CreditCardPlus",
  props: {
    size: { default: 12 }
  },
  setup(e) {
    return (n, t) => (a(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: e.size,
      height: e.size,
      style: L(f(z)(e.size)),
      viewBox: "0 0 12 12",
      fill: "none",
      "aria-hidden": "true",
      class: "g-icon-credit-card-plus"
    }, [...t[0] || (t[0] = [
      i("path", {
        d: "M9.04 8.078V7.118H8.0801C7.8039 7.118 7.5801 6.894 7.5801 6.618C7.5801 6.342 7.8039 6.118 8.0801 6.118H9.04V5.158C9.0401 4.882 9.2639 4.658 9.54 4.658C9.8161 4.658 10.04 4.882 10.04 5.158V6.118H11C11.2761 6.118 11.5 6.342 11.5 6.618C11.5 6.894 11.2761 7.118 11 7.118H10.04V8.078C10.04 8.354 9.8161 8.578 9.54 8.578C9.2639 8.578 9.0401 8.354 9.04 8.078ZM10.5 3.96V3.5H1.5V5.1C1.5 5.528 1.5002 5.819 1.5186 6.044C1.5365 6.264 1.569 6.376 1.6089 6.454C1.7048 6.642 1.8578 6.795 2.0459 6.891C2.1241 6.931 2.2364 6.964 2.4556 6.981C2.6806 7 2.9717 7 3.3999 7H6.4302C6.7062 7 6.9302 7.224 6.9302 7.5C6.9302 7.776 6.7062 8 6.4302 8H3.3999C2.9882 8 2.6492 8.001 2.374 7.978C2.093 7.955 1.8345 7.906 1.5918 7.782C1.2155 7.59 0.9095 7.284 0.7178 6.908C0.5941 6.666 0.5449 6.407 0.522 6.126C0.4995 5.851 0.5 5.512 0.5 5.1V2.8999C0.5 2.4882 0.4995 2.1492 0.522 1.874C0.5449 1.593 0.5941 1.3345 0.7178 1.0918C0.9095 0.7155 1.2155 0.4095 1.5918 0.2178C1.8345 0.0941 2.093 0.0449 2.374 0.022C2.6492 0 2.9882 0 3.3999 0H8.6001C9.0118 0 9.3508 0 9.626 0.022C9.907 0.0449 10.1656 0.0941 10.4082 0.2178C10.7845 0.4095 11.0905 0.7155 11.2822 1.0918C11.4059 1.3345 11.4551 1.593 11.478 1.874C11.5005 2.1492 11.5 2.4882 11.5 2.8999V3.96C11.4999 4.236 11.2761 4.46 11 4.46C10.7239 4.46 10.5001 4.236 10.5 3.96ZM3.3999 1C2.9717 1 2.6806 1.0002 2.4556 1.0186C2.2364 1.0365 2.1241 1.069 2.0459 1.1089C1.8578 1.2048 1.7048 1.3578 1.6089 1.5459C1.569 1.6241 1.5365 1.7364 1.5186 1.9556C1.5066 2.1023 1.5035 2.2773 1.502 2.5H10.498C10.4965 2.2773 10.4934 2.1023 10.4814 1.9556C10.4635 1.7364 10.431 1.6241 10.3911 1.5459C10.2952 1.3578 10.1422 1.2048 9.9541 1.1089C9.8759 1.069 9.7636 1.0365 9.5444 1.0186C9.3194 1.0002 9.0283 1 8.6001 1H3.3999Z",
        fill: "currentColor"
      }, null, -1)
    ])], 12, S5));
  }
}), hn = /* @__PURE__ */ g(R5, [["__scopeId", "data-v-9baa69f3"]]), T5 = ["width", "height"], E5 = /* @__PURE__ */ h({
  __name: "Delete",
  props: {
    size: { default: 20 }
  },
  setup(e) {
    return (n, t) => (a(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: e.size,
      height: e.size,
      style: L(f(z)(e.size)),
      viewBox: "0 0 20 20",
      fill: "none",
      "aria-hidden": "true",
      class: "g-icon-delete"
    }, [...t[0] || (t[0] = [
      i("g", { transform: "translate(1.864 2.5)" }, [
        i("path", {
          d: "M10.8809 4.41081C11.2063 4.08537 11.7338 4.08537 12.0592 4.41081C12.3847 4.73624 12.3847 5.26376 12.0592 5.58919L10.1484 7.5L12.0592 9.41081C12.3847 9.73624 12.3847 10.2638 12.0592 10.5892C11.7338 10.9146 11.2063 10.9146 10.8809 10.5892L8.97005 8.67839L7.05924 10.5892C6.73381 10.9146 6.2063 10.9146 5.88086 10.5892C5.55542 10.2638 5.55542 9.73624 5.88086 9.41081L7.79167 7.5L5.88086 5.58919C5.55542 5.26376 5.55542 4.73624 5.88086 4.41081C6.2063 4.08537 6.73381 4.08537 7.05924 4.41081L8.97005 6.32161L10.8809 4.41081Z",
          fill: "currentColor"
        }),
        i("path", {
          d: "M14.8034 2.5C14.8034 2.03976 14.4303 1.66667 13.9701 1.66667H5.00033C4.68471 1.66667 4.39606 1.84501 4.25488 2.12728L1.75488 7.12728C1.63758 7.36188 1.63758 7.63811 1.75488 7.87272L4.25488 12.8727C4.39606 13.155 4.68471 13.3333 5.00033 13.3333H13.9701C14.4303 13.3333 14.8034 12.9602 14.8034 12.5V2.5ZM16.4701 12.5C16.4701 13.8807 15.3508 15 13.9701 15H5.00033C4.05343 15 3.18749 14.4651 2.764 13.6182L0.263997 8.61816C-0.087912 7.91435 -0.0879118 7.08565 0.263997 6.38184L2.764 1.38184C3.18749 0.534925 4.05343 0 5.00033 0H13.9701C15.3508 0 16.4701 1.11929 16.4701 2.5V12.5Z",
          fill: "currentColor"
        })
      ], -1)
    ])], 12, T5));
  }
}), fn = /* @__PURE__ */ g(E5, [["__scopeId", "data-v-f43b8283"]]), D5 = ["width", "height"], A5 = /* @__PURE__ */ h({
  __name: "Eye",
  props: {
    size: { default: 20 }
  },
  setup(e) {
    return (n, t) => (a(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: e.size,
      height: e.size,
      style: L(f(z)(e.size)),
      viewBox: "0 0 21.4746 16",
      fill: "none",
      "aria-hidden": "true",
      class: "g-icon-eye"
    }, [...t[0] || (t[0] = [
      i("path", {
        d: "M10.7373 0C17.1023 4.99468e-05 20.0196 4.09879 21.1113 6.29004C21.1594 6.38662 21.2261 6.51729 21.2852 6.69043C21.3423 6.858 21.3847 7.03968 21.4268 7.26465C21.4662 7.47568 21.4746 7.78141 21.4746 8C21.4746 8.21859 21.4662 8.52432 21.4268 8.73535C21.3847 8.96032 21.3423 9.142 21.2852 9.30957C21.2261 9.48271 21.1594 9.61338 21.1113 9.70996C20.0196 11.9012 17.1023 16 10.7373 16C4.37226 16 1.45404 11.9012 0.362305 9.70996C0.314202 9.61342 0.248393 9.4825 0.189453 9.30957C0.13236 9.14201 0.0899266 8.96032 0.0478516 8.73535C0.00838357 8.52432 0 8.2186 0 8C1.20765e-08 7.7814 0.0083836 7.47568 0.0478516 7.26465C0.0899266 7.03968 0.13236 6.85799 0.189453 6.69043C0.248393 6.5175 0.314202 6.38658 0.362305 6.29004C1.45404 4.09878 4.37226 0 10.7373 0ZM10.7373 2C5.43982 2 3.07093 5.33998 2.15332 7.18164C2.10141 7.28583 2.09226 7.30591 2.08203 7.33594C2.06985 7.37177 2.0484 7.44621 2.01367 7.63184C2.01583 7.62034 2.01042 7.64929 2.00586 7.73535C2.00185 7.81102 2 7.90358 2 8C2 8.09642 2.00185 8.18898 2.00586 8.26465C2.01042 8.35071 2.01583 8.37966 2.01367 8.36816C2.0484 8.55379 2.06985 8.62823 2.08203 8.66406C2.09226 8.69409 2.10141 8.71417 2.15332 8.81836C3.07093 10.66 5.43982 14 10.7373 14C16.0348 14 18.4037 10.66 19.3213 8.81836C19.3732 8.71417 19.3823 8.69409 19.3926 8.66406C19.4048 8.6282 19.4262 8.5537 19.4609 8.36816C19.4588 8.37977 19.4632 8.35078 19.4678 8.26465C19.4718 8.18898 19.4746 8.09642 19.4746 8C19.4746 7.90358 19.4718 7.81102 19.4678 7.73535C19.4632 7.64922 19.4588 7.62023 19.4609 7.63184C19.4262 7.4463 19.4048 7.3718 19.3926 7.33594C19.3823 7.30591 19.3732 7.28583 19.3213 7.18164C18.4037 5.34001 16.0348 2.00005 10.7373 2ZM12.7373 8C12.7373 6.89547 11.8418 6.00006 10.7373 6C9.63274 6 8.7373 6.89543 8.7373 8C8.7373 9.10457 9.63274 10 10.7373 10C11.8418 9.99994 12.7373 9.10453 12.7373 8ZM14.7373 8C14.7373 10.2091 12.9464 11.9999 10.7373 12C8.52817 12 6.7373 10.2091 6.7373 8C6.7373 5.79086 8.52817 4 10.7373 4C12.9464 4.00006 14.7373 5.7909 14.7373 8Z",
        fill: "currentColor"
      }, null, -1)
    ])], 12, D5));
  }
}), F5 = /* @__PURE__ */ g(A5, [["__scopeId", "data-v-555523de"]]), P5 = ["width", "height"], O5 = /* @__PURE__ */ h({
  __name: "EyeOff",
  props: {
    size: { default: 20 }
  },
  setup(e) {
    return (n, t) => (a(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: e.size,
      height: e.size,
      style: L(f(z)(e.size)),
      viewBox: "0 0 18.3332 18.3332",
      fill: "none",
      "aria-hidden": "true",
      class: "g-icon-eye-off"
    }, [...t[0] || (t[0] = [
      i("path", {
        d: "M0.244078 0.244078C0.569515 -0.0813592 1.09703 -0.0813592 1.42246 0.244078L18.0891 16.9107C18.4146 17.2362 18.4146 17.7637 18.0891 18.0891C17.7637 18.4146 17.2362 18.4146 16.9107 18.0891L13.6539 14.8323C12.4435 15.4376 10.9621 15.8333 9.1666 15.8333C3.8624 15.8333 1.43136 12.4176 0.521584 10.5916C0.481484 10.5111 0.425905 10.4022 0.376727 10.2579C0.329154 10.1183 0.293781 9.96685 0.258726 9.7794C0.225851 9.60358 0.218844 9.34878 0.21885 9.1666C0.218861 8.98451 0.225862 8.72967 0.258726 8.55381C0.293825 8.36623 0.329049 8.21428 0.376727 8.07448C0.42597 7.93016 0.481385 7.82067 0.521584 7.74001C0.979111 6.82203 1.81854 5.49791 3.22992 4.4083L0.244078 1.42246C-0.0813592 1.09703 -0.0813592 0.569515 0.244078 0.244078ZM4.42132 5.59971C3.16762 6.50963 2.419 7.66974 2.01328 8.48382C1.97003 8.57062 1.96244 8.58733 1.95388 8.61241C1.9437 8.64225 1.92596 8.70457 1.89691 8.8598C1.89878 8.84983 1.89504 8.87395 1.89121 8.94606C1.88787 9.00912 1.88552 9.08626 1.88552 9.1666C1.88551 9.24694 1.88787 9.3241 1.89121 9.38714C1.89388 9.43743 1.89605 9.46435 1.89691 9.47259C1.92589 9.62757 1.94371 9.69009 1.95388 9.71999C1.9624 9.74501 1.97002 9.76174 2.01328 9.84857C2.77795 11.3833 4.75199 14.1666 9.1666 14.1666C10.4471 14.1666 11.5113 13.9338 12.3958 13.5742L10.8585 12.0369C10.3623 12.3299 9.78407 12.4999 9.1666 12.4999C7.32566 12.4999 5.83327 11.0076 5.83327 9.1666C5.83327 8.54903 6.00245 7.97017 6.29551 7.4739L4.42132 5.59971ZM9.1666 2.49994C14.4708 2.49994 16.9018 5.91559 17.8116 7.74164C17.8517 7.82213 17.9073 7.93101 17.9565 8.0753C18.004 8.21492 18.0394 8.36637 18.0745 8.55381C18.1073 8.72959 18.1144 8.98443 18.1144 9.1666C18.1143 9.3488 18.1074 9.60433 18.0745 9.78021C18.0394 9.96762 18.0042 10.1189 17.9565 10.2587C17.9072 10.4032 17.8511 10.5131 17.8108 10.594C17.5839 11.0492 17.2656 11.599 16.8334 12.1695C16.5555 12.5364 16.0325 12.6086 15.6656 12.3307C15.2991 12.0528 15.2269 11.5304 15.5045 11.1637C15.8642 10.6888 16.1301 10.2294 16.3191 9.8502C16.3626 9.76293 16.3707 9.74613 16.3793 9.7208C16.3895 9.69088 16.4072 9.62866 16.4363 9.47341C16.4344 9.48366 16.4381 9.45952 16.442 9.38714C16.4453 9.3241 16.4477 9.24691 16.4477 9.1666C16.4477 9.08628 16.4453 9.0091 16.442 8.94606C16.4381 8.87348 16.4343 8.85001 16.4363 8.86061C16.4073 8.7056 16.3895 8.64311 16.3793 8.61322C16.3708 8.58819 16.3632 8.57148 16.3199 8.48464C15.5553 6.94993 13.5812 4.1666 9.1666 4.1666C8.81737 4.1666 8.48479 4.18401 8.16807 4.21625C7.71024 4.26284 7.30084 3.92942 7.25417 3.47162C7.20758 3.01387 7.54111 2.6045 7.9988 2.55772C8.37293 2.51964 8.76231 2.49994 9.1666 2.49994ZM7.49994 9.1666C7.49994 10.0871 8.24613 10.8333 9.1666 10.8333C9.3158 10.8333 9.45976 10.8121 9.59711 10.7755L7.5569 8.73529C7.52021 8.8728 7.49994 9.0172 7.49994 9.1666Z",
        fill: "currentColor"
      }, null, -1)
    ])], 12, P5));
  }
}), U5 = /* @__PURE__ */ g(O5, [["__scopeId", "data-v-5e2b62bd"]]), N5 = ["width", "height"], q5 = /* @__PURE__ */ h({
  __name: "Gear",
  props: {
    size: { default: 16 }
  },
  setup(e) {
    return (n, t) => (a(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: e.size,
      height: e.size,
      style: L(f(z)(e.size)),
      viewBox: "0 0 13.5014 14.9186",
      fill: "none",
      "aria-hidden": "true",
      class: "g-icon-gear"
    }, [...t[0] || (t[0] = [
      i("path", {
        d: "M6.7504 2.89794e-08C7.17022 -6.85164e-05 7.58134 0.121463 7.93334 0.35026C8.28475 0.578693 8.56239 0.904233 8.73282 1.28711L9.13256 2.17969L9.13386 2.18294C9.21728 2.37166 9.35809 2.52939 9.53621 2.63346H9.53686C9.69464 2.72443 9.87401 2.76969 10.0551 2.76497L10.1326 2.75977L11.1026 2.6569H11.1033C11.5207 2.61275 11.9421 2.69036 12.3162 2.88086C12.6899 3.07122 13.0003 3.36597 13.21 3.72917C13.4201 4.09252 13.5204 4.50928 13.4984 4.92839C13.4764 5.34757 13.3334 5.75177 13.0863 6.09115L12.5108 6.88086C12.3886 7.04893 12.3233 7.25186 12.3233 7.45964V7.46289C12.3223 7.67055 12.387 7.8731 12.5082 8.04167L13.0831 8.83203C13.33 9.17136 13.4731 9.57505 13.4952 9.99414C13.5172 10.4133 13.4175 10.83 13.2074 11.1934L13.2068 11.1927C12.997 11.5562 12.6868 11.8512 12.3129 12.0417C11.9856 12.2083 11.6223 12.2888 11.2569 12.2767L11.1 12.2663L10.1287 12.1628V12.1621C9.92196 12.1406 9.71363 12.1852 9.5336 12.2891L9.53295 12.2884C9.35495 12.3917 9.21398 12.5491 9.12996 12.737L9.13061 12.7376L8.73347 13.6302C8.56312 14.0137 8.28516 14.3396 7.93334 14.5684C7.58135 14.7972 7.17022 14.9187 6.7504 14.9186C6.33068 14.9186 5.92002 14.7971 5.56811 14.5684C5.21616 14.3396 4.93771 14.0138 4.76733 13.6302V13.6296L4.37084 12.7376V12.737C4.28664 12.5473 4.14432 12.3889 3.96459 12.2852C3.7844 12.1812 3.57576 12.1365 3.36889 12.1582L3.36954 12.1589L2.39818 12.2624H2.39753C1.98029 12.3062 1.55915 12.2282 1.18529 12.0378C0.858141 11.8711 0.579297 11.6247 0.374096 11.3223L0.290763 11.1895C0.0807125 10.826 -0.0190489 10.4094 0.00300253 9.99023C0.0250627 9.57111 0.16813 9.16746 0.415112 8.82813L0.989982 8.03776C1.11213 7.86972 1.17816 7.66738 1.17813 7.45964C1.17817 7.2518 1.11221 7.04895 0.989982 6.88086L0.415112 6.09115C0.168076 5.75177 0.0250547 5.34757 0.00300253 4.92839C-0.019004 4.50927 0.0807351 4.09253 0.290763 3.72917H0.291414C0.50117 3.36601 0.811574 3.0712 1.18529 2.88086C1.55921 2.69046 1.98026 2.61282 2.39753 2.6569H2.39818L3.37214 2.75977H3.37149C3.57847 2.7815 3.78757 2.73745 3.96785 2.63346C4.14599 2.5294 4.28676 2.37167 4.37019 2.18294L4.37084 2.18164L4.76733 1.28906L4.83634 1.14779C5.00851 0.825217 5.26011 0.550456 5.56811 0.35026C5.91999 0.121576 6.33073 -1.57497e-05 6.7504 2.89794e-08ZM8.11238 7.45964C8.11238 6.70754 7.50245 6.09783 6.7504 6.09766C5.9982 6.09766 5.38842 6.70744 5.38842 7.45964C5.38852 8.21175 5.99826 8.82161 6.7504 8.82161C7.50239 8.82144 8.11228 8.21164 8.11238 7.45964ZM2.51147 7.45964C2.51149 7.88794 2.39282 8.30671 2.17032 8.66992L2.06811 8.82227L1.49324 9.61263C1.39809 9.74335 1.34288 9.89909 1.33438 10.0605C1.32594 10.2219 1.36423 10.3822 1.44506 10.5221C1.52601 10.6622 1.64595 10.7761 1.79011 10.8496C1.93403 10.9229 2.09628 10.9529 2.25691 10.9362L3.22826 10.8327H3.22957C3.71624 10.7816 4.2067 10.8857 4.63061 11.1302V11.1309C5.05453 11.3755 5.39022 11.748 5.58894 12.1953L5.98608 13.0885C6.05174 13.2364 6.15902 13.3623 6.29467 13.4505C6.43031 13.5387 6.58863 13.5853 6.7504 13.5853C6.9121 13.5853 7.07053 13.5386 7.20613 13.4505C7.34178 13.3623 7.44906 13.2364 7.51472 13.0885H7.51537L7.91186 12.1953L7.91251 12.1947C8.111 11.7498 8.44472 11.3788 8.86628 11.1348L8.86759 11.1341C9.29152 10.8896 9.78193 10.7855 10.2686 10.8366H10.2693L11.2413 10.9401H11.2406C11.4015 10.9571 11.564 10.9269 11.7081 10.8535C11.8521 10.7801 11.9717 10.6666 12.0525 10.5267L12.0531 10.526C12.134 10.3861 12.1723 10.2252 12.1638 10.0638C12.1553 9.90247 12.1 9.74716 12.005 9.61654L11.4301 8.82617L11.4288 8.82422C11.1413 8.42627 10.9876 7.9473 10.99 7.45638C10.9906 6.96791 11.1454 6.49214 11.4327 6.09701V6.09635L12.0082 5.30599C12.1032 5.17536 12.1586 5.02003 12.1671 4.85872C12.1734 4.73762 12.1531 4.61697 12.1085 4.50521L12.0557 4.39648C11.9749 4.25636 11.8548 4.14243 11.7107 4.06901C11.5666 3.99566 11.404 3.96476 11.2432 3.98177L11.2439 3.98242L10.2725 4.08594H10.2719C9.78509 4.13706 9.29418 4.03298 8.87019 3.78841L8.86889 3.78711C8.44736 3.5422 8.11352 3.1708 7.91576 2.72526L7.51602 1.83203L7.51472 1.83008C7.44906 1.68224 7.34176 1.55626 7.20613 1.4681C7.07055 1.38007 6.91205 1.33331 6.7504 1.33333C6.58868 1.33332 6.43028 1.37999 6.29467 1.4681C6.15902 1.55627 6.05174 1.68221 5.98608 1.83008L5.58894 2.72135L5.58959 2.72201C5.39206 3.16883 5.05819 3.54162 4.63582 3.78711L4.63386 3.78841C4.20987 4.03298 3.71896 4.13706 3.23217 4.08594H3.23152L2.25756 3.98242C2.0967 3.96542 1.93425 3.9956 1.79011 4.06901C1.646 4.14243 1.52654 4.25639 1.44571 4.39648H1.44506C1.36415 4.53646 1.32589 4.69727 1.33438 4.85872C1.3429 5.02009 1.39816 5.17534 1.49324 5.30599L2.06811 6.09635V6.09701C2.35607 6.49303 2.51156 6.96998 2.51147 7.45964ZM9.44571 7.45964C9.44561 8.94802 8.23877 10.1548 6.7504 10.1549C5.26188 10.1549 4.05519 8.94813 4.05509 7.45964C4.05509 5.97106 5.26182 4.76432 6.7504 4.76432C8.23883 4.7645 9.44571 5.97116 9.44571 7.45964Z",
        fill: "currentColor"
      }, null, -1)
    ])], 12, N5));
  }
}), mn = /* @__PURE__ */ g(q5, [["__scopeId", "data-v-a3425668"]]), G5 = ["width", "height"], j5 = /* @__PURE__ */ h({
  __name: "HelpCircle",
  props: {
    size: { default: 16 }
  },
  setup(e) {
    return (n, t) => (a(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: e.size,
      height: e.size,
      style: L(f(z)(e.size)),
      viewBox: "0 0 13.5043 13.6494",
      fill: "none",
      "aria-hidden": "true",
      class: "g-icon-help-circle"
    }, [...t[0] || (t[0] = [
      i("path", {
        d: "M12.171 6.66667C12.171 3.72115 9.78317 1.33333 6.83765 1.33333C3.89225 1.33347 1.50432 3.72123 1.50432 6.66667C1.50432 7.26983 1.60461 7.84843 1.78817 8.38737C1.98914 8.97752 2.07685 9.67678 1.85197 10.36L1.35262 11.877C1.27192 12.1221 1.48852 12.3619 1.74064 12.3066L4.10783 11.7878C4.60551 11.6787 5.09541 11.7284 5.5258 11.8372C5.94481 11.9432 6.38412 12 6.83765 12C9.78317 12 12.171 9.61218 12.171 6.66667ZM6.81877 9.26172C7.18693 9.26176 7.48544 9.56022 7.48544 9.92838C7.48527 10.2964 7.18682 10.595 6.81877 10.5951H6.81096C6.44287 10.5951 6.14446 10.2964 6.14429 9.92838C6.14429 9.56019 6.44277 9.26172 6.81096 9.26172H6.81877ZM5.56096 3.73893C6.05408 3.44918 6.63395 3.34341 7.19767 3.4401C7.76143 3.5368 8.27266 3.83001 8.64103 4.26758C9.0092 4.70493 9.21066 5.25841 9.21004 5.83008C9.21004 6.84816 8.54256 7.46501 8.01343 7.78841C7.74286 7.95378 7.4778 8.06381 7.28361 8.13216C7.18547 8.1667 7.10248 8.19154 7.04208 8.20833C7.01178 8.21675 6.98697 8.22328 6.96851 8.22786C6.95928 8.23016 6.95169 8.23232 6.94572 8.23372C6.94274 8.23442 6.94004 8.23454 6.93791 8.23503C6.93695 8.23524 6.93609 8.2355 6.9353 8.23568L6.934 8.23633C6.93375 8.23638 6.93283 8.2364 6.78817 7.58594L6.9327 8.23633C6.57337 8.31615 6.21707 8.08979 6.13713 7.73047C6.05723 7.37121 6.28383 7.01502 6.64299 6.9349C6.64406 6.93464 6.6458 6.93403 6.64754 6.93359C6.65487 6.93177 6.6679 6.92867 6.6853 6.92383C6.72084 6.91395 6.77476 6.89763 6.8409 6.87435C6.97583 6.82686 7.14986 6.75386 7.31812 6.65104C7.66675 6.43796 7.87671 6.17712 7.87671 5.83008V5.82878C7.87702 5.57175 7.78639 5.32294 7.62085 5.1263C7.4553 4.9297 7.22572 4.79806 6.97241 4.75456C6.71906 4.7111 6.45838 4.75848 6.23674 4.88867C6.01504 5.01896 5.84616 5.22357 5.76083 5.46615C5.63862 5.81343 5.25787 5.99587 4.91057 5.8737C4.56344 5.7514 4.38087 5.37066 4.50301 5.02344C4.69285 4.48389 5.06784 4.02874 5.56096 3.73893ZM13.5043 6.66667C13.5043 10.3486 10.5195 13.3333 6.83765 13.3333C6.27305 13.3333 5.72393 13.2629 5.19898 13.1302C4.90068 13.0548 4.62949 13.0387 4.39299 13.0905L2.0258 13.6094C0.765283 13.8856 -0.317643 12.686 0.085696 11.4603L0.585045 9.94336C0.691684 9.61938 0.666687 9.2307 0.5258 8.81706C0.295724 8.14153 0.170982 7.41794 0.170982 6.66667C0.170982 2.98485 3.15587 0.000138124 6.83765 0C10.5195 0 13.5043 2.98477 13.5043 6.66667Z",
        fill: "currentColor"
      }, null, -1)
    ])], 12, G5));
  }
}), Re = /* @__PURE__ */ g(j5, [["__scopeId", "data-v-66eb3380"]]), W5 = ["width", "height"], Q5 = /* @__PURE__ */ h({
  __name: "Inbox",
  props: {
    size: {},
    width: { default: 22 },
    height: { default: 20 }
  },
  setup(e) {
    const n = e, t = C(() => n.size ?? n.width), s = C(() => n.size ?? n.height);
    return (o, c) => (a(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: t.value,
      height: s.value,
      style: L(f(z)(t.value, s.value)),
      viewBox: "0 0 22 20",
      fill: "none",
      "aria-hidden": "true",
      class: "g-icon-inbox"
    }, [...c[0] || (c[0] = [
      i("path", {
        d: "M20 11.5H17.0156C16.8112 11.5 16.6277 11.6246 16.5518 11.8145L16.3057 12.4287C15.926 13.3777 15.0066 14 13.9844 14H8.01562C6.99343 14 6.07404 13.3777 5.69434 12.4287L5.44824 11.8145C5.3723 11.6246 5.18882 11.5 4.98438 11.5H2V16C2 17.1046 2.89543 18 4 18H18C19.1046 18 20 17.1046 20 16V11.5ZM6.99219 2C6.18755 2 5.46073 2.48208 5.14844 3.22363L2.50586 9.5H4.98438C6.00657 9.5 6.92596 10.1223 7.30566 11.0713L7.55176 11.6855C7.6277 11.8754 7.81118 12 8.01562 12H13.9844C14.1888 12 14.3723 11.8754 14.4482 11.6855L14.6943 11.0713C15.074 10.1223 15.9934 9.5 17.0156 9.5H19.4941L16.8516 3.22363C16.5393 2.48208 15.8124 2 15.0078 2H6.99219ZM22 16C22 18.2091 20.2091 20 18 20H4C1.79086 20 0 18.2091 0 16V11.1055C4.72658e-05 10.5725 0.106663 10.0449 0.313477 9.55371L3.30566 2.44824C3.93019 0.964986 5.38281 0 6.99219 0H15.0078C16.6172 0 18.0698 0.964987 18.6943 2.44824L21.6865 9.55371C21.8933 10.0449 22 10.5725 22 11.1055V16Z",
        fill: "currentColor"
      }, null, -1)
    ])], 12, W5));
  }
}), gn = /* @__PURE__ */ g(Q5, [["__scopeId", "data-v-e7928db5"]]), K5 = ["width", "height"], Y5 = /* @__PURE__ */ h({
  __name: "Key",
  props: {
    size: { default: 12 }
  },
  setup(e) {
    return (n, t) => (a(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: e.size,
      height: e.size,
      style: L(f(z)(e.size)),
      viewBox: "0 0 10.0188 10.0191",
      fill: "none",
      "aria-hidden": "true",
      class: "g-icon-key"
    }, [...t[0] || (t[0] = [
      i("path", {
        d: "M4.42525 0.959562C5.70482 -0.319874 7.77944 -0.319834 9.05904 0.959562C10.3387 2.23918 10.3387 4.31422 9.05904 5.59384C8.36659 6.28622 7.4409 6.6021 6.53609 6.5455L5.08443 7.99765C4.97993 8.10208 4.83463 8.15505 4.68745 8.14218L4.24019 8.10263L4.13033 8.81503C4.11411 8.92 4.06479 9.01726 3.9897 9.09237C3.74138 9.34069 3.56618 9.51937 3.35738 9.65292C3.16504 9.77593 2.95438 9.86815 2.73335 9.92538C2.49348 9.98746 2.24334 9.99393 1.89253 10.0069C1.66088 10.0155 1.45726 10.0236 1.28951 10.0162C1.11655 10.0086 0.935517 9.98388 0.758743 9.90097C0.4769 9.76875 0.250316 9.54171 0.118118 9.25986C0.0352697 9.08313 0.0104736 8.90249 0.00288404 8.72958C-0.00447447 8.56177 0.00357694 8.35784 0.0121614 8.12607C0.0251529 7.77525 0.0315779 7.52514 0.0937044 7.28525C0.150953 7.06423 0.242665 6.85355 0.365677 6.66122C0.499226 6.45242 0.678397 6.2777 0.926712 6.02939L3.4731 3.48202C3.41675 2.57744 3.73301 1.6518 4.42525 0.959562ZM8.35201 1.66708C7.46291 0.777984 6.02138 0.777984 5.13228 1.66708C4.60605 2.19339 4.39085 2.91319 4.48824 3.59921C4.51034 3.75488 4.45781 3.91186 4.34663 4.02304L1.63374 6.73642C1.35477 7.01539 1.2699 7.10421 1.20845 7.20028C1.14223 7.30383 1.09278 7.41724 1.06197 7.53622C1.0334 7.64659 1.02578 7.76913 1.01118 8.16318C1.00199 8.41131 0.996747 8.56774 1.00191 8.68564C1.00686 8.79843 1.02057 8.82952 1.02339 8.83554C1.05642 8.90593 1.11315 8.96268 1.18355 8.9957C1.18976 8.9986 1.22079 9.01224 1.33296 9.01718C1.45084 9.02235 1.60728 9.0166 1.85542 9.00741C2.24966 8.99281 2.37246 8.98571 2.48286 8.95712C2.60186 8.9263 2.71525 8.87687 2.8188 8.81064C2.90039 8.75845 2.97544 8.68814 3.16743 8.49765L3.32368 7.48739L3.33345 7.43954C3.39341 7.20494 3.61536 7.04397 3.86128 7.06552L4.54195 7.12558L5.99605 5.67196L6.03951 5.63339C6.14618 5.54911 6.28361 5.5115 6.41988 5.53085C7.10585 5.62819 7.82573 5.413 8.35201 4.88681C9.24108 3.99773 9.24104 2.55618 8.35201 1.66708ZM6.60103 1.83554C7.01303 1.80757 7.43679 1.95011 7.75288 2.2662C8.06895 2.58232 8.21155 3.00605 8.18355 3.41806C8.16481 3.69349 7.92625 3.90152 7.65083 3.8829C7.37533 3.86418 7.16678 3.62569 7.1855 3.35019C7.1949 3.21193 7.14771 3.07514 7.04585 2.97323C6.94399 2.87137 6.80713 2.82376 6.6689 2.8331C6.39339 2.85182 6.15491 2.64376 6.13618 2.36825C6.11746 2.09275 6.32552 1.85426 6.60103 1.83554Z",
        fill: "currentColor"
      }, null, -1)
    ])], 12, K5));
  }
}), pn = /* @__PURE__ */ g(Y5, [["__scopeId", "data-v-a5b9dd6e"]]), X5 = ["width", "height"], J5 = /* @__PURE__ */ h({
  __name: "Keyboard",
  props: {
    size: { default: 20 }
  },
  setup(e) {
    return (n, t) => (a(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: e.size,
      height: e.size,
      style: L(f(z)(e.size)),
      viewBox: "0 0 20 20",
      fill: "none",
      "aria-hidden": "true",
      class: "g-icon-keyboard"
    }, [...t[0] || (t[0] = [
      i("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M3.333 5.417c0-.69.56-1.25 1.25-1.25h10.834c.69 0 1.25.56 1.25 1.25v9.166c0 .69-.56 1.25-1.25 1.25H4.583c-.69 0-1.25-.56-1.25-1.25V5.417Zm1.25 0v9.166h10.834V5.417H4.583ZM6.25 7.5a.625.625 0 1 0 0 1.25h.008a.625.625 0 1 0 0-1.25H6.25Zm2.5 0a.625.625 0 1 0 0 1.25h.008a.625.625 0 1 0 0-1.25H8.75Zm2.5 0a.625.625 0 1 0 0 1.25h.008a.625.625 0 1 0 0-1.25H11.25Zm2.5 0a.625.625 0 1 0 0 1.25h.008a.625.625 0 1 0 0-1.25H13.75ZM6.25 10a.625.625 0 1 0 0 1.25h7.5a.625.625 0 1 0 0-1.25h-7.5ZM6.25 12.5a.625.625 0 1 0 0 1.25h.008a.625.625 0 1 0 0-1.25H6.25Zm2.5 0a.625.625 0 1 0 0 1.25h.008a.625.625 0 1 0 0-1.25H8.75Zm2.5 0a.625.625 0 1 0 0 1.25h.008a.625.625 0 1 0 0-1.25H11.25Zm2.5 0a.625.625 0 1 0 0 1.25h.008a.625.625 0 1 0 0-1.25H13.75Z",
        fill: "currentColor"
      }, null, -1)
    ])], 12, X5));
  }
}), vn = /* @__PURE__ */ g(J5, [["__scopeId", "data-v-6762790a"]]), et = ["width", "height"], tt = /* @__PURE__ */ h({
  __name: "Keyboard02",
  props: {
    size: { default: 20 }
  },
  setup(e) {
    return (n, t) => (a(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: e.size,
      height: e.size,
      style: L(f(z)(e.size)),
      viewBox: "0 0 20 20",
      fill: "none",
      "aria-hidden": "true",
      class: "g-icon-keyboard-02"
    }, [...t[0] || (t[0] = [
      v1('<rect x="2.75" y="4.75" width="14.5" height="10.5" rx="2" stroke="currentColor" stroke-width="1.5" data-v-6d520693></rect><rect x="5.25" y="7.25" width="1.5" height="1.5" rx="0.25" fill="currentColor" data-v-6d520693></rect><rect x="8.25" y="7.25" width="1.5" height="1.5" rx="0.25" fill="currentColor" data-v-6d520693></rect><rect x="11.25" y="7.25" width="1.5" height="1.5" rx="0.25" fill="currentColor" data-v-6d520693></rect><rect x="14.25" y="7.25" width="1.5" height="1.5" rx="0.25" fill="currentColor" data-v-6d520693></rect><rect x="6.5" y="11.25" width="7" height="1.5" rx="0.25" fill="currentColor" data-v-6d520693></rect>', 6)
    ])], 12, et));
  }
}), wn = /* @__PURE__ */ g(tt, [["__scopeId", "data-v-6d520693"]]), nt = ["width", "height"], st = /* @__PURE__ */ h({
  __name: "LineChartUp",
  props: {
    size: { default: 20 }
  },
  setup(e) {
    return (n, t) => (a(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: e.size,
      height: e.size,
      style: L(f(z)(e.size)),
      viewBox: "0 0 16.6667 16.6667",
      fill: "none",
      "aria-hidden": "true",
      class: "g-icon-line-chart-up"
    }, [...t[0] || (t[0] = [
      i("path", {
        d: "M0 0.833333C0 0.373096 0.373096 0 0.833333 0C1.29357 0 1.66667 0.373096 1.66667 0.833333V10.363L5.47607 6.22152C5.63348 6.0504 5.85556 5.95262 6.08805 5.95215C6.32051 5.95173 6.5428 6.04863 6.70085 6.21908L9.57764 9.32373L14.8861 4.01611C15.2115 3.69095 15.7391 3.6908 16.0645 4.01611C16.3898 4.34146 16.3896 4.86904 16.0645 5.1945L10.144 11.1149C9.98394 11.275 9.76573 11.3633 9.53939 11.359C9.31292 11.3547 9.09764 11.2583 8.94368 11.0921L6.09212 8.01432L1.67236 12.8182C1.67666 13.0446 1.6837 13.2373 1.69759 13.4074C1.72744 13.7727 1.78174 13.9598 1.84814 14.0902C2.00792 14.4037 2.26295 14.6587 2.5765 14.8185C2.70683 14.8849 2.89393 14.9392 3.25928 14.9691C3.63431 14.9997 4.11951 15 4.83317 15H15.8333C16.2936 15 16.6667 15.3731 16.6667 15.8333C16.6667 16.2936 16.2936 16.6667 15.8333 16.6667H4.83317C4.14693 16.6667 3.58202 16.6675 3.12337 16.63C2.65499 16.5918 2.22408 16.5098 1.81966 16.3037C1.19257 15.9842 0.682514 15.4741 0.362956 14.847C0.156893 14.4426 0.0748952 14.0117 0.0366211 13.5433C0.013308 13.258 0.00639531 12.9314 0.00325521 12.5602C0.000274031 12.519 0.000129445 12.4778 0.00325521 12.4365C0.00222784 12.2469 -3.16837e-08 12.046 0 11.8335V0.833333Z",
        fill: "currentColor"
      }, null, -1)
    ])], 12, nt));
  }
}), _n = /* @__PURE__ */ g(st, [["__scopeId", "data-v-5794b7e2"]]), at = ["width", "height"], ot = /* @__PURE__ */ h({
  __name: "Link02",
  props: {
    size: { default: 20 }
  },
  setup(e) {
    return (n, t) => (a(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: e.size,
      height: e.size,
      style: L(f(z)(e.size)),
      viewBox: "0 0 16.6708 16.6714",
      fill: "none",
      "aria-hidden": "true",
      class: "g-icon-link-02"
    }, [...t[0] || (t[0] = [
      i("path", {
        d: "M2.463 7.13748C2.78845 6.8122 3.316 6.8121 3.64139 7.13748C3.96667 7.46287 3.96663 7.99045 3.64139 8.31587L2.64285 9.3144C1.3411 10.6161 1.3411 12.727 2.64285 14.0288C3.94455 15.3302 6.0547 15.3302 7.35639 14.0288L8.35493 13.0302C8.68036 12.7048 9.20869 12.7048 9.53413 13.0302C9.85922 13.3556 9.85931 13.8833 9.53413 14.2086L8.53478 15.2071C6.58221 17.1595 3.41704 17.1595 1.46447 15.2071C-0.488155 13.2545 -0.488155 10.0886 1.46447 8.13602L2.463 7.13748ZM10.1225 5.3699C10.4479 5.04447 10.9763 5.04446 11.3017 5.3699C11.6268 5.69532 11.6269 6.22293 11.3017 6.54829L6.58735 11.2626C6.26199 11.5878 5.73436 11.5878 5.40896 11.2626C5.08353 10.9372 5.08353 10.4089 5.40896 10.0834L10.1225 5.3699ZM8.1352 1.46447C10.0878 -0.488155 13.2537 -0.488155 15.2063 1.46447C17.1589 3.41708 17.1589 6.58216 15.2063 8.53478L14.2477 9.49425C13.9222 9.81969 13.3939 9.81969 13.0685 9.49425C12.7434 9.16883 12.7433 8.64121 13.0685 8.31587L14.0279 7.35639C15.3297 6.05465 15.3297 3.94459 14.0279 2.64285C12.7262 1.34111 10.6162 1.34112 9.3144 2.64285L8.35493 3.60232C8.02959 3.92752 7.50196 3.92739 7.17654 3.60232C6.85111 3.27689 6.85111 2.74856 7.17654 2.42312L8.1352 1.46447Z",
        fill: "currentColor"
      }, null, -1)
    ])], 12, at));
  }
}), bn = /* @__PURE__ */ g(ot, [["__scopeId", "data-v-ecd5f94e"]]), it = ["width", "height"], lt = /* @__PURE__ */ h({
  __name: "LinkBroken",
  props: {
    size: { default: 12 }
  },
  setup(e) {
    return (n, t) => (a(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: e.size,
      height: e.size,
      style: L(f(z)(e.size)),
      viewBox: "0 0 22 22",
      fill: "none",
      "aria-hidden": "true",
      class: "g-icon-link-broken"
    }, [...t[0] || (t[0] = [
      i("path", {
        d: "M15 21V19C15 18.4477 15.4477 18 16 18C16.5523 18 17 18.4477 17 19V21C17 21.5523 16.5523 22 16 22C15.4477 22 15 21.5523 15 21ZM4.36523 9.63574C4.75573 9.24549 5.38884 9.24543 5.7793 9.63574C6.16974 10.0262 6.16959 10.6593 5.7793 11.0498L4.66309 12.166C3.23535 13.5938 3.23535 15.9091 4.66309 17.3369C6.09089 18.7647 8.40615 18.7647 9.83398 17.3369L10.9502 16.2207C11.3407 15.8304 11.9738 15.8303 12.3643 16.2207C12.7547 16.6112 12.7546 17.2442 12.3643 17.6348L11.248 18.751C9.03916 20.9598 5.45788 20.9598 3.24902 18.751C1.04024 16.5421 1.04024 12.9608 3.24902 10.752L4.36523 9.63574ZM21 15C21.5523 15 22 15.4477 22 16C22 16.5523 21.5523 17 21 17H19C18.4477 17 18 16.5523 18 16C18 15.4477 18.4477 15 19 15H21ZM10.7051 3.2959C12.914 1.08732 16.4953 1.08712 18.7041 3.2959C20.9128 5.50468 20.9127 9.08604 18.7041 11.2949L17.6318 12.3672C17.2414 12.7577 16.6083 12.7576 16.2178 12.3672C15.8272 11.9767 15.8272 11.3436 16.2178 10.9531L17.2891 9.88086C18.7169 8.45303 18.7169 6.13779 17.2891 4.70996C15.8613 3.28266 13.5469 3.28258 12.1191 4.70996L11.0469 5.78223C10.6564 6.17275 10.0233 6.17275 9.63281 5.78223C9.24229 5.3917 9.24229 4.75869 9.63281 4.36816L10.7051 3.2959ZM3 5C3.55228 5 4 5.44772 4 6C4 6.55228 3.55228 7 3 7H1C0.447715 7 0 6.55228 0 6C0 5.44772 0.447715 5 1 5H3ZM5 3V1C5 0.447715 5.44772 0 6 0C6.55228 0 7 0.447715 7 1V3C7 3.55228 6.55228 4 6 4C5.44772 4 5 3.55228 5 3Z",
        fill: "currentColor"
      }, null, -1)
    ])], 12, it));
  }
}), yn = /* @__PURE__ */ g(lt, [["__scopeId", "data-v-2758ff7e"]]), rt = ["width", "height"], ct = /* @__PURE__ */ h({
  __name: "LinkExternal",
  props: {
    size: { default: 16 }
  },
  setup(e) {
    return (n, t) => (a(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: e.size,
      height: e.size,
      style: L(f(z)(e.size)),
      viewBox: "0 0 13.3939 13.3353",
      fill: "none",
      "aria-hidden": "true",
      class: "g-icon-link-external"
    }, [...t[0] || (t[0] = [
      i("path", {
        d: "M1.29974e-06 9.46875V5.20182C1.22407e-06 4.65283 -0.000680531 4.20091 0.0292982 3.83398C0.0599171 3.45928 0.125514 3.11456 0.290366 2.79102C0.546011 2.28934 0.954059 1.8813 1.45573 1.62565C1.77927 1.4608 2.124 1.3952 2.4987 1.36458C2.86562 1.3346 3.31754 1.33529 3.86654 1.33529H5.40755C5.77568 1.33536 6.07422 1.63381 6.07422 2.00195C6.07421 2.37009 5.77567 2.66854 5.40755 2.66862H3.86654C3.29561 2.66862 2.90745 2.66885 2.60742 2.69336C2.31515 2.71724 2.16547 2.76068 2.0612 2.8138C1.81036 2.94163 1.60634 3.14565 1.47852 3.39648C1.42539 3.50075 1.38195 3.65043 1.35807 3.94271C1.33357 4.24273 1.33333 4.6309 1.33333 5.20182V9.46875C1.33333 10.0397 1.33357 10.4278 1.35807 10.7279C1.38195 11.0201 1.42539 11.1698 1.47852 11.2741C1.60634 11.5249 1.81036 11.7289 2.0612 11.8568C2.16547 11.9099 2.31515 11.9533 2.60742 11.9772C2.90745 12.0017 3.29561 12.002 3.86654 12.002H8.13347C8.70439 12.002 9.09255 12.0017 9.39258 11.9772C9.68486 11.9533 9.83454 11.9099 9.9388 11.8568C10.1896 11.7289 10.3937 11.5249 10.5215 11.2741C10.5746 11.1698 10.618 11.0201 10.6419 10.7279C10.6664 10.4278 10.6667 10.0397 10.6667 9.46875V7.92773C10.6667 7.55961 10.9652 7.26107 11.3333 7.26107C11.7015 7.26107 11.9999 7.55961 12 7.92773V9.46875C12 10.0177 12.0007 10.4697 11.9707 10.8366C11.9401 11.2113 11.8745 11.556 11.7096 11.8796C11.454 12.3812 11.0459 12.7893 10.5443 13.0449C10.2207 13.2098 9.87601 13.2754 9.5013 13.306C9.13438 13.336 8.68246 13.3353 8.13347 13.3353H3.86654C3.31754 13.3353 2.86562 13.336 2.4987 13.306C2.12399 13.2754 1.77927 13.2098 1.45573 13.0449C0.954061 12.7893 0.546013 12.3812 0.290366 11.8796C0.125517 11.556 0.0599178 11.2113 0.0292982 10.8366C-0.000680178 10.4697 1.21192e-06 10.0177 1.29974e-06 9.46875ZM13.3932 4.31185C13.3932 4.68004 13.0948 4.97855 12.7266 4.97852C12.3584 4.9784 12.0599 4.67999 12.0599 4.31185V2.27604L4.33789 9.9987C4.07754 10.2589 3.65548 10.259 3.39518 9.9987C3.13489 9.7384 3.135 9.31635 3.39518 9.05599L11.1178 1.33333H9.13672C8.76853 1.33333 8.47005 1.03486 8.47005 0.666667C8.47005 0.298477 8.76853 0 9.13672 0H12.7272C12.904 2.02032e-05 13.0736 0.0702921 13.1986 0.195313C13.3236 0.320334 13.3939 0.489875 13.3939 0.666667L13.3932 4.31185Z",
        fill: "currentColor"
      }, null, -1)
    ])], 12, rt));
  }
}), Ln = /* @__PURE__ */ g(ct, [["__scopeId", "data-v-7c621b55"]]), dt = ["width", "height"], ut = /* @__PURE__ */ h({
  __name: "Lock",
  props: {
    size: {},
    width: { default: 16 },
    height: { default: 22 }
  },
  setup(e) {
    const n = e, t = C(() => n.size ?? n.width), s = C(() => n.size ?? n.height);
    return (o, c) => (a(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: t.value,
      height: s.value,
      style: L(f(z)(t.value, s.value)),
      viewBox: "0 0 16 22",
      fill: "none",
      "aria-hidden": "true",
      class: "g-icon-lock"
    }, [...c[0] || (c[0] = [
      i("path", {
        d: "M14 14C14 10.6863 11.3137 8 8 8C4.68629 8 2 10.6863 2 14C2 17.3137 4.68629 20 8 20C11.3137 20 14 17.3137 14 14ZM7 15V13C7 12.4477 7.44772 12 8 12C8.55228 12 9 12.4477 9 13V15C9 15.5523 8.55228 16 8 16C7.44772 16 7 15.5523 7 15ZM12 6C12 3.79086 10.2091 2 8 2C5.79086 2 4 3.79086 4 6V7.07227C5.17689 6.39127 6.54249 6 8 6C9.45751 6 10.8231 6.39127 12 7.07227V6ZM14 8.71094C15.244 10.121 16 11.9718 16 14C16 18.4183 12.4183 22 8 22C3.58172 22 0 18.4183 0 14C0 11.9718 0.756037 10.121 2 8.71094V6C2 2.68629 4.68629 0 8 0C11.3137 0 14 2.68629 14 6V8.71094Z",
        fill: "currentColor"
      }, null, -1)
    ])], 12, dt));
  }
}), kn = /* @__PURE__ */ g(ut, [["__scopeId", "data-v-248b2a79"]]), Ct = ["width", "height"], ht = /* @__PURE__ */ h({
  __name: "Login",
  props: {
    size: { default: 20 }
  },
  setup(e) {
    return (n, t) => (a(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: e.size,
      height: e.size,
      style: L(f(z)(e.size)),
      viewBox: "0 0 16.6504 17.7351",
      fill: "none",
      "aria-hidden": "true",
      class: "g-icon-login"
    }, [...t[0] || (t[0] = [
      i("path", {
        d: "M3.31706 11.368C3.77714 11.3683 4.14971 11.7412 4.14958 12.2013V12.3299C4.14929 12.9826 4.14975 13.4246 4.17643 13.7679C4.20232 14.1006 4.24916 14.275 4.30827 14.4002C4.44888 14.6981 4.67534 14.9475 4.95768 15.1172C5.07641 15.1885 5.24523 15.2527 5.57373 15.3117C5.91256 15.3725 6.3519 15.4176 7.00114 15.4826L11.5023 15.9318C12.2783 16.0094 12.8084 16.0623 13.2194 16.0685C13.6216 16.0745 13.8267 16.0325 13.9681 15.9725C14.313 15.826 14.5986 15.5679 14.7786 15.2392C14.8524 15.1045 14.9139 14.9044 14.9479 14.5036C14.9826 14.094 14.9837 13.5614 14.9837 12.7815V4.9544C14.9837 4.17419 14.9827 3.6412 14.9479 3.23158C14.9139 2.83072 14.8524 2.63059 14.7786 2.4959C14.5986 2.16739 14.3129 1.90906 13.9681 1.76267C13.8267 1.70271 13.6215 1.6614 13.2194 1.66745C12.8084 1.67366 12.2783 1.72576 11.5023 1.80336L7.00114 2.25339C6.35204 2.3183 5.91244 2.36266 5.57373 2.42347C5.24567 2.4824 5.07716 2.54676 4.9585 2.61797C4.67622 2.78756 4.44974 3.03719 4.30908 3.33493C4.24995 3.46015 4.20325 3.63453 4.17725 3.96726C4.15043 4.31037 4.14958 4.75201 4.14958 5.40443V5.53464C4.14945 5.99477 3.7764 6.36797 3.31624 6.36797C2.85618 6.36786 2.48304 5.9947 2.48291 5.53464V5.40443C2.48291 4.77803 2.48239 4.26013 2.51546 3.83705C2.54934 3.40379 2.62238 3.00462 2.80273 2.62286C3.08406 2.02747 3.53547 1.52888 4.09993 1.18975C4.46185 0.97232 4.85142 0.859669 5.27913 0.782849C5.69682 0.707849 6.21264 0.657187 6.83594 0.594861L11.3363 0.144828C12.0838 0.0700747 12.6968 0.00828219 13.195 0.000785521C13.7018 -0.00681554 14.1724 0.0386667 14.62 0.22865C15.3095 0.521468 15.8802 1.03813 16.2402 1.69512C16.4739 2.12161 16.566 2.5856 16.6089 3.09079C16.651 3.58724 16.6504 4.20306 16.6504 4.9544V12.7815C16.6504 13.5327 16.651 14.1488 16.6089 14.6452C16.566 15.1502 16.4738 15.6136 16.2402 16.04C15.8802 16.6972 15.3097 17.2144 14.62 17.5073C14.1724 17.6973 13.7018 17.7419 13.195 17.7343C12.6968 17.7269 12.0839 17.6651 11.3363 17.5903L6.83594 17.1403C6.21251 17.0779 5.69693 17.0273 5.27913 16.9523C4.85117 16.8754 4.4612 16.763 4.09912 16.5454C3.53445 16.206 3.08233 15.7072 2.80111 15.1115C2.62085 14.7295 2.54834 14.3299 2.51465 13.8965C2.48177 13.4733 2.48264 12.9556 2.48291 12.3291V12.2005C2.48322 11.7404 2.85689 11.3678 3.31706 11.368ZM7.08415 4.72084C7.40956 4.39546 7.9371 4.39549 8.26253 4.72084L11.8205 8.27878C12.1456 8.60423 12.1458 9.13182 11.8205 9.45717L8.26253 13.0143C7.9371 13.3397 7.40958 13.3397 7.08415 13.0143C6.75884 12.6888 6.75875 12.1613 7.08415 11.8359L9.21956 9.70131H0.833333C0.373175 9.70131 0.000127867 9.3281 0 8.86797C4.96705e-08 8.40773 0.373096 8.03464 0.833333 8.03464H9.21956L7.08415 5.89922C6.75878 5.57378 6.75873 5.04625 7.08415 4.72084Z",
        fill: "currentColor"
      }, null, -1)
    ])], 12, Ct));
  }
}), $n = /* @__PURE__ */ g(ht, [["__scopeId", "data-v-fb08e9b5"]]), ft = ["width", "height"], mt = /* @__PURE__ */ h({
  __name: "LogoMark",
  props: {
    size: { default: 18 }
  },
  setup(e) {
    return (n, t) => (a(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: e.size,
      height: e.size,
      style: L(f(z)(e.size)),
      viewBox: "0 0 18.6985 18.823",
      fill: "none",
      "aria-hidden": "true",
      class: "g-icon-logo-mark"
    }, [...t[0] || (t[0] = [
      i("path", {
        d: "M10.3324 3.30302C10.2935 2.91453 10.1202 2.54937 9.83955 2.27089C9.64465 2.07753 9.40734 1.93644 9.14954 1.85484L6.06369 8.74377V17.0499H14.8668L14.9442 17.0472C15.1228 17.0331 15.2929 16.9636 15.4304 16.8477C15.5876 16.7152 15.6913 16.5307 15.7222 16.3283L15.7228 16.3272L16.9029 8.68907C16.9212 8.56782 16.9128 8.44382 16.8784 8.32606C16.8438 8.20803 16.7837 8.0989 16.7024 8.00614C16.621 7.91334 16.5203 7.83881 16.4072 7.78845C16.3224 7.7507 16.232 7.72716 16.1399 7.71828L16.0475 7.71441H11.1962C10.7238 7.71441 10.3408 7.33442 10.3408 6.86572V3.47099L10.3324 3.30302ZM1.7866 16.2013C1.78663 16.4263 1.87682 16.6422 2.03721 16.8013C2.19763 16.9604 2.41518 17.0499 2.64202 17.0499H4.35285V9.41178H2.64202C2.41515 9.41178 2.19763 9.50126 2.03721 9.66041C1.87681 9.81957 1.7866 10.0354 1.7866 10.2605V16.2013ZM12.0516 6.01704H16.038C16.4066 6.01431 16.7714 6.09048 17.1078 6.24026C17.4472 6.39139 17.7498 6.61373 17.9939 6.89224C18.2379 7.17074 18.4181 7.49869 18.5218 7.85309C18.6255 8.20749 18.65 8.58004 18.5942 8.94489V8.94655L17.4136 16.5825L17.4141 16.5831C17.3213 17.1902 17.0102 17.7435 16.5386 18.1412C16.0695 18.5368 15.4728 18.7513 14.8573 18.7468V18.7473H2.64202C1.96144 18.7473 1.30886 18.4788 0.8276 18.0014C0.346359 17.5239 0.0757942 16.8765 0.0757683 16.2013V10.2605C0.0757683 9.58522 0.346352 8.9378 0.8276 8.46032C1.30886 7.98285 1.96141 7.71441 2.64202 7.71441H4.65192L7.84804 0.580153L7.87588 0.524348C8.02387 0.249991 8.31293 0.0762469 8.62994 0.0762469C9.5374 0.0762597 10.4075 0.434177 11.0492 1.0708C11.6908 1.70743 12.0516 2.57066 12.0516 3.47099V6.01704Z",
        fill: "currentColor"
      }, null, -1)
    ])], 12, ft));
  }
}), gt = /* @__PURE__ */ g(mt, [["__scopeId", "data-v-639b5a8a"]]), pt = ["width", "height"], vt = /* @__PURE__ */ h({
  __name: "Logout",
  props: {
    size: { default: 16 }
  },
  setup(e) {
    return (n, t) => (a(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: e.size,
      height: e.size,
      style: L(f(z)(e.size)),
      viewBox: "0 0 13.3203 13.7305",
      fill: "none",
      "aria-hidden": "true",
      class: "g-icon-logout"
    }, [...t[0] || (t[0] = [
      i("path", {
        d: "M6.66667 9.57552V9.5319C6.66669 9.16373 6.96516 8.86523 7.33333 8.86523C7.70151 8.86523 7.99997 9.16373 8 9.5319V9.57552C8 10.0328 8.00039 10.4121 7.97721 10.724C7.9534 11.0442 7.90225 11.3397 7.77669 11.627C7.57995 12.0771 7.2628 12.4642 6.86003 12.7454C6.60297 12.9249 6.32297 13.033 6.01367 13.1191C5.71245 13.203 5.34032 13.2769 4.89193 13.3665L4.625 13.4199C3.98078 13.5488 3.45525 13.6545 3.02734 13.7018C2.59373 13.7498 2.18718 13.7483 1.79492 13.6126C1.19451 13.4049 0.687966 12.9894 0.366537 12.4414C0.156567 12.0834 0.0751054 11.6852 0.0371095 11.2506C-0.000376634 10.8218 1.46317e-07 10.2852 1.46317e-07 9.62825V4.10221C1.46317e-07 3.44522 -0.000376634 2.90871 0.0371095 2.47982C0.0751104 2.04529 0.156571 1.64704 0.366537 1.28906C0.687967 0.741069 1.19453 0.325543 1.79492 0.117837C2.18717 -0.0178209 2.59375 -0.0193386 3.02734 0.0286446C3.45526 0.0759989 3.98077 0.1817 4.625 0.310546L4.89193 0.363931C5.34032 0.45361 5.71245 0.527447 6.01367 0.611327C6.32298 0.697472 6.60297 0.805584 6.86003 0.985025C7.2628 1.26625 7.57994 1.6534 7.77669 2.10351C7.90223 2.39077 7.9534 2.68632 7.97721 3.00651C8.0004 3.31841 8 3.69818 8 4.1556V4.19857C8 4.56676 7.70152 4.86523 7.33333 4.86523C6.96514 4.86523 6.66667 4.56676 6.66667 4.19857V4.1556C6.66667 3.67854 6.66645 3.35655 6.64779 3.10547C6.62975 2.86283 6.59713 2.733 6.55534 2.63737C6.45694 2.41227 6.2978 2.21874 6.09635 2.07812C6.01077 2.01842 5.8899 1.96107 5.6556 1.89583C5.41308 1.82831 5.09788 1.76476 4.63021 1.67122L4.36328 1.61784C3.69567 1.48432 3.23726 1.39296 2.88086 1.35351C2.53015 1.3147 2.35158 1.33636 2.23047 1.37825C1.93038 1.48214 1.67694 1.68962 1.51628 1.96354C1.45145 2.07408 1.39595 2.24489 1.36523 2.59635C1.33402 2.9536 1.33333 3.42128 1.33333 4.10221V9.62825C1.33333 10.3091 1.33403 10.7769 1.36523 11.1341C1.39595 11.4855 1.45147 11.6564 1.51628 11.7669C1.67694 12.0408 1.9304 12.2483 2.23047 12.3522C2.35158 12.3941 2.53015 12.4158 2.88086 12.377C3.23726 12.3375 3.69567 12.2462 4.36328 12.1126L4.63021 12.0592C5.09789 11.9657 5.41308 11.9022 5.6556 11.8346C5.88994 11.7694 6.01077 11.7121 6.09635 11.6523C6.29782 11.5117 6.45694 11.3182 6.55534 11.0931C6.59714 10.9974 6.62975 10.8677 6.64779 10.625C6.66644 10.374 6.66667 10.0524 6.66667 9.57552ZM9.36458 3.16797C9.63967 2.92348 10.0607 2.94831 10.3053 3.22331L13.1517 6.42187C13.3765 6.67453 13.3765 7.05593 13.1517 7.30859L10.3053 10.5072C10.0607 10.7822 9.63967 10.807 9.36458 10.5625C9.0895 10.3178 9.06452 9.89618 9.30925 9.62109L11.168 7.5319H5.57292C5.20473 7.5319 4.90625 7.23342 4.90625 6.86523C4.90628 6.49707 5.20475 6.19857 5.57292 6.19857H11.168L9.30925 4.10937C9.06455 3.83429 9.08951 3.41269 9.36458 3.16797Z",
        fill: "currentColor"
      }, null, -1)
    ])], 12, pt));
  }
}), wt = /* @__PURE__ */ g(vt, [["__scopeId", "data-v-ad19fd03"]]), _t = ["width", "height"], bt = /* @__PURE__ */ h({
  __name: "Mail",
  props: {
    size: {},
    width: { default: 22 },
    height: { default: 18 }
  },
  setup(e) {
    const n = e, t = C(() => n.size ?? n.width), s = C(() => n.size ?? n.height);
    return (o, c) => (a(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: t.value,
      height: s.value,
      style: L(f(z)(t.value, s.value)),
      viewBox: "0 0 22 18",
      fill: "none",
      "aria-hidden": "true",
      class: "g-icon-mail"
    }, [...c[0] || (c[0] = [
      i("path", {
        d: "M20 4C20 3.83763 19.9779 3.68045 19.9414 3.5293L12.6543 9.95996C11.7093 10.7938 10.2907 10.7938 9.3457 9.95996L2.05762 3.5293C2.02114 3.68038 2 3.83771 2 4V14C2 15.1046 2.89543 16 4 16H18C19.1046 16 20 15.1046 20 14V4ZM4 2C3.80536 2 3.61735 2.02823 3.43945 2.08008L10.6689 8.45996C10.858 8.62674 11.142 8.62674 11.3311 8.45996L18.5605 2.08105C18.3826 2.02915 18.1947 2 18 2H4ZM22 14C22 16.2091 20.2091 18 18 18H4C1.79086 18 0 16.2091 0 14V4C0 1.79086 1.79086 0 4 0H18C20.2091 0 22 1.79086 22 4V14Z",
        fill: "currentColor"
      }, null, -1)
    ])], 12, _t));
  }
}), xn = /* @__PURE__ */ g(bt, [["__scopeId", "data-v-65edbcef"]]), yt = ["width", "height"], Lt = /* @__PURE__ */ h({
  __name: "MenuLines",
  props: {
    size: { default: 16 }
  },
  setup(e) {
    return (n, t) => (a(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: e.size,
      height: e.size,
      style: L(f(z)(e.size)),
      viewBox: "0 0 16 16",
      fill: "none",
      "aria-hidden": "true",
      class: "g-icon-menu-lines"
    }, [...t[0] || (t[0] = [
      i("path", {
        d: "M3 5.25h10a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5Zm0 4h10a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5Z",
        fill: "currentColor"
      }, null, -1)
    ])], 12, yt));
  }
}), kt = /* @__PURE__ */ g(Lt, [["__scopeId", "data-v-31d845a1"]]), $t = ["width", "height"], Mn = /* @__PURE__ */ h({
  __name: "MenuStroke",
  props: {
    size: { default: 18 }
  },
  setup(e) {
    return (n, t) => (a(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: e.size,
      height: e.size,
      style: L(f(z)(e.size)),
      viewBox: "0 0 18 18",
      fill: "none",
      "aria-hidden": "true"
    }, [...t[0] || (t[0] = [
      i("path", {
        d: "M3.25 5.25H14.75C15.0261 5.25 15.25 5.02614 15.25 4.75C15.25 4.47386 15.0261 4.25 14.75 4.25H3.25C2.97386 4.25 2.75 4.47386 2.75 4.75C2.75 5.02614 2.97386 5.25 3.25 5.25ZM3.25 9.75H14.75C15.0261 9.75 15.25 9.52614 15.25 9.25C15.25 8.97386 15.0261 8.75 14.75 8.75H3.25C2.97386 8.75 2.75 8.97386 2.75 9.25C2.75 9.52614 2.97386 9.75 3.25 9.75ZM3.25 14.25H14.75C15.0261 14.25 15.25 14.0261 15.25 13.75C15.25 13.4739 15.0261 13.25 14.75 13.25H3.25C2.97386 13.25 2.75 13.4739 2.75 13.75C2.75 14.0261 2.97386 14.25 3.25 14.25Z",
        fill: "currentColor"
      }, null, -1)
    ])], 12, $t));
  }
}), xt = ["width", "height"], Mt = /* @__PURE__ */ h({
  __name: "MessageCircleDots",
  props: {
    size: { default: 14 }
  },
  setup(e) {
    return (n, t) => (a(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: e.size,
      height: e.size,
      style: L(f(z)(e.size)),
      viewBox: "0 0 14 14",
      fill: "none",
      "aria-hidden": "true",
      class: "g-icon-message-circle-dots"
    }, [...t[0] || (t[0] = [
      i("path", {
        d: "M12.171 6.66667C12.171 3.72115 9.78317 1.33333 6.83765 1.33333C3.89225 1.33347 1.50432 3.72123 1.50432 6.66667C1.50432 7.26982 1.60461 7.84843 1.78817 8.38737C1.98914 8.97752 2.07685 9.67678 1.85197 10.36L1.35262 11.877C1.27192 12.1221 1.48852 12.3619 1.74064 12.3066L4.10783 11.7878C4.60551 11.6787 5.09541 11.7284 5.5258 11.8372C5.94481 11.9432 6.38412 12 6.83765 12C9.78317 12 12.171 9.61218 12.171 6.66667ZM4.84156 6.33333C5.2096 6.3335 5.50822 6.63192 5.50822 7C5.50822 7.36808 5.2096 7.66649 4.84156 7.66667H4.83439C4.46629 7.66657 4.16773 7.36813 4.16773 7C4.16773 6.63187 4.46629 6.33343 4.83439 6.33333H4.84156ZM6.84155 6.33333C7.2096 6.3335 7.50822 6.63192 7.50822 7C7.50822 7.36808 7.2096 7.66649 6.84155 7.66667H6.83439C6.46628 7.66657 6.16773 7.36813 6.16773 7C6.16773 6.63187 6.46628 6.33343 6.83439 6.33333H6.84155ZM8.84155 6.33333C9.2096 6.3335 9.50822 6.63192 9.50822 7C9.50822 7.36808 9.2096 7.66649 8.84155 7.66667H8.83439C8.46628 7.66657 8.16773 7.36813 8.16773 7C8.16773 6.63187 8.46628 6.33343 8.83439 6.33333H8.84155ZM13.5043 6.66667C13.5043 10.3486 10.5195 13.3333 6.83765 13.3333C6.27305 13.3333 5.72393 13.2629 5.19898 13.1302C4.90068 13.0548 4.62949 13.0387 4.39299 13.0905L2.0258 13.6094C0.765283 13.8856 -0.317643 12.686 0.085696 11.4603L0.585045 9.94336C0.691684 9.61938 0.666687 9.2307 0.5258 8.81706C0.295724 8.14153 0.170982 7.41794 0.170982 6.66667C0.170982 2.98485 3.15587 0.000138124 6.83765 0C10.5195 0 13.5043 2.98477 13.5043 6.66667Z",
        fill: "currentColor"
      }, null, -1)
    ])], 12, xt));
  }
}), zn = /* @__PURE__ */ g(Mt, [["__scopeId", "data-v-e0fbcc71"]]), zt = ["width", "height"], It = /* @__PURE__ */ h({
  __name: "MinusCircle",
  props: {
    size: { default: 20 }
  },
  setup(e) {
    return (n, t) => (a(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: e.size,
      height: e.size,
      style: L(f(z)(e.size)),
      viewBox: "0 0 20 20",
      fill: "none",
      "aria-hidden": "true",
      class: "g-icon-minus-circle"
    }, [...t[0] || (t[0] = [
      i("path", {
        d: "M17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5C14.1421 17.5 17.5 14.1421 17.5 10ZM12.5 9.16667C12.9602 9.16667 13.3333 9.53976 13.3333 10C13.3333 10.4602 12.9602 10.8333 12.5 10.8333H7.5C7.03976 10.8333 6.66667 10.4602 6.66667 10C6.66667 9.53976 7.03976 9.16667 7.5 9.16667H12.5ZM19.1667 10C19.1667 15.0626 15.0626 19.1667 10 19.1667C4.93739 19.1667 0.833333 15.0626 0.833333 10C0.833333 4.93739 4.93739 0.833333 10 0.833333C15.0626 0.833333 19.1667 4.93739 19.1667 10Z",
        fill: "currentColor"
      }, null, -1)
    ])], 12, zt));
  }
}), In = /* @__PURE__ */ g(It, [["__scopeId", "data-v-ffdd4d6a"]]), Vt = ["width", "height"], Ht = /* @__PURE__ */ h({
  __name: "Monitor",
  props: {
    size: { default: 16 }
  },
  setup(e) {
    return (n, t) => (a(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: e.size,
      height: e.size,
      style: L(f(z)(e.size)),
      viewBox: "0 0 14.6667 13.3333",
      fill: "none",
      "aria-hidden": "true",
      class: "g-icon-monitor"
    }, [...t[0] || (t[0] = [
      i("path", {
        d: "M13.3333 3.86654C13.3333 3.29561 13.3331 2.90745 13.3086 2.60742C13.2847 2.31515 13.2413 2.16547 13.1882 2.0612C13.0603 1.81036 12.8563 1.60634 12.6055 1.47852C12.5012 1.42539 12.3515 1.38195 12.0592 1.35807C11.7592 1.33357 11.3711 1.33333 10.8001 1.33333H3.86654C3.29561 1.33333 2.90745 1.33357 2.60742 1.35807C2.31515 1.38195 2.16547 1.42539 2.0612 1.47852C1.81036 1.60634 1.60634 1.81036 1.47852 2.0612C1.42539 2.16547 1.38195 2.31515 1.35807 2.60742C1.33357 2.90745 1.33333 3.29561 1.33333 3.86654V6.80013C1.33333 7.37106 1.33357 7.75922 1.35807 8.05925C1.38195 8.35152 1.42539 8.5012 1.47852 8.60547C1.60634 8.85631 1.81036 9.06033 2.0612 9.18815C2.16547 9.24128 2.31515 9.28472 2.60742 9.3086C2.90745 9.3331 3.29561 9.33333 3.86654 9.33333H10.8001C11.3711 9.33333 11.7592 9.3331 12.0592 9.3086C12.3515 9.28472 12.5012 9.24128 12.6055 9.18815C12.8563 9.06033 13.0603 8.85631 13.1882 8.60547C13.2413 8.5012 13.2847 8.35152 13.3086 8.05925C13.3331 7.75922 13.3333 7.37106 13.3333 6.80013V3.86654ZM6.3763 10.6667C6.36795 10.6668 6.36399 10.6672 6.36263 10.6673C6.33279 10.6698 6.30083 10.6796 6.26953 10.6986C6.26628 10.7006 6.25865 10.705 6.19336 10.752C5.91136 10.9548 5.71494 11.0963 5.57552 11.2044C5.42024 11.3249 5.40063 11.3564 5.41471 11.3366C5.33504 11.4485 5.31352 11.5936 5.35156 11.7292C5.38841 11.8603 5.4694 11.943 5.55925 11.9792C5.57519 11.9811 5.62944 11.9889 5.7487 11.9935C5.91909 12 6.15418 12 6.49349 12H8.17318C8.51248 12 8.74757 12 8.91797 11.9935C9.03568 11.989 9.09005 11.9812 9.10677 11.9792C9.19684 11.9431 9.27818 11.8606 9.3151 11.7292C9.35315 11.5936 9.33163 11.4485 9.25195 11.3366C9.26604 11.3564 9.24643 11.3249 9.09115 11.2044C8.95173 11.0963 8.7553 10.9548 8.47331 10.752C8.40801 10.705 8.40039 10.7006 8.39714 10.6986C8.36584 10.6796 8.33388 10.6698 8.30404 10.6673C8.30268 10.6672 8.29871 10.6668 8.29037 10.6667H6.3763ZM14.6667 6.80013C14.6667 7.34912 14.6673 7.80105 14.6374 8.16797C14.6068 8.54267 14.5412 8.8874 14.3763 9.21094C14.1207 9.71261 13.7126 10.1207 13.2109 10.3763C12.8874 10.5412 12.5427 10.6068 12.168 10.6374C11.801 10.6673 11.3491 10.6667 10.8001 10.6667H10.4049C10.9561 11.5696 10.6085 12.8506 9.55859 13.2357C9.36984 13.3049 9.14818 13.3187 8.96875 13.3255C8.76679 13.3332 8.50114 13.3333 8.17318 13.3333H6.49349C6.16553 13.3333 5.89988 13.3332 5.69792 13.3255C5.51849 13.3187 5.29683 13.3049 5.10807 13.2357C4.05818 12.8506 3.71061 11.5696 4.26172 10.6667H3.86654C3.31754 10.6667 2.86562 10.6673 2.4987 10.6374C2.12399 10.6068 1.77927 10.5412 1.45573 10.3763C0.95406 10.1207 0.546012 9.71261 0.290366 9.21094C0.125516 8.8874 0.0599175 8.54267 0.0292982 8.16797C-0.000680352 7.80105 1.21766e-06 7.34912 1.29951e-06 6.80013V3.86654C1.21746e-06 3.31754 -0.000680345 2.86562 0.0292982 2.4987C0.0599175 2.124 0.125516 1.77927 0.290366 1.45573C0.546012 0.95406 0.95406 0.546012 1.45573 0.290366C1.77927 0.125516 2.124 0.0599175 2.4987 0.0292982C2.86562 -0.000680352 3.31754 1.21766e-06 3.86654 1.29951e-06H10.8001C11.3491 1.21766e-06 11.801 -0.000680352 12.168 0.0292982C12.5427 0.0599175 12.8874 0.125516 13.2109 0.290366C13.7126 0.546012 14.1207 0.95406 14.3763 1.45573C14.5412 1.77927 14.6068 2.124 14.6374 2.4987C14.6673 2.86562 14.6667 3.31754 14.6667 3.86654V6.80013Z",
        fill: "currentColor"
      }, null, -1)
    ])], 12, Vt));
  }
}), Vn = /* @__PURE__ */ g(Ht, [["__scopeId", "data-v-8ba99979"]]), Zt = ["width", "height"], Bt = /* @__PURE__ */ h({
  __name: "Pencil",
  props: {
    size: { default: 12 }
  },
  setup(e) {
    return (n, t) => (a(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: e.size,
      height: e.size,
      style: L(f(z)(e.size)),
      viewBox: "0 0 20.0305 20.0323",
      fill: "none",
      "aria-hidden": "true",
      class: "g-icon-pencil"
    }, [...t[0] || (t[0] = [
      i("path", {
        d: "M19.006 18.0323C19.5582 18.0323 20.0059 18.4801 20.006 19.0323C20.006 19.5846 19.5583 20.0323 19.006 20.0323H10.0245C9.47231 20.0322 9.02452 19.5845 9.02452 19.0323C9.02456 18.4801 9.47234 18.0324 10.0245 18.0323H19.006ZM14.2638 0.989338C15.5829 -0.329829 17.7219 -0.32973 19.0411 0.989338C20.3603 2.30856 20.3603 4.44746 19.0411 5.76668L7.046 17.7618C6.55525 18.2526 5.97285 18.6425 5.33214 18.9093L3.53038 19.6593C3.33497 19.7406 3.1691 19.8097 3.03722 19.8604C2.91578 19.9072 2.76 19.9645 2.59874 19.9942C1.08372 20.2726 -0.24108 18.9477 0.0372153 17.4327C0.0668871 17.2712 0.123256 17.1148 0.170028 16.9932C0.22079 16.8613 0.289825 16.6956 0.3712 16.5001L1.1212 14.6983C1.38796 14.0577 1.77795 13.4752 2.26866 12.9845L14.2638 0.989338ZM3.08507 15.2159C3.04252 15.2979 3.00351 15.3823 2.96788 15.4679L2.21788 17.2686C2.13208 17.4747 2.07589 17.6105 2.03722 17.711C1.99456 17.8219 1.99749 17.8295 2.00401 17.794C1.97877 17.9316 2.09884 18.0515 2.23643 18.0264C2.20125 18.0329 2.20889 18.0368 2.31944 17.9942C2.41994 17.9556 2.55552 17.8985 2.76182 17.8126L4.56358 17.0636C4.64926 17.0279 4.73244 16.987 4.81456 16.9444L3.08507 15.2159ZM17.6271 2.4034C17.0889 1.86538 16.216 1.86528 15.6778 2.4034L4.38975 13.6915L6.33897 15.6407L17.6271 4.35262C18.1652 3.81445 18.1652 2.94157 17.6271 2.4034Z",
        fill: "currentColor"
      }, null, -1)
    ])], 12, Zt));
  }
}), Hn = /* @__PURE__ */ g(Bt, [["__scopeId", "data-v-428bc58e"]]), St = ["width", "height"], Rt = /* @__PURE__ */ h({
  __name: "Percent",
  props: {
    size: { default: 20 }
  },
  setup(e) {
    return (n, t) => (a(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: e.size,
      height: e.size,
      style: L(f(z)(e.size)),
      viewBox: "0 0 20 20",
      fill: "none",
      "aria-hidden": "true",
      class: "g-icon-percent"
    }, [...t[0] || (t[0] = [
      i("path", {
        d: "M15.8593 2.96386C16.1847 2.63844 16.7122 2.63848 17.0377 2.96386C17.3631 3.28929 17.3631 3.81681 17.0377 4.14224L4.14377 17.0361C3.81833 17.3616 3.29082 17.3616 2.96538 17.0361C2.64 16.7107 2.63997 16.1832 2.96538 15.8577L15.8593 2.96386Z",
        fill: "currentColor"
      }, null, -1),
      i("path", {
        d: "M7.47965 5.93262C7.47965 5.07902 6.78779 4.38661 5.93424 4.38639C5.08051 4.38639 4.38802 5.07889 4.38802 5.93262C4.38824 6.78616 5.08065 7.47803 5.93424 7.47803C6.78765 7.47781 7.47944 6.78603 7.47965 5.93262ZM9.14632 5.93262C9.1461 7.7065 7.70813 9.14447 5.93424 9.14469C4.16017 9.14469 2.72157 7.70664 2.72135 5.93262C2.72135 4.15841 4.16004 2.71973 5.93424 2.71973C7.70826 2.71995 9.14632 4.15855 9.14632 5.93262Z",
        fill: "currentColor"
      }, null, -1),
      i("path", {
        d: "M15.6152 14.069C15.6152 13.2154 14.9234 12.523 14.0698 12.5228C13.2161 12.5228 12.5236 13.2153 12.5236 14.069C12.5238 14.9226 13.2162 15.6144 14.0698 15.6144C14.9232 15.6142 15.615 14.9224 15.6152 14.069ZM17.2819 14.069C17.2817 15.8429 15.8437 17.2809 14.0698 17.2811C12.2958 17.2811 10.8572 15.843 10.8569 14.069C10.8569 12.2948 12.2956 10.8561 14.0698 10.8561C15.8438 10.8563 17.2819 12.2949 17.2819 14.069Z",
        fill: "currentColor"
      }, null, -1)
    ])], 12, St));
  }
}), Zn = /* @__PURE__ */ g(Rt, [["__scopeId", "data-v-da4a10db"]]), Tt = ["width", "height"], Et = /* @__PURE__ */ h({
  __name: "Pincode",
  props: {
    size: { default: 20 }
  },
  setup(e) {
    return (n, t) => (a(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: e.size,
      height: e.size,
      style: L(f(z)(e.size)),
      viewBox: "0 0 20 20",
      fill: "none",
      "aria-hidden": "true",
      class: "g-icon-pincode"
    }, [...t[0] || (t[0] = [
      i("rect", {
        x: "2.75",
        y: "5.75",
        width: "14.5",
        height: "8.5",
        rx: "2.5",
        stroke: "currentColor",
        "stroke-width": "1.5"
      }, null, -1),
      i("circle", {
        cx: "7",
        cy: "10",
        r: "1.1",
        fill: "currentColor"
      }, null, -1),
      i("circle", {
        cx: "10",
        cy: "10",
        r: "1.1",
        fill: "currentColor"
      }, null, -1),
      i("circle", {
        cx: "13",
        cy: "10",
        r: "1.1",
        fill: "currentColor"
      }, null, -1)
    ])], 12, Tt));
  }
}), Bn = /* @__PURE__ */ g(Et, [["__scopeId", "data-v-8618b298"]]), Dt = ["width", "height"], At = /* @__PURE__ */ h({
  __name: "Plus",
  props: {
    size: { default: 16 }
  },
  setup(e) {
    return (n, t) => (a(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: e.size,
      height: e.size,
      style: L(f(z)(e.size)),
      viewBox: "0 0 9.33333 9.33333",
      fill: "none",
      "aria-hidden": "true",
      class: "g-icon-plus"
    }, [...t[0] || (t[0] = [
      i("path", {
        d: "M4 8.66667V5.33333H0.666667C0.298477 5.33333 0 5.03486 0 4.66667C0 4.29848 0.298477 4 0.666667 4H4V0.666667C4 0.298477 4.29848 0 4.66667 0C5.03486 0 5.33333 0.298477 5.33333 0.666667V4H8.66667C9.03486 4 9.33333 4.29848 9.33333 4.66667C9.33333 5.03486 9.03486 5.33333 8.66667 5.33333H5.33333V8.66667C5.33333 9.03486 5.03486 9.33333 4.66667 9.33333C4.29848 9.33333 4 9.03486 4 8.66667Z",
        fill: "currentColor"
      }, null, -1)
    ])], 12, Dt));
  }
}), Sn = /* @__PURE__ */ g(At, [["__scopeId", "data-v-d6a1de2e"]]), Ft = ["width", "height"], Pt = /* @__PURE__ */ h({
  __name: "Receipt",
  props: {
    size: { default: 16 }
  },
  setup(e) {
    return (n, t) => (a(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: e.size,
      height: e.size,
      style: L(f(z)(e.size)),
      viewBox: "0 0 12 13.3336",
      fill: "none",
      "aria-hidden": "true",
      class: "g-icon-receipt"
    }, [...t[0] || (t[0] = [
      i("path", {
        d: "M4.6569 11.8958C5.14194 10.6836 6.85806 10.6836 7.3431 11.8958C7.35469 11.9248 7.36874 11.9388 7.38086 11.9473C7.39538 11.9573 7.41617 11.9652 7.44076 11.9668C7.46548 11.9684 7.48751 11.9632 7.50326 11.9551C7.51635 11.9483 7.53236 11.9362 7.54753 11.9089L7.61328 11.7897C8.21614 10.7047 9.78725 10.7777 10.306 11.8893C10.3352 11.9518 10.369 11.9748 10.3945 11.9863C10.4268 12.0008 10.4728 12.0076 10.5234 11.9967C10.5739 11.9859 10.6102 11.9616 10.6309 11.9382C10.6464 11.9204 10.6667 11.8889 10.6667 11.821V3.86654C10.6667 3.29561 10.6664 2.90745 10.6419 2.60742C10.618 2.31515 10.5746 2.16547 10.5215 2.0612C10.3937 1.81036 10.1896 1.60634 9.9388 1.47852C9.83454 1.42539 9.68486 1.38195 9.39258 1.35807C9.09255 1.33357 8.70439 1.33333 8.13347 1.33333H3.86654C3.29561 1.33333 2.90745 1.33357 2.60742 1.35807C2.31515 1.38195 2.16547 1.42539 2.0612 1.47852C1.81036 1.60634 1.60634 1.81036 1.47852 2.0612C1.42539 2.16547 1.38195 2.31515 1.35807 2.60742C1.33357 2.90745 1.33333 3.29561 1.33333 3.86654V11.821C1.33335 11.8889 1.35362 11.9204 1.36914 11.9382C1.38978 11.9616 1.42612 11.9859 1.47656 11.9967C1.52717 12.0076 1.57323 12.0008 1.60547 11.9863C1.63104 11.9748 1.66485 11.9518 1.69401 11.8893C2.21275 10.7777 3.78386 10.7047 4.38672 11.7897L4.45313 11.9089C4.46829 11.9361 4.48366 11.9483 4.49675 11.9551C4.51249 11.9632 4.53452 11.9684 4.55925 11.9668C4.58383 11.9652 4.60462 11.9573 4.61914 11.9473C4.63126 11.9388 4.64531 11.9248 4.6569 11.8958ZM12 11.821C11.9999 13.4788 9.7719 13.8979 9.09766 12.4531C9.03306 12.3149 8.84567 12.3169 8.77865 12.4375L8.71289 12.5566C8.12104 13.6219 6.5574 13.5227 6.10482 12.3913C6.09173 12.3586 6.07685 12.3448 6.06511 12.3372C6.05006 12.3276 6.02728 12.3203 6 12.3203C5.97272 12.3203 5.94995 12.3276 5.9349 12.3372C5.92316 12.3448 5.90828 12.3586 5.89518 12.3913C5.4426 13.5227 3.87896 13.6219 3.28711 12.5566L3.22136 12.4375C3.15433 12.3169 2.96694 12.3149 2.90235 12.4531C2.2281 13.8979 5.8255e-05 13.4788 1.29951e-06 11.821V3.86654C1.21806e-06 3.31754 -0.000680362 2.86562 0.0292982 2.4987C0.0599175 2.124 0.125516 1.77927 0.290366 1.45573C0.546012 0.95406 0.95406 0.546012 1.45573 0.290366C1.77927 0.125516 2.124 0.0599175 2.4987 0.0292982C2.86562 -0.000680352 3.31754 1.21766e-06 3.86654 1.29951e-06H8.13347C8.68246 1.21766e-06 9.13438 -0.000680352 9.5013 0.0292982C9.87601 0.0599175 10.2207 0.125516 10.5443 0.290366C11.0459 0.546012 11.454 0.95406 11.7096 1.45573C11.8745 1.77927 11.9401 2.12399 11.9707 2.4987C12.0007 2.86562 12 3.31754 12 3.86654V11.821Z",
        fill: "currentColor"
      }, null, -1)
    ])], 12, Ft));
  }
}), Rn = /* @__PURE__ */ g(Pt, [["__scopeId", "data-v-678a4b4f"]]), Ot = ["width", "height"], Ut = /* @__PURE__ */ h({
  __name: "Refresh",
  props: {
    size: { default: 16 }
  },
  setup(e) {
    return (n, t) => (a(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: e.size,
      height: e.size,
      style: L(f(z)(e.size)),
      viewBox: "0 0 21.4819 17.9766",
      fill: "none",
      "aria-hidden": "true",
      class: "g-icon-refresh"
    }, [...t[0] || (t[0] = [
      i("path", {
        d: "M2.16409 7.33105C2.52057 6.97072 3.099 6.93175 3.50198 7.25684L5.82425 9.13086C6.25406 9.47767 6.32145 10.1073 5.97464 10.5371C5.62781 10.9668 4.99817 11.0343 4.56839 10.6875L4.15042 10.3496C4.77183 13.5554 7.59211 15.9765 10.9795 15.9766C12.9015 15.9766 14.6401 15.1981 15.9004 13.9375C16.2909 13.5472 16.924 13.5473 17.3145 13.9375C17.705 14.328 17.7049 14.961 17.3145 15.3516C15.6944 16.9719 13.4533 17.9766 10.9795 17.9766C6.5455 17.9765 2.86585 14.7545 2.14944 10.5244L1.77835 10.9854C1.43154 11.4152 0.801913 11.4826 0.3721 11.1357C-0.0576272 10.7889 -0.125079 10.1593 0.22171 9.72949L2.09573 7.40723L2.16409 7.33105ZM10.4287 0C15.1197 6.17756e-05 18.9701 3.58911 19.3887 8.1709L19.7383 7.78223C20.1075 7.37148 20.7396 7.3379 21.1504 7.70703C21.5612 8.07618 21.5947 8.70836 21.2256 9.11914L19.2207 11.3506C19.0435 11.5478 18.7951 11.6665 18.5303 11.6807C18.2655 11.6948 18.0059 11.603 17.8086 11.4258L15.5772 9.4209C15.1664 9.05175 15.1328 8.41958 15.502 8.00879C15.8711 7.59804 16.5033 7.56359 16.9141 7.93262L17.3985 8.36816C17.079 4.79835 14.0817 2.00006 10.4287 2C8.21883 2 6.2484 3.02293 4.9639 4.625C4.61846 5.05592 3.98857 5.12571 3.55765 4.78027C3.12683 4.43485 3.05804 3.80589 3.40335 3.375C5.0511 1.3195 7.58611 0 10.4287 0Z",
        fill: "currentColor"
      }, null, -1)
    ])], 12, Ot));
  }
}), Tn = /* @__PURE__ */ g(Ut, [["__scopeId", "data-v-1d6b0baf"]]), Nt = ["width", "height"], qt = /* @__PURE__ */ h({
  __name: "ru",
  props: {
    size: { default: 18 }
  },
  setup(e) {
    return (n, t) => (a(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: e.size,
      height: e.size,
      style: L(f(z)(e.size)),
      viewBox: "0 -4 28 28",
      fill: "none",
      "aria-hidden": "true"
    }, [...t[0] || (t[0] = [
      v1('<g clip-path="url(#clip0_503_2726)"><rect x="0.25" y="0.25" width="27.5" height="19.5" rx="1.75" fill="white" stroke="#F5F5F5" stroke-width="0.5"></rect><mask id="mask0_503_2726" style="mask-type:alpha;" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="20"><rect x="0.25" y="0.25" width="27.5" height="19.5" rx="1.75" fill="white" stroke="white" stroke-width="0.5"></rect></mask><g mask="url(#mask0_503_2726)"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 13.3333H28V6.66667H0V13.3333Z" fill="#0C47B7"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M0 20H28V13.3333H0V20Z" fill="#E53B35"></path></g></g><defs><clipPath id="clip0_503_2726"><rect width="28" height="20" rx="2" fill="white"></rect></clipPath></defs>', 2)
    ])], 12, Nt));
  }
}), Gt = ["width", "height"], jt = /* @__PURE__ */ h({
  __name: "gb",
  props: {
    size: { default: 18 }
  },
  setup(e) {
    return (n, t) => (a(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: e.size,
      height: e.size,
      style: L(f(z)(e.size)),
      viewBox: "0 -4 28 28",
      fill: "none",
      "aria-hidden": "true"
    }, [...t[0] || (t[0] = [
      v1('<g clip-path="url(#clip0_503_2952)"><rect width="28" height="20" rx="2" fill="white"></rect><mask id="mask0_503_2952" style="mask-type:alpha;" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="20"><rect width="28" height="20" rx="2" fill="white"></rect></mask><g mask="url(#mask0_503_2952)"><rect width="28" height="20" fill="#0A17A7"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M-1.28244 -1.91644L10.6667 6.14335V-1.33333H17.3334V6.14335L29.2825 -1.91644L30.7737 0.294324L21.3263 6.66667H28V13.3333H21.3263L30.7737 19.7057L29.2825 21.9165L17.3334 13.8567V21.3333H10.6667V13.8567L-1.28244 21.9165L-2.77362 19.7057L6.67377 13.3333H2.95639e-05V6.66667H6.67377L-2.77362 0.294324L-1.28244 -1.91644Z" fill="white"></path><path d="M18.668 6.33219L31.3333 -2" stroke="#DB1F35" stroke-width="0.666667" stroke-linecap="round"></path><path d="M20.0128 13.6975L31.3666 21.3503" stroke="#DB1F35" stroke-width="0.666667" stroke-linecap="round"></path><path d="M8.00555 6.31046L-3.83746 -1.67099" stroke="#DB1F35" stroke-width="0.666667" stroke-linecap="round"></path><path d="M9.29006 13.6049L-3.83746 22.3105" stroke="#DB1F35" stroke-width="0.666667" stroke-linecap="round"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M0 12H12V20H16V12H28V8H16V0H12V8H0V12Z" fill="#E6273E"></path></g></g><defs><clipPath id="clip0_503_2952"><rect width="28" height="20" rx="2" fill="white"></rect></clipPath></defs>', 2)
    ])], 12, Gt));
  }
}), Wt = ["width", "height"], Qt = /* @__PURE__ */ h({
  __name: "SearchOff",
  props: {
    size: { default: 48 }
  },
  setup(e) {
    return (n, t) => (a(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: e.size,
      height: e.size,
      style: L(f(z)(e.size)),
      viewBox: "0 0 44 44",
      fill: "none",
      "aria-hidden": "true",
      class: "g-icon-search-off"
    }, [...t[0] || (t[0] = [
      i("path", {
        d: "M33 10.6706C30.0958 6.63084 25.3551 4 20 4C11.1634 4 4 11.1634 4 20C4 25.3551 6.63084 30.0958 10.6706 33M35.8762 18C35.9579 18.6552 36 19.3227 36 20C36 28.8366 28.8366 36 20 36C19.3227 36 18.6552 35.9579 18 35.8762M40 40L32 32M2 42L42 2",
        stroke: "currentColor",
        "stroke-width": "4",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }, null, -1)
    ])], 12, Wt));
  }
}), En = /* @__PURE__ */ g(Qt, [["__scopeId", "data-v-dcbf1856"]]), Kt = ["width", "height"], Yt = /* @__PURE__ */ h({
  __name: "SearchQuestion",
  props: {
    size: { default: 48 }
  },
  setup(e) {
    return (n, t) => (a(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: e.size,
      height: e.size,
      style: L(f(z)(e.size)),
      viewBox: "0 0 48 48",
      fill: "none",
      "aria-hidden": "true",
      class: "g-icon-search-question"
    }, [...t[0] || (t[0] = [
      i("path", {
        transform: "translate(4 4)",
        d: "M38 38L30 30M13.6308 13.5045C13.8124 12.988 14.0853 12.5133 14.4326 12.1008C14.7588 11.7132 15.1507 11.3806 15.5942 11.12C16.5097 10.5819 17.5861 10.3852 18.6328 10.5647C19.6794 10.7443 20.6288 11.2884 21.3126 12.1008C21.9965 12.9132 22.3708 13.9414 22.3692 15.0034C22.3692 18.0011 17.8726 19.5 17.8726 19.5V19.9141M17.9308 25.5H17.9508M34 18C34 26.8366 26.8366 34 18 34C9.16344 34 2 26.8366 2 18C2 9.16344 9.16344 2 18 2C26.8366 2 34 9.16344 34 18Z",
        stroke: "currentColor",
        "stroke-width": "4",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }, null, -1)
    ])], 12, Kt));
  }
}), Dn = /* @__PURE__ */ g(Yt, [["__scopeId", "data-v-80c1fe03"]]), Xt = ["width", "height"], Jt = /* @__PURE__ */ h({
  __name: "Settings",
  props: {
    size: { default: 24 }
  },
  setup(e) {
    return (n, t) => (a(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: e.size,
      height: e.size,
      style: L(f(z)(e.size)),
      viewBox: "0 0 20 19",
      fill: "none",
      "aria-hidden": "true",
      class: "g-icon-settings"
    }, [...t[0] || (t[0] = [
      i("path", {
        d: "M4.5 10C6.64145 10 8.43185 11.4962 8.88672 13.5H19C19.5523 13.5 20 13.9477 20 14.5C20 15.0523 19.5523 15.5 19 15.5H8.88672C8.43185 17.5038 6.64145 19 4.5 19C2.01472 19 0 16.9853 0 14.5C0 12.0147 2.01472 10 4.5 10ZM18 4.5C18 3.11929 16.8807 2 15.5 2C14.1193 2 13 3.11929 13 4.5C13 5.88071 14.1193 7 15.5 7C16.8807 7 18 5.88071 18 4.5ZM2 14.5C2 15.8807 3.11929 17 4.5 17C5.88071 17 7 15.8807 7 14.5C7 13.1193 5.88071 12 4.5 12C3.11929 12 2 13.1193 2 14.5ZM20 4.5C20 6.98528 17.9853 9 15.5 9C13.3585 9 11.5682 7.5038 11.1133 5.5H1C0.447715 5.5 0 5.05228 0 4.5C0 3.94772 0.447715 3.5 1 3.5H11.1133C11.5682 1.4962 13.3585 0 15.5 0C17.9853 0 20 2.01472 20 4.5Z",
        fill: "currentColor"
      }, null, -1)
    ])], 12, Xt));
  }
}), An = /* @__PURE__ */ g(Jt, [["__scopeId", "data-v-dd0316bc"]]), e4 = ["width", "height"], t4 = /* @__PURE__ */ h({
  __name: "Shield",
  props: {
    size: { default: 20 }
  },
  setup(e) {
    return (n, t) => (a(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: e.size,
      height: e.size,
      style: L(f(z)(e.size)),
      viewBox: "0 0 15.0003 18.3197",
      fill: "none",
      "aria-hidden": "true",
      class: "g-icon-shield"
    }, [...t[0] || (t[0] = [
      i("path", {
        d: "M13.3335 5.73813C13.3335 4.61006 13.3192 4.27865 13.2147 4.01694C13.1095 3.75396 12.9387 3.52194 12.7191 3.34312C12.5004 3.16513 12.1883 3.05232 11.111 2.71567L8.44497 1.88234C7.97392 1.73514 7.83525 1.69516 7.70197 1.67889C7.56818 1.6626 7.43212 1.6626 7.29832 1.67889C7.16504 1.69516 7.02637 1.73514 6.55532 1.88234L3.88931 2.71567C2.81203 3.05232 2.49987 3.16513 2.28123 3.34312C2.06161 3.52194 1.89078 3.75396 1.78563 4.01694C1.68109 4.27865 1.66681 4.61006 1.66681 5.73813V6.46974C1.66681 8.46225 1.67193 9.32884 1.85724 10.1359C2.05081 10.9788 2.38854 11.7821 2.85578 12.5098C3.30328 13.2066 3.91965 13.816 5.34438 15.2092C5.81661 15.6709 6.13753 15.9844 6.40477 16.2085C6.66502 16.4267 6.82323 16.5153 6.95164 16.5601C7.30687 16.6839 7.69342 16.6839 8.04865 16.5601C8.17706 16.5153 8.33528 16.4267 8.59552 16.2085C8.86276 15.9844 9.18368 15.6709 9.65591 15.2092C11.0806 13.816 11.697 13.2066 12.1445 12.5098C12.6118 11.7821 12.9495 10.9788 13.143 10.1359C13.3284 9.32884 13.3335 8.46225 13.3335 6.46974V5.73813ZM15.0001 6.46974C15.0001 8.38644 15.0049 9.4753 14.7674 10.5095C14.5308 11.5397 14.1179 12.5212 13.5467 13.4107C12.9733 14.3035 12.1917 15.0613 10.8213 16.4014C10.3675 16.8451 9.99385 17.2108 9.66649 17.4854C9.33207 17.7658 8.99514 17.9952 8.59715 18.134C7.88675 18.3816 7.11355 18.3816 6.40314 18.134C6.00515 17.9952 5.66822 17.7658 5.33381 17.4854C5.00644 17.2108 4.6328 16.8451 4.17902 16.4014C2.8086 15.0613 2.02696 14.3035 1.4536 13.4107C0.882429 12.5212 0.469516 11.5397 0.232894 10.5095C-0.00461156 9.4753 0.000146625 8.38644 0.000146625 6.46974V5.73813C0.0001458 4.75474 -0.0141048 4.02962 0.238591 3.39764C0.448943 2.87169 0.789688 2.4076 1.22899 2.04998C1.75683 1.62035 2.45349 1.418 3.39207 1.12469L6.05809 0.291357C6.47303 0.161689 6.77847 0.0632496 7.09731 0.0244303C7.36488 -0.00814348 7.63541 -0.00814342 7.90298 0.0244303C8.22182 0.0632496 8.52726 0.161689 8.9422 0.291357L11.6082 1.12469C12.5468 1.418 13.2435 1.62035 13.7713 2.04998C14.2106 2.4076 14.5513 2.87169 14.7617 3.39764C15.0144 4.02962 15.0001 4.75474 15.0001 5.73813V6.46974Z",
        fill: "currentColor"
      }, null, -1)
    ])], 12, e4));
  }
}), Fn = /* @__PURE__ */ g(t4, [["__scopeId", "data-v-c7b5ce82"]]), n4 = ["width", "height"], s4 = /* @__PURE__ */ h({
  __name: "ShieldX",
  props: {
    size: { default: 12 }
  },
  setup(e) {
    return (n, t) => (a(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: e.size,
      height: e.size,
      style: L(f(z)(e.size)),
      viewBox: "0 0 12 12",
      fill: "none",
      "aria-hidden": "true",
      class: "g-icon-shield-x"
    }, [...t[0] || (t[0] = [
      i("path", {
        d: "M9.5001 3.953C9.5001 3.276 9.4915 3.077 9.4288 2.92C9.3657 2.762 9.2632 2.623 9.1314 2.516C9.0003 2.409 8.813 2.341 8.1666 2.139L6.567 1.639C6.2844 1.551 6.2011 1.527 6.1212 1.517C6.0409 1.507 5.9593 1.507 5.879 1.517C5.799 1.527 5.7158 1.551 5.4332 1.639L3.8336 2.139C3.1872 2.341 2.9999 2.409 2.8687 2.516C2.737 2.623 2.6345 2.762 2.5714 2.92C2.5087 3.077 2.5001 3.276 2.5001 3.953V4.392C2.5001 5.587 2.5032 6.107 2.6143 6.591C2.7305 7.097 2.9331 7.579 3.2135 8.016C3.482 8.434 3.8518 8.799 4.7066 9.635C4.99 9.912 5.1825 10.1 5.3429 10.235C5.499 10.366 5.5939 10.419 5.671 10.446C5.8841 10.52 6.1161 10.52 6.3292 10.446C6.4062 10.419 6.5012 10.366 6.6573 10.235C6.8177 10.1 7.0102 9.912 7.2935 9.635C8.1484 8.799 8.5182 8.434 8.7867 8.016C9.0671 7.579 9.2697 7.097 9.3858 6.591C9.497 6.107 9.5001 5.587 9.5001 4.392V3.953ZM6.8287 4.054C7.0239 3.859 7.3405 3.859 7.5357 4.054C7.731 4.25 7.731 4.566 7.5357 4.761L6.7066 5.59L7.5357 6.419C7.731 6.614 7.731 6.931 7.5357 7.126C7.3405 7.321 7.0239 7.321 6.8287 7.126L6.0001 6.297L5.1715 7.126C4.9763 7.321 4.6597 7.321 4.4644 7.126C4.2692 6.931 4.2692 6.614 4.4644 6.419L5.2931 5.59L4.4644 4.761C4.2692 4.566 4.2692 4.25 4.4644 4.054C4.6597 3.859 4.9762 3.859 5.1715 4.054L6.0001 4.883L6.8287 4.054ZM10.5001 4.392C10.5001 5.542 10.5029 6.195 10.3604 6.815C10.2185 7.434 9.9707 8.023 9.628 8.556C9.284 9.092 8.815 9.547 7.9928 10.351C7.7205 10.617 7.4963 10.836 7.2999 11.001C7.0992 11.169 6.8971 11.307 6.6583 11.39C6.232 11.539 5.7681 11.539 5.3419 11.39C5.1031 11.307 4.9009 11.169 4.7003 11.001C4.5039 10.836 4.2797 10.617 4.0074 10.351C3.1852 9.547 2.7162 9.092 2.3722 8.556C2.0295 8.023 1.7817 7.434 1.6397 6.815C1.4972 6.195 1.5001 5.542 1.5001 4.392V3.953C1.5001 3.363 1.4915 2.928 1.6432 2.548C1.7694 2.233 1.9738 1.954 2.2374 1.74C2.5541 1.482 2.9721 1.361 3.5352 1.185L5.1349 0.685C5.3838 0.607 5.5671 0.548 5.7584 0.524C5.9189 0.505 6.0812 0.505 6.2418 0.524C6.4331 0.548 6.6164 0.607 6.8653 0.685L8.4649 1.185C9.0281 1.361 9.4461 1.482 9.7628 1.74C10.0264 1.954 10.2308 2.233 10.357 2.548C10.5086 2.928 10.5001 3.363 10.5001 3.953V4.392Z",
        fill: "currentColor"
      }, null, -1)
    ])], 12, n4));
  }
}), Pn = /* @__PURE__ */ g(s4, [["__scopeId", "data-v-e3814ffc"]]), a4 = ["width", "height"], o4 = /* @__PURE__ */ h({
  __name: "Sort",
  props: {
    size: { default: 12 }
  },
  setup(e) {
    return (n, t) => (a(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: e.size,
      height: e.size,
      style: L(f(z)(e.size)),
      viewBox: "0 0 12 12",
      fill: "none",
      "aria-hidden": "true",
      class: "g-icon-sort"
    }, [...t[0] || (t[0] = [
      i("path", {
        d: "M6 1.5L9.25 5.25H2.75L6 1.5Z",
        fill: "currentColor"
      }, null, -1),
      i("path", {
        d: "M6 10.5L2.75 6.75H9.25L6 10.5Z",
        fill: "currentColor"
      }, null, -1)
    ])], 12, a4));
  }
}), On = /* @__PURE__ */ g(o4, [["__scopeId", "data-v-0f24cb3a"]]), i4 = ["width", "height"], l4 = /* @__PURE__ */ h({
  __name: "SwapHorizontal",
  props: {
    size: { default: 20 }
  },
  setup(e) {
    return (n, t) => (a(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: e.size,
      height: e.size,
      style: L(f(z)(e.size)),
      viewBox: "0 0 16.6113 16.6826",
      fill: "none",
      "aria-hidden": "true",
      class: "g-icon-swap-horizontal"
    }, [...t[0] || (t[0] = [
      i("path", {
        d: "M3.97786 8.32184C4.31457 8.00814 4.8417 8.02669 5.15544 8.36334C5.46916 8.70008 5.45067 9.22719 5.11393 9.54091L2.95003 11.5567H15.778C16.2381 11.5568 16.6112 11.9299 16.6113 12.39C16.6113 12.8502 16.2382 13.2233 15.778 13.2234H2.95003L5.11393 15.2392C5.45067 15.5529 5.46916 16.0808 5.15544 16.4175C4.84167 16.7539 4.31449 16.7727 3.97786 16.459L0.265299 12.9996C0.0962076 12.8419 0 12.6212 0 12.39C4.53398e-05 12.1588 0.0961458 11.9381 0.265299 11.7805L3.97786 8.32184ZM11.4551 0.265195C11.7688 -0.0715468 12.2967 -0.0900329 12.6335 0.223692L16.346 3.68235C16.5151 3.83991 16.6112 4.06076 16.6113 4.29189C16.6113 4.52313 16.5152 4.74461 16.346 4.90224L12.6335 8.3609C12.2967 8.67462 11.7688 8.65614 11.4551 8.31939C11.1414 7.98265 11.1607 7.45552 11.4974 7.14182L13.6605 5.12604H0.833333C0.373232 5.12604 0.000219828 4.75275 0 4.2927C0 3.83246 0.373096 3.45937 0.833333 3.45937H13.6613L11.4974 1.44277C11.1607 1.12909 11.1415 0.601945 11.4551 0.265195Z",
        fill: "currentColor"
      }, null, -1)
    ])], 12, i4));
  }
}), Un = /* @__PURE__ */ g(l4, [["__scopeId", "data-v-e7dc9958"]]), r4 = ["width", "height"], c4 = /* @__PURE__ */ h({
  __name: "Trash",
  props: {
    size: { default: 12 }
  },
  setup(e) {
    return (n, t) => (a(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: e.size,
      height: e.size,
      style: L(f(z)(e.size)),
      viewBox: "0 0 10 11",
      fill: "none",
      "aria-hidden": "true",
      class: "g-icon-trash"
    }, [...t[0] || (t[0] = [
      i("path", {
        d: "M8 3.00004H2V8.10014C2 8.52833 2.00017 8.81946 2.01855 9.04448C2.03646 9.26368 2.06904 9.37594 2.10889 9.45414C2.20475 9.64227 2.35777 9.79529 2.5459 9.89116C2.6241 9.931 2.73636 9.96358 2.95557 9.98149C3.18059 9.99987 3.47171 10 3.8999 10H6.1001C6.52829 10 6.81941 9.99987 7.04443 9.98149C7.26364 9.96358 7.3759 9.931 7.4541 9.89116C7.64223 9.79529 7.79525 9.64227 7.89111 9.45414C7.93096 9.37594 7.96354 9.26368 7.98145 9.04448C7.99983 8.81946 8 8.52833 8 8.10014V3.00004ZM5.73486 4.80815C5.93013 4.61288 6.24663 4.61288 6.44189 4.80815C6.63716 5.00341 6.63716 5.31992 6.44189 5.51518L5.70703 6.25004L6.44189 6.98491C6.63716 7.18017 6.63716 7.49667 6.44189 7.69194C6.24663 7.8872 5.93013 7.8872 5.73486 7.69194L5 6.95707L4.26514 7.69194C4.06987 7.8872 3.75337 7.8872 3.55811 7.69194C3.36284 7.49667 3.36284 7.18017 3.55811 6.98491L4.29297 6.25004L3.55811 5.51518C3.36284 5.31992 3.36284 5.00341 3.55811 4.80815C3.75337 4.61288 4.06987 4.61288 4.26514 4.80815L5 5.54301L5.73486 4.80815ZM5 1.00004C4.50283 1.00004 4.35235 1.00444 4.24121 1.03422C3.89612 1.12669 3.62665 1.39616 3.53418 1.74125C3.51827 1.80065 3.50996 1.87127 3.50537 2.00004H6.49463C6.49004 1.87127 6.48173 1.80065 6.46582 1.74125C6.37335 1.39616 6.10388 1.12669 5.75879 1.03422C5.64765 1.00444 5.49717 1.00004 5 1.00004ZM9 8.10014C9 8.51188 9.00051 8.85083 8.97803 9.12602C8.95506 9.40705 8.90586 9.66559 8.78223 9.90825C8.59049 10.2845 8.28446 10.5905 7.9082 10.7823C7.66555 10.9059 7.407 10.9551 7.12598 10.9781C6.85079 11.0006 6.51184 11 6.1001 11H3.8999C3.48816 11 3.14921 11.0006 2.87402 10.9781C2.593 10.9551 2.33445 10.9059 2.0918 10.7823C1.71554 10.5905 1.40951 10.2845 1.21777 9.90825C1.09414 9.66559 1.04494 9.40705 1.02197 9.12602C0.999489 8.85083 1 8.51188 1 8.10014V3.00004H0.5C0.223858 3.00004 1.28851e-07 2.77618 0 2.50004C0 2.2239 0.223858 2.00004 0.5 2.00004H2.50537C2.51184 1.80416 2.52717 1.63619 2.56836 1.48246C2.75329 0.79228 3.29224 0.253335 3.98242 0.0684013C4.25278 -0.00404079 4.56721 4.18489e-05 5 4.19085e-05C5.43279 4.19383e-05 5.74722 -0.00404081 6.01758 0.0684013C6.70776 0.253336 7.24671 0.792279 7.43164 1.48246C7.47283 1.63619 7.48816 1.80416 7.49463 2.00004H9.5C9.77614 2.00004 10 2.2239 10 2.50004C10 2.77618 9.77614 3.00004 9.5 3.00004H9V8.10014Z",
        fill: "currentColor"
      }, null, -1)
    ])], 12, r4));
  }
}), Nn = /* @__PURE__ */ g(c4, [["__scopeId", "data-v-1363035c"]]), d4 = ["width", "height"], u4 = /* @__PURE__ */ h({
  __name: "UsdtLogo",
  props: {
    size: { default: 16 }
  },
  setup(e) {
    return (n, t) => (a(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: e.size,
      height: e.size,
      style: L(f(z)(e.size)),
      viewBox: "0 0 20 20",
      fill: "none",
      "aria-hidden": "true",
      class: "g-icon-usdt-logo"
    }, [...t[0] || (t[0] = [
      v1('<g clip-path="url(#clip0_usdt_logo)" data-v-9c1e74d9><path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#26A17B" data-v-9c1e74d9></path><path fill-rule="evenodd" clip-rule="evenodd" d="M11.0138 10.9775V10.9763C10.945 10.9813 10.5906 11.0025 9.8 11.0025C9.16875 11.0025 8.72437 10.9838 8.56812 10.9763V10.9781C6.13812 10.8713 4.32437 10.4481 4.32437 9.94188C4.32437 9.43625 6.13812 9.01313 8.56812 8.90438V10.5569C8.72687 10.5681 9.18187 10.595 9.81062 10.595C10.565 10.595 10.9431 10.5638 11.0138 10.5575V8.90563C13.4388 9.01375 15.2481 9.43688 15.2481 9.94188C15.2481 10.4481 13.4388 10.87 11.0138 10.9775V10.9775ZM11.0138 8.73375V7.255H14.3975V5H5.18438V7.255H8.56812V8.73313C5.81812 8.85938 3.75 9.40437 3.75 10.0569C3.75 10.7094 5.81812 11.2537 8.56812 11.3806V16.1194H11.0138V11.3794C13.7594 11.2531 15.8225 10.7087 15.8225 10.0569C15.8225 9.405 13.7594 8.86063 11.0138 8.73375" fill="white" data-v-9c1e74d9></path></g><defs data-v-9c1e74d9><clipPath id="clip0_usdt_logo" data-v-9c1e74d9><rect width="20" height="20" fill="white" data-v-9c1e74d9></rect></clipPath></defs>', 2)
    ])], 12, d4));
  }
}), qn = /* @__PURE__ */ g(u4, [["__scopeId", "data-v-9c1e74d9"]]), C4 = ["width", "height"], h4 = /* @__PURE__ */ h({
  __name: "Wallet",
  props: {
    size: { default: 16 }
  },
  setup(e) {
    return (n, t) => (a(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: e.size,
      height: e.size,
      style: L(f(z)(e.size)),
      viewBox: "0 0 13.3333 13.3395",
      fill: "none",
      "aria-hidden": "true",
      class: "g-icon-wallet"
    }, [...t[0] || (t[0] = [
      i("path", {
        d: "M12 5.60579C12 5.31495 11.9992 5.13685 11.9883 5.00358C11.9832 4.94177 11.9774 4.90403 11.972 4.88118C11.9695 4.87033 11.9668 4.86331 11.9655 4.8597C11.9643 4.85634 11.9637 4.85475 11.9635 4.85449C11.9316 4.79182 11.8804 4.7406 11.8177 4.70866C11.8171 4.70835 11.8153 4.70768 11.8125 4.7067C11.8088 4.70541 11.8022 4.70333 11.7917 4.70084C11.7689 4.69547 11.7313 4.68899 11.6693 4.68392C11.536 4.67303 11.3574 4.67285 11.0664 4.67285H10.1517C10.103 4.68419 10.0522 4.69043 10 4.69043C9.94801 4.69042 9.89754 4.68412 9.84896 4.67285H2.26693C1.97591 4.67285 1.79737 4.67303 1.66407 4.68392C1.60202 4.68899 1.56448 4.69547 1.54167 4.70084C1.53112 4.70333 1.52451 4.70541 1.52084 4.7067C1.51809 4.70769 1.51626 4.70835 1.51563 4.70866C1.45295 4.7406 1.40176 4.79182 1.3698 4.85449C1.36966 4.85475 1.36905 4.85634 1.36784 4.8597C1.36655 4.86331 1.36389 4.87033 1.36133 4.88118C1.35598 4.90403 1.35011 4.94177 1.34506 5.00358C1.33418 5.13685 1.33334 5.31495 1.33334 5.60579V11.0726C1.33334 11.3634 1.33418 11.5415 1.34506 11.6748C1.35013 11.7369 1.35596 11.775 1.36133 11.7978C1.36387 11.8086 1.36656 11.8151 1.36784 11.8187C1.36907 11.8221 1.36966 11.8236 1.3698 11.8239C1.40176 11.8866 1.45292 11.9378 1.51563 11.9697C1.51624 11.97 1.51804 11.9707 1.52084 11.9717C1.5245 11.973 1.5311 11.975 1.54167 11.9775C1.56448 11.9829 1.60202 11.9894 1.66407 11.9945C1.79737 12.0054 1.97591 12.0062 2.26693 12.0062H11.0664C11.3574 12.0062 11.536 12.0054 11.6693 11.9945C11.7313 11.9894 11.7689 11.9829 11.7917 11.9775C11.8022 11.975 11.8088 11.973 11.8125 11.9717C11.8153 11.9707 11.8171 11.97 11.8177 11.9697C11.8804 11.9378 11.9316 11.8866 11.9635 11.8239C11.9637 11.8236 11.9643 11.8221 11.9655 11.8187C11.9668 11.8151 11.9695 11.8086 11.972 11.7978C11.9774 11.775 11.9832 11.7369 11.9883 11.6748C11.9992 11.5415 12 11.3634 12 11.0726V5.60579ZM10.1022 7.34407C10.6065 7.39525 11 7.82173 11 8.33952C10.9999 8.89167 10.5522 9.33952 10 9.33952C9.48233 9.33952 9.05654 8.94586 9.00521 8.44173L9.00001 8.33952L9.00521 8.2373C9.05628 7.7329 9.48213 7.33952 10 7.33952L10.1022 7.34407ZM9.33334 2.59342C9.33334 2.16677 9.33283 1.89243 9.31446 1.69108C9.29611 1.49002 9.26623 1.45957 9.2754 1.47298C9.22462 1.39868 9.14596 1.34777 9.0573 1.33235C9.0731 1.33508 9.03274 1.32113 8.84245 1.38769C8.65156 1.45448 8.4014 1.56751 8.01303 1.74446L4.51237 3.33952H9.33334V2.59342ZM10.6667 3.33952H11.0664C11.3354 3.33952 11.5778 3.33878 11.778 3.35514C11.9859 3.37214 12.2067 3.41084 12.4232 3.52116C12.7367 3.68092 12.9919 3.9355 13.1517 4.24902C13.2621 4.46562 13.3007 4.68688 13.3177 4.89485C13.3341 5.09501 13.3333 5.33684 13.3333 5.60579V11.0726C13.3333 11.3415 13.3341 11.5834 13.3177 11.7835C13.3007 11.9915 13.2621 12.2128 13.1517 12.4294C12.9919 12.7429 12.7368 12.9981 12.4232 13.1579C12.2067 13.2681 11.9858 13.3062 11.778 13.3232C11.5778 13.3396 11.3354 13.3395 11.0664 13.3395H2.26693C1.99791 13.3395 1.75554 13.3396 1.55534 13.3232C1.34751 13.3062 1.1266 13.2681 0.910161 13.1579C0.596594 12.9981 0.341438 12.7429 0.181645 12.4294C0.0712817 12.2128 0.0326224 11.9915 0.0156298 11.7835C-0.000714617 11.5834 4.80157e-06 11.3415 4.83259e-06 11.0726V5.60579C4.6965e-06 5.33684 -0.000719814 5.09501 0.0156298 4.89485C0.0326224 4.68688 0.0712817 4.46562 0.181645 4.24902C0.321577 3.97447 0.534262 3.74443 0.795578 3.58431C0.8329 3.55653 0.873922 3.53211 0.917974 3.51204L7.46029 0.530923C7.82521 0.364657 8.14046 0.220847 8.40235 0.12923C8.66452 0.037521 8.96473 -0.036415 9.28516 0.019204C9.72855 0.0962154 10.1224 0.348847 10.3763 0.720376C10.5599 0.98895 10.6167 1.29333 10.6419 1.56999C10.6671 1.84622 10.6667 2.19255 10.6667 2.59342V3.33952Z",
        fill: "currentColor"
      }, null, -1)
    ])], 12, C4));
  }
}), Gn = /* @__PURE__ */ g(h4, [["__scopeId", "data-v-d2a291a9"]]), f4 = ["width", "height"], m4 = /* @__PURE__ */ h({
  __name: "XCircle",
  props: {
    size: { default: 12 }
  },
  setup(e) {
    return (n, t) => (a(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: e.size,
      height: e.size,
      style: L(f(z)(e.size)),
      viewBox: "0 0 11 11",
      fill: "none",
      "aria-hidden": "true",
      class: "g-icon-x-circle"
    }, [...t[0] || (t[0] = [
      i("path", {
        d: "M10 5.5C10 3.01472 7.98528 1 5.5 1C3.01472 1 1 3.01472 1 5.5C1 7.98528 3.01472 10 5.5 10C7.98528 10 10 7.98528 10 5.5ZM6.39648 3.89648C6.59175 3.70122 6.90825 3.70122 7.10352 3.89648C7.29878 4.09175 7.29878 4.40825 7.10352 4.60352L6.20703 5.5L7.10352 6.39648C7.29878 6.59175 7.29878 6.90825 7.10352 7.10352C6.90825 7.29878 6.59175 7.29878 6.39648 7.10352L5.5 6.20703L4.60352 7.10352C4.40825 7.29878 4.09175 7.29878 3.89648 7.10352C3.70122 6.90825 3.70122 6.59175 3.89648 6.39648L4.79297 5.5L3.89648 4.60352C3.70122 4.40825 3.70122 4.09175 3.89648 3.89648C4.09175 3.70122 4.40825 3.70122 4.60352 3.89648L5.5 4.79297L6.39648 3.89648ZM11 5.5C11 8.53757 8.53757 11 5.5 11C2.46243 11 0 8.53757 0 5.5C0 2.46243 2.46243 0 5.5 0C8.53757 0 11 2.46243 11 5.5Z",
        fill: "currentColor"
      }, null, -1)
    ])], 12, f4));
  }
}), g4 = /* @__PURE__ */ g(m4, [["__scopeId", "data-v-33546796"]]);
function _e() {
  const { locale: e, t: n } = j(), t = C(() => e.value === "en" ? "/logo-en.svg" : "/logo.svg"), s = C(() => n("common.brand"));
  return { src: t, alt: s };
}
const p4 = { class: "pos-header" }, v4 = ["src", "alt"], w4 = { class: "pos-header__right" }, _4 = /* @__PURE__ */ h({
  __name: "AppHeader",
  props: {
    logoUrl: { default: "/" }
  },
  setup(e) {
    const { src: n, alt: t } = _e();
    return (s, o) => {
      const c = N1("UContainer");
      return a(), l("header", p4, [
        V(c, { class: "pos-header__inner" }, {
          default: I(() => [
            V(f(U1), {
              to: e.logoUrl,
              class: "pos-header__logo"
            }, {
              default: I(() => [
                i("img", {
                  src: f(n),
                  alt: f(t)
                }, null, 8, v4)
              ]),
              _: 1
            }, 8, ["to"]),
            i("div", w4, [
              S(s.$slots, "header-right", {}, void 0, !0)
            ])
          ]),
          _: 3
        })
      ]);
    };
  }
}), b4 = /* @__PURE__ */ g(_4, [["__scopeId", "data-v-18e9e1d6"]]), y4 = { class: "header-container" }, L4 = { class: "flex items-start space-x-3 max-w-[90%]" }, k4 = { class: "icon-container" }, $4 = { class: "header-content" }, x4 = { class: "text-lg font-semibold" }, M4 = {
  key: 0,
  class: "text-sm text-gray-500"
}, z4 = { class: "card-footer" }, I4 = /* @__PURE__ */ h({
  __name: "DataCard",
  props: {
    title: {},
    description: { default: "" },
    icon: {},
    sectionClass: { default: "" },
    contentMaxHeight: { default: "auto" },
    headerDisplayMode: { default: "inline" }
  },
  setup(e) {
    return (n, t) => (a(), H(O2, {
      class: $(["data-card", e.sectionClass]),
      size: "md",
      animated: "",
      hoverable: ""
    }, d1({
      header: I(() => [
        i("div", y4, [
          i("div", L4, [
            i("div", k4, [
              (a(), H(K(e.icon), { class: "w-6 h-6 text-cyan-600" }))
            ]),
            i("div", $4, [
              i("h3", x4, x(e.title), 1),
              e.description ? (a(), l("p", M4, x(e.description), 1)) : b("", !0)
            ])
          ]),
          n.$slots.headerActions ? (a(), l("div", {
            key: 0,
            class: $(["header-actions", e.headerDisplayMode === "rows" && "header-actions--rows"])
          }, [
            S(n.$slots, "headerActions", {}, void 0, !0)
          ], 2)) : b("", !0)
        ])
      ]),
      default: I(() => [
        i("div", {
          class: "card-content",
          style: L({ maxHeight: e.contentMaxHeight })
        }, [
          S(n.$slots, "default", {}, void 0, !0)
        ], 4)
      ]),
      _: 2
    }, [
      n.$slots.footer ? {
        name: "footer",
        fn: I(() => [
          i("div", z4, [
            S(n.$slots, "footer", {}, void 0, !0)
          ])
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["class"]));
  }
}), V4 = /* @__PURE__ */ g(I4, [["__scopeId", "data-v-ec8097f8"]]), H4 = {
  key: 0,
  class: "dropdown-item__icon"
}, Z4 = { class: "dropdown-item__content" }, B4 = { class: "dropdown-item__title" }, S4 = {
  key: 0,
  class: "dropdown-item__subtitle"
}, R4 = {
  key: 1,
  class: "dropdown-item__action"
}, T4 = /* @__PURE__ */ h({
  __name: "DropdownItem",
  props: {
    active: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: n }) {
    const t = e, s = n, o = () => {
      t.disabled || s("click");
    };
    return (c, u) => (a(), l("div", {
      class: $(["dropdown-item", { _active: e.active, _disabled: e.disabled }]),
      onClick: o
    }, [
      c.$slots.icon ? (a(), l("div", H4, [
        S(c.$slots, "icon", {}, void 0, !0)
      ])) : b("", !0),
      i("div", Z4, [
        i("div", B4, [
          S(c.$slots, "title", {}, void 0, !0)
        ]),
        c.$slots.subtitle ? (a(), l("div", S4, [
          S(c.$slots, "subtitle", {}, void 0, !0)
        ])) : b("", !0)
      ]),
      c.$slots.action ? (a(), l("div", R4, [
        S(c.$slots, "action", {}, void 0, !0)
      ])) : b("", !0)
    ], 2));
  }
}), n3 = /* @__PURE__ */ g(T4, [["__scopeId", "data-v-4d1e6cbd"]]), E4 = /* @__PURE__ */ h({
  __name: "DropdownMenu",
  props: {
    modelValue: { type: Boolean, default: !1 },
    closeOnRouteChange: { type: Boolean, default: !0 },
    closeOnEscape: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "open", "close"],
  setup(e, { emit: n }) {
    const t = e, s = n, o = E(t.modelValue), c = E(), u = E(), d = E(), r = E({
      top: "auto",
      bottom: "auto",
      left: "auto",
      right: "auto",
      transform: "none"
    }), w = () => {
      if (!c.value || !u.value) return;
      const v = u.value.getBoundingClientRect(), R = window.innerWidth, T = window.innerHeight, P = 256, D = 200, A = T - v.bottom, n1 = v.top, X = R - v.left, s1 = v.right;
      let h1 = "auto", a1 = "auto";
      A < D && n1 > A ? a1 = `${T - v.top + 8}px` : h1 = `${v.bottom + 8}px`;
      let r1 = "auto", t1 = "auto";
      X < P && s1 > X ? t1 = `${R - v.right}px` : r1 = `${v.left}px`, r.value = {
        top: h1,
        bottom: a1,
        left: r1,
        right: t1,
        transform: "none"
      };
    };
    e1(
      () => t.modelValue,
      (v) => {
        o.value = v;
      }
    ), e1(o, (v) => {
      s("update:modelValue", v), v ? (s("open"), g1(() => {
        w();
      })) : s("close");
    });
    const _ = () => {
      o.value = !o.value;
    }, p = () => {
      o.value = !1;
    }, y = q1();
    t.closeOnRouteChange && e1(
      () => y.path,
      () => {
        p();
      }
    );
    const Z = typeof document < "u";
    t.closeOnEscape && Z && u1(() => {
      const v = (R) => {
        R.key === "Escape" && p();
      };
      document.addEventListener("keydown", v), f1(() => {
        document.removeEventListener("keydown", v);
      });
    });
    const m = (v) => {
      const R = v.target;
      o.value && u.value && !u.value.contains(R) && d.value && !d.value.contains(R) && p();
    }, k = () => {
      Z && document.removeEventListener("mousedown", m);
    };
    return e1(o, (v) => {
      Z && (v ? g1(() => {
        document.addEventListener("mousedown", m);
      }) : k());
    }, { immediate: !0 }), f1(() => {
      k();
    }), u1(() => {
      if (typeof window > "u") return;
      const v = () => {
        o.value && w();
      };
      window.addEventListener("resize", v), f1(() => {
        window.removeEventListener("resize", v);
      });
    }), (v, R) => (a(), l("div", {
      ref_key: "dropdownRef",
      ref: c,
      class: $(["dropdown", { _open: o.value }])
    }, [
      i("div", {
        ref_key: "triggerRef",
        ref: u,
        class: "dropdown__trigger"
      }, [
        S(v.$slots, "trigger", {
          isOpen: o.value,
          toggle: _,
          close: p
        }, void 0, !0)
      ], 512),
      V(te, { name: "dropdown" }, {
        default: I(() => [
          o.value ? (a(), H(I1, {
            key: 0,
            to: "body"
          }, [
            i("div", {
              ref_key: "menuRef",
              ref: d,
              class: "dropdown__menu",
              style: L(r.value),
              onClick: R[0] || (R[0] = o1(() => {
              }, ["stop"]))
            }, [
              S(v.$slots, "menu", { close: p }, void 0, !0)
            ], 4)
          ])) : b("", !0)
        ]),
        _: 3
      }),
      V(te, { name: "backdrop" }, {
        default: I(() => [
          o.value ? (a(), l("div", {
            key: 0,
            class: "dropdown__backdrop",
            onClick: p
          })) : b("", !0)
        ]),
        _: 1
      })
    ], 2));
  }
}), s3 = /* @__PURE__ */ g(E4, [["__scopeId", "data-v-35042037"]]), D4 = {
  key: 1,
  class: "relative"
}, A4 = ["onClick"], F4 = { class: "text-xs text-gray-500 font-medium uppercase tracking-wider whitespace-nowrap" }, P4 = { class: "flex items-center gap-1" }, O4 = { class: "flex items-center" }, U4 = { class: "flex items-center" }, N4 = /* @__PURE__ */ h({
  __name: "LanguageSwitcher",
  props: {
    compact: { type: Boolean, default: !1 },
    locales: { default: void 0 }
  },
  emits: ["change"],
  setup(e, { emit: n }) {
    const { locale: t, availableLocales: s, t: o } = j(), c = z3("gpSetLocale"), u = fe(), d = n, r = E(!1), w = E(null), _ = e, p = { ru: "Русский", en: "English" }, y = C(
      () => _.locales ?? s.map((T) => ({ code: T, name: p[T] ?? T.toUpperCase() }))
    ), Z = C(() => k(t.value)), m = C(() => String(t.value).toUpperCase()), k = (T) => ({
      ru: qt,
      en: jt
    })[T] || null, v = () => {
      r.value = !1;
    };
    we(w, () => {
      _.compact && v();
    });
    const R = async (T, P) => {
      if (t.value === T) {
        P();
        return;
      }
      const D = t.value;
      try {
        c ? await c(T) : t.value = T, d("change", T), P();
      } catch (A) {
        console.error("Ошибка переключения языка:", A), t.value !== D && (t.value = D), u.add({
          title: o("common.error"),
          description: o("common.languageSwitchError"),
          color: "error",
          icon: "i-heroicons-x-circle"
        });
      }
    };
    return (T, P) => e.compact ? (a(), l("div", {
      key: 0,
      ref_key: "rootRef",
      ref: w,
      class: "language-switcher language-switcher--compact"
    }, [
      V(pe, {
        variant: "white",
        open: r.value,
        onClick: P[0] || (P[0] = (D) => r.value = !r.value)
      }, {
        leading: I(() => [
          (a(), H(K(Z.value), { size: 20 }))
        ]),
        default: I(() => [
          N(" " + x(m.value), 1)
        ]),
        _: 1
      }, 8, ["open"]),
      r.value ? (a(), H(G1, {
        key: 0,
        class: "language-switcher__menu"
      }, {
        default: I(() => [
          (a(!0), l(U, null, G(y.value, (D) => (a(), H($1, {
            key: D.code,
            selected: D.code === f(t),
            muted: D.code !== f(t),
            onClick: (A) => R(D.code, v)
          }, {
            leading: I(() => [
              (a(), H(K(k(D.code)), { size: 16 }))
            ]),
            default: I(() => [
              N(" " + x(D.name), 1)
            ]),
            _: 2
          }, 1032, ["selected", "muted", "onClick"]))), 128))
        ]),
        _: 1
      })) : b("", !0)
    ], 512)) : (a(), l("div", D4, [
      V(s3, {
        modelValue: r.value,
        "onUpdate:modelValue": P[1] || (P[1] = (D) => r.value = D)
      }, {
        trigger: I(({ isOpen: D, toggle: A }) => [
          i("div", {
            class: "flex items-center gap-1.5 cursor-pointer px-2.5 py-2 rounded-2xl transition-all duration-300 relative bg-white border-2 border-gray-200 shadow-sm hover:border-teal-500 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:shadow-md min-w-20 lg:gap-2 lg:px-3 lg:py-2 lg:min-w-24",
            onClick: A
          }, [
            i("div", F4, x(T.$t("common.language")), 1),
            i("div", P4, [
              i("div", O4, [
                (a(), H(K(Z.value), { size: 18 }))
              ]),
              V(f(B3), {
                class: $(["w-3.5 h-3.5 text-gray-500 transition-all duration-300 flex-shrink-0 lg:w-4 lg:h-4", { "rotate-180 text-teal-500": D }]),
                style: { "margin-top": "5px" }
              }, null, 8, ["class"])
            ])
          ], 8, A4)
        ]),
        menu: I(({ close: D }) => [
          (a(!0), l(U, null, G(y.value, (A) => (a(), H(n3, {
            key: A.code,
            active: A.code === T.$i18n.locale,
            onClick: (n1) => R(A.code, D)
          }, {
            icon: I(() => [
              i("div", U4, [
                (a(), H(K(k(A.code)), { size: 18 }))
              ])
            ]),
            title: I(() => [
              N(x(A.name), 1)
            ]),
            subtitle: I(() => [
              N(x(A.code.toUpperCase()), 1)
            ]),
            _: 2
          }, 1032, ["active", "onClick"]))), 128))
        ]),
        _: 1
      }, 8, ["modelValue"])
    ]));
  }
}), be = /* @__PURE__ */ g(N4, [["__scopeId", "data-v-7d61ed19"]]), q4 = { class: "mobile-header" }, G4 = { class: "mobile-header__end" }, j4 = /* @__PURE__ */ h({
  __name: "MobileHeader",
  props: {
    menuOpen: { type: Boolean }
  },
  emits: ["open"],
  setup(e, { emit: n }) {
    const t = n;
    return (s, o) => (a(), l("header", q4, [
      V(f(U1), {
        to: "/",
        class: "mobile-header__logo",
        "aria-label": s.$t("common.brand")
      }, {
        default: I(() => [
          V(gt, { size: 18 })
        ]),
        _: 1
      }, 8, ["aria-label"]),
      i("div", G4, [
        V(be, { compact: "" }),
        V(i1, {
          variant: "white",
          size: "md",
          class: "mobile-header__menu",
          "aria-label": s.$t("terminal.nav.openMenu"),
          "aria-expanded": e.menuOpen,
          onClick: o[0] || (o[0] = (c) => t("open"))
        }, {
          default: I(() => [
            V(kt, { size: 16 })
          ]),
          _: 1
        }, 8, ["aria-label", "aria-expanded"])
      ])
    ]));
  }
}), W4 = /* @__PURE__ */ g(j4, [["__scopeId", "data-v-2a0f0fd4"]]), Q4 = { class: "mobile-tab-bar" }, K4 = { class: "mobile-tab-bar__label" }, Y4 = {
  key: 0,
  class: "mobile-tab-bar__more"
}, X4 = {
  key: 0,
  class: "mobile-tab-bar__dropdown"
}, J4 = { class: "mobile-tab-bar__dropdown-label" }, Te = 5, e7 = /* @__PURE__ */ h({
  __name: "MobileTabBar",
  props: {
    menuItems: { default: () => [] }
  },
  setup(e) {
    const n = q1(), t = Te - 1, s = E(!1), o = e, c = C(() => o.menuItems.filter((Z) => !Z.desktopOnly)), u = C(() => c.value.length > Te), d = C(
      () => u.value ? c.value.slice(0, t) : c.value
    ), r = C(
      () => u.value ? c.value.slice(t) : []
    ), w = C(
      () => r.value.some((Z) => _(Z.to))
    ), _ = (Z) => Z === "/" ? n.path === "/" : n.path.startsWith(Z), p = () => {
      s.value = !s.value;
    }, y = () => {
      s.value = !1;
    };
    return e1(
      () => n.path,
      () => {
        y();
      }
    ), (Z, m) => (a(), l("nav", Q4, [
      (a(!0), l(U, null, G(d.value, (k) => (a(), H(f(U1), {
        key: k.to,
        to: k.to,
        class: $(["mobile-tab-bar__item", { _active: _(k.to) }])
      }, {
        default: I(() => [
          (a(), H(K(k.icon), { class: "mobile-tab-bar__icon" })),
          i("span", K4, x(k.title), 1)
        ]),
        _: 2
      }, 1032, ["to", "class"]))), 128)),
      u.value ? (a(), l("div", Y4, [
        i("button", {
          type: "button",
          class: $(["mobile-tab-bar__item mobile-tab-bar__more-trigger", { _active: w.value }]),
          onClick: p
        }, [
          V(f(S3), { class: "mobile-tab-bar__icon" }),
          m[0] || (m[0] = i("span", { class: "mobile-tab-bar__label" }, "...", -1))
        ], 2),
        s.value ? (a(), l("div", X4, [
          (a(!0), l(U, null, G(r.value, (k) => (a(), H(f(U1), {
            key: k.to,
            to: k.to,
            class: $(["mobile-tab-bar__dropdown-item", { _active: _(k.to) }]),
            onClick: y
          }, {
            default: I(() => [
              (a(), H(K(k.icon), { class: "mobile-tab-bar__dropdown-icon" })),
              i("span", J4, x(k.title), 1)
            ]),
            _: 2
          }, 1032, ["to", "class"]))), 128))
        ])) : b("", !0)
      ])) : b("", !0)
    ]));
  }
}), t7 = /* @__PURE__ */ g(e7, [["__scopeId", "data-v-8aa2c951"]]), a3 = () => ({
  title: E(""),
  subtitle: E(void 0),
  actions: E([])
}), X1 = "__gpPageHeader", n7 = a3(), s7 = () => {
  const e = I3()?.appContext.app;
  return e ? (e[X1] || (e[X1] = a3()), e[X1]) : n7;
}, a7 = () => {
  const { title: e, subtitle: n, actions: t } = s7();
  return {
    state: C(() => ({
      title: e.value,
      subtitle: n.value,
      actions: t.value
    })),
    setTitle: (p) => {
      e.value = f(p);
    },
    setSubtitle: (p) => {
      n.value = p ? f(p) : void 0;
    },
    setActions: (p) => {
      t.value = [...p];
    },
    addAction: (p) => {
      t.value = [...t.value, p];
    },
    removeAction: (p) => {
      t.value = t.value.filter((y) => y.key !== p);
    },
    clearTitleSubtitle: () => {
      e.value = "", n.value = void 0;
    },
    clear: () => {
      e.value = "", n.value = void 0, t.value = [];
    }
  };
};
function o7(e) {
  return e === "outline" || e === "secondary" ? "secondary" : e === "ghost" ? "ghost" : e === "danger" ? "danger" : "primary";
}
function o3(e) {
  return typeof e == "boolean" ? e : e?.value ?? !1;
}
function Ee(e) {
  return o3(e);
}
function S1(e) {
  return o3(e);
}
function i7(e, n) {
  return e.labelKey ? n(e.labelKey) : e.label ?? "";
}
const l7 = { class: "page-header__start" }, r7 = { class: "page-header__text" }, c7 = { class: "page-header__title" }, d7 = {
  key: 0,
  class: "page-header__subtitle"
}, u7 = { class: "page-header__actions" }, C7 = {
  key: 0,
  id: "page-header-selects",
  class: "page-header__selects"
}, h7 = /* @__PURE__ */ h({
  __name: "PageHeader",
  props: {
    title: {},
    subtitle: {},
    actions: {},
    kit: { type: Boolean }
  },
  setup(e) {
    const n = e, { t } = j(), { state: s } = a7(), o = (y) => i7(y, t), c = C(() => n.title ?? s.value.title), u = C(() => n.subtitle ?? s.value.subtitle), d = C(() => n.actions ?? s.value.actions), r = C(
      () => n.kit ? d.value.filter((y) => y.leading) : []
    ), w = C(
      () => n.kit ? d.value.filter((y) => !y.leading) : d.value
    ), _ = C(() => w.value.filter((y) => y.iconOnly)), p = C(() => w.value.filter((y) => !y.iconOnly));
    return (y, Z) => (a(), l("div", {
      class: $(["page-header", { _kit: e.kit }])
    }, [
      i("div", l7, [
        (a(!0), l(U, null, G(r.value, (m) => (a(), H(i1, {
          key: m.key,
          size: "md",
          variant: "ghost",
          class: "page-header__icon-btn",
          "aria-label": o(m),
          disabled: f(S1)(m.disabled),
          onClick: m.onClick
        }, {
          default: I(() => [
            (a(), H(K(m.icon), { size: 16 }))
          ]),
          _: 2
        }, 1032, ["aria-label", "disabled", "onClick"]))), 128)),
        i("div", r7, [
          i("h1", c7, x(c.value), 1),
          u.value ? (a(), l("p", d7, x(u.value), 1)) : b("", !0)
        ])
      ]),
      i("div", u7, [
        V(be, { compact: "" }),
        e.kit ? (a(), l("div", C7)) : b("", !0),
        S(y.$slots, "actions", {}, () => [
          e.kit ? (a(), l(U, { key: 0 }, [
            (a(!0), l(U, null, G(_.value, (m) => (a(), H(i1, {
              key: m.key,
              size: "md",
              variant: "ghost",
              class: "page-header__icon-btn",
              "aria-label": o(m),
              disabled: f(S1)(m.disabled) || f(Ee)(m.loading),
              onClick: m.onClick
            }, {
              default: I(() => [
                (a(), H(K(m.icon), { size: 16 }))
              ]),
              _: 2
            }, 1032, ["aria-label", "disabled", "onClick"]))), 128)),
            (a(!0), l(U, null, G(p.value, (m) => (a(), H(m1, {
              key: m.key,
              size: m.size || "md",
              variant: f(o7)(m.variant),
              loading: f(Ee)(m.loading),
              disabled: f(S1)(m.disabled),
              onClick: m.onClick
            }, d1({
              default: I(() => [
                N(" " + x(o(m)), 1)
              ]),
              _: 2
            }, [
              m.icon ? {
                name: "leading",
                fn: I(() => [
                  (a(), H(K(m.icon), { size: 16 }))
                ]),
                key: "0"
              } : void 0
            ]), 1032, ["size", "variant", "loading", "disabled", "onClick"]))), 128))
          ], 64)) : b("", !0),
          (a(!0), l(U, null, G(e.kit ? [] : w.value, (m) => (a(), H(K(j1), {
            key: m.key,
            size: m.size || "sm",
            disabled: f(S1)(m.disabled),
            onClick: m.onClick
          }, {
            default: I(() => [
              m.icon ? (a(), H(K(m.icon), {
                key: 0,
                class: "w-4 h-4 mr-2"
              })) : b("", !0),
              N(" " + x(o(m)), 1)
            ]),
            _: 2
          }, 1032, ["size", "disabled", "onClick"]))), 128))
        ], !0)
      ])
    ], 2));
  }
}), f7 = /* @__PURE__ */ g(h7, [["__scopeId", "data-v-ad2bb741"]]), m7 = { class: "password-requirements__content" }, g7 = {
  key: 0,
  class: "password-requirements__title"
}, p7 = { class: "password-requirements__list" }, v7 = /* @__PURE__ */ h({
  __name: "PasswordRequirements",
  props: {
    password: {},
    variant: { default: "card" }
  },
  setup(e) {
    const { t: n } = j(), t = e, s = C(() => {
      const o = t.password;
      return {
        minLength: o.length >= 8,
        hasLowercase: /[a-z]/.test(o),
        hasUppercase: /[A-Z]/.test(o),
        hasNumber: /\d/.test(o),
        hasSpecialChar: /[!@#$%^&*]/.test(o)
      };
    });
    return (o, c) => e.variant === "plain" || e.password ? (a(), l("div", {
      key: 0,
      class: $(["password-requirements animate-fade-in", `password-requirements--${e.variant}`])
    }, [
      i("div", m7, [
        e.variant === "card" ? (a(), l("h4", g7, x(f(n)("auth.passwordRequirementsTitle")), 1)) : b("", !0),
        i("ul", p7, [
          i("li", {
            class: $(["password-requirements__item", { valid: s.value.minLength }])
          }, [
            V(Y, {
              name: s.value.minLength ? "i-heroicons-check-circle" : "i-heroicons-x-circle",
              class: $(["password-requirements__icon", {
                "icon-success": s.value.minLength,
                "icon-error": !s.value.minLength
              }])
            }, null, 8, ["name", "class"]),
            i("span", null, x(f(n)("auth.passwordRequirement.minLength")), 1)
          ], 2),
          i("li", {
            class: $(["password-requirements__item", { valid: s.value.hasLowercase }])
          }, [
            V(Y, {
              name: s.value.hasLowercase ? "i-heroicons-check-circle" : "i-heroicons-x-circle",
              class: $(["password-requirements__icon", {
                "icon-success": s.value.hasLowercase,
                "icon-error": !s.value.hasLowercase
              }])
            }, null, 8, ["name", "class"]),
            i("span", null, x(f(n)("auth.passwordRequirement.lowercase")), 1)
          ], 2),
          i("li", {
            class: $(["password-requirements__item", { valid: s.value.hasUppercase }])
          }, [
            V(Y, {
              name: s.value.hasUppercase ? "i-heroicons-check-circle" : "i-heroicons-x-circle",
              class: $(["password-requirements__icon", {
                "icon-success": s.value.hasUppercase,
                "icon-error": !s.value.hasUppercase
              }])
            }, null, 8, ["name", "class"]),
            i("span", null, x(f(n)("auth.passwordRequirement.uppercase")), 1)
          ], 2),
          i("li", {
            class: $(["password-requirements__item", { valid: s.value.hasNumber }])
          }, [
            V(Y, {
              name: s.value.hasNumber ? "i-heroicons-check-circle" : "i-heroicons-x-circle",
              class: $(["password-requirements__icon", {
                "icon-success": s.value.hasNumber,
                "icon-error": !s.value.hasNumber
              }])
            }, null, 8, ["name", "class"]),
            i("span", null, x(f(n)("auth.passwordRequirement.number")), 1)
          ], 2),
          i("li", {
            class: $(["password-requirements__item", { valid: s.value.hasSpecialChar }])
          }, [
            V(Y, {
              name: s.value.hasSpecialChar ? "i-heroicons-check-circle" : "i-heroicons-x-circle",
              class: $(["password-requirements__icon", {
                "icon-success": s.value.hasSpecialChar,
                "icon-error": !s.value.hasSpecialChar
              }])
            }, null, 8, ["name", "class"]),
            i("span", null, x(f(n)("auth.passwordRequirement.specialChar")), 1)
          ], 2)
        ])
      ])
    ], 2)) : b("", !0);
  }
}), w7 = /* @__PURE__ */ g(v7, [["__scopeId", "data-v-0b9db9db"]]), _7 = {
  key: 0,
  class: "password-strength animate-fade-in"
}, b7 = { class: "password-strength__header" }, y7 = { class: "password-strength__title" }, L7 = { class: "password-strength__bar" }, k7 = { class: "password-requirements" }, $7 = { class: "password-requirement__text" }, x7 = /* @__PURE__ */ h({
  __name: "PasswordStrengthIndicator",
  props: {
    password: {}
  },
  setup(e) {
    const { t: n } = j(), t = e, s = C(() => {
      const w = t.password;
      if (!w) return 0;
      let _ = 0;
      return w.length >= 6 && (_ += 1), w.length >= 8 && (_ += 1), w.length >= 12 && (_ += 1), /\d/.test(w) && (_ += 1), /[a-zA-Z]/.test(w) && (_ += 1), /[!@#$%^&*(),.?":{}|<>]/.test(w) && (_ += 1), Math.min(_, 5);
    }), o = C(() => {
      const w = s.value;
      return w <= 2 ? "password-strength__fill--weak" : w <= 3 ? "password-strength__fill--medium" : "password-strength__fill--strong";
    }), c = C(() => `${s.value / 5 * 100}%`), u = C(() => {
      const w = s.value;
      return w <= 2 ? n("auth.passwordStrength.weak") : w <= 3 ? n("auth.passwordStrength.medium") : n("auth.passwordStrength.strong");
    }), d = C(() => {
      const w = t.password;
      return w ? {
        length: w.length >= 8,
        uppercase: /[A-Z]/.test(w),
        lowercase: /[a-z]/.test(w),
        number: /\d/.test(w),
        special: /[!@#$%^&*(),.?":{}|<>]/.test(w)
      } : {};
    }), r = (w) => ({
      length: n("auth.passwordRequirement.minLength"),
      uppercase: n("auth.passwordRequirement.uppercase"),
      lowercase: n("auth.passwordRequirement.lowercase"),
      number: n("auth.passwordRequirement.number"),
      special: n("auth.passwordRequirement.specialChar")
    })[w] || w;
    return (w, _) => e.password ? (a(), l("div", _7, [
      i("div", b7, [
        i("span", y7, x(f(n)("auth.passwordStrengthLabel")), 1),
        i("span", {
          class: $(["password-strength__level", o.value])
        }, x(u.value), 3)
      ]),
      i("div", L7, [
        i("div", {
          class: $(["password-strength__fill", o.value]),
          style: L({ width: c.value })
        }, null, 6)
      ]),
      i("div", k7, [
        (a(!0), l(U, null, G(d.value, (p, y) => (a(), l("div", {
          key: y,
          class: $(["password-requirement", { "password-requirement--met": p }])
        }, [
          p ? (a(), H(f(R3), {
            key: 0,
            class: "w-3 h-3 text-green-500"
          })) : (a(), H(f(T3), {
            key: 1,
            class: "w-3 h-3 text-gray-400"
          })),
          i("span", $7, x(r(y)), 1)
        ], 2))), 128))
      ])
    ])) : b("", !0);
  }
}), M7 = /* @__PURE__ */ g(x7, [["__scopeId", "data-v-3680fb4f"]]), z7 = () => ({
  generateQRCode: async (t, s = {}) => {
    try {
      const o = {
        width: 200,
        margin: 2,
        color: {
          dark: "#000000",
          light: "#FFFFFF"
        },
        errorCorrectionLevel: "M",
        ...s
      };
      return await Me.toDataURL(t, o);
    } catch (o) {
      throw console.error("Ошибка генерации QR кода:", o), new Error("Не удалось сгенерировать QR код");
    }
  },
  generateQRCodeSVG: async (t, s = {}) => {
    try {
      const o = {
        width: 200,
        margin: 2,
        color: {
          dark: "#000000",
          light: "#FFFFFF"
        },
        errorCorrectionLevel: "M",
        ...s
      };
      return await Me.toString(t, {
        type: "svg",
        ...o
      });
    } catch (o) {
      throw console.error("Ошибка генерации QR кода SVG:", o), new Error("Не удалось сгенерировать QR код SVG");
    }
  }
}), I7 = { class: "qr-display" }, V7 = {
  key: 0,
  class: "qr-loading"
}, H7 = { class: "text-sm text-gray-500 mt-3" }, Z7 = {
  key: 1,
  class: "qr-error"
}, B7 = { class: "text-sm text-red-500 mt-3" }, S7 = {
  key: 2,
  class: "qr-success"
}, R7 = ["src", "alt"], T7 = {
  key: 0,
  class: "text-sm text-gray-500 mt-3"
}, E7 = {
  key: 3,
  class: "qr-placeholder"
}, D7 = {
  key: 0,
  class: "text-sm text-gray-500 mt-3"
}, A7 = /* @__PURE__ */ h({
  __name: "QRCodeDisplay",
  props: {
    text: {},
    size: { default: 200 },
    description: { default: "" },
    altText: { default: "" },
    initialDataUrl: {}
  },
  emits: ["download"],
  setup(e, { expose: n, emit: t }) {
    const s = e, { t: o } = j(), c = C(() => {
      const p = Number(s.size);
      return Number.isFinite(p) ? Math.max(120, Math.min(1024, p)) : 200;
    }), u = E(s.initialDataUrl ?? ""), d = E(!1), r = E(!1), { generateQRCode: w } = z7(), _ = async () => {
      if (s.text) {
        d.value = !0, r.value = !1;
        try {
          const p = await w(s.text, {
            width: c.value,
            margin: 2,
            color: {
              dark: "#000000",
              light: "#FFFFFF"
            }
          });
          u.value = p;
        } catch (p) {
          console.error("Ошибка генерации QR кода:", p), r.value = !0;
        } finally {
          d.value = !1;
        }
      }
    };
    return e1(() => [s.text, s.size], _, { immediate: !s.initialDataUrl }), n({
      generateQR: _,
      qrCodeDataURL: T1(u),
      isLoading: T1(d),
      hasError: T1(r)
    }), (p, y) => (a(), l("div", I7, [
      d.value ? (a(), l("div", V7, [
        V(f(E3), { class: "w-20 h-20 text-gray-400 animate-spin" }),
        i("p", H7, x(p.$t("balance.qr.generating")), 1)
      ])) : r.value ? (a(), l("div", Z7, [
        V(f(xe), { class: "w-20 h-20 text-red-400" }),
        i("p", B7, x(p.$t("balance.qr.generationError")), 1),
        V(j1, {
          variant: "secondary",
          size: "sm",
          onClick: _,
          class: "mt-2"
        }, {
          default: I(() => [
            N(x(p.$t("balance.qr.retry")), 1)
          ]),
          _: 1
        })
      ])) : u.value ? (a(), l("div", S7, [
        i("img", {
          src: u.value,
          alt: e.altText,
          class: "qr-image"
        }, null, 8, R7),
        e.description ? (a(), l("p", T7, x(e.description), 1)) : b("", !0)
      ])) : (a(), l("div", E7, [
        V(f(xe), { class: "w-20 h-20 text-gray-400" }),
        e.description ? (a(), l("p", D7, x(e.description), 1)) : b("", !0)
      ]))
    ]));
  }
}), F7 = /* @__PURE__ */ g(A7, [["__scopeId", "data-v-5156b7c9"]]), i3 = /* @__PURE__ */ h({
  __name: "SidebarItem",
  props: {
    to: {},
    title: {},
    icon: {},
    disabled: { type: Boolean, default: !1 },
    size: { default: "sm" }
  },
  emits: ["click"],
  setup(e, { emit: n }) {
    const t = e, s = n, o = q1(), c = We(), u = C(() => t.to === "/" ? o.path === "/" : o.path === t.to || o.path.startsWith(`${t.to}/`)), d = async () => {
      t.disabled || (s("click"), await c.push(t.to));
    };
    return (r, w) => (a(), H(Je, {
      size: e.size,
      selected: u.value,
      disabled: e.disabled,
      onClick: d
    }, d1({
      default: I(() => [
        N(" " + x(e.title), 1)
      ]),
      _: 2
    }, [
      e.icon ? {
        name: "leading",
        fn: I(() => [
          (a(), H(K(e.icon)))
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["size", "selected", "disabled"]));
  }
});
function P7(e, n = 12) {
  if (e.length <= n) return e;
  const t = Math.floor(n / 2);
  return `${e.slice(0, t)}…${e.slice(-t)}`;
}
function l3(e, n = "—") {
  if (e == null || e === "") return n;
  const t = typeof e == "number" ? e : Number.parseFloat(String(e));
  return Number.isFinite(t) ? `${new Intl.NumberFormat("ru-RU", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(t)} ₽` : n;
}
const O7 = {
  RUB: 2,
  CNY: 2,
  USDT: 6,
  TRX: 6
};
function jn(e, n = "RUB", t = "—") {
  const s = String(n || "RUB").toUpperCase();
  if (s === "RUB") return l3(e, t);
  if (e == null || e === "") return t;
  const o = typeof e == "number" ? e : Number.parseFloat(String(e));
  if (!Number.isFinite(o)) return t;
  const c = O7[s] ?? 2;
  return `${new Intl.NumberFormat("ru-RU", {
    minimumFractionDigits: 0,
    maximumFractionDigits: c
  }).format(o)} ${s}`;
}
function E1(e) {
  if (typeof e == "number")
    return Number.isFinite(e) && e > 0 ? e : void 0;
  if (typeof e == "string" && e.trim()) {
    const n = Number(e.trim().replace(",", "."));
    return Number.isFinite(n) && n > 0 ? n : void 0;
  }
}
function Wn(e) {
  return E1(e.payer_course) ?? E1(e.fiat_course) ?? E1(e.course);
}
function Qn(e, n = "RUB", t = {}) {
  const s = E1(e);
  if (s == null) return "—";
  const o = new Intl.NumberFormat("ru-RU", {
    minimumFractionDigits: t.min ?? 2,
    maximumFractionDigits: t.max ?? 2
  }).format(s), u = String(n || "RUB").toUpperCase() === "RUB" ? "₽" : n, d = String(t.quote || "USDT").toUpperCase();
  return `${o} ${u}/${d}`;
}
function Kn(e, n) {
  return e <= 0 ? 0 : n.fiat_course ? Number((e * n.fiat_course).toFixed(2)) : n.amount != null && n.amount > 0 && n.fiat_amount ? Number((e / n.amount * n.fiat_amount).toFixed(2)) : 0;
}
const U7 = { class: "sidebar-panel__card" }, N7 = { class: "sidebar-panel__profile" }, q7 = {
  class: "sidebar-panel__avatar",
  "aria-hidden": "true"
}, G7 = { class: "sidebar-panel__who" }, j7 = { class: "sidebar-panel__welcome" }, W7 = ["title"], Q7 = {
  key: 0,
  class: "sidebar-panel__balance-wrap"
}, K7 = { class: "sidebar-panel__balance-label" }, Y7 = { class: "sidebar-panel__balance-row" }, X7 = { class: "sidebar-panel__balance-amount" }, J7 = { class: "sidebar-panel__nav" }, e8 = { class: "sidebar-panel__footer" }, t8 = { class: "sidebar-panel__footer-row" }, n8 = /* @__PURE__ */ h({
  __name: "SidebarPanel",
  props: {
    mobile: { type: Boolean, default: !1 },
    userName: { default: "" },
    balanceAmount: { default: null },
    balanceTo: { default: "/balance" },
    menuItems: { default: () => [] },
    docsUrl: { default: "" },
    links: { default: () => [] },
    chatEnabled: { type: Boolean, default: !1 },
    logoutLoading: { type: Boolean, default: !1 }
  },
  emits: ["navigate", "toggle-chat", "logout"],
  setup(e, { emit: n }) {
    const t = e, s = n, o = We(), c = C(
      () => t.menuItems.filter((Z) => t.mobile ? !Z.desktopOnly : !Z.mobileOnly)
    ), u = E(!1);
    u1(() => {
      u.value = !0;
    });
    const d = C(() => t.userName || "—"), r = C(() => {
      const Z = d.value.trim(), m = Z.split(/s+/).filter(Boolean);
      return m.length >= 2 ? `${m[0].charAt(0)}${m[1].charAt(0)}`.toUpperCase() : Z.slice(0, 2).toUpperCase() || "GP";
    }), w = () => {
      t.balanceTo && o.push(t.balanceTo), s("navigate");
    }, _ = () => {
      t.docsUrl && window.open(t.docsUrl, "_blank", "noopener,noreferrer");
    }, p = () => {
      s("toggle-chat"), s("navigate");
    }, y = () => {
      t.logoutLoading || s("logout");
    };
    return (Z, m) => (a(), l("div", {
      class: $(["sidebar-panel", { _mobile: e.mobile }])
    }, [
      i("div", U7, [
        i("div", N7, [
          i("div", q7, x(r.value), 1),
          i("div", G7, [
            i("p", j7, x(Z.$t("terminal.nav.welcome")), 1),
            u.value ? (a(), l("p", {
              key: 0,
              class: "sidebar-panel__name",
              title: d.value
            }, x(d.value), 9, W7)) : b("", !0)
          ])
        ]),
        e.balanceAmount !== null ? (a(), l("div", Q7, [
          i("button", {
            type: "button",
            class: "sidebar-panel__balance",
            onClick: w
          }, [
            i("span", K7, [
              e.mobile ? b("", !0) : (a(), H(M5, {
                key: 0,
                class: "sidebar-panel__balance-coins",
                size: 16
              })),
              N(" " + x(Z.$t("terminal.nav.availableForWithdraw")), 1)
            ]),
            i("span", Y7, [
              i("span", X7, x(f(l3)(e.balanceAmount ?? 0)), 1),
              V(i5, {
                size: 16,
                class: "sidebar-panel__balance-arrow"
              })
            ])
          ])
        ])) : b("", !0),
        i("nav", J7, [
          (a(!0), l(U, null, G(c.value, (k) => (a(), H(i3, {
            key: k.to,
            to: k.to,
            title: k.title,
            icon: k.icon,
            size: e.mobile ? "md" : "sm",
            onClick: m[0] || (m[0] = (v) => s("navigate"))
          }, null, 8, ["to", "title", "icon", "size"]))), 128))
        ])
      ]),
      i("div", e8, [
        i("div", t8, [
          V(m1, {
            variant: e.mobile ? "gray" : "white",
            size: "md",
            class: "sidebar-panel__docs",
            disabled: !e.docsUrl,
            onClick: _
          }, {
            leading: I(() => [
              V(u5, { size: 16 })
            ]),
            default: I(() => [
              N(" " + x(Z.$t("terminal.nav.docs")), 1)
            ]),
            _: 1
          }, 8, ["variant", "disabled"]),
          e.mobile ? (a(), H(m1, {
            key: 0,
            variant: "gray",
            size: "md",
            class: "sidebar-panel__support-btn",
            disabled: !e.chatEnabled,
            onClick: p
          }, {
            leading: I(() => [
              V(Re, { size: 16 })
            ]),
            default: I(() => [
              N(" " + x(Z.$t("terminal.nav.support")), 1)
            ]),
            _: 1
          }, 8, ["disabled"])) : (a(), H(i1, {
            key: 1,
            variant: "white",
            size: "sm",
            class: "sidebar-panel__support",
            "aria-label": Z.$t("terminal.nav.support"),
            disabled: !e.chatEnabled,
            onClick: p
          }, {
            default: I(() => [
              V(Re, { size: 16 })
            ]),
            _: 1
          }, 8, ["aria-label", "disabled"]))
        ]),
        V(m1, {
          variant: e.mobile ? "gray" : "white",
          size: e.mobile ? "lg" : "md",
          disabled: e.logoutLoading,
          class: $(["sidebar-panel__logout", { _muted: !e.mobile }]),
          onClick: y
        }, {
          trailing: I(() => [
            V(wt, {
              size: e.mobile ? 20 : 16
            }, null, 8, ["size"])
          ]),
          default: I(() => [
            N(x(Z.$t("terminal.nav.logout")) + " ", 1)
          ]),
          _: 1
        }, 8, ["variant", "size", "disabled", "class"])
      ])
    ], 2));
  }
}), oe = /* @__PURE__ */ g(n8, [["__scopeId", "data-v-e1b909ec"]]), s8 = { class: "sidebar" }, a8 = { class: "sidebar__logo" }, o8 = ["src", "alt"], i8 = ["aria-label"], l8 = ["aria-label"], r8 = { class: "sidebar-sheet__panel" }, c8 = { class: "sidebar-sheet__head" }, d8 = ["aria-label"], u8 = /* @__PURE__ */ h({
  __name: "Sidebar",
  props: {
    mobileOpen: { type: Boolean, default: !1 },
    menuItems: { default: () => [] },
    userName: { default: "" },
    logoutLoading: { type: Boolean, default: !1 },
    balanceAmount: { default: null },
    balanceTo: { default: "/balance" }
  },
  emits: ["update:mobileOpen", "toggle-chat", "logout"],
  setup(e, { emit: n }) {
    const { src: t, alt: s } = _e(), o = e, c = n, u = q1(), d = () => {
      c("update:mobileOpen", !1);
    }, r = () => {
      c("toggle-chat"), d();
    };
    e1(
      () => o.mobileOpen,
      (_) => {
        typeof window > "u" || (document.body.style.overflow = _ ? "hidden" : "");
      }
    ), e1(
      () => u.path,
      () => {
        o.mobileOpen && d();
      }
    );
    const w = (_) => {
      _.key === "Escape" && o.mobileOpen && d();
    };
    return u1(() => {
      window.addEventListener("keydown", w);
    }), f1(() => {
      window.removeEventListener("keydown", w), typeof window < "u" && (document.body.style.overflow = "");
    }), (_, p) => {
      const y = N1("RouterLink");
      return a(), l(U, null, [
        i("aside", s8, [
          i("div", a8, [
            V(y, {
              to: "/",
              class: "sidebar__logo-link"
            }, {
              default: I(() => [
                i("img", {
                  src: f(t),
                  alt: f(s),
                  class: "sidebar__logo-img"
                }, null, 8, o8)
              ]),
              _: 1
            })
          ]),
          V(oe, {
            class: "sidebar__panel",
            "menu-items": e.menuItems,
            "user-name": e.userName,
            "logout-loading": e.logoutLoading,
            "balance-amount": e.balanceAmount,
            "balance-to": e.balanceTo,
            onToggleChat: p[0] || (p[0] = (Z) => c("toggle-chat")),
            onLogout: p[1] || (p[1] = (Z) => c("logout"))
          }, null, 8, ["menu-items", "user-name", "logout-loading", "balance-amount", "balance-to"])
        ]),
        (a(), H(I1, {
          defer: "",
          to: "body"
        }, [
          V(te, { name: "sidebar-sheet" }, {
            default: I(() => [
              e.mobileOpen ? (a(), l("div", {
                key: 0,
                class: "sidebar-sheet",
                role: "dialog",
                "aria-modal": "true",
                "aria-label": _.$t("terminal.nav.menu")
              }, [
                i("button", {
                  type: "button",
                  class: "sidebar-sheet__backdrop",
                  "aria-label": _.$t("common.close"),
                  onClick: d
                }, null, 8, l8),
                i("div", r8, [
                  i("div", c8, [
                    i("button", {
                      type: "button",
                      class: "sidebar-sheet__handle",
                      "aria-label": _.$t("common.close"),
                      onClick: d
                    }, null, 8, d8),
                    V(i1, {
                      variant: "gray",
                      size: "xs",
                      class: "sidebar-sheet__close",
                      "aria-label": _.$t("common.close"),
                      onClick: d
                    }, {
                      default: I(() => [
                        V(Ke, { size: 12 })
                      ]),
                      _: 1
                    }, 8, ["aria-label"])
                  ]),
                  V(oe, {
                    mobile: "",
                    class: "sidebar-sheet__body",
                    "menu-items": e.menuItems,
                    "user-name": e.userName,
                    "logout-loading": e.logoutLoading,
                    "balance-amount": e.balanceAmount,
                    "balance-to": e.balanceTo,
                    onNavigate: d,
                    onToggleChat: r,
                    onLogout: p[2] || (p[2] = (Z) => c("logout"))
                  }, null, 8, ["menu-items", "user-name", "logout-loading", "balance-amount", "balance-to"])
                ])
              ], 8, i8)) : b("", !0)
            ]),
            _: 1
          })
        ]))
      ], 64);
    };
  }
}), C8 = /* @__PURE__ */ g(u8, [["__scopeId", "data-v-908f5865"]]), h8 = {
  class: "snackbar-host",
  "aria-live": "polite"
}, f8 = /* @__PURE__ */ h({
  __name: "SnackbarHost",
  setup(e) {
    const n = fe(), t = (o) => o === "success" || o === "error" || o === "info" ? o : "info", s = C(
      () => n.toasts.value.map((o) => ({
        id: o.id,
        type: t(o.color),
        title: String(o.title ?? ""),
        description: o.description ? String(o.description) : void 0
      }))
    );
    return (o, c) => (a(), H(I1, {
      defer: "",
      to: "body"
    }, [
      i("div", h8, [
        V(V3, { name: "snackbar" }, {
          default: I(() => [
            (a(!0), l(U, null, G(s.value, (u) => (a(), H(t3, {
              key: u.id,
              type: u.type,
              title: u.title,
              description: u.description,
              closable: "",
              onClose: (d) => f(n).remove(u.id)
            }, null, 8, ["type", "title", "description", "onClose"]))), 128))
          ]),
          _: 1
        })
      ])
    ]));
  }
}), m8 = /* @__PURE__ */ g(f8, [["__scopeId", "data-v-b6eee0c6"]]), g8 = /* @__PURE__ */ h({
  __name: "TablePagination",
  props: {
    count: {},
    total: {},
    currentPage: {},
    limit: {},
    sizes: {}
  },
  emits: ["page-change", "limit-change"],
  setup(e, { emit: n }) {
    const t = n;
    return (s, o) => (a(), H(e3, {
      count: e.count,
      total: e.total,
      "current-page": e.currentPage,
      limit: e.limit,
      sizes: e.sizes,
      onPageChange: o[0] || (o[0] = (c) => t("page-change", c)),
      onLimitChange: o[1] || (o[1] = (c) => t("limit-change", c))
    }, null, 8, ["count", "total", "current-page", "limit", "sizes"]));
  }
}), p8 = { class: "filter-field" }, v8 = { class: "block text-sm font-medium text-gray-700 mb-2" }, w8 = "ru", _8 = "dd.MM.yyyy", b8 = /* @__PURE__ */ h({
  __name: "FilterFieldDateRange",
  props: {
    label: {},
    modelValue: {},
    placeholder: {}
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (n, t) => (a(), l("div", p8, [
      i("label", v8, x(e.label), 1),
      V(f(qe), {
        "model-value": e.modelValue,
        range: "",
        locale: w8,
        format: _8,
        "enable-time-picker": !1,
        placeholder: e.placeholder,
        "auto-apply": "",
        clearable: !0,
        teleport: "",
        "menu-class-name": "gp-dp-menu",
        "onUpdate:modelValue": t[0] || (t[0] = (s) => n.$emit("update:modelValue", s))
      }, null, 8, ["model-value", "placeholder"])
    ]));
  }
}), y8 = /* @__PURE__ */ g(b8, [["__scopeId", "data-v-6c83a864"]]), L8 = { class: "filter-field" }, k8 = { class: "block text-sm font-medium text-gray-700 mb-2" }, $8 = /* @__PURE__ */ h({
  __name: "FilterFieldSelect",
  props: {
    label: {},
    modelValue: {},
    placeholder: {},
    items: {}
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: n }) {
    const t = n, s = (o) => {
      t("update:modelValue", o == null ? void 0 : String(o));
    };
    return (o, c) => (a(), l("div", L8, [
      i("label", k8, x(e.label), 1),
      V(Xe, {
        "model-value": e.modelValue,
        items: e.items,
        placeholder: e.placeholder,
        "onUpdate:modelValue": s
      }, null, 8, ["model-value", "items", "placeholder"])
    ]));
  }
}), x8 = /* @__PURE__ */ g($8, [["__scopeId", "data-v-1b003084"]]), M8 = { class: "filter-field" }, z8 = { class: "block text-sm font-medium text-gray-700 mb-2" }, I8 = /* @__PURE__ */ h({
  __name: "FilterFieldText",
  props: {
    label: {},
    modelValue: {},
    placeholder: {}
  },
  emits: ["update:modelValue", "input"],
  setup(e) {
    return (n, t) => {
      const s = N1("UInput");
      return a(), l("div", M8, [
        i("label", z8, x(e.label), 1),
        V(s, {
          "model-value": e.modelValue != null ? String(e.modelValue) : "",
          placeholder: e.placeholder,
          "onUpdate:modelValue": t[0] || (t[0] = (o) => n.$emit("update:modelValue", o)),
          onInput: t[1] || (t[1] = (o) => n.$emit("input"))
        }, null, 8, ["model-value", "placeholder"])
      ]);
    };
  }
}), V8 = /* @__PURE__ */ g(I8, [["__scopeId", "data-v-c52ee6a9"]]), H8 = { class: "flex items-center gap-2" }, Z8 = ["href", "title"], B8 = { class: "min-w-0 truncate transition-colors duration-200" }, S8 = /* @__PURE__ */ h({
  __name: "LinkCopyCell",
  props: {
    value: {},
    href: {},
    displayText: { default: void 0 },
    title: { default: void 0 },
    showExternalIcon: { type: Boolean, default: !0 }
  },
  setup(e) {
    const n = e, { t } = j(), { copyToClipboard: s } = me(), o = C(() => n.displayText !== void 0 && n.displayText !== "" ? n.displayText : P7(n.value, 16));
    function c() {
      s(n.value, {
        showToast: !0,
        toastTitle: t("common.copied"),
        toastDescription: t("common.copiedDesc")
      });
    }
    return (u, d) => (a(), l("div", H8, [
      i("a", {
        href: e.href,
        class: "group text-cyan-600 hover:text-cyan-700 underline decoration-cyan-600/60 underline-offset-2 hover:underline-offset-[5px] text-sm font-mono min-w-0 max-w-full inline-flex items-center gap-1 rounded-sm transition-all duration-200 ease-out motion-safe:hover:gap-1.5 motion-safe:active:scale-[0.98] motion-safe:active:opacity-90 motion-safe:hover:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/35 focus-visible:ring-offset-1",
        target: "_blank",
        rel: "noopener noreferrer",
        title: e.title
      }, [
        i("span", B8, x(o.value), 1),
        e.showExternalIcon ? (a(), H(f(Ge), {
          key: 0,
          class: "w-3 h-3 flex-shrink-0 text-cyan-600 transition-transform duration-200 ease-out motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5 motion-safe:group-active:translate-x-0.5 motion-safe:group-active:-translate-y-0.5"
        })) : b("", !0)
      ], 8, Z8),
      V(j1, {
        variant: "secondary",
        size: "xs",
        class: "touch-manipulation",
        onClick: c
      }, {
        default: I(() => [
          V(f(je), { class: "w-3 h-3" })
        ]),
        _: 1
      })
    ]));
  }
}), R8 = { class: "auth-screen__card" }, T8 = {
  key: 0,
  class: "auth-screen__blur"
}, E8 = {
  key: 1,
  class: "auth-screen__pattern",
  "aria-hidden": "true"
}, D8 = {
  key: 2,
  class: "auth-screen__icon"
}, A8 = ["src", "alt"], F8 = { class: "auth-screen__copy" }, P8 = { class: "auth-screen__title" }, O8 = {
  key: 0,
  class: "auth-screen__subtitle"
}, U8 = { class: "auth-screen__body" }, N8 = {
  key: 0,
  class: "auth-screen__footer"
}, q8 = /* @__PURE__ */ h({
  __name: "AuthScreen",
  props: {
    glow: { type: Boolean, default: !0 },
    wideHeader: { type: Boolean, default: !1 },
    plain: { type: Boolean, default: !1 }
  },
  setup(e) {
    const { t: n } = j(), { src: t } = _e(), s = C(() => n("common.brand"));
    return (o, c) => (a(), l("div", {
      class: $(["auth-screen", { "auth-screen--plain": e.plain }])
    }, [
      i("div", R8, [
        i("header", {
          class: $(["auth-screen__header", {
            "auth-screen__header--hero": o.$slots.icon,
            "auth-screen__header--wide": e.wideHeader,
            "auth-screen__header--plain": e.plain
          }])
        }, [
          e.glow ? (a(), l("div", T8)) : b("", !0),
          e.plain ? b("", !0) : (a(), l("div", E8)),
          o.$slots.icon ? (a(), l("div", D8, [
            S(o.$slots, "icon", {}, void 0, !0)
          ])) : e.plain ? b("", !0) : (a(), l("img", {
            key: 3,
            src: f(t),
            alt: s.value,
            class: "auth-screen__logo"
          }, null, 8, A8)),
          i("div", F8, [
            i("h1", P8, [
              S(o.$slots, "title", {}, void 0, !0)
            ]),
            o.$slots.subtitle ? (a(), l("p", O8, [
              S(o.$slots, "subtitle", {}, void 0, !0)
            ])) : b("", !0)
          ])
        ], 2),
        i("div", U8, [
          S(o.$slots, "default", {}, void 0, !0)
        ])
      ]),
      o.$slots.footer ? (a(), l("div", N8, [
        S(o.$slots, "footer", {}, void 0, !0)
      ])) : b("", !0)
    ], 2));
  }
}), G8 = /* @__PURE__ */ g(q8, [["__scopeId", "data-v-c8b55736"]]), j8 = /* @__PURE__ */ h({
  __name: "AuthHeroIcon",
  props: {
    tone: { default: "mint" }
  },
  setup(e) {
    return (n, t) => (a(), l("span", {
      class: $(["auth-hero-icon", `auth-hero-icon--${e.tone}`])
    }, [
      S(n.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), W8 = /* @__PURE__ */ g(j8, [["__scopeId", "data-v-6b637d48"]]), Q8 = ["aria-label"], K8 = /* @__PURE__ */ h({
  __name: "AuthPasswordField",
  props: /* @__PURE__ */ se({
    placeholder: {},
    error: { type: Boolean },
    message: {},
    autocomplete: { default: "off" },
    disabled: { type: Boolean },
    name: { default: "gp-auth-password" },
    id: {}
  }, {
    modelValue: { required: !0 },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ se(["blur"], ["update:modelValue"]),
  setup(e, { emit: n }) {
    const t = ne(e, "modelValue"), s = n, { t: o } = j(), c = E(!1);
    return e1(t, (u) => {
      u || (c.value = !1);
    }), (u, d) => (a(), H(ve, {
      modelValue: t.value,
      "onUpdate:modelValue": d[1] || (d[1] = (r) => t.value = r),
      type: c.value ? "text" : "password",
      placeholder: e.placeholder,
      error: e.error,
      message: e.message,
      autocomplete: e.autocomplete,
      disabled: e.disabled,
      name: e.name,
      id: e.id,
      onBlur: d[2] || (d[2] = (r) => s("blur", r))
    }, {
      trailing: I(() => [
        i("button", {
          type: "button",
          class: "auth-password-field__toggle",
          tabindex: "-1",
          "aria-label": c.value ? f(o)("terminal.auth.hidePassword") : f(o)("terminal.auth.showPassword"),
          onClick: d[0] || (d[0] = (r) => c.value = !c.value)
        }, [
          c.value ? (a(), H(U5, {
            key: 0,
            size: 20
          })) : (a(), H(F5, {
            key: 1,
            size: 20
          }))
        ], 8, Q8)
      ]),
      _: 1
    }, 8, ["modelValue", "type", "placeholder", "error", "message", "autocomplete", "disabled", "name", "id"]));
  }
}), Y8 = /* @__PURE__ */ g(K8, [["__scopeId", "data-v-cb631225"]]), r3 = {
  minLength: "auth.passwordRequirement.minLength",
  lowercase: "auth.passwordRequirement.lowercase",
  uppercase: "auth.passwordRequirement.uppercase",
  number: "auth.passwordRequirement.number",
  special: "auth.passwordRequirement.specialChar"
}, X8 = Object.keys(r3);
function c3(e) {
  return {
    minLength: e.length >= 8,
    lowercase: /[a-z]/.test(e),
    uppercase: /[A-Z]/.test(e),
    number: /\d/.test(e),
    special: /[!@#$%^&*]/.test(e)
  };
}
function J8(e) {
  const n = c3(e);
  return X8.map((t) => ({
    key: t,
    met: n[t],
    labelKey: r3[t]
  }));
}
function Yn(e) {
  return Object.values(c3(e)).every(Boolean);
}
const e9 = { class: "auth-password-rules" }, t9 = /* @__PURE__ */ h({
  __name: "AuthPasswordRules",
  props: {
    password: {}
  },
  setup(e) {
    const n = e, { t } = j(), s = C(() => J8(n.password));
    return (o, c) => (a(), l("ul", e9, [
      (a(!0), l(U, null, G(s.value, (u) => (a(), l("li", {
        key: u.key,
        class: $(["auth-password-rules__item", { _met: u.met }])
      }, [
        u.met ? (a(), H(v5, {
          key: 0,
          size: 12
        })) : (a(), H(g4, {
          key: 1,
          size: 12
        })),
        i("span", null, x(f(t)(u.labelKey)), 1)
      ], 2))), 128))
    ]));
  }
}), n9 = /* @__PURE__ */ g(t9, [["__scopeId", "data-v-2c47a1af"]]), s9 = (e) => e.trim().toLowerCase().startsWith("en") ? "en" : "ru", a9 = "__gpSmartCaptchaOnload", De = "data-gp-smartcaptcha", o9 = () => window.smartCaptcha ? Promise.resolve(window.smartCaptcha) : new Promise((e, n) => {
  const t = () => {
    window.smartCaptcha ? e(window.smartCaptcha) : n(new Error("SmartCaptcha API missing after load"));
  };
  if (window.__gpSmartCaptchaQueue ??= [], window.__gpSmartCaptchaQueue.push(t), window.__gpSmartCaptchaOnload ??= () => {
    const o = window.__gpSmartCaptchaQueue ?? [];
    window.__gpSmartCaptchaQueue = [], o.forEach((c) => c());
  }, document.querySelector(`script[${De}]`)) {
    window.smartCaptcha && t();
    return;
  }
  const s = document.createElement("script");
  s.src = `https://smartcaptcha.cloud.yandex.ru/captcha.js?render=onload&onload=${a9}`, s.defer = !0, s.setAttribute(De, "1"), s.onerror = () => n(new Error("SmartCaptcha script failed to load")), document.head.appendChild(s);
}), i9 = /* @__PURE__ */ h({
  __name: "SmartCaptcha",
  props: /* @__PURE__ */ se({
    sitekey: { default: "" }
  }, {
    modelValue: { default: "" },
    modelModifiers: {},
    error: { type: Boolean, default: !1 },
    errorModifiers: {}
  }),
  emits: ["update:modelValue", "update:error"],
  setup(e, { expose: n }) {
    const t = ne(e, "modelValue"), s = ne(e, "error"), { locale: o } = j(), c = C(() => e.sitekey), u = E(null);
    let d;
    const r = [];
    let w = 0;
    const _ = (m) => {
      s.value = m, m && (t.value = "");
    }, p = () => {
      for (; r.length; ) r.pop()?.();
      d !== void 0 && (window.smartCaptcha?.destroy?.(d), d = void 0), u.value && (u.value.innerHTML = "");
    }, y = async () => {
      if (!c.value || typeof window > "u" || !u.value) return;
      const m = ++w;
      p(), t.value = "";
      try {
        const k = await o9();
        if (await g1(), m !== w || !u.value) return;
        if (u.value.innerHTML = "", d = k.render(u.value, {
          sitekey: c.value,
          hl: s9(String(o.value)),
          callback: (v) => {
            m === w && (_(!1), t.value = v);
          }
        }), k.subscribe && d !== void 0) {
          const v = () => {
            m === w && _(!0);
          };
          r.push(
            k.subscribe(d, "network-error", v),
            k.subscribe(d, "javascript-error", v),
            k.subscribe(d, "token-expired", v)
          );
        }
      } catch {
        m === w && _(!0);
      }
    }, Z = () => {
      _(!1), t.value = "", d !== void 0 && window.smartCaptcha?.reset(d);
    };
    return u1(() => {
      c.value && typeof window < "u" && y();
    }), e1(o, () => {
      typeof window > "u" || !c.value || (_(!1), y());
    }), H3(() => {
      w += 1, p();
    }), n({ reset: Z }), (m, k) => e.sitekey ? (a(), l("div", {
      key: 0,
      ref_key: "containerRef",
      ref: u,
      class: "smart-captcha",
      style: { height: "100px" }
    }, null, 512)) : b("", !0);
  }
}), l9 = {
  RUB: 2,
  CNY: 2,
  USDT: 6,
  TRX: 6
}, Xn = () => {
  const e = (t, s = "RUB") => {
    const o = l9[s.toUpperCase()] ?? 2;
    return `${new Intl.NumberFormat("ru-RU", {
      minimumFractionDigits: s.toUpperCase() === "RUB" ? 2 : 0,
      maximumFractionDigits: o
    }).format(t)} ${s}`;
  };
  return { formatCurrency: e, formatAmount: (t, s = "RUB", o = "—") => {
    if (t == null || t === "") return o;
    const c = typeof t == "number" ? t : Number.parseFloat(String(t));
    return Number.isFinite(c) ? e(c, s) : o;
  } };
};
function r9(e) {
  if (!e || typeof e != "object") return;
  const n = e, t = n.data && typeof n.data == "object" ? n.data.status ?? n.data.statusCode : void 0, s = n.status ?? n.statusCode ?? n.response?.status ?? t;
  return typeof s == "number" && s > 0 ? s : void 0;
}
const c9 = /^\[[A-Z]+\]\s+"/, d3 = /failed to fetch|fetch failed|<no response>|networkerror|network request failed|load failed|econnrefused|enotfound|etimedout|econnreset|und_err_|socket hang up|connect timeout|the internet connection appears to be offline/i;
function d9(e) {
  const n = e.trim();
  return n ? c9.test(n) || d3.test(n) : !1;
}
function J1(e, n) {
  typeof n == "string" && n.trim() && e.push(n);
}
function ie(e, n = 0) {
  if (!e || n > 3) return [];
  if (typeof e == "string") return e.trim() ? [e] : [];
  if (typeof e != "object") return [];
  const t = e, s = [];
  return J1(s, t.message), J1(s, t.statusMessage), J1(s, t.statusText), s.push(...ie(t.data, n + 1)), s.push(...ie(t.cause, n + 1)), s;
}
function u9(e) {
  const n = r9(e);
  if (n === 502 || n === 503 || n === 504 || ie(e).some((s) => d3.test(s))) return !0;
  if (n !== void 0) return !1;
  const t = e && typeof e == "object" ? e.name : void 0;
  return t === "FetchError" || t === "TypeError";
}
const u3 = (e) => {
  if (typeof e != "string") return !1;
  const n = e.trim();
  return !(!n || ["true", "false", "null", "undefined", "[object Object]"].includes(n) || d9(n));
}, y1 = (e, n) => {
  if (!e || typeof e != "object") return;
  const t = e[n];
  return u3(t) ? t.trim() : void 0;
}, Ae = (e, n) => {
  const t = e, s = t?.data, o = s?.data, c = y1(o, "label") ?? y1(s, "label") ?? y1(t, "label");
  if (c) return c;
  const u = [
    t?.data?.error,
    y1(o, "message"),
    y1(s, "message"),
    t?.data?.statusMessage,
    t?.statusMessage,
    t?.message
  ];
  for (const d of u)
    if (u3(d)) return d.trim();
  return n;
};
function W1(e, n) {
  if (!e || typeof e != "object") return;
  const t = e.data;
  if (!t || typeof t != "object") return;
  const s = n(t);
  if (s !== void 0) return s;
  const o = t.data;
  if (o && typeof o == "object") return n(o);
}
function C9(e) {
  return typeof e.label == "string" && e.label.trim() ? e.label.trim() : void 0;
}
function Fe(e) {
  return W1(
    e,
    (n) => typeof n.code == "string" ? n.code : void 0
  );
}
function le(e) {
  return W1(e, (n) => {
    const t = Number(n.retry_after);
    return Number.isFinite(t) && t > 0 ? t : void 0;
  });
}
function C3(e) {
  return W1(
    e,
    (n) => n.fields && typeof n.fields == "object" ? n.fields : void 0
  );
}
function h9(e) {
  const n = e.match(/не должно превышать\s+([\d.]+)/i) ?? e.match(/less than or equal to\s+([\d.]+)/i) ?? e.match(/must not (?:be greater than|exceed)\s+([\d.]+)/i);
  if (!n?.[1]) return null;
  const t = Number(n[1]);
  return Number.isFinite(t) ? t : null;
}
function f9(e, n) {
  return e.toLocaleString(n.toLowerCase().startsWith("ru") ? "ru-RU" : "en-US");
}
function m9(e, n) {
  return Object.values(C3(e) ?? {}).flat().filter((t) => typeof t == "string" && !!t.trim()).map((t) => {
    const s = t.trim();
    return n ? n(s) : s;
  });
}
function g9(...e) {
  const n = /* @__PURE__ */ new Set(), t = [];
  for (const s of e.flat()) {
    const o = s?.trim();
    !o || n.has(o) || (n.add(o), t.push(o));
  }
  return t;
}
const Jn = () => {
  const { t: e, te: n, locale: t } = j(), s = (d) => {
    const r = h9(d);
    return r == null ? d : e("terminal.invoices.create.amountTooLarge", {
      max: f9(r, String(t.value))
    });
  }, o = (d, r) => {
    const w = Fe(d);
    if (!w)
      return u9(d) ? e("terminal.errors.REQUEST_FAILED") : Ae(d, r);
    if (w === "RATE_LIMITED") {
      const p = le(d);
      if (p) return e("terminal.errors.RATE_LIMITED_IN", { seconds: p });
    }
    const _ = `terminal.errors.${w}`;
    return n(_) ? e(_) : (console.warn(`Untranslated backend error code: ${w}`), Ae(d, r));
  }, c = (d, r) => {
    const w = m9(d, s);
    if (w.length) return g9(w);
    const _ = W1(d, C9);
    return _ ? [_] : [o(d, r)];
  };
  return { errorText: (d, r) => c(d, r).join(`
`), errorList: c, getBackendCode: Fe, getBackendFields: C3, getRetryAfter: le };
}, p9 = "—";
function es() {
  const { locale: e } = j(), n = C(() => e.value && String(e.value) || "ru-RU");
  function t(s, o) {
    const c = o?.fallback ?? p9, u = o?.seconds !== !1;
    if (s == null) return c;
    const d = s instanceof Date ? s : new Date(s);
    return Number.isNaN(d.getTime()) ? c : new Intl.DateTimeFormat(n.value, {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      ...u ? { second: "2-digit" } : {}
    }).format(d);
  }
  return {
    formatDateTime: t,
    localeCode: n
  };
}
const ts = () => {
  const e = E("");
  return { current: () => (e.value || (e.value = crypto.randomUUID()), e.value), reset: () => {
    e.value = "";
  } };
}, D1 = 6, v9 = "000-000", w9 = D1 + 1;
function ns(e = D1) {
  const n = E(""), t = C({
    get() {
      const u = n.value.replace(/\D/g, "").slice(0, e);
      return u.length <= 3 ? u : `${u.slice(0, 3)}-${u.slice(3)}`;
    },
    set(u) {
      n.value = u.replace(/\D/g, "").slice(0, e);
    }
  }), s = C(() => n.value.length === e), o = C(
    () => s.value ? "primary" : "secondary"
  );
  return {
    code: n,
    display: t,
    isComplete: s,
    submitVariant: o,
    reset: () => {
      n.value = "";
    },
    length: e,
    maxlength: e === D1 ? w9 : e,
    placeholder: e === D1 ? v9 : "".padStart(e, "0")
  };
}
const Pe = /* @__PURE__ */ new Map(), _9 = (e) => {
  let n = Pe.get(e);
  return n || (n = E(h3(e)), Pe.set(e, n)), n;
}, re = (e) => `gp-rate-limit-until:${e}`;
function h3(e) {
  if (typeof window > "u") return 0;
  try {
    const n = Number(sessionStorage.getItem(re(e)));
    return Number.isFinite(n) && n > Date.now() ? n : 0;
  } catch {
    return 0;
  }
}
function R1(e, n) {
  if (!(typeof window > "u"))
    try {
      n > Date.now() ? sessionStorage.setItem(re(e), String(n)) : sessionStorage.removeItem(re(e));
    } catch {
    }
}
const ss = (e) => {
  const n = e ? _9(e) : E(0);
  if (typeof window < "u" && e && n.value <= Date.now()) {
    const p = h3(e);
    p > n.value && (n.value = p);
  }
  const t = E(Date.now()), s = C(() => {
    const p = Math.ceil((n.value - t.value) / 1e3);
    return p > 0 ? p : 0;
  }), o = C(() => s.value > 0);
  let c = null;
  const u = () => {
    c && (clearInterval(c), c = null);
  }, d = () => {
    t.value = Date.now(), s.value <= 0 && (e && R1(e, 0), u());
  }, r = () => {
    u(), d(), !(s.value <= 0) && (c = setInterval(d, 1e3));
  }, w = (p) => {
    const y = le(p);
    return y ? (n.value = Date.now() + y * 1e3, e && R1(e, n.value), r(), !0) : !1;
  }, _ = () => {
    u(), n.value = 0, t.value = Date.now(), e && R1(e, 0);
  };
  return typeof window < "u" && n.value > Date.now() && r(), e1(n, (p) => {
    e && R1(e, p), p > Date.now() ? r() : u();
  }), Z3(u), { secondsLeft: T1(s), isBlocked: o, blockFrom: w, reset: _ };
}, ce = "data-gp-rocket-chat", b9 = "201903270000", V1 = ".rocketchat-widget", y9 = 611;
let de = null, A1 = null, L1 = null, F1 = 0, k1 = null, P1 = null, O1 = null, M1 = !1, p1 = !1, ue = !1;
function L9(e) {
  return e.trim().replace(/\/+$/, "");
}
function f3(e) {
  return String(e).toLowerCase().startsWith("en") ? "en" : "ru";
}
function Oe() {
  return C1.getLocale?.() || "ru";
}
function k9(e) {
  const n = f3(e);
  return C1.getChatTitle ? C1.getChatTitle(n) : n === "en" ? "Support chat" : "Чат поддержки";
}
function $9(e) {
  const n = k9(e);
  return {
    position: "right",
    title: n,
    offlineTitle: n
  };
}
function ye(e, n) {
  e.setLanguage?.(f3(n)), e.setTheme?.($9(n));
}
function x9(e) {
  typeof window > "u" || !window.RocketChat || H1((n) => {
    ye(n, e);
  });
}
function Le(e) {
  e.style.left = "auto", e.style.right = "0", e.style.bottom = "0", e.style.zIndex = "12345";
}
function M9() {
  const e = document.querySelector(V1), n = document.querySelector("#rocketchat-iframe");
  if (!e || !n) return !1;
  Le(e);
  const t = window.matchMedia("screen and (max-device-width: 480px)").matches;
  return e.dataset.state = "opened", e.style.opacity = "1", e.style.pointerEvents = "auto", t ? (e.style.left = "0", e.style.right = "auto", e.style.width = "100%", e.style.height = "100%") : (e.style.left = "auto", e.style.right = "0", e.style.width = "397px", e.style.height = `${y9}px`), n.style.display = "initial", n.focus(), !0;
}
function z9() {
  const e = document.querySelector(V1);
  return !e || e.dataset.state !== "opened" ? !1 : e.offsetHeight > 0 && e.style.opacity !== "0";
}
function I9() {
  const e = document.querySelector(V1);
  if (!e) return !1;
  e.dataset.state = "closed", Le(e), e.style.width = "0", e.style.height = "0", e.style.opacity = "0", e.style.pointerEvents = "none";
  const n = document.querySelector("#rocketchat-iframe");
  return n && (n.style.display = "none"), !0;
}
function m3() {
  M1 && M9() && (M1 = !1);
}
function Ce() {
  H1((e) => {
    e.minimizeWidget?.(), e.hideWidget?.();
  }), I9();
}
function Ue() {
  const e = document.querySelector(V1);
  return e ? (Le(e), p1 ? (m3(), !0) : ((e.dataset.state !== "closed" || e.offsetHeight > 0) && Ce(), !0)) : !1;
}
function g3() {
  de = null, A1 = null, L1 = null, F1 += 1;
}
function p3() {
  k1?.disconnect(), k1 = null, P1 != null && (clearTimeout(P1), P1 = null);
}
function v3() {
  O1 != null && (clearTimeout(O1), O1 = null);
}
function V9() {
  v3(), M1 = !1, p1 = !1;
}
function H9() {
  document.querySelectorAll(V1).forEach((e) => e.remove()), document.querySelector("#rocketchat-iframe")?.remove(), document.querySelector(`script[${ce}]`)?.remove();
}
function H1(e) {
  window.RocketChat && window.RocketChat(function() {
    e(this);
  });
}
function Z9(e) {
  const n = e.custom_fields ?? {}, t = n.user_id || n.merchant_id, s = n.org_name || e.name, o = [];
  return t && o.push({ key: "user_id", value: String(t), overwrite: !0 }), s && o.push({ key: "org_name", value: s, overwrite: !0 }), o;
}
function B9(e) {
  ue || (ue = !0, e.onChatMaximized?.(() => {
    p1 || Ce();
  }), e.onWidgetShown?.(() => {
    p1 || Ce();
  }));
}
function S9() {
  Ue(), !k1 && (k1 = new MutationObserver(() => {
    Ue();
  }), k1.observe(document.body, {
    childList: !0,
    subtree: !0,
    attributes: !0,
    attributeFilter: ["data-state", "style"]
  }), P1 = setTimeout(() => p3(), 15e3));
}
function R9(e, n) {
  if (!(typeof window > "u" || !e)) {
    if (window.RocketChat)
      window.RocketChat.url || (window.RocketChat.url = e);
    else {
      const t = [], s = function(o) {
        t.push(o);
      };
      s._ = t, s.url = e, window.RocketChat = s;
    }
    if (!document.querySelector(`script[${ce}]`)) {
      const t = document.createElement("script");
      t.async = !0, t.src = `${e}/rocketchat-livechat.min.js?_=${b9}`, t.setAttribute(ce, "1"), document.head.appendChild(t);
    }
    H1((t) => {
      ye(t, n), B9(t), p1 || (t.minimizeWidget?.(), t.hideWidget?.());
    }), S9();
  }
}
async function T9() {
  if (typeof window > "u") return null;
  if (A1) return A1;
  if (!L1) {
    const e = F1;
    L1 = Promise.resolve(C1.fetchIdentity ? C1.fetchIdentity() : null).then((n) => e !== F1 ? null : (A1 = n, n)).catch((n) => (e !== F1 || (console.warn("Не удалось получить identity для Rocket.Chat", n), L1 = null), null));
  }
  return L1;
}
function E9(e) {
  window.RocketChat && de !== e.token && (de = e.token, H1((n) => {
    n.registerGuest?.({
      token: e.token,
      name: e.name,
      email: e.email,
      customFields: Z9(e)
    });
  }));
}
function D9() {
  typeof window > "u" || (p3(), V9(), ue = !1, H9(), delete window.RocketChat, g3());
}
let C1 = { url: "" };
function as(e) {
  C1 = { ...e }, g3();
}
function os() {
  const e = C(() => L9(C1.url || "")), n = C(() => !!e.value), t = async () => {
    if (!e.value) return;
    const c = await T9();
    !c || !window.RocketChat || E9(c);
  };
  return {
    enabled: n,
    livechatUrl: e,
    openChat: () => {
      if (!e.value) return;
      const c = Oe();
      p1 = !0, M1 = !0, R9(e.value, c), H1((u) => {
        ye(u, c), u.showWidget?.(), u.maximizeWidget();
      }), v3(), O1 = setTimeout(() => {
        if (z9()) {
          M1 = !1;
          return;
        }
        m3();
      }, 300), t();
    },
    syncLanguage: (c) => {
      x9(c || Oe());
    },
    hideChat: D9
  };
}
const w3 = [25, 50, 100, 200];
function Ne(e = w3) {
  return e.map((n) => ({ label: String(n), value: n }));
}
function is(e) {
  return {
    pageSizeOptions: C(
      () => Ne(e?.sizes ?? w3)
    ),
    createPageSizeOptions: Ne
  };
}
const A9 = 25;
function ls(e) {
  const { page: n, pageSize: t, total: s, itemsLength: o, nextPageUrl: c, prevPageUrl: u } = e, d = C(() => !s.value || t.value <= 0 ? 1 : Math.max(1, Math.ceil(s.value / t.value))), r = C(() => o.value ? (n.value - 1) * t.value + 1 : 0), w = C(() => o.value ? r.value + o.value - 1 : 0), _ = C(
    () => n.value > 1 || !!u?.value
  ), p = C(
    () => n.value < d.value || !!c?.value
  );
  function y(v) {
    return (R) => {
      const T = Math.max(1, Number(R) || 1);
      T !== n.value && v(T);
    };
  }
  function Z(v) {
    return () => {
      _.value && v(n.value - 1);
    };
  }
  function m(v) {
    return () => {
      p.value && v(n.value + 1);
    };
  }
  function k(v) {
    return () => {
      const R = v?.defaultSize ?? A9, T = Number(t.value) || R;
      T !== t.value && (t.value = T), v?.onApply?.();
    };
  }
  return {
    totalPages: d,
    rangeStart: r,
    rangeEnd: w,
    hasPreviousPage: _,
    hasNextPage: p,
    goToPage: y,
    goToPreviousPage: Z,
    goToNextPage: m,
    handlePageSizeChange: k
  };
}
const rs = "__all__";
function cs(e, n, t) {
  return n > 0 ? "table" : e ? "skeleton" : t ? "filtered" : "empty";
}
function ds(...e) {
  return e.reduce((n, t) => n + Number(t), 0);
}
function us(e) {
  if (!Number.isFinite(e) || e <= 0) return 0;
  const n = 10 ** Math.floor(Math.log10(e)), t = e / n;
  return (t <= 1 ? 1 : t <= 2 ? 2 : t <= 5 ? 5 : 10) * n;
}
function Cs(e, n) {
  if (e === 0) return "0";
  const t = n.startsWith("en") ? "k" : "т";
  if (e >= 1e3) {
    const s = e / 1e3;
    return `${Number.isInteger(s) ? String(s) : s.toFixed(1).replace(".", ",")}${t}`;
  }
  return String(Math.round(e));
}
function F9(e) {
  const n = new Date(e);
  return n.setHours(0, 0, 0, 0), n;
}
function P9(e) {
  const n = new Date(e);
  return n.setHours(23, 59, 59, 999), n;
}
function hs(e, n) {
  return e && n ? [new Date(e), new Date(n)] : null;
}
function fs(e) {
  if (e === null) return null;
  if (Array.isArray(e) && e[0] instanceof Date && e[1] instanceof Date)
    return [F9(e[0]), P9(e[1])];
}
function ms(e, n) {
  return e === n ? !0 : !e || !n ? !1 : e[0].getTime() === n[0].getTime() && e[1].getTime() === n[1].getTime();
}
const O9 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function gs(e, n) {
  const t = e.trim();
  return t ? O9.test(t) ? "" : n("terminal.auth.invalidEmail") : n("terminal.auth.fieldRequired");
}
function ps(e) {
  const n = Math.max(0, Math.ceil(e));
  if (n >= 3600) return `${Math.floor(n / 3600)} ч`;
  const t = Math.floor(n / 60), s = n % 60;
  return `${String(t).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}
const vs = (e) => typeof e == "string" && e.length > 0 ? e : void 0, ws = "https://goodpayments.ru/";
function _s() {
  return typeof window < "u" && window.location ? window.location.origin : "";
}
const U9 = {
  auth: {
    passwordRequirement: {
      lowercase: "Строчная буква (a-z)",
      minLength: "Минимум 8 символов",
      number: "Цифра (0-9)",
      specialChar: "Специальный символ",
      uppercase: "Заглавная буква (A-Z)"
    },
    passwordRequirementsTitle: "Требования к паролю:",
    passwordStrength: {
      medium: "Средний",
      strong: "Надежный",
      weak: "Слабый"
    },
    passwordStrengthLabel: "Надежность пароля"
  },
  balance: {
    qr: {
      generating: "Генерация QR-кода...",
      generationError: "Ошибка генерации QR-кода",
      retry: "Повторить"
    }
  },
  common: {
    back: "Назад",
    brand: "Good Payments",
    clear: "Очистить",
    close: "Закрыть",
    copied: "Скопировано",
    copiedDesc: "Текст скопирован в буфер обмена",
    copy: "Копировать",
    date: "Дата",
    error: "Ошибка",
    language: "Язык",
    languageSwitchError: "Не удалось переключить язык",
    next: "Далее",
    nextMonth: "Следующий месяц",
    nothingFound: "Ничего не найдено",
    openList: "Открыть список",
    previousMonth: "Предыдущий месяц",
    save: "Сохранить",
    showRange: "Показано {from}-{to} из {total}",
    weekdays: {
      fri: "пт",
      mon: "пн",
      sat: "сб",
      sun: "вс",
      thu: "чт",
      tue: "вт",
      wed: "ср"
    }
  },
  invoices: {
    resolution: {
      underpaidHint: "Оплата меньше суммы инвойса. Зачислите полученную сумму на баланс либо обратитесь в поддержку для возврата средств плательщику."
    }
  },
  terminal: {
    auth: {
      fieldRequired: "Это поле обязательно",
      hidePassword: "Скрыть пароль",
      invalidEmail: "Введите корректный email адрес",
      showPassword: "Показать пароль"
    },
    errors: {
      RATE_LIMITED_IN: "Слишком много попыток. Повторите через {seconds} с",
      REQUEST_FAILED: "Ошибка запроса. Попробуйте повторить позже"
    },
    invoices: {
      create: {
        amountTooLarge: "Сумма не может быть больше {max}"
      }
    },
    nav: {
      availableForWithdraw: "Доступно для вывода:",
      docs: "Документация",
      logout: "Выход",
      menu: "Меню",
      openMenu: "Открыть меню",
      support: "Поддержка",
      welcome: "Добро пожаловать!"
    }
  }
}, N9 = {
  auth: {
    passwordRequirement: {
      lowercase: "Lowercase letter (a-z)",
      minLength: "At least 8 characters",
      number: "Number (0-9)",
      specialChar: "Special character",
      uppercase: "Uppercase letter (A-Z)"
    },
    passwordRequirementsTitle: "Password requirements:",
    passwordStrength: {
      medium: "Medium",
      strong: "Strong",
      weak: "Weak"
    },
    passwordStrengthLabel: "Password strength"
  },
  balance: {
    qr: {
      generating: "Generating QR code...",
      generationError: "QR code generation error",
      retry: "Retry"
    }
  },
  common: {
    back: "Back",
    brand: "Good Payments",
    clear: "Clear",
    close: "Close",
    copied: "Copied",
    copiedDesc: "Text copied to clipboard",
    copy: "Copy",
    date: "Date",
    error: "Error",
    language: "Language",
    languageSwitchError: "Failed to switch language",
    next: "Next",
    nextMonth: "Next month",
    nothingFound: "Nothing found",
    openList: "Open list",
    previousMonth: "Previous month",
    save: "Save",
    showRange: "Showing {from}-{to} of {total}",
    weekdays: {
      fri: "Fri",
      mon: "Mon",
      sat: "Sat",
      sun: "Sun",
      thu: "Thu",
      tue: "Tue",
      wed: "Wed"
    }
  },
  invoices: {
    resolution: {
      underpaidHint: "The payment is less than the invoice amount. Credit the amount received to the balance or contact support to refund the payer."
    }
  },
  terminal: {
    auth: {
      fieldRequired: "This field is required",
      hidePassword: "Hide password",
      invalidEmail: "Enter a valid email address",
      showPassword: "Show password"
    },
    errors: {
      RATE_LIMITED_IN: "Too many attempts. Try again in {seconds}s",
      REQUEST_FAILED: "Request error. Please try again later"
    },
    invoices: {
      create: {
        amountTooLarge: "Amount cannot be greater than {max}"
      }
    },
    nav: {
      availableForWithdraw: "Available for withdrawal:",
      docs: "Documentation",
      logout: "Log out",
      menu: "Menu",
      openMenu: "Open menu",
      support: "Support",
      welcome: "Welcome!"
    }
  }
}, q9 = { ru: U9, en: N9 }, G9 = {
  GButton: m1,
  GCheckbox: X3,
  GContextMenu: G1,
  GContextMenuItem: $1,
  GCopyButton: h6,
  GDatePicker: U6,
  GDropdownButton: pe,
  GIcon: Y,
  GIconButton: i1,
  GInfoTooltip: Ye,
  GInput: ve,
  GInputSelect: Xe,
  GMenuButton: Je,
  GPagination: e3,
  GPanel: P0,
  GPickerSheet: ge,
  GPropertyList: U0,
  GPropertyRow: G0,
  GRadio: K0,
  GSnackbar: t3,
  GStatusBadge: V2,
  GTextarea: S2,
  GToggle: E2,
  AppHeader: b4,
  DataCard: V4,
  DropdownItem: n3,
  DropdownMenu: s3,
  LanguageSwitcher: be,
  MobileHeader: W4,
  MobileTabBar: t7,
  PageHeader: f7,
  PasswordRequirements: w7,
  PasswordStrengthIndicator: M7,
  QRCodeDisplay: F7,
  Sidebar: C8,
  SidebarItem: i3,
  SidebarPanel: oe,
  SnackbarHost: m8,
  TablePagination: g8,
  AuthScreen: G8,
  AuthHeroIcon: W8,
  AuthPasswordField: Y8,
  AuthPasswordRules: n9,
  SmartCaptcha: i9,
  FilterFieldDateRange: y8,
  FilterFieldSelect: x8,
  FilterFieldText: V8,
  LinkCopyCell: S8
};
function bs(e = {}) {
  return {
    install(n) {
      for (const [s, o] of Object.entries(G9))
        n.component(s, o);
      const t = e.i18n;
      if (t)
        for (const [s, o] of Object.entries(q9))
          t.mergeLocaleMessage(s, o);
    }
  };
}
export {
  b4 as AppHeader,
  W8 as AuthHeroIcon,
  Y8 as AuthPasswordField,
  n9 as AuthPasswordRules,
  G8 as AuthScreen,
  V4 as DataCard,
  n3 as DropdownItem,
  s3 as DropdownMenu,
  O9 as EMAIL_RE,
  rs as FILTER_ALL,
  y8 as FilterFieldDateRange,
  x8 as FilterFieldSelect,
  V8 as FilterFieldText,
  m1 as GButton,
  O2 as GCard,
  X3 as GCheckbox,
  G1 as GContextMenu,
  $1 as GContextMenuItem,
  h6 as GCopyButton,
  U6 as GDatePicker,
  pe as GDropdownButton,
  Y as GIcon,
  i1 as GIconButton,
  Ye as GInfoTooltip,
  ve as GInput,
  Xe as GInputSelect,
  en as GLinkCopy,
  Je as GMenuButton,
  e3 as GPagination,
  P0 as GPanel,
  ge as GPickerSheet,
  U0 as GPropertyList,
  G0 as GPropertyRow,
  K0 as GRadio,
  t3 as GSnackbar,
  V2 as GStatusBadge,
  S2 as GTextarea,
  E2 as GToggle,
  a0 as IconAlertCircle,
  tn as IconAlipayLogo,
  nn as IconAlipayWordmark,
  i5 as IconArrowCircleRight,
  sn as IconArrowNarrowRight,
  u5 as IconBook,
  Ve as IconCalendar,
  an as IconChart,
  on as IconCheck,
  v5 as IconCheckCircle,
  r2 as IconCheckMini,
  L0 as IconChevronLeft,
  x0 as IconChevronRight,
  ln as IconClock,
  u2 as IconClockMini,
  rn as IconClockX,
  Ke as IconClose,
  f2 as IconCloseMini,
  cn as IconCodeSquare,
  M5 as IconCoins,
  dn as IconCoinsHand,
  d6 as IconCopy,
  un as IconCopyOutline,
  Cn as IconCreditCardMinus,
  hn as IconCreditCardPlus,
  fn as IconDelete,
  F5 as IconEye,
  U5 as IconEyeOff,
  jt as IconGb,
  mn as IconGear,
  Re as IconHelpCircle,
  gn as IconInbox,
  J6 as IconInfoCircle,
  pn as IconKey,
  vn as IconKeyboard,
  wn as IconKeyboard02,
  _n as IconLineChartUp,
  bn as IconLink02,
  yn as IconLinkBroken,
  Ln as IconLinkExternal,
  kn as IconLock,
  $n as IconLogin,
  gt as IconLogoMark,
  wt as IconLogout,
  xn as IconMail,
  kt as IconMenuLines,
  Mn as IconMenuStroke,
  zn as IconMessageCircleDots,
  In as IconMinusCircle,
  Vn as IconMonitor,
  Hn as IconPencil,
  Zn as IconPercent,
  Bn as IconPincode,
  Sn as IconPlus,
  Rn as IconReceipt,
  Tn as IconRefresh,
  v2 as IconReverseLeft,
  qt as IconRu,
  En as IconSearchOff,
  Dn as IconSearchQuestion,
  An as IconSettings,
  Fn as IconShield,
  Pn as IconShieldX,
  On as IconSort,
  Un as IconSwapHorizontal,
  Nn as IconTrash,
  qn as IconUsdtLogo,
  Gn as IconWallet,
  g4 as IconXCircle,
  be as LanguageSwitcher,
  j1 as LegacyGButton,
  S8 as LinkCopyCell,
  W4 as MobileHeader,
  t7 as MobileTabBar,
  w9 as OTP_CODE_INPUT_MAX_LENGTH,
  D1 as OTP_CODE_LENGTH,
  v9 as OTP_CODE_PLACEHOLDER,
  ws as PAYMENT_LANDING_URL,
  f7 as PageHeader,
  w7 as PasswordRequirements,
  M7 as PasswordStrengthIndicator,
  F7 as QRCodeDisplay,
  C8 as Sidebar,
  i3 as SidebarItem,
  oe as SidebarPanel,
  i9 as SmartCaptcha,
  m8 as SnackbarHost,
  g8 as TablePagination,
  cs as balanceListKind,
  ds as countFilledFilters,
  bs as createGpUi,
  Ne as createPageSizeOptions,
  hs as datesFromIso,
  D9 as destroyRocketChat,
  gs as emailFieldError,
  Kn as fiatFromUsdt,
  Cs as formatCompactAxis,
  jn as formatFiatMoney,
  Qn as formatInvoiceRate,
  ps as formatRetryAfter,
  l3 as formatRub,
  P3 as gVariantAlias,
  Fe as getBackendCode,
  C3 as getBackendFields,
  _s as getBaseUrl,
  Ae as getErrorText,
  c3 as getPasswordRuleChecks,
  J8 as getPasswordRuleItems,
  le as getRetryAfter,
  N9 as gpEn,
  q9 as gpMessages,
  U9 as gpRu,
  z as iconSizeStyle,
  Yn as isPasswordStrong,
  d9 as isTechnicalErrorText,
  u9 as isUnavailableRequestError,
  o9 as loadSmartCaptcha,
  us as niceCeil,
  vs as nonEmptyString,
  l1 as normalizeClass,
  S1 as pageActionDisabled,
  i7 as pageActionLabel,
  Ee as pageActionLoading,
  o7 as pageActionToGButtonVariant,
  fs as parseDateRange,
  E1 as parseFiatCourse,
  r9 as readErrorStatus,
  Wn as readInvoiceCourse,
  Qe as resolveGVariant,
  ms as sameDateRange,
  as as setupRocketChat,
  P7 as shortenHash,
  Ie as toCssSize,
  s9 as toSmartCaptchaHl,
  Xn as useAmountFormat,
  Jn as useApiError,
  _e as useBrandLogo,
  we as useClickOutside,
  me as useCopyToClipboard,
  es as useDateFormat,
  ts as useIdempotencyKey,
  ns as useOtpCodeInput,
  a7 as usePageHeader,
  z7 as useQRCode,
  ss as useRateLimit,
  os as useRocketChat,
  fe as useSnackbar,
  is as useTablePagination,
  ls as useTablePaginationState
};
