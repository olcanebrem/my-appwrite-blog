import { c as createAstro, a as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead } from './astro/server_BNGISfs7.mjs';
import 'kleur/colors';
import { a as $$Icon, $ as $$MainLayout } from './main-layout_CdOdj119.mjs';
import { W as WaitlistForm } from './waitlist-form_BAnPFgPJ.mjs';

const $$Astro = createAstro("https://olcanebrem.com");
const $$Waitlist = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Waitlist;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Waitlist", "description": "A waiting list page with form using Astro DB.", "mainClass": "bg-background-200" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="relative flex w-full min-h-svh items-center justify-center"> <div class="px-4 py-5 sm:p-6 bg-background border rounded-xl overflow-hidden -mt-36"> <div class="flex flex-col gap-y-4 w-full max-w-sm"> <div class="space-y-3"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "stars-outline", "class": "size-10" })} <h1 class="text-2xl font-heading tracking-wide">Get early access!</h1> <p class="text-sm text-muted-foreground">
Excited to join the waitlist?
<br>
Fill out the form below to secure your spot and be the first to know
            when we launch!
<br>
Check <a href="/newsletter" class="underline">here</a> for a form with
            counter.
</p> </div> ${renderComponent($$result2, "WaitlistForm", WaitlistForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/forms/waitlist-form", "client:component-export": "WaitlistForm" })} </div> </div> </div> ` })}`;
}, "E:/WEB-DEV/astro-nomy-master/src/pages/waitlist.astro", void 0);

const $$file = "E:/WEB-DEV/astro-nomy-master/src/pages/waitlist.astro";
const $$url = "/waitlist";

export { $$Waitlist as default, $$file as file, $$url as url };
