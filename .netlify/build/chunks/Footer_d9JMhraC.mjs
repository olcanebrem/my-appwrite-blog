import { a as createComponent, r as renderTemplate, f as renderHead, e as renderComponent, m as maybeRenderHead } from './astro/server_BNGISfs7.mjs';
import 'kleur/colors';
import { $ as $$Container } from './Container_BTSHVv9T.mjs';
/* empty css                         */

const $$Nav = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>OpenUSD</title>${renderHead()}</head> <body> <nav> ${renderComponent($$result, "Container", $$Container, { "class": "flex justify-between items-center pt-6 pb-12 md:py-2" }, { "default": ($$result2) => renderTemplate` <div style="display: flex; justify-content: space-between;"> <p style="padding: 20px;"> <a href="/posts/new" class="inline-flex gap-2 items-center font-semibold hover:text-blue-500"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"> <path fill="currentColor" d="M12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20m-4-5v-1.65q0-.2.075-.387t.225-.338l5.225-5.2q.225-.225.5-.325t.55-.1q.3 0 .575.113t.5.337l.925.925q.2.225.313.5t.112.55q0 .275-.1.563t-.325.512l-5.2 5.2q-.15.15-.337.225T10.65 16H9q-.425 0-.712-.288T8 15m7.5-5.575l-.925-.925zm-6 5.075h.95l3.025-3.05l-.45-.475l-.475-.45L9.5 13.55zm3.525-3.525l-.475-.45l.925.925z"></path> </svg>
New Post
</a> </p> <p style="padding: 20px;"> <a href="/profile" class="inline-flex gap-2 items-center font-semibold hover:text-blue-500"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"> <path fill="currentColor" d="M12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20m-4-5v-1.65q0-.2.075-.387t.225-.338l5.225-5.2q.225-.225.5-.325t.55-.1q.3 0 .575.113t.5.337l.925.925q.2.225.313.5t.112.55q0 .275-.1.563t-.325.512l-5.2 5.2q-.15.15-.337.225T10.65 16H9q-.425 0-.712-.288T8 15m7.5-5.575l-.925-.925zm-6 5.075h.95l3.025-3.05l-.45-.475l-.475-.45L9.5 13.55zm3.525-3.525l-.475-.45l.925.925z"></path> </svg>
Profile
</a> </p> </div> <div> <center> <div class="command-box"> <div style="display: flex; align-items: center"> <h1 id="usernameDisplay">You are Surfing as <strong>Guest</strong></h1> <br> </div> <a href="/logout" id="logoutButton" class="inline-flex gap-2 items-center font-semibold hover:text-blue-500" style="display: none;">Logout</a> <div></div> </div> </center> </div> <div> <center> <div class="command-box"> <div style="inline-flex"> <a href="/login" class="inline-flex  hover:text-foreground/80 transition-colors">Log In</a> <div></div> </div> </div> </center> </div> ` })} </nav>  </body> </html>`;
}, "E:/WEB-DEV/astro-nomy-master/src/components/Nav.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="mt-20"> ${renderComponent($$result, "Container", $$Container, { "class": "p-6" })} </footer>`;
}, "E:/WEB-DEV/astro-nomy-master/src/components/Footer.astro", void 0);

export { $$Nav as $, $$Footer as a };
