import { a as createComponent, r as renderTemplate, d as renderSlot, f as renderHead } from './astro/server_BNGISfs7.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$LayoutLogin = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(['<html> <head><meta charset="UTF-8"><meta http-equiv="Content-Encoding" content="gzip"><title translate="no">Login</title><link rel="stylesheet" href="/css/style.css"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta property="og:title" content="Login"><meta property="og:image:width" content="200"><meta property="og:image:height" content="200"><meta property="og:type" content="website"><meta property="og:color" content="#1c041b"><link rel="icon" href="/img/favicon.ico"><link rel="apple-touch-icon" href="/img/favicon.ico"><link rel="apple-touch-icon-precomposed" href="/img/favicon.ico"><link rel="shortcut icon" href="/img/favicon.ico"><script>\n      window.onload = function () {\n        const loginData = document.getElementById("loginInput").value;\n        if (loginData == "true") {\n          window.location.href = "/";\n        }\n      };\n    <\/script>', '</head> <body> <input type="hidden" name="loginInput" id="loginInput"> ', " </body></html>"])), renderHead(), renderSlot($$result, $$slots["default"]));
}, "E:/WEB-DEV/astro-nomy-master/src/pages/layouts/LayoutLogin.astro", void 0);

const $$file = "E:/WEB-DEV/astro-nomy-master/src/pages/layouts/LayoutLogin.astro";
const $$url = "/layouts/LayoutLogin";

export { $$LayoutLogin as default, $$file as file, $$url as url };
