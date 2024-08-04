import { a as createComponent, r as renderTemplate, e as renderComponent, b as addAttribute, m as maybeRenderHead } from './astro/server_BNGISfs7.mjs';
import 'kleur/colors';
import { d as databases } from './appwrite_guZ3eTnd.mjs';
import { $ as $$Container } from './Container_BTSHVv9T.mjs';
import { s as siteMetadata } from './siteMetadata_J3RHti5C.mjs';
import { $ as $$MainLayout } from './main-layout_CdOdj119.mjs';
import { $ as $$Layout } from './Layout_ChQ-04p7.mjs';
/* empty css                         */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const MAX_DISPLAY = 10;
  const response = await databases.listDocuments(
    "667efb7e00313876acb2",
    "6693df1800342ccd7871"
  );
  const { documents: posts } = response;
  const displayedPosts = posts.reverse().slice(0, MAX_DISPLAY);
  console.log("Displaying posts");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "New Post - My Blog", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "MainLayout", $$MainLayout, { "title": "My Blog", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Container", $$Container, { "data-astro-cid-j7pv25f6": true }, { "default": ($$result4) => renderTemplate(_a || (_a = __template([' <link rel="stylesheet" href="src/styles/global.css"> ', `<img src="https://global.discourse-cdn.com/business6/uploads/aousd/original/1X/2c0bb0182eb513b680d216c19a1f308a15cac121.png" alt="Film TV Video Logo" data-astro-cid-j7pv25f6> <h1 class="text-balance font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[66px]" data-astro-source-file="E:/WEB-DEV/astro-nomy-master/src/components/sections/hero-landing.astro" data-astro-source-loc="33:219" data-astro-source-loc="24:6" data-astro-cid-j7pv25f6>
Kick off with a bang with <span class="font-extrabold" data-astro-source-file="E:/WEB-DEV/astro-nomy-master/src/components/sections/hero-landing.astro" data-astro-source-loc="34:192" data-astro-source-loc="26:64" data-astro-cid-j7pv25f6>
SaaS
</span> </h1> <h2 data-astro-cid-j7pv25f6>You've been welcomed by <span class="text-gradient" data-astro-cid-j7pv25f6>Olcan</span></h2> <link rel="stylesheet" href="src/styles/global.css"> <div class="divide-y divide-gray-200 dark:divide-gray-700" data-astro-cid-j7pv25f6> <div class="space-y-2 pb-8 pt-6 md:space-y-5" data-astro-cid-j7pv25f6> <h1 class="text-3xl font-extrabold leading-9 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14" data-astro-cid-j7pv25f6>
Latest
</h1> <p class="text-lg leading-7 text-gray-500 dark:text-gray-400" data-astro-cid-j7pv25f6> `, ' </p> </div> <p class="instructions" data-astro-cid-j7pv25f6>\nTo get started, open the directory <code data-astro-cid-j7pv25f6>src/pages</code> in your project.<br data-astro-cid-j7pv25f6> <strong data-astro-cid-j7pv25f6>Code Challenge:</strong> Tweak the "Welcome to Cloud" message above.\n</p> <ul class="instructions divide-y divide-gray-200 dark:divide-gray-700" data-astro-cid-j7pv25f6> ', " ", " </ul> </div> ", '<div id="toast" class="toast" data-astro-cid-j7pv25f6> <div class="toast-content" data-astro-cid-j7pv25f6> <div class="message" data-astro-cid-j7pv25f6> <div class="text-sm font-semibold" data-astro-cid-j7pv25f6>Siteye hoş geldin</div> <div class="text-sm opacity-90" data-astro-cid-j7pv25f6>Sen üye olana kadar seni ziyaretçi pozisyonunda tutuyoruz.</div> </div> <button type="button" class="btn-done" data-astro-cid-j7pv25f6>Tamam</button> <button type="button" class="btn-close" data-astro-cid-j7pv25f6> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x h-4 w-4" data-astro-cid-j7pv25f6> <path d="M18 6 6 18" data-astro-cid-j7pv25f6></path> <path d="m6 6 12 12" data-astro-cid-j7pv25f6></path> </svg> </button> </div> </div> ', ' <script type="module" src="src/lib/toast.js"></script> '])), maybeRenderHead(), siteMetadata.description, displayedPosts.length === 0 && renderTemplate`<li data-astro-cid-j7pv25f6>No posts found.</li>`, displayedPosts.map((post) => {
    const { username, slug, $createdAt, title } = post;
    return renderTemplate`<li class="py-4 " data-astro-cid-j7pv25f6> <article data-astro-cid-j7pv25f6> <div class="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0" data-astro-cid-j7pv25f6> <dl data-astro-cid-j7pv25f6> <dt class="sr-only" data-astro-cid-j7pv25f6>Published on</dt> <dd class="text-base font-medium leading-6 text-gray-500 dark:text-gray-400" data-astro-cid-j7pv25f6> ${new Date($createdAt).toLocaleDateString()} </dd> </dl> <div class="space-y-2 xl:col-span-3" data-astro-cid-j7pv25f6> <div data-astro-cid-j7pv25f6> <div data-astro-cid-j7pv25f6> <h2 class="text-2xl font-bold leading-8 tracking-tight" data-astro-cid-j7pv25f6> <a${addAttribute(`/posts/${slug}`, "href")} data-astro-cid-j7pv25f6>${title}</a> </h2> </div> <div class="prose max-w-none text-gray-500 dark:text-gray-400" data-astro-cid-j7pv25f6> ${post.summary} </div> </div> <div class="text-base font-medium leading-6" data-astro-cid-j7pv25f6> <a${addAttribute(`/posts/${slug}`, "href")} class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"${addAttribute(`Read more: "${title}"`, "aria-label")} data-astro-cid-j7pv25f6>
Read more &rarr;
</a> <div data-astro-cid-j7pv25f6> <h2 id="usernameDisplay" data-astro-cid-j7pv25f6>${username}</h2> </div> </div> </div> </div> </article> </li>`;
  }), posts.length > MAX_DISPLAY && renderTemplate`<div class="flex justify-end text-base font-medium leading-6" data-astro-cid-j7pv25f6> <a href="/blog" class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" aria-label="All posts" data-astro-cid-j7pv25f6>
All Posts &rarr;
</a> </div>`, renderComponent($$result4, "MainLayout", $$MainLayout, { "title": "Waitlist", "description": "portfolio", "mainClass": "bg-background-200", "data-astro-cid-j7pv25f6": true })) })} ` })} ` })}`;
}, "E:/WEB-DEV/astro-nomy-master/src/pages/index.astro", void 0);
const $$file = "E:/WEB-DEV/astro-nomy-master/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
