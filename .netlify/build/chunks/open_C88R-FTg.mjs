import { a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, d as addAttribute } from './astro/server_CpAE0SO5.mjs';
import 'kleur/colors';
import $$Layout from './layout_CHMeqVqD.mjs';
import { $ as $$MainLayout } from './main-layout_ChRXTkAN.mjs';
import { W as WaitlistForm } from './waitlist-form_DtnjWsPf.mjs';
import { $ as $$Icon } from './button_C-qHfKLq.mjs';
/* empty css                        */

const $$Open = createComponent(($$result, $$props, $$slots) => {
  const images = [
    "https://cdna.artstation.com/p/assets/covers/images/072/122/530/smaller_square/olcan-ebrem-olcan-ebrem-layer-7-copy.jpg?1706662283",
    "https://cdnb.artstation.com/p/assets/covers/images/061/731/229/smaller_square/olcan-ebrem-olcan-ebrem-1image.jpg?1681486448",
    "https://cdnb.artstation.com/p/assets/images/images/037/926/239/20210522113420/smaller_square/olcan-ebrem-anime4.jpg?1621701260",
    "https://cdnb.artstation.com/p/assets/images/images/048/721/427/20220423201858/smaller_square/olcan-ebrem-stormwarfare-2-jpg.jpg?1650763138",
    "https://cdnb.artstation.com/p/assets/images/images/037/428/367/20210506162539/smaller_square/olcan-ebrem-1581849015650-jpg-02.jpg?1620336339",
    "https://cdnb.artstation.com/p/assets/images/images/033/124/197/smaller_square/olcan-ebrem-h2anfendi.jpg?1608493439",
    "https://cdnb.artstation.com/p/assets/images/images/027/627/215/20200613145525/smaller_square/olcan-ebrem-sert-cakici.jpg?1592078125",
    "https://cdna.artstation.com/p/assets/images/images/031/816/370/20201106070353/smaller_square/olcan-ebrem-hukumdar-recovered.jpg?1604667833",
    "https://cdna.artstation.com/p/assets/images/images/026/375/746/20200504124800/smaller_square/olcan-ebrem-hukumet.jpg?1588614481",
    "https://cdnb.artstation.com/p/assets/covers/images/025/694/995/20200411153505/smaller_square/olcan-ebrem-ka2ban-jpg.jpg?1586637306",
    "https://cdnb.artstation.com/p/assets/images/images/023/114/823/20200104084458/smaller_square/olcan-ebrem-artboard-6.jpg?1578149098"
    // Daha fazla resim ekleyin
  ];
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Waitlist", "description": "portfolio", "mainClass": "bg-background-200", "data-astro-cid-sejuczmy": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Layout", $$Layout, { "data-astro-cid-sejuczmy": true }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="artstation-clone-container" data-astro-cid-sejuczmy> <div class="grid-container" data-astro-cid-sejuczmy> <div class="grid" data-astro-cid-sejuczmy> ${images.map((src) => renderTemplate`<img${addAttribute(src, "src")} alt="Art Image" data-astro-cid-sejuczmy>`)} </div> </div> </div> <link rel="stylesheet" href="/src/styles/globals.css"> <div class="relative flex w-full min-h-svh items-center justify-center" data-astro-cid-sejuczmy> <div class="px-4 py-5 sm:p-6 bg-background border rounded-xl overflow-hidden -mt-36" data-astro-cid-sejuczmy> <div class="flex flex-col gap-y-4 w-full max-w-sm" data-astro-cid-sejuczmy> <div class="space-y-3" data-astro-cid-sejuczmy> ${renderComponent($$result3, "Icon", $$Icon, { "name": "stars-outline", "class": "size-10", "data-astro-cid-sejuczmy": true })} <h1 class="text-2xl font-heading tracking-wide" data-astro-cid-sejuczmy>Get early access!</h1> <p class="text-sm text-muted-foreground" data-astro-cid-sejuczmy>
Excited to join the waitlist?
<br data-astro-cid-sejuczmy>
Fill out the form below to secure your spot and be the first to know
            when we launch!
<br data-astro-cid-sejuczmy>
Check <a href="/newsletter" class="underline" data-astro-cid-sejuczmy>here</a> for a form with
            counter.
</p> </div> ${renderComponent($$result3, "WaitlistForm", WaitlistForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/forms/waitlist-form", "client:component-export": "WaitlistForm", "data-astro-cid-sejuczmy": true })} </div> </div> </div> ` })} ` })}`;
}, "E:/WEB-DEV/astro-nomy-master/src/pages/open.astro", void 0);

const $$file = "E:/WEB-DEV/astro-nomy-master/src/pages/open.astro";
const $$url = "/open";

export { $$Open as default, $$file as file, $$url as url };
