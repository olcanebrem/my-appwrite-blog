import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, d as addAttribute } from './astro/server_CpAE0SO5.mjs';
import 'kleur/colors';
import { $ as $$PageHeader } from './page-header_DjIJk5Ov.mjs';
import { B as Badge } from './sheet-mobile-nav_DnDL180U.mjs';
import { $ as $$MainLayout } from './main-layout_ChRXTkAN.mjs';
import { f as formatDate } from './button_C-qHfKLq.mjs';
import { g as getCollection } from './_astro_content_CRwJHh3m.mjs';

const $$Astro = createAstro("https://astro-nomy.vercel.app");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const posts = await getCollection("releases");
  posts.sort((a, b) => +b.data.date - +a.data.date);
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Changelog" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="container max-w-screen-lg space-y-6 pt-12"> ${renderComponent($$result2, "PageHeader", $$PageHeader, { "heading": "Changelog", "text": "Reproduce Astro Starlog template with Tailwind CSS & shadcn/ui." })} <ul class="pt-6"> ${posts.map((post) => renderTemplate`<li class="flex flex-col max-md:gap-y-4 md:flex-row w-full"> <div class="md:basis-32 lg:basis-56 shrink-0 grow-0"> <div class="md:sticky md:top-24 w-auto mr-6"> <a${addAttribute(`/releases/${post.slug}`, "href")} class="flex flex-col gap-y-2 pb-4"> ${renderComponent($$result2, "Badge", Badge, { "variant": "default", "radius": "lg", "className": "w-14 h-7 justify-center text-md bg_release_version text-white" }, { "default": ($$result3) => renderTemplate`${post.data.versionNumber}` })} <span class="text-sm text-muted-foreground"> ${formatDate(post.data.date)} </span> </a> </div> </div> <div class="prose dark:prose-invert prose-img:rounded-3xl max-w-none w-full pb-24"> ${post.render().then(({ Content }) => renderTemplate`${renderComponent($$result2, "Content", Content, {})}`)} </div> </li>`)} </ul> </section> ` })}`;
}, "E:/WEB-DEV/astro-nomy-master/src/pages/releases/index.astro", void 0);

const $$file = "E:/WEB-DEV/astro-nomy-master/src/pages/releases/index.astro";
const $$url = "/releases";

export { $$Index as default, $$file as file, $$url as url };
