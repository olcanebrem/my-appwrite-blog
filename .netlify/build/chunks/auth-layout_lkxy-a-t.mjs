import { a as createComponent, r as renderTemplate, m as maybeRenderHead, c as createAstro, b as renderComponent, e as renderSlot } from './astro/server_CpAE0SO5.mjs';
import 'kleur/colors';
import 'clsx';
import { s as siteConfig } from './site_tOMiNNJo.mjs';
import { T as ThemeToggle, $ as $$Icon, b as $$BaseLayout } from './button_C-qHfKLq.mjs';

const $$UserAuthForm = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="h-56 border rounded-lg flex justify-center items-center text-muted-foreground">Auth form soon</div>`;
}, "E:/WEB-DEV/astro-nomy-master/src/components/forms/user-auth-form.astro", void 0);

const $$Astro = createAstro("https://astro-nomy.vercel.app");
const $$AuthLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AuthLayout;
  const { title, description } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container relative flex min-h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0"> <div class="absolute right-4 top-4 md:right-8 md:top-8"> ${renderSlot($$result2, $$slots["right-corner"])} </div> <div class="absolute right-8 bottom-4 md:right-12 md:bottom-8"> ${renderComponent($$result2, "ThemeToggle", ThemeToggle, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@/components/theme-toggle", "client:component-export": "ThemeToggle" })} </div> <div class="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex"> <div class="absolute inset-0 bg-foreground dark:bg-background/50"></div> <div class="relative z-20 flex items-center text-lg font-medium"> <a href="/" class="hidden items-center space-x-2 md:flex"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "stars-outline", "class": "size-8" })} <span class="hidden font-bold sm:inline-block"> ${siteConfig.name} </span> </a> </div> <div class="relative z-20 mt-auto"> <blockquote class="space-y-2"> <p class="text-lg">
&ldquo;This library has saved me countless hours of work and helped
            me deliver stunning designs to my clients faster than ever
            before.&rdquo;
</p> <footer class="text-sm">Sofia Davis</footer> </blockquote> </div> </div> <div class="md:p-8"> ${renderSlot($$result2, $$slots["default"])} </div> </div> ` })}`;
}, "E:/WEB-DEV/astro-nomy-master/src/layouts/auth-layout.astro", void 0);

export { $$UserAuthForm as $, $$AuthLayout as a };
