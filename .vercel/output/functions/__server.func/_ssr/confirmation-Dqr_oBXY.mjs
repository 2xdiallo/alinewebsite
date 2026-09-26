import { i as __toESM } from "../_runtime.mjs";
import { C as require_jsx_runtime, Y as require_react, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as findBooking, d as whatsappHref, l as useCopy, n as SiteShell, o as formatEUR, u as useLang } from "./site-shell-DRS_oU3X.mjs";
import { r as Route$4 } from "./router-DDfAldt9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/confirmation-Dqr_oBXY.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	const { ref } = Route$4.useSearch();
	const t = useCopy();
	const lang = useLang((s) => s.lang);
	const [booking, setBooking] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (ref) setBooking(findBooking(ref) ?? null);
	}, [ref]);
	const c = t.confirm;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-surface",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-lg px-5 py-16 text-center md:px-8 md:py-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium uppercase tracking-[0.22em] text-gold",
					children: t.sloganShort
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 text-4xl font-medium tracking-tight",
					children: c.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-muted",
					children: booking?.paid ? c.paidLead : c.freeLead
				}),
				booking ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "mt-8 divide-y divide-line rounded-xl bg-bg text-left",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							label: c.ref,
							value: booking.id
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							label: c.amount,
							value: booking.paid ? formatEUR(booking.amountEur, lang) : c.free
						}),
						booking.preferredDate ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							label: t.wizard.date,
							value: booking.preferredDate
						}) : null
					]
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-sm text-muted",
					children: booking?.paid ? c.nextPaid : c.nextFree
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex min-h-11 items-center justify-center rounded-md bg-fg px-5 text-sm font-medium text-surface",
						children: c.home
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: whatsappHref(booking ? `${t.waDefault}\n${c.ref}: ${booking.id}` : t.waDefault),
						className: "inline-flex min-h-11 items-center justify-center rounded-md px-5 text-sm font-medium shadow-[inset_0_0_0_1px_var(--color-line)]",
						target: "_blank",
						rel: "noreferrer",
						children: c.wa
					})]
				})
			]
		})
	}) });
}
function Row({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between px-4 py-3 text-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-muted",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "font-medium tabular-nums",
			children: value
		})]
	});
}
//#endregion
export { Page as component };
