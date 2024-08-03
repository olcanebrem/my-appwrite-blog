import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, s as spreadAttributes, b as renderComponent } from './astro/server_CpAE0SO5.mjs';
import 'kleur/colors';
import { I as Icons, n as navMenuConfig } from './sheet-mobile-nav_DnDL180U.mjs';
import { $ as $$Image } from './_astro_assets_BlGe64cW.mjs';
import { a as cn } from './button_C-qHfKLq.mjs';
import { $ as $$PageHeader } from './page-header_DjIJk5Ov.mjs';
import { $ as $$MainLayout } from './main-layout_ChRXTkAN.mjs';

const $$Astro$1 = createAstro("https://astro-nomy.vercel.app");
const $$ExampleGrid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ExampleGrid;
  const { title, items } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="" class="grid grid-cols-3 xl:grid-cols-4 py-8 gap-x-8 gap-y-6"> <h3 class="text-lg text-foreground font-semibold col-span-3 xl:col-span-1"> ${title} </h3> <div class="col-span-3 grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-y-7 lg:gap-x-7"> ${items && items.map((item) => renderTemplate`<a${addAttribute(item.disabled ? void 0 : item.href, "href")}${addAttribute(cn(
    "group bg-background rounded-xl overflow-hidden card_border",
    item.disabled && "cursor-default"
  ), "class")}${spreadAttributes(item.forceReload ? { "data-astro-reload": true } : {})}> <div class="relative aspect-[4/2]"> ${renderComponent($$result, "Image", $$Image, { "loading": "eager", "width": 740, "height": 350, "src": item.image ? item.image : "/images/examples/placeholder.jpg", "alt": "placeholder", "class": "size-full object-cover object-top" })} ${item.disabled && renderTemplate`<p class="absolute z-10 top-3 right-3 text-foreground bg-gray-900 bg-opacity-35 rounded-full flex items-center justify-center p-1.5"> <span class="sr-only">Work on it actually!</span> ${renderComponent($$result, "Icons.wrenchSrewdriver", Icons.wrenchSrewdriver, { "className": "size-6 text-white" })} </p>`} </div> <div class="py-3 px-4 border-t"> <p class="font-medium text-foreground mb-1.5">${item.title}</p> <p class="text-sm text-muted-foreground/85">${item.description}</p> </div> </a>`)} </div> </div>`;
}, "E:/WEB-DEV/astro-nomy-master/src/components/example-grid.astro", void 0);

const $$Astro = createAstro("https://astro-nomy.vercel.app");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const OpenUSD = navMenuConfig.OpenUSD[0].items;
  const OpenUSD2 = navMenuConfig.OpenUSD[0].items;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-background-200"> <section class="container py-12"> ${renderComponent($$result2, "PageHeader", $$PageHeader, { "heading": "Discovery", "text": "Differents pages and examples apps built with Astro v4.5, shadcn/ui & react js. Fully OpenUSD Source." })} ${renderComponent($$result2, "ExampleGrid", $$ExampleGrid, { "title": "OpenUSD", "items": OpenUSD })} ${renderComponent($$result2, "ExampleGrid", $$ExampleGrid, { "title": "OpenUSD2", "items": OpenUSD2 })} </section> </div> ` })}`;
}, "E:/WEB-DEV/astro-nomy-master/src/pages/index.astro", void 0);

const $$file = "E:/WEB-DEV/astro-nomy-master/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
