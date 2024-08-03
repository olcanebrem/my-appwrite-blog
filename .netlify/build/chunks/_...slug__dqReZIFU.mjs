import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, d as addAttribute, g as renderTransition, e as renderSlot } from './astro/server_CpAE0SO5.mjs';
import 'kleur/colors';
import { B as Badge } from './sheet-mobile-nav_DnDL180U.mjs';
import { a as cn, d as buttonVariants, $ as $$Icon, f as formatDate } from './button_C-qHfKLq.mjs';
import { $ as $$Image } from './_astro_assets_BlGe64cW.mjs';
import { $ as $$MainLayout } from './main-layout_ChRXTkAN.mjs';
/* empty css                              */
import { g as getCollection } from './_astro_content_CRwJHh3m.mjs';

const $$Astro$1 = createAstro("https://astro-nomy.vercel.app");
const $$BlogPost = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const slug = Astro2.props.slug;
  const { title, description, pubDate, updatedDate, cover, category } = Astro2.props.data;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="relative container max-w-screen-md py-10"> <button onclick="history.back()"${addAttribute(cn(
    buttonVariants({ variant: "ghost" }),
    "absolute left-[-200px] top-10 hidden xl:inline-flex text-muted-foreground"
  ), "class")}${addAttribute(renderTransition($$result2, "ks7i2azy", "slide", ""), "data-astro-transition-scope")}> ${renderComponent($$result2, "Icon", $$Icon, { "name": "lucide:chevron-left", "class": "mr-2 size-4" })} ${" "}Back
</button> <article class="prose dark:prose-invert max-w-none"> <a${addAttribute(`/blog/category/${category}`, "href")}${addAttribute(renderTransition($$result2, "4rjw2hgd", "", `badge-cat-${slug}`), "data-astro-transition-scope")}> ${renderComponent($$result2, "Badge", Badge, { "radius": "md", "className": "capitalize" }, { "default": ($$result3) => renderTemplate`${category}` })} </a> ${renderComponent($$result2, "Image", $$Image, { "class": "rounded-xl overflow-hidden my-6", "width": 720, "height": 360, "src": cover, "alt": title, "data-astro-transition-scope": renderTransition($$result2, "3fmipmlo", "", `img-${slug}`) })} <div class="flex items-center justify-between"> <span class="font-medium text-muted-foreground"${addAttribute(renderTransition($$result2, "5hio3otc", "", `date-${slug}`), "data-astro-transition-scope")}> ${formatDate(pubDate)} ${updatedDate && renderTemplate`<span>- Last updated on ${formatDate(updatedDate)}</span>`} </span> </div> <h1 class="font-heading text-4xl my-4"${addAttribute(renderTransition($$result2, "3mzj52bz", "", `title-${slug}`), "data-astro-transition-scope")}> ${title} </h1> <p>${description}</p> <hr class="my-6"> ${renderSlot($$result2, $$slots["default"])} </article> </div> ` })}`;
}, "E:/WEB-DEV/astro-nomy-master/src/layouts/blog-post.astro", "self");

const $$Astro = createAstro("https://astro-nomy.vercel.app");
async function getStaticPaths() {
  const posts = await getCollection("blog");
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: post
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const post = Astro2.props;
  const slug = Astro2.params.slug;
  const { Content } = await post.render();
  if (!slug || !post) {
    return new Response(null, {
      status: 404,
      statusText: "Not found"
    });
  }
  return renderTemplate`${renderComponent($$result, "BlogPostLayout", $$BlogPost, { ...post }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "E:/WEB-DEV/astro-nomy-master/src/pages/blog/[...slug].astro", void 0);

const $$file = "E:/WEB-DEV/astro-nomy-master/src/pages/blog/[...slug].astro";
const $$url = "/blog/[...slug]";

export { $$ as default, $$file as file, getStaticPaths, $$url as url };
