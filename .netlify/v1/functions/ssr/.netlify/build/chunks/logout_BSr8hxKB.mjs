/* empty css                           */
import { c as createComponent, r as renderTemplate, d as renderHead } from './astro/server_BI2ss-O0.mjs';
import 'kleur/colors';
import 'clsx';
import { Account, AppwriteException } from 'appwrite';
import { c as client } from './appwrite_DL6PifV7.mjs';

// src/lib/logout.js

async function deleteSession() {
  const account = new Account(client);

  try {
    const session = await account.getSession('current');
    const jwtToken = session.jwt;
    console.log('JWT Token:', jwtToken);

    console.log("Session var");
    console.log(session);

    await account.deleteSession('current');
    // Redirect on success
    console.log('Current session deleted');
    window.location.href = "../index.html";

    
  } catch (error) {
    console.log("Session not registered");
    // Redirect on success
    window.location.href = "../index.html";

    if (error instanceof AppwriteException) {
      console.log('Appwrite exception:', error.message);
    } else {
      console.log('Unexpected error:', error);
    }
  }
}

// Only add event listeners if running in the browser
if (typeof window !== 'undefined') {
  window.onload = function() {
    deleteSession();
  };
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Logout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Logout</title><script type="module" src="src/lib/logout.js"><\/script><!-- Ensure the path is correct -->', "</head> <body> <!-- Sayfa i\xE7eri\u011Fi --> </body></html>"])), renderHead());
}, "E:/WEB-DEV/my-appwrite-blog-main/src/pages/logout.astro", void 0);

const $$file = "E:/WEB-DEV/my-appwrite-blog-main/src/pages/logout.astro";
const $$url = "/logout";

export { $$Logout as default, $$file as file, $$url as url };
