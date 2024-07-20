/* empty css                           */
import { c as createComponent, r as renderTemplate, e as defineScriptVars, b as createAstro } from './astro/server_BI2ss-O0.mjs';
import 'kleur/colors';
import 'clsx';
import wbtl from 'jsonwebtoken';

function dbLogin(email, password) {
  let username = null;
  let success = true;
  return new Promise((resolve, reject) => {
    if (email === "usd@example.com" && password === "1234") {
      username = "USD Test";
    } else {
      success = false;
    }
    resolve({ success, username });
  });
}

async function login(email, password, maxAge) {
  const getLoginData = await dbLogin(email, password).then((data) => {
    return data;
  });
  if (getLoginData.success === false) {
    return { success: false, token: null, max: null };
  }
  const expire = Math.floor(Date.now() / 1e3) + maxAge;
  const token = wbtl.sign(
    {
      exp: expire,
      email,
      username: getLoginData.username
    },
    "secret"
  );
  return { success: true, token: `${token}`, max: maxAge };
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Session = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Session;
  let token = "none";
  let redir = "/login";
  const cookieName = {"PUBLIC_APPWRITE_COLLECTION_ID": "6693df1800342ccd7871", "PUBLIC_APPWRITE_DATABASE_ID": "667efb7e00313876acb2", "PUBLIC_APPWRITE_PROJECT_ID": "667eeaf9002912d4f3ab", "PUBLIC_APPWRITE_ENDPOINT": "https://cloud.appwrite.io/v1", "BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": undefined, "ASSETS_PREFIX": undefined}.COOKIE_NAME || "_Security_Login_";
  let maxAge = 604800;
  if (Astro2.request.method === "POST") {
    const data = Object.fromEntries(new URLSearchParams(await Astro2.request.text()));
    const d = await login(data.email, data.password, Number({"PUBLIC_APPWRITE_COLLECTION_ID": "6693df1800342ccd7871", "PUBLIC_APPWRITE_DATABASE_ID": "667efb7e00313876acb2", "PUBLIC_APPWRITE_PROJECT_ID": "667eeaf9002912d4f3ab", "PUBLIC_APPWRITE_ENDPOINT": "https://cloud.appwrite.io/v1", "BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": undefined, "ASSETS_PREFIX": undefined}.MAX_AGE || 604800));
    if (d.success === true) {
      token = d?.token || "none";
      redir = "/";
      maxAge = d?.max || 604800;
    }
  } else {
    return Astro2.redirect("/login");
  }
  return renderTemplate(_a || (_a = __template(["<script>(function(){", '\n  if (token !== "none") {\n    document.cookie = `${cookieName}=${token}; Max-Age=${maxAge}; path=/`;\n    window.location.href = redir;\n  }\n})();</script>'], ["<script>(function(){", '\n  if (token !== "none") {\n    document.cookie = \\`\\${cookieName}=\\${token}; Max-Age=\\${maxAge}; path=/\\`;\n    window.location.href = redir;\n  }\n})();</script>'])), defineScriptVars({
    token,
    redir,
    maxAge,
    cookieName
  }));
}, "E:/WEB-DEV/my-appwrite-blog-main/src/pages/api/session.astro", void 0);
const $$file = "E:/WEB-DEV/my-appwrite-blog-main/src/pages/api/session.astro";
const $$url = "/api/session";

export { $$Session as default, $$file as file, $$url as url };
