import { i as __toESM } from "../_runtime.mjs";
import { C as require_jsx_runtime, Y as require_react, x as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Plane, c as Lock, o as Package, u as Briefcase } from "../_libs/lucide-react.mjs";
import { c as saveBooking, i as emptyDraft, l as useCopy, n as SiteShell, o as formatEUR, r as cn, s as isPaidService, u as useLang } from "./site-shell-DRS_oU3X.mjs";
import { n as Route$1 } from "./router-DDfAldt9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/rendez-vous-zbyk4oru.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles = {
	primary: "bg-fg text-surface hover:bg-fg/90 focus-visible:ring-fg/30",
	secondary: "bg-surface text-fg shadow-[inset_0_0_0_1px_var(--color-line)] hover:bg-bg focus-visible:ring-fg/20",
	ghost: "bg-transparent text-fg hover:bg-fg/5 focus-visible:ring-fg/20",
	gold: "bg-gold text-surface hover:bg-gold-deep focus-visible:ring-gold/40"
};
var Button = (0, import_react.forwardRef)(function Button({ className, variant = "primary", type = "button", ...props }, ref) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		ref,
		type,
		className: cn("inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 text-sm font-medium tracking-tight transition-colors duration-150 ease-[var(--ease-out)] focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-40", styles[variant], className),
		...props
	});
});
var control = "w-full min-h-11 rounded-md bg-surface px-3.5 text-sm text-fg shadow-[inset_0_0_0_1px_var(--color-line)] outline-none transition-[box-shadow] duration-150 placeholder:text-subtle focus:shadow-[inset_0_0_0_1.5px_var(--color-fg)]";
function Label({ children, htmlFor, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		htmlFor,
		className: cn("mb-1.5 block text-sm font-medium text-fg", className),
		children
	});
}
function FieldError({ children }) {
	if (!children) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mt-1.5 text-xs text-danger",
		children
	});
}
function Input({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		className: cn(control, className),
		...props
	});
}
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn(control, "min-h-28 py-3 resize-y", className),
		...props
	});
}
function Select({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
		className: cn(control, "pr-8", className),
		...props,
		children
	});
}
function Field({ className, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("min-w-0", className),
		children
	});
}
function StripeWordmark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 60 25",
		"aria-label": "Stripe",
		role: "img",
		className,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "currentColor",
			d: "M5 10.5c0-1.9 1.6-2.7 4.2-3 2.4-.3 3.6-.7 3.6-1.5 0-.8-.8-1.3-2.2-1.3-1.5 0-2.6.5-3.4 1l-.6-2.6c.9-.5 2.5-1 4.3-1 3.7 0 6.1 1.8 6.1 4.8v8.6H14V14c-.8.6-2 1.1-3.5 1.1-3.2 0-5.5-1.8-5.5-4.6zm4.7 2.2c1.4 0 2.4-.5 3-1.1v-1.8c-.6.4-1.6.8-2.8.9-1.3.2-2 .6-2 1.2 0 .7.7.8 1.8.8zM22.2 6.4c-1.7 0-3 .7-3.8 1.7l-.2-1.4h-3.2v16.4h3.5v-5.6c.8.6 1.9 1 3.3 1 3.4 0 6.4-2.7 6.4-6.6 0-3.8-3-6.5-6-6.5zm-.6 10.1c-1.5 0-2.6-.9-3-1.7V10c.4-.9 1.5-1.7 3-1.7 1.7 0 2.9 1.4 2.9 4.1 0 2.6-1.2 4.1-2.9 4.1zM32.6 2.4 29 19.7h3.6l3.6-17.3zM43.2 6.4c-3.7 0-6.6 2.8-6.6 6.6 0 3.7 2.9 6.5 6.8 6.5 1.8 0 3.2-.4 4.2-1l.7-2.6c-1 .5-2.2.9-3.7.9-1.9 0-3.5-1.2-3.8-2.9h8.3c0-.3.1-.8.1-1.2 0-3.6-2.2-6.3-6-6.3zm-3 5.1c.3-1.6 1.6-2.7 3-2.7 1.4 0 2.6 1.1 2.7 2.7zM55.8 6.7l-2.6-.1c-2 0-3.4 1.2-3.4 3.2v.3h-1.9v2.9h1.9v6.7h3.5v-6.7h2.6l.5-2.9h-3.1V10c0-.8.4-1.2 1.2-1.2h1.3z"
		})
	});
}
function CardBrandRow() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-2 text-muted",
		"aria-hidden": true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "rounded-sm bg-surface px-1.5 py-0.5 text-[10px] font-semibold tracking-wide shadow-[inset_0_0_0_1px_var(--color-line)]",
				children: "VISA"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "rounded-sm bg-surface px-1.5 py-0.5 text-[10px] font-semibold tracking-wide shadow-[inset_0_0_0_1px_var(--color-line)]",
				children: "MC"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "rounded-sm bg-surface px-1.5 py-0.5 text-[10px] font-semibold tracking-wide shadow-[inset_0_0_0_1px_var(--color-line)]",
				children: "AMEX"
			})
		]
	});
}
function formatCardNumber(value) {
	return value.replace(/\D/g, "").slice(0, 16).replace(/(\d{4})(?=\d)/g, "$1 ");
}
function formatExpiry(value) {
	const digits = value.replace(/\D/g, "").slice(0, 4);
	if (digits.length <= 2) return digits;
	return `${digits.slice(0, 2)} / ${digits.slice(2)}`;
}
function StripeCheckout({ onPaid }) {
	const t = useCopy().pay;
	const lang = useLang((s) => s.lang);
	const [number, setNumber] = (0, import_react.useState)("");
	const [expiry, setExpiry] = (0, import_react.useState)("");
	const [cvc, setCvc] = (0, import_react.useState)("");
	const [holder, setHolder] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	async function handleSubmit(e) {
		e.preventDefault();
		const digits = number.replace(/\s/g, "");
		const exp = expiry.replace(/\s/g, "");
		if (digits.length < 16 || exp.length < 5 || cvc.length < 3 || holder.trim().length < 2) {
			setError(t.error);
			return;
		}
		setError("");
		setBusy(true);
		await new Promise((r) => setTimeout(r, 1400));
		setBusy(false);
		onPaid();
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-xl bg-surface p-5 shadow-[var(--shadow-border)] sm:p-7",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium uppercase tracking-widest text-gold",
					children: "Stripe"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-1 text-xl font-medium tracking-tight",
					children: t.title
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StripeWordmark, { className: "h-6 w-14 text-stripe" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex items-end justify-between rounded-lg bg-bg px-4 py-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted",
					children: t.amountLabel
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-3xl font-medium tracking-tight tabular-nums",
					children: formatEUR(30, lang)
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-40 text-right text-xs leading-relaxed text-subtle",
					children: t.currencyNote
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "mt-6 space-y-4",
				onSubmit: handleSubmit,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-1.5 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "card-number",
							children: t.number
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardBrandRow, {})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "card-number",
						inputMode: "numeric",
						autoComplete: "cc-number",
						placeholder: "ACCT-000015",
						value: number,
						onChange: (e) => setNumber(formatCardNumber(e.target.value))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "card-exp",
							children: t.expiry
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "card-exp",
							inputMode: "numeric",
							autoComplete: "cc-exp",
							placeholder: "MM / AA",
							value: expiry,
							onChange: (e) => setExpiry(formatExpiry(e.target.value))
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "card-cvc",
							children: t.cvc
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "card-cvc",
							inputMode: "numeric",
							autoComplete: "cc-csc",
							placeholder: "123",
							value: cvc,
							onChange: (e) => setCvc(e.target.value.replace(/\D/g, "").slice(0, 4))
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "card-name",
							children: t.holder
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "card-name",
							autoComplete: "cc-name",
							value: holder,
							onChange: (e) => setHolder(e.target.value)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldError, { children: error })
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						type: "submit",
						className: "w-full",
						disabled: busy,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "size-3.5" }), busy ? t.processing : t.pay]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 flex items-center justify-center gap-2 text-subtle",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "size-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs",
					children: t.secure
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-center text-xs leading-relaxed text-subtle",
				children: t.demo
			})
		]
	});
}
function todayISO() {
	const d = /* @__PURE__ */ new Date();
	const m = `${d.getMonth() + 1}`.padStart(2, "0");
	const day = `${d.getDate()}`.padStart(2, "0");
	return `${d.getFullYear()}-${m}-${day}`;
}
function isEmail(v) {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}
function BookingWizard({ initialService }) {
	const w = useCopy().wizard;
	const lang = useLang((s) => s.lang);
	const navigate = useNavigate();
	const [service, setService] = (0, import_react.useState)(initialService);
	const [draft, setDraft] = (0, import_react.useState)(emptyDraft(initialService ?? "visa"));
	const [step, setStep] = (0, import_react.useState)(initialService ? "info" : "service");
	const [errors, setErrors] = (0, import_react.useState)({});
	const paid = service ? isPaidService(service) : false;
	const steps = (0, import_react.useMemo)(() => {
		const list = [{
			id: "info",
			label: w.stepInfo
		}, {
			id: "date",
			label: w.stepDate
		}];
		if (paid) list.push({
			id: "pay",
			label: w.stepPay
		});
		return list;
	}, [
		paid,
		w.stepDate,
		w.stepInfo,
		w.stepPay
	]);
	function patch(p) {
		setDraft((d) => ({
			...d,
			...p
		}));
	}
	function requireFields(keys) {
		const next = {};
		for (const k of keys) if (!String(draft[k] ?? "").trim()) next[k] = w.required;
		if (keys.includes("email") && draft.email && !isEmail(draft.email)) next.email = w.emailInvalid;
		setErrors(next);
		return Object.keys(next).length === 0;
	}
	function chooseService(id) {
		setService(id);
		setDraft(emptyDraft(id));
		setStep("info");
		setErrors({});
	}
	function goInfoNext() {
		const keys = [
			"firstName",
			"lastName",
			"email",
			"phone"
		];
		if (service === "visa") keys.push("nationality", "continent", "country", "visaType");
		if (service === "billetterie") keys.push("tripType", "origin", "country", "continent", "departureDate", "passengers");
		if (service === "colis") keys.push("parcelDescription", "continent", "country");
		if (goInfoValid(keys)) setStep("date");
	}
	function goInfoValid(keys) {
		return requireFields(keys);
	}
	function goDateNext() {
		const keys = service === "visa" || service === "colis" || service === "billetterie" && draft.channel === "agence" ? ["preferredDate", "slot"] : [];
		if (service === "visa") keys.push("mode");
		if (!requireFields(keys)) return;
		if (paid) setStep("pay");
		else finish();
	}
	function finish() {
		if (!service) return;
		const saved = saveBooking({
			...draft,
			service
		});
		navigate({
			to: "/confirmation",
			search: { ref: saved.id }
		});
	}
	const title = service === "visa" ? w.titlePaid : service === "billetterie" ? w.titleTickets : w.titleCargo;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto w-full max-w-xl",
		children: !service || step === "service" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServicePicker, { onPick: chooseService }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium uppercase tracking-widest text-gold",
				children: paid ? w.paidBanner : w.freeBanner
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 text-3xl font-medium tracking-tight md:text-4xl",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-8 flex gap-2",
				children: steps.map((s, i) => {
					const active = s.id === step;
					const done = steps.findIndex((x) => x.id === step) > i;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: cn("h-1 rounded-full", active || done ? "bg-fg" : "bg-line") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: cn("mt-2 text-xs", active ? "text-fg" : "text-subtle"),
							children: s.label
						})]
					}, s.id);
				})
			}),
			step === "info" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 space-y-4",
				children: [
					service === "billetterie" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 gap-2",
						children: ["en-ligne", "agence"].map((ch) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => patch({ channel: ch }),
							className: cn("min-h-11 rounded-md px-3 text-sm font-medium", draft.channel === ch ? "bg-fg text-surface" : "bg-surface text-fg shadow-[inset_0_0_0_1px_var(--color-line)]"),
							children: ch === "en-ligne" ? w.channelOnline : w.channelAgency
						}, ch))
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "fn",
								children: w.firstName
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "fn",
								value: draft.firstName,
								onChange: (e) => patch({ firstName: e.target.value })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldError, { children: errors.firstName })
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "ln",
								children: w.lastName
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "ln",
								value: draft.lastName,
								onChange: (e) => patch({ lastName: e.target.value })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldError, { children: errors.lastName })
						] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "em",
								children: w.email
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "em",
								type: "email",
								value: draft.email,
								onChange: (e) => patch({ email: e.target.value })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldError, { children: errors.email })
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "ph",
								children: w.phone
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "ph",
								value: draft.phone,
								onChange: (e) => patch({ phone: e.target.value })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldError, { children: errors.phone })
						] })]
					}),
					service === "visa" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "nat",
								children: w.nationality
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "nat",
								value: draft.nationality,
								onChange: (e) => patch({ nationality: e.target.value })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldError, { children: errors.nationality })
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContinentFields, {
							draft,
							patch,
							errors
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "vt",
								children: w.visaType
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								id: "vt",
								value: draft.visaType,
								onChange: (e) => patch({ visaType: e.target.value }),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { value: "" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "tourisme",
										children: w.visaTourism
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "affaires",
										children: w.visaBusiness
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "etudes",
										children: w.visaStudy
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "famille",
										children: w.visaFamily
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "transit",
										children: w.visaTransit
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldError, { children: errors.visaType })
						] })
					] }) : null,
					service === "billetterie" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "tt",
								children: w.tripType
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								id: "tt",
								value: draft.tripType,
								onChange: (e) => patch({ tripType: e.target.value }),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { value: "" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "aller-simple",
										children: w.tripOne
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "aller-retour",
										children: w.tripReturn
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "multi",
										children: w.tripMulti
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldError, { children: errors.tripType })
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "or",
									children: w.origin
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "or",
									value: draft.origin,
									onChange: (e) => patch({ origin: e.target.value })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldError, { children: errors.origin })
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "ps",
								children: w.passengers
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "ps",
								inputMode: "numeric",
								value: draft.passengers,
								onChange: (e) => patch({ passengers: e.target.value })
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContinentFields, {
							draft,
							patch,
							errors
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "dep",
									children: w.departure
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "dep",
									type: "date",
									min: todayISO(),
									value: draft.departureDate,
									onChange: (e) => patch({ departureDate: e.target.value })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldError, { children: errors.departureDate })
							] }), draft.tripType === "aller-retour" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "ret",
								children: w.return
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "ret",
								type: "date",
								min: draft.departureDate || todayISO(),
								value: draft.returnDate,
								onChange: (e) => patch({ returnDate: e.target.value })
							})] }) : null]
						})
					] }) : null,
					service === "colis" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContinentFields, {
						draft,
						patch,
						errors
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "par",
							children: w.parcel
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							id: "par",
							value: draft.parcelDescription,
							onChange: (e) => patch({ parcelDescription: e.target.value })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldError, { children: errors.parcelDescription })
					] })] }) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "notes",
						children: w.notes
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						id: "notes",
						placeholder: w.notesPh,
						value: draft.notes,
						onChange: (e) => patch({ notes: e.target.value })
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-3 pt-2",
						children: [!initialService ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "secondary",
							onClick: () => setStep("service"),
							children: w.back
						}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							className: "flex-1",
							onClick: goInfoNext,
							children: w.next
						})]
					})
				]
			}) : null,
			step === "date" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 space-y-4",
				children: [
					service === "billetterie" && draft.channel === "en-ligne" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "rounded-lg bg-surface px-4 py-4 text-sm leading-relaxed text-muted shadow-[var(--shadow-border)]",
						children: lang === "fr" ? "Demande en ligne : aucun rendez-vous n'est nécessaire. Envoyez, un conseiller prépare le devis." : "Online request: no appointment needed. Send it, a counsellor prepares the quote."
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "dt",
								children: w.date
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "dt",
								type: "date",
								min: todayISO(),
								value: draft.preferredDate,
								onChange: (e) => patch({ preferredDate: e.target.value })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldError, { children: errors.preferredDate })
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
								className: "mb-1.5 text-sm font-medium",
								children: w.slot
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid gap-2 sm:grid-cols-2",
								children: ["matin", "apres-midi"].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => patch({ slot: s }),
									className: cn("min-h-11 rounded-md px-3 text-sm", draft.slot === s ? "bg-fg text-surface" : "bg-surface text-fg shadow-[inset_0_0_0_1px_var(--color-line)]"),
									children: s === "matin" ? w.slotMorning : w.slotAfternoon
								}, s))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldError, { children: errors.slot })
						] }),
						service === "visa" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "mode",
							children: w.mode
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
							id: "mode",
							value: draft.mode,
							onChange: (e) => patch({ mode: e.target.value }),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "bureau",
									children: w.modeOffice
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "visio",
									children: w.modeVisio
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "whatsapp",
									children: w.modeWa
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "telephone",
									children: w.modePhone
								})
							]
						})] }) : null
					] }),
					paid ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg bg-bg px-4 py-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium",
							children: w.reviewTitle
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-sm text-muted",
							children: [
								draft.firstName,
								" ",
								draft.lastName,
								" · ",
								draft.country || draft.continent,
								" · ",
								formatEUR(30, lang)
							]
						})]
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-3 pt-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "secondary",
							onClick: () => setStep("info"),
							children: w.back
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							className: "flex-1",
							onClick: goDateNext,
							children: paid ? w.payCta : w.submitFree
						})]
					})
				]
			}) : null,
			step === "pay" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StripeCheckout, { onPaid: finish }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					className: "w-full",
					onClick: () => setStep("date"),
					children: w.back
				})]
			}) : null
		] })
	});
}
function ContinentFields({ draft, patch, errors }) {
	const t = useCopy();
	const w = t.wizard;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4 sm:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				htmlFor: "cont",
				children: w.continent
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
				id: "cont",
				value: draft.continent,
				onChange: (e) => patch({ continent: e.target.value }),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "",
						children: w.selectContinent
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "europe",
						children: t.europe
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "amerique",
						children: t.americas
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "asie",
						children: t.asia
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "afrique",
						children: t.africa
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldError, { children: errors.continent })
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				htmlFor: "co",
				children: w.country
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				id: "co",
				value: draft.country,
				onChange: (e) => patch({ country: e.target.value })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldError, { children: errors.country })
		] })]
	});
}
function ServicePicker({ onPick }) {
	const t = useCopy();
	const items = [
		{
			id: "visa",
			icon: Briefcase,
			title: t.visaName,
			tag: t.visaTag,
			desc: t.visaDesc
		},
		{
			id: "billetterie",
			icon: Plane,
			title: t.ticketsName,
			tag: t.ticketsTag,
			desc: t.ticketsDesc
		},
		{
			id: "colis",
			icon: Package,
			title: t.cargoName,
			tag: t.cargoTag,
			desc: t.cargoDesc
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs font-medium uppercase tracking-widest text-gold",
			children: t.nav.book
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mt-3 text-3xl font-medium tracking-tight md:text-4xl",
			children: t.wizard.choose
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8 grid gap-3",
			children: items.map((item) => {
				const Icon = item.icon;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => onPick(item.id),
					className: "flex gap-4 rounded-xl bg-surface p-5 text-left shadow-[var(--shadow-border)] transition-transform duration-150 hover:-translate-y-0.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex size-11 shrink-0 items-center justify-center rounded-md bg-bg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5 text-gold" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex flex-wrap items-baseline gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-base font-medium",
							children: item.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-medium text-gold",
							children: item.tag
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-1 block text-sm leading-relaxed text-muted",
						children: item.desc
					})] })]
				}, item.id);
			})
		})
	] });
}
function Page() {
	const { service } = Route$1.useSearch();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "px-5 py-12 md:px-8 md:py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookingWizard, { initialService: service })
	}) });
}
//#endregion
export { Page as component };
