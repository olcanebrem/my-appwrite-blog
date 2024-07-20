/* empty css                           */
import { c as createComponent, r as renderTemplate, g as renderComponent, b as createAstro, m as maybeRenderHead, a as addAttribute, F as Fragment, u as unescapeHTML } from './astro/server_BI2ss-O0.mjs';
import 'kleur/colors';
import { Query } from 'appwrite';
import { d as databases } from './appwrite_DL6PifV7.mjs';
import { a as $$Layout, $ as $$Container } from './Layout_BOH5WNIO.mjs';

const $$Astro = createAstro();
const $$postSlug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$postSlug;
  const { postSlug } = Astro2.params;
  const { documents } = await databases.listDocuments(
    "667efb7e00313876acb2",
    "6693df1800342ccd7871",
    [Query.equal("slug", String(postSlug))]
  );
  if (!documents.length) {
    return Astro2.redirect("/404");
  }
  const post = documents[0];
  const publishedDate = new Date(post.$createdAt);
  console.log("documents", documents);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${post.title} - My Blog` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<article class="prose mx-auto"> <h1 class="text-4xl font-extrabold mb-6">${post.title}</h1> <p class="text-slate-500 mb-14"> <time${addAttribute(publishedDate.toISOString(), "datetime")}>Published ${publishedDate.toLocaleDateString()}</time> </p> ${renderComponent($$result3, "Fragment", Fragment, {}, { "default": ($$result4) => renderTemplate`${unescapeHTML(post.content)}` })} </article> ` })} ` })}`;
}, "E:/WEB-DEV/my-appwrite-blog-main/src/pages/posts/[postSlug].astro", void 0);
const $$file = "E:/WEB-DEV/my-appwrite-blog-main/src/pages/posts/[postSlug].astro";
const $$url = "/posts/[postSlug]";

export { $$postSlug as default, $$file as file, $$url as url };
