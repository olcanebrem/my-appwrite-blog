/* empty css                         */
import { c as createComponent, r as renderTemplate, d as renderSlot, a as addAttribute, e as renderHead, b as createAstro, m as maybeRenderHead, f as renderComponent } from './astro/server_CSZ1XmLG.mjs';
import 'kleur/colors';
import 'clsx';
import wblt from 'jsonwebtoken';

function hasProfile(myToken) {
  let email = null;
  let username = null;
  let success = true;
  switch (myToken) {
    case "undefined":
      success = false;
      return { success, email, username };
    case void 0:
      success = false;
      return { success, email, username };
    case "null":
      success = false;
      return { success, email, username };
    case null:
      success = false;
      return { success, email, username };
    default: {
      const data = wblt.verify(myToken, "secret");
      if (data.email && data.username) {
        email = data.email;
        username = data.username;
      } else {
        success = false;
      }
      return { success, email, username };
    }
  }
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$LayoutLogin = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$LayoutLogin;
  const cookie = `${Astro2.cookies.get({"PUBLIC_APPWRITE_COLLECTION_ID": "6693df1800342ccd7871", "PUBLIC_APPWRITE_DATABASE_ID": "667efb7e00313876acb2", "PUBLIC_APPWRITE_PROJECT_ID": "667eeaf9002912d4f3ab", "PUBLIC_APPWRITE_ENDPOINT": "https://cloud.appwrite.io/v1", "BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": undefined, "ASSETS_PREFIX": undefined}.COOKIE_NAME || "_Security_Login_")?.value}`;
  const d = hasProfile(cookie);
  const login = `${d.success}`;
  return renderTemplate(_a || (_a = __template(['<html> <head><meta charset="UTF-8"><meta http-equiv="Content-Encoding" content="gzip"><title translate="no">Login</title><link rel="stylesheet" href="/css/style.css"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta property="og:title" content="Login"><meta property="og:image:width" content="200"><meta property="og:image:height" content="200"><meta property="og:type" content="website"><meta property="og:color" content="#1c041b"><link rel="icon" href="/img/favicon.ico"><link rel="apple-touch-icon" href="/img/favicon.ico"><link rel="apple-touch-icon-precomposed" href="/img/favicon.ico"><link rel="shortcut icon" href="/img/favicon.ico"><script>\n      window.onload = function () {\n        const loginData = document.getElementById("loginInput").value;\n        if (loginData == "true") {\n          window.location.href = "/";\n        }\n      };\n    </script>', '</head> <body> <input type="hidden" name="loginInput" id="loginInput"', "> ", " </body></html>"])), renderHead(), addAttribute(login, "value"), renderSlot($$result, $$slots["default"]));
}, "E:/WEB-DEV/my-appwrite-blog-main/src/layouts/LayoutLogin.astro", void 0);

const $$LoginForm = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<form action="/api/session" accept-charset="UTF-8" method="POST"> <div> <label for="email">Email:</label> <br> <input type="email" name="email" required> </div> <div> <label for="password">Password:</label> <br> <input type="password" name="password" required> </div> <br> <button type="submit">Sumbit</button> </form>`;
}, "E:/WEB-DEV/my-appwrite-blog-main/src/components/LoginForm.astro", void 0);

const $$Astro = createAstro();
const $$Login = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Login;
  return renderTemplate`${renderComponent($$result, "Layout", $$LayoutLogin, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="login"> <h1>Login</h1> ${renderComponent($$result2, "LoginForm", $$LoginForm, {})} <div class="quote"> <center> <span>Email: user@example.com</span> <span>Password: 1234</span> <span>by <a href="https://zastinian.com">Zastinian</a>, <a href="https://github.com/Zastinian/Astro-Login">Github Code</a>, <a href="https://twitter.com/Zastinian">Twitter</a>.</span> </center> </div> </div> ` })}`;
}, "E:/WEB-DEV/my-appwrite-blog-main/src/pages/login.astro", void 0);

const $$file = "E:/WEB-DEV/my-appwrite-blog-main/src/pages/login.astro";
const $$url = "/login";

export { $$Login as default, $$file as file, $$url as url };
