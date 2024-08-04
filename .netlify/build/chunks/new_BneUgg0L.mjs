import { a as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead } from './astro/server_BNGISfs7.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './Layout_ChQ-04p7.mjs';
import { $ as $$Container } from './Container_BTSHVv9T.mjs';
import { $ as $$MainLayout } from './main-layout_CdOdj119.mjs';
/* empty css                       */

const $$New = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "New Post - My Blog", "data-astro-cid-2yx3xa5l": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "MainLayout", $$MainLayout, { "data-astro-cid-2yx3xa5l": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Container", $$Container, { "data-astro-cid-2yx3xa5l": true }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<div class="instructions" data-astro-cid-2yx3xa5l> <h2 class="text-2xl font-bold mb-5" data-astro-cid-2yx3xa5l>New Post</h2>  <form id="post-form" method="POST" data-astro-cid-2yx3xa5l> <div class="mb-6" data-astro-cid-2yx3xa5l> <label class="block text-sm font-semibold mb-3" for="title" data-astro-cid-2yx3xa5l>Title</label> <input id="title" class="block w-full text-slate-900 border-slate-400 rounded focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" type="text" name="title" data-astro-cid-2yx3xa5l> </div> <div class="mb-6" data-astro-cid-2yx3xa5l> <label class="block text-sm font-semibold mb-3" for="slug" data-astro-cid-2yx3xa5l>Slug</label> <input id="slug" class="block w-full text-slate-900 border-slate-400 rounded focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" type="text" name="slug" data-astro-cid-2yx3xa5l> </div> <div class="mb-6" data-astro-cid-2yx3xa5l> <label class="block text-sm font-semibold mb-1" for="content" data-astro-cid-2yx3xa5l>Content</label> <p class="text-xs text-slate-600 italic mb-3" data-astro-cid-2yx3xa5l>Supports Markdown</p> <textarea id="content" class="block w-full min-h-80 text-slate-900 border-slate-400 rounded focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" name="content" data-astro-cid-2yx3xa5l></textarea> </div> <button class="inline-block rounded py-2.5 px-6 text-sm font-bold uppercase text-white bg-slate-600 hover:bg-slate-500 dark:bg-slate-500 dark:hover:bg-slate-400" data-astro-cid-2yx3xa5l>Submit</button> </form> </div> ` })} ` })} ` })}`;
}, "E:/WEB-DEV/astro-nomy-master/src/pages/posts/new.astro", void 0);

const $$file = "E:/WEB-DEV/astro-nomy-master/src/pages/posts/new.astro";
const $$url = "/posts/new";

export { $$New as default, $$file as file, $$url as url };
