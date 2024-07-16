/* empty css                         */
import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, m as maybeRenderHead } from './astro/server_5i4brpgU.mjs';
import 'kleur/colors';
import { ID } from 'appwrite';
import { marked } from 'marked';
import { d as databases, $ as $$Container, a as $$Layout } from './Layout_iYsHysu5.mjs';

const $$Astro = createAstro();
const $$New = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$New;
  if (Astro2.request.method === "POST") {
    const formData = await Astro2.request.formData();
    const data = {
      title: String(formData.get("title")),
      slug: String(formData.get("slug")),
      content: await marked(String(formData.get("content"))),
      excerpt: String(formData.get("excerpt"))
    };
    const results = await databases.createDocument(
      "667efb7e00313876acb2",
      "6693df1800342ccd7871",
      ID.unique(),
      data
    );
    return Astro2.redirect(`/posts/${results.slug}`);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "New Post - My Blog" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<h1 class="text-2xl font-bold mb-6">New Post</h1> <form method="POST"> <div class="mb-6"> <label class="block text-sm font-semibold mb-3" for="title">Title</label> <input id="title" class="block w-full text-slate-900 border-slate-400 rounded focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" type="text" name="title"> </div> <div class="mb-6"> <label class="block text-sm font-semibold mb-3" for="slug">Slug</label> <input id="slug" class="block w-full text-slate-900 border-slate-400 rounded focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" type="text" name="slug"> </div> <div class="mb-6"> <label class="block text-sm font-semibold mb-1" for="content">Content</label> <p class="text-xs text-slate-600 italic mb-3">Supports Markdown</p> <textarea id="content" class="block w-full min-h-80 text-slate-900 border-slate-400 rounded focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" name="content"></textarea> </div> <div class="mb-6"> <label class="block text-sm font-semibold mb-3" for="excerpt">Excerpt</label> <input id="excerpt" class="block w-full text-slate-900 border-slate-400 rounded focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" type="text" name="excerpt"> </div> <button class="inline-block rounded py-2.5 px-6 text-sm font-bold uppercase text-white bg-slate-600 hover:bg-slate-500 dark:bg-slate-500 dark:hover:bg-slate-400">Submit</button> </form> ` })} ` })}`;
}, "E:/WEB-DEV/my-appwrite-blog-main/src/pages/posts/new.astro", void 0);
const $$file = "E:/WEB-DEV/my-appwrite-blog-main/src/pages/posts/new.astro";
const $$url = "/posts/new";

export { $$New as default, $$file as file, $$url as url };
