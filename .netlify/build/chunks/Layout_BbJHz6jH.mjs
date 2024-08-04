import { a as createComponent, r as renderTemplate, f as renderHead, d as renderSlot } from './astro/server_BNGISfs7.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */

const $$Layout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en" data-astro-cid-4htdzvtn> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title></title>${renderHead()}</head> <body data-astro-cid-4htdzvtn> ${renderSlot($$result, $$slots["default"])} <div id="popup" class="popup" data-astro-cid-4htdzvtn> <span id="closePopup" class="close" data-astro-cid-4htdzvtn>&times;</span> <div class="popup-content" data-astro-cid-4htdzvtn> <img id="popupImg" src="" alt="Popup Image" data-astro-cid-4htdzvtn> </div> </div>  </body> </html> `;
}, "E:/WEB-DEV/astro-nomy-master/src/pages/Layout.astro", void 0);

const $$file = "E:/WEB-DEV/astro-nomy-master/src/pages/Layout.astro";
const $$url = "/Layout";

export { $$Layout as default, $$file as file, $$url as url };
