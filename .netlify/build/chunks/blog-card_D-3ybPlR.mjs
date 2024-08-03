import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent, d as addAttribute, g as renderTransition } from './astro/server_CpAE0SO5.mjs';
import 'kleur/colors';
import { a as cn, d as buttonVariants, $ as $$Icon, f as formatDate } from './button_C-qHfKLq.mjs';
import { a as getCategories } from './fetchers_DYmvlMtg.mjs';
import { B as Badge } from './sheet-mobile-nav_DnDL180U.mjs';
import { $ as $$Image } from './_astro_assets_BlGe64cW.mjs';
/* empty css                              */

const $$Astro$1 = createAstro("https://astro-nomy.vercel.app");
const $$BlogHeader = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogHeader;
  const categories = await getCategories();
  const { title } = Astro2.props;
  const { category } = Astro2.params;
  return renderTemplate`${maybeRenderHead()}<h1 class="inline-block font-heading text-4xl">${title}</h1> <div class="flex items-start justify-between my-6 max-md:gap-4"> <div class="flex items-center lg:w-full max-w-xs h-10 rounded-md px-2 lg:px-3 border text-muted-foreground"> ${renderComponent($$result, "Icon", $$Icon, { "name": "ri:search-line", "class": "size-5" })} <span class="text-sm ml-2 hidden lg:flex">Search (coming soon)</span> </div> ${categories?.length ? renderTemplate`<ul class="flex snap-x snap-mandatory overflow-auto items-center space-x-2 lg:space-x-2.5 pb-2"> <li class="flex-shrink-0 snap-start"> <a${addAttribute(`/blog`, "href")}${addAttribute(cn(
    !category ? "select-none" : "",
    buttonVariants({
      variant: !category ? "default" : "outline"
    })
  ), "class")}>
All posts
</a> </li> ${categories.map((item) => renderTemplate`<li class="flex-shrink-0 snap-start"> <a${addAttribute(`/blog/category/${item}`, "href")}${addAttribute(cn(
    "capitalize",
    item === category ? "select-none" : "",
    buttonVariants({
      variant: item === category ? "default" : "outline"
    })
  ), "class")}> ${item} </a> </li>`)} </ul>` : renderTemplate`<div></div>`} </div> <hr class="mb-7">`;
}, "E:/WEB-DEV/astro-nomy-master/src/components/blog-header.astro", void 0);

const $$Astro = createAstro("https://astro-nomy.vercel.app");
const $$BlogCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogCard;
  const post = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="group space-y-4"> <a${addAttribute(`/blog/${post.slug}/`, "href")} class="flex h-52 group-hover:-translate-y-2 group-hover:shadow-xl transition duration-300"> ${renderComponent($$result, "Image", $$Image, { "loading": "eager", "class": "w-full h-full object-cover rounded-xl overflow-hidden", "width": 720, "height": 360, "src": post.data.cover, "alt": "descriptive text", "data-astro-transition-scope": renderTransition($$result, "ljnepo5n", "", `img-${post.slug}`) })} </a> <div class="flex items-center justify-between"> <a${addAttribute(`/blog/category/${post.data.category}`, "href")}${addAttribute(renderTransition($$result, "bsqbkoyj", "", "badge-cat-" + post.slug), "data-astro-transition-scope")}> ${renderComponent($$result, "Badge", Badge, { "radius": "md", "className": "capitalize" }, { "default": ($$result2) => renderTemplate`${post.data.category}` })} </a> <span class="font-medium text-muted-foreground"${addAttribute(renderTransition($$result, "lwwqn3fc", "", "date-" + post.slug), "data-astro-transition-scope")}> ${formatDate(post.data.pubDate)} </span> </div> <div> <a${addAttribute(`/blog/${post.slug}/`, "href")} class="group-hover:underline"> <h2 class="font-heading text-xl md:text-2xl leading-snug line-clamp-3"${addAttribute(renderTransition($$result, "6mogw5uh", "", "title-" + post.slug), "data-astro-transition-scope")}> ${post.data.title} </h2> </a> </div> </article>`;
}, "E:/WEB-DEV/astro-nomy-master/src/components/cards/blog-card.astro", "self");

export { $$BlogHeader as $, $$BlogCard as a };
