import { a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, d as addAttribute } from './astro/server_CpAE0SO5.mjs';
import 'kleur/colors';
import { $ as $$Icon, a as cn, d as buttonVariants } from './button_C-qHfKLq.mjs';
import { $ as $$MainLayout } from './main-layout_ChRXTkAN.mjs';

const $$Pricing = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Pricing", "mainClass": "flex-1 bg-background-200" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="container flex flex-col gap-6 py-8 md:max-w-[64rem] md:py-12 lg:py-24"> <div class="mx-auto flex w-full flex-col gap-4 md:max-w-[58rem]"> <h2 class="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
Simple, transparent pricing
</h2> <p class="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
Unlock all features including unlimited posts for your blog.
</p> </div> <div class="grid w-full items-start gap-10 rounded-3xl overflow-hidden border p-10 md:grid-cols-[1fr_200px] bg-background"> <div class="grid gap-6"> <h3 class="text-xl font-bold sm:text-2xl">
What&apos;s included in the PRO plan
</h3> <ul class="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2"> <li class="flex items-center"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "lucide:check", "class": "mr-2 size-4" })} Unlimited Posts
</li> <li class="flex items-center"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "lucide:check", "class": "mr-2 size-4" })} Unlimited Users
</li> <li class="flex items-center"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "lucide:check", "class": "mr-2 size-4" })} Custom domain
</li> <li class="flex items-center"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "lucide:check", "class": "mr-2 size-4" })} Dashboard Analytics
</li> <li class="flex items-center"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "lucide:check", "class": "mr-2 size-4" })} Access to Discord
</li> <li class="flex items-center"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "lucide:check", "class": "mr-2 size-4" })} Premium Support
</li> </ul> </div> <div class="flex flex-col gap-4 text-center"> <div> <h4 class="text-7xl font-bold">$19</h4> <p class="text-sm font-medium text-muted-foreground">
Billed Monthly
</p> </div> <a href="/login"${addAttribute(cn(buttonVariants({ size: "lg" })), "class")}>
Get Started
</a> </div> </div> <div class="mx-auto flex w-full max-w-[58rem] flex-col gap-4"> <p class="max-w-[85%] leading-normal text-muted-foreground sm:leading-7">
OpenUSD is a demo app.${" "} <strong>You can test the upgrade and won&apos;t be charged.</strong> </p> </div> </section> ` })}`;
}, "E:/WEB-DEV/astro-nomy-master/src/pages/pricing.astro", void 0);

const $$file = "E:/WEB-DEV/astro-nomy-master/src/pages/pricing.astro";
const $$url = "/pricing";

export { $$Pricing as default, $$file as file, $$url as url };
