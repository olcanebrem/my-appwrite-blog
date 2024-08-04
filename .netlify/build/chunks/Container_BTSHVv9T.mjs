import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderSlot } from './astro/server_BNGISfs7.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://olcanebrem.com");
const $$Container = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Container;
  const { ...attrs } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`w-full max-w-5xl my-0 mx-auto px-6 md:px-12 ${attrs.class}`, "class")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "E:/WEB-DEV/astro-nomy-master/src/components/Container.astro", void 0);

export { $$Container as $ };
