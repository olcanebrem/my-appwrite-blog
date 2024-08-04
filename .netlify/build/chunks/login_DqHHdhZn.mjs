import { a as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead } from './astro/server_BNGISfs7.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './Layout_ChQ-04p7.mjs';
import { $ as $$MainLayout } from './main-layout_CdOdj119.mjs';

const $$Login = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Layout", $$Layout, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="login">  <h1>Login</h1> <br> <form id="login-form"> <input type="email" id="email" autocomplete="email" placeholder="E-mail" required><br><br> <br> <input type="password" id="password" placeholder="password" required><br><br> <br> <button type="submit"> Sign In </button> </form> <br> <div class="quote"> <center> <span>Kaydın Yokmu?</span> <span>Hemen Oluştur!</span> </center> </div> <div style="text-align: center;"> <form action="/signup" accept-charset="UTF-8" method="POST"> <br> <button type="submit" class="py-2center; flex; px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sign Up</button> </form> </div> </div> ` })}` })}`;
}, "E:/WEB-DEV/astro-nomy-master/src/pages/login.astro", void 0);

const $$file = "E:/WEB-DEV/astro-nomy-master/src/pages/login.astro";
const $$url = "/login";

export { $$Login as default, $$file as file, $$url as url };
