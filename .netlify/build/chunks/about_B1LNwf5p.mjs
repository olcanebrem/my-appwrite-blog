import { a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from './astro/server_CpAE0SO5.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from './main-layout_ChRXTkAN.mjs';
import { $ as $$Image } from './_astro_assets_BlGe64cW.mjs';
import { B as Button, $ as $$Icon } from './button_C-qHfKLq.mjs';

const hobbies = [
  // first column
  {
    image: "https://images.pexels.com/photos/15372903/pexels-photo-15372903/free-photo-of-computer-setup-with-big-monitor-screen.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "setup desktop"
  },
  {
    image: "https://images.pexels.com/photos/1049317/pexels-photo-1049317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "friends smiles"
  },
  // second column
  {
    image: "https://images.pexels.com/photos/3712095/pexels-photo-3712095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "grey cat"
  },
  {
    image: "https://images.pexels.com/photos/9293249/pexels-photo-9293249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "home building"
  },
  {
    image: "https://images.pexels.com/photos/375467/pexels-photo-375467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "pizza laptop"
  },
  // third column
  {
    image: "https://images.pexels.com/photos/1230302/pexels-photo-1230302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "hike and sunset"
  },
  {
    image: "https://images.pexels.com/photos/5500779/pexels-photo-5500779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "chinese lantern"
  },
  // fourth column
  {
    image: "https://images.pexels.com/photos/2090644/pexels-photo-2090644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "the great wheel"
  },
  {
    image: "https://images.pexels.com/photos/7418632/pexels-photo-7418632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "dalmatian"
  }
];

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "About", "description": "Lorem ipsum dolor sit amet" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="space-y-5"> <section class="relative container max-w-screen-md mb-28 mt-16 sm:mt-20 lg:mt-28"> <div class="flex h-full flex-col justify-between"> <div class="grid gap-8 sm:grid-cols-2"> <div> <h1 class="text-4xl font-heading text-foreground">mickasmt</h1> <p class="text-base text-muted-foreground mt-0.5">
Fullstack Developer
</p> </div> <div> <p class="mb-12 text-base text-muted-foreground">
Hi there! I'm mickasmt, a web dev enthusiast with a passion for
              user interfaces.
<br>
What's up with you?
</p> <div class="flex items-center gap-3"> ${renderComponent($$result2, "Button", Button, { "className": "rounded-xl" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Icon", $$Icon, { "name": "lucide:mail", "class": "mr-2 size-4" })} <a href="mailto:">Talk with me</a> ` })} ${renderComponent($$result2, "Button", Button, { "variant": "outline", "className": "rounded-xl" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Icon", $$Icon, { "name": "lucide:briefcase", "class": "mr-2.5 size-4" })} <a href="https://mickasmt.com/" target="_blank">My works</a> ` })} </div> </div> </div> </div> </section> <div class="relative z-10 flex flex-col justify-center overflow-hidden lg:overflow-visible pb-16"> <div class="mx-auto flex w-max -translate-x-[15%] justify-center lg:w-full lg:translate-x-0"> <div class="relative z-10 mx-auto max-w-4xl px-4 md:max-w-6xl md:px-12 lg:max-w-5xl lg:px-6 xl:max-w-[80rem] xl:px-6 2xl:px-0"> <div class="grid grid-cols-4 items-center gap-4 md:gap-6">  <div class="space-y-4 md:space-y-6"> ${renderComponent($$result2, "Image", $$Image, { "class": "h-full w-auto object-cover overflow-hidden rounded-xl", "src": hobbies[0].image, "alt": hobbies[0].alt, "width": 800, "height": 1226, "loading": "eager" })} <div class="h-52 overflow-hidden rounded-xl"> ${renderComponent($$result2, "Image", $$Image, { "class": "w-full h-full object-cover", "src": hobbies[1].image, "alt": hobbies[1].alt, "width": 800, "height": 1334 })} </div> </div>  <div class="space-y-4 md:space-y-6"> <div class="h-48 overflow-hidden rounded-xl"> ${renderComponent($$result2, "Image", $$Image, { "class": "w-full h-full object-cover", "src": hobbies[2].image, "alt": hobbies[2].alt, "width": 800, "height": 983, "loading": "eager" })} </div> ${renderComponent($$result2, "Image", $$Image, { "class": "rounded-xl", "src": hobbies[3].image, "alt": hobbies[3].alt, "width": 800, "height": 1108, "loading": "eager" })} <div class="relative h-48 overflow-hidden rounded-xl"> ${renderComponent($$result2, "Image", $$Image, { "class": "w-full h-full object-cover", "src": hobbies[4].image, "alt": hobbies[4].alt, "width": 1260, "height": 750 })} </div> </div>  <div class="space-y-4 md:space-y-6"> <div class="h-56 overflow-hidden rounded-xl"> ${renderComponent($$result2, "Image", $$Image, { "class": "w-full h-full object-cover", "src": hobbies[5].image, "alt": hobbies[5].alt, "width": 800, "height": 1334, "loading": "eager" })} </div> <div class="h-80 w-full overflow-hidden rounded-xl xl:h-[28rem]"> ${renderComponent($$result2, "Image", $$Image, { "class": "w-full h-full object-cover", "src": hobbies[6].image, "alt": hobbies[6].alt, "width": 801, "height": 2477 })} </div> </div>  <div class="space-y-4 md:space-y-6"> <div class="overflow-hidden rounded-xl bg-white"> ${renderComponent($$result2, "Image", $$Image, { "src": hobbies[7].image, "alt": hobbies[7].alt, "width": 800, "height": 900, "loading": "eager" })} </div> <div class="overflow-hidden rounded-xl bg-white"> ${renderComponent($$result2, "Image", $$Image, { "src": hobbies[8].image, "alt": hobbies[8].alt, "width": 800, "height": 900 })} </div> </div> </div> </div> </div> </div> </section> ` })}`;
}, "E:/WEB-DEV/astro-nomy-master/src/pages/about.astro", void 0);

const $$file = "E:/WEB-DEV/astro-nomy-master/src/pages/about.astro";
const $$url = "/about";

export { $$About as default, $$file as file, $$url as url };
