import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, s as spreadAttributes } from './astro/server_CpAE0SO5.mjs';
import { a as cn } from './button_C-qHfKLq.mjs';
import 'clsx';

const $$Astro = createAstro("https://astro-nomy.vercel.app");
const $$PageHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PageHeader;
  const { heading, text, className, ...attrs } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(cn("space-y-4", className), "class")}${spreadAttributes(attrs)}> <h1 class="inline-block font-heading text-4xl"> ${heading} </h1> ${text && renderTemplate`<p class="text-muted-foreground">${text}</p>`} </div> <hr class="my-4">`;
}, "E:/WEB-DEV/astro-nomy-master/src/components/page-header.astro", void 0);

export { $$PageHeader as $ };
