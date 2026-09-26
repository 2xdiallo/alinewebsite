import { C as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Plane, c as Lock, d as ArrowRight, i as Scale, l as Earth, r as ShieldCheck } from "../_libs/lucide-react.mjs";
import { l as useCopy, n as SiteShell, r as cn, t as Logo } from "./site-shell-DRS_oU3X.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-chy1l1k3.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	const t = useCopy();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-4xl flex-col items-center px-8 pb-16 pt-8 text-center md:px-12 md:pb-24 md:pt-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {
						variant: "full",
						className: "max-w-lg md:max-w-xl"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-10 text-xs font-medium uppercase tracking-[0.22em] text-gold",
						children: t.heroEyebrow
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 max-w-3xl text-4xl font-medium tracking-tight md:text-6xl",
						children: t.heroTitle
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-xl text-base leading-relaxed text-muted md:text-lg",
						children: t.heroLead
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-fg/80",
						children: t.sloganSteps
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-9 flex flex-col gap-3 sm:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/rendez-vous",
							className: "inline-flex min-h-12 items-center justify-center rounded-md bg-fg px-6 text-sm font-medium text-surface",
							children: t.ctaAppoint
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#services",
							className: "inline-flex min-h-12 items-center justify-center rounded-md px-6 text-sm font-medium text-fg shadow-[inset_0_0_0_1px_var(--color-line)]",
							children: t.ctaDiscover
						})]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "services",
			className: "border-t border-line",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-[0.22em] text-gold",
						children: t.servicesKicker
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 max-w-xl text-3xl font-medium tracking-tight md:text-4xl",
						children: t.servicesTitle
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-xl text-muted",
						children: t.servicesLead
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 grid gap-4 md:grid-cols-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceCard, {
								to: "/billetterie",
								title: t.ticketsName,
								tag: t.ticketsTag,
								desc: t.ticketsDesc,
								learn: t.learn
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceCard, {
								to: "/visa",
								title: t.visaName,
								tag: t.visaTag,
								desc: t.visaDesc,
								learn: t.learn,
								featured: true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceCard, {
								to: "/import-export",
								title: t.cargoName,
								tag: t.cargoTag,
								desc: t.cargoDesc,
								learn: t.learn
							})
						]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-line bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-[0.22em] text-gold",
						children: t.worldKicker
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 max-w-2xl text-3xl font-medium tracking-tight md:text-4xl",
						children: t.worldTitle
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-xl text-muted",
						children: t.worldLead
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 grid gap-4 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Continent, {
								name: t.europe,
								examples: t.europeEx
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Continent, {
								name: t.americas,
								examples: t.americasEx
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Continent, {
								name: t.asia,
								examples: t.asiaEx
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Continent, {
								name: t.africa,
								examples: t.africaEx
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-sm text-subtle",
						children: t.worldNote
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-line",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl gap-8 px-5 py-16 md:grid-cols-2 md:px-8 md:py-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-[0.22em] text-gold",
						children: t.priceKicker
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-3xl font-medium tracking-tight md:text-4xl",
						children: t.priceTitle
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted",
						children: t.priceLead
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl bg-fg px-6 py-6 text-surface",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-medium text-gold",
								children: t.paidTitle
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 space-y-2 text-sm leading-relaxed text-surface/80",
								children: t.paidItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: item }, item))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-xs leading-relaxed text-surface/60",
								children: t.paidNote
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl bg-surface px-6 py-6 shadow-[var(--shadow-border)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium text-gold",
							children: t.freeTitle
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 space-y-2 text-sm leading-relaxed text-muted",
							children: t.freeItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: item }, item))
						})]
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-line bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-[0.22em] text-gold",
						children: t.howKicker
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-3xl font-medium tracking-tight md:text-4xl",
						children: t.howTitle
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-10 grid gap-6 md:grid-cols-4",
						children: t.how.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-medium text-gold",
								children: s.n
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 text-lg font-medium tracking-tight",
								children: s.t
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted",
								children: s.d
							})
						] }, s.n))
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-line",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-[0.22em] text-gold",
						children: t.whyKicker
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 max-w-xl text-3xl font-medium tracking-tight md:text-4xl",
						children: t.whyTitle
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-4 sm:grid-cols-2",
						children: t.why.map((item, i) => {
							const Icon = [
								Earth,
								ShieldCheck,
								Plane,
								Lock
							][i] ?? Scale;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl bg-surface px-6 py-6 shadow-[var(--shadow-border)]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5 text-gold" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-4 text-lg font-medium",
										children: item.t
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm leading-relaxed text-muted",
										children: item.d
									})
								]
							}, item.t);
						})
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-line bg-fg text-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-3xl px-5 py-20 text-center md:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-[0.22em] text-gold",
						children: t.brand
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-3xl font-medium tracking-tight md:text-5xl",
						children: t.ctaTitle
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-surface/70",
						children: t.ctaLead
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/rendez-vous",
						className: "mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-surface px-6 text-sm font-medium text-fg",
						children: t.ctaAppoint
					})
				]
			})
		})
	] });
}
function ServiceCard({ to, title, tag, desc, learn, featured }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to,
		className: cn("group flex flex-col rounded-xl p-6 transition-transform duration-200 ease-[var(--ease-out)] hover:-translate-y-0.5", featured ? "bg-fg text-surface" : "bg-surface shadow-[var(--shadow-border)]"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("text-xs font-medium", featured ? "text-gold" : "text-gold"),
				children: tag
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-3 text-2xl font-medium tracking-tight",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: cn("mt-3 flex-1 text-sm leading-relaxed", featured ? "text-surface/70" : "text-muted"),
				children: desc
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "mt-6 inline-flex items-center gap-1 text-sm font-medium",
				children: [learn, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
			})
		]
	});
}
function Continent({ name, examples }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl bg-bg px-6 py-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "text-xl font-medium tracking-tight",
			children: name
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-sm leading-relaxed text-muted",
			children: examples
		})]
	});
}
//#endregion
export { Home as component };
