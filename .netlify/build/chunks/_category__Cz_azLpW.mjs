import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from './astro/server_CpAE0SO5.mjs';
import 'kleur/colors';
import { $ as $$BlogHeader, a as $$BlogCard } from './blog-card_D-3ybPlR.mjs';
import { $ as $$MainLayout } from './main-layout_ChRXTkAN.mjs';
import { c as capitalizer } from './button_C-qHfKLq.mjs';
import { g as getCollection } from './_astro_content_CRwJHh3m.mjs';

const $$Astro = createAstro("https://astro-nomy.vercel.app");
async function getStaticPaths() {
  const allPosts = await getCollection("blog");
  const uniqueCategories = [
    ...new Set(allPosts.map((post) => post.data.category).flat())
  ];
  return uniqueCategories.map((category) => {
    const filteredPosts = allPosts.filter((post) => post.data.category.includes(category)).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
    return {
      params: { category },
      props: { posts: filteredPosts }
    };
  });
}
const $$category = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$category;
  const { category } = Astro2.params;
  const { posts } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": `${capitalizer(category)} | Blog`, "description": `All posts for ${category} category` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="container py-10"> ${renderComponent($$result2, "BlogHeader", $$BlogHeader, { "title": `Posts by ${category} category` })} <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-9 md:gap-y-16 lg:gap-x-8"> ${posts.map((post) => renderTemplate`${renderComponent($$result2, "BlogCard", $$BlogCard, { ...post })}`)} </div> </section> ` })}`;
}, "E:/WEB-DEV/astro-nomy-master/src/pages/blog/category/[category].astro", void 0);

const $$file = "E:/WEB-DEV/astro-nomy-master/src/pages/blog/category/[category].astro";
const $$url = "/blog/category/[category]";

export { $$category as default, $$file as file, getStaticPaths, $$url as url };
