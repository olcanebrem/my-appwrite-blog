import { a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from './astro/server_CpAE0SO5.mjs';
import 'kleur/colors';
import { $ as $$BlogHeader, a as $$BlogCard } from './blog-card_D-3ybPlR.mjs';
import { $ as $$MainLayout } from './main-layout_ChRXTkAN.mjs';
import { g as getPosts } from './fetchers_DYmvlMtg.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getPosts();
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Static Blog" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="container py-10"> ${renderComponent($$result2, "BlogHeader", $$BlogHeader, { "title": "Blog" })} <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-9 md:gap-y-11 lg:gap-y-16 lg:gap-x-8"> ${posts.map((post) => renderTemplate`${renderComponent($$result2, "BlogCard", $$BlogCard, { ...post })}`)} </div> </section> ` })}`;
}, "E:/WEB-DEV/astro-nomy-master/src/pages/blog/index.astro", void 0);

const $$file = "E:/WEB-DEV/astro-nomy-master/src/pages/blog/index.astro";
const $$url = "/blog";

export { $$Index as default, $$file as file, $$url as url };
