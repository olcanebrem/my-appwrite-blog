import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, f as renderSlot, b as createAstro, g as renderComponent, d as renderHead } from './astro/server_BI2ss-O0.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Astro$2 = createAstro();
const $$Container = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Container;
  const { ...attrs } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`w-full max-w-5xl my-0 mx-auto px-6 md:px-12 ${attrs.class}`, "class")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "E:/WEB-DEV/my-appwrite-blog-main/src/components/Container.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$Nav = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Nav;
  return renderTemplate(_a || (_a = __template(["", "<nav> ", ' <script type="module" src="src/lib/username.js"><\/script> </nav>  <div> <center> <button id="theme-toggle">Toggle Theme</button> <h1>Astro Dark/Light Theme Example</h1> </center> </div>'])), maybeRenderHead(), renderComponent($$result, "Container", $$Container, { "class": "flex justify-between items-center pt-6 pb-12 md:py-16" }, { "default": ($$result2) => renderTemplate` <p> <a href="/" class="text-4xl font-bold   hover:text-slate-900 dark:hover:text-gray-100 drop-shadow-[0_2px_0px_rgba(255,255,255,1)] dark:drop-shadow-[0_2px_0px_rgba(0,0,0,1)]">
My Blog
</a> </p> <p class=""${addAttribute({ marginLeft: "300px" }, "style")}> <a href="/posts/new" class="inline-flex gap-2 items-center font-semibold  hover:text-blue-500"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20m-4-5v-1.65q0-.2.075-.387t.225-.338l5.225-5.2q.225-.225.5-.325t.55-.1q.3 0 .575.113t.5.337l.925.925q.2.225.313.5t.112.55q0 .275-.1.563t-.325.512l-5.2 5.2q-.15.15-.337.225T10.65 16H9q-.425 0-.712-.288T8 15m7.5-5.575l-.925-.925zm-6 5.075h.95l3.025-3.05l-.45-.475l-.475-.45L9.5 13.55zm3.525-3.525l-.475-.45l.925.925z"></path></svg>
New Post
</a> </p> <p class=""> <a href="/login" class="inline-flex gap-2 items-center font-semibold  hover:text-blue-500"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20m-4-5v-1.65q0-.2.075-.387t.225-.338l5.225-5.2q.225-.225.5-.325t.55-.1q.3 0 .575.113t.5.337l.925.925q.2.225.313.5t.112.55q0 .275-.1.563t-.325.512l-5.2 5.2q-.15.15-.337.225T10.65 16H9q-.425 0-.712-.288T8 15m7.5-5.575l-.925-.925zm-6 5.075h.95l3.025-3.05l-.45-.475l-.475-.45L9.5 13.55zm3.525-3.525l-.475-.45l.925.925z"></path></svg>
Sign In
</a> </p> <div> <center> <h1 id="username-display">You are able to Log in</h1> <br> <a href="/logout" class="inline-flex gap-2 items-center font-semibold  hover:text-blue-500" style="display: none;">Logout</a> </center> </div> ` }));
}, "E:/WEB-DEV/my-appwrite-blog-main/src/components/Nav.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="mt-20"> ${renderComponent($$result, "Container", $$Container, { "class": "p-6" })} </footer>`;
}, "E:/WEB-DEV/my-appwrite-blog-main/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title = "My Blog" } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="This blog is full of wisdom."><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> <div class="grid grid-rows-[auto_1fr_auto] h-screen"> ${renderComponent($$result, "Nav", $$Nav, {})} <main> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </div> </body></html>`;
}, "E:/WEB-DEV/my-appwrite-blog-main/src/layouts/Layout.astro", void 0);

export { $$Container as $, $$Layout as a };
