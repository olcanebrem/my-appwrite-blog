/* empty css                           */
import { c as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead, a as addAttribute } from './astro/server_BI2ss-O0.mjs';
import 'kleur/colors';
import { d as databases } from './appwrite_DL6PifV7.mjs';
import { $ as $$Container, a as $$Layout } from './Layout_BOH5WNIO.mjs';

const siteMetadata = {
    title: 'My Blog',
    description: 'A blog about various topics.',
    author: 'Your Name',
    locale: 'en-US',
    newsletter: {
      provider: 'provider-name' // Örneğin 'mailchimp'
    }
  };

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const { documents: posts } = await databases.listDocuments(
    "667efb7e00313876acb2",
    "6693df1800342ccd7871"
  );
  const MAX_DISPLAY = 10;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "My Blog" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="divide-y divide-gray-200 dark:divide-gray-700"> <div class="space-y-2 pb-8 pt-6 md:space-y-5"> <h1 class="text-3xl font-extrabold leading-9 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
Latest
</h1> <p class="text-lg leading-7 text-gray-500 dark:text-gray-400"> ${siteMetadata.description} </p> </div> <ul class="divide-y divide-gray-200 dark:divide-gray-700"> ${posts.length === 0 && renderTemplate`<li>No posts found.</li>`} ${posts.slice(0, MAX_DISPLAY).reverse().map((post) => {
    const { slug, $createdAt, title } = post;
    return renderTemplate`<li${addAttribute(slug, "key")} class="py-4"> <article> <div class="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0"> <dl> <dt class="sr-only">Published on</dt> <dd class="text-base font-medium leading-6 text-gray-500 dark:text-gray-400"> <time${addAttribute($createdAt, "dateTime")}> ${new Date($createdAt).toLocaleDateString()} </time> </dd> </dl> <div class="space-y-2 xl:col-span-3"> <div> <div> <h2 class="text-2xl font-bold leading-8 tracking-tight"> <a${addAttribute(`/posts/${slug}`, "href")}> ${title} </a> </h2> </div> <div class="prose max-w-none text-gray-500 dark:text-gray-400"> ${post.summary} </div> </div> <div class="text-base font-medium leading-6"> <a${addAttribute(`/posts/${slug}`, "href")} class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"${addAttribute(`Read more: "${title}"`, "aria-label")}>
Read more &rarr;
</a> </div> </div> </div> </article> </li>`;
  })} </ul> </div> ${posts.length > MAX_DISPLAY && renderTemplate`<div class="flex justify-end text-base font-medium leading-6"> <a href="/blog" class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" aria-label="All posts">
All Posts &rarr;
</a> </div>`}` })} ` })} <link rel="stylesheet" href="/styles/global.css"> <link rel="stylesheet" href="/styles/style.css">`;
}, "E:/WEB-DEV/my-appwrite-blog-main/src/pages/index.astro", void 0);
const $$file = "E:/WEB-DEV/my-appwrite-blog-main/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
