import { a as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead } from './astro/server_BNGISfs7.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './Layout_ChQ-04p7.mjs';

const $$Signup = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="login"> <form id="signup-form"> <h1>Sign Up</h1> <br> <div class="box"> <input placeholder="Username" type="text" name="username" id="username" required> </div> <br> <div class="box"> <input placeholder="E-mail" type="email" name="email" id="email" required> </div> <br> <div class="box"> <input placeholder="Password" type="password" name="password" id="password" required> </div> <br> <div class="box"> <button type="submit" class="py-2center; flex; px-4 border border-transparent shadow-sm text-sm font-medium rounded-md 
          text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 
          focus:ring-indigo-500">
Sign Up
</button> </div> </form> </div>  ` })}`;
}, "E:/WEB-DEV/astro-nomy-master/src/pages/signup.astro", void 0);

const $$file = "E:/WEB-DEV/astro-nomy-master/src/pages/signup.astro";
const $$url = "/signup";

export { $$Signup as default, $$file as file, $$url as url };
