import { a as createComponent, r as renderTemplate, f as renderHead, e as renderSlot } from './astro/server_CpAE0SO5.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */

const $$Layout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en" data-astro-cid-uvny4fad> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>ArtStation Clone</title><link rel="stylesheet" href="/styles.css">${renderHead()}</head> <body data-astro-cid-uvny4fad> ${renderSlot($$result, $$slots["default"])} <div id="popup" class="popup" data-astro-cid-uvny4fad> <span id="closePopup" class="close" data-astro-cid-uvny4fad>&times;</span> <div class="popup-content" data-astro-cid-uvny4fad> <img id="popupImg" src="" alt="Popup Image" data-astro-cid-uvny4fad> </div> </div>  </body> </html> `;
}, "E:/WEB-DEV/astro-nomy-master/src/pages/layout.astro", void 0);

const $$file = "E:/WEB-DEV/astro-nomy-master/src/pages/layout.astro";
const $$url = "/layout";

export { $$Layout as default, $$file as file, $$url as url };
