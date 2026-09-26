import { C as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as useCopy, n as SiteShell } from "./site-shell-DRS_oU3X.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/faq-D1H4RTgr.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	const t = useCopy();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-surface",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium uppercase tracking-[0.22em] text-gold",
					children: "FAQ"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 text-4xl font-medium tracking-tight",
					children: t.faqTitle
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 divide-y divide-line",
					children: t.faq.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
						className: "group py-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", {
							className: "flex min-h-11 cursor-pointer list-none items-center text-left text-base font-medium tracking-tight",
							children: item.q
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-muted",
							children: item.a
						})]
					}, item.q))
				})
			]
		})
	}) });
}
//#endregion
export { Page as component };
