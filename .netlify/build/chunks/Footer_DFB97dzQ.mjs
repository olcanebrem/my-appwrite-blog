import { a as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderComponent } from './astro/server_BNGISfs7.mjs';
import 'kleur/colors';
import $$Container from './Container_BGFXVo90.mjs';

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="mt-20"> ${renderComponent($$result, "Container", $$Container, { "class": "p-6" })} </footer>`;
}, "E:/WEB-DEV/astro-nomy-master/src/pages/components/Footer.astro", void 0);

const $$file = "E:/WEB-DEV/astro-nomy-master/src/pages/components/Footer.astro";
const $$url = "/components/Footer";

export { $$Footer as default, $$file as file, $$url as url };
