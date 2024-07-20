/* empty css                           */
import { c as createComponent, r as renderTemplate, f as renderSlot, d as renderHead, g as renderComponent, m as maybeRenderHead } from './astro/server_BI2ss-O0.mjs';
import 'kleur/colors';
import 'clsx';

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$LayoutLogin = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1(['<html> <head><meta charset="UTF-8"><meta http-equiv="Content-Encoding" content="gzip"><title translate="no">Login</title><link rel="stylesheet" href="/css/style.css"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta property="og:title" content="Login"><meta property="og:image:width" content="200"><meta property="og:image:height" content="200"><meta property="og:type" content="website"><meta property="og:color" content="#1c041b"><link rel="icon" href="/img/favicon.ico"><link rel="apple-touch-icon" href="/img/favicon.ico"><link rel="apple-touch-icon-precomposed" href="/img/favicon.ico"><link rel="shortcut icon" href="/img/favicon.ico"><script>\n      window.onload = function () {\n        const loginData = document.getElementById("loginInput").value;\n        if (loginData == "true") {\n          window.location.href = "/";\n        }\n      };\n    <\/script>', '</head> <body> <input type="hidden" name="loginInput" id="loginInput"> ', " </body></html>"])), renderHead(), renderSlot($$result, $$slots["default"]));
}, "E:/WEB-DEV/my-appwrite-blog-main/src/layouts/LayoutLogin.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Login = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$LayoutLogin, {}, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", '<div class="login"> <h1>Login</h1> <form id="login-form"> <input type="email" id="email" placeholder="E-mail" required><br><br> <input type="password" id="password" placeholder="password" required><br><br> <button type="submit"> Sign In </button> </form> <div class="quote"> <center> <span>Email: usd@example.com</span> <span>Password: 1234</span> </center> </div> <div style="text-align: center;"> <form action="/signup" accept-charset="UTF-8" method="POST"> <br> <button type="submit">Sign Up</button> </form> </div> </div> <script type="module" src="src/lib/signin.js"><\/script> '])), maybeRenderHead()) })}`;
}, "E:/WEB-DEV/my-appwrite-blog-main/src/pages/login.astro", void 0);

const $$file = "E:/WEB-DEV/my-appwrite-blog-main/src/pages/login.astro";
const $$url = "/login";

export { $$Login as default, $$file as file, $$url as url };
