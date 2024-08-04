import { a as createComponent, r as renderTemplate, m as maybeRenderHead } from './astro/server_BNGISfs7.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$LoginForm = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<form action="/api/session" accept-charset="UTF-8" method="POST"> <div> <h2> <label for="email">Email:</label> </h2> <br> <input type="email" name="email" required> </div> <div> <h2> <label for="password">Password:</label> </h2> <br> <input type="password" name="password" required> </div> <br> <button type="submit">Login</button> </form>
---`;
}, "E:/WEB-DEV/astro-nomy-master/src/pages/components/LoginForm.astro", void 0);

const $$file = "E:/WEB-DEV/astro-nomy-master/src/pages/components/LoginForm.astro";
const $$url = "/components/LoginForm";

export { $$LoginForm as default, $$file as file, $$url as url };
