/* empty css                         */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, a as addAttribute } from './astro/server_5i4brpgU.mjs';
import 'kleur/colors';
import { d as databases, $ as $$Container, a as $$Layout } from './Layout_iYsHysu5.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const { documents: posts } = await databases.listDocuments(
    "667efb7e00313876acb2",
    "6693df1800342ccd7871"
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "My Blog" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<h1 class="sr-only">Blog Posts</h1> <ul> ${posts.map((post) => {
    return renderTemplate`<li class="mb-12 last:mb-0"> <h2 class="text-3xl font-semibold mb-4"> <a class="hover:text-blue-500 hover:underline"${addAttribute(`/posts/${post.slug}`, "href")}> ${post.title} </a> </h2> <p class="text-sm text-slate-500 mb-4"> ${new Date(post.$createdAt).toLocaleDateString()} </p> <p> ${post.excerpt} </p> </li>`;
  })} </ul> ` })} ` })}`;
}, "E:/WEB-DEV/my-appwrite-blog-main/src/pages/index.astro", void 0);
const $$file = "E:/WEB-DEV/my-appwrite-blog-main/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
