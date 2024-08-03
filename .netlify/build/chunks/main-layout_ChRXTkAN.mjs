import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, d as addAttribute, e as renderSlot } from './astro/server_CpAE0SO5.mjs';
import 'kleur/colors';
import { $ as $$Header, M as MainNavigationMenu, S as SheetMobileNav, n as navMenuConfig, a as $$Footer } from './sheet-mobile-nav_DnDL180U.mjs';
import { $ as $$Icon, T as ThemeToggle, a as cn, b as $$BaseLayout } from './button_C-qHfKLq.mjs';
import { s as siteConfig } from './site_tOMiNNJo.mjs';

const $$Astro = createAstro("https://astro-nomy.vercel.app");
const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const { title, description, mainClass } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "className": "border-b" }, { "left-header": ($$result3) => renderTemplate`${renderComponent($$result3, "MainNavigationMenu", MainNavigationMenu, { "slot": "left-header", "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/main-navigation-menu", "client:component-export": "MainNavigationMenu" })}`, "mobile-nav-header": ($$result3) => renderTemplate`${renderComponent($$result3, "SheetMobileNav", SheetMobileNav, { "mainNavItems": [...navMenuConfig.links], "sidebarNavItems": [
    ...navMenuConfig.OpenUSD
  ], "slot": "mobile-nav-header", "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/layout/sheet-mobile-nav", "client:component-export": "SheetMobileNav" })}`, "right-header": ($$result3) => renderTemplate`${maybeRenderHead()}<div class="flex items-center gap-x-4"> <a${addAttribute(siteConfig.links.github, "href")} target="_blank" rel="noreferrer" aria-label="github"> ${renderComponent($$result3, "Icon", $$Icon, { "name": "github", "class": "size-[22px]" })} </a> ${renderComponent($$result3, "ThemeToggle", ThemeToggle, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/theme-toggle", "client:component-export": "ThemeToggle" })} </div>` })} <main${addAttribute(cn(mainClass), "class")}> ${renderSlot($$result2, $$slots["default"])} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "E:/WEB-DEV/astro-nomy-master/src/layouts/main-layout.astro", void 0);

export { $$MainLayout as $ };
