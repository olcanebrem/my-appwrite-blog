import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, d as addAttribute, g as renderTransition, e as renderSlot } from './astro/server_CpAE0SO5.mjs';
import 'kleur/colors';
import { g as getTableOfContents, D as DashboardTableOfContents, M as MdxComponents } from './toc_eKLH-4rt.mjs';
import { f as formatDate, a as cn, d as buttonVariants, $ as $$Icon } from './button_C-qHfKLq.mjs';
import { $ as $$DocsLayout } from './docs-layout_D-xMZNju.mjs';
/* empty css                              */
import { g as getCollection } from './_astro_content_CRwJHh3m.mjs';

const $$Astro$1 = createAstro("https://astro-nomy.vercel.app");
const $$GuidePost = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$GuidePost;
  const guide = Astro2.props;
  const slug = guide.slug;
  const { title, description, pubDate } = guide.data;
  const toc = await getTableOfContents(guide.body);
  return renderTemplate`${renderComponent($$result, "DocsLayout", $$DocsLayout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container max-w-5xl py-6 lg:grid lg:grid-cols-[1fr_300px] lg:gap-10 lg:py-10 xl:gap-20"> <article class="prose dark:prose-invert max-w-none"> <span class="font-medium text-sm text-muted-foreground"${addAttribute(renderTransition($$result2, "4gvfz6xl", "", "date-" + slug), "data-astro-transition-scope")}> ${formatDate(pubDate)} </span> <h1 class="font-heading text-4xl my-4"${addAttribute(renderTransition($$result2, "srak3jhj", "", "title-" + slug), "data-astro-transition-scope")}> ${title} </h1> <p class="text-muted-foreground"${addAttribute(renderTransition($$result2, "sugzexu7", "", "desc-" + slug), "data-astro-transition-scope")}> ${description} </p> <hr class="my-6"> ${renderSlot($$result2, $$slots["default"])} <hr class="flex md:hidden my-4"> <div class="flex md:hidden justify-start py-6 lg:py-10"> <a href="/guides"${addAttribute(cn(buttonVariants({ variant: "ghost" })), "class")}> ${renderComponent($$result2, "Icon", $$Icon, { "name": "lucide:chevron-left", "class": "mr-2 size-4" })}
See all guides
</a> </div> </article> <div class="hidden text-sm lg:block"> <div class="sticky top-18 -mt-10 max-h-[calc(var(--vh)-4rem)] overflow-y-auto pt-10"${addAttribute(renderTransition($$result2, "zb4ovzvs", "slide", ""), "data-astro-transition-scope")}> ${renderComponent($$result2, "DashboardTableOfContents", DashboardTableOfContents, { "toc": toc, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/toc", "client:component-export": "DashboardTableOfContents" })} </div> </div> </main> ` })}`;
}, "E:/WEB-DEV/astro-nomy-master/src/layouts/guide-post.astro", "self");

const $$Astro = createAstro("https://astro-nomy.vercel.app");
async function getStaticPaths() {
  const guides = await getCollection("guides");
  return guides.map((guide) => ({
    params: { slug: guide.slug },
    props: guide
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const guide = Astro2.props;
  const slug = Astro2.params.slug;
  const { Content } = await guide.render();
  if (!slug || !guide) {
    return new Response(null, {
      status: 404,
      statusText: "Not found"
    });
  }
  return renderTemplate`${renderComponent($$result, "GuidePostLayout", $$GuidePost, { ...guide }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, { "components": MdxComponents })} ` })}`;
}, "E:/WEB-DEV/astro-nomy-master/src/pages/guides/[...slug].astro", void 0);

const $$file = "E:/WEB-DEV/astro-nomy-master/src/pages/guides/[...slug].astro";
const $$url = "/guides/[...slug]";

export { $$ as default, $$file as file, getStaticPaths, $$url as url };
