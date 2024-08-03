import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, g as renderTransition, b as renderComponent } from './astro/server_CpAE0SO5.mjs';
import 'kleur/colors';
import 'clsx';
import { f as formatDate } from './button_C-qHfKLq.mjs';
/* empty css                              */
import { $ as $$PageHeader } from './page-header_DjIJk5Ov.mjs';
import { $ as $$DocsLayout } from './docs-layout_D-xMZNju.mjs';
import { b as getGuides } from './fetchers_DYmvlMtg.mjs';

const $$Astro$1 = createAstro("https://astro-nomy.vercel.app");
const $$GuideCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$GuideCard;
  const slug = Astro2.props.slug;
  const guide = Astro2.props.data;
  return renderTemplate`${maybeRenderHead()}<article class="group relative rounded-lg border p-6 shadow-md transition-shadow hover:shadow-lg"> ${guide.featured && renderTemplate`<span class="absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-medium">
Featured
</span>`} <div class="flex flex-col justify-between space-y-4"> <div class="space-y-2"> <h2 class="font-heading text-2xl"${addAttribute(renderTransition($$result, "r4up6nez", "", "title-" + slug), "data-astro-transition-scope")}> ${guide.title} </h2> ${guide.description && renderTemplate`<p class="text-muted-foreground"${addAttribute(renderTransition($$result, "zoreth3s", "", "desc-" + slug), "data-astro-transition-scope")}> ${guide.description} </p>`} </div> ${guide.pubDate && renderTemplate`<span class="font-medium text-sm text-muted-foreground"${addAttribute(renderTransition($$result, "aomflevs", "", "date-" + slug), "data-astro-transition-scope")}> ${formatDate(guide.pubDate)} </span>`} </div> <a${addAttribute(`/guides/${slug}/`, "href")} class="absolute inset-0"> <span class="sr-only">View</span> </a> </article>`;
}, "E:/WEB-DEV/astro-nomy-master/src/components/cards/guide-card.astro", "self");

const $$Astro = createAstro("https://astro-nomy.vercel.app");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const guides = await getGuides();
  return renderTemplate`${renderComponent($$result, "DocsLayout", $$DocsLayout, { "title": "Blog", "description": "Lorem ipsum dolor sit amet" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="container max-w-6xl py-10"> ${renderComponent($$result2, "DocsPageHeader", $$PageHeader, { "heading": "Guides", "text": "This section includes end-to-end guides for developing Astro v4 apps." })} ${guides?.length ? renderTemplate`<div class="grid gap-4 md:grid-cols-2 md:gap-6"> ${guides.map((guide) => renderTemplate`${renderComponent($$result2, "GuideCard", $$GuideCard, { ...guide })}`)} </div>` : renderTemplate`<p>No guides published.</p>`} </section> ` })}`;
}, "E:/WEB-DEV/astro-nomy-master/src/pages/guides/index.astro", void 0);

const $$file = "E:/WEB-DEV/astro-nomy-master/src/pages/guides/index.astro";
const $$url = "/guides";

export { $$Index as default, $$file as file, $$url as url };
