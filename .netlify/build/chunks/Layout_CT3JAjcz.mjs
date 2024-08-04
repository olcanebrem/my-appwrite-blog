import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, f as renderHead, e as renderComponent, d as renderSlot } from './astro/server_BNGISfs7.mjs';
import 'kleur/colors';
import { $ as $$Nav, a as $$Footer } from './Footer_d9JMhraC.mjs';
/* empty css                         */

const $$Astro = createAstro("https://olcanebrem.com");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title = "My Blog" } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="This blog is full of wisdom."><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> <div> ${renderComponent($$result, "Nav", $$Nav, {})} <main> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </div> </body></html>`;
}, "E:/WEB-DEV/astro-nomy-master/src/pages/layouts/Layout.astro", void 0);

const $$file = "E:/WEB-DEV/astro-nomy-master/src/pages/layouts/Layout.astro";
const $$url = "/layouts/Layout";

export { $$Layout as default, $$file as file, $$url as url };
