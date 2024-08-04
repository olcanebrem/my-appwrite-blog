import { a as createComponent, r as renderTemplate, f as renderHead } from './astro/server_BNGISfs7.mjs';
import 'kleur/colors';
import 'clsx';
import { Account, AppwriteException } from 'appwrite';
import { c as client } from './appwrite_guZ3eTnd.mjs';

// src/lib/logout.js

async function deleteSession() {
  const account = new Account(client);

  try {
    const session = await account.getSession('current');
    const jwtToken = session.jwt;
    console.log('JWT Token:', jwtToken);
    console.log(session);

    await account.deleteSession('current');
    sessionStorage.removeItem('username');
    console.log('Current session deleted');
    window.location.href = "../";

    
  } catch (error) {
    console.log("Session not registered");
    // Redirect on success
    window.location.href = "../";

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

const $$Logout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Logout</title>${renderHead()}</head> <body> <!-- Sayfa içeriği --> </body></html>`;
}, "E:/WEB-DEV/astro-nomy-master/src/pages/logout.astro", void 0);

const $$file = "E:/WEB-DEV/astro-nomy-master/src/pages/logout.astro";
const $$url = "/logout";

export { $$Logout as default, $$file as file, $$url as url };
