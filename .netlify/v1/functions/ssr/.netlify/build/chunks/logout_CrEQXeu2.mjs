/* empty css                         */
import { c as createComponent, r as renderTemplate, g as defineScriptVars, b as createAstro } from './astro/server_CSZ1XmLG.mjs';
import 'kleur/colors';
import 'clsx';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Logout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Logout;
  let cookie = "none";
  const redir = "/login";
  const cookieName = {"PUBLIC_APPWRITE_COLLECTION_ID": "6693df1800342ccd7871", "PUBLIC_APPWRITE_DATABASE_ID": "667efb7e00313876acb2", "PUBLIC_APPWRITE_PROJECT_ID": "667eeaf9002912d4f3ab", "PUBLIC_APPWRITE_ENDPOINT": "https://cloud.appwrite.io/v1", "BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": undefined, "ASSETS_PREFIX": undefined}.COOKIE_NAME || "_Security_Login_";
  if (Astro2.request.method === "POST") {
    const cook = `${Astro2.cookies.get("login")?.value}`;
    if (cook) {
      cookie = cook;
    }
  } else {
    return Astro2.redirect("/");
  }
  return renderTemplate(_a || (_a = __template(["<script>(function(){", '\n  if (cookie !== "none") {\n    document.cookie = `${cookieName}=${cookie}; Max-Age=0; path=/`;\n    window.location.href = redir;\n  }\n})();</script>'], ["<script>(function(){", '\n  if (cookie !== "none") {\n    document.cookie = \\`\\${cookieName}=\\${cookie}; Max-Age=0; path=/\\`;\n    window.location.href = redir;\n  }\n})();</script>'])), defineScriptVars({
    cookie,
    redir,
    cookieName
  }));
}, "E:/WEB-DEV/my-appwrite-blog-main/src/pages/logout.astro", void 0);
const $$file = "E:/WEB-DEV/my-appwrite-blog-main/src/pages/logout.astro";
const $$url = "/logout";

export { $$Logout as default, $$file as file, $$url as url };
