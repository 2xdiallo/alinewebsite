import { C as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as useCopy, n as SiteShell } from "./site-shell-DRS_oU3X.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/billetterie-XiPEWbQg.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	const t = useCopy();
	const p = t.ticketsPage;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-surface",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium uppercase tracking-[0.22em] text-gold",
					children: p.kicker
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 text-4xl font-medium tracking-tight md:text-5xl",
					children: p.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-lg leading-relaxed text-muted",
					children: p.lead
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-fg",
					children: p.world
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 grid gap-3 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/rendez-vous",
						search: { service: "billetterie" },
						className: "flex min-h-14 items-center justify-center rounded-md bg-fg px-5 text-sm font-medium text-surface",
						children: p.online
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/rendez-vous",
						search: { service: "billetterie" },
						className: "flex min-h-14 items-center justify-center rounded-md px-5 text-sm font-medium text-fg shadow-[inset_0_0_0_1px_var(--color-line)]",
						children: p.agency
					})]
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-t border-line",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-4 px-5 py-16 sm:grid-cols-2 md:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContinentCard, {
					title: t.europe,
					text: t.europeEx
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContinentCard, {
					title: t.americas,
					text: t.americasEx
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContinentCard, {
					title: t.asia,
					text: t.asiaEx
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContinentCard, {
					title: t.africa,
					text: t.africaEx
				})
			]
		})
	})] });
}
function ContinentCard({ title, text }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl bg-surface px-6 py-6 shadow-[var(--shadow-border)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-xl font-medium",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-sm leading-relaxed text-muted",
			children: text
		})]
	});
}
//#endregion
export { Page as component };
