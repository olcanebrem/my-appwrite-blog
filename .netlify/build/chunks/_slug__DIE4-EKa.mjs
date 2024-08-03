import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, d as addAttribute, g as renderTransition } from './astro/server_CpAE0SO5.mjs';
import 'kleur/colors';
import { g as getCollection } from './_astro_content_CRwJHh3m.mjs';
import { $ as $$MainLayout } from './main-layout_ChRXTkAN.mjs';
import { a as cn, d as buttonVariants, $ as $$Icon, f as formatDate } from './button_C-qHfKLq.mjs';
import { B as Badge } from './sheet-mobile-nav_DnDL180U.mjs';
/* empty css                              */

const $$Astro = createAstro("https://astro-nomy.vercel.app");
async function getStaticPaths() {
  const releases = await getCollection("releases");
  return releases.map((release) => ({
    params: { slug: release.slug },
    props: { release }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { release } = Astro2.props;
  const { Content } = await release.render();
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": release.data.title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="container max-w-screen-lg pt-12"> <div class="flex flex-col max-md:gap-y-4 md:flex-row w-full"> <div class="md:basis-32 lg:basis-56 shrink-0 grow-0"> <div class="flex md:sticky md:top-24 w-auto mr-6"> <div class="flex flex-col gap-y-2 pb-4"> <button onclick="history.back()"${addAttribute(cn(
    buttonVariants({ variant: "ghost" }),
    "text-muted-foreground mb-5"
  ), "class")}${addAttribute(renderTransition($$result2, "o5lw2n6i", "slide", ""), "data-astro-transition-scope")}> ${renderComponent($$result2, "Icon", $$Icon, { "name": "lucide:chevron-left", "class": "mr-2 size-4" })} ${" "}Back
</button> ${renderComponent($$result2, "Badge", Badge, { "variant": "default", "radius": "lg", "className": "w-14 h-7 justify-center text-md bg_release_version text-white" }, { "default": ($$result3) => renderTemplate`${release.data.versionNumber}` })} <span class="text-sm text-muted-foreground"> ${formatDate(release.data.date)} </span> </div> </div> </div> <div class="prose dark:prose-invert prose-img:rounded-3xl max-w-none w-full pb-24"> ${renderComponent($$result2, "Content", Content, {})} </div> </div> </section> ` })}`;
}, "E:/WEB-DEV/astro-nomy-master/src/pages/releases/[slug].astro", "self");

const $$file = "E:/WEB-DEV/astro-nomy-master/src/pages/releases/[slug].astro";
const $$url = "/releases/[slug]";

export { $$slug as default, $$file as file, getStaticPaths, $$url as url };
