import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, b as renderComponent } from './astro/server_CpAE0SO5.mjs';
import 'kleur/colors';
import { g as getTableOfContents, M as MdxComponents, D as DashboardTableOfContents } from './toc_eKLH-4rt.mjs';
import 'clsx';
import { a as cn, d as buttonVariants, $ as $$Icon } from './button_C-qHfKLq.mjs';
import { $ as $$PageHeader } from './page-header_DjIJk5Ov.mjs';
import { d as docsConfig, $ as $$DocsLayout } from './docs-layout_D-xMZNju.mjs';
import { b as ScrollArea } from './sheet-mobile-nav_DnDL180U.mjs';
import { g as getCollection } from './_astro_content_CRwJHh3m.mjs';

const $$Astro$2 = createAstro("https://astro-nomy.vercel.app");
const $$SidebarNav = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SidebarNav;
  const { items } = Astro2.props;
  const { pathname } = Astro2.url;
  return renderTemplate`${items.length ? renderTemplate`${maybeRenderHead()}<div class="w-full">${items.map((item) => renderTemplate`<div${addAttribute(cn("pb-8"), "class")}><h4 class="mb-1 rounded-md px-2 py-1 text-sm font-medium">${item.title}</h4>${item.items?.length ? renderTemplate`<div class="grid grid-flow-row auto-rows-max text-sm">${item.items.map(
    (item2) => !item2.disabled && item2.href ? renderTemplate`<a${addAttribute(item2.href, "href")}${addAttribute(cn(
      "flex w-full items-center rounded-md p-2 hover:underline",
      {
        "bg-muted": pathname === item2.href
      }
    ), "class")}${addAttribute(item2.external ? "_blank" : "", "target")}${addAttribute(item2.external ? "noreferrer" : "", "rel")}>${item2.title}</a>` : renderTemplate`<span class="flex w-full cursor-not-allowed items-center rounded-md p-2 opacity-60">${item2.title}</span>`
  )}</div>` : null}</div>`)}</div>` : null}`;
}, "E:/WEB-DEV/astro-nomy-master/src/components/layout/sidebar-nav.astro", void 0);

const $$Astro$1 = createAstro("https://astro-nomy.vercel.app");
function getPagerForDoc(slug) {
  const flattenedLinks = [...flatten(docsConfig.sidebarNav)];
  let activeIndex = flattenedLinks.findIndex(
    (link) => `/docs/${slug}` === link?.href
  );
  activeIndex = Math.max(activeIndex, 0);
  const prev = activeIndex !== 0 ? flattenedLinks[activeIndex - 1] : null;
  const next = activeIndex !== flattenedLinks.length - 1 ? flattenedLinks[activeIndex + 1] : null;
  return {
    prev,
    next
  };
}
function flatten(links) {
  return links.reduce((flat, link) => {
    return flat.concat(link.items ? flatten(link.items) : link);
  }, []);
}
const $$Pager = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Pager;
  const { slug } = Astro2.props;
  const pager = getPagerForDoc(slug);
  if (!pager) {
    return null;
  }
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-row items-center justify-between"> ${pager?.prev && renderTemplate`<a${addAttribute(pager.prev.href, "href")}${addAttribute(cn(buttonVariants({ variant: "outline" })), "class")}> ${renderComponent($$result, "Icon", $$Icon, { "name": "lucide:chevron-left", "class": "mr-2 size-4" })} ${pager.prev.title} </a>`} ${pager?.next && renderTemplate`<a${addAttribute(pager.next.href, "href")}${addAttribute(cn(buttonVariants({ variant: "outline" }), "ml-auto"), "class")}> ${pager.next.title} ${renderComponent($$result, "Icon", $$Icon, { "name": "lucide:chevron-right", "class": "ml-2 size-4" })} </a>`} </div>`;
}, "E:/WEB-DEV/astro-nomy-master/src/components/pager.astro", void 0);

const $$Astro = createAstro("https://astro-nomy.vercel.app");
async function getStaticPaths() {
  const docs = await getCollection("docs");
  return docs.map((doc) => ({
    params: { slug: doc.slug },
    props: doc
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const doc = Astro2.props;
  const slug = Astro2.params.slug;
  const toc = await getTableOfContents(doc.body);
  const { Content } = await doc.render();
  if (!slug || !doc) {
    return new Response(null, {
      status: 404,
      statusText: "Not found"
    });
  }
  return renderTemplate`${renderComponent($$result, "DocsLayout", $$DocsLayout, { "title": doc.data.title, "description": doc.data.description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container flex-1"> <div class="flex-1 md:grid md:grid-cols-[220px_1fr] md:gap-6 lg:grid-cols-[240px_1fr] lg:gap-10"> <aside class="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block"> ${renderComponent($$result2, "ScrollArea", ScrollArea, { "className": "h-full py-6 pr-6 lg:py-8", "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/ui/scroll-area", "client:component-export": "ScrollArea" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "DocsSidebarNav", $$SidebarNav, { "items": docsConfig.sidebarNav })} ` })} </aside> <main class="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]"> <div class="mx-auto w-full min-w-0"> <div class="mb-4 flex items-center space-x-1 text-sm text-muted-foreground"> <div class="truncate">Docs</div> ${renderComponent($$result2, "Icon", $$Icon, { "name": "lucide:chevron-right", "class": "size-4" })} <div class="font-medium text-foreground">${doc.data.title}</div> </div> ${renderComponent($$result2, "DocsPageHeader", $$PageHeader, { "heading": doc.data.title, "text": doc.data.description })} ${renderComponent($$result2, "Content", Content, { "components": MdxComponents })} <hr class="my-4 md:my-6"> ${renderComponent($$result2, "DocsPager", $$Pager, { "slug": doc.slug })} </div> <div class="hidden text-sm xl:block"> <div class="sticky top-18 -mt-10 max-h-[calc(var(--vh)-4rem)] overflow-y-auto pt-10"> ${renderComponent($$result2, "DashboardTableOfContents", DashboardTableOfContents, { "toc": toc, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/toc", "client:component-export": "DashboardTableOfContents" })} </div> </div> </main> </div> </div> ` })}`;
}, "E:/WEB-DEV/astro-nomy-master/src/pages/docs/[...slug].astro", void 0);

const $$file = "E:/WEB-DEV/astro-nomy-master/src/pages/docs/[...slug].astro";
const $$url = "/docs/[...slug]";

export { $$ as default, $$file as file, getStaticPaths, $$url as url };
